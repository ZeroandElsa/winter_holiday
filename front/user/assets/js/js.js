const collect = document.querySelector('.collect');
const follow = document.querySelector('.follow');
const anwser = document.querySelector('.anwser');
const essay = document.querySelector('.essay');
const question = document.querySelector('.question');
const username = document.querySelector('.username');
const input_name = document.querySelector('.name');
const input_xi = document.querySelector('.xiangxi');
const name = document.querySelector('.aa');
const xi = document.querySelector('.bb');
const editor = document.querySelector('.editor');
const boxObj = document.querySelector('.left');
const ask = document.querySelector('.ask');
const aquestion = document.querySelector('textarea');
const input_serch = document.querySelector('.navigations-fa>input');
const serch = document.querySelector('.serch');
const contioner = document.querySelector('.askcontioner');
const img = document.querySelector('.once');
const quit = document.querySelector('.quit');
const result = document.querySelector('.result')


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
                    var dataArray = eval('(' + json + ')');

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

        var data = 'keyword='+ aquestion.value;
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

follow.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/selectfollow';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');

                    if(document.querySelector('.recommend_div')){
                        document.querySelector('.recommend_div').parentNode.removeChild(document.querySelector('.recommend_div'));
                    }
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.username;
                    divObj.className = recommend_div;
                } else {
                    console.log('关注请求错误');
                }
            }
        }
})


anwser.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/selectanser';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');

                    if(document.querySelector('.recommend_div')){
                        document.querySelector('.recommend_div').parentNode.removeChild(document.querySelector('.recommend_div'));
                    }
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.recommend;
                    divObj.className = recommend_div;
                } else {
                    console.log('回答请求错误');
                }
            }
        }
})


essay.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/selectessay';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    if(document.querySelector('.recommend_div')){
                        document.querySelector('.recommend_div').parentNode.removeChild(document.querySelector('.recommend_div'));
                    }
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.essay;
                    divObj.className = recommend_div;
                } else {
                    console.log('文章请求错误');
                }
            }
        }
})



collect.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/selectcollect';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    if(document.querySelector('.recommend_div')){
                        document.querySelector('.recommend_div').parentNode.removeChild(document.querySelector('.recommend_div'));
                    }
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.essay;
                    divObj.className = recommend_div;
                } else {
                    console.log('收藏请求错误');
                }
            }
        }
})



question.addEventListener('click',()=>{
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/selectquestion';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    if(document.querySelector('.recommend_div')){
                        document.querySelector('.recommend_div').parentNode.removeChild(document.querySelector('.recommend_div'));
                    }
                    var divObj = document.createElement("div")
                    boxObj.appendChild(divObj);
                    divObj.innerHTML = dataArray.essay;
                    divObj.className = recommend_div;
                } else {
                    console.log('收藏请求错误');
                }
            }
        }
})


editor.addEventListener('click',()=>{
    if(document.querySelector('.saver').style.display=="none"){
        document.querySelector('.saver').style.display="block";
        editor.innerHTML='返回'
    }else{
            document.querySelector('.saver').style.display="none";
            editor.innerHTML='编辑个人资料'
            }
})

xi.addEventListener('click',()=>{
    var data = 'instruct='+ input_xi.value;
            const request= new XMLHttpRequest();
            const API = 'http://127.0.0.1:8080/instruct';
            request.open('POST', API+'?'+data , true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            console.log(request);
            request.send(data);
            request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    console.log('个人信息修改请求成功');
                } else {
                    console.log('个人信息修改请求错误');
                }
            }
        }
})

name.addEventListener('click',()=>{
    var data = 'newusername='+ input_xi.value;
            const request= new XMLHttpRequest();
            const API = 'http://127.0.0.1:8080/instruct';
            request.open('POST', API+'?'+data , true);
            request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
            console.log(request);
            request.send(data);
            request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    console.log('昵称修改请求成功');
                    username.innerHTML= input_xi.value;
                } else {
                    console.log('昵称修改请求错误');
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