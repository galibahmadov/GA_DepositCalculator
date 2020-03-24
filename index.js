let amount = document.getElementById("beginbalance");
let addingAmount =document.getElementById("monthlyadding");
let monthlyRate = document.getElementById("rate");
let timePeriod = document.getElementById("periodday");
let btn = document.getElementById("calculate");


let first = document.getElementById("first"),
    second = document.getElementById("second"),
    third = document.getElementById("third"),
    fourth = document.getElementById("fourth");

function checkInput(beginbalance, monthlyadding, rate, periodday) {
    if (beginbalance.value <= 0 || monthlyadding.value <= 0 || rate.value <= 0 || rate.value > 100 || periodday.value <= 0 || Math.trunc(periodday.value) != periodday.value) {
        if (beginbalance.value <= 0) {
            first.className = "show";
            console.log("Начальная сумма вклада содержит ошибку ввода");
        } else {
            first.className = "block";
        }
        if (monthlyadding.value <= 0) {
            second.className = "show";
            console.log("Сумма пополнения содержит ошибку ввода");
        } else {
            second.className = "block";
        }
        if (rate.value <= 0 || rate.value > 100) {
            third.className = "show";
            console.log("Процент содержит ошибку ввода");
        } else {
            third.className = "block";
        }
        if (periodday.value <= 0 || Math.trunc(periodday.value) != periodday.value) {
            fourth.className = "show";
            console.log("Срок содержит ошибку ввода");
        } else {
            fourth.className = "block";
        }
        return NaN;
    } else {
        first.className = "block";
        second.className = "block";
        third.className = "block";
        fourth.className = "block";
    }
    return true;
}

function getvalue(amount, addingAmount, monthlyRate, timePeriod) {
    let beginbalance=+amount.value;
    let monthlyadding=+addingAmount.value
    let rate=+monthlyRate.value;
    let periodday=Math.floor(+timePeriod.value/30);
    let finalamount;
    
    
    if (periodday =1) {
        finalamount = beginbalance + beginbalance * rate / 1200;
    }
    else if (periodday > 1) {
        let finalamount1 = beginbalance * Math.pow((1 + rate / 1200), periodday);
        let addingsum = 0;
        for (let i = 0; i <= periodday; i++) {
            addingsum += monthlyadding * Math.pow((1 + rate / 1200), i);
        }
        finalamount = finalamount1 + addingsum - monthlyadding;
    }
    alert(Math.round(finalamount));
    return (finalamount);
}

function calculate() {
    if (checkInput(amount, addingAmount, monthlyRate, timePeriod)) {
        getvalue(amount, addingAmount, monthlyRate, timePeriod);
    }
}
btn.addEventListener("click", calculate);


