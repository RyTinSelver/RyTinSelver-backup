---
title: Win 下 Visual Studio 的 C++ 环境搭建
tags:
  - Tutorial
  - Cpp
  - VisualStudio
  - IDE
category: Cpp
abbrlink: 63716
date: 2020-03-26 21:08:21
---


**本教程主要讲解 Visual Studio Community 软件的安装以及 ReSharper 插件的安装**

<!-- more -->

---

## 0	准备工作（废话

+ ***一台电脑***
+ **硬盘上安装了 Windows 7 SP1 或更高版本的系统**
+ **至少 20G 的剩余磁盘空间**
+ **有管理员权限**
+ **可以连接到网络**
+ 详细的系统要求见[此处](https://docs.microsoft.com/zh-cn/visualstudio/releases/2019/system-requirements)



## 1	安装

### 1.1	下载 Visual Studio Installer

**[官网下载链接](https://visualstudio.microsoft.com/zh-hans/downloads/)**

![Download Visual Studio](https://img.rytinselver.com/blog/Cpp/63716/download-visual-studio.png)

社区版是*永久免费*的



### 1.2	安装 Visual Studio Community

打开下载好的安装程序，找到 Visual Studio Community 点击 `安装`

![Install Visual Studio-0](https://img.rytinselver.com/blog/Cpp/63716/install-visual-studio-0.png)

弹出的窗口中选择 `使用C++的桌面开发`（必选），其他的有需要可以自行选择

也可以修改安装目录，注意确保该目录下磁盘空间足够

![Install Visual Studio-1](https://img.rytinselver.com/blog/Cpp/63716/install-visual-studio-1.png)

然后点击 `安装`，等待下载安装完成

安装完成后可能需要重启



### 1.3	登录 Microsoft 账户

初次打开可以登录 Microsoft 账户，可以同步设置和专用 Git 库

![Login Microsoft](https://img.rytinselver.com/blog/Cpp/63716/login-microsoft.png)

点击 `登录`，在弹出的窗口登录微软账户即可



## 2	设置

### 2.1	创建新项目

打开 Visual Studio，点击 `创建新项目`

![Create Project-0](https://img.rytinselver.com/blog/Cpp/63716/create-project-0.png)

选择 `控制台应用`，点击下一步

![Create Project-1](https://img.rytinselver.com/blog/Cpp/63716/create-project-1.png)

输入项目名称点击 `创建`，创建后会在你选择的目录中创建 `/项目名称/` 文件夹

![Create Project-2](https://img.rytinselver.com/blog/Cpp/63716/create-project-2.png)



### 2.2	安装 Clang 工具集（可选）

对于电脑配置较弱的童鞋，使用 Clang-Tidy 静态分析代码

打开 Visual Studio，点击 `工具`、`获取工具和功能`

![Install Clang Toolchain-0](https://img.rytinselver.com/blog/Cpp/63716/install-clang-toolchain-0.png)

在打开的窗口中勾选右侧 `使用 C++ 的桌面开发` 中的 `适用于 Windows 的 C++ Clang 工具`

![Install Clang Toolchain-1](https://img.rytinselver.com/blog/Cpp/63716/install-clang-toolchain-1.png)

然后在 `解决方案资源管理器` 中点击扳手（或 `项目` --> `属性` ）

![Install Clang Toolchain-2](https://img.rytinselver.com/blog/Cpp/63716/install-clang-toolchain-2.png)

使用 Clang 工具集（推荐）：选择 `配置属性` --> `常规` --> `平台工具集` --> `LLVM (clang-cl)`

![Install Clang Toolchain-3](https://img.rytinselver.com/blog/Cpp/63716/install-clang-toolchain-3.png)

只使用 Clang-Tidy：选择 `代码分析` --> `常规` --> `启用 Clang-Tidy` --> `是` 并关闭 `Microsoft代码分析`



### 2.3	安装 ReSharper C++（推荐）

如果你的电脑拥有 8G 或以上的内存，4核心或以上的 CPU，那跑起 ReSharper 基本问题不大

ReSharper 能让你写代码的效率大大提高，不过你也需要一段时间去适应它的快捷键，但上手也没有那么难

举个简单的例子，装了 ReSharper 之后，输入 `using namespace std` 只需要 Ctrl+Space Space Tab s Tab 就能完成，当然 VS 自带的代码补全输这个也不麻烦，而且 VS 的自动补全也在不断进步，但和 ReSharper 比还是有很大差距

至于代码分析、快速更正等，说是神器也不为过了，而且 ReSharper 扩展了许多 Visual Studio 原生的功能，易用性增加不少

这里推荐去 JetBrains 官网申请[免费的一年学生授权](https://www.jetbrains.com/community/education/#students)，可以上传学生证或是使用edu邮箱，可续期。

没有授权证书的话只能试用30天哦~



#### 2.3.1	安装方法一

打开 Visual Studio，点击 `扩展` --> `管理扩展`

![](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-0.png)

搜索 `Resharper`，选择 `ReSharper C++`，点击 `下载`

![Install ReSharper Cpp-1](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-1.png)

运行安装软件，会下载安装 `ReSharper Ultimate`

![Install ReSharper Cpp-2](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-2.png)



#### 2.3.2	安装方法二

打开 JetBrains 官网 [下载 JetBrains Toolbox](https://www.jetbrains.com/toolbox-app/) 安装并登录账户，找到 `ReSharper Ultimate` 点击 `Install`

![Install ReSharper Cpp-3](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-3.png)



重启 Visual Studio 或者在 JetBrains Toolbox 中点击 `Run in Visual Studio Community`

![Install ReSharper Cpp-4](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-4.png)

选择快捷键方案，除非你很习惯 Visual Studio 的快捷按键，否则建议选择第二个（其实不管怎样你都应该选第二个），快捷键是 ReSharper 很重要的一部分，毕竟谁也不想整天按右键找菜单，更何况快键键都可以改

而且当 ReSharper 与 VS 的快捷键冲突时，会弹窗提示你选择默认的行为

![Install ReSharper Cpp-5](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-5.png)

阅读 License 并点击 `I Accept`

![Install ReSharper Cpp-6](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-6.png)

这里是收集使用数据，打不打勾无所谓，点击 `OK`

![Install ReSharper Cpp-7](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-7.png)

如果不是从 Toolbox 启动的，在这里需要登录 JetBrains 账户，勾选 `Use JB Account` 并登录你的 JetBrains 账户

![Install ReSharper Cpp-8](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-8.png)

选择你的证书，点击 `OK`

![Install ReSharper Cpp-9](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-9.png)

如果看到绿勾和 Properly licensed 说明授权成功，点击 `OK` 完成安装

![Install ReSharper Cpp-10](https://img.rytinselver.com/blog/Cpp/63716/install-resharper-cpp-10.png)



### 2.4	简单设置 ReSharper

点击 `扩展` --> `ReSharper` --> `Options` 或者 Alt+R --> `Options` 打开 ReSharper 设置界面

![ReSharper Settings-0](https://img.rytinselver.com/blog/Cpp/63716/resharper-settings-0.png)

可以开启内存使用率显示，毕竟 ReSharper 是个吃内存大户

![ReSharper Settings-1](https://img.rytinselver.com/blog/Cpp/63716/resharper-settings-1.png)

开启三连 Ctrl，方便学习快捷键，熟悉了之后可以关掉

![ReSharper Settings-2](https://img.rytinselver.com/blog/Cpp/63716/resharper-settings-2.png)

关闭 Inlay Hints，个人不是很喜欢这个，如果有需要也可以开着

![ReSharper Settings-3](https://img.rytinselver.com/blog/Cpp/63716/resharper-settings-3.png)

如果觉得 Visual Studio 启动变慢，可以在 `Performance Guide` 中 Fix 一些不需要的功能

![ReSharper Settings-4](https://img.rytinselver.com/blog/Cpp/63716/resharper-settings-4.png)



## 结束语

本教程就结束了（超短）

之后有空了再给 ReSharper 写个详细的教程（我才不会说是我懒）

如果本教程中有错误的地方还请大家指正，如有疑惑欢迎在下方评论，我会经常看的
