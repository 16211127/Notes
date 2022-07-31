getCSS.onclick = () =>{
    const request = new XMLHttpRequest()
    request.onreadystatechange = () =>{
        //下载完成,但不知道成功还是失败
        
        if(request.readyState === 4)
        if(request.status >=200 && request.status < 300){
            console.log("css加载成功")
            const style = document.createElement('style')
            style.innerHTML = request.response
            document.head.appendChild(style)
        }else{alert("css加载失败")}
    };
    request.open("GET","/style.css"); //readystate = 1
    request.send();//readystate = 2
};