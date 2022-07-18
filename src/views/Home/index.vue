<template>
  <div class="box">
    <!-- 头部 -->
    <div class="head" style="width:100%;height:70px;">
      <div class="head_left">
        <span style="color:#037BFF;font-size:24px;font-weight:bold">
          <img style="width: 20%;"
               src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E4%BA%91%E5%B7%A5%E6%97%B6%20LOGO%E6%BA%90%E6%96%87%E4%BB%B6.jpg"
               alt/>
        </span>
      </div>
      <div class="head_right" style="display:flex">
        <!-- <a href="http://123.57.52.118:8017/#/login"> -->
        <span style="color:#0066CC;height:42px;display:flex;justify-content:center;align-items:center;font-sie:22px;margin-right:20px;width:250px;">
          <img src="../../assets/tel.png" alt="">
          咨询热线：400-609-8866
        </span>
        <span style="color:#0066CC;height:42px;display:flex;justify-content:center;align-items:center;font-sie:22px;margin-right:20px;">
         <i class="el-icon-message" style="font-size:35px;margin-right:5px;"></i>
          咨询邮箱：service@umatesoft.com
        </span>
          <button @click="getToMenu" style="width:100px;height:42px;display:flex;justify-content:center;align-items:center;background:#037BFF;color:#fff;border-radius:5px;font-sie:22px"
          >
            登 录
          </button>
        <!-- </a> -->

        <!--        跳到管理段得注册页面现在没有。没有写-->
        <!-- <a href="#"> -->
          <button @click="getToMenu" style="width:100px;height:42px;display:flex;justify-content:center;align-items:center;border:1px solid #037BFF;border-radius:5px;margin-left:20px;color:#037BFF;font-sie:22px"
          >
            注 册
          </button>
        <!-- </a> -->
      </div>
    </div>
    <!-- banner -->
    <div class="banner" style="position:relative;">
      <img src="../../assets/com.png" alt="" width="100%">
      <div style="over-flow:hidden;position:absolute;top:0%;margin-right:520px;left:15%;height:100%;min-height:100%;display:flex;flex-direction:column;justify-content:center;">
        <p class="title-p">项目工时与成本管理系统</p>
        <p class="js-p">
          {{ banner_dec }}
        </p>
        <p style="display:flex;">
          <!-- <a href="http://123.57.52.118:8017/#/login"> -->

          <button @click="getToMenu" style="color:#3B426B;box-shadow: 0px 7px 0px #bed3f2;border:1px solid #d6d8e4;font-size:16px;background:#fff;border-radius:5px;width:142px;height:36px;display:flex;justify-content:center;align-items:center;margin-right:45px"
          >
            立即体验
            <!-- <i class="el-icon-right" style="font-size:16px;margin-left:5px;margin-top: 2px;"></i> -->
          </button>
          <!-- </a> -->

          <!-- <a href="consult"> -->
          <button @click="getRouter"
                  style="color:#fff;font-size:16px;box-shadow: 0px 7px 0px #3c6dcc;background:#037BFF;border-radius:3px;width:142px;height:36px;display:flex;justify-content:center;align-items:center;"
          >
            企业咨询
            <!-- <i class="el-icon-right" style="font-size:16px;margin-left:5px;margin-top: 2px;"></i> -->
          </button>
          <!-- </a> -->
        </p>
      </div>
      <!-- <p style="display:flex;position:absolute;right:15%;bottom:130px;width:150px;">

      </p> -->
      <div style="position:fixed;right:0px;top:60%;right:15px;z-index:999;">
        <img src="../../assets/erweima.jpeg" alt="" width="150px">
      </div>

    </div>
    <!-- 工时填报 -->
    <div class="list">
      <p class="list_p">{{ list_title }}</p>
      <ul class="list_ul">
        <li v-for="(item,index) in list" :key="index">
          <img :src="item.icon" alt/>
          <span class="list_title">{{ item.name }}</span>
          <span class="list_dec" v-html="item.dec" style="display:inline-block;height:50px;">{{ item.dec }}</span>
        </li>
      </ul>
    </div>
    <div class="image_text">
      <dl class="image_text_dl">
        <dd class="image_text_dd">
          <img src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/ic5.png" alt/>
        </dd>
        <dt class="image_text_dt">
          <p style="margin-top:55px;color:#3B426B;font-size:26px">{{ dl_title }}</p>
          <p style="color:#7D83A9;line-height:28px;margin-top:20px">{{ dl_dec }}</p>
        </dt>
      </dl>
    </div>
    <div class="login">
      <p style="color:#3B426B;font-size:32px;margin-bottom:80px;">{{ login_head }}</p>
      <ul class="login_ul">
        <li v-for="(item, index) in login_list" :key="index">
          <img :src="item.img" alt width="116px" style="margin-bottom:10px;"/>
          <span style="font-size:24px;color:#3B426B;">{{ item.title }}</span>
          <span style="color: #7D83A9;font-size: 18px;">{{ item.dec }}</span>
        </li>
      </ul>
      <p style="display:flex;justify-content:center;">
        <button @click="getToMenu" style="width:160px;height:48px;display:flex;justify-content:center;align-items:center;color:#fff;background:#037BFF;font-size:18px;border-radius:3px;"
        >立即注册
        </button>
      </p>
    </div>
    <div class="detail">
      <dl class="detail_dl">
        <dd class="detail_dd">
          <img src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/nn5.png" alt/>
        </dd>
        <dt class="detail_dt">
          <p style="color:#3B426B;font-size:32px;">{{ detail_title }}</p>
          <p style="color:#7D83A9;font-size:18px;margin-top:20px" v-html="detail"></p>
          <ul style="display:flex;flex-wrap:wrap;margin-top:20px;">
            <li
              v-for="(item,index) in detail_list"
              :key="index"
              style="width:50%;margin-bottom:10px;"
            >
              <i :class="item.cls" style="color:#037BFF"></i>
              <span style="font-size:18px;color:#7D83A9;">{{ item.detail }}</span>
            </li>
          </ul>
        </dt>
      </dl>
    </div>
    <div class="combo">
      <p style="color:#3B426B;font-size:32px;text-align:center;">功能比对</p>
      <p style="color:#3B426B;font-size:18px;text-align:center;font-weight:400;margin:10px 0 30px 0">
        更多需求详询：400-609-8866</p>
      <ul class="combo_title">
        <li style="display:flex;background: #E5E6EE;height:46px;align-items:center;color:#3B426B;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">功能</span>
          <span style="display:flex;width:17%;justify-content:center;">免费版</span>
          <span style="display:flex;width:17%;justify-content:center;">标准版</span>
          <span style="display:flex;width:17%;justify-content:center;">高级版</span>
          <span style="display:flex;width:17%;justify-content:center;">尊享定制版</span>
        </li>
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-size:18px;font-weight:400">
          <span style="display:flex;width:32%;padding-left:20px">价格</span>
          <span style="display:flex;width:17%;justify-content:center;">
            免费试用
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <button style="color:#7D83A9;font-size:18px;font-weight:400;">¥6800/年 购买</button>
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <button style="color:#7D83A9;font-size:18px;font-weight:400;">¥12800/年 购买</button>
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            联系我们
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px"> -->
          </span>
        </li>
        <li style="display:flex;background: #E5E6EE;height:46px;align-items:center;color:#3B426B;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">附件</span>
        <span style="display:flex;width:17%;justify-content:center;">
          5G
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          30G
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          60G
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          100G
          </span>
        </li>
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-size:18px;font-weight:400">
          <span style="display:flex;width:32%;padding-left:20px">员工人数</span>
          <span style="display:flex;width:17%;justify-content:center;">
            &lt;10人
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            &lt;100人
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            &lt;300人
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            &gt;500人
          </span>
        </li>
        <li style="display:flex;background: #E5E6EE;height:46px;align-items:center;color:#3B426B;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">可创建项目</span>
        <span style="display:flex;width:17%;justify-content:center;">
          5/个
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          不限量
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          不限量
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          不限量
          </span>
        </li>
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-size:18px;font-weight:400">
          <span style="display:flex;width:32%;padding-left:20px">成员组织架构管理</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>

        <li style="display:flex;background: #E5E6EE;height:46px;align-items:center;color:#3B426B;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">数据分析屏幕展示</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-size:18px;font-weight:400">
          <span style="display:flex;width:32%;padding-left:20px">多级别权限管理</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>
        <li style="display:flex;background: #E5E6EE;height:46px;align-items:center;color:#3B426B;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">OCR自动识别</span>
        <span style="display:flex;width:17%;justify-content:center;">
