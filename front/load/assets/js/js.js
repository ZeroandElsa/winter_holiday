  const input_acc = document.querySelector('.username');
  const input_pas = document.querySelector('.password');
  const btn1 = document.querySelector('.registe');
  const btn2 = document.querySelector('.login');

  //var data = 'username=' + input_acc.value + '&password=' + input_pas.value;
  //const API = 'http://183.228.12.171:8080/registe';
 btn1.addEventListener('click', () => {
    
    var data = 'username=' + input_acc.value + '&password=' + input_pas.value;


    const request = new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/registe';

    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);

    console.log(data);
    request.send(data);
    

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 400) {
                const json = JSON.parse(request.responseText)
                console.log(json);
            } else {
                console.log('注册请求错误');
            }
        }
    }
    
})

btn2.addEventListener('click', () => {

    var data = 'username=' + input_acc.value + '&password=' + input_pas.value;
    console.log(data);
    const request = new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/login';
    request.open('POST', API+'?'+data , true);
    
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);
    
    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('登录请求成功');
                window.location.href="../main/main.html";
            } else {
                console.log('登录请求错误');
            }
        }
    }
})


