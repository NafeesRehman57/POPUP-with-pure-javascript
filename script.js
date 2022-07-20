button1.onclick = function () {

    popupWin = window.open("", 'Window', "width=400,height=300,left=100,top=100");

}

button2.onclick = function () {

    popupWin.document.write("<h1>Hello Friend! You are Here.</h1>")

}

button3.onclick = function () {

    popupWin.location.assign("https://google.com");

}

button4.onclick = function () {

    popupWin.close();

}