<!--            <img-->
<!--              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"-->
<!--              alt="" width="15px">-->
          <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        <span style="display:flex;width:17%;justify-content:center;">
          <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>
        <!-- <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-weight:500;">
          <span style="display:flex;width:32%;padding-left:20px">附件大小限制</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
        </li> -->
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-size:18px;font-weight:400;">
          <span style="display:flex;width:32%;padding-left:20px">项目成本分析</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>

        <li style="display:flex;height:46px;background: #E5E6EE;align-items:center;color:#3B426B;font-size:18px;font-weight:400;">
          <span style="display:flex;width:32%;padding-left:20px">开放RESTFUR API</span>
          <span style="display:flex;width:17%;justify-content:center;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>
        <li style="display:flex;height:66px;align-items:center;color:#7D83A9;font-weight:400;">
          <span style="display:flex;width:32%;padding-left:20px">专属技术支持</span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px">
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px">
          </span>
        </li>
        <li style="display:flex;height:46px;background: #E5E6EE;align-items:center;color:#3B426B;font-size:18px;font-weight:400">
          <span style="display:flex;width:32%;padding-left:20px">本地化部署</span>
          <span style="display:flex;width:17%;justify-content:center;">
            联系我们
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            联系我们
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            联系我们
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD%2012@2x.png"
              alt="" width="15px"> -->
          </span>
          <span style="display:flex;width:17%;justify-content:center;">
            联系我们
            <!-- <img
              src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/%E7%BC%96%E7%BB%84%E5%A4%87%E4%BB%BD@2x.png"
              alt="" width="15px"> -->
          </span>
        </li>
      </ul>
    </div>
    <div class="bottom"  style=" display:flex;height:220px;justify-content: center;align-items: flex-end;padding: 30px">
      <p
        style="bottom:15px;left:15%;color:#fff;font-size:20px;margin-right:10px;width:815px"
      >{{ botton_detail }}</p>
      <button @click="getToMenu" style="background:#fff;color:#037BFF;font-size:18px;width:160px;height:48px;right:15%;display:flex;justify-content:center;align-items:center;border-radius:5px;"
      >立即注册
      </button>
    </div>
    <div class="foot">
