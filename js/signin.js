$(document).ready(function() {
    //$('#login-email').focus();

    $('#signin-submit').click(function() {

        event.preventDefault(); // prevent PageReLoad
		var username = document.getElementById("signin-email").value;
		var password = document.getElementById("signin-pwd").value;
		var password_chk = document.getElementById("pwd-chk").value;
		var showtxt = document.querySelector('.show2');

        if (username != "" && password != "" && password_chk != "" && password == password_chk) { 
            window.alert("會員註冊成功！");
            window.location = "homepage.html"; // go to home.html
        }
		else if (username != "" && password != "" && password_chk != "" && password != password_chk) {
			window.alert("請確認輸入相同密碼");
		}
        else {
			showtxt.innerHTML = '請正確填入會員帳號與密碼';
            $('.error').css('display', 'block'); // show error msg
        }
    });
});