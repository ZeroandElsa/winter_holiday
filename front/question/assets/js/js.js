const quit = document.querySelector('.quit');
const img = document.querySelector('.once');
const aquestion = document.querySelector('textarea');
const input_serch = document.querySelector('.navigations-fa>input');
const ask = document.querySelector('.ask');
const serch = document.querySelector('.serch');
const contioner = document.querySelector('.askcontioner');
const result = document.querySelector('.result')

const question = document.querySelector('.question')
const anser =document.querySelector('.anser')
const collect = document.querySelector('.collect')
const answer = document.querySelector('.answer')
const agree = document.querySelector('.agree')
const disagree = document.querySelector('.disagree')
const comment_open = document.querySelector('.comment_open')
const theone = document.querySelector('.theone')
const attention = document.querySelector('.attention')
var pid
var id




attention.addEventListener('click',()=>{
    if(agree.innerHTML=='关注'){
    var data = 'username='+theone.value
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('关注成功')
                agree.innerHTML='已关注'
            } else {
                console.log('关注请求错误');
            }
        }
}
    }else{
        var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('取消关注成功')
                agree.innerHTML='关注'
            } else {
                console.log('关注请求错误');
            }
        }
    }
}
})


var qus= (function(){
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/showquestion';
        request.open('POST', API , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    question.innerHTML = dataArray.question;
                    pid = dataArray.id;
                    }
                } else {
                    console.log('问题请求错误');
                }
            }
})()



var  ans=(function(){
        var data = 'anser'+anser.value+'&pid='+pid.value;
        const request= new XMLHttpRequest();
        const API = 'http://127.0.0.1:8080/showanser';
        request.open('POST', API+'?'+data , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send(data);

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    const json = JSON.parse(request.responseText)
                    var dataArray = eval('(' + json + ')');
                    anser.innerHTML = dataArray.anser;
                    theone.innerHTML = dataArray.username;
                    id = dataArray.id
                } else {
                    console.log('搜索请求错误');
                }
            }
        }
})()


comment_open.addEventListener('click',()=>{

    var newobj = document.createElement('div')
    var top = document.querySelector('.right:first-child')
    top.parentNode.insertBefore(newobj,top)
    var input = document.createElement('input')
    newobj.appendChild(input)
    var button = document.createElement('button')
    newobj.appendChild(button)
    top.className ='ww'

    document.querySelector('.ww').addEventListener('click',()=>{
        var data = 'anser='+input.value+'&pid='+ pid
        const request= new XMLHttpRequest();
        const API = 'http://127.0.0.1:8080/anser';
        request.open('POST', API+'?'+data , true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send(data);

        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 1000) {
                    console.log('回答成功')
                } else {
                    console.log('回答请求错误');
                }
            }
        }
    })
})

agree.addEventListener('click',()=>{
    if(agree.innerHTML=='赞同'){
    var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('点赞成功')
                agree.innerHTML='已赞同'
            } else {
                console.log('点赞请求错误');
            }
        }
}
    }else{
        var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('取消点赞成功')
                agree.innerHTML='赞同'
            } else {
                console.log('点赞请求错误');
            }
        }
    }
}
})


disagree.addEventListener('click',()=>{
    if(agree.innerHTML=='踩'){
    var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/disagree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('踩成功')
                agree.innerHTML='已踩'
            } else {
                console.log('点赞请求错误');
            }
        }
}
    }else{
        var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('取消踩成功')
                agree.innerHTML='踩'
            } else {
                console.log('点赞请求错误');
            }
        }
    }
}
})

collect.addEventListener('click',()=>{
    if(agree.innerHTML=='收藏'){
    var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/collect';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('收藏成功')
                agree.innerHTML='已收藏'
            } else {
                console.log('收藏请求错误');
            }
        }
}
    }else{
        var data = 'id='+id
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/agree';
    request.open('POST', API+'?'+data , true);
    request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
    console.log(request);
    request.send(data);

    request.onreadystatechange = function () {
        if (request.readyState === 4) {
            if (request.status >= 200 && request.status <= 1000) {
                console.log('取消点赞成功')
                agree.innerHTML='赞同'
            } else {
                console.log('点赞请求错误');
            }
        }
    }
}
})


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