![[画板1]]
## 边框样式 border-style
边框样式有以下几种：
```css
/* 实线 */ border-style: solid;
/* 点线 */ border-style: dotted;
/* 虚线 */ border-style: dashed;
/* 双线 */ border-style: double;
/* 凹槽 */ border-style: groove;
/* 垄状 */ border-style: ridge;
/* 嵌入 */ border-style: inset;
/* 外凸 */ border-style: outset;
/* 隐藏 */ border-style: hidden;
```
![[图片1.png]]![[图片2.png]]![[图片3.png]]
> [!NOTE] 注意事项
> 其中 `{css icon}groove` `{css icon}ridge` `{css icon}inset` `{css icon}outset` 这四个值为 3D 样式，效果取决于边框的颜色值
## 边框宽度 border-width
边框宽度可以指定具体值，也可以使用预设值，如果不设置宽度，则默认为 `{css icon}border-width: medium;`。
```css
/* 指定宽度值 */
border-width: 2px;
/* 预设 */
border-width: thick;
border-width: medium;
border-width: thin;
```
## 边框颜色 border-color
```css
/* 预设颜色名 */
border-color: red;
/* 透明边框 */
border-color: transparent;
/* 十六进制码 */
border-color: #2999ae;
/* RGB混色 */
border-color: rgb(238, 131, 79);
```
- 边框颜色默认为黑色；
- 单独使用 `{css icon}border-color` 是不会生效的，需要先设置边框的样式。
## 边框圆角 border-radius
```css
/* 指定圆角半径 */
border-radius: 15px;
```
## 简写属性 border
```css
border: 2px solid #000000;
```
1. 第一个参数为边框宽度；
2. 第二个参数为边框样式；
3. 第三个参数为边框颜色。
## 分位置单独设置边框属性
在属性名的 `{css icon}border` 后面添加一个方向词，可以单独控制这个方向的边框属性，如下：
```css
/* 边框 */
border-top: 2px solid #000000;
border-right: 2px solid #000000;
border-bottom: 2px solid #000000;
border-left: 2px solid #000000;

/* 边框样式 */
border-top-style: solid;
border-right-style: solid;
border-bottom-style: solid;
border-left-style: solid;

/* 边框宽度 */
border-top-width: thick;
border-right-width: thick;
border-bottom-width: thick;
border-left-width: thick;

/* 边框颜色 */
border-top-color: red;
border-right-color: red;
border-bottom-color: red;
border-left-color: red;

/* 圆角 */
border-top-left-color: 10px;
border-top-right-color: 10px;
border-bottom-right-color: 10px;
border-bottom-left-color: 10px;
```
## 属性值列表生效顺序与简写
![[属性值列表生效顺序与简写]]