<!--      <ul class="foot_ul">-->
<!--&lt;!&ndash;        <li v-for="(item,index) in foot_list" :key="index">{{ item.name }}</li>&ndash;&gt;-->
<!--      </ul>-->
<p
        style="color: #e8e5df;font-size:12px;padding-top:8px"
      >北京众立信科技有限公司</p>
      <p
        style="color: #e8e5df;font-size:12px;border:none;"
      >ICP备案号：京ICP备18011395号-2｜© Copyright2019-2021 timemate.top</p>
      <p
        style="color: #e8e5df;font-size:12px;border:none;"
      >地址：北京市朝阳区常通路3号院2号楼16层1单元19007</p>
      <p
        style="color: #e8e5df;font-size:12px;border:none;padding-bottom:8px;"
      >联系电话：400-609-8866</p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          icon:
            "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/ic1.png",
          name: "工时填报",
          dec: "多端快速完成项目工时填报<br>填报方式灵活可按天、周、月   "
        },
        {
          icon:
            "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/ic2.png",
          name: "费用报销",
          dec: "项目报销一站式高效反馈<br>对接企业财务系统、项目核算一键完成"
        },
        {
          icon:
            "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/ic3.png",
          name: "极速审批",
          dec: "短信、微信审批指示随时提醒"
        },
        {
          icon:
            "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/ic4.png",
          name: "定制化开发",
          dec: "根据企业需求定制化开发"
        }
      ],
      list_title: "减少管理时间和成本，随时随地跟踪工作进度",
      dl_title: "如何管理项目以保证成本呢？",
      dl_dec:
        "在您管理项目、团队、项目工期、项目费用报销时，可能每天都会遇到管理混乱，项目成本核算不准确的问题。云工时提供的在线管理项目工时和项目报销的解决方案是使用云工时管理系统跟踪项目和人工成本的可靠替代方案。减少项目管理混乱的情况，并为您提供所需的实时数据，以使您有信心将“时间”转化为利润。",
      login_head: "可靠的项目成本管理系统对您的项目计划决策充满信心。",
      login_list: [
        {
          img: "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/nn1.png",
          title: "郑重承诺",
          dec: "可进行免费试用"
        },
        {
          img: "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/nn2.png",
          title: "触手可及的数据",
          dec: "重新获取对数据的信心"
        },
        {
          img: "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/nn3.png",
          title: "可视化装饰",
          dec: "提供流畅的用户体验"
        },
        {
          img: "https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/nn4.png",
          title: "支持定制开发",
          dec: "持续优化提升平台能力"
        }
      ],
      detail_title: "尽情的体验云工时带来的便利吧",
      detail:
        "不再浪费您的时间手动统计员工项目成本并将其输入excel中。<br>员工可以自动填报项目工时和报销费用，平台自动化计算，<br>根据统计更合理的安排项目时间和费用报告。<br>项目工时成本管理无缝衔接，提高工作的效率。",
      detail_list: [
        {
          cls: "el-icon-success",
          detail: "时间表管理"
        },
        {
          cls: "el-icon-success",
          detail: "可定制以适应任何需求"
        },
        {
          cls: "el-icon-success",
          detail: "费用管理"
        },
        {
          cls: "el-icon-success",
          detail: "移动时间跟踪"
        },
        // {
        //   cls: "el-icon-success",
        //   detail: "可计费和不可计费时间"
        // },
        {
          cls: "el-icon-success",
          detail: "按客户，项目，任务进行时间跟踪"
        },
        {
          cls: "el-icon-success",
          detail: "预定的报告和通知"
        },
        {
          cls: "el-icon-success",
          detail: "报销管理"
        },
        // {
        //   cls: "el-icon-success",
        //   detail: "假期/假期追踪"
        // },
        {
          cls: "el-icon-success",
          detail: "项目资源计划与调度"
        }
      ],
      botton_detail:"使用云工时数字化管理平台，将会提高您工作的效率，最大化减少企业的管理成本！",
      foot_list: [
        {
          name: "网站声明"
        },
        {
          name: "网站管理"
        },
        {
          name: "网站地图"
        },
        {
          name: "联系我们"
        },
        {
          name: "网站值班"
        },
        {
          name: "访问排行"
        }
      ],
      banner_dec: "云工时管理系统隶属于北京众立信科技有限公司，是一款专门用于项目工时管理、项目成本管理的服务型系统，云工时可以智能的替代人工管理，真正意义上实现由系统替代人工管理的目标，能够最大程度的帮助企业低成本实现数字化管理的愿景，此外我们系统也充分考虑了企业数据的安全性，敏感信息脱敏处理以及本地化部署的需求，为企业打造最安全的系统。"
    };
  },
  created() {
  },
  methods: {
    getToMenu() {
      window.location = 'http://home.timemate.top/'
    },
    getRouter() {
      this.$router.push('/consult')
    },
    mess(){
      this.$alert('请拨打电话 400-609-8866', '联系方式', {
        confirmButtonText: '确定'
      })
    }
  }
};
</script>

