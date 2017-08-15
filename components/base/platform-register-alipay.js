/**
 * 说明:
 * platform.js中关于平台方法的复写
 * 当前处于平台初始化完毕阶段, window.AlipayJSBridge等私有变量存在且可用
 * */
import { isArray } from '../util/util'

export default function (plt) {
  // 设置网络类型
  // 网络环境发生变化，可调用getNetworkType接口获取详细信息
  window.AlipayJSBridge.call('getNetworkType', (result) => {
    /**
     * result 参数
     * @param {boolean} result.networkAvailable - true              | true              | false
     * @param {boolean} result.networkInfo      - WIFI              | 3G                | NOTREACHABLE
     * @param {boolean} result.err_msg          - network_type:wifi | network_type:wwan | network_type:fail
     * @param {boolean} result.networkType      - wifi              | wwan              | fail
     * */
    plt.setNetworkType(result.networkInfo.toString().toLowerCase())
  })

  // 注册平台退出方法 `exitApp`
  plt.exitApp = () => {
    window.AlipayJSBridge.call('exitApp')
  }

  // 注册平台 setTitle 方法, 参数在platform.js中
  plt.setTitle = (titleInfo) => {
    window.AlipayJSBridge.call('setTitle', titleInfo)
  }

  // actionSheet
  plt.actionSheet = (options) => {
    if (options && options.buttons && isArray(options.buttons) && options.buttons.length < 9) {
      console.info('ActionSheet 组件使用Alipay模式!')
      let buttons = []
      let cancelButton = {
        text: '取消',
        role: 'cancel',
        handler: () => {}
      }
      let destructiveButtonIndex = -1
      for (let i = 0; options.buttons.length > i; i++) {
        if (options.buttons[i].role === 'cancel') {
          cancelButton = options.buttons[i]
          options.buttons.splice(i, 1)
          i--
        } else if (options.buttons[i].role === 'destructive') {
          destructiveButtonIndex = i
          buttons.push(options.buttons[i].text)
        } else {
          buttons.push(options.buttons[i].text)
        }
      }
      options.buttons.push(cancelButton)
      window.AlipayJSBridge.call('actionSheet', {
        title: options.title || '',
        btns: buttons || [],
        cancelBtn: cancelButton.text || '取消',
        destructiveBtnIndex: destructiveButtonIndex || -1
      }, function (res) {
        // index标示用户点击的按钮，在actionSheet中的位置，从0开始
        if (res.index !== -1) {
          options.buttons[res.index] && options.buttons[res.index].handler && options.buttons[res.index].handler()
        } else {
          cancelButton.handler && cancelButton.handler()
        }
      })
      return true
    }
    return false
  }

  // alert
  plt.alert = (options) => {
    // alert
    if (options.buttons.length === 1) {
      console.debug('Alert 组件使用Alipay模式!')
      window.AlipayJSBridge.call('alert', {
        title: options.title || '',
        message: options.message || '',
        button: options.buttons[0].text || '确定'
      }, function () {
        options.buttons[0] && options.buttons[0].handler && options.buttons[0].handler()
      })
      return true
    }

    // Confirm
    if (options.buttons.length === 2 && !options.inputs) {
      console.debug('Confirm 组件使用Alipay模式!')
      let cancelButton = {}
      let confirmButton = {}
      options.buttons.forEach((button) => {
        if (button.role === 'cancel') {
          cancelButton = button
        } else {
          confirmButton = button
        }
      })
      window.AlipayJSBridge.call('confirm', {
        title: options.title || '',
        message: options.message || '',
        okButton: confirmButton.text || '确定',
        cancelButton: cancelButton.text || '取消'
      }, function (result) {
        if (result.ok) {
          confirmButton.handler && confirmButton.handler()
        } else {
          cancelButton.handler && cancelButton.handler()
        }
      })
      return true
    }

    // prompt 模式
    if (options.buttons.length === 2 && options.inputs && options.inputs.length === 1 && (options.inputs[0].type !== 'radio' || options.inputs[0].type !== 'checkbox')) {
      console.info('Prompt 组件使用Alipay模式!')
      let cancelButton = {}
      let confirmButton = {}
      options.buttons.forEach((button) => {
        if (button.role === 'cancel') {
          cancelButton = button
        } else {
          confirmButton = button
        }
      })
      window.AlipayJSBridge.call('prompt', {
        title: options.title || '',
        message: options.message || '',
        okButton: confirmButton.text || '确定',
        cancelButton: cancelButton.text || '取消',
        placeholder: options.inputs[0].placeholder
      }, function (result) {
        /**
         * @param {object} result - 结果
         * @param {boolean} result.ok - 用户是否点击确定
         * @param {string} result.inputValue - 用户输入的内容
         * */
        if (result.ok) {
          confirmButton.handler && confirmButton.handler({[options.inputs[0].name]: result.inputValue})
        } else {
          cancelButton.handler && cancelButton.handler({[options.inputs[0].name]: result.inputValue})
        }
      })
      return true
    }

    return false
  }
}
