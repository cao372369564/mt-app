<template>
    <div class="mt-main">
        <el-row class='root-list'>
            <el-col :span='5'>
                <dl>
                    <dt>全部分类</dt>
                    <dd v-for='(ele,index) in detailList' :key='ele+index' @mouseenter='enter(ele,index)' @mouseleave='leave'>
                        <i></i>
                        <router-link to="/">{{ele.title}}</router-link>
                        <span class="arrow"></span>
                    </dd>
                    
                </dl>
                <div class="detail-wrapper" v-if='showDetail'>
                    <div class="detail" @mouseenter='detailEnter' @mouseleave='leave'>
                        <div class="detail-title">
                            <h4>{{detailList[curIndex].content[0].title}}</h4>
                            <a href="#">更多></a>
                        </div>
                        <ul>
                            <li v-for='item in detailList[curIndex].content[0].detail' :key='item+10'>
                                <a href="#">{{item}}</a>
                            </li>
                            
                        </ul>
                    </div>
                </div>
            </el-col>
            <el-col :span='19'>
                <div class="nav-img-area">
                    <ul class='nav'>
                        <li><a href="#">美团外卖</a></li>
                        <li><a href="#">猫眼电影</a></li>
                        <li><a href="#">美团酒店</a></li>
                        <li><a href="#">民俗/公寓</a></li>
                        <li><a href="#">商家入驻</a></li>
                        <li><a href="#">美团公益</a></li>
                    </ul>
                    <div class="img-area-up">
                        <div class="slider-area">
                                <el-carousel class='slider' height='240px'>
                                    <el-carousel-item v-for="item in sliderArr" :key="item">
                                        <img :src="item" height='240px' style='width:470px'>
                                    </el-carousel-item>
                                </el-carousel>
                            <a href="#" class='slider-right'>
                                <img src="http://p0.meituan.net/codeman/e473bb428f070321269b23370ff02ba956209.jpg" alt="">
                            </a>
                        </div>
                        <div class="login-area">
                            <dl>
                                <dd class='user-header'>
                                    <img src="//s0.meituan.net/bs/fe-web-meituan/2d05c2b/img/avatar.jpg" alt="">
                                </dd>
                                <dd class='hello'><span>Hi！你好</span></dd>
                                <dd class='register'><button>注册</button></dd>
                                <dd class='login'><button>立即登录</button></dd>
                            </dl>
                        </div>
                    </div>
                    <div class="img-area-down">
                        <a href='#' class="img-box box1">
                            <img src="http://p1.meituan.net/codeman/8cce56c467a17e04f3094d1e455462a0132772.png" alt="">
                        </a>
                        <a href='#' class="img-box box2">
                            <img src="http://p1.meituan.net/codeman/16442c19da1f1c4544f794e29d99c92051716.jpg" alt="">
                        </a>
                        <a href='#' class="img-box box3">
                            <img src="http://p1.meituan.net/codeman/5b21cddb4bb1cbc3a9c3bce0f726c75940469.jpg" alt="">
                        </a>
                        <a href='#' class="img-box box4">
                            <img src="//s1.meituan.net/bs/fe-web-meituan/60ac9a0/img/download-qr.png" alt="">
                            <span>美团APP手机版</span>
                            <span><i>1元起</i>吃喝玩乐</span>
                        </a>
                    </div>
                </div>
                
            </el-col>
        </el-row>
        <el-row>
            <quality-life />
        </el-row>
        
    </div>
</template>

