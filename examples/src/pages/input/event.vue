<template>
    <vm-page>
        <vm-header>
            <vm-navbar>
                <vm-title>Event</vm-title>
            </vm-navbar>
        </vm-header>
        <vm-content class="outer-content">
            <vm-list>
                <vm-list-header>
                    <span>事件测试</span>
                </vm-list-header>
                <vm-item>
                    <vm-label color="primary">短文本</vm-label>
                    <vm-input type="text"
                           clear-input
                           :regex=regex
                           @onKeyup.enter="submit"
                           @onBlur="onBlurtHandler"
                           @onFocus="onFocusHandler"
                           @onInput="onInputHandler"
                           @onValid="onValidHandler"
                           @onInvalid="onInvalidHandler"
                           placeholder="'XX-XX-XXX' 数字格式"></vm-input>
                </vm-item>
                <vm-item>
                    <vm-label fixed slot="item-start">验证条件</vm-label>
                    <p>{{regex.toString()}}</p>
                </vm-item>
            </vm-list>
            <p class="event__p">
                <strong>触发记录:</strong>
            </p>
            <ul class="event__ul">
                <li class="event__li" v-for="(item,index) in eventListDisplay.reverse()" :key="index">
                    <span>{{item.time}}</span>
                    <span text-uppercase class="eventType" :class="item.eventType">{{item.eventType}}</span>
                    <span>{{item.msg}}</span>
                </li>
                <li v-if="eventListDisplay.length === 0">空</li>
            </ul>
        </vm-content>
    </vm-page>
</template>
<script type="text/javascript">
  export default {
    name: 'InputEventDemo',
    data () {
      return {
        regex: /\d{2}-\d{2}-\d{3}/,
        eventList: []
      }
    },
    computed: {
      eventListDisplay () {
        let list = JSON.parse(JSON.stringify(this.eventList))
        return list.splice(-15)
      }
    },
    methods: {
      submit () {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'enter',
          msg: ''
        })
      },
      onBlurtHandler () {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'blur',
          msg: ''
        })
      },
      onFocusHandler () {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'focus',
          msg: ''
        })
      },
      onInputHandler (value) {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'input',
          msg: value
        })
      },
      onValidHandler (value, type) {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'valid',
          msg: `type: ${type} - value: ${value}`
        })
      },
      onInvalidHandler (value, type) {
        this.eventList.push({
          time: `${new Date().getHours()}:${new Date().getMinutes()}:${new Date().getSeconds()}`,
          eventType: 'invalid',
          msg: `type: ${type} - value: ${value}`
        })
      }
    }
  }
</script>
<style scoped lang="scss">
    .event__p {
        padding-left: 40px;
    }

    .event__ul {
        padding-left: 40px;
        .event__li {
            margin-bottom: 5px;
            .eventType {
                padding: 2px 5px;
                border-radius: 2px;
                background: #ddd;
                display: inline-block;
            }

            .blur {
                background: #ddd6ff;

            }

            .focus {
                background: #29a0fd;
            }

            .input {
                background: #ccb020;
            }

            .valid {
                background: #58ea66;
            }

            .invalid {
                background: #d61652;
            }
        }
    }


</style>
