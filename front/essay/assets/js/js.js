const button = document.querySelector('.btn')

button.addEventListener('click',()=>{

    const data = 'essay='+document.querySelector('textarea').value;
    const request= new XMLHttpRequest();
    const API = 'http://127.0.0.1:8080/wrtessay';
        request.open('POST', API+'?'+ data, true);
        request.setRequestHeader("Content-type","application/x-www-form-urlencoded");
        console.log(request);
        request.send();
        request.onreadystatechange = function () {
            if (request.readyState === 4) {
                if (request.status >= 200 && request.status <= 400) {
                    console.log('文章发布成功');
                } else {
                    console.log('文章发布失败');
                }
            }
        }

})