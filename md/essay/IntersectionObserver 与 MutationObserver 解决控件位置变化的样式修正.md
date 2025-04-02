前言：本文以自己项目中解决控件吸附导航栏后的样式变化问题展开，介绍了 `IntersectionObserver（交叉观察器）` 与 `MutationObserver（变动观察器）` 两个 Web API。文中举例代码片段来自使用 Vue3 框架开发的项目，不过原生 JS 开发或者其他的框架应该也不影响。

<video src="./md/media/1.mov" controls poster></video>

要实现如视频中所示的控件吸附在导航栏上后变化样式的效果其实很简单，但是在处理中遇到了一些问题。

想要实现这个功能，首先需要实现吸附在导航栏上。这个很简单只需要 CSS 加上一行 `position: sticky;` 实现粘性定位就可以了。稍微有点麻烦的就是处理吸附后的样式变化，我先后采用了下面三种方法。

## 一、监听滚动

```html
<div ref="targetView" class="baseStyle" :class="{ adsorbStyle: isAdsorb }">
	<!-- 省略 -->
<div>
```

```js
const isAdsorb = ref(false)

const handleScroll = () => {
    if (scrollView.value.scrollTop >= 270) {
        isAdsorb.value = true
    } else {
        isAdsorb.value = false
    }
}

onMounted(() => {
    scrollView.addEventListener('scroll', handleScroll)
})

onBeforeUnmount(() => {
    scrollView.removeEventListener('scroll', handleScroll)
})
```

最开始使用的方法很原始，直接监听视图的滚动，当滚动到差不多的位置（手动找）时候，就改变一个值，这个值控制着元素的样式（比如视频中所示的就去掉圆角修改外边距和宽度之类的）。

但是这么做其实是有点麻烦的，所以在后续封装组件的时候我使用了另一种办法（其实也可以用，不过我的滚动视图不是 `window` 每次都要传一个滚动的元素感觉很麻烦，所以就算了。而且应该）。

## 二、使用 `IntersectionObserver`

```js
const isAdsorb = ref(false)

const intersectionObserver = new IntersectionObserver(
    ([entry]) => {
        isAdsorb.value = (entry.boundingClientRect.top >= 44) && (entry.boundingClientRect.top <= 45)
    },
    {
        thresholds: 1,
        root: null,
        rootMargin: "-45px 0px 0px 0px",
    }
);

onMounted(() => {
    if (intersectionObserver && targetView.value) {
	    intersectionObserver.observe(targetView.value)
	}
});

onUnmounted(() => {
    if (intersectionObserver && targetView.value) {
	    intersectionObserver.unobserve(targetView.value)
	}
})
```

这个方案是使用 `IntersectionObserver` 监视视图，关于 `IntersectionObserver` 的相关内容就直接简单总结 MDN 的文档了。

> [IntersectionObserver for MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver)
> 
> [IntersectionObserver() for MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserver/IntersectionObserver)
> 
> `IntersectionObserver` 是一个 Web API，用于异步观察目标元素与其祖先元素或顶级文档视窗交叉状态的变化。
> 
> 其构造函数 `IntersectionObserver()` 接受两个参数：
> 
> - **1、回调函数（）：** 当目标元素的可见性发生变化时，会调用这个回调函数。回调函数会接受两个参数：
> 
>     - 第一个为 `entries`，是 `IntersectionObserverEntry` 对象的数组，这个对象有很多属性可以调用，比如例子中使用的 `IntersectionObserverEntry.boundingClientRect` 会返回包含目标元素的边界信息的 `DOMRectReadOnly`（具体参考 [IntersectionObserverEntry for MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/IntersectionObserverEntry)）； 
>     
>     - 第二个则是被调用的 `IntersectionObserver`实例本身。
> 
> - **2、配置对象（可选）：** 用于配置观察器的行为，有三个配置项目：
>     - `root`：指定祖先元素作为观察的根元素，如果为 `null` 则使用顶级文档视窗；
>     - `rootMargin`：根元素的外边距，用于扩展（正值）或缩小（负值）根元素的观察区；
>     - `threshold`：一个数值或数组，表示目标元素与根元素的交叉比例达到多少时触发回调函数。
> 
> `IntersectionObserver` 实例的一些属性和方法：
> 
> - `IntersectionObserver.root`：根元素；
> - `IntersectionObserver.rootMargin`：根元素的外边距；
> - `IntersectionObserver.thresholds`：一个包含阈值的列表，按升序排列；
> 
> - `IntersectionObserver.observe(target)`：开始观察指定的目标元素；
> - `IntersectionObserver.unobserve(target)`：停止观察指定的目标元素；
> - `IntersectionObserver.disconnect()`：停止观察所有目标元素；
> - `IntersectionObserver.takeRecords()`：返回所有观察目标的 `IntersectionObserverEntry` 对象数组。

因为我的导航栏高度是 `44px`，所以需要吸附的控件不应该到达屏幕顶部，而是应该到距离顶部 `44px` 的地方。因此我们需要缩小根元素的区域，也就是 `rootMargin: "-45px 0px 0px 0px"` 的原因（不同需求不一样）。此时如果需要吸附的控件到达顶部 `44px` 的地方时，与根视图的交叉比例就会小于1（因为会有 `1px` 的区域没有交叉），也就意味着会触发第一个参数传进去的函数。

至于第一个参数就不赘述了，其中的式子则是为了屏蔽底部回调的，因为这个控件其实还是会有概率从底部消失（当屏幕高度值比较小的时候）。

但是这样写有一个奇怪的问题，这个页面在某些路由的情况下如果目标元素的宽度为 424、406 等一些值的时候，即使被监控的元素与根元素的交叉值为 1 ，也不会触发回调函数。也就是会出现如下面展示的视频所示的情况，至今未搞清楚是什么原因，遂放弃这种写法。

<video src="./md/media/2.mov" controls poster></video>

## 三、使用 `MutationObserver`

> [MutationObserver for MDN](https://developer.mozilla.org/zh-CN/docs/Web/API/MutationObserver)：

