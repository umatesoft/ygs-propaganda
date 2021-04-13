<template>
  <div
    class="wrap"
    style="display:flex;flex-direction:column;align-items:center;width:100%;background:rgba(0,0,0,0.05);"
  >
    <div class="top" style="text-align:center;margin:50px 0 50px 0;">
      <img
        style="width: 50%;"
        src="https://umatesoft-tuchuang.oss-cn-beijing.aliyuncs.com/timecloud.png"
        alt
      />
      <p style="text-align:center;font-size:30px;margin:40px 0 20px 0;">云工时详情咨询</p>
      <p>
        感谢关注云工时管理系统，请留下您的联系方式，我们将在3个工作日内安排专人为您服务，或者您也可以拨打云工时客服热线
        <br />
        <span style="color:rgba(40,99,243,1)">400-609-8866</span>咨询
      </p>
    </div>
    <div
      class="bottom"
      style="background:#fff;display:flex;flex-direction:column;align-items:center;"
    >
      <div
        style="padding:0 17px;width:1000px;height:34px;display:flex;justify-content:center;align-items:center;"
      >
        <p style="width:100%;height:6px;background:rgba(0,0,0,0.05)"></p>
      </div>
      <!-- <div style="width:856px;text-align:center;">
                <p style="text-align:left;">
                    01 姓名 *
                </p>
                <p>请输入您的姓名</p>
                <input type="text" placeholder="请输入">
      </div>-->
      <el-form
        :model="ruleForm"
        :rules="rules"
        ref="ruleForm"
        class="demo-ruleForm"
        style="width:856px;"
      >
        <p style="font-size:18px;margin-top:45px;">
          <span style="font-weight:bold">01</span> 姓名
          <span style="color:red">*</span>
        </p>
        <p style="color:rgba(0,0,0,0.6);font-size:14px;margin:20px 0;">请输入您的姓名</p>
        <el-form-item label prop="userName">
          <el-input v-model="ruleForm.userName"></el-input>
        </el-form-item>
        <p style="font-size:18px;margin-top:45px;">
          <span style="font-weight:bold">02</span> 电话
          <span style="color:red">*</span>
        </p>
        <p style="color:rgba(0,0,0,0.6);font-size:14px;margin:20px 0;">请输入您的联系电话</p>
        <el-form-item label prop="phone">
          <el-input v-model="ruleForm.phone"></el-input>
        </el-form-item>
        <p style="font-size:18px;margin-top:45px;">
          <span style="font-weight:bold">03</span> 邮箱
          <span style="color:red">*</span>
        </p>
        <p style="color:rgba(0,0,0,0.6);font-size:14px;margin:20px 0;">请输入您的联系邮箱</p>
        <el-form-item label prop="email">
          <el-input v-model="ruleForm.email"></el-input>
        </el-form-item>
        <p style="font-size:18px;margin-top:45px;">
          <span style="font-weight:bold">04</span> 公司
          <span style="color:red">*</span>
        </p>
        <p style="color:rgba(0,0,0,0.6);font-size:14px;margin:20px 0;">请输入<span style="color: rgba(40,99,243,1);">完整准确</span>的公司名称</p>
        <el-form-item label prop="companyName">
          <el-input v-model="ruleForm.companyName"></el-input>
        </el-form-item>
        <p style="font-size:18px;margin-top:45px;">
          <span style="font-weight:bold">05</span> 需求
          <span style="color:red">*</span>
        </p>
        <p style="color:rgba(0,0,0,0.6);font-size:14px;margin:20px 0;">请描述您的需求</p>
        <el-form-item label prop="demandDesc">
          <el-input type="textarea" :rows="3" v-model="ruleForm.demandDesc" style="width:100%"></el-input>
        </el-form-item>
        <el-form-item style="text-align:center;margin:70px 0;">
          <el-button type="primary" @click="submitForm('ruleForm')" style="width:200px;">提交</el-button>
        </el-form-item>
      </el-form>
    </div>
    <p style="text-align:center;color: rgba(0,0,0,0.3);font-size:14px;line-height:20px;padding:30px 0 50px 0;">
        Copyright © 2019-2021 timemate.top<br>地址：北京市朝阳区常通路3号院2号楼16层1单元19007
    </p>
  </div>
</template>

<script>
import { getAdd } from "@/api/home";
export default {
  data() {
    var checkPhone = (rule, value, callback) => {
      const phoneReg = /^1[3|4|5|7|8][0-9]{9}$/;
      if (!value) {
        return callback(new Error("电话号码不能为空"));
      }
      setTimeout(() => {
        // Number.isInteger是es6验证数字是否为整数的方法,但是我实际用的时候输入的数字总是识别成字符串
        // 所以我就在前面加了一个+实现隐式转换

        if (!Number.isInteger(+value)) {
          callback(new Error("请输入数字值"));
        } else {
          if (phoneReg.test(value)) {
            callback();
          } else {
            callback(new Error("电话号码格式不正确"));
          }
        }
      }, 100);
    };
    var checkEmail = (rule, value, callback) => {
      const mailReg = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;
      if (!value) {
        return callback(new Error("邮箱不能为空"));
      }
      setTimeout(() => {
        if (mailReg.test(value)) {
          callback();
        } else {
          callback(new Error("请输入正确的邮箱格式"));
        }
      }, 100);
    };
    return {
      ruleForm: {
        userName: "",
        email: '',
        phone: '',
        companyName: '',
        demandDesc: ''
      },
      rules: {
        userName: [{ required: true, message: "请输入您的姓名", trigger: "blur" }],
        phone: [{ required: true, trigger: "blur", validator: checkPhone }],
        email: [{ required: true, trigger: "blur", validator: checkEmail }],
        companyName: [{ required: true, message: "请输入公司名称", trigger: "blur" }],
        demandDesc: [{ required: true, message: "请描述您的需求", trigger: "blur" }]
      }
    };
  },
  methods: {
    submitForm(formName) {
        console.log(this.ruleForm)
      this.$refs[formName].validate(valid => {
        if (valid) {
            console.log(this.ruleForm)
            let params = this.ruleForm
            getAdd(params).then(res => {
                if(res.data.code == 200) {
                    // this.$message({
                    //     type: 'success',
                    //     message: res.data.message
                    // });
                    const h = this.$createElement;
                    this.$msgbox({
                      showClose: false,
                      title: '提示',
                      type: 'success',
                      center: true,
                      message: h('p',{style: 'paddingt:20px;font-size:16px;text-align:left;text-indent:2rem;'},[
                        h('span',null,'尊敬的'),
                        h('span',null,this.ruleForm.userName),
                        h('span',null,'您好，您的需求已提交成功，我们的客服人员会尽快与您取得联系！'),
                      ]),
                      confirmButtonText: '确定',
                      callback: action => {
                        this.$router.replace('/')
                      }
                    });
                    this.ruleForm = {
                        userName: "",
                        email: '',
                        phone: '',
                        companyName: '',
                        demandDesc: ''
                    }
                    
                }else{
                    this.$message({
                        type: 'error',
                        message: res.data.message
                    });
                }
            })
        //   alert("submit!");
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
  }
};
</script>