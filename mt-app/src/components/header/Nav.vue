<template>
  <div class="my-nav">
    <ul>
      <li>
        <router-link :to="{}" class="right-nav">我的美团</router-link>
        <dl class="sub-container">
          <dd>
            <router-link to="/" class="#31bbac">我的订单</router-link>
          </dd>
          <dd>
            <router-link to="/" class="#31bbac">我的收藏</router-link>
          </dd>
          <dd>
            <router-link to="/" class="#31bbac">抵用券</router-link>
          </dd>
          <dd>
            <router-link to="/" class="#31bbac">账户设置</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link :to="{}" class="right-nav">手机APP</router-link>
      </li>
      <li>
        <router-link :to="{}" class="right-nav">商家中心</router-link>
        <dl class='sub-container'>
          <dd>
            <router-link to="/">登录商家中心</router-link>
          </dd>
          <dd>
            <router-link to="/">美团智能收银</router-link>
          </dd>
          <dd>
            <router-link to="/">我想合作</router-link>
          </dd>
          <dd>
            <router-link to="/">手机免费开店</router-link>
          </dd>
          <dd>
            <router-link to="/">餐饮代理商招募</router-link>
          </dd>
          <dd>
            <router-link to="/">商家申请开票</router-link>
          </dd>
          <dd>
            <router-link to="/">免费合作美团排队</router-link>
          </dd>
        </dl>
      </li>
      <li>
        <router-link :to="{}" class="right-nav">网站导航</router-link>
        <div class="web-nav">
            <div class='sub-container'>
                <dl>
                    <dt>酒店旅游</dt>
                    <div>
                        <dd>
                            <router-link to='/'>国际机票</router-link>
                            <router-link to='/'>经济型酒店</router-link>
                            <router-link to='/'>公寓</router-link>
                            <router-link to='/'>青年旅社</router-link>
                            <router-link to='/'>农家院</router-link>
                        </dd>
                        <dd>
                            <router-link to='/'>火车票</router-link>
                            <router-link to='/'>主题酒店</router-link>
                            <router-link to='/'>豪华酒店</router-link>
                            <router-link to='/'>度假酒店</router-link>
                        </dd>
                        <dd>
                            <router-link to='/'>糖果民宿</router-link>
                            <router-link to='/'>商务酒店</router-link>
                            <router-link to='/'>客栈</router-link>
                            <router-link to='/'>别墅</router-link>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>吃美食</dt>
                    <div>
                        <dd>
                            <router-link to="/">烤鱼</router-link>
                            <router-link to="/">烧烤</router-link>
                            <router-link to="/">火锅</router-link>
                        </dd>
                        <dd>
                            <router-link to="/">特色小吃</router-link>
                            <router-link to="/">自助餐</router-link>
                            <router-link to="/">代金券</router-link>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>看电影</dt>
                    <div>
                        <dd>
                            <router-link to="/">热映电影</router-link>
                            <router-link to="/">热门影院</router-link>
                            <router-link to="/">热映电影口碑榜</router-link>
                            <router-link to="/">最受期待电影</router-link>
                            <router-link to="/">国内票房榜</router-link>
                            <router-link to="/">北美票房榜</router-link>
                            <router-link to="/">电影排行榜</router-link>
                        </dd>
                    </div>
                </dl>
                <dl>
                    <dt>手机应用</dt>
                    <dd class='app'>
                        <router-link to="/" class="appicon">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/e5eeaef/img/appicons/meituan.png" title="美团app" alt="美团app">
                        </router-link>
                        <router-link to="/" class="appicon">
                            <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/waimai.png" title="外卖app" alt="外卖app">
                        </router-link>
                        <router-link to="/" class="appicon">
                            <img src="//s0.meituan.net/bs/fe-web-meituan/404d350/img/appicons/zhenguo.png" title="榛果app" alt="榛果app">
                        </router-link>
                        <router-link to="/" class="appicon">
                            <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/dianping.png" title="点评app" alt="点评app">
                        </router-link>
                        <router-link to="/" class="appicon">
                            <img src="//s1.meituan.net/bs/fe-web-meituan/404d350/img/appicons/maoyan.png" title="猫眼app" alt="猫眼app">
                        </router-link>
                    </dd>
                </dl>
            </div>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
    
};
</script>

<style lang="scss">
@import "@/assets/components/header/nav.scss";
</style>

