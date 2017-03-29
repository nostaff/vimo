# Vimo
---

就目前来看，移动端H5的业务需求希望同样的页面能够在微信、支付宝、普通浏览器或者自建的App内部WebView中运行，因此使用一套代码完成上述需求。


![](./static/VIMO(H5).png)


从技术实现角度是没问题的，但是在维护层面会有些难度，需要在业务代码中插入很多环境判断的代码，这个和职责分离的设计思想相分离，故Vimo就是为了解决这个问题而开发。

Vimo的设计思想来源于IONIC2.x，通过研读源码并结合当前的问题，上述的问题是按照这个思路解决的：

![](./static/layer-structure.png)

App在运行之前，完成对当前运行环境的初始化，这部分由`config + plarform`完成，不同的平台配置及初始化通过`platform-config.js`完成。`app-config.js`完成业务层面的配置。


Vimo只安装必要的组件，模块根据需要自行安装。


## 版本信息

- 0.1.2 - 增加了转场动画及三级城市选择的picker组件
- 0.1.3 - 三级城市选择的picker组件debug, 增加微信初始化的代码