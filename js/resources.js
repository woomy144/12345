
var resourceCache = {};
var readyCallbacks = [];

// Load an image url or an array of image urls
function load(urlOrArr) {
    if (urlOrArr instanceof Array) {
        urlOrArr.forEach(function (url) {
            get(url);
        });
    } else {
        get(urlOrArr);
    }
}

function get(url) { // _load
    if (resourceCache[url]) {
        return resourceCache[url];
    }
    else {
        var img = new Image();
        //resourceCache[url] = false;
        img.src = url;
        img.onload = function () {
            resourceCache[url] = img;

            if (isReady()) {
                readyCallbacks.forEach(function (func) { func(); });
            }
        };
    }
}

/*
function get(url) {
    //if (!resourceCache[url]) _load(url); // small modification
    return resourceCache[url];
}
*/

function isReady() {
    var ready = true;
    for (var k in resourceCache) {
        if (resourceCache.hasOwnProperty(k) &&
            !resourceCache[k]) {
            ready = false;
        }
    }
    return ready;
}

function onReady(func) {
    readyCallbacks.push(func);
}

const resources = {
    load: load,
    get: get,
    onReady: onReady,
    isReady: isReady
}

export {
    resources
};
