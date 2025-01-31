![[画板5]]
## 基础语法

```css
div {
	width: 100px;
	height: 50px;
	border: 5px solid black;
}
.box {
	border: 2px solid red;
}
```

如上述代码所示，这就是 CSS 的基础写法：
- 选择器写在开始；
- 花括号包裹住要写的样式属性；
- 具体的样式属性写在花括号之内，用 `:` 来赋值； 
- 每个属性由 `;` 分隔开；
- 两个样式之间不用分隔符。
## 行内样式（内联式）

直接用 `style` 属性写在 HTML 的元素中。

```html
<p style="color: red;font-size: 30px;">段落</p>
```
## 内部样式（内嵌式）

写在 HTML 文件的 `{html icon}<head>` 元素之内，当然写在其他地方也可以，生效顺序会有差异。

```html
<head>
	<style>
	    p {
		    color: red;
		    font-size: 30px
	    }
	</style>
</head>
```
## 外部样式（外链式）

单独创建一个 .css 格式的文件：

```css title:example.css
p {
	color: red;
    font-size: 30px
}
```

然后在 HTML 文件中使用 `link` 标签引用 CSS 文件：

```html
<head>
	<link rel="stylesheet" href="CSS文件的路径"> </head>
```
## 注释

```css
/* 这是个注释 */
```