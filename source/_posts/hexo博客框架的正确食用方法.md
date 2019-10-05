---
title: hexo博客框架的正确食用方法
category: Hexo
top: 10
tags:
  - Instructions
  - Hexo
  - Github
  - COS
  - Coding
abbrlink: 8496
date: 2019-03-02 12:10:31
---

*本教程主要是为了记录自己搭建博客的过程，仅供参考，不保证适用于所有人。*

*若因本教程内容有误而导致数据丢失等情况，本人概不负责，请在修改前备份好自己的数据！！*

<!-- more -->

---

## 什么是Hexo？

​    在正式开始之前，你最好先了解一下hexo博客框架

​    当然如果等不及了跳过也是阔以的

​    Hexo 是一个快速、简洁且高效的博客框架。Hexo 使用 [Markdown](http://daringfireball.net/projects/markdown/)（或其他渲染引擎）解析文章，在几秒内，即可利用靓丽的主题生成静态网页。

​    [官方网站](https://hexo.io)

## 0.准备工作

**1. 一台设备（Windows/macOS/Linux/Android）**

​	**如果需要在多个设备上同步并在Github/Gitee/Coding上部署博客，可以使用Cloud Studio搭建hexo博客*

---

​	Cloud Studio食用方法：

​	创建一个Git仓库（参考后文步骤3，因为是存放源码所以可以另外新建一个仓库）

​	首先需要注册腾讯云开发者平台：[点击注册](https://dev.tencent.com/login)

​	选择 产品 → Cloud Studio → 进入工作空间

​	点击新建工作空间

![Create Workspace](https://img.rytinselver.com/Hexo/8496/create-workspace.png)

​	如果部署在Coding上，则来源选择腾讯云开发者平台，部署在Github/Gitee上，就选择其他Git仓库，并将SSH秘钥添加到Github/Gitee的个人设置中（后文步骤2中有详细写）

​	Github/Gitee需要手动填写仓库名称，Coding直接选择即可

​	运行环境选择hexo，点击创建

​	已经集成了hexo、nodejs和git所以不必再安装了

​	然后就可以直接根据后文步骤初始化hexo了

![Cloud Studio Workspace](https://img.rytinselver.com/Hexo/8496/cloudstudio-workspace.png)

---

​	**如果没有将源码仓库和静态网站仓库分开，master分支用来储存源码了，要在博客配置文件中，将`deploy`下的`branch`值要改成别的，他会自动创建一个新分支，当然在使用pages服务的时候也要将部署分支改为新的分支名（你也可以将源码和静态网站放在不同的仓库中）*

**2. 选择在Github/Gitee/Coding/COS上部署你的博客**

​	如果想要自定义域名的话，你需要选择一个域名注册商来注册域名（如果使用腾讯云COS部署博客，最好在腾讯云上注册域名，如果你已经有自己的域名了，可以将域名转入至腾讯云，已经备案的域名需要转入备案）

​	**自定义域名可以通过DNS解析线路设置部署到多个平台（比如解析到Github使用国外线路，解析到Coding使用国内线路）*

​	首先选择一个平台注册账号

​	Github（推荐）：[官网](https://github.com/)

​	​	优点：完全免费、支持自定义域名https访问、支持WebHook、国内访问速度还行

​	​	缺点：百度收录比较困难、私人仓库需要付费

​	Gitee码云：[官网](https://gitee.com)

​	​	优点：国内访问速度快、支持自定义域名https访问、支持WebHook

​	​	缺点：自定义域名及其他进阶功能需要付费、自定义域名需备案

​	Coding（dev.tencent）：[官网](https://dev.tencent.com)

​	​	优点：完全免费、支持自定义域名https访问、自带SSL证书、支持私有仓库静态网站、支持WebHook和持续集成、支持Cloud Studio搭建hexo博客（完全在线操作，不需要担心多设备同步的问题）

​	​	缺点：访问速度慢（但是可以使用国内CDN加速）

​	COS腾讯云对象存储：[官网](https://cloud.tencent.com/product/cos)

​	​	优点：访问速度非常快、有赠送的资源包和流量包（根本用不完）、有PC客户端、支持自定义域名CDN加速和https访问、支持私有仓库静态网站、支持Hexo图床、可以设置防盗链

​	​	缺点：自定义域名必须要备案、配置比较复杂、可能要付费、不支持WebHook

**3. Android准备工作:**

​	前提：必须获取Root权限！！！否则无法进入hexo目录

​	命令行：这里推荐两个命令行工具: [NeoTerm](https://github.com/NeoTerm/NeoTerm/releases) 和 [Termux](https://termux.com/)，各有特色，这里就不赘述了，有兴趣的可以都尝试一下

**4. 安装Git、Node.js**

​	Git：

​	​	使用COS部署可以跳过Git的安装，但考虑到博客备份到Github较为方便，最好还是安装一下

​	​	在命令行/终端中输入`git —version`来查看是否安装了Git

​	​	在Git官网下载对应系统的最新Git版本并安装：[下载地址](https://git-scm.com/downloads)

​	​	（Windows安装后可以使用GitBash或者PowerShell来执行git命令）

​	​	安装后重启终端/命令行生效

​	​	Android在终端中输入`pkg install git`安装Git

---

​	Node.js：

​	​	官网下载总是最好的方式：[下载地址](https://nodejs.org/en/download/) 根据你的系统自行选择

​	​	使用`node -v`和`npm -v`查看是否安装了Node.js和npm

​	​	Android在终端输入`pkg install nodejs`安装Node.js

​	​	Linux下安装方式：

​	​	⁃ 使用`apt-get`命令安装nodejs（推荐）

   ```
	$ sudo apt-get install nodejs
	$ sudo apt-get install npm
   ```

​	​	⁃ 服务器安装：

​	​	使用`wget`命令下载

​	​	解压：

   ```
	$ xz -d node-vx.xx.x-linux-x64.tar.xz
	$ tar -xvf node-vx.xx.x-linux-x64.tar
   ```

​	​	配置全局变量：

   ```
	$ ln -s /下载路径/node-vx.xx.x-linux-x64/bin/node /usr/local/bin/node
	$ ln -s /下载路径/node-vx.xx.x-linux-x64/bin/npm /usr/local/bin/npm
   ```

**5. 切换npm淘宝源**

​	如果使用梯子可以跳过本步骤

​	npm国内访问很慢，可以通过切换为淘宝源来解决：

   ```
	$ npm config set registry https://registry.npm.taobao.org
   ```

## 1. 安装并配置Hexo

**1. 安装Hexo**

​	使用npm命令安装：

   ```
	$ npm install -g hexo-cli
   ```

​	然后`cd`进入你想要创建博客的目录（Android最好不要执行这一步）

​	初始化hexo

   ```
	$ hexo init 文件夹名
   ```

​	执行后会在刚才的目录下创建一个文件夹，文件夹名最好不要带特殊符号和中文

​	进入文件夹会看见里面有这几个文件/文件夹：

> ​	node_modules: 依赖包
> ​	public：生成的页面
> ​	scaffolds：生成文章的一些模板
> ​	source：用来存放你的文章、图片等资源
> ​	themes：主题
> ​	_config.yml: 配置文件

​	生成博客页面：

   ```
	$ hexo g //生成博客文件
	$ hexo s //在本地服务器运行博客
   ```

​	默认端口为4000，如果提示被占用可以通过`hexo s -p 端口号`来指定端口

​	打开浏览器输入`http://localhost:4000/`即可访问

​	打开后网页大概是这样：

![Landscape](https://img.rytinselver.com/Hexo/8496/theme-landscape.png)

​	关于更多hexo命令可以查询官方文档：[hexo命令](https://hexo.io/zh-cn/docs/commands)

**2. 配置Hexo**

​	打开博客目录下_config.yml

​	可以根据官方文档进行修改配置：[hexo配置](https://hexo.io/zh-cn/docs/configuration)

​	在本步骤中只需要修改网站和网址配置参数

​	注意`.yml`文件严格遵守 [YAML语法](https://yaml.org/spec/1.2/spec.html)

​	​	1.冒号后面必须有一个空格

​	​	2.使用缩进表示层级关系（两个空格，不支持Tab）

​	​	3.同一层级的元素必须对齐

​	​	4.#表示注释，可以使用多个如：###

​	​	5.如属性值为字符串，若不含特殊符号则可以省略单引号'

​	推荐使用编辑器：[Atom](https://atom.io/)（macOS用户也可以使用Xcode）

## 2. 配置Git和SSH

​	在Github/Gitee/Coding上部署博客需要配置Git全局变量和SSH秘钥

​	配置git全局变量

   ```
	$ git config --global user.name "用户名" //注册的用户名
	$ git config --global user.email "邮箱" //注册的邮箱
   ```

​	*Android的Termux没有自带的SSH命令，需要先安装OpenSSH

   ```
	$ apt install openssh
   ```

​	生成SSH秘钥

   ```
	$ cd ~/.ssh
	$ ssh-keygen -t rsa -C “邮箱” //注册的邮箱(中间会让你输密码，一般不需要，直接回车跳过就好)
   ```

​	输出的代码中会有保存路径，进入路径看到以下三个文件

![SSH_RSA](https://img.rytinselver.com/Hexo/8496/ssh_rsa.png)

​	其中，`id_rsa`是这台设备的私人秘钥，`id_rsa.pub`是公共秘钥，我们只需要公共秘钥

​	用文本编辑器（或者随便什么编辑器都可以）打开`id_rsa.pub`复制里面所有内容

​	在Git仓库上添加SSH秘钥：

​	Github：点击右上角头像 → Settings → SSH and GPG keys  → New SSH key

![Github Add SSH Key](https://img.rytinselver.com/Hexo/8496/github-add-ssh-key.png)

​	填写完毕后点击Add SSH key添加即可

​	命令行中输入`ssh -T git@github.com`查看是否成功

------

​	Gitee：点击右上角头像 → 设置 → SSH公钥

![Gitee Add SSH Key](https://img.rytinselver.com/Hexo/8496/gitee-add-ssh-key.png)

​	填写完毕后点击确定即可

​	命令行中输入`ssh -T git@gitee.com`查看是否成功

------

​	Coding：点击右上角头像 → 个人设置 → SSH公钥 → 新增公钥

​	可以设置有效期，一般设置永久有效

![Coding Add SSH Key](https://img.rytinselver.com/Hexo/8496/coding-add-ssh-key.png)

​	点击添加

​	命令行中输入`ssh -T git@dev.tencent.com`查看是否成功

## 3. 部署Hexo

​	使用Git仓库：

​	安装`hexo-deployer-git`插件到博客文件夹

   ```
	$ npm install hexo-deployer-git --save //使用--save安装依赖到本文件夹，会记录到package.json中的dependencies内
   ```

------

​	使用COS对象存储：

​	安装`hexo-deployer-cos`插件到博客文件夹

   ```
	$ npm install hexo-deployer-cos --save //使用--save安装依赖到本文件夹，会记录到package.json中的dependencies内
   ```

### 3.1 部署Hexo至Github

​	创建Github仓库：点击右上角加号+ → New repository

​	Repository name必须填写`用户名.github.io`，并选择公共仓库

![Github New Repository](https://img.rytinselver.com/Hexo/8496/github-new-repository.png)

​	点击Create repository

​	然后复制仓库的SSH链接（注意一定要选择Use SSH）

![Github UseSSH](https://img.rytinselver.com/Hexo/8496/github-usessh.png)

​	打开配置文件`_config.yml`定位到`deploy`属性

​	修改仓库地址和分支地址

   ```
    deploy:
      type: git
      repo: git@github.com:RyTinSelver/RyTinSelver.github.io.git //刚刚复制的地址
      branch: master //注意如果Master分支使用Cloud Studio存放hexo源码的话，请将这里的branch改成新的分支名
   ```

​	将Hexo发布至Github仓库

   ```
	$ hexo d
   ```

​	在github仓库中选择Settings，找到Github Pages选项并打开

![Github Pages](https://img.rytinselver.com/Hexo/8496/github-pages.png)

​	支持自定义域名（在域名注册商那里设置DNS解析，新建CNAME记录地址`用户名.github.io`）

​	自定义域名会在静态网站中生成CNAME文件，但是每次上传都会被删掉，解决方法是将CNAME文件下载到本地，复制到`/博客文件夹/source/`中即可

​	更改分支为静态网站文件所在的分支，可以打开Enforce HTTPS开启https访问

​	等待五分钟左右，打开网站查看是否成功部署

### 3.2 部署Hexo到Gitee

​	创建Gitee仓库：点击右上角加号+ → 新建仓库

​	仓库名称必须填`用户名`，可以选择私人仓库或者公共仓库

![Gitee New Repository](https://img.rytinselver.com/Hexo/8496/gitee-new-repository.png)

​	点击创建

​	然后复制仓库的SSH链接（注意一定要选择SSH）

![Gitee UseSSH](https://img.rytinselver.com/Hexo/8496/gitee-usessh.png)

​	打开配置文件`_config.yml`定位到`deploy`属性

​	修改仓库地址和分支地址

   ```
    deploy:
      type: git
      repo: git@gitee.com:RyTinSelver/RyTinSelver.git //刚刚复制的地址
      branch: master //注意如果Master分支使用Cloud Studio存放hexo源码的话，请将这里的branch改成新的分支名
   ```

​	将Hexo发布至Gitee仓库

   ```
	$ hexo d
   ```

​	在gitee仓库中选择服务 → Gitee Pages

​	选择部署分支，点击启动

![Gitee Pages](https://img.rytinselver.com/Hexo/8496/gitee-pages.png)

​	更改分支为静态网站文件所在的分支

​	若要自定义域名需要购买Gitee Pages Pro，且域名必须备案（在域名注册商那里设置DNS解析，新建CNAME记录地址`用户名.gitee.io`）

​	自定义域名https访问：

​	点击配置域名证书 → 申请免费HTTPS证书

​	申请成功后勾选强制使用HTTPS

​	等待五分钟左右，打开网站查看是否成功部署

### 3.3 部署Hexo到Coding（dev.tencent）

​	创建Coding仓库：点击右上角加号+ → 项目

​	项目地址必须填`用户名.coding.me`，项目名称可以随意，选择Git仓库

![Coding New Project](https://img.rytinselver.com/Hexo/8496/coding-new-project.png)

​	点击新建项目

​	然后进入项目 → 代码 → 代码浏览

​	复制SSH链接（左边下拉框选择SSH）

![Coding UseSSH](https://img.rytinselver.com/Hexo/8496/coding-usessh.png)

​	打开配置文件`_config.yml`定位到`deploy`属性

​	修改仓库地址和分支地址

   ```
    deploy:
      type: git
      repo: git@git.dev.tencent.com:RyTinSelver/RyTinSelver.coding.me.git //刚刚复制的地址
      branch: master //注意如果Master分支使用Cloud Studio存放hexo源码的话，请将这里的branch改成新的分支名
   ```

​	将Hexo发布至Coding项目

   ```
	$ hexo d
   ```

​	在coding项目中选择代码 → Pages 服务

​	选择一键开启Coding Pages

​	部署成功后可以点击右上角设置图标进行自定义设置

![Coding Pages](https://img.rytinselver.com/Hexo/8496/coding-pages.png)

​	更改分支为静态网站文件所在的分支

​	若要自定义域名请填写绑定新域名（在域名注册商那里设置DNS解析，新建CNAME记录地址`用户名.coding.me`）

​	自定义域名https访问：

​	Coding自带SSL证书申请，证书时长3个月

​	**注意申请SSL证书前请暂时关闭除了Coding以外的所有解析记录，否则会申请失败*

​	申请成功后勾选强制使用HTTPS

​	等待五分钟左右，打开网站查看是否成功部署

### 3.4 部署Hexo至腾讯云COS

​	创建储存桶

​	名称随意，地域自己看着选，选择私有读或者公有读私有写

![COS New Bucket](https://img.rytinselver.com/Hexo/8496/cos-new-bucket.png)

​	点击秘钥管理，前往云API秘钥管理

​	点击新建秘钥（如果已经有了就不需要新建）

![COS New API](https://img.rytinselver.com/Hexo/8496/cos-new-api.png)

​	复制APPID、SecretId、SecretKey

​	打开配置文件`_config.yml`定位到`deploy`属性

​	修改配置为

   ```
    deploy: 
      type: cos
      appId: 刚才复制的APPID
      secretId: 刚才复制的SecretId
      secretKey: 刚才复制的SecretKey
      bucket: blog-rytinselver-1258502213 //储存桶名字，带上后面的数字
      region: ap-shanghai //所属地域
   ```

​	将Hexo发布至COS储存桶

   ```
	$ hexo d
   ```

​	在储存桶基础配置里打开静态网站

![COS Pages](https://img.rytinselver.com/Hexo/8496/cos-pages.png)

​	在域名管理中设置自定义加速域名，源站类型选择静态网站源站，如果储存桶为私有读则需开启回源鉴权并添加CDN服务授权，域名一定要备案

![COS CDN](https://img.rytinselver.com/Hexo/8496/cos-cdn.png)

​	CDN设置中打开高级配置

​	配置SSL证书，可以在腾讯云申请有效期一年的免费证书

​	配置成功后打开强制跳转HTTPS和HTTPS2.0

​	可以打开带宽封顶来避免网站被流量攻击

![CDN HTTPS](https://img.rytinselver.com/Hexo/8496/cdn-https.png)

​	回源配置中关闭Range回源

​	可以在访问控制中打开IP访问限频，防御部分CC攻击

​	等待五分钟左右，打开网站查看是否成功部署

## 4. 修改Hexo主题

​	在官网下载好看的主题：[主题下载](https://hexo.io/themes/)

​	然后通过`git clone`命令将主题克隆到`/博客文件夹/themes/主题名`目录下

​	最后修改`_config.yml`中的`theme`属性为`主题名`

   ```
	$ hexo clean //清空public文件夹
	$ hexo g
	$ hexo d
   ```

​	你还可以根据主题的说明更改主题配置`/主题名/_config.yml`

## 5. 发布文章

​	新建文章

   ```
	$ hexo new "文章名"
   ```

​	用Markdown编辑器打开`/source/_posts/文章名.md`即可开始编辑文章

​	这里推荐 [Typora](https://www.typora.io/) 和 [HexoEditor](https://github.com/zhuzhuyule/HexoEditor/releases)

> ⁃⁃⁃
> title: 中文测试
> category: Testing
> tags: Testing
> date: 2019-01-16 17:45:29
> ⁃⁃⁃

​	这一段是Front-matter，category表示分类，tags是标签，可以用数组的形式添加多个标签

​	新建草稿

   ```
	$ hexo new draft "文章名"
   ```

​	预览草稿

   ```
	$ hexo server --draft
   ```

​	发布草稿

   ```
	$ hexo publish draft "文章名"
   ```

​	**草稿发布后即正常可见*

​	使用

```
	<!-- more -->
```

​	标记，可以让文章在主页只显示标记之前的内容



## 6. 添加新页面

   ```
	$ hexo new page 页面名
   ```

​	这样会在`source`文件夹下新建一个`页面名`文件夹

​	你可以在主题中将它加入sidebar或navbar

## 结束语

​	本教程到此为止基本结束了，嗯

​	关于博客的优化，进阶配置，个性化，主题开发等以后有空了也会写

​	如果本教程中有错误的地方还请大家指正，如有疑惑欢迎在下方评论，我会经常看的



