let show = "";
let live = 10;
let answer;
let singleChar;
let requiredLength = 0;
let sucLength;
let counter = 1;
let spanEle = document.querySelectorAll('.letters span');
for (let i = 0; i < spanEle.length; i++) {
    spanEle[i].addEventListener('click', function () {
        show = show + " " + spanEle[i].innerHTML;
        singleChar = spanEle[i].innerHTML;
        // result();
        lives();
        compare();
        spanEle[i].style.display = 'none';
    })
}
// function result() {
//     document.getElementById('vin').innerHTML = show;
// }
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
        if(live == 0) {
            document.getElementById('fail').innerHTML = "Game Over";
            endFunc();
        }
        // drawHang();
    }
    document.getElementById('lives').innerHTML = live;
    if (requiredLength == sucLength) {
        document.getElementById('success').innerHTML = "You Win";
        endFunc();
    }
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
    let mul = categories[index].length;
    indexEle = Math.floor(Math.random() * mul);
    answer = categories[index][indexEle];
    let anslen = answer.length;
    let displayBlank = "";
    for (let i = 0; i < anslen; i++) {
        if (answer[i] == '-') {
            displayBlank = displayBlank + "<span> - </span>";
        } else {
            displayBlank = displayBlank + "<span> _ </span>";
        }
    }
    document.getElementById('show').innerHTML = displayBlank;
    console.log(answer);
    sucLength = answer.length;
    restart();
    document.getElementById('clue').innerHTML = "";
    live = 10;
    document.getElementById('lives').innerHTML = 10;
}

function restart() {
    let harone = document.querySelectorAll('.letters span');
    for (let i = 0; i < spanEle.length; i++) {
        spanEle[i].style.display = '';
    }
    document.getElementById('success').innerHTML = "";
    document.getElementById('fail').innerHTML = "";
}

function hint() {
    let hintValue = hints[index][indexEle];
    document.getElementById('clue').innerHTML = "Clue:- " + hintValue;
}

// vineeth = document.getElementById('myCanvas');

// function drawHang() {
//     if(counter = 1) {
//         hang1();
//     }
// }

// function hang1() {

// }