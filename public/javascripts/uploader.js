(function () {
    window.App.uploader = {};
    window.App.uploader.selectFile = function selectedFile() {
        var fileSelector = document.getElementById("myfile");
        var files = fileSelector.files;
        for (let file of files) {
            if (file) {
                var fileSize = 0;
                if (file.size > 1048576)
                    fileSize = (Math.round(file.size * 100 / 1048576) / 100).toString() + ' MB';
                else
                    fileSize = (Math.round(file.size * 100 / 1024) / 100).toString() + ' Kb';
                var divfile = document.createElement('li');
                $('.file-selector-options li:first').after($(divfile));
                let $div = $(`<div>Size : ${fileSize} type : ${file.type} </div>`)
                $div.appendTo(divfile);
            }
        }
    }

    window.App.uploader.uploadRaw = function uploadFileRaw() {
        var url = "/raw-upload";
        var fileSelector = document.getElementById("myfile");
        var files = fileSelector.files;
        if (files.length === 0 ) {
            return;
        }

        var fd = new FormData();
        for ( let index in files ) {
            fd.append(`file-${index}`, files[index]);
        }
        
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.upload.addEventListener("loadstart", loadStartFunction, false);
        xmlHTTP.upload.addEventListener("progress", progressFunction, false);
        xmlHTTP.addEventListener("load", transferCompleteFunction, false);
        xmlHTTP.addEventListener("error", uploadFailed, false);
        xmlHTTP.addEventListener("abort", uploadCanceled, false);
        xmlHTTP.open("POST", url, true);
        xmlHTTP.send(fd);
    }

    window.App.uploader.upload = function uploadFile() {
        var url = "/upload";
        var fileSelector = document.getElementById("myfile");
        var files = fileSelector.files;
        if (files.length === 0 ) {
            return;
        }

        var fd = new FormData();
        for ( let index in files ) {
            fd.append(`file-${index}`, files[index]);
        }
        
        var xmlHTTP = new XMLHttpRequest();
        xmlHTTP.upload.addEventListener("loadstart", loadStartFunction, false);
        xmlHTTP.upload.addEventListener("progress", progressFunction, false);
        xmlHTTP.addEventListener("load", transferCompleteFunction, false);
        xmlHTTP.addEventListener("error", uploadFailed, false);
        xmlHTTP.addEventListener("abort", uploadCanceled, false);
        xmlHTTP.open("POST", url, true);
        xmlHTTP.send(fd);
    }

    function progressFunction(evt) {
        var progressBar = document.getElementById("progressBar");
        var percentageDiv = document.getElementById("percentageCalc");
        if (evt.lengthComputable) {
            progressBar.max = evt.total;
            progressBar.value = evt.loaded;
            percentageDiv.innerHTML = (evt.loaded / evt.total * 100) + "%";
        }
    }

    function loadStartFunction(evt) {
        alert('load start');
    }

    function transferCompleteFunction(evt) {
        alert('Transfer complete');
        var progressBar = document.getElementById("progressBar");
        var percentageDiv = document.getElementById("percentageCalc");
        progressBar.value = 100;
        percentageDiv.innerHTML = "100%";
    }

    function uploadFailed(evt) {
        alert("Upload failed");
    }

    function uploadCanceled(evt) {
        alert("Upload cancelled");
    }
})();