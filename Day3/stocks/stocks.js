
function calculate() {
    let buy = parseFloat(document.getElementById("buy").value);
    let sell = parseFloat(document.getElementById("sell").value);
    let qty = parseInt(document.getElementById("qty").value);

    if (isNaN(buy) || isNaN(sell) || isNaN(qty)) {
        document.getElementById("result").innerHTML = 
            "<span style='color:red;'>Please fill all fields</span>";
        return;
    }

    let profit = (sell - buy) * qty;
    let percent = ((sell - buy) / buy) * 100;

    document.getElementById("result").innerHTML = 
        `Profit/Loss: <span style="color:${profit >= 0 ? 'green' : 'red'};">₹${profit.toFixed(2)}</span><br>
         Percentage: <span style="color:${percent >= 0 ? 'green' : 'red'};">${percent.toFixed(2)}%</span>`;
}