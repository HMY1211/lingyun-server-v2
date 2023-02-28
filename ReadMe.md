### 说明:

**凌云系统是使用koa框架搭建的跨多领域的综合系统,目前仅涉及电商系统,后期会逐渐完善博客,地图,聊天交友,医疗,教育及大屏可视化数据各系统;**

### 与上个版本相比:

**与1.0版本的凌云系统相比,新的系统对于权限模块及各个接口再次进行优化及全新的数据库设计;**

### 技术栈:

**Node+koa+Sequelize+mysql;**

### 安装:

- **下载源码;**
- **运行命令 npm run dev;**

### 数据包:

**数据库使用的是本地数据,下载安装以后请在model文件夹中打开模型进行表创建,在db文件夹下的seq文件中进行数据库设置;部分数据库软件可以进行数据库打包,在创建完数据库以后进行打包直接导入云服务器数据库就行;**

### 管理员添加:

**为了保证系统用户统一性,所有的用户账号均由系统生成,如果需要设置管理员请在数据库自行修改,用户权限将按照0-9进行划分,所有的注册用户默认都是0,在用户鉴权时会使用权限值搭配相关已有数据进行综合判断用户是否有修改数据的权利或者仅仅只能查看和部分数据修改;**

**除了超级管理员,主要管理员需要去接口申请,申请下来的权限为3,可以赋予他人为2,为2的用户可以进行商品的部分信息更改,只有为3的才可以增加或者修改商品**

### 文档:

**文档方面会搭配各个api接口及数据库设计统一进行更新发布,在document文件下,部分开发思路及无关紧要的想法会在thinking文件夹下的文件中;**

### 商用说明:

**此系统仅用于个人学习研究使用;**

### 部署:

**目前V2接口部署在lingyunstar.top同后台端口下,有需要的自己搭配apifox在线文档进行调用,凌云系统未开启跨域,请自行在前端工程框架中配置代理,接口文档有详细的参数正则限制,请仔细阅读文档并设置符合正则规定的参数;最后,禁止搞破坏!用可以随便用,接口数据虽然不太完善,但是搭建一个小型应用应该还是够的,以后会随着业务逐渐完善数据库;**

### 详细在线接口地址:

**https://www.apifox.cn/apidoc/project-2347798/api-64382129**

### 声明:

**目前部署的是V2,还有很多接口未完善,请多关注在线API接口文档,会随着系统同步更新,服务器也会同步更新;**

**用户注册接口为了账号统一性,是直接由系统生成的账号,所以在调用接口获取数据后需要把用户账号单独对用户进行保存提醒操作(如果不理解,请参考QQ注册!);**

**凌云系统的返回状态码统一是200,请在封装请求响应拦截器里面单独对数据进行操作,如果需要按照网络标准状态码进行返回,请自行克隆本项目并在app文件夹下的errorHandling.js文件中进行修改,文件内已有模板,请在阅读相关注释后自行添加;**

**关于商品接口:目前商家在添加商品的时候必须勾选商品分类,在数据库勾选的商品分类会有对应的状态码,在后期用户请求商品列表的时候也可以根据用户比较喜欢的状态码进行数据库查询,给用户推荐用户比较喜欢的商品;**

**document文件夹下面是数据库模型的一些设计文档,如果对接口数据不太清楚可以看下;**

**如果是搭建后台管理系统请使用管理员登录接口,管理员登录接口和普通用户登录接口部分中间件会有更改,为了不影响普通用户的正常登录就把它们两个单独分开了,后期如果需要对接口登录进行限制也可以直接更改中间件,防止一些不必要的问题;**

**db文件夹下的lingyun.sql是数据库模型文件,如果不想自己单独创建数据库可以直接在云服务器的数据库中导入该文件生成数据库;**

**关于文件上传我是直接在上传以后修改文件名,添加前缀,然后遍历文件,如果前缀不是规定的文件名会被直接删除,防止无管理员权限的人随便调接口上传文件,项目目前的思路我是这样写的,如果有其他需求请使用第三方库自行修改,后期这个问题会视情况进行修正,目前在测试阶段,暂时没有问题,关于删除文件的中间件我把打印报错关了,因为在遍历文件时会有部分报错,在以后上传文件达到数量级会对日志造成不好的影响,对筛查日志也会带来麻烦,相关代码已经注释掉了,有需要的自行打开;**

**因为数据库不是整个设计下来的,所以在版本稳定下来之前请多关注在线文档,数据库会随着文档同步更新;**

**关于商品分类,因为数据量有点庞大,目前在数据库阶段只是使用较为简单的分类状态码,所以在用户请求商品种类的时候会比较单一,后期会逐渐维护;**

**数据库字段类型目前只使用基础类型,如有其他需求请根据Sequelize数据类型文档自行更改;**

**数据库操作方面并未做系统监控,现有的监控只有在数据操作出错才会提醒,如果需要更详细的系统问题警报请自行编写,后期会修正;**

**用户及其相关的接口并未做数据库数据校验,只进行了部分权限校验,正常情况下暂无问题,就是有些人使用第三方插件进行某些接口的请求会造成用户的一些小问题,前提是他知道用户的信息,后期会逐渐修正,暂不影响使用;**

**有一些接口只做了基础的校验,使用本系统请前端注意下,后期会在相关middleware中进行补全;**

**请仔细阅读在线文档!**

### 联系:

**有任何的问题请联系邮箱:[CodeBruin@163.com](mailto:CodeBruin@163.com)或同名微信号;**
