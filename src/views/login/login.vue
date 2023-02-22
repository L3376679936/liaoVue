<script setup lang="ts">
import { loginApi } from "@/api/login";
import { reactive, ref } from "vue";
// import { particles } from "@/views/login/comm/particles";
const state = reactive({
  loginForm: {
    username: "",
    password: "",
  },
});
let loginRef = ref();
const { loginForm } = state;
const loginRules = reactive({
  // 登录表单的验证规则对象
  username: [
    { required: true, message: "请输入用户名", trigger: "blur" },
    {
      pattern: /^[a-zA-Z][a-zA-Z0-9]{0,9}$/,
      message: "用户名必须是1-10的字母数字,数字不能开头",
      trigger: "blur",
    },
  ],
  password: [
    { required: true, message: "请输入密码", trigger: "blur" },
    {
      pattern: /^\S{6,15}$/,
      message: "密码必须是6-15的非空字符",
      trigger: "blur",
    },
  ],
});
const doLogin = (e: { preventDefault: () => void }) => {
  e.preventDefault();
  loginRef.value.validate(async (valid: boolean) => {
    if (valid) {
      // 登录成功
      console.log("登录成功");
      const res = await loginApi(loginForm);
      if (res.code == 200) {
      }
      console.log(res);
    } else {
      // 登录失败
      console.log("登录失败");
      return false;
    }
  });
};
</script>

<template>
  <div id="particle-container">
    <!-- <div class="login">
      <Particles
        id="tsparticles"
        class="login__particles"
        :options="particles"
      />
    </div> -->
    <!-- 登录页面的整体盒子 -->
    <div class="login-container">
      <!-- 登录的盒子 -->
      <div class="login-box">
        <!-- 标题的盒子 -->
        <div class="title-box">SanTianDaYu—LiangTianShaiWang</div>

        <!-- 登录的表单区域 -->
        <el-form
          class="title-form"
          :model="loginForm"
          :rules="loginRules"
          ref="loginRef"
        >
          <!-- 用户名 -->
          <el-form-item prop="username">
            <el-input
              style="margin-bottom: 16px"
              v-model="loginForm.username"
              placeholder="请输入用户名"
              maxlength="10"
              minlength="1"
            ></el-input>
          </el-form-item>
          <!-- 密码 -->
          <el-form-item prop="password">
            <el-input
              v-model="loginForm.password"
              type="password"
              placeholder="请输入密码"
              maxlength="15"
              minlength="6"
            ></el-input>
          </el-form-item>
          <el-form-item>
            <button class="btn-login" @click="doLogin">登录</button>
            <!-- <div class="loginBtn"   @click="login">
    <input type="text" placeholder="登录">
    <span class="bottom"></span>
    <span class="right"></span>
    <span class="top"></span>
    <span class="left"></span>
  </div> -->
            <el-link type="info">去注册</el-link>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
button:hover {
  background: purple;
}

button {
  min-height: 53px;
  margin: 0;
  margin-top: 20px;
  min-width: 166px;
  border-radius: 5px;
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
  -ms-flex-pack: distribute;
  justify-content: space-around;
  position: relative;
  cursor: pointer;
  background: -webkit-gradient(
    linear,
    left top,
    right top,
    color-stop(-12.74%, rgba(110, 239, 255, 0.5)),
    color-stop(56.76%, rgba(106, 224, 255, 0.271))
  );
  background: linear-gradient(
    90deg,
    rgba(110, 239, 255, 0.5) -12.74%,
    rgba(106, 224, 255, 0.271) 56.76%
  );
  border: 2px solid #acf7ff;
  color: #ffffff;
  font-size: 18px;
  font-weight: 600;
}

button:before {
  content: "";
  width: 4px;
  height: 28px;
  background: #409eff;
  border: 2px solid #acf7ff;
  -webkit-transform: rotate(-45deg);
  -ms-transform: rotate(-45deg);
  transform: rotate(-45deg);
  position: absolute;
  border-top: 0;
  border-left: 0;
  border-bottom: 0;
  bottom: -7px;
  left: 4px;
  border-bottom-left-radius: 10px;
  border-top-left-radius: 10px;
}

button:after {
  content: "";
  position: absolute;
  left: -2px;
  bottom: -2px;
  border-top: 15px solid transparent;
  border-left: 15px solid #fffcf7;
}

#particles-js {
  width: 100vw !important;

  height: 100%;

  position: absolute;
}

.particles-js-canvas-el {
  width: 100vw !important;

  height: 100vh !important;

  position: fixed;

  top: 0;

  left: 0;
}

#particle-container {
  width: 100vw !important;

  height: 100%;
}

#particle-container ::-webkit-scrollbar {
  width: 0px !important;
}

:deep(.el-input__inner) {
  height: 60px;
  line-height: 60px;
}

.loginBtn {
  margin-top: 10px;
  position: relative;
  width: 100%;
  font-size: 24px;

  input {
    cursor: pointer;
    text-align: center;
    width: 100%;
    color: #fff;
    font-size: inherit;
    font-family: inherit;
    background-color: purple;
    padding: 0.35em 0.45em;
    border: 1px solid transparent;
    transition: background-color 0.3s ease-in-out;
  }

  input:focus {
    outline: none;
  }

  input::placeholder {
    color: #fff;
    font-size: 30px;

    font-weight: 700;
    text-shadow: 1px 1px 2px black;
  }

  span {
    position: absolute;
    background-color: #fc2f70;
    transition: transform 0.1s ease;
  }

  .bottom,
  .top {
    height: 1px;
    left: 0;
    right: 0;
    transform: scaleX(0);
  }

  .left,
  .right {
    width: 1px;
    top: 0;
    bottom: 0;
    transform: scaleY(0);
  }

  .bottom {
    bottom: 0;
    transform-origin: bottom right;
  }

  input:focus ~ .bottom {
    transform-origin: bottom left;
    transform: scaleX(1);
  }

  .right {
    right: 0;
    transform-origin: top right;
    transition-delay: 0.05s;
  }

  input:focus ~ .right {
    transform-origin: bottom right;
    transform: scaleY(1);
  }

  .top {
    top: 0;
    transform-origin: top left;
    transition-delay: 0.15s;
  }

  input:focus ~ .top {
    transform-origin: top right;
    transform: scaleX(1);
  }

  .left {
    left: 0;
    transform-origin: bottom left;
    transition-delay: 0.25s;
  }

  input:focus ~ .left {
    transform-origin: top left;
    transform: scaleY(1);
  }
}

.login-container {
  width: 100%;
  background: url("@/assets/images/login_bg.jpg") center;
  background-size: cover;
  height: 100%;

  .login-box {
    width: 500px;
    height: 430px;
    background-color: rgba(255, 255, 2555, 0.2);
    border-radius: 3px;
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 0 30px;
    box-sizing: border-box;

    .title-box {
      height: 120px;
      line-height: 120px;
      font-family: "Times New Roman", Times, serif;
      font-size: 28px;
      color: #fff;
      text-align: center;
    }

    .btn-login {
      width: 100%;
    }
  }
}
</style>
