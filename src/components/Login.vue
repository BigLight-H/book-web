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
        <h2>用户登录</h2>
      </div>
      <Form ref="loginData" :model="loginData" :rules="ruleValidate">
        <FormItem label="账号" prop="acct">
          <Input prefix="ios-contact" type="text" v-model="loginData.acct" placeholder="请输入用户名"></Input>
        </FormItem>
        <FormItem label="密码" prop="pass">
          <Input prefix="ios-lock-outline" type="password" v-model="loginData.pass" placeholder="请输入密码"></Input>
        </FormItem>
        <FormItem class="form-footer" style="margin-bottom: 0.5rem;">
          <Button type="primary" class="login-btn" @click="handleSubmit('loginData')">登录</Button>
        </FormItem>
        <FormItem class="form-footer">
          <div class="dev-sign-main-aside-tip" style="text-align: center">
            <p>
              <a href="/recover" class="">忘记密码？</a>
            </p>
            <p>尚未拥有账户？
              <a href="/register" class="">注册</a>
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
  export default {
    data () {
      return {
        loginData: {
          acct:'',
          pass:''
        },
        ruleValidate: {
          acct: [
            { required: true, message: '账号不能为空', trigger: 'blur' },
            { min: 3, max: 16, message: '账号长度3-16个字符', trigger: 'blur' }
          ],
          pass: [
            { required: true, message: '密码不能为空', trigger: 'blur' },
            { type: 'string', min: 6, max: 16, message: '密码长度6-16个字符', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      handleSubmit (name) {
        this.$refs[name].validate((valid) => {
          if (valid) {
            this.$Message.success('提交成功!')
          } else {
            this.$Message.error('表单验证失败!')
          }
        })
      },
      handleReset (name) {
        this.$refs[name].resetFields();
      }
    }
  }
</script>
