<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>Slides-Lite</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-content padding class="outer-content">
            <h5>简述</h5>
            <p>
                因为有时候在移动端, 轮播不需要特别复杂, 但是引入完整功能的swiper会使得项目体积过大, 因此进入精简版的 slide组件适用于这个场景. </p>
            <p>另外, 精简版轮播的"现有API"和完整版的一致, 包括对应的Props和Event, 具体参考文档, 如果精简版的组件无法满足需求, 请使用完整版, 下面是示例.</p>
            <hr>
            <h5>精简版(swipe-js-iso.js)</h5>
            <p><a href="https://github.com/thebird/Swipe">Brad Birdsall@Swipe 2.0.0</a></p>

            <vm-slides-lite :initialSlide="1"
                        :loop="true"
                        :autoplay="4000"
                        pagination=".swiper-pagination"
                        @onTransitionEnd="onTransitionEndHandler"
                        class="slides">
                <vm-slide-lite class="slide slide-0">0</vm-slide-lite>
                <vm-slide-lite class="slide slide-1">1</vm-slide-lite>
                <vm-slide-lite class="slide slide-2">2</vm-slide-lite>
                <vm-slide-lite class="slide slide-3">3</vm-slide-lite>
            </vm-slides-lite>
            <hr>
            <h5>原版(swiper.js)</h5>
            <p><a href="http://www.idangero.us/swiper/">Vladimir Kharlampidi@Swiper 3.4.2</a></p>
            <vm-slides :initialSlide="1"
                    :loop="true"
                    :autoplay="4000"
                    pagination=".swiper-pagination"
                    @onTransitionEnd="onTransitionEndHandler"
                    class="slides">
                <vm-slide class="slide slide-0">0</vm-slide>
                <vm-slide class="slide slide-1">1</vm-slide>
                <vm-slide class="slide slide-2">2</vm-slide>
                <vm-slide class="slide slide-3">3</vm-slide>
            </vm-slides>
        </vm-content>
    </vm-page>
</template>
<style scoped lang="scss">
    .slides {
        width: 100%;
        min-width: 285px;
        height: 190px;
        margin: 20px auto;
        .slide {
            text-align: center;
            font-size: 18px;
            background: #fff;
            /* Center slide text vertically */
            display: -webkit-box;
            display: -ms-flexbox;
            display: -webkit-flex;
            display: flex;
            -webkit-box-pack: center;
            -ms-flex-pack: center;
            -webkit-justify-content: center;
            justify-content: center;
            -webkit-box-align: center;
            -ms-flex-align: center;
            -webkit-align-items: center;
            align-items: center;
        }
        .slide-0 {
            background: #d5d5d5;
        }
        .slide-1 {
            background: #3bcaa4;
        }
        .slide-2 {
            background: #ff808a;
        }
        .slide-3 {
            background: #ffb019;
        }

        .black {
            background: #000;
        }
    }
</style>
<script type="text/javascript">

  export default {
    methods: {
      onTransitionEndHandler (swiper) {
        console.log(swiper)
      }
    }
  }
</script>
