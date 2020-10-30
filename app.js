var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
    if (ev.target.tagName === 'LI') {
        ev.target.classList.toggle('checked');
    }
}, false);

function play() {
    var input = document.getElementById("input");
    var inputValue = input.value;
    var array = inputValue.split(" ");
    var time = array[0];
    var inputBreak = document.getElementById("input-Break");
    var inputValueBreak = inputBreak.value;
    var arrayBreaks = inputValueBreak.split(" ");
    var timeForBreak = arrayBreaks[0];
    if (inputValue.length > 0 && inputValueBreak.length > 0) {
        window.alert("Let's be productive")
        var hourglass = document.getElementById("hourglass");
        hourglass.play();
        hourglass.setAttribute("loop", "true");

        setTimeout(function() {
            hourglass.pause();
            hourglass.currentTime = 0;
            window.alert("It's time for a break");
            setTimeout(function() {
                window.alert("Pauza s a terminat")
            }, 60000 * parseInt(timeForBreak));

        }, 60000 * parseInt(time));

        input.value = "";
        inputBreak.value = "";
    } else {
        window.alert("Va rugam introduceti timpul si pauza")
    }

}

var buttonPlay = document.getElementById("start");

function breakEnd() {
    window.alert("The break ends");

}

function stop() {
    var input = document.getElementById("input");
    var inputValue = input.value;
    var array = inputValue.split(" ");
    var time = array[0];
    var inputBreak = document.getElementById("input-Break");
    var inputValueBreak = inputBreak.value;
    var arrayBreaks = inputValueBreak.split(" ");
    var timeForBreak = arrayBreaks[0];
    var hourglass = document.getElementById("hourglass");
    hourglass.pause();
    hourglass.currentTime = 0;
}

// function addItemInList() {


// }

function addItem() {

    var inputItem = document.getElementById("input-item-list");
    var inputItemValue = inputItem.value;
    if (inputItemValue === "") {
        alert("Trebuie sa va introduceti obiectivul")
    } else {
        var todoList = document.getElementById("todo-list");
        var liItem = document.createElement("li");
        var childNodeText = document.createTextNode(inputItemValue);
        liItem.appendChild(childNodeText);
        todoList.appendChild(liItem);
    }

}