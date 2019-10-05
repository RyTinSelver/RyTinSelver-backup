---
title: Next主题安装&优化
category: Hexo
top: 10
tags:
  - Instructions
  - Hexo
  - Next
  - Personalize
abbrlink: 31602
date: 2019-04-06 21:48:49
---

*本教程主要是为了记录自己搭建博客的过程，仅供参考，不保证适用于所有人。*

*若因本教程内容有误而导致数据丢失等情况，本人概不负责，请在修改前备份好自己的数据！！*

<!-- more -->

---

## 1.初识Next主题

- 6.0以前旧版官网：[链接](http://theme-next.iissnan.com/)

- 新版6.0-7.0.1官网：[链接](https://theme-next.org/)

- [Github源码](https://github.com/theme-next/hexo-theme-next)



## 2.Next主题安装

通过克隆整个repo安装Next（最简单）:

```
$ cd 博客路径
$ git clone https://github.com/theme-next/hexo-theme-next themes/next
```

或者你可以查看 [详细安装教程](https://github.com/theme-next/hexo-theme-next/blob/master/docs/INSTALLATION.md) 如果你想通过其他方式安装的话



## 3.Next主题更新

你可以通过如下命令更新到最新的 master 分支：

```
$ cd themes/next
$ git pull
```

如果你在此过程中收到了任何错误报告 (例如 **«Commit your changes or stash them before you can merge»**)，我们推荐你使用 [Hexo 数据文件](https://github.com/theme-next/hexo-theme-next/blob/master/docs/zh-CN/DATA-FILES.md)特性。
然而你也可以通过提交（`Commit`）、贮藏（`Stash`）或忽视（`Discard`）本地更改以绕过这种更新错误。具体方法请参考[这里](https://stackoverflow.com/a/15745424/5861495)。



## 4.配置Next主题

好了以下才是正文（滑稽）

主题配置文件一律指`themes\next\_config.yml`！！

网站配置文件指博客目录下的`_config.yml`

注意`.yml`文件严格遵守 [YAML语法](https://yaml.org/spec/1.2/spec.html)

​	1.冒号后面必须有一个空格

​	2.使用缩进表示层级关系（两个空格，不支持Tab）

​	3.同一层级的元素必须对齐

​	4.#表示注释，可以使用多个如：###

​	5.如属性值为字符串，若不含特殊符号则可以省略单引号'

推荐使用编辑器：[Atom](https://atom.io/)（macOS用户也可以使用Xcode）



### 4.1 更改favicon

favicon是网站图标(favorites icon)的缩写

主题配置文件：

```
favicon:
  small: /images/favicon-16x16-next.png
  medium: /images/favicon-32x32-next.png
  apple_touch_icon: /images/apple-touch-icon-next.png
  safari_pinned_tab: /images/logo.svg
  #android_manifest: /images/manifest.json
  #ms_browserconfig: /images/browserconfig.xml
```

于是我们打开`source/images/`很容易就能找到以上的几个文件，将他们修改成你的网站图标，png可以用ps等软件，svg是矢量图，推荐用ai，不会做矢量图的话直接将配置文件里的后缀名改掉就行了



### 4.2 rss订阅

将主题配置文件中的`rss`留空即可

在博客目录中安装`hexo-generator-feed`

```
$ npm install hexo-generator-feed --save
```

他会自动生成`atom.xml`



### 4.3 网页底部

#### 4.3.1 显示版权信息和年份

主题配置文件：

```
footer:
  # 这里填网站建立的时间
  # 如果不写默认为当前年份
  since: 2018
```

版权信息：

```
	# ©️年份后面的版权信息
	copyright: RyTinSelver

  powered:
    # Hexo链接(Powered by Hexo).
    enable: true
    # Hexo版本信息(vX.X.X)
    version: true

  theme:
		# 主题信息(比如：Theme - NexT.scheme).
		enable: true
		# 主题版本信息(vX.X.X).
		version: true
```

自定义版权信息：

```
	# 随便写什么都可以
  custom_text: Hosted by <a href="https://pages.coding.me" class="theme-link" rel="noopener" target="_blank">Coding Pages</a>
```



#### 4.3.2 年份和版权信息中间显示跳动的爱心

主题配置文件：

```
# 显示在年份和版权信息中间
  icon:
    # 红色的心(heart)(#ff0000)推荐使用动画.
    name: heart
    # 给图标添加动画
    animated: true
    # 16进制RGB颜色
    color: "#ff0000"
```

如果要使用其它图案，可以到[fontawesome官网](https://fontawesome.com/v4.7.0/icons/)查找



#### 4.3.3 备案信息

在网页底部显示网站备案信息

主题配置文件：

```
	beian:
    enable: true
    icp: XICP备XXXXXXXX号
```



### 4.4 文章知识版权

主题配置文件：

```
creative_commons:
  license: by-nc-sa
  sidebar: true #是否在侧边栏显示图标
  post: true 	#是否在文章底部显示版权信息
  language: deed.zh #语言，可用的参数有deed.zh, deed.fr, deed.de 等
```

支持的版权组合：by | by-nc | by-nc-nd | by-nc-sa | by-nd | by-sa | zero

1. 署名（Attribution，简写为BY）：必须提到原作者。

2. 非商业用途（Noncommercial，简写为NC）：不得用于盈利性目的。

3. 禁止演绎（No Derivative Works，简写为ND）：不得修改原作品, 不得再创作。

4. 相同方式共享（Share Alike，简写为SA）：允许修改原作品，但必须使用相同的许可证发布。



### 4.5 SEO优化

主题配置文件：

```
# 整合重复的页面，在你的hexo中设置一个权威标签，可以优化博客的seo
# 请参阅：https://support.google.com/webmasters/answer/139066
# 提示：打开此选项之前，请确保在网站配置文件中设置了URL（例如：url:http://yourdomain.com）
canonical: true

# 更改网站副标题（网站描述）和所有文章/页面标题的结构，以优化SEO
seo: true

# 如果为true，则会在标签页显示副标题，副标题在网站配置文件中设置
# subtitle: Subtitle
index_with_subtitle: true

# 自动添加带有base64加密和解密的外部URL
exturl: true
```



### 4.6 导航栏菜单

主题配置文件：

```
# '||'后面是fontawesome图标名称，可以到https://fontawesome.com/v4.7.0/icons/查找
# '/'代表根目录，即网站配置文件中的URL（例如：url:http://yourdomain.com）
menu:
  home: / || home
  about: /about/ || user
  tags: /tags/ || tags
  categories: /categories/ || th
  archives: /archives/ || archive
  minecraft: https://mc.rytinselver.com/ || cube # 外链前必须有http://或https://
  #schedule: /schedule/ || calendar
  #sitemap: /sitemap.xml || sitemap
  #commonweal: /404/ || heartbeat
  # 自定义页面如下，使用时去掉#注释
  #页面名: /页面名/ ||图标名

menu_settings:
  icons: true # 显示图标
  badges: true # 显示标签
```

自定义页面：

命令行进入博客目录

```
$ hexo new page 页面名
```

然后就可以在主题配置文件中添加了

这样还不够，如果你的网站是中文或者其他语言的话，我们需要修改语言文件，让他适配我们需要的语言

打开`themes/next/languages`，选择你需要的语言文件，默认语言文件为`en.yml`，简体中文是`zh-CN.yml`，其他语言请自行查找

修改这部分即可

```
menu:
  home: 首页
  archives: 归档
  categories: 分类
  tags: 标签
  about: 关于
  search: 搜索
  schedule: 日程表
  sitemap: 站点地图
  commonweal: 公益 404
  minecraft: Minecraft
```



### 4.7 选择主题样式

Next主题提供了四种主题样式，可以在Github上找到demo，选择一个你喜欢的即可

主题配置文件：

```
# Schemes 把你喜欢的主题样式前的#去掉，其他的#注释掉（四个中只能选一个）
#scheme: Muse
scheme: Mist
#scheme: Pisces
#scheme: Gemini
```



### 4.8 侧边栏设置

主题配置文件：

```
# Posts / Categories / Tags in sidebar.
# 在侧边栏中显示 日志 / 分类 / 标签 的信息
site_state: true
```



#### 4.8.1 添加社交链接

你可以添加你的社交媒体链接

主题配置文件：

```
# Social Links
# 用法: `Key: 网址 || 图标`
# Key是用户看到的名字
# '||'后面是fontawesome图标名称，可以到https://fontawesome.com/v4.7.0/icons/查找
# 没有用的就在前面加上#注释
social:
  GitHub: https://github.com/RyTinSelver || github
  E-Mail: mailto:RyTinSelver_@hotmail.com || envelope
  #比如这里我添加了贴吧
  TieBa: http://tieba.baidu.com/home/main?id=730731333437323537323931312015 || paw
  #Weibo: https://weibo.com/yourname || weibo
  #Google: https://plus.google.com/yourname || google
  #Twitter: https://twitter.com/selver001_yrl || twitter
  #FB Page: https://www.facebook.com/yourname || facebook
  #VK Group: https://vk.com/yourname || vk
  #StackOverflow: https://stackoverflow.com/yourname || stack-overflow
  #YouTube: https://youtube.com/yourname || youtube
  #Instagram: https://instagram.com/yourname || instagram
  #Skype: skype:yourname?call|chat || skype

#可以在社交链接前显示图标
social_icons:
  enable: true
  icons_only: false
  transition: true #以慢速开始和结束的过渡效果
```



#### 4.8.2 右上角Follow me on Github按钮

主题配置文件：

```
# Follow me on GitHub banner in right-top corner.
# 用法: `链接 || 标题`
#github_banner: https://github.com/RyTinSelver || Follow me on GitHub
```



#### 4.8.3 添加友链

主题配置文件：

```
# Blog rolls
links_icon: link #图标，默认是globe，fontawesome图标名称，可以到https://fontawesome.com/v4.7.0/icons/查找
links_title: 友情链接 #标题，跟下面的标题不是同一个，这是总的标题
links_layout: block #布局
#links_layout: inline #布局方式，默认是il
links:
  #标题: http://example.com
```



#### 4.8.4 侧边栏头像

主题配置文件：

```
# Sidebar Avatar
avatar:
  # 主题文件夹中 (source/images): /images/avatar.gif
  # 网站文件夹中 (source/uploads): /uploads/avatar.gif
  # 你也可以自定义别的路径
  url: /images/avatar.gif
  # 圆形的头像
  rounded: true
  # 透明度
  opacity: 1
  # 当鼠标经过的时候头像会滚动
  rotated: true
```



#### 4.8.5 文章目录

主题配置文件：

```
# 侧边栏文章目录
toc:
  enable: true
  # 自动在目录文字前添加序号，建议关闭，序号还是自己排比较好
  number: false
  # 如果目录标题太长会把所有文字放到下一行
  wrap: false
  # 最大目录层级，一般4就够了
  max_depth: 6
```



#### 4.8.6 其他设置（返回顶部按钮等）

主题配置文件：

```
sidebar:
  # 侧边栏位置，可用的值: left | right (只对 Pisces | Gemini 有效).
  position: left
  #position: right

  # 自定义侧边栏宽度，如果注释掉会默认初始值:
  # Muse | Mist: 320
  # Pisces | Gemini: 240
  #width: 300

  # 在哪些页面上显示侧边栏，可用的值 (只对 Muse | Mist 有效):
  #  - post    在文章页面展开，默认值
  #  - always  所有页面都展开侧边栏
  #  - hide    所有页面都隐藏侧边栏，只有在点击侧边栏按钮的时候才打开
  #  - remove  移除侧边栏，包括按钮
  display: post

  # 侧边栏和顶栏的间距 (只对 Pisces | Gemini 有效)
  offset: 12
  # 在侧边栏中显示返回顶部按钮
  b2t: false
  # 返回顶部按钮中显示阅读百分比
  scrollpercent: true
  # 在小屏幕上显示侧边栏 (只对 Muse | Mist 有效)
  onmobile: false
  # 点击空白处关闭侧边栏 (只对 Muse | Mist 有效)
  dimmer: false
```



### 4.9 文章设置

#### 4.9.1 摘要&阅读全文

主题配置文件：

```
# 自动滚动文章到 <!-- more --> 标记处
scroll_to_more: false

# 自动保存上次阅读的地方（Cookies）
save_scroll: false

# 自动在主页引用描述（description）作为摘要，description在文章的Front-matter中设置
excerpt_description: true

# 根据设置的长度自动摘录内容到主页，不推荐，false代表使用 <!-- more --> 控制摘录的内容
auto_excerpt:
  enable: false
  length: 150

# 阅读全文按钮
# 在摘要后显示阅读全文按钮
read_more_btn: true
```



#### 4.9.2 文章数据

主题配置文件：

```
# Post meta display settings
post_meta:
  item_text: true #显示文字
  created_at: true #发布时间
  updated_at: #更新时间
    enabled: true
    # 开启another_day，如果文章创建时间和修改时间不一样才会显示更新时间
    # 如果关闭another_day，不论怎样都会显示
    another_day: true
  categories: true #显示分类
```



#### 4.9.3 文章字数统计&阅读时间统计

主题配置文件：

```
# Post wordcount display settings
# 安装 Dependencies: https://github.com/theme-next/hexo-symbols-count-time
symbols_count_time:
  separated_meta: true #分别统计
  item_text_post: true #每篇文章进行统计（在文章数据中显示）
  item_text_total: false #站点总字数统计，显示在网页底部
  awl: 4 #平均文字长度，纯中文大约是2，纯英文大约5，中英混合是4
  wpm: 275 #阅读速度，越大越快
```

安装dependencies的方法：

终端进入博客文件夹：

```
$ npm install hexo-symbols-count-time --save
```



#### 4.9.4 代码块样式

主题配置文件：

```
codeblock:
  # 自定义边框半径
  # 默认是1，空着就好
  border_radius:
  # 添加复制按钮
  copy_button:
    enable: true
    # 显示复制结果
    show_result: true
    # 按钮样式，空着是默认，目前指有flat可用
    style: flat
```



#### 4.9.5 微信关注、打赏

主题配置文件：

```
# Wechat Subscriber
wechat_subscriber:
  #enabled: true
  #qcode: /path/to/your/wechatqcode e.g. /uploads/wechat-qcode.jpg
  #description: e.g. subscribe to my blog by scanning my public wechat account

# Reward
# enable设置为true，在每个文章后都显示打赏
# 你也可以手动在每篇文章的Front-matter中设置是否开启（reward: true | false）
reward:
  enable: false
  #comment: Donate comment here
  #wechatpay: /images/wechatpay.jpg
  #alipay: /images/alipay.jpg
  #bitcoin: /images/bitcoin.jpg
  #这三张图片应该以二维码的形式
```



#### 4.9.6 相关文章

主题配置文件：

```
# Related popular posts
# 安装 Dependencies: https://github.com/tea3/hexo-related-popular-posts
related_posts:
  enable: true
  title: 相关文章 #标题，空着就会显示默认值
  display_in_home: false #在主页中显示
  params:
    maxCount: 5 #最大文章个数
    PPMixingRate: 0.0 #相关度，这个值不是很清楚，一般不需要改
    isDate: true #显示文章日期
    isImage: false #显示文章图片
    isExcerpt: false #显示文章摘要
```

安装dependencies的方法：

终端进入博客文件夹：

```
$ npm install hexo-related-popular-posts --save
```



#### 4.9.7 在线文章编辑

不用担心出门在外不能改文章啦

主题配置文件：

```
# Post edit
# 安装 Dependencies: https://github.com/hexojs/hexo-deployer-git ，看过上一篇文章的应该都装过了，要是没有装过可以回去看一眼哦
# 两个Url就是你在托管平台上的repo
post_edit:
  enable: false
  url: https://github.com/user-name/repo-name/tree/分支名/source #查看文章源码
  #url: https://github.com/user-name/repo-name/edit/分支名/source #编辑文章源码
```



### 4.10 其他主题设置

#### 4.10.1 关闭手机百度跳转链接

主题配置文件：

```
# Disable Baidu tranformation on mobile devices.
disable_baidu_tranformation: true
```



#### 4.10.2 适应小屏幕

主题配置文件：

```
# Reduce padding / margin indents on devices with narrow width.
mobile_layout_economy: true
```



#### 4.10.3 自定义logo

显示在网站标题旁

主题配置文件：

```
# Custom Logo
# 不支持 Mist
custom_logo:
  enabled: false #开启自定义logo
  image: #图片地址如（/uploads/custom-logo.jpg）
```



#### 4.10.4 代码高亮样式

主题配置文件：

```
# Code Highlight theme
# 可用值: normal | night | night eighties | night blue | night bright
# 可以到https://github.com/chriskempson/tomorrow-theme查看
highlight_theme: normal
```



#### 4.10.5 在归档页面显示"评价"

主题配置文件：

```
# Enable "cheers" for archive page.
cheers_enabled: true
```



#### 4.10.6 自定义字体

主题配置文件：

```
font:
  enable: true

  # 字体源，如 //fonts.googleapis.com (默认).
  host:

  # Font options:
  # `external: true` 将从 `host` 加载字体族
  # `family: Times New Roman` 不需要引号
  # `size: xx` 单位是px

  # Global font 用在 <body> 标签内的内容.
  global:
    external: true
    family: Lato
    size:

  # 以下的字体不设置会默认为Global的值
  # 标题字体 (H1, H2, H3, H4, H5, H6).
  headings:
    external: true
    family:
    size:

  # 文章内容字体
  posts:
    external: true
    family:

  # Logo标题字体
  logo:
    external: true
    family:
    size:

  # 代码块或者<code>标签内的字体
  codes:
    external: true
    family:
    size:
```



### 4.11 第三方服务设置

大多数第三方服务要安装依赖

dependencies的安装方法在配置文件中的github链接里有详细说明

quicklink的安装方法是把dist文件夹放在`source/lib/quicklink/`中

简单介绍一下一些第三方服务的功能

具体使用方法自行摸索，都很简单的

1. Math：支持数学公式，使用mathjax或者katex引擎
2. Pdf：支持pdf显示
3. Han/Pangu：更好的中英文混合排版
4. Quicklink：加快网页速度，可以设置timeout值，如果在获取某个资源时超时会跳过
5. Swiftype：第三方搜索引擎
6. Baidu Analytics：百度统计，修改字段 `baidu_analytics` 字段，值设置成你的百度统计脚本 id（定位到站点的代码获取页面，复制 `hm.js?` 后面那串统计脚本 id）
7. Growingio Analytics：Growingio统计，详情见[Growingio](https://www.growingio.com)
8. Disqus：炒鸡好用的评论系统，但是在国内被墙，呜呜～～
9. Changyan：畅言评论
10. Valine：Valine是基于leancloud的评论系统，不需要登陆
11. LiveRe：来必力评论系统，也支持免登陆
12. Gitment：基于github的issue功能，支持markdown
13. Gitalk：同上，本博客使用的就是Gitalk评论系统
14. Baidu Share：丑陋的分享系统
15. AddThis Share：分享系统，需要在[AddThis官网](https://www.addthis.com)注册账号
16. NeedMoreShare2：炒鸡好用的分享系统，无脑推荐
17. Google Analytics：Google统计，使用方法就是复制黏贴追踪ID即可`localhost_ignored`最好打开
18. Google Webmaster tools/Bing Webmaster tools/Yandex Webmaster tools/Baidu Webmaster tools：站长工具，进入对应网站获取认证代码即可（验证方法选择`HTML Tag`，复制`content`后的内容）
19. CNZZ Count：CNZZ统计，没啥用
20. Application Insights：应用监视器
21. Facebook Comments Plugin：评论系统，在大陆被墙，需要依赖Facebook SDK
22. Star Rating：星级评定，需要注册账号
23. Leancloud Visitors：访问量统计，教程：[为NexT主题添加文章阅读量统计功能](https://notes.wanghao.work/2015-10-21-%E4%B8%BANexT%E4%B8%BB%E9%A2%98%E6%B7%BB%E5%8A%A0%E6%96%87%E7%AB%A0%E9%98%85%E8%AF%BB%E9%87%8F%E7%BB%9F%E8%AE%A1%E5%8A%9F%E8%83%BD.html#%E9%85%8D%E7%BD%AELeanCloud)，可以显示每篇文章的阅读量，推荐和不蒜子一起使用
24. Firestore：也是访问量统计的，没用过，感兴趣的小伙伴可以试试
25. Busuanzi Count：不蒜子统计，优点是不需要注册什么的，缺点是主页不能显示每篇文章的访问量，但可以在网页底部显示站点总访问量，推荐和Leancloud Visitors一起用
26. Tencent Analytics：腾讯分析
27. Tencent MTA：腾讯移动分析
28. Baidu Push：每次打开链接自动向百度推送，SEO好帮手
29. Google Calendar：谷歌日历
30. Algolia Search：第三方搜索引擎
31. Local search：本地搜索引擎
32. Bookmark：书签，可以自动或者手动添加书签，保存阅读进度
33. Reading Progress Bar：顶部阅读进度条，可以设置颜色和宽度



### 4.12 标签样式

主题配置文件：

```
# Note tag (bs-callout)
note:
  # 标签样式:
  #  - simple    默认样式
  #  - modern    现代
  #  - flat      扁平
  #  - disabled  不使用CSS样式（纯文字）
  style: flat
  icons: true #标签图标
  border_radius: 3 #边距
  # 现代或者扁平样式设置亮度偏移值 (modern: -12 | 12; flat: -18 | 6)
  light_bg_offset: 0

# Label tag
label: true #显示标签

# Tabs tag 标签页
tabs:
  enable: true
  transition: #渐变效果
    tabs: false
    labels: true
  border_radius: 0
```



## 5.个性化

主题配置文件一律指`themes\next\_config.yml`！！

所有路径都是在`/themes/next/`下

注意`.yml`文件严格遵守 [YAML语法](https://yaml.org/spec/1.2/spec.html)

​	1.冒号后面必须有一个空格

​	2.使用缩进表示层级关系（两个空格，不支持Tab）

​	3.同一层级的元素必须对齐

​	4.#表示注释，可以使用多个如：###

​	5.如属性值为字符串，若不含特殊符号则可以省略单引号'

推荐使用编辑器：[Atom](https://atom.io/)（macOS用户也可以使用Xcode）



### 5.1 动画效果

主题配置文件：

```
motion:
  enable: true #开启/关闭动画效果
  async: true #异步加载
  transition:
    # 所有动画效果:
    # fadeIn | fadeOut | flipXIn | flipXOut | flipYIn | flipYOut | flipBounceXIn | flipBounceXOut | flipBounceYIn | flipBounceYOut
    # swoopIn | swoopOut | whirlIn | whirlOut | shrinkIn | shrinkOut | expandIn | expandOut
    # bounceIn | bounceOut | bounceUpIn | bounceUpOut | bounceDownIn | bounceDownOut | bounceLeftIn | bounceLeftOut | bounceRightIn | bounceRightOut
    # slideUpIn | slideUpOut | slideDownIn | slideDownOut | slideLeftIn | slideLeftOut | slideRightIn | slideRightOut
    # slideUpBigIn | slideUpBigOut | slideDownBigIn | slideDownBigOut | slideLeftBigIn | slideLeftBigOut | slideRightBigIn | slideRightBigOut
    # perspectiveUpIn | perspectiveUpOut | perspectiveDownIn | perspectiveDownOut | perspectiveLeftIn | perspectiveLeftOut | perspectiveRightIn | perspectiveRightOut
    post_block: fadeIn
    post_header: slideDownIn
    post_body: slideDownIn
    coll_header: slideLeftIn
    # 只对 Pisces | Gemini 有效
    sidebar: slideUpIn
```



### 5.2 加载进度条

主题配置文件：

```
# Progress bar in the top during page loading.
# 安装 Dependencies: https://github.com/theme-next/theme-next-pace
pace: true #开启进度条
# 可用的主题:
# pace-theme-big-counter | pace-theme-bounce | pace-theme-barber-shop | pace-theme-center-atom
# pace-theme-center-circle | pace-theme-center-radar | pace-theme-center-simple | pace-theme-corner-indicator
# pace-theme-fill-left | pace-theme-flash | pace-theme-loading-bar | pace-theme-mac-osx | pace-theme-minimal
pace_theme: pace-theme-center-simple
```

默认是蓝色的

如果觉得不好看，可以打开`source/lib/pace`中你喜欢的主题

这里拿`pace-theme-center-simple.min.css`做例子

查找'#'，一般代码编辑器都有查找功能

定位到第一个`background`后面的'#'，这是空进度条的背景颜色，默认为白色'#fff'

第二个是`border`后的'#'，这是进度条框的颜色，默认是蓝的'#26d'

第三个`background`是进度条背景颜色，默认是蓝色'#26d'

注意这里的RGB颜色是缩写`#fff` = `#ffffff` 、`#26d` = `#2266dd` 

只有CSS支持缩写，HTML不支持

不同的进度条主题更改颜色的地方会不同，我就不全部列举了，你们自己找吧嘻嘻



### 5.3 背景动画

主题配置文件：

```
# Canvas-nest
……
# JavaScript 3D library.
……
# Canvas-ribbon
```

这个自己设置就好了，很方便的

但我不太喜欢背景动画，看久了眼花



### 5.4 Mist主题主页文章分割线

Next是自带分割线的，只不过Mist屏蔽了而已

所以我们把屏蔽去掉

`source/css/_schemes/Mist/_posts-expanded.styl`：

```
	.post-eof { display: none; }
```

把这一行删除就好了= =

如果你觉得分割线不好看

可以修改`source/css/_common/components/post/post-eof.styl`：

```
.posts-expand {
  .post-eof {
    display: block;
    margin: $post-eof-margin-top auto $post-eof-margin-bottom;
    width: 50%;
    height: 2px;
    opacity: 0.5;
    background: $grey-light;
    text-align: center;
  }
}
```

随意发挥吧



### 5.5 鼠标点击显示红心

鼠标点击小红心在`source/js/src/cursor`文件目录下添加`love.js`文件。内容为：

```
!function(e,t,a){function n(){c(".heart{width: 10px;height: 10px;position: fixed;background: #f00;transform: rotate(45deg);-webkit-transform: rotate(45deg);-moz-transform: rotate(45deg);}.heart:after,.heart:before{content: '';width: inherit;height: inherit;background: inherit;border-radius: 50%;-webkit-border-radius: 50%;-moz-border-radius: 50%;position: fixed;}.heart:after{top: -5px;}.heart:before{left: -5px;}"),o(),r()}function r(){for(var e=0;e<d.length;e++)d[e].alpha<=0?(t.body.removeChild(d[e].el),d.splice(e,1)):(d[e].y--,d[e].scale+=.004,d[e].alpha-=.013,d[e].el.style.cssText="left:"+d[e].x+"px;top:"+d[e].y+"px;opacity:"+d[e].alpha+";transform:scale("+d[e].scale+","+d[e].scale+") rotate(45deg);background:"+d[e].color+";z-index:99999");requestAnimationFrame(r)}function o(){var t="function"==typeof e.onclick&&e.onclick;e.onclick=function(e){t&&t(),i(e)}}function i(e){var a=t.createElement("div");a.className="heart",d.push({el:a,x:e.clientX-5,y:e.clientY-5,scale:1,alpha:1,color:s()}),t.body.appendChild(a)}function c(e){var a=t.createElement("style");a.type="text/css";try{a.appendChild(t.createTextNode(e))}catch(t){a.styleSheet.cssText=e}t.getElementsByTagName("head")[0].appendChild(a)}function s(){return"rgb("+~~(255*Math.random())+","+~~(255*Math.random())+","+~~(255*Math.random())+")"}var d=[];e.requestAnimationFrame=function(){return e.requestAnimationFrame||e.webkitRequestAnimationFrame||e.mozRequestAnimationFrame||e.oRequestAnimationFrame||e.msRequestAnimationFrame||function(e){setTimeout(e,1e3/60)}}(),n()}(window,document);
```

在主题配置文件添加：

```
# Cursor effects
cursor:
  enable: true
  type: love
```

创建`layout/_third-party/cursor/effects.swig`文件添加以下代码：

```
{% if theme.cursor.enable %}
  {% set cursor_effect = '/js/src/cursor/' + theme.cursor.type + '.js' %}
  <script type="text/javascript" src="{{ cursor_effect }}"></script>
{% endif %}
```

然后在`layout/_layout.swig`中include一下：

```
{% include '_third-party/cursor/effects.swig' %}
```

不要说我强迫症，我只是为了以后方便添加别的特效= =



### 5.6 修改各种参数（字体大小、背景、组件大小等）

在`source/css/ _variables/base.styl`中有各种参数包括字体大小，背景颜色之类的，而且都有注释标明



### 5.7 添加Gitter即时聊天

首先注册[gitter](https://gitter.im/ )账号创建房间

在主题配置文件添加：

```
# Gitter
# Dependencies: https://github.com/wshunli/hexo-gitter
gitter:
  enable: true
  room: # 填写你的房间名，不需要引号
```

安装hexo-gitter依赖：

```
$ npm install hexo-gitter --save
```

其实就一行代码= =，你其实直接到官网复制黏贴也行的，但谁让我懒呢。。。

在`layout/_third-party/comments/`中添加`gitter.swig`内容如下：

```
{% if theme.gitter.enable %}
  {{ gitter(theme.gitter.room) }}
{% endif %}
```

然后在`layout/_layout.swig`中include一下：

```
{% include '_third-party/comments/gitter.swig' %}
```

继续强迫症嘻嘻



### 5.8 侧边栏换到左边（Mist|Muse）

打开`source\css\_common\components\sidebar\sidebar.styl`
将第3行`right`改为`left`

```
.sidebar {
  position: fixed;
  left: 0;
  top: 0;
  bottom: 0;
```

打开`source\css\_common\components\sidebar\sidebar-toggle.styl`
将第3行冒号前的`right`改为`left`

```
left: $b2t-position-right;
```

将`source\css\_common\components\back-to-top.styl`
将第5行冒号前的`right`改为`left`

```
left: $b2t-position-right;
```

打开`source\js\src\motion.js`利用搜索功能找到改文档中的`paddingRight`字段，将`paddingRight`改为`paddingLeft`(共两处)。

**修正缩小窗口时的bug**

找到`source/js/src/motion.js`文件，在`$(document).ready(function(){})`内添加内容：

```
$(document).ready(function () {

	window.onload=function(){
	    var bwol=document.body.offsetWidth;
	    if(bwol < 975){
		$('aside#sidebar').css("display","none");
		$('body').css("paddingLeft","0px");
	    }
	}
	window.onresize = function(){
	    var bwos=document.body.offsetWidth;
	    bwos < 975 && $('body').velocity('stop').velocity({paddingLeft: 0},0);
	    if($('aside#sidebar').css('display') != 'none' && $('aside#sidebar').css('width')!='0px')
		$('body').velocity('stop').velocity({paddingLeft: 350},0);
	}

	   NexT.motion = {};
	   
	   ...
```



### 5.9 NeedMoreShare按钮换到右边

打开`source\css\_common\components\third-party\needsharebutton.styl`

将第17行的`left`改为`right`

将第23行的`14px`改成`10px`、`10px`改成`14px`

```
#needsharebutton-float {
    position: fixed;
    bottom: 38px; #你可以修改这个值使它离网页底部更远一点
    right: -8px;
    z-index: 9999;
    cursor: pointer;

  .btn {
    //display: initial;
    padding: 0 14px 0 10px
    border: 1px solid $btn-default-border-color;
    border-radius: 4px;
  }
}
```

再打开主题配置文件：

将`float:`中的`position`改成`middleRight`

```
needmoreshare2:
  enable: true
  postbottom:
    enable: false
    options:
      iconStyle: box
      boxForm: horizontal
      position: bottomCenter
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook
  float:
    enable: true
    options:
      iconStyle: default
      boxForm: horizontal
      position: middleRight
      networks: Weibo,Wechat,Douban,QQZone,Twitter,Facebook,GooglePlus
```



### 5.10 在小屏幕上显示返回顶部按钮（不显示侧边栏）

更改`source\css\_common\components\back-to-top.styl`：

将所有`onmobile`改为`b2tmobile`

```
	+tablet() {
    fixbutton() if hexo-config('sidebar.b2tmobile');
    hide() if not hexo-config('sidebar.b2tmobile');
  }
  +mobile() {
    fixbutton() if hexo-config('sidebar.b2tmobile');
    hide() if not hexo-config('sidebar.b2tmobile');
  }
```

然后打开主题配置文件：

在`onmobile`和`dimmer`之前加入`b2tmobile`像这样

```
	# Enable sidebar on narrow view (only for Muse | Mist).
  onmobile: false
  # Enable b2t button on narrow view.
  b2tmobile: true #当true的时候在移动设备上显示b2t按钮
  # Click any blank part of the page to close sidebar (only for Muse | Mist).
  dimmer: false
```

这样就可以和侧边栏`onmobile`分开来了



### 5.11 为header添加背景图片

修改`source\css\_common\components\header\header.styl`：

图片的属性请自己控制，也可以参照我的方法

```
.header {
  background: $head-bg no-repeat right bottom;
  background-size: auto 100%;
}

.header-inner {
  height: 380px;
  position: relative;
  margin-left: 0;

  +mobile(){ height: 50px; }
}
```

修改`source\css\_variables\base.styl`

```
$head-bg                        = url('../images/background.png')
```

然后将背景图片放在`source/images/background.png`



### 5.12 修改超链接样式

修改`source\css\_common\components\post\post.styl`：

在第一个`.post-body{}`后添加：

```
.post-body span a{
  color: $grey-dark;
  border-bottom: none; #这是去掉下划线

  &:hover {
    color: $blue;
    border-bottom: none;
  }
}
```

这里只有`span`标签的，你也可以继续填加`li`、`ul`、`td`、`p`等等

你可以自定义其他颜色



## END

暂时木有更多了

### 特别鸣谢

- [Hexo+Next配置Blog](https://luosv.github.io/2017/03/20/%E5%93%8E%E6%8A%98%E8%85%BE/Hexo+Next%E9%85%8D%E7%BD%AEBlog/)	——	by [luosv](https://luosv.github.io/)
- [Blog-调整NexT主题Mist外观侧边栏在左](https://fish-404.github.io/Blog-adjust-sidebar-nextmist-left/)	——	by [Fish__404](https://fish-404.github.io/)