<style scoped lang="scss">
.box {
  width: 100%;
  min-width: 1200px;
  //overflow-x: scroll;
}

.head {
  width: 100%;
  min-width: 1200px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 5%;
}

.banner {
  background: url("https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/top_banner.png");
  background-size: 100% 100%;

}
.title-p{
font-size:36px;font-weight:bold;color:#3b426b;margin-bottom:10px;
  }
  .js-p{
width:50%;font-size:18px;line-height:35px;color:#7d83a9;margin-bottom:40px;
  }
@media(max-width:1400px){
  .title-p{
font-size:2vw;font-weight:bold;color:#3b426b;margin-bottom:10px;
  }
  .js-p{
width:90%;font-size:1vw;line-height:2vw;color:#7d83a9;margin-bottom:2vw;
  }
}
@media(max-width:1750px){
  .title-p{
font-size:2vw;font-weight:bold;color:#3b426b;margin-bottom:10px;
  }
  .js-p{
width:75%;font-size:1vw;line-height:2vw;color:#7d83a9;margin-bottom:2.5vw;
  }
} 
.list {
  width: 100%;
  min-width: 1200px;
  text-align: center;
  padding: 120px 15% 100px 15%;
  border-bottom: 1px solid rgb(239, 246, 255);

  .list_p {
    font-size: 32px;
    color: #3b426b;
  }

  .list_ul {
    margin-top: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    li {
      flex:1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;

      img {
        width: 74px;
      }

      .list_title {
        margin-top: 40px;
        margin-bottom: 24px;
        font-size: 24px;
        color: #3b426b;
      }

      .list_dec {
        color: #7d83a9;
        font-size: 18px;
      }
    }
  }
}

