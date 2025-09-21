


function calcBut(){
    let baseInput = document.getElementById("Base");
    let rateInput = document.getElementById("Rate");
    let contInput = document.getElementById("Contribution");
    let numTradeInput = document.getElementById("NumTrades");
    let answer = baseInput;
    rateInput = (rateInput/100)+1;

    for(let i = 0; i < numTradeInput; ++i){
        answer = (answer*rateInput)+contInput;
    }

    document.getElementById("NumTrades") = 0;
}


function resetBut(){
    document.getElementById("Base").value = '';
    document.getElementById("Rate").value = '';
    document.getElementById("Contribution").value = '';
    document.getElementById("NumTrades").value = '';
}

