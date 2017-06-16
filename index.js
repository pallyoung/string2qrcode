(function (window) {
    'use strict'
    var qr = document.getElementById('qr');
    var text = document.getElementById('text');
    var qrcode = new QRCode(qr, {
        height: 200,
        width: 200
    });
    chrome.tabs.getSelected(function (tab) {
        var url = '';
        try {
            url = tab.url
        } catch (e) {
        }
        text.value = url;
        string2QrCode(url);
    })
    document.getElementById('generate').addEventListener('click',function(){
       string2QrCode(text.value) 
    },false);
    function string2QrCode(str) {
        qrcode.makeCode(str);
    }

})(this);