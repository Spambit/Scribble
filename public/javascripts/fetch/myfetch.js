let decorOnClick = (func,e) => {
    $(e.target).parent().find('li').removeClass('active');
    $(e.target).toggleClass('active');
    func(e);
}

let fetchWithFullRemoteUrl = () => {
    let newurl = '/fetch';
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

let fetchWithFullRemoteUrl2 = () => {
    //alert(url);
    let newurl = '/fetch';
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

let fetchWithFullRemoteUrlWithCorsHttps = () => {
    fetch('https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies', {
        //credentials: 'include',
        // method: 'put',
        // mode: 'no-cors'
    }).then(function (response) {
        alert(response);
    });
}

let fetchWithRelativeRemoteUrlNoCors = () => {
    fetch('//google.com', { mode: 'no-cors' }, {
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchWithRelativeRemoteUrlCors = () => {
    fetch('//google.com', { mode: 'cors' }, {
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchWithRelativeUrlSameOrigin = () => {
    fetch('../../../relative/a.txt', { mode: 'same-origin' }, {
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchWithPost = () => {
    let newurl = '/fetch/post';
    alert(newurl);
    fetch(newurl, {
        method: 'POST',
        body: 'HELLO',
        headers: new Headers({ 'Content-Type': 'text/plain' })
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchAndDelete = () => {
    var url = document.getElementById("urltextbox").value;
    //alert(url);
    let newurl = url + '/fetch/delete';
    alert(newurl);
    fetch(newurl, {
        method: 'DELETE',
        body: 'HELLO',
        headers: new Headers({
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchAndPut = () => {
    let newurl = '/fetch/put';
    alert(newurl);
    fetch(newurl, {
        method: 'PUT',
        body: 'HELLO',
        headers: new Headers({
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchAndHead = () => {
    let newurl = '/fetch/head';
    alert(newurl);
    fetch(newurl, {
        method: 'HEAD',

        headers: new Headers({
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchAndPatch = () => {
    //alert(url);
    let newurl = '/fetch/patch';
    alert(newurl);
    fetch(newurl, {
        method: 'PATCH',

        headers: new Headers({
            'Content-Type': 'text/plain',
            'Accept': 'text/plain'
        })
        //credentials: 'include',
    }).then(function (response) {
        return response.text();
    }).then(function (data) {
        alert(data);
    });
}

let fetchWithRelativeUrl = () => {
    fetch('ok', {
        //credentials: 'include',
    }).then(function (response) {
        alert(response);
    });
}