## 背景色 background-color
```css
body { background-color: green; }
```
## 背景图 background-image
```css
body { background-image: url("图片路径"); }
```
默认是在水平和垂直方向上平铺（不断重复）的样式，如下：
![[图片5.png]]
## 限制重复方式 background-repeat
可以使用 `{css icon}background-repeat` 单独限制平铺的方向或者不平铺。比如只在水平方向平铺：
```css
body {
	background-color: green; /* 设置背景色，方便观察背景图样式 */
	background-image: url("图片路径");
	background-repeat: repeat-x;
	/* repeat-y 是只在垂直方向平铺，no-repeat 是不平铺 */
}
```
![[图片6.png]]
## 背景图位置 background-position
###### 位置关键字
`{css icon}background-position: top right;` 表示背景图在右上方，关键字一般情况填两个，可选 `right` `left` `top` `buttom` `center`，前后顺序无所谓。单独写一个值也可以但一般不用，因为不好掌控，譬如单独一个 `top` 参数的实际效果是与 `top center` 一样。
###### 数值关键字
`{css icon}background-position: 5px 5px;` 和 `{css icon}background-position: 5% 5%;` 等写法，可以看成是坐标，第一个值表示 X 轴的，第二个值是 Y 轴的，只写一个那纵向上默认居中。
###### 继承关键字 inherit
`{css icon}background-position: inherit;` 表示位置的相关设置从父元素继承。
> [!NOTE] 提示
> 具体细节没有记的意义，知道可以这样写就好了，具体要用的时候试一下也都知道了，没几个参数。
## 背景是否跟随滚动 background-attachment
显而易见，背景图默认是跟随滚动的，也就是 `{css icon}background-attachment: scroll;`
