(function () {

    var dateFormat = "MM/dd/yyyy HH:mm";

    function updateTime() {
        var _times = document.querySelectorAll("time:not(._no_relative_time_)");
        if (_times && _times.length > 0)
            _times.forEach(function (t, x) {
                if (t) {
                    console.log('T: ' + t);
                    if (t.title) {
                        t.innerHTML = Date.parse(t.title).toString(dateFormat);
                        console.log('title update');
                    }
                    else if (t.hasAttribute('datetime')) {
                        t.innerHTML = Date.parse(t.getAttribute('datetime')).toString(dateFormat);
                        console.log('datetime update: ' + t);
                    }
                    t.className += " _no_relative_time_";
                }
            });
    }

    var _interval;

    function engage() {
        clearInterval(_interval);
        _interval = setInterval(updateTime, 1000);
    }

    chrome.storage.sync.get('dateformat', function (data) {
        if (data && data.dateformat)
            dateFormat = data.dateformat;
    });

    chrome.storage.sync.get('urls', function (data) {
        var urls = data.urls;

        if (urls && urls.trim() !== "") {
            urls.split(",").forEach(function (url) {
                if (window.location.href.match(url)) {
                    engage();
                }
            });
        }
    });


})();