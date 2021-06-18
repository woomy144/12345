/*jslint esversion: 6*/
/*global require, module, exports, console*/
/*jshint -W097*/

const n = {
    openshift: (id, container) => `n-${id}-${container}.7e14.starter-us-west-2.openshiftapps.com`,
    glitch: id => `${id}.glitch.me`,
    heroku: id => `${id}.herokuapp.com`,
    wedeploy: (id, container) => `${id}-moxncet.wedeploy.io`,
    arras: (id, port = 5000) => `ip-${id}.arras.io:${port}`
  };
  
  let dayOfMonth = new Date().getDate();
  
  const H = dayOfMonth >= 25 ? 3 : 0;
  const G = dayOfMonth >= 25 ? 0 : 3;
  
  const global = {
    help: {
      /* KEY_CHOOSE_1: 'Y',
      KEY_CHOOSE_2: 'U',
      KEY_CHOOSE_3: 'I',
      KEY_CHOOSE_4: 'H',
      KEY_CHOOSE_5: 'J',
      KEY_CHOOSE_6: 'K',*/
    },
    // Main Customizable Keys
    KEY_AUTO_FIRE: 69,
    KEY_AUTO_SPIN: 67,
    KEY_OVER_RIDE: 82,
    KEY_LEVEL_UP: 78,
    //KEY_REVERSE_TANK: 86,
    //KEY_REVERSE_MOUSE: 66,
    KEY_SCREENSHOT: 81,
    KEY_UPGRADE_MAX: 77,
    KEY_CLASS_TREE: 220,
    // More Customizable Keys
    KEY_RECORD: 90,
    KEY_UP: 87,
    KEY_PING: 76,
    KEY_LEFT: 65,
    KEY_DOWN: 83,
    KEY_RIGHT: 68,
    KEY_CHOOSE_1: 89,
    KEY_CHOOSE_2: 85,
    KEY_CHOOSE_3: 73,
    KEY_CHOOSE_4: 72,
    KEY_CHOOSE_5: 74,
    KEY_CHOOSE_6: 75,
    KEY_CHOOSE_7: -1,
    KEY_CHOOSE_8: -1,
    KEY_CHOOSE_9: -1,
    KEY_ENTER: 13,
    KEY_RAINBOW: 88,
    KEY_TEAM: 219,
    KEY_CHAT: 13,
    KEY_SPAWN: 13,
    KEY_LEFT_ARROW: 37,
    KEY_UP_ARROW: 38,
    KEY_RIGHT_ARROW: 39,
    KEY_DOWN_ARROW: 40,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HTL: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
    KEY_FUCK_YOU: 192,
    KEY_DEVELOPER: 192,
    KEY_MOUSE_0: 32,
    KEY_MOUSE_1: 9,
    KEY_MOUSE_2: 16,
    KEY_BASIC: 221,
    KEY_CLOSE: 190,
    KEY_GOD: 186,
    KEY_TP: 84,
    KEY_RANDOM_BOSSES: 191,
    // KEY_KILL_YOURSELF: 79,
      KEY_CONTROL_DOM: 71,
    KEY_SUB: 70,
    KEY_ALT_TESTBED: 89,
    KEY_SUB_PING: 80,
    KEY_UPGRADE_COLOR: 85,
        /*KEY_ESC: 27,
      KEY_CONTROL_DOM: 72,
      KEY_ENTER: 13,
    KEY_UPGRADE_COLOR: 85,
      KEY_CLASS_TREE: 220,
      KEY_CLOSE: 190,
    KEY_GOD: 186,
      // KEY_KILL_YOURSELF: 79,
      KEY_FIREFOOD: 119,
      KEY_SPAWN: 13,
      KEY_RANDOM_BOSSES: 191,
      KEY_SPLIT: 32,
      KEY_LEFT: 65,
      KEY_UP: 87,
      KEY_RIGHT: 68,
    KEY_TP: 84,
      KEY_DOWN: 83,
      KEY_LEFT_ARROW: 37,
      // KEY_RANDOM_BOSSES: 191,
      KEY_RECORD: 90,
      KEY_UP_ARROW: 38,
      KEY_CHAT: 13,
      KEY_RIGHT_ARROW: 39,
      KEY_DOWN_ARROW: 40,
      KEY_AUTO_SPIN: 67,
      KEY_AUTO_FIRE: 69,
    KEY_OVER_RIDE: 82,
      KEY_SCREENSHOT: 81,
    KEY_UPGRADE_ATK: 49,
    KEY_UPGRADE_HTL: 50,
    KEY_UPGRADE_SPD: 51,
    KEY_UPGRADE_STR: 52,
    KEY_UPGRADE_PEN: 53,
    KEY_UPGRADE_DAM: 54,
    KEY_UPGRADE_RLD: 55,
    KEY_UPGRADE_MOB: 56,
    KEY_UPGRADE_RGN: 57,
    KEY_UPGRADE_SHI: 48,
      KEY_MOUSE_0: 32,
      KEY_MOUSE_1: 86,
      KEY_MOUSE_2: 16,
      KEY_CHOOSE_1: 84,
      KEY_CHOOSE_2: 71,
      KEY_CHOOSE_3: 89,
      KEY_CHOOSE_4: 72,
      KEY_CHOOSE_5: 85,
      KEY_CHOOSE_6: 74,
      KEY_CHOOSE_7: 73,
      KEY_CHOOSE_8: 75,
      KEY_LEVEL_UP: 77,
      KEY_FUCK_YOU: 1922,
      KEY_RESET_BASIC: 88,
      KEY_BASIC: 221,
  
      KEY_LEVEL_UP: 78,
        KEY_SUICIDE: 90,*/
  
    // Canvas
    screenWidth: window.innerWidth,
    screenHeight: window.innerHeight,
    gameWidth: 0,
    gameHeight: 0,
    xoffset: -0,
    yoffset: -0,
    gameStart: false,
    disconnected: false,
    died: false,
    kicked: false,
    continuity: false,
    startPingTime: 0,
    toggleMassState: 0,
    backgroundColor: "#f2fbff",
    lineColor: "#000000",
    showDebug: false,
    showTree: false,
    scrollX: 0,
    disconnectReason:
      "The connection was lost for an unknown reason. Maybe check your internet, or if the server is down? Or if the devs are updateing?",
    tankMenuColor: 100 + Math.round(Math.random() * 70),
    // =======================
    // Chat System.
    // =======================
    isChatMode: false,
    // =======================
  
    server: null,
    codeTable: [
      {
        z: "Private",
        local: "Developer Server",
        dvi: "DVI",
        glitch: "Glitch",
        os: "OpenShift",
        heroku: "Heroku",
        linode: "Linode",
        vultr: "Vultr",
        buyvm: "BuyVM",
        hetzner: "Hetzner",
        ovh: "OVH",
        vps: "VPS",
        c9: "Cloud 9"
      },
      {
        unknown: ["Unknown", null],
        local: ["Local", null],
        event: ["Event ", null],
        virginia: ["US East", -4],
        kkkkkk: ["Somewhere Playable", -4],
        ocean: ["In the ocean", -4],
        oregon: ["US West", -7],
        frankfurt: ["Europe", 2],
        sv: ["US West", -7],
        la: ["US West", -7],
        germany: ["Europe", 2],
        london: ["Europe", 1],
        singapore: ["Asia", 8],
        ct: ["US East", -4],
        us: ["US", -4],
        gbl: ["Global", -8]
      }
    ],
    timezone: new Date().getTimezoneOffset() / -60,
    servers: [
      // Other
        // https://476cfe7f25ca4ff5aa5310d56cb82f66.vfs.cloud9.us-east-2.amazonaws.com/
        // jbx-gcp-001.uc.r.appspot.com
      {             id: 'z',  type: '0unk', name: 'Private Server',         code: 'z-unknown',        at: 'private', untrusted: true },
        { visible: 2, id: 'dev', type: '0unk', name: 'Localhost', code: 'local-local', at: 'localhost:8080', secure: -1 },
        { visible: 0, id: 'cloud', type: '0unk', name: 'Cloud', code: 'heroku-kkkkkk', at: 'diep3.ngrok.io', untrusted: true, testing: true, prefer: true },
       // { visible: 0, id: 'server', type: '0unk', name: '4tdm', code: 'heroku-kkkkkk', at: 'public-arras.herokuapp.com', untrusted: true, testing: true, prefer: false },
        { visible: 1, id: 'ffa', type: '0unk', name: 'FFA', code: 'glitch-ocean', at: 'diep3-source-code.glitch.me', untrusted: true, testing: true, prefer: false},
         // { visible: 0, id: 'events',  type: '0unk', name: 'Domination',              code: 'heroku-kkkkkk',      at: 'public-arras-domination.herokuapp.com', untrusted: true, testing: true, prefer: false},
          { visible: 0, id: 'glitch',  type: '0unk', name: 'Testing Server',              code: 'glitch-unknown',      at: 'diep3-source-code.glitch.me', untrusted: true, testing: true, prefer: false},
          { visible: 0, id: 'cloud',  type: '0unk', name: 'Developer Server',              code: 'glitch-unknown',      at: 'devserver-9a5tb.ondigitalocean.app', untrusted: true, testing: true, prefer: false},
       { visible: 1, id: 'q',  type: '0unk', name: 'Official Private Server',         code: 'z-virginia',        at: 'arras-template.glitch.me', untrusted: true },
  
    ]
    
      .map((data, i) => ({ data, i }))
      .sort((a, b) => a.data.type < b.data.type ? -1 : b.data.type > a.data.type ? 1 : a.i - b.i)
      .map(({ data }) => data),
    partyLink: 0,
    mobile: /android|mobi/i.test(navigator.userAgent),
    showInvisible: false,
  }
  
  window['Arras'] = (data = true) => data || global
  export { global as global };
  //module.exports = global;
  //module.exports = global
  