const util = {};

util.submitToLocalStorage = function (name) {
  localStorage.setItem(name + 'Value', document.getElementById(name).value);
  localStorage.setItem(name + 'Checked', document.getElementById(name).checked);
  return false;
};
util.retrieveFromLocalStorage = function (name) {
  document.getElementById(name).value = localStorage.getItem(name + 'Value');
  document.getElementById(name).checked = localStorage.getItem(name + 'Checked') === 'true';
  return false;
};
util.handleLargeNumber = function (a) {
  var cullZeroes = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  if (cullZeroes && a == 0) {
    return '';
  }

  if (a < Math.pow(10, 3)) {
    return '' + a.toFixed(0);
  }

  if (a < Math.pow(10, 6)) {
    return (a / Math.pow(10, 3)).toFixed(2) + "k";
  }

  if (a < Math.pow(10, 9)) {
    return (a / Math.pow(10, 6)).toFixed(2) + "m";
  }

  if (a < Math.pow(10, 12)) {
    return (a / Math.pow(10, 9)).toFixed(2) + "b";
  }

  if (a < Math.pow(10, 15)) {
    return (a / Math.pow(10, 12)).toFixed(2) + "t";
  }

  return (a / Math.pow(10, 15)).toFixed(2) + "q";
};
util.timeForHumans = function (x) {
  // ought to be in seconds
  var seconds = x % 60;
  x /= 60; x = Math.floor(x);
  var minutes = x % 60;
  x /= 60; x = Math.floor(x);
  var hours = x % 24;
  x /= 24; x = Math.floor(x);
  var days = x;
  var y = '';
  function weh(z, text) {
    if (z) {
      y = y + (y === '' ? '' : ', ') + z + ' ' + text + (z > 1 ? 's' : '');
    }
  }
  weh(days, 'day');
  weh(hours, 'hour');
  weh(minutes, 'minute');
  weh(seconds, 'second');
  if (y === '') {
    y = 'less than a second';
  }
  return y;
};
util.addArticle = function (string) {
  return (/[aeiouAEIOU]/.test(string[0]) ? 'an ' + string : 'a ' + string
  );
};
util.formatLargeNumber = function (x) {
  return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
util.pullJSON = function (url) {
  // Set up the request
  console.log(`Loading JSON from ${url}`);
  // Return a promise
  return new Promise((resolve, reject) => {
    fetch(url).then(response => {
      if (response.ok) {
        resolve(response.json());
        console.log(`JSON load from ${url} completed.`);
      } else {
        reject(response.status);
        console.log(`JSON load from ${url} failed. Error: ${response.status}`);

      }
    });
  });

  /*
  var request = new XMLHttpRequest();
  var url = "/json/" + filename + ".json?v=" + VERSION;
  // Set up the request
  console.log("Loading JSON from " + url);
  request.responseType = 'json';
  // Return a promise
  return new Promise(function (resolve, reject) {
    request.open('GET', url);
    request.onload = function () {
      resolve(request.response); console.log('JSON load complete.');
    };
    request.onerror = function () {
      reject(request.statusText); console.log('JSON load failed.'); console.log(request.statusText);
    };
    request.send();
  });
  */
};

export {
  util
};
