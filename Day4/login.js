document.querySelector('button').addEventListener('click',async function(){
    let data1 = document.getElementById('x1').value;
    let data2 = document.getElementById('x2').value;
    console.log(data1, data2);
    
    let regexpEmail = /^([A-Za-z0-9_.-]+)@([A-Za-z0-9-]+)\.([A-Za-z]{2,})$/

    let regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{6,}$/;

    if(!regexpEmail.test(data1) || !regexPassword.test(data2)){
        document.getElementById('result').innerText = "Invalid Email or Password";


    } else{
        try {
           let apival = await fetch('https://fakestoreapi.com/users');
           let res = await apival.json();
           console.log(res);
           document.getElementById('result').innerText = res.filter(value=>value.email==data1 && value.password==data2).length==0 ? "INVALID CREDENTIALS" : "VALID CREDENTIALS";


        } catch (error) {
            
        }
    }
  })