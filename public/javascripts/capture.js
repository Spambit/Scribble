setTimeout(()=>{
    $('#capture-btn').click(function () {
        window.App.camera.capture('camera', function () {
            console.log('capture success');
        }, function (err) {
            console.log('capture error: ' + err.description);
        });
    });

    $('#useragent-btn').click(function () {
        alert(window.navigator.userAgent);
    });
},1000);