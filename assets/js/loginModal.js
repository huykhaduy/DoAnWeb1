const signup_switch = document.querySelector(".sign-up-switch-btn");
const login_switch = document.querySelector(".login-switch-btn");
const switch_bg = document.querySelector(".modal-nofication");
const login_pannel = document.querySelector(".modal-login");
const signup_pannel = document.querySelector(".modal-register");
const show_switch_info_signup = document.querySelector(".signup-show");
const show_switch_info_login = document.querySelector(".login-show");
const list_error_mess = document.querySelectorAll(".error-mess-sign-up");

signup_switch.addEventListener("click", showSignUpModal);
login_switch.addEventListener("click", showLoginModal);

function showLoginModal() {
    switch_bg.classList.add("active");
    login_pannel.classList.add("active");
    show_switch_info_login.classList.add("active");
    signup_pannel.classList.remove("active");
    show_switch_info_signup.classList.remove("active");
}

function showSignUpModal() {
    signup_pannel.classList.add("active");
    show_switch_info_signup.classList.add("active");
    switch_bg.classList.remove("active");
    login_pannel.classList.remove("active");
    show_switch_info_login.classList.remove("active");
}

// Sign up form validate

function checkName(name) {
    let isValid = form.validateName(name);
    if (!isValid.value) {
        list_error_mess[0].textContent = isValid.str;
        showOneMessage(list_error_mess[0]);
    }
    return isValid.value;
}

function checkUserName(username) {
    let isValid = form.validateUserName(username);
    if (!isValid.value) {
        // list_error_mess[1].textContent = isValid.str;
        showOneMessage(list_error_mess[1]);
    }
    return isValid.value;
}

function checkEmail(email) {
    let isValid = form.validateEmail(email);
    if (!isValid.value) {
      list_error_mess[2].textContent = isValid.str;
      showOneMessage(list_error_mess[2]);
    }
    return isValid.value;
}

function checkPassword(pass) {
    let isValid = form.validatePassword(pass);
    if (!isValid.value) {
    //   list_error_mess[3].textContent = isValid.str;
      showOneMessage(list_error_mess[3]);
    }
    return isValid.value;
}

function checkRePassword(pass,repass) {
    if (pass !== repass) {
        showOneMessage(list_error_mess[4]);
        return false;
    }
    return true;
}

function showOneMessage(message) {
    clearAllMessages();
    message.classList.add('active');
}

function clearAllMessages() {
    list_error_mess.forEach((item) => {
      item.classList.remove("active");
    });
}

if (user.checkLoginId()) {
    showUserPanel();
}
else showNoneUserPanel();

function showUserPanel() {
    const noneUserPanel = document.querySelector(".none-login-nav");
    const userPannel = document.querySelector(".user-login-nav");
    const setUserPanelName = document.querySelector("#hello-user-name");
    setUserPanelName.innerText = user.getUserId(user.checkLoginId()).name;
    userPannel.classList.add("active");
    noneUserPanel.classList.remove("active");
}

function showNoneUserPanel() {
    const noneUserPanel = document.querySelector(".none-login-nav");
    const userPannel = document.querySelector(".user-login-nav");
    userPannel.classList.remove("active");
    noneUserPanel.classList.add("active");
}


//----------------------Check Register--------------------------
const registerBtn = document.querySelector("#btn-register");
const registerField = document.querySelectorAll(".register-box-item>input");
registerBtn.addEventListener('click', function () {
    if (checkAllSignUpField()) {
        clearAllMessages();
        try {
            user.addUser(registerField[1].value, registerField[3].value, registerField[2].value, "0123456789", registerField[0].value, "No Address", false);
        } catch (e) {
            showAlert(
              "fas fa-exclamation-triangle",
              "Lỗi tên đăng nhập",
              "Tên đăng nhập đã tồn tại, vui lòng chọn tên khác!",
              "rgb(211, 109, 109)"
            );
            return;
        }
        // showAlert(
        //   "fas fa-check-circle",
        //   "Tạo thành công",
        //   "Cảm ơn bạn đã tạo tài khoản mua hàng ở DPHONE!"
        // );
        user.login(registerField[1].value, registerField[3].value);
        location.reload();
    }
})

function checkAllSignUpField() {
    if (checkName(registerField[0].value) && checkUserName(registerField[1].value)
        && checkEmail(registerField[2].value) && checkPassword(registerField[3].value)
        && checkRePassword(registerField[3].value, registerField[4].value)) {
        return true;
    }
    return false;
}

//---------------------Check Login---------------------------------
const loginBtn = document.querySelector("#login-btn");
const loginUsernameField = document.querySelector("#login-username");
const loginPasswordField = document.querySelector("#login-password");
loginBtn.addEventListener("click", function () {
    //Kiểm tra hợp lệ
    // const userNameLogin = document
    const errorLoginList = document.querySelectorAll(".error-mess");
    if (user.isSameUserName(loginUsernameField.value)) {
        errorLoginList[0].classList.remove("active");
        if (user.login(loginUsernameField.value, loginPasswordField.value)) {
            location.reload();
        }
        else {
            errorLoginList[1].classList.add("active");
        }
    }
    else {
        errorLoginList[0].classList.add('active');
        errorLoginList[1].classList.remove("active");
    }
})

const logOutBtn = document.querySelector("#logout-btn");
logOutBtn.addEventListener("click", function () {
    user.logout();
    location.reload();
})

