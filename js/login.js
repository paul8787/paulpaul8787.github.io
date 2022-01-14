$(document).ready(function() {
    //$('#login-email').focus();

    $('#login-submit').click(function() {

        event.preventDefault(); // prevent PageReLoad
		var ValidEmail = $('#login-email').val() === '123456@gmail.com'; // User validate
		var ValidPassword = $('#login-pwd').val() === '1234'; // Password validate
		var showtxt = document.querySelector('.show1');


        if (ValidEmail === true && ValidPassword === true) { // if ValidEmail & ValidPassword
            window.alert("會員登入成功！");
			$('.valid').css('display', 'block');
            window.location = "homepage.html"; // go to home.html
        }
        else {
			showtxt.innerHTML = '請輸入正確的會員帳號與密碼';
            $('.error').css('display', 'block'); // show error msg
        }
    });
});