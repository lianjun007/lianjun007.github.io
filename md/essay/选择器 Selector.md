![[画板3]]
## 选择器介绍
### 通用选择器
```css
* { text-align: center; }
```
可以看成与元素选择器的 `{css icon}body { text-align: center; }` 一样。
### 元素选择器
选择所有此类元素：
```css
div { text-align: center; }
```
### 类选择器
选择 class 属性的值含有 view 的所有元素：
```css
.view { text-align: center; }
```
> [!NOTE] 注意
> 类选择器会根据该元素的 class 属性中的内容匹配元素，比如上述示例代码与属性选择器 `[class~=view]` 的效果**完全等价**。
### ID 选择器
```css
#control1 { text-align: center; }
```
> [!NOTE] 注意
> ID 选择器会根据该元素的 id 属性中的内容匹配元素，比如上述示例代码与属性选择器 `[id=control1]` **效果等价，但是优先级更高**。
> ```css
> #a1 { text-align: center; }
> [id=a1] { text-align: right; }
> ```
> 如此段代码所示，尽管 `#a1` 在 `[id=a1]` 的前面，依旧是生效 `#a1` 的效果。
> 具体优先级大致是内联>ID>伪类>属性>类>元素>通用，不必太过关注，写的时候看着调整就行了。
### 属性选择器
> [!NOTE] ID 和类的区别
> 类选择器和 ID 选择器可以看作是属性选择器的简写。
> 
> id 具有唯一性，class 具有普遍性，没什么太多注意的，写的时候就能发现区别。一般来说 **CSS 尽量操作 class 而 JavaScript 尽量操作 id**。

选择含有 title 属性的所有元素：
```css
[title] { text-align: center; }
```

选择含有 title 属性，且值为 value 的所有元素：
```css
[title=value] { text-align: center; }
```

选择含有 title 属性，且有 value 这个值的所有元素：
```css
[title~=value] { text-align: center; }
```
> [!NOTE] 例如下列元素：
> ```html
> <div title="value a123"></div>
> ```

选择含有 title 属性，且值为 value 或前缀为 value- 的所有元素：
```css
[title|=value] { text-align: center; }
```
 
选择含有 title 属性，且值前缀为 value 的所有元素：
```css
[title^=value] { text-align: center; }
```

选择含有 title 属性，且值以 value 为后缀的所有元素：
```css
[title$=value] { text-align: center; }
```

选择含有 title 属性，且至少有一个值包含 value 字符的所有元素：
```css
[title*=value] { text-align: center; }
```
> [!NOTE] 例如下列元素：
> ```html
> <div title="abcvalue123"></div>
>```
## 选择器的组合使用
### 与条件选择（连写）
满足所有选择器的元素才会被选择，比如：

选择 class 属性的值含有 view 的所有 a 元素：
```css
a.view { text-align: center; }
```

选择 class 属性的值含有 view 和 box 的所有 a 元素：
```css
a.view.box { text-align: center; }
```
> [!NOTE] 例如下列 a 元素：
> ```html
> <a href="#" class="view box"></a>

选择 class 属性的值含有 view 的所有 a 元素：
```css
a[title] { text-align: center; }
```

选择含有 title 属性，且 class 属性值为 view 的所有元素
```css
.view[title] { text-align: center; }
```

不多举例了，顺序也无所谓，别搞两个 ID 选择器这种情况就行。
### 或条件选择（逗号 `,` 分隔）
满足其中一个选择器即可被选择。简单来看，就是下列两段代码等价：
```css
#box1 {
	width: 100px;
	height: 50px;
	border: 5px solid black;
}
#box2 {
	width: 100px;
	height: 50px;
	border: 5px solid black;
}
```

```css
#box1,
#box2 {
	width: 100px;
	height: 50px;
	border: 5px solid black;
}
/* 逗号隔开的选择器也可以写在一行 */
```
### 后代元素选择（空格 ` ` 分隔）与
后者的**所有父代元素**中要有符合前者选择器的元素，比如下列代码中的 CSS 会对父容器1中的子容器和孙容器生效。
```html
<header>
	<style>
		.box div {
			border: 5px solid red;
		}
	</style>
</header>
<body>
	<div class="box">
		父容器1
		<div>
			子容器
			<div>孙容器</div>
		</div>
	</div>
	<div class="box">
		父容器2
	</div>
</body>
```
### 子元素选择（大于号 `>` 分隔）
后者的**父元素**中要有符合前者选择器的元素。与后代元素选择的区别就在字面上。以下列代码为例，CSS 样式只对子容器生效，对孙容器不生效。
```html
<header>
	<style>
		.box > div {
			border: 5px solid red;
		}
	</style>
</header>
<body>
	<div class="box">
		父容器1
		<div>
			子容器
			<div>孙容器</div>
		</div>
	</div>
	<div class="box">
		父容器2
	</div>
</body>
```
> 但是似乎不是所有元素都有嵌套关系，具体没有研究，比如 `<p>` 标签的子元素似乎不算一层嵌套，比如将上面的代码中的子容器的 `<div>` 标签改为 `<p>` 标签，就会对孙容器生效了。