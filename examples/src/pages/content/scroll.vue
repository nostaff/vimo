<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title ref="title">Content</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-content class="outer-content" ref="content" padding :fullscreen="false"
                 @onScrollStart="onScrollStartHandler"
                 @onScrollEnd="onScrollEndtHandler"
                 @onScroll="onScrollHandler">
            <h1>Section</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci at, dolore dolorum ex harum id quae quaerat suscipit tempora tempore, temporibus ut voluptas voluptatibus! Cupiditate dignissimos dolorem voluptatibus!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ab ad adipisci at, dolore dolorum ex harum id quae quaerat suscipit tempora tempore, temporibus ut voluptas voluptatibus! Cupiditate dignissimos dolorem voluptatibus!</p>

            <p>通过在组件上使用ref属性获取组件的控制权, 比如获取Title组件的控制权修改document.title</p>
            <vm-button @click="setTitle('Hello Vue')" small outline>点击设置Title='Hello Vue'</vm-button>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aut dignissimos, eum impedit maxime natus necessitatibus quas qui quidem repellendus sapiente tempore. Aspernatur excepturi harum laborum quasi? Ab eius, excepturi?</p>
            <vm-button block @click="scrollToBottom()">滚动到底部</vm-button>
            <vm-button block @click="scrollBottomBy400()">向下滚动400</vm-button>
            <vm-button block @click="scrollToElement">滚动到下面的元素</vm-button>


            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad assumenda deserunt dicta dolorem dolorum ea est
                exercitationem, fugit hic ipsa maiores minus molestias non quaerat quas ratione ut vel velit!</p>
            <p id="scrollToHere" style="color:red;">滚动到的就是这个元素</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi eos harum in incidunt natus optio quos, ratione. Aperiam aut autem commodi dolores error fugiat ipsa officia rem similique tempore.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi eos harum in incidunt natus optio quos, ratione. Aperiam aut autem commodi dolores error fugiat ipsa officia rem similique tempore.</p>

            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi eos harum in incidunt natus optio quos, ratione. Aperiam aut autem commodi dolores error fugiat ipsa officia rem similique tempore.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus eligendi eos harum in incidunt natus optio quos, ratione. Aperiam aut autem commodi dolores error fugiat ipsa officia rem similique tempore.</p>
            <vm-button block @click="scrollToTop()">返回顶部</vm-button>


            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur doloribus earum ex exercitationem expedita facere fugit hic, ipsam, ipsum labore, magnam nam odio pariatur quod sit ut veniam.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur doloribus earum ex exercitationem expedita facere fugit hic, ipsam, ipsum labore, magnam nam odio pariatur quod sit ut veniam.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur doloribus earum ex exercitationem expedita facere fugit hic, ipsam, ipsum labore, magnam nam odio pariatur quod sit ut veniam.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur doloribus earum ex exercitationem expedita facere fugit hic, ipsam, ipsum labore, magnam nam odio pariatur quod sit ut veniam.</p>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. A amet consequatur doloribus earum ex exercitationem expedita facere fugit hic, ipsam, ipsum labore, magnam nam odio pariatur quod sit ut veniam.</p>

            <section slot="fixedBottom" class="stateBar">
                <vm-grid no-padding>
                    <vm-row no-padding v-if="ev">
                        <vm-col>
                            <strong text-danger>滚动状态:</strong>
                            <p>ScrollTop: {{ev.scrollTop}}</p>
                            <p>scrollHeight: {{ev.scrollHeight}}</p>
                            <p>scrollWidth: {{ev.scrollWidth}}</p>
                            <p>deltaY: {{ev.deltaY}}</p>
                            <p>velocityY: {{parseInt(ev.velocityY * 1000) / 1000}}</p>
                            <p>directionY: {{ev.directionY}}</p>
                        </vm-col>
                        <vm-col>
                            <strong>固定属性:</strong>
                            <p>滚动状态: {{scrollState}}</p>
                            <p>contentTop: {{ev.contentTop}}</p>
                            <p>contentHeight: {{ev.contentHeight}}</p>
                            <p>contentBottom: {{ev.contentBottom}}</p>
                        </vm-col>
                    </vm-row>
                </vm-grid>
            </section>
        </vm-content>
    </vm-page>
</template>
<style scoped lang="scss">

    .stateBar {
        background: rgba(256, 256, 256, 0.9);
        padding: 10px 20px;
        p {
            margin: 5px 0;
        }
    }
</style>
<script type="text/javascript">
  export default{
    data () {
      return {
        scrollState: '',
        // scroll
        ev: {
          scrollTop: 0,
          directionY: 'down'
        }
      }
    },
    watch: {},
    computed: {
      contentComponent () {
        return this.$refs.content
      },
      titleComponent () {
        return this.$refs.title
      }
    },
    methods: {
      setTitle (val) {
        this.titleComponent.setTitle(val)
      },
      scrollToTop () {
        this.contentComponent.scrollToTop()
      },
      scrollToBottom () {
        this.contentComponent.scrollToBottom()
      },

      onScrollStartHandler (ev) {
        this.scrollState = '滚动开始'
      },
      // 滚动
      onScrollHandler (ev) {
        this.ev = ev
        this.scrollState = '滚动中...'
      },
      onScrollEndtHandler (ev) {
        this.scrollState = '滚动结束'
      },

      scrollBottomBy400 () {
        this.contentComponent.scrollBy(0, 400).then(function () {
          console.log('scrollBottomBy400 done')
        })
      },

      scrollToElement () {
        this.contentComponent.scrollToElement(document.getElementById('scrollToHere'), 300, null, true).then(function () {
          console.log('scrollToElement done')
        })
      }
    }
  }
</script>