.price {
  width: 100%;
  height: 930px;
  // background:#000;
  padding: 120px 15% 100px 15%;

  .price_ul {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-between;

    .price_content_p {
      display: flex;
      justify-content: space-between;
      font-size: 18px;
      margin-top: 34px;
    }

    .price_ul_li {
      width: 280px;
      height: 582px;
      border-radius: 16px;
      border: 1px solid rgba(151, 151, 151, 0.51);
      background: #ffffff;
      margin-top: 95px;

      .price_ul-li_p {
        width: 280px;
        height: 118px;
        background-image: url('https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/17%20-%20OTHER%20COLORS@2x.png');
        background-size: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        color: #fff;
      }

      .price_content {
        width: 100%;
        height: 321px;
        padding: 12px 20px 0 20px;

        .price_content_bottom {
          display: flex;
          justify-content: center;
          align-items: center;

          button {
            width: 160px;
            height: 48px;
            background: #037BFF;
            box-shadow: 0px 2px 4px 0px rgba(0, 0, 0, 0.12);
            border-radius: 4px;
            color: #fff;
            margin-top: 34px;
          }
        }
      }
    }
  }
}

.combo {
  width: 100%;
  padding: 120px 15% 100px 15%;
}

.image_text {
  margin-top: 100px;
  padding: 0 15%;
  height: 400px;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);

  .image_text_dl {
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;

    .image_text_dd {
      width: 290px;
      margin-right: 120px;

      img {
        width: 100%;
      }
    }

    .image_text_dt {
      flex: 1;
    }
  }
}

.login {
  text-align: center;
  padding: 100px 15% 65px 15%;
  border-bottom: 1px solid rgb(239, 246, 255);

  .login_ul {
    display: flex;
    justify-content: space-between;
    margin-bottom: 94px;

    li {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}

.detail {
  // margin-top: 100px;
  padding: 72px 15% 132px 15%;
  background: linear-gradient(180deg, #ffffff 0%, #f7f7f7 100%);
  border-bottom: 1px solid rgb(239, 246, 255);

  .detail_dl {
    padding-top: 40px;
    box-sizing: border-box;
    display: flex;

    .detail_dd {
      width: 290px;
      margin-right: 120px;

      img {
        width: 100%;
      }
    }

    .detail_dt {
      flex: 1;
    }
  }
}

.bottom {
  background: #ffffff url(https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/bottom_banner.png) no-repeat;
  background-size: 100% 290px;
  position: relative;
}

.foot {
  height: 100px;
  background: #037BFF;
  //background:transparent;
  padding: 0 15%;
  // line-height: 40px;
  text-align: center;
  p{
    border-top: #036BFF solid .5px;

  }
  .foot_ul {
    display: flex;
    justify-content: space-between;
    padding-top: 40px;
    padding-bottom: 30px;

    li {
      flex: 1;
      display: flex;
      justify-content: center;
      border-right: 1px solid #fff;
      font-size: 14px;
      color: rgb(172, 175, 186);
    }

    li:last-child {
      border-right: 0;
    }
  }
}
</style>
