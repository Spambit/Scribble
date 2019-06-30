setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with full remote url-http';
    btn.onclick = function (evt) {
        var url = document.getElementById("urltextbox").value;
        //alert(url);
        let newurl= url + '/xhr';
        alert(newurl);
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                r=this.responseText;
                alert(r);
            }
        };
        xhttp.open("GET", newurl, true);
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with relative remote url-http';
    btn.onclick = function (evt) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                r=this.responseText;
                alert(r);
            }
        };
        xhttp.open("GET", "fs.js", true);
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with remote full url CORS-http';
    btn.onclick = function (evt) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                alert(this.responseText);
            }
        };
        //xhttp.open("GET", "https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies", true);
        xhttp.open("GET", "http://www.espncricinfo.com/series/8039/scorecard/1144505/bangladesh-vs-west-indies-23rd-match-icc-cricket-world-cup-2019", true);
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with full local url for loading file file://';
    btn.onclick = function (evt) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                alert(this.responseText);
            }
        };
        xhttp.open("GET", "file:///Users/ssarkar/Library/Developer/CoreSimulator/Devices/4A942F76-991E-4A50-89D0-C536A3687192/data/Containers/Data/Application/9F9B0230-672F-4DEB-9BD9-45410757D2CA/Documents/test.txt", true);
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with full remote url with file://';
    btn.onclick = function (evt) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                alert(this.responseText);
            }
        };
        xhttp.open("GET", "file://172.26.95.89:9001/a.txt", true); //placeholder url
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);

setTimeout(() => {
    let btn = document.createElement('button');
    btn.innerHTML = 'xhr with full relative url with file://';
    btn.onclick = function (evt) {
        var xhttp = new XMLHttpRequest();
        xhttp.onreadystatechange = function (r) {
            if (this.readyState == 4 && this.status == 200) {
                // Typical action to be performed when the document is ready:
                alert(this.responseText);
            }
        };
        xhttp.open("GET", "file://172.26.95.89:9001/a.txt", true); //placeholder url
        xhttp.send();
    }
    document.getElementById('main-page').appendChild(btn);
}, 1000);