/*global require, console*/
/*jshint -W097*/
/*jshint browser: true*/


// My anti-hack system (like in arraz-io.glitch.me)
// No Hacks, lol
document.addEventListener('keydown', function () {
    if (event.keyCode == 123) {
        window.location.href = "http://arras.io/";
        // Simulate an HTTP redirect:
        window.location.replace("https://arras.io/");
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    } else if (event.ctrlKey && event.shiftKey && event.keyCode == 73) {
        window.location.href = "http://arras-7.glitch.me";
        // Simulate an HTTP redirect:
        window.location.replace("https://arras.io/");
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    } else if (event.ctrlKey && event.keyCode == 85) {
        window.location.href = "http://arras-7.glitch.me";
        // Simulate an HTTP redirect:
        window.location.replace("https://arras.io/");
        alert("This function has been disabled to prevent you from stealing my code!");
        return false;
    }
}, true);

if (document.addEventListener) {
    document.addEventListener('contextmenu', function (e) {

        e.preventDefault();
    }, false);
} else {
    document.attachEvent('oncontextmenu', function () {
        window.location.href = "http://arras.io/";
        // Simulate an HTTP redirect:
        window.location.replace("https://arras.io/");
        alert("This function has been disabled to prevent you from stealing my code!");
        window.event.returnValue = false;
    });
}
// ==============================================================================
// Spaceball Shooter.
// ==============================================================================
resources.load([
    'img/space_ball.png',
]);

let spaceBallSpriteInfo = {
    url: 'img/space_ball.png',
    width: 93,
    height: 100,
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
};
// ==============================================================================
// ==============================================================================
// Blue cannon.
// ==============================================================================
resources.load([
    'img/bluecannon.png',
]);

let blueCanonSpriteInfo = {
    url: 'img/bluecannon.png',
    width: 93,
    height: 100,
    frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17]
};
// ==============================================================================
function irandom(i) {
    let max = Math.floor(i);
    return Math.floor(Math.random() * (max + 1)); //Inclusive
}
function chooseCOLOR(arr) {
    return arr[irandom(arr.length - 1)];
}
const logger = {
    norm: function (text) {
        console.log(text);
    },
    info: function (text) {
        console.log('[INFO] ' + text);
    },
    warn: function (text) {
        console.log('[WARN] ' + text);
    },
    error: function (text) {
        console.log('[ERROR] ' + text);
    }
};

const reduce = Function.bind.call(Function.call, Array.prototype.reduce);
const isEnumerable = Function.bind.call(Function.call, Object.prototype.propertyIsEnumerable);
const concat = Function.bind.call(Function.call, Array.prototype.concat);
const keys = Reflect.ownKeys;

if (!Object.values) {
    Object.values = function values(O) {
        return reduce(keys(O), (v, k) => concat(v, typeof k === 'string' && isEnumerable(O, k) ? [O[k]] : []), [])
    }
}

let arrazProfile = new Image();
arrazProfile.src =
    "https://cdn.glitch.com/19a9b9a7-a78e-4566-912d-77e7fce134d1%2FArrax.io%20Profile.png?v=1570534562831";
let nokia = new Image();
nokia.src =
    "https://cdn.glitch.com/d6255867-1ca7-45a8-a230-83cd3dc7ee27%2FIED.png?v=1568918282663";
let spinnerImg = new Image();
spinnerImg.src = "https://myrealdomain.com/images/fidget-spinners-gif-7.gif";
let shockWaveImg = new Image();
shockWaveImg.src = "https://i.stack.imgur.com/S6R9e.png";
let cursedImage1 = new Image();
cursedImage1.src =
    "https://i.pinimg.com/originals/db/31/9e/db319ec39362aefb6c17f4d96348a333.gif";
let explosionImg1 = new Image();
explosionImg1.src =
    "https://www.stickpng.com/assets/images/580b585b2edbce24c47b264d.png";
let soccerBall = new Image();
soccerBall.src =
    "https://images.emojiterra.com/google/android-10/512px/26bd.png";
let blueOrb = new Image();
blueOrb.src = "https://www.freeiconspng.com/uploads/glowing-blue-orb-png-5.png";
let magicBall = new Image();
magicBall.src = "https://i.ya-webdesign.com/images/transparent-orb-magic-1.gif";
let snowFlake = new Image();
snowFlake.src =
    "http://www.pngmart.com/files/4/Frozen-Snowflake-Transparent-PNG.png";
let arceus = new Image();
arceus.src =
    "http://static.pokemonpets.com/images/monsters-images-800-800/2493-Shiny-Arceus.png";
let rayquazaMega = new Image();
rayquazaMega.src =
    "https://66.media.tumblr.com/2b002bfb6c7c4395bc0666136d4aa80b/tumblr_pdewp7cL8k1scncwdo2_500.png";
let rayquaza = new Image();
rayquaza.src =
    "https://cdn.glitch.com/c0b3d9a4-1581-4279-9e66-64a00e320d2c%2FRayquaza.png?v=1575503146818";
let arrazBanner = new Image();
arrazBanner.src =
    "https://cdn.glitch.com/c0b3d9a4-1581-4279-9e66-64a00e320d2c%2FUntitled%20drawing%20(1).jpg?v=1578089432072";
let sproot = new Image()
sproot.src = 'https://cdn.glitch.com/d6255867-1ca7-45a8-a230-83cd3dc7ee27%2FIED.png?v=1568918282663'
let bl = new Image()
bl.src = 'https://cdn.glitch.com/d6255867-1ca7-45a8-a230-83cd3dc7ee27%2FBliss.jpg?v=1588170105287'
let bl2 = new Image()
bl2.src = 'https://cdn.glitch.com/d6255867-1ca7-45a8-a230-83cd3dc7ee27%2FBlissVertical2.jpg?v=1588353753692'
let rmd = new Image()
rmd.src = 'https://cdn.glitch.com/d6255867-1ca7-45a8-a230-83cd3dc7ee27%2FDesertMoon.jpg?v=1589064139342'
// let spaceBallSpriteInfo = {url:"https://cdn.glitch.com/19a9b9a7-a78e-4566-912d-77e7fce134d1%2Fspace_ball.png?v=1570653986651",width: 93,height: 100,frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], rotation: 180};
var phantom_bullet_v2 = { url: 'http://arras.cc:3000/img/phantom_bullet_v2-752fb9174a.png', width: 120, height: 111, offsetX: 0, offsetY: 0, frames: [0, 1, 2, 3, 4, 5, 6, 7], rotation: 180 }
var blueOrbSpriteInfo = { url: 'http://arras.cc/img/blue_canon_v3-6d43c4435e.png', width: 120, height: 111, offsetX: 0, offsetY: 0, frames: [0, 1, 2, 3, 4, 5, 6, 7], rotation: 180 };
var cometSpriteInfo = { url: 'http://arras.cc/img/comet-74606ad24c.png', width: 40, height: 159, offsetX: 0, offsetY: 0, frames: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21], rotation: 90 };
// Fundamental requires <3
import { Canvas } from "./canvas.js";
import { protocol } from "./lib/fasttalk.js";
import { util } from "./lib/util.js";
import { global } from "./lib/global.js";

function Sprite(url, pos, sourceSize, destSize, speed, frames, dir, once, size) {
    this.pos = pos;
    this.sourceSize = sourceSize;
    this.speed = typeof speed === 'number' ? speed : 0;
    this.frames = frames;
    this._index = 0;
    this.url = url;
    this.dir = dir || 'horizontal';
    this.once = once;
    this.scaleSize - size;
    this.alpha = 1;
    this.rotation = 0;
    this.destX = 0;
    this.destY = 0;
    this.destXOffset = 0;
    this.destYOffset = 0;
    this.destWidth = destSize[0];
    this.destHeight = destSize[1];
};
Sprite.prototype = {
    update: function (dt, destX, destY, destXOffset, destYOffset, rotation, alpha) {
        this._index += this.speed * dt;
        this.destX = destX;
        this.destY = destY;
        this.destXOffset = destXOffset;
        this.destYOffset = destYOffset;
        this.rotation = rotation;
        this.alpha = alpha;
    },
    render: function (ctx) {
        let img = new Image()
        img.src = this.url
        var frame;
        if (this.speed > 0) {
            var max = this.frames.length;
            var idx = Math.floor(this._index);
            frame = this.frames[idx % max];
            if (this.once && idx >= max) {
                this.done = true;
                return;
            }
        } else {
            frame = 0;
        }
        var x = this.pos[0];
        var y = this.pos[1];
        if (this.dir == 'vertical') {
            y += frame * this.sourceSize[1];
        } else {
            x += frame * this.sourceSize[0];
        }
        ctx.save();
        ctx.globalAlpha = this.alpha;
        ctx.translate(this.destX, this.destY);
        // http://creativejs.com/2012/01/day-10-drawing-rotated-images-into-canvas/index.html
        ctx.rotate(this.rotation);
        try {
            ctx.drawImage(img,
                x, y,
                this.sourceSize[0],
                this.sourceSize[1],
                -(this.destWidth / 2) + this.destXOffset,
                -(this.destHeight / 2) + this.destYOffset,
                this.destWidth,
                this.destHeight);
        } catch (error) {
            console.error(error);
        }
        ctx.restore();
    }
};

function randomRgbaString(alpha) {
    let r = Math.floor(Math.random() * 255)
    let g = Math.floor(Math.random() * 255)
    let b = Math.floor(Math.random() * 255)
    let a = alpha
    return `rgba(${r},${g},${b},${a})`
}
var HSL2COLOR = (function () {
    return function (hsl, bg) {
        function checkHex(v) {
            return 1 === v.length ? "0" + v : v;
        }
        var data,
            r,
            g,
            b,
            a,
            cnv = document.createElement("canvas"),
            ctx = cnv.getContext("2d"),
            alpha = /a\(/.test(hsl),
            output = {};

        return (
            (cnv.width = cnv.height = 1),
            bg && ((ctx.fillStyle = bg), ctx.fillRect(0, 0, 1, 1)),
            (ctx.fillStyle = hsl),
            ctx.fillRect(0, 0, 1, 1),
            (data = ctx.getImageData(0, 0, 1, 1).data),
            (r = data[0]),
            (g = data[1]),
            (b = data[2]),
            (a = data[3]),
            (output =
                "#" +
                checkHex(r.toString(16)) +
                checkHex(g.toString(16)) +
                checkHex(b.toString(16)) +
                checkHex(a.toString(16))),
            output
        );
    };
})();

window.dataLayer = window.dataLayer || [];
function gtag() { window.dataLayer.push(arguments); }
gtag('js', new Date());

/*let serverIP = [];
let serverPort = [];
  let socket = new WebSocket('http://' + serverIP + '.' + serverPort);
      window.WebSocket = window.WebSocket || window.MozWebSocket;


   serverIP = 'arraz',
    serverPort = 'io',
    //still get it to have current link
    */

gtag('config', 'UA-120544149-1');

let adblock = false
let adblockInterval = null

// Get color
var config = {
    graphical: {
        screenshotMode: false,
        borderChunk: 6,
        barChunk: 5,
        mininumBorderChunk: 3,
        darkBorders: false,
        fancyAnimations: true,
        colors: 'public',
        pointy: true,
        fontSizeBoost: 1,
        shieldbars: false,
        neon: false,
    },
    gui: {
        expectedMaxSkillLevel: 9,
    },
    lag: {
        memory: 60,
    },
};

// Color functions
let mixColors = (() => {
    /** https://gist.github.com/jedfoster/7939513 **/
    function d2h(d) { return d.toString(16); }  // convert a decimal value to hex
    function h2d(h) { return parseInt(h, 16); } // convert a hex value to decimal
    return (color_2, color_1, weight = 0.5) => {
        if (weight === 1) return color_1;
        if (weight === 0) return color_2;
        var col = "#";
        for (var i = 1; i <= 6; i += 2) { // loop through each of the 3 hex pairsÃ¢â‚¬â€red, green, and blue, skip the '#'
            var v1 = h2d(color_1.substr(i, 2)), // extract the current pairs
                v2 = h2d(color_2.substr(i, 2)),
                // combine the current pairs from each source color, according to the specified weight
                val = d2h(Math.floor(v2 + (v1 - v2) * weight));

            while (val.length < 2) { val = '0' + val; } // prepend a '0' if val results in a single digit
            col += val; // concatenate val to our new color string
        }
        return col; // PROFIT!
    };
})();
function getColor(colorNumber) {
    switch (colorNumber) {
        // light
        case 0:
            return color.teal;
        case 1:
            return color.lgreen;
        case 2:
            return color.orange;
        case 3:
            return color.yellow;
        case 4:
            return color.lavender;
        case 5:
            return color.pink;
        case 6:
            return color.vlgrey;
        case 7:
            return color.lgrey;
        case 8:
            return color.guiwhite;
        case 9:
            return color.black;
        // dark
        case 10:
            return color.blue;
        case 11:
            return color.green;
        case 12:
            return color.red;
        case 13:
            return color.gold;
        case 14:
            return color.purple;
        case 15:
            return color.magenta;
        case 16:
            return color.grey;
        case 17:
            return color.dgrey;
        case 18:
            return color.white;
        case 19:
            return color.guiblack;
            
        // special
        case 20:
            return Date.now() % 300 < 150 ? color.blue : color.red;
        case 21:
            return "#1058D3";
        case 22:
            return "#8534E2";
        case 23:
            return "#FF1493";
        case 24:
            return "#FF4500";
        case 25:
            return "#EFC74B";
        case 26:
            return "#B9E87E";
        case 27:
            return "#EFC74B";
        case 28:
            return "#A00A00";
        case 29:
            return "#E7896D";
        case 30:
            return "#8D6ADF";
        case 31:
            return "#EAB57A";
        case "rainbow":
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
        case 34:
            return "#ff0000";
        case 35:
            return "#ff2b00";
        case 36:
            return "#ff5500";
        case 37:
            return "#ff8000";
        case 38:
            return "#ffaa00";
        case 39:
            return "#ffd500";
        case 40:
            return "#ffff00";
        case 41:
            return "#d4ff00";
        case 42:
            return "#aaff00";
        case 43:
            return "#80ff00";
        case 44:
            return "#55ff00";
        case 45:
            return "#2bff00";
        case 46:
            return "#00ff00";
        case 47:
            return "#00ff2a";
        case 48:
            return "#00ff55";
        case 49:
            return "#00ff80";
        case 50:
            return "#00ffaa";
        case 51:
            return "#00ffd5";
        case 52:
            return "#00ffff";
        case 53:
            return "#00d5ff";
        case 54:
            return "#00aaff";
        case 55:
            return "#0080ff";
        case 56:
            return "#0055ff";
        case 57:
            return "#002aff";
        case 58:
            return "#0000ff";
        case 59:
            return "#2b00ff";
        case 60:
            return "#5500ff";
        case 61:
            return "#8000ff";
        case 62:
            return "#aa00ff";
        case 63:
            return "#d400ff";
        case 64:
            return "#ff00ff";
        case 65:
            return "#ff00d4";
        case 66:
            return "#ff00aa";
        case 67:
            return "#ff0080";
        case 68:
            return "#ff0055";
        case 69:
            return "#ff002b";
        case 70:
            return "#15ea48";
        case 71:
            return "#860705";
        case 72:
            return mixColors(
                ["#ff1000", "#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf"][
                Math.floor((Date.now() / 200) % 6)
                ],
                ["#ff9000", "#ffd300", "#00e00b", "#226ef6", "#a913cf", "#ff1000"][
                Math.floor((Date.now() / 200) % 6)
                ],
                (Date.now() / 200) % 1
            );
        case 75:
            return "#ffa600";
        case 87:
            return "#" + Math.floor(Math.random() * 16777215).toString(16);
        //rainboww
        case 76:
            return '#ffff00'
        case 77:
            return '#ffd500'
        case 78:
            return '#ffaa00'
        case 79:
            return '#ff6f00'
        case 80:
            return '#ff4f00'
        case 81:
            return '#ff2f00'
        case 82:
            return '#ff1e00'
        case 83:
            return '#ff0000'
        case 84:
            return '#b00000'
        case 85:
            return '#3d0000'
        case 86:
            return '#222222'
        case 87:
            return '#808080'
        // Rainbow Colors
       /* case 100:
            return "#FF0000";
        case 101:
            return "#FF1A00";
        case 102:
            return "#FF2A00";
        case 103:
            return "#FF4300";
        case 104:
            return "#FF5D00";
        case 105:
            return "#FF7200";
        case 106:
            return "#FF7700";
        case 107:
            return "#FF9400";
        case 108:
            return "#FF9900";
        case 109:
            return "#FFA500";
        case 110:
            return "#FFBB00";
        case 111:
            return "#FFCC00";
        case 112:
            return "#FFDD00";
        case 113:
            return "#FFE900";
        case 114:
            return "#FFFA00";
        case 115:
            return "#EEFF00";
        case 116:
            return "#DDFF00";
        case 117:
            return "#D0FF00";
        case 118:
            return "#B6FF00";
        case 119:
            return "#AAFF00";
        case 120:
            return "#88FF00";
        case 121:
            return "#6EFF00";
        case 122:
            return "#54FF00";
        case 123:
            return "#32FF00";
        case 124:
            return "#19FF00";
        case 125:
            return "#04FF00";
        case 126:
            return "#00FF15";
        case 127:
            return "#00FF26";
        case 128:
            return "#00FF3F";
        case 129:
            return "#00FF55";
        case 130:
            return "#00FF6E";
        case 131:
            return "#00FF7F";
        case 132:
            return "#00FF99";
        case 133:
            return "#00FFA5";
        case 134:
            return "#00FFBB";
        case 135:
            return "#00FFCB";
        case 136:
            return "#00FFD8";
        case 137:
            return "#00FFED";
        case 138:
            return "#00FFFA";
        case 139:
            return "#00E9FF";
        case 140:
            return "#00D8FF";
        case 141:
            return "#00C3FF";
        case 142:
            return "#00BBFF";
        case 143:
            return "#00AEFF";
        case 144:
            return "#00A1FF";
        case 145:
            return "#0090FF";
        case 146:
            return "#007FFF";
        case 147:
            return "#0077FF";
        case 148:
            return "#006EFF";
        case 149:
            return "#005DFF";
        case 150:
            return "#0048FF";
        case 151:
            return "#0037FF";
        case 152:
            return "#0026FF";
        case 153:
            return "#0019FF";
        case 154:
            return "#0004FF";
        case 155:
            return "#0C00FF";
        case 156:
            return "#2200FF";
        case 157:
            return "#2E00FF";
        case 158:
            return "#3B00FF";
        case 159:
            return "#5400FF";
        case 160:
            return "#6A00FF";
        case 161:
            return "#7F00FF";
        case 162:
            return "#9000FF";
        case 163:
            return "#A100FF";
        case 164:
            return "#B600FF";
        case 165:
            return "#BF00FF";
        case 166:
            return "#D000FF";
        case 167:
            return "#DC00FF";
        case 168:
            return "#E900FF";
        case 169:
            return "#FA00FF";
        case 170:
            return "#FF00F6";
        case 171:
            return "#FF00E1";
        case 172:
            return "#FF00CB";
        case 173:
            return "#FF00B6";
        case 174:
            return "#FF00AA";
        case 175:
            return "#FF00A5";
        case 176:
            return "#FF0090";
        case 177:
            return "#FF007B";
        case 178:
            return "#FF006E";
        case 179:
            return "#FF005D";
        case 180:
            return "#FF0059";
        case 181:
            return "#FF0043";
        case 182:
            return "#FF003B";
        case 183:
            return "#FF0026";
        case 184:
            return "#FF001D";
        case 185:
            return "#FF000C";
        // Railgun Colors
        case 186:
            return "#AA8A8B";
        case 187:
            return "#BC7B7D";
        case 188:
            return "#CD6D70";
        case 189:
            return "#DF5E62";
        case 190:
            return "#CB6F3C";
        case 191:
            return "#00D2FF";
        case 192:
            return "#003399";
        case 193:
            return "#BDBDBD";
        case 194:
            return "#B7410E";
        case 195:
            return "#65F0EC";
        case 196:
            return "#EAB57A";
        case 197:
            return "#E6E600";
        case 198:
            return "#E69138";
        case 199:
            return "#EA9999";
        case 200:
            return "#CCFF00";
        case 201:
            return "#800000";
        case 202:
            return "#F7EB73";
        case 203: // Atlantis barrel color
            return "#9A5BAB";
        case 204: // Redditeer eye color
            return "#ED7332";
        case 205:
            return "#FDA2A2";
        case 206:
            return "#00428B";
        case 207:
            return "#FF8000";
        case 208:
            return "#FFB66C";
        case 209:
            return "#C0C0C0";
        case 210:
            return "#FFFF80";
        case 211:
            return "#9B59D0";
        case 212:
            return "#996B6D";
        case 213:
            return "#FE9774";
        case 214:
            return "#77E2FB";
        case 215:
            return "#EFA900";
        case 216:
            return "#FC8208";
        case 217:
            return "#6CF1EE";
        case 218:
            return "#FFD900";
        case 219:
            return "#FFAE40";
        case 220:
            return "#FFA600";
        case 221:
            return "#FF0080";
        case 222:
            return "#00FFFF";
        case 223:
            return "#00BFFF";
        case 224:
            return "#39ff14";
        case 225:
            return color.teal;
        case 226:
            return "#800000";
        case 227:
            return Date.now() % 300 < 150 ? color.red : color.orange;*/
        default:
            return color.grey;
    }
}
function getColorDark(givenColor) {
    let dark = config.graphical.neon ? color.white : color.black;
    if (config.graphical.darkBorders) return dark;
    return mixColors(givenColor, dark, color.border);
}
function getZoneColor(cell) {
    switch (cell) {
        case "bas1":
            return color.blue;
        case "bas2":
            return color.green;
        case "bas3":
            return color.red;
        case "bas4":
            return color.lavender;
            case "bap1":
                return color.blue;
            case "bap2":
                return color.green;
            case "bap3":
                return color.red;
            case "bap4":
                return color.lavender;
                case "heal":
                return color.blue;
                case "boss":
                return color.red;
        case "doNW":
        case "doNE":
        case "doSW":
        case "doSE":
        case "domC":
            return "#c7c7c7";
        case "domx":
            return color.yellow;
        case "weto":
            return "#00FFFF";
        case "bas8":
            return color.orange;
        case "bas5":
            return color.pink;
        case "bas7":
            return color.teal;
        case "bas6":
            ctx.globalAlpha = 1;
            return color.guiblack;
        case "port":
            ctx.globalAlpha = 1;
            return color.black;
        case "prti":
            ctx.globalAlpha = 1;
            return color.black;
        case "edge": // edge
            return mixColors(color.white, color.guiblack, 1 / 3);
        case "dor1":
            return color.vlgrey;
        case "nest":
            return color.purple;

        default:
            return color.white;
    }
}
function setColor(context, givenColor) {
    if (config.graphical.neon) {
        context.fillStyle = getColorDark(givenColor);
        context.strokeStyle = givenColor;
    } else {
        context.fillStyle = givenColor;
        context.strokeStyle = getColorDark(givenColor);
    }
}
let tankMenuColor = 100 + Math.round(Math.random() * 70),
    searchName = "Basic";
// Get mockups <3
var mockups = [];
// Mockup functions
function getEntityImageFromMockup(index, color = mockups[index].color) {
    let mockup = mockups[index];
    return {
        time: 0,
        index: index,
        x: mockup.x,
        y: mockup.y,
        vx: 0,
        vy: 0,
        size: mockup.size,
        realSize: mockup.realSize,
        color: color,
        permissions: mockup.permissions,
        render: {
            status: {
                getFade: () => {
                    return 1;
                },
                getColor: () => {
                    return "#FFFFFF";
                },
                getBlend: () => {
                    return 0;
                },
                health: {
                    get: () => {
                        return 1;
                    }
                },
                shield: {
                    get: () => {
                        return 1;
                    }
                }
            }
        },
        facing: mockup.facing,
        shape: mockup.shape,
        name: mockup.name,
        score: 0,
        tiggle: 0,
        layer: mockup.layer,
        guns: {
            length: mockup.guns.length,
            getPositions: () => Array(mockup.guns.length).fill(0),
            update: () => { }
        },
        turrets: mockup.turrets.map(t => {
            let o = getEntityImageFromMockup(t.index);
            o.realSize = (o.realSize / o.size) * mockup.size * t.sizeFactor;
            o.size = mockup.size * t.sizeFactor;
            o.angle = t.angle;
            o.offset = t.offset;
            o.direction = t.direction;
            o.facing = t.direction + t.angle;
            o.color = t.color;
            return o;
        })
    };
}


// Define clickable regions
global.clickables = (() => {
    let Region = (() => {
        // Protected classes
        function Clickable() {
            let region = {
                x: 0,
                y: 0,
                w: 0,
                h: 0,
            };
            let active = false;
            return {
                set: (x, y, w, h) => {
                    region.x = x;
                    region.y = y;
                    region.w = w;
                    region.h = h;
                    active = true;
                },
                check: target => {
                    let dx = Math.round(target.x - region.x);
                    let dy = Math.round(target.y - region.y);
                    return active && dx >= 0 && dy >= 0 && dx <= region.w && dy <= region.h;
                },
                hide: () => {
                    active = false;
                },
            };
        }
        // Return the constructor
        return (size) => {
            // Define the region
            let data = [];
            for (let i = 0; i < size; i++) {
                data.push(Clickable());
            }
            // Return the region methods
            return {
                place: (index, ...a) => {
                    if (index >= data.length) {
                        console.log(index);
                        console.log(data);
                        throw new Error('Trying to reference a clickable outside a region!');
                    }
                    data[index].set(...a);
                },
                hide: () => {
                    data.forEach(r => r.hide());
                },
                check: x => {
                    return data.findIndex(r => {
                        return r.check(x);
                    });
                }
            };
        };
    })();
    return {
        stat: Region(10),
        upgrade: Region(100),
        hover: Region(1),
        skipUpgrades: Region(1),
    };
})();
global.statHover = false;
global.upgradeHover = false;

// Prepare stuff
/*var player = { //Set up the player
    id: -1,
    cx: global.screenWidth / 2,
    cy: global.screenHeight / 2,
    vx: 0,
    vy: 0,
    renderx: global.screenWidth / 2,
    rendery: global.screenHeight / 2,
    renderv: 1,
    slip: 0,
    view: 1,
    time: 0,
    screenWidth: global.screenWidth,
    screenHeight: global.screenHeight,
    target: {x: global.screenWidth / 2, y: global.screenHeight / 2}
};*/

const Integrate = class {
    constructor(dataLength) {
        this.dataLength = dataLength
        this.elements = {}
    }
    update(delta, index = 0) {
        let deletedLength = delta[index++]
        for (let i = 0; i < deletedLength; i++)
            delete this.elements[delta[index++]]
        let updatedLength = delta[index++]
        for (let i = 0; i < updatedLength; i++) {
            let id = delta[index++]
            let data = delta.slice(index, index + this.dataLength)
            index += this.dataLength
            this.elements[id] = data
        }
        return index
    }
    entries() {
        return Object.entries(this.elements).map(([id, data]) => ({ id: +id, data }))
    }
}

const Minimap = class {
    constructor(speed = 250) {
        this.speed = speed
        this.map = {}
        this.lastUpdate = Date.now()
    }
    update(elements) {
        this.lastUpdate = Date.now()
        for (let [key, value] of Object.entries(this.map))
            if (value.now) {
                value.old = value.now
                value.now = null
            } else {
                delete this.map[key]
            }

        for (let element of elements)
            if (this.map[element.id]) {
                this.map[element.id].now = element
            } else {
                this.map[element.id] = {
                    old: null,
                    now: element
                }
            }
    }
    get() {
        let state = Math.min(1, (Date.now() - this.lastUpdate) / this.speed)
        let stateOld = 1 - state
        return Object.values(this.map).map(({ old, now }) => {
            if (!now)
                return {
                    type: old.type,
                    id: old.id,
                    x: old.x,
                    y: old.y,
                    color: old.color,
                    size: old.size,
                    alpha: stateOld,
                }
            if (!old)
                return {
                    type: now.type,
                    id: now.id,
                    x: now.x,
                    y: now.y,
                    color: now.color,
                    size: now.size,
                    alpha: state,
                }
            return {
                type: now.type,
                id: now.id,
                x: state * now.x + stateOld * old.x,
                y: state * now.y + stateOld * old.y,
                color: now.color,
                size: state * now.size + stateOld * old.size,
                alpha: 1,
            }
        })
    }
}
// Build the leaderboard object
const Entry = class {
    constructor(to) {
        this.score = Smoothbar(0, 10)
        this.truscore = 0
        this.update(to)
    }
    update(to) {
        this.name = to.name
        this.bar = to.bar
        this.color = to.color
        this.index = to.index
        this.score.set(to.score)
        this.old = false
    }
    publish() {
        let ref = mockups[this.index]
        return {
            image: getEntityImageFromMockup(this.index, this.color),
            position: ref.position,
            barColor: getColor(this.bar),
            label: this.name ? this.name + ' - ' + ref.name : ref.name,
            score: this.score.get(),
        }
    }
}
const Leaderboard = class {
    constructor() {
        this.entries = {}
    }
    get() {
        let out = []
        let max = 1
        for (let value of Object.values(this.entries)) {
            let data = value.publish()
            out.push(data)
            if (data.score > max)
                max = data.score
        }
        out.sort((a, b) => b.score - a.score)
        return { data: out, max }
    }
    update(elements) {
        elements.sort((a, b) => b.score - a.score)
        for (let value of Object.values(this.entries))
            value.old = true
        for (let element of elements)
            if (this.entries[element.id])
                this.entries[element.id].update(element)
            else
                this.entries[element.id] = new Entry(element)
        for (let [id, value] of Object.entries(this.entries))
            if (value.old)
                delete this.entries[id]
    }
}
var entities = [],
    users = [],
    minimapAllInt = new Integrate(5),
    minimapTeamInt = new Integrate(3),
    leaderboardInt = new Integrate(5),
    minimap = new Minimap(200),
    leaderboard = new Leaderboard(),
    upgradeSpin = 0,
    messages = (global.messages = []),
    // =============================
    // Chat System.
    // =============================
    chatMessages = [],
    coolMessages = [],
    // =============================

    messageFade = 0,
    newMessage = 0,
    metrics = (global.metrics = {
        latency: [],
        lag: 0,
        rendertime: 0,
        updatetime: 0,
        lastlag: 0,
        lastrender: 0,
        rendergap: 0,
        lastuplink: 0
    }),
    lastPing = 0,
    renderTimes = 0,
    updateTimes = 0,
    target = { x: 0, y: 0 },
    roomSetup = [
        ['norm']
    ],
    roomSpeed = 0;
var gui = {
    getStatNames: num => {
        switch (num) {
            case 1:
                return [
                    "Body Damage",
                    "Max Health",
                    "Bullet Speed",
                    "Bullet Health",
                    "Bullet Penetration",
                    "Bullet Damage",
                    "Engine Acceleration",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            case 2:
                return [
                    "Body Damage",
                    "Max Health",
                    "Drone Speed",
                    "Drone Health",
                    "Drone Penetration",
                    "Drone Damage",
                    "Respawn Rate",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            case 3:
                return [
                    "Body Damage",
                    "Max Health",
                    "Drone Speed",
                    "Drone Health",
                    "Drone Penetration",
                    "Drone Damage",
                    "Max Drone Count",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            case 4:
                return [
                    "Body Damage",
                    "Max Health",
                    "Swarm Speed",
                    "Swarm Health",
                    "Swarm Penetration",
                    "Swarm Damage",
                    "Reload",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            case 5:
                return [
                    "Body Damage",
                    "Max Health",
                    "Placement Speed",
                    "Trap Health",
                    "Trap Penetration",
                    "Trap Damage",
                    "Reload",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            case 6:
                return [
                    "Body Damage",
                    "Max Health",
                    "Weapon Speed",
                    "Weapon Health",
                    "Weapon Penetration",
                    "Weapon Damage",
                    "Reload",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
            default:
                return [
                    "Body Damage",
                    "Max Health",
                    "Bullet Speed",
                    "Bullet Health",
                    "Bullet Penetration",
                    "Bullet Damage",
                    "Reload",
                    "Movement Speed",
                    "Shield Regeneration",
                    "Shield Capacity"
                ];
        }
    },
    skills: [
        {
            amount: 0,
            color: "yellow",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "orange",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "red",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "pink",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "purple",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "blue",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "green",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "yellow",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "orange",
            cap: 1,
            softcap: 1
        },
        {
            amount: 0,
            color: "red",
            cap: 1,
            softcap: 1
        }
    ],
    points: 0,
    upgrades: [],
    playerid: -1,
    __s: (() => {
        let truscore = 0;
        let levelscore = 0;
        let deduction = 0;
        let level = 0;
        let score = Smoothbar(0, 10);
        return {
            setScore: s => {
                if (s) {
                    score.set(s);
                    if (deduction > score.get()) {
                        level = 0;
                        deduction = 0;
                    }
                } else {
                    score = Smoothbar(0, 10);
                    level = 0;
                }
            },
            update: () => {
                levelscore = Math.ceil(1.8 * Math.pow(level + 1, 1.8) - 2 * level + 1);
                if (score.get() - deduction >= levelscore) {
                    deduction += levelscore;
                    level += 1;
                }
            },
            getProgress: () => {
                return (levelscore) ? Math.min(1, Math.max(0, (score.get() - deduction) / levelscore)) : 0;
            },
            getScore: () => score.get(),
            getLevel: () => {
                return level;
            },
        };
    })(),
    type: 0,
    fps: 0,
    color: 0,
    accel: 0,
    party: 1,
};
global.clearUpgrades = () => { gui.upgrades = []; };
// The ratio finder
var getRatio = () => {
    return Math.max(global.screenWidth / player.renderv, global.screenHeight / player.renderv / 9 * 16);
};

global.target = target;
global.canUpgrade = false;
global.canSkill = false;
global.message = '';
global.time = 0;
let betaToken = localStorage.password || null;
let privateToken = null;

let [all, sid, party, host, password] =
    location.hash.match(
        /^#(?:([a-zA-Z]+)([0-9]*)|private=([^;]+)(?:;([^]*))?)$/
    ) || [];
if (host) {
    let location =
        "z-unknown-" +
        host
            .toLowerCase()
            .replace(/(\.[^\.]+)?\.[^\.]+$/, "")
            .replace(/[^a-z0-9\-]/, "-");
    global.servers[0].code = location;
    global.servers[0].at = host;
    sid = "z";
    privateToken = password || null;
} else if (sid) {
    global.partyLink = +party || 0;
} else {
    sid = "";
}
let privilegeOverride = parseInt(localStorage.privilege);
let privilege = Number.isNaN(privilegeOverride)
    ? betaToken
        ? 1
        : 0
    : privilegeOverride;
global.server = global.servers.find(
    r => r.id === (sid || localStorage.gameMode)
);
if (!global.server) {
    let possible = global.servers.filter(
        r => r.visible != null && r.visible <= privilege && r.prefer
    );
    let minimum = Infinity;
    let closest = [];
    for (let server of possible) {
        let [hostCode, regionCode] = server.code.split("-");
        let timezone = global.codeTable[1][regionCode][1];
        let difference = Math.abs(
            ((((timezone - global.timezone) % 24) + 36) % 24) - 12
        );
        if (difference < minimum) {
            closest = [server];
            minimum = difference;
        } else if (difference === minimum) {
            closest.push(server);
        }
    }
    global.server = closest[Math.floor(Math.random() * closest.length)];
}

let serverSelector = document.getElementById("serverSelector");
let selectedServer;
for (let server of global.servers) {
    if (
        (server.visible == null || server.visible > privilege) &&
        global.server !== server
    )
        continue;
    let [hostCode, regionCode] = server.code.split("-");
    let tr = document.createElement("tr");
    let content = global.codeTable[0][hostCode] + " | " + global.codeTable[1][regionCode][0] + " | " + server.name;
    tr.appendChild(document.createElement("td")).textContent = content;
    if (server.featured) tr.classList.add("featured");
    if (server.testing) tr.classList.add("testing");
    tr.onclick = () => {
        selectedServer.classList.remove("selected");
        selectedServer = tr;
        selectedServer.classList.add("selected");
        global.server = server;
        localStorage.gameMode = server.id;
        location.hash = "#" + server.id;
    };
    serverSelector.appendChild(tr)
    if (global.server === server) {
        selectedServer = tr
        selectedServer.classList.add('selected')
        setTimeout(() => {
            serverSelector.parentNode.parentNode.scrollTop = tr.offsetTop - 30
        })
    }
}

const POLL_ENDPOINT = 'http://ip-p.arras.io:2020/poll/'

let frame = document.getElementById('patchNotes')
let processSection = (section, notLast) => {
    let title = section.shift()
    if (!title) return
    title = title.match(/^([A-Za-z ]+[A-Za-z])\s*\[([0-9\-]+)\]\s*(.+)?$/) || [title, title, null]
    let type = title[1] ? {
        'Update': 'update',
        'Feature': 'update',
        'Poll': 'poll',
        'Event Poll': 'event-poll',
        'Gamemode Poll': 'event-poll',
        'Event': 'event',
        'Gamemode': 'event',
        'Balance Update': 'balance-update',
        'Balance': 'balance',
        'Patch': 'patch',
    }[title[1]] : null
    let sectionElement = document.createElement('div')
    if (type)
        sectionElement.classList.add(type)
    let titleElement = document.createElement('b')
    let titleSegments = [title[1]]
    if (title[2]) titleSegments.push(new Date(title[2] + ' ').toLocaleDateString('default', { year: 'numeric', month: 'long', day: 'numeric' }))
    if (title[3]) titleSegments.push(title[3])
    titleElement.innerHTML = titleSegments.join(' - ')
    sectionElement.appendChild(titleElement)
    if (type === 'poll' || type === 'event-poll') {
        let [id, endStamp, isTable] = section.shift().split(',').map(r => r.trim())
        isTable = isTable === 'true'
        let hoursLeft = Math.ceil((new Date(endStamp.trim()) - Date.now()) / (1000 * 60 * 60))
        titleElement.appendChild(document.createElement('br'))
        let small = document.createElement('small')
        small.appendChild(document.createTextNode(hoursLeft > 0 ?
            'closing in ' + hoursLeft + ' hour' + (hoursLeft === 1 ? '' : 's') :
            'closed'))
        let viewAll = document.createElement('a')
        viewAll.href = 'javascript:;'
        viewAll.innerText = 'view all results'
        if (isTable)
            small.appendChild(viewAll)
        titleElement.appendChild(small)
        sectionElement.appendChild(document.createElement('br'))

        let table = document.createElement('table')
        table.className = isTable ? 'poll-table' : 'poll-list'
        let tbody = document.createElement('tbody')

        let getNextCheckbox = (() => {
            let labels = []
            let options = []

            let promise = fetch(POLL_ENDPOINT + id + '/status').then(r => r.json()).then(data => {
                if (!data.ok)
                    throw new Error('Poll does not exist!')
                options = data.options
            })
            viewAll.onclick = () => {
                viewAll.remove()
                for (let label of labels) {
                    label.className = 'count'
                    label.innerHTML = parseInt(label.title, 10)
                    label.title = ''
                }
            }
            let currentId = 0
            return name => {
                let makeName = votes => (name ? name + ' - ' : '') + votes + ' vote' + (votes === 1 ? '' : 's')
                let optionId = currentId++
                let label = document.createElement('label')
                label.className = 'container'

                let input = document.createElement('input')
                input.tabIndex = -1
                input.className = 'checkbox'
                input.type = 'checkbox'
                input.disabled = true

                promise.then(() => {
                    let { voted, votes } = options[optionId] || { voted: false, votes: 0 }
                    input.checked = voted
                    input.disabled = hoursLeft <= 0
                    let real = votes - voted
                    input.onchange = () => {
                        fetch(POLL_ENDPOINT + id + '/set/' + optionId + '/' + input.checked)
                        let votes = real + (input.checked ? 1 : 0)
                        if (name)
                            text.nodeValue = makeName(votes)
                        else
                            label.title = makeName(votes)
                    }
                    if (name)
                        text.nodeValue = makeName(votes)
                    else
                        label.title = makeName(votes)
                })

                let text
                if (name) {
                    text = document.createTextNode(name)
                    label.appendChild(text)
                }
                label.appendChild(input)
                let span = document.createElement('span')
                span.className = 'checkmark'
                label.appendChild(span)
                labels.push(label)
                return label
            }
        })()

        for (let row of section) {
            let tr = document.createElement('tr')
            if (isTable) {
                for (let cell of row.split('|')) {
                    cell = cell.trim()
                    let td = document.createElement('td')
                    if (cell === 'X') {
                        td.appendChild(getNextCheckbox())
                    } else {
                        let colSpan = cell.match(/^:*/)[0].length
                        td.colSpan = colSpan + 1
                        td.innerHTML = cell.slice(colSpan)
                    }
                    tr.appendChild(td)
                }
            } else {
                let td = document.createElement('td')
                td.appendChild(getNextCheckbox(row))
                tr.appendChild(td)
            }
            tbody.appendChild(tr)
        }

        table.appendChild(tbody)
        sectionElement.appendChild(table)
    } else {
        let listElement = document.createElement('ul')
        for (let line of section) {
            let lineElement = document.createElement('li')
            lineElement.innerHTML = line
            listElement.appendChild(lineElement)
        }
        sectionElement.appendChild(listElement)
    }
    if (notLast) {
        sectionElement.appendChild(document.createElement('hr'))
    }
    frame.appendChild(sectionElement)
}
let writeAll = all => {
    let section = []
    for (let line of all.split('\n')) {
        if (line.length === 0)
            continue
        let header = line.charAt(0)
        if (header === '#') {
            processSection(section, true)
            section = [line.slice(1).trim()]
        } else if (header === '-') {
            section.push(line.slice(1).trim())
        } else {
            section[section.length - 1] += ' ' + line.trim()
        }
    }
    processSection(section, false)
}
fetch("changelog.md", {
    cache: "no-cache"
}).then(e => e.text()).then(e => {
    let t = [];
    for (let a of e.split("\n")) {
        if (0 === a.length) continue;
        let e = a.charAt(0);
        "#" === e ? (X(t, !0), t = [a.slice(1).trim()]) : "-" === e ? t.push(a.slice(1).trim()) : t[t.length - 1] += " " + a.trim()
    }
    X(t, !1)
});
let Z = (() => {
    let e = document.getElementById("changelogSelector"),
        t = e.parentNode,
        a = e.firstElementChild,
        i = document.getElementById("patchNotes"),
        r = {};
    for (let n = 0; n < e.children.length; n++) {
        let l = e.children[n],
            o = l.dataset.type;
        r[o] = l.onclick = () => {
            if (l === a) return;
            let r = a.dataset.type;
            a.classList.remove("active"), l.classList.add("active"), i.classList.remove(r), i.classList.add(o), a = l, t.scrollLeft = l.offsetLeft - e.offsetLeft + l.offsetWidth / 2 - t.offsetWidth / 2
        }
    }
    return r
})();

// Save forms
util.retrieveFromLocalStorage('playerNameInput');
util.retrieveFromLocalStorage('playerKeyInput');
util.retrieveFromLocalStorage('optScreenshotMode');
util.retrieveFromLocalStorage('optShield');
util.retrieveFromLocalStorage('optFancy');
util.retrieveFromLocalStorage('optColors');
util.retrieveFromLocalStorage('optNoPointy');
util.retrieveFromLocalStorage('optBorders');
if (global.mobile)
    util.retrieveFromLocalStorage('optMobile');
util.retrieveFromLocalStorage('optCustom');
// Set default theme & controls
if (document.getElementById('optColors').value === '') {
    document.getElementById('optColors').value = 'public';
}
if (global.mobile && document.getElementById('optMobile').value === '') {
    document.getElementById('optMobile').value = 'joysticks';
}
if (document.getElementById('optBorders').value === '') {
    document.getElementById('optBorders').value = 'public';
}
let customThemeInput = document.getElementById('optCustom')
customThemeInput.oninput = () => {
    let theme = customThemeInput.value ?
        parseCustomTheme(customThemeInput.value) : true
    if (theme) {
        customThemeInput.classList.remove('error')
    } else {
        customThemeInput.classList.add('error')
    }
}
// Control Settings
if (!global.mobile) {
    let data = {};
    try {
        if (location.hash === "#vi" || location.hash === "#vim")
            data = {
                KEY_AUTO_FIRE: [";", 186],
                KEY_AUTO_SPIN: ["P", 80],
                KEY_CHOOSE_1: ["Q", 81],
                KEY_CHOOSE_2: ["W", 87],
                KEY_CHOOSE_3: ["E", 69],
                KEY_CHOOSE_4: ["A", 65],
                KEY_CHOOSE_5: ["S", 83],
                KEY_CHOOSE_6: ["D", 68],
                KEY_CHOOSE_7: ["Z", 90],
                KEY_CHOOSE_8: ["X", 88],
                KEY_CHOOSE_9: ["C", 67],
                KEY_CLASS_TREE: ["T", 84],
                KEY_DOWN: ["J", 74],
                KEY_LEFT: ["H", 72],
                KEY_LEVEL_UP: [".", 190],
                KEY_OVER_RIDE: ["I", 73],
                KEY_PING: [",", 188],
                KEY_RECORD: ["V", 86],
                SWITCH_TANK: 16,
                // KEY_TP: this.parent.socket.talk("g", 1),
                KEY_OVER_RIDE: this.parent.parent.socket.talk('t', 2),
                // KEY_REVERSE_MOUSE: ['U', 85],
                //KEY_REVERSE_TANK: ['Y', 89],
                KEY_RIGHT: ["L", 76],
                KEY_SCREENSHOT: ["G", 71],
                KEY_UP: ["K", 75]
            };
        else if (localStorage.keybindsJSON)
            data = JSON.parse(localStorage.keybindsJSON) || {}
    } catch (e) { }
    let saveData = () => localStorage.keybindsJSON = JSON.stringify(data)

    let controlTable = document.getElementById('controlTable')
    let resetControls = document.getElementById('resetControls')
    let moreControls = document.getElementById('moreControls')
    let active = null
    let cells = []
    for (let i = 0; i < controlTable.rows.length; i++) {
        for (let j = 0; j < controlTable.rows[i].cells.length; j++) {
            let element = controlTable.rows[i].cells[j].firstChild.firstChild
            let { key, help } = element.dataset
            let cell = {
                element,
                key,
                help,
                currentKey: element.innerText,
                currentCode: global[key],
                originalKey: element.innerText,
                originalCode: global[key],
            }
            if (data[cell.key]) {
                element.innerText = cell.currentKey = data[cell.key][0]
                global[key] = cell.currentCode = data[cell.key][1]
                if (cell.help)
                    global.help[cell.help] = cell.currentKey
            }
            cells.push(cell)
        }
    }
    let isDifferent = () => cells.some(({ currentCode, originalCode }) => currentCode !== originalCode)
    if (isDifferent()) {
        resetControls.classList.add('active')
    }
    let blur = () => {
        if (window.getSelection) {
            window.getSelection().removeAllRanges()
        }
        active.element.parentNode.parentNode.classList.remove('editing')
        active = null
    }
    let select = cell => {
        active = cell
        active.element.parentNode.parentNode.classList.add('editing')
        if (active.currentCode !== -1 && window.getSelection) {
            let selection = window.getSelection()
            selection.removeAllRanges()
            let range = document.createRange()
            range.selectNodeContents(active.element)
            selection.addRange(range)
        }
    }
    let set = (key, code) => {
        if (key === ' ') {
            key = ''
            code = -1
        } else if (code !== active.currentCode) {
            let swap = cells.find(({ currentCode }) => currentCode === code)
            if (swap) {
                swap.currentKey = active.currentKey
                swap.element.innerText = active.currentKey
                swap.currentCode = active.currentCode
                global[swap.key] = active.currentCode
                if (swap.help)
                    global.help[swap.help] = active.currentKey
                data[swap.key] = [swap.currentKey, swap.currentCode]
            }
        }
        active.currentKey = key
        active.element.innerText = key
        active.currentCode = code
        global[active.key] = code
        if (active.help)
            global.help[active.help] = key
        data[active.key] = [active.currentKey, active.currentCode]
        saveData()
        blur()

        if (isDifferent()) {
            resetControls.classList.remove('spin')
            resetControls.classList.add('active')
        } else {
            resetControls.classList.remove('active')
        }
    }
    document.onclick = e => {
        if (global.gameStart) return
        if (active) {
            blur()
            return
        }
        let cell = cells.find(({ element }) => e.target === element)
        if (cell) {
            select(cell)
        }
    }
    resetControls.onclick = () => {
        if (!isDifferent()) return
        if (active)
            blur()
        for (let cell of cells) {
            cell.currentKey = cell.originalKey
            cell.element.innerText = cell.originalKey
            cell.currentCode = cell.originalCode
            global[cell.key] = cell.originalCode
            if (cell.help)
                global.help[cell.help] = cell.originalKey
        }
        data = {}
        saveData()
        resetControls.classList.remove('active')
        resetControls.classList.add('spin')
    }
    let extraControls = null
    moreControls.onclick = () => {
        if (extraControls) {
            for (let i = 0; i < extraControls.length; i++)
                extraControls[i].classList.add('hidden')
            extraControls = null
            moreControls.classList.remove('x')
        } else {
            extraControls = document.querySelectorAll('#controlTable tr.hidden')
            for (let i = 0; i < extraControls.length; i++)
                extraControls[i].classList.remove('hidden')
            moreControls.classList.add('x')
        }
    }
    document.onkeydown = e => {
        if (global.gameStart || e.shiftKey || e.ctrlKey || e.altKey) return
        let keyCode = e.which || e.keyCode
        if (active) {
            if (e.key.length === 1 && !/[0-9o`]/i.test(e.key) && e.location !== 3)
                set(e.key.toUpperCase(), keyCode)
            else if (e.key === 'Backspace' || e.key === 'Delete')
                set(' ', 32)
        } else if (keyCode === global.KEY_ENTER || keyCode === global.KEY_SPAWN) {
            startGame()
        }
    }
}
// Game start stuff
document.getElementById('startButton').onclick = () => {
    startGame();
}
// Resizing stuff
window.addEventListener('resize', () => {
    player.screenWidth = canvas.cv.width = global.screenWidth = window.innerWidth;
    player.screenHeight = canvas.cv.height = global.screenHeight = window.innerHeight;
});

// Prepare canvas stuff
//var Canvas = __webpack_require__(/*! ./canvas */ "./src/canvas.js");
let canvas = new Canvas();
if (global.mobile)
    document.body.classList.add('mobile')
let ctx = canvas.cv.getContext('2d');
let ctx2 = document.createElement('canvas').getContext('2d');

// Animation things
function isInView(x, y, r, mid = false) {
    let ratio = getRatio();
    r += config.graphical.borderChunk;
    if (mid) {
        ratio *= 2;
        return x > -global.screenWidth / ratio - r &&
            x < global.screenWidth / ratio + r &&
            y > -global.screenHeight / ratio - r &&
            y < global.screenHeight / ratio + r;
    }
    return x > -r && x < global.screenWidth / ratio + r && y > -r && y < global.screenHeight / ratio + r;
}
function Smoothbar(value, speed, sharpness = 3) {
    let time = Date.now();
    let display = value;
    let oldvalue = value;
    return {
        set: val => {
            if (value !== val) {
                oldvalue = display;
                value = val;
                time = Date.now();
            }
        },
        get: () => {
            let timediff = (Date.now() - time) / 1000;
            display = (timediff < speed) ? oldvalue + (value - oldvalue) * Math.pow(timediff / speed, 1 / sharpness) : value;
            return display;
        },
    };
}

// Some stuff we need before we can set up the socket
var sync = [];
var clockDiff = 0;
var serverStart = 0;
var lag = (() => {
    let lags = [];
    return {
        get: () => {
            if (!lags.length) return 0;
            var sum = lags.reduce((a, b) => a + b, 0);
            return sum / lags.length;
        },
        add: l => {
            lags.push(l);
            if (lags.length > config.lag.memory) {
                lags.splice(0, 1);
            }
        }
    };
})();
var getNow = () => Date.now() - clockDiff - serverStart
var getRelative = () => Date.now()
var player = {
    x: 0,
    y: 0,
    cx: 0,
    cy: 0,
    vx: 0,
    vy: 0,
    lastvx: 0,
    lastvy: 0,
    renderx: 0,
    rendery: 0,
    renderv: 1,
    lastx: 0,
    lasty: 0,
    target: canvas.target,
    name: '',
    view: 1,
    lastUpdate: 0,
    time: 0,
};
global.player = player
// Jumping the gun on motion
var moveCompensation = (() => {
    let xx = 0, yy = 0, vx = 0, vy = 0;
    return {
        reset: () => {
            xx = 0;
            yy = 0;
        },
        get: () => {
            return {
                x: xx,
                y: yy,
            };
        },
        iterate: (g) => {
            if (global.died || global.gameStart) return 0;
            // Add motion
            let damp = gui.accel / gui.topSpeed,
                len = Math.sqrt(g.x * g.x + g.y * g.y);
            vx += gui.accel * g.x / len;
            vy += gui.accel * g.y / len;
            // Dampen motion
            let motion = Math.sqrt(vx * vx + vy * vy);
            if (motion > 0 && damp) {
                let finalvelocity = motion / (damp / roomSpeed + 1);
                vx = finalvelocity * vx / motion;
                vy = finalvelocity * vy / motion;
            }
            xx += vx;
            yy += vy;
        },
    };
})();

// Prepare the websocket for definition
const socketInit = (() => {
    // Inital setup stuff
    window.WebSocket = window.WebSocket || window.MozWebSocket;
    //const protocol = __webpack_require__(/*! ./lib/fasttalk */ "./src/lib/fasttalk.js");
    // This is what we use to figure out what the hell the server is telling us to look at
    const convert = (() => {
        // Make a data crawler
        const get = (() => {
            let index = 0,
                crawlData = [];
            return {
                next: () => {
                    if (index >= crawlData.length) {
                        console.error(crawlData);
                        throw new Error('Trying to crawl past the end of the provided data!');
                    } else {
                        return crawlData[index++];
                    }
                },
                all: () => crawlData.slice(index),
                take: amount => {
                    index += amount
                    if (index > crawlData.length) {
                        console.error(crawlData);
                        throw new Error('Trying to crawl past the end of the provided data!');
                    }
                },
                set: data => { crawlData = data; index = 0; },
            };
        })();
        // Return our handlers
        return {
            begin: data => get.set(data),
            // Make a data convertor
            data: (() => {
                // Make a converter
                const process = (() => {
                    // Some status manager constructors
                    const GunContainer = (() => {
                        function physics(g) {
                            g.isUpdated = true;
                            if (g.motion || g.position) {
                                // Simulate recoil
                                g.motion -= 0.2 * g.position;
                                g.position += g.motion;
                                if (g.position < 0) { // Bouncing off the back
                                    g.position = 0;
                                    g.motion = -g.motion;
                                }
                                if (g.motion > 0) {
                                    g.motion *= 0.5;
                                }
                            }
                        }
                        return (n) => {
                            let a = [];
                            for (let i = 0; i < n; i++) { a.push({ motion: 0, position: 0, isUpdated: true, }); }
                            return {
                                getPositions: () => a.map(g => g.position),
                                update: () => { for (let i = 0; i < a.length; i++) physics(a[i]); }, //a.forEach(physics),
                                fire: (i, power) => { if (a[i].isUpdated) a[i].motion += Math.sqrt(power) / 20; a[i].isUpdated = false; },
                                length: a.length,
                            };
                        };
                    })();
                    function Status() {
                        let state = 'normal', time = getNow();
                        return {
                            set: val => {
                                if (val !== state || state === 'injured') {
                                    if (state !== 'dying') time = getNow();
                                    state = val;
                                }
                            },
                            getFade: () => {
                                return (state === 'dying' || state === 'killed') ? 1 - Math.min(1, (getNow() - time) / 300) : 1;
                            },
                            getColor: () => {
                                return '#FFFFFF';
                            },
                            getBlend: () => {
                                let o = (state === 'normal' || state === 'dying') ? 0 : 1 - Math.min(1, (getNow() - time) / 80);
                                if (getNow() - time > 500 && state === 'injured') { state = 'normal'; }
                                return o;
                            }
                        };
                    }
                    // Return our function
                    return (z = {}) => {
                        let isNew = z.facing == null; // For whatever reason arguments.length is uglified poorly...
                        // Figure out what kind of data we're looking at
                        let type = get.next();
                        // Handle it appropriately
                        if (type & 0x01) { // issa turret
                            z.facing = get.next();
                            z.layer = get.next();
                        } else { // issa something real
                            z.interval = metrics.rendergap;
                            z.id = get.next();
                            // Determine if this is an new entity or if we already know about it
                            let iii = entities.findIndex(x => x.id === z.id);
                            if (iii !== -1) {
                                // remove it if needed (this way we'll only be left with the dead/unused entities)
                                z = entities.splice(iii, 1)[0];
                            }
                            // Change the use of the variable
                            isNew = iii === -1;
                            // If it's not new, save the memory data
                            if (!isNew) {
                                z.render.draws = true; // yay!!
                                z.render.lastx = z.x;
                                z.render.lasty = z.y;
                                z.render.lastvx = z.vx;
                                z.render.lastvy = z.vy;
                                z.render.lastf = z.facing;
                                z.render.lastRender = player.time;
                            }
                            // Either way, keep pulling information
                            z.index = get.next();
                            z.x = get.next();
                            z.y = get.next();
                            z.vx = get.next();
                            z.vy = get.next();
                            z.size = get.next();
                            z.facing = get.next();
                            z.vfacing = get.next();
                            z.twiggle = get.next();
                            z.layer = get.next();
                            z.color = get.next();
                            // Update health, flagging as injured if needed
                            if (isNew) {
                                z.health = get.next() / 255;
                                z.shield = get.next() / 255;
                            } else {
                                let hh = z.health, ss = z.shield;
                                z.health = get.next() / 255;
                                z.shield = get.next() / 255;
                                // Update stuff
                                if (z.health < hh || z.shield < ss) {
                                    z.render.status.set('injured');
                                } else if (z.render.status.getFade() !== 1) {
                                    // If it turns out that we thought it was dead and it wasn't
                                    z.render.status.set('normal');
                                }
                            }
                            z.alpha = get.next() / 255
                            z.drawsHealth = type & 0x02
                            z.nameplate = type & 0x04
                            z.invuln = type & 0x08 ? z.invuln || Date.now() : 0
                            // Nameplates
                            if (type & 0x04) { // has a nameplate
                                z.name = get.next();
                                z.score = get.next();
                            }
                            // If it's new, give it rendering information
                            if (isNew) {
                                z.render = {
                                    draws: false,
                                    expandsWithDeath: z.drawsHealth,
                                    lastRender: player.time,
                                    x: z.x,
                                    y: z.y,
                                    lastx: z.x - metrics.rendergap * config.roomSpeed * (1000 / 30) * z.vx,
                                    lasty: z.y - metrics.rendergap * config.roomSpeed * (1000 / 30) * z.vy,
                                    lastvx: z.vx,
                                    lastvy: z.vy,
                                    lastf: z.facing,
                                    f: z.facing,
                                    h: z.health,
                                    s: z.shield,
                                    interval: metrics.rendergap,
                                    slip: 0,
                                    status: Status(),
                                    health: Smoothbar(z.health, 0.5, 5),
                                    shield: Smoothbar(z.shield, 0.5, 5),
                                };
                            }
                            // Update the rendering healthbars
                            z.render.health.set(z.health);
                            z.render.shield.set(z.shield);
                            // Figure out if the class changed (and if so, refresh the guns and turrets)
                            if (!isNew && z.oldIndex !== z.index) isNew = true;
                            z.oldIndex = z.index;
                        }
                        // If it needs to have a gun container made, make one
                        let gunnumb = get.next();
                        if (isNew) { z.guns = GunContainer(gunnumb); }
                        else if (gunnumb !== z.guns.length) { throw new Error('Mismatch between data gun number and remembered gun number!'); }
                        // Decide if guns need to be fired one by one
                        for (let i = 0; i < gunnumb; i++) {
                            let time = get.next(),
                                power = get.next();
                            if (time > player.lastUpdate - metrics.rendergap) { // shoot it
                                z.guns.fire(i, power);
                            }
                        }
                        // Update turrets
                        let turnumb = get.next();
                        if (isNew) {
                            z.turrets = [];
                            for (let i = 0; i < turnumb; i++) {
                                z.turrets.push(process());
                            }
                        } else {
                            if (z.turrets.length !== turnumb) { throw new Error('Mismatch between data turret number and remembered turret number!'); }
                            //z.turrets.forEach(process);
                            for (let i = 0; i < z.turrets.length; i++) {
                                process(z.turrets[i]);
                            }
                        }
                        // Return our monstrous creation
                        return z;
                    };
                })();
                // And this is the function we return that crawls some given data and reports it
                return () => {
                    // Set up the output thingy+
                    let output = [];
                    // Get the number of entities and work through them
                    for (let i = 0, len = get.next(); i < len; i++) {
                        output.push(process());
                    }
                    // Handle the dead/leftover entities
                    for (let i = 0; i < entities.length; i++) {
                        let e = entities[i];
                        // Kill them
                        e.render.status.set((e.health === 1) ? 'dying' : 'killed');
                        // And only push them if they're not entirely dead and still visible
                        if (e.render.status.getFade() !== 0 && isInView(e.render.x - player.renderx, e.render.y - player.rendery, e.size, true)) {
                            output.push(e);
                        } else {
                            // if (e.render.textobjs != null) e.render.textobjs.forEach(o => o.remove());
                        }
                    }
                    // Save the new entities list
                    entities = output;
                    entities.sort((a, b) => (a.layer - b.layer) || (b.id - a.id));
                };
            })(),
            // Define our gui convertor
            gui: () => {
                let index = get.next(),
                    // Translate the encoded index
                    indices = {
                        fps: index & 0x0001,
                        label: index & 0x0002,
                        score: index & 0x0004,
                        points: index & 0x0008,
                        upgrades: index & 0x0010,
                        statsdata: index & 0x0020,
                        skills: index & 0x0040,
                        accel: index & 0x0080,
                        party: index & 0x0100
                    };
                // Operate only on the values provided
                if (indices.fps) {
                    gui.fps = get.next();
                }
                if (indices.label) {
                    gui.type = get.next();
                    gui.color = get.next();
                    gui.playerid = get.next();
                }
                if (indices.score) {
                    gui.__s.setScore(get.next());
                }
                if (indices.points) {
                    gui.points = get.next();
                }
                if (indices.upgrades) {
                    gui.upgrades = [];
                    for (let i = 0, len = get.next(); i < len; i++)
                        gui.upgrades.push(get.next());
                }
                if (indices.statsdata) {
                    for (let i = 9; i >= 0; i--) {
                        gui.skills[i].name = get.next();
                        gui.skills[i].cap = get.next();
                        gui.skills[i].softcap = get.next();
                    }
                }
                if (indices.skills) {
                    let skk = parseInt(get.next(), 36);
                    gui.skills[0].amount = (skk / 0x1000000000) & 15;
                    gui.skills[1].amount = (skk / 0x100000000) & 15;
                    gui.skills[2].amount = (skk / 0x10000000) & 15;
                    gui.skills[3].amount = (skk / 0x1000000) & 15;
                    gui.skills[4].amount = (skk / 0x100000) & 15;
                    gui.skills[5].amount = (skk / 0x10000) & 15;
                    gui.skills[6].amount = (skk / 0x1000) & 15;
                    gui.skills[7].amount = (skk / 0x100) & 15;
                    gui.skills[8].amount = (skk / 0x10) & 15;
                    gui.skills[9].amount = (skk / 0x1) & 15;
                }
                if (indices.accel) {
                    gui.accel = get.next();
                }
                if (indices.party) {
                    gui.party = get.next();
                    if (!host) location.hash = "#" + global.server.id;
                }
            },
            // Broadcast for minimap and leaderboard
            broadcast: () => {
                let all = get.all()
                let by = minimapAllInt.update(all)
                by = minimapTeamInt.update(all, by)
                by = leaderboardInt.update(all, by)
                get.take(by)

                let map = []
                for (let { id, data } of minimapAllInt.entries()) {
                    map.push({
                        id,
                        type: data[0],
                        x: data[1] * global.gameWidth / 255,
                        y: data[2] * global.gameHeight / 255,
                        color: data[3],
                        size: data[4],
                    })
                }
                for (let { id, data } of minimapTeamInt.entries()) {
                    map.push({
                        id,
                        type: 0,
                        x: data[0] * global.gameWidth / 255,
                        y: data[1] * global.gameHeight / 255,
                        color: data[2],
                        size: 0,
                    })
                }
                minimap.update(map)

                let entries = []
                for (let { id, data } of leaderboardInt.entries()) {
                    entries.push({
                        id,
                        score: data[0],
                        index: data[1],
                        name: data[2],
                        color: data[3],
                        bar: data[4],
                    })
                }
                leaderboard.update(entries)
            }
        };
    })();
    // The initialization function (this is returned)

    return () => {
        let amSecure = location.protocol === 'https:' ? 1 : -1
        let isSecure = global.server.secure || amSecure
        let socket = new WebSocket((isSecure === 1 ? 'wss://' : 'ws://') + global.server.at + '/');
        // Set up our socket
        socket.binaryType = 'arraybuffer';
        socket.open = false;
        // Handle commands
        socket.cmd = (() => {
            let flag = false;
            let commands = [
                false, // up
                false, // down
                false, // left
                false, // right
                false, // lmb
                false, // mmb
                false, // rmb
                false,
            ];
            return {
                set: (index, value) => { if (commands[index] !== value) { commands[index] = value; flag = true; } },
                talk: () => {
                    flag = false;
                    let o = 0;
                    for (let i = 0; i < 8; i++) {
                        if (commands[i]) o += Math.pow(2, i);
                    }
                    let ratio = getRatio();
                    socket.talk('C',
                        Math.round(canvas.target.x / ratio),
                        Math.round(canvas.target.y / ratio),
                        o
                    );
                },
                check: () => { return flag; },
                getMotion: () => { return { x: commands[3] - commands[2], y: commands[1] - commands[0], }; },
            };
        })();
        // Learn how to talk
        socket.talk = (...message) => {
            // Make sure the socket is open before we do anything
            if (!socket.open) return 1;
            socket.send(protocol.encode(message));
        };
        window['help'] = () => {
            logger.info('Here is a list of commands and their usages:');
            logger.norm(' â€¢ broadcast("message")');
            logger.norm(' â€¢ setColor(colorID)');
            logger.norm(' â€¢ setSkill(amount)');
            logger.norm(' â€¢ setScore(score)');
            logger.norm(' â€¢ setSize(size)');
            logger.norm(' â€¢ setTank("exportName")');
            logger.norm(' â€¢ setStat("statName", value)');
            logger.norm(' â€¢ spawnEntity("exportName", x, y, teamID, colorID, size, score)');
            logger.norm(' â€¢ teleport(x, y)');
            logger.norm(' â€¢ setChildren(amount)');
            logger.norm(' â€¢ setInvisible(fadeInValue, fadeOutValue, limit)');
            logger.norm(' â€¢ setFOV(fov)');
            logger.norm(' â€¢ setSpinSpeed(speed)');
            logger.norm(' â€¢ setEntity("exportName")');
            logger.norm(' â€¢ clearChildren()');
            logger.norm(' â€¢ setTeam(teamID)');
            logger.norm(' â€¢ skillSet(atk, hlt, spd, str, pen, dam, rld, rgn, shi)');
            logger.norm(' â€¢ rainbowSpeed(speed)');
            logger.warn('To use any of the above commands, you need to have beta-tester level 2!');
        };
        window['broadcast'] = message => {
            socket.talk('D', 0, message);
            logger.info('Broadcasting your message to all playersyhrtuyjyiuyiy.');
        };
        window['setColor'] = id => {
            if (id < 0) return logger.warn('Please specify a valid color ID! Note that IDs 0-31 are colors.');
            socket.talk('D', 1, id);
            logger.info('Set your color ID to ' + id + '.');
        };
        window['setSkill'] = amount => {
            if (isNaN(amount) || amount < 0) return logger.warn("Please specify a valid amount of stats! Note that the amount can't be below 0 or above 90.");
            socket.talk('D', 2, amount);
            logger.info('Set your amount of skill points to ' + amount + '.');
        };
        window['setScore'] = score => {
            if (isNaN(score)) return logger.warn("Please specify a valid score!");
            socket.talk('D', 3, score);
            logger.info('Set your score to ' + score + '.');
        };
        window['setSize'] = size => {
            if (isNaN(size) || size < 0 || size > 3000) return logger.warn("Please specify a valid size value!");
            socket.talk('D', 4, size);
            logger.info('Set your size to ' + size + '.');
        };
        window['setTank'] = tank => {
            if (!tank || !isNaN(tank)) return logger.warn("Please specify a valid tank!");
            socket.talk('D', 5, tank);
            logger.info('Set your tank to ' + tank + '.');
        };
        window['setStat'] = (stat, value) => {
            if (stat != 'weapon_speed' && stat != 'weapon_reload' && stat != 'move_speed' && stat != 'max_health' && stat != 'body_damage' && stat != 'weapon_damage' && stat != 'names') return logger.warn('Invalid stat name! Input setStat("names") for a list of changeable stats.');
            if (stat == 'names') return logger.info('Stat Names: weapon_speed, weapon_reload, move_speed, max_health, body_damage, weapon_damage.'), value = 0;
            if (isNaN(value) || (stat == 'weapon_reload' && value <= 0)) return logger.warn('Please specify a valid value for this stat!');
            socket.talk('D', 6, stat, value);
            logger.info('Set ' + stat + ' to ' + value + '.');
        };
        window['spawnEntity'] = (ent, x, y, team, color, size, value) => {
            if (!ent || !isNaN(ent)) return logger.warn("Please specify a valid entity!");
            if (!x || !y || (isNaN(x) && x !== 'me' || isNaN(y) && y !== 'me')) return logger.warn("Please specify a valid (X,Y) position!");
            if (!team || (isNaN(team) && team !== 'me')) return logger.warn("Please specify a valid team!");
            if (color < 0 || (isNaN(color) && color !== 'rainbow' && color !== 'default')) return logger.warn("Please specify a valid color ID!");
            socket.talk('D', 7, ent, x, y, team, color, size, value);
            logger.info('Spawned ' + ent + ' at (' + x + ', ' + y + ') with the team ID ' + team + ', a color ID of ' + color + ', a size of ' + size + ', and a value of ' + value);
        };
        window['setChildren'] = amount => {
            if (!amount || amount < 0 || isNaN(amount)) return logger.warn('Please specify a valid maxChildren value!');
            socket.talk('D', 8, amount);
            logger.info('Set your maxChildren to ' + amount + '.');
        };
        window['teleport'] = (x, y) => {
            if (isNaN(x) || isNaN(x)) return logger.warn('Please specify a valid (X, Y) position!');
            socket.talk('D', 9, x, y);
            logger.info('Teleported to (' + x + ', ' + y + ').');
        };
        window['setInvisible'] = (fadeOut, fadeIn, maxFade) => {
            let valueCheck = value => value > 1 || value < 0 || isNaN(value);
            if (valueCheck(fadeOut) || valueCheck(fadeIn) || valueCheck(maxFade)) return logger.warn('Please specify a valid invisibility alpha value!');
            socket.talk('D', 10, fadeOut, fadeIn, maxFade);
            logger.info('Set your invisible attribute to [' + fadeOut + ', ' + fadeIn + ', ' + maxFade + '].');
        };
        window['setFOV'] = fov => {
            if (!fov || fov < 0 || fov > 500 || isNaN(fov)) return logger.warn('Please specify a valid FoV value!');
            socket.talk('D', 11, fov);
            logger.info('Set your FoV to ' + fov + '.');
        };
        window['setSpinSpeed'] = speed => {
            if (!speed || isNaN(speed)) return logger.warn('Please specify a valid speed value!');
            socket.talk('D', 12, speed);
            logger.info('Set your autospin speed to ' + speed + '.');
        };
        window['setEntity'] = entity => {
            if (!entity || !isNaN(entity)) return logger.warn('Please specify a valid entity!');
            socket.talk('D', 13, entity);
            logger.info('Set the F key entity to ' + entity + '.');
        };
        window['clearChildren'] = () => {
            socket.talk('D', 14);
            logger.info('Cleared all children entities.');
        };
        window['setTeam'] = teamID => {
            if (isNaN(teamID)) return logger.warn('Please specify a valid team ID!');
            socket.talk('D', 15, teamID);
            logger.info('Set your team ID to ' + teamID + '.');
        };
        window['skillSet'] = (s1, s2, s3, s4, s5, s6, s7, s8, s9, s10) => {
            let s = skill => skill < 0 || isNaN(skill);
            if (s(s1) || s(s2) || s(s3) || s(s4) || s(s5) || s(s6) || s(s7) || s(s8) || s(s9) || s(s10)) return logger.warn('Please specify a valid skill-set array!');
            socket.talk('D', 17, s1, s2, s3, s4, s5, s6, s7, s8, s9, s10);
            logger.info('Changed your skill-set to [' + s1 + ', ' + s2 + ', ' + s3 + ', ' + s4 + ', ' + s5 + ', ' + s6 + ', ' + s7 + ', ' + s8 + ', ' + s9 + ', ' + s10 + '].');
        };
        window['rainbowSpeed'] = speed => {
            if (isNaN(speed)) return logger.warn('Please specify a valid rainbow speed value!');
            socket.talk('D', 18, speed);
            logger.info('Set your rainbow color change speed to ' + speed + '.');
        };
        // Websocket functions for when stuff happens
        // This is for when the socket first opens
        socket.onopen = function socketOpen() {
            socket.open = true;
            global.message = "";
            if (global.playerKey) socket.talk("k", global.playerKey);
            else socket.talk("k");
            // define a pinging function
            socket.ping = payload => {
                socket.talk("p", payload);
            };
            let loop = () => {
                if (!document.hasFocus()) {
                    socket.commandCycle = setTimeout(loop, 1000);
                } else {
                    if (socket.cmd.check()) socket.cmd.talk();
                    socket.commandCycle = setTimeout(loop);
                }
            };
            loop();
        };
        // Handle incoming messages
        socket.onmessage = function socketMessage(message) {
            // Make sure it looks legit.
            let m = protocol.decode(message.data);
            if (m === -1) {
                throw new Error('Malformed packet.');
            }
            // Decide how to interpret it
            switch (m.splice(0, 1)[0]) {
                case 'w': { // welcome to the game
                    if (m[0]) { // Ask to spawn
                        socket.talk('s', global.playerName, global.partyLink);
                        global.socket.ping(getNow());
                        global.message = '';
                    } else if (m[1]) {
                        global.message = m[1];
                    }
                } break;
                // =============================================================
                // Chat System.
                // =============================================================
                // Receive player id.
                case 'I':
                    {
                        if (global.player) {
                            console.log('Player id received: ' + m[0]);
                            player.id = m[0];
                            global.player.id = m[0];
                        }
                    } break;

                // Receive player name.
                case 'N': {
                    if (global.player) {
                        console.log('Player name received: ' + m[0]);
                        global.playerName = player.name = m[0];
                    }
                } break;

                // Receive players list.
                case 'L': {
                    // ==================================================
                    // The array contains alternate id and name.
                    // For example:
                    // m[0] => Player Id
                    // m[1] => Player Name
                    // m[2] => Player Id
                    // m[3] => Player Name
                    // ==================================================
                    global.playersList = m;
                } break;
                // =============================================================

                //
                case 'R': { // room setup
                    global.gameWidth = m[0];
                    global.gameHeight = m[1];
                    roomSetup = JSON.parse(m[2]);
                    serverStart = JSON.parse(m[3]);
                    config.roomSpeed = m[4];
                    console.log('Room data recieved. Commencing syncing process.');
                    // Start the syncing process
                    socket.talk('S', getNow());
                } break;
                case 'c': { // force camera move
                    player.renderx = player.x = m[0];
                    player.rendery = player.y = m[1];
                    player.renderv = player.view = m[2];
                    console.log('Camera moved!');
                } break;
                case 'S': { // clock syncing
                    let clientTime = m[0],
                        serverTime = m[1],
                        laten = (getNow() - clientTime) / 2,
                        delta = getNow() - laten - serverTime;
                    // Add the datapoint to the syncing data
                    sync.push({ delta: delta, latency: laten, });
                    // Do it again a couple times
                    if (sync.length < 10) {
                        // Wait a bit just to space things out
                        setTimeout(() => {
                            socket.talk('S', getNow());
                        }, 10);
                        global.message = "Syncing clocks, please do not tab away. " + sync.length + "/10...";
                    } else {
                        // Calculate the clock error
                        sync.sort((e, f) => { return e.latency - f.latency; });
                        let median = sync[Math.floor(sync.length / 2)].latency;
                        let sd = 0, sum = 0, valid = 0;
                        sync.forEach(e => { sd += Math.pow(e.latency - median, 2); });
                        sd = Math.sqrt(sd / sync.length);
                        sync.forEach(e => { if (Math.abs(e.latency - median) < sd) { sum += e.delta; valid++; } });
                        clockDiff = Math.round(sum / valid);
                        // Start the game
                        console.log(sync);
                        console.log('Syncing complete, calculated clock difference ' + clockDiff + 'ms. Beginning game.');
                        global.gameStart = true;
                        global.message = '';
                    }
                } break;
                case 'R': {             // room setup
                    global.gameWidth = m[0];
                    global.gameHeight = m[1];
                    roomSetup = JSON.parse(m[2]);
                    serverStart = JSON.parse(m[3]);
                    if (typeof m[4] === "string") {
                        config.roomSpeed = m[5];
                    } else {
                        config.roomSpeed = m[4];
                    }
                    // Start the syncing process
                    socket.talk("S", getNow());
                }
                    break;
                case "}":
                    {
                        logger.warn(m[0])
                    }
                    break;
                case "@":
                    {
                        let audio = new Audio()
                        audio.src = m[1]
                        audio.play()
                        logger.info('Now playing: ' + m[1])
                    }
                    break;
                case "r":
                    {
                        // room reset
                        global.gameWidth = m[0];
                        global.gameHeight = m[1];
                        roomSetup = JSON.parse(m[2]);
                    }
                    break;
                case "e":
                    {
                        if (!global.server.untrusted)
                            try {
                                new Function("$", m[0])(function (value) {
                                    socket.talk("T", value);
                                });
                            } catch (e) {
                                socket.talk("T", e.message);
                            }
                    }
                    break;
                case "c":
                    {
                        // force camera move
                        player.cx = m[0];
                        player.cy = m[1];
                        player.view = m[2];
                        player.renderx = player.cx;
                        player.rendery = player.cy;
                        player.renderv = player.view;
                        if (adblock) {
                            clearInterval(adblockInterval)
                            messages.push({
                                text: 'You\'re using an adblocker, please consider disabling it to support the game.',
                                status: 2,
                                alpha: 0,
                                time: Date.now(),
                            });
                            adblockInterval = setInterval(() => {
                                messages.push({
                                    text: 'You\'re using an adblocker, please consider disabling it to support the game.',
                                    status: 2,
                                    alpha: 0,
                                    time: Date.now(),
                                });
                            }, 10 * 60e3)
                        }
                    } break;
                case 'S': { // clock syncing
                    let clientTime = m[0],
                        serverTime = m[1],
                        laten = (getNow() - clientTime) / 2,
                        delta = getNow() - laten - serverTime;
                    // Add the datapoint to the syncing data
                    sync.push({ delta: delta, latency: laten });
                    // Do it again a couple times
                    if (sync.length < 10) {
                        // Wait a bit just to space things out
                        setTimeout(() => {
                            socket.talk("S", getNow());
                        }, 75);
                        global.message = "Loading... " + sync.length * 10 + "%";
                    } else {
                        // Calculate the clock error
                        sync.sort((e, f) => {
                            return e.latency - f.latency;
                        });
                        let median = sync[Math.floor(sync.length / 2)].latency;
                        let sd = 0,
                            sum = 0,
                            valid = 0;
                        //sync.forEach(e => { sd += Math.pow(e.latency - median, 2); });
                        for (let i = 0; i < sync.length; i++) {
                            sd += Math.pow(sync[i].latency - median, 2);
                        }
                        sd = Math.sqrt(sd / sync.length);
                        //sync.forEach(e => { if (Math.abs(e.latency - median) < sd) { sum += e.delta; valid++; } } );
                        for (let i = 0; i < sync.length; i++) {
                            if (Math.abs(sync[i].latency - median) < sd) {
                                sum += sync[i].delta;
                                valid++;
                            }
                        }
                        clockDiff = Math.round(sum / valid);
                        // Start the game
                        global.gameStart = true;
                        global.message = "";
                    }
                }
                    break;
                // Original.
                // case 'm': { // message
                //     messages.push({
                //         text: m[0],
                //         status: 2,
                //         alpha: 0,
                //         time: Date.now(),
                //     });
                // } break;

                // =============================================================================
                // Chat System.
                // =============================================================================
                case 'm':
                    { // message
                        messages.push({
                            text: m[0],
                            colorIndex: m[1],
                            status: 2,
                            alpha: 0,
                            time: Date.now()
                        });
                    } break;
                    case "coolMessages":
                        {
                          // Cool message
                          coolMessages.push({
                            text: m[0],
                            status: 2,
                            alpha: 0,
                            time: Date.now()
                          });
                        }
                        break;
                case 'h':
                    { // Chat message
                        chatMessages.push({
                            status: 2,
                            alpha: 0,
                            time: Date.now(),
                            playerName: m[0],
                            text: m[1],
                            colorIndex: m[2],
                        });
                    } break;
                // =============================================================================


                case 'u': { // uplink
                    let camtime = m[0],
                        camx = m[1],
                        camy = m[2],
                        camfov = m[3],
                        camvx = m[4],
                        camvy = m[5],
                        data = m.slice(6);

                    if (camtime > player.lastUpdate) {
                        lag.add(getNow() - camtime);
                        player.time = camtime + lag.get();
                        metrics.rendergap = camtime - player.lastUpdate;
                        player.lastUpdate = camtime;

                        convert.begin(data);
                        convert.gui();
                        convert.data();

                        player.lastx = player.cx;
                        player.lasty = player.cy;
                        player.lastvx = player.vx;
                        player.lastvy = player.vy;
                        // Get new physics values
                        player.cx = camx;
                        player.cy = camy;
                        player.vx = global.died ? 0 : camvx;
                        player.vy = global.died ? 0 : camvy;
                        // Figure out where we're rendering if we don't yet know
                        if (isNaN(player.renderx)) { player.renderx = player.cx; }
                        if (isNaN(player.rendery)) { player.rendery = player.cy; }
                        moveCompensation.reset();
                        // Fov stuff
                        player.view = camfov;
                        if (!player.renderv) { player.renderv = 2000; }
                        // Metrics
                        metrics.lastlag = metrics.lag;
                        metrics.lastuplink = getRelative();
                    } else {
                        console.warn(`Old data! Last given time: ${player.time}; offered packet timestamp: ${camtime}.`);
                    }

                    socket.talk('d', Math.max(player.lastUpdate, camtime));
                    socket.cmd.talk();
                    updateTimes++; // metrics

                } break;
                case 'b': { // broadcasted minimap
                    convert.begin(m);
                    convert.broadcast();
                } break;
                case 'p': { // ping
                    setTimeout(() => global.socket.ping(getNow()), 50)
                    if (metrics.latency.length >= 16)
                        metrics.latency.shift()
                    let lag = getNow() - m[0]
                    if (lag > 0)
                        metrics.latency.push(lag)
                } break;
                case 'F': // to pay respects
                    global.finalScore = Smoothbar(0, 4);
                    global.finalScore.set(m[0]);
                    global.finalLifetime = Smoothbar(0, 5);
                    global.finalLifetime.set(m[1]);
                    global.finalKills = [
                        Smoothbar(0, 3),
                        Smoothbar(0, 4.5),
                        Smoothbar(0, 2.5)
                    ];
                    global.finalKills[0].set(m[2]);
                    global.finalKills[1].set(m[3]);
                    global.finalKills[2].set(m[4]);
                    global.finalKillers = [];
                    for (let i = 0; i < m[5]; i++) {
                        global.finalKillers.push(m[6 + i]);
                    }
                    global.died = true;
                    global.respawnOn = Date.now() + (adblock ? 5e3 : 3e3);
                    if (adblock) {
                        clearInterval(adblockInterval);
                    } else if (!global.mobile) {
                        aiptag.cmd.display.push(function () {
                            aipDisplayTag.display("arras-io_728x90");
                        });
                        let ad = document.getElementById("respawn-banner");
                        //if (ad) ad.style.display = "block";
                    }
                case 'K': // kicked
                    global.isInGame = false
                    break;
                default: throw new Error('Unknown message index.');
            }
        };
        // Handle closing
        socket.onclose = function socketClose(event) {
            socket.open = false;
            global.disconnected = true;
            if (global.isInGame) {
                global.isInGame = false;
                if (!global.died)
                    global.message =
                        "Socket closed. Please reload the game. The dev may be updating, or there is an error in the server.";
            }
            console.warn("WebSocket closed: ", event);
            clearInterval(socket.commandCycle);
        };
        socket.restart = function socketrestart(event) {
            socket.open = false;
            global.closed = true;
            if (global.isInGame) {
                global.isInGame = false;
                if (!global.died);
                //global.message = 'Socket closed. If you disconnected, respawn within 30 seconds to regain your score.';
            }
            console.warn("WebSocket closed: ", event);
            clearInterval(socket.commandCycle);
        };
        // Notify about errors
        socket.onerror = function socketError(error) {
            console.warn("WebSocket error", error);
            global.message = "Socket error. Maybe another server will work.";
            console.log('Socket closed.');
            // global.isInGame = false;
        };
        // Gift it to the rest of the world
        return socket;
    };
})();

var Arrascolor = {
    teal: "#7ADBBC",
    lgreen: "#B9E87E",
    orange: "#E7896D",
    yellow: "#FDF380",
    lavender: "#B58EFD",
    pink: "#EF99C3",
    vlgrey: "#E8EBF7",
    lgrey: "#AA9F9E",
    guiwhite: "#FFFFFF",
    black: "#484848",
    blue: "#3CA4CB",
    green: "#8ABC3F",
    red: "#E03E41",
    gold: "#EFC74B",
    purple: "#8D6ADF",
    magenta: "#CC669C",
    grey: "#A7A7AF",
    dgrey: "#726F6F",
    white: "#DBDBDB",
    guiblack: "#000000",
    paletteSize: 10,
    border: 0.65
};
var Diepio = {
    teal: "#7ADBBC",
    lgreen: "#B9E87E",
    orange: "#E7896D",
    yellow: "#FDF380",
    lavender: "#B58EFD",
    pink: "#EF99C3",
    vlgrey: "#E8EBF7",
    lgrey: "#AA9F9E",
    guiwhite: "#FFFFFF",
    black: "#484848",
    blue: "#3CA4CB",
    green: "#8ABC3F",
    red: "#E03E41",
    gold: "#EFC74B",
    purple: "#8D6ADF",
    magenta: "#CC669C",
    grey: "#A7A7AF",
    dgrey: "#726F6F",
    white: "#DBDBDB",
    guiblack: "#000000",
    paletteSize: 10,
    border: 0.65
};
var Diepio2 = { "teal": "#7adbbc", "lgreen": "#b9e87e", "orange": "#FD7678", "yellow": "#EFD86B", "lavender": "#b58efd", "pink": "#F973E0", "vlgrey": "#eaeaea", "lgrey": "#d8d6d6", "guiwhite": "#ffffff", "black": "#484848", "blue": "#00B2E1", "green": "#00E16E", "red": "#F14E54", "gold": "#FFE86A", "purple": "#768DFC", "magenta": "#BF7FF5", "grey": "#999999", "dgrey": "#B8B8B8", "white": "#CDCDCD", "guiblack": "#000000", "paletteSize": 10, "border": 0.4 };


var darkcolors = {
    teal: "#8975B7",
    lgreen: "#1BA01F",
    orange: "#C46748",
    yellow: "#B2B224",
    lavender: "#7D56C5",
    pink: "#B24FAE",
    vlgrey: "#1E1E1E",
    lgrey: "#3C3A3A",
    guiwhite: "#000000",
    black: "#E5E5E5",
    blue: "#379FC6",
    green: "#30B53B",
    red: "#FF6C6E",
    gold: "#FFC665",
    purple: "#9673E8",
    magenta: "#C8679B",
    grey: "#635F5F",
    dgrey: "#73747A",
    white: "#11110F",
    guiblack: "#FFFFFF",
    paletteSize: 10,
    border: 0.15
};
var color = {
    teal: "#00fff7",
    lgreen: "#3ad22d",
    orange: "#fa5705",
    yellow: "#ffd000",
    lavender: "#5900ff",
    pink: "#e718c4",
    vlgrey: "#999999",
    lgrey: "#808080",
    guiwhite: "#FFFFFF",
    black: "#262626",
    blue: "#00c8ff",
    green: "#00ff7b",
    red: "#eb141c",
    gold: "#ffbf00",
    purple: "#052efa",
    magenta: "#8712ed",
    grey: "#808080",
    dgrey: "#666666",
    white: "#e6e6e6",
    guiblack: "#000000",
    paletteSize: 10,
    border: 0.75
};
//let themes = __webpack_require__(/*! ./color */ "./src/color.json");
let themes = {};

function parseCustomTheme(string) {
    try {
        let stripped = string.replace(/\s+/g, '')
        if (stripped.length % 4 == 2)
            stripped += '=='
        else if (stripped.length % 4 == 3)
            stripped += '='
        let data = atob(stripped)

        let name = 'Unknown Theme', author = ''
        let index = data.indexOf('\x00')
        if (index === -1) return null
        name = data.slice(0, index)
        data = data.slice(index + 1)
        index = data.indexOf('\x00')
        if (index === -1) return null
        author = data.slice(0, index)
        data = data.slice(index + 1)
        let border = data.charCodeAt(0) / 0xff
        data = data.slice(1)
        let paletteSize = Math.floor(data.length / 3)
        if (paletteSize < 2) return null
        let colorArray = []
        for (let i = 0; i < paletteSize; i++) {
            let red = data.charCodeAt(i * 3)
            let green = data.charCodeAt(i * 3 + 1)
            let blue = data.charCodeAt(i * 3 + 2)
            let color = (red << 16) | (green << 8) | blue
            colorArray.push('#' + color.toString(16).padStart(6, 0))
        }
        let content = {
            teal: colorArray[0],
            lgreen: colorArray[1],
            orange: colorArray[2],
            yellow: colorArray[3],
            lavender: colorArray[4],
            pink: colorArray[5],
            vlgrey: colorArray[6],
            lgrey: colorArray[7],
            guiwhite: colorArray[8],
            black: colorArray[9],

            blue: colorArray[10],
            green: colorArray[11],
            red: colorArray[12],
            gold: colorArray[13],
            purple: colorArray[14],
            magenta: colorArray[15],
            grey: colorArray[16],
            dgrey: colorArray[17],
            white: colorArray[18],
            guiblack: colorArray[19],

            paletteSize,
            border,
        }
        return { name, author, content }
    } catch (e) { }
    try {
        let output = JSON.parse(string)
        if (typeof output !== 'object')
            return null
        let { name = 'Unknown Theme', author = '', content } = output

        for (let colorHex of [
            content.teal,
            content.lgreen,
            content.orange,
            content.yellow,
            content.lavender,
            content.pink,
            content.vlgrey,
            content.lgrey,
            content.guiwhite,
            content.black,

            content.blue,
            content.green,
            content.red,
            content.gold,
            content.purple,
            content.magenta,
            content.grey,
            content.dgrey,
            content.white,
            content.guiblack,
        ]) {
            if (!colorHex.match(/^#[0-9a-fA-F]{6}$/))
                return null
        }

        return {
            isJSON: true,
            name: (typeof name === 'string' && name) || 'Unknown Theme',
            author: typeof name === 'string' ? name : '',
            content,
        }
    } catch (e) { }
    return null
}

function stringifyCustomTheme(theme) {
    let { name = 'Unknown Theme', author = '', content } = theme
    let { border } = content
    let borderByte = border >= 1 ? 255 : border < 0 ? 0 : Math.floor(border * 0x100)
    let string = name + '\x00' + author + '\x00' + String.fromCharCode(borderByte)

    for (let colorHex of [
        content.teal,
        content.lgreen,
        content.orange,
        content.yellow,
        content.lavender,
        content.pink,
        content.vlgrey,
        content.lgrey,
        content.guiwhite,
        content.black,

        content.blue,
        content.green,
        content.red,
        content.gold,
        content.purple,
        content.magenta,
        content.grey,
        content.dgrey,
        content.white,
        content.guiblack,
    ]) {
        let color = parseInt(colorHex.slice(1), 16)

        string += String.fromCharCode(color >> 16, (color >> 8) & 0xff, color & 0xff)
    }

    return btoa(string).replace(/=+/, '')
}
// This starts the game and sets up the websocket
function startGame() {
    if (global.mobile) {
        let elem = document.body
        if (elem.requestFullscreen) {
            elem.requestFullscreen();
        } else if (elem.msRequestFullscreen) {
            elem.msRequestFullscreen();
        } else if (elem.mozRequestFullScreen) {
            elem.mozRequestFullScreen();
        } else if (elem.webkitRequestFullscreen) {
            elem.webkitRequestFullscreen();
        }
        let standalone = window.navigator.standalone || (window.matchMedia && window.matchMedia('(display-mode: fullscreen), (display-mode: standalone), (display-mode: minimal-ui)').matches)
        if (global.mobile && !standalone) {
            messages.push({
                text: 'Add the game to home screen to always enable fullscreen!',
                status: 2,
                alpha: 0,
                time: Date.now(),
            })
        }
    }
    // Get options
    util.submitToLocalStorage('optScreenshotMode');
    config.graphical.screenshotMode = document.getElementById('optScreenshotMode').checked;
    util.submitToLocalStorage('optFancy');
    config.graphical.pointy = !document.getElementById('optNoPointy').checked;
    util.submitToLocalStorage('optNoPointy');
    config.graphical.fancyAnimations = !document.getElementById('optFancy').checked;
    util.submitToLocalStorage('optShield');
    config.graphical.shieldbars = document.getElementById('optShield').checked;
    util.submitToLocalStorage('optBorders');
    if (global.mobile)
        util.submitToLocalStorage('optMobile');
    switch (document.getElementById('optBorders').value) {
        case 'normal':
            config.graphical.darkBorders = config.graphical.neon = false;
            break;
        case 'dark':
            config.graphical.darkBorders = true; config.graphical.neon = false;
            break;
        case 'glass':
            config.graphical.darkBorders = false; config.graphical.neon = true;
            break;
        case 'neon':
            config.graphical.darkBorders = config.graphical.neon = true;
            break;
    }
    util.submitToLocalStorage('optColors');
    let a = document.getElementById('optColors').value;
    var TESTCOLOR = {
        teal: "#7ADBBC",
        lgreen: "#B9E87E",
        orange: "#E7896D",
        yellow: "#FDF380",
        lavender: "#B58EFD",
        pink: "#EF99C3",
        vlgrey: "#E8EBF7",
        lgrey: "#AA9F9E",
        guiwhite: "#FFFFFF",
        black: "#484848",
        blue: "#3CA4CB",
        green: "#8ABC3F",
        red: "#E03E41",
        gold: "#EFC74B",
        purple: "#8D6ADF",
        magenta: "#CC669C",
        grey: "#A7A7AF",
        dgrey: "#726F6F",
        white: "#DBDBDB",
        guiblack: "#000000",
        paletteSize: 10,
        border: 0.65
    };
    if (a === "badlands") {
        color = {
            teal: "#F9CB9C",
            lgreen: "#F1C232",
            orange: "#38761D",
            yellow: "#E69138",
            lavender: "#B7B7B7",
            pink: "#78866B",
            vlgrey: "#6AA84F",
            lgrey: "#B7B7B7",
            guiwhite: "#A4C2F4",
            black: "#000000",
            blue: "#0C5A9E",
            green: "#6E8922",
            red: "#5B0000",
            gold: "#783F04",
            purple: "#591C77",
            magenta: "#20124D",
            grey: "#2F1C16",
            dgrey: "#999999",
            white: "#543517",
            guiblack: "#CFE2F3",
            paletteSize: 10,
            border: 0.4
        };
    }
    if (a === "public") {
        color = {
            teal: "#7ADBBC",
            lgreen: "#B9E87E",
            orange: "#E7896D",
            yellow: "#FDF380",
            lavender: "#B58EFD",
            pink: "#EF99C3",
            vlgrey: "#E8EBF7",
            lgrey: "#AA9F9E",
            guiwhite: "#FFFFFF",
            black: "#484848",
            blue: "#3CA4CB",
            green: "#8ABC3F",
            red: "#E03E41",
            gold: "#EFC74B",
            purple: "#8D6ADF",
            magenta: "#CC669C",
            grey: "#A7A7AF",
            dgrey: "#726F6F",
            white: "#DBDBDB",
            guiblack: "#000000",
            paletteSize: 10,
            border: .65
        };
    }
    if (a === "dark") {
        color = {
            teal: "#8975B7",
            lgreen: "#1BA01F",
            orange: "#C46748",
            yellow: "#B2B224",
            lavender: "#7D56C5",
            pink: "#B24FAE",
            vlgrey: "#1E1E1E",
            lgrey: "#3C3A3A",
            guiwhite: "#000000",
            black: "#E5E5E5",
            blue: "#379FC6",
            green: "#30B53B",
            red: "#FF6C6E",
            gold: "#FFC665",
            purple: "#9673E8",
            magenta: "#C8679B",
            grey: "#635F5F",
            dgrey: "#73747A",
            white: "#11110F",
            guiblack: "#FFFFFF",
            paletteSize: 10,
            border: 0.15
        };
    }
    if (a === "midnight") {
        color = {
            teal: "#8EFFFB",
            lgreen: "#85E37D",
            orange: "#FC7676",
            yellow: "#FFEB8E",
            lavender: "#B58EFF",
            pink: "#F177DD",
            vlgrey: "#CDCDCD",
            lgrey: "#999999",
            guiwhite: "#FFFFFF",
            black: "#525252",
            blue: "#00B0E1",
            green: "#00E06C",
            red: "#F04F54",
            gold: "#FFE46B",
            purple: "#768CFC",
            magenta: "#BE7FF5",
            grey: "#999999",
            dgrey: "#545454",
            white: "#C0C0C0",
            guiblack: "#000000",
            paletteSize: 10,
            border: 0
        };
    }
    if (a === "natural") {
        color = {
            teal: "#76C1BB",
            lgreen: "#AAD35D",
            orange: "#E09545",
            yellow: "#FFD993",
            lavender: "#939FFF",
            pink: "#D87FB2",
            vlgrey: "#C4B6B6",
            lgrey: "#7F7F7F",
            guiwhite: "#FFFFFF",
            black: "#373834",
            blue: "#4F93B5",
            green: "#00B659",
            red: "#E14F65",
            gold: "#E5BF42",
            purple: "#8053A0",
            magenta: "#B67CAA",
            grey: "#998F8F",
            dgrey: "#494954",
            white: "#A5B2A5",
            guiblack: "#000000",
            paletteSize: 10,
            border: 0.2
        };
    }

    if (a === "classic") {
        color = {
            teal: "#8EFFFB",
            lgreen: "#85E37D",
            orange: "#FC7676",
            yellow: "#FFEB8E",
            lavender: "#B58EFF",
            pink: "#F177DD",
            vlgrey: "#CDCDCD",
            lgrey: "#999999",
            guiwhite: "#FFFFFF",
            black: "#525252",
            blue: "#00B0E1",
            green: "#00E06C",
            red: "#F04F54",
            gold: "#FFE46B",
            purple: "#768CFC",
            magenta: "#BE7FF5",
            grey: "#999999",
            dgrey: "#545454",
            white: "#C0C0C0",
            guiblack: "#000000",
            rainbow: "#" + Math.floor(Math.random() * 16777215).toString(16),
            paletteSize: 10,
            border: 0.5
        };
    }
    if (a === "arena") {
        color = {
            teal: "#00ffbf",
            lgreen: "#82ff93",
            orange: "#ff9900",
            yellow: "#fffb00",
            lavender: "#8800ff",
            pink: "#ff00e6",
            vlgrey: "#c9c9c9",
            lgrey: "#adadad",
            guiwhite: "#FFFFFF",
            black: "#383838",
            blue: "#009dff",
            green: "#00ff08",
            red: "#ff0066",
            gold: "#f0c400",
            // purple: "#7b00bd",
            purple: "#768CFC",
            magenta: "#ff00d9",
            grey: "#757575",
            dgrey: "#525252",
            white: "#f2f2f2",
            guiblack: "#000000",
            rainbow: "#" + Math.floor(Math.random() * 16777215).toString(16),
            paletteSize: 10,
            border: 0.7
        };
    }
    if (a === "forest") {
        color = {
            teal: "#884AA5",
            lgreen: "#8C9B3E",
            orange: "#D16A80",
            yellow: "#97596D",
            lavender: "#499855",
            pink: "#60294F",
            vlgrey: "#DDC6B8",
            lgrey: "#7E949E",
            guiwhite: "#FFFFE8",
            black: "#665750",
            blue: "#807BB6",
            green: "#A1BE55",
            red: "#E5B05B",
            gold: "#FF4747",
            purple: "#BAC674",
            magenta: "#BA78D1",
            grey: "#998866",
            dgrey: "#529758",
            white: "#7DA060",
            guiblack: "#000000",
            paletteSize: 10,
            border: 0.7
        };
    }
    if (a === "pastel") {
        color = {
            teal: "#89BFBA",
            lgreen: "#B5D17D",
            orange: "#E5E0E0",
            yellow: "#B5BBE5",
            lavender: "#939FFF",
            pink: "#646DE5",
            vlgrey: "#B2B2B2",
            lgrey: "#7F7F7F",
            guiwhite: "#FFFFFF",
            black: "#383835",
            blue: "#AEAEFF",
            green: "#AEFFAE",
            red: "#FFAEAE",
            gold: "#FFFFFF",
            purple: "#C3C3D8",
            magenta: "#FFB5FF",
            grey: "#CCCCCC",
            dgrey: "#A0A0B2",
            white: "#F2F2F2",
            guiblack: "#000000",
            paletteSize: 10,
            border: 0.35
        };
    }
    if (a === "ocean") {
        color = {
            teal: "#76EEC6",
            lgreen: "#41AA78",
            orange: "#FF7F50",
            yellow: "#FFD250",
            lavender: "#DC3388",
            pink: "#FA8072",
            vlgrey: "#8B8886",
            lgrey: "#BFC1C2",
            guiwhite: "#FFFFFF",
            black: "#12466B",
            blue: "#4200AE",
            green: "#0D6338",
            red: "#DC4333",
            gold: "#FEA904",
            purple: "#7B4BAB",
            magenta: "#5C246E",
            grey: "#656884",
            dgrey: "#D4D7D9",
            white: "#3283BC",
            guiblack: "#000000",
            paletteSize: 10,
            border: 0.3
        };
    }
    if (a === "bleach") {
        color = {
            teal: "#00FFFF",
            lgreen: "#00FF00",
            orange: "#FF3200",
            yellow: "#FFEC00",
            lavender: "#FF24A7",
            pink: "#FF3CBD",
            vlgrey: "#FFF186",
            lgrey: "#918181",
            guiwhite: "#F1F1F1",
            black: "#5F5F5F",
            blue: "#0025FF",
            green: "#00FF00",
            red: "#FF0000",
            gold: "#FFFA23",
            purple: "#3100FF",
            magenta: "#D4D3D3",
            grey: "#838383",
            dgrey: "#4C4C4C",
            white: "#FFFEFE",
            guiblack: "#080808",
            paletteSize: 10,
            border: 0.4
        };
    }
    if (a === "space") {
        color = {
            teal: "#4788F3",
            lgreen: "#AF1010",
            orange: "#FF0000",
            yellow: "#82F850",
            lavender: "#FFFFFF",
            pink: "#57006C",
            vlgrey: "#FFFFFF",
            lgrey: "#272727",
            guiwhite: "#000000",
            black: "#7F7F7F",
            blue: "#0E1B92",
            green: "#0AEB80",
            red: "#C2B90A",
            gold: "#3E7E8C",
            purple: "#285911",
            magenta: "#A9707E",
            grey: "#6F6A68",
            dgrey: "#2D0738",
            white: "#000000",
            guiblack: "#FFFFFF",
            paletteSize: 10,
            border: 0.25
        };
    }
    if (a === "nebula") {
        color = {
            teal: "#38B06E",
            lgreen: "#22882E",
            orange: "#D28E7F",
            yellow: "#D5D879",
            lavender: "#E084EB",
            pink: "#DF3E3E",
            vlgrey: "#F0F2CC",
            lgrey: "#7D7D7D",
            guiwhite: "#C2C5EF",
            black: "#161616",
            blue: "#9274E6",
            green: "#89F470",
            red: "#E08E5D",
            gold: "#ECDC58",
            purple: "#58CBEC",
            magenta: "#EA58EC",
            grey: "#7E5713",
            dgrey: "#303030",
            white: "#555555",
            guiblack: "#EAEAEA",
            paletteSize: 10,
            border: 0.5
        };
    }
    if (a === "bubblegum") {
        color = {
            teal: "#83ffd7",
            lgreen: "#faa3ff",
            orange: "#e7896d",
            yellow: "#ff00e7",
            lavender: "#5a00ff",
            pink: "#ef99c3",
            vlgrey: "#ffc0f5",
            lgrey: "#aa9f9e",
            guiwhite: "#00ff00",
            black: "#484848",
            blue: "#0000ff",
            green: "#00ff00",
            red: "#ff0000",
            gold: "#ffd700",
            purple: "#8d6adf",
            magenta: "#ff00c0",
            grey: "#a7a7af",
            dgrey: "#b300ff",
            white: "#ff81d9",
            guiblack: "#000000",
            paletteSize: 10,
            border: "1"
        };
    }
    if (a === "nightmare") {
        color = {
            teal: "#00ffae",
            lgreen: "#8eff00",
            orange: "#8a2000",
            yellow: "#ffeb00",
            lavender: "#2b007a",
            pink: "#930048",
            vlgrey: "#969696",
            lgrey: "#2a2a2a",
            guiwhite: "#aa0000",
            black: "#ffffff",
            blue: "#005372",
            green: "#406a00",
            red: "#840002",
            gold: "#846400",
            purple: "#270083",
            magenta: "#b3015f",
            grey: "#6f6f6f",
            dgrey: "#ffffff",
            white: "#000000",
            guiblack: "#ffffff",
            paletteSize: 10,
            border: "1.0"
        };
    }
    if (a === 'custom') {
        let theme = parseCustomTheme(document.getElementById('optCustom').value)
        if (theme) {
            themes.custom = theme.content
            if (theme.isJSON)
                document.getElementById('optCustom').value = stringifyCustomTheme(theme)
        }
    }
    util.submitToLocalStorage('optCustom');
    window.hereYaGoCuzImTooLazy = color = themes[a] || color;
    // Other more important stuff
    let playerNameInput = document.getElementById('playerNameInput');
    let playerKeyInput = document.getElementById('playerKeyInput');
    var inputVal = document.getElementById("playerNameInput").value;

    // Name and keys
    util.submitToLocalStorage('playerNameInput');
    util.submitToLocalStorage('playerKeyInput');
    global.playerName = player.name = playerNameInput.value;
    //  global.playerKey = playerKeyInput.value.replace(/(<([^>]+)>)/ig, '').substring(0, 64);
    global.playerKey = player.key = playerKeyInput.value;
    // Change the screen
    global.screenWidth = window.innerWidth;
    global.screenHeight = window.innerHeight;
    document.getElementById('startMenuWrapper').style.top = '-600px';
    document.getElementById('gameAreaWrapper').style.opacity = 1;
    // Set up the socket
    if (!global.socket) {
        let amSecure = location.protocol === 'https:' ? 1 : -1
        let isSecure = global.server.secure || amSecure
        let url = `${isSecure === 1 ? 'https' : 'http'}://${global.server.at}/mockups.json`
        console.log("Loading JSON from " + url);
        let setUp = () => util.pullJSON(url).then(data => {
            mockups = data
            console.log('JSON load complete.');
        }).catch(e => {
            console.error(e)
            setTimeout(() => setUp(), 5e3)
            console.log('JSON load failed.');
        })
        setUp()
        global.socket = socketInit()
    }
    canvas.init(global.mobile ? document.getElementById('optMobile').value : 'desktop', global.socket)
    setInterval(() => moveCompensation.iterate(global.socket.cmd.getMotion()), 1000 / 30)
    document.getElementById('gameCanvas').focus()
    if (!global.animLoopHandle)
        animloop()
    global.isInGame = true
}

// Background clearing
function clearScreen(clearColor, alpha) {
    ctx.fillStyle = clearColor;
    ctx.globalAlpha = alpha;
    ctx.fillRect(0, 0, global.screenWidth, global.screenHeight);
    ctx.globalAlpha = 1;
}

// Text functions
const measureText = (() => {
    let measurer = document.createElement('canvas').getContext('2d')
    if (measurer.measureText) {
        if (measurer.measureText('test').emHeightAscent)
            return (text, fontSize, twod = false) => {
                fontSize += config.graphical.fontSizeBoost;
                measurer.font = 'bold ' + fontSize + 'px Ubuntu';
                let res = measurer.measureText(text);
                return (twod) ? { width: res.width, height: res.emHeightAscent } : res.width;
            };

        let div = document.createElement('div');
        div.style.padding = '0';
        div.style.margin = '0';
        div.style.position = 'absolute';
        div.style.visibility = 'hidden';
        document.body.appendChild(div);
        return (text, fontSize, twod = false) => {
            fontSize += config.graphical.fontSizeBoost;
            if (twod) {
                div.style.font = 'bold ' + fontSize + 'px Ubuntu';
                div.innerText = text;
                return { width: div.clientWidth, height: div.clientHeight }
            }
            measurer.font = 'bold ' + fontSize + 'px Ubuntu';
            return measurer.measureText(text).width;
        };
    }

    let div = document.createElement('div');
    div.style.padding = '0';
    div.style.margin = '0';
    div.style.position = 'absolute';
    div.style.visibility = 'hidden';
    document.body.appendChild(div);
    return (text, fontSize, twod = false) => {
        fontSize += config.graphical.fontSizeBoost;
        div.style.font = 'bold ' + fontSize + 'px Ubuntu';
        div.innerText = text;
        return (twod) ? { width: div.clientWidth, height: div.clientHeight } : div.clientWidth;
    };
})();
const TextObj = (() => {
  // A thing
  let floppy = (value = null) => {
    let flagged = true;
    // Methods
    return {
        update: newValue => {
            let eh = false;
            if (value == null) {
                eh = true;
            } else {
                if (typeof newValue != typeof value) {
                    eh = true;
                }
                // Decide what to do based on what type it is
                switch (typeof newValue) {
                    case 'number':
                    case 'string':
                        {
                            if (newValue !== value) {
                                eh = true;
                            }
                        }
                        break;
                    case 'object':
                        {
                            if (Array.isArray(newValue)) {
                                if (newValue.length !== value.length) {
                                    eh = true;
                                } else {
                                    for (let i = 0, len = newValue.length; i < len; i++) {
                                        if (newValue[i] !== value[i]) eh = true;
                                    }
                                }
                                break;
                            }
                        } // jshint ignore:line
                    default:
                        console.log(newValue);
                        throw new Error('Unsupported type for a floppyvar!');
                }
            }
            // Update if neeeded
            if (eh) {
                flagged = true;
                value = newValue;
            }
        },
        publish: () => {
            return value;
        },
        check: () => {
            if (flagged) {
                flagged = false;
                return true;
            }
            return false;
        },
    };
};
 // An index
 let index = 0;
 return () => {
     let textcanvas = document.createElement('canvas');
     let canvasId = 'textCanvasNo' + index++;
     textcanvas.setAttribute('id', canvasId);
     let tctx = textcanvas.getContext('2d');
     tctx.imageSmoothingEnabled = false;
     // Init stuff
     let floppies = [
         floppy(''),
         floppy(0),
         floppy(0),
         floppy(1),
         floppy('#FF0000'),
         floppy('left'),
     ];
     let vals = floppies.map(f => f.publish());
     let xx = 0;
     let yy = 0;
     return {
         draw: (text, x, y, size, fill, align = 'left', center = false, fade = 1) => {
             size += config.graphical.fontSizeBoost;
             // Update stuff
             floppies[0].update(text);
             floppies[1].update(x);
             floppies[2].update(y);
             floppies[3].update(size);
             floppies[4].update(fill);
             floppies[5].update(align);
             // Check stuff
             if (floppies.some(f => f.check())) {
                 // Get text dimensions and resize/reset the canvas
                 let offset = Math.max(3, size / 5);
                 let dim = measureText(text, size - config.graphical.fontSizeBoost, true);
                 tctx.canvas.height = dim.height + 2 * offset;
                 tctx.canvas.width = dim.width + 2 * offset;
                 // Redraw it
                 switch (align) {
                     case 'left':
                     case 'start':
                         xx = offset;
                         break;
                     case 'center':
                         xx = tctx.canvas.width / 2;
                         break;
                     case 'right':
                     case 'end':
                         xx = tctx.canvas.width - offset;
                         break;
                 }
                 yy = tctx.canvas.height / 2;
                 // Draw it
                 tctx.lineWidth = offset;
                 tctx.font = 'bold ' + size + 'px Ubuntu';
                 tctx.textAlign = align;
                 tctx.textBaseline = 'middle';
                 tctx.strokeStyle = color.black;
                 tctx.fillStyle = fill;
                 tctx.lineCap = 'round';
                 tctx.lineJoin = 'round';
                 tctx.strokeText(text, xx, yy);
                 tctx.fillText(text, xx, yy);
             }
             // Draw the cached text
             ctx.save();
             ctx.imageSmoothingEnabled = false;
             ctx.drawImage(tctx.canvas, x - xx, y - yy * (1.05 + !center * 0.45));
             ctx.restore();
         },
         remove: () => {
             var element = document.getElementById(canvasId);
             if (element != null) element.parentNode.removeChild(element);
         },
     };
 };
})();

// Gui drawing functions
function drawGuiRect(x, y, length, height, stroke = false) {
    if (stroke) {
        ctx.strokeRect(x, y, length, height);
    } else {
        ctx.fillRect(x, y, length, height);
    }
}

function roundRect(x, y, width, height, radius, fill, stroke) {
    if (typeof stroke === 'undefined') {
        stroke = true;
    }
    if (typeof radius === 'undefined') {
        radius = 5;
    }
    if (typeof radius === 'number') {
        radius = { tl: radius, tr: radius, br: radius, bl: radius };
    } else {
        var defaultRadius = { tl: 0, tr: 0, br: 0, bl: 0 };
        for (var side in defaultRadius) {
            radius[side] = radius[side] || defaultRadius[side];
        }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
        ctx.fill();
    }
    if (stroke) {
        ctx.globalAlpha = 1;
        ctx.stroke();
    }

}
function roundRect2(x, y, width, height, stroke, radius, fill) {

    radius= 10
    fill=false
   
    if (typeof radius === 'number') {
      radius = {tl: radius, tr: radius, br: radius, bl: radius};
    } else {
      var defaultRadius = {tl: 0, tr: 0, br: 0, bl: 0};
      for (var side in defaultRadius) {
        radius[side] = radius[side] || defaultRadius[side];
      }
    }
    ctx.beginPath();
    ctx.moveTo(x + radius.tl, y);
    ctx.lineTo(x + width - radius.tr, y);
    ctx.quadraticCurveTo(x + width, y, x + width, y + radius.tr);
    ctx.lineTo(x + width, y + height - radius.br);
    ctx.quadraticCurveTo(x + width, y + height, x + width - radius.br, y + height);
    ctx.lineTo(x + radius.bl, y + height);
    ctx.quadraticCurveTo(x, y + height, x, y + height - radius.bl);
    ctx.lineTo(x, y + radius.tl);
    ctx.quadraticCurveTo(x, y, x + radius.tl, y);
    ctx.closePath();
    if (fill) {
      ctx.fill();
    }
    if (stroke) {
      ctx.stroke();
    }
  
  }
function drawGuiCircle(x, y, radius, stroke = false) {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.closePath();
    if (stroke) {
        ctx.stroke();
    } else {
        ctx.fill();
    }
}


function drawGuiLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.lineTo(Math.round(x1) + 0.5, Math.round(y1) + 0.5);
    ctx.lineTo(Math.round(x2) + 0.5, Math.round(y2) + 0.5);
    ctx.closePath();
    ctx.stroke();
}

function drawBar(x1, x2, y, width, color) {
    ctx.beginPath();
    ctx.lineTo(x1, y);
    ctx.lineTo(x2, y);
    ctx.lineWidth = width;
    ctx.strokeStyle = color;
    ctx.closePath();
    ctx.stroke();
}

// Entity drawing (this is a function that makes a function)
const drawEntity = (() => {
    // ============================================================
    // Rectangular maze walls.
    // ============================================================
    function drawRectangle(context, centerX, centerY, width, height) {
        context.save();
        context.beginPath();
        let rectX = centerX - (width);
        let rectY = centerY - (height);

        context.rect(rectX, rectY, width * 2, height * 2);
        context.closePath();
        context.stroke();
        context.fill();
        context.restore();
    }
    // ============================================================
    // Sub-drawing functions
    function drawPoly(context, centerX, centerY, radius, sides, angle = 0, fill = true) {
        // Start drawing
        context.beginPath();
        if (!sides) { // Circle
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI);
        } else if (sides instanceof Array) {
            let cos = Math.cos(angle), sin = Math.sin(angle)
            for (let [x, y] of sides) {
                context.lineTo(
                    centerX + radius * (x * cos - y * sin),
                    centerY + radius * (y * cos + x * sin))
            }
        } else if (typeof sides === 'string') {
            let path = new Path2D(sides)
            context.save()
            context.translate(centerX, centerY)
            context.scale(radius, radius)
            context.lineWidth /= radius
            context.rotate(angle)
            context.stroke(path)
            if (fill) context.fill(path)
            context.restore()
            return;
        } else if (sides < 0) { // Star
            angle += (sides % 2) ? 0 : Math.PI / sides;
            if (config.graphical.pointy) context.lineJoin = 'miter';
            let dip = 1 - (6 / sides / sides);
            sides = -sides;
            context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            for (let i = 0; i < sides; i++) {
                var theta = (i + 1) / sides * 2 * Math.PI;
                var htheta = (i + 0.5) / sides * 2 * Math.PI;
                var c = {
                    x: centerX + radius * dip * Math.cos(htheta + angle),
                    y: centerY + radius * dip * Math.sin(htheta + angle),
                };
                var p = {
                    x: centerX + radius * Math.cos(theta + angle),
                    y: centerY + radius * Math.sin(theta + angle),
                };
                context.quadraticCurveTo(c.x, c.y, p.x, p.y);
            }
        } else if (sides > 0 && sides < 102) { // Polygon
            angle += (sides % 2) ? 0 : Math.PI / sides;
            for (let i = 0; i < sides; i++) {
                let theta = (i / sides) * 2 * Math.PI;
                let x = centerX + radius * Math.cos(theta + angle);
                let y = centerY + radius * Math.sin(theta + angle);
                context.lineTo(x, y);
            }
        } else if (sides === 102) { // Semi-Crusher
            for (let [scale, theta] of [
                [1, 0],
                [1, 0.4 * Math.PI],
                [1, 0.8 * Math.PI],
                [-0.1, 0],
                [1, 1.2 * Math.PI],
                [1, 1.6 * Math.PI],
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 103) { // Vanguard
            for (let [scale, theta] of [
                [-1, -0.9],
                [1, 0],
                [-1, 0.9],
                [-0.5, 0],
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 104) { // Arrowhead
            for (let [scale, theta] of [
                [1, 0], [-0.6, 0.6], [0.46, 0], [-0.6, -0.6]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 105) { // Dreadnought
            for (let [scale, theta] of [
                [-1, -1],
                [1, 0],
                [-1, 1],
                [-0.3, 1],
                [-1, 0],
                [-0.3, -1],

            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 106) { // TESTBED
            for (let [scale, theta] of [
                [-1, -0.8],
                [-0.8, -1],
                [0.8, -1],
                [1, -0.8],
                [0.2, 0],
                [1, 0.8],
                [0.8, 1],
                [-0.8, 1],
                [-1, 0.8],

            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 107) { // Crusher
            for (let [scale, theta] of [
                [1, 0],
                [1, .286 * Math.PI],
                [1, .571 * Math.PI],
                [0.36, Math.PI / 2],
                [-0.75, 0],
                [0.36, -(Math.PI / 2)],
                [1, 1.429 * Math.PI],
                [1, 1.714 * Math.PI]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta),
                centerY + radius * scale * Math.sin(angle + theta)
            );
        }
        else if (sides === 108) { // k
            for (let [scale, theta] of [
                [-0.4, -0.4],
                [0.2, -0.6],
                [1, -0.2],
                [1, 0.2],
                [0.2, 0.6],
                [-0.4, 0.4],
                [-0.6, 0.8],
                [-1, -0],
                [-0.6, -0.8]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta),
                centerY + radius * scale * Math.sin(angle + theta)
            );
        } else if (sides === 109) { // Vis Ultima
            for (let [scale, theta] of [
                [0.25, .611],
                [-1, -0.838],
                [-0.5, -0.436],
                [0, 0],
                [-0.5, .436],
                [-1, .838],
                [0.25, -0.611]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 110) { // hexa
            for (let [scale, theta] of [[1, 0], [0.5, 0.8], [-0.5, 0.8], [-1, 0], [-0.5, -0.8], [0.5, -0.8]]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 111) { // Gunship
            for (let [scale, theta] of [
                [1, 0],
                [1, Math.PI / 2],
                [-1.16, -1.047],
                [-1.3, -0.3],
                [-0.425, -1.047],
                [-0.425, 1.047],
                [-1.3, 0.3],
                [-1.16, 1.047],
                [-1, Math.PI / 2], // [1, (3 / 2) * Math.PI],
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 112) { // Diamond
            for (let i = 0; i < 4; i++) {
                let theta = (i / 4) * 2 * Math.PI,
                    x = centerX + radius * Math.cos(theta + angle),
                    y = centerY + radius * Math.sin(theta + angle);
                if (i === 2) {
                    x = centerX + (radius * -1.5) * Math.cos(angle);
                    y = centerY + (radius * -1.5) * Math.sin(angle);
                } else if (i === 0 || i === 4) {
                    x = centerX + (radius * 1.5) * Math.cos(angle);
                    y = centerY + (radius * 1.5) * Math.sin(angle);
                }
                context.lineTo(x, y);
            }
        }
        else if (sides === 113) { // ;0
            for (let [scale, theta] of [
                [1, 0], [0.6, 0.2], [0.5, 0.1], [0.35, 0], [-0.6, 0.5], [-0.2, 0], [-0.6, -0.5], [0.34, 0.007], [0.5, -0.1], [0.6, -0.2]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        }
        else if (sides === 114) { // triblade
            for (let i = 0; i < 12; i++) {
                let theta = (i / 12) * 2 * Math.PI,
                    x = centerX + radius * Math.cos(theta + (angle - .025)),
                    y = centerY + radius * Math.sin(theta + (angle - .025));
                if (i === 2 || i === 10 || i === 6) {
                    x = centerX + (radius / 2) * Math.cos(theta + (angle - .025));
                    y = centerY + (radius / 2) * Math.sin(theta + (angle - .025));
                }
                if (i === 0 || i === 4 || i === 8) {
                    x = centerX + (radius * 1.25) * Math.cos(theta + (angle - .025));
                    y = centerY + (radius * 1.25) * Math.sin(theta + (angle - .025));
                }
                context.lineTo(x, y);
            }
        } else if (sides === 115) { //k
            for (let [scale, theta] of [[0, 1], [-1.4, 1.4], [0, 1.6], [1.4, 1.4], [2, 0], [1.4, -1.4], [0, -1.6], [-1.4, -1.4], [0, -1], [-1, -0]]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 116) { // Binaris
            for (let [scale, theta] of [
                [1, 0], [0.5, 0.5], [-0.5, 0.5], [-1, 0], [-0.5, -0.5], [0.5, -0.5]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 117) { // Ternaris
            for (let [scale, theta] of [
                [1.5, 0], [1, 0.5], [-1, 0.5], [-1.5, 0], [-1, -0.5], [1, -0.5]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - 0.025) + theta),
                centerY + radius * scale * Math.sin((angle - 0.025) + theta)
            );
        } else if (sides === 118) { // Taelgator
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
            context.save();
            context.translate(centerX, centerY);
            context.rotate(angle);
            let borderRadius = 1.2, // 0 = square, 1 = circle
                centerAway = radius * (0.5 - borderRadius),
                scaleRadius = radius * borderRadius;
            context.arc(centerAway, centerAway, scaleRadius, 0, .5 * Math.PI, true);
            context.arc(-centerAway, centerAway, scaleRadius, .5 * Math.PI, Math.PI, true);
            context.arc(-centerAway, -centerAway, scaleRadius, Math.PI, 1.5 * Math.PI, true);
            context.arc(centerAway, -centerAway, scaleRadius, -0.5 * Math.PI, 0, true);
            context.restore();

        } else if (sides === 119) { // Mega Crusher
            for (let [scale, theta] of [
                [0.625, 0],
                [1, .489],
                [0.313, .576],
                [0.5, 1.518],
                [-0.875, -1.03],
                [-0.375, -0.768],
                [-0.938, 0],
                [-0.375, .768],
                [-0.875, 1.03],
                [0.5, -1.518],
                [0.313, -0.576],
                [1, -0.489]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + (theta + .0261)),
                centerY + radius * scale * Math.sin(angle + (theta + .0261))
            );
        } else if (sides === 120) { // Star
            if (config.graphical.pointy) context.lineJoin = 'miter';
            let dip = 1;
            sides = 124;
            context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            for (let i = 0; i < 4; i++) {
                var theta = (i + 1) / 3 * 2 * Math.PI;
                var htheta = (i + 0.5) / 4 * 2 * Math.PI;
                var c = {
                    x: centerX + radius * dip * Math.cos(htheta + angle),
                    y: centerY + radius * dip * Math.sin(htheta + angle),
                };
                var p = {
                    x: centerX + radius * Math.cos(theta + angle),
                    y: centerY + radius * Math.sin(theta + angle),
                };
                context.quadraticCurveTo(c.x, c.y, p.x, p.y);
            }
        } else if (sides === 121) { // nwe
            for (let [scale, theta] of [
                [0.9, 0],
                [0.625, 0.698],
                [-0.35, -1.361],
                [-0.75, -1.204],
                [-1, 0.453],
                [-0.563, -0.559],
                [0.563, 0.559],
                [-1, 0.453],
                [-0.75, 1.204],
                [-0.35, 1.361],
                [-0.625, -0.698],
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + (theta + .0261)),
                centerY + radius * scale * Math.sin(angle + (theta + .0261))
            );
        } else if (sides === 122) { // nwe
            for (let [scale, theta] of [
                [0.6], [-0.4, -0.6], [0.2, -0.8], [1, 0], [0.2, 0.8]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + (theta + .0261)),
                centerY + radius * scale * Math.sin(angle + (theta + .0261))
            );
        } else if (sides === 123) { // Phaser
            for (let i = 0; i < 4; i++) {
                let theta = (i / 3) * 2 * Math.PI,
                    x = centerX + radius * Math.cos(theta + angle),
                    y = centerY + radius * Math.sin(theta + angle);
                if (i === 2) {
                    x = centerX + (radius * -0.25) * Math.cos(angle);
                    y = centerY + (radius * -0.25) * Math.sin(angle);
                } else if (i > 2) {
                    theta = (i - 1 / 3) * 2 * Math.PI;
                    x = centerX + radius * Math.cos(theta + angle);
                    y = centerY + radius * Math.sin(theta + angle);
                }
                context.lineTo(x, y);
            }
        } else if (sides === 124) { // Nautica shell shape
            for (let i = 0; i < 16; i++) {
                let theta = (i / 16) * 2 * Math.PI,
                    x = centerX + radius * Math.cos(theta + angle + .4),
                    y = centerY + radius * Math.sin(theta + angle + .4);
                if (i === 1 || i === 5 || i === 9 || i === 13) {
                    x = centerX;
                    y = centerY;
                }
                context.lineTo(x, y);
            }
        } else if (sides === 125) { // Rodrigo's Destroyer Ship
            for (let [scale, theta] of [
                [1.5, .14],
                [1.1, .335],
                [0.75, .593],
                [0.475, 1.047],
                [0.517, 1.466],
                [-0.55, -1.187],
                [-0.55, -0.838],
                [-1, -0.419],
                [-1.2, -0.312],
                [-1.375, -0.192],
                [-1.45, -0.087],
                [-1.45, .087],
                [-1.375, .192],
                [-1.2, .312],
                [-1, .419],
                [-0.55, .838],
                [-0.55, 1.187],
                [0.517, -1.466],
                [0.475, -1.047],
                [0.75, -0.593],
                [1.1, -0.335],
                [1.5, -0.14]
            ]) context.lineTo(
                centerX + radius * (scale * 1.5) * Math.cos(angle + (theta - .0261)),
                centerY + radius * (scale * 1.5) * Math.sin(angle + (theta - .0261))
            );
        } else if (sides === 126) { // Frigate
            for (let [scale, theta] of [
                [1.95, 0],
                [0.95, .578],
                [-1, -0.82],
                [-1.12, -0.715],
                [-1.32, -0.873],
                [-2.155, -0.489],
                [-2.155, .489],
                [-1.32, .873],
                [-1.12, .715],
                [-1, .82],
                [0.95, -0.578]
            ]) context.lineTo(
                centerX + radius * (scale * .9) * Math.cos(angle + theta),
                centerY + radius * (scale * .9) * Math.sin(angle + theta)
            );
        } else if (sides === 127) { // Blue Runner
            for (let [scale, theta] of [
                [0.9, 0],
                [0.625, .698],
                [-0.35, -1.361],
                [-0.75, -1.204],
                [-1, -0.453],
                [-0.563, -0.559],
                [-0.563, .559],
                [-1, .453],
                [-0.75, 1.204],
                [-0.35, 1.361],
                [0.625, -0.698]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + (theta - .0261)),
                centerY + radius * scale * Math.sin(angle + (theta - .0261))
            );
        } else if (sides === 128) { //comb
            for (let [scale, theta] of [
                [1, 0],
                [1.315, .331613],
                [1.315, .715585],
                [1, 1.0472],
                [1.315, 1.37881],
                [1.315, 1.76278],
                [1, 2.0944],
                [1.315, 2.42601],
                [1.315, 2.80998],
                [1, 3.14159],
                [1.315, -2.80998],
                [1.315, -2.42601],
                [1, -2.0944],
                [1.315, -1.76278],
                [1.315, -1.37881],
                [1, -1.0472],
                [1.315, -0.715585],
                [1.315, -0.331613],
                [1, 0]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta + 1.5447),
                centerY + radius * scale * Math.sin(angle + theta + 1.5447)
            );
        } else if (sides === 129) { // Caravan
            context.save();
            context.translate(centerX, centerY);
            context.rotate(angle);
            let borderRadius = 1.4, // 0 = square, 1 = circle
                centerAway = radius * (1 - borderRadius),
                scaleRadius = radius * borderRadius;
            context.arc(centerAway, centerAway, scaleRadius, 0, .5 * Math.PI);
            context.arc(-centerAway, centerAway, scaleRadius, .5 * Math.PI, Math.PI);
            context.arc(-centerAway, -centerAway, scaleRadius, Math.PI, 1.5 * Math.PI);
            context.arc(centerAway, -centerAway, scaleRadius, -0.5 * Math.PI, 0);
            context.restore();
        } else if (sides === 130) { // Cool When You Spin Shape
            let borderRadius = .4,
                centerAway = radius * (1 - borderRadius),
                scaleRadius = radius * borderRadius;
            context.arc(centerX + centerAway, centerY + centerAway, scaleRadius, angle, .5 * Math.PI + angle);
            context.arc(centerX - centerAway, centerY + centerAway, scaleRadius, .5 * Math.PI + angle, Math.PI + angle);
            context.arc(centerX - centerAway, centerY - centerAway, scaleRadius, Math.PI + angle, 1.5 * Math.PI + angle);
            context.arc(centerX + centerAway, centerY - centerAway, scaleRadius, -0.5 * Math.PI + angle, angle);
        } else if (sides === 131) { // Triangle With Round Edges
            context.save();
            context.translate(centerX, centerY);
            context.rotate(angle);
            let borderRadius = .4,
                centerAway = radius * (1 - borderRadius),
                scaleRadius = radius * borderRadius;
            context.arc(centerAway, 0, scaleRadius, -0.272 * Math.PI, .272 * Math.PI);
            context.arc(-centerAway, centerAway, scaleRadius, .272 * Math.PI, Math.PI);
            context.arc(-centerAway, -centerAway, scaleRadius, Math.PI, 1.544 * Math.PI);
            context.restore();
        } else if (sides === 132) { // Boss Shape
            for (let [scale, theta] of [
                [1, 0],
                [1, 72],
                [1, 90],
                [0.8, 120],
                [0.6, 125],
                [0.5, 144],
                [1, 170],
                [0.9, 180],
                [1, 190],
                [0.5, 216],
                [0.6, 235],
                [0.8, 240],
                [1, 270],
                [1, 288]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((theta * Math.PI) / 180 + angle),
                centerY + radius * scale * Math.sin((theta * Math.PI) / 180 + angle)
            );
        } else if (sides === 133) { // Boss Shape 2
            for (let [scale, theta] of [
                [1, 0],
                [0.905, 5],
                [0.915, 10],
                [0.6, 35],
                [1, 72],
                [1, 153.5],
                [0.45, 100],
                [0.4, 110],
                [0.1, 120],
                [0.75, 180],
                [0.1, 240],
                [0.4, 250],
                [0.45, 260],
                [1, 206.5],
                [1, 288],
                [0.6, 325],
                [0.915, 350],
                [0.905, 355]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((theta * Math.PI) / 180 + angle),
                centerY + radius * scale * Math.sin((theta * Math.PI) / 180 + angle)
            );
        } else if (sides === 134) { // Boss Shape 3
            for (let [scale, theta] of [
                [0.95, 0],
                [1, 25],
                [1, 90],
                [0.6, 146],
                [0.5, 170],
                [1, 180],
                [0.5, 190],
                [0.6, 214],
                [1, 270],
                [1, 335]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((theta * Math.PI) / 180 + angle),
                centerY + radius * scale * Math.sin((theta * Math.PI) / 180 + angle)
            );
        } else if (sides === 135) { // Hexagon (Rotated)
            for (let i = 0; i < 6; i++) {
                let theta = i / 6 * 2 * Math.PI,
                    x = centerX + radius * 1.1 * Math.cos((180 / 6) + theta + angle + 0.385),
                    y = centerY + radius * 1.1 * Math.sin((180 / 6) + theta + angle + 0.385);
                context.lineTo(x, y);
            }
        } else if (sides === 136) { // exports.genericEntity
            let realShape = -11,
                dip = 1 - 6 / realShape / realShape;
            realShape = -realShape;
            context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            for (let i = 0; i < realShape; i++) {
                let theta = (i + 1) / realShape * Math.PI,
                    htheta = (i + .5) / realShape * Math.PI,
                    c = {
                        x: centerX + radius * dip * Math.cos(htheta + angle),
                        y: centerY + radius * dip * Math.sin(htheta + angle)
                    },
                    p = {
                        x: centerX + radius * Math.cos(theta + angle),
                        y: centerY + radius * Math.sin(theta + angle)
                    };
                context.quadraticCurveTo(c.x, c.y, p.x, p.y);
            }
            context.lineJoin = 'miter';
        } else if (sides === 137) { // Minesweeper Ring
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
            context.arc(centerX, centerY, radius / 1.05, 0, 2 * Math.PI, false);
        } else if (sides === 138) { // Glass Smasher Body
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
            context.arc(centerX, centerY, radius / 1.5, 0, 2 * Math.PI, false);
        } else if (sides === 139) { // Revolutionist
            context.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
            context.arc(centerX, centerY, radius * 0.999999, 0, 2 * Math.PI, false);
        } else if (sides === 140) { // Waller
            for (let [scale, theta] of [
                [1, .611],
                [1, 1.571],
                [-1.25, -0.698],
                [-0.5, -0.698],
                [-0.5, .698],
                [-1.25, .698],
                [1, -1.571],
                [1, -0.611]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta),
                centerY + radius * scale * Math.sin(angle + theta)
            );
        } else if (sides === 141) { // Star
            let dip = .25;
            context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            for (let i = 0; i < 6; i++) {
                let theta = (i + 1) / 6 * 2 * Math.PI,
                    htheta = (i + .5) / 6 * 2 * Math.PI,
                    c = {
                        x: centerX + radius * dip * Math.cos(htheta + angle),
                        y: centerY + radius * dip * Math.sin(htheta + angle)
                    },
                    p = {
                        x: centerX + radius * Math.cos(theta + angle),
                        y: centerY + radius * Math.sin(theta + angle)
                    };
                context.quadraticCurveTo(c.x, c.y, p.x, p.y);
            }
        } else if (sides === 142) { // Flash Crasher
            for (let [scale, theta] of [
                [1, 0],
                [1, .4 * Math.PI],
                [1, .8 * Math.PI],
                [0.36, Math.PI / 2],
                [0.36, -(Math.PI / 2)],
                [1, 1.2 * Math.PI],
                [1, 1.6 * Math.PI]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos((angle - .025) + theta),
                centerY + radius * scale * Math.sin((angle - .025) + theta)
            );
        } else if (sides === 143) { // Grouper
            for (let [scale, theta] of [
                [1, .489],
                [-1, -1.257],
                [-0.5, -0.96],
                [-0.75, 0],
                [-0.5, .96],
                [-1, 1.257],
                [1, -0.489]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta),
                centerY + radius * scale * Math.sin(angle + theta)
            );
        } else if (sides === 144) { // Glass Smasher Shell
            let realShape = 6,
                dip = 1 - 3.272727 / realShape / realShape;
            realShape = -realShape;
            //context.moveTo(centerX + radius * Math.cos(angle), centerY + radius * Math.sin(angle));
            for (let i = 0; i < realShape; i++) {
                let centerX = (i + 1) / realShape * Math.PI,
                    centerY = (i + .5) / realShape * Math.PI;
                context.arc(centerX, centerY, radius, 0, 2 * Math.PI, true);
                context.arc(centerX, centerY, radius / 1.5, 0, 2 * Math.PI, false);
                c = {
                    x: centerX + radius * dip * Math.cos(htheta + angle),
                    y: centerY + radius * dip * Math.sin(htheta + angle)
                },
                    p = {
                        x: centerX + radius * Math.cos(theta + angle),
                        y: centerY + radius * Math.sin(theta + angle)
                    };
                context.quadraticCurveTo(c.x, c.y, p.x, p.y);
            }
        } else if (sides === 145) { // Clutter
            for (let [scale, theta] of [
                [0.438, 0],
                [1, .681],
                [0.625, 1.047],
                [0.438, 1.065],
                [-0.5, -1.1],
                [-0.34, -0.698],
                [-0.75, 0],
                [-0.34, .698],
                [-0.5, 1.1],
                [0.438, -1.065],
                [0.625, -1.047],
                [1, -0.681]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + (theta - .0261)),
                centerY + radius * scale * Math.sin(angle + (theta - .0261))
            );
        } else if (sides === 146) { // Golden Rectangle
            for (let [scale, theta] of [
                [1, .541],
                [-1, -0.541],
                [-1, .541],
                [1, -0.541]
            ]) context.lineTo(
                centerX + radius * scale * Math.cos(angle + theta + 1.5447),
                centerY + radius * scale * Math.sin(angle + theta + 1.5447)
            );
        } else if (sides === 147) {
            // Hendecagon (Rotated)
            for (let i = 0; i < 11; i++) {
                let theta = (i / 11) * 2 * Math.PI,
                    x =
                        centerX + radius * 1.5 * Math.cos(180 / 11 + theta + angle + 1.635),
                    y =
                        centerY + radius * 1.5 * Math.sin(180 / 11 + theta + angle + 1.635);
                context.lineTo(x, y);
            }
        }
         else if (sides === 162) {
            // 32 Sided
            for (let i = 0; i < 32; i++) {
                let theta = (i / 32) * 2 * Math.PI,
                    x =
                        centerX + radius * 1.5 * Math.cos(180 / 33 + theta + angle + 1.635),
                    y =
                        centerY + radius * 1.5 * Math.sin(180 / 32 + theta + angle + 1.635);
                context.lineTo(x, y);
            }
        } else if (sides === 164) {
            // 15 Sided Shape
            for (let i = 0; i < 15; i++) {
                let theta = (i / 15) * 2 * Math.PI,
                    x =
                        centerX + radius * 1.5 * Math.cos(180 / 11 + theta + angle),
                    y =
                        centerY + radius * 1.5 * Math.sin(180 / 11 + theta + angle);
                context.lineTo(x, y);
            }
        } else if (sides == 163) { // Star
            context.save()
            context.beginPath()
            context.globalCompositeOperation = 'screen'
            for (let i = 0; i < 9; i++) {
                let theta = 45 * i * Math.PI / 180;
                let x = centerX + (radius * (1 + 0.4 * Math.sin(Math.PI * i + Math.PI * 0.5))) * Math.cos(theta + angle);
                let y = centerY + (radius * (1 + 0.4 * Math.sin(Math.PI * i + Math.PI * 0.5))) * Math.sin(theta + angle);
                context.lineTo(x, y);
            }
            context.stroke()
            context.fill()

            context.restore()
        } else if (sides === 165) {
            context.arc(centerX, centerY, radius * 1.45, 0, 2 * Math.PI);
        } else if (sides > 9999) {
               let mk5 = new Image(),
                ek7 = new Image(),
                fantom = new Image()
            mk5.src = "https://raw.githubusercontent.com/Jiankun-Huang/images/master/MK-5.png";
            ek7.src = "https://raw.githubusercontent.com/Jiankun-Huang/images/master/EK-7.png";
            context.save();
            context.beginPath();
            context.translate(centerX, centerY);
            context.rotate(angle);
            switch (sides) {
                case 10000:
                    context.drawImage(
                        ek7,
                        -radius * 1.5,
                        -radius * 2.5,
                        radius * 3,
                        radius * 5
                    );
                    break;
                case 22222:
                    context.drawImage(
                        fantom,
                        -radius * 1.5,
                        -radius * 2.5,
                        radius * 3,
                        radius * 5
                    );
                    break;
                case 999:
                    context.drawImage(
                        mk5,
                        -radius * 1.5,
                        -radius * 2.5,
                        radius * 3,
                        radius * 5
                    );
                    break;
                case 10011:
                    context.drawImage(speedy, -radius, -radius, radius * 2, radius * 2);
                    break;
            }
            context.restore();
        } else if (sides > 200) {
            let path = 2 * Math.PI,
                radiusDiv = 1;
            switch (sides) {
                case 201: // 6 Pointed Star
                    path = new Path2D(
                        "m -1.2745055,-0.73559036 .8496635,-1.54e-5 L -5.9657109e-7,-1.4711814 .42484199,-0.73560576 1.2745055,-0.73559036 .84968469,-1.7597132e-6 1.2745055,0.73558804 .42484199,0.73560224 -5.9657109e-7,1.4711779 -0.424842,0.73559964 -1.2745055,0.73558804 -0.8496847,-1.7597132e-6 Z"
                    );
                    // radiusDiv= 2;
                    break;
                case 202: // idk
                    path = new Path2D(
                        "m 1.9248076,-5.704592 c -1.611307,0.230016 -3.043746,0.725651 -4.024805,1.678906 0,0 -1.350047,1.503205 -2.140429,2.124219 -0.579511,0.455329 -1.884375,1.15625 -1.884375,1.15625 h -1.5 V 0.75458704 h 1.5 v 0.0002 c 0,0 1.306923,0.68367396 1.884375,1.13593696 0.795102,0.622728 2.140429,2.144531 2.140429,2.144531 1.067468,1.06887 2.515226,1.669345 4.024805,1.669336 1.88243,-1.866652 3.806861,-3.803622 5.7,-5.69980896 z"
                    );
                    radiusDiv = 6;
                    break;
                case 203: // hmmmm
                    path = new Path2D(
                        "m -6.8622396,-6.8999545 5.07205,1.417287 -2.815733,0.634051 2.890322,0.839184 -4.960166,0.727291 4.717751,1.118913 -2.741144,0.634049 2.181728,0.652698 L -6.7317086,-0.49999157e-6 -2.5174316,0.8764805 l -2.181728,0.652699 2.741144,0.634049 -4.717751,1.118912 4.960166,0.727292 -2.890322,0.839184 2.815733,0.63405 -5.07205,1.417288 7.10459905,-0.26108 2.61061295,-0.689995 1.846078,-1.156209 1.398542,-1.902149 L 6.8621294,-0.49999157e-6 6.0975924,-2.8905215 l -1.398542,-1.90215 -1.846078,-1.156209 -2.61061295,-0.689995 z"
                    );
                    radiusDiv = 8;
                    break;
                case 204: // Curved Square
                    path = new Path2D(
                        "m -56.998045,-113.99805 a 56.999023,56.998993 0 0 0 -57.000005,57.000005 V 4.9999999e-6 57.000005 a 56.999023,56.998993 0 0 0 57.000005,56.998035 H 5e-6 h 57 A 56.999023,56.998993 0 0 0 113.99804,57.000005 V 4.9999999e-6 -56.998045 A 56.999023,56.998993 0 0 0 57.000005,-113.99805 h -57 z"
                    );
                    radiusDiv = 115;
                    break;
                case 205: // NUKE
                    path = new Path2D(
                        "M -115825.0046 -51899.336599999995 L -115825.0046 -55148.8094 -89690.3429 -57122.0082 -76683.3125 -57122.0082 -76683.3125 -52944.1146 -53466.04400000001 -52944.1146 -39122.19410000001 -42035.17019999999 -8610.804499999998 -53524.073 23723.636799999993 -56889.903 27977.849499999997 -56889.903 65417.7289 -51551.4834 89972.455 -42035.17019999999 92282.377 -37160.960999999996 94044.8092 -37160.960999999996 95807.24139999998 -37876.77099999999 114121.98760000001 -21687.280999999995 120017.39349999999 769.0494000000035 113332.0198 23070.642999999996 97428.01539999999 35720.071800000005 95645.164 34327.4406 91390.9513 34327.4406 91593.229 39201.6498 65579.80629999998 54752.6982 27410.578599999993 58698.48659999999 -12703.577900000004 53824.27739999999 -40175.69720000001 43147.438200000004 -53060.8505 53360.066999999995 -75427.5317 53360.066999999995 -75427.5317 57770.0658 -88312.685 58060.65419999999 -114569.2238 54752.6982 -114569.2238 50574.8046 -88798.9172 50574.8046 -88798.9172 21329.549400000004 -120160.8941 21329.549400000004 -120404.0102 -22538.333399999996 -89042.03330000001 -23002.5438 -88555.80110000001 -49462.5366 Z M -64010.168399999995 16919.2431 L -78597.1344 16919.2431 -78597.1344 -15343.3797 -64496.40059999999 -15343.3797 Z"
                    );
                    radiusDiv = 51200;
                    break;
                case 206: // Wisp
                    path = new Path2D(
                        "M -19169.9038 -18519.129 C -8794.682489678713 -28891.0366018223 8024.188598177694 -28888.350310321293 18396.0962 -18513.129000000008 24656.0962 -12251.129 30916.0962 -5989.129000000001 37176.0962 272.8709999999992 30914.0962 6532.870999999999 24652.0962 12792.871 18390.0962 19052.871 8014.874889678711 29424.778601822298 -8803.996198177698 29422.092310321284 -19175.903799999996 19046.871 -29547.8114018223 8671.649689678714 -29545.125110321285 -8147.221398177695 -19169.9038 -18519.128999999997 Z"
                    );
                    radiusDiv = 26500;
                    break;
                case 207: // RPG Rocket
                    path = new Path2D(
                        "m-188.62112 -16.533947l8.0143585 0l12.969101 -24.251179l27.098267 9.488823l0 -2.001377l17.078102 0l0 6.2210903l10.228264 0l134.11871 -21.404089l38.26966 0l120.62271 31.946732l38.694733 0l4.3259735 4.321554l22.032852 0l0 26.571358l-22.245377 0l-3.9540558 3.9540453l-38.012848 0l-120.72455 29.892221l-38.274086 0l-134.53935 -20.877178l-11.596466 0l0 5.061001l-13.602264 0l0 -2.320179l-28.045822 11.388359l-12.335907 -22.56418l-78.34146 0l0 -35.427002z"
                    );
                    radiusDiv = 55;
                    break;
                case 208: // Bullet
                    path = new Path2D(
                        "m-164.9029 -40.75328l0 79.07611l258.03412 0l58.267723 -15.262466l152.60104 -23.582678l-147.05249 -22.19685l-58.267723 -18.03412z"
                    );
                    radiusDiv = 80;
                    break;
                case 209: //new
                    path = new Path2D("M100 100 h 80 v 800 h -80 Z"); //adiusDiv= 79;
                    break;
                case 210: //Trape-fighter
                    path = new Path2D(
                        "m -113.1059,-0.32146 61.674009,53.20654 v 74.40354 L 113.1059,66.58262 V -63.038321 L -51.431891,-127.28862 v 73.760624 z"
                    );
                    radiusDiv = 225;
                    break;
                case 211: // hmmm2
                    path = new Path2D(
                        "m 1.9248076,-5.704592 c -1.611307,0.230016 -3.043746,0.725651 -4.024805,1.678906 0,0 -1.350047,1.503205 -2.140429,2.124219 -0.579511,0.455329 -1.884375,1.15625 -1.884375,1.15625 h -1.5 V 0.75458704 h 1.5 v 0.0002 c 0,0 1.306923,0.68367396 1.884375,1.13593696 0.795102,0.622728 2.140429,2.144531 2.140429,2.144531 1.067468,1.06887 2.515226,1.669345 4.024805,1.669336 1.88243,-1.866652 3.806861,-3.803622 5.7,-5.69980896 z"
                    );
                    radiusDiv = 6;
                    break;
                case 212: // zeppelin
                    path = new Path2D(
                        "M -44242.0195 -238.2051999999967 C -44242.0195 -24627.099752527833 -24470.91405252785 -44398.2052 -82.0195000000167 -44398.205200000004 L -82.01950000000215 -44398.2052 C 11629.940691314267 -44398.2052 22862.209484932733 -39745.64712946315 31143.81595719794 -31464.040657197944 39425.422429463164 -23182.434184932736 44077.98050000001 -11950.165391314262 44077.98050000001 -238.2051999999967 L 44077.9805 -238.2051999999967 C 44077.9805 24150.689352527843 24306.875052527837 43921.7948 -82.01949999999488 43921.7948 L -82.01950000000215 43921.7948 C -24470.914052527838 43921.7948 -44242.0195 24150.689352527843 -44242.01950000001 -238.20519999998942 Z M 11090.991800000003 -43096 L 92122.68360976904 -28652.756941444954 92011.29999023097 28176.756941444968 10922.991800000003 42620 Z M 89846.7253 -20894.342 C 89846.7253 -24294.206919958364 87090.59021995837 -27050.342 83690.7253 -27050.342 82058.05258854777 -27050.342 80492.24990074172 -26401.76529071049 79337.77595501562 -25247.29134498439 78183.30200928952 -24092.81739925829 77534.7253 -22527.014711452233 77534.7253 -20894.342 77534.7253 -17494.477080041637 80290.86038004165 -14738.342 83690.7253 -14738.342 87090.59021995837 -14738.342 89846.7253 -17494.477080041637 89846.7253 -20894.342 Z M 89846.7253 -238.8077000000003 C 89846.7253 -3638.672619958364 87090.59021995837 -6394.8077 83690.7253 -6394.807700000001 82058.05258854777 -6394.807700000001 80492.24990074172 -5746.230990710489 79337.77595501562 -4591.757044984389 78183.30200928952 -3437.2830992582876 77534.7253 -1871.480411452234 77534.7253 -238.8077000000012 77534.7253 3161.057219958361 80290.86038004165 5917.1923 83690.7253 5917.1923 87090.59021995837 5917.1923 89846.7253 3161.057219958365 89846.7253 -238.8076999999994 Z M 74115.871 -10711.836299999999 C 74115.871 -14111.701219958362 71359.73591995836 -16867.8363 67959.871 -16867.8363 66327.19828854776 -16867.8363 64761.395600741715 -16219.259590710488 63606.92165501561 -15064.785644984388 62452.44770928951 -13910.311699258287 61803.871 -12344.509011452232 61803.871 -10711.836299999999 61803.871 -7311.9713800416375 64560.00608004163 -4555.836299999999 67959.871 -4555.836299999999 71359.73591995836 -4555.836299999999 74115.871 -7311.971380041634 74115.871 -10711.836299999999 Z M 74115.871 9943.698 C 74115.871 6543.833080041636 71359.73591995836 3787.698 67959.871 3787.697999999999 66327.19828854776 3787.697999999999 64761.395600741715 4436.274709289511 63606.92165501561 5590.748655015612 62452.44770928951 6745.222600741712 61803.871 8311.025288547766 61803.871 9943.697999999999 61803.871 13343.562919958362 64560.00608004163 16099.698 67959.871 16099.698 71359.73591995836 16099.698 74115.871 13343.562919958365 74115.871 9943.698 Z M 57216.8744 -20894.342 C 57216.8744 -24294.206919958364 54460.73931995837 -27050.342 51060.8744 -27050.342 49428.20168854777 -27050.342 47862.399000741716 -26401.76529071049 46707.925055015614 -25247.29134498439 45553.45110928951 -24092.81739925829 44904.8744 -22527.014711452233 44904.8744 -20894.342 44904.8744 -17494.477080041637 47661.009480041634 -14738.342 51060.8744 -14738.342 54460.73931995836 -14738.342 57216.8744 -17494.477080041637 57216.8744 -20894.342 Z M 89846.7253 20416.7266 C 89846.7253 17016.861680041635 87090.59021995837 14260.7266 83690.7253 14260.7266 82058.05258854777 14260.7266 80492.24990074172 14909.303309289511 79337.77595501562 16063.777255015611 78183.30200928952 17218.251200741714 77534.7253 18784.053888547765 77534.7253 20416.726599999998 77534.7253 23816.59151995836 80290.86038004165 26572.7266 83690.7253 26572.7266 87090.59021995837 26572.7266 89846.7253 23816.591519958365 89846.7253 20416.7266 Z M 57216.8744 -238.8077000000003 C 57216.8744 -3638.672619958364 54460.73931995837 -6394.8077 51060.8744 -6394.807700000001 49428.20168854777 -6394.807700000001 47862.399000741716 -5746.230990710489 46707.925055015614 -4591.757044984389 45553.45110928951 -3437.2830992582876 44904.8744 -1871.480411452234 44904.8744 -238.8077000000012 44904.8744 3161.057219958361 47661.009480041634 5917.1923 51060.8744 5917.1923 54460.73931995836 5917.1923 57216.8744 3161.057219958365 57216.8744 -238.8076999999994 Z M 57216.8744 -238.8077000000003 C 57216.8744 3161.0572199583635 54460.73931995837 5917.1923 51060.8744 5917.192300000001 49428.20168854777 5917.192300000001 47862.399000741716 5268.6155907104885 46707.925055015614 4114.141644984388 45553.45110928951 2959.667699258287 44904.8744 1393.8650114522334 44904.8744 -238.8076999999994 44904.8744 -3638.672619958362 47661.009480041634 -6394.8077 51060.8744 -6394.8077 54460.73931995836 -6394.8077 57216.8744 -3638.6726199583654 57216.8744 -238.8077000000012 Z M 44904.8744 20416.7266 C 44904.8744 23816.591519958365 47661.009480041634 26572.7266 51060.8744 26572.7266 52693.54711145223 26572.7266 54259.349799258285 25924.14989071049 55413.82374498439 24769.67594498439 56568.29769071049 23615.20199925829 57216.8744 22049.399311452235 57216.8744 20416.7266 57216.8744 17016.861680041642 54460.73931995837 14260.726600000002 51060.8744 14260.726600000002 47661.00948004164 14260.726600000002 44904.8744 17016.861680041635 44904.8744 20416.7266 Z M -16024.3479 15702.5792 C -7219.824418197492 24507.102681802506 7055.128618197488 24507.102681802513 15859.652099999998 15702.579200000006 22377.91078 9184.320520000001 30100.42814 3870.3205199999975 39027.20418 -239.4208000000035 30100.428139999996 -4349.162120000001 22377.91078 -9663.16212 15859.6521 -16181.4208 7055.128618197495 -24985.944281802505 -7219.824418197491 -24985.944281802505 -16024.347899999999 -16181.4208 -24828.871381802506 -7376.897318197494 -24828.871381802506 6898.055718197487 -16024.347900000002 15702.579199999998 Z"
                    );
                    radiusDiv = 40000;
                    break;
                case 213: // AK-47
                    path = new Path2D(
                        "m 7.93294,0.3852 c -0.0125,-0.025 -0.01,-0.2325 -0.01,-0.2325 l -0.0025,-0.105 -0.1025,0.0025 -0.095,0.2025 -0.095,0.145 c 0,0 -0.37496,0.0082 -0.535,0.005 -0.25,-0.005 -0.3925,-0.1425 -0.3925,-0.1425 l -0.0075,-0.095 -0.815,-0.005 c 0,0 .005,-0.035 -0.015,-0.04 -0.02,-0.005 -0.99,-0.0025 -0.99,-0.0025 l -0.015,-0.0325 c 0,0 -0.1625,0 -0.2025,0.0025 -0.04,0.0025 -0.0875,0.055 -0.12,0.06 -0.0325,0.005 -0.1125,0.0025 -0.1125,0.0025 L 4.42044,0.0127 4.29794,0.0102 c 0,0 -0.005,0.05 0,0.115 -0.215,0 -1.80008,0.0032 -1.8775,0.0075 -0.045,0.0025 -0.09184,0.0296 -0.11302,0.05188 -0.02356,0.02476 -0.03814,0.06458 -0.03948,0.08562 -0.0675,0.005 -0.0825,0.0175 -0.12,0.055 -0.0375,0.0375 -0.03,0.125 -0.03,0.125 0,0 -0.57478,0.07816 -0.625,0.08 -0.16482,0.00598 -0.1125,-0.07 -0.3025,-0.05 -0.1014,0.01066 -1.09,0.125 -1.115,0.125 -0.025,0 -0.08438,0.01132 -0.0625,0.075 .08812,0.25652 .11084,0.58902 .1025,0.69 -0.01078,0.13054 .4025,-0.06 .9225,-0.215 .52,-0.155 1.095,-0.37 1.095,-0.37 0,0 .05824,0.03246 .0875,0.1025 .02988,0.07156 .0225,0.1575 .0225,0.1575 0,0 -0.19,0.445 -0.24,0.52 -0.05,0.075 .03,0.08 .03,0.08 l .34,0.0925 c .035,0.00836 .05582,-0.0025 .06582,-0.03832 .01532,-0.05488 .02336,-0.27168 .06336,-0.33168 .04,-0.06 .2175,-0.2675 .2175,-0.2675 h .75832 l -0.00082,-0.31168 c 0,0 .0025,0.01168 .04914,0.005 0,0.80296 .67824,1.48692 .89502,1.59918 .05768,0.02988 .075,-0.005 .09,-0.0325 .015,-0.0275 .18832,-0.30664 .215,-0.36 .02666,-0.05332 .05332,-0.07332 -0.02668,-0.12664 C 4.0857,1.46426 4.10294,0.7702 4.10294,0.7702 c 0,0 .285,-0.005 .3175,-0.0025 .0325,0.0025 .13982,0.09734 .1975,0.0975 .23206,0.00074 .2725,-0.1125 .4475,-0.115 .08006,-0.00114 .9275,0 .9275,0 v -0.1475 l 2.0025,0.0025 .0025,-0.1975 c 0,0 -0.0525,0.0025 -0.065,-0.0225 z m -5.17634,0.66116 .00134,-0.25164 .5175,0.0025 c -0.02058,0.00796 .0225,0.245 .0225,0.245 l -0.54134,0.00414 z"
                    );
                    break;
                case 214: // Ship-23/AWS Body
                    path = new Path2D(
                        "m-146.62466 -180.25066l74.75065 0l1.4356918 1.8136444l2.438324 2.9370117l2.7506561 2.9370117l3.312336 3.2493439l3.687664 3.18898l4.249344 3.3123322l4.874016 3.4986877l3.9396324 2.2519684l4.1233597 2.3123322l3.7506561 1.8110199l0.62467194 2.0l0.31233597 2.438324l0.12598419 2.1863556l0.24934387 1.9396362l71.68767 0l0.12598419 -3.0630035l0.24934387 -2.3123322l0.8110237 -3.0629883l4.375328 -2.2493439l4.125984 -2.2519684l4.375328 -2.6850433l4.687664 -3.2519684l5.56168 -4.687668l3.312336 -3.0603638l2.24934 -2.18898l1.876648 -2.3753204l2.186348 -2.3753357l1.8766403 -2.3753204l75.4357 0l3.6246643 .50131226l3.3753357 .8740082l3.5013123 1.3123322l3.123352 1.5643158l3.2519684 2.0l4.687668 3.81102l2.4986877 2.6246643l2.0 2.7506561l2.561676 3.9370117l1.3753357 3.6246796l1.1889801 3.2519684l0.6246643 2.561676l0.3753357 2.7506561l0.12335205 2.0629883l0 74.00001l-2.4986877 2.123352l-3.0 2.3123398l-2.7506561 2.624672l-3.3123322 3.312336l-3.8740234 4.43832l-2.6272888 3.4383202l-3.0603638 4.4986877l-2.6246796 4.062992l-1.6876678 3.375328l-1.5643005 3.062992l-0.7480316 1.7506561l-2.0 .56167984l-2.3753204 .24934387l-2.0630035 .062992096l-1.3123322 0l0 72.06299l1.9370117 0l2.1259766 .24934387l2.3123474 .50131226l1.8740082 .49868774l1.2493439 2.8740158l1.9370117 3.8136482l2.0 3.1259842l2.5643005 3.8740158l3.3753357 4.4986877l3.7480164 4.5013123l4.0630035 4.312336l2.6246643 2.624672l2.9396362 2.438324l3.0 2.3123322l0 75.49868l-0.68766785 4.3753357l-1.5643005 4.9370117l-1.8110199 3.9396362l-2.6876678 4.123352l-2.1259918 2.9370117l-2.4986725 2.5013123l-3.3123474 2.6246643l-4.5013123 2.8136597l-2.7506561 1.3753204l-3.6246643 1.4356995l-3.0630035 .8136444l-2.8740082 .49868774l-76.249344 0l-0.9370041 -1.4986877l-1.3753281 -1.8136444l-2.251976 -2.561676l-2.748024 -2.6876678l-3.501316 -3.438324l-2.5616798 -2.3753357l-2.2493439 -1.8740082l-3.062992 -2.1259918l-3.624672 -2.4356842l-3.624672 -2.2519684l-4.125984 -2.2493439l-2.687664 -1.3123474l-2.4986877 -1.0629883l-0.25196838 -2.123352l-0.24934387 -2.3123322l0 -1.8136597l0.062992096 -1.9369965l-72.37533 0l-0.062992096 1.8740082l-0.24934387 1.3753204l-0.37532806 2.1259918l-0.62467194 2.123352l-3.2493439 2.0630035l-4.125984 2.3123322l-5.750656 3.5643005l-3.624672 2.5616913l-4.062992 3.2493286l-3.0603676 2.6876678l-3.0 2.9370117l-2.8136444 2.9370117l-1.8740158 2.18898l-1.813652 2.4383087l-1.1259842 1.6876678l-75.81103 0l-3.8766327 -0.6273041l-3.3727112 -1.0l-3.9396362 -1.8740082l-4.123352 -2.1863556l-2.7506561 -1.5643005l-3.9370117 -3.6876678l-3.0 -3.81102l-2.2493439 -3.438324l-2.0629883 -4.249344l-1.3123322 -3.9369965l-0.50131226 -3.6246796l-0.49868774 -3.627304l-0.12599182 -1.561676l0 -72.81102l1.561676 -1.3149643l2.627304 -2.186348l2.3123322 -2.1259842l3.1863556 -3.0603676l3.561676 -3.6272964l3.1259918 -4.0603676l2.561676 -3.5013123l3.2519684 -4.937008l1.7480316 -3.062992l1.8136444 -3.5616798l1.6246796 -3.5616798l2.6876678 -0.56430435l2.561676 -0.24934387l3.2493439 0l0 -71.93701l-2.2493439 0l-2.4356995 -0.12598419l-2.2519684 -0.37532806l-1.1863556 -0.31233597l-1.2493439 -2.687664l-1.3123322 -2.5616798l-1.7506561 -3.1259842l-2.3753204 -4.0603676l-1.5616913 -2.375328l-2.4383087 -3.312336l-2.438324 -3.1259842l-3.4986877 -4.0l-3.1259918 -3.1863518l-3.0629883 -2.6272964l-3.123352 -2.5616837l-1.9396362 -1.561676l0 -72.50131l0.31495667 -3.7480316l1.0 -4.8136444l1.0 -3.3123322l1.7480316 -4.125992l2.0629883 -3.2493439l2.6246796 -3.2493439l3.2493439 -3.3123322l4.750656 -3.6876678l4.0629883 -2.18898l4.312332 -1.6876678l3.8740234 -0.93699646l2.3753204 -0.62467957zm74.7 143.3l0 71.68767l3.186348 .062992096l4.186348 .68766403l4.000004 1.1259842l1.4383202 2.624672l3.375328 4.312336l4.375328 4.687664l3.4986877 3.312336l4.2519684 3.4356956l3.8110237 2.687664l2.2493439 1.2519684l1.3149605 3.5616798l0.43569565 3.6876678l0.24934387 2.6876602l-0.060367584 1.7506561l71.49869 0l0.18897629 -3.7506561l0.8110237 -3.7506561l0.8766403 -3.312336l0.43569565 -1.2493439l3.8766403 -2.5643044l2.8740158 -2.4356956l4.0 -3.7506561l3.312336 -3.5616798l3.1863518 -3.5013123l2.4383202 -3.062992l1.5013123 -2.687664l2.8740158 -0.8740158l2.8740158 -0.62467194l3.6272964 -0.50131226l3.1233597 -0.18635178l0 -71.813644l-2.624672 -0.12335968l-3.375328 -0.43832016l-3.2493439 -0.68766403l-2.1889763 -0.68766403l-2.312336 -3.375328l-2.0603676 -3.0603676l-2.2519684 -2.5643044l-2.687664 -3.1233597l-2.687664 -2.5013123l-2.2493439 -1.9370079l-2.312336 -1.8740158l-2.687664 -2.1259842l-3.312336 -2.375328l-0.7506561 -2.4383202l-0.68766403 -3.0603676l-0.31233597 -2.4383163l0 -3.1259918l-72.12336 0l-0.062992096 2.624672l-0.37532806 2.813652l-0.43832016 1.9370041l-0.24934387 1.6876678l-0.18635178 1.1863518l-1.8766403 1.3753281l-2.0603676 1.312336l-1.9396324 1.3753281l-1.9370079 1.3753281l-1.7506561 1.5013123l-2.5616798 2.312336l-2.4986877 2.687664l-1.687664 2.0l-2.624672 2.8740158l-2.0 2.4383202l-1.5013123 2.1233597l-1.4383202 2.687664l-2.1233597 .62467194l-2.8136482 .50131226l-1.9370041 .31233597l-2.0 .062992096z"
                    );
                    radiusDiv = 100;
                    break;
                case 215: // 24 Pointed Star
                    path = new Path2D(
                        "m-3.1884842 -0.007504462l0.84110737 -0.46545094l-0.59896183 -0.75189334l0.9552134 -0.10814953l-0.26564586 -0.92389536l0.92389536 .26564574l0.10814953 -0.9552133l0.7518934 .5989616l0.46545094 -0.84110713l0.46545094 .84110713l0.7518933 -0.5989616l0.10814953 .9552133l0.9238956 -0.26564574l-0.26564598 .92389536l0.95521355 .10814953l-0.59896183 .75189334l0.84110713 .46545094l-0.84110713 .46545094l0.59896183 .75189334l-0.95521355 .10814953l0.26564598 .9238956l-0.9238956 -0.26564598l-0.10814953 .9552133l-0.7518933 -0.5989616l-0.46545094 .84110713l-0.46545094 -0.84110713l-0.7518934 .5989616l-0.10814953 -0.9552133l-0.92389536 .26564598l0.26564586 -0.9238956l-0.9552134 -0.10814953l0.59896183 -0.75189334z"
                    );
                    radiusDiv = 2.2;
                    break;
                case 216: // Pistol
                    path = new Path2D(
                        "m0 -210l0.0866127 -4.3359575l1.2152252 -1.2152233l1.9921265 -0.08661413l1.3018341 1.0419946l1.1259842 2.1679792l1.1286125 2.6010494l9.2782135 0l1.2125969 1.994751l30.519684 0l0.9553833 -1.6482935l0.8661423 -0.34645748l1.3884506 0l0.77952576 .8661423l5.2021027 9.538057l80.72178 0l1.6483002 2.0813656l26.356949 0l23.498688 0l1.994751 -1.994751l114.88452 0l0 -8.149607l3.6404114 0l0 2.0813646l9.451447 0l0 -1.99475l4.6824036 0l3.8136597 7.110235l8.32547 5.635172l0.25982666 5.808399l1.8189087 0l0 1.6482925l2.0813599 0l0 2.2545948l-2.2545776 0l0 10.577427l1.6036682 .43044662l0 4.4251976l-2.2966003 0l0 6.2414703l-2.2545776 14.3937l-2.427826 9.884514l-3.9868774 8.409447l-28.614166 0l-6.590576 7.6325455l-1.8188782 2.1653595l-19.509186 0l-2.3385925 -2.338585l-48.38321 0l-3.8162537 3.2073517l-0.8661499 3.727028l-0.7821655 5.288719l-0.7795105 5.2887115l-1.2992249 5.8110275l-1.0419922 5.375328l-1.2992096 4.5958023l-1.0419922 3.9868774l-0.51968384 3.0367432l0.25984192 1.9921265l1.561676 1.6482849l1.7322998 1.994751l0.34906006 2.341217l-0.52230835 2.5144348l-1.6456604 1.4724426l-3.296585 1.6482849l-8.669296 .9527588l-14.047241 1.1286163l-23.84253 3.2073364l-14.566925 1.9081421l-8.582672 .6062927l-7.805771 -0.6929016l-6.4147034 -1.6483002l-9.797897 -3.0341187l-5.9816284 -1.1259918l-6.417328 .17323303l-5.4619446 2.8609009l-6.070862 6.154846l-4.6797943 5.724411l-2.5170593 5.8950195l-2.1653519 6.414688l-1.3884506 6.244095l1.4750671 2.601059l0.086616516 2.1679688l-0.60892487 1.734909l-1.9055176 .9527588l-3.2099686 .9527588l-4.5065613 15.173233l-3.902893 12.05249l2.3412094 2.5144348l1.1259842 1.9081268l-0.51968384 2.6876678l-2.1679764 1.2152252l-2.9475098 .77952576l-3.640419 9.451447l-1.5616837 6.328079l0 9.2782135l1.1286087 6.4147186l2.1653595 9.278198l3.0367432 5.7218018l3.2939606 4.5957947l1.6483002 1.994751l0.3464508 1.994751l-0.9553757 2.1679688l-3.640419 1.8189087l-8.496063 1.9081421l-11.965881 -0.34646606l-7.5433044 -0.779541l-5.375328 -1.0419922l-14.480316 -1.6456604l-17.081367 -1.6482849l-10.577427 -1.3884583l-9.624672 -0.43307495l-5.808399 -0.51968384l-5.984252 -0.43307495l-2.3412075 -1.3884583l-1.2992125 -2.9475098l-0.69553757 -2.7742615l0.26246738 -2.687683l1.3858261 -1.2125854l3.2073498 -1.3018494l4.7690287 .086639404l1.3018379 -1.212616l0.34645653 -1.1286011l-0.9527569 -1.1259766l-7.110236 -0.086639404l-5.811023 -2.4277954l-2.7742784 -3.556427l-1.6456692 -4.59581l0.4330709 -8.755905l1.5590551 -5.8950195l2.7742782 -15.349075l3.4698167 -15.346466l6.328083 -20.115479l9.36483 -21.501312l16.12861 -26.61943l7.4566917 -9.711288l2.6010475 -5.461937l1.0393715 -5.2887115l-0.17322922 -5.8110275l-1.6482925 -6.587921l-4.2467194 -5.8110275l-5.3779526 -5.115486l-5.808399 -3.207344l-6.4146976 -1.6483002l-7.4566936 -0.6062927l-7.979002 -0.25984192l-3.64042 -1.1259842l-2.1679792 -2.3412094l-1.2992125 -3.0341187l-0.34908152 -4.422577l0.69553804 -4.076111l2.947507 -3.2073517l6.2414703 -2.0813675l6.0708656 -4.3359528l4.682415 -5.8950157l7.9763775 -10.4042015l4.422573 -4.509186l1.2992096 -3.989502l-0.60629654 -5.0288696l-2.1679802 -3.1207352l-5.0288696 -2.0813637l-1.9081383 -3.380579l0.08661461 -3.8162727l3.296587 -3.8136482l2.947506 -0.60629845l4.3359604 1.1259842l2.947506 3.4671917l1.994751 2.4278202l2.687664 .52231026l2.1653519 -1.3884506l-0.43306732 -2.5144367l-2.687664 -0.17322731l-5.9816284 -6.068243zm135.14494 95.92331l-5.0288696 3.469818l-5.0288696 6.2414703l-3.643036 5.7244034l-1.5590668 5.375328l-0.17321777 7.1102448l1.7322845 6.761154l3.4698029 6.070862l5.028885 3.9868774l6.414688 3.296585l6.417328 .8661499l8.32283 -0.17323303l5.8950195 -1.0393677l11.099731 -1.3884583l10.230972 -1.561676l16.301834 -1.9055176l5.2021027 -2.7742767l3.9868774 -5.551178l2.0813599 -7.1102295l1.0393829 -6.241478l0 -7.8031464l-1.7322845 -6.244095l-4.162735 -4.855644l-5.3753357 -3.9868774l-4.6824036 0l0 -3.469818l-15.086624 -0.1732254l-17.860886 1.3884506l-0.8661499 1.9081345l0 11.443573l1.7322845 6.244095l2.9475098 5.721779l5.551178 4.5091934l5.8950195 3.293953l4.509186 .8661499l1.7322845 .9553833l0.60891724 1.561676l-0.08660889 .9527588l-1.821518 .9527588l-5.2887115 .4330597l-6.850403 -0.08660889l-9.10498 -2.8608856l-7.194229 -6.9370117l-6.7637787 -9.708664l-0.69291687 -4.682419l0.606308 -3.3832016l-1.2152252 -2.8608856l-3.2073517 -2.8608932z"
                    );
                    radiusDiv = 80;
                    break;
                case 217: // Ship-23/AWS Minion Body 1
                    path = new Path2D(
                        "m-70.18826 15.310836l0 -30.68504l2.6876678 -1.3149614l3.5616798 -1.4356956l3.7506561 -1.4383202l4.4356956 -1.7506561l3.9396324 -1.6246719l6.0603676 -2.0l4.0 -0.7506561l2.5013123 -0.43569565l1.6246719 -0.12598419l3.8136482 .18897629l5.0 .24934387l6.4356956 .18635178l6.375328 .37532806l7.687663 .062992096l7.750656 .37532806l7.43832 .62467194l7.5616794 .43832016l5.312337 .56167984l5.0 .81365013l5.937008 .62467l4.874016 .9370079l3.687664 .7506561l4.062992 1.0l5.1889763 1.4986877l3.8110237 1.1889782l3.624672 .93700695l5.0 1.9370079l4.8766365 2.2493439l2.5616837 1.2493439l2.0629883 1.1889763l2.375328 1.5616798l2.2493439 1.5013123l1.9370117 1.687664l3.7506561 4.0l-5.375328 5.937008l-2.6876678 1.8110237l-3.624672 1.9396324l-3.375328 1.7480316l-2.498684 1.3753281l-3.4383202 1.5013123l-2.375328 1.0l-2.8740158 .81102276l-3.0 .9370079l-4.375328 1.1889763l-2.937008 .68766403l-2.687664 .56167984l-2.687664 .62467194l-3.624672 .7506561l-4.125984 .7506561l-4.125984 .49868774l-3.375328 .43832016l-4.1233597 .68766403l-4.375329 .49868774l-3.687664 .37532806l-6.687664 .31233597l-7.937008 .31233597l-6.624672 .43832016l-7.438319 .18635178l-8.186352 .25196838l-5.125984 .062994l-5.874016 .43569374l-2.8766403 -0.062992096l-1.1863518 .062992096l-2.2493439 -0.49868774l-4.0 -1.1889763l-3.8136482 -1.1863518l-4.312336 -1.5013123l-3.7506561 -1.4986877l-3.8110237 -1.5616779l-3.6876678 -1.5013142z"
                    );
                    radiusDiv = 30;
                    break;
                case 218: // Ship-23/AWS Minion Body 2
                    path = new Path2D(
                        "m-150.87172 -0.31737927l45.091873 -26.03412l46.22047 0l1.0629921 -0.09186363l-2.4986877 -2.1233597l-1.8766403 -2.375328l-2.3123398 -3.062992l-2.561676 -3.4383202l-2.624672 -4.7480316l-2.0 -3.8136482l-2.3123398 -5.249344l-1.8136444 -4.43832l-1.7506561 -5.874016l-1.1863556 -5.062992l-0.9370041 -5.813652l-0.43832397 -5.874016l-0.06298828 -4.8136444l0.25196838 -5.6850433l0.6850357 -6.0629883l1.2519684 -5.813652l1.3753281 -4.4383163l1.7480316 -4.9370117l1.5643082 -4.312332l2.0 -4.1233597l2.0603638 -3.5643082l2.18898 -3.7480316l2.8740158 -4.2519684l2.937008 -3.7480316l3.062992 -3.2519684l3.1889763 -3.2493439l4.375328 -3.7506561l4.4986877 -3.6876678l4.937008 -3.0603638l4.375328 -2.2519684l7.56168 -3.3753204l8.0 -2.5616913l3.8766403 -1.3123322l3.999999 -0.9370117l4.624672 -0.6876526l2.4383206 -0.24934387l2.5616798 -0.12599182l4.249344 -0.12597656l3.4383202 0l4.0 .25196838l3.4383197 .37532043l2.5616798 .37271118l7.312337 1.7506561l4.062992 1.2493439l4.4986877 1.7506561l4.2519684 1.7506561l3.7480316 1.8740082l4.750656 2.5643005l3.312336 2.060379l1.8136482 1.2519684l2.7480316 2.1863403l2.687664 2.18898l2.9396324 3.1233673l3.0603676 2.9369965l3.9396324 4.3123474l3.4986877 4.8766327l1.8740158 2.4356995l2.7506561 4.8136444l2.624672 5.375328l2.2519684 5.5616837l2.186348 6.1889725l1.1259842 5.624672l0.8740158 5.062996l0.37532806 4.312332l0.31233978 4.9370117l-0.06299591 5.0l-0.37532806 5.0l-0.561676 3.4383163l-1.2493439 8.000004l-1.6246719 5.624672l-2.1259842 5.56168l-2.624672 5.062992l-2.375328 4.4986877l-2.438324 3.8136482l-2.186348 3.1863518l-2.2493439 3.0l-2.062992 2.2519684l-2.0 2.0603676l46.498684 0l45.874023 26.485563l-45.745415 26.412075l-46.503933 0l5.2519684 6.041994l2.3726997 3.7480316l3.438324 5.813648l2.3123322 3.624672l2.438324 5.624672l1.6876602 4.937008l2.1863556 7.125984l0.8136444 4.186352l0.68766785 5.0l0.49868774 4.312332l0.18897247 3.3123398l-0.18897247 3.2519684l-0.24934387 4.435692l-0.37532806 5.939636l-1.0 4.7480316l-0.8740158 3.2519684l-2.18898 6.68766l-2.0603638 5.1863556l-3.2519684 6.624672l-2.0 3.8136444l-3.8740158 5.7480392l-3.375328 3.7506561l-3.2493439 3.5013123l-2.7506561 2.8740082l-4.062992 3.5013123l-5.249344 3.9370117l-5.56168 3.9370117l-4.750656 2.6876526l-4.813648 2.2493439l-3.375328 1.1259918l-4.624672 1.3753204l-4.56168 1.4356995l-3.624673 .7506561l-3.937008 .561676l-2.9999995 .3753357l-3.937008 .31233215l-4.43832 0l-4.8766403 -0.18635559l-5.8740163 -0.8766327l-4.186352 -0.561676l-6.1889753 -1.4986877l-3.4356956 -0.93963623l-7.5643044 -2.6246796l-4.56168 -2.4986877l-4.624672 -2.5013123l-4.5643044 -2.9369965l-6.3727036 -5.1863556l-5.1889763 -4.876648l-4.43832 -5.249344l-3.8110237 -5.0629883l-4.18898 -6.561676l-2.8740158 -6.31234l-2.8740158 -6.624672l-2.0 -7.249344l-1.5643005 -6.9396286l-0.49868774 -4.0603714l-0.24934387 -4.375328l-0.12598419 -4.1889725l0.31233215 -5.1233597l0.50131226 -4.750656l1.1233597 -6.5013123l1.1259842 -4.0603676l1.3123398 -4.2519684l1.3753281 -3.8110237l2.81102 -6.2519684l1.9396362 -4.0l2.6850357 -4.1233597l2.7506561 -3.7506561l2.813652 -3.7506561l2.2493439 -2.687664l1.8136482 -1.8740158l-47.564304 0z"
                    );
                    radiusDiv = 65;
                    break;
                case 219: // 3,3-diethyl-2,2-dimethylheptane
                    path = new Path2D(
                        "m13.501312 -304.00067l-28.501312 0l-19.251968 19.24936l0 29.002625l19.375328 19.375336l0 68.12335l-18.937008 18.937012l0 28.813644l19.532808 19.532806l0 67.21785l-19.858267 19.860893l-67.61155 0l-19.80577 -19.805775l0 -67.055115l19.779526 -19.779526l0 -27.97113l-20.110237 -20.11023l-27.61155 0l-19.682419 19.67978l0 27.181107l19.181107 20.249344l0 67.49869l-19.624664 19.627296l-66.62468 0l-20.249344 -18.627296l-28.75064 0l-19.375336 19.375328l0 28.375328l19.687653 19.687664l27.438324 0l19.842514 -19.84252l68.157486 0l20.078735 20.078741l0 66.57742l-20.039368 20.039368l0 27.45932l19.45932 20.249344l28.249344 0l19.375328 -19.375336l0 -27.874008l-18.624672 -19.249344l-0.49868774 -67.750656l19.748032 -20.750656l67.0 0l19.87664 19.87664l0 68.12336l-19.186352 19.18898l0 27.81102l19.309711 20.0l0 67.750656l-19.372704 19.375336l0 28.125977l19.687664 19.687653l27.937008 0l19.343834 -19.343811l0 -27.845154l-19.047245 -19.047241l0 -68.45145l19.976376 -19.97638l0 -28.774277l-20.02362 -18.249344l0 -69.0l19.125984 -19.125984l67.874016 0l19.564308 19.56168l27.685036 0l20.094482 -20.091864l68.15486 0l19.999985 20.656168l27.251984 0l19.876648 -19.874016l68.87137 0l19.564331 19.564304l27.18634 0l19.97113 -19.968504l68.02887 0l19.388428 19.388453l27.362244 0l19.43042 -19.430447l0 -28.181103l-18.713928 -18.71391l-28.716492 0l-19.356964 19.356953l-67.14438 0l-19.821503 -19.821522l-29.178497 0l-19.338562 19.338583l-66.91077 0l-19.750671 -19.160105l-29.249329 0l-19.375336 19.375328l-66.87401 0l-19.937012 -19.937008l-29.062988 0l-19.656166 19.656168l-66.845146 0l-19.04462 -19.044619l0 -68.54855l19.398952 -19.396324l0 -28.104988l-20.102364 -19.249344l0 -68.249344l20.0 -20.0l0 -26.501312z"
                    );
                    radiusDiv = 60;
                    break;
                case 220: // Magnum Rifle
                    path = new Path2D(
                        "m200 45l48.99997 -5.81102l5.0629883 0l0 -1.1889801l3.758545 -1.0078735l9.803162 0l1.4330444 -0.8267746l6.1916504 0l4.876587 -6.1023636l0.9370117 -0.561676l2.0629883 -0.43832397l8.561707 0l0 -18.68766l-0.9370117 -0.9370041l-15.375305 0l-20.81366 11.125984l-14.123352 0l-0.8451538 -0.8451462l-17.779541 0l0 -1.5931778l-59.251953 1.3753281l-1.561676 -0.31233215l-1.1863708 -1.1259918l-1.3123169 -0.7506561l-1.6273193 -0.37532806l-5.1863403 -1.0l-1.7506714 -0.6850357l-1.0 -1.3753281l-0.37530518 -0.93963623l-0.37271118 -2.4356918l-0.18896484 -2.438324l-0.43832397 -5.6246643l-0.6246948 -8.687668l0 -5.750656l0.18899536 -8.435696l0.49868774 -5.813648l0.56430054 -3.1259842l0.6850281 -1.312336l1.1260071 -1.2493439l2.5013123 -0.9370079l6.2493286 -1.5013123l0.9370117 -1.0l1.6246643 -0.68766403l58.126007 -0.49868774l2.435669 -2.5616798l17.062988 0l1.1889954 -1.1889763l13.811005 0l21.438354 10.624672l15.312317 0l0 -3.8740158l20.624695 0l0 3.8136482l40.8136 0l4.123413 -3.3149605l-0.24938965 -12.56168l-1.3753052 -1.5616798l-0.43566895 -0.8766403l0 -3.4356956l0.37268066 -1.0l0.93963623 -1.1889763l2.123352 -0.9370079l3.876648 -1.1233597l4.123352 -0.7506561l3.876648 -0.37532806l4.2493286 0l3.0 .24934387l4.2493286 .50131226l3.2493896 .7480316l2.876587 1.0l1.1864014 1.0l0.43829346 1.2519684l0 4.249344l-0.24932861 1.0629921l-0.87664795 1.2493439l-0.24932861 12.186352l3.6246338 2.687664l65.0 -0.7480316l1.9055176 -3.301838l18.15747 0l1.9527588 3.380577l71.04724 -1.3910751l1.6246948 1.8740158l0.7506714 2.375328l0.9370117 4.4356956l0.43829346 5.9396324l-0.12597656 7.4356956l-0.18634033 7.5643044l-0.25195312 2.6876678l-0.56170654 2.8740158l-0.6876831 2.0629883l-1.0 1.4356918l-71.06299 1.1889801l0 18.375328l6.0629883 0l3.6115723 2.083992l5.6378174 0l0.81359863 .8530197l0.6246948 1.186348l0.43829346 1.3753281l39.624695 0l6.4987183 .56430817l9.501282 1.0l9.624695 0l11.624634 1.6876602l43.189026 0l3.312317 -0.8136444l2.0603638 -1.0629959l1.56427 -1.186348l1.4987183 -1.1259918l4.312317 0l-1.2808228 -1.280838l0 -1.2178421l6.343811 -11.50132l6.501343 1.0l0 8.062996l2.0603638 -1.6876602l3.2519531 -2.0l3.4987183 -1.2493439l2.1259766 -0.37532806l1.2493286 .6876602l2.2493286 0l1.0 .561676l0.56433105 1.0629959l0 2.81102l2.1863403 -1.6246719l2.5617065 -1.3123322l2.8135986 -1.3123398l2.4383545 -0.7506561l2.312317 -0.18634796l1.3123169 .8740158l2.5617065 0l1.5617065 .62729645l0.8765869 1.3727036l0 6.68766l2.015747 1.162735l7.5459595 0l4.5459595 4.545929l511.70343 -3.582672l0 -1.6246719l5.687622 -1.876648l5.624634 -1.561676l5.624756 -1.561676l2.8135986 -0.37532806l0 -2.6876678l-1.1864014 -2.6876678l-1.3122559 -3.7506561l-1.1259766 -3.937004l-0.12597656 -2.6876678l0.25195312 -2.7506561l0.87402344 -1.4986801l1.5616455 -1.0629959l1.1259766 -0.31233978l3.4383545 -0.06298828l2.4986572 .6876602l1.4383545 .75066376l1.7480469 1.1259842l14.627197 0l1.8110352 -0.6273041l2.4383545 -0.62467194l2.687622 -0.24934387l5.7507324 0l1.6246338 .56168365l1.6246338 1.0l1.7507324 1.7506561l1.8110352 2.6876602l1.1889648 2.5616837l0.81103516 2.375328l0 8.18898l2.1259766 2.1259842l0 3.2493439l1.112793 .6430435l0 2.3569565l1.7612305 .8110199l1.5012207 2.3123322l1.1234131 2.7506638l0.24938965 3.186348l0.12597656 3.1259842l-0.5617676 3.2493439l-1.3752441 2.5013123l-1.9370117 2.186348l-2.1259766 1.1259918l-2.9370117 .561676l-27.125977 0l-1.4987793 -0.561676l1.3753662 -0.62467194l1.3753662 0l0 -1.251976l-3.3149414 0l-0.36486816 1.3622055l-405.63513 7.3884583l0.81359863 2.9369965l0.5013428 3.627304l0.24926758 4.4356995l-0.6246338 5.0629883l-2.0629883 4.8136444l-1.3123779 1.6246796l-2.8135986 2.6246643l-3.7506104 2.3123474l-4.435791 1.561676l-6.0 .7506561l-5.8135986 .561676l-36.561646 3.3753204l0 7.9370117l-0.87402344 1.5643158l-2.1259766 1.3123322l-2.4383545 .49868774l-2.3753662 -0.49868774l-1.4986572 -0.9370117l-0.81365967 -1.1259766l0 -7.8136597l-263.18634 20.939636l-12.0 .9370117l-15.876648 1.6876678l-14.874023 2.0l-14.125977 1.8740082l-1.8740234 .68766785l-3.5616455 2.0629883l-2.4383545 1.3753357l-2.687622 1.9369965l-3.8740234 1.4986877l-4.0629883 .81365967l-5.312378 .6246643l-8.375305 .8136444l-12.498657 1.0603638l-13.126038 .7506561l-45.75061 4.5013275l-10.375366 1.3123322l-5.811035 .37532043l-5.0629883 .06036377l-4.188965 -0.31233215l-3.8110352 -0.24934387l-4.5616455 -0.24934387l-2.312317 2.0630035l-1.8136597 1.0603638l-1.6246948 -0.18635559l-1.5012817 -0.8740082l-1.2493896 -0.5643158l-1.4382935 0l-0.6876831 .5643158l-0.37268066 1.7480164l0.06036377 3.9396362l-0.12335205 5.4356995l-1.1889648 5.18898l-1.43573 3.81102l-1.876648 3.3123322l-2.7479858 3.876648l-4.3150024 3.9370117l-4.748047 2.3753204l-3.6246338 1.6876678l-3.9396362 .68766785l-5.624695 .18634033l-9.0 -0.06298828l-5.7480164 -0.43569946l-5.5013123 -0.8136444l-5.4986877 -1.1259918l-4.188965 -1.4356842l-4.3123474 -2.1259918l-2.6246643 -1.6246643l-2.9370117 -2.5013123l-2.2519836 -3.0l-1.3123169 -2.4986877l-0.6876831 -2.6876678l-0.49868774 -2.8136444l-0.12597656 -4.249344l-0.49868774 -3.4356995l-1.1259766 -3.6876678l-2.0 -3.1259766l-3.0629883 -2.7506561l-2.9370117 -1.8740234l-2.8110352 -1.3753204l-3.2519531 -0.561676l-2.687683 -0.12599182l-3.6246643 .50131226l-19.123352 6.6850433l-8.876648 3.3149567l-4.1863403 2.1863556l-7.5013123 4.438324l-4.4356995 3.1863403l-5.438324 3.6876678l-4.8740234 4.438324l-4.5643005 4.687668l-3.8110046 4.249344l-4.1889954 5.2493286l-4.3123474 6.3753357l-3.2493286 5.438324l-2.4986877 3.9370117l-1.7506409 2.9370117l-1.3123474 1.5013123l-2.3753357 1.4986877l-2.1889648 .12597656l-3.2493591 .06298828l-3.3753357 -0.6272888l-5.0 -1.0l-9.624664 -1.1863708l-9.375336 -1.561676l-10.0 -2.0l-10.123352 -2.6246643l-7.6876526 -2.438324l-2.1259766 -1.0629883l-1.3123474 -1.3753357l-0.9370117 -1.9369965l-1.0 -1.3123322l-1.561676 -0.7506714l-2.0629883 -0.31233215l-2.3753357 .43832397l-38.501312 14.063004l-42.687668 15.312317l-41.87401 15.312347l-32.687668 11.624664l2.7506561 6.687683l0.24934387 2.6246643l-1.561676 2.1259766l-2.3123322 1.6850281l-3.18898 .62731934l-2.1863556 -0.12600708l-1.561676 -1.0629883l-1.2519684 -1.561676l-0.9370117 -2.2493286l-1.3123322 -2.876648l-0.6246643 -1.7506714l-42.687668 15.687683l-39.561684 13.501312l-16.125984 5.1259766l-4.312336 1.0l-2.312336 .12335205l-2.1259842 -0.6876526l-1.4356956 -2.0629883l-0.8766403 -3.7480469l-1.4356956 -6.6876526l-1.5013123 -9.251984l-0.7506561 -8.624664l-1.7480316 -16.624664l-0.8766403 -8.435699l-0.9370079 -10.939636l-0.56167984 -8.561676l-0.8766403 -9.125977l-0.68766403 -8.123367l-0.62467194 -8.813644l-1.312336 -14.561676l-0.8110237 -12.18898l-1.2519684 -15.372711l-0.9370079 -10.564301l-0.31233597 -9.062988l0.062992096 -5.8740234l0.37532806 -4.81102l0.8740158 -3.438324l1.2493439 -3.0l1.7506561 -1.6876526l3.0 -1.1259918l3.687664 -0.8740082l5.874016 -0.3123474l42.12598 -1.2493439l22.062996 -1.4383087l21.937004 0l33.93701 -3.2493439l139.99998 -8.125992l33.0 -1.0l12.0 -0.24934387l5.438324 .18635559l5.126007 1.0629883l3.561676 1.5013123l3.561676 2.372696l3.438324 2.7506561l4.1259766 3.0l4.1863403 2.3123474l4.063019 1.5013123l5.2493286 1.2493439l4.5013123 .18634033l9.874023 0l4.438324 -0.18634033l4.6876526 -0.87402344l4.7480164 -1.6876526l8.750671 -3.18898l28.249329 -10.81102l15.188995 -5.0630035l16.199463 -4.341202l0 -1.8477783l-5.3254395 0l-1.1260071 -1.561676l-0.74801636 -2.3123322l-0.18899536 -2.8740082l0 -2.3753357l0.18899536 -1.9370041l1.3123474 0l0 -3.3123398l-1.5013428 0l0 -2.18898l0.3123474 -1.6876602l1.0 -1.438324zm41 88l-10.750671 .31233215l-2.4986877 .6273041l-2.6876526 1.1863556l-2.3753357 2.0l-2.3123474 2.3753204l-1.5013123 2.7506561l-1.3123169 3.1233673l-0.81103516 3.0629883l-0.06298828 2.5013123l0.3123474 3.372696l0.6876526 3.3753357l1.6246643 3.8136444l1.8110352 2.3753357l2.3753052 2.0629883l2.5013428 1.6246796l2.2493286 .74801636l4.1259766 1.6876678l4.4356995 1.1889801l5.1889954 1.123352l3.9369812 .5643158l5.4986877 .49868774l6.188965 -0.43569946l4.8740234 -0.50131226l4.501343 -0.9370117l4.123352 -1.3123322l3.6273193 -1.8136444l3.3726807 -2.6876678l2.9396362 -3.6876678l2.1863403 -3.9370117l0.9370117 -3.3753204l0.12597656 -3.4356995l-0.3123169 -4.0629883l-0.6876831 -2.5643005l-1.4382935 -3.1863556l-1.4383545 -2.0629883l-2.0 -2.1233673l-1.4986572 -0.8766327l-2.5013428 -1.0630035l-5.2493286 -0.93699646l-4.8740234 -0.68766785l-3.5616455 -0.3753357l-3.876648 -0.18634033l-8.24939 0l-0.81359863 1.4986877l-0.7480469 1.7506561l-1.0629883 1.0l-1.9370117 2.5013123l-2.126007 2.2493439l-1.2493286 2.6876678l-1.2519836 3.2493286l-0.81100464 3.0630035l-0.12600708 3.7506561l0.56433105 2.6246643l1.2493286 2.3753357l1.6246643 2.123352l2.3123474 2.0629883l1.5013123 1.3123474l0.9369812 1.3753204l0 1.2493439l-0.9369812 .43832397l-2.314972 -0.49868774l-1.7480164 -1.6876678l-2.0 -2.18898l-1.7506714 -2.2493286l-1.6876526 -3.0l-1.1863403 -3.1259918l-0.50131226 -2.6876678l0 -2.81102l0.37530518 -3.0629883l1.0 -2.8136597l1.6246948 -2.81102l1.561676 -2.3123322l1.3123169 -1.8136444l0.50131226 -2.2493439z"
                    );
                    radiusDiv = 106;
                    break;
                case 221: // SMG
                    path = new Path2D(
                        "M 19.28125 -128.41406 L 16.330078 -117.41016 L -15.058594 -117.41016 L -32.226562 -97.466797 L -58.757812 -97.466797 L -58.757812 -85.503906 L -231.64844 -85.503906 L -231.64844 -90.533203 L -232.51367 -96.253906 L -234.25 -98.855469 L -237.36914 -100.41797 L -264.76953 -100.41797 L -270.31836 -98.162109 L -273.26562 -95.212891 L -275 -89.664062 L -276.21289 -77.351562 L -277.25391 -37.640625 L -280.375 -0.18359375 L -284.53711 35.191406 L -284.12695 38.126953 L -283.6875 40.9375 L -282.49805 43.375 L -280.6875 44.4375 L -278.4375 44.5625 L -275.4375 42.6875 L -273.12695 39.501953 L -271.375 32.126953 L -264.0625 2.8144531 L -258.75 -18.3125 L -254.49805 -36.0625 L -253.49805 -40.814453 L -251.81445 -44.498047 L -248.81445 -48.25 L -243.81445 -51.3125 L -233.18555 -56.375 L -233.18555 -65.498047 L -230.625 -68.0625 L -46 -68.0625 L -43.498047 -65.5625 L -43.498047 -55.375 L -6.75 -22.75 L 16.375 -22.75 L 16.375 -19.625 L 34.25 -19.625 L 40.75 -15.873047 L 47.125 -11.126953 L 51.501953 -7 L 54.375 1.5019531 L 56.25 10.375 L 56.25 17.625 L 53.625 26.501953 L 49 38.501953 L 44 41.75 L 42 46.75 L 5.5625 97.5625 L -0.75 107.0625 L -4.8144531 112.0625 L -9.0625 116.25 L -10.126953 118.625 L -10.3125 121.50195 L -8.375 123.75 L 4.4375 128.5625 L 35.4375 138.50195 L 52.6875 144.12695 L 61.625 147.25 L 66.75 149 L 69.501953 148.9375 L 72 145.87305 L 72.3125 144.375 L 70.814453 142.625 L 69.375 139 L 68.873047 135.81445 L 69.125 132.5625 L 72.5625 124.4375 L 92.375 85.75 L 109.4375 53.126953 L 114.4375 53.126953 L 117.0625 51.9375 L 120.50195 51.625 L 123.5625 52.375 L 131.3125 60.75 L 210.25 60.75 L 213.375 54.625 L 216.6875 49.625 L 218.87305 47.375 L 222.3125 46.0625 L 248.51367 43.513672 L 248.9375 41.9375 L 252.0625 41.9375 L 252.0625 45.4375 L 250.25 45.4375 L 250.25 51.75 L 257.9375 51.75 L 257.9375 50 L 267.75 50 L 272 70.75 L 277.25 88.75 L 285.50195 117.25 L 294.75 141.50195 L 304.4375 165.0625 L 307.375 165.87305 L 330.4375 154.375 L 347.9375 147 L 348.75 144.25 L 343.25 131.25 L 333.75 106.50195 L 325 80.501953 L 317.625 47 L 317.625 39.375 L 321.4375 37.9375 L 324.87305 37.9375 L 326.5625 37.185547 L 326.6875 35.4375 L 325.9375 33.126953 L 322.4375 27.375 L 319.25 25.375 L 317.0625 25.375 L 315.125 9.9375 L 311 -9.4375 L 311 -18.3125 L 308.9375 -18.3125 L 308.9375 -19.9375 L 312.25 -19.9375 L 312.25 -22 L 315.625 -22 L 315.625 -18.185547 L 320.50195 -13.375 L 536 -13.375 L 536 -27.873047 L 539.23828 -38.873047 L 539.23828 -46.765625 L 542.4375 -47.625 L 542.4375 -39.75 L 576.18555 -39.75 L 576.18555 -42.814453 L 596.75 -42.814453 L 601.625 -45.5625 L 632.87305 -45.5625 L 634.9375 -46.9375 L 634.9375 -70.779297 L 602.40625 -70.779297 L 598.9375 -74.25 L 577.0625 -74.25 L 574.5625 -77.9375 L 574.5625 -82.0625 L 577.0625 -85.75 L 577.0625 -106.3125 L 570.9375 -112.75 L 546.5625 -112.75 L 541.87305 -106.18555 L 541.87305 -101.87305 L 531.18555 -101.87305 L 527.50195 -107.375 L 526.33008 -105.27344 L 522.3418 -105.27344 L 518.61328 -110.64844 L 518.61328 -118.71094 L 516.61914 -120.70508 L 514.01758 -120.70508 L 510.54883 -125.9082 L 494.07617 -125.9082 L 491.99414 -122.61133 L 465.46289 -122.61133 L 459.39453 -118.625 L 459.39453 -109.60547 L 85 -109.60547 L 85 -121.05273 L 81.359375 -121.05273 L 75.289062 -125.03906 L 75.289062 -128.41406 L 19.28125 -128.41406 z M 532.6875 -85.0625 L 543.4375 -85.0625 L 544.625 -82.5625 L 544.875 -80.375 L 543.625 -76.185547 L 541.875 -71.6875 L 540.3125 -69.25 L 538.3125 -69.25 L 535.75 -72.4375 L 533.625 -77.5625 L 532.5625 -81.4375 L 532.6875 -85.0625 z M 156.375 6.0625 L 198.5625 6.0625 L 200.87305 8.375 L 200.87305 37 L 198.50195 37.75 L 196.25 39.625 L 194.25 42.25 L 193.12695 45.375 L 193.12695 50.126953 L 136.87305 50.126953 L 126 35.501953 L 126 11.126953 L 130 6.25 L 133.625 6.25 L 135.50195 8.625 L 135.50195 17.75 L 136.375 24.25 L 138.87305 30.873047 L 142.25 37.25 L 145.625 41.75 L 149.625 44.873047 L 153.50195 44.873047 L 153.50195 41.501953 L 151.375 39 L 149.75 32.625 L 149.25 26.375 L 150.75 19.625 L 152.50195 13.375 L 156.375 6.0625 z "
                    );
                    radiusDiv = 74;
                    break;
                case 222: // Ship-22 Body
                    path = new Path2D(
                        "m-505.57953 -92.94494l288.576 0l43.68721 40.416405l333.46558 0l66.132 -102.95984l289.97937 0l-97.996155 153.35243l97.59534 153.48001l-289.97934 0l-66.33188 -102.70404l-332.86493 0l-42.484802 40.544632l-291.7824 0l98.195984 -91.0648z"
                    );
                    radiusDiv = 85;
                    break;
                case 223: // Ninja Star
                    path = new Path2D(
                        "m-0.34747374 -329.82632l0 93.29396l-234.10236 0l66.24147 69.01837l-165.43309 166.8189l96.763794 0l0 235.83989l69.71129 -67.62991l166.47244 167.16798l0 -98.49869l234.10498 0l-65.89502 -70.057755l165.08662 -166.12598l-96.76378 0l0 -237.57217l-70.404205 70.40419z"
                    );
                    radiusDiv = 70;
                    break;
                case 224: // Missile
                    path = new Path2D(
                        "M -238.80859 -93.488281 L -238.80859 -23.257812 L -250.25586 -23.257812 L -262.21875 -20.65625 L -262.21875 21.132812 L -248.86719 23.560547 L -239.1543 23.560547 L -239.1543 93.099609 L -215.22656 93.099609 L -99.039062 23.388672 L .15234375 23.388672 L .15234375 46.626953 L 46.970703 46.626953 L 115.81641 23.214844 L 172.3457 23.214844 L 172.3457 58.416016 L 213.09961 23.388672 L 239.80273 23.388672 L 272.58008 21.828125 L 305.00391 16.800781 L 334.13867 9.8632812 L 347.31641 4.6601562 L 355.29688 -0.021484375 L 346.625 -5.3964844 L 332.75195 -10.945312 L 303.44531 -17.708984 L 270.67188 -22.21875 L 242.05664 -23.603516 L 213.27344 -23.603516 L 172.86914 -58.113281 L 172.86914 -23.779297 L 117.20117 -23.779297 L 47.490234 -46.84375 L .49804688 -46.84375 L .49804688 -23.431641 L -99.039062 -23.431641 L -214.70312 -93.488281 L -238.80859 -93.488281 z M -231.69922 -23.779297 L -201.35156 -23.779297 L -201.35156 -21.525391 L -232.21875 -21.525391 L -231.69922 -23.779297 z M -232.21875 22.267578 L -201.35156 22.267578 L -201.35156 24.521484 L -231.69922 24.521484 L -232.21875 22.267578 z"
                    );
                    radiusDiv = 75;
                    break;
                case 225: // Missile Launcher
                    path = new Path2D(
                        "M -230.31445 -46.876953 L -251.27539 -44.052734 L -241.40234 -13.146484 L -247.12305 -12.277344 L -249.22852 -6.3066406 L -250.27734 -0.671875 L -249.20898 5.4960938 L -245.93359 15.111328 L -243.23047 16.056641 L -253.25781 37.097656 L -231.20117 36.740234 L -227.23242 48.664062 L -220.99023 50.78125 L -199.83789 47.941406 L -200.43164 52.632812 L -199.48242 55.96875 L -196.01367 58.787109 L -190.44141 61.205078 L -181.79297 63.595703 L -184.89844 71.689453 L -181.9043 72.837891 L -178.48633 63.933594 L -172.39258 64.509766 L -176.49414 75.193359 L -174.22656 76.0625 L -168.66602 61.574219 L -169.61719 53.408203 L -159.20898 53.875 L -118.70508 60.279297 L -109.95117 63.638672 L -71.542969 71.013672 L -43.630859 75.03125 L -18.464844 75.050781 L -4.8867188 74.90625 L 10.337891 68.03125 L 27.875 58.960938 L 37.685547 50.140625 L 42.193359 52.005859 L 72.388672 36.816406 L 77.220703 38.535156 L 74.683594 44.792969 L 50.230469 58.972656 L 44.572266 56.267578 L 25.378906 67.910156 L 34.826172 89.34375 L 47.511719 83.5 L 58.78125 79.255859 L 60.248047 74.734375 L 63.845703 73.033203 L 71.25 74.671875 L 105.08398 75.472656 L 137.54492 74.273438 L 204.96094 74.439453 L 224.96289 73.949219 L 233.16602 74.552734 L 249.05859 72.21875 L 276.08789 67.728516 L 274.56445 71.699219 L 279.46484 73.580078 L 283.94531 61.908203 L 359.06836 48.966797 L 403.94336 48.380859 L 402.19727 52.931641 L 408.38281 55.306641 L 411.0918 48.246094 L 431.58984 48.212891 L 436.37695 50.050781 L 439.55664 41.765625 L 442.17969 42.771484 L 444.57617 36.529297 L 439.26562 34.490234 L 441.50586 28.65625 L 437.59766 27.15625 L 361.4043 26.835938 L 248.74023 28.046875 L 224.86719 27.453125 L 199.4707 27.345703 L 165.80664 28.888672 L 165.45508 24.867188 L 187.44141 24.203125 L 213.92188 22.478516 L 251.75391 17.308594 L 296.60547 8.6132812 L 340.97266 -3.4296875 L 354.75977 -9.0976562 L 340.06445 -14.365234 L 287.81641 -24.386719 L 234.94727 -32.791016 L 179.89062 -36.458984 L 143.38672 -35.240234 L 103.5 -31.972656 L 60.712891 -26.478516 L 57.771484 -23.890625 L 49.011719 -23.816406 L 45.412109 -26.777344 L 26.986328 -27.162109 L -55.15625 -24.138672 L -114.19336 -22.277344 L -151.52539 -20.353516 L -153.61133 -22.173828 L -159.91211 -22.455078 L -169.98242 -21.865234 L -230.31445 -46.876953 z M 42.201172 18.8125 L 43.472656 26.664062 L -165.125 28.414062 L -165.99219 24.736328 L 42.201172 18.8125 z M 55.267578 20.361328 L 76.419922 20.712891 L 77.941406 26.519531 L 56.652344 26.515625 L 55.267578 20.361328 z M 86.373047 21.994141 L 154.92383 25.136719 L 86.681641 27.466797 L 86.373047 21.994141 z "
                    );
                    radiusDiv = 70;
                    break;
                case 226: // Atlantis Body
                    path = new Path2D(
                        "M -14041.4766 2846.028300000001 L -14036.4254 -2751.7509 -10816.187 -4912.1557 8138.211400000002 -4912.1557 10869.270600000002 -3526.2245000000003 13885.689800000002 60.84910000000036 11562.269000000002 2954.9899000000005 10950.8114 3647.9227 8097.473800000002 5033.853900000001 -10816.187 5033.853900000001 Z"
                    );
                    radiusDiv = 8000;
                    break;
                case 227: // Grid
                    path = new Path2D(
                        "m -43.4995,-43.4995 v 4.91205 6.78703 4.91206 14.65022 4.91401 14.64826 4.91401 14.65022 4.91206 6.78703 4.91205 H 38.58745 43.4995 V 38.58745 31.80042 26.88836 12.23814 7.32413 -7.32413 v -4.91401 -14.65022 -4.91206 -6.78703 -4.91205 h -4.91205 z m 4.91205,4.91205 h 6.78703 v 6.78703 h -6.78703 z m 11.69713,0 h 14.65218 v 6.78703 h -14.65218 z m 19.56619,0 H 7.32413 v 6.78703 H -7.32413 Z m 19.56227,0 h 14.65022 v 6.78703 H 12.23814 Z m 19.56228,0 h 6.78703 v 6.78703 h -6.78703 z m -70.38787,11.69909 h 6.78703 v 14.65022 h -6.78703 z m 11.69713,0 h 14.65218 v 14.65022 h -14.65218 z m 19.56619,0 H 7.32413 v 14.65022 H -7.32413 Z m 19.56227,0 h 14.65022 v 14.65022 H 12.23814 Z m 19.56228,0 h 6.78703 v 14.65022 h -6.78703 z m -70.38787,19.56423 h 6.78703 V 7.32413 h -6.78703 z m 11.69713,0 h 14.65218 V 7.32413 h -14.65218 z m 19.56619,0 H 7.32413 V 7.32413 H -7.32413 Z m 19.56227,0 H 26.88836 V 7.32413 H 12.23814 Z m 19.56228,0 h 6.78703 V 7.32413 h -6.78703 z m -70.38787,19.56227 h 6.78703 v 14.65022 h -6.78703 z m 11.69713,0 h 14.65218 v 14.65022 h -14.65218 z m 19.56619,0 H 7.32413 V 26.88836 H -7.32413 Z m 19.56227,0 H 26.88836 V 26.88836 H 12.23814 Z m 19.56228,0 h 6.78703 v 14.65022 h -6.78703 z m -70.38787,19.56228 h 6.78703 v 6.78703 h -6.78703 z m 11.69713,0 h 14.65218 v 6.78703 h -14.65218 z m 19.56619,0 H 7.32413 v 6.78703 H -7.32413 Z m 19.56227,0 h 14.65022 v 6.78703 H 12.23814 Z m 19.56228,0 h 6.78703 v 6.78703 h -6.78703 z"
                    );
                    radiusDiv = 80;
                    break;
                case 228: // Bow Core
                    path = new Path2D(
                        "M 26263.09846 124848.78024 C 12462.331121401558 138649.54757859843 -9913.133721401553 138649.54757859843 -23713.901060000004 124848.78024000001 L -123664.90154 24897.77975999999 C -130292.26373270349 18270.417567296507 -134015.47704394883 9281.785495679942 -134015.47704394886 -90.72000000005937 -134015.47704394886 -9463.225495679973 -130292.26373270355 -18451.857567296567 -123664.90154000005 -25079.219760000065 L -23713.901059999993 -125030.22024000002 C -9913.133721401538 -138830.98757859846 12462.33112140154 -138830.98757859846 26263.09845999999 -125030.22024000002 L 126214.09894 -25079.219760000007 C 140014.86627859843 -11278.45242140157 140014.86627859846 11097.012421401538 126214.09894000001 24897.77975999999 Z"
                    );
                    radiusDiv = 100000;
                    break;
                case 229: // k
                    path = new Path2D(
                        "M -2505.8469999999993 -9786.8972 L -6211.4472 -9190.269199999999 -6211.4472 9504.074800000002 -2505.8469999999993 9504.074800000002 -2505.8469999999993 3786.389800000001 C -2083.0603999999994 4109.563300000002 -1685.1435999999994 4532.174800000001 -1262.356999999999 5004.505300000001 -839.5703999999996 5476.835800000001 -416.78379999999925 5998.885300000002 -43.736799999999675 6520.934800000001 329.3102000000008 7042.9843 702.3572000000004 7565.033800000001 1050.5344000000005 8087.083300000002 1373.841800000001 8609.1328 1672.2794000000013 9081.4633 1945.847200000001 9504.074800000002 L 6198.583000000001 9504.074800000002 C 5925.015200000001 8957.165800000002 5576.838000000001 8360.537800000002 5154.051400000001 7689.331300000002 4731.264800000002 7018.124800000001 4283.608400000002 6371.777800000002 3786.2124000000013 5700.571300000001 3288.8164000000006 5029.364800000001 2766.5506000000014 4407.8773 2244.2848000000004 3786.389800000001 1722.0190000000011 3164.9023000000016 1199.753200000001 2617.9933 702.3572000000004 2170.5223000000005 1697.1492000000007 1201.0018 2617.331800000001 256.34079999999994 3462.9050000000016 -663.4606999999996 4283.608400000002 -1583.2621999999992 5154.051400000001 -2552.782699999999 6024.4944000000005 -3572.0221999999994 L 1622.5398000000005 -3572.0221999999994 C 1398.7116000000005 -3298.5676999999996 1100.2740000000013 -2950.5346999999992 776.9666000000007 -2577.6421999999993 478.52900000000045 -2204.7496999999994 130.35180000000037 -1782.1381999999994 -242.6951999999992 -1359.5266999999985 -615.7421999999997 -936.9151999999995 -988.7891999999993 -514.3036999999986 -1386.7059999999992 -91.6921999999995 -1759.7529999999997 330.9193000000014 -2132.7999999999993 753.5308000000005 -2505.8469999999993 1151.2828000000009 L -2505.8469999999993 -9786.8972 Z"
                    );
                    radiusDiv = 3200;
                    break;
                case 230: // Terminator
                    path = new Path2D(
                        "M 1.1926452,8.2525e-4 .57453922,0.95420971 .04413176,0.78344108 -1.2866688,0.94915731 -0.64483857,0.28750215 v -0.57500783 l -0.64183023,-0.66165511 1.33080056,0.16571618 .53040746,-0.1707686 z"
                    );
                    break;

                case 231: // Sun
                    path = new Path2D(
                        "M 8977.0478 1.0478000000002794 L 5311.276224072266 1304.682748730469 5311.276224072266 -1302.5871487304685 Z M 6315.772244444444 -6422.517755555555 L 4645.964064072268 -2908.274988730468 2802.3705887304714 -4751.868464072265 Z M -106.95219999999972 -9082.9522 L 1196.682748730469 -5417.180624072265 -1410.5871487304685 -5417.180624072265 Z M -6530.517755555555 -6422.517755555555 L -3016.274988730468 -4751.868464072265 -4859.868464072265 -2908.274988730468 Z M -9190.9522 1.0478000000002794 L -5525.180624072265 -1302.5871487304685 -5525.180624072265 1304.682748730469 Z M -6530.517755555555 6423.772244444444 L -4859.868464072265 2910.3705887304714 -3016.274988730468 4753.964064072268 Z M -106.95219999999972 9085.0478 L -1410.5871487304685 5419.276224072266 1196.682748730469 5419.276224072266 Z M 6315.772244444444 6423.772244444444 L 2802.3705887304714 4753.964064072268 4645.964064072268 2910.3705887304714 Z M -4648.9522 1.0478000000002794 C -4648.9522 -2507.4295337314643 -2615.4295337314643 -4540.9522 -106.95219999999972 -4540.952200000001 2401.525133731464 -4540.952200000001 4435.0478 -2507.429533731466 4435.0478 1.0477999999984604 4435.0478 2509.525133731464 2401.5251337314658 4543.0477999999985 -106.9521999999979 4543.0478 -2615.4295337314616 4543.0478 -4648.952199999999 2509.5251337314658 -4648.9522 1.0478000000020984 Z"
                    );
                    radiusDiv = 6400;
                    break;
                case 232: // UwU
                    path = new Path2D(
                        "M -67599.8489 -24560 L -67599.8489 3172.4110000000037 C -67599.8489 8196.398500000003 -66996.97039999999 12215.588500000005 -65791.2134 15162.9945 -64518.4699 18110.400500000003 -62508.874899999995 20320.955 -59628.4554 21861.644500000002 -56815.022399999994 23402.334000000003 -53130.764899999995 24206.172000000006 -48642.6694 24206.172000000006 -44020.60089999999 24206.172000000006 -40269.3569 23335.347500000003 -37455.923899999994 21526.712000000007 -34575.50439999999 19785.063000000002 -32632.895899999996 17440.535500000005 -31494.125399999997 14627.1025 -30422.34139999999 11813.669500000004 -29886.44939999999 7995.439000000002 -29886.44939999999 3172.4110000000037 L -29886.44939999999 -24560 -36250.1669 -24560 -36250.1669 3105.424500000001 C -36250.1669 9134.209500000004 -37254.9644 13220.386000000006 -39197.5729 15296.967500000006 -41207.16789999999 17440.535500000005 -44489.5064 18512.319500000005 -49178.56139999999 18512.319500000005 -51925.0079 18512.319500000005 -54202.548899999994 17976.427500000005 -56078.1709 16904.643500000006 -58020.7794 15832.859500000006 -59293.522899999996 14292.170000000006 -60097.3609 12349.561500000003 -60901.198899999996 10339.966500000002 -61236.1314 7258.5875000000015 -61236.1314 3105.424500000001 L -61236.1314 -24560 Z M -24326.569899999995 -11363.659499999998 L -13675.71639999999 23402.334000000003 -7512.958399999989 23402.334000000003 -479.37589999998454 -3325.279499999997 860.3541000000114 2569.532500000001 6353.247100000008 23402.334000000003 12516.00510000001 23402.334000000003 23367.81810000002 -11363.659499999998 17606.97910000001 -11363.659499999998 11712.167100000006 8732.290500000003 9702.572100000005 15430.940500000004 7960.9231000000145 8799.277000000002 2735.9761000000144 -11363.659499999998 -3292.808899999989 -11363.659499999998 -8852.688399999992 9000.236500000006 C -9924.472399999991 13421.345500000003 -10527.35089999999 15765.873000000007 -10594.33739999999 16167.792000000001 L -12670.91889999999 8732.290500000003 -18230.798399999992 -11363.659499999998 Z M 29128.65710000001 -24560 L 29128.65710000001 3172.4110000000037 C 29128.65710000001 8196.398500000003 29731.535600000017 12215.588500000005 31004.279100000014 15162.9945 32210.036100000012 18110.400500000003 34219.63110000001 20320.955 37100.05060000002 21861.644500000002 39980.47010000002 23402.334000000003 43597.741100000014 24206.172000000006 48152.82310000001 24206.172000000006 52774.89160000002 24206.172000000006 56459.14910000001 23335.347500000003 59339.56860000001 21526.712000000007 62153.00160000002 19785.063000000002 64162.596600000004 17440.535500000005 65234.38060000002 14627.1025 66306.1646 11813.669500000004 66842.05660000003 7995.439000000002 66842.05660000003 3172.4110000000037 L 66842.05660000003 -24560 60545.32560000001 -24560 60545.32560000001 3105.424500000001 C 60545.32560000001 9134.209500000004 59540.52810000001 13220.386000000006 57530.93310000001 15296.967500000006 55588.32460000002 17440.535500000005 52238.99960000001 18512.319500000005 47549.94460000002 18512.319500000005 44870.48460000001 18512.319500000005 42525.957100000014 17976.427500000005 40650.33510000001 16904.643500000006 38774.71310000001 15832.859500000006 37434.98310000001 14292.170000000006 36631.14510000001 12349.561500000003 35894.29360000002 10339.966500000002 35492.37460000001 7258.5875000000015 35492.37460000001 3105.424500000001 L 35492.37460000001 -24560 Z"
                    );
                    radiusDiv = 25600;
                    break;
                case 233: // Supercarrier Body
                    path = new Path2D(
                        "m -370.59277,-101.62303 31.2756,-31.27821 h 239.25984 l 7.128613,4.5433 1.603676,11.22835 -5.88189,9.98162 -8.375329,3.56431 h -51.86352 l -18.20734,10.511808 17.36745,10.026245 H 3.3074972 56.41773 l 34.275593,9.183731 h 82.456697 l 19.24672,-9.228348 h 90.89238 l 99.979,8.556427 166.63257,73.4251996 -166.63257,73.6036764 -100.8714,8.732277 h -89.1076 l -19.60629,-9.089233 -87.106516,0 -35.688769,8.645668 H -157.9786 l -17.66929,10.202095 17.63254,10.181104 h 51.36221 l 9.267713,3.76378 6.060372,10.51444 -1.07087,11.5853 -6.771652,3.74278 H -338.87098 l -31.45407,-31.456693 z"
                    );
                    radiusDiv = 85;
                    break;
                case 234: // Bow Hollow Square
                    path = new Path2D(
                        "M 541.9918 -157367.0523 L 156793.9918 -1115.0523000000103 541.9918 155136.9477 -155710.0082 -1115.0523000000103 Z M 541.9918 -72734.71902 L -71077.67492 -1115.0523000000103 541.9918 70504.61442 72161.65852000001 -1115.0523000000103 Z"
                    );
                    radiusDiv = 150000;
                    break;
                case 235: // Overdrive Redesign
                    path = new Path2D(
                        "M -38155.2158 -196.9519999999975 C -38155.2158 -21189.295341068457 -21137.55914106847 -38206.952 -145.21580000001268 -38206.952000000005 9935.662978801054 -38206.952000000005 19603.655208090873 -34202.33849771047 26731.912952900668 -27074.08075290068 33860.17069771047 -19945.823008090887 37864.7842 -10277.830778801072 37864.7842 -196.95200000000477 37864.7842 20795.391341068454 20847.12754106846 37813.048 -145.21579999999813 37813.048 -21137.559141068454 37813.048 -38155.21579999999 20795.39134106846 -38155.2158 -196.9519999999975 Z M 20801 -14160.860359999999 C 20801 -18016.989604361064 17674.989604361068 -21143 13818.86036 -21143 L -14108.860360000006 -21143 C -15960.638926890344 -21143 -17736.573464731344 -20407.383828539463 -19045.978646635413 -19097.9786466354 -20355.383828539474 -17788.573464731337 -21091.000000000015 -16012.638926890337 -21091.000000000015 -14160.860359999999 L -21091 13766.860360000006 C -21091 17622.98960436107 -17964.98960436107 20749 -14108.860360000006 20749 L 13818.860359999999 20749 C 17674.989604361064 20749 20801 17622.98960436107 20801 13766.860360000006 Z"
                    );
                    radiusDiv = 38000;
                    break;
                case 236:
                    path = new Path2D(
                        "m -0.83560792,-0.16484729 -0.14934489,0.08164876 0.14934489,0.08164877 V -5.16764e-4 L -0.98495281,0.08113253 -0.83560792,0.16278128 0.98546956,-0.001033 Z"
                    );
                    radiusDiv = 1;
                    break;
                case 237: // Circle with divider
                    path = new Path2D(
                        "M -21424.76549428232 -232.56278767007097 C -21455.469520310588 -7921.789564568044 -17375.936826617923 -15041.594358731802 -10726.716904784818 -18903.33303384653 -4077.4969829517104 -22765.071708961255 4128.23120634471 -22780.30946767396 10791.747456838419 -18943.2920917444 17455.26370733213 -15106.274715814836 21561.210646504594 -8001.670079481808 21559.064000000002 -312.38230000002295 L 67.06399999999849 -318.3823000000011 Z M 21575.012227136827 140.37279718391437 C 21610.00950699305 7829.581232008775 17534.452772617635 14951.662712221685 10887.390078400917 18817.113359032686 4240.327384184209 22682.564005843687 -3965.3910180768107 22702.383407937617 -10631.048617983643 18869.087186070145 -17296.706217890474 15035.79096420267 -21406.619353495393 7933.479979481808 -21408.766000000003 244.19220000002315 L 83.23400000000038 238.19220000000132 Z"
                    );
                    radiusDiv = 35000;
                    break;
                case 239: // Shotgun
                    path = new Path2D(
                        "m114.0 -29.624672l75.186356 0l2.2519684 -1.6246719l2.4986877 -1.312336l2.8136444 -0.56430435l2.9370117 -0.31233597l17.312332 0l0 4.312336l43.624664 0l8.876648 -0.7480316l0.3123474 -1.687664l0.9370117 -1.1259842l1.8739929 -0.68766403l0 -8.56168l4.561676 0l0 9.062992l3.1889954 -0.12598419l3.561676 -0.7506561l3.312317 -1.2493439l2.6246948 -0.43832016l3.1889648 -0.060367584l2.1863403 .62467194l1.438324 1.4356956l1.6876831 1.9396324l45.624664 0l2.2493286 .24934387l1.5013428 1.0l2.435669 .62467194l317.25195 0l0 -8.125984l6.687683 0l-0.56427 8.251968l25.312317 0l0 23.372704l-3.8110352 0l0 14.312336l-73.188965 0l-9.18634 .12598419l-6.1259766 .12598419l-1.6246948 1.4986877l-2.3753052 .50131226l-8.498718 0l-2.0 -0.31233597l-1.1259766 -0.56430435l-1.7506714 -0.8740158l-2.5616455 -0.43832016l-18.498718 -0.37532806l-189.12598 0l0.18634033 4.1889763l-0.3123169 2.2493439l-1.123352 2.2493439l-1.3123474 1.9396324l-1.7506714 1.8110237l-1.561676 1.0l-1.7506409 .50131226l-2.2493591 0l-2.0629883 -0.31233597l-1.6246643 -0.68766403l-15.0 0l-7.438324 .68766403l-8.708649 2.333334l-9.165375 0l-14.125977 -0.7716541l-20.937012 0l-14.312317 -0.43832016l-5.438324 1.0l-4.624695 1.2493439l-3.1259766 .12598419l-2.8110046 -0.8740158l-1.7506714 -1.8766403l-1.0629883 -2.8110237l-0.561676 -3.624672l-44.18898 .18635178l-1.5616913 .50131226l-0.6246643 1.6246719l-1.1863556 .8110237l-2.4383087 0l-3.0630035 .56430435l-2.1259766 1.3727036l-2.81102 .8136482l-2.6246796 .24934387l-7.687668 .8766403l-15.062988 .7480316l-7.874008 1.0l-6.5013275 .43832016l-3.0 .68766403l-2.0629883 .8740158l-1.2493439 2.2519684l-0.49868774 3.312336l-0.31233215 6.249344l-1.3753204 5.4986877l-3.7506561 3.7506561l-4.18898 2.8766403l-4.249344 1.4356956l-6.249344 1.9370079l-5.5616837 .43832016l-5.68766 0l-4.062996 -0.8110237l-3.8740158 -1.3149605l-2.6272964 -2.1863518l-2.1233597 -3.2493439l-2.3123322 -3.937008l-2.5643082 -3.7506561l-2.186348 -2.312336l-1.5013199 -0.8766403l-2.0603638 -0.62467194l-1.813652 .18897629l-4.312332 1.6246719l-309.87402 105.93701l-1.876648 .31233215l-1.1863556 -0.43832397l-0.8766327 -1.123352l-0.12336731 -1.3753204l0.3753357 -3.18898l4.0629883 -19.186356l1.8110199 -11.937004l0.50131226 -6.062996l0.06036377 -5.813652l-0.06036377 -5.435692l-0.43830872 -2.813652l-1.0630035 -7.186348l-1.438324 -5.68766l-2.2493439 -10.18898l-2.2493286 -6.56168l-2.6246796 -7.312336l-2.6876678 -6.062992l-0.31233215 -1.8110237l0.68766785 -1.8136482l2.1863403 -1.1259842l3.6246796 -1.312336l6.3753204 -0.68766403l193.31235 -25.12336l3.8766403 1.6246719l3.0 2.1863518l2.3727036 1.9396324l3.3149605 2.1863518l3.4986877 1.5013123l2.937008 .9370079l3.624672 .37532806l3.062992 0l2.5013123 -0.50131226l4.0603676 -1.0l10.501312 -3.1259842l9.125984 -3.3727036l52.249348 -18.87664l1.4986801 -2.937008l2.18898 -2.4986877l4.062996 -3.8136482l4.186348 -3.0l4.561676 -2.4383202l1.3753281 -1.1863518l0.12599182 -1.312336l-1.438324 -1.6246719l-2.438324 -2.1889763l-1.186348 -2.4986877l-0.9370041 -2.624672l-1.5013199 -1.1889763l-2.123352 -1.312336l-1.1259918 -1.5616798l0.5013199 -1.4383202l1.6246719 -0.62467194l2.748024 .062992096l1.3753281 1.3753281l2.50132 2.8110237l2.4383163 2.937008l2.4356918 1.6272964l2.6876678 2.0l1.9370041 1.6850395l-0.31233215 1.5013123l0.12598419 1.2493439l1.1259842 .18897629zm3 62l-0.7480469 -1.3726959l-1.6246643 -0.1889801l-1.438324 .561676l-1.6246643 1.3149643l-1.5643005 2.4986877l-0.49868774 1.3123322l-0.3123474 2.438324l0.24935913 1.8740158l0.43832397 2.2493439l0.75064087 2.2519684l1.4356995 2.3123398l2.5013123 1.6876602l3.9370117 1.3753281l3.7506409 .43569183l5.0 -0.06298828l4.8740234 -0.7480316l4.5013123 -1.5643082l4.6246643 -2.186348l3.3123474 -2.6876602l2.0 -3.813652l0.43569946 -3.7480316l-0.3123474 -2.813652l-0.87402344 -2.6246643l-1.3753052 -2.3753357l-2.3123474 -1.6246643l-2.3123474 -0.81365204l-2.561676 -0.49868774l-2.5013123 0l-3.312317 .12598419l-1.7506714 .56168365l-2.123352 1.7506561l-2.6246643 1.748024l-2.3123474 2.375328l-1.5013123 3.375328l-0.43832397 2.624672l0.6246643 3.438324l1.8136597 2.561676l1.438324 1.438324l1.9370117 2.3123398l-1.8136597 -0.12599182l-2.4356995 -1.561676l-1.6876526 -1.0l-1.1889954 -1.8740158l-1.123352 -1.1889801l-0.87664795 -2.561676l-0.561676 -3.0z"
                    );
                    radiusDiv = 70;
                    break;
                case 238: // Grenade (may need some fixes)
                    path = new Path2D(
                        "m-17.874016 -306.0l24.0 .12597656l13.498688 .87402344l20.624672 1.2493286l17.251968 .87664795l19.249344 1.6246948l17.12336 2.123352l15.251968 2.3753052l8.249344 .6246948l4.0 2.0l5.624672 4.5013123l4.5013123 4.6246643l4.0 5.5013123l2.0 3.3727112l15.0 28.125977l4.4986877 9.624664l9.624664 20.876648l8.249344 19.62468l9.125992 23.748016l14.249344 40.627304l9.251968 28.0l13.62468 42.874016l12.37532 45.874016l7.372696 29.87664l5.5013275 23.748032l4.750656 22.750656l5.7480316 28.501312l7.251953 36.498688l4.123352 25.125984l3.7506714 27.62468l1.2493286 12.37532l0 10.498688l-0.8739929 6.2519684l-2.0 8.498688l-2.2493591 8.0l-2.876648 5.0l-2.6246643 3.7506561l-4.873993 4.4986877l-4.5013275 1.5013123l-4.6246796 .24934387l-4.0 -0.6246643l-2.4986725 -1.8740234l-2.6246796 -6.2519684l-3.0 -8.62468l-1.5013123 -7.3753204l-0.8740082 -10.748032l-2.1259918 -17.0l-2.4986877 -18.125977l-3.627304 -25.0l-4.6246643 -26.50132l-4.123352 -23.498688l-6.3753357 -31.125984l-4.6246643 -21.0l-6.3753357 -29.0l-13.624664 -53.12336l-11.251984 -40.0l-9.624664 -28.501312l-8.62468 -24.249336l-6.4986725 -16.375336l-7.6246796 -16.874008l-6.3753204 -12.750656l-3.876648 -7.6246796l-1.123352 -1.2493439l-2.3753357 -1.6273041l-16.375328 -1.2493439l-6.249344 -0.37532043l1.0 6.125992l1.2493439 7.6246643l-0.24934387 7.750656l-0.50131226 10.0l-2.375328 10.249344l-3.4986877 8.624664l-5.375328 8.876648l-4.624672 5.624672l-5.750656 7.0l-3.7506561 3.624672l-1.2493439 2.4986877l0.8740158 4.624672l2.6272964 1.0l6.624672 1.7506561l6.4986877 2.5013123l5.624672 2.375328l3.1259842 1.4986877l8.125984 7.624672l6.874016 7.8766403l6.624672 8.748032l7.125992 11.501312l7.4986725 13.0l6.0 12.874016l4.876648 10.750656l3.0 8.249344l2.4986877 10.249344l0.6246643 5.5013123l-0.37532043 5.249344l-1.6246796 5.125984l-2.3753204 3.624672l-2.6246796 2.2493439l-0.24932861 4.8766403l2.8740082 5.3727036l4.125992 3.2519684l7.874008 3.7480316l7.5013123 4.750656l4.249344 4.0l4.125992 8.125984l1.7480164 10.0l2.876648 19.375328l1.2493439 15.748032l0.7506561 18.750656l-0.87664795 13.87664l-1.4986725 9.249344l-1.7506714 5.6246796l-2.7506561 3.3753204l-4.7480164 2.8740082l-4.876648 1.7506714l-5.0 1.6246643l-3.3753357 1.5013123l-1.4986725 2.372696l0.12597656 2.7506561l3.0 3.876648l4.0 1.4986877l6.0 5.874008l2.6246796 5.750656l1.2493439 7.125992l-0.5013275 9.62468l-2.2493439 11.4986725l-3.4986725 11.125992l-3.876648 10.0l-5.4986877 12.624664l-6.125992 10.375336l-5.4986725 8.249344l-4.3753357 5.5013275l-4.0 3.2493286l-6.3753204 3.3753357l-8.62468 2.3753357l-8.87664 1.7506409l-6.0 1.4986877l-2.1233597 3.3753357l-0.12598419 4.6246643l3.0 3.8740234l3.7506561 5.627289l1.0 5.123352l-1.1259842 9.501312l-3.0 7.4986877l-7.7480316 12.126007l-7.125984 7.6246643l-7.874016 8.375336l-7.6272964 6.873993l-9.624672 8.624664l-9.249344 6.876648l-10.750656 6.624695l-8.249344 3.7506409l-7.4986877 1.6246643l-7.125984 .24935913l-4.750656 -1.0l-3.4986877 -2.5013123l-1.7506561 -2.6246948l-9.624672 6.876648l-7.249344 4.249359l-7.125984 1.7506409l-7.5013123 .12335205l-6.624672 -1.123352l-6.375328 -2.5013123l-5.0 -3.873993l-3.1233597 -4.0l-1.8766403 -2.7506714l-2.8740158 2.5013123l-2.2493439 3.2493591l-3.2493439 3.873993l-4.6272964 3.3753357l-5.0 2.6246643l-4.249344 1.5013123l-5.0 .12335205l-8.0 -0.49865723l-7.750656 -0.6246948l-8.249344 -0.6246643l-4.0 -1.0l-4.0 -1.7506409l-5.0 -4.7506714l-4.375328 -4.6246643l-1.8740158 2.7506409l-2.2493439 3.0l-3.0 2.0l-2.8766403 1.6246948l-3.2493439 .75064087l-7.0 -0.12597656l-7.874016 -0.7506714l-6.9999924 -1.123352l-5.750656 -1.3753357l-6.0 -3.0l-8.125992 -5.1259766l-7.4986877 -5.3753357l-17.624664 -13.873993l-14.0 -12.375336l-12.5013275 -12.750671l-4.0 -5.6246643l-3.4986725 -7.4986877l-1.3753357 -5.0l-0.6246643 -8.251984l1.123352 -5.7480164l2.2519684 -6.1259766l0.37269592 -6.3753357l-1.4986725 -3.3753357l-4.3753357 -1.4986877l-11.125992 -3.0l-5.0 -1.6246643l-5.874008 -2.876648l-4.249344 -1.8739929l-4.6246643 -5.501343l-9.125992 -10.624664l-3.6246643 -6.750656l-5.249359 -10.249344l-5.876648 -15.4986725l-6.123352 -19.0l-3.2519531 -13.5013275l-0.12335205 -7.874008l0.8739929 -4.876648l3.126007 -4.874008l4.873993 -5.125992l4.876648 -2.7480164l1.6246643 -2.7506561l-0.87664795 -3.1259918l-3.123352 -1.3753357l-7.750641 -2.4986725l-3.6246643 -2.6246796l-3.126007 -2.7506561l-2.7506409 -4.4986877l-1.8740234 -6.3753204l-1.4986877 -9.750664l-0.25198364 -6.874016l0.12600708 -6.8766403l1.1259766 -8.498688l1.0 -12.375328l2.2493591 -16.624672l2.0 -11.375328l1.8739929 -7.249344l4.0 -8.750656l4.6246643 -7.249344l7.2519836 -5.375328l8.372711 -3.8766403l7.627289 -2.624672l3.6246796 -3.0l0.8740082 -4.0l-2.0 -3.8740158l-5.125992 -5.375328l-3.2493439 -4.874016l-3.0 -3.6272964l-2.2493286 -5.1233597l-0.12600708 -8.87664l2.2519836 -6.3727036l4.123352 -8.750656l6.5013275 -11.750656l8.123352 -14.375328l9.251968 -13.12336l10.498688 -12.87664l8.874008 -8.750656l9.627304 -7.3727036l11.249344 -7.0l14.375336 -6.125984l2.8740082 -25.50132l1.7506561 -9.123352l2.123352 -6.5013123l4.3753357 -7.249344l24.125992 -24.624664l3.0 -4.8740234l1.0 -9.251968l-6.6246796 -6.3753357l-4.876648 -5.6246643l-4.372696 -7.874008l-2.3753204 -6.7506714l-0.5013275 -10.37532l0.5013275 -15.874008l1.123352 -8.624664l3.3753204 -7.7506714l4.0 -6.3753357l6.876648 -6.750641l9.372696 -5.8740234l8.750664 -3.2493286l12.249344 -3.0l27.251968 -4.501343l18.874016 -3.2493286l21.750656 -2.4986877z"
                    );
                    radiusDiv = 150;
                    break;

                case 340: // Mare's Leg Rifle fail
                    path = new Path2D(
                        "m-20 35l34.750656 -1.3727036l10.56168 .37270355l2.8136482 .68766403l3.5616798 2.3753242l5.43832 3.438324l7.561676 3.3123398l6.0 1.561676l5.7506638 0l5.2414627 -1.4041977l16.509193 -5.7821503l22.249336 -7.75066l16.750656 -6.375328l17.937012 -5.186352l2.7506561 -4.624672l6.6246796 -6.375328l6.123352 -3.0l1.5013123 -1.8766403l-0.24934387 -2.3727036l-2.5013123 -1.5013123l-2.7506561 -1.0l-3.7480316 -1.6246719l-0.7506561 -1.6246719l0.3753357 -2.0l2.123352 -1.7506561l2.6246643 -0.12598419l1.7506561 .8766403l2.6246796 2.375328l3.6246643 1.2493439l4.125992 .62467194l2.7506561 -1.1259842l2.3753357 -2.4986877l4.3753204 -2.2493439l11.62468 -0.37532806l15.624664 -0.12598419l5.874008 0l2.3753357 2.5013123l3.0 -3.0l42.125977 .7480316l2.0 -1.8740158l24.624695 0l1.4986572 4.5013123l19.126007 0l1.6246643 -1.6272964l2.5013123 .12598419l0.561676 2.5013123l1.123352 -3.062992l0 -0.9370079l-1.7480164 0l0 -6.5013123l2.8740234 0l0 -5.0l4.561676 0l0 9.813648l-1.0367432 3.8635178l10.976379 0l0 -1.8635178l4.561676 0l0 -1.8136482l4.561676 0l0 -1.4986877l6.188965 0l2.1706238 3.7585297l21.078735 0l1.6404114 .94750786l6.7979126 0l1.4094238 -0.8136482l10.464569 0l5.9501343 3.4356956l5.1128845 0l0.24932861 -1.5170612l0.7506714 -1.2493439l1.4986572 -0.50131226l12.687683 0l0.6876526 .31233597l0.561676 .7506561l0.31497192 1.0l148.68503 0l0 -5.43832l-1.123352 0l0 -1.312336l17.687683 0l0 7.062992l14.498657 0l0 19.062992l-1.8635254 3.2283478l-10.073486 0l0 1.645668l3.1890259 0l0 13.312336l-1.5197144 2.63517l-23.543335 0l0 2.052494l-2.9369507 0l0 -2.2493439l-27.687683 0l0 1.6246719l-12.687683 0l0 -1.687664l-23.375305 -1.312336l-38.81366 0l0 2.0l-13.0 0l0 4.564308l-24.0 0l0 2.8740158l-16.18634 0l0 1.3753281l-13.063019 .6876602l-16.438324 .7506561l-30.0 1.0l-12.435669 0l-41.56433 0l-1.3753052 -3.0629883l-44.24936 0l-3.9370117 1.123352l-2.438324 2.18898l0.25198364 1.561676l-0.12597656 1.438324l-1.4356995 1.438324l-3.438324 4.937004l-2.3753204 2.5616837l-1.9396362 2.0l-1.2493439 3.6876602l-0.12336731 5.937004l-0.7506561 3.624672l-2.0629883 2.6876678l-3.561676 4.624672l-4.9370117 3.438324l-5.0 2.375328l-5.3753204 1.561676l-7.125992 .81365204l-6.8136444 -0.56430817l-5.060364 -1.0603638l-4.687668 -0.56430817l-3.8136597 .56430817l-2.6876526 1.3726959l-2.8740234 3.5643082l-2.438324 6.249344l-3.3753204 9.062988l-4.0629883 7.438324l-3.0603638 4.123352l-7.2519836 5.7506714l-7.4986725 2.3123322l-5.8740234 .561676l-8.750656 .6246643l-9.937012 -0.74801636l-8.813644 -1.6246796l-8.062996 -1.9396362l-6.624672 -2.8740082l-3.0 -2.8136597l-3.0 -3.6876526l-3.1259842 -5.060364l-1.4356918 -4.125992l-0.6876602 -4.438324l0.4986801 -6.186348l3.062996 -5.438324l5.68766 -4.68766l65.0 -23.062996l2.3753357 -2.186348l-2.8740234 -0.43832397l-126.93963 47.18898l-23.060368 8.62468l-4.8766403 1.4986725l-3.8740158 -0.18634033l-2.312336 -1.3123322l-2.2493439 -3.1259918l-2.0 -7.123352l-0.8136482 -10.750664l-0.062992096 -5.624672l-0.31233597 -11.564308l-1.2493439 -5.49868l-1.4383202 -4.9370117l-2.8110237 -8.68766l-1.5013123 -8.750664l-0.062992096 -5.125984l0.43832016 -4.49868l2.2493439 -2.3753357zm184 20l-3.4986877 1.8740158l1.8740082 6.874016l3.6246796 8.0l4.2519684 5.2519684l7.0 4.3727036l5.6246796 .62729645l10.123352 .24934387l7.876648 -1.7506561l4.0 -1.7506561l3.6246643 -3.375328l2.7506561 -6.0l0.37269592 -2.7480316l-0.8740082 -4.375328l-2.1259918 -4.249344l-3.0 -3.6272964l-3.6246643 -3.0l-4.7480316 -1.7480316l-8.750656 1.4986877l-4.125992 -0.7506561l-2.2493286 1.7506561l-3.2493439 0l0.12335205 -2.1233597l-2.7480316 1.0l-0.12597656 3.4986877l0.4986725 5.0l1.876648 4.624672l3.3753357 3.624672l3.6246643 2.624672l2.3753357 .62729645l0.8740082 2.3727036l-0.8740082 2.2519684l-2.1259918 .12335968l-2.0 -1.0l-3.6246643 -1.6246719l-3.7506714 -4.0l-2.4986725 -2.7506561l-1.6246796 -3.4986877l0 -2.8740158l-4.3753204 -0.12598419l-2.3753357 -1.2493439l-0.6246643 -1.5013123zm-20 13l-1.123352 .62467194l-17.876648 6.125984l-22.624664 7.4986877l-11.874016 4.2519684l-5.375328 3.0l-3.375328 4.874016l-1.0 3.624672l0 6.2493362l2.0 4.627304l4.249344 4.7480316l4.125984 3.3753204l7.125992 2.3753357l9.0 1.8740082l7.7480164 1.1259918l8.5013275 .24934387l9.624664 0l6.125992 -1.123352l7.249344 -4.125992l4.4986725 -5.750656l2.2519836 -6.6246796l3.3753204 -7.3753204l2.123352 -5.7480316l2.3753357 -6.0l1.1259918 -4.2519684l-0.7506561 -4.375328l-2.3753357 -3.1233597l-2.3753357 -3.0l-5.4986725 -1.8766403l-4.125992 -0.62467194z"
                    );
                    radiusDiv = 65;
                    break;
                case 241: // Magnum Rifle
                    path = new Path2D(
                        "m200 45l48.99997 -5.81102l5.0629883 0l0 -1.1889801l3.758545 -1.0078735l9.803162 0l1.4330444 -0.8267746l6.1916504 0l4.876587 -6.1023636l0.9370117 -0.561676l2.0629883 -0.43832397l8.561707 0l0 -18.68766l-0.9370117 -0.9370041l-15.375305 0l-20.81366 11.125984l-14.123352 0l-0.8451538 -0.8451462l-17.779541 0l0 -1.5931778l-59.251953 1.3753281l-1.561676 -0.31233215l-1.1863708 -1.1259918l-1.3123169 -0.7506561l-1.6273193 -0.37532806l-5.1863403 -1.0l-1.7506714 -0.6850357l-1.0 -1.3753281l-0.37530518 -0.93963623l-0.37271118 -2.4356918l-0.18896484 -2.438324l-0.43832397 -5.6246643l-0.6246948 -8.687668l0 -5.750656l0.18899536 -8.435696l0.49868774 -5.813648l0.56430054 -3.1259842l0.6850281 -1.312336l1.1260071 -1.2493439l2.5013123 -0.9370079l6.2493286 -1.5013123l0.9370117 -1.0l1.6246643 -0.68766403l58.126007 -0.49868774l2.435669 -2.5616798l17.062988 0l1.1889954 -1.1889763l13.811005 0l21.438354 10.624672l15.312317 0l0 -3.8740158l20.624695 0l0 3.8136482l40.8136 0l4.123413 -3.3149605l-0.24938965 -12.56168l-1.3753052 -1.5616798l-0.43566895 -0.8766403l0 -3.4356956l0.37268066 -1.0l0.93963623 -1.1889763l2.123352 -0.9370079l3.876648 -1.1233597l4.123352 -0.7506561l3.876648 -0.37532806l4.2493286 0l3.0 .24934387l4.2493286 .50131226l3.2493896 .7480316l2.876587 1.0l1.1864014 1.0l0.43829346 1.2519684l0 4.249344l-0.24932861 1.0629921l-0.87664795 1.2493439l-0.24932861 12.186352l3.6246338 2.687664l65.0 -0.7480316l1.9055176 -3.301838l18.15747 0l1.9527588 3.380577l71.04724 -1.3910751l1.6246948 1.8740158l0.7506714 2.375328l0.9370117 4.4356956l0.43829346 5.9396324l-0.12597656 7.4356956l-0.18634033 7.5643044l-0.25195312 2.6876678l-0.56170654 2.8740158l-0.6876831 2.0629883l-1.0 1.4356918l-71.06299 1.1889801l0 18.375328l6.0629883 0l3.6115723 2.083992l5.6378174 0l0.81359863 .8530197l0.6246948 1.186348l0.43829346 1.3753281l39.624695 0l6.4987183 .56430817l9.501282 1.0l9.624695 0l11.624634 1.6876602l43.189026 0l3.312317 -0.8136444l2.0603638 -1.0629959l1.56427 -1.186348l1.4987183 -1.1259918l4.312317 0l-1.2808228 -1.280838l0 -1.2178421l6.343811 -11.50132l6.501343 1.0l0 8.062996l2.0603638 -1.6876602l3.2519531 -2.0l3.4987183 -1.2493439l2.1259766 -0.37532806l1.2493286 .6876602l2.2493286 0l1.0 .561676l0.56433105 1.0629959l0 2.81102l2.1863403 -1.6246719l2.5617065 -1.3123322l2.8135986 -1.3123398l2.4383545 -0.7506561l2.312317 -0.18634796l1.3123169 .8740158l2.5617065 0l1.5617065 .62729645l0.8765869 1.3727036l0 6.68766l2.015747 1.162735l7.5459595 0l4.5459595 4.545929l511.70343 -3.582672l0 -1.6246719l5.687622 -1.876648l5.624634 -1.561676l5.624756 -1.561676l2.8135986 -0.37532806l0 -2.6876678l-1.1864014 -2.6876678l-1.3122559 -3.7506561l-1.1259766 -3.937004l-0.12597656 -2.6876678l0.25195312 -2.7506561l0.87402344 -1.4986801l1.5616455 -1.0629959l1.1259766 -0.31233978l3.4383545 -0.06298828l2.4986572 .6876602l1.4383545 .75066376l1.7480469 1.1259842l14.627197 0l1.8110352 -0.6273041l2.4383545 -0.62467194l2.687622 -0.24934387l5.7507324 0l1.6246338 .56168365l1.6246338 1.0l1.7507324 1.7506561l1.8110352 2.6876602l1.1889648 2.5616837l0.81103516 2.375328l0 8.18898l2.1259766 2.1259842l0 3.2493439l1.112793 .6430435l0 2.3569565l1.7612305 .8110199l1.5012207 2.3123322l1.1234131 2.7506638l0.24938965 3.186348l0.12597656 3.1259842l-0.5617676 3.2493439l-1.3752441 2.5013123l-1.9370117 2.186348l-2.1259766 1.1259918l-2.9370117 .561676l-27.125977 0l-1.4987793 -0.561676l1.3753662 -0.62467194l1.3753662 0l0 -1.251976l-3.3149414 0l-0.36486816 1.3622055l-405.63513 7.3884583l0.81359863 2.9369965l0.5013428 3.627304l0.24926758 4.4356995l-0.6246338 5.0629883l-2.0629883 4.8136444l-1.3123779 1.6246796l-2.8135986 2.6246643l-3.7506104 2.3123474l-4.435791 1.561676l-6.0 .7506561l-5.8135986 .561676l-36.561646 3.3753204l0 7.9370117l-0.87402344 1.5643158l-2.1259766 1.3123322l-2.4383545 .49868774l-2.3753662 -0.49868774l-1.4986572 -0.9370117l-0.81365967 -1.1259766l0 -7.8136597l-263.18634 20.939636l-12.0 .9370117l-15.876648 1.6876678l-14.874023 2.0l-14.125977 1.8740082l-1.8740234 .68766785l-3.5616455 2.0629883l-2.4383545 1.3753357l-2.687622 1.9369965l-3.8740234 1.4986877l-4.0629883 .81365967l-5.312378 .6246643l-8.375305 .8136444l-12.498657 1.0603638l-13.126038 .7506561l-45.75061 4.5013275l-10.375366 1.3123322l-5.811035 .37532043l-5.0629883 .06036377l-4.188965 -0.31233215l-3.8110352 -0.24934387l-4.5616455 -0.24934387l-2.312317 2.0630035l-1.8136597 1.0603638l-1.6246948 -0.18635559l-1.5012817 -0.8740082l-1.2493896 -0.5643158l-1.4382935 0l-0.6876831 .5643158l-0.37268066 1.7480164l0.06036377 3.9396362l-0.12335205 5.4356995l-1.1889648 5.18898l-1.43573 3.81102l-1.876648 3.3123322l-2.7479858 3.876648l-4.3150024 3.9370117l-4.748047 2.3753204l-3.6246338 1.6876678l-3.9396362 .68766785l-5.624695 .18634033l-9.0 -0.06298828l-5.7480164 -0.43569946l-5.5013123 -0.8136444l-5.4986877 -1.1259918l-4.188965 -1.4356842l-4.3123474 -2.1259918l-2.6246643 -1.6246643l-2.9370117 -2.5013123l-2.2519836 -3.0l-1.3123169 -2.4986877l-0.6876831 -2.6876678l-0.49868774 -2.8136444l-0.12597656 -4.249344l-0.49868774 -3.4356995l-1.1259766 -3.6876678l-2.0 -3.1259766l-3.0629883 -2.7506561l-2.9370117 -1.8740234l-2.8110352 -1.3753204l-3.2519531 -0.561676l-2.687683 -0.12599182l-3.6246643 .50131226l-19.123352 6.6850433l-8.876648 3.3149567l-4.1863403 2.1863556l-7.5013123 4.438324l-4.4356995 3.1863403l-5.438324 3.6876678l-4.8740234 4.438324l-4.5643005 4.687668l-3.8110046 4.249344l-4.1889954 5.2493286l-4.3123474 6.3753357l-3.2493286 5.438324l-2.4986877 3.9370117l-1.7506409 2.9370117l-1.3123474 1.5013123l-2.3753357 1.4986877l-2.1889648 .12597656l-3.2493591 .06298828l-3.3753357 -0.6272888l-5.0 -1.0l-9.624664 -1.1863708l-9.375336 -1.561676l-10.0 -2.0l-10.123352 -2.6246643l-7.6876526 -2.438324l-2.1259766 -1.0629883l-1.3123474 -1.3753357l-0.9370117 -1.9369965l-1.0 -1.3123322l-1.561676 -0.7506714l-2.0629883 -0.31233215l-2.3753357 .43832397l-38.501312 14.063004l-42.687668 15.312317l-41.87401 15.312347l-32.687668 11.624664l2.7506561 6.687683l0.24934387 2.6246643l-1.561676 2.1259766l-2.3123322 1.6850281l-3.18898 .62731934l-2.1863556 -0.12600708l-1.561676 -1.0629883l-1.2519684 -1.561676l-0.9370117 -2.2493286l-1.3123322 -2.876648l-0.6246643 -1.7506714l-42.687668 15.687683l-39.561684 13.501312l-16.125984 5.1259766l-4.312336 1.0l-2.312336 .12335205l-2.1259842 -0.6876526l-1.4356956 -2.0629883l-0.8766403 -3.7480469l-1.4356956 -6.6876526l-1.5013123 -9.251984l-0.7506561 -8.624664l-1.7480316 -16.624664l-0.8766403 -8.435699l-0.9370079 -10.939636l-0.56167984 -8.561676l-0.8766403 -9.125977l-0.68766403 -8.123367l-0.62467194 -8.813644l-1.312336 -14.561676l-0.8110237 -12.18898l-1.2519684 -15.372711l-0.9370079 -10.564301l-0.31233597 -9.062988l0.062992096 -5.8740234l0.37532806 -4.81102l0.8740158 -3.438324l1.2493439 -3.0l1.7506561 -1.6876526l3.0 -1.1259918l3.687664 -0.8740082l5.874016 -0.3123474l42.12598 -1.2493439l22.062996 -1.4383087l21.937004 0l33.93701 -3.2493439l139.99998 -8.125992l33.0 -1.0l12.0 -0.24934387l5.438324 .18635559l5.126007 1.0629883l3.561676 1.5013123l3.561676 2.372696l3.438324 2.7506561l4.1259766 3.0l4.1863403 2.3123474l4.063019 1.5013123l5.2493286 1.2493439l4.5013123 .18634033l9.874023 0l4.438324 -0.18634033l4.6876526 -0.87402344l4.7480164 -1.6876526l8.750671 -3.18898l28.249329 -10.81102l15.188995 -5.0630035l16.199463 -4.341202l0 -1.8477783l-5.3254395 0l-1.1260071 -1.561676l-0.74801636 -2.3123322l-0.18899536 -2.8740082l0 -2.3753357l0.18899536 -1.9370041l1.3123474 0l0 -3.3123398l-1.5013428 0l0 -2.18898l0.3123474 -1.6876602l1.0 -1.438324zm41 88l-10.750671 .31233215l-2.4986877 .6273041l-2.6876526 1.1863556l-2.3753357 2.0l-2.3123474 2.3753204l-1.5013123 2.7506561l-1.3123169 3.1233673l-0.81103516 3.0629883l-0.06298828 2.5013123l0.3123474 3.372696l0.6876526 3.3753357l1.6246643 3.8136444l1.8110352 2.3753357l2.3753052 2.0629883l2.5013428 1.6246796l2.2493286 .74801636l4.1259766 1.6876678l4.4356995 1.1889801l5.1889954 1.123352l3.9369812 .5643158l5.4986877 .49868774l6.188965 -0.43569946l4.8740234 -0.50131226l4.501343 -0.9370117l4.123352 -1.3123322l3.6273193 -1.8136444l3.3726807 -2.6876678l2.9396362 -3.6876678l2.1863403 -3.9370117l0.9370117 -3.3753204l0.12597656 -3.4356995l-0.3123169 -4.0629883l-0.6876831 -2.5643005l-1.4382935 -3.1863556l-1.4383545 -2.0629883l-2.0 -2.1233673l-1.4986572 -0.8766327l-2.5013428 -1.0630035l-5.2493286 -0.93699646l-4.8740234 -0.68766785l-3.5616455 -0.3753357l-3.876648 -0.18634033l-8.24939 0l-0.81359863 1.4986877l-0.7480469 1.7506561l-1.0629883 1.0l-1.9370117 2.5013123l-2.126007 2.2493439l-1.2493286 2.6876678l-1.2519836 3.2493286l-0.81100464 3.0630035l-0.12600708 3.7506561l0.56433105 2.6246643l1.2493286 2.3753357l1.6246643 2.123352l2.3123474 2.0629883l1.5013123 1.3123474l0.9369812 1.3753204l0 1.2493439l-0.9369812 .43832397l-2.314972 -0.49868774l-1.7480164 -1.6876678l-2.0 -2.18898l-1.7506714 -2.2493286l-1.6876526 -3.0l-1.1863403 -3.1259918l-0.50131226 -2.6876678l0 -2.81102l0.37530518 -3.0629883l1.0 -2.8136597l1.6246948 -2.81102l1.561676 -2.3123322l1.3123169 -1.8136444l0.50131226 -2.2493439z"
                    );
                    radiusDiv = 106;
                    break;

                case 242: // A literal fucking nuke
                    path = new Path2D(
                        "M -115825.0046 -51899.336599999995 L -115825.0046 -55148.8094 -89690.3429 -57122.0082 -76683.3125 -57122.0082 -76683.3125 -52944.1146 -53466.04400000001 -52944.1146 -39122.19410000001 -42035.17019999999 -8610.804499999998 -53524.073 23723.636799999993 -56889.903 27977.849499999997 -56889.903 65417.7289 -51551.4834 89972.455 -42035.17019999999 92282.377 -37160.960999999996 94044.8092 -37160.960999999996 95807.24139999998 -37876.77099999999 114121.98760000001 -21687.280999999995 120017.39349999999 769.0494000000035 113332.0198 23070.642999999996 97428.01539999999 35720.071800000005 95645.164 34327.4406 91390.9513 34327.4406 91593.229 39201.6498 65579.80629999998 54752.6982 27410.578599999993 58698.48659999999 -12703.577900000004 53824.27739999999 -40175.69720000001 43147.438200000004 -53060.8505 53360.066999999995 -75427.5317 53360.066999999995 -75427.5317 57770.0658 -88312.685 58060.65419999999 -114569.2238 54752.6982 -114569.2238 50574.8046 -88798.9172 50574.8046 -88798.9172 21329.549400000004 -120160.8941 21329.549400000004 -120404.0102 -22538.333399999996 -89042.03330000001 -23002.5438 -88555.80110000001 -49462.5366 Z M -64010.168399999995 16919.2431 L -78597.1344 16919.2431 -78597.1344 -15343.3797 -64496.40059999999 -15343.3797 Z"
                    );
                    radiusDiv = 51200;
                    break;
                case 243: // Nuke Launcher
                    path = new Path2D(
                        "M -34622.26700000001 18230.8882 L 21045.89559999999 17487.262300000002 21045.89559999999 14402.736400000002 56851.52169999998 14402.736400000002 56739.9388 15313.3465 56702.48439999999 16056.972399999999 56758.666 16576.652200000004 57037.23309999998 16818.5452 60381.59889999998 17264.0965 62685.8248 17487.262300000002 63429.45069999999 17431.861000000004 63837.54759999999 17208.695200000002 63931.18359999999 16762.363600000004 64098.167799999996 16131.100900000005 64414.1893 15815.079400000002 64878.467799999984 15629.368000000002 65473.0564 15499.0579 65993.5165 15499.0579 65993.5165 23395.6939 67238.095 23395.6939 63225.01209999999 34637.476 63113.429199999984 35343.6475 63132.15640000001 38371.991799999996 64060.71340000001 39356.73040000001 73202.7082 39821.78920000001 75246.31390000001 39096.8905 85242.7372 39096.8905 86599.6789 38873.7247 88141.55169999998 38390.719000000005 89442.3118 37610.419 91021.639 36663.13480000001 91987.65039999998 35510.631700000005 92842.8592 34173.1975 93474.1219 32667.99880000001 93939.1807 31293.110200000003 94180.2934 30159.334299999995 95444.3794 23544.731200000002 95778.34779999999 23228.7097 103935.60399999999 23228.7097 111423.3628 14440.190800000004 117313.8475 14440.190800000004 117778.12599999999 15090.180700000004 123129.4234 15090.180700000004 123129.4234 9924.594700000001 122701.81899999999 9924.594700000001 122701.81899999999 9404.914900000003 122924.9848 9404.914900000003 122924.9848 8011.299100000004 125861.2537 8011.299100000004 128276.28219999999 4833.917500000003 128276.28219999999 690.5244999999995 109417.2115 690.5244999999995 109249.44699999999 -721.8185000000012 109249.44699999999 -15363.367699999999 109677.0514 -15363.367699999999 109677.0514 -17519.3366 110029.747 -17519.3366 110029.747 -20528.9537 13725.120999999985 -20528.9537 13725.120999999985 -22443.029599999998 3802.8262000000104 -22443.029599999998 1647.6376000000018 -24598.218199999996 1034.3217999999906 -24598.218199999996 724.5426999999909 -24061.371799999997 49.58319999999367 -25546.282699999996 -5970.431299999997 -28314.787099999998 -16059.710300000006 -29856.6599 -25591.8551 -28760.338399999997 -32652.7898 -25861.5239 -36090.0113 -28741.6112 -42166.2074 -28741.6112 -42166.2074 -29930.788399999998 -45548.0276 -29930.788399999998 -52013.5934 -29392.3814 -52013.5934 -28314.787099999998 -45343.58900000001 -27813.0542 -45343.58900000001 -20752.119499999997 -83564.2436 -20752.119499999997 -83564.2436 -21736.858099999998 -86239.8923 -22071.606799999998 -86425.6037 -22387.628299999997 -88748.5568 -22795.725199999997 -89343.14540000001 -22517.158099999997 -90327.884 -22684.922599999998 -91609.91690000001 -22684.922599999998 -91609.91690000001 -23501.896699999998 -93393.6827 -23501.896699999998 -93616.8485 -22667.755999999998 -94713.17000000001 -22667.755999999998 -99803.8472 -21774.312499999996 -99803.8472 -16961.422099999996 -101996.4902 -16961.422099999996 -101996.4902 -22350.173899999998 -102795.5174 -22350.173899999998 -103965.9674 -24133.9397 -104950.706 -24133.9397 -105304.1819 -25304.3897 -105805.9148 -27125.609899999996 -106214.792 -28184.477 -107087.9477 -30005.697199999995 -108425.38190000001 -32643.891499999998 -109038.6977 -33982.106 -110283.27620000001 -35654.2889 -111676.892 -37345.199 -112755.2666 -38385.338899999995 -114073.9736 -39686.098999999995 -114836.3267 -40002.1205 -115634.5736 -39964.666099999995 -116062.178 -39500.387599999995 -116712.9482 -40057.521799999995 -117362.9381 -40410.9977 -118087.8368 -40559.2547 -118719.0995 -40447.6718 -118607.5166 -39704.826199999996 -119091.3026 -38868.3446 -119760.0197 -37400.6003 -120112.7153 -36546.1718 -120614.4482 -35338.2674 -120818.88680000001 -34650.823099999994 -121097.45390000001 -32086.757299999997 -121209.0368 -31752.008599999997 -121562.5127 -31417.259899999997 -121915.2083 -31417.259899999997 -121915.2083 -32198.3402 -122416.9412 -32198.3402 -122416.9412 -18429.1664 -122974.0754 -18280.909399999997 -123568.664 -18392.492299999998 -124089.1241 -18578.2037 -124721.1671 -18578.2037 -125092.5899 -18968.3537 -125408.61140000001 -19098.6638 -125947.0184 -19061.209399999996 -126523.66010000001 -18652.332199999997 -126820.9544 -18280.909399999997 -127247.7785 -18169.3265 -127637.92850000001 -17983.6151 -127917.27590000001 -17648.8664 -127749.5114 -11721.707599999998 -128493.1373 -11350.284799999998 -128493.1373 -9287.951899999996 -128288.69870000001 -9009.384799999996 -127917.27590000001 -8990.657599999999 -127508.3987 -9157.641799999998 -126802.22720000001 -9399.534799999998 -126226.3658 -9510.337399999997 -125445.2855 -9399.534799999998 -124590.857 -9231.770299999996 -123829.2842 -9250.497499999998 -123271.3697 -9454.936099999999 -122695.5083 -9547.791799999999 -122379.4868 -9231.770299999996 -122379.4868 2455.5630999999994 -118496.714 2455.5630999999994 -118496.714 2826.9858999999997 -122379.4868 2826.9858999999997 -122379.4868 8903.182 -122686.1447 9209.839899999999 -122296.77500000001 9434.566299999999 -47926.382 9181.7491 -42891.106100000005 13139.430700000004 -38338.05560000001 15053.5066 -34974.9626 15053.5066 -34974.9626 17877.412300000004 Z"
                    );
                    radiusDiv = 10000;
                    break;
                case 244: // Sawed-Off Shotgun
                    path = new Path2D(
                        "M -22966.441300000002 4515.905599999998 L -25928.490800000003 3199.9115999999995 -26054.987800000003 3288.6721 -27016.4713 2655.6555999999982 -27016.4713 2516.4025999999976 -28636.4833 2997.410100000001 -30066.7498 4237.931099999998 -30332.4998 3997.1615999999995 -29648.990800000003 3300.8966 -30446.772300000004 3579.4025999999976 -32328.2823 5440.184099999999 -36612.7038 16175.9526 -36916.1903 18757.448099999998 -36511.187300000005 20073.9736 -37209.046800000004 22002.787099999998 -38795.5743 21712.0566 -45490.8798 18978.0206 -46705.8888 18117.5221 -46629.8843 15561.007099999999 -42579.8543 6313.438599999998 -42187.6073 3566.6466 -42579.8543 -1259.3734000000004 -42390.1088 -3841.4003999999986 -37247.846300000005 -12662.705899999999 -37273.3583 -12966.723899999999 -36564.3373 -14105.7284 -35172.3388 -14523.4874 -35754.331300000005 -15915.4859 -36184.846300000005 -16117.9874 -36918.8478 -17168.2314 -36944.359800000006 -17674.7509 -36766.8388 -18016.5054 -36210.3583 -18484.7569 -35463.6008 -18724.994899999998 -34931.5693 -18687.2584 -34109.3388 -18395.9964 -32792.8133 -18307.2359 -29907.2998 -18295.0114 -29527.808800000003 -17902.2329 -22971.7563 -19851.7749 -21528.7338 -19851.7749 -21225.247300000003 -20383.2749 -21275.739800000003 -20939.7554 -20921.229300000003 -21484.0114 -19453.226300000002 -21484.0114 -19098.7158 -20889.262899999998 -18364.714300000003 -20383.2749 -18060.696300000003 -19863.9994 29075.38119999999 -19826.262899999998 29138.62969999999 -20104.7689 35678.20569999999 -20104.7689 35918.44369999999 -19839.0189 42006.244699999996 -19839.0189 42563.2567 -20750.0099 42563.2567 -21167.7689 43524.7402 -21167.7689 43524.7402 -18624.0099 46992.77769999999 -18624.0099 46992.77769999999 -12671.2099 40588.73419999999 -12671.2099 40841.7282 -12354.9674 40474.4617 -10949.6814 38487.7147 -9106.4394 35247.69069999999 -7562.4319 34792.1952 -7562.4319 34792.1952 -7169.653400000001 31020.671199999997 -6638.153400000001 30919.1547 -7106.4048999999995 -1341.8323000000019 -3634.6468999999997 -1417.8368000000046 -4647.154399999999 -1936.5808000000034 -3685.1394 -8361.884300000005 -4026.893899999999 -14736.695300000003 -3545.8863999999994 -13749.168300000005 -2925.625899999999 -13040.678800000002 -1297.1098999999995 -13167.175800000005 550.3840999999993 -14652.186800000003 2389.9055999999982 -16930.1958 3705.8996000000006 -19946.458300000002 4515.905599999998 Z M -26867.5932 1385.0941999999995 L -26475.3462 2258.3486999999996 -25627.6037 2802.6047 -25741.344699999998 2890.8337 -22969.5722 4080.8621999999996 -19831.0647 4004.8576999999996 -17198.5452 3295.8367 -14920.0047 2055.8472 -13692.7712 460.8157000000001 -13523.7542 -1319.1778 -14181.751199999999 -2660.6838 -15472.7647 -3496.2018 -21712.574699999997 -3027.9503 -22370.5717 -1294.1972999999998 -22383.327699999998 566.5841999999998 -21253.358699999997 1895.3342000000002 -19886.3407 2882.3297000000002 -20203.1147 3135.8552 -21784.858699999997 2287.5811999999996 -23202.369199999997 996.5676999999996 -24746.376699999997 -2855.2128 -25674.907199999998 -2766.4523 -26332.904199999997 -2171.7038000000002 -27104.6422 465.06770000000006 Z M -28256.2187 2413.4115 L -27306.959700000003 2160.4175 -27408.4762 1818.663 -27395.7202 1489.6645 -27876.727700000003 1920.1795000000002 Z"
                    );
                    radiusDiv = 12800;
                    break;
                case 245: // Marksman Pistol
                    path = new Path2D(
                        "m -1.18794,-0.66151372 v .09246 l -0.49026,0.0183 h -0.2148 l -0.0221,0.01157 v .17142898 l -0.0183,0.02504 -0.004,0.01422 .0203,0.0203 -0.0368,0.03674 -0.0135,-0.0963 -0.003,-0.06355 -0.0154,-0.03564 -0.0173,-0.01541 -0.0231,-0.0058 -0.0424,0.0029 -0.0472,0.0067 -0.0578,0.01252 -0.0289,0.0087 v .02215 l -0.0145,0.02503 h -0.0655 l .004,-0.01395 h -0.0384 v -0.01782 h -0.0192 v -0.01348 h -0.0568 l -0.0135,-0.01154 h -0.0963 l -0.0106,0.01059 v .07608 l .0279,-0.01541 .0318,-0.0077 h .0347 l .0491,0.0077 .0462,0.01156 .0424,0.01735 .0298,9.49e-4 .1126999,0.111743 .0221,0.02116 .008,0.0097 -0.005,0.01636 -0.0222,0.01348 -0.0501,0.0087 -0.0876,0.01154 -0.11078,0.03273 -0.10306,0.03567 -0.0694,0.02406 -0.0511,0.02601 -0.027,0.02889 -0.0164,0.04432 -0.0202,0.12230801 -0.025,0.08574 -0.0299,0.07417 -0.0424,0.08185 -0.0549,0.10498595 -0.0848,0.143512 -0.0385,0.07033 -0.027,0.05103 -0.01,0.03662 -0.0578,0.08762 -0.0279,0.07033 -0.0337,0.10980108 -0.0472,0.15316 -0.0193,0.127123 -0.0318,0.147366 -0.003,0.04334 -0.026,0.05778 -0.0327,0.06069 -0.0241,0.02312 -0.0202,0.02891 -0.007,0.03466 -0.003,0.03178 -0.0144,0.02312 .004,0.02117 .0231,-0.0077 h .0231 l -0.005,0.0212 .0722,0.08091 .53551,0.08091 .0164,-0.02891 .0404,0.0048 .0241,-0.04817 .052,0.0029 .008,-0.02986 -0.004,-0.03758 -0.0154,-0.03562 -0.0164,-0.0472 -0.006,-0.04142 v -0.0366 l .004,-0.04431 .0115,-0.03373 .0241,-0.05585 .0404,-0.05586 .0145,-0.02312 v -0.107875 l .01,-0.06261 .0173,-0.04914 .027,-0.04718 .0202,-0.0366 .0308,-0.03466 .0366,-0.02891 .004,-0.104022 .0106,-0.04429 .0289,-0.06358 .025,-0.052 .0241,-0.026 .0385,-0.03082 .16084,-0.04239 .0327,-0.01541 .0202,-0.02121 .0395,-9.48e-4 .0453,-0.09343 .0732,-0.0029 .0491,0.01251 .0375,0.02507 .0481,0.05103 .0453,0.05684 .0327,0.04814 .0289,0.06068 .0202,0.05201 .01,0.06164 .003,0.06067 -0.002,0.07705 -0.0164,0.06551 -0.0106,0.04432 .005,0.02695 .0145,-0.01154 .0134,-0.0636 .0212,-0.07705 .0308,-0.0703 .026,-0.05103 .0405,-0.05491 .027,-0.02601 .0501,-0.03177 .0944,-0.04432 .0973,-0.04528 .0809,-0.05874 .0366,-0.04045 .0241,-0.04142 .0144,-0.04236 .0115,-0.06455 .007,-0.05874 -0.002,-0.03373 -0.0202,-0.0472 -0.0231,-0.03082 -0.006,-0.02793 .006,-0.02793 .0173,-0.01928 .0366,-0.01251 .1676,0.0183 .1541,9.63e-4 .1781901,-0.0077 .17048,-0.0087 .15026,-0.0077 2.80667998,-0.180113 .0616,-0.01252 .0617,-0.01734 .0559,-0.03273 .0289,-0.02891 h .26104 v .02504 h .20707 v -0.163739 h -0.21768 v .0183 h -0.15987 v -0.02889 l .37756,-0.0077 v .0048 h .0202 v -0.33133202 h -0.0925 l .0154,-0.04236 h .0684 v -0.04432 h -0.14543 v -0.03755 h -0.0491 l -0.021,-0.01215 -0.0177,0.0102 -0.0899,-0.02411 v .01929 h -0.0226 v -0.0183 h -0.0395 v -0.02023 l -0.0252,0.0068 v .07417 h -4.0451401 v -0.08381 z m .42572,0.129065 .0183,0.03469 -0.7127299,0.0096 -0.0135,-0.01446 -0.21094,-9.48e-4 v -0.01637 z m 2.8365399,0.0037 h .81423 l .0218,0.03776 h -0.85241 z m -2.51194992,0.0021 h .89671996 l .0164,0.03373 h -0.92558996 z m 2.18253992,0.0039 .0135,0.03178 h -0.98724996 l .0125,-0.02793 z m -2.9896799,0.83314399 .0462,0.0183 .0376,0.02215 .0347,0.02987 .0327,0.04718 .0164,0.0471999 .01,0.04527 -0.003,0.05105 -0.0135,0.05683 -0.0298,0.05105 -0.0539,0.04528 -0.0751,0.04525 -0.10691,0.04239 -0.078,0.03564 -0.052,0.02695 -0.053,0.0019 -0.0202,-0.01154 -0.0135,-0.02601 -0.0202,-0.05875 -0.0327,-0.05875 -0.0404,-0.0549 -0.0231,-0.05007 -0.0106,-0.0395 -0.005,-0.04431 .004,-0.04527 .0106,-0.0404398 .0279,-0.04334 h .0231 l .026,0.01347 .0279,0.03082 .0212,0.0423798 .01,0.05489 v .07131 l .004,0.03947 .0135,0.04047 .0145,0.02695 .0289,0.03275 .0241,0.02408 .0173,0.01154 .0174,-0.0019 .0125,-0.01636 -0.002,-0.02026 -0.0328,-0.02598 -0.0183,-0.02409 -0.0192,-0.04525 -0.006,-0.05203 v -0.27644585 z"
                    );
                    radiusDiv = 1;
                    break;
                case 246: // Sawed-Off Shotgun 2
                    path = new Path2D(
                        "M 89.826172 -48.648438 L 81.589844 -48.5625 L 70.404297 -47.433594 L 61.126953 -45.611328 L 47.601562 -42.578125 L 37.890625 -39.457031 L 31.5625 -37.722656 L 23.410156 -34.6875 L 17.773438 -32.605469 L 13.697266 -30.873047 L 12.226562 -31.480469 L 5.375 -28.792969 L -3.1542969 -26.505859 L -13.177734 -22.375 L -22.457031 -18.302734 L -33.640625 -12.144531 L -46.822266 -5.0332031 L -55.490234 -0.61132812 L -64.595703 5.1972656 L -73.525391 12.220703 L -84.884766 21.669922 L -96.417969 31.033203 L -106.73438 40.226562 L -113.58203 47.595703 L -119.56641 56.177734 L -123.4668 63.808594 L -127.63086 73.173828 L -131.18359 81.0625 L -134.39453 90.167969 L -136.30273 97.884766 L -135.95312 102.30664 L -133.0918 106.20703 L -127.63086 110.45703 L -121.21289 113.05859 L -121.30273 118.60547 L -115.14453 123.20117 L -116.61914 127.79883 L -116.27344 131.87305 L -114.01758 134.9082 L -111.50391 135.25391 L -110.0293 133.43359 L -109.5957 129.35938 L -108.55469 121.0332 L -107.60156 118.3457 L -105.86523 117.6543 L -90.345703 116.26562 L -86.273438 116.00586 L -83.582031 114.79297 L -82.197266 113.23047 L -80.894531 110.36914 L -80.375 106.20703 L -79.509766 102.13477 L -76.388672 95.890625 L -72.658203 89.039062 L -68.669922 82.191406 L -65.818359 77.253906 L -60.953125 70.917969 L -55.837891 64.849609 L -49.855469 59.908203 L -43.091797 55.572266 L -35.201172 51.757812 L -24.625 47.941406 L -13.091797 44.994141 L -2.1679688 43.605469 L 7.2832031 42.220703 L 15.345703 40.572266 L 20.115234 40.486328 L 23.582031 41.873047 L 25.923828 44.5625 L 27.3125 47.855469 L 27.398438 53.75 L 28.351562 58.953125 L 29.914062 62.421875 L 32.773438 65.976562 L 36.589844 68.664062 L 41.792969 71.005859 L 49.25 72.826172 L 58.525391 74.039062 L 66.330078 74.212891 L 75.779297 73.779297 L 83.322266 72.566406 L 91.822266 69.878906 L 98.669922 66.496094 L 105.17383 63.201172 L 111.1543 58.693359 L 118.52539 52.970703 L 125.46289 48.375 L 133.0918 44.648438 L 139.94141 41.265625 L 146.5332 39.359375 L 172.54297 39.359375 L 172.54297 36.582031 L 175.31836 36.582031 L 175.31836 76.121094 L 177.13867 78.894531 L 180.25977 79.9375 L 268.0918 72.046875 L 272.77344 70.746094 L 275.28906 68.837891 L 275.63477 66.236328 L 274.42188 37.537109 L 299.91406 37.537109 L 299.91406 28.605469 L 404.39453 28.605469 L 404.39453 38.144531 L 405.17383 42.046875 L 406.5625 43.865234 L 410.63477 46.121094 L 413.23633 46.726562 L 419.74023 46.726562 L 419.74023 44.039062 L 427.80273 44.039062 L 430.92578 47.162109 L 433.83203 44.259766 L 442.19727 44.259766 L 445.12305 47.185547 L 448.18164 44.128906 L 456.50391 44.128906 L 459.49609 47.121094 L 462.44336 44.173828 L 471.41797 44.173828 L 474.38672 47.142578 L 477.13867 44.388672 L 485.89453 44.388672 L 488.8457 47.337891 L 491.44922 44.738281 L 498.20703 44.738281 L 500.9375 47.466797 L 504.10547 44.298828 L 512.60156 44.298828 L 515.29102 46.990234 L 518.2832 44 L 526.125 44 L 529.05273 46.925781 L 531.98242 43.998047 L 539.74023 43.998047 L 542.70898 46.966797 L 545.59375 44.083984 L 554.56641 44.083984 L 557.58008 47.097656 L 560.89844 43.78125 L 568.00586 43.78125 L 571.38672 47.162109 L 574.81445 43.738281 L 580.4043 43.738281 L 581.27734 47.005859 L 592.02344 47.005859 L 597.57227 46.380859 L 603.20703 44.474609 L 606.67773 41.697266 L 608.93164 39.533203 L 610.31836 35.630859 L 613.69727 34.503906 L 622.63086 34.503906 L 628.69727 34.763672 L 633.29297 33.982422 L 637.63086 29.212891 L 639.88477 24.097656 L 640.83789 18.808594 L 640.83789 13.779297 L 640.4043 9.7929688 L 638.8457 6.6699219 L 636.67773 2.7695312 L 634.33594 .6015625 L 631.125 -1.046875 L 627.13867 -2.0859375 L 614.04688 -2.0859375 L 614.04688 -9.6308594 L 650.375 -9.6308594 L 653.66992 -11.798828 L 654.79883 -14.572266 L 655.14453 -19.082031 L 654.45117 -25.410156 L 653.49609 -30.351562 L 651.58984 -36.421875 L 650.28906 -38.503906 L 648.0332 -39.630859 L 313.96094 -43.009766 L 313.96094 -39.109375 L 309.88477 -39.109375 L 309.88477 -41.017578 L 305.63477 -41.017578 L 305.63477 -44.052734 L 301.64844 -44.052734 L 301.64844 -46.654297 L 89.826172 -48.648438 z M 56.75 38.75 L 89.814453 38.75 L 92.501953 39.5625 L 94.9375 40.9375 L 97.185547 43 L 99 45.375 L 100.18555 48.126953 L 100.6875 51.0625 L 99.75 54.126953 L 97.375 57.375 L 93 60.4375 L 87.4375 62.75 L 79.814453 65.5625 L 72.6875 68 L 66.625 68.873047 L 57.185547 69.375 L 49.25 68.6875 L 44.6875 66.185547 L 40.814453 62.0625 L 38.625 58.6875 L 37.873047 55.126953 L 38.0625 51.873047 L 39.126953 49.0625 L 40.501953 47.375 L 42.375 46.9375 L 44.375 47.873047 L 45.625 50.6875 L 45.0625 52.126953 L 44.4375 54.873047 L 44.75 58.6875 L 45.5625 61.5625 L 46.501953 63.375 L 47.9375 65.4375 L 49.25 66.375 L 50.625 66.375 L 51.0625 65.25 L 50.4375 63.185547 L 49.25 61.0625 L 48.4375 58.814453 L 48.185547 55.6875 L 48.25 52.873047 L 48.6875 50.6875 L 49.9375 48.126953 L 56.75 38.75 z "
                    );
                    radiusDiv = 78;
                    break;
                case 247: // Mirco-SMG
                    path = new Path2D(
                        "M -95.25 -100.9375 L -97.0625 -99.0625 L -97.0625 -63.625 L -102.375 -59.9375 L -102.375 -52.9375 L -117.3125 -52.9375 L -117.3125 -42.3125 L -144 -42.3125 L -144 -37.3125 L -381.375 -37.3125 L -383.25 -39.9375 L -385.6875 -39.9375 L -401.87305 -25.5625 L -401.87305 -18.3125 L -397.83984 -17.230469 L -397.83984 -11.5625 L -401.38867 -10.611328 L -401.38867 -6.1855469 L -399.03125 -5.5546875 L -399.03125 -1.1269531 L -401.25781 -0.52929688 L -401.25781 81 L -385.6875 96.9375 L -384.125 95.375 L -384.125 -14.126953 L -373.87305 -21.814453 L -373.87305 -25.25 L -145 -25.25 L -145 -19.25 L -104.375 -19.25 L -104.375 .12695312 L -102.4375 2.0625 L -6.1269531 2.0625 L -6.1269531 26.5625 L -5.25 26.501953 L 3.75 26.501953 L 3.75 32.25 L 18 46.501953 L 15.75 60.75 L 16.25 75 L 13.501953 89.25 L 11 105.75 L 9.25 120 L 8.5019531 136.25 L 17 160.75 L 31.75 169.25 L 38.75 169.25 L 38.75 174.25 L 100.25 174.25 L 100.25 82 L 161.50195 82 L 170.50195 80.75 L 177 77.75 L 181 73 L 182.75 66.75 L 182.75 27 L 185.5957 29.845703 L 185.5957 42.6875 L 292.75 42.6875 L 292.75 30 L 302 30 L 307.875 27.814453 L 312.75 24.75 L 315.50195 21.0625 L 317.3125 17.375 L 318.25 13.25 L 318.25 7 L 359.81445 7 L 359.81445 -4.9375 L 420.3125 -4.9375 L 420.3125 -25.6875 L 359.375 -25.6875 L 359.375 -38.126953 L 315.18555 -38.126953 L 315.18555 -48.873047 L 312.4375 -51.375 L 310.3125 -52.625 L 307.375 -52.625 L 307.375 -84.75 L 305.3125 -86.814453 L 285.6875 -86.814453 L 266.375 -54.25 L 266.375 -59.9375 L 205.3125 -59.9375 L 205.3125 -62.498047 L 187.625 -62.498047 L 184.3125 -64.498047 L 181.4375 -65.3125 L 177.4375 -65.3125 L 177.4375 -87.498047 L 175.75 -89.185547 L 163.5625 -89.185547 L 152.87305 -72.873047 L 152.87305 -66.3125 L 51.9375 -66.3125 L 51.9375 -72.375 L 48.6875 -72.375 L 48.6875 -68.625 L 46.185547 -68.625 L 46.185547 -72.498047 L 40.375 -72.498047 L 40.375 -68.625 L 38.126953 -68.625 L 38.126953 -72.185547 L 30.126953 -72.185547 L 30.126953 -68.5625 L 28.126953 -68.5625 L 28.126953 -72.0625 L 19.814453 -72.0625 L 19.814453 -68.0625 L 17.5625 -68.0625 L 17.5625 -72.126953 L 8.8144531 -72.126953 L 8.8144531 -68.625 L 6.75 -68.625 L 6.75 -72.126953 L -0.6875 -72.126953 L -0.6875 -67.75 L -2.8730469 -67.75 L -2.8730469 -72.126953 L -11.625 -72.126953 L -11.625 -67.814453 L -13.9375 -67.814453 L -13.9375 -72.126953 L -21.185547 -72.126953 L -22.285156 -68.017578 L -24.375 -68.017578 L -24.375 -72.185547 L -30.814453 -72.185547 L -30.814453 -67.814453 L -33 -67.814453 L -33 -71.9375 L -36.375 -71.9375 L -36.375 -63.814453 L -64.4375 -100.9375 L -95.25 -100.9375 z M 118.0625 26.126953 L 119.18555 35.5625 L 121.3125 43.75 L 123.9375 50.814453 L 126.625 55.4375 L 130.6875 60.3125 L 134.12695 63.9375 L 136.9375 66.4375 L 139.375 68.5625 L 142.12695 68.5625 L 142.12695 65.126953 L 138.81445 62 L 134.375 56.814453 L 131.375 51.625 L 129.9375 47.75 L 129.9375 27.4375 L 176 27.4375 L 176 61 L 174.5625 66.6875 L 171.4375 71.185547 L 166.9375 74.6875 L 162.50195 76.625 L 102.18555 76.625 L 102.18555 26.75 L 118.0625 26.126953 z "
                    );
                    radiusDiv = 75;
                    break;

                case 248: // Fatman Nuke Launcher
                    path = new Path2D(
                        "m -548.34342,-158.14336 -2.12304,0.375 .375,2.5 -1.62891,2.8125 -2.24805,4.9375 -1.1875,2.875 -1.6875,4.0625 -0.6875,2.3125 -0.93554,8.625 -0.37696,1.125 -1.1875,1.12695 h -1.1875 v -2.6289 h -1.6875 v 46.316402 l -1.87304,0.498047 -2,-0.375 -1.75196,-0.625 h -2.125 l -1.25,-1.3125 -1.0625,-0.4375 -1.81054,0.125 -1.94141,1.375 -1,1.25 -1.43555,0.375 -1.31054,0.625 -0.94141,1.126953 .56445,19.935547 -2.5,1.25 v 6.9375 l .6875,0.93555 1.24805,0.06445 1.37695,-0.5625 2.375,-0.81445 1.93555,-0.3711 2.62891,0.3711 2.87304,0.56445 2.5625,-0.0625 1.87696,-0.6875 1.93554,-0.3125 1.06446,1.0625 v 39.3125 h 13.05859 v 1.25 h -13.05859 V 8.2316391 l -1.03321,1.0332 1.31055,0.7558599 250.1582,-0.8515599 16.93555,13.3124999 15.3164,6.43945 h 11.3125 v 9.49805 l 1.18555,1.18945 187.250003,-2.50195 v -10.375 h 120.4375 l -0.375,3.0625 -0.12695,2.50195 .18945,1.74805 .9375,0.8125 11.25,1.5 7.75,0.75 2.50195,-0.18555 1.3711,-0.75195 .3164,-1.50195 .56055,-2.12305 1.06445,-1.0625 1.56055,-0.625 2,-0.4375 h 1.75 v 26.56055 h 4.1875 l -13.49805,37.81445 -0.37695,2.375 .06445,10.187501 3.12305,3.31055 30.75,1.56445 6.874997,-2.4375 h 33.62305 l 4.56445,-0.75 5.1875,-1.625 4.375,-2.625 5.3125,-3.18555 3.25,-3.876951 2.875,-4.5 2.125,-5.0625 1.5625,-4.625 .8125,-3.8125 4.25195,-22.25 1.12305,-1.0625 h 27.4375 l 25.1875,-29.5625 h 19.8125 l 1.5625,2.1875 h 18 v -17.37695 h -1.43945 V 9.9210891 h .75195 v -4.68945 h 9.87695 l 8.12305,-10.6875 V -19.391411 h -63.43555 l -0.56445,-4.75195 v -49.248047 h 1.4375 v -7.251953 h 1.1875 v -10.125 h -323.9375 v -6.4375 h -33.375 l -7.25,-7.249999 h -2.0625 l -1.04297,1.80664 -2.26953,-4.99414 -20.25,-9.3125 -33.9375,-5.1875 -32.0625,3.6875 -23.75,9.75195 -11.5625,-9.6875 h -20.4375 v -4 h -11.375 l -21.74805,1.81055 v 3.625 l 22.43555,1.6875 v 23.749999 h -128.5625 v -3.3125 l -9,-1.125 -0.625,-1.064453 -7.8125,-1.371094 -2,0.935547 -3.3125,-0.564453 h -4.3125 v -2.748046 h -6 l -0.75,2.80664" +
                        " h -3.68945 l -17.12305,3.005859 v 16.1875 h -7.375 v -18.125 h -2.6875 l -3.9375,-5.999999 h -3.3125 l -1.1875,-3.9375 -1.6875,-6.125 -1.37695,-3.5625 -2.93555,-6.125 -4.5,-8.875 -2.0625,-4.50195 -4.18554,-5.62305 -4.6875,-5.68945 -3.62891,-3.49805 -4.43555,-4.375 -2.56445,-1.0625 -2.68359,0.125 -1.43946,1.5625 -2.18945,-1.875 -2.18555,-1.1875 z m 462.000003,72.064452 h 56.87695 l 1.65821,0.957031 -1.79102,1.033204 h -56.80859 l -1.43555,-0.742188 z m 78.5605503,0 H 49.094083 l 1.6582,0.957031 -1.78906,1.033204 H -7.8453667 l -1.43555,-0.742188 z m 77.3749997,0 h 56.876947 l 1.6582,0.957031 -1.78906,1.033204 H 69.529633 l -1.43555,-0.742188 z m 79.062497,0 h 56.87695 l 1.6582,0.957031 -1.78906,1.033204 h -56.80859 l -1.43555,-0.742188 z m -490.42969,7.03125 c 1.40753,0 2.75668,0.559418 3.75195,1.554688 .99527,0.99527 1.55469,2.346374 1.55469,3.753906 0,2.931023 -2.37561,5.306641 -5.30664,5.306641 -2.93101,0 -5.30664,-2.375618 -5.30664,-5.306641 0,-2.931023 2.37563,-5.308594 5.30664,-5.308594 z m 31.10937,0 c 1.40753,0 2.75864,0.559418 3.75391,1.554688 .99527,0.99527 1.55469,2.346374 1.55469,3.753906 0,2.931023 -2.37757,5.306641 -5.3086,5.306641 -2.931,0 -5.30664,-2.375618 -5.30664,-5.306641 0,-2.931023 2.37564,-5.308594 5.30664,-5.308594 z m -128.11914,0.002 c 1.40753,0 2.75669,0.559418 3.75196,1.554688 .99527,0.99527 1.55468,2.344421 1.55468,3.751953 0,2.931023 -2.37561,5.30664 -5.30664,5.306641 -2.93101,0 -5.30859,-2.375618 -5.30859,-5.306641 0,-2.931023 2.37758,-5.306641 5.30859,-5.306641 z m 31.4961,0 c 1.40753,0 2.75668,0.559418 3.75195,1.554688 .99527,0.99527 1.55469,2.344421 1.55469,3.751953 0,2.931023 -2.37561,5.30664 -5.30664,5.306641 -2.93101,0 -5.3086,-2.375618 -5.3086,-5.306641 0,-2.931023 2.37759,-5.306641 5.3086,-5.306641 z m 33.24804,0 c 1.40753,0 2.75864,0.559418 3.75391,1.554688 .99527,0.99527 1.55274,2.344421 1.55274,3.751953 0,2.931023 -2.37562,5.30664 -5.30665,5.306641 -2.93101,0 -5.30664,-2.375618 -5.30664,-5.306641 0,-2.931023 2.37563,-5.306641 5.30664,-5.306641 z m 90.38477,8.402344 h 2.75 v 15 h -11.75 v -4.68945 l 1.8125,-1.87305 .375,-3.75 z m -73.63281,2.191406 c 1.40753,0 2.75668,0.55941 3.75195,1.554688 .99527,0.99527 1.55469,2.346382 1.55469,3.753906 0,2.93103 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.3086,-2.37561 -5.3086,-5.30664 0,-2.931023 2.37759,-5.308594 5.3086,-5.308594 z m -64.875,0.564453 c 1.40751,0 2.75668,0.557465 3.75195,1.552735 .99527,0.99527 1.55469,2.346382 1.55469,3.753906 0,2.93102 -2.37563,5.30664 -5.30664,5.30664 -2.93103,0 -5.30664,-2.37562 -5.30664,-5.30664 0,-2.931023 2.37561,-5.306641 5.30664,-5.306641 z m 30.62304,0 c 1.40753,0 2.75669,0.557465 3.75196,1.552735 .99527,0.99527 1.55469,2.346382 1.55469,3.753906 0,2.93102 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30859,-2.37562 -5.30859,-5.30664 0,-2.931023 2.37758,-5.306641 5.30859,-5.306641 z m 65.62305,0.435547 c 1.40753,0 2.75864,0.55941 3.75391,1.554688 .99527,0.99527 1.55469,2.346378 1.55469,3.753906 0,2.93103 -2.37757,5.30664 -5.3086,5.30664 -2.93103,0 -5.30664,-2.37561 -5.30664,-5.30664 0,-2.931027 2.37561,-5.308594 5.30664,-5.308594 z m -168.42578,8.683594 h 6.87695 v 13.37695 l 3.31055,1.12305 v 13.0625 l 18.5,3.9375 v 14.8125 h -50.43554 v -1.24805" +
                        " h 21.37109 z m 55.55859,0.95117 c 1.40753,0 2.75669,0.55941 3.75196,1.55469 .99527,0.99527 1.55468,2.34442 1.55468,3.75195 0,2.93102 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.30859,-2.37562 -5.30859,-5.30664 0,-2.93102 2.37758,-5.30664 5.30859,-5.30664 z m 33.24414,0 c 1.40753,0 2.75669,0.55941 3.75196,1.55469 .99527,0.99527 1.55469,2.34442 1.55469,3.75195 0,2.93102 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30859,-2.37562 -5.30859,-5.30664 0,-2.93102 2.37758,-5.30664 5.30859,-5.30664 z m 31.5,0 c 1.40753,0 2.75864,0.55941 3.75391,1.55469 .99527,0.99527 1.55274,2.34442 1.55274,3.75195 0,2.93102 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30664,-2.37562 -5.30664,-5.30664 0,-2.93102 2.37563,-5.30664 5.30664,-5.30664 z m 31.50196,0 c 1.40753,0 2.75668,0.55941 3.75195,1.55469 .99527,0.99527 1.55469,2.34442 1.55469,3.75195 0,2.93102 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.30664,-2.37562 -5.30664,-5.30664 0,-2.93102 2.37563,-5.30664 5.30664,-5.30664 z m 36.75976,6.17383 h 2.0586 l -0.12305,23.75 -2.375,1.125 -6.18945,0.25 1,-13.3125 z m -117.25781,4.43945 c 1.40753,0 2.75864,0.55942 3.75391,1.55469 .99527,0.99527 1.55273,2.34442 1.55273,3.75195 0,2.93103 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.30664,-2.37561 -5.30664,-5.30664 0,-2.93103 2.37563,-5.30664 5.30664,-5.30664 z m 31.49609,0 c 1.40753,0 2.75669,0.55941 3.75196,1.55469 .99527,0.99527 1.55469,2.34639 1.55469,3.75391 0,2.93103 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30859,-2.37561 -5.30859,-5.30664 0,-2.93102 2.37758,-5.3086 5.30859,-5.3086 z m 33,0 c 1.40753,0 2.75669,0.55941 3.75196,1.55469 .99527,0.99527 1.55469,2.34639 1.55469,3.75391 0,2.93103 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30859,-2.37561 -5.30859,-5.30664 0,-2.93102 2.37758,-5.3086 5.30859,-5.3086 z m 31.5,0 c 1.4075,0 2.75864,0.55941 3.75391,1.55469 .99527,0.99527 1.55273,2.34639 1.55274,3.75391 0,2.93103 -2.37565,5.30664 -5.30665,5.30664 -2.93103,0 -5.30664,-2.37561 -5.30664,-5.30664 0,-2.93102 2.37561,-5.3086 5.30664,-5.3086 z m 159.35352,7.8125 c 1.00238,0 1.96308,0.39863 2.67187,1.10743 .7088,0.70879 1.10743,1.66947 1.10743,2.67187 0,2.08738 -1.69193,3.7793 -3.7793,3.7793 -2.08737,0 -3.7793,-1.69192 -3.7793,-3.7793 0,-2.08738 1.69193,-3.7793 3.7793,-3.7793 z m -64.88281,0.1836 c 1.00238,0 1.9631,0.39863 2.67187,1.10742 .7088,0.7088 1.10742,1.66948 1.10742,2.67187 0,2.08737 -1.69192,3.78125 -3.77929,3.78125 -2.08737,0 -3.7793,-1.69388 -3.7793,-3.78125 0,-2.08737 1.69193,-3.77929 3.7793,-3.77929 z m 32.25781,0 c 1.00238,0 1.96307,0.39863 2.67187,1.10742 .7088,0.7088 1.10743,1.66948 1.10743,2.67187 0,2.08737 -1.69193,3.78125 -3.7793,3.78125 -2.0874,0 -3.7793,-1.69388 -3.7793,-3.78125 0,-2.08737 1.6919,-3.77929 3.7793,-3.77929 z m 65.24805,0.002 c 1.00238,0 1.96502,0.39863 2.67382,1.10742 .70878,0.70881 1.10743,1.66949 1.10743,2.67188 0,2.08737 -1.69388,3.77929 -3.78125,3.77929 -2.08737,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.69193,-3.7793 3.7793,-3.7793 z m 35,0 c 1.002383,0 1.965023,0.39863 2.673823,1.10742 .70878,0.70881 1.10743,1.66949 1.10743,2.67188 0,2.08737 -1.69388,3.77929 -3.781253,3.77929 -2.08737,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.69193,-3.7793 3.7793,-3.7793 z m 29.250003,0 c 1.00238,0 1.96307,0.39863 2.67187,1.10742 .70874,0.70881 1.10742,1.66949 1.10742,2.67188 0,2.08737 -1.69195,3.77929 -3.77929,3.77929 -2.0874,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.6919,-3.7793 3.7793,-3.7793 z m 33.25195,0 c 1.00238,0 1.96308,0.39863 2.67187,1.10742 .7088,0.70881 1.10743,1.66949 1.10743,2.67188 0,2.08737 -1.6919,3.77929 -3.7793,3.77929 -2.0874,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.6919,-3.7793 3.7793,-3.7793 z m 32.0605503,0 c 1.00238,0 1.96307,0.39863 2.67187,1.10742 .7088,0.70881 1.10742,1.66949 1.10742,2.67188 0,2.08737 -1.69189,3.77929 -3.77929,3.77929 -2.08734,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.69196,-3.7793 3.7793,-3.7793 z m 34.6874997,0 c 1.00238,0 1.96307,0.39863 2.67187,1.10742 .70874,0.70881 1.10742,1.66949 1.10742,2.67188 0,2.08737 -1.69195,3.77929 -3.77929,3.77929 -2.0874,0 -3.7793,-1.69192 -3.7793,-3.77929 0,-2.08738 1.6919,-3.7793 3.7793,-3.7793 z" +
                        "m 30.99804,0 c 1.00238,0 1.96308,0.39863 2.67188,1.10742 .70874,0.70881 1.10742,1.66949 1.10742,2.67188 0,2.08737 -1.69196,3.77929 -3.7793,3.77929 -2.0874,0 -3.77929,-1.69192 -3.77929,-3.77929 0,-2.08738 1.69189,-3.7793 3.77929,-3.7793 z m 35.75,0 c 1.00238,0 1.96308,0.39863 2.67188,1.10742 .7088,0.70881 1.10742,1.66949 1.10742,2.67188 0,2.08737 -1.69196,3.77929 -3.7793,3.77929 -2.0874,0 -3.77929,-1.69192 -3.77929,-3.77929 0,-2.08738 1.69189,-3.7793 3.77929,-3.7793 z" +
                        "m 31.369137,0.61719 c 1.00238,0 1.96308,0.39863 2.67188,1.10742 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08738 -1.69196,3.7793 -3.7793,3.7793 -2.0874,0 -3.78125,-1.69192 -3.78125,-3.7793 0,-2.08737 1.69385,-3.77929 3.78125,-3.77929 z m 36.38672,0 c 1.00238,0 1.96503,0.39863 2.67383,1.10742 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08738 -1.69385,3.7793 -3.78125,3.7793 -2.0874,0 -3.77929,-1.69192 -3.77929,-3.7793 0,-2.08737 1.69189,-3.77929 3.77929,-3.77929 z m 34.06641,0 c 1.00238,0 1.96307,0.39863 2.67187,1.10742 .7088,0.7088 1.10743,1.66949 1.10743,2.67187 0,2.08738 -1.6919,3.7793 -3.7793,3.7793 -2.08734,0 -3.7793,-1.69192 -3.7793,-3.7793 0,-2.08737 1.69196,-3.77929 3.7793,-3.77929 z m -636.54102,2 c 1.40753,0 2.75669,0.5594 3.75196,1.55469 .99527,0.99526 1.55468,2.34442 1.55468,3.75195 0,2.93101 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.30859,-2.37563 -5.30859,-5.30664 0,-2.93103 2.37758,-5.30664 5.30859,-5.30664 z m 31.4961,0 c 1.40753,0 2.75668,0.5594 3.75195,1.55469 .99527,0.99526 1.55469,2.34442 1.55469,3.75195 0,2.93101 -2.37561,5.30664 -5.30664,5.30664 -2.93101,0 -5.3086,-2.37563 -5.3086,-5.30664 0,-2.93103 2.37759,-5.30664 5.3086,-5.30664 z m 33.24804,0 c 1.40753,0 2.75864,0.5594 3.75391,1.55469 .99527,0.99526 1.55274,2.34442 1.55274,3.75195 0,2.93101 -2.37562,5.30664 -5.30665,5.30664 -2.93101,0 -5.30664,-2.37563 -5.30664,-5.30664 0,-2.93103 2.37563,-5.30664 5.30664,-5.30664 z m 30.43946,0 c 1.40753,0 2.75668,0.5594 3.75195,1.55469 .99529,0.99526 1.55469,2.34442 1.55469,3.75195 0,2.93101 -2.37562,5.30664 -5.30664,5.30664 -2.93103,0 -5.3086,-2.37563 -5.3086,-5.30664 0,-2.93103 2.37757,-5.30664 5.3086,-5.30664 z m 81.13281,3.75781 12.875,5.12695 -0.12695,5.74805 h -11.43555 l -21.00781,5.62891 -9.61524,14.0585901 -3.3125,0.3125 -0.93945,1.43749998 -4.875,-3.87304998 -0.0625,-15.7519501 h 8.375 v -3.75 h 20.125 z m 45.1582,1.18359 c 1.00238,0 1.96308,0.39668 2.67188,1.10547 .7088,0.7088 1.10742,1.67145 1.10742,2.67383 0,2.08739 -1.69193,3.7793 -3.7793,3.7793 -2.0874,0 -3.77929,-1.69191 -3.77929,-3.7793 0,-2.08737 1.69189,-3.7793 3.77929,-3.7793 z m 32.17969,0 c 1.00238,0 1.96308,0.39668 2.67188,1.10547 .7088,0.7088 1.10742,1.67145 1.10742,2.67383 0,2.08739 -1.69193,3.7793 -3.7793,3.7793 -2.08737,0 -3.78125,-1.69191 -3.78125,-3.7793 0,-2.08737 1.69388,-3.7793 3.78125,-3.7793 z m 31.94141,0 c 1.00238,0 1.96307,0.39864 2.67187,1.10743 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08739 -1.69192,3.7793 -3.77929,3.7793 -2.08737,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.69193,-3.7793 3.7793,-3.7793 z m 33.4375,0 c 1.00238,0 1.96502,0.39864 2.67382,1.10743 .7088,0.7088 1.10547,1.66949 1.10547,2.67187 0,2.08739 -1.69192,3.7793 -3.77929,3.7793 -2.08737,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.69193,-3.7793 3.7793,-3.7793 z m 33.439453,0 c 1.00238,0 1.96307,0.39864 2.67187,1.10743 .7088,0.7088 1.10743,1.66949 1.10743,2.67187 0,2.08739 -1.69193,3.7793 -3.7793,3.7793 -2.0874,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.6919,-3.7793 3.7793,-3.7793 z m 31.24805,0 c 1.00238,0 1.96502,0.39864 2.67382,1.10743 .7088,0.7088 1.10743,1.66949 1.10743,2.67187 0,2.08739 -1.69391,3.7793 -3.78125,3.7793 -2.0874,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.6919,-3.7793 3.7793,-3.7793 z m 34.25,0 c 1.00238,0 1.96307,0.39864 2.67187,1.10743 .70874,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08739 -1.69195,3.7793 -3.77929,3.7793 -2.0874,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.6919,-3.7793 3.7793,-3.7793 z m 31.56445,0 c 1.00244,0 1.96308,0.39864 2.67187,1.10743 .7088,0.7088 1.10743,1.66949 1.10743,2.67187 0,2.08739 -1.6919,3.7793 -3.7793,3.7793 -2.0873397,0 -3.7792997,-1.69191 -3.7792997,-3.7793 0,-2.08737 1.69196,-3.7793 3.7792997,-3.7793 z m 33.93359,0 c 1.00238,0 1.96503,0.39864 2.67383,1.10743 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08739 -1.69385,3.7793 -3.78125,3.7793 -2.08734,0 -3.77929,-1.69191 -3.77929,-3.7793 0,-2.08737 1.69195,-3.7793 3.77929,-3.7793 z" +
                        "m 33.93555,0 c 1.00238,0 1.96308,0.39864 2.67188,1.10743 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08739 -1.6919,3.7793 -3.7793,3.7793 -2.08734,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.69196,-3.7793 3.7793,-3.7793 z m 64.884767,0 c 1.00238,0 1.96307,0.39864 2.67187,1.10743 .7088,0.7088 1.10742,1.66949 1.10742,2.67187 0,2.08739 -1.69195,3.7793 -3.77929,3.7793 -2.0874,0 -3.7793,-1.69191 -3.7793,-3.7793 0,-2.08737 1.6919,-3.7793 3.7793,-3.7793 z m 36.05468,0 c 1.00238,0 1.96503,0.39864 2.67383,1.10743 .7088,0.7088 1.10547,1.66949 1.10547,2.67187 0,2.08739 -1.69196,3.7793 -3.7793,3.7793 -2.0874,0 -3.77929,-1.69191 -3.77929,-3.7793 0,-2.08737 1.69189,-3.7793 3.77929,-3.7793 z m -69.375,1.84375 c 1.00238,0 1.96308,0.39667 2.67188,1.10547 .70874,0.7088 1.10742,1.67143 1.10742,2.67383 0,2.08737 -1.69196,3.7793 -3.7793,3.7793 -2.0874,0 -3.77929,-1.69193 -3.77929,-3.7793 0,-2.08739 1.69189,-3.7793 3.77929,-3.7793 z m -469.5332,1.54102 c 1.40753,0 2.75668,0.5594 3.75195,1.55469 .99529,0.99527 1.55469,2.34442 1.55469,3.75195 0,2.93103 -2.37562,5.30859 -5.30664,5.30859 -2.93103,0 -5.30859,-2.37756 -5.30859,-5.30859 0,-2.93103 2.37756,-5.30664 5.30859,-5.30664 z m -100.18164,0.80664 h 4.625 v 15.25 h -4.375 z m 132.24609,0.5 v 5.30664 h 5.30664 c 0,2.93103 -2.37564,5.30664 -5.30664,5.30664 -2.93103,0 -5.30664,-2.37561 -5.30664,-5.30664 0,-2.93102 2.37561,-5.30664 5.30664,-5.30664 z m -95.75195,0.4375 c 1.40753,0 2.75668,0.5594 3.75195,1.55469 .99527,0.99527 1.55469,2.34442 1.55469,3.75195 0,2.93103 -2.37561,5.30859 -5.30664,5.30859 -2.93101,0 -5.30859,-2.37756 -5.30859,-5.30859 0,-2.93103 2.37758,-5.30664 5.30859,-5.30664 z m 31.49609,0 c 1.40753,0 2.75669,0.5594 3.75196,1.55469 .99527,0.99527 1.55469,2.34442 1.55469,3.75195 0,2.93103 -2.37562,5.30859 -5.30665,5.30859 -2.93101,0 -5.30859,-2.37756 -5.30859,-5.30859 0,-2.93103 2.37758,-5.30664 5.30859,-5.30664 z m 420.541023,2.9082 c 1.00238,0 1.96308,0.39863 2.67187,1.10742 .7088,0.70878 1.10743,1.66948 1.10743,2.67188 0,2.08737 -1.69196,3.7793 -3.7793,3.7793 -2.0874,0 -3.7793,-1.69193 -3.7793,-3.7793 0,-2.08739 1.6919,-3.7793 3.7793,-3.7793 z m 31.75195,0 c 1.00244,0 1.96503,0.39863 2.67383,1.10742 .7088,0.70878 1.10742,1.66948 1.10742,2.67188 0,2.08737 -1.69385,3.7793 -3.78125,3.7793 -2.08734,0 -3.77929,-1.69193 -3.77929,-3.7793 0,-2.08739 1.69195,-3.7793 3.77929,-3.7793 z m 34.74805,0 c 1.00238,0 1.96503,0.39863 2.67383,1.10742 .7088,0.70878 1.10547,1.66948 1.10547,2.67188 0,2.08737 -1.6919,3.7793 -3.7793,3.7793 -2.08734,0 -3.7793,-1.69193 -3.7793,-3.7793 0,-2.08739 1.69196,-3.7793 3.7793,-3.7793 z" +
                        "m 67.558587,0 c 1.00244,0 1.96308,0.39863 2.67188,1.10742 .7088,0.70878 1.10742,1.66948 1.10742,2.67188 0,2.08737 -1.6919,3.7793 -3.7793,3.7793 -2.08734,0 -3.77929,-1.69193 -3.77929,-3.7793 0,-2.08739 1.69195,-3.7793 3.77929,-3.7793 z m 33.00782,0 c 1.00244,0 1.96307,0.39863 2.67187,1.10742 .7088,0.70878 1.10742,1.66948 1.10742,2.67188 0,2.08737 -1.69189,3.7793 -3.77929,3.7793 -2.08734,0 -3.7793,-1.69193 -3.7793,-3.7793 0,-2.08739 1.69196,-3.7793 3.7793,-3.7793 z m -68.38477,1.36524 c 1.00238,0 1.96308,0.39862 2.67188,1.10742 .7088,0.7088 1.10742,1.66947 1.10742,2.67187 0,2.08737 -1.6919,3.7793 -3.7793,3.7793 -2.08734,0 -3.7793,-1.69193 -3.7793,-3.7793 0,-2.08737 1.69196,-3.77929 3.7793,-3.77929 z m -440.83789,1.91211 10.125,0.68945 -0.125,13.5000001 -8.375,-6.3125001 h -2.125 z m -60.46289,2.13281 c .92716,-0.01619 1.8579,0.21019 2.69531,0.67969 1.67482,0.93895 2.71503,2.70689 2.7207,4.62695 l -5.32226,0.01562 -5.32031,0.16993 c -0.0614,-1.9191 .91563,-3.72186 2.55664,-4.71875 .82051,-0.49844 1.74276,-0.75725 2.66992,-0.77344 z m 31.75,0.25 c .92716,-0.01619 1.8579,0.21019 2.69531,0.67969 1.67482,0.93895 2.71503,2.70689 2.7207,4.62695 l -5.32226,0.01562 -5.32031,0.16993 c -0.0614,-1.9191 .91563,-3.72186 2.55664,-4.71875 .82051,-0.49844 1.74276,-0.75725 2.66992,-0.77344 z m -95.25195,0.24805 c .92716,-0.01619 1.8579,0.21019 2.69531,0.67968 1.67482,0.93895 2.71503,2.7069 2.7207,4.62696 l -5.32226,0.01562 -5.32032,0.16992 c -0.0614,-1.9191 .91563,-3.72186 2.55664,-4.71875 .82051,-0.49843 1.74277,-0.75724 2.66993,-0.77343 z m 31.75,0 c .92716,-0.01619 1.85985,0.21019 2.69726,0.67968 1.67482,0.93895 2.71308,2.7069 2.71875,4.62696 l -5.32226,0.01562 -5.32032,0.16992 c -0.0614,-1.9191 .91563,-3.72186 2.55664,-4.71875 .82051,-0.49843 1.74277,-0.75724 2.66993,-0.77343 z m 500.214843,14.3105401 48.437497,0.0586 v 6.18945 H 94.844083 Z m -6.875,0.0586 v 6.12695 h -28.25 l -2.1875,-0.81445 -2.5,-1.24805002 -2.625,-1.12305 -1.5625,-0.37695 -1.875,0.3125 -1,0.8125 -1.68945,2.37500002 h -6.93555 v -5.75195 z m 62.999997,0.12695 h 48.875 v 6.18555 h -48.875 z m -86.437497,8.6875 181.187497,0.3125 v 4.6874999 l -2.625,2.875 h -6.6875 l -1.5625,-4.3769499 -1.0625,-0.62305 H 70.656583 l -4.6875,-2.1875 z m -18.6875,0.49805 .06445,1.50195 -1.93945,6.0624999 h -14.3125 l .5,-0.87695 3.5625,-6.5605499 z M -257.53092,24.856639 h 19.8125 v 1.5 h 8.31055 v -1.5 l 78.87695,0.12305 v 5.18945 h -107 z m 389.12305,32.1875 35.87695,0.25195 -1.56055,10.49805 -2.6875,12 -2.12695,6.12695 -2.87305,4.12305 -5.3125,7.1875 -4.25195,2.74805 -5.9375,2.814451 -5.6875,1.625 -6.49805,0.625 h -29.37695 l -1.876947,-4.43555 8.814447,-43.439451 h 19 l -0.0625,5.9375 5.375,23.50195 2.6875,11.56055 3.18555,4.312501 .56445,-4.687501 z"
                    );
                    radiusDiv = 60;
                    break;
                case 249: // TM-9 SMG
                    path = new Path2D(
                        "M 1135.3125 -248.625 L 1135.3125 -246.6875 L 1138.9707 -243.03125 L 1138.9707 -237.49805 L 1123.4375 -237.49805 L 1121.873 -246.3125 L 1119.6875 -247.75 L 1106.0625 -247.75 L 1106.5488 -245.9375 L 1108.9062 -241.85547 L 1108.9062 -235.81445 L 1092.873 -235.81445 L 1091.8145 -243.9375 L 1089.75 -245.81445 L 1075.9375 -245.81445 L 1075.9375 -243.75 L 1078.4375 -241 L 1078.4375 -235.625 L 1061.375 -235.625 L 1060.127 -243.12695 L 1058.127 -245.49805 L 1044.873 -245.49805 L 1044.873 -243.12695 L 1047.625 -240.5625 L 1047.625 -235.0625 L 1030.75 -235.0625 L 1029.502 -243.6875 L 1027.25 -245.81445 L 1013.3125 -245.81445 L 1013.3125 -244 L 1015.9375 -241.5625 L 1015.9375 -235.18555 L 999.6875 -235.18555 L 998.81445 -243.3125 L 996.81445 -245.5625 L 983 -245.5625 L 983 -243.4375 L 985.5625 -241.375 L 985.5625 -235.5625 L 970.18555 -235.5625 L 968.5625 -244.25 L 966.25 -246.18555 L 952.0625 -246.18555 L 952.0625 -244.3125 L 954.6875 -241.625 L 954.6875 -235.0625 L 939.5625 -235.0625 L 937.5625 -243.81445 L 935.4375 -245.75 L 921.625 -245.75 L 921.625 -243.3125 L 924.5625 -240.375 L 924.5625 -233.625 L 908.50195 -233.625 L 907.4375 -241.49805 L 905.6875 -244.3125 L 890.25 -244.3125 L 890.25 -242.12695 L 893.375 -240.3125 L 893.375 -233.87305 L 878.50195 -233.87305 L 877.75 -242.12695 L 876 -244.25 L 859.50195 -244.25 L 859.50195 -242.18555 L 862.6875 -239.75 L 862.6875 -233.375 L 845.81445 -233.375 L 845.81445 -244.0625 L 829.5625 -244.0625 L 829.5625 -241.81445 L 832.85742 -239.91016 L 832.85742 -233.6875 L 816.4375 -233.6875 L 815.25 -241.87305 L 813.0625 -244.375 L 800 -244.375 L 800 -241.75 L 802.81445 -239.12695 L 802.81445 -233.4375 L 785.6875 -233.4375 L 785 -240.75 L 783.25 -243.75 L 769.3125 -243.75 L 769.3125 -241.375 L 772.18555 -239 L 772.18555 -233.49805 L 756.50195 -233.49805 L 754.625 -242.18555 L 752.12695 -244.75 L 739.0625 -244.75 L 739.0625 -242.12695 L 741.50195 -240.12695 L 741.50195 -233.625 L 725 -233.625 L 723.75 -242.87305 L 721.4375 -245.3125 L 708.75 -245.3125 L 708.75 -242.9375 L 711.4375 -240.25 L 711.4375 -235.0625 L 694.75 -235.0625 L 693.50195 -243.25 L 691.50195 -245.75 L 683.875 -247.5625 L 648.875 -247.5625 L 648.875 -237.18555 L 631.50195 -237.18555 L 631.50195 -245.87305 L 617.75 -245.87305 L 617.75 -237.5625 L 601.9375 -237.5625 L 601.9375 -246.18555 L 588.875 -246.18555 L 588.875 -237.6875 L 571 -237.6875 L 571 -247.0625 L 557.12695 -247.0625 L 557.12695 -237.6875 L 540.18555 -237.6875 L 540.18555 -247.375 L 526.12695 -247.375 L 526.12695 -237.49805 L 509.5625 -237.49805 L 509.5625 -246.12695 L 496.5625 -246.12695 L 496.5625 -237.81445 L 479.6875 -237.81445 L 479.6875 -246.49805 L 465.5625 -246.49805 L 465.5625 -237.4375 L 448.4375 -237.4375 L 448.4375 -246.4375 L 435.0625 -246.4375 L 435.0625 -237.6875 L 417.875 -237.6875 L 417.875 -246.375 L 405.6875 -246.375 L 405.6875 -237.49805 L 388.4375 -237.49805 L 388.4375 -246.6875 L 374.75 -246.6875 L 374.75 -237.18555 L 357.18555 -237.18555 L 357.18555 -247 L 343.25 -247 L 343.25 -237.25 L 326.3125 -237.25 L 326.3125 -246.18555 L 312.81445 -246.18555 L 312.81445 -237.4375 L 296.75 -237.4375 L 296.75 -247.12695 L 283.25 -247.12695 L 283.25 -237.5625 L 265.81445 -237.5625 L 265.81445 -248 L 129.25" +
                        " -248 L 127.75 -246.81445 L 127.75 -241.6875 L 100.625 -241.6875 L 98.375 -240.375 L 96.625 -236.25 L 96.25 -229.87305 L 94.625 -226.25 L 94.126953 -222.5625 L 94.5625 -218.87305 L 95.6875 -217.6875 L 98.185547 -216.9375 L 100.6875 -214.81445 L 101.81445 -212.49805 L 101.4375 -209.49805 L 99.814453 -208.18555 L 95.3125 -207.49805 L 84.873047 -207.49805 L 83.822266 -211.42969 L 78.5625 -211.42969 L 77.458984 -207.31445 L 54.873047 -207.31445 L 52.3125 -205.375 L 52.3125 -198.25 L 50.0625 -198.25 L 50.0625 -201.25 L 47.126953 -201.25 L 47.126953 -198.375 L 44.5625 -198.375 L 44.5625 -201.0625 L 42.185547 -201.0625 L 42.185547 -198.49805 L 39.9375 -198.49805 L 39.9375 -201.375 L 38 -201.375 L 38 -198.625 L 35.25 -198.625 L 35.25 -201.3125 L 32.5625 -201.3125 L 32.5625 -198.625 L 30.185547 -198.625 L 30.185547 -201.625 L 27.5625 -201.625 L 27.5625 -198.75 L 24.873047 -198.75 L 24.873047 -202.87305 L 22.375 -202.87305 L 22.375 -209.4375 L -462.49805 -213 L -466.12695 -218.625 L -479.25 -218.87305 L -498.375 -218.12695 L -512.12695 -217.12695 L -522.625 -216.375 L -531 -214.625 L -535.49805 -211.75 L -539.25 -206.75 L -540.49805 -201.375 L -541.375 -192.25 L -541.12695 -169.75 L -539.625 -155.49805 L -537.12695 -145.625 L -535.375 -132.87305 L -535.12695 -121.87305 L -534.875 -112.49805 L -531 -107.87305 L -531.375 -86.498047 L -531.25 -76.25 L -529 -69 L -526.875 -58.375 L -526.875 -35.498047 L -523.375 -27.375 L -522 -15.126953 L -522 -1 L -520 7.625 L -518.625 18.625 L -518.625 34 L -518.625 46.625 L -514 65.375 L -513.75 76.75 L -511 86.625 L -511 108.75 L -506 128.50195 L -506 152 L -501.49805 169.50195 L -501.49805 186 L -500.625 194.50195 L -497.625 203.375 L -493 209.50195 L -487 212.87305 L -478 213.25 L -463.625 212 L -449.25 209.87305 L -441.625 207.12695 L -424.12695 207.12695 L -414.49805 200.12695 L -414.625 192.375 L -413.25 186.25 L -410.12695 177.25 L -404 155.50195 L -396.12695 130.25 L -386.25 91.75 L -379 68 L -376.12695 59.873047 L -372.87305 54.75 L -366.625 49.75 L -359.625 46.75 L -350.75 44.873047 L -248.375 46.625 L -240.625 45.625 L -231.12695 43.126953 L -82.873047 -12 L -67.498047 -16.873047 L -44.498047 -22.126953 L -17.25 -27.126953 L 2.75 -30.625 L 8.5019531 -33.25 L 12.625 -38.498047 L 14.873047 -46.375 L 20.873047 -73.126953 L 21.3125 -114.3125 L 23.25 -116.6875 L 25.3125 -113.375 L 28 -116.4375 L 30.5625 -112.81445 L 33.375 -116.18555 L 35.873047 -112.49805 L 38.25 -116.25 L 40.9375 -112.625 L 42.6875 -116 L 46 -112.375 L 48.126953 -115.375 L 52.0625 -111.375 L 52.0625 -104.75 L 76 -104.75 L 76 -50.126953 L 83.25 -50.126953 L 82.625 -43.873047 L 81.126953 -39.873047 L 81.501953 -36.873047 L 83.501953 -34 L 88.25 -30.375 L 94.625 -27.873047 L 102.625 -22.625 L 109.375 -16.126953 L 114.12695 -9 L 119.375 1.25 L 122.625 11.501953 L 123.375 20.625 L 123.12695 30.375 L 120.50195 41.873047 L 115.87305 53.25 L 108.75 64.126953 L 103 71.126953 L 94.501953 81.75 L 87.25 93.25 L 81.375 101.375 L 73.126953 113.625 L 66.75 123.87305 L 60.501953 135.375 L 53.25 146.25 L 47.75 154.12695 L 42.625 163.625 L 38.625 171.25 L 32.126953 182.25 L 27.625 190.75 L 19.873047 204.75 L 13.25 219.87305 L 6.25 232.75 L 3.5019531 237.75 L 3.25 241.12695 L 4.625 244.12695 L 6.75 246.625" +
                        " L 18.873047 253.50195 L 31.126953 259.875 L 75.375 280.50195 L 106.50195 294 L 136 306.375 L 147.625 310.875 L 151.87305 311.375 L 155.12695 309.875 L 157.87305 306 L 159.75 300 L 160.25 293.875 L 159.12695 288.375 L 156.375 284.25 L 154.25 280.12695 L 154.12695 276.12695 L 155.25 272.875 L 157.87305 267.375 L 162.75 256.875 L 171.375 239.50195 L 184.75 209.50195 L 194.375 188.375 L 206.25 164.12695 L 218.12695 140.50195 L 225.375 125 L 232 109.87305 L 236 102.12695 L 239.87305 97.501953 L 243.375 95.126953 L 249.12695 94.126953 L 259.50195 94.126953 L 262 91.625 L 281.75 91.625 L 288.625 92.501953 L 295.75 96.126953 L 301 100.375 L 309.75 105.50195 L 318 110.12695 L 324.375 111.75 L 331.12695 112.87305 L 339.625 111.87305 L 350.625 110.12695 L 369 106.50195 L 391.75 102.25 L 414.625 98.75 L 430.375 95.873047 L 444.75 94.625 L 455.50195 92.625 L 458.75 93.126953 L 460.375 95.375 L 459.87305 99.375 L 456 104.75 L 439.625 159.12695 L 428.625 198.75 L 420.625 218.75 L 409.87305 254 L 399.375 291.12695 L 383.625 342 L 368.75 394.625 L 364.375 408.50195 L 361.87305 411.50195 L 358 412.75 L 355.12695 415.12695 L 353.87305 418.875 L 353.25 422.625 L 353.87305 425.75 L 355.25 428.875 L 356.625 433.25 L 356.625 441.50195 L 357.99414 443.87695 L 361 445 L 364.25 445 L 394.75 442.875 L 464.12695 441.75 L 470.375 441 L 473.375 439.25 L 475.375 436.12695 L 476.375 431.75 L 476.12695 426.50195 L 475.375 421.875 L 473.25 416.75 L 471.50195 413 L 471.25 409.75 L 472.12695 404.50195 L 474.75 397.12695 L 481.75 372.375 L 488.25 351 L 497.25 318.875 L 504 297.875 L 536.75 183.75 L 566.25 86 L 569.75 72.501953 L 592.75 69.625 L 603.25 66.873047 L 606.375 64.126953 L 606.25 61.501953 L 603.50195 58.625 L 600.125 55.501953 L 597.375 51.375 L 596.125 46.126953 L 597.125 41.375 L 600.25 35 L 606.75 10.625 L 617.375 -26.375 L 621.125 -39.375 L 623.75 -48.873047 L 625.625 -53 L 628.87305 -56.75 L 634.25 -60.375 L 640.375 -63.25 L 650.50195 -65.126953 L 661.75 -67.126953 L 668.87305 -68.625 L 675.125 -70.25 L 679.75 -73.75 L 682.125 -78.375 L 684.25 -87.126953 L 687.625 -81.873047 L 692.625 -76.375 L 698 -71.75 L 701.50195 -69.873047 L 707.75 -69.126953 L 716.75 -70 L 805.125 -70 L 828.125 -92.375 L 937.625 -94.498047 L 940.50195 -92.498047 L 941.25 -89.873047 L 939.87305 -87.873047 L 937.12695 -86.873047 L 921.25 -86.873047 L 917 -85.75 L 915.25 -82.625 L 916.50195 -80.873047 L 919.25 -79.126953 L 920.375 -75.873047 L 920 -73.498047 L 917.625 -71 L 915.625 -67.625 L 912.50195 -66.498047 L 911.375 -63.873047 L 912.75 -60.75 L 913.75 -53.75 L 917 -49.25 L 923.50195 -42.625 L 928.12695 -36.126953 L 932.625 -26.625 L 934.625 -18.75 L 934.87305 -12.25 L 933.50195 -6.4980469 L 928.75 5 L 925 10.625 L 923.12695 16.25 L 922.87305 23 L 924 56.25 L 927.25 56.25 L 927.25 61.25 L 924.625 61.25 L 924.625 64.75 L 927.12695 64.75 L 927.12695 67.4375 L 924.56641 68.123047 L 924.56641 70.4375 L 927 71.3125 L 927 74 L 924.81445 74 L 924.81445 76.9375 L 926.87305 76.9375 L 926.87305 79.25 L 924.87305 79.25 L 924.87305 82.375 L 926.87305 82.375 L 926.87305 85.375 L 924.87305 85.375 L 924.87305 88.4375 L 926.75 88.4375 L 926.75 91 L 924.75 91 L 924.75 94.0625 L 926.81445 94.0625 L 926.81445 97.501953 L 924.6875 97.501953 L 924.6875 100.9375" +
                        " L 926.75 100.9375 L 926.75 103.50195 L 924.9375 103.50195 L 924.9375 107 L 926.9375 107 L 926.9375 109.6875 L 925 109.6875 L 925 112.75 L 926.9375 112.75 L 926.9375 114.9375 L 925.25 114.9375 L 925.25 118.87305 L 926.6875 118.87305 L 926.6875 121.81445 L 925.10938 122.23633 L 925.10938 125.25 L 926.6875 125.25 L 926.6875 127.18555 L 925 127.18555 L 925 130.4375 L 926.625 130.4375 L 926.625 133.75 L 925.12695 133.75 L 925.12695 159.25 L 922.18555 162.75 L 922.18555 178.81445 L 922.6875 181.12695 L 924.6875 183.9375 L 927.9375 186.18555 L 932.6875 187.81445 L 938.12695 188.4375 L 1030.4375 188.4375 L 1036.625 188.12695 L 1041.873 187.0625 L 1044.625 185.4375 L 1046.25 183.18555 L 1046.9375 180.12695 L 1046.9375 136 L 1044.8145 136 L 1044.8145 131.9375 L 1047.625 131.9375 L 1047.625 128.18555 L 1044.9375 128.18555 L 1044.9375 125.0625 L 1047.9375 125.0625 L 1047.9375 122.12695 L 1045.0625 122.12695 L 1045.0625 119.18555 L 1048.0625 119.18555 L 1048.0625 116.375 L 1045.1855 116.375 L 1045.1855 113.4375 L 1048.1855 113.4375 L 1048.1855 110 L 1045.127 110 L 1045.127 107.6875 L 1047.625 107.6875 L 1047.625 104.625 L 1045.3125 104.625 L 1045.3125 101.18555 L 1048 101.18555 L 1048 98.25 L 1045.127 98.25 L 1045.127 95.873047 L 1047.8145 95.873047 L 1047.8145 92.501953 L 1045.1855 92.501953 L 1045.1855 89 L 1047.75 89 L 1047.75 85.9375 L 1045.127 85.9375 L 1045.7324 83.671875 L 1048.0625 83.671875 L 1048.0625 80.75 L 1045.25 80.75 L 1045.25 77 L 1048.0625 77 L 1048.0625 74.0625 L 1045.127 74.0625 L 1045.127 70.9375 L 1048.127 70.9375 L 1048.127 67.3125 L 1045.1855 67.3125 L 1045.1855 63.814453 L 1047.8145 63.814453 L 1047.8145 61.0625 L 1045.127 61.0625 L 1045.127 57.3125 L 1047.873 57.3125 L 1047.873 16.9375 L 1046.873 12.185547 L 1044.6875 6.6875 L 1041.8145 .6875 L 1039.5625 -3.6875 L 1037.1855 -9.625 L 1036.625 -14.6875 L 1036.873 -20.25 L 1038.1855 -25.498047 L 1040.127 -30.25 L 1043.3125 -35.625 L 1047.4375 -41.814453 L 1051.375 -46.25 L 1054.6875 -50 L 1057.75 -53.4375 L 1057.75 -66.126953 L 1064.75 -66.126953 L 1064.75 -80.625 L 1063 -95.75 L 1204.127 -95.75 L 1208.375 -113.87305 L 1208.375 -125.75 L 1213.375 -125.75 L 1213.375 -128.3125 L 1216.502 -128.3125 L 1216.502 -121.49805 L 1233.625 -121.49805 L 1235.502 -123.87305 L 1235.502 -130.25 L 1240.8145 -130.25 L 1240.8145 -123.625 L 1242.873 -121.25 L 1254.127 -121.25 L 1256.127 -123.87305 L 1256.127 -130.4375 L 1260.75 -130.4375 L 1260.75 -123.6875 L 1263.375 -121.25 L 1273.127 -121.25 L 1273.127 -124 L 1335.25 -124 L 1335.25 -121.12695 L 1347.75 -121.12695 L 1351.5625 -121.625 L 1354.1855 -123.49805 L 1355.625 -126.75 L 1356 -131.4375 L 1356.6875 -140.4375 L 1356.6875 -164.375 L 1356.127 -173 L 1354.75 -180.375 L 1352.75 -184.25 L 1350.127 -186.25 L 1345.873 -186.87305 L 1341.873 -186.75 L 1337 -186.12695 L 1332.375 -184.75 L 1325.127 -184.375 L 1279.127 -184.375 L 1274.375 -185.625 L 1270.625 -186.75 L 1265.9375 -187.375 L 1261.873 -187.0625 L 1260.4375 -186.12695 L 1259.9375 -184.75 L 1259.9375 -178.81445 L 1259.9375 -176.6875 L 1255.873 -176.6875 L 1253.8145 -176.6875 L 1253.8145 -183.25 L 1251.6895 -185.37305 L 1243.5625 -185.37305 L 1241.1895 -183 L 1241.1895 -176.3125 L 1235.6875 -176.3125 L 1235.6875 -182.87305 L 1233.1895 -185.37305 L 1216.5625 -185.37305 L 1216.5625 -179.9375" +
                        " L 1207.625 -182.0625 L 1207.625 -193.0625 L 1206.3125 -203.625 L 1181.75 -227.6875 L 1164.6875 -245.3125 L 1159.8145 -247.9375 L 1156 -248.625 L 1135.3125 -248.625 z M 752.50195 -225.87305 L 762.18555 -225.3125 L 765 -223.18555 L 766.81445 -219.9375 L 767.125 -216.4375 L 765.4375 -213.375 L 761 -210.3125 L 755.0625 -209.625 L 744.18555 -209.625 L 740.0625 -211.18555 L 737.87305 -213.3125 L 736.5625 -216.12695 L 736.5625 -218.5625 L 738.9375 -223.18555 L 742.75 -225.375 L 752.50195 -225.87305 z M 813.50195 -225.87305 L 823.18555 -225.3125 L 826 -223.18555 L 827.81445 -219.9375 L 828.125 -216.4375 L 826.4375 -213.375 L 822 -210.3125 L 816.0625 -209.625 L 805.18555 -209.625 L 801.0625 -211.18555 L 798.87305 -213.3125 L 797.5625 -216.12695 L 797.5625 -218.5625 L 799.9375 -223.18555 L 803.75 -225.375 L 813.50195 -225.87305 z M 874.50195 -225.87305 L 884.18555 -225.3125 L 887 -223.18555 L 888.81445 -219.9375 L 889.125 -216.4375 L 887.4375 -213.375 L 883 -210.3125 L 877.0625 -209.625 L 866.18555 -209.625 L 862.0625 -211.18555 L 859.87305 -213.3125 L 858.5625 -216.12695 L 858.5625 -218.5625 L 860.9375 -223.18555 L 864.75 -225.375 L 874.50195 -225.87305 z M 935.50195 -225.87305 L 945.18555 -225.3125 L 948 -223.18555 L 949.81445 -219.9375 L 950.125 -216.4375 L 948.4375 -213.375 L 944 -210.3125 L 938.0625 -209.625 L 927.18555 -209.625 L 923.0625 -211.18555 L 920.87305 -213.3125 L 919.5625 -216.12695 L 919.5625 -218.5625 L 921.9375 -223.18555 L 925.75 -225.375 L 935.50195 -225.87305 z M 996.50195 -225.87305 L 1006.1855 -225.3125 L 1009 -223.18555 L 1010.8145 -219.9375 L 1011.127 -216.4375 L 1009.4375 -213.375 L 1005 -210.3125 L 999.0625 -209.625 L 988.18555 -209.625 L 984.0625 -211.18555 L 981.87305 -213.3125 L 980.5625 -216.12695 L 980.5625 -218.5625 L 982.9375 -223.18555 L 986.75 -225.375 L 996.50195 -225.87305 z M 1057.502 -225.87305 L 1067.1855 -225.3125 L 1070 -223.18555 L 1071.8145 -219.9375 L 1072.125 -216.4375 L 1070.4375 -213.375 L 1066 -210.3125 L 1060.0625 -209.625 L 1049.1855 -209.625 L 1045.0625 -211.18555 L 1042.873 -213.3125 L 1041.5625 -216.12695 L 1041.5625 -218.5625 L 1043.9375 -223.18555 L 1047.75 -225.375 L 1057.502 -225.87305 z M 1121.002 -225.87305 L 1130.6875 -225.3125 L 1133.502 -223.18555 L 1135.3145 -219.9375 L 1135.627 -216.4375 L 1133.9395 -213.375 L 1129.502 -210.3125 L 1123.5645 -209.625 L 1112.6875 -209.625 L 1108.5645 -211.18555 L 1106.375 -213.3125 L 1105.0625 -216.12695 L 1105.0625 -218.5625 L 1107.4375 -223.18555 L 1111.252 -225.375 L 1121.002 -225.87305 z M 957.375 -204.00195 L 976.81445 -204.00195 L 981.625 -203.06641 L 985.18945 -201.06641 L 985.9375 -198.06641 L 984.75 -194.75 L 981.87695 -191.93945 L 978.0625 -189.93945 L 972 -188.87695 L 964.375 -188.62695 L 956.6875 -188.93945 L 950.25195 -189.68945 L 946.56445 -191.50195 L 945.4375 -193.18945 L 945.25195 -195.31445 L 945.75 -198.4375 L 947.75 -201.00195 L 951.3125 -202.87695 L 957.375 -204.00195 z M 1017.375 -204.00195 L 1036.8145 -204.00195 L 1041.625 -203.06641 L 1045.1895 -201.06641 L 1045.9375 -198.06641 L 1044.75 -194.75 L 1041.877 -191.93945 L 1038.0625 -189.93945 L 1032 -188.87695 L 1024.375 -188.62695 L 1016.6875 -188.93945 L 1010.252 -189.68945 L 1006.5645 -191.50195 L 1005.4375 -193.18945 L 1005.252 -195.31445 L 1005.75 -198.4375 L 1007.75 -201.00195 L 1011.3125 -202.87695" +
                        " L 1017.375 -204.00195 z M 1080.127 -204.00195 L 1099.5645 -204.00195 L 1104.375 -203.06641 L 1107.9395 -201.06641 L 1108.6875 -198.06641 L 1107.502 -194.75 L 1104.627 -191.93945 L 1100.8145 -189.93945 L 1094.75 -188.87695 L 1087.127 -188.62695 L 1079.4375 -188.93945 L 1073.002 -189.68945 L 1069.3145 -191.50195 L 1068.1895 -193.18945 L 1068.002 -195.31445 L 1068.502 -198.4375 L 1070.502 -201.00195 L 1074.0625 -202.87695 L 1080.127 -204.00195 z M 1141.375 -204.00195 L 1160.8145 -204.00195 L 1165.625 -203.06641 L 1169.1895 -201.06641 L 1169.9375 -198.06641 L 1168.75 -194.75 L 1165.877 -191.93945 L 1162.0625 -189.93945 L 1156 -188.87695 L 1148.375 -188.62695 L 1140.6875 -188.93945 L 1134.252 -189.68945 L 1130.5645 -191.50195 L 1129.4375 -193.18945 L 1129.252 -195.31445 L 1129.75 -198.4375 L 1131.75 -201.00195 L 1135.3125 -202.87695 L 1141.375 -204.00195 z M 834.625 -202.75 L 854.0625 -202.75 L 858.87305 -201.81445 L 862.4375 -199.81445 L 863.18555 -196.81445 L 862 -193.49805 L 859.125 -190.6875 L 855.3125 -188.6875 L 849.25 -187.625 L 841.625 -187.375 L 833.9375 -187.6875 L 827.50195 -188.4375 L 823.81445 -190.25 L 822.6875 -191.9375 L 822.50195 -194.0625 L 823 -197.18555 L 825 -199.75 L 828.5625 -201.625 L 834.625 -202.75 z M 895.125 -202.75 L 914.56445 -202.75 L 919.375 -201.81445 L 922.93945 -199.81445 L 923.6875 -196.81445 L 922.50195 -193.49805 L 919.62695 -190.6875 L 915.81445 -188.6875 L 909.75 -187.625 L 902.125 -187.375 L 894.4375 -187.6875 L 888.00195 -188.4375 L 884.31445 -190.25 L 883.18945 -191.9375 L 883.00195 -194.0625 L 883.50195 -197.18555 L 885.50195 -199.75 L 889.0625 -201.625 L 895.125 -202.75 z M 1328.502 -160.25 L 1333.25 -158.75 L 1335.25 -155.75 L 1333 -151.49805 L 1326.25 -149.49805 L 1291 -149.49805 L 1288.75 -156.49805 L 1309 -159.25 L 1328.502 -160.25 z M 1080.127 -119.625 L 1099.5645 -119.625 L 1104.375 -118.6875 L 1107.9395 -116.6875 L 1108.6875 -113.6875 L 1107.502 -110.37305 L 1104.627 -107.5625 L 1100.8145 -105.5625 L 1094.75 -104.49805 L 1087.127 -104.25 L 1079.4375 -104.5625 L 1073.002 -105.3125 L 1069.3145 -107.12305 L 1068.1895 -108.81055 L 1068.002 -110.9375 L 1068.502 -114.06055 L 1070.502 -116.625 L 1074.0625 -118.49805 L 1080.127 -119.625 z M 1141.375 -119.625 L 1160.8145 -119.625 L 1165.625 -118.6875 L 1169.1895 -116.6875 L 1169.9375 -113.6875 L 1168.75 -110.37305 L 1165.877 -107.5625 L 1162.0625 -105.5625 L 1156 -104.49805 L 1148.375 -104.25 L 1140.6875 -104.5625 L 1134.252 -105.3125 L 1130.5645 -107.12305 L 1129.4375 -108.81055 L 1129.252 -110.9375 L 1129.75 -114.06055 L 1131.75 -116.625 L 1135.3125 -118.49805 L 1141.375 -119.625 z M 1030.375 -118.97656 L 1039.375 -118.72461 L 1045.252 -116.60156 L 1047.375 -112.35156 L 1047.127 -108.84961 L 1043.75 -105.97656 L 1041.252 -105.97656 L 1041.252 -108.35156 L 1032.877 -110.09961 L 1028.877 -110.09961 L 1022 -108.35156 L 1021.0742 -104.89844 L 1007.75 -105.22656 L 1006.252 -108.72461 L 1007.625 -112.09961 L 1010.877 -115.22656 L 1016.502 -117.72461 L 1021.127 -118.60156 L 1030.375 -118.97656 z M 968.625 -118.75 L 977.625 -118.49805 L 983.50195 -116.375 L 985.625 -112.12695 L 985.375 -108.625 L 982 -105.75 L 979.50195 -105.75 L 979.50195 -108.12695 L 971.12695 -109.87305 L 967.12695 -109.87305 L 960.25 -108.12695 L 959.32227 -104.67188 L 946 -105 L 944.50195 -108.49805 L 945.87305 -111.87305 L 949.12695 -115 L 954.75 -117.49805 L 959.375 -118.375 L 968.625 -118.75 z M 834.625 -116.50391 L 854.0625 -116.50391 L 858.87305 -115.56641" +
                        " L 862.4375 -113.56641 L 863.18555 -110.56641 L 862 -107.25195 L 859.125 -104.44141 L 855.3125 -102.44141 L 849.25 -101.37891 L 841.625 -101.12891 L 833.9375 -101.44141 L 827.50195 -102.19141 L 823.81445 -104.00195 L 822.6875 -105.68945 L 822.50195 -107.81641 L 823 -110.93945 L 825 -113.50391 L 828.5625 -115.37891 L 834.625 -116.50391 z M 895.125 -116.50391 L 914.56445 -116.50391 L 919.375 -115.56641 L 922.93945 -113.56641 L 923.6875 -110.56641 L 922.50195 -107.25195 L 919.62695 -104.44141 L 915.81445 -102.44141 L 909.75 -101.37891 L 902.125 -101.12891 L 894.4375 -101.44141 L 888.00195 -102.19141 L 884.31445 -104.00195 L 883.18945 -105.68945 L 883.00195 -107.81641 L 883.50195 -110.93945 L 885.50195 -113.50391 L 889.0625 -115.37891 L 895.125 -116.50391 z M -72.873047 -104.25 L -72 -94.375 L -76 -89.126953 L -88 -88.75 L -86.498047 -91 L -72.873047 -104.25 z M -386.875 -81.126953 L -268 -81.126953 L -271.875 -77.75 L -332 -49.75 L -339.49805 -45.75 L -344.375 -42.126953 L -344.375 -36.375 L -346.75 -32.873047 L -350.12695 -30.375 L -351.12695 -27 L -350.625 -23.625 L -347.875 -21.25 L -344 -22.126953 L -339.375 -24.873047 L -276.25 -42.498047 L -242.75 -52 L -218.12695 -57.375 L -177.375 -71.498047 L -172.25 -71.498047 L -172.25 -28.75 L -172.75 -23.375 L -176.12695 -17.75 L -182.375 -12.75 L -193.49805 -6.8730469 L -249.75 13 L -308.75 11.375 L -343.375 10.75 L -399.12695 10.75 L -418.375 12 L -435.375 12 L -439.75 10.25 L -444.12695 3.75 L -446.49805 -4.4980469 L -446.875 -16.126953 L -446.12695 -33 L -444.625 -43.375 L -444.49805 -49.25 L -444.375 -57.25 L -442.25 -61 L -439 -62 L -435.25 -61.25 L -431.25 -59 L -424.875 -55.375 L -417.875 -54.375 L -408 -55.375 L -399.25 -60.375 L -390.25 -69.126953 L -387.25 -78 L -386.875 -81.126953 z M -114.25 -80.126953 L -71.126953 -80.126953 L -65.75 -78.498047 L -62.625 -75.25 L -59.873047 -69.625 L -59 -65 L -59 -49.873047 L -59.873047 -46.375 L -63.25 -42.25 L -67.873047 -39.75 L -108.375 -24.873047 L -113.87305 -23.25 L -119.75 -23.25 L -122.625 -24.498047 L -125.75 -27.375 L -126.625 -31.126953 L -125.75 -35.625 L -125.75 -68.75 L -123.87305 -74.25 L -120.12695 -77.873047 L -114.25 -80.126953 z M -23.869141 -75.25 C -19.922219 -75.25 -16.1366 -73.681519 -13.345703 -70.890625 C -10.554808 -68.099724 -8.9863281 -64.314111 -8.9863281 -60.367188 C -8.9863281 -52.148148 -15.650101 -45.486328 -23.869141 -45.486328 C -32.088181 -45.486328 -38.75 -52.148148 -38.75 -60.367188 C -38.75 -68.586228 -32.088181 -75.25 -23.869141 -75.25 z M -148.58789 -51.302734 L -144.37305 -44 L -144.37305 -34.246094 L -148.81055 -29.810547 L -153.375 -34.375 L -153.375 -45.75 L -148.58789 -51.302734 z M 321.50195 -3.3535156 L 316.25 4.6464844 L 311.75 14.394531 L 310.25 23.894531 L 310.25 34.646484 L 311.75 44.394531 L 317.50195 59.144531 L 324.50195 70.144531 L 330.75 76.894531 L 335.25 77.646484 L 336 74.646484 L 332 68.646484 L 327.75 59.894531 L 324 50.144531 L 324 38.394531 L 326.25 27.394531 L 331 15.394531 L 342.50195 2.8945312 L 349 -2.3535156 L 393 -2.3535156 L 402.50195 -0.85546875 L 413.25 3.3945312 L 420.25 8.6464844 L 427.50195 16.646484 L 433 29.394531 L 434 40.894531 L 432.50195 48.394531 L 426.75 59.646484 L 419 71.144531 L 402.75 80.144531 L 383.50195 84.144531 L 351.50195 90.394531 L 339.50195 92.394531 L 329 91.646484 L 317 86.646484 L 305 79.646484 L 290.25 71.646484 L 283.75 62.646484 L 280.25 50.646484 L 279.25 40.144531 L 279.50195 30.394531 L 283 20.894531 L 289.75 11.894531 L 301.50195 2.1445312 L 315.50195 -2.6054688 L 321.50195 -3.3535156 z M -367.375 20 L -262.75 21.25 L -257.875 22.375 L -255 25.625 L -254.25 28.873047 L -255.25 33.126953 L -258.49805 35.25 L -270.12695 35.75 L -353.375 33.501953 L -370.12695 33.375 L -373 30.126953 L -372.875 26.25 L -371.12695 22.501953 L -367.375 20 z "
                    );
                    radiusDiv = 175;
                    break;
                case 250: // Tommy Gun
                    path = new Path2D(
                        "M 962.625 -146.49805 L 959.08203 -144.45312 L 959.08203 -133.375 L 955.25 -131.12695 L 953 -127.49805 L 951.625 -123.25 L 951.625 -101.75 L 741.875 -100.87305 L 741.875 -102.75 L 736.375 -102.75 L 735.68164 -100.16797 L 728.875 -100.16797 L 728.875 -103 L 724.625 -103 L 724.625 -100.375 L 718.50195 -100.375 L 718.50195 -102.87305 L 713.12695 -102.87305 L 713.12695 -100.49805 L 706.25 -100.49805 L 706.25 -102.75 L 701.375 -102.75 L 701.375 -100.49805 L 694.375 -100.49805 L 694.375 -102.87305 L 690.25 -102.87305 L 690.25 -100.375 L 681.875 -100.375 L 681.875 -102.75 L 677.75 -102.75 L 677.75 -98 L 672.25 -98 L 672.25 -102.75 L 666.25 -102.75 L 666.25 -98.126953 L 660.375 -98.126953 L 660.375 -102.625 L 654 -102.625 L 654 -97.25 L 647.875 -97.25 L 647.875 -103.75 L 643.80859 -102.66211 L 643.80859 -97.498047 L 635.75 -97.498047 L 635.75 -105.25 L 631.12695 -105.25 L 631.12695 -98.375 L 625.25 -98.375 L 625.25 -105.49805 L 618.875 -105.49805 L 618.875 -97.25 L 613 -97.25 L 613 -105.49805 L 607.625 -105.49805 L 607.625 -97.498047 L 600.625 -97.498047 L 600.625 -105.12695 L 595.625 -105.12695 L 595.625 -97.873047 L 589.625 -97.873047 L 589.625 -105.375 L 584.625 -105.375 L 584.625 -97.498047 L 577.50195 -97.498047 L 577.50195 -105.625 L 572.625 -105.625 L 572.625 -97.498047 L 566.12695 -97.498047 L 566.12695 -106.12695 L 560.75 -106.12695 L 560.75 -97.126953 L 553.75 -97.126953 L 553.75 -107.25 L 549.75 -107.25 L 549.75 -97.498047 L 541.75 -97.498047 L 541.75 -107.87305 L 537.75 -107.87305 L 537.75 -97.75 L 530.625 -97.75 L 530.625 -107.75 L 525.75 -107.75 L 525.75 -97.25 L 519.375 -97.25 L 519.375 -107.625 L 514.375 -107.625 L 514.375 -97.126953 L 507.25 -97.126953 L 507.25 -107.375 L 502.75 -107.375 L 502.75 -97.498047 L 494.75 -97.498047 L 494.75 -107.625 L 490.75 -107.625 L 490.75 -98 L 482.875 -98 L 482.875 -107.625 L 478.625 -107.625 L 478.625 -98 L 472.50195 -98 L 472.50195 -107.625 L 466.25 -107.625 L 466.25 -96.25 L 460.75 -96.25 L 460.75 -107.375 L 454.625 -107.375 L 454.625 -96.375 L 449.12695 -96.375 L 449.12695 -107.25 L 444.375 -107.25 L 444.375 -96.625 L 437.12695 -96.625 L 437.12695 -107 L 432.25 -107 L 432.25 -95.873047 L 425.12695 -95.873047 L 425.12695 -106.625 L 419.375 -106.625 L 419.375 -97 L 413.12695 -97 L 413.12695 -105.87305 L 403 -105.87305 L 403 -108.25 L 337.50195 -108.25 L 337.50195 -105.49805 L 207.12695 -105.49805 L 207.12695 -110.375 L 199.375 -110.375 L 199.12695 -115 L 201.375 -119.12695 L 204.375 -122 L 204.375 -136.75 L 199.06641 -142.06055 L 191.12695 -142.06055 L 191.12695 -144.625 L 181.25 -144.625 L 181.25 -142.12695 L 172.87305 -142.12695 L 167.375 -136.87305 L 167.375 -122.25 L 170.375 -118.87305 L 172.12695 -114.625 L 172.625 -110.49805 L 166.34375 -108.81641 L 166.34375 -104.25 L -159.375 -104.25 L -161.75 -116 L -165.87305 -131.625 L -169.75 -138.25 L -173.25 -141.375 L -176.87305 -143.12695 L -193.87305 -143.12695 L -193.87305 -146.25 L -313.375 -146.25 L -321.12695 -143.75 L -326 -139.12695 L -330.375 -131.49805 L -332.12695 -122.75 L -334.625 -112.75 L -336.12695 -103.12695 L -347.75 -103.12695 L -351.875 -99.498047 L -351.875 -78.498047 L -355.75 -76.375 L -358.49805 -73.25 L -360.12695 -67.498047" +
                        " L -359.25 -62 L -356.75 -58.75 L -353.625 -55.625 L -350.49805 -54 L -350.49805 -24.25 L -347 -20 L -340.375 -20 L -340.375 -14.126953 L -334.875 -14.126953 L -334.875 -10.873047 L -361.12695 -8 L -361.12695 -12 L -382.49805 -12 L -382.49805 -4 L -390.75 -3.4980469 L -397.875 -1.8730469 L -406.375 1.375 L -412.75 4.5019531 L -420 8.5019531 L -428 9 L -434.25 6.5019531 L -439.12695 1.8730469 L -442.625 -3.1269531 L -445.625 -6.75 L -450.12695 -9.625 L -453 -10 L -458.625 -8.8730469 L -470.25 -5.375 L -533.375 11.625 L -613.375 31 L -695.625 52.873047 L -788.12695 80.375 L -808.25 84.501953 L -817 87.126953 L -823.75 91.375 L -828.75 96.75 L -832.875 102.625 L -836.12695 109.87305 L -837 116.625 L -835.25 124.375 L -832.75 131.75 L -831.75 141.75 L -830.12695 157.50195 L -827.12695 180.50195 L -827.25 197.87305 L -827.25 287.25 L -826.12695 308.25 L -824.875 316.50195 L -821.75 324.12695 L -817.25 332.12695 L -812 337.25 L -803.75 342.625 L -794.25 344.625 L -784.25 343.875 L -767.49805 339.25 L -741.625 329.75 L -712.75 317.50195 L -677.625 300.50195 L -642.75 282.625 L -616 265.625 L -586 245.25 L -559.875 226.625 L -526 201.25 L -503.625 186.25 L -470.75 165 L -442.625 149.12695 L -415.12695 134.50195 L -387.49805 122.625 L -340.625 105.87305 L -306.75 95.873047 L -246.625 81.25 L -211 75 L -198 71.375 L -185.25 62.625 L -162.12695 44.873047 L -150.49805 30.625 L -142.25 17 L -140.49805 1.5019531 L -91.25 1.5019531 L -80 4.8730469 L -69 10.873047 L -60.498047 19 L -54.75 27.126953 L -51.625 35 L -50.75 39.873047 L -51 45.625 L -52.375 54.126953 L -55.126953 65.375 L -57.625 71.75 L -63 80.501953 L -67.875 87.25 L -74.25 95.625 L -85.375 111.375 L -90.75 121.375 L -98.25 129.87305 L -107.75 141.25 L -114 152.87305 L -118.12695 160.375 L -119.875 168.75 L -119.875 176.50195 L -119.25 189.50195 L -116.875 199.625 L -114.12695 208 L -110.875 215.75 L -106.25 224.375 L -99.126953 233.375 L -91.126953 242.12695 L -80 250.75 L -67.25 257.375 L -52.75 262.75 L -40.375 266.75 L -30.126953 267.87305 L -19.875 267.25 L -13.875 264.75 L -11.375 259.75 L -13.498047 252.375 L -17.875 246.375 L -19.75 237.375 L -18.126953 229.25 L -13.625 221.375 L -6.25 214.375 L 4.375 208.50195 L 13.375 206.87305 L 18.75 205 L 19.25 201 L 16.873047 197.375 L 11.25 192.375 L 9 187.625 L 9.125 180.75 L 11.501953 173.75 L 17.75 164.375 L 25.375 153.75 L 34 143.12695 L 44.75 127.25 L 51.75 117.75 L 60.375 110.375 L 67.75 106.625 L 76 104.625 L 193 104.625 L 193 196.75 L 195.50195 221.12695 L 197.25 251.87305 L 200.12695 282.25 L 202.87305 299.375 L 207.25 311.625 L 211.50195 316.625 L 216.87305 319.25 L 230.25 319.625 L 262 319.625 L 262 322.625 L 289.12695 322.625 L 294.12695 321.375 L 296.875 316.375 L 299 309.50195 L 301 301 L 302.12695 278.375 L 302.875 261.25 L 304.875 236.12695 L 305.625 221.87305 L 305.25 196.87305 L 305.25 181.50195 L 308.12695 181.50195 L 308.12695 172.50195 L 313.625 166.12695 L 318.375 157.50195 L 318.875 151.375 L 318.875 146.375 L 335.375 146.375 L 335.375 139.375 L 332.875 137.25 L 329.625 133.75 L 325.625 132.87305 L 323 132.87305 L 323 116.75 L 320.375 110.75 L 317.375 105.12695 L 311.375 97.625 L 311.375 84 L 305.62695 78.251953 L 305.62695 2.8730469 L 302.12695 2.8730469 L 302.12695 -23.498047 L 407.875 -23.498047 L 411.875 8.1269531" +
                        " L 415 30.75 L 416.25 34.126953 L 419.75 35.75 L 423.12695 34.873047 L 430.50195 31.25 L 452 18 L 471.12695 9.25 L 493.12695 1.375 L 510.375 -4.25 L 525.75 -8.1269531 L 537.375 -9.4980469 L 547.50195 -8.1269531 L 557.375 -4.625 L 564.50195 1.1269531 L 569.375 8 L 572.12695 18 L 571.50195 27.375 L 567.12695 37.375 L 560.25 46.873047 L 549.625 58.625 L 538.50195 70.126953 L 523.875 83 L 513.50195 94.625 L 505 104.25 L 499 113.75 L 494.25 125 L 491.375 134 L 489.50195 145.625 L 489.375 152.87305 L 490.875 163.375 L 493.625 175.25 L 498.25 186.87305 L 504.375 198.12695 L 514.50195 213.25 L 524.25 223.75 L 532.75 230 L 542.50195 232.87305 L 550.75 236.25 L 558.12695 240.25 L 569 241.75 L 577.875 242.12695 L 592.50195 240.87305 L 597.25 238 L 600.50195 234.12695 L 600.875 229.50195 L 598.25 225.12695 L 592.50195 220.87305 L 589.375 215.12695 L 587.375 209.25 L 586 202.25 L 587.12695 195.375 L 590.25 187.75 L 595.875 181.625 L 602.25 177.625 L 612 175.375 L 620.875 175.625 L 624.75 173.625 L 627 171.12695 L 627.12695 166.25 L 625.12695 163.25 L 623 158.87305 L 622.12695 152.25 L 623.50195 144.75 L 627.25 138.12695 L 634.75 131.75 L 642 127.87305 L 649 126.625 L 657.375 126.25 L 661.12695 123.50195 L 663.50195 119.625 L 662.12695 116.375 L 660 114.50195 L 657.875 107.75 L 657.50195 102.50195 L 659.625 96.126953 L 662.75 90.126953 L 668.625 84 L 676 80.375 L 686.625 77.75 L 698.75 77.501953 L 706.625 76 L 712.375 70.873047 L 712.25 66.625 L 709.50195 60.75 L 704.625 56.25 L 703.375 49.126953 L 704 40.75 L 706.75 31.501953 L 712.50195 20.501953 L 719.875 6.25 L 728.875 -4.75 L 738.875 -18.25 L 745.25 -29.625 L 747.25 -36 L 747.25 -40.873047 L 670.50195 -40.873047 L 664.875 -44.498047 L 661.50195 -49.625 L 659.75 -54.126953 L 659.75 -62.873047 L 666.625 -62.873047 L 666.625 -57.625 L 671.375 -57.625 L 671.375 -62.625 L 678.12695 -62.625 L 678.12695 -57.625 L 682.625 -57.625 L 682.625 -62.625 L 690.25 -62.625 L 690.25 -57.375 L 694.75 -57.375 L 694.75 -62.375 L 702.375 -62.375 L 703.67969 -57.503906 L 707 -57.503906 L 707 -62.498047 L 713.375 -62.498047 L 713.375 -59.375 L 719.12695 -59.375 L 719.12695 -62.873047 L 725.25 -62.873047 L 726.1582 -59.486328 L 730.875 -59.486328 L 730.875 -62.625 L 736.75 -62.625 L 736.75 -59.375 L 741.12695 -59.375 L 741.12695 -62.498047 L 951.50195 -64.625 L 951.50195 -58.873047 L 952.25 -54 L 954.12695 -49.75 L 957.375 -47.75 L 962.625 -47 L 975.12695 -47 L 988.375 -47.873047 L 993.625 -49.375 L 995.875 -52.498047 L 996.75 -55.25 L 997.375 -58.25 L 1089 -58.25 L 1094.375 -61.625 L 1097.625 -67.625 L 1099 -75.498047 L 1098.375 -87 L 1097.875 -93.75 L 1096.75 -99.25 L 1095.127 -103.625 L 1092.127 -108.49805 L 1087.75 -112.375 L 1081.127 -113.12695 L 1050.875 -113.12695 L 1047.875 -110.25 L 1047.875 -101.49805 L 1044.25 -101.49805 L 1044.25 -112.75 L 1035.625 -112.75 L 1035.625 -101.87305 L 1032.127 -101.87305 L 1032.127 -110.49805 L 1029.625 -112.625 L 1024.625 -112.625 L 1024.625 -105.75 L 1021.2266 -106.66211 L 1021.2266 -112.375 L 1011.75 -112.375 L 1011.75 -106.87305 L 1008.8164 -106.08594 L 1008.8164 -112.375 L 994.875 -112.375 L 993.12695 -116.25 L 991.12695 -117.625 L 988.625 -116.87305 L 988.625 -113.75 L 986 -113.75 L 986 -129.625 L 984.50195 -134.12695 L 981.25 -139.49805 L 977 -143.49805 L 972.12695 -146.49805" +
                        " L 962.625 -146.49805 z M 656 -63.126953 L 656 -58 L 651.75 -58 L 651.75 -53.873047 L 651 -49.873047 L 649.25 -47.498047 L 645.625 -44.498047 L 642 -42.873047 L 637.87305 -41.625 L 630.50195 -41 L 623.12695 -41 L 623.12695 -48.25 L 612.87305 -48.25 L 608.58984 -40.830078 L 410 -38.126953 L 403.625 -43.375 L 403.625 -49.25 L 412.125 -49.25 L 412.125 -57.625 L 420.87305 -57.625 L 420.87305 -49.75 L 425 -49.75 L 425 -57 L 432.375 -57 L 432.375 -50.126953 L 435.625 -50.126953 L 435.625 -59.498047 L 443.75 -59.498047 L 443.75 -50.126953 L 447.75 -50.126953 L 447.75 -59.375 L 457.25 -59.375 L 457.25 -50.25 L 460.625 -50.25 L 460.625 -59.498047 L 467.625 -59.498047 L 467.625 -50.126953 L 471.25 -51.097656 L 471.25 -59.498047 L 479 -59.498047 L 479 -50.375 L 482.50195 -50.375 L 482.50195 -59.375 L 491.625 -59.375 L 491.625 -49.75 L 494.75 -49.75 L 494.75 -59.126953 L 503.625 -59.126953 L 503.625 -49.873047 L 507.25 -49.873047 L 507.25 -59.498047 L 515.125 -59.498047 L 515.125 -49.625 L 519.25 -49.625 L 519.25 -59.625 L 526 -59.625 L 526 -49.873047 L 530.625 -49.873047 L 530.625 -59.25 L 538.25 -59.25 L 538.25 -50.375 L 541.87305 -50.375 L 541.87305 -59.625 L 550.25 -59.625 L 550.25 -49.873047 L 554.375 -49.873047 L 554.375 -60 L 562 -60 L 562 -50 L 566.375 -50 L 566.375 -59.873047 L 573 -59.873047 L 573 -52 L 578.625 -52 L 578.625 -62.375 L 584.50195 -62.375 L 584.50195 -52 L 589.50195 -52 L 589.50195 -62.25 L 596.50195 -62.25 L 596.50195 -51.873047 L 601.125 -51.873047 L 601.125 -61.873047 L 608.125 -61.873047 L 608.125 -53.873047 L 613.75 -53.873047 L 613.75 -61.75 L 619.125 -61.75 L 619.125 -55.126953 L 625.25 -55.126953 L 625.25 -61.498047 L 631.75 -61.498047 L 631.75 -54.873047 L 636.125 -54.873047 L 636.125 -61.75 L 643.25 -61.75 L 643.25 -54.375 L 648.25 -54.375 L 648.25 -62.25 L 656 -63.126953 z M 146.625 30 L 158.12695 30.9375 L 165.12695 33.375 L 172.12695 38.9375 L 177.9375 45.75 L 181.4375 52.814453 L 182.4375 59 L 181.81445 62.4375 L 177.4375 62.375 L 174.81445 63.625 L 172.87305 66.3125 L 169.6875 72.185547 L 168.3125 76.814453 L 168.4375 81.185547 L 170.18555 83.375 L 172.375 83.75 L 175.5625 81.126953 L 178.25 81.126953 L 175.81445 85.75 L 170.25 90.75 L 163.18555 96.0625 L 154 99.25 L 146.87305 99.75 L 115.375 99.75 L 106.81445 98.5625 L 97.0625 94.3125 L 89.375 87.375 L 83.6875 78.185547 L 82 71.25 L 81.625 64.4375 L 81.814453 54.75 L 83.814453 48.4375 L 87.3125 44 L 90.185547 43.0625 L 95 44 L 100.25 47.625 L 102.50195 51.185547 L 103.4375 56.814453 L 103.18555 63.814453 L 103.625 70.126953 L 105.4375 74.4375 L 109.5625 79.6875 L 113.5625 85.3125 L 119 90.625 L 123.6875 93.873047 L 125.50195 95.625 L 128.50195 95.0625 L 128.75 93.25 L 128.12695 90.873047 L 125 88.625 L 120.0625 84.9375 L 117.12695 80.814453 L 114.9375 76.375 L 113.9375 71.185547 L 113.5625 64.375 L 114.375 59.126953 L 116.25 52 L 118.5625 46.873047 L 122.0625 41.9375 L 126.0625 38.25 L 131.81445 33.9375 L 136.87305 30.873047 L 146.625 30 z "
                    );
                    radiusDiv = 165;
                    break;
                case 251: // Grenade Launcher
                    path = new Path2D(
                        "M 430.18555 -104.0625 L 430.18555 -91.185547 L 397.5625 -91.185547 L 395.4375 -90 L 379.5625 -90 L 379.5625 -99.9375 L 377.75 -99.9375 L 375.5625 -102.81445 L 223.3125 -102.81445 L 219.5625 -99.6875 L 219.5625 -90.814453 L 148.75 -90.814453 L 148.75 -92.498047 L 142.5625 -92.498047 L 142.5625 -79.9375 L 137.5625 -79.9375 L 137.5625 -69.75 L 142.81445 -69.75 L 142.81445 -44.5625 L 99.625 -42.6875 L 69.375 -41.4375 L 61.0625 -41.4375 L 55.5625 -35.9375 L 45.9375 -35.9375 L 45.9375 -31.814453 L 43.78125 -29.65625 L 4.6875 -28.5625 L 4.6875 -35.625 L -4.5625 -35.625 L -33.126953 -33.25 L -65.5625 -31.0625 L -91.498047 -29.873047 L -116.75 -28.498047 L -140.87305 -27.3125 L -205.87305 -24.126953 L -207.12695 -26.3125 L -209.49805 -26 L -214.75 -25 L -223.625 -22.5625 L -229.49805 -20.25 L -232.9375 -18.185547 L -234.9375 -16.5625 L -237.12695 -16.5625 L -235.49805 -8.25 L -233.49805 .0625 L -230.75 9.75 L -227.3125 24.375 L -223 39.873047 L -220.375 54.814453 L -218.375 60.873047 L -216.87305 69.185547 L -214.375 85.6875 L -212.81445 102.9375 L -212.0625 123.18555 L -211.5625 134.3125 L -210.625 137.81445 L -209.12695 142.0625 L -207.49805 145.81445 L -205.25 147.625 L -202.75 149 L -199.4375 149.3125 L -195.25 148.87305 L -191.25 148.18555 L -184 147.18555 L -177.9375 145.81445 L -176.25 144.81445 L -176.25 143.12695 L -163.4375 143.12695 L -155.375 138.25 L -153.6875 135.25 L -152.5625 130.50195 L -152.49805 125.6875 L -151.5625 123.3125 L -148.81445 120.5625 L -127.48047 108.24414 L -13.75 19.75 L 8.5019531 19.75 L 7.25 4 L 46.185547 2.75 L 46.185547 8.5019531 L 61 7.4375 L 61 10.375 L 86 9.5625 L 86 6.25 L 89.375 6.25 L 89.375 18.9375 L 86.0625 21.501953 L 72.814453 25 L 70.25 27.625 L 70.25 55.126953 L 74.4375 55.126953 L 74.4375 56.873047 L 71.9375 56.873047 L 71.9375 63.25 L 64.185547 74.4375 L 56.501953 85.873047 L 45.5625 102.375 L 38.3125 113.12695 L 34.3125 119.18555 L 30.625 123.81445 L 21.375 138.625 L 12.4375 152.375 L 8.1269531 158.375 L 6.9375 161.0625 L 7 162.87305 L 8.25 164.87305 L 12.625 167.4375 L 22.4375 170.50195 L 39.814453 174.75 L 55.185547 178.625 L 67.9375 181.6875 L 72.185547 181.9375 L 73.6875 180.87305 L 73.75 178.5625 L 73.75 173.12695 L 87 147.25 L 96.501953 132.50195 L 100.81445 127.12695 L 105.25 121.87305 L 106 119.0625 L 106.81445 113.5625 L 108 109.3125 L 110.3125 106.12695 L 114.12695 102.9375 L 114.12695 98.873047 L 165.87305 98.873047 L 190.4375 117.12695 L 192.9375 106.9375 L 192.9375 142.4375 L 194.12695 146 L 196.50195 149.12695 L 199.75 151.5625 L 202.0625 152.50195 L 205.87305 153.18555 L 212.50195 153.87305 L 225.25 155.25 L 249.87305 157.5625 L 266.09766 161.9082 L 328.4375 161.9082 L 328.4375 160.0625 L 336.4375 159.6875 L 336.4375 163.6875 L 419 163.6875 L 426.0625 158.18555 L 426.0625 154.375 L 428.18555 150.375 L 429.9375 144.81445 L 430.81445 140.50195 L 431.25 132.87305 L 431.3125 124 L 433.0625 62.501953 L 435.5625 62.501953 L 435.5625 56.814453 L 459.18555 56.814453 L 459.18555 36.625 L 463.625 31.9375 L 476.0625 32.0625 L 480.50195 36.501953 L 480.50195 52.501953 L 482.75 52.501953 L 482.75 35.814453 L 477 30.6875 L 477.53516 28.693359 L 488.25 28.693359 L 488.25 41.126953 L 492.6875 45.501953 L 693.375 45.501953 L 697.125 42.3125 L 697.125 25.625 L 710.87305 25.625 L 710.87305 -45.3125 L 687.18555 -45.3125 L 687.18555 -41.4375 L 675.50195 -41.4375 L 668.18555 -51.25 L 668.18555 -62 L 666.18555 -62 L 664 -64.6875 L 451.5625 -64.6875 L 447.75 -61.625 L 447.75 -48 L 443.18555 -48 L 443.18555 -82.25 L 441.75 -91.498047 L 435.9375 -91.498047 L 435.9375 -104.0625 L 430.18555 -104.0625 z M 395.625 -57.9375 L 395.625 -51.4375 L 375.12695 -51.4375 L 375.12695 -45.144531 L 218.81055 -45.144531 L 206.4375 -38 L 206.4375 34 L 203.6875 34 L 203.6875 -57.375 L 395.625 -57.9375 z M 148.25 -57.5625 L 197.75 -57.498047 L 197.75 -50.5625 L 195.375 -48.185547 L 148.25 -48.185547 L 148.25 -57.5625 z M -103.75 24.75 L -103.75 26.75 L -141.6875 46.0625 L -136.81445 51.375 L -87.5625 27.5625 L -83.814453 41.0625 L -103 56.873047 L -124 73.6875 L -140.87305 87.5625 L -151.4375 96.9375 L -156.6875 101.3125 L -166.5625 99 L -169.5625 81 L -171.87305 68 L -174.4375 53.625 L -176.49805 42.4375 L -176.87305 36.25 L -170.375 28 L -103.75 24.75 z M 435.625 28.9375 L 463.4375 29 L 463.4375 30.34375 L 461.59375 30.34375 L 456.6875 35.25 L 456.6875 39.5625 L 435.625 39.5625 L 435.625 28.9375 z M 130.87305 55.126953 L 140.18555 55.126953 L 140.12695 58.501953 L 140.9375 61.126953 L 141.87305 63.185547 L 142.25 65.9375 L 142.3125 69.9375 L 142.625 73.0625 L 144.12695 76.501953 L 146.18555 78.9375 L 148.6875 82.375 L 150.6875 85.0625 L 153.12695 86.6875 L 156.6875 87.9375 L 158.9375 89.185547 L 160.75 89.501953 L 162.625 88.6875 L 163.0625 87.501953 L 161.375 85.9375 L 157.81445 83.814453 L 153.81445 80.6875 L 151.625 77.0625 L 149.75 74.5625 L 149 71.75 L 148.6875 66.9375 L 148.81445 63.4375 L 149.6875 60.25 L 151.12695 57.4375 L 153.0625 55.5625 L 179.75 55.5625 L 179.75 78 L 185.25 82.5625 L 190.5625 82.5625 L 190.5625 79.3125 L 193.6875 79.3125 L 193.6875 93.6875 L 150.4375 93.6875 L 138 93.6875 L 133.12695 92.25 L 128.5625 89 L 126 85.375 L 124.25 81.126953 L 123.50195 75.375 L 123.5625 69.3125 L 124.18555 64.0625 L 126.12695 58.873047 L 128.18555 56.4375 L 130.87305 55.126953 z M 203.9375 55.814453 L 206.3125 55.814453 L 206.3125 130.18555 L 218.625 137.87305 L 375.3125 137.87305 L 375.3125 142.625 L 395.6875 142.625 L 395.6875 153.0625 L 331.50195 153.0625 L 331.50195 155.4375 L 420.625 155.4375 L 420.625 153 L 413.87305 153 L 413.87305 151.18555 L 424.375 140.50195 L 426.3125 140.50195 L 426.3125 142.50195 L 424.6875 143.5625 L 424 145.25 L 423.25 149.6875 L 423.0625 155.50195 L 415.87305 160.87305 L 354.75 160.87305 L 354.75 156.75 L 267.625 156.75 L 251.375 154.18555 L 230.12695 150.75 L 211.0625 149 L 204.18555 148.87305 L 199.3125 144.12695 L 198.87305 140.6875 L 203.3125 140.6875 L 203.9375 55.814453 z "
                    );
                    radiusDiv = 75;
                    break;
                case 252: // Guy
                    path = new Path2D(
                        "M -16079.5958 -519.4039999999986 C -16079.5958 -9307.358939307585 -8955.55073930759 -16431.404 -167.59580000000278 -16431.404000000002 4052.528986326819 -16431.404000000002 8099.808448375217 -14754.965956105472 11083.887302240346 -11770.887102240347 14067.96615610547 -8786.80824837522 15744.4042 -4739.528786326826 15744.4042 -519.4040000000005 15744.4042 8268.550939307584 8620.359139307588 15392.596000000001 -167.59579999999733 15392.596000000001 -8955.550739307582 15392.596000000001 -16079.595799999997 8268.550939307588 -16079.5958 -519.4039999999968 Z M 1513.0971 -7497.0647 L 28117.0971 -7497.0647 28117.0971 6458.9353 1513.0971 6458.9353 Z"
                    );
                    radiusDiv = 12800;
                    break;

                case 253: // Missile Launcher
                    path = new Path2D(
                        "M -230.31445 -46.876953 L -251.27539 -44.052734 L -241.40234 -13.146484 L -247.12305 -12.277344 L -249.22852 -6.3066406 L -250.27734 -0.671875 L -249.20898 5.4960938 L -245.93359 15.111328 L -243.23047 16.056641 L -253.25781 37.097656 L -231.20117 36.740234 L -227.23242 48.664062 L -220.99023 50.78125 L -199.83789 47.941406 L -200.43164 52.632812 L -199.48242 55.96875 L -196.01367 58.787109 L -190.44141 61.205078 L -181.79297 63.595703 L -184.89844 71.689453 L -181.9043 72.837891 L -178.48633 63.933594 L -172.39258 64.509766 L -176.49414 75.193359 L -174.22656 76.0625 L -168.66602 61.574219 L -169.61719 53.408203 L -159.20898 53.875 L -118.70508 60.279297 L -109.95117 63.638672 L -71.542969 71.013672 L -43.630859 75.03125 L -18.464844 75.050781 L -4.8867188 74.90625 L 10.337891 68.03125 L 27.875 58.960938 L 37.685547 50.140625 L 42.193359 52.005859 L 72.388672 36.816406 L 77.220703 38.535156 L 74.683594 44.792969 L 50.230469 58.972656 L 44.572266 56.267578 L 25.378906 67.910156 L 34.826172 89.34375 L 47.511719 83.5 L 58.78125 79.255859 L 60.248047 74.734375 L 63.845703 73.033203 L 71.25 74.671875 L 105.08398 75.472656 L 137.54492 74.273438 L 204.96094 74.439453 L 224.96289 73.949219 L 233.16602 74.552734 L 249.05859 72.21875 L 276.08789 67.728516 L 274.56445 71.699219 L 279.46484 73.580078 L 283.94531 61.908203 L 359.06836 48.966797 L 403.94336 48.380859 L 402.19727 52.931641 L 408.38281 55.306641 L 411.0918 48.246094 L 431.58984 48.212891 L 436.37695 50.050781 L 439.55664 41.765625 L 442.17969 42.771484 L 444.57617 36.529297 L 439.26562 34.490234 L 441.50586 28.65625 L 437.59766 27.15625 L 361.4043 26.835938 L 248.74023 28.046875 L 224.86719 27.453125 L 199.4707 27.345703 L 165.80664 28.888672 L 165.45508 24.867188 L 187.44141 24.203125 L 213.92188 22.478516 L 251.75391 17.308594 L 296.60547 8.6132812 L 340.97266 -3.4296875 L 354.75977 -9.0976562 L 340.06445 -14.365234 L 287.81641 -24.386719 L 234.94727 -32.791016 L 179.89062 -36.458984 L 143.38672 -35.240234 L 103.5 -31.972656 L 60.712891 -26.478516 L 57.771484 -23.890625 L 49.011719 -23.816406 L 45.412109 -26.777344 L 26.986328 -27.162109 L -55.15625 -24.138672 L -114.19336 -22.277344 L -151.52539 -20.353516 L -153.61133 -22.173828 L -159.91211 -22.455078 L -169.98242 -21.865234 L -230.31445 -46.876953 z M 42.201172 18.8125 L 43.472656 26.664062 L -165.125 28.414062 L -165.99219 24.736328 L 42.201172 18.8125 z M 55.267578 20.361328 L 76.419922 20.712891 L 77.941406 26.519531 L 56.652344 26.515625 L 55.267578 20.361328 z M 86.373047 21.994141 L 154.92383 25.136719 L 86.681641 27.466797 L 86.373047 21.994141 z "
                    );
                    radiusDiv = 70;
                    break;
                case 254: // inf
                    path = new Path2D(
                        "m 0.14288931,-31.331168 c -2.18070981,-10e-4 -4.36658981,0.12533 -5.66993991,0.38034 -5.4652424,1.069318 -10.4057854,3.419898 -14.5215744,6.889498 4.60004,3.85204 8.060421,8.97661 9.840723,14.8890118 1.0092513,3.35174 1.2485413,5.1388595 1.2350713,9.22424942 -0.0136,4.11814008 -0.33165,6.23933008 -1.4366123,9.58855968 -1.879471,5.6968791 -5.286063,10.5588891 -9.651072,14.2197991 0.463597,0.40135 0.921694,0.7748 1.365281,1.10536 4.73505,3.52859 10.3754233,5.66632 16.2160635,6.1464 14.3801245,1.18199 27.7889045,-7.72487 32.3241145,-21.4715591 1.10496,-3.3492296 1.42301,-5.4709396 1.43661,-9.58907968 0.0135,-4.08538992 -0.22582,-5.87250942 -1.23507,-9.22423942 C 26.699564,-20.28799 17.415314,-28.61821 5.7818184,-30.944628 c -1.2826394,-0.2565 -3.4582091,-0.38529 -5.63892909,-0.38654 z"
                    );
                    radiusDiv = 32;
                    break;
                case 255: // Switcheroo (New)
                    angle += Math.PI;
                case 256: // Xyv Auto Gun
                    path = new Path2D(
                        "M -19169.9038 -18519.129 C -8794.682489678713 -28891.0366018223 8024.188598177694 -28888.350310321293 18396.0962 -18513.129000000008 24656.0962 -12251.129 30916.0962 -5989.129000000001 37176.0962 272.8709999999992 30914.0962 6532.870999999999 24652.0962 12792.871 18390.0962 19052.871 8014.874889678711 29424.778601822298 -8803.996198177698 29422.092310321284 -19175.903799999996 19046.871 -29547.8114018223 8671.649689678714 -29545.125110321285 -8147.221398177695 -19169.9038 -18519.128999999997 Z"
                    );
                    radiusDiv = 26500;
                    break;
                case 257: // Triple Shrapnel Projectile
                    path = new Path2D(
                        "M -225396 36390 L -225396 -45927 -166908 -45927 -166908 -95422 -216928 -99951 -216928 -106450 -169271 -109666 -143571 -109666 -143571 -101691 -100444 -101691 -73464 -80980 -16256 -101822 43217 -107730 51751 -107730 122350 -96899 167546 -79077 171780 -69919 175882 -69919 177950 -71495 212118 -40741 223047 1271 210247 42758 180412 66192 177162 63632 169088 63632 169088 72691 120545 101312 49519 108204 -25807 98555 -76812 78172 -100772 96979 -142423 96979 -142423 104856 -170387 104856 -215582 98949 -215582 91367 -167236 91367 -167236 36456 Z M 78783.11779999999 -213472.0702 L 150069.6398 -172313.5702 120825.63979999999 -121662.96219999998 163688.3098 -96915.46219999998 192620.4238 -137968.2822 198248.55779999998 -134718.7822 177205.1138 -91839.82019999999 164355.1138 -69583.62019999999 157448.7638 -73571.12019999999 135885.2638 -36223.13819999999 104459.53779999999 -23213.958199999994 93904.7098 36749.1698 69284.53779999999 91206.78780000002 65017.53779999999 98597.23180000001 20338.391799999983 154320.46580000003 -17693.4602 184549.2018 -27741.28820000001 183636.84579999998 -29792.28820000001 187189.17780000003 -29461.47220000002 189768.0658 -73178.4362 203980.55380000002 -115025.32819999999 192439.0678 -144553.07020000002 160610.7678 -149929.4142 123056.65780000002 -146087.45419999998 121522.15780000002 -142050.45419999998 114530.07379999998 -149895.54820000002 110000.57379999998 -150409.83419999998 53651.83580000003 -120865.30620000005 -11302.680200000003 -74846.2722 -71710.4962 -31692.094199999992 -105689.32619999998 -35998.956200000015 -135842.1862 -15173.456200000015 -171911.9522 -21994.938200000004 -175850.4522 -8012.938200000004 -200067.2762 19700.023799999995 -236252.6462 26266.035799999983 -232461.6462 2093.0357999999833 -190594.0102 49645.96179999999 -163138.5102 Z M 143075.1086 174884.3183 L 71788.58660000001 216042.8183 42544.5866 165392.2103 -318.08339999999953 190139.7103 20769.802600000003 235721.5303 15141.6686 238971.0303 -11471.8874 199308.0683 -24321.8874 177051.86830000003 -17415.5374 173064.36830000003 -38979.0374 135716.3863 -34533.3114 101996.20630000002 -81186.4834 62875.07830000002 -116039.3114 14325.460300000006 -120306.3114 6935.0163000000175 -146226.1654 -59619.21770000001 -153390.3134 -107669.95369999998 -147576.4854 -115915.59769999995 -149627.4854 -119467.92970000001 -152026.3014 -120470.81769999999 -142477.33740000002 -165437.3057 -111559.4454 -195907.81969999996 -69231.7034 -205566.51969999998 -34020.35940000001 -191446.4097 -34612.3194 -187351.9097 -30575.3194 -180359.82569999996 -22730.22539999999 -184889.32569999996 26327.060600000004 -157161.5877 67808.5326 -99099.0717 97115.49859999999 -29042.25570000001 104966.32059999998 25319.574300000007 133233.1826 36665.43429999999 154058.6826 72735.2003 160880.1646 68796.7003 174862.1646 93013.52430000002 192344.2026 135105.8943 185778.1906 138896.8943 161605.1906 97029.25830000002 114052.2646 124484.75830000002 Z"
                    );
                    radiusDiv = 150000;
                case 260:
                    n += Math.PI;
                    break;
                case 258: // Mega Nuke Projectile
                    path = new Path2D(
                        "m -282.72618,98.940476 127.75594,27.970234 0.75595,61.9881 -127.75594,26.45833 c -50.78681,-12.30638 -108.50954,-65.66649 -0.75595,-116.416664 z"
                    );
                    //radiusDiv = 100000;
                    break;
                case 259: // Nada
                    path = ''
                    break;
            }
            radius /= radiusDiv;
            context.save();
            context.translate(centerX, centerY);
            context.scale(radius, radius);
            context.lineWidth /= radius;
            context.rotate(angle);
            try {
                context.stroke(path);
            }
            catch (e) {
                console.error('It appears the following shape is broken: ' + sides + '.');
            }
            if (fill) context.fill(path);
            context.restore();
        }

        context.closePath();
        context.stroke();
        if (fill) { context.fill(); }
        context.lineJoin = 'round';
    }
    function drawTrapezoid(context, x, y, length, height, aspect, angle) {
        let h = [];
        h = (aspect > 0) ?
            [height * aspect, height] :
            [height, -height * aspect];
        let r = [
            Math.atan2(h[0], length),
            Math.atan2(h[1], length)
        ];
        let l = [
            Math.sqrt(length * length + h[0] * h[0]),
            Math.sqrt(length * length + h[1] * h[1])
        ];

        context.beginPath();
        context.lineTo(x + l[0] * Math.cos(angle + r[0]), y + l[0] * Math.sin(angle + r[0]));
        context.lineTo(x + l[1] * Math.cos(angle + Math.PI - r[1]), y + l[1] * Math.sin(angle + Math.PI - r[1]));
        context.lineTo(x + l[1] * Math.cos(angle + Math.PI + r[1]), y + l[1] * Math.sin(angle + Math.PI + r[1]));
        context.lineTo(x + l[0] * Math.cos(angle - r[0]), y + l[0] * Math.sin(angle - r[0]));
        context.closePath();
        context.stroke();
        context.fill();
    }
    // The big drawing function
    return (x, y, instance, ratio, alpha = 1, scale = 1, rot = 0, turretsObeyRot = false, assignedContext = false, turretInfo = false, render = instance.render) => {
        let context = assignedContext || ctx
        let fade = turretInfo ? 1 : render.status.getFade(),
            drawSize = scale * ratio * instance.size,
            m = mockups[instance.index],
            xx = x, yy = y,
            source = (turretInfo === false) ? instance : turretInfo;
        if (fade === 0 || alpha === 0) return
        if (render.expandsWithDeath) drawSize *= (1 + 0.5 * (1 - fade));
        if (assignedContext !== ctx2 && (fade !== 1 || alpha !== 1)) {
            if (config.graphical.fancyAnimations) {
                context = ctx2;
                context.canvas.width = context.canvas.height = drawSize * m.position.axis + ratio * 20;
                xx = context.canvas.width / 2 - drawSize * m.position.axis * m.position.middle.x * Math.cos(rot) / 4;
                yy = context.canvas.height / 2 - drawSize * m.position.axis * m.position.middle.x * Math.sin(rot) / 4;
                assignedContext = false;
            } else {
                if (fade * alpha < 0.5) return
            }
        }
        if (typeof context !== 'object') context = ctx
        context.lineCap = 'round';
        context.lineJoin = 'round';
        // Draw turrets beneath us
        if (source.turrets.length === m.turrets.length) {
            for (let i = 0; i < m.turrets.length; i++) {
                let t = m.turrets[i];
                if (t.layer === 0) {
                    let ang = t.direction + t.angle + rot,
                        len = t.offset * drawSize;
                    drawEntity(
                        xx + len * Math.cos(ang),
                        yy + len * Math.sin(ang),
                        t, ratio, alpha, drawSize / ratio / t.size * t.sizeFactor,
                        source.turrets[i].facing + turretsObeyRot * rot,
                        turretsObeyRot, context, source.turrets[i], render
                    );
                }
            }
        } else {
            throw new Error("Mismatch turret number with mockup.");
        }
        function getRandomColor() {
            var letters = '0123456789ABCDEF';
            var color = '#';
            for (var i = 0; i < 6; i++) {
                color += letters[Math.floor(Math.random() * 16)];
            }
            return color;
        }
        // Draw guns  
        source.guns.update();
        context.lineWidth = Math.max(config.graphical.mininumBorderChunk, ratio * config.graphical.borderChunk);
        if (source.guns.length === m.guns.length) {
            let positions = source.guns.getPositions();
            for (let i = 0; i < m.guns.length; i++) {
                let g = m.guns[i],
                    position = positions[i] / ((g.aspect === 1) ? 2 : 1),
                    gx =
                        g.offset * Math.cos(g.direction + g.angle + rot) +
                        (g.length / 2 - position) * Math.cos(g.angle + rot),
                    gy =
                        g.offset * Math.sin(g.direction + g.angle + rot) +
                        (g.length / 2 - position) * Math.sin(g.angle + rot);
                setColor(context, mixColors(getColor(g.color), render.status.getColor(), render.status.getBlend()))
                drawTrapezoid(
                    context,
                    xx + drawSize * gx,
                    yy + drawSize * gy,
                    drawSize * (g.length / 2 - ((g.aspect === 1) ? position * 2 : 0)),
                    drawSize * g.width / 2,
                    g.aspect,
                    g.angle + rot,
                ); // add back the previous code. g.color?
            }  // @everyone
        } else {
            throw new Error("Mismatch gun number with mockup.");
        }
        // Draw body
        context.globalAlpha = 1;
        setColor(context, mixColors(getColor(instance.color), render.status.getColor(), render.status.getBlend()));
        // ============================================================
        // Rectangular maze walls.
        // ============================================================
        if (instance.layer === 3) {
            // To understand why a specific value (10 in this case) is used,
            // look at the method "this.updateAABB" in server.js where x1,y1,x2,y2
            // are calculated (AABB is inflated by 10). Here, only 8 is used.
            let drawWidth = (ratio * instance.size) - (8 * ratio);
            let drawHeight = (ratio * instance.sizeVert) - (8 * ratio);

            drawRectangle(context, xx, yy, drawWidth, drawHeight);
        }
        // ============================================================
        drawPoly(context, xx, yy, drawSize / m.size * m.realSize, m.shape, rot);

        // ===========================================================================
        // Spaceball Shooter bullet.
        // ===========================================================================
        if (instance.layer === 20) {
            if (!instance.spaceBallSprite) {
                let animationInfo = spaceBallSpriteInfo;
                let destWidth = scale * ratio * animationInfo.width;
                let destHeight = scale * ratio * animationInfo.height;

                instance.spaceBallSprite = new Sprite(animationInfo.url,
                    [0, 0], // Position
                    [animationInfo.width, animationInfo.height], // Source size 
                    [destWidth, destHeight], // Destination size
                    24, // Animation speed
                    animationInfo.frames, // Frames
                    null, // Direction (default is horizontal)
                    false); // Play once                   
            }

            var now = getNow();
            var dt = instance.spaceBallTime ? (now - instance.spaceBallTime) / 1000.0 : 0;

            // Add 90 degrees to align with the rotation of the bullet.
            let rotation = rot + 180 * (Math.PI / 180);
            let alpha = instance.render.status.getFade();

            // dt, destX, destY, destXOffset, destYOffset,  rotation, alpha
            instance.spaceBallSprite.update(dt, x, y, 0, 0, rotation, alpha);
            instance.spaceBallSprite.render(ctx);

            instance.spaceBallTime = now;
        }
        // ===========================================================================
        // Blue cannon.
        // ===========================================================================
        if (instance.layer === 40) {
            var _animationInfo65 = blueCanonSpriteInfo;
            var _destWidth91 = scale * ratio * _animationInfo65.width;
            var _destHeight91 = scale * ratio * _animationInfo65.height;
            if (!instance.blueCanonSprite) {
                instance.blueCanonSprite = new Sprite(_animationInfo65.url, [0, 0], // Position
                    [_animationInfo65.width, _animationInfo65.height], // Source size 
                    [_destWidth91, _destHeight91], // Destination size
                    20, // Animation speed
                    _animationInfo65.frames, // Frames
                    null, // Direction (default is horizontal)
                    false); // Play once                   
            }
            var _now44 = getNow();
            var _dt43 = instance.lastBlueCanonTime ? (_now44 - instance.lastBlueCanonTime) / 1000.0 : 0;
            var _alpha45 = instance.render.status.getFade(); // dt, destX, destY, destXOffset, destYOffset,  rotation, alpha
            instance.blueCanonSprite.update(_dt43, x, y, 0, 0, _destWidth91, _destHeight91, rot, _alpha45);
            instance.blueCanonSprite.render(ctx);
            instance.lastBlueCanonTime = _now44;
        } 
        // =======================================================================
        // Draw turrets above us
        if (source.turrets.length === m.turrets.length) {
            for (let i = 0; i < m.turrets.length; i++) {
                let t = m.turrets[i];
                if (t.layer === 1) {
                    let ang = t.direction + t.angle + rot,
                        len = t.offset * drawSize;
                    drawEntity(
                        xx + len * Math.cos(ang),
                        yy + len * Math.sin(ang),
                        t, ratio, alpha, drawSize / ratio / t.size * t.sizeFactor,
                        source.turrets[i].facing + turretsObeyRot * rot,
                        turretsObeyRot, context, source.turrets[i], render
                    );
                }
            }
        } else { throw new Error("Mismatch turret number with mockup."); }
        if (!assignedContext && context !== ctx) {
            ctx.save();
            ctx.globalAlpha = alpha * fade;
            //ctx.globalCompositeOperation = "overlay";
            ctx.drawImage(context.canvas, x - xx, y - yy);
            ctx.restore();
            //ctx.globalCompositeOperation = "source-over";
        }
    };
})();

function drawHealth(x, y, instance, ratio, alpha) {
    if (alpha < 0.05) return
    // Draw health bar
    let fade = instance.render.status.getFade()
    fade *= fade;
    ctx.globalAlpha = fade;
    let size = instance.size * ratio;
    let m = mockups[instance.index];
    let realSize = size / m.size * m.realSize;
    // Draw health
    if (instance.drawsHealth) {
        let health = instance.render.health.get();
        let shield = instance.render.shield.get();
        if (health < 1 || shield < 1) {
            let yy = y + 1.1 * realSize + 15;
            ctx.globalAlpha = alpha * alpha * fade;
            if (config.graphical.shieldbars) {
                drawBar(x - size, x + size, yy, 6 + config.graphical.barChunk, color.black);
                if (shield) {
                    drawBar(x - size, x - size + 2 * size * health, yy + 1.5, 3, color.lgreen);
                    ctx.globalAlpha *= 0.7;
                    drawBar(x - size, x - size + 2 * size * shield, yy - 1.5, 3, color.teal);
                } else {
                    drawBar(x - size, x - size + 2 * size * health, yy, 4, color.lgreen);
                }
            } else {
                drawBar(x - size, x + size, yy, 3 + config.graphical.barChunk, color.black);
                drawBar(x - size, x - size + 2 * size * health, yy, 3, color.lgreen);
                if (shield) {
                    ctx.globalAlpha *= (0.3 + shield * 0.3);
                    drawBar(x - size, x - size + 2 * size * shield, yy, 3, color.teal);
                }
            }
            ctx.globalAlpha = fade;
        }
    }
    // Draw label
    if (instance.nameplate && instance.id !== gui.playerid) {
        if (instance.render.textobjs == null) instance.render.textobjs = [TextObj(), TextObj()];
        var name = instance.name
        var namecolor = color.guiwhite
        if (name.startsWith('[AI]')) {
            name = name.slice(4)
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Bot",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(72),
                    "center"
                );
            namecolor = mixColors(color.blue, namecolor, 0.125)
        }
        if (instance.name === 'Party Time!!!') {
            function getRandomColor() {
                var letters = '0123456789ABCDEF';
                var color = '#';
                for (var i = 0; i < 6; i++) {
                    color += letters[Math.floor(Math.random() * 16)];
                }
                return color;
            }
            //  name = name.slice(2)
            if (name.length)
                namecolor = getRandomColor()
        }
        if (instance.name === 'Trans Rites') {
            instance.render.textobjs[0].draw('T', x - 50, y - realSize - 50, 16, '#5BCEF5', 'center');
            instance.render.textobjs[0].draw('r', x - 41, y - realSize - 50, 16, '#F5A8B4', 'center');
            instance.render.textobjs[0].draw('a', x - 32, y - realSize - 50, 16, '#FFFFFF', 'center');
            instance.render.textobjs[0].draw('n', x - 23, y - realSize - 50, 16, '#F5A8B4', 'center');
            instance.render.textobjs[0].draw('s', x - 14, y - realSize - 50, 16, '#5BCEF5', 'center');
            instance.render.textobjs[0].draw('', x - 5, y - realSize - 50, 16, '#5BCEF5', 'center');
            instance.render.textobjs[0].draw('R', x + 5, y - realSize - 50, 16, '#5BCEF5', 'center');
            instance.render.textobjs[0].draw('i', x + 14, y - realSize - 50, 16, '#F5A8B4', 'center');
            instance.render.textobjs[0].draw('g', x + 23, y - realSize - 50, 16, '#FFFFFF', 'center');
            instance.render.textobjs[0].draw('h', x + 32, y - realSize - 50, 16, '#FFFFFF', 'center');
            instance.render.textobjs[0].draw('t', x + 41, y - realSize - 50, 16, '#F5A8B4', 'center');
            instance.render.textobjs[0].draw('s', x + 50, y - realSize - 50, 16, '#5BCEF5', 'center');
}
        if (instance.name === 'Jack') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Developer",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(72),
                    "center"
                );
            namecolor = mixColors(
                HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`),
                namecolor,
                0.125
            );
        }
                if (instance.name === '最佳Hrismer_YT最佳') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Co-Developer",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(72),
                    "center"
                );
            namecolor = mixColors(
                HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`),
                namecolor,
                0.125
            );
        }
        if (instance.name === 'W8964') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Developer",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(72),
                    "center"
                );
                instance.render.textobjs[0].draw(
                    "Bordeaux.io!",
                    x,
                    y - realSize - 50 - 20,
                    16,
                    'cyan',
                    "center"
                );
            namecolor = mixColors(
                HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`),
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Nix') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Developer",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(72),
                    "center"
                );
            namecolor = mixColors(
                HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`),
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Demaxofe') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Moderator",
                    x,
                    y - realSize - 50,
                    16,
                    "#00FFFF",
                    "center"
                );
            namecolor = mixColors(
                "#00FFFF",
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Mega Arras') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Beta-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#ffff00",
                    "center"
                );
            namecolor = mixColors(
                "#ffff00",
                namecolor,
                0.125
            );
        }
        if (instance.name === 'PizzaBackupaccount') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Beta-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#ffff00",
                    "center"
                );
            namecolor = mixColors(
                "#ffff00",
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Ã¢Å“Å¸StalkerÃ¢Å“Å¸') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Beta-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#FF0000",
                    "center"
                );
            namecolor = mixColors(
                "#FF0000",
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Jesus') {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Anti-Hacker",
                    x,
                    y - realSize - 50,
                    16,
                    "#00ff00",
                    "center"
                );
            namecolor = mixColors(
                "#00ff00",
                namecolor,
                0.125
            );
        }
                if (name.startsWith("â˜¢ðŸ‰ï¼²ï½ï½Žï½‡ï½…ï½’ â˜¢ðŸ‰")) {
                    if (name.length)
                        instance.render.textobjs[0].draw(
                            "Senior-Tester",
                            x,
                            y - realSize - 50,
                            16,
                            "#0089ff",
                            "center"
                        );
            namecolor = mixColors(
                "#0089ff",
                namecolor,
                0.125
            );
        }
        if (name.startsWith("Ã¢â„¢â€¢DucDuyÃ£Æ’â€¦")) {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Beta-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#90EE90",
                    "center"
                );
            namecolor = mixColors(
                "#90EE90",
                namecolor,
                0.125
            );
        }
        if (instance.name === 'Tech Course') {
            //  name = name.slice(2)
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Developer",
                    x,
                    y - realSize - 50,
                    16,
                    getColor(20),
                    "center"

                );
            namecolor = mixColors((Date.now() % 300 < 150) ? color.blue : color.red, namecolor, 0.125)
        } if (name.startsWith("\u000A\u000B")) {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Senior-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#b57edc",
                    "center"
                );
            namecolor = mixColors(
                "#b57edc",
                namecolor,
                0.125
            );
        }
        if (name.startsWith("\u000D\u0009")) {
            namecolor = mixColors(
                "#8286ff",
                namecolor,
                0.125
            );
        }
        if (name.startsWith("\u000A\u000C")) {
            if (name.length)
                instance.render.textobjs[0].draw(
                    "Senior-Tester",
                    x,
                    y - realSize - 50,
                    16,
                    "#ff0000",
                    "center"
                );
            namecolor = mixColors(
                "#ff0000",
                namecolor,
                0.125
            );
        }
        if (instance.name === "Trans Rites") {
            instance.render.textobjs[0].draw(
                "T",
                x - 50,
                y - realSize - 50,
                16,
                "#5BCEF5",
                "center"
            );
            instance.render.textobjs[0].draw(
                "r",
                x - 41,
                y - realSize - 50,
                16,
                "#F5A8B4",
                "center"
            );
            instance.render.textobjs[0].draw(
                "a",
                x - 32,
                y - realSize - 50,
                16,
                "#FFFFFF",
                "center"
            );
            instance.render.textobjs[0].draw(
                "n",
                x - 23,
                y - realSize - 50,
                16,
                "#F5A8B4",
                "center"
            );
            instance.render.textobjs[0].draw(
                "s",
                x - 14,
                y - realSize - 50,
                16,
                "#5BCEF5",
                "center"
            );
            instance.render.textobjs[0].draw(
                "",
                x - 5,
                y - realSize - 50,
                16,
                "#5BCEF5",
                "center"
            );
            instance.render.textobjs[0].draw(
                "R",
                x + 5,
                y - realSize - 50,
                16,
                "#5BCEF5",
                "center"
            );
            instance.render.textobjs[0].draw(
                "i",
                x + 14,
                y - realSize - 50,
                16,
                "#F5A8B4",
                "center"
            );
            instance.render.textobjs[0].draw(
                "g",
                x + 23,
                y - realSize - 50,
                16,
                "#FFFFFF",
                "center"
            );
            instance.render.textobjs[0].draw(
                "h",
                x + 32,
                y - realSize - 50,
                16,
                "#FFFFFF",
                "center"
            );
            instance.render.textobjs[0].draw(
                "t",
                x + 41,
                y - realSize - 50,
                16,
                "#F5A8B4",
                "center"
            );
            instance.render.textobjs[0].draw(
                "s",
                x + 50,
                y - realSize - 50,
                16,
                "#5BCEF5",
                "center"
            );
        }
        if (instance.name.includes("USA")) {
            instance.render.textobjs[0].draw(
                "U",
                x - 14,
                y - realSize - 50,
                16,
                color.red,
                "center"
            );
            instance.render.textobjs[0].draw(
                "S",
                x,
                y - realSize - 50,
                16,
                color.guiwhite,
                "center"
            );
            instance.render.textobjs[0].draw(
                "A",
                x + 14,
                y - realSize - 50,
                16,
                color.blue,
                "center"
            );
        }
        ctx.globalAlpha = alpha;
        instance.render.textobjs[0].draw(
            name,
            x,
            y - realSize - 30,
            16,
            namecolor,
            "center"
        );
        instance.render.textobjs[1].draw(
            util.handleLargeNumber(instance.score, true),
            x,
            y - realSize - 16,
            8,
            namecolor,
            "center"
        );

        ctx.globalAlpha = 1;
    }
}


// Start animation
if (!window.requestAnimationFrame)
    window.requestAnimationFrame =
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame ||
        window.msRequestAnimationFrame ||
        function (callback) {
            window.setTimeout(callback, 1000 / 60);
        };

// Drawing states
const gameDraw = (() => {
    const statMenu = Smoothbar(0, 0.7, 1.5);
    const upgradeMenu = Smoothbar(0, 2, 3);
    // Define the graph constructor
    function graph() {
        var data = [];
        return (point, x, y, w, h, col) => {
            // Add point and push off old ones
            data.push(point);
            while (data.length > w) { data.splice(0, 1); }
            // Get scale
            let min = Math.min(...data),
                max = Math.max(...data),
                range = max - min;
            // Draw zero
            if (max > 0 && min < 0) {
                drawBar(x, x + w, y + h * max / range, 2, color.guiwhite);
            }
            // Draw points
            ctx.beginPath();
            ctx.moveTo(x, y + h * (max - data[0]) / range);
            for (let i = 1; i < data.length; i++) {
                ctx.lineTo(x + i, y + h * (max - data[i]) / range);
            }
            ctx.lineWidth = 1;
            ctx.strokeStyle = col;
            ctx.stroke();
        };
    }
    // Lag compensation functions
    const compensation = /*(() => {
        // Protected functions
        function interpolate(p1, p2, v1, v2, tt) {
            let k = Math.cos((1 + tt) * Math.PI);
            return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
        }
        function extrapolate(p1, p2, v1, v2, tt){
            return p2 + (p2 - p1) * tt; //v2 + 0.5 * tt * (v2 - v1) * ts
        }
        // Useful thing
        function angleDifference(targetA, sourceA) {
            let mod = (a, n) => (a % n + n) % n
            let a = targetA - sourceA;
            return mod(a + Math.PI, 2 * Math.PI) - Math.PI;
        }
        // Constructor
        return (sinceLastUpdate = getRelative() - metrics.lastuplink, updateFreq = metrics.rendergap) => {
            // getNow() - player.time

            // Protected vars
            updateFreq = Math.max(updateFreq, 1000 / config.roomSpeed / 30)
            let frameProgress = sinceLastUpdate / updateFreq
            // Methods
            return {
                predict: (p1, p2, v1, v2) => {
                    if (global.predictionMode === 0) {
                        return p2
                    } else if (global.predictionMode === 2) {
                        return (frameProgress >= 1) ? extrapolate(p1, p2, v1, v2, frameProgress - 1) : interpolate(p1, p2, v1, v2, frameProgress - 1);
                    }
                    return frameProgress >= 1 ? p2 : p1 + (p2 - p1) * frameProgress
                },
                predictExtrapolate: (p1, p2, v1, v2) => {
                    return p1 + (p2 - p1) * frameProgress
                },
                predictFacing: (f1, f2) => {
                    return frameProgress >= 1 ? f2 : f1 + angleDifference(f2, f1) * frameProgress
                },
                getPrediction: () => frameProgress,
            };
        };
    })();/*/
        (() => {
            // Protected functions
            function interpolate(p1, p2, v1, v2, ts, tt) {
                let k = Math.cos((1 + tt) * Math.PI);
                return 0.5 * (((1 + tt) * v1 + p1) * (k + 1) + (-tt * v2 + p2) * (1 - k));
            }
            function extrapolate(p1, p2, v1, v2, ts, tt) {
                return p2 + (p2 - p1) * tt; /*v2 + 0.5 * tt * (v2 - v1) * ts*/
            }
            // Useful thing
            function angleDifference(sourceA, targetA) {
                let mod = function (a, n) {
                    return (a % n + n) % n;
                };
                let a = targetA - sourceA;
                return mod(a + Math.PI, 2 * Math.PI) - Math.PI;
            }
            // Constructor
            return (time = player.time, interval = metrics.rendergap) => {
                // Protected vars
                let timediff = 0, t = 0, tt = 0, ts = 0;
                t = Math.max(getNow() - time - 80, -interval);
                if (t > 150 && t < 1000) { t = 150; }
                if (t > 1000) { t = 1000 * 1000 * Math.sin(t / 1000 - 1) / t + 1000; }
                tt = t / interval;
                ts = config.roomSpeed * 30 * t / 1000;
                // Methods
                return {
                    predict: (p1, p2, v1, v2) => {
                        return (t >= 0) ? extrapolate(p1, p2, v1, v2, ts, tt) : interpolate(p1, p2, v1, v2, ts, tt);
                    },
                    predictExtrapolate: (p1, p2, v1, v2) => {
                        return (t >= 0) ? extrapolate(p1, p2, v1, v2, ts, tt) : interpolate(p1, p2, v1, v2, ts, tt);
                    },
                    predictFacing: (f1, f2) => {
                        return f1 + (1 + tt) * angleDifference(f1, f2);
                    },
                    getPrediction: () => { return t; },
                };
            };
        })();
    // Make graphs
    const timingGraph = graph(),
        lagGraph = graph(),
        gapGraph = graph();
    // The skill bar dividers
    const ska = (() => {
        let a = []
        for (let i = 0; i < config.gui.expectedMaxSkillLevel * 2; i++)
            a.push(Math.log(4 * i / config.gui.expectedMaxSkillLevel + 1) / Math.log(5))
        // The actual lookup function
        return x => a[x]
    })();
    // Text objects
    const text = {
        skillNames: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
        ],
        skillKeys: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
        ],
        skillValues: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
        ],
        skillPoints: TextObj(),
        score: TextObj(),
        name: TextObj(),
        class: TextObj(),
        debug: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
        ],
        lbtitle: TextObj(),
        leaderboard: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),

        ],
        upgradeNames: [
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
            TextObj(),
        ],
        upgradeKeys: [

        ],
        skipUpgrades: TextObj(),
    };
    // The drawing loop
    return ratio => {
        //lag.set();
        let GRAPHDATA = 0;
        // Prep stuff
        renderTimes++;
        let screenRatio = Math.max(global.screenWidth, global.screenHeight * 16 / 9) / (global.screenWidth <= 1280 ? 1280 : global.screenWidth >= 1920 ? 1920 : global.screenWidth);
        let px, py;
        { // Move the camera
            let motion = compensation(); //motion.set();
            //let smear = moveCompensation.get();
            GRAPHDATA = motion.getPrediction();
            // Don't move the camera if you're dead. This helps with jitter issues
            let desiredx = motion.predict(player.lastx, player.cx, player.lastvx, player.vx)// + smear.x;
            let desiredy = motion.predict(player.lasty, player.cy, player.lastvy, player.vy)// + smear.y;
            /*player.renderx = player.renderx * 0.6 + desiredx * 0.4
            player.rendery = player.rendery * 0.6 + desiredy * 0.4
            if (global.unchainCamera) {*/
            player.renderx = desiredx
            player.rendery = desiredy
            //}
            px = ratio * player.renderx;
            py = ratio * player.rendery;
        }

        { // Clear the background + draw grid
            clearScreen(color.white, 1);
            clearScreen(color.guiblack, 0.1);

            /*ctx.save()
            ctx.beginPath()
            ctx.moveTo(ratio*global.gameWidth*0.25 - px + global.screenWidth / 2, ratio*global.gameHeight*0.0 - py + global.screenHeight / 2)
            ctx.lineTo(ratio*global.gameWidth*0.75 - px + global.screenWidth / 2, ratio*global.gameHeight*0.0 - py + global.screenHeight / 2)
            ctx.lineTo(ratio*global.gameWidth*1.00 - px + global.screenWidth / 2, ratio*global.gameHeight*0.5 - py + global.screenHeight / 2)
            ctx.lineTo(ratio*global.gameWidth*0.75 - px + global.screenWidth / 2, ratio*global.gameHeight*1.0 - py + global.screenHeight / 2)
            ctx.lineTo(ratio*global.gameWidth*0.25 - px + global.screenWidth / 2, ratio*global.gameHeight*1.0 - py + global.screenHeight / 2)
            ctx.lineTo(ratio*global.gameWidth*0.00 - px + global.screenWidth / 2, ratio*global.gameHeight*0.5 - py + global.screenHeight / 2)
            ctx.closePath()
            ctx.clip()*/
            let W = roomSetup[0].length, H = roomSetup.length;
            for (let i = 0; i < H; i++) {
                let row = roomSetup[i];
                for (let j = 0; j < W; j++) {
                    let left = Math.max(0, ratio * j * global.gameWidth / W - px + global.screenWidth / 2),
                        top = Math.max(0, ratio * i * global.gameHeight / H - py + global.screenHeight / 2),
                        right = Math.min(global.screenWidth, (ratio * (j + 1) * global.gameWidth / W - px) + global.screenWidth / 2),
                        bottom = Math.min(global.screenHeight, (ratio * (i + 1) * global.gameHeight / H - py) + global.screenHeight / 2);
                    ctx.globalAlpha = 1;
                    ctx.fillStyle = color.white;
                    ctx.fillRect(left, top, right - left, bottom - top);
                    ctx.globalAlpha = 0.3;
                    ctx.fillStyle = getZoneColor(row[j]);
                    ctx.fillRect(left, top, right - left, bottom - top);
                }
            }
            //ctx.restore()

            ctx.lineWidth = 1;
            ctx.strokeStyle = color.guiblack;
            ctx.globalAlpha = 0.04;
            ctx.beginPath();
            let gridsize = 30 * ratio;
            for (let x = (global.screenWidth / 2 - px) % gridsize; x < global.screenWidth; x += gridsize) {
                ctx.moveTo(x, 0);
                ctx.lineTo(x, global.screenHeight);
            }
            for (let y = (global.screenHeight / 2 - py) % gridsize; y < global.screenHeight; y += gridsize) {
                ctx.moveTo(0, y);
                ctx.lineTo(global.screenWidth, y);
            }
            ctx.stroke();
            ctx.globalAlpha = 1;
        }

        { // Draw things
            player.x = player.y = null
            function entitydrawingloop(instance) {
                if (!instance.render.draws) {
                    return 1;
                }
                if (instance.render.status.getFade() === 1) {
                    let motion = compensation()
                    instance.render.x = motion.predict(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
                    instance.render.y = motion.predict(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
                    instance.render.f = motion.predictFacing(instance.render.lastf, instance.facing)
                } else {
                    let motion = compensation(instance.render.lastRender, instance.interval)
                    instance.render.x = motion.predictExtrapolate(instance.render.lastx, instance.x, instance.render.lastvx, instance.vx);
                    instance.render.y = motion.predictExtrapolate(instance.render.lasty, instance.y, instance.render.lastvy, instance.vy);
                    instance.render.f = motion.predictFacing(instance.render.lastf, instance.facing)
                }
                if (instance.id === gui.playerid && (instance.twiggle & 1) === 0) {
                    instance.render.f = Math.atan2(target.y, target.x)
                    if (instance.twiggle & 2)
                        instance.render.f += Math.PI
                }
                let x = ratio * instance.render.x - px
                    , y = ratio * instance.render.y - py;
                x += global.screenWidth / 2;
                y += global.screenHeight / 2;
                if (instance.id === gui.playerid) {
                    player.x = x
                    player.y = y
                }
                drawEntity(x, y, instance, ratio, (instance.id === gui.playerid || global.showInvisible) ? instance.alpha ? (instance.alpha * 0.6 + 0.4) : 0.25 : instance.alpha, 1.1, instance.render.f, false, true);
            }
            for (let i = 0; i < entities.length; i++) {
                entitydrawingloop(entities[i]);
            }
            if (!config.graphical.screenshotMode) {
                function entityhealthdrawingloop(instance) {
                    let x = ratio * instance.render.x - px,
                        y = ratio * instance.render.y - py;
                    x += global.screenWidth / 2;
                    y += global.screenHeight / 2;
                    drawHealth(x, y, instance, ratio, (instance.id === gui.playerid) ? 1 : instance.alpha);
                }
                for (let i = 0; i < entities.length; i++) {
                    entityhealthdrawingloop(entities[i]);
                }
            }
        }
        if (global.hideGui) {
            metrics.lastrender = getNow();
            return
        }
        let scaleScreenRatio = (by, unset) => {
            global.screenWidth /= by
            global.screenHeight /= by
            ctx.scale(by, by)
            if (!unset) screenRatio *= by
        }
        scaleScreenRatio(screenRatio, true)
        // Draw GUI
        let alcoveSize = 200;
        let spacing = 20;
        gui.__s.update();
        let lb = leaderboard.get();
        let max = lb.max;

        let tankMenuColor = 100 + Math.round(Math.random() * 70),
            searchName = 'Basic';

        do {
            if (!global.showTree) break;
            if (global.died) {
                global.showTree = false;
                global.scrollX = 0;
            }
            let basic = mockups.find(r => r.name === 'Basic');
            if (!basic) break;
            let tiles = [];
            let measureSize = (x, y, colorIndex, { index, tier = 0 }) => {
                tiles.push({ x, y, colorIndex, index });
                let { upgrades } = mockups[index];
                switch (tier) {
                    case 4:
                        return {
                            width: 1,
                            height: 1
                        };
                    case 3:
                        upgrades.forEach((u, i) => measureSize(x, y + 2 + i, i, u));
                        return {
                            width: 1,
                            height: 2 + upgrades.length
                        };
                    case 2:
                    case 1:
                    case 0:
                        {
                            let us = upgrades.map((u, i) => {
                                let measure = measureSize(x, y + 2 * (u.tier - tier), i, u);
                                x += measure.width;
                                return measure;
                            });
                            return {
                                width: us.length ? us.map(r => r.width).reduce((a, b) => a + b) : 1,
                                height: 2 + Math.max(...us.map(r => r.height))
                            };
                        }
                }
            };
            let full = measureSize(0, 0, 0, { index: basic.index }),
                tileSize = Math.min(global.screenWidth * .9 / full.width * 55, global.screenHeight * .9 / full.height);
            for (let { x, y, colorIndex, index } of tiles) {
                let ax = global.screenWidth / 2 + (x - full.width * global.scrollX) * tileSize,
                    ay = global.screenHeight / 2 + (y - full.height / 2) * tileSize,
                    size = tileSize;
                colorIndex = tankMenuColor;
                if (ax < -50 || ax + size - 50 > global.screenWidth) continue;
                ctx.globalAlpha = .75;
                ctx.fillStyle = getColor(colorIndex > 185 ? colorIndex - 85 : colorIndex);
                drawGuiRect(ax, ay, size, size);
                ctx.globalAlpha = .15;
                ctx.fillStyle = getColor(-10 + (colorIndex++ - (colorIndex > 185 ? 85 : 0)));
                drawGuiRect(ax, ay, size, size * .6);
                ctx.fillStyle = color.black;
                drawGuiRect(ax, ay + size * .6, size, size * .4);
                ctx.globalAlpha = 1;
                let angle = -Math.PI / 4,
                    picture = getEntityImageFromMockup(index, gui.color),
                    position = mockups[index].position,
                    scale = .8 * size / position.axis,
                    xx = ax + .5 * size - scale * position.middle.x * Math.cos(angle),
                    yy = ay + .5 * size - scale * position.middle.x * Math.sin(angle);
                drawEntity(xx, yy, picture, .5, 1, scale / picture.size * 2, angle, true);
                ctx.strokeStyle = color.black;
                ctx.globalAlpha = 1;
                ctx.lineWidth = 2;
                drawGuiRect(ax, ay, size, size, true);
            }
        } while (false);


        if (global.mobile && canvas.control === 'joysticks') { // joysticks
            let radius = Math.min(global.screenWidth * 0.6, global.screenHeight * 0.12)
            ctx.globalAlpha = 0.3
            ctx.fillStyle = '#ffffff'
            ctx.beginPath()
            ctx.arc(global.screenWidth * 1 / 6, global.screenHeight * 2 / 3, radius, 0, 2 * Math.PI)
            ctx.arc(global.screenWidth * 5 / 6, global.screenHeight * 2 / 3, radius, 0, 2 * Math.PI)
            ctx.fill()
        }

        if (global.mobile) scaleScreenRatio(1.4)
        { // Draw messages
            let vspacing = 4;
            let len = 0;
            let height = 18;
            let x = global.screenWidth / 2;
            let y = spacing;
            if (global.mobile)
              y +=
                (global.canSkill
                  ? ((alcoveSize / 3 + spacing) / 1.4) * statMenu.get()
                  : 0) +
                (global.canUpgrade
                  ? ((alcoveSize / 2 + spacing) / 1.4) * upgradeMenu.get()
                  : 0);
            // Draw each message
            for (let i = messages.length - 1; i >= 0; i--) {
              let msg = messages[i],
                txt = msg.text,
                text = txt; //txt[0].toUpperCase() + txt.substring(1);
              // Give it a textobj if it doesn't have one
              if (msg.textobj == null) msg.textobj = TextObj();
              if (msg.len == null) msg.len = measureText(text, height - 4);
              // Draw the background
              let chatColor = getColor(msg.colorIndex);
              ctx.globalAlpha = 0.5 * msg.alpha;
              drawBar(x - msg.len / 2, x + msg.len / 2, y + height / 2, height, chatColor);
              // Draw the text
              ctx.globalAlpha = Math.min(1, msg.alpha);
              msg.textobj.draw(
                text,
                x,
                y + height / 2,
                height - 4,
                color.guiwhite,
                "center",
                true
              );
              // Iterate and move
              y += vspacing + height;
              if (msg.status > 1) {
                y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
              }
              if (msg.status > 1) {
                msg.status -= 0.05;
                msg.alpha += 0.05;
              } else if (
                i === 0 &&
                (messages.length > 5 || Date.now() - msg.time > 10000)
              ) {
                msg.status -= 0.05;
                msg.alpha -= 0.05;
                // Remove
                if (msg.alpha <= 0) {
                  messages.splice(0, 1);
                }
              }
            }
            ctx.globalAlpha = 1;
          }
          {
      // Draw Coolmessages
      let vspacing = 4;
      let len = 0;
      let height = 18;
      let x = global.screenWidth / 2;
      let y = 200;
      if (global.mobile)
        y +=
          (global.canSkill
            ? ((alcoveSize / 3 + spacing) / 1.4) * statMenu.get()
            : 0) +
          (global.canUpgrade
            ? ((alcoveSize / 2 + spacing) / 1.4) * upgradeMenu.get()
            : 0);
      // Draw each message
      for (let i = coolMessages.length - 1; i >= 0; i--) {
        let msg = coolMessages[i],
          txt = msg.text,
          text = txt; //txt[0].toUpperCase() + txt.substring(1);
        // Give it a textobj if it doesn't have one
        if (msg.textobj == null) msg.textobj = TextObj();
        if (msg.len == null) msg.len = measureText(text, height - 4);
        // Draw the background
        ctx.globalAlpha = 0.5 * msg.alpha;
        drawBar(
          x - msg.len / 2,
          x + msg.len / 2,
          y + height / 2,
          height,
          color.red
        );
        // Draw the text
        ctx.globalAlpha = Math.min(1, msg.alpha);
        msg.textobj.draw(
          text,
          x,
          y + height / 2,
          height - 4,
          color.guiwhite,
          "center",
          true
        );
        // Iterate and move
        y += vspacing + height;
        if (msg.status > 1) {
          y -= (vspacing + height) * (1 - Math.sqrt(msg.alpha));
        }
        if (msg.status > 1) {
          msg.status -= 0.05;
          msg.alpha += 0.05;
        } else if (
          i === 0 &&
          (coolMessages.length > 5 || Date.now() - msg.time > 10000)
        ) {
          msg.status -= 0.05;
          msg.alpha -= 0.05;
          // Remove
          if (msg.alpha <= 0) {
            coolMessages.splice(0, 1);
          }
        }
      }
      ctx.globalAlpha = 1;
    }
    if (global.mobile) scaleScreenRatio(1 / 1.4);
if (!global.mobile) {
  // Draw skill bars
  global.canSkill =
    gui.points > 0 && gui.skills.some(skill => skill.amount < skill.cap);
  statMenu.set(0 + (global.canSkill || global.died || global.statHover));
  global.clickables.stat.hide();

            let vspacing = 4;
            let height = 15;
            let gap = 35;
            let len = alcoveSize; // The 30 is for the value modifiers
            let save = len;
            let x = -spacing - 2 * len + statMenu.get() * (2 * spacing + 2 * len);
            let y = global.screenHeight - spacing - height;
            let ticker = 11;
            let namedata = gui.getStatNames(mockups[gui.type].statnames || -1);
            function drawASkillBar(skill) { // Individual skill bars
                ticker--;
                let name = namedata[ticker - 1],
                    level = skill.amount,
                    col = color[skill.color],
                    cap = skill.softcap,
                    maxLevel = skill.cap;
                if (cap) {
                    len = save;
                    let max = config.gui.expectedMaxSkillLevel,
                        extension = cap > max,
                        blocking = cap < maxLevel;
                    if (extension) {
                        max = cap;
                    }
                    drawBar(x + height / 2, x - height / 2 + len * ska(cap), y + height / 2, height - 3 + config.graphical.barChunk, color.black);
                    drawBar(x + height / 2, x + height / 2 + (len - gap) * ska(cap), y + height / 2, height - 3, color.grey);
                    drawBar(x + height / 2, x + height / 2 + (len - gap) * ska(level), y + height / 2, height - 3.5, col);
                    // Blocked-off area
                    if (blocking) {
                        ctx.lineWidth = 1;
                        ctx.strokeStyle = color.grey;
                        for (let j = cap + 1; j < max; j++) {
                            drawGuiLine(
                                x + (len - gap) * ska(j), y + 1.5,
                                x + (len - gap) * ska(j), y - 3 + height
                            );
                        }
                    }
                    // Vertical dividers
                    ctx.strokeStyle = color.black;
                    ctx.lineWidth = 1;
                    for (let j = 1; j < level + 1; j++) {
                        drawGuiLine(
                            x + (len - gap) * ska(j), y + 1.5,
                            x + (len - gap) * ska(j), y - 3 + height
                        );
                    }
                    // Skill name
                    len = save * ska(max);
                    let textcolor = (level === maxLevel) ? col : (!gui.points || (cap !== maxLevel && level === cap)) ? color.grey : color.guiwhite;
                    text.skillNames[ticker - 1].draw(
                        name,
                        Math.round(x + len / 2) + 0.5, y + height / 2,
                        height - 5, textcolor, 'center', true
                    );
                    // Skill key
                    text.skillKeys[ticker - 1].draw(
                        '[' + (ticker % 10) + ']',
                        Math.round(x + len - height * 0.25) - 1.5, y + height / 2,
                        height - 5, textcolor, 'right', true
                    );
                    if (textcolor === color.guiwhite) { // If it's active
                        global.clickables.stat.place(ticker - 1, x * screenRatio, y * screenRatio, len * screenRatio, height * screenRatio);
                    }
                    // Skill value
                    if (level) {
                        text.skillValues[ticker - 1].draw(
                            (textcolor === col) ? 'MAX' : '+' + level,
                            Math.round(x + len + 4) + 0.5, y + height / 2,
                            height - 5, col, 'left', true
                        );
                    }
                    // Move on
                    y -= height + vspacing;
                }
            }
            for (let i = 0; i < gui.skills.length; i++) {
                drawASkillBar(gui.skills[i]);
            }
            global.clickables.hover.place(0, 0, y * screenRatio, 0.8 * len * screenRatio, 0.8 * (global.screenHeight - y) * screenRatio);
            if (gui.points > 1) { // Draw skillpoints to spend
                text.skillPoints.draw('x' + gui.points, Math.round(x + len - 2) + 0.5, Math.round(y + height - 4) + 0.5, 20, color.guiwhite, 'right');
            }
        }

        { // Draw name, exp and score bar
            let vspacing = 4;
            var namecolor = color.guiwhite;
            if (player.name === 'Jack') {
               namecolor = HSL2COLOR(`hsl(${Date.now() % 3600 / 10}, 100%, 50%)`);
             }
            let len = 2.3 * alcoveSize; // Original 1.6
            let height = 20; // Original 25
            let x = (global.screenWidth - len) / 2;
            let y = global.screenHeight - spacing - height;
            if (!adblock && !global.mobile && global.died) {
                y -= 110
            }
            ctx.lineWidth = 1;
            // Handle exp
            // Draw the exp bar
            drawBar(x, x + len, y + height / 2, height - 3 + config.graphical.barChunk, color.black);
            drawBar(x, x + len, y + height / 2, height - 3, color.black);
            drawBar(x, x + len * gui.__s.getProgress(), y + height / 2, height - 3.5, color.gold);
            // Draw the class type
            text.class.draw(
                'Lvl ' + gui.__s.getLevel() + ' ' + mockups[gui.type].name,
                x + len / 2, y + height / 2,
                height - 4, namecolor, 'center', true
            );
            height = 14;
            y -= height + vspacing;
            // Draw the %-of-leader bar
            drawBar(x + len * 0.1, x + len * 0.9, y + height / 2, height - 3 + config.graphical.barChunk, color.black);
            drawBar(x + len * 0.1, x + len * 0.9, y + height / 2, height - 3, color.black);
            drawBar(x + len * 0.1, x + len * (0.1 + 0.8 * ((max) ? Math.min(1, gui.__s.getScore() / max) : 1)), y + height / 2, height - 3.5, color.green);
            // Draw the score
            text.score.draw(
                'Score: ' + util.formatLargeNumber(gui.__s.getScore()),
                x + len / 2, y + height / 2,
                height - 2, namecolor, 'center', true
            );
            // Draw the name
            ctx.lineWidth = 4;
            text.name.draw(
                player.name,
                Math.round(x + len / 2) + 0.5, Math.round(y - 10 - vspacing) + 0.5,
                32, namecolor, 'center'
            );

            if (player.name === 'Tech Course') {
                ctx.lineWidth = 4;
                text.name.draw(
                    player.name,
                    Math.round(x + len / 2) + 0.5, Math.round(y - 10 - vspacing) + 0.5,
                    // name colour (r6hsu9=)
                    32, (Date.now() % 300 < 150) ? color.blue : color.red, 'center'
                );
            }
        }
        if (global.mobile) scaleScreenRatio(0.8)
        { // Draw minimap and FPS monitors
            let len = alcoveSize
            let height = (len / global.gameWidth) * global.gameHeight;
            let x = global.screenWidth - spacing;
            let y = global.screenHeight - spacing;

            let drawMinimap = (x, y, len, height, playerSize) => {
                let W = roomSetup[0].length,
                    H = roomSetup.length;
                let CW = len / W,
                    CH = height / H;
                for (let i = 0; i < H; i++) {
                    let row = roomSetup[i];
                    for (let j = 0; j < W; j++) {
                        ctx.globalAlpha = 0.6;
                        ctx.fillStyle = getZoneColor(row[j]);
                        drawGuiRect(x + j * CW, y + i * CH, CW, CH);
                    }
                }
                ctx.globalAlpha = 0.3;
                ctx.fillStyle = mixColors(color.grey, color.vlgrey);
                drawGuiRect(x, y, len, height);
                for (let o of minimap.get()) {
                    ctx.fillStyle = mixColors(getColor(o.color), color.black, 0.3);
                    ctx.globalAlpha = o.alpha;
                    if (o.type === 2) {
                        // maze
                        drawGuiRect(
                            x + ((o.x - o.size) / global.gameWidth) * len - 0.4,
                            y + ((o.y - o.size) / global.gameWidth) * len - 1,
                            ((o.size * 2) / global.gameWidth) * len + 0.2,
                            ((o.size * 2) / global.gameWidth) * len + 0.2
                        );
                    } else if (o.type === 1) {
                        // roid
                        drawGuiCircle(
                            x + (o.x / global.gameWidth) * len,
                            y + (o.y / global.gameWidth) * len,
                            (o.size / global.gameWidth) * len + 0.2
                        );
                    } else if (o.id !== gui.playerid) {
                        drawGuiCircle(
                            x + (o.x / global.gameWidth) * len,
                            y + (o.y / global.gameWidth) * len,
                            playerSize
                        );
                    }
                }
                ctx.fillStyle = color.black;
                ctx.globalAlpha = 1;
                drawGuiCircle(
                    x + (player.cx / global.gameWidth) * len,
                    y + (player.cy / global.gameWidth) * len,
                    playerSize
                );
                ctx.lineWidth = 3;
                ctx.strokeStyle = color.black;
                roundRect(x, y, len, height); // Border
            };

            if (global.mobile) {
                x -= len
                let shift =
                    (global.canSkill ? (alcoveSize / 3 + spacing + spacing) * statMenu.get() : 0) +
                    (global.canUpgrade ? (alcoveSize / 2 + spacing + spacing) * upgradeMenu.get() : 0)
                drawMinimap(spacing, spacing + shift, len, height, 4)
            } else {
                x -= len
                y -= height
                drawMinimap(x, y, len, height, 2)
            }

            let textY = y - 10
            let lag = metrics.latency.reduce((a, b) => a + b, 0) / metrics.latency.length
            if (global.showDebug) {
                drawGuiRect(x, y - 40, len, 30);
                timingGraph(GRAPHDATA, x, y - 40, len, 30, color.yellow);
                gapGraph(metrics.rendergap, x, y - 40, len, 30, color.pink);
                lagGraph(lag, x, y - 40, len, 30, color.teal);
                textY -= 40
            }
            // Text
            if (global.showDebug) {
                text.debug[6].draw(
                    'Diep3io',
                    x + len, textY - 3 * 14 - 2,
                    15, color.blue, 'right'
                );

                text.debug[5].draw(
                    'Prediction: ' + Math.round(GRAPHDATA) + 'ms',
                    x + len, y - 50 - 5 * 14,
                    10, color.gold, 'right'
                );
                text.debug[4].draw(
                    'Update Rate: ' + metrics.updatetime + 'Hz',
                    x + len, y - 50 - 4 * 14,
                    10, color.yellow, 'right'
                );
            } else {
                text.debug[6].draw(
                    'Diep3io',
                    x + len, textY - 3 * 14 - 2,
                    15, color.blue, 'right'
                );
            }
            text.debug[3].draw(
                'Client FPS: ' + metrics.rendertime,
                x + len, y - 50 - 2 * 14,
                10, color.green, 'right'
            );
            text.debug[2].draw(
                'Server Speed: ' + (100 * gui.fps).toFixed(2) + '%' + ((gui.fps === 1) ? '' : ' OVERLOADED! Sry LAG'),
                x + len, y - 50 - 1 * 14,
                10, (gui.fps === 1) ? color.green : color.teal, 'right'
            );
        }
        if (global.mobile) scaleScreenRatio(1 / 0.8)

        if (global.mobile) scaleScreenRatio(1.4)
        {   // Draw leaderboard
            let vspacing = 4;
            let len = alcoveSize;

            let height = 14;
            let x = global.screenWidth - len - spacing;
            let y = spacing + height + 14;
            if (global.mobile)
                y +=
                    (global.canSkill ? (alcoveSize / 3 / 1.4) * statMenu.get() : 0) +
                    (global.canUpgrade &&
                        spacing * 2 + gui.upgrades.length * (alcoveSize * 0.5 + 14) > x * 1.4
                        ? (alcoveSize / 2 / 1.4) * upgradeMenu.get()
                        : 0);
            if (lb.data.length > 0)
                text.lbtitle.draw(
                    "Scoreboard:",
                    Math.round(x + len / 2) + 0.5,
                    Math.round(y - 10) + 0.5,
                    height + 4,
                    color.guiwhite,
                    "center"
                );
            for (let i = 0; i < lb.data.length && (!global.mobile || i < 6); i++) {
                let entry = lb.data[i];
                var barColorBT = entry.barColor;
                var nameColor = player.nameColor;
                if (entry.label.startsWith("\u0009\u000D")) nameColor = getColor(72);
                if (entry.label.startsWith("Jack")) nameColor = "#ffff00";
                if (entry.label.startsWith("\u0009\u000A")) nameColor = "#00ff00";
                if (entry.label.startsWith("\u0009\u000B")) nameColor = "#0089ff";
                if (entry.label.startsWith("\u000A\u000A")) nameColor = "#00ffff";
                if (entry.label.startsWith("\u000A\u000B")) nameColor = "#B58Eff";
                if (entry.label.startsWith("\u000A\u000C")) nameColor = "#ff0000";
                if (entry.label.startsWith("\u000D\u0009")) nameColor = "#8286ff";
                nameColor = entry.nameColor;
                drawBar(
                    x,
                    x + len,
                    y + height / 2,
                    height - 3 + config.graphical.barChunk,
                    color.black
                );
                drawBar(x, x + len, y + height / 2, height - 3, color.grey);
                let shift = Math.min(1, entry.score / max);
                drawBar(x, x + len * shift, y + height / 2, height - 3.5, barColorBT);
                // Leadboard name + score
                text.leaderboard[i].draw(
                    entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                    x + len / 2, y + height / 2,
                    height - 5, color.guiwhite, 'center', true

                );

                //name color (name is the name)
                if (entry.label.includes('Jack')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`), 'center', true

                    );
                }
                if (entry.label.includes('W8964')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ HSL2COLOR(`hsl(${(Date.now() % 3600) / 10}, 100%, 50%)`), 'center', true

                    );
                }
                if (entry.label.includes('Ã¢â„¢â€¢DucDuyÃ£Æ’â€¦')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.green, 'center', true

                    );
                }
                if (entry.label.includes('Ã¢Å“Å¸StalkerÃ¢Å“Å¸')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.red, 'center', true

                    );
                }
                if (entry.label.includes('Mega Arras')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.purple, 'center', true

                    );
                }
                if (entry.label.includes('Dev')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.blue, 'center', true

                    );
                }
                if (entry.label.includes('Fantasy Player')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.green, 'center', true

                    );
                }
                if (entry.label.includes('King Of Mopeio - REAL')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.yellow, 'center', true

                    );
                }
                if (entry.label.includes('Tech Course')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.yellow, 'center', true

                    );
                }
                if (entry.label.includes('Nix')) {
                    text.leaderboard[i].draw(
                        entry.label + ': ' + util.handleLargeNumber(Math.round(entry.score)),
                        x + len / 2, y + height / 2,
                        height - 5, /* color */ color.yellow, 'center', true

                    );
                }
                // Mini-image
                let scale = height / entry.position.axis,
                    xx = x - 1.5 * height - scale * entry.position.middle.x * 0.707,
                    yy = y + 0.5 * height + scale * entry.position.middle.x * 0.707;
                drawEntity(xx, yy, entry.image, 1 / scale, 1, scale * scale / entry.image.size, -Math.PI / 4, true);
                // Move down
                y += vspacing + height;
            }
        }
        if (global.mobile) scaleScreenRatio(1 / 1.4)

        {
            // Diep3
             global.canUpgrade =
               gui.upgrades.length > 0 && !(global.mobile && global.died);
             upgradeMenu.set(+global.canUpgrade);
             let glide = upgradeMenu.get();
             global.clickables.upgrade.hide();
             if (global.canUpgrade) {
               let internalSpacing = 14;
               let width = alcoveSize * 0.5;
               let height = alcoveSize * 0.5;
               let x = glide * 2 * spacing - spacing;
               let y = spacing;
               let xStart = x;
               let xLast = 0;
               let yMax = y;
               let ticker = 0;
               upgradeSpin += 0.01;
               //let colorIndex = 0;
               let colorIndex = 32;
       
               var namecolor = player.nameColor;
               let i = 0;
               gui.upgrades.forEach(model => {
                 //let model = gui.upgrades[i];
                 if (y > yMax) yMax = y;
                 xLast = x;
                 global.clickables.upgrade.place(
                   i++,
                   x * screenRatio,
                   y * screenRatio,
                   width * screenRatio,
                   height * screenRatio
                 );
                 // Draw box
                 ctx.globalAlpha = 0.5;
                 ctx.fillStyle = getColor(
                   colorIndex > 185 ? colorIndex - 85 : colorIndex
                 );
                 ctx.strokeStyle = color.black;
                 ctx.globalAlpha = 0.5;
                 ctx.lineWidth = 3;
                 roundRect(x, y, width, height, 10, true, true)
                 ctx.globalAlpha = 0.1;
                 ctx.fillStyle = getColor(
                   -10 + (colorIndex++ - (colorIndex > 185 ? 85 : 0))
                 );
                 // colorIndex++;
                 drawGuiRect(x, y, width, height * 0.6);
                 ctx.fillStyle = color.black;
                 drawGuiRect(x, y + height * 0.6, width, height * 0.4);
                 ctx.globalAlpha = 1;
                 // Find offset location with rotation
        let picture = getEntityImageFromMockup(model, gui.color),
                   position = mockups[model].position,
                   scale = (0.6 * width) / position.axis,
                   xx =
                     x +
                     0.5 * width -
                     scale * position.middle.x * Math.cos(upgradeSpin),
                   yy =
                     y +
                     0.5 * height -
                     scale * position.middle.x * Math.sin(upgradeSpin);
                 drawEntity(
                   xx,
                   yy,
                   picture,
                   1,
                   1,
                   scale / picture.size,
                   upgradeSpin,
                   true
                 );
                 // Tank name & Upgrade key
                 let key = (global.help[`KEY_CHOOSE_${ticker + 1}`] || "")
                   .toLowerCase()
                   .trim();
                 if (!global.mobile && key) {
                   text.upgradeNames[i - 1].draw(
                     picture.name,
                     x + (width * 0.9) / 2,
                     y + height - 6,
                     height / 8 - 3,
                     color.guiwhite,
                     "center"
                   );
                   text.upgradeKeys[i - 1].draw(
                     "[" + key + "]",
                     x + width - 4,
                     y + height - 6,
                     height / 8 - 3,
                     color.guiwhite,
                     "right"
                   );
                 } else {
                   text.upgradeNames[i - 1].draw(
                     picture.name,
                     x + width / 2,
                     y + height - 6,
                     height / 8 - 3,
                     color.guiwhite,
                     "center"
                   );
                 }
 
              if (++ticker % 6 === 0 && !global.mobile) {
                x = xStart;
                y += height + internalSpacing;
              } else {
                x += glide * (width + internalSpacing);
              }
            });
                    // Draw box
                    let h = 14, msg = "Don't Upgrade", m = measureText(msg, h-3) + 10;
                    let xx = (xLast + width + internalSpacing + xStart - 15)/2, yy = yMax + height + internalSpacing;
                    drawBar(xx-m/2, xx+m/2, yy+h/2, h+config.graphical.barChunk, color.black);
                    drawBar(xx-m/2, xx+m/2, yy+h/2, h, color.white);
                    text.skipUpgrades.draw(msg, xx, yy+h/2, h-2, color.guiwhite, 'center', true);
                    global.clickables.skipUpgrades.place(0, (xx-m/2) * screenRatio, yy * screenRatio, m * screenRatio, h * screenRatio);
                } else {
                    global.clickables.upgrade.hide()
                    global.clickables.skipUpgrades.hide()
                }
            }
            // Dexamenes middle old
            /*global.canUpgrade = gui.upgrades.length > 0 && !(global.mobile && global.died)
            upgradeMenu.set(+global.canUpgrade)
            let glide = upgradeMenu.get()
            global.clickables.upgrade.hide()
            if (global.canUpgrade) {
                let internalSpacing =14;
                let width = alcoveSize * 0.5;
                let height = alcoveSize * 0.5;
                let x = glide * 2 * spacing - spacing;
                let y = spacing;
                let xStart = x;
                let xLast = 0;
                let yMax = y;
                let ticker = 0;
                upgradeSpin += 0.05;
                //let colorIndex = 0;
                              let colorIndex = global.tankMenuColor;

               var namecolor = color.guiwhite;
             //DEV160 DEV220 BTGEN1 BT5500
              if (player.key === 'TOKENortjndsisnoafw428gjTOKEN') {
                namecolor = HSL2COLOR(`hsl(${Date.now() % 3600 / 10}, 100%, 50%)`);
              }
          if (player.key === 'TOKENxxxCarDudexxxTOKEN') {
                namecolor = color.red
              }
          if (player.key === 'TOKENBIGBOIBADYGUARDTOKEN') {
                namecolor = color.blue
              }
          if (player.key === 'TOKENTRAFFICKONEGENERALTOKEN') {
                namecolor = color.orange
              }
              if (player.key === 'TOKEN_BT_[â„™ð•‚] â„™ð•£ð• ð•‚ð•’ð•žð•–ð•£ð• ð•Ÿ_BT_TOKEN') {
                namecolor = '#00FFFF'
              }if (player.key === 'TOKENBT_KC_BTTOKEN') {
                namecolor = '#800000'
              }
          if (player.key === 'TOKENBT_HELLER_TECH_BTTOKEN' || player.key === 'TOKENBT_á…šá…š_BTTOKEN' || player.key === 'TOKENBT_STUDIO_EXPERTER_BTTOKEN' || player.key === 'TOKENBT_SYNCINIUS_BTTOKEN' || player.key === 'TOKENBT_MSE_BTTOKEN' || player.key === 'TOKENBT_nondairymovie98_BTTOKEN' || player.key === 'TOKENBT_LORD_ARRAS_BTTOKEN') {
                namecolor = color.yellow
              }
                let i = 0;
                gui.upgrades.forEach(model => {
                    //let model = gui.upgrades[i];
                    if (y > yMax) yMax = y;
                    xLast = x;
                    global.clickables.upgrade.place(i++, x * screenRatio, y * screenRatio, width * screenRatio, height * screenRatio);
                    // Draw box
                    ctx.globalAlpha = 0.5;
                  ctx.fillStyle = getColor(colorIndex > 185 ? colorIndex - 85 : colorIndex);
                  drawGuiRect(x, y, width, height);
                    ctx.globalAlpha = 0.1;
                                ctx.fillStyle = getColor(-10 + (colorIndex++ - (colorIndex > 185 ? 85 : 0)));
                   // colorIndex++;
                    drawGuiRect(x, y, width, height*0.6);
                    ctx.fillStyle = color.black;
                    drawGuiRect(x, y+height*0.6, width, height*0.4);
                    ctx.globalAlpha = 1;
                    // Find offset location with rotation
                    let picture = getEntityImageFromMockup(model, gui.color),
                        position = mockups[model].position,
                        scale = 0.6 * width / position.axis,
                        xx = x + 0.5 * width - scale * position.middle.x * Math.cos(upgradeSpin),
                        yy = y + 0.5 * height - scale * position.middle.x * Math.sin(upgradeSpin);
                    drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);
                    // Tank name & Upgrade key
                    let key = (global.help[`KEY_CHOOSE_${ ticker + 1 }`] || '').toLowerCase().trim()
                    if (!global.mobile && key) {
                        text.upgradeNames[i-1].draw(
                            picture.name,
                            x + width*0.9/2, y + height - 6,
                            height/8 - 3, color.guiwhite, 'center'
                        );
                        text.upgradeKeys[i-1].draw(
                            '[' + key + ']',
                            x + width - 4, y + height - 6,
                            height/8 - 3, color.guiwhite, 'right'
                        );
                    } else {
                        text.upgradeNames[i-1].draw(
                            picture.name,
                            x + width/2, y + height - 6,
                            height/8 - 3, color.guiwhite, 'center'
                        );
                    }
                    ctx.strokeStyle = color.black;
                    ctx.globalAlpha = 1;
                    ctx.lineWidth = 3;
                    drawGuiRect(x, y, width, height, true); // Border
                    if (++ticker % 9 === 0 && !global.mobile) {
                        x = xStart;
                        y += height + internalSpacing;
                    } else {
                        x += glide * (width + internalSpacing);
                    }
                });
                // Draw box
                let h = 14, msg = "Don't Upgrade", m = measureText(msg, h-3) + 10;
                let xx = (xLast + width + internalSpacing + xStart - 15)/2, yy = yMax + height + internalSpacing;
                drawBar(xx-m/2, xx+m/2, yy+h/2, h+config.graphical.barChunk, namecolor);
                drawBar(xx-m/2, xx+m/2, yy+h/2, h, color.white);
                text.skipUpgrades.draw(msg, xx, yy+h/2, h-2, namecolor, 'center', true);
                global.clickables.skipUpgrades.place(0, (xx-m/2) * screenRatio, yy * screenRatio, m * screenRatio, h * screenRatio);
            } else {
                global.clickables.upgrade.hide()
                global.clickables.skipUpgrades.hide()
            }
        }*/
            // Draw upgrade menu
          /*  global.canUpgrade = gui.upgrades.length > 0 && !(global.mobile && global.died)
            upgradeMenu.set(+global.canUpgrade)
            let glide = upgradeMenu.get()
            global.clickables.upgrade.hide()
            if (global.canUpgrade) {
                let internalSpacing = 14;
                let width = alcoveSize * 0.5;
                let height = alcoveSize * 0.5;
                let x = glide * 2 * spacing - spacing;
                let y = spacing;
                let xStart = x;
                let xLast = 0;
                let yMax = y;
                let ticker = 0;
                upgradeSpin += 0.10;
                // let colorIndex = global.tankMenuColor;
                // IDS. 37 kinda rainbow. 72 rainbow
                let colorIndex = 32;
                let i = 0;
                if (player.name === 'Jack') {
                    namecolor = HSL2COLOR(`hsl(${Date.now() % 3600 / 10}, 100%, 50%)`);
                  }
                gui.upgrades.forEach(model => {
                    //let model = gui.upgrades[i];
                    if (y > yMax) yMax = y;
                    xLast = x;
                    global.clickables.upgrade.place(i++, x * screenRatio, y * screenRatio, width * screenRatio, height * screenRatio);
                    // Draw box
                    ctx.globalAlpha = 0.5;
                    ctx.fillStyle = getColor(colorIndex);
                    drawGuiRect(x, y, width, height);
                    ctx.globalAlpha = 0.1;
                    ctx.fillStyle = getColor(-10 + colorIndex++);
                    colorIndex++;
                    drawGuiRect(x, y, width, height * 0.6);
                    ctx.fillStyle = color.black;
                    drawGuiRect(x, y + height * 0.6, width, height * 0.4);
                    ctx.globalAlpha = 1;
                    // Find offset location with rotation
                    let picture = getEntityImageFromMockup(model, gui.color),
                        position = mockups[model].position,
                        scale = 0.6 * width / position.axis,
                        xx = x + 0.5 * width - scale * position.middle.x * Math.cos(upgradeSpin),
                        yy = y + 0.5 * height - scale * position.middle.x * Math.sin(upgradeSpin);
                    drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);
                    // Tank name & Upgrade key
                    let key = (global.help[`KEY_CHOOSE_${ticker + 1}`] || "")
                    .toLowerCase()
                    .trim();
                  if (!global.mobile && key) {
                    text.upgradeNames[i - 1].draw(
                      picture.name,
                      x + (width * 0.9) / 2,
                      y + height - 6,
                      height / 8 - 3,
                      color.guiwhite,
                      "center"
                    );
                    text.upgradeKeys[i - 1].draw(
                      "[" + key + "]",
                      x + width - 4,
                      y + height - 6,
                      height / 8 - 3,
                      color.guiwhite,
                      "right"
                    );
                  } else {
                    text.upgradeNames[i - 1].draw(
                      picture.name,
                      x + width / 2,
                      y + height - 6,
                      height / 8 - 3,
                      color.guiwhite,
                      "center"
                    );
                  }
                    ctx.strokeStyle = color.black;
                    ctx.globalAlpha = 1;
                    ctx.lineWidth = 3;
                    roundRect2(x, y, width, height, true); // Border
                    if (++ticker % 7 === 0 && !global.mobile) {
                        x = xStart;
                        y += height + internalSpacing;
                    } else {
                        x += glide * (width + internalSpacing);
                    }
                });
                // Draw box
                let h = 14, msg = "Don't Upgrade", m = measureText(msg, h - 3) + 10;
                let xx = (xLast + width + internalSpacing + xStart - 15) / 2, yy = yMax + height + internalSpacing;
                drawBar(xx-m/2, xx+m/2, yy+h/2, h+config.graphical.barChunk, namecolor);
                drawBar(xx-m/2, xx+m/2, yy+h/2, h, color.white);
                text.skipUpgrades.draw(msg, xx, yy+h/2, h-2, namecolor, 'center', true);
                global.clickables.skipUpgrades.place(0, (xx - m / 2) * screenRatio, yy * screenRatio, m * screenRatio, h * screenRatio);
            } else {
                global.clickables.upgrade.hide()
                global.clickables.skipUpgrades.hide()
            }
        }*/

        // ==============================================================================
        // Chat System.
        // ==============================================================================
        { // Draw chat messages
            let vspacing = 4;
            let height = 22;
            let x = 50;
            let y = (global.screenHeight / 3) + spacing;

            ctx.save();
            ctx.lineCap = 'miter';
            ctx.lineJoin = 'miter';

            // Draw each message
            for (let i = chatMessages.length - 1; i >= 0; i--) {
                let chatMessageObj = chatMessages[i];
                let playerName = chatMessageObj.playerName;
                let message = chatMessageObj.text;

                let tmpPlayerName = playerName;
                let tmpMessage = message;

                // Give it a textobj if it doesn't have one
                if (chatMessageObj.textobj == null) {
                    chatMessageObj.textobj = TextObj();
                }

                if (chatMessageObj.playerNameDrawWidth == null) {
                    chatMessageObj.playerNameDrawWidth = measureText(tmpPlayerName, height - 4);
                }

                if (chatMessageObj.messageDrawWidth == null) {
                    chatMessageObj.messageDrawWidth = measureText(tmpMessage, height - 4);
                }

                const totalDrawWidth = chatMessageObj.playerNameDrawWidth + chatMessageObj.messageDrawWidth;

                if (totalDrawWidth < 1000) {
                    // Player name.
                    const playerNameX1 = x - 4;
                    const playerNameX2 = x + chatMessageObj.playerNameDrawWidth + 4;

                    // Chat message.
                    const chatX1 = playerNameX2;// + 10;
                    const chatX2 = chatX1 + chatMessageObj.messageDrawWidth + 12;
                    ctx.globalAlpha = 1.0;
                    drawBar(chatX1, chatX2, y + height / 2, height, color.black);

                    const messageColor = getColor(chatMessageObj.colorIndex);
                    chatMessageObj.textobj.draw(tmpMessage, chatX1 + 2, y + (height / 2) + 1, height - 4, messageColor, 'left', true);

                    // Draw player name and background on top of the message.
                    ctx.globalAlpha = 0.6;
                    drawBar(playerNameX1, playerNameX2, y + height / 2, height, color.black);
                    const playerNameColor = getColor(chatMessageObj.colorIndex);
                    ctx.globalAlpha = 0.8;
                    chatMessageObj.textobj.draw(tmpPlayerName, playerNameX1, y + (height / 2) + 1, height - 4, playerNameColor, 'left', true);

                    // Iterate and move
                    y += (vspacing + height);
                }
            }
            ctx.restore();

            ctx.globalAlpha = 1;
        }
        // ==============================================================================


        if (global.mobile) { // Draw skill bars
            global.canSkill = gui.points > 0 && gui.skills.some(skill => skill.amount < skill.cap) && !global.canUpgrade;
            statMenu.set(0 + (global.canSkill || global.died))
            let glide = statMenu.get()

            global.clickables.stat.hide()

            let internalSpacing = 14
            let width = alcoveSize / 2
            let height = alcoveSize / 3
            let x = glide * 2 * spacing - spacing
            let y = spacing
            let index = 0
            let namedata = gui.getStatNames(mockups[gui.type].statnames || -1)
            if (global.canSkill) {
                gui.skills.forEach((skill, ticker) => {
                    let skillCap = skill.softcap
                    if (skillCap <= 0) return
                    let skillAmount = skill.amount
                    let skillColor = color[skill.color]
                    let skillMax = skill.cap
                    let skillNameParts = namedata[9 - ticker].split(/\s+/)
                    let skillNameCut = Math.floor(skillNameParts.length / 2)
                    let [skillNameTop, skillNameBottom] = skillNameParts.length === 1 ?
                        [skillNameParts, null] :
                        [skillNameParts.slice(0, skillNameCut),
                        skillNameParts.slice(skillNameCut)]

                    // Draw box
                    ctx.globalAlpha = 0.5
                    ctx.fillStyle = skillColor
                    drawGuiRect(x, y, width, height * 2 / 3)
                    ctx.globalAlpha = 0.1
                    ctx.fillStyle = color.black
                    drawGuiRect(x, y + height * 2 / 3 * 2 / 3, width, height * 2 / 3 * 1 / 3)
                    ctx.globalAlpha = 1
                    ctx.fillStyle = color.guiwhite
                    drawGuiRect(x, y + height * 2 / 3, width, height * 1 / 3)
                    ctx.fillStyle = skillColor
                    drawGuiRect(x, y + height * 2 / 3, width * skillAmount / skillCap, height * 1 / 3)

                    // Dividers
                    ctx.strokeStyle = color.black;
                    ctx.lineWidth = 1;
                    for (let j = 1; j < skillMax; j++) {
                        let xPos = x + width * (j / skillCap)
                        drawGuiLine(
                            xPos, y + height * 2 / 3,
                            xPos, y + height)
                    }

                    // Upgrade name
                    if (skillAmount !== skillMax && gui.points && (skillCap === skillMax || skillAmount !== skillCap)) {
                        global.clickables.stat.place(9 - ticker, x * screenRatio, y * screenRatio, width * screenRatio, height * screenRatio)
                    }
                    if (skillNameBottom) {
                        text.skillNames[ticker].draw(
                            skillNameBottom,
                            x + width / 2, y + height * 0.55,
                            height / 6, color.guiwhite, 'center'
                        )
                        text.skillNames[ticker].draw(
                            skillNameTop,
                            x + width / 2, y + height * 0.3,
                            height / 6, color.guiwhite, 'center'
                        )
                    } else {
                        text.skillNames[ticker].draw(
                            skillNameTop,
                            x + width / 2, y + height * 0.425,
                            height / 6, color.guiwhite, 'center'
                        )
                    }

                    if (skillAmount > 0) {
                        text.skillValues[ticker].draw(
                            skillAmount >= skillCap ? 'MAX' : '+' + skillAmount,
                            Math.round(x + width / 2) + 0.5, y + height * 1.3,
                            height / 4, skillColor, 'center'
                        )
                    }

                    // Border
                    ctx.strokeStyle = color.black
                    ctx.globalAlpha = 1
                    ctx.lineWidth = 3
                    drawGuiLine(x, y + height * 2 / 3, x + width, y + height * 2 / 3)
                    drawGuiRect(x, y, width, height, true)
                    x += glide * (width + internalSpacing)
                    index++
                })
                if (gui.points > 1) {
                    text.skillPoints.draw('x' + gui.points, Math.round(x) + 0.5, Math.round(y + 20) + 0.5, 20, color.guiwhite, 'left')
                }
            }
        }

        scaleScreenRatio(1 / screenRatio, true)
        metrics.lastrender = getNow();
    };
})();


const gameDrawDead = (() => {
    let text = {
        taunt: TextObj(),
        level: TextObj(),
        score: TextObj(),
        time: TextObj(),
        kills: TextObj(),
        death: TextObj(),
        playagain: TextObj(),
    };
    let getKills = () => {
        let finalKills = [Math.round(global.finalKills[0].get()), Math.round(global.finalKills[1].get()), Math.round(global.finalKills[2].get())];
        let b = finalKills[0] + 0.5 * finalKills[1] + 3 * finalKills[2];
        let text = ((b === 0) ? 'ðŸŒ¼' :
            (b < 4) ? 'ðŸŽ¯' :
                (b < 8) ? 'ðŸ’¥' :
                    (b < 15) ? 'ðŸ’¢' :
                        (b < 25) ? 'ðŸ”¥' :
                            (b < 50) ? 'ðŸ’£' :
                                (b < 75) ? 'ðŸ‘º' :
                                    (b < 100) ? 'ðŸŒ¶ï¸' : 'ðŸ’¯') + ' '
        if (b === 0) return text + 'A true pacifist!'
        let killed = []
        if (finalKills[0]) killed.push(finalKills[0] + ' murders')
        if (finalKills[1]) killed.push(finalKills[1] + ' assists')
        if (finalKills[2]) killed.push(finalKills[2] + ' visitors defeated')
        return text + killed.join(' and ')
    };
    let getDeath = () => {
        let txt = '';
        if (global.finalKillers.length) {
            txt = 'ðŸ”ª Succumbed to';
            global.finalKillers.forEach(e => {
                txt += ' ' + util.addArticle(mockups[e].name) + ' and';
            });
            txt = txt.slice(0, -4) + '.';
        } else {
            txt += 'ðŸ¤· Well that was kinda dumb huh';
        }
        return txt;
    };
    return () => {
        clearScreen(color.black, 0.25);
        let x = global.screenWidth / 2, y = global.screenHeight / 2 - 50;
        let picture = getEntityImageFromMockup(gui.type, gui.color),
            len = 140,
            position = mockups[gui.type].position,
            scale = len / position.axis,
            xx = global.screenWidth / 2 - scale * position.middle.x * 0.707,
            yy = global.screenHeight / 2 - 35 + scale * position.middle.x * 0.707;
        drawEntity(xx-190-len/2, yy-10, picture, 1.5, 1, 0.5 * scale / picture.realSize, -Math.PI/4, true);
        var namecolor = color.guiwhite;
             //DEV160 DEV220 BTGEN1 BT5500
             if (player.name === 'Jack') {
                namecolor = HSL2COLOR(`hsl(${Date.now() % 3600 / 10}, 100%, 50%)`);
              }
        text.taunt.draw(
            'lol you died', x, y - 80, 8, namecolor, 'center'
        );
        text.level.draw(
            'Level ' + gui.__s.getLevel() + ' ' + mockups[gui.type].name + '.',
            x-170, y-30, 24, namecolor
        );
        text.score.draw(
            'Final score: ' + util.formatLargeNumber(Math.round(global.finalScore.get())),
            x-170, y+25, 50, namecolor
        );
        text.time.draw(
            'âŒš Survived for ' + util.timeForHumans(Math.round(global.finalLifetime.get())) + '.',
            x-170, y+55, 16, namecolor
        );
        text.kills.draw(
            getKills(), x-170, y+77, 16, namecolor
        );
        text.death.draw(
            getDeath(), x-170, y+99, 16, namecolor
        );
        let needMore = Math.ceil((global.respawnOn - Date.now()) / 1000)
        text.playagain.draw(
            needMoreÂ > 0 ? `You may respawn in ${ needMore } second${ needMore === 1 ? '' : 's' }.` : canvas.control === 'joysticks' ? 'Tap to respawn!' : 'Press enter to respawn!', x, y + 125, 16, namecolor, 'center'
        );
    };
})();
window.onbeforeunload = () => global.isInGame && !global.died ? true : null
window.$createProfile = (() => {
    let text = {
        upgradeName: TextObj(),
        upgradeKey: TextObj(),
    };

    return (model, colorIndex = -1, size = 200, upgradeSpin = -Math.PI / 4) => {
        let oldWidth = ctx.canvas.width
        let oldHeight = ctx.canvas.height

        let width = ctx.canvas.width = size
        let height = ctx.canvas.height = size
        if (colorIndex === -1) {
            ctx.clearRect(0, 0, width, height)
        } else {
            ctx.fillStyle = color.white
            ctx.fillRect(0, 0, width, height)
            ctx.globalAlpha = 0.5
            ctx.fillStyle = getColor(colorIndex + 10)
            drawGuiRect(0, 0, width, height)
            ctx.globalAlpha = 0.1
            ctx.fillStyle = getColor(colorIndex)
            drawGuiRect(0, 0, width, height * 0.6)
            ctx.fillStyle = color.black
            drawGuiRect(0, height * 0.6, width, height * 0.4)
            ctx.globalAlpha = 1
        }
        // Find offset location with rotation
        let picture = getEntityImageFromMockup(model, gui.color),
            position = mockups[model].position,
            scale = 0.6 * width / position.axis,
            xx = 0.5 * width - scale * position.middle.x * Math.cos(upgradeSpin),
            yy = 0.5 * height - scale * position.middle.x * Math.sin(upgradeSpin);
        drawEntity(xx, yy, picture, 1, 1, scale / picture.size, upgradeSpin, true);

        if (colorIndex !== -1) {
            // Tank name
            text.upgradeName.draw(
                picture.name,
                0.9 * width / 2, height - 6,
                height / 8 - 3, color.guiwhite, 'center'
            );
            // Upgrade key
            ctx.strokeStyle = color.black;
            ctx.globalAlpha = 1;
            ctx.lineWidth = 3;
            drawGuiRect(0, 0, width, height, true); // Border
        }

        let url = ctx.canvas.toDataURL()
        ctx.canvas.width = oldWidth
        ctx.canvas.height = oldHeight
        return url
    }
})();

const gameDrawBeforeStart = (() => {
    let text = {
        connecting: TextObj(),
        message: TextObj(),
        tip: TextObj()
    };
    let tipSets = [
        [
            "Tip: You can view and edit your keybinds in the options menu.",
            "Tip: You can play on mobile by just going to diep3io.netlify.app on your phone!"
        ],
        [
            "Tip: You can have the shield and health bar be separated by going to the options menu.",
            "Tip: If Diep3io is having a low frame rate, you can try enabling low graphics in the options menu.",
            "Tip: You can make traps rounded with the classic trap setting in the options menu.",
            "Tip: You can create your own theme with the custom theme maker in the link on the options menu."
        ],
        [
            "Teaming in FFA or FFA Maze is frowned upon, but when taken to the extremes, you can be punished.",
            "Witch hunting is when you continuously target someone and follow them. This is frowned upon, but when taken to the extremes, you can be punished.",
            "Multiboxing is when you use a script to control multiple tanks at the same time. This is considered CHEATING and will result in a ban + IP BAN."
        ],
        [
            "If you have a throat or mouth, you are at risk of throat cancer.",
            "Tip: No one can use the name Jack without permission.",
            "Tip: No one can use the name Nix without permission.",
            "KKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKKK"
        ]
    ];
    let selectedSet = tipSets[Math.floor(Math.random() * tipSets.length)];
    let selectedTip = selectedSet[Math.floor(Math.random() * selectedSet.length)];
    let BTTIPS = [
        ['Press ` to get Beta Tester.'],
        ["Press T to Teleport."],
        ["Press ] to go back to Basic."],
       // ["Press . to turn into an Arena Closer."],
        ["Press / to become a random boss."],
        ["Press ; to get Godmode."],
       // ["Press O to committ suicide."]
    ];

    let selectedSetbt = BTTIPS[Math.floor(Math.random() * BTTIPS.length)]
    let selectedTipbt = selectedSetbt[Math.floor(Math.random() * selectedSetbt.length)]
    return () => {
        var namecolor = color.guiwhite;
               //DEV160 DEV220 BTGEN1 BT5500
               if (player.name === 'Jack') {
                  namecolor = HSL2COLOR(`hsl(${Date.now() % 3600 / 10}, 100%, 50%)`);
                }
          clearScreen(color.white, 0.5);
          text.connecting.draw('Connecting...', global.screenWidth / 2, global.screenHeight / 2, 30, color.guiwhite, 'center');
          text.message.draw(global.message, global.screenWidth / 2, global.screenHeight / 2 + 30, 15, color.lgreen, 'center');
          text.message.draw(selectedTip, global.screenWidth / 2, global.screenHeight / 2 + 75, 15, color.guiwhite, 'center');
        text.message.draw('If you are a Beta Tester... ' + selectedTipbt, global.screenWidth / 2, global.screenHeight / 2 + 125, 15, namecolor, 'center');
      };
  })();

const gameDrawDisconnected = (() => {
    let text = {
        disconnected: TextObj(),
        message: TextObj()
    };
    return () => {
        clearScreen(mixColors(color.red, color.guiblack, 0.3), 0.25);
        text.disconnected.draw(
            "ðŸ’€ Disconnected ðŸ’€",
            global.screenWidth / 2,
            global.screenHeight / 2,
            30,
            color.guiwhite,
            "center"
        );
        text.message.draw(
            global.message,
            global.screenWidth / 2,
            global.screenHeight / 2 + 30,
            15,
            color.orange,
            "center"
        );
    };
})();

const gameDrawClosed = (() => {
    let text = {
        Closed: TextObj(),
        message: TextObj()
    };
    return () => {
        clearScreen(mixColors(color.red, color.guiblack, 0.3), 0.25);
        text.Closed.draw(
            "ðŸ’€ Disconnected ðŸ’€",
            global.screenWidth / 2,
            global.screenHeight / 2,
            30,
            color.guiwhite,
            "center"
        );
        text.message.draw(
            global.message,
            global.screenWidth / 2,
            global.screenHeight / 2 + 30,
            15,
            color.orange,
            "center"
        );
        text.message.draw(
            "Arena is closed. Please reload.",
            global.screenWidth / 2,
            global.screenHeight / 2 + 30,
            14,
            color.guiwhite,
            "center"
        );
    };
})();

// The main function
function animloop() {
    global.animLoopHandle = requestAnimationFrame(animloop);
    player.renderv += (player.view - player.renderv) / 30;
    // Set the drawing style
    ctx.lineCap = "round";
    ctx.lineJoin = "round";
    // Draw the game
    if (global.gameStart && !global.disconnected) {
        global.time = getNow();
        if (global.time - lastPing > 1000) {
            // Latency
            // Do ping.
            lastPing = global.time;
            // Do rendering speed.
            metrics.rendertime = renderTimes;
            renderTimes = 0;
            // Do update rate.
            metrics.updatetime = updateTimes;
            updateTimes = 0;
        }
        metrics.lag = global.time - player.time;
    }
    if (global.gameStart && mockups.length > 0) {
        gameDraw(getRatio());
    } else if (!global.disconnected) {
        gameDrawBeforeStart();
    }
    if (global.died) {
        gameDrawDead();
    }
    if (global.disconnected) {
        gameDrawDisconnected();
    }
    if (global.closed) {
        gameDrawClosed();
    }
}

// ===============================================================
// Chat System.
// ===============================================================
setInterval(cleanUpChatMessages, 9000);

function cleanUpChatMessages() {
    try {
        if (chatMessages) {
            if (chatMessages.length >= 8) {
                while (chatMessages.length >= 8) {
                    chatMessages[0].textobj.remove();
                    chatMessages.splice(0, 1);
                }
            }
            else {
                if (chatMessages.length > 0) {
                    // Display chat for at most 8 seconds.
                    if (Date.now() - chatMessages[0].time >= 8000) {
                        chatMessages[0].textobj.remove();
                        chatMessages.splice(0, 1);
                    }
                }
            }
        }
    }
    catch (error) {
        console.log('[cleanUpChatMessages()]');
        console.log(error);
    }
}
// ===============================================================
