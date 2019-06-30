let item1OnClick = () => {
    alert(1);
}

let item2OnClick = () => {
    alert(2);
}

/*

setTimeout(() => {
    let btn = document.createElement('button');
    
    btn.innerHTML = 'fetch with full remote url';
    //var url = document.getElementById("urltextbox").value;
    
    btn.onclick = function (evt) {
        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/fetch';
        alert(newurl);
        fetch(newurl, {

            //credentials: 'include',
            // method: 'put',
            // mode: 'no-cors'
        }).then(function (response) {
            //alert(response);
            return response.text();
        }).then(function (data) {
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    //document.getElementById('main-page').appendChild("br");
    
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with full remote url cors https';
    btn.onclick = function (evt) {
        fetch('https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', {
            //credentials: 'include',
            // method: 'put',
            // mode: 'no-cors'
        }).then(function (response) {
            alert(response);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with relative remote url-no-cors';
    btn.onclick = function (evt) {
        fetch('//google.com', {mode: 'no-cors'},{
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    //document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with relative remote url-cors';
    btn.onclick = function (evt) {
        fetch('//google.com', {mode: 'cors'},{
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
   // document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with relative remote url-same-origin';
    btn.onclick = function (evt) {
        fetch('../../../relative/a.txt', {mode: 'same-origin'},{
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
   // document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    //document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch and post';
    btn.onclick = function (evt) {
        var url = document.getElementById("urltextbox").value;
        let newurl= url + '/fetch/post';
        alert(newurl);
        fetch(newurl, {
            method: 'POST',
            body: 'HELLO',
            headers: new Headers({'Content-Type': 'text/plain'})
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
   // document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch and put';
    btn.onclick = function (evt) {
        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/fetch/put';
        alert(newurl);
        fetch(newurl, {
            method: 'PUT',
            body: 'HELLO',
            headers: new Headers({'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    //document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch and delete';
    btn.onclick = function (evt) {

        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/fetch/delete';
        alert(newurl);
        fetch(newurl, {
            method: 'DELETE',
            body: 'HELLO',
            headers: new Headers({'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
   // document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
   // document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch and head';
    btn.onclick = function (evt) {
        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/fetch/head';
        alert(newurl);
        fetch(newurl, {
            method: 'HEAD',
            
            headers: new Headers({'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
   // document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch and patch';
    btn.onclick = function (evt) {

        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/fetch/patch';
        alert(newurl);
        fetch(newurl, {
            method: 'PATCH',
            
            headers: new Headers({'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
            //credentials: 'include',
        }).then(function (response) {
            return response.text();
        }).then(function (data){
            alert(data);
        });
    }
   // document.getElementById('main-page').appendChild("br");
    document.getElementById('main-page').appendChild(btn);
    //document.getElementById('main-page').appendChild(createElement("br"));
}, 1000);



setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with relative url';
    btn.onclick = function (evt) {
        fetch('ok', {
            //credentials: 'include',
        }).then(function (response) {
            alert(response);
        });
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'fetch with full local url for loading file';
    btn.onclick = function (evt) {
        fetch('file:///Users/ssarkar/Library/Developer/CoreSimulator/Devices/4A942F76-991E-4A50-89D0-C536A3687192/data/Containers/Bundle/Application/B6847970-90D5-47F9-B7E1-5DB5DBEED924/Minotaur.app/Web/fs.js', {
            //credentials: 'include',
        }).then(function (response) {
            alert(response);
        });
    }
    //document.getElementById('main-page').appendChild("br");
    //document.getElementById('main-page').appendChild(document.createComment("br"));
    document.getElementById('main-page').appendChild(btn);
    
}, 1000);

*/