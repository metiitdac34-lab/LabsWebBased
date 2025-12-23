//event listner

//what is default status code for redirection of web page => 302
document.querySelector('button').addEventListener(
    "click" , function(){
  let record = document.getElementById('x1').value;
  console.log(record);
  if(record!=""){
    // let url = `https://api.openweathermap.org/data/2.5/weather?q=${record}&appid=ac0b4eccb96a874a2a714d2967fd27f2`;

    // let res = JSON.stringify(url);

    // console.log(res.temp);

    const XHR = new XMLHttpRequest();
    console.log(XHR);
    XHR.onreadystatechange = function(){
        console.log(XHR.readyState, XHR.status);

        if(XHR.readyState==4 && XHR.status==200){
            let result = XHR.responseText;
            console.log(result);
            let value= JSON.parse(result);
            console.log(value);

            console.log(value.main.temp);

            let tempp = value.main.temp - 273.15;
            console.log(tempp);
            document.getElementById('output').innerHTML = "Temp in "+ record + " = " + tempp.toFixed(2);       
        }
    }

    XHR.open("get" ,`https://api.openweathermap.org/data/2.5/weather?q=${record}&appid=ac0b4eccb96a874a2a714d2967fd27f2`)
    XHR.send()
    
        
  }

});