chrome.storage.sync.get('state', function(data) {
    if (typeof data.state == 'undefined') {
        chrome.storage.sync.set({state: 0});
    }
});

// Switch the stored theme on extension icon click
chrome.action.onClicked.addListener(function(tab) {
    chrome.storage.sync.get('state', function(data) {
        if (typeof data.state != 'undefined') {
            theme_handler(data.state, tab, 1);
        }
    });
});


// Apply the stored theme on page load
chrome.webNavigation.onCompleted.addListener(function(details) {
    chrome.tabs.get(details.tabId, function(tab) {
        chrome.storage.sync.get('state', function(data) {
            if (typeof data.state != 'undefined') {
                theme_handler(data.state, tab, 0);
            }
        });
    });
});

function theme_handler(state, tab, action) {
    if ((state == 1) && (action == 0) || (state == 0) && (action == 1)) {
        chrome.action.setIcon({
            path : {
                "16": "/images/dark_theme16.png",
                "32": "/images/dark_theme32.png",
                "48": "/images/dark_theme48.png",
                "128": "/images/dark_theme128.png"
            }
        });
        chrome.scripting.insertCSS({
            target: { tabId: tab.id },
            files: ["dark_mode.css"]
        });
        if (action == 1) {
            chrome.storage.sync.set({state: 1});
        }
    } else if ((state == 0) && (action == 0) || (state == 1) && (action == 1)) {
        chrome.action.setIcon({
            path : {
                "16": "/images/light_theme16.png",
                "32": "/images/light_theme32.png",
                "48": "/images/light_theme48.png",
                "128": "/images/light_theme128.png"
            }
        });
        chrome.scripting.removeCSS({
            target: { tabId: tab.id },
            files: ["dark_mode.css"]
        });
        if (action == 1) {
            chrome.storage.sync.set({state: 0});
            chrome.scripting.removeCSS({
                target: { tabId: tab.id },
                files: ["dark_mode.css"]
            });
        }
    }
}