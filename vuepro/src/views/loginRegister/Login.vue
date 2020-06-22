<template>
  <div class="login-Box">
    <header class="Uzuheader">
      <div class="UzuImg" @click="goIndex"></div>
      <ul class="hotLine">
        <li>
          售前热线:
          <span>400-678-5432</span>
        </li>
        <li>
          售后热线:
          <span>400-678-5482</span>
        </li>
      </ul>
    </header>
    <section class="conter">
      <div class="conter-left">
        <div class="conter-left-txt">
          <h2 class="h2-tlt">小熊U租助您轻资产转型</h2>
          <div class="fix-question">
            <h4 class="fix-tlt">通过解决以下问题</h4>
            <p>1.购置IT设备支出大笔资金</p>
            <p>1.购置IT设备支出大笔资金</p>
            <p>3.历史资产的处置</p>
          </div>
          <h3 class="h3-tlt">帮您实现轻松办公</h3>
          <router-link to="/register" class="login-register-soon">立即注册</router-link>
        </div>
      </div>
      <div class="conter-right">
        <div class="head">
          <ul>
            <li :class="{active:loginWay}" @click="loginWay=true">
              <a>账号密码登录</a>
            </li>
            <li :class="{active:!loginWay}" @click="loginWay=false">
              <a>手机快捷登录</a>
            </li>
          </ul>
        </div>

        <!-- 账号密码登录 -->
        <div class="userName-login" v-show="loginWay">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone">
              <el-input
                type="text"
                placeholder="请输入手机号码"
                v-model="ruleForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="pass">
              <el-input
                type="password"
                placeholder="请输入密码"
                v-model="ruleForm.pass"
                autocomplete="off"
              ></el-input>
            </el-form-item>

            <el-form-item prop="identify">
              <el-input
                type="text"
                placeholder="图形验证码"
                v-model="ruleForm.code"
                class="changeidenCodeL"
              ></el-input>
              <div class="potoCodeL" v-if="loginWay" @click="changeCode()">
                <SIdentify :identifyCode="identifyCode"></SIdentify>
              </div>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>
        <!-- 手机快捷登录 -->
        <div class="Phone-login" v-show="!loginWay">
          <el-form
            :model="ruleForm"
            status-icon
            :rules="rules"
            ref="ruleForm"
            label-width="100px"
            class="demo-ruleForm"
          >
            <el-form-item prop="phone">
              <el-input
                type="text"
                placeholder="请输入手机号码"
                v-model="ruleForm.phone"
                autocomplete="off"
              ></el-input>
            </el-form-item>
            <el-form-item prop="identify">
              <el-input
                type="text"
                placeholder="图形验证"
                v-model="ruleForm.code"
                autocomplete="off"
                class="changeidenCode"
              ></el-input>
              <div class="potoCode" v-if="!loginWay" @click="changeCode()">
                <SIdentify :identifyCode="identifyCode"></SIdentify>
              </div>
            </el-form-item>

            <el-form-item prop="age">
              <el-input type="text" class="getPhCode" placeholder="短信验证码" v-model="ruleForm.age"></el-input>
              <button
                class="getPhoneVerifyCodeBtn"
                :disabled="disabled"
                @click.stop="getPhCodel"
              >{{btntxt}}</button>
            </el-form-item>

            <el-form-item>
              <el-button type="primary" @click="submitForm('ruleForm')">立即登录</el-button>
            </el-form-item>
          </el-form>
        </div>

        <!-- 忘记密码 注册 -->
        <div class="wJMM">
          <p class="fl">
            <i>没有账号？</i>
            <router-link to="/register">立即注册</router-link>
          </p>
          <p class="fr">
            <router-link to>忘记密码</router-link>
          </p>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import SIdentify from "./components/identify";