<script>
import QualityLife from '@/components/main/QualityLife.vue';
import api from '@/api/index.js';
export default {
    components:{
        QualityLife,
    },
    data(){
        return {
            detailList:[
                {
                    title:'美食',
                    content:[
                    {
                        title:'美食',
                        detail:['代金券','甜点饮品','火锅','自助餐','小吃快餐','日韩料理','西餐',
                        '聚餐宴请','烧烤烤肉','东北菜','川湘菜','江浙菜','香锅烤鱼','粤港菜','中式烧烤/烤串',
                        '西北菜','咖啡酒吧茶馆','云贵菜','东南亚菜','海鲜','素食','台湾/客家菜','创意菜','汤/粥/炖菜',
                        '蒙菜','新疆菜','其他美食','京菜鲁菜']
                    }
                ]},
                {title:'外卖',content:[
                    {title:'外卖',detail:['美团外卖']}
                ]},
                {title:'酒店',content:[
                    {title:'酒店星级',detail:['经济型','舒适/三星','高档/四星','豪华/五星']}
                ]},
                {title:'榛果民宿',content:[
                    {title:'热门城市',detail:['上海','成都','北京','重庆','南京','杭州','广州','西安','大连']}
                ]},
                {title:'猫眼电影',content:[
                    {title:'热映电影',detail:['反贪风暴4','雷霆沙赞1','调音师','老师好','欲念游戏',
                    '风中有朵雨做的云','在乎你','最佳男友进化论','祈祷落幕时','我的宠物是大象']},
                    {title:'热门影院',detail:['横店电影城','万达影城','耀莱成龙国际影城','CGV影城',
                    '奥斯卡国际影城','银兴国际影城','星美国际影城','欢乐国际影城','比高电影城',
                    '红地毯国际影城']}
                ]},
                {title:'机票/火车票',content:[
                    {title:'机票',detail:['国内机票','国际/港澳台机票']},
                    {title:'火车票',detail:['火车票']}
                ]},
                {title:'休闲娱乐/KTV',content:[
                    {title:'休闲娱乐',detail:['足疗按摩','洗浴/汗蒸','酒吧','密室逃脱',
                    '轰趴馆','茶馆','私人影院','DIY手工坊','采摘/农家乐','网吧网咖','游乐游艺','VR',
                    '桌面游戏','真人CS','棋牌室','其他玩乐']},
                    {title:'KTV',detail:['KTV']}
                ]},
                {title:'生活服务',content:[
                    {title:'生活服务',detail:['衣物/皮具洗护','家政搬家','运输送水','充值缴费','服饰/鞋包养护',
                    '开锁换锁','居家维修','管道疏通','家电维修清洗','电脑维修','手机维修','证件照/肖像摄影',
                    '照片冲印/图文文印','商务服务/法律服务','文化传媒机构','成人用品/情趣用品']}
                ]},
                {title:'丽人/美发/医学美容',content:[
                    {title:'丽人',detail:['美发','美甲美睫','美容美体','医学美容','瑜伽舞蹈','瘦身纤体',
                    '韩式定妆','祛痘','纹身','化妆品','养发']}
                ]},
                {title:'结婚/婚纱摄影/婚宴',content:[
                    {title:'结婚',detail:['婚纱摄影','旅拍','个性写真','婚宴','婚庆公司','婚纱礼服','西服定制',
                    '婚戒首饰','婚车租赁','司仪主持','彩妆造型','婚礼跟拍','婚礼小礼品','更多婚礼服务']}
                ]},
                {title:'亲子/儿童乐园/幼教',content:[
                    {title:'儿童乐园',detail:['婴儿游泳','其它亲子游乐']},
                    {title:'幼儿教育',detail:['早教中心','少儿英语','智力开发','托班/幼儿园','幼儿教育','其他幼儿教育']},
                    {title:'亲子摄影',detail:['儿童摄影','孕妇写真','上门拍','其他亲子摄影']},
                    {title:'孕产护理',detail:['月子会所','产后恢复','妇幼医院','孕产用品','开奶催乳','月嫂','亲子购物',
                    '宝宝派对','亲子服务']}
                ]},
                {title:'运动健身/健身中心',content:[
                    {title:'运动健身',detail:['健身中心','武术场馆','游泳馆','羽毛球馆','溜冰场','射箭馆','篮球场','网球馆',
                    '台球馆','乒乓球','足球场','高尔夫场','保龄球馆','体育场馆','马术场','壁球馆','更多运动']}
                ]},
                {title:'家装/建材/家居',content:[
                    {title:'装修设计',detail:['半包装修','全包装修','清包装修']},
                    {title:'装修建材',detail:['地板','瓷砖石材','橱柜','灯饰照明','厨卫洁具','油漆涂料','集成吊顶',
                    '墙纸墙艺','门窗','木材板材','家用五金','电工电料','楼梯','管材管件']},
                    {title:'家具家居',detail:['家具','床上用品/家纺家居','饰品','厨具餐具','智能家居']},
                    {title:'家装卖场',detail:['建材卖场','家居卖场','灯饰卖场']},
                ]},
                {title:'学习培训/音乐培训',content:[
                    {title:'音乐培训',detail:['钢琴','吉他','小提琴','古筝','架子鼓','声乐','其他音乐培训']},
                    {title:'职业技术',detail:['美容化妆','会计','IT','厨艺','管理培训','摄影培训','司法考试',
                    '公务员培训','其他职业培训']},
                    {title:'外语培训',detail:['英语','日语','韩语','法语','德语','汉语','俄语','西班牙语','其他外语']},
                    {title:'美术培训',detail:['绘画','书法','其他美术']}
                ]},
                {title:'医疗健康/宠物/爱车',content:[
                    {title:'医疗健康',detail:['医院','齿科','口腔','体检中心','药店','中医','其他健康服务']},
                    {title:'爱车',detail:['洗车','租车','加油站','维修保养','驾校','汽车美容','陪练','汽车用品',
                    '停车场','汽车保险','4S店/汽车销售','更多汽车服务','机油保养','汽车报价','二手车','广告驾校',
                    '交警队','汽车改装','汽车配件']},
                    {title:'宠物',detail:['宠物店','宠物医院']}
                ]},
                {title:'酒吧/密室逃脱',content:[
                    {title:'玩乐',detail:['KTV','酒吧','密室逃脱','游乐游艺','网吧网咖','私人影院','DIY手工坊',
                    '桌面游戏','采摘/农家乐','棋牌室','轰趴馆','真人CS','VR','其他玩乐']}
                ]}
                
            ],
            sliderArr:[
                'http://p0.meituan.net/codeman/daa73310c9e57454dc97f0146640fd9f69772.jpg',
                'http://p1.meituan.net/codeman/826a5ed09dab49af658c34624d75491861404.jpg',
                'http://p0.meituan.net/codeman/a97baf515235f4c5a2b1323a741e577185048.jpg',
                'http://p0.meituan.net/codeman/33ff80dc00f832d697f3e20fc030799560495.jpg',
                'https://p1.meituan.net/travelcube/01d2ab1efac6e2b7adcfcdf57b8cb5481085686.png',
            ],
            showDetail: false,
            curDetail: null,
            curIndex: 0,
            timer : null
        }
    },
    created(){
        api.getMenuList().then( (res)=>{
            // console.log(res)
        } )
    },
    methods:{
        enter(item,index){
            // console.log(item.content[0].detail)
            this.curDetail = item.content[0];
            this.showDetail = true;
            this.curIndex = index;
            clearTimeout(this.timer)
        },
        leave(){
            this.timer = setTimeout( ()=>{
                this.showDetail = false;
            },200 )
        },
        detailEnter(){
            
            clearTimeout(this.timer)
        }
        
    }
}
</script>

<style lang="scss">
@import '@/assets/components/main/main.scss';
</style>


