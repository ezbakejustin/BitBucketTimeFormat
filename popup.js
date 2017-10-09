$("#savebutton")[0].addEventListener("click", function () {
    var urls = $("#urls").val();
    var dateformat = $("#dateformat").val();

    chrome.storage.sync.set({'urls': urls}, function () {
        chrome.storage.sync.set({'dateformat': dateformat}, function () {
            window.close();
        });
    });
});

function load() {

    getUrlData(function (urls) {
        if (urls)
            $('#urls').val(urls);
    });

    getDateFormat(function (dateformat) {
        if (dateformat)
            $('#dateformat').val(dateformat);
    });

}

function getUrlData(callback) {
    chrome.storage.sync.get('urls', function (data) {
        if (callback)
            callback(data.urls);
    });
}

function getDateFormat(callback) {
    chrome.storage.sync.get('dateformat', function (data) {
        if (callback)
            callback(data.dateformat);
    })
}

$(document).ready(function () {
    load();
});