export default {
  data() {
    // 手机短信验证码
    var checkAge = (rule, value, callback) => {
      if (value === "") {
        return callback(new Error("短信验证码不能为空"));
      } else if (this.randnum != this.ruleForm.age) {
        callback(new Error("短信验证码错误"));
      } else {
      	
        callback();
      }
    };
    // 图形验证码
    var checkIdenCode = (rule, value, callback) => {
      if (this.identifyCode != this.ruleForm.code) {
        callback(new Error("请输入正确的验证码"));
      } else {
        callback();
      }
    };
    var validatePass = (rule, value, callback) => {
      let passwordRe = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{8,32}$/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!passwordRe.test(value)) {
        callback(new Error("密码8-32位数字或字母组成"));
      } else {
        callback();
      }
    };
    var phone = (rule, value, callback) => {
      let str = /^1(3|5|7|8)\d{9}$/;

      if (value === "") {
        callback(new Error("手机号码不能为空"));
      } else if (!str.test(value)) {
        callback(new Error("手机号码格式不正确!"));
      } else {
        callback();
      }
    };
    return {
      identifyCode: "",
      // 验证码的随机取值范围
      identifyCodes: "1234567890",
      loginWay: false,
      btntxt: "获取验证码",
      disabled: false,
      randnum: "",

      ischecke: false,
      ruleForm: {
        pass: "",
        phone: "",
        age: "",
        code: ""
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        phone: [{ validator: phone, trigger: "blur" }],
        age: [{ validator: checkAge, trigger: "blur" }],
        identify: [{ validator: checkIdenCode, trigger: "blur" }]
      }
    };
  },
  components: {
    SIdentify
  },
  mounted() {
    // 页面加载刷新图形验证码
    this.identifyCode = "";
    this.makeCode(this.identifyCodes, 4);
    this.$store.commit('changeHead',window.location.hash)
    console.log(this.$store.state.histroyPath )
  },
  methods: {
  	goIndex(){
				this.$router.push('/index')
			},
    // 获取手机验证码
    getPhCodel() {
      let ipstr = /^1(3|5|7|8)\d{9}$/;
      this.time = 60;

      console.log(this.ruleForm.phone != "" && ipstr.test(this.ruleForm.phone));
      if (this.ruleForm.phone != "" && ipstr.test(this.ruleForm.phone)) {
//      console.log(1);
        this.timer();

        function rand(min, max) {
          return Math.floor(Math.random() * (max - min)) + min;
        }
        this.randnum = rand(1000, 9999);
        console.log(this.randnum)
        setTimeout(() => {
          this.$message({
            showClose: true,
            message: "短信验证码为：" + this.randnum,
            duration: 2000
          });
        }, 4000);
      } else {
        this.$message.error("请输入手机号码");
      }
    },
    timer() {
      if (this.time > 0) {
        this.disabled = true;
        this.time--;
        this.btntxt = this.time + "秒重新发送";
        setTimeout(this.timer, 1000);
      } else {
        this.time = 0;
        this.btntxt = "发送验证码";
        this.disabled = false;
      }
    },
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
        	this.$store.commit('getLoginNumber',this.ruleForm.phone)
         console.log(this.$store.state.histroyPath)
         if(this.$store.state.histroyPath==''){
         	 this.$router.push('/index');
         }else{
         	 this.$router.push(this.$store.state.histroyPath);
         }
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    // 点击验证码刷新验证码
    changeCode() {
      this.identifyCode = "";
      this.makeCode(this.identifyCodes, 4);
    },
    // 生成一个随机整数  randomNum(0, 10) 0 到 10 的随机整数， 包含 0 和 10
    randomNum(min, max) {
      max = max + 1;
      return Math.floor(Math.random() * (max - min) + min);
    },
    // 随机生成验证码字符串
    makeCode(data, len) {
      for (let i = 0; i < len; i++) {
        this.identifyCode += data[this.randomNum(0, data.length - 1)];
      }
    }
  }
};
</script>

