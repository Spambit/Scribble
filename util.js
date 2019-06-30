module.exports = {
    logHeaders: function (req) {
        for (let key of Object.keys(req.headers)) {
            console.log(`${key}:${req.headers[key]}`);
        }
    },
    delay: function (millisec) {
        if (millisec < 0) return;
        console.log("Server is delaying your request for :" + millisec + "ms");
        let timeNow = Date.now(),
            futureTime = timeNow + millisec;
        while (Date.now() <= futureTime) { }
        console.log("Server woke up after :" + millisec + "ms");
    }
}