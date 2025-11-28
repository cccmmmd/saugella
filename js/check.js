function checkStep1form() {
    /*check Step1 form data */
    Name = $("#q-text input[name='Name']");
    tel = $("#q-text input[name='tel']");
    email = $("#q-text input[name='email']");    
    uCity = $("#zone1");
    uArea = $("#zone2");
    uAddr = $("#q-text input[name='address']");

    var pic_name;
  
    var testmail = /^.+@.+\..{2,3}$/;
    var word = /^[A-Za-z]+$/;
    var num= /^[0-9]+$/;
    var specialChars = /^[a-zA-Z0-9]+$/;
    var Chinese = /^[\u4e00-\u9fa5]+$/;
    var cellphone = /^09[0-9]{8}$/;
  
    if (Name.val() == "" ){
        alert("請填入您的姓名!");
        Name.focus();
        return false;
    } else if (tel.val() == "" ){
        alert("請填入手機!");
        tel.focus();
        return false;
    } else if (!cellphone.test(tel.val())) {
        alert("請填入正確的手機 !");
        tel.focus();
        return false;
    } else if (email.val() == "") {
        alert("請填入E-mail !");
        email.focus();
        return false;
    } else if (!checkEmail( email.val())) {
        alert(" 請填入正確的E-mail!");
         email.focus();
        return false;
    } else if (uCity.val() == "") {
        alert("請選擇 縣市!");
        uCity.focus();
        return false;
    } else if (uArea.val() == "") {
        alert("請選擇 區域!");
        uArea.focus();
        return false;
    } else if (uAddr.val() == "" ) {
        alert("請填入完整地址!");
        uAddr.focus();
        return false;
    } else if (!document.getElementById("readRule").checked) {
        alert("請勾選 詳閱個資蒐集聲明 選項");
        document.getElementById("readRule").focus();
        return false;
    } 
    
    //showAlert();
    sendData();
    return true;
}

function showAlert(){
    clearForm();
    $.part.part1.hide();
    $.part.part2.hide();
    $.part.part3.hide();
    $.lb.fadeOut();
    alert('感謝您的熱心參與，預祝您抽中大獎！');

}
//102
function sendData() {
        $.post('http://saugella-cny.campaigns.com.tw/saugella/?apptype=saugellacny&mode=insdata&access_token=b9884d43a2b9884d8c661f06448b9fc8&op=json',
            { mode:'Ins',
                is_name: Name.val(),
                is_phone: tel.val(),
                is_email: email.val(),
                is_county: $('#zone1 option:selected').text() ,
                is_area: $('#zone2 option:selected').text(),
                is_address: uAddr.val(),
                is_sdid: sdid
            },
            function(data){
                if (data.state==1) {
                    showAlert();
                    return false;
                }else if(data.state==0){
                    alert("伺服器忙碌中。請稍後再試 (error)");
                }else{
                    alert("伺服器忙碌中。請稍後再試 (error)");
                }
            },"json")   
    }
//信箱格式判斷
function checkEmail(email) {
    EmailCheck = new RegExp(/^([a-zA-Z0-9]+)([\.\-\_]?[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(\.[a-zA-Z0-9\_\-]+)+$/)
    if (EmailCheck.test(email)) {
        return true;
    }
    else {
        return false;
    }
}

function ValidEmail(emailtoCheck) {

    var regExp = /^[^@^\s^,]+@[^\.@^\s^,]+(\.[^\.@^\s^,]+)+$/;
    if (emailtoCheck.match(regExp))
        return true;
    else
        return false;
}


function clearForm() {
   
    $("#q-text input[name='Name']").val('');
    $("#q-text input[name='tel']").val('');
    $("#q-text input[name='email']").val('');    
    $("#zone1").val('');
    $("#zone2").val('');
    $("#q-text input[name='address']").val('');
    document.getElementById("readRule").checked = false;
}


