<style>
  .login {
    width: 100%;
    height: 100%;
    background-color: #1c2438;
    position: relative;
  }
  .login .from-wrap{
    position: fixed;
    left: 50%;
    margin-left: -200px;
    top: 27%;
    margin-top: -150px;
    width: 400px;
    border-radius: 10px;
    background-color: #fff;
    padding: 20px 30px;
  }
  .login h2 {
    text-align: center;
    margin-bottom: 20px;
  }
  .login FormItem {
    margin-bottom: 15px;
  }
  .login .form-footer {
    text-align: right;
  }
  .ivu-form-item-required .ivu-form-item-label:before {
    display: none;
  }
  .login-title {
    border-bottom: 1px solid #d6d6d6;
    margin-bottom: 2rem;
  }
  .ivu-form-item-required .ivu-form-item-label:before {
    content: "*";
    display: inline-block;
    margin-right: 4px;
    line-height: 1;
    font-family: SimSun;
    font-size: 12px;
    color: #ed4014;
  }
  .login-btn {
    width: 100%;
    margin: 1rem 0;
  }
  .bounce-in-top {
    -webkit-animation: bounce-in-top 1.1s both;
    animation: bounce-in-top 1.1s both;
  }
  @-webkit-keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }
  @keyframes bounce-in-top {
    0% {
      -webkit-transform: translateY(-500px);
      transform: translateY(-500px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
      opacity: 0;
    }
    38% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
      opacity: 1;
    }
    55% {
      -webkit-transform: translateY(-65px);
      transform: translateY(-65px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    72% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    81% {
      -webkit-transform: translateY(-28px);
      transform: translateY(-28px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    90% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
    95% {
      -webkit-transform: translateY(-8px);
      transform: translateY(-8px);
      -webkit-animation-timing-function: ease-in;
      animation-timing-function: ease-in;
    }
    100% {
      -webkit-transform: translateY(0);
      transform: translateY(0);
      -webkit-animation-timing-function: ease-out;
      animation-timing-function: ease-out;
    }
  }

</style>
<template>
  <div class="login">
    <div class="from-wrap bounce-in-top">
      <div class="login-title">
        <h2>用户注册</h2>
      </div>
      <Form ref="registerData" :model="registerData" :rules="ruleRegisterValidate">
        <FormItem label="用户名（昵称，不可修改）" prop="name">
          <Input prefix="ios-contact" type="text" v-model="registerData.name" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="邮箱" prop="acct">
          <Input prefix="ios-mail-outline" type="text" v-model="registerData.acct" placeholder="请输入邮箱号"></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
          <Input prefix="ios-lock-outline" type="password" v-model="registerData.pass" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem class="form-footer" style="margin-bottom: 0.5rem;">
          <Button type="primary" class="login-btn" @click="handleRegisterSubmit('registerData')">注册</Button>
        </FormItem>
        <FormItem class="form-footer">
          <div class="dev-sign-main-aside-tip" style="text-align: center">
            <p>已拥有账号？
              <a href="/login" class="">登录</a>
              &nbsp;&nbsp;&nbsp;
              <a href="/" class="">回到主页</a>
            </p>
          </div>
        </FormItem>
      </Form>
    </div>
  </div>
</template>
<script>
  import axios from 'axios'
  axios.defaults.baseURL="/api";
  import qs from 'qs';
  export default {
    data () {
      return {
        registerData: {
          name:'',
          acct:'',
          pass:'',
        },
        ruleRegisterValidate: {
          name: [
            { required: true, message: '用户名不能为空', trigger: 'blur' },
            { min: 3, max: 16, message: '用户名长度3-16个字符', trigger: 'blur' }
            ],
          acct: [
            { required: true, message: '邮箱不能为空', trigger: 'blur' },
            { pattern: /[\w!#$ %& '*+/=?^_`{|}~-]+(?:\.[\w!#$%&' * +/=?^_`{|}~-]+)*@(?:[\w](?:[\w-]*[\w])?\.)+[\w](?:[\w-]*[\w])?/, message: '邮箱格式不正确', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleRegisterSubmit (registerData) {
        this.$refs[registerData].validate((valid) => {
          if (valid) {
            this.registerUser();
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      registerUser() {
        let postData = qs.stringify({
          name:this.registerData.name,
          email:this.registerData.acct,
          pwd:this.registerData.pass,
        });
        axios({
          method: 'post',
          url:'/register',
          data:postData
        }).then((res)=>{
          if(res.data.Status) {
            this.$router.push({ path:'/login' });
          } else {
            this.$Message.warning(res.data.Msg);
          }
        });
      }
    }
  }
</script>

