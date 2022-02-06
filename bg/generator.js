document.getElementById('bgran').style.backgroundImage = "<img src='./pentagon.png' style='top:%; left:%; position:absolute'>".replace(/%/g, function() { return Math.random() * 1000 | 0 } );
