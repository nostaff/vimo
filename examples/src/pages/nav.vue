<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>Nav</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-content padding class="outer-content">
            <h1>Nav组件</h1>

            <p>Nav组件是在Page组件的外层, 用于 <strong>控制转场动画(animate)</strong> / <strong>转场的Indicator提示(showIndicatorWhenPageChange)</strong>等. 这部分的参数在项目初始化的时候就固定了, 后台不可动态修改. 属性可在组件上传入, 或者在配置中指定. </p>

            <h5>转场动画</h5>
            <p>
                转场动画可以是以下几种, 也可以自定义动画:
                ios-transition / zoom-transition / fade-bottom-transition / fade-right-transition
            </p>

            <h5>转场提示</h5>
            <p>这部分使用的是Indicator组件实现, 路由切换前开启Indicator, 路由切换完自动关闭. 一般在异步下载页面数据时用到, 避免长时间的假死等待的情况.</p>

            <h5>默认值</h5>
            <vm-grid>
                <vm-row>
                    <vm-col col-4><strong>IOS模式:</strong></vm-col>
                    <vm-col col-8>fade-right-transition</vm-col>
                </vm-row>
                <vm-row>
                    <vm-col col-4><strong>Android模式:</strong></vm-col>
                    <vm-col col-8>zoom-transition</vm-col>
                </vm-row>
            </vm-grid>

            <h5>当前Nav配置</h5>
            <vm-grid>
                <vm-row>
                    <vm-col col-4><strong>转场动画:</strong></vm-col>
                    <vm-col col-8>{{$config.get('pageTransition')}}</vm-col>
                </vm-row>
                <vm-row>
                    <vm-col col-4><strong>开启转场提示:</strong></vm-col>
                    <vm-col col-8>{{$config.get('showIndicatorWhenPageChange')}}</vm-col>
                </vm-row>
            </vm-grid>

        </vm-content>
    </vm-page>
</template>
<style scoped lang="scss">
    .detailBox {
        margin-bottom: 5px;

        .detailBox__title {
            color: #000;
            font-weight: bold;
        }
        .detailBox__value {
            color: #333;
        }
    }
</style>
<script type="text/javascript">
  export default{
    name: 'name',
    data () {
      return {}
    },
    props: {},
    watch: {},
    computed: {},
    methods: {},
    created () {},
    mounted () {
      this.$config.get('pageTransition')
    },
    activated () {},
    components: {}
  }
</script>