<style lang="less" scoped>
.login-Box {
  background: #f5f1da;
  .fl {
    float: left;
  }
  .fr {
    float: right;
  }
  
  .Uzuheader {
    background: #fff;
    padding: 10px 130px;
    position: relative;
    height: 100px;

    line-height: 100px;
    .UzuImg {
      width: 180px;
      height: 80px;

      background: url(/img/product-list-v1-9.404cb190.png) 0px 0px no-repeat;
    }
    .hotLine {
      position: absolute;
      right: 183px;
      top: 12px;
      li {
        list-style: none;
        float: left;
        margin-left: 20px;
        font-size: 14px;
        span {
          color: #19aecd;
        }
      }
    }
  }
  .conter {
    padding: 30px 130px;
    display: flex;
  }
  .conter-left {
    width: 800px;
    height: 450px;
    padding: 40px 30px;
    background: url(../../assets/images/login/v1-9_login_banner.png) 0px 0px
      no-repeat;
    .conter-left-txt {
      .h2-tlt {
        font-family: SourceHanSansCN-Bold;
        font-size: 36px;
        line-height: 1em;
        color: #fcdd33;
        margin-bottom: 36px;
      }
      .fix-question {
        .fix-tlt {
          font-size: 24px;
          line-height: 1em;
          color: #fff;
        }
        p {
          margin-top: 18px;
          font-size: 14px;
          line-height: 1em;
          color: #fff;
        }
      }

      .h3-tlt {
        margin: 34px 0 36px;
        font-family: SourceHanSansCN-Bold;
        font-size: 30px;
        line-height: 1em;
        color: #fff;
      }
      .login-register-soon {
        text-decoration: none;
        display: block;
        width: 160px;
        height: 46px;
        background-color: #fcdd33;
        border-radius: 23px;
        font-family: SourceHanSansCN-Medium;
        font-size: 18px;
        text-align: center;
        line-height: 46px;
        color: #323011;
      }
    }
  }
  .conter-right {
    width: 380px;
    height: 480px;
    background-color: #fff;
    border-radius: 6px;
    .login-way div {
      display: none;
    }
    .login-way div .on {
      display: block;
    }
    ul {
      li {
        width: 50%;
        float: left;
        border-bottom: 0.6px solid #e2d6bb;

        text-align: center;
        list-style: none;
        font-size: 16px;
        color: #666;
        line-height: 59px;
        cursor: pointer;
        a {
          height: 58px;
          display: inline-block;
        }
      }
      .active a {
        border-bottom: 2px solid #009fe8;
        color: #009fe8;
        box-sizing: border-box;
      }
    }
    // 账号登录
    .userName-login {
      .changeidenCodeL {
        position: relative;
      }
      .potoCodeL {
        position: absolute;
        right: 8%;
        top: 1px;
      }
      margin-top: 80px;
      text-align: center;
      /deep/.el-form-item__content {
        margin-left: 0px !important;
      }

      .el-input {
        width: 85%;
      }
      .el-button--primary {
        width: 85%;
      }
    }
    // 手机快捷登录
    .Phone-login {
      margin-top: 80px;
      text-align: center;
      .changeidenCode {
        position: relative;
      }
      .potoCode {
        position: absolute;
        right: 8%;
        top: 1px;
      }
      /deep/.el-form-item__content {
        margin-left: 0px !important;
      }
      .el-input {
        width: 85%;
      }
      .el-button--primary {
        width: 85%;
      }
      .getPhCode {
        position: relative;
      }
      .getPhoneVerifyCodeBtn {
        position: absolute;
        top: 2px;
        right: 8%;
        height: 36px;
        width: 117px;
        font-size: 13px;
        background-color: #009fe8;
        border: none;
        color: #fff;
      }
    }
    .wJMM {
      margin-top: 50px;
      font-size: 14px;
      padding: 0 24px;
      color: #c6b9a2;
      a {
        color: #008dbf;
        text-decoration: none;
      }
    }
  }
}


</style>>

