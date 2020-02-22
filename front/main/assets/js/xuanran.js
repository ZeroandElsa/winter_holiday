const ask = document.querySelector('.ask')
const question = document.querySelector('textarea')
const input_serch = document.querySelector('input')
const serch = document.querySelector('.serch')
const contioner = document.querySelector('.askcontioner')
const targetElement = document.querySelector('navigations-fb')
const boxObj = document.querySelector('.left')
const img = document.querySelector('.once')
const quit = document.querySelector('.quit')
const result = document.querySelector('.result')


var  recommend=(function(){
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/recommend';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.essay;
                    divObj.className = recommend_div;
                } else {
                    console.log('推荐请求错误');
                }
            }
        }
})()

serch.addEventListener('click',()=>{

    console.log(serch);
    console.log(input_serch.value)
    if(input_serch.value==''){
        contioner.style.display = "block";
    }else{
        var data = 'question='+question.value;
        const request= new XMLHttpRequest();
        const API = 'http://127.0.0.1:8080/search';
        request.open('POST', API+'?'+data , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send(data);

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    const json = JSON.parse(request.responseText)
                    if(result.innerHTML)
                    {
                        result.innerHTML=''
                    }
                    result.style.display="block"
                    result.innerHTML(dataArray.essay);
                } else {
                    console.log('搜索请求错误');
                }
            }
        }
    }
})

ask.addEventListener('click',()=>{

        var data = 'keyword='+ question.value;
        const request= new XMLHttpRequest();
        const API = 'http://127.0.0.1:8080/search';
        request.open('POST', API+'?'+data , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send(data);

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    console.log('问题发布请求成功');
                    contioner.style.display = "none";
                } else {
                    console.log('问题发布请求错误');
                }
            }
        }
    
})


img.addEventListener('click',()=>{
    if(document.querySelector('.twice').style.display=="none"){
    document.querySelector('.twice').style.display="block";
}else{
        document.querySelector('.twice').style.display="none";
        }
})

quit.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/quit';
    request.open('POST', API , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send();

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('注销请求成功');
                window.location.href="../load/goland.html";
            } else {
                console.log('注销请求错误');
            }
        }
    }

})


