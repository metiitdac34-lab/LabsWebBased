//alert box has 1 button
//confirm box has 2 buttons
//prompt box has 2 buttons
function calculate(){
    // alert(111);  //for deleting
    // confirm('delete??');  //for confirming
    // let val = prompt('enter name')  for getting value from user
   
    let amount = document.getElementById('x1').value;
    let roi = document.getElementById('x2').value;
    let duration = document.getElementById('x3').value;

    amount = parseFloat(amount);
    roi = Number(roi);
    duration = parseInt(duration);

    let p = amount;
    let r = roi/12/100;
    let n = duration*12;

    let emi = p*r*(1+r)**n/((1+r)**n-1)
`    emi = Math.round(emi)
`
    console.log(amount, roi,duration);
    console.log(isNaN(amount));
    
    
    if(amount ==""|| isNaN(amount)||amount <=0){
        document.querySelector('p').innerHTML="Invalid amount";
        
        document.querySelector('p').style.color='red';
    }

    if(roi ==""|| isNaN(roi)||roi <=0){
        document.querySelector('p').innerHTML="Invalid roi";
        
        document.querySelector('p').style.color='red';
    }

    if(duration ==""|| isNaN(duration)||duration <=0){
        document.querySelector('p').innerHTML="Invalid duration";
        
        document.querySelector('p').style.color='red';
    }


    document.getElementsByTagName('span')[0].innerHTML = "EMI: " + emi;
    
    document.getElementsByTagName('span')[1].innerHTML = "Total paid: "+emi * n;

    
    document.getElementsByTagName('span')[2].innerHTML = "Interest paid: "+ ((emi * n)-p);
 
    
    document.getElementsByTagName('span')[3].innerHTML = "Principle amount: "+p;



  
}