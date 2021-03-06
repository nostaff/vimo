<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>City</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-content class="outer-content" ref="content" :enableJsScroll="enableJsScroll">
            <vm-scroll :probeType="3" ref="scroll" class="scrollBox">
                <vm-list>
                    <vm-item-group v-for="(classify,index) in cityList" :key="index">
                        <vm-item-divider sticky color="light" class="itemGroup" :id="classify.name | getClassifyId">
                            {{classify.name}}
                        </vm-item-divider>
                        <vm-item v-for="city in classify.cities" :key="city.cityid">{{city.name}}</vm-item>
                    </vm-item-group>
                </vm-list>
            </vm-scroll>
            <div slot="fixedTop" class="shortcut" ref="shortcut"
                 @touchstart="onTouchShortcut"
                 @touchmove="onTouchShortcut">
                <div class="shortcut__item" :data-id="item" v-for="item in shortcutList">{{item.name}}</div>
            </div>
        </vm-content>
    </vm-page>
</template>
<style scoped lang="scss">
    .scrollBox {
        height: 100%;
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        overflow: hidden;
    }

    .itemGroup {
        font-size: 14px;
    }

    .shortcut {
        display: flex;
        justify-content: center;
        align-items: flex-end;
        position: absolute;
        top: 50%;
        right: 0;
        flex-direction: column;
        width: 46px;
        padding-right: 2px;
        transform: translateY(-50%);
        z-index: 999;
        .shortcut__item {
            display: flex;
            justify-content: center;
            align-items: center;
            height: 16px;
            width: 16px;
            font-size: 12px;
        }
    }

    .fade-enter-active, .fade-leave-active {
        transition: opacity .2s
    }

    .fade-enter, .fade-leave-active {
        transition-delay: 200ms;
        opacity: 0
    }
</style>
<script type="text/javascript">
  import CITY_LIST from './cityList'
  import { pointerCoord, clamp } from '../../../../src/util/util'
  export default{
    name: 'cityList',
    data () {
      return {
//        isTouching: false,      // 正在touching shortcut
//        selectedId: null,       // 当前选择的id
        enableJsScroll: false,  // scroll引擎
        shortcutMatrix: null,   // shortcutElement的尺寸矩阵
        cityList: CITY_LIST,    // 数据源
        shortcutList: []        // shortcut 的数组 A->Z
      }
    },
    filters: {
      getClassifyId (name) {
        return 'city-' + name.substr(0, 1)
      }
    },
    computed: {
      scrollComponent () {
        return this.$refs.scroll
      },
      shortcutElement () {
        return this.$refs.shortcut
      },
      contentComponent () {
        return this.$refs.content
      }
    },
    methods: {
      /**
       * 触摸开始和移动
       * */
      onTouchShortcut (ev) {
        ev.preventDefault()
        ev.stopPropagation()

//        this.isTouching = true
        let index = this.getSelectedIndex(ev)
//        this.selectedId = this.shortcutList[index].name
        this.scrollComponent.jsScrollInstance.scrollTo(0, this.shortcutList[index].top * -1, 0)
      },

      /**
       * 由数据初始化 shortcut
       * */
      initShortCut () {
        this.cityList.forEach((group) => {
          var name = group.name.substr(0, 1)
          this.shortcutList.push({
            name: name,
            top: 0
          })
        })
      },

      /**
       * 根据传入的ev值获取当前在Shortcut上点击的是第几个item
       * */
      getSelectedIndex (ev) {
        let point = pointerCoord(ev)
        let index = parseInt((point.y - this.shortcutMatrix.top) / 16)
        index = clamp(0, index, this.shortcutList.length)
        return index
      }
    },
    created () {
      this.enableJsScroll = this.$route.query.enableJsScroll
      this.initShortCut()
    },
    mounted () {
      console.log('city scroll')
      this.shortcutMatrix = this.shortcutElement.getBoundingClientRect()
      this.shortcutList.forEach((item) => {
        let el = document.getElementById('city-' + item.name)
        item.top = el.offsetTop + 1
      })
    }
  }
</script>
