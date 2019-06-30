setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'dynamic img';
    btn.onclick = function (evt) {
        let el = document.createElement('img')
        el.width = 200;
        el.height = 200;
        el.src = 'a.jpg';
        //document.body.appendChild(el);
        document.getElementById('main-page').appendChild(el);
    }
    //document.body.appendChild(btn);
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'dynamic iframe';
    btn.onclick = function (evt) {
        let el = document.createElement('iframe')
        el.width = 200;
        el.height = 200;
        el.src = 'http://localhost:8081/index.html';
        //document.body.appendChild(el);
       document.getElementById('main-page').appendChild(el);
    }
    //document.body.appendChild(btn);
    document.getElementById('main-page').appendChild(btn);
}, 1000);