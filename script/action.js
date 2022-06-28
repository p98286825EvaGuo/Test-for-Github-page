function username() {
    var username = document.getElementById("username"); //得到賬戶的物件
    var usernameSpan = document.getElementById("usernameSpan"); //得到文字物件
    var pattern = /^[0-9a-zA-Z_]{6,16}$/;
    var userAgain = 0; //用來標記使用者名稱是否存在,1為使用者名稱不存在且輸入正確
    username.onfocus = function() { //獲得焦點時根據匹配成功與否修改span中的樣式和內容
    if(!pattern.test(username.value)) { //如果獲得焦點時輸入不正確,重新調整樣式
    spanValue(usernameSpan, "usernameSpan"); //修改提示語句
    changeFailingStyle(username, usernameSpan); //修改為匹配中並且失敗的樣式
    } else {//如果匹配成功但是使用者名稱存在
    if(userAgain == 0) {
    spanValue(usernameSpan, "usernameAgain"); //修改提示語句
    changeFailingStyle(username, usernameSpan); //修改為匹配中並且失敗的樣式
    }
    }
    }
    username.onkeyup = function() { //輸入內容是判斷根據輸入的值修改span中的樣式和內容,使用up不是down,因為down讀取時候有出入
    if(pattern.test(username.value)) { //匹配成功的話
    changeSucceedStyle(username, usernameSpan); //修改為匹配成功的樣式
    if(!checkUsername(username.value + "username")) {//如果使用者名稱存在
    spanValue(usernameSpan, "usernameAgain"); //修改提示語句
    changeFailingStyle(username, usernameSpan); //修改為匹配中並且失敗的樣式
    userAgain = 0; //修改為0
    } else {
    userAgain = 1; //修改為1
    }
    } else { //匹配失敗
    spanValue(usernameSpan, "usernameSpan"); //修改提示語句
    changeFailingStyle(username, usernameSpan);
    }
    }
    username.onblur = function() { //失去焦點時根據匹配成功與否修改span中的樣式和內容
    if(pattern.test(username.value) &;&; userAgain) { //匹配成功的話
    changeSucceedStyle(username, usernameSpan); //修改為成功的樣式
    usernamenum = 1;
    } else { //匹配失敗
    changeFailedStyle(username, usernameSpan); //修改為失敗的樣式
    usernamenum = 0;
    }
    }
    }