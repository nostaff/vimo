<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>Tabs在底部(强制IOS)</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-tabs mode="ios" tabsLayout="icon-top" tabsPlacement="bottom" @onTabChange="onTabChange" ref=tabs>
            <router-view></router-view>
            <vm-tab mode="ios" slot="tab" :to="{name:'tabsBottom.demoTab1'}" tabBadge="13" tabTitle="User" tabBadgeStyle="danger"
                 tabIcon="person"></vm-tab>
            <vm-tab mode="ios" slot="tab" :to="{name:'tabsBottom.demoTab2'}" tabBadge="2" tabTitle="Cars" tabBadgeStyle="dark"
                 tabIcon="car"></vm-tab>
            <vm-tab mode="ios" slot="tab" :to="{name:'tabsBottom.demoTab3'}" tabBadge="7" tabTitle="Star" tabIcon="star"
                 :enabled="true"></vm-tab>
        </vm-tabs>
    </vm-page>
</template>
<script type="text/javascript">
  export default {
    name: 'name',
    data () {
      return {
        timer: null
      }
    },
    computed: {
      tabsComponent () {
        return this.$refs.tabs
      }
    },
    methods: {
      onTabChange (index) {
        console.debug('事件 -> onTabChange-selectedIndex:' + index)
        console.debug('当前选择index的tab实例:')
        console.debug(this.tabsComponent.getByIndex(index))
        console.debug('获取当前在激活状态的tab实例:')
        console.debug(this.tabsComponent.getSelected())
        console.debug('由Tabs组件获取当前激活的index:' + this.tabsComponent.getActivatedIndex())

//        console.debug('3s后选择第一个')
//        clearTimeout(this.timer)
//        this.timer = setTimeout(()=>{
//          this.tabsComponent.select(0)
//        },3000)
      }
    }
  }
</script>
