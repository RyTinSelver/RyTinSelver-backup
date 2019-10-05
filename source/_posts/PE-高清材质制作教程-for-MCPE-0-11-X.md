---
title: '[PE] 高清材质制作教程 for MCPE 0.11.X'
category: tutorials
abbrlink: 42952
date: 2015-07-04 23:17:47
---

![epr](https://img.rytinselver.com/mc/tutorials/hdtexturefix/epr.png)

现在几乎没什么材质教程

特别是方块移植和高清修复教程

所以本人选择了一个高(la)清(ji)材质(256X)来做这个教程

另外，现在只有关于128X和64X的高清修复材质和资源

所以本帖还附上256X的高清修复meta哦！

当然，物品也是256X的哦！

<!-- more -->



## 第一章 准备工作



1. 准备好一台手机

2. 如果有电脑的准备电脑

3. 需要用到的软件资源：

     

   Android：

   - PS TOUCH For Android下载地址:

     [百度网盘](http://pan.baidu.com/s/1i3l5TFv)

   - 或者 像素小画家IsoPix Pro 下载地址：

     [下载地址](http://down1.cnmo.com/cnmo-app/a212/IsoPix_Pro_v1_32.apk)

   - 全能文件转换器：

     [下载链接](http://5.26923.com/download/software/000/001/a1b4c3c2ee3e399c5d3050f7963a93d0.apk)

   - ES文件浏览器：

     [下载链接](http://211.167.105.107:83/1Q2W3E4R5T6Y7U8I9O0P1Z2X3C4V5B/gdown.baidu.com/data/wisegame/801440d2ff2e2066/ESdanganliulanqi_227.apk)

   

   PC：

   - Photoshop CS6/CC/CC2014或更高：

     ![PhotoshopCC](https://img.rytinselver.com/mc/tutorials/hdtexturefix/photoshopcc.png)

     PS CS6 For Windows下载地址:

     [百度网盘](http://pan.baidu.com/s/19SBW4)

     安装与破解教程:

     [百度贴吧](http://tieba.baidu.com/p/2742847351)

     PS CC For Windows下载地址:

     [百度网盘](http://pan.baidu.com/s/1dDrJFiD)

     PS CC 2014 For Windows下载地址:

     64位: [百度网盘](http://pan.baidu.com/s/1vT6zG)

     32 位: [百度网盘](http://pan.baidu.com/s/1gd3kQI3)

     破解补丁: [百度网盘](http://pan.baidu.com/s/1jG2yNXG)

     安装与破解教程: [百度贴吧](http://tieba.baidu.com/p/3118897260)

     *以上内容转自Photoshop吧置顶帖*

   - 格式工厂：

     [下载地址](http://dlsw.baidu.com/sw-search-sp/2015_07_03_17/bind1/13052/rj_fl3039.exe)

   

4. 准备好0.11.1游戏安装包

5. 准备好方块启动器 Block Launcher Pro 1.9.10

6. 方块启动器&PIE修改器 已付费版下载：

   [百度贴吧](http://tieba.baidu.com/p/3754188044?fr=good)



## 第二章 了解材质文件



1. 把下载好的0.11.0解压(怎么解压就不用我说了吧)

   解压后就是这样

   ![TextureFiles-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-1.png)

   然后进入`assets`文件夹

   ![TextureFiles-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-2.png)

   材质主要的文件就是`images`和`lang`，所以这里我们就把这两个文件夹拖出来，其他的就不要了

   放到一个你喜欢的文件夹，比如这里我新建了一个文件夹叫`[0.11.X]Enhanced Photo Realism`

   ![TextureFiles-3](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-3.png)

   把`images`和`lang`两个文件夹复制进去

   

2. 然后我们来看看这些文件都有些什么用呢？

   首先打开`images`文件夹，Whaaaaaaaaaaaaa！这么多东西啊！

   ![TextureFiles-4](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-4.png)

   首先我们先排除几个做材质不需要的文件

   ![TextureFiles-5](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-5.png)

   ![TextureFiles-6](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-6.png)

   ![TextureFiles-7](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-7.png)

   三个`.images`文件，可以删除，也可以留着装比

   ……

   ……

   然后就让我们来看一看这些文件吧

   

3. Images文件夹讲解

   - `armor`文件夹

     armor——顾名思义就是盔甲，所以里面就是盔甲的贴图

     ![TextureFiles-8](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-8.png)

     分别是锁链甲，皮甲，钻石甲，金甲，铁甲

   

   - art文件夹

     `art`文件夹里面只有一个文件，恩~那就是挂画啦（并且大小不限哦）

     ![TextureFiles-9](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-9.png)

   

   - Color Map文件夹

     这是草地根据地形和区块的不同的颜色变化，一些材质包有这个文件，一些没有

     ![TextureFiles-10](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-10.png)

   

   - entity文件夹

     里面是一些实体的贴图

     有矿车，鱼钩，火焰弹，和船的六种木板色

     ![TextureFiles-11](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-11.png)

     ![TextureFiles-12](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-12.png)

     *PS：船贴图和PC略有不同*

   

   - environment文件夹

     里面就是太阳，月亮，云还有摧毁方块时的贴图

     ![TextureFiles-13](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-13.png)

   

   - font文件夹

     字体，这个可以先不管，觉得好可以拿别人做好的，自己弄很不方便

     由于文件太多我就不截图了

   

   - gui文件夹

     里面是游戏里的gui（物品栏什么的）

     ![TextureFiles-14](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-14.png)

     *PS：需要自己动手画，与PC不同*

   

   - item文件夹

     包括木牌，箭和箱子的贴图

     ![TextureFiles-15](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-15.png)

   

   - mob文件夹

     当然就是萌(chun)萌(chun)哒怪物啦

     还有Steve和Alex

     ![TextureFiles-16](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-16.png)

   

   - 其他文件

     那就是没有文件夹的文件啦

     ![TextureFiles-17](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-17.png)

     慢点。。。。一个个来

     *compass——指南针贴图，只支持16X*

     *fire_atlas——动态火焰贴图，16X以上会变成静态*

     *items.meta——物品贴图items-opaque中每个物品所在的位置(这个以后会重点讲的)*

     *items-opaque——物品贴图*

     *terrain.meta——方块贴图terrain-atlas.tga中每个方块所在的位置(会与items.meta一起讲)*

     *terrain-atlas.tga~terrain-atlas_mip3.tga——方块贴图，使用了MipMap技术(以后会重点讲)*

     *watch-atlas——时钟贴图(与PC版不完全相同，并且只支持16X)*

   

4. lang文件夹讲解

   `lang`文件夹里东西不多，也很好理解，就是各种语言的翻译

   ![TextureFiles-18](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-18.png)

   至于中文翻译捉急的修复以后会讲的

   

## 第三章 正式开始前的最后准备(原创材质请跳过)



1. 下载你喜欢的PC材质16X~256X都行(看你手机配置)

   这是我下载的`Enhanced Photo Realism 256x256 1.8`

   ![TextureFiles-19](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-19.png)

   然后解压他

   ![TextureFiles-20](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-20.png)

   

2. 来看看里面都是些什么

   其实我们只需要`assets\minecraft\textures`里面的文件

   ![TextureFiles-21](https://img.rytinselver.com/mc/tutorials/hdtexturefix/texturefiles-21.png)

   `models`是方块模型，PC1.8出现的，我们不用管他

   `painting`就是`art`这里没有`mob`文件夹，是的，`mob`都在`entity`文件夹里

   `font`文件夹PE不可用，别管他

   `blocks`文件夹就是将来要贴到方块贴图里方块材质贴图

   

3. 调整好心态，做好充分的准备后让我们正式开始移植吧



## 第四章 Images文件夹的移植



1. 首先我们先来移植`armor`文件夹

   PC材质：`assets\minecraft\textures\models\armor\` 目录下

   ![Images-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-1.png)

   对比一下会发现，PC和PE的文件名字不相同

   没事，我们只需要把PC文件名改成PE的就行了

   `chainmail_layer`改为`chain`

   `diamond_layer`改为`diamond`

   `gold_layer`改为`gold`

   `iron_layer`改为`iron`

   `leather_layer`改为`cloth`

   然后复制过去把原文件替换就行啦

   *PS：注意leather_layer_1_overlay、leather_layer_2_overlay不要复制*

   ![Images-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-2.png)

   这样就OK啦

   

2. art文件夹的移植

   挂画材质在PC版：`assets\minecraft\textures\painting\` 文件夹下

   名字依然不同

   于是我们还是按照原来的方法

   将`paintings_kristoffer_zetterstrand`改为`kz`

   ![Images-3](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-3.png)

   完成啦！

   

3. colormap文件夹的移植

   `colormap`文件在PC版：`assets\minecraft\textures\colormap\` 文件夹下

   直接复制粘帖替换原文件就行

   我就不放图啦

   

4. entity文件夹的移植

   `minecart`文件在PC版：`assets\minecraft\textures\entity\` 文件夹下

   `fireball`文件在PC版：`assets\minecraft\textures\items\` 文件夹下

   而`boat`和`fishhook`在PC版里并没有一样的贴图

   于是我们就自己画吧！

   首先用Photoshop(以下简称PS)打开`fishhook.png`文件

   ![Images-4](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-4.png)

   按照这样的规律改就是啦，不过楼主觉得原来的挺好，我就不改啦(懒癌发作)

   然后我们打开船的贴图

   这里我用白桦木的做演示`boat_birch`

   ![Images-5](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-5.png)

   WTF。。。。。什么gui

   不要紧，楼主教大家一个好方法

   首先用PS的图像→图像大小

   ![Images-6](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-6.png)

   把高度改为你材质的分辨率，我这里是256X的所以改为256

   其他的不动

   然后把图片全选，Delete全部删除

   接下去进入PC版：`assets\minecraft\textures\blocks\` 文件夹下找到相对应的木板文件

   比如我这里是白桦木的船，于是就打开`planks_birch.png`

   ![Images-7](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-7.png)

   ![Images-8](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-8.png)

   用矩形选框工具 这样设置

   宽度和高度都是你材质的分辨率，也就是这张贴图的分辨率

   然后把贴图全选

   粘帖4次把船的贴图填满![img](file:////tmp/wps-rytinselver/ksohtml/wpsylDGHV.jpg)

   就成了这样

   ![Images-9](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-9.png)

   然后右键图层0选择合并可见图层

   ![Images-10](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-10.png)

   然后。。。。就没有然后了~~~

   船的贴图就这样做完了~~~

   是不是很简单呢

   效果也很好哦

   其他的船文件也是同理

   

5. environment文件夹的移植

   `environment`文件在PC版中：`assets\minecraft\textures\environment\` 文件夹下

   将PC版文件夹中的`clouds.png`、`moon_phases.png`和`sun.png`文件复制并替换掉PE版的文件

   中间的`destroy_stage`……不用管他

   就变成了这样

   ![Images-11](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-11.png)

   

6. font文件夹的移植

   这个电脑版与手机版不一样，自己做也很困难，一个个字改过去肯定不是最好的做法

   所以最好的做法就是——不管他

   

7. item文件夹的移植

   `item`文件在PC版：`assets\minecraft\textures\entity\` 文件夹下

   找到名字差不多的复制过来就行

   *PS：注意chest文件夹里只需要把PC版的两个文件名与PE版文件名差不多的复制过来就行了*

   知道为什么都是“差不多”吗？

   因为PC版是arrow.png，PE版则是arrows.png

   PC版是normal_double.png，PE版则是double_normal.png

   ![Images-12](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-12.png)

   

8. mob文件夹的移植

   `mob`文件都是在PC版：`assets\minecraft\textures\entity\` 文件夹下

   第一个文件夹Skin我们就不管他了

   把PC版文件夹中的这些文件夹复制并替换掉原文件

   ![Images-13](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-13.png)

   然后把PC版中的`pig_saddle.png`文件改名为`saddle.png`然后替换PE的原文件

   接下去用PS打开PC版中的`zombie.png`

   依次点击图像→画布大小

   ![Images-14](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-14.png)

   像图中这样设置，把高度改成宽度的一半(比如宽度是512告诉就为256……)

   其他的要和图中一模一样

   ![Images-15](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-15.png)

   点击继续！

   保存文件并将文件覆盖掉PE版原文件

   好的，随后打开电脑版中的`zombie_pigman.png`文件，和上面方法一样，用PS进行修改

   将文件改名为`pigzombie.png`

   然后覆盖掉PE版原文件

   然后将`villager`文件夹替换

   打开PC版的`spider.png`(`cavespider`同理)

   再打开`spider_eyes.png`

   在PS中将`spider_eyes.png`中的图像全选并复制

   然后到`spider.png`的图中按住Ctrl+Shift+V来复制

   ![Images-16](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-16.png)

   合并可见图层

   然后点击保存

   然后打开格式工厂

   将保存好的文件拖进去像这样设置

   ![Images-17](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-17.png)

   将转换好的文件替换掉PE版原文件

   然后`enderman`也是一样

   将PC版中的`enderman.png`和`enderman_eyes.png`结合以后用格式工厂转换成`enderman.tga`并覆盖PE版原文件

   接下去打开PC版中的`wolf_tame.png`和`wolf_collar.png`

   和`spider`文件一样，我就不再重复了

   最后打开PC版中的`sheep.png`与`sheep_fur.png`

   然后在`sheep.png`的界面中依次点击图像→画布大小

   ![Images-18](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-18.png)

   把宽度和高度设置成一样的，其余的按照图中设置

   ![Images-19](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-19.png)

   将`sheep_fur.png`中的图像全选并复制到下方的空白处(贴着底部和左边)

   最后合并可见图层并保存

   然后用格式工厂转换成`sheep.tga`并替换掉PE版原文件

   ![Images-20](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-20.png)

   然后`mob`文件夹的移植就完成啦

   ![Images-21](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-21.png)

   

9. compass.png的移植

   `compass.png`在PC版：`assets\minecraft\textures\items\` 目录下

   复制黏贴就行，没什么好说的，如果不是16x的记得把图片宽度改为16，具体方法见上文

   

10. fire_atlas.png的移植

   `fire_atlas.png`在PC版：`assets\minecraft\textures\blocks\` 目录下的`fire_layer_0.png`

   改名并复制替换PE版原文件，如果不是16x的记得把图片宽度改为16，具体方法见上文

   来张合影！

   ![Images-22](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-22.png)

   

11. watch-atlas.png的移植

    PC版：`assets\minecraft\textures\items\` 文件夹下的`clock.png`

    这两个文件的排列方式不同，需要大家用PS把原图一个一个按照从左到右从上到下依次贴上去

    PC图：

    ![Images-23](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-23.png)

    PE图：

    ![Images-24](https://img.rytinselver.com/mc/tutorials/hdtexturefix/images-24.png)

    ：表刷屏！

    *PS：本章内容就结束了，其他的文件会重点讲*



## 第五章 GUI的移植



1. 首先，GUI文件包括`images\gui\` 文件夹&`images`文件夹里的`particles.png`

    

2. gui文件夹的移植

   ![GUI-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-1.png)

   这个文件夹不用管他

   我们先看`background`文件夹

   就是开始界面的背景图片

   里面有六张图片

   ![GUI-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-2.png)

   如果是移植的话，这几张图片在PC版：`assets\minecraft\textures\gui\title\background\` 文件夹中

   直接复制黏贴即可

   自己做材质的同学注意了0和1是连在一起的1和2也是连在一起的，2和3也是，4则是顶上的图片，5就是下面

   的图片，整体来说：就是一个正方体，你站在里面。。。。。

   让我吐槽一下这背景，作者你又偷懒

   ![GUI-3](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-3.png)

   然后是`background.png`文件

   就是加载世界时的界面

   我去怎么两个background，mojang你。。。

   好啦，文件在PC版：`assets\minecraft\textures\gui\options_background.png`

   改成`background.png`然后复制并替换PE版原文件

   `bg32.png`这个文件我们不管

   然后是`cursor.png`

   我们也不管

   `default_world.png`——还是不管。。。。。

   接下去是`gui.png`

   这个有点复杂，首先在PC版：`assets\minecraft\textures\gui\` 文件夹下找到`widgets.png`

   然后用PS打开它

   然后再用PS打开PE版文件

   ![GUI-4](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-4.png)

   有一坨奇奇怪怪的东西可以删了他。。

   然后将PE版文件的图像大小改为和PC版`widgets`文件一样的大小

   记得重新采样要选择“邻近(硬边缘)”

   然后将PC版`widgets`文件全选然后复制

   然后在到PE的文件里按住Ctrl+Shift+V复制

   如果PC版贴图有白色背景请手动删除

   先别急着合并可见图层！(合并了请按Ctrl+Z返回)

   ![GUI-5](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-5.png)

   把这两部分删去，因为复制以后是新图层所以不会删除原版的图片

   然后回到PC版来

   把这三个球中的一个复制到PE版里

   ![GUI-6](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-6.png)

   然后选中他，怎么选都行

   ![GUI-7](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-7.png)

   依次点击右键→自由变换

   然后就变成了这样

   ![GUI-8](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-8.png)

   然后你懂的，把他缩小成和PE版里那个同颜色的球的大小一样并把他覆盖掉

   如果不能完全覆盖那就换成原来的图层把他删去就行了

   其他两个球一样

   做完后——

   ![GUI-9](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-9.png)

   然后PC版最右上角是一个加号，一样复制过来覆盖掉PE版里哪个加号

   如果右上角没有加号，那就打开`Icons.png`，左上角的加号就是他啦

   然后再到PC文件去找到这个

   ![GUI-10](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-10.png)

   把他复制到PE版中暂停标志的下面

   对,别忘了修改大小

   然后来看最下面的这坨玩意

   ![GUI-11](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-11.png)

   在PC版：`assets\minecraft\textures\gui\container\` 文件夹下的

   `inventory.png`图里面，复制黏贴过来即可

   咳咳。。。。我要告诉你们一个不好的消息

   其他的都要自！己！画！因为都！没！有！

   但是有一种偷懒的方法，你看PC版的`resource_packs.png`就知道了

   然后。。。。就好了

   ![GUI-12](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-12.png)

   累死我了QAQ

   `gui2.png` 嗯~，这个我们不管他

   接下去看`icons.png`

   这个在PC版：`assets\minecraft\textures\gui\` 文件夹中的`icons.png`图片，复制并替换就行

   最蛋疼的是`spritesheet.png`，全都要自己画！

   于是。。。。。。一群草泥马奔驰而过。。。。。。

   title.png在PC版：`assets\minecraft\textures\gui\title\` 中的`minecraft.png`

   自己稍微画一下就行。。。。。。

   ![GUI-13](https://img.rytinselver.com/mc/tutorials/hdtexturefix/gui-13.png)

   `touchgui.png`和`touchgui2.png`又是要自己画的。。。。。。不画也行。。。。。。

   (楼主懒癌又发作，不画了)

   

3. particles.png的移植

   文件在PC版：`assets\minecraft\textures\particle\` 文件夹下

   直接复制黏贴！



## 第六章 物品贴图的移植



1. 首先是16X的教程

   用PS打开`items-opaque.png`

   ![Items-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-1.png)

   可以看到全是物品贴图

   这些文件都在PC版：`assets\minecraft\textures\items\` 文件夹中

   一个一个黏贴过来，不要错位了！

   *友情提醒：如果电脑不好，请复制几个就合并可见图层，如果60几个图层一起合并电脑可能会崩溃！*

   

2. 大于16X的教程(16X也要看！！)

   一样先打开`items-opaque.png`

   然后更改画像大小

   32X————512x512

   64X————1024x1024

   128X————2048x2048

   256X————4096x4096

   512X————8192x8192

   然后记得选择邻近(硬边缘)

   物品贴图都在PC版：`assets\minecraft\textures\items\` 文件夹中

   一个一个黏贴过来，不要错位了！

   楼主这里的物品贴图是128X128的，也不做256了，反正现在128X的物品修复也没有

   甜菜的材质因为PC没有所以只能自己画了

   楼主于是机智的改了一下胡萝卜

   ![Items-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-2.png)

   做好了以后就成了这样

   *PS：累死我了*

   ![Items-3](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-3.png)

   然后，让我们把材质打包

   到手机上试试！

   物品栏里：

   ![Items-4](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-4.png)

   哇

   ![Items-5](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-5.png)

   那在手上却= =

   怎么修复呢，接下去我们讲：

   修复方法有两种：

   第一种较为实用，比较复杂

   第二种较为……，比较简单

   

   - 第一种

     首先，如果是手机请下载Droid Edit：

     [下载链接](http://a3.pc6.com/zxy/DroidEditPro.pc6.apk)

     如果是电脑请使用微软自带的记事本

     然后让我们打开`items.meta`

     ![Items-6](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-6.png)

     WTF？？？？？？？？？？？？？？(Welcome To Facebook)

     好吧，先不看他。。。。。。我们先把物品贴图做好

     *小白：啊？还要做？*

     首先打开物品贴图文件

     然后新建一个大小一样的

     ![Items-7](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-7.png)

     然后把物品贴图全选

     然后按住Ctrl+Shift+V进行黏贴到你新建的图片里

     然后点击：图像→画像大小

     然后………………

     然后…………

     然后……

     ![Items-8](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-8.png)

     如图设置宽度和高度为256

     如果有不清楚的

     ![Items-9](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-9.png)

     自己修改一下

     ![Items-10](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-10.png)

     最后把图片四个顶点用铅笔工具点一下(为了定位)

     然后全选图片

     复制到原来图片的左上角

     ![Items-11](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-11.png)

     可以看到占了4个物品的位置

     所以我们把这四个物品移动到最后一行

     ![Items-12](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-12.png)

     就变成这样了

     最后再吧左上角的16X贴图里的四个物品也移动到最后一排

     像这样

     ![Items-13](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-13.png)

     那显然现在这四个物品就没法显示了，那怎么办

     于是我们就机智的打开了`items.meta`

     找到这四个物品所对应的名字和后面的数字

     后面的数字的意思是这个贴图在图片中的位置

     分别是

     ```
     {"uvs":[[0.0,0.0,0.0625,0.0625,256,256]],"name":"apple"}
     
     {"uvs":[[0.0625,0.0,0.125,0.0625,256,256]],"name":"apple_golden"}
     
     {"uvs":[[0.0,0.0625,0.0625,0.125,256,256]],"name":"book_normal"}
     
     {"uvs":[[0.0625,0.0625,0.125,0.125,256,256]],"name":"book_writable"}
     ```

     那后面的数字是什么意思呢

     拿苹果为例子

     「0.0,0.0」首先第一个数字和第二个数字，是贴图左上角的坐标

     第一个是横坐标，第二个是纵坐标，也就是在图片高度中的百分比和在图片宽度中的百分比

     「0.0625,0.0625」第三第四个数字就是贴图右下角的坐标

     「256,256」第五第六个数字我们不管他，只有在第二种方法中才用

     然后我们依旧那苹果为例子

     看看现在坐标应该是什么

     左上角现在是0,15/16（15是左上角那个点在贴图中从上往下每128格的第15个点，16是总数）

     右下角现在是1/16,1（1是右下角那个点在贴图中从左往右每128格的第1个点，16是总数）

     所以坐标就变成了

     `{"uvs":[[0.0,0.9375,0.0625,1.0,256,256]],"name":"apple"}`

     于是我们得到另外三个的坐标为

     ```
     {"uvs":[[0.0625,0.9375,0.125,1.0,256,256]],"name":"apple_golden"}
     
     {"uvs":[[0.125,0.9375,0.1875,1.0,256,256]],"name":"book_normal"}
     
     {"uvs":[[0.1875,0.9375,0.25,1.0,256,256]],"name":"book_writable"}
     ```

     最后点击保存

     然后就可以进入游戏测试啦

     ![Items-14](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-14.png)

     IT WORKS！！！！！！

   

   - 第二种

     第二种方法可以让你的手持物品也高清

     但是只能在第三人称视角才能看到

     并且非常非常的。。。。。。。

     ![Items-15](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-15.png)

     所以不是很推荐

     首先，我们用原来的`items`的贴图，是没改过的！！！

     然后打开`items.meta`

     看最后两个数值，它表示了图片的总宽和总高，所以我们把他都改成你物品贴图图片的宽和高

     可以使用记事本的搜索功能

     ![Items-16](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-16.png)

     也可以使用Droid Edit Pro的查找/替换 功能，特别方便！

     ![Items-17](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-17.png)

     游戏图：

     ![Items-18](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-18.png)

     巨型苹果

     ![Items-19](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-19.png)

     巨型剪刀

     ![Items-20](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-20.png)

     这一箭可以把世界毁灭

     ![Items-21](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-21.png)

     看我脚踏鱼竿

     ![Items-22](https://img.rytinselver.com/mc/tutorials/hdtexturefix/items-22.png)

     头顶弯弓

     怎么样，怕了吧！



## 第七章 方块贴图的移植



1. 16X的移植教程

   首先我们用格式工厂把这个文件转换成png格式

   ![Blocks-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-1.png)

   这样设置

   ![Blocks-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-2.png)

   用PS打开转换好的png图

   ![Blocks-3](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-3.png)

   好多啊。。。。。。

   没事，慢慢来，一个一个贴好就行

   这些方块贴图都在PC版：`assets\minecraft\textures\blocks\` 文件夹中

   然后记得保存

   选择图像大小

   然后把宽和高设置成原来的一半

   ![Blocks-4](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-4.png)

   原来是512X256

   于是我们改成256X128

   然后选择另存为（一定是另存为）！！！！！！！！！！

   另存为`terrain-atlas_mip0.png`

   再缩小一倍，再另存为`terrain-atlas_mip1.png`

   再缩小一倍，再另存为`terrain-atlas_mip2.png`

   再缩小一倍，再另存为`terrain-atlas_mip3.png`

   然后把他们用格式工厂转换成tga格式

   ![Blocks-5](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-5.png)

   然后就OK了！

   

2. 高清Bug方块的讲解

   如果按照16X那样做好高清材质的贴图，那就会出现高清bug

   我们先不说修复

   我们来讲讲为什么会有bug，这非常重要

   根据分辨率的不同，bug的方块也会有所不同

   首先

   先看看这些bug

   我就拿某人做的128X R3D先开刀

   算了，拿某人的256x R3D吧 (那个惹不起)

   好让大家了解256X的bug

   其他分辨率其实也一样

   首先来讲一下tga格式

   首先tga没有透明背景，只能用alpha通道图层才可以

   其次，mojang在做游戏时根本就没有考虑到材质，如果mojang考虑到材质的话，bug这种东西才不用我们修复呢

   下载好了

   ![Blocks-6](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-6.png)

   草地bug

   ![Blocks-7](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-7.png)

   可是当我们看远方的草地时

   ![Blocks-8](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-8.png)

   这是因为mojang蛋疼的加载16x的bug。在256x时，如果把贴图缩小到16x的话，你就会发现，水和岩浆的静态贴

   图就正好在草方块上！

   但是当变成128x时，就不会有这样的bug，所以看远处就没有bug

   还有128X白桦木的bug原理也是这样

   分辨率不同bug也不同

   那么这个是怎么回事呢。。。

   ![Blocks-9](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-9.png)

   这个bug是也是因为mojang的16x加载，和之前其实一样

   他加载16X的时候，就以16X贴图为框架了，要加载256x时，材质就会在16x的框架内，但16x的地方在哪呢。。。。。。

   那是一个方块贴图。。。。。。所以框架就变成了全部，所以就会出现黑边

   一些其他的bug原理也一样

   *PS：听不懂没关系*

   

3. 已修复文件下载

   首先如果是64X或128X请到这个帖子下载：

   [百度贴吧](http://tieba.baidu.com/p/3867315157)

   如果是256X的下载地址：

   [百度云](http://pan.baidu.com/s/1fkt4q)    密码：7rms

   下载`terrain-atlas.png`和`terrain.meta`

   

4. 高清修复！！

   把他们放进`images`文件夹中，然后用PS打开`terrain-atlas.png`

   然后一个一个贴图的贴上去

   那个`BaiduTieba @godzhuo @13472572911`可以删了没事的 我相信你也不会有意见的 @God焯

   嗯。。。这次花什么的用了ITP的

   不是因为我懒

   而是256X实在太高清

   换成16X之后连本来该有的样子也没了，于是我只好。。。。

   终于好了

   血都快吐出来了

   我们继续，大家久等了

   ![Blocks-10](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-10.png)

   然后我们把这一块给复制下来

   ![Blocks-11](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-11.png)

   新建一个文件

   把他黏贴过去(注意大小)

   把岩浆，水，木头和草方块删了

   然后把他做成16X

   就是更改图像大小为512X64

   接下去不清楚的地方稍微改一改就行了

   ![Blocks-12](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-12.png)

   但是这样还是有一点黑边

   怎么办

   其实只要把16X对应的贴图放大到你材质的分辨率，然后黏贴到原来的花的地方，最后把图层放到原来的后面就行了(听不懂就自己研究把)

   选择画布大小

   ![Blocks-13](https://img.rytinselver.com/mc/tutorials/hdtexturefix/blocks-13.png)

   最后把它放到原图的左上角，位置要对应！！(注意定位)

   最后保存！ OK

   最后把他像16X那样保存

   缩小一倍，另存为`terrain-atlas_mip0.png`

   再缩小一倍，再另存为`terrain-atlas_mip1.png`

   再缩小一倍，再另存为`terrain-atlas_mip2.png`

   再缩小一倍，再另存为`terrain-atlas_mip3.png`

   在提醒一遍：一定是另！存！为！

   最后把做好的材质打包，然后就可以发布啦！

   

   ## 第八章 版权

   

   首先来看看这个

   `assets\lang\` 文件夹下的`en_US-pocket.lang`

   用记事本打开他(楼主这里用的Ultra Edit)

   看见第二行

   ![Copyright-1](https://img.rytinselver.com/mc/tutorials/hdtexturefix/copyright-1.png)

   这就是版权

   于是我机智的改了

   那这两个呢

   ![Copyright-2](https://img.rytinselver.com/mc/tutorials/hdtexturefix/copyright-2.png)

   第二个不用说了

   第一个就是材质包的介绍

   格式像这样：

   ```
   {
   "pack": {
   "pack_format": 1,
   "description": "Because Real is Better. PE version made by RyTinSelver_(@13472572911)"
   }
   }
   ```

   

   全文完