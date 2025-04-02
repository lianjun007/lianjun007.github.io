简单记录下自己安装使用 FaceFusion 的过程，不一定每一步都是最优解（并且到现在还没成功调用显卡），自己也是瞎折腾的，所以也不一定别人照着做就一定可以成功。

## 一、下载

前往 [Github](https://github.com/facefusion/facefusion/releases) 下载源代码，解压后用 PyCharm 打开（当然用命令行也行，看个人习惯）。

![Github Releases 截屏](./md/media/FaceFusion%20安装使用备忘/1.png)

## 二、安装依赖和模型

然后在 PyCharm 中下载项目的依赖，如下图这样。

![依赖安装截屏](./md/media/FaceFusion%20安装使用备忘/2.png)

> 或者直接用命令行应该使用 `python install.py` 就可以，如果你要使用显卡来跑那就直接 `python install.py --onnxruntime cuda` 因为我后面也得用这个命令。

安装完毕后使用 `python facefusion.py run` 会自动下载模型，下载完毕后项目的 `./.assets/moduls` 目录下应该会有这些模型。

![模型文件夹截屏](./md/media/FaceFusion%20安装使用备忘/3.png)

不知道为什么，不论怎么折腾网络、使不使用魔法，下载也只有 100kb/s，还老是遇见下载进度不动的情况，遇见下载卡住就停止进程然后重新 `python facefusion.py run` 就好，会继续下载而不是重新下载。如果重新运行时候提示哈希验证问题，那就删掉之前提示卡住的文件再运行就好。

最后下载好了模型，运行 `python facefusion.py run` 会提示没有安装 ffmepg，安装即可。

![WebUI 截屏](./md/media/FaceFusion%20安装使用备忘/4.png)

```sh
# 安装Scoop包管理器（已安装可跳过）
Set-ExecutionPolicy RemoteSigned -Scope CurrentUser
irm get.scoop.sh | iex

# 安装FFmpeg
scoop install ffmpeg
```

![cuda 选项截屏](./md/media/FaceFusion%20安装使用备忘/5.png)

## 三、运行仅 CPU 版本的 FaceFusion
此时 FaceFusion 应该就可以

## 去除限制

0.8改为1

## 四、安装 CUDA

`python install.py --onnxruntime cuda` 速度依旧很慢，等好了显示就正常了
但是实际上没用
pip install onnxruntime-gpu

## 五、

3. 
>网上有人说使用 `python install.py` 后会把依赖和模型一并下好，我不是这个流程就不太清楚了，如果是的话那应该就直接运行成功可以使用了

python install.py --onnxruntime cuda

切换各种版本的 cuda 和 cudnn，都不能激活。

## 六、尝试 docker 安装

WSL2 的问题，导致有点问题。

弄好再写。