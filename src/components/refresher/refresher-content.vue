<template>
    <div class="ion-refresher-content">
        <div class="refresher-pulling">
            <div class="refresher-pulling-icon" v-if="pullingIcon">
                <vm-icon :name="pullingIcon"></vm-icon>
            </div>
            <div class="refresher-pulling-text" v-html="pullingText" v-if="pullingText"></div>
        </div>
        <div class="refresher-refreshing">
            <div class="refresher-refreshing-icon">
                <vm-spinner :name="refreshingSpinner"></vm-spinner>
            </div>
            <div class="refresher-refreshing-text" v-html="refreshingText" v-if="refreshingText"></div>
        </div>
    </div>
</template>
<script type="text/javascript">
  /**
   * @component Refresher/RefresherContent
   * @description
   *
   * ## 数据加载 / RefresherContent下拉刷新组件的指示器
   *
   * 这个组件是与Refresher组件配合使用的.
   *
   * @props {String} [pullingIcon='arrow-down'] - 下拉的icon
   * @props {String} [pullingText='下拉刷新'] - 下拉刷新的文字
   * @props {String} [refreshingSpinner='ios'] - 刷新的icon
   * @props {String} [refreshingText='正在刷新'] -正在刷新的文字
   *
   * @see component:Refresher
   * @demo #/refresher
   * */
  import Icon from '../icon/index'
  import Spinner from '../spinner/index'
  export default{
    name: 'vm-refresher-content',
    props: {
      pullingIcon: {
        type: String,
        default () { return this.$config && this.$config.get('onPullIcon', 'arrow-down') || 'arrow-down' }
      },
      pullingText: {
        type: String,
        default: '下拉刷新'
      },
      refreshingSpinner: {
        type: String,
        default () { return this.$config && this.$config.get('onRefreshingSpinner', this.$config.get('spinner', 'ios')) || 'ios' }
      },
      refreshingText: {
        type: String,
        default: '正在刷新'
      }
    },
    components: {
      Icon, Spinner
    }
  }
</script>
