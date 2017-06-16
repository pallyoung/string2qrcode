(function(window){
    'use strict'
    function onBrowserActionClick(tab){
        var currentTab  = tab.getCurrent();
    }

    function string2QrCode(str){
        
    }
    chrome.browserAction.onClicked.addListener(onBrowserActionClick);

})(this);