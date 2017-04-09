"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(exports,"__esModule",{value:!0}),exports.ClickBlock=void 0;var _classCallCheck2=require("babel-runtime/helpers/classCallCheck"),_classCallCheck3=_interopRequireDefault(_classCallCheck2),_createClass2=require("babel-runtime/helpers/createClass"),_createClass3=_interopRequireDefault(_createClass2),_util=require("../../util/util"),CLICK_BLOCK_POSITION=".ion-app > .click-block",ClickBlock=exports.ClickBlock=function(){function e(){(0,_classCallCheck3.default)(this,e),this._tmr=0,this._showing=!1,this.clickBlockElement=this._getClickBlockElement()}return(0,_createClass3.default)(e,[{key:"activate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:100;this.clickBlockElement||(this.clickBlockElement=this._getClickBlockElement()),window.clearTimeout(this._tmr),e&&this._activate(!0),this._tmr=setTimeout(this._activate.bind(this,!1),t)}},{key:"_activate",value:function(e){this._showing!==e&&(this._setElementClass("click-block-active",e),this._showing=e)}},{key:"_getClickBlockElement",value:function(){var e=document.querySelectorAll(CLICK_BLOCK_POSITION);return e&&0!==e.length?e[0]:null}},{key:"_setElementClass",value:function(e,t){!!this.clickBlockElement&&(0,_util.setElementClass)(this.clickBlockElement,e,t)}}]),e}();