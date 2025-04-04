## 简介

由于 DiskGenius 只能对物理磁盘导出目录结构，而我因为需要对网盘和 NAS 里面存的影视资源目录结构备份（影视文件太大了，直接备份不值得，丢了知道重新下载哪些就好了）故开发了此软件，只是一个 demo。从计划到实现大约耗时四个小时，所以很简陋，至少要先有的用。功能就是选择一个文件目录， 然后生成一个 HTML 文件来显示他的结构。

## 下载

由于是 demo 版本，代码也写的很乱，也就没有上传到 Github，只有 windows 打包的 demo-20240122 版本可以下载。如果需要源代码或者开发版源代码可以联系我的邮箱或者各平台私信（代码里面很乱就不直接摆出来丢人了，有时间稍微整理规整好一点再放在这可公开下载）。

<a href="./md/media/demo-20240122.exe" download="DirectoryTree.exe">下载软件</a>

## 版本

### 最新版本 demo-20240122

软件界面图：

![demo-20240122 预览图](./md/media/2.png)

生成 HTML 示例图：

![demo-20240122 生成页面图](./md/media/4.png)

#### 已知问题

极空间通过 CloudDrive2 挂载到 Windows 的磁盘（Webdev 协议）在生成目录树时好像有 BUG。生成的时候软件会卡住直到生成结束，应该改为进度条显示进度，但是还没做。比起 DiskGenius 来说，生成速度太慢了。

开发版软件界面图：

![demo-20240122 生成过程图](./md/media/3.png)

### 开发版

后续打算做其他功能，先做了 qbittorrent 自动整理的相关功能，但是由于当时是玩 BT 才需要这个功能，后续玩 PT 使用 MP 等整理工具了，就不需要这个功能了，相册、影视之类的也都有相关的软件使用。项目也就搁置了。

![开发版界面图](./md/media/5.png)

## 未来展望

如果还有机会，可能会开发成 docker 部署的自动定时备份指定目录为 HTML 文件的项目，包括文件定时备份之类的吧，至少现在太鸡肋了，备份太慢并且每次还得手动去执行。