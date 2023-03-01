let show = "";
let live = 10;
let answer;
let singleChar;
let requiredLength;
let sucLength;
let counter;
let touchedKeys;
let spanEle = document.querySelectorAll('.letters span');
for (let i = 0; i < spanEle.length; i++) {
    spanEle[i].addEventListener('click', vinFunc)
    function vinFunc() {
        if (!touchedKeys.includes(i)) {
            show = show + " " + spanEle[i].innerHTML;
            singleChar = spanEle[i].innerHTML;
            lives();
            let returnVal = compare();
            touchedKeys.push(i);
            if (returnVal) {
                spanEle[i].style.backgroundColor = "green";
            } else {
                spanEle[i].style.backgroundColor = "red";
            }
        }
    }
}
function compare() {
    let cutLife = true;
    for (let i = 0; i < answer.length; i++) {
        if (answer[i] == singleChar) {
            cutLife = false;
            requiredLength++;
            let spanCount = document.getElementById('show');
            spanCount.querySelectorAll('span')[i].innerHTML = singleChar;
        }
    }
    if (cutLife) {
        live--;
        if (live == 0) {
            document.getElementById('fail').innerHTML = "Game Over";
            endFunc();
        }
        counter++;
        drawHang();
    }
    document.getElementById('lives').innerHTML = live;
    if (requiredLength == sucLength) {
        document.getElementById('success').innerHTML = "You Win";
        endFunc();
    }
    return !cutLife;
}

function endFunc() {
    let harone = document.querySelectorAll('.letters span');
    for (let i = 0; i < spanEle.length; i++) {
        spanEle[i].style.display = 'none';
    }
}

function lives() {
    document.getElementById('lives').innerHTML = live;
}

categories = [
    ["everton", "liverpool", "swansea", "chelsea", "hull", "manchester-city", "newcastle-united"],
    ["alien", "dirty-harry", "gladiator", "finding-nemo", "jaws"],
    ["manchester", "milan", "madrid", "amsterdam", "prague"]
];

hints = [
    ["Based in Mersyside", "Based in Mersyside", "First Welsh team to reach the Premier Leauge", "Owned by A russian Billionaire", "Once managed by Phil Brown", "2013 FA Cup runners up", "Gazza's first club"],
    ["Science-Fiction horror film", "1971 American action film", "Historical drama", "Anamated Fish", "Giant great white shark"],
    ["Northern city in the UK", "Home of AC and Inter", "Spanish capital", "Netherlands capital", "Czech Republic capital"]
];

let index, indexEle;

function play() {
    index = Math.floor(Math.random() * 3);
    requiredLength = 0;
    let mul = categories[index].length;
    indexEle = Math.floor(Math.random() * mul);
    answer = categories[index][indexEle];
    let anslen = answer.length;
    let displayBlank = "";
    for (let i = 0; i < anslen; i++) {
        if (answer[i] == '-') {
            displayBlank = displayBlank + "<span> - </span>";
            requiredLength++;
        } else {
            displayBlank = displayBlank + "<span> _ </span>";
        }
    }
    document.getElementById('show').innerHTML = displayBlank;
    console.log(answer);
    sucLength = answer.length;
    touchedKeys = [];
    restart();
    document.getElementById('clue').innerHTML = "";
    live = 10;
    document.getElementById('lives').innerHTML = 10;
    counter = 0;
    resetCanvas();
}



function restart() {
    let harone = document.querySelectorAll('.letters span');
    for (let i = 0; i < spanEle.length; i++) {
        spanEle[i].style.display = '';
        spanEle[i].style.backgroundColor = "";
    }
    document.getElementById('success').innerHTML = "";
    document.getElementById('fail').innerHTML = "";
}

function hint() {
    let hintValue = hints[index][indexEle];
    document.getElementById('clue').innerHTML = "Clue:- " + hintValue;
}

let vineeth = document.getElementById('myCanvas');

function drawHang() {
    if (counter == 1) {
        hang1();
    }
    if (counter == 2) {
        hang2();
    }
    if (counter == 3) {
        hang3();
    }
    if (counter == 4) {
        hang4();
    }
    if (counter == 5) {
        hang5();
    }
    if (counter == 6) {
        hang6();
    }
    if (counter == 7) {
        hang7();
    }
    if (counter == 8) {
        hang8();
    }
    if (counter == 9) {
        hang9();
    }
    if (counter == 10) {
        hang10();
    }
}

function hang1() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(20, 130);
    ctx.lineTo(160, 130);
    ctx.stroke();
}
function hang2() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(25, 23);
    ctx.lineTo(25, 130);
    ctx.stroke();
}
function hang3() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(20, 32);
    ctx.lineTo(80, 32);
    ctx.stroke();
}
function hang4() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 32);
    ctx.lineTo(75, 45);
    ctx.stroke();
}
function hang5() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.arc(75, 55, 10, 0, 2 * Math.PI);
    ctx.stroke();
}
function hang6() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 65);
    ctx.lineTo(75, 90);
    ctx.stroke();
}
function hang7() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(60, 85);
    ctx.stroke();
}
function hang8() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 75);
    ctx.lineTo(90, 85);
    ctx.stroke();
}
function hang9() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 90);
    ctx.lineTo(55, 105);
    ctx.stroke();
}
function hang10() {
    let ctx = vineeth.getContext('2d');
    ctx.beginPath();
    ctx.moveTo(75, 90);
    ctx.lineTo(95, 105);
    ctx.stroke();
}

function resetCanvas() {
    let ctx = vineeth.getContext('2d');
    ctx.clearRect(0, 0, vineeth.width, vineeth.height);
}
