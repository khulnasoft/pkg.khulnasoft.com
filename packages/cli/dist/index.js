var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __esm = (fn, res) => function __init() {
  return fn && (res = (0, fn[__getOwnPropNames(fn)[0]])(fn = 0)), res;
};
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/chunks/prompt.mjs
var prompt_exports = {};
__export(prompt_exports, {
  kCancel: () => kCancel,
  prompt: () => prompt
});
import "util";
import g, { stdin, stdout } from "process";
import f from "readline";
import { WriteStream } from "tty";
function getDefaultExportFromCjs(x2) {
  return x2 && x2.__esModule && Object.prototype.hasOwnProperty.call(x2, "default") ? x2["default"] : x2;
}
function requireSrc() {
  if (hasRequiredSrc) return src;
  hasRequiredSrc = 1;
  const ESC = "\x1B";
  const CSI = `${ESC}[`;
  const beep = "\x07";
  const cursor = {
    to(x2, y3) {
      if (!y3) return `${CSI}${x2 + 1}G`;
      return `${CSI}${y3 + 1};${x2 + 1}H`;
    },
    move(x2, y3) {
      let ret = "";
      if (x2 < 0) ret += `${CSI}${-x2}D`;
      else if (x2 > 0) ret += `${CSI}${x2}C`;
      if (y3 < 0) ret += `${CSI}${-y3}A`;
      else if (y3 > 0) ret += `${CSI}${y3}B`;
      return ret;
    },
    up: (count = 1) => `${CSI}${count}A`,
    down: (count = 1) => `${CSI}${count}B`,
    forward: (count = 1) => `${CSI}${count}C`,
    backward: (count = 1) => `${CSI}${count}D`,
    nextLine: (count = 1) => `${CSI}E`.repeat(count),
    prevLine: (count = 1) => `${CSI}F`.repeat(count),
    left: `${CSI}G`,
    hide: `${CSI}?25l`,
    show: `${CSI}?25h`,
    save: `${ESC}7`,
    restore: `${ESC}8`
  };
  const scroll = {
    up: (count = 1) => `${CSI}S`.repeat(count),
    down: (count = 1) => `${CSI}T`.repeat(count)
  };
  const erase = {
    screen: `${CSI}2J`,
    up: (count = 1) => `${CSI}1J`.repeat(count),
    down: (count = 1) => `${CSI}J`.repeat(count),
    line: `${CSI}2K`,
    lineEnd: `${CSI}K`,
    lineStart: `${CSI}1K`,
    lines(count) {
      let clear = "";
      for (let i2 = 0; i2 < count; i2++)
        clear += this.line + (i2 < count - 1 ? cursor.up() : "");
      if (count)
        clear += cursor.left;
      return clear;
    }
  };
  src = { cursor, scroll, erase, beep };
  return src;
}
function requirePicocolors() {
  if (hasRequiredPicocolors) return picocolors.exports;
  hasRequiredPicocolors = 1;
  let p = process || {}, argv2 = p.argv || [], env2 = p.env || {};
  let isColorSupported2 = !(!!env2.NO_COLOR || argv2.includes("--no-color")) && (!!env2.FORCE_COLOR || argv2.includes("--color") || p.platform === "win32" || (p.stdout || {}).isTTY && env2.TERM !== "dumb" || !!env2.CI);
  let formatter = (open, close, replace = open) => (input) => {
    let string = "" + input, index = string.indexOf(close, open.length);
    return ~index ? open + replaceClose2(string, close, replace, index) + close : open + string + close;
  };
  let replaceClose2 = (string, close, replace, index) => {
    let result = "", cursor = 0;
    do {
      result += string.substring(cursor, index) + replace;
      cursor = index + close.length;
      index = string.indexOf(close, cursor);
    } while (~index);
    return result + string.substring(cursor);
  };
  let createColors2 = (enabled = isColorSupported2) => {
    let f3 = enabled ? formatter : () => String;
    return {
      isColorSupported: enabled,
      reset: f3("\x1B[0m", "\x1B[0m"),
      bold: f3("\x1B[1m", "\x1B[22m", "\x1B[22m\x1B[1m"),
      dim: f3("\x1B[2m", "\x1B[22m", "\x1B[22m\x1B[2m"),
      italic: f3("\x1B[3m", "\x1B[23m"),
      underline: f3("\x1B[4m", "\x1B[24m"),
      inverse: f3("\x1B[7m", "\x1B[27m"),
      hidden: f3("\x1B[8m", "\x1B[28m"),
      strikethrough: f3("\x1B[9m", "\x1B[29m"),
      black: f3("\x1B[30m", "\x1B[39m"),
      red: f3("\x1B[31m", "\x1B[39m"),
      green: f3("\x1B[32m", "\x1B[39m"),
      yellow: f3("\x1B[33m", "\x1B[39m"),
      blue: f3("\x1B[34m", "\x1B[39m"),
      magenta: f3("\x1B[35m", "\x1B[39m"),
      cyan: f3("\x1B[36m", "\x1B[39m"),
      white: f3("\x1B[37m", "\x1B[39m"),
      gray: f3("\x1B[90m", "\x1B[39m"),
      bgBlack: f3("\x1B[40m", "\x1B[49m"),
      bgRed: f3("\x1B[41m", "\x1B[49m"),
      bgGreen: f3("\x1B[42m", "\x1B[49m"),
      bgYellow: f3("\x1B[43m", "\x1B[49m"),
      bgBlue: f3("\x1B[44m", "\x1B[49m"),
      bgMagenta: f3("\x1B[45m", "\x1B[49m"),
      bgCyan: f3("\x1B[46m", "\x1B[49m"),
      bgWhite: f3("\x1B[47m", "\x1B[49m"),
      blackBright: f3("\x1B[90m", "\x1B[39m"),
      redBright: f3("\x1B[91m", "\x1B[39m"),
      greenBright: f3("\x1B[92m", "\x1B[39m"),
      yellowBright: f3("\x1B[93m", "\x1B[39m"),
      blueBright: f3("\x1B[94m", "\x1B[39m"),
      magentaBright: f3("\x1B[95m", "\x1B[39m"),
      cyanBright: f3("\x1B[96m", "\x1B[39m"),
      whiteBright: f3("\x1B[97m", "\x1B[39m"),
      bgBlackBright: f3("\x1B[100m", "\x1B[49m"),
      bgRedBright: f3("\x1B[101m", "\x1B[49m"),
      bgGreenBright: f3("\x1B[102m", "\x1B[49m"),
      bgYellowBright: f3("\x1B[103m", "\x1B[49m"),
      bgBlueBright: f3("\x1B[104m", "\x1B[49m"),
      bgMagentaBright: f3("\x1B[105m", "\x1B[49m"),
      bgCyanBright: f3("\x1B[106m", "\x1B[49m"),
      bgWhiteBright: f3("\x1B[107m", "\x1B[49m")
    };
  };
  picocolors.exports = createColors2();
  picocolors.exports.createColors = createColors2;
  return picocolors.exports;
}
function J({ onlyFirst: t2 = false } = {}) {
  const F3 = ["[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?(?:\\u0007|\\u001B\\u005C|\\u009C))", "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"].join("|");
  return new RegExp(F3, t2 ? void 0 : "g");
}
function T$1(t2) {
  if (typeof t2 != "string") throw new TypeError(`Expected a \`string\`, got \`${typeof t2}\``);
  return t2.replace(Q, "");
}
function O(t2) {
  return t2 && t2.__esModule && Object.prototype.hasOwnProperty.call(t2, "default") ? t2.default : t2;
}
function A$1(t2, u3 = {}) {
  if (typeof t2 != "string" || t2.length === 0 || (u3 = { ambiguousIsNarrow: true, ...u3 }, t2 = T$1(t2), t2.length === 0)) return 0;
  t2 = t2.replace(FD(), "  ");
  const F3 = u3.ambiguousIsNarrow ? 1 : 2;
  let e2 = 0;
  for (const s2 of t2) {
    const i2 = s2.codePointAt(0);
    if (i2 <= 31 || i2 >= 127 && i2 <= 159 || i2 >= 768 && i2 <= 879) continue;
    switch (DD.eastAsianWidth(s2)) {
      case "F":
      case "W":
        e2 += 2;
        break;
      case "A":
        e2 += F3;
        break;
      default:
        e2 += 1;
    }
  }
  return e2;
}
function sD() {
  const t2 = /* @__PURE__ */ new Map();
  for (const [u3, F3] of Object.entries(r)) {
    for (const [e2, s2] of Object.entries(F3)) r[e2] = { open: `\x1B[${s2[0]}m`, close: `\x1B[${s2[1]}m` }, F3[e2] = r[e2], t2.set(s2[0], s2[1]);
    Object.defineProperty(r, u3, { value: F3, enumerable: false });
  }
  return Object.defineProperty(r, "codes", { value: t2, enumerable: false }), r.color.close = "\x1B[39m", r.bgColor.close = "\x1B[49m", r.color.ansi = L$1(), r.color.ansi256 = N(), r.color.ansi16m = I(), r.bgColor.ansi = L$1(m), r.bgColor.ansi256 = N(m), r.bgColor.ansi16m = I(m), Object.defineProperties(r, { rgbToAnsi256: { value: (u3, F3, e2) => u3 === F3 && F3 === e2 ? u3 < 8 ? 16 : u3 > 248 ? 231 : Math.round((u3 - 8) / 247 * 24) + 232 : 16 + 36 * Math.round(u3 / 255 * 5) + 6 * Math.round(F3 / 255 * 5) + Math.round(e2 / 255 * 5), enumerable: false }, hexToRgb: { value: (u3) => {
    const F3 = /[a-f\d]{6}|[a-f\d]{3}/i.exec(u3.toString(16));
    if (!F3) return [0, 0, 0];
    let [e2] = F3;
    e2.length === 3 && (e2 = [...e2].map((i2) => i2 + i2).join(""));
    const s2 = Number.parseInt(e2, 16);
    return [s2 >> 16 & 255, s2 >> 8 & 255, s2 & 255];
  }, enumerable: false }, hexToAnsi256: { value: (u3) => r.rgbToAnsi256(...r.hexToRgb(u3)), enumerable: false }, ansi256ToAnsi: { value: (u3) => {
    if (u3 < 8) return 30 + u3;
    if (u3 < 16) return 90 + (u3 - 8);
    let F3, e2, s2;
    if (u3 >= 232) F3 = ((u3 - 232) * 10 + 8) / 255, e2 = F3, s2 = F3;
    else {
      u3 -= 16;
      const C3 = u3 % 36;
      F3 = Math.floor(u3 / 36) / 5, e2 = Math.floor(C3 / 6) / 5, s2 = C3 % 6 / 5;
    }
    const i2 = Math.max(F3, e2, s2) * 2;
    if (i2 === 0) return 30;
    let D2 = 30 + (Math.round(s2) << 2 | Math.round(e2) << 1 | Math.round(F3));
    return i2 === 2 && (D2 += 60), D2;
  }, enumerable: false }, rgbToAnsi: { value: (u3, F3, e2) => r.ansi256ToAnsi(r.rgbToAnsi256(u3, F3, e2)), enumerable: false }, hexToAnsi: { value: (u3) => r.ansi256ToAnsi(r.hexToAnsi256(u3)), enumerable: false } }), r;
}
function G(t2, u3, F3) {
  return String(t2).normalize().replace(/\r\n/g, `
`).split(`
`).map((e2) => oD(e2, u3, F3)).join(`
`);
}
function k$1(t2, u3) {
  if (typeof t2 == "string") return c.aliases.get(t2) === u3;
  for (const F3 of t2) if (F3 !== void 0 && k$1(F3, u3)) return true;
  return false;
}
function lD(t2, u3) {
  if (t2 === u3) return;
  const F3 = t2.split(`
`), e2 = u3.split(`
`), s2 = [];
  for (let i2 = 0; i2 < Math.max(F3.length, e2.length); i2++) F3[i2] !== e2[i2] && s2.push(i2);
  return s2;
}
function d$1(t2, u3) {
  const F3 = t2;
  F3.isTTY && F3.setRawMode(u3);
}
function ce() {
  return g.platform !== "win32" ? g.env.TERM !== "linux" : !!g.env.CI || !!g.env.WT_SESSION || !!g.env.TERMINUS_SUBLIME || g.env.ConEmuTask === "{cmd::Cmder}" || g.env.TERM_PROGRAM === "Terminus-Sublime" || g.env.TERM_PROGRAM === "vscode" || g.env.TERM === "xterm-256color" || g.env.TERM === "alacritty" || g.env.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
async function prompt(message, opts = {}) {
  const handleCancel = (value) => {
    if (typeof value !== "symbol" || value.toString() !== "Symbol(clack:cancel)") {
      return value;
    }
    switch (opts.cancel) {
      case "reject": {
        const error = new Error("Prompt cancelled.");
        error.name = "ConsolaPromptCancelledError";
        if (Error.captureStackTrace) {
          Error.captureStackTrace(error, prompt);
        }
        throw error;
      }
      case "undefined": {
        return void 0;
      }
      case "null": {
        return null;
      }
      case "symbol": {
        return kCancel;
      }
      default:
      case "default": {
        return opts.default ?? opts.initial;
      }
    }
  };
  if (!opts.type || opts.type === "text") {
    return await he({
      message,
      defaultValue: opts.default,
      placeholder: opts.placeholder,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "confirm") {
    return await ye({
      message,
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "select") {
    return await ve({
      message,
      options: opts.options.map(
        (o3) => typeof o3 === "string" ? { value: o3, label: o3 } : o3
      ),
      initialValue: opts.initial
    }).then(handleCancel);
  }
  if (opts.type === "multiselect") {
    return await fe({
      message,
      options: opts.options.map(
        (o3) => typeof o3 === "string" ? { value: o3, label: o3 } : o3
      ),
      required: opts.required,
      initialValues: opts.initial
    }).then(handleCancel);
  }
  throw new Error(`Unknown prompt type: ${opts.type}`);
}
var src, hasRequiredSrc, srcExports, picocolors, hasRequiredPicocolors, picocolorsExports, e, Q, P$1, X, DD, uD, FD, m, L$1, N, I, r, tD, eD, iD, v, CD, w$1, W$1, rD, R, y, V$1, z, ED, _, nD, oD, aD, c, S, AD, pD, h, x, fD, bD, mD, Y, wD, SD, $D, q, jD, PD, V, u, le, L, W2, C, o, d, k, P, A, T, F, w, B, he, ye, ve, fe, kCancel;
var init_prompt = __esm({
  "../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/chunks/prompt.mjs"() {
    "use strict";
    srcExports = requireSrc();
    picocolors = { exports: {} };
    picocolorsExports = /* @__PURE__ */ requirePicocolors();
    e = /* @__PURE__ */ getDefaultExportFromCjs(picocolorsExports);
    Q = J();
    P$1 = { exports: {} };
    (function(t2) {
      var u3 = {};
      t2.exports = u3, u3.eastAsianWidth = function(e2) {
        var s2 = e2.charCodeAt(0), i2 = e2.length == 2 ? e2.charCodeAt(1) : 0, D2 = s2;
        return 55296 <= s2 && s2 <= 56319 && 56320 <= i2 && i2 <= 57343 && (s2 &= 1023, i2 &= 1023, D2 = s2 << 10 | i2, D2 += 65536), D2 == 12288 || 65281 <= D2 && D2 <= 65376 || 65504 <= D2 && D2 <= 65510 ? "F" : D2 == 8361 || 65377 <= D2 && D2 <= 65470 || 65474 <= D2 && D2 <= 65479 || 65482 <= D2 && D2 <= 65487 || 65490 <= D2 && D2 <= 65495 || 65498 <= D2 && D2 <= 65500 || 65512 <= D2 && D2 <= 65518 ? "H" : 4352 <= D2 && D2 <= 4447 || 4515 <= D2 && D2 <= 4519 || 4602 <= D2 && D2 <= 4607 || 9001 <= D2 && D2 <= 9002 || 11904 <= D2 && D2 <= 11929 || 11931 <= D2 && D2 <= 12019 || 12032 <= D2 && D2 <= 12245 || 12272 <= D2 && D2 <= 12283 || 12289 <= D2 && D2 <= 12350 || 12353 <= D2 && D2 <= 12438 || 12441 <= D2 && D2 <= 12543 || 12549 <= D2 && D2 <= 12589 || 12593 <= D2 && D2 <= 12686 || 12688 <= D2 && D2 <= 12730 || 12736 <= D2 && D2 <= 12771 || 12784 <= D2 && D2 <= 12830 || 12832 <= D2 && D2 <= 12871 || 12880 <= D2 && D2 <= 13054 || 13056 <= D2 && D2 <= 19903 || 19968 <= D2 && D2 <= 42124 || 42128 <= D2 && D2 <= 42182 || 43360 <= D2 && D2 <= 43388 || 44032 <= D2 && D2 <= 55203 || 55216 <= D2 && D2 <= 55238 || 55243 <= D2 && D2 <= 55291 || 63744 <= D2 && D2 <= 64255 || 65040 <= D2 && D2 <= 65049 || 65072 <= D2 && D2 <= 65106 || 65108 <= D2 && D2 <= 65126 || 65128 <= D2 && D2 <= 65131 || 110592 <= D2 && D2 <= 110593 || 127488 <= D2 && D2 <= 127490 || 127504 <= D2 && D2 <= 127546 || 127552 <= D2 && D2 <= 127560 || 127568 <= D2 && D2 <= 127569 || 131072 <= D2 && D2 <= 194367 || 177984 <= D2 && D2 <= 196605 || 196608 <= D2 && D2 <= 262141 ? "W" : 32 <= D2 && D2 <= 126 || 162 <= D2 && D2 <= 163 || 165 <= D2 && D2 <= 166 || D2 == 172 || D2 == 175 || 10214 <= D2 && D2 <= 10221 || 10629 <= D2 && D2 <= 10630 ? "Na" : D2 == 161 || D2 == 164 || 167 <= D2 && D2 <= 168 || D2 == 170 || 173 <= D2 && D2 <= 174 || 176 <= D2 && D2 <= 180 || 182 <= D2 && D2 <= 186 || 188 <= D2 && D2 <= 191 || D2 == 198 || D2 == 208 || 215 <= D2 && D2 <= 216 || 222 <= D2 && D2 <= 225 || D2 == 230 || 232 <= D2 && D2 <= 234 || 236 <= D2 && D2 <= 237 || D2 == 240 || 242 <= D2 && D2 <= 243 || 247 <= D2 && D2 <= 250 || D2 == 252 || D2 == 254 || D2 == 257 || D2 == 273 || D2 == 275 || D2 == 283 || 294 <= D2 && D2 <= 295 || D2 == 299 || 305 <= D2 && D2 <= 307 || D2 == 312 || 319 <= D2 && D2 <= 322 || D2 == 324 || 328 <= D2 && D2 <= 331 || D2 == 333 || 338 <= D2 && D2 <= 339 || 358 <= D2 && D2 <= 359 || D2 == 363 || D2 == 462 || D2 == 464 || D2 == 466 || D2 == 468 || D2 == 470 || D2 == 472 || D2 == 474 || D2 == 476 || D2 == 593 || D2 == 609 || D2 == 708 || D2 == 711 || 713 <= D2 && D2 <= 715 || D2 == 717 || D2 == 720 || 728 <= D2 && D2 <= 731 || D2 == 733 || D2 == 735 || 768 <= D2 && D2 <= 879 || 913 <= D2 && D2 <= 929 || 931 <= D2 && D2 <= 937 || 945 <= D2 && D2 <= 961 || 963 <= D2 && D2 <= 969 || D2 == 1025 || 1040 <= D2 && D2 <= 1103 || D2 == 1105 || D2 == 8208 || 8211 <= D2 && D2 <= 8214 || 8216 <= D2 && D2 <= 8217 || 8220 <= D2 && D2 <= 8221 || 8224 <= D2 && D2 <= 8226 || 8228 <= D2 && D2 <= 8231 || D2 == 8240 || 8242 <= D2 && D2 <= 8243 || D2 == 8245 || D2 == 8251 || D2 == 8254 || D2 == 8308 || D2 == 8319 || 8321 <= D2 && D2 <= 8324 || D2 == 8364 || D2 == 8451 || D2 == 8453 || D2 == 8457 || D2 == 8467 || D2 == 8470 || 8481 <= D2 && D2 <= 8482 || D2 == 8486 || D2 == 8491 || 8531 <= D2 && D2 <= 8532 || 8539 <= D2 && D2 <= 8542 || 8544 <= D2 && D2 <= 8555 || 8560 <= D2 && D2 <= 8569 || D2 == 8585 || 8592 <= D2 && D2 <= 8601 || 8632 <= D2 && D2 <= 8633 || D2 == 8658 || D2 == 8660 || D2 == 8679 || D2 == 8704 || 8706 <= D2 && D2 <= 8707 || 8711 <= D2 && D2 <= 8712 || D2 == 8715 || D2 == 8719 || D2 == 8721 || D2 == 8725 || D2 == 8730 || 8733 <= D2 && D2 <= 8736 || D2 == 8739 || D2 == 8741 || 8743 <= D2 && D2 <= 8748 || D2 == 8750 || 8756 <= D2 && D2 <= 8759 || 8764 <= D2 && D2 <= 8765 || D2 == 8776 || D2 == 8780 || D2 == 8786 || 8800 <= D2 && D2 <= 8801 || 8804 <= D2 && D2 <= 8807 || 8810 <= D2 && D2 <= 8811 || 8814 <= D2 && D2 <= 8815 || 8834 <= D2 && D2 <= 8835 || 8838 <= D2 && D2 <= 8839 || D2 == 8853 || D2 == 8857 || D2 == 8869 || D2 == 8895 || D2 == 8978 || 9312 <= D2 && D2 <= 9449 || 9451 <= D2 && D2 <= 9547 || 9552 <= D2 && D2 <= 9587 || 9600 <= D2 && D2 <= 9615 || 9618 <= D2 && D2 <= 9621 || 9632 <= D2 && D2 <= 9633 || 9635 <= D2 && D2 <= 9641 || 9650 <= D2 && D2 <= 9651 || 9654 <= D2 && D2 <= 9655 || 9660 <= D2 && D2 <= 9661 || 9664 <= D2 && D2 <= 9665 || 9670 <= D2 && D2 <= 9672 || D2 == 9675 || 9678 <= D2 && D2 <= 9681 || 9698 <= D2 && D2 <= 9701 || D2 == 9711 || 9733 <= D2 && D2 <= 9734 || D2 == 9737 || 9742 <= D2 && D2 <= 9743 || 9748 <= D2 && D2 <= 9749 || D2 == 9756 || D2 == 9758 || D2 == 9792 || D2 == 9794 || 9824 <= D2 && D2 <= 9825 || 9827 <= D2 && D2 <= 9829 || 9831 <= D2 && D2 <= 9834 || 9836 <= D2 && D2 <= 9837 || D2 == 9839 || 9886 <= D2 && D2 <= 9887 || 9918 <= D2 && D2 <= 9919 || 9924 <= D2 && D2 <= 9933 || 9935 <= D2 && D2 <= 9953 || D2 == 9955 || 9960 <= D2 && D2 <= 9983 || D2 == 10045 || D2 == 10071 || 10102 <= D2 && D2 <= 10111 || 11093 <= D2 && D2 <= 11097 || 12872 <= D2 && D2 <= 12879 || 57344 <= D2 && D2 <= 63743 || 65024 <= D2 && D2 <= 65039 || D2 == 65533 || 127232 <= D2 && D2 <= 127242 || 127248 <= D2 && D2 <= 127277 || 127280 <= D2 && D2 <= 127337 || 127344 <= D2 && D2 <= 127386 || 917760 <= D2 && D2 <= 917999 || 983040 <= D2 && D2 <= 1048573 || 1048576 <= D2 && D2 <= 1114109 ? "A" : "N";
      }, u3.characterLength = function(e2) {
        var s2 = this.eastAsianWidth(e2);
        return s2 == "F" || s2 == "W" || s2 == "A" ? 2 : 1;
      };
      function F3(e2) {
        return e2.match(/[\uD800-\uDBFF][\uDC00-\uDFFF]|[^\uD800-\uDFFF]/g) || [];
      }
      u3.length = function(e2) {
        for (var s2 = F3(e2), i2 = 0, D2 = 0; D2 < s2.length; D2++) i2 = i2 + this.characterLength(s2[D2]);
        return i2;
      }, u3.slice = function(e2, s2, i2) {
        textLen = u3.length(e2), s2 = s2 || 0, i2 = i2 || 1, s2 < 0 && (s2 = textLen + s2), i2 < 0 && (i2 = textLen + i2);
        for (var D2 = "", C3 = 0, o3 = F3(e2), E = 0; E < o3.length; E++) {
          var a2 = o3[E], n2 = u3.length(a2);
          if (C3 >= s2 - (n2 == 2 ? 1 : 0)) if (C3 + n2 <= i2) D2 += a2;
          else break;
          C3 += n2;
        }
        return D2;
      };
    })(P$1);
    X = P$1.exports;
    DD = O(X);
    uD = function() {
      return /\uD83C\uDFF4\uDB40\uDC67\uDB40\uDC62(?:\uDB40\uDC77\uDB40\uDC6C\uDB40\uDC73|\uDB40\uDC73\uDB40\uDC63\uDB40\uDC74|\uDB40\uDC65\uDB40\uDC6E\uDB40\uDC67)\uDB40\uDC7F|(?:\uD83E\uDDD1\uD83C\uDFFF\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFF\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFE])|(?:\uD83E\uDDD1\uD83C\uDFFE\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFE\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFD\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFD\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFC\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFC\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|(?:\uD83E\uDDD1\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1|\uD83D\uDC69\uD83C\uDFFB\u200D\uD83E\uDD1D\u200D(?:\uD83D[\uDC68\uDC69]))(?:\uD83C[\uDFFC-\uDFFF])|\uD83D\uDC68(?:\uD83C\uDFFB(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFC-\uDFFF])|[\u2695\u2696\u2708]\uFE0F|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))?|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFF]))|\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D)?\uD83D\uDC68|(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFE])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB-\uDFFD\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83E\uDD1D\u200D\uD83D\uDC68(?:\uD83C[\uDFFB\uDFFD-\uDFFF])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])\uFE0F|\u200D(?:(?:\uD83D[\uDC68\uDC69])\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D[\uDC66\uDC67])|\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC)?|(?:\uD83D\uDC69(?:\uD83C\uDFFB\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|(?:\uD83C[\uDFFC-\uDFFF])\u200D\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69]))|\uD83E\uDDD1(?:\uD83C[\uDFFB-\uDFFF])\u200D\uD83E\uDD1D\u200D\uD83E\uDDD1)(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67]))|\uD83D\uDC69(?:\u200D(?:\u2764\uFE0F\u200D(?:\uD83D\uDC8B\u200D(?:\uD83D[\uDC68\uDC69])|\uD83D[\uDC68\uDC69])|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83E\uDDD1(?:\u200D(?:\uD83E\uDD1D\u200D\uD83E\uDDD1|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFF\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFE\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFD\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFC\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD])|\uD83C\uDFFB\u200D(?:\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E[\uDDAF-\uDDB3\uDDBC\uDDBD]))|\uD83D\uDC69\u200D\uD83D\uDC66\u200D\uD83D\uDC66|\uD83D\uDC69\u200D\uD83D\uDC69\u200D(?:\uD83D[\uDC66\uDC67])|\uD83D\uDC69\u200D\uD83D\uDC67\u200D(?:\uD83D[\uDC66\uDC67])|(?:\uD83D\uDC41\uFE0F\u200D\uD83D\uDDE8|\uD83E\uDDD1(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDC69(?:\uD83C\uDFFF\u200D[\u2695\u2696\u2708]|\uD83C\uDFFE\u200D[\u2695\u2696\u2708]|\uD83C\uDFFD\u200D[\u2695\u2696\u2708]|\uD83C\uDFFC\u200D[\u2695\u2696\u2708]|\uD83C\uDFFB\u200D[\u2695\u2696\u2708]|\u200D[\u2695\u2696\u2708])|\uD83D\uDE36\u200D\uD83C\uDF2B|\uD83C\uDFF3\uFE0F\u200D\u26A7|\uD83D\uDC3B\u200D\u2744|(?:(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF])\u200D[\u2640\u2642]|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])\u200D[\u2640\u2642]|\uD83C\uDFF4\u200D\u2620|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])\u200D[\u2640\u2642]|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u2600-\u2604\u260E\u2611\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26B0\u26B1\u26C8\u26CF\u26D1\u26D3\u26E9\u26F0\u26F1\u26F4\u26F7\u26F8\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u3030\u303D\u3297\u3299]|\uD83C[\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]|\uD83D[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3])\uFE0F|\uD83C\uDFF3\uFE0F\u200D\uD83C\uDF08|\uD83D\uDC69\u200D\uD83D\uDC67|\uD83D\uDC69\u200D\uD83D\uDC66|\uD83D\uDE35\u200D\uD83D\uDCAB|\uD83D\uDE2E\u200D\uD83D\uDCA8|\uD83D\uDC15\u200D\uD83E\uDDBA|\uD83E\uDDD1(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83D\uDC69(?:\uD83C\uDFFF|\uD83C\uDFFE|\uD83C\uDFFD|\uD83C\uDFFC|\uD83C\uDFFB)?|\uD83C\uDDFD\uD83C\uDDF0|\uD83C\uDDF6\uD83C\uDDE6|\uD83C\uDDF4\uD83C\uDDF2|\uD83D\uDC08\u200D\u2B1B|\u2764\uFE0F\u200D(?:\uD83D\uDD25|\uD83E\uDE79)|\uD83D\uDC41\uFE0F|\uD83C\uDFF3\uFE0F|\uD83C\uDDFF(?:\uD83C[\uDDE6\uDDF2\uDDFC])|\uD83C\uDDFE(?:\uD83C[\uDDEA\uDDF9])|\uD83C\uDDFC(?:\uD83C[\uDDEB\uDDF8])|\uD83C\uDDFB(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA])|\uD83C\uDDFA(?:\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF])|\uD83C\uDDF9(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF])|\uD83C\uDDF8(?:\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF])|\uD83C\uDDF7(?:\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC])|\uD83C\uDDF5(?:\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE])|\uD83C\uDDF3(?:\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF])|\uD83C\uDDF2(?:\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF])|\uD83C\uDDF1(?:\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE])|\uD83C\uDDF0(?:\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF])|\uD83C\uDDEF(?:\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5])|\uD83C\uDDEE(?:\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9])|\uD83C\uDDED(?:\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA])|\uD83C\uDDEC(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE])|\uD83C\uDDEB(?:\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7])|\uD83C\uDDEA(?:\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA])|\uD83C\uDDE9(?:\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF])|\uD83C\uDDE8(?:\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF5\uDDF7\uDDFA-\uDDFF])|\uD83C\uDDE7(?:\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF])|\uD83C\uDDE6(?:\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF])|[#\*0-9]\uFE0F\u20E3|\u2764\uFE0F|(?:\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD])(?:\uD83C[\uDFFB-\uDFFF])|(?:\u26F9|\uD83C[\uDFCB\uDFCC]|\uD83D\uDD75)(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|\uD83C\uDFF4|(?:[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5])(?:\uD83C[\uDFFB-\uDFFF])|(?:[\u261D\u270C\u270D]|\uD83D[\uDD74\uDD90])(?:\uFE0F|\uD83C[\uDFFB-\uDFFF])|[\u270A\u270B]|\uD83C[\uDF85\uDFC2\uDFC7]|\uD83D[\uDC08\uDC15\uDC3B\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE2E\uDE35\uDE36\uDE4C\uDE4F\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1C\uDD1E\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5]|\uD83C[\uDFC3\uDFC4\uDFCA]|\uD83D[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4-\uDEB6]|\uD83E[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD-\uDDCF\uDDD4\uDDD6-\uDDDD]|\uD83D\uDC6F|\uD83E[\uDD3C\uDDDE\uDDDF]|[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0D\uDD0E\uDD10-\uDD17\uDD1D\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78\uDD7A-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCB\uDDD0\uDDE0-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6]|(?:[\u231A\u231B\u23E9-\u23EC\u23F0\u23F3\u25FD\u25FE\u2614\u2615\u2648-\u2653\u267F\u2693\u26A1\u26AA\u26AB\u26BD\u26BE\u26C4\u26C5\u26CE\u26D4\u26EA\u26F2\u26F3\u26F5\u26FA\u26FD\u2705\u270A\u270B\u2728\u274C\u274E\u2753-\u2755\u2757\u2795-\u2797\u27B0\u27BF\u2B1B\u2B1C\u2B50\u2B55]|\uD83C[\uDC04\uDCCF\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF7C\uDF7E-\uDF93\uDFA0-\uDFCA\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF4\uDFF8-\uDFFF]|\uD83D[\uDC00-\uDC3E\uDC40\uDC42-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDD7A\uDD95\uDD96\uDDA4\uDDFB-\uDE4F\uDE80-\uDEC5\uDECC\uDED0-\uDED2\uDED5-\uDED7\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])|(?:[#\*0-9\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23E9-\u23F3\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB-\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u261D\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692-\u2697\u2699\u269B\u269C\u26A0\u26A1\u26A7\u26AA\u26AB\u26B0\u26B1\u26BD\u26BE\u26C4\u26C5\u26C8\u26CE\u26CF\u26D1\u26D3\u26D4\u26E9\u26EA\u26F0-\u26F5\u26F7-\u26FA\u26FD\u2702\u2705\u2708-\u270D\u270F\u2712\u2714\u2716\u271D\u2721\u2728\u2733\u2734\u2744\u2747\u274C\u274E\u2753-\u2755\u2757\u2763\u2764\u2795-\u2797\u27A1\u27B0\u27BF\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B50\u2B55\u3030\u303D\u3297\u3299]|\uD83C[\uDC04\uDCCF\uDD70\uDD71\uDD7E\uDD7F\uDD8E\uDD91-\uDD9A\uDDE6-\uDDFF\uDE01\uDE02\uDE1A\uDE2F\uDE32-\uDE3A\uDE50\uDE51\uDF00-\uDF21\uDF24-\uDF93\uDF96\uDF97\uDF99-\uDF9B\uDF9E-\uDFF0\uDFF3-\uDFF5\uDFF7-\uDFFF]|\uD83D[\uDC00-\uDCFD\uDCFF-\uDD3D\uDD49-\uDD4E\uDD50-\uDD67\uDD6F\uDD70\uDD73-\uDD7A\uDD87\uDD8A-\uDD8D\uDD90\uDD95\uDD96\uDDA4\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA-\uDE4F\uDE80-\uDEC5\uDECB-\uDED2\uDED5-\uDED7\uDEE0-\uDEE5\uDEE9\uDEEB\uDEEC\uDEF0\uDEF3-\uDEFC\uDFE0-\uDFEB]|\uD83E[\uDD0C-\uDD3A\uDD3C-\uDD45\uDD47-\uDD78\uDD7A-\uDDCB\uDDCD-\uDDFF\uDE70-\uDE74\uDE78-\uDE7A\uDE80-\uDE86\uDE90-\uDEA8\uDEB0-\uDEB6\uDEC0-\uDEC2\uDED0-\uDED6])\uFE0F|(?:[\u261D\u26F9\u270A-\u270D]|\uD83C[\uDF85\uDFC2-\uDFC4\uDFC7\uDFCA-\uDFCC]|\uD83D[\uDC42\uDC43\uDC46-\uDC50\uDC66-\uDC78\uDC7C\uDC81-\uDC83\uDC85-\uDC87\uDC8F\uDC91\uDCAA\uDD74\uDD75\uDD7A\uDD90\uDD95\uDD96\uDE45-\uDE47\uDE4B-\uDE4F\uDEA3\uDEB4-\uDEB6\uDEC0\uDECC]|\uD83E[\uDD0C\uDD0F\uDD18-\uDD1F\uDD26\uDD30-\uDD39\uDD3C-\uDD3E\uDD77\uDDB5\uDDB6\uDDB8\uDDB9\uDDBB\uDDCD-\uDDCF\uDDD1-\uDDDD])/g;
    };
    FD = O(uD);
    m = 10;
    L$1 = (t2 = 0) => (u3) => `\x1B[${u3 + t2}m`;
    N = (t2 = 0) => (u3) => `\x1B[${38 + t2};5;${u3}m`;
    I = (t2 = 0) => (u3, F3, e2) => `\x1B[${38 + t2};2;${u3};${F3};${e2}m`;
    r = { modifier: { reset: [0, 0], bold: [1, 22], dim: [2, 22], italic: [3, 23], underline: [4, 24], overline: [53, 55], inverse: [7, 27], hidden: [8, 28], strikethrough: [9, 29] }, color: { black: [30, 39], red: [31, 39], green: [32, 39], yellow: [33, 39], blue: [34, 39], magenta: [35, 39], cyan: [36, 39], white: [37, 39], blackBright: [90, 39], gray: [90, 39], grey: [90, 39], redBright: [91, 39], greenBright: [92, 39], yellowBright: [93, 39], blueBright: [94, 39], magentaBright: [95, 39], cyanBright: [96, 39], whiteBright: [97, 39] }, bgColor: { bgBlack: [40, 49], bgRed: [41, 49], bgGreen: [42, 49], bgYellow: [43, 49], bgBlue: [44, 49], bgMagenta: [45, 49], bgCyan: [46, 49], bgWhite: [47, 49], bgBlackBright: [100, 49], bgGray: [100, 49], bgGrey: [100, 49], bgRedBright: [101, 49], bgGreenBright: [102, 49], bgYellowBright: [103, 49], bgBlueBright: [104, 49], bgMagentaBright: [105, 49], bgCyanBright: [106, 49], bgWhiteBright: [107, 49] } };
    Object.keys(r.modifier);
    tD = Object.keys(r.color);
    eD = Object.keys(r.bgColor);
    [...tD, ...eD];
    iD = sD();
    v = /* @__PURE__ */ new Set(["\x1B", "\x9B"]);
    CD = 39;
    w$1 = "\x07";
    W$1 = "[";
    rD = "]";
    R = "m";
    y = `${rD}8;;`;
    V$1 = (t2) => `${v.values().next().value}${W$1}${t2}${R}`;
    z = (t2) => `${v.values().next().value}${y}${t2}${w$1}`;
    ED = (t2) => t2.split(" ").map((u3) => A$1(u3));
    _ = (t2, u3, F3) => {
      const e2 = [...u3];
      let s2 = false, i2 = false, D2 = A$1(T$1(t2[t2.length - 1]));
      for (const [C3, o3] of e2.entries()) {
        const E = A$1(o3);
        if (D2 + E <= F3 ? t2[t2.length - 1] += o3 : (t2.push(o3), D2 = 0), v.has(o3) && (s2 = true, i2 = e2.slice(C3 + 1).join("").startsWith(y)), s2) {
          i2 ? o3 === w$1 && (s2 = false, i2 = false) : o3 === R && (s2 = false);
          continue;
        }
        D2 += E, D2 === F3 && C3 < e2.length - 1 && (t2.push(""), D2 = 0);
      }
      !D2 && t2[t2.length - 1].length > 0 && t2.length > 1 && (t2[t2.length - 2] += t2.pop());
    };
    nD = (t2) => {
      const u3 = t2.split(" ");
      let F3 = u3.length;
      for (; F3 > 0 && !(A$1(u3[F3 - 1]) > 0); ) F3--;
      return F3 === u3.length ? t2 : u3.slice(0, F3).join(" ") + u3.slice(F3).join("");
    };
    oD = (t2, u3, F3 = {}) => {
      if (F3.trim !== false && t2.trim() === "") return "";
      let e2 = "", s2, i2;
      const D2 = ED(t2);
      let C3 = [""];
      for (const [E, a2] of t2.split(" ").entries()) {
        F3.trim !== false && (C3[C3.length - 1] = C3[C3.length - 1].trimStart());
        let n2 = A$1(C3[C3.length - 1]);
        if (E !== 0 && (n2 >= u3 && (F3.wordWrap === false || F3.trim === false) && (C3.push(""), n2 = 0), (n2 > 0 || F3.trim === false) && (C3[C3.length - 1] += " ", n2++)), F3.hard && D2[E] > u3) {
          const B2 = u3 - n2, p = 1 + Math.floor((D2[E] - B2 - 1) / u3);
          Math.floor((D2[E] - 1) / u3) < p && C3.push(""), _(C3, a2, u3);
          continue;
        }
        if (n2 + D2[E] > u3 && n2 > 0 && D2[E] > 0) {
          if (F3.wordWrap === false && n2 < u3) {
            _(C3, a2, u3);
            continue;
          }
          C3.push("");
        }
        if (n2 + D2[E] > u3 && F3.wordWrap === false) {
          _(C3, a2, u3);
          continue;
        }
        C3[C3.length - 1] += a2;
      }
      F3.trim !== false && (C3 = C3.map((E) => nD(E)));
      const o3 = [...C3.join(`
`)];
      for (const [E, a2] of o3.entries()) {
        if (e2 += a2, v.has(a2)) {
          const { groups: B2 } = new RegExp(`(?:\\${W$1}(?<code>\\d+)m|\\${y}(?<uri>.*)${w$1})`).exec(o3.slice(E).join("")) || { groups: {} };
          if (B2.code !== void 0) {
            const p = Number.parseFloat(B2.code);
            s2 = p === CD ? void 0 : p;
          } else B2.uri !== void 0 && (i2 = B2.uri.length === 0 ? void 0 : B2.uri);
        }
        const n2 = iD.codes.get(Number(s2));
        o3[E + 1] === `
` ? (i2 && (e2 += z("")), s2 && n2 && (e2 += V$1(n2))) : a2 === `
` && (s2 && n2 && (e2 += V$1(s2)), i2 && (e2 += z(i2)));
      }
      return e2;
    };
    aD = ["up", "down", "left", "right", "space", "enter", "cancel"];
    c = { actions: new Set(aD), aliases: /* @__PURE__ */ new Map([["k", "up"], ["j", "down"], ["h", "left"], ["l", "right"], ["", "cancel"], ["escape", "cancel"]]) };
    globalThis.process.platform.startsWith("win");
    S = Symbol("clack:cancel");
    AD = Object.defineProperty;
    pD = (t2, u3, F3) => u3 in t2 ? AD(t2, u3, { enumerable: true, configurable: true, writable: true, value: F3 }) : t2[u3] = F3;
    h = (t2, u3, F3) => (pD(t2, typeof u3 != "symbol" ? u3 + "" : u3, F3), F3);
    x = class {
      constructor(u3, F3 = true) {
        h(this, "input"), h(this, "output"), h(this, "_abortSignal"), h(this, "rl"), h(this, "opts"), h(this, "_render"), h(this, "_track", false), h(this, "_prevFrame", ""), h(this, "_subscribers", /* @__PURE__ */ new Map()), h(this, "_cursor", 0), h(this, "state", "initial"), h(this, "error", ""), h(this, "value");
        const { input: e2 = stdin, output: s2 = stdout, render: i2, signal: D2, ...C3 } = u3;
        this.opts = C3, this.onKeypress = this.onKeypress.bind(this), this.close = this.close.bind(this), this.render = this.render.bind(this), this._render = i2.bind(this), this._track = F3, this._abortSignal = D2, this.input = e2, this.output = s2;
      }
      unsubscribe() {
        this._subscribers.clear();
      }
      setSubscriber(u3, F3) {
        const e2 = this._subscribers.get(u3) ?? [];
        e2.push(F3), this._subscribers.set(u3, e2);
      }
      on(u3, F3) {
        this.setSubscriber(u3, { cb: F3 });
      }
      once(u3, F3) {
        this.setSubscriber(u3, { cb: F3, once: true });
      }
      emit(u3, ...F3) {
        const e2 = this._subscribers.get(u3) ?? [], s2 = [];
        for (const i2 of e2) i2.cb(...F3), i2.once && s2.push(() => e2.splice(e2.indexOf(i2), 1));
        for (const i2 of s2) i2();
      }
      prompt() {
        return new Promise((u3, F3) => {
          if (this._abortSignal) {
            if (this._abortSignal.aborted) return this.state = "cancel", this.close(), u3(S);
            this._abortSignal.addEventListener("abort", () => {
              this.state = "cancel", this.close();
            }, { once: true });
          }
          const e2 = new WriteStream(0);
          e2._write = (s2, i2, D2) => {
            this._track && (this.value = this.rl?.line.replace(/\t/g, ""), this._cursor = this.rl?.cursor ?? 0, this.emit("value", this.value)), D2();
          }, this.input.pipe(e2), this.rl = f.createInterface({ input: this.input, output: e2, tabSize: 2, prompt: "", escapeCodeTimeout: 50 }), f.emitKeypressEvents(this.input, this.rl), this.rl.prompt(), this.opts.initialValue !== void 0 && this._track && this.rl.write(this.opts.initialValue), this.input.on("keypress", this.onKeypress), d$1(this.input, true), this.output.on("resize", this.render), this.render(), this.once("submit", () => {
            this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u3(this.value);
          }), this.once("cancel", () => {
            this.output.write(srcExports.cursor.show), this.output.off("resize", this.render), d$1(this.input, false), u3(S);
          });
        });
      }
      onKeypress(u3, F3) {
        if (this.state === "error" && (this.state = "active"), F3?.name && (!this._track && c.aliases.has(F3.name) && this.emit("cursor", c.aliases.get(F3.name)), c.actions.has(F3.name) && this.emit("cursor", F3.name)), u3 && (u3.toLowerCase() === "y" || u3.toLowerCase() === "n") && this.emit("confirm", u3.toLowerCase() === "y"), u3 === "	" && this.opts.placeholder && (this.value || (this.rl?.write(this.opts.placeholder), this.emit("value", this.opts.placeholder))), u3 && this.emit("key", u3.toLowerCase()), F3?.name === "return") {
          if (this.opts.validate) {
            const e2 = this.opts.validate(this.value);
            e2 && (this.error = e2 instanceof Error ? e2.message : e2, this.state = "error", this.rl?.write(this.value));
          }
          this.state !== "error" && (this.state = "submit");
        }
        k$1([u3, F3?.name, F3?.sequence], "cancel") && (this.state = "cancel"), (this.state === "submit" || this.state === "cancel") && this.emit("finalize"), this.render(), (this.state === "submit" || this.state === "cancel") && this.close();
      }
      close() {
        this.input.unpipe(), this.input.removeListener("keypress", this.onKeypress), this.output.write(`
`), d$1(this.input, false), this.rl?.close(), this.rl = void 0, this.emit(`${this.state}`, this.value), this.unsubscribe();
      }
      restoreCursor() {
        const u3 = G(this._prevFrame, process.stdout.columns, { hard: true }).split(`
`).length - 1;
        this.output.write(srcExports.cursor.move(-999, u3 * -1));
      }
      render() {
        const u3 = G(this._render(this) ?? "", process.stdout.columns, { hard: true });
        if (u3 !== this._prevFrame) {
          if (this.state === "initial") this.output.write(srcExports.cursor.hide);
          else {
            const F3 = lD(this._prevFrame, u3);
            if (this.restoreCursor(), F3 && F3?.length === 1) {
              const e2 = F3[0];
              this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.lines(1));
              const s2 = u3.split(`
`);
              this.output.write(s2[e2]), this._prevFrame = u3, this.output.write(srcExports.cursor.move(0, s2.length - e2 - 1));
              return;
            }
            if (F3 && F3?.length > 1) {
              const e2 = F3[0];
              this.output.write(srcExports.cursor.move(0, e2)), this.output.write(srcExports.erase.down());
              const s2 = u3.split(`
`).slice(e2);
              this.output.write(s2.join(`
`)), this._prevFrame = u3;
              return;
            }
            this.output.write(srcExports.erase.down());
          }
          this.output.write(u3), this.state === "initial" && (this.state = "active"), this._prevFrame = u3;
        }
      }
    };
    fD = class extends x {
      get cursor() {
        return this.value ? 0 : 1;
      }
      get _value() {
        return this.cursor === 0;
      }
      constructor(u3) {
        super(u3, false), this.value = !!u3.initialValue, this.on("value", () => {
          this.value = this._value;
        }), this.on("confirm", (F3) => {
          this.output.write(srcExports.cursor.move(0, -1)), this.value = F3, this.state = "submit", this.close();
        }), this.on("cursor", () => {
          this.value = !this.value;
        });
      }
    };
    bD = Object.defineProperty;
    mD = (t2, u3, F3) => u3 in t2 ? bD(t2, u3, { enumerable: true, configurable: true, writable: true, value: F3 }) : t2[u3] = F3;
    Y = (t2, u3, F3) => (mD(t2, typeof u3 != "symbol" ? u3 + "" : u3, F3), F3);
    wD = class extends x {
      constructor(u3) {
        super(u3, false), Y(this, "options"), Y(this, "cursor", 0), this.options = u3.options, this.value = [...u3.initialValues ?? []], this.cursor = Math.max(this.options.findIndex(({ value: F3 }) => F3 === u3.cursorAt), 0), this.on("key", (F3) => {
          F3 === "a" && this.toggleAll();
        }), this.on("cursor", (F3) => {
          switch (F3) {
            case "left":
            case "up":
              this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
              break;
            case "down":
            case "right":
              this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
              break;
            case "space":
              this.toggleValue();
              break;
          }
        });
      }
      get _value() {
        return this.options[this.cursor].value;
      }
      toggleAll() {
        const u3 = this.value.length === this.options.length;
        this.value = u3 ? [] : this.options.map((F3) => F3.value);
      }
      toggleValue() {
        const u3 = this.value.includes(this._value);
        this.value = u3 ? this.value.filter((F3) => F3 !== this._value) : [...this.value, this._value];
      }
    };
    SD = Object.defineProperty;
    $D = (t2, u3, F3) => u3 in t2 ? SD(t2, u3, { enumerable: true, configurable: true, writable: true, value: F3 }) : t2[u3] = F3;
    q = (t2, u3, F3) => ($D(t2, typeof u3 != "symbol" ? u3 + "" : u3, F3), F3);
    jD = class extends x {
      constructor(u3) {
        super(u3, false), q(this, "options"), q(this, "cursor", 0), this.options = u3.options, this.cursor = this.options.findIndex(({ value: F3 }) => F3 === u3.initialValue), this.cursor === -1 && (this.cursor = 0), this.changeValue(), this.on("cursor", (F3) => {
          switch (F3) {
            case "left":
            case "up":
              this.cursor = this.cursor === 0 ? this.options.length - 1 : this.cursor - 1;
              break;
            case "down":
            case "right":
              this.cursor = this.cursor === this.options.length - 1 ? 0 : this.cursor + 1;
              break;
          }
          this.changeValue();
        });
      }
      get _value() {
        return this.options[this.cursor];
      }
      changeValue() {
        this.value = this._value.value;
      }
    };
    PD = class extends x {
      get valueWithCursor() {
        if (this.state === "submit") return this.value;
        if (this.cursor >= this.value.length) return `${this.value}\u2588`;
        const u3 = this.value.slice(0, this.cursor), [F3, ...e$1] = this.value.slice(this.cursor);
        return `${u3}${e.inverse(F3)}${e$1.join("")}`;
      }
      get cursor() {
        return this._cursor;
      }
      constructor(u3) {
        super(u3), this.on("finalize", () => {
          this.value || (this.value = u3.defaultValue);
        });
      }
    };
    V = ce();
    u = (t2, n2) => V ? t2 : n2;
    le = u("\u276F", ">");
    L = u("\u25A0", "x");
    W2 = u("\u25B2", "x");
    C = u("\u2714", "\u221A");
    o = u("");
    d = u("");
    k = u("\u25CF", ">");
    P = u("\u25CB", " ");
    A = u("\u25FB", "[\u2022]");
    T = u("\u25FC", "[+]");
    F = u("\u25FB", "[ ]");
    w = (t2) => {
      switch (t2) {
        case "initial":
        case "active":
          return e.cyan(le);
        case "cancel":
          return e.red(L);
        case "error":
          return e.yellow(W2);
        case "submit":
          return e.green(C);
      }
    };
    B = (t2) => {
      const { cursor: n2, options: s2, style: r3 } = t2, i2 = t2.maxItems ?? Number.POSITIVE_INFINITY, a2 = Math.max(process.stdout.rows - 4, 0), c3 = Math.min(a2, Math.max(i2, 5));
      let l2 = 0;
      n2 >= l2 + c3 - 3 ? l2 = Math.max(Math.min(n2 - c3 + 3, s2.length - c3), 0) : n2 < l2 + 2 && (l2 = Math.max(n2 - 2, 0));
      const $ = c3 < s2.length && l2 > 0, p = c3 < s2.length && l2 + c3 < s2.length;
      return s2.slice(l2, l2 + c3).map((M, v2, x2) => {
        const j = v2 === 0 && $, E = v2 === x2.length - 1 && p;
        return j || E ? e.dim("...") : r3(M, v2 + l2 === n2);
      });
    };
    he = (t2) => new PD({ validate: t2.validate, placeholder: t2.placeholder, defaultValue: t2.defaultValue, initialValue: t2.initialValue, render() {
      const n2 = `${e.gray(o)}
${w(this.state)} ${t2.message}
`, s2 = t2.placeholder ? e.inverse(t2.placeholder[0]) + e.dim(t2.placeholder.slice(1)) : e.inverse(e.hidden("_")), r3 = this.value ? this.valueWithCursor : s2;
      switch (this.state) {
        case "error":
          return `${n2.trim()}
${e.yellow(o)} ${r3}
${e.yellow(d)} ${e.yellow(this.error)}
`;
        case "submit":
          return `${n2}${e.gray(o)} ${e.dim(this.value || t2.placeholder)}`;
        case "cancel":
          return `${n2}${e.gray(o)} ${e.strikethrough(e.dim(this.value ?? ""))}${this.value?.trim() ? `
${e.gray(o)}` : ""}`;
        default:
          return `${n2}${e.cyan(o)} ${r3}
${e.cyan(d)}
`;
      }
    } }).prompt();
    ye = (t2) => {
      const n2 = t2.active ?? "Yes", s2 = t2.inactive ?? "No";
      return new fD({ active: n2, inactive: s2, initialValue: t2.initialValue ?? true, render() {
        const r3 = `${e.gray(o)}
${w(this.state)} ${t2.message}
`, i2 = this.value ? n2 : s2;
        switch (this.state) {
          case "submit":
            return `${r3}${e.gray(o)} ${e.dim(i2)}`;
          case "cancel":
            return `${r3}${e.gray(o)} ${e.strikethrough(e.dim(i2))}
${e.gray(o)}`;
          default:
            return `${r3}${e.cyan(o)} ${this.value ? `${e.green(k)} ${n2}` : `${e.dim(P)} ${e.dim(n2)}`} ${e.dim("/")} ${this.value ? `${e.dim(P)} ${e.dim(s2)}` : `${e.green(k)} ${s2}`}
${e.cyan(d)}
`;
        }
      } }).prompt();
    };
    ve = (t2) => {
      const n2 = (s2, r3) => {
        const i2 = s2.label ?? String(s2.value);
        switch (r3) {
          case "selected":
            return `${e.dim(i2)}`;
          case "active":
            return `${e.green(k)} ${i2} ${s2.hint ? e.dim(`(${s2.hint})`) : ""}`;
          case "cancelled":
            return `${e.strikethrough(e.dim(i2))}`;
          default:
            return `${e.dim(P)} ${e.dim(i2)}`;
        }
      };
      return new jD({ options: t2.options, initialValue: t2.initialValue, render() {
        const s2 = `${e.gray(o)}
${w(this.state)} ${t2.message}
`;
        switch (this.state) {
          case "submit":
            return `${s2}${e.gray(o)} ${n2(this.options[this.cursor], "selected")}`;
          case "cancel":
            return `${s2}${e.gray(o)} ${n2(this.options[this.cursor], "cancelled")}
${e.gray(o)}`;
          default:
            return `${s2}${e.cyan(o)} ${B({ cursor: this.cursor, options: this.options, maxItems: t2.maxItems, style: (r3, i2) => n2(r3, i2 ? "active" : "inactive") }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
        }
      } }).prompt();
    };
    fe = (t2) => {
      const n2 = (s2, r3) => {
        const i2 = s2.label ?? String(s2.value);
        return r3 === "active" ? `${e.cyan(A)} ${i2} ${s2.hint ? e.dim(`(${s2.hint})`) : ""}` : r3 === "selected" ? `${e.green(T)} ${e.dim(i2)}` : r3 === "cancelled" ? `${e.strikethrough(e.dim(i2))}` : r3 === "active-selected" ? `${e.green(T)} ${i2} ${s2.hint ? e.dim(`(${s2.hint})`) : ""}` : r3 === "submitted" ? `${e.dim(i2)}` : `${e.dim(F)} ${e.dim(i2)}`;
      };
      return new wD({ options: t2.options, initialValues: t2.initialValues, required: t2.required ?? true, cursorAt: t2.cursorAt, validate(s2) {
        if (this.required && s2.length === 0) return `Please select at least one option.
${e.reset(e.dim(`Press ${e.gray(e.bgWhite(e.inverse(" space ")))} to select, ${e.gray(e.bgWhite(e.inverse(" enter ")))} to submit`))}`;
      }, render() {
        const s2 = `${e.gray(o)}
${w(this.state)} ${t2.message}
`, r3 = (i2, a2) => {
          const c3 = this.value.includes(i2.value);
          return a2 && c3 ? n2(i2, "active-selected") : c3 ? n2(i2, "selected") : n2(i2, a2 ? "active" : "inactive");
        };
        switch (this.state) {
          case "submit":
            return `${s2}${e.gray(o)} ${this.options.filter(({ value: i2 }) => this.value.includes(i2)).map((i2) => n2(i2, "submitted")).join(e.dim(", ")) || e.dim("none")}`;
          case "cancel": {
            const i2 = this.options.filter(({ value: a2 }) => this.value.includes(a2)).map((a2) => n2(a2, "cancelled")).join(e.dim(", "));
            return `${s2}${e.gray(o)} ${i2.trim() ? `${i2}
${e.gray(o)}` : ""}`;
          }
          case "error": {
            const i2 = this.error.split(`
`).map((a2, c3) => c3 === 0 ? `${e.yellow(d)} ${e.yellow(a2)}` : `   ${a2}`).join(`
`);
            return `${s2 + e.yellow(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t2.maxItems, style: r3 }).join(`
${e.yellow(o)}  `)}
${i2}
`;
          }
          default:
            return `${s2}${e.cyan(o)} ${B({ options: this.options, cursor: this.cursor, maxItems: t2.maxItems, style: r3 }).join(`
${e.cyan(o)}  `)}
${e.cyan(d)}
`;
        }
      } }).prompt();
    };
    `${e.gray(o)}  `;
    kCancel = Symbol.for("cancel");
  }
});

// index.ts
import "assert";
import path from "path";
import { createHash } from "crypto";
import fsSync from "fs";
import fs from "fs/promises";

// ../../node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/shared/ohash.BvSMZzli.mjs
var defaults = Object.freeze({
  ignoreUnknown: false,
  respectType: false,
  respectFunctionNames: false,
  respectFunctionProperties: false,
  unorderedObjects: true,
  unorderedArrays: false,
  unorderedSets: false,
  excludeKeys: void 0,
  excludeValues: void 0,
  replacer: void 0
});
function objectHash(object, options) {
  if (options) {
    options = { ...defaults, ...options };
  } else {
    options = defaults;
  }
  const hasher = createHasher(options);
  hasher.dispatch(object);
  return hasher.toString();
}
var defaultPrototypesKeys = Object.freeze([
  "prototype",
  "__proto__",
  "constructor"
]);
function createHasher(options) {
  let buff = "";
  let context = /* @__PURE__ */ new Map();
  const write = (str) => {
    buff += str;
  };
  return {
    toString() {
      return buff;
    },
    getContext() {
      return context;
    },
    dispatch(value) {
      if (options.replacer) {
        value = options.replacer(value);
      }
      const type = value === null ? "null" : typeof value;
      return this[type](value);
    },
    object(object) {
      if (object && typeof object.toJSON === "function") {
        return this.object(object.toJSON());
      }
      const objString = Object.prototype.toString.call(object);
      let objType = "";
      const objectLength = objString.length;
      if (objectLength < 10) {
        objType = "unknown:[" + objString + "]";
      } else {
        objType = objString.slice(8, objectLength - 1);
      }
      objType = objType.toLowerCase();
      let objectNumber = null;
      if ((objectNumber = context.get(object)) === void 0) {
        context.set(object, context.size);
      } else {
        return this.dispatch("[CIRCULAR:" + objectNumber + "]");
      }
      if (typeof Buffer !== "undefined" && Buffer.isBuffer && Buffer.isBuffer(object)) {
        write("buffer:");
        return write(object.toString("utf8"));
      }
      if (objType !== "object" && objType !== "function" && objType !== "asyncfunction") {
        if (this[objType]) {
          this[objType](object);
        } else if (!options.ignoreUnknown) {
          this.unkown(object, objType);
        }
      } else {
        let keys = Object.keys(object);
        if (options.unorderedObjects) {
          keys = keys.sort();
        }
        let extraKeys = [];
        if (options.respectType !== false && !isNativeFunction(object)) {
          extraKeys = defaultPrototypesKeys;
        }
        if (options.excludeKeys) {
          keys = keys.filter((key) => {
            return !options.excludeKeys(key);
          });
          extraKeys = extraKeys.filter((key) => {
            return !options.excludeKeys(key);
          });
        }
        write("object:" + (keys.length + extraKeys.length) + ":");
        const dispatchForKey = (key) => {
          this.dispatch(key);
          write(":");
          if (!options.excludeValues) {
            this.dispatch(object[key]);
          }
          write(",");
        };
        for (const key of keys) {
          dispatchForKey(key);
        }
        for (const key of extraKeys) {
          dispatchForKey(key);
        }
      }
    },
    array(arr, unordered) {
      unordered = unordered === void 0 ? options.unorderedArrays !== false : unordered;
      write("array:" + arr.length + ":");
      if (!unordered || arr.length <= 1) {
        for (const entry of arr) {
          this.dispatch(entry);
        }
        return;
      }
      const contextAdditions = /* @__PURE__ */ new Map();
      const entries = arr.map((entry) => {
        const hasher = createHasher(options);
        hasher.dispatch(entry);
        for (const [key, value] of hasher.getContext()) {
          contextAdditions.set(key, value);
        }
        return hasher.toString();
      });
      context = contextAdditions;
      entries.sort();
      return this.array(entries, false);
    },
    date(date) {
      return write("date:" + date.toJSON());
    },
    symbol(sym) {
      return write("symbol:" + sym.toString());
    },
    unkown(value, type) {
      write(type);
      if (!value) {
        return;
      }
      write(":");
      if (value && typeof value.entries === "function") {
        return this.array(
          Array.from(value.entries()),
          true
          /* ordered */
        );
      }
    },
    error(err) {
      return write("error:" + err.toString());
    },
    boolean(bool) {
      return write("bool:" + bool);
    },
    string(string) {
      write("string:" + string.length + ":");
      write(string);
    },
    function(fn) {
      write("fn:");
      if (isNativeFunction(fn)) {
        this.dispatch("[native]");
      } else {
        this.dispatch(fn.toString());
      }
      if (options.respectFunctionNames !== false) {
        this.dispatch("function-name:" + String(fn.name));
      }
      if (options.respectFunctionProperties) {
        this.object(fn);
      }
    },
    number(number) {
      return write("number:" + number);
    },
    xml(xml) {
      return write("xml:" + xml.toString());
    },
    null() {
      return write("Null");
    },
    undefined() {
      return write("Undefined");
    },
    regexp(regex2) {
      return write("regex:" + regex2.toString());
    },
    uint8array(arr) {
      write("uint8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint8clampedarray(arr) {
      write("uint8clampedarray:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int8array(arr) {
      write("int8array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint16array(arr) {
      write("uint16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int16array(arr) {
      write("int16array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    uint32array(arr) {
      write("uint32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    int32array(arr) {
      write("int32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float32array(arr) {
      write("float32array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    float64array(arr) {
      write("float64array:");
      return this.dispatch(Array.prototype.slice.call(arr));
    },
    arraybuffer(arr) {
      write("arraybuffer:");
      return this.dispatch(new Uint8Array(arr));
    },
    url(url) {
      return write("url:" + url.toString());
    },
    map(map) {
      write("map:");
      const arr = [...map];
      return this.array(arr, options.unorderedSets !== false);
    },
    set(set) {
      write("set:");
      const arr = [...set];
      return this.array(arr, options.unorderedSets !== false);
    },
    file(file) {
      write("file:");
      return this.dispatch([file.name, file.size, file.type, file.lastModfied]);
    },
    blob() {
      if (options.ignoreUnknown) {
        return write("[blob]");
      }
      throw new Error(
        'Hashing Blob objects is currently not supported\nUse "options.replacer" or "options.ignoreUnknown"\n'
      );
    },
    domwindow() {
      return write("domwindow");
    },
    bigint(number) {
      return write("bigint:" + number.toString());
    },
    /* Node.js standard native objects */
    process() {
      return write("process");
    },
    timer() {
      return write("timer");
    },
    pipe() {
      return write("pipe");
    },
    tcp() {
      return write("tcp");
    },
    udp() {
      return write("udp");
    },
    tty() {
      return write("tty");
    },
    statwatcher() {
      return write("statwatcher");
    },
    securecontext() {
      return write("securecontext");
    },
    connection() {
      return write("connection");
    },
    zlib() {
      return write("zlib");
    },
    context() {
      return write("context");
    },
    nodescript() {
      return write("nodescript");
    },
    httpparser() {
      return write("httpparser");
    },
    dataview() {
      return write("dataview");
    },
    signal() {
      return write("signal");
    },
    fsevent() {
      return write("fsevent");
    },
    tlswrap() {
      return write("tlswrap");
    }
  };
}
var nativeFunc = "[native code] }";
var nativeFuncLength = nativeFunc.length;
function isNativeFunction(f3) {
  if (typeof f3 !== "function") {
    return false;
  }
  return Function.prototype.toString.call(f3).slice(-nativeFuncLength) === nativeFunc;
}

// ../../node_modules/.pnpm/ohash@1.1.6/node_modules/ohash/dist/index.mjs
var WordArray = class _WordArray {
  words;
  sigBytes;
  constructor(words, sigBytes) {
    words = this.words = words || [];
    this.sigBytes = sigBytes === void 0 ? words.length * 4 : sigBytes;
  }
  toString(encoder) {
    return (encoder || Hex).stringify(this);
  }
  concat(wordArray) {
    this.clamp();
    if (this.sigBytes % 4) {
      for (let i2 = 0; i2 < wordArray.sigBytes; i2++) {
        const thatByte = wordArray.words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
        this.words[this.sigBytes + i2 >>> 2] |= thatByte << 24 - (this.sigBytes + i2) % 4 * 8;
      }
    } else {
      for (let j = 0; j < wordArray.sigBytes; j += 4) {
        this.words[this.sigBytes + j >>> 2] = wordArray.words[j >>> 2];
      }
    }
    this.sigBytes += wordArray.sigBytes;
    return this;
  }
  clamp() {
    this.words[this.sigBytes >>> 2] &= 4294967295 << 32 - this.sigBytes % 4 * 8;
    this.words.length = Math.ceil(this.sigBytes / 4);
  }
  clone() {
    return new _WordArray([...this.words]);
  }
};
var Hex = {
  stringify(wordArray) {
    const hexChars = [];
    for (let i2 = 0; i2 < wordArray.sigBytes; i2++) {
      const bite = wordArray.words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
      hexChars.push((bite >>> 4).toString(16), (bite & 15).toString(16));
    }
    return hexChars.join("");
  }
};
var Base64 = {
  stringify(wordArray) {
    const keyStr = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    const base64Chars = [];
    for (let i2 = 0; i2 < wordArray.sigBytes; i2 += 3) {
      const byte1 = wordArray.words[i2 >>> 2] >>> 24 - i2 % 4 * 8 & 255;
      const byte2 = wordArray.words[i2 + 1 >>> 2] >>> 24 - (i2 + 1) % 4 * 8 & 255;
      const byte3 = wordArray.words[i2 + 2 >>> 2] >>> 24 - (i2 + 2) % 4 * 8 & 255;
      const triplet = byte1 << 16 | byte2 << 8 | byte3;
      for (let j = 0; j < 4 && i2 * 8 + j * 6 < wordArray.sigBytes * 8; j++) {
        base64Chars.push(keyStr.charAt(triplet >>> 6 * (3 - j) & 63));
      }
    }
    return base64Chars.join("");
  }
};
var Latin1 = {
  parse(latin1Str) {
    const latin1StrLength = latin1Str.length;
    const words = [];
    for (let i2 = 0; i2 < latin1StrLength; i2++) {
      words[i2 >>> 2] |= (latin1Str.charCodeAt(i2) & 255) << 24 - i2 % 4 * 8;
    }
    return new WordArray(words, latin1StrLength);
  }
};
var Utf8 = {
  parse(utf8Str) {
    return Latin1.parse(unescape(encodeURIComponent(utf8Str)));
  }
};
var BufferedBlockAlgorithm = class {
  _data = new WordArray();
  _nDataBytes = 0;
  _minBufferSize = 0;
  blockSize = 512 / 32;
  reset() {
    this._data = new WordArray();
    this._nDataBytes = 0;
  }
  _append(data) {
    if (typeof data === "string") {
      data = Utf8.parse(data);
    }
    this._data.concat(data);
    this._nDataBytes += data.sigBytes;
  }
  _doProcessBlock(_dataWords, _offset) {
  }
  _process(doFlush) {
    let processedWords;
    let nBlocksReady = this._data.sigBytes / (this.blockSize * 4);
    if (doFlush) {
      nBlocksReady = Math.ceil(nBlocksReady);
    } else {
      nBlocksReady = Math.max((nBlocksReady | 0) - this._minBufferSize, 0);
    }
    const nWordsReady = nBlocksReady * this.blockSize;
    const nBytesReady = Math.min(nWordsReady * 4, this._data.sigBytes);
    if (nWordsReady) {
      for (let offset = 0; offset < nWordsReady; offset += this.blockSize) {
        this._doProcessBlock(this._data.words, offset);
      }
      processedWords = this._data.words.splice(0, nWordsReady);
      this._data.sigBytes -= nBytesReady;
    }
    return new WordArray(processedWords, nBytesReady);
  }
};
var Hasher = class extends BufferedBlockAlgorithm {
  update(messageUpdate) {
    this._append(messageUpdate);
    this._process();
    return this;
  }
  finalize(messageUpdate) {
    if (messageUpdate) {
      this._append(messageUpdate);
    }
  }
};
var H = [
  1779033703,
  -1150833019,
  1013904242,
  -1521486534,
  1359893119,
  -1694144372,
  528734635,
  1541459225
];
var K = [
  1116352408,
  1899447441,
  -1245643825,
  -373957723,
  961987163,
  1508970993,
  -1841331548,
  -1424204075,
  -670586216,
  310598401,
  607225278,
  1426881987,
  1925078388,
  -2132889090,
  -1680079193,
  -1046744716,
  -459576895,
  -272742522,
  264347078,
  604807628,
  770255983,
  1249150122,
  1555081692,
  1996064986,
  -1740746414,
  -1473132947,
  -1341970488,
  -1084653625,
  -958395405,
  -710438585,
  113926993,
  338241895,
  666307205,
  773529912,
  1294757372,
  1396182291,
  1695183700,
  1986661051,
  -2117940946,
  -1838011259,
  -1564481375,
  -1474664885,
  -1035236496,
  -949202525,
  -778901479,
  -694614492,
  -200395387,
  275423344,
  430227734,
  506948616,
  659060556,
  883997877,
  958139571,
  1322822218,
  1537002063,
  1747873779,
  1955562222,
  2024104815,
  -2067236844,
  -1933114872,
  -1866530822,
  -1538233109,
  -1090935817,
  -965641998
];
var W = [];
var SHA256 = class extends Hasher {
  _hash = new WordArray([...H]);
  /**
   * Resets the internal state of the hash object to initial values.
   */
  reset() {
    super.reset();
    this._hash = new WordArray([...H]);
  }
  _doProcessBlock(M, offset) {
    const H2 = this._hash.words;
    let a2 = H2[0];
    let b2 = H2[1];
    let c3 = H2[2];
    let d2 = H2[3];
    let e2 = H2[4];
    let f3 = H2[5];
    let g3 = H2[6];
    let h2 = H2[7];
    for (let i2 = 0; i2 < 64; i2++) {
      if (i2 < 16) {
        W[i2] = M[offset + i2] | 0;
      } else {
        const gamma0x = W[i2 - 15];
        const gamma0 = (gamma0x << 25 | gamma0x >>> 7) ^ (gamma0x << 14 | gamma0x >>> 18) ^ gamma0x >>> 3;
        const gamma1x = W[i2 - 2];
        const gamma1 = (gamma1x << 15 | gamma1x >>> 17) ^ (gamma1x << 13 | gamma1x >>> 19) ^ gamma1x >>> 10;
        W[i2] = gamma0 + W[i2 - 7] + gamma1 + W[i2 - 16];
      }
      const ch = e2 & f3 ^ ~e2 & g3;
      const maj = a2 & b2 ^ a2 & c3 ^ b2 & c3;
      const sigma0 = (a2 << 30 | a2 >>> 2) ^ (a2 << 19 | a2 >>> 13) ^ (a2 << 10 | a2 >>> 22);
      const sigma1 = (e2 << 26 | e2 >>> 6) ^ (e2 << 21 | e2 >>> 11) ^ (e2 << 7 | e2 >>> 25);
      const t1 = h2 + sigma1 + ch + K[i2] + W[i2];
      const t2 = sigma0 + maj;
      h2 = g3;
      g3 = f3;
      f3 = e2;
      e2 = d2 + t1 | 0;
      d2 = c3;
      c3 = b2;
      b2 = a2;
      a2 = t1 + t2 | 0;
    }
    H2[0] = H2[0] + a2 | 0;
    H2[1] = H2[1] + b2 | 0;
    H2[2] = H2[2] + c3 | 0;
    H2[3] = H2[3] + d2 | 0;
    H2[4] = H2[4] + e2 | 0;
    H2[5] = H2[5] + f3 | 0;
    H2[6] = H2[6] + g3 | 0;
    H2[7] = H2[7] + h2 | 0;
  }
  /**
   * Finishes the hash calculation and returns the hash as a WordArray.
   *
   * @param {string} messageUpdate - Additional message content to include in the hash.
   * @returns {WordArray} The finalised hash as a WordArray.
   */
  finalize(messageUpdate) {
    super.finalize(messageUpdate);
    const nBitsTotal = this._nDataBytes * 8;
    const nBitsLeft = this._data.sigBytes * 8;
    this._data.words[nBitsLeft >>> 5] |= 128 << 24 - nBitsLeft % 32;
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 14] = Math.floor(
      nBitsTotal / 4294967296
    );
    this._data.words[(nBitsLeft + 64 >>> 9 << 4) + 15] = nBitsTotal;
    this._data.sigBytes = this._data.words.length * 4;
    this._process();
    return this._hash;
  }
};
function sha256base64(message) {
  return new SHA256().finalize(message).toString(Base64);
}
function hash(object, options = {}) {
  const hashed = typeof object === "string" ? object : objectHash(object, options);
  return sha256base64(hashed).slice(0, 10);
}

// index.ts
import ezSpawn from "@jsdevtools/ez-spawn";

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/core.mjs
var LogLevels = {
  silent: Number.NEGATIVE_INFINITY,
  fatal: 0,
  error: 0,
  warn: 1,
  log: 2,
  info: 3,
  success: 3,
  fail: 3,
  ready: 3,
  start: 3,
  box: 3,
  debug: 4,
  trace: 5,
  verbose: Number.POSITIVE_INFINITY
};
var LogTypes = {
  // Silent
  silent: {
    level: -1
  },
  // Level 0
  fatal: {
    level: LogLevels.fatal
  },
  error: {
    level: LogLevels.error
  },
  // Level 1
  warn: {
    level: LogLevels.warn
  },
  // Level 2
  log: {
    level: LogLevels.log
  },
  // Level 3
  info: {
    level: LogLevels.info
  },
  success: {
    level: LogLevels.success
  },
  fail: {
    level: LogLevels.fail
  },
  ready: {
    level: LogLevels.info
  },
  start: {
    level: LogLevels.info
  },
  box: {
    level: LogLevels.info
  },
  // Level 4
  debug: {
    level: LogLevels.debug
  },
  // Level 5
  trace: {
    level: LogLevels.trace
  },
  // Verbose
  verbose: {
    level: LogLevels.verbose
  }
};
function isPlainObject$1(value) {
  if (value === null || typeof value !== "object") {
    return false;
  }
  const prototype = Object.getPrototypeOf(value);
  if (prototype !== null && prototype !== Object.prototype && Object.getPrototypeOf(prototype) !== null) {
    return false;
  }
  if (Symbol.iterator in value) {
    return false;
  }
  if (Symbol.toStringTag in value) {
    return Object.prototype.toString.call(value) === "[object Module]";
  }
  return true;
}
function _defu(baseObject, defaults2, namespace = ".", merger) {
  if (!isPlainObject$1(defaults2)) {
    return _defu(baseObject, {}, namespace, merger);
  }
  const object = Object.assign({}, defaults2);
  for (const key in baseObject) {
    if (key === "__proto__" || key === "constructor") {
      continue;
    }
    const value = baseObject[key];
    if (value === null || value === void 0) {
      continue;
    }
    if (merger && merger(object, key, value, namespace)) {
      continue;
    }
    if (Array.isArray(value) && Array.isArray(object[key])) {
      object[key] = [...value, ...object[key]];
    } else if (isPlainObject$1(value) && isPlainObject$1(object[key])) {
      object[key] = _defu(
        value,
        object[key],
        (namespace ? `${namespace}.` : "") + key.toString(),
        merger
      );
    } else {
      object[key] = value;
    }
  }
  return object;
}
function createDefu(merger) {
  return (...arguments_) => (
    // eslint-disable-next-line unicorn/no-array-reduce
    arguments_.reduce((p, c3) => _defu(p, c3, "", merger), {})
  );
}
var defu = createDefu();
function isPlainObject(obj) {
  return Object.prototype.toString.call(obj) === "[object Object]";
}
function isLogObj(arg) {
  if (!isPlainObject(arg)) {
    return false;
  }
  if (!arg.message && !arg.args) {
    return false;
  }
  if (arg.stack) {
    return false;
  }
  return true;
}
var paused = false;
var queue = [];
var Consola = class _Consola {
  options;
  _lastLog;
  _mockFn;
  /**
   * Creates an instance of Consola with specified options or defaults.
   *
   * @param {Partial<ConsolaOptions>} [options={}] - Configuration options for the Consola instance.
   */
  constructor(options = {}) {
    const types = options.types || LogTypes;
    this.options = defu(
      {
        ...options,
        defaults: { ...options.defaults },
        level: _normalizeLogLevel(options.level, types),
        reporters: [...options.reporters || []]
      },
      {
        types: LogTypes,
        throttle: 1e3,
        throttleMin: 5,
        formatOptions: {
          date: true,
          colors: false,
          compact: true
        }
      }
    );
    for (const type in types) {
      const defaults2 = {
        type,
        ...this.options.defaults,
        ...types[type]
      };
      this[type] = this._wrapLogFn(defaults2);
      this[type].raw = this._wrapLogFn(
        defaults2,
        true
      );
    }
    if (this.options.mockFn) {
      this.mockTypes();
    }
    this._lastLog = {};
  }
  /**
   * Gets the current log level of the Consola instance.
   *
   * @returns {number} The current log level.
   */
  get level() {
    return this.options.level;
  }
  /**
   * Sets the minimum log level that will be output by the instance.
   *
   * @param {number} level - The new log level to set.
   */
  set level(level) {
    this.options.level = _normalizeLogLevel(
      level,
      this.options.types,
      this.options.level
    );
  }
  /**
   * Displays a prompt to the user and returns the response.
   * Throw an error if `prompt` is not supported by the current configuration.
   *
   * @template T
   * @param {string} message - The message to display in the prompt.
   * @param {T} [opts] - Optional options for the prompt. See {@link PromptOptions}.
   * @returns {promise<T>} A promise that infer with the prompt options. See {@link PromptOptions}.
   */
  prompt(message, opts) {
    if (!this.options.prompt) {
      throw new Error("prompt is not supported!");
    }
    return this.options.prompt(message, opts);
  }
  /**
   * Creates a new instance of Consola, inheriting options from the current instance, with possible overrides.
   *
   * @param {Partial<ConsolaOptions>} options - Optional overrides for the new instance. See {@link ConsolaOptions}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  create(options) {
    const instance = new _Consola({
      ...this.options,
      ...options
    });
    if (this._mockFn) {
      instance.mockTypes(this._mockFn);
    }
    return instance;
  }
  /**
   * Creates a new Consola instance with the specified default log object properties.
   *
   * @param {InputLogObject} defaults - Default properties to include in any log from the new instance. See {@link InputLogObject}.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  withDefaults(defaults2) {
    return this.create({
      ...this.options,
      defaults: {
        ...this.options.defaults,
        ...defaults2
      }
    });
  }
  /**
   * Creates a new Consola instance with a specified tag, which will be included in every log.
   *
   * @param {string} tag - The tag to include in each log of the new instance.
   * @returns {ConsolaInstance} A new Consola instance. See {@link ConsolaInstance}.
   */
  withTag(tag) {
    return this.withDefaults({
      tag: this.options.defaults.tag ? this.options.defaults.tag + ":" + tag : tag
    });
  }
  /**
   * Adds a custom reporter to the Consola instance.
   * Reporters will be called for each log message, depending on their implementation and log level.
   *
   * @param {ConsolaReporter} reporter - The reporter to add. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  addReporter(reporter) {
    this.options.reporters.push(reporter);
    return this;
  }
  /**
   * Removes a custom reporter from the Consola instance.
   * If no reporter is specified, all reporters will be removed.
   *
   * @param {ConsolaReporter} reporter - The reporter to remove. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  removeReporter(reporter) {
    if (reporter) {
      const i2 = this.options.reporters.indexOf(reporter);
      if (i2 !== -1) {
        return this.options.reporters.splice(i2, 1);
      }
    } else {
      this.options.reporters.splice(0);
    }
    return this;
  }
  /**
   * Replaces all reporters of the Consola instance with the specified array of reporters.
   *
   * @param {ConsolaReporter[]} reporters - The new reporters to set. See {@link ConsolaReporter}.
   * @returns {Consola} The current Consola instance.
   */
  setReporters(reporters) {
    this.options.reporters = Array.isArray(reporters) ? reporters : [reporters];
    return this;
  }
  wrapAll() {
    this.wrapConsole();
    this.wrapStd();
  }
  restoreAll() {
    this.restoreConsole();
    this.restoreStd();
  }
  /**
   * Overrides console methods with Consola logging methods for consistent logging.
   */
  wrapConsole() {
    for (const type in this.options.types) {
      if (!console["__" + type]) {
        console["__" + type] = console[type];
      }
      console[type] = this[type].raw;
    }
  }
  /**
   * Restores the original console methods, removing Consola overrides.
   */
  restoreConsole() {
    for (const type in this.options.types) {
      if (console["__" + type]) {
        console[type] = console["__" + type];
        delete console["__" + type];
      }
    }
  }
  /**
   * Overrides standard output and error streams to redirect them through Consola.
   */
  wrapStd() {
    this._wrapStream(this.options.stdout, "log");
    this._wrapStream(this.options.stderr, "log");
  }
  _wrapStream(stream, type) {
    if (!stream) {
      return;
    }
    if (!stream.__write) {
      stream.__write = stream.write;
    }
    stream.write = (data) => {
      this[type].raw(String(data).trim());
    };
  }
  /**
   * Restores the original standard output and error streams, removing the Consola redirection.
   */
  restoreStd() {
    this._restoreStream(this.options.stdout);
    this._restoreStream(this.options.stderr);
  }
  _restoreStream(stream) {
    if (!stream) {
      return;
    }
    if (stream.__write) {
      stream.write = stream.__write;
      delete stream.__write;
    }
  }
  /**
   * Pauses logging, queues incoming logs until resumed.
   */
  pauseLogs() {
    paused = true;
  }
  /**
   * Resumes logging, processing any queued logs.
   */
  resumeLogs() {
    paused = false;
    const _queue = queue.splice(0);
    for (const item of _queue) {
      item[0]._logFn(item[1], item[2]);
    }
  }
  /**
   * Replaces logging methods with mocks if a mock function is provided.
   *
   * @param {ConsolaOptions["mockFn"]} mockFn - The function to use for mocking logging methods. See {@link ConsolaOptions["mockFn"]}.
   */
  mockTypes(mockFn) {
    const _mockFn = mockFn || this.options.mockFn;
    this._mockFn = _mockFn;
    if (typeof _mockFn !== "function") {
      return;
    }
    for (const type in this.options.types) {
      this[type] = _mockFn(type, this.options.types[type]) || this[type];
      this[type].raw = this[type];
    }
  }
  _wrapLogFn(defaults2, isRaw) {
    return (...args) => {
      if (paused) {
        queue.push([this, defaults2, args, isRaw]);
        return;
      }
      return this._logFn(defaults2, args, isRaw);
    };
  }
  _logFn(defaults2, args, isRaw) {
    if ((defaults2.level || 0) > this.level) {
      return false;
    }
    const logObj = {
      date: /* @__PURE__ */ new Date(),
      args: [],
      ...defaults2,
      level: _normalizeLogLevel(defaults2.level, this.options.types)
    };
    if (!isRaw && args.length === 1 && isLogObj(args[0])) {
      Object.assign(logObj, args[0]);
    } else {
      logObj.args = [...args];
    }
    if (logObj.message) {
      logObj.args.unshift(logObj.message);
      delete logObj.message;
    }
    if (logObj.additional) {
      if (!Array.isArray(logObj.additional)) {
        logObj.additional = logObj.additional.split("\n");
      }
      logObj.args.push("\n" + logObj.additional.join("\n"));
      delete logObj.additional;
    }
    logObj.type = typeof logObj.type === "string" ? logObj.type.toLowerCase() : "log";
    logObj.tag = typeof logObj.tag === "string" ? logObj.tag : "";
    const resolveLog = (newLog = false) => {
      const repeated = (this._lastLog.count || 0) - this.options.throttleMin;
      if (this._lastLog.object && repeated > 0) {
        const args2 = [...this._lastLog.object.args];
        if (repeated > 1) {
          args2.push(`(repeated ${repeated} times)`);
        }
        this._log({ ...this._lastLog.object, args: args2 });
        this._lastLog.count = 1;
      }
      if (newLog) {
        this._lastLog.object = logObj;
        this._log(logObj);
      }
    };
    clearTimeout(this._lastLog.timeout);
    const diffTime = this._lastLog.time && logObj.date ? logObj.date.getTime() - this._lastLog.time.getTime() : 0;
    this._lastLog.time = logObj.date;
    if (diffTime < this.options.throttle) {
      try {
        const serializedLog = JSON.stringify([
          logObj.type,
          logObj.tag,
          logObj.args
        ]);
        const isSameLog = this._lastLog.serialized === serializedLog;
        this._lastLog.serialized = serializedLog;
        if (isSameLog) {
          this._lastLog.count = (this._lastLog.count || 0) + 1;
          if (this._lastLog.count > this.options.throttleMin) {
            this._lastLog.timeout = setTimeout(
              resolveLog,
              this.options.throttle
            );
            return;
          }
        }
      } catch {
      }
    }
    resolveLog(true);
  }
  _log(logObj) {
    for (const reporter of this.options.reporters) {
      reporter.log(logObj, {
        options: this.options
      });
    }
  }
};
function _normalizeLogLevel(input, types = {}, defaultLevel = 3) {
  if (input === void 0) {
    return defaultLevel;
  }
  if (typeof input === "number") {
    return input;
  }
  if (types[input] && types[input].level !== void 0) {
    return types[input].level;
  }
  return defaultLevel;
}
Consola.prototype.add = Consola.prototype.addReporter;
Consola.prototype.remove = Consola.prototype.removeReporter;
Consola.prototype.clear = Consola.prototype.removeReporter;
Consola.prototype.withScope = Consola.prototype.withTag;
Consola.prototype.mock = Consola.prototype.mockTypes;
Consola.prototype.pause = Consola.prototype.pauseLogs;
Consola.prototype.resume = Consola.prototype.resumeLogs;
function createConsola(options = {}) {
  return new Consola(options);
}

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/shared/consola.DRwqZj3T.mjs
import { formatWithOptions } from "util";
import { sep } from "path";
function parseStack(stack, message) {
  const cwd = process.cwd() + sep;
  const lines = stack.split("\n").splice(message.split("\n").length).map((l2) => l2.trim().replace("file://", "").replace(cwd, ""));
  return lines;
}
function writeStream(data, stream) {
  const write = stream.__write || stream.write;
  return write.call(stream, data);
}
var bracket = (x2) => x2 ? `[${x2}]` : "";
var BasicReporter = class {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return indent + parseStack(stack, message).join(`
${indent}`);
  }
  formatError(err, opts) {
    const message = err.message ?? formatWithOptions(opts, err);
    const stack = err.stack ? this.formatStack(err.stack, message, opts) : "";
    const level = opts?.errorLevel || 0;
    const causedPrefix = level > 0 ? `${"  ".repeat(level)}[cause]: ` : "";
    const causedError = err.cause ? "\n\n" + this.formatError(err.cause, { ...opts, errorLevel: level + 1 }) : "";
    return causedPrefix + message + "\n" + stack + causedError;
  }
  formatArgs(args, opts) {
    const _args = args.map((arg) => {
      if (arg && typeof arg.stack === "string") {
        return this.formatError(arg, opts);
      }
      return arg;
    });
    return formatWithOptions(opts, ..._args);
  }
  formatDate(date, opts) {
    return opts.date ? date.toLocaleTimeString() : "";
  }
  filterAndJoin(arr) {
    return arr.filter(Boolean).join(" ");
  }
  formatLogObj(logObj, opts) {
    const message = this.formatArgs(logObj.args, opts);
    if (logObj.type === "box") {
      return "\n" + [
        bracket(logObj.tag),
        logObj.title && logObj.title,
        ...message.split("\n")
      ].filter(Boolean).map((l2) => " > " + l2).join("\n") + "\n";
    }
    return this.filterAndJoin([
      bracket(logObj.type),
      bracket(logObj.tag),
      message
    ]);
  }
  log(logObj, ctx) {
    const line = this.formatLogObj(logObj, {
      columns: ctx.options.stdout.columns || 0,
      ...ctx.options.formatOptions
    });
    return writeStream(
      line + "\n",
      logObj.level < 2 ? ctx.options.stderr || process.stderr : ctx.options.stdout || process.stdout
    );
  }
};

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs
import g$1 from "process";

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/shared/consola.DXBYu-KD.mjs
import * as tty from "tty";
var {
  env = {},
  argv = [],
  platform = ""
} = typeof process === "undefined" ? {} : process;
var isDisabled = "NO_COLOR" in env || argv.includes("--no-color");
var isForced = "FORCE_COLOR" in env || argv.includes("--color");
var isWindows = platform === "win32";
var isDumbTerminal = env.TERM === "dumb";
var isCompatibleTerminal = tty && tty.isatty && tty.isatty(1) && env.TERM && !isDumbTerminal;
var isCI = "CI" in env && ("GITHUB_ACTIONS" in env || "GITLAB_CI" in env || "CIRCLECI" in env);
var isColorSupported = !isDisabled && (isForced || isWindows && !isDumbTerminal || isCompatibleTerminal || isCI);
function replaceClose(index, string, close, replace, head = string.slice(0, Math.max(0, index)) + replace, tail = string.slice(Math.max(0, index + close.length)), next = tail.indexOf(close)) {
  return head + (next < 0 ? tail : replaceClose(next, tail, close, replace));
}
function clearBleed(index, string, open, close, replace) {
  return index < 0 ? open + string + close : open + replaceClose(index, string, close, replace) + close;
}
function filterEmpty(open, close, replace = open, at = open.length + 1) {
  return (string) => string || !(string === "" || string === void 0) ? clearBleed(
    ("" + string).indexOf(close, at),
    string,
    open,
    close,
    replace
  ) : "";
}
function init(open, close, replace) {
  return filterEmpty(`\x1B[${open}m`, `\x1B[${close}m`, replace);
}
var colorDefs = {
  reset: init(0, 0),
  bold: init(1, 22, "\x1B[22m\x1B[1m"),
  dim: init(2, 22, "\x1B[22m\x1B[2m"),
  italic: init(3, 23),
  underline: init(4, 24),
  inverse: init(7, 27),
  hidden: init(8, 28),
  strikethrough: init(9, 29),
  black: init(30, 39),
  red: init(31, 39),
  green: init(32, 39),
  yellow: init(33, 39),
  blue: init(34, 39),
  magenta: init(35, 39),
  cyan: init(36, 39),
  white: init(37, 39),
  gray: init(90, 39),
  bgBlack: init(40, 49),
  bgRed: init(41, 49),
  bgGreen: init(42, 49),
  bgYellow: init(43, 49),
  bgBlue: init(44, 49),
  bgMagenta: init(45, 49),
  bgCyan: init(46, 49),
  bgWhite: init(47, 49),
  blackBright: init(90, 39),
  redBright: init(91, 39),
  greenBright: init(92, 39),
  yellowBright: init(93, 39),
  blueBright: init(94, 39),
  magentaBright: init(95, 39),
  cyanBright: init(96, 39),
  whiteBright: init(97, 39),
  bgBlackBright: init(100, 49),
  bgRedBright: init(101, 49),
  bgGreenBright: init(102, 49),
  bgYellowBright: init(103, 49),
  bgBlueBright: init(104, 49),
  bgMagentaBright: init(105, 49),
  bgCyanBright: init(106, 49),
  bgWhiteBright: init(107, 49)
};
function createColors(useColor = isColorSupported) {
  return useColor ? colorDefs : Object.fromEntries(Object.keys(colorDefs).map((key) => [key, String]));
}
var colors = createColors();
function getColor(color, fallback = "reset") {
  return colors[color] || colors[fallback];
}
var ansiRegex = [
  String.raw`[\u001B\u009B][[\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\d\/#&.:=?%@~_]+)*|[a-zA-Z\d]+(?:;[-a-zA-Z\d\/#&.:=?%@~_]*)*)?\u0007)`,
  String.raw`(?:(?:\d{1,4}(?:;\d{0,4})*)?[\dA-PR-TZcf-nq-uy=><~]))`
].join("|");
function stripAnsi(text) {
  return text.replace(new RegExp(ansiRegex, "g"), "");
}
var boxStylePresets = {
  solid: {
    tl: "\u250C",
    tr: "\u2510",
    bl: "\u2514",
    br: "\u2518",
    h: "\u2500",
    v: "\u2502"
  },
  double: {
    tl: "\u2554",
    tr: "\u2557",
    bl: "\u255A",
    br: "\u255D",
    h: "\u2550",
    v: "\u2551"
  },
  doubleSingle: {
    tl: "\u2553",
    tr: "\u2556",
    bl: "\u2559",
    br: "\u255C",
    h: "\u2500",
    v: "\u2551"
  },
  doubleSingleRounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2500",
    v: "\u2551"
  },
  singleThick: {
    tl: "\u250F",
    tr: "\u2513",
    bl: "\u2517",
    br: "\u251B",
    h: "\u2501",
    v: "\u2503"
  },
  singleDouble: {
    tl: "\u2552",
    tr: "\u2555",
    bl: "\u2558",
    br: "\u255B",
    h: "\u2550",
    v: "\u2502"
  },
  singleDoubleRounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2550",
    v: "\u2502"
  },
  rounded: {
    tl: "\u256D",
    tr: "\u256E",
    bl: "\u2570",
    br: "\u256F",
    h: "\u2500",
    v: "\u2502"
  }
};
var defaultStyle = {
  borderColor: "white",
  borderStyle: "rounded",
  valign: "center",
  padding: 2,
  marginLeft: 1,
  marginTop: 1,
  marginBottom: 1
};
function box(text, _opts = {}) {
  const opts = {
    ..._opts,
    style: {
      ...defaultStyle,
      ..._opts.style
    }
  };
  const textLines = text.split("\n");
  const boxLines = [];
  const _color = getColor(opts.style.borderColor);
  const borderStyle = {
    ...typeof opts.style.borderStyle === "string" ? boxStylePresets[opts.style.borderStyle] || boxStylePresets.solid : opts.style.borderStyle
  };
  if (_color) {
    for (const key in borderStyle) {
      borderStyle[key] = _color(
        borderStyle[key]
      );
    }
  }
  const paddingOffset = opts.style.padding % 2 === 0 ? opts.style.padding : opts.style.padding + 1;
  const height = textLines.length + paddingOffset;
  const width = Math.max(
    ...textLines.map((line) => stripAnsi(line).length),
    opts.title ? stripAnsi(opts.title).length : 0
  ) + paddingOffset;
  const widthOffset = width + paddingOffset;
  const leftSpace = opts.style.marginLeft > 0 ? " ".repeat(opts.style.marginLeft) : "";
  if (opts.style.marginTop > 0) {
    boxLines.push("".repeat(opts.style.marginTop));
  }
  if (opts.title) {
    const title = _color ? _color(opts.title) : opts.title;
    const left = borderStyle.h.repeat(
      Math.floor((width - stripAnsi(opts.title).length) / 2)
    );
    const right = borderStyle.h.repeat(
      width - stripAnsi(opts.title).length - stripAnsi(left).length + paddingOffset
    );
    boxLines.push(
      `${leftSpace}${borderStyle.tl}${left}${title}${right}${borderStyle.tr}`
    );
  } else {
    boxLines.push(
      `${leftSpace}${borderStyle.tl}${borderStyle.h.repeat(widthOffset)}${borderStyle.tr}`
    );
  }
  const valignOffset = opts.style.valign === "center" ? Math.floor((height - textLines.length) / 2) : opts.style.valign === "top" ? height - textLines.length - paddingOffset : height - textLines.length;
  for (let i2 = 0; i2 < height; i2++) {
    if (i2 < valignOffset || i2 >= valignOffset + textLines.length) {
      boxLines.push(
        `${leftSpace}${borderStyle.v}${" ".repeat(widthOffset)}${borderStyle.v}`
      );
    } else {
      const line = textLines[i2 - valignOffset];
      const left = " ".repeat(paddingOffset);
      const right = " ".repeat(width - stripAnsi(line).length);
      boxLines.push(
        `${leftSpace}${borderStyle.v}${left}${line}${right}${borderStyle.v}`
      );
    }
  }
  boxLines.push(
    `${leftSpace}${borderStyle.bl}${borderStyle.h.repeat(widthOffset)}${borderStyle.br}`
  );
  if (opts.style.marginBottom > 0) {
    boxLines.push("".repeat(opts.style.marginBottom));
  }
  return boxLines.join("\n");
}

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/index.mjs
import "util";
import "path";
import "tty";
var r2 = /* @__PURE__ */ Object.create(null);
var i = (e2) => globalThis.process?.env || import.meta.env || globalThis.Deno?.env.toObject() || globalThis.__env__ || (e2 ? r2 : globalThis);
var o2 = new Proxy(r2, { get(e2, s2) {
  return i()[s2] ?? r2[s2];
}, has(e2, s2) {
  const E = i();
  return s2 in E || s2 in r2;
}, set(e2, s2, E) {
  const B2 = i(true);
  return B2[s2] = E, true;
}, deleteProperty(e2, s2) {
  if (!s2) return false;
  const E = i(true);
  return delete E[s2], true;
}, ownKeys() {
  const e2 = i(true);
  return Object.keys(e2);
} });
var t = typeof process < "u" && process.env && process.env.NODE_ENV || "";
var f2 = [["APPVEYOR"], ["AWS_AMPLIFY", "AWS_APP_ID", { ci: true }], ["AZURE_PIPELINES", "SYSTEM_TEAMFOUNDATIONCOLLECTIONURI"], ["AZURE_STATIC", "INPUT_AZURE_STATIC_WEB_APPS_API_TOKEN"], ["APPCIRCLE", "AC_APPCIRCLE"], ["BAMBOO", "bamboo_planKey"], ["BITBUCKET", "BITBUCKET_COMMIT"], ["BITRISE", "BITRISE_IO"], ["BUDDY", "BUDDY_WORKSPACE_ID"], ["BUILDKITE"], ["CIRCLE", "CIRCLECI"], ["CIRRUS", "CIRRUS_CI"], ["CLOUDFLARE_PAGES", "CF_PAGES", { ci: true }], ["CODEBUILD", "CODEBUILD_BUILD_ARN"], ["CODEFRESH", "CF_BUILD_ID"], ["DRONE"], ["DRONE", "DRONE_BUILD_EVENT"], ["DSARI"], ["GITHUB_ACTIONS"], ["GITLAB", "GITLAB_CI"], ["GITLAB", "CI_MERGE_REQUEST_ID"], ["GOCD", "GO_PIPELINE_LABEL"], ["LAYERCI"], ["HUDSON", "HUDSON_URL"], ["JENKINS", "JENKINS_URL"], ["MAGNUM"], ["NETLIFY"], ["NETLIFY", "NETLIFY_LOCAL", { ci: false }], ["NEVERCODE"], ["RENDER"], ["SAIL", "SAILCI"], ["SEMAPHORE"], ["SCREWDRIVER"], ["SHIPPABLE"], ["SOLANO", "TDDIUM"], ["STRIDER"], ["TEAMCITY", "TEAMCITY_VERSION"], ["TRAVIS"], ["VERCEL", "NOW_BUILDER"], ["VERCEL", "VERCEL", { ci: false }], ["VERCEL", "VERCEL_ENV", { ci: false }], ["APPCENTER", "APPCENTER_BUILD_ID"], ["CODESANDBOX", "CODESANDBOX_SSE", { ci: false }], ["CODESANDBOX", "CODESANDBOX_HOST", { ci: false }], ["STACKBLITZ"], ["STORMKIT"], ["CLEAVR"], ["ZEABUR"], ["CODESPHERE", "CODESPHERE_APP_ID", { ci: true }], ["RAILWAY", "RAILWAY_PROJECT_ID"], ["RAILWAY", "RAILWAY_SERVICE_ID"], ["DENO-DEPLOY", "DENO_DEPLOYMENT_ID"], ["FIREBASE_APP_HOSTING", "FIREBASE_APP_HOSTING", { ci: true }]];
function b() {
  if (globalThis.process?.env) for (const e2 of f2) {
    const s2 = e2[1] || e2[0];
    if (globalThis.process?.env[s2]) return { name: e2[0].toLowerCase(), ...e2[2] };
  }
  return globalThis.process?.env?.SHELL === "/bin/jsh" && globalThis.process?.versions?.webcontainer ? { name: "stackblitz", ci: false } : { name: "", ci: false };
}
var l = b();
l.name;
function n(e2) {
  return e2 ? e2 !== "false" : false;
}
var I2 = globalThis.process?.platform || "";
var T2 = n(o2.CI) || l.ci !== false;
var a = n(globalThis.process?.stdout && globalThis.process?.stdout.isTTY);
var g2 = n(o2.DEBUG);
var R2 = t === "test" || n(o2.TEST);
n(o2.MINIMAL) || T2 || R2 || !a;
var A2 = /^win/i.test(I2);
!n(o2.NO_COLOR) && (n(o2.FORCE_COLOR) || (a || A2) && o2.TERM !== "dumb" || T2);
var C2 = (globalThis.process?.versions?.node || "").replace(/^v/, "") || null;
Number(C2?.split(".")[0]) || null;
var y2 = globalThis.process || /* @__PURE__ */ Object.create(null);
var _2 = { versions: {} };
new Proxy(y2, { get(e2, s2) {
  if (s2 === "env") return o2;
  if (s2 in e2) return e2[s2];
  if (s2 in _2) return _2[s2];
} });
var c2 = globalThis.process?.release?.name === "node";
var O2 = !!globalThis.Bun || !!globalThis.process?.versions?.bun;
var D = !!globalThis.Deno;
var L2 = !!globalThis.fastly;
var S2 = !!globalThis.Netlify;
var u2 = !!globalThis.EdgeRuntime;
var N2 = globalThis.navigator?.userAgent === "Cloudflare-Workers";
var F2 = [[S2, "netlify"], [u2, "edge-light"], [N2, "workerd"], [L2, "fastly"], [D, "deno"], [O2, "bun"], [c2, "node"]];
function G2() {
  const e2 = F2.find((s2) => s2[0]);
  if (e2) return { name: e2[1] };
}
var P2 = G2();
P2?.name || "";
function ansiRegex2({ onlyFirst = false } = {}) {
  const ST = "(?:\\u0007|\\u001B\\u005C|\\u009C)";
  const pattern = [
    `[\\u001B\\u009B][[\\]()#;?]*(?:(?:(?:(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]+)*|[a-zA-Z\\d]+(?:;[-a-zA-Z\\d\\/#&.:=?%@~_]*)*)?${ST})`,
    "(?:(?:\\d{1,4}(?:;\\d{0,4})*)?[\\dA-PR-TZcf-nq-uy=><~]))"
  ].join("|");
  return new RegExp(pattern, onlyFirst ? void 0 : "g");
}
var regex = ansiRegex2();
function stripAnsi2(string) {
  if (typeof string !== "string") {
    throw new TypeError(`Expected a \`string\`, got \`${typeof string}\``);
  }
  return string.replace(regex, "");
}
function isAmbiguous(x2) {
  return x2 === 161 || x2 === 164 || x2 === 167 || x2 === 168 || x2 === 170 || x2 === 173 || x2 === 174 || x2 >= 176 && x2 <= 180 || x2 >= 182 && x2 <= 186 || x2 >= 188 && x2 <= 191 || x2 === 198 || x2 === 208 || x2 === 215 || x2 === 216 || x2 >= 222 && x2 <= 225 || x2 === 230 || x2 >= 232 && x2 <= 234 || x2 === 236 || x2 === 237 || x2 === 240 || x2 === 242 || x2 === 243 || x2 >= 247 && x2 <= 250 || x2 === 252 || x2 === 254 || x2 === 257 || x2 === 273 || x2 === 275 || x2 === 283 || x2 === 294 || x2 === 295 || x2 === 299 || x2 >= 305 && x2 <= 307 || x2 === 312 || x2 >= 319 && x2 <= 322 || x2 === 324 || x2 >= 328 && x2 <= 331 || x2 === 333 || x2 === 338 || x2 === 339 || x2 === 358 || x2 === 359 || x2 === 363 || x2 === 462 || x2 === 464 || x2 === 466 || x2 === 468 || x2 === 470 || x2 === 472 || x2 === 474 || x2 === 476 || x2 === 593 || x2 === 609 || x2 === 708 || x2 === 711 || x2 >= 713 && x2 <= 715 || x2 === 717 || x2 === 720 || x2 >= 728 && x2 <= 731 || x2 === 733 || x2 === 735 || x2 >= 768 && x2 <= 879 || x2 >= 913 && x2 <= 929 || x2 >= 931 && x2 <= 937 || x2 >= 945 && x2 <= 961 || x2 >= 963 && x2 <= 969 || x2 === 1025 || x2 >= 1040 && x2 <= 1103 || x2 === 1105 || x2 === 8208 || x2 >= 8211 && x2 <= 8214 || x2 === 8216 || x2 === 8217 || x2 === 8220 || x2 === 8221 || x2 >= 8224 && x2 <= 8226 || x2 >= 8228 && x2 <= 8231 || x2 === 8240 || x2 === 8242 || x2 === 8243 || x2 === 8245 || x2 === 8251 || x2 === 8254 || x2 === 8308 || x2 === 8319 || x2 >= 8321 && x2 <= 8324 || x2 === 8364 || x2 === 8451 || x2 === 8453 || x2 === 8457 || x2 === 8467 || x2 === 8470 || x2 === 8481 || x2 === 8482 || x2 === 8486 || x2 === 8491 || x2 === 8531 || x2 === 8532 || x2 >= 8539 && x2 <= 8542 || x2 >= 8544 && x2 <= 8555 || x2 >= 8560 && x2 <= 8569 || x2 === 8585 || x2 >= 8592 && x2 <= 8601 || x2 === 8632 || x2 === 8633 || x2 === 8658 || x2 === 8660 || x2 === 8679 || x2 === 8704 || x2 === 8706 || x2 === 8707 || x2 === 8711 || x2 === 8712 || x2 === 8715 || x2 === 8719 || x2 === 8721 || x2 === 8725 || x2 === 8730 || x2 >= 8733 && x2 <= 8736 || x2 === 8739 || x2 === 8741 || x2 >= 8743 && x2 <= 8748 || x2 === 8750 || x2 >= 8756 && x2 <= 8759 || x2 === 8764 || x2 === 8765 || x2 === 8776 || x2 === 8780 || x2 === 8786 || x2 === 8800 || x2 === 8801 || x2 >= 8804 && x2 <= 8807 || x2 === 8810 || x2 === 8811 || x2 === 8814 || x2 === 8815 || x2 === 8834 || x2 === 8835 || x2 === 8838 || x2 === 8839 || x2 === 8853 || x2 === 8857 || x2 === 8869 || x2 === 8895 || x2 === 8978 || x2 >= 9312 && x2 <= 9449 || x2 >= 9451 && x2 <= 9547 || x2 >= 9552 && x2 <= 9587 || x2 >= 9600 && x2 <= 9615 || x2 >= 9618 && x2 <= 9621 || x2 === 9632 || x2 === 9633 || x2 >= 9635 && x2 <= 9641 || x2 === 9650 || x2 === 9651 || x2 === 9654 || x2 === 9655 || x2 === 9660 || x2 === 9661 || x2 === 9664 || x2 === 9665 || x2 >= 9670 && x2 <= 9672 || x2 === 9675 || x2 >= 9678 && x2 <= 9681 || x2 >= 9698 && x2 <= 9701 || x2 === 9711 || x2 === 9733 || x2 === 9734 || x2 === 9737 || x2 === 9742 || x2 === 9743 || x2 === 9756 || x2 === 9758 || x2 === 9792 || x2 === 9794 || x2 === 9824 || x2 === 9825 || x2 >= 9827 && x2 <= 9829 || x2 >= 9831 && x2 <= 9834 || x2 === 9836 || x2 === 9837 || x2 === 9839 || x2 === 9886 || x2 === 9887 || x2 === 9919 || x2 >= 9926 && x2 <= 9933 || x2 >= 9935 && x2 <= 9939 || x2 >= 9941 && x2 <= 9953 || x2 === 9955 || x2 === 9960 || x2 === 9961 || x2 >= 9963 && x2 <= 9969 || x2 === 9972 || x2 >= 9974 && x2 <= 9977 || x2 === 9979 || x2 === 9980 || x2 === 9982 || x2 === 9983 || x2 === 10045 || x2 >= 10102 && x2 <= 10111 || x2 >= 11094 && x2 <= 11097 || x2 >= 12872 && x2 <= 12879 || x2 >= 57344 && x2 <= 63743 || x2 >= 65024 && x2 <= 65039 || x2 === 65533 || x2 >= 127232 && x2 <= 127242 || x2 >= 127248 && x2 <= 127277 || x2 >= 127280 && x2 <= 127337 || x2 >= 127344 && x2 <= 127373 || x2 === 127375 || x2 === 127376 || x2 >= 127387 && x2 <= 127404 || x2 >= 917760 && x2 <= 917999 || x2 >= 983040 && x2 <= 1048573 || x2 >= 1048576 && x2 <= 1114109;
}
function isFullWidth(x2) {
  return x2 === 12288 || x2 >= 65281 && x2 <= 65376 || x2 >= 65504 && x2 <= 65510;
}
function isWide(x2) {
  return x2 >= 4352 && x2 <= 4447 || x2 === 8986 || x2 === 8987 || x2 === 9001 || x2 === 9002 || x2 >= 9193 && x2 <= 9196 || x2 === 9200 || x2 === 9203 || x2 === 9725 || x2 === 9726 || x2 === 9748 || x2 === 9749 || x2 >= 9776 && x2 <= 9783 || x2 >= 9800 && x2 <= 9811 || x2 === 9855 || x2 >= 9866 && x2 <= 9871 || x2 === 9875 || x2 === 9889 || x2 === 9898 || x2 === 9899 || x2 === 9917 || x2 === 9918 || x2 === 9924 || x2 === 9925 || x2 === 9934 || x2 === 9940 || x2 === 9962 || x2 === 9970 || x2 === 9971 || x2 === 9973 || x2 === 9978 || x2 === 9981 || x2 === 9989 || x2 === 9994 || x2 === 9995 || x2 === 10024 || x2 === 10060 || x2 === 10062 || x2 >= 10067 && x2 <= 10069 || x2 === 10071 || x2 >= 10133 && x2 <= 10135 || x2 === 10160 || x2 === 10175 || x2 === 11035 || x2 === 11036 || x2 === 11088 || x2 === 11093 || x2 >= 11904 && x2 <= 11929 || x2 >= 11931 && x2 <= 12019 || x2 >= 12032 && x2 <= 12245 || x2 >= 12272 && x2 <= 12287 || x2 >= 12289 && x2 <= 12350 || x2 >= 12353 && x2 <= 12438 || x2 >= 12441 && x2 <= 12543 || x2 >= 12549 && x2 <= 12591 || x2 >= 12593 && x2 <= 12686 || x2 >= 12688 && x2 <= 12773 || x2 >= 12783 && x2 <= 12830 || x2 >= 12832 && x2 <= 12871 || x2 >= 12880 && x2 <= 42124 || x2 >= 42128 && x2 <= 42182 || x2 >= 43360 && x2 <= 43388 || x2 >= 44032 && x2 <= 55203 || x2 >= 63744 && x2 <= 64255 || x2 >= 65040 && x2 <= 65049 || x2 >= 65072 && x2 <= 65106 || x2 >= 65108 && x2 <= 65126 || x2 >= 65128 && x2 <= 65131 || x2 >= 94176 && x2 <= 94180 || x2 === 94192 || x2 === 94193 || x2 >= 94208 && x2 <= 100343 || x2 >= 100352 && x2 <= 101589 || x2 >= 101631 && x2 <= 101640 || x2 >= 110576 && x2 <= 110579 || x2 >= 110581 && x2 <= 110587 || x2 === 110589 || x2 === 110590 || x2 >= 110592 && x2 <= 110882 || x2 === 110898 || x2 >= 110928 && x2 <= 110930 || x2 === 110933 || x2 >= 110948 && x2 <= 110951 || x2 >= 110960 && x2 <= 111355 || x2 >= 119552 && x2 <= 119638 || x2 >= 119648 && x2 <= 119670 || x2 === 126980 || x2 === 127183 || x2 === 127374 || x2 >= 127377 && x2 <= 127386 || x2 >= 127488 && x2 <= 127490 || x2 >= 127504 && x2 <= 127547 || x2 >= 127552 && x2 <= 127560 || x2 === 127568 || x2 === 127569 || x2 >= 127584 && x2 <= 127589 || x2 >= 127744 && x2 <= 127776 || x2 >= 127789 && x2 <= 127797 || x2 >= 127799 && x2 <= 127868 || x2 >= 127870 && x2 <= 127891 || x2 >= 127904 && x2 <= 127946 || x2 >= 127951 && x2 <= 127955 || x2 >= 127968 && x2 <= 127984 || x2 === 127988 || x2 >= 127992 && x2 <= 128062 || x2 === 128064 || x2 >= 128066 && x2 <= 128252 || x2 >= 128255 && x2 <= 128317 || x2 >= 128331 && x2 <= 128334 || x2 >= 128336 && x2 <= 128359 || x2 === 128378 || x2 === 128405 || x2 === 128406 || x2 === 128420 || x2 >= 128507 && x2 <= 128591 || x2 >= 128640 && x2 <= 128709 || x2 === 128716 || x2 >= 128720 && x2 <= 128722 || x2 >= 128725 && x2 <= 128727 || x2 >= 128732 && x2 <= 128735 || x2 === 128747 || x2 === 128748 || x2 >= 128756 && x2 <= 128764 || x2 >= 128992 && x2 <= 129003 || x2 === 129008 || x2 >= 129292 && x2 <= 129338 || x2 >= 129340 && x2 <= 129349 || x2 >= 129351 && x2 <= 129535 || x2 >= 129648 && x2 <= 129660 || x2 >= 129664 && x2 <= 129673 || x2 >= 129679 && x2 <= 129734 || x2 >= 129742 && x2 <= 129756 || x2 >= 129759 && x2 <= 129769 || x2 >= 129776 && x2 <= 129784 || x2 >= 131072 && x2 <= 196605 || x2 >= 196608 && x2 <= 262141;
}
function validate(codePoint) {
  if (!Number.isSafeInteger(codePoint)) {
    throw new TypeError(`Expected a code point, got \`${typeof codePoint}\`.`);
  }
}
function eastAsianWidth(codePoint, { ambiguousAsWide = false } = {}) {
  validate(codePoint);
  if (isFullWidth(codePoint) || isWide(codePoint) || ambiguousAsWide && isAmbiguous(codePoint)) {
    return 2;
  }
  return 1;
}
var emojiRegex = () => {
  return /[#*0-9]\uFE0F?\u20E3|[\xA9\xAE\u203C\u2049\u2122\u2139\u2194-\u2199\u21A9\u21AA\u231A\u231B\u2328\u23CF\u23ED-\u23EF\u23F1\u23F2\u23F8-\u23FA\u24C2\u25AA\u25AB\u25B6\u25C0\u25FB\u25FC\u25FE\u2600-\u2604\u260E\u2611\u2614\u2615\u2618\u2620\u2622\u2623\u2626\u262A\u262E\u262F\u2638-\u263A\u2640\u2642\u2648-\u2653\u265F\u2660\u2663\u2665\u2666\u2668\u267B\u267E\u267F\u2692\u2694-\u2697\u2699\u269B\u269C\u26A0\u26A7\u26AA\u26B0\u26B1\u26BD\u26BE\u26C4\u26C8\u26CF\u26D1\u26E9\u26F0-\u26F5\u26F7\u26F8\u26FA\u2702\u2708\u2709\u270F\u2712\u2714\u2716\u271D\u2721\u2733\u2734\u2744\u2747\u2757\u2763\u27A1\u2934\u2935\u2B05-\u2B07\u2B1B\u2B1C\u2B55\u3030\u303D\u3297\u3299]\uFE0F?|[\u261D\u270C\u270D](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\u270A\u270B](?:\uD83C[\uDFFB-\uDFFF])?|[\u23E9-\u23EC\u23F0\u23F3\u25FD\u2693\u26A1\u26AB\u26C5\u26CE\u26D4\u26EA\u26FD\u2705\u2728\u274C\u274E\u2753-\u2755\u2795-\u2797\u27B0\u27BF\u2B50]|\u26D3\uFE0F?(?:\u200D\uD83D\uDCA5)?|\u26F9(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\u2764\uFE0F?(?:\u200D(?:\uD83D\uDD25|\uD83E\uDE79))?|\uD83C(?:[\uDC04\uDD70\uDD71\uDD7E\uDD7F\uDE02\uDE37\uDF21\uDF24-\uDF2C\uDF36\uDF7D\uDF96\uDF97\uDF99-\uDF9B\uDF9E\uDF9F\uDFCD\uDFCE\uDFD4-\uDFDF\uDFF5\uDFF7]\uFE0F?|[\uDF85\uDFC2\uDFC7](?:\uD83C[\uDFFB-\uDFFF])?|[\uDFC4\uDFCA](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDFCB\uDFCC](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDCCF\uDD8E\uDD91-\uDD9A\uDE01\uDE1A\uDE2F\uDE32-\uDE36\uDE38-\uDE3A\uDE50\uDE51\uDF00-\uDF20\uDF2D-\uDF35\uDF37-\uDF43\uDF45-\uDF4A\uDF4C-\uDF7C\uDF7E-\uDF84\uDF86-\uDF93\uDFA0-\uDFC1\uDFC5\uDFC6\uDFC8\uDFC9\uDFCF-\uDFD3\uDFE0-\uDFF0\uDFF8-\uDFFF]|\uDDE6\uD83C[\uDDE8-\uDDEC\uDDEE\uDDF1\uDDF2\uDDF4\uDDF6-\uDDFA\uDDFC\uDDFD\uDDFF]|\uDDE7\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEF\uDDF1-\uDDF4\uDDF6-\uDDF9\uDDFB\uDDFC\uDDFE\uDDFF]|\uDDE8\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDEE\uDDF0-\uDDF7\uDDFA-\uDDFF]|\uDDE9\uD83C[\uDDEA\uDDEC\uDDEF\uDDF0\uDDF2\uDDF4\uDDFF]|\uDDEA\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDED\uDDF7-\uDDFA]|\uDDEB\uD83C[\uDDEE-\uDDF0\uDDF2\uDDF4\uDDF7]|\uDDEC\uD83C[\uDDE6\uDDE7\uDDE9-\uDDEE\uDDF1-\uDDF3\uDDF5-\uDDFA\uDDFC\uDDFE]|\uDDED\uD83C[\uDDF0\uDDF2\uDDF3\uDDF7\uDDF9\uDDFA]|\uDDEE\uD83C[\uDDE8-\uDDEA\uDDF1-\uDDF4\uDDF6-\uDDF9]|\uDDEF\uD83C[\uDDEA\uDDF2\uDDF4\uDDF5]|\uDDF0\uD83C[\uDDEA\uDDEC-\uDDEE\uDDF2\uDDF3\uDDF5\uDDF7\uDDFC\uDDFE\uDDFF]|\uDDF1\uD83C[\uDDE6-\uDDE8\uDDEE\uDDF0\uDDF7-\uDDFB\uDDFE]|\uDDF2\uD83C[\uDDE6\uDDE8-\uDDED\uDDF0-\uDDFF]|\uDDF3\uD83C[\uDDE6\uDDE8\uDDEA-\uDDEC\uDDEE\uDDF1\uDDF4\uDDF5\uDDF7\uDDFA\uDDFF]|\uDDF4\uD83C\uDDF2|\uDDF5\uD83C[\uDDE6\uDDEA-\uDDED\uDDF0-\uDDF3\uDDF7-\uDDF9\uDDFC\uDDFE]|\uDDF6\uD83C\uDDE6|\uDDF7\uD83C[\uDDEA\uDDF4\uDDF8\uDDFA\uDDFC]|\uDDF8\uD83C[\uDDE6-\uDDEA\uDDEC-\uDDF4\uDDF7-\uDDF9\uDDFB\uDDFD-\uDDFF]|\uDDF9\uD83C[\uDDE6\uDDE8\uDDE9\uDDEB-\uDDED\uDDEF-\uDDF4\uDDF7\uDDF9\uDDFB\uDDFC\uDDFF]|\uDDFA\uD83C[\uDDE6\uDDEC\uDDF2\uDDF3\uDDF8\uDDFE\uDDFF]|\uDDFB\uD83C[\uDDE6\uDDE8\uDDEA\uDDEC\uDDEE\uDDF3\uDDFA]|\uDDFC\uD83C[\uDDEB\uDDF8]|\uDDFD\uD83C\uDDF0|\uDDFE\uD83C[\uDDEA\uDDF9]|\uDDFF\uD83C[\uDDE6\uDDF2\uDDFC]|\uDF44(?:\u200D\uD83D\uDFEB)?|\uDF4B(?:\u200D\uD83D\uDFE9)?|\uDFC3(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDFF3\uFE0F?(?:\u200D(?:\u26A7\uFE0F?|\uD83C\uDF08))?|\uDFF4(?:\u200D\u2620\uFE0F?|\uDB40\uDC67\uDB40\uDC62\uDB40(?:\uDC65\uDB40\uDC6E\uDB40\uDC67|\uDC73\uDB40\uDC63\uDB40\uDC74|\uDC77\uDB40\uDC6C\uDB40\uDC73)\uDB40\uDC7F)?)|\uD83D(?:[\uDC3F\uDCFD\uDD49\uDD4A\uDD6F\uDD70\uDD73\uDD76-\uDD79\uDD87\uDD8A-\uDD8D\uDDA5\uDDA8\uDDB1\uDDB2\uDDBC\uDDC2-\uDDC4\uDDD1-\uDDD3\uDDDC-\uDDDE\uDDE1\uDDE3\uDDE8\uDDEF\uDDF3\uDDFA\uDECB\uDECD-\uDECF\uDEE0-\uDEE5\uDEE9\uDEF0\uDEF3]\uFE0F?|[\uDC42\uDC43\uDC46-\uDC50\uDC66\uDC67\uDC6B-\uDC6D\uDC72\uDC74-\uDC76\uDC78\uDC7C\uDC83\uDC85\uDC8F\uDC91\uDCAA\uDD7A\uDD95\uDD96\uDE4C\uDE4F\uDEC0\uDECC](?:\uD83C[\uDFFB-\uDFFF])?|[\uDC6E\uDC70\uDC71\uDC73\uDC77\uDC81\uDC82\uDC86\uDC87\uDE45-\uDE47\uDE4B\uDE4D\uDE4E\uDEA3\uDEB4\uDEB5](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD74\uDD90](?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?|[\uDC00-\uDC07\uDC09-\uDC14\uDC16-\uDC25\uDC27-\uDC3A\uDC3C-\uDC3E\uDC40\uDC44\uDC45\uDC51-\uDC65\uDC6A\uDC79-\uDC7B\uDC7D-\uDC80\uDC84\uDC88-\uDC8E\uDC90\uDC92-\uDCA9\uDCAB-\uDCFC\uDCFF-\uDD3D\uDD4B-\uDD4E\uDD50-\uDD67\uDDA4\uDDFB-\uDE2D\uDE2F-\uDE34\uDE37-\uDE41\uDE43\uDE44\uDE48-\uDE4A\uDE80-\uDEA2\uDEA4-\uDEB3\uDEB7-\uDEBF\uDEC1-\uDEC5\uDED0-\uDED2\uDED5-\uDED7\uDEDC-\uDEDF\uDEEB\uDEEC\uDEF4-\uDEFC\uDFE0-\uDFEB\uDFF0]|\uDC08(?:\u200D\u2B1B)?|\uDC15(?:\u200D\uD83E\uDDBA)?|\uDC26(?:\u200D(?:\u2B1B|\uD83D\uDD25))?|\uDC3B(?:\u200D\u2744\uFE0F?)?|\uDC41\uFE0F?(?:\u200D\uD83D\uDDE8\uFE0F?)?|\uDC68(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDC68\uDC69]\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?)|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?\uDC68\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D\uDC68\uD83C[\uDFFB-\uDFFE])))?))?|\uDC69(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:\uDC8B\u200D\uD83D)?[\uDC68\uDC69]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D(?:[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?|\uDC69\u200D\uD83D(?:\uDC66(?:\u200D\uD83D\uDC66)?|\uDC67(?:\u200D\uD83D[\uDC66\uDC67])?))|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFC-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFD-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFD\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D\uD83D(?:[\uDC68\uDC69]|\uDC8B\u200D\uD83D[\uDC68\uDC69])\uD83C[\uDFFB-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83D[\uDC68\uDC69]\uD83C[\uDFFB-\uDFFE])))?))?|\uDC6F(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDD75(?:\uD83C[\uDFFB-\uDFFF]|\uFE0F)?(?:\u200D[\u2640\u2642]\uFE0F?)?|\uDE2E(?:\u200D\uD83D\uDCA8)?|\uDE35(?:\u200D\uD83D\uDCAB)?|\uDE36(?:\u200D\uD83C\uDF2B\uFE0F?)?|\uDE42(?:\u200D[\u2194\u2195]\uFE0F?)?|\uDEB6(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?)|\uD83E(?:[\uDD0C\uDD0F\uDD18-\uDD1F\uDD30-\uDD34\uDD36\uDD77\uDDB5\uDDB6\uDDBB\uDDD2\uDDD3\uDDD5\uDEC3-\uDEC5\uDEF0\uDEF2-\uDEF8](?:\uD83C[\uDFFB-\uDFFF])?|[\uDD26\uDD35\uDD37-\uDD39\uDD3D\uDD3E\uDDB8\uDDB9\uDDCD\uDDCF\uDDD4\uDDD6-\uDDDD](?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDDDE\uDDDF](?:\u200D[\u2640\u2642]\uFE0F?)?|[\uDD0D\uDD0E\uDD10-\uDD17\uDD20-\uDD25\uDD27-\uDD2F\uDD3A\uDD3F-\uDD45\uDD47-\uDD76\uDD78-\uDDB4\uDDB7\uDDBA\uDDBC-\uDDCC\uDDD0\uDDE0-\uDDFF\uDE70-\uDE7C\uDE80-\uDE89\uDE8F-\uDEC2\uDEC6\uDECE-\uDEDC\uDEDF-\uDEE9]|\uDD3C(?:\u200D[\u2640\u2642]\uFE0F?|\uD83C[\uDFFB-\uDFFF])?|\uDDCE(?:\uD83C[\uDFFB-\uDFFF])?(?:\u200D(?:[\u2640\u2642]\uFE0F?(?:\u200D\u27A1\uFE0F?)?|\u27A1\uFE0F?))?|\uDDD1(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1|\uDDD1\u200D\uD83E\uDDD2(?:\u200D\uD83E\uDDD2)?|\uDDD2(?:\u200D\uD83E\uDDD2)?))|\uD83C(?:\uDFFB(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFC-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFC(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFD-\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFD(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFE(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFD\uDFFF]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?|\uDFFF(?:\u200D(?:[\u2695\u2696\u2708]\uFE0F?|\u2764\uFE0F?\u200D(?:\uD83D\uDC8B\u200D)?\uD83E\uDDD1\uD83C[\uDFFB-\uDFFE]|\uD83C[\uDF3E\uDF73\uDF7C\uDF84\uDF93\uDFA4\uDFA8\uDFEB\uDFED]|\uD83D[\uDCBB\uDCBC\uDD27\uDD2C\uDE80\uDE92]|\uD83E(?:[\uDDAF\uDDBC\uDDBD](?:\u200D\u27A1\uFE0F?)?|[\uDDB0-\uDDB3]|\uDD1D\u200D\uD83E\uDDD1\uD83C[\uDFFB-\uDFFF])))?))?|\uDEF1(?:\uD83C(?:\uDFFB(?:\u200D\uD83E\uDEF2\uD83C[\uDFFC-\uDFFF])?|\uDFFC(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFD-\uDFFF])?|\uDFFD(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB\uDFFC\uDFFE\uDFFF])?|\uDFFE(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFD\uDFFF])?|\uDFFF(?:\u200D\uD83E\uDEF2\uD83C[\uDFFB-\uDFFE])?))?)/g;
};
var segmenter = globalThis.Intl?.Segmenter ? new Intl.Segmenter() : { segment: (str) => str.split("") };
var defaultIgnorableCodePointRegex = /^\p{Default_Ignorable_Code_Point}$/u;
function stringWidth$1(string, options = {}) {
  if (typeof string !== "string" || string.length === 0) {
    return 0;
  }
  const {
    ambiguousIsNarrow = true,
    countAnsiEscapeCodes = false
  } = options;
  if (!countAnsiEscapeCodes) {
    string = stripAnsi2(string);
  }
  if (string.length === 0) {
    return 0;
  }
  let width = 0;
  const eastAsianWidthOptions = { ambiguousAsWide: !ambiguousIsNarrow };
  for (const { segment: character } of segmenter.segment(string)) {
    const codePoint = character.codePointAt(0);
    if (codePoint <= 31 || codePoint >= 127 && codePoint <= 159) {
      continue;
    }
    if (codePoint >= 8203 && codePoint <= 8207 || codePoint === 65279) {
      continue;
    }
    if (codePoint >= 768 && codePoint <= 879 || codePoint >= 6832 && codePoint <= 6911 || codePoint >= 7616 && codePoint <= 7679 || codePoint >= 8400 && codePoint <= 8447 || codePoint >= 65056 && codePoint <= 65071) {
      continue;
    }
    if (codePoint >= 55296 && codePoint <= 57343) {
      continue;
    }
    if (codePoint >= 65024 && codePoint <= 65039) {
      continue;
    }
    if (defaultIgnorableCodePointRegex.test(character)) {
      continue;
    }
    if (emojiRegex().test(character)) {
      width += 2;
      continue;
    }
    width += eastAsianWidth(codePoint, eastAsianWidthOptions);
  }
  return width;
}
function isUnicodeSupported() {
  const { env: env2 } = g$1;
  const { TERM, TERM_PROGRAM } = env2;
  if (g$1.platform !== "win32") {
    return TERM !== "linux";
  }
  return Boolean(env2.WT_SESSION) || Boolean(env2.TERMINUS_SUBLIME) || env2.ConEmuTask === "{cmd::Cmder}" || TERM_PROGRAM === "Terminus-Sublime" || TERM_PROGRAM === "vscode" || TERM === "xterm-256color" || TERM === "alacritty" || TERM === "rxvt-unicode" || TERM === "rxvt-unicode-256color" || env2.TERMINAL_EMULATOR === "JetBrains-JediTerm";
}
var TYPE_COLOR_MAP = {
  info: "cyan",
  fail: "red",
  success: "green",
  ready: "green",
  start: "magenta"
};
var LEVEL_COLOR_MAP = {
  0: "red",
  1: "yellow"
};
var unicode = isUnicodeSupported();
var s = (c3, fallback) => unicode ? c3 : fallback;
var TYPE_ICONS = {
  error: s("\u2716", "\xD7"),
  fatal: s("\u2716", "\xD7"),
  ready: s("\u2714", "\u221A"),
  warn: s("\u26A0", "\u203C"),
  info: s("\u2139", "i"),
  success: s("\u2714", "\u221A"),
  debug: s("\u2699", "D"),
  trace: s("\u2192", "\u2192"),
  fail: s("\u2716", "\xD7"),
  start: s("\u25D0", "o"),
  log: ""
};
function stringWidth(str) {
  const hasICU = typeof Intl === "object";
  if (!hasICU || !Intl.Segmenter) {
    return stripAnsi(str).length;
  }
  return stringWidth$1(str);
}
var FancyReporter = class extends BasicReporter {
  formatStack(stack, message, opts) {
    const indent = "  ".repeat((opts?.errorLevel || 0) + 1);
    return `
${indent}` + parseStack(stack, message).map(
      (line) => "  " + line.replace(/^at +/, (m2) => colors.gray(m2)).replace(/\((.+)\)/, (_3, m2) => `(${colors.cyan(m2)})`)
    ).join(`
${indent}`);
  }
  formatType(logObj, isBadge, opts) {
    const typeColor = TYPE_COLOR_MAP[logObj.type] || LEVEL_COLOR_MAP[logObj.level] || "gray";
    if (isBadge) {
      return getBgColor(typeColor)(
        colors.black(` ${logObj.type.toUpperCase()} `)
      );
    }
    const _type = typeof TYPE_ICONS[logObj.type] === "string" ? TYPE_ICONS[logObj.type] : logObj.icon || logObj.type;
    return _type ? getColor2(typeColor)(_type) : "";
  }
  formatLogObj(logObj, opts) {
    const [message, ...additional] = this.formatArgs(logObj.args, opts).split(
      "\n"
    );
    if (logObj.type === "box") {
      return box(
        characterFormat(
          message + (additional.length > 0 ? "\n" + additional.join("\n") : "")
        ),
        {
          title: logObj.title ? characterFormat(logObj.title) : void 0,
          style: logObj.style
        }
      );
    }
    const date = this.formatDate(logObj.date, opts);
    const coloredDate = date && colors.gray(date);
    const isBadge = logObj.badge ?? logObj.level < 2;
    const type = this.formatType(logObj, isBadge, opts);
    const tag = logObj.tag ? colors.gray(logObj.tag) : "";
    let line;
    const left = this.filterAndJoin([type, characterFormat(message)]);
    const right = this.filterAndJoin(opts.columns ? [tag, coloredDate] : [tag]);
    const space = (opts.columns || 0) - stringWidth(left) - stringWidth(right) - 2;
    line = space > 0 && (opts.columns || 0) >= 80 ? left + " ".repeat(space) + right : (right ? `${colors.gray(`[${right}]`)} ` : "") + left;
    line += characterFormat(
      additional.length > 0 ? "\n" + additional.join("\n") : ""
    );
    if (logObj.type === "trace") {
      const _err = new Error("Trace: " + logObj.message);
      line += this.formatStack(_err.stack || "", _err.message);
    }
    return isBadge ? "\n" + line + "\n" : line;
  }
};
function characterFormat(str) {
  return str.replace(/`([^`]+)`/gm, (_3, m2) => colors.cyan(m2)).replace(/\s+_([^_]+)_\s+/gm, (_3, m2) => ` ${colors.underline(m2)} `);
}
function getColor2(color = "white") {
  return colors[color] || colors.white;
}
function getBgColor(color = "bgWhite") {
  return colors[`bg${color[0].toUpperCase()}${color.slice(1)}`] || colors.bgWhite;
}
function createConsola2(options = {}) {
  let level = _getDefaultLogLevel();
  if (process.env.CONSOLA_LEVEL) {
    level = Number.parseInt(process.env.CONSOLA_LEVEL) ?? level;
  }
  const consola2 = createConsola({
    level,
    defaults: { level },
    stdout: process.stdout,
    stderr: process.stderr,
    prompt: (...args) => Promise.resolve().then(() => (init_prompt(), prompt_exports)).then((m2) => m2.prompt(...args)),
    reporters: options.reporters || [
      options.fancy ?? !(T2 || R2) ? new FancyReporter() : new BasicReporter()
    ],
    ...options
  });
  return consola2;
}
function _getDefaultLogLevel() {
  if (g2) {
    return LogLevels.debug;
  }
  if (R2) {
    return LogLevels.warn;
  }
  return LogLevels.info;
}
var consola = createConsola2();

// ../../node_modules/.pnpm/consola@3.4.2/node_modules/consola/dist/utils.mjs
import "tty";

// ../../node_modules/.pnpm/citty@0.1.6/node_modules/citty/dist/index.mjs
function toArray(val) {
  if (Array.isArray(val)) {
    return val;
  }
  return val === void 0 ? [] : [val];
}
function formatLineColumns(lines, linePrefix = "") {
  const maxLengh = [];
  for (const line of lines) {
    for (const [i2, element] of line.entries()) {
      maxLengh[i2] = Math.max(maxLengh[i2] || 0, element.length);
    }
  }
  return lines.map(
    (l2) => l2.map(
      (c3, i2) => linePrefix + c3[i2 === 0 ? "padStart" : "padEnd"](maxLengh[i2])
    ).join("  ")
  ).join("\n");
}
function resolveValue(input) {
  return typeof input === "function" ? input() : input;
}
var CLIError = class extends Error {
  constructor(message, code) {
    super(message);
    this.code = code;
    this.name = "CLIError";
  }
};
var NUMBER_CHAR_RE = /\d/;
var STR_SPLITTERS = ["-", "_", "/", "."];
function isUppercase(char = "") {
  if (NUMBER_CHAR_RE.test(char)) {
    return void 0;
  }
  return char !== char.toLowerCase();
}
function splitByCase(str, separators) {
  const splitters = separators ?? STR_SPLITTERS;
  const parts = [];
  if (!str || typeof str !== "string") {
    return parts;
  }
  let buff = "";
  let previousUpper;
  let previousSplitter;
  for (const char of str) {
    const isSplitter = splitters.includes(char);
    if (isSplitter === true) {
      parts.push(buff);
      buff = "";
      previousUpper = void 0;
      continue;
    }
    const isUpper = isUppercase(char);
    if (previousSplitter === false) {
      if (previousUpper === false && isUpper === true) {
        parts.push(buff);
        buff = char;
        previousUpper = isUpper;
        continue;
      }
      if (previousUpper === true && isUpper === false && buff.length > 1) {
        const lastChar = buff.at(-1);
        parts.push(buff.slice(0, Math.max(0, buff.length - 1)));
        buff = lastChar + char;
        previousUpper = isUpper;
        continue;
      }
    }
    buff += char;
    previousUpper = isUpper;
    previousSplitter = isSplitter;
  }
  parts.push(buff);
  return parts;
}
function upperFirst(str) {
  return str ? str[0].toUpperCase() + str.slice(1) : "";
}
function lowerFirst(str) {
  return str ? str[0].toLowerCase() + str.slice(1) : "";
}
function pascalCase(str, opts) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => upperFirst(opts?.normalize ? p.toLowerCase() : p)).join("") : "";
}
function camelCase(str, opts) {
  return lowerFirst(pascalCase(str || "", opts));
}
function kebabCase(str, joiner) {
  return str ? (Array.isArray(str) ? str : splitByCase(str)).map((p) => p.toLowerCase()).join(joiner ?? "-") : "";
}
function toArr(any) {
  return any == void 0 ? [] : Array.isArray(any) ? any : [any];
}
function toVal(out, key, val, opts) {
  let x2;
  const old = out[key];
  const nxt = ~opts.string.indexOf(key) ? val == void 0 || val === true ? "" : String(val) : typeof val === "boolean" ? val : ~opts.boolean.indexOf(key) ? val === "false" ? false : val === "true" || (out._.push((x2 = +val, x2 * 0 === 0) ? x2 : val), !!val) : (x2 = +val, x2 * 0 === 0) ? x2 : val;
  out[key] = old == void 0 ? nxt : Array.isArray(old) ? old.concat(nxt) : [old, nxt];
}
function parseRawArgs(args = [], opts = {}) {
  let k2;
  let arr;
  let arg;
  let name;
  let val;
  const out = { _: [] };
  let i2 = 0;
  let j = 0;
  let idx = 0;
  const len = args.length;
  const alibi = opts.alias !== void 0;
  const strict = opts.unknown !== void 0;
  const defaults2 = opts.default !== void 0;
  opts.alias = opts.alias || {};
  opts.string = toArr(opts.string);
  opts.boolean = toArr(opts.boolean);
  if (alibi) {
    for (k2 in opts.alias) {
      arr = opts.alias[k2] = toArr(opts.alias[k2]);
      for (i2 = 0; i2 < arr.length; i2++) {
        (opts.alias[arr[i2]] = arr.concat(k2)).splice(i2, 1);
      }
    }
  }
  for (i2 = opts.boolean.length; i2-- > 0; ) {
    arr = opts.alias[opts.boolean[i2]] || [];
    for (j = arr.length; j-- > 0; ) {
      opts.boolean.push(arr[j]);
    }
  }
  for (i2 = opts.string.length; i2-- > 0; ) {
    arr = opts.alias[opts.string[i2]] || [];
    for (j = arr.length; j-- > 0; ) {
      opts.string.push(arr[j]);
    }
  }
  if (defaults2) {
    for (k2 in opts.default) {
      name = typeof opts.default[k2];
      arr = opts.alias[k2] = opts.alias[k2] || [];
      if (opts[name] !== void 0) {
        opts[name].push(k2);
        for (i2 = 0; i2 < arr.length; i2++) {
          opts[name].push(arr[i2]);
        }
      }
    }
  }
  const keys = strict ? Object.keys(opts.alias) : [];
  for (i2 = 0; i2 < len; i2++) {
    arg = args[i2];
    if (arg === "--") {
      out._ = out._.concat(args.slice(++i2));
      break;
    }
    for (j = 0; j < arg.length; j++) {
      if (arg.charCodeAt(j) !== 45) {
        break;
      }
    }
    if (j === 0) {
      out._.push(arg);
    } else if (arg.substring(j, j + 3) === "no-") {
      name = arg.slice(Math.max(0, j + 3));
      if (strict && !~keys.indexOf(name)) {
        return opts.unknown(arg);
      }
      out[name] = false;
    } else {
      for (idx = j + 1; idx < arg.length; idx++) {
        if (arg.charCodeAt(idx) === 61) {
          break;
        }
      }
      name = arg.substring(j, idx);
      val = arg.slice(Math.max(0, ++idx)) || i2 + 1 === len || ("" + args[i2 + 1]).charCodeAt(0) === 45 || args[++i2];
      arr = j === 2 ? [name] : name;
      for (idx = 0; idx < arr.length; idx++) {
        name = arr[idx];
        if (strict && !~keys.indexOf(name)) {
          return opts.unknown("-".repeat(j) + name);
        }
        toVal(out, name, idx + 1 < arr.length || val, opts);
      }
    }
  }
  if (defaults2) {
    for (k2 in opts.default) {
      if (out[k2] === void 0) {
        out[k2] = opts.default[k2];
      }
    }
  }
  if (alibi) {
    for (k2 in out) {
      arr = opts.alias[k2] || [];
      while (arr.length > 0) {
        out[arr.shift()] = out[k2];
      }
    }
  }
  return out;
}
function parseArgs(rawArgs, argsDef) {
  const parseOptions = {
    boolean: [],
    string: [],
    mixed: [],
    alias: {},
    default: {}
  };
  const args = resolveArgs(argsDef);
  for (const arg of args) {
    if (arg.type === "positional") {
      continue;
    }
    if (arg.type === "string") {
      parseOptions.string.push(arg.name);
    } else if (arg.type === "boolean") {
      parseOptions.boolean.push(arg.name);
    }
    if (arg.default !== void 0) {
      parseOptions.default[arg.name] = arg.default;
    }
    if (arg.alias) {
      parseOptions.alias[arg.name] = arg.alias;
    }
  }
  const parsed = parseRawArgs(rawArgs, parseOptions);
  const [...positionalArguments] = parsed._;
  const parsedArgsProxy = new Proxy(parsed, {
    get(target, prop) {
      return target[prop] ?? target[camelCase(prop)] ?? target[kebabCase(prop)];
    }
  });
  for (const [, arg] of args.entries()) {
    if (arg.type === "positional") {
      const nextPositionalArgument = positionalArguments.shift();
      if (nextPositionalArgument !== void 0) {
        parsedArgsProxy[arg.name] = nextPositionalArgument;
      } else if (arg.default === void 0 && arg.required !== false) {
        throw new CLIError(
          `Missing required positional argument: ${arg.name.toUpperCase()}`,
          "EARG"
        );
      } else {
        parsedArgsProxy[arg.name] = arg.default;
      }
    } else if (arg.required && parsedArgsProxy[arg.name] === void 0) {
      throw new CLIError(`Missing required argument: --${arg.name}`, "EARG");
    }
  }
  return parsedArgsProxy;
}
function resolveArgs(argsDef) {
  const args = [];
  for (const [name, argDef] of Object.entries(argsDef || {})) {
    args.push({
      ...argDef,
      name,
      alias: toArray(argDef.alias)
    });
  }
  return args;
}
function defineCommand(def) {
  return def;
}
async function runCommand(cmd, opts) {
  const cmdArgs = await resolveValue(cmd.args || {});
  const parsedArgs = parseArgs(opts.rawArgs, cmdArgs);
  const context = {
    rawArgs: opts.rawArgs,
    args: parsedArgs,
    data: opts.data,
    cmd
  };
  if (typeof cmd.setup === "function") {
    await cmd.setup(context);
  }
  let result;
  try {
    const subCommands = await resolveValue(cmd.subCommands);
    if (subCommands && Object.keys(subCommands).length > 0) {
      const subCommandArgIndex = opts.rawArgs.findIndex(
        (arg) => !arg.startsWith("-")
      );
      const subCommandName = opts.rawArgs[subCommandArgIndex];
      if (subCommandName) {
        if (!subCommands[subCommandName]) {
          throw new CLIError(
            `Unknown command \`${subCommandName}\``,
            "E_UNKNOWN_COMMAND"
          );
        }
        const subCommand = await resolveValue(subCommands[subCommandName]);
        if (subCommand) {
          await runCommand(subCommand, {
            rawArgs: opts.rawArgs.slice(subCommandArgIndex + 1)
          });
        }
      } else if (!cmd.run) {
        throw new CLIError(`No command specified.`, "E_NO_COMMAND");
      }
    }
    if (typeof cmd.run === "function") {
      result = await cmd.run(context);
    }
  } finally {
    if (typeof cmd.cleanup === "function") {
      await cmd.cleanup(context);
    }
  }
  return { result };
}
async function resolveSubCommand(cmd, rawArgs, parent) {
  const subCommands = await resolveValue(cmd.subCommands);
  if (subCommands && Object.keys(subCommands).length > 0) {
    const subCommandArgIndex = rawArgs.findIndex((arg) => !arg.startsWith("-"));
    const subCommandName = rawArgs[subCommandArgIndex];
    const subCommand = await resolveValue(subCommands[subCommandName]);
    if (subCommand) {
      return resolveSubCommand(
        subCommand,
        rawArgs.slice(subCommandArgIndex + 1),
        cmd
      );
    }
  }
  return [cmd, parent];
}
async function showUsage(cmd, parent) {
  try {
    consola.log(await renderUsage(cmd, parent) + "\n");
  } catch (error) {
    consola.error(error);
  }
}
async function renderUsage(cmd, parent) {
  const cmdMeta = await resolveValue(cmd.meta || {});
  const cmdArgs = resolveArgs(await resolveValue(cmd.args || {}));
  const parentMeta = await resolveValue(parent?.meta || {});
  const commandName = `${parentMeta.name ? `${parentMeta.name} ` : ""}` + (cmdMeta.name || process.argv[1]);
  const argLines = [];
  const posLines = [];
  const commandsLines = [];
  const usageLine = [];
  for (const arg of cmdArgs) {
    if (arg.type === "positional") {
      const name = arg.name.toUpperCase();
      const isRequired = arg.required !== false && arg.default === void 0;
      const defaultHint = arg.default ? `="${arg.default}"` : "";
      posLines.push([
        "`" + name + defaultHint + "`",
        arg.description || "",
        arg.valueHint ? `<${arg.valueHint}>` : ""
      ]);
      usageLine.push(isRequired ? `<${name}>` : `[${name}]`);
    } else {
      const isRequired = arg.required === true && arg.default === void 0;
      const argStr = (arg.type === "boolean" && arg.default === true ? [
        ...(arg.alias || []).map((a2) => `--no-${a2}`),
        `--no-${arg.name}`
      ].join(", ") : [...(arg.alias || []).map((a2) => `-${a2}`), `--${arg.name}`].join(
        ", "
      )) + (arg.type === "string" && (arg.valueHint || arg.default) ? `=${arg.valueHint ? `<${arg.valueHint}>` : `"${arg.default || ""}"`}` : "");
      argLines.push([
        "`" + argStr + (isRequired ? " (required)" : "") + "`",
        arg.description || ""
      ]);
      if (isRequired) {
        usageLine.push(argStr);
      }
    }
  }
  if (cmd.subCommands) {
    const commandNames = [];
    const subCommands = await resolveValue(cmd.subCommands);
    for (const [name, sub] of Object.entries(subCommands)) {
      const subCmd = await resolveValue(sub);
      const meta = await resolveValue(subCmd?.meta);
      commandsLines.push([`\`${name}\``, meta?.description || ""]);
      commandNames.push(name);
    }
    usageLine.push(commandNames.join("|"));
  }
  const usageLines = [];
  const version = cmdMeta.version || parentMeta.version;
  usageLines.push(
    colors.gray(
      `${cmdMeta.description} (${commandName + (version ? ` v${version}` : "")})`
    ),
    ""
  );
  const hasOptions = argLines.length > 0 || posLines.length > 0;
  usageLines.push(
    `${colors.underline(colors.bold("USAGE"))} \`${commandName}${hasOptions ? " [OPTIONS]" : ""} ${usageLine.join(" ")}\``,
    ""
  );
  if (posLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("ARGUMENTS")), "");
    usageLines.push(formatLineColumns(posLines, "  "));
    usageLines.push("");
  }
  if (argLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("OPTIONS")), "");
    usageLines.push(formatLineColumns(argLines, "  "));
    usageLines.push("");
  }
  if (commandsLines.length > 0) {
    usageLines.push(colors.underline(colors.bold("COMMANDS")), "");
    usageLines.push(formatLineColumns(commandsLines, "  "));
    usageLines.push(
      "",
      `Use \`${commandName} <command> --help\` for more information about a command.`
    );
  }
  return usageLines.filter((l2) => typeof l2 === "string").join("\n");
}
async function runMain(cmd, opts = {}) {
  const rawArgs = opts.rawArgs || process.argv.slice(2);
  const showUsage$1 = opts.showUsage || showUsage;
  try {
    if (rawArgs.includes("--help") || rawArgs.includes("-h")) {
      await showUsage$1(...await resolveSubCommand(cmd, rawArgs));
      process.exit(0);
    } else if (rawArgs.length === 1 && rawArgs[0] === "--version") {
      const meta = typeof cmd.meta === "function" ? await cmd.meta() : await cmd.meta;
      if (!meta?.version) {
        throw new CLIError("No version specified", "E_NO_VERSION");
      }
      consola.log(meta.version);
    } else {
      await runCommand(cmd, { rawArgs });
    }
  } catch (error) {
    const isCLIError = error instanceof CLIError;
    if (!isCLIError) {
      consola.error(error, "\n");
    }
    if (isCLIError) {
      await showUsage$1(...await resolveSubCommand(cmd, rawArgs));
    }
    consola.error(error.message);
    process.exit(1);
  }
}

// index.ts
import { getPackageManifest } from "query-registry";

// ../utils/index.ts
var githubUrlRegex = /^(?:git\+)?https?:\/\/github\.com\/([^/]+)\/([^/]+)\.git$/;
function extractOwnerAndRepo(repositoryUrl) {
  const match = repositoryUrl.match(githubUrlRegex);
  if (match) {
    return [match[1], match[2]];
  }
  return null;
}
function extractRepository(manifest) {
  return typeof manifest.repository === "string" ? manifest.repository : manifest.repository?.url;
}
var commitLength = 7;
function abbreviateCommitHash(fullHash) {
  return fullHash.substring(0, commitLength);
}
var installCommands = {
  npm: "npm i",
  pnpm: "pnpm add",
  yarn: "yarn add",
  bun: "bun add"
};

// index.ts
import { glob } from "tinyglobby";
import ignore from "ignore";
import { isBinaryFile } from "isbinaryfile";
import { writePackageJSON } from "pkg-types";

// package.json
var package_default = {
  name: "pkg-khulnasoft",
  version: "0.0.62",
  description: "",
  main: "index.js",
  type: "module",
  bin: {
    "pkg-khulnasoft": "bin/cli.js"
  },
  repository: {
    type: "git",
    url: "https://github.com/khulnasoft/pkg.khulnasoft.com",
    directory: "packages/cli"
  },
  scripts: {
    dev: "tsup --watch",
    build: "tsup",
    "build:publish": "API_URL=https://pkg.khulnasoft.com/ tsup"
  },
  keywords: [],
  author: "",
  license: "MIT",
  dependencies: {
    "@actions/core": "^1.11.1",
    "@jsdevtools/ez-spawn": "^3.0.4",
    "@octokit/action": "^6.1.0",
    ignore: "^5.3.1",
    isbinaryfile: "^5.0.2",
    "pkg-types": "^1.1.1",
    "query-registry": "^3.0.1",
    tinyglobby: "^0.2.9"
  },
  devDependencies: {
    "@pkg-khulnasoft/utils": "workspace:^",
    citty: "^0.1.6",
    tsup: "^8.0.2"
  }
};

// template.ts
var createDefaultTemplate = (dependencies) => ({
  "index.js": "",
  "README.md": `
# Default Template

This is a template that leverages the experimental templates feature in the \`pkg.khulnasoft.com\` tool.

## Overview

Templates are particularly useful for creating live, interactive examples of your packages, which can be very beneficial for both development and documentation purposes.

As a user, you can check the package.json file and see the new generated packages! You can just copy those and put them in your package.json or install them with your favorite package manager.

${Object.values(dependencies).map(
    (url) => `
\`\`\`sh
npm i ${url}
\`\`\`
`
  ).join("")}

## Usage

To use this feature as a maintainer, you can run the following command:

\`\`\`sh
npx pkg-khulnasoft publish './packages/A' --template './examples/*'
\`\`\`

## Benefits

- Interactive Demos: Automatically create live demos that users can interact with directly in their browser.
- Enhanced Testing: Quickly spin up environments to test your package in different scenarios.
- Improved Sharing: Easily share working examples of your package with collaborators or users without needing them to set up their environment.
`,
  "package.json": JSON.stringify(
    {
      name: "default",
      version: "1.0.0",
      description: "generated by pkg.khulnasoft.com",
      main: "index.js",
      dependencies,
      keywords: [],
      author: "pkg.khulnasoft.com",
      license: "ISC"
    },
    null,
    2
  )
});

// index.ts
import * as core from "@actions/core";
var apiUrl = process.env.API_URL ?? "https://localhost:3000";
var publishUrl = new URL("/publish", apiUrl);
var createMultipart = new URL("/multipart/create", apiUrl);
var uploadMultipart = new URL("/multipart/upload", apiUrl);
var completeMultipart = new URL("/multipart/complete", apiUrl);
var main = defineCommand({
  meta: {
    version: package_default.version,
    name: "khulnasoft",
    description: "A CLI for pkg.khulnasoft.com (Continuous Releases)"
  },
  subCommands: {
    publish: () => {
      return {
        args: {
          compact: {
            type: "boolean",
            description: "compact urls. The shortest form of urls like pkg.khulnasoft.com/tinybench@a832a55)"
          },
          peerDeps: {
            type: "boolean",
            description: "handle peerDependencies by setting the workspace version instead of what has been set in the peerDeps itself. --peerDeps not being true would leave peerDependencies to the package manager itself (npm, pnpm)",
            default: false
          },
          pnpm: {
            type: "boolean",
            description: "use `pnpm pack` instead of `npm pack --json`"
          },
          yarn: {
            type: "boolean",
            description: "use `yarn pack` instead of `npm pack --json`"
          },
          bun: {
            type: "boolean",
            description: "use `bun pm pack` instead of `npm pack --json`"
          },
          template: {
            type: "string",
            description: "generate khulnasoft templates out of directories in the current repo with the new built packages"
          },
          comment: {
            type: "string",
            // "off", "create", "update" (default)
            description: `"off" for no comments (silent mode). "create" for comment on each publish. "update" for one comment across the pull request with edits on each publish (default)`,
            default: "update"
          },
          "only-templates": {
            type: "boolean",
            description: `generate only khulnasoft templates`,
            default: false
          },
          json: {
            type: "mixed",
            description: `Save metadata to a JSON file. If true, log the output for piping. If a string, save the output to the specified file path.`
          },
          packageManager: {
            type: "string",
            description: "Specify the package manager to use (npm, bun, pnpm, yarn)",
            enum: ["npm", "bun", "pnpm", "yarn"],
            default: "npm"
          },
          bin: {
            type: "boolean",
            description: "Set to true if your package is a binary application and you would like to show an execute command instead of an install command."
          }
        },
        run: async ({ args }) => {
          const paths = args._.length > 0 ? await glob(args._, {
            expandDirectories: false,
            onlyDirectories: true,
            absolute: true
          }) : [process.cwd()];
          const templates = await glob(args.template || [], {
            expandDirectories: false,
            onlyDirectories: true,
            absolute: true
          });
          const formData = new FormData();
          const isCompact = !!args.compact;
          let packMethod = "npm";
          if (args.pnpm) {
            packMethod = "pnpm";
          } else if (args.yarn) {
            packMethod = "yarn";
          } else if (args.bun) {
            packMethod = "bun";
          }
          const isPeerDepsEnabled = !!args.peerDeps;
          const isOnlyTemplates = !!args["only-templates"];
          const isBinaryApplication = !!args.bin;
          const comment = args.comment;
          const selectedPackageManager = args.packageManager.split(",").filter((s2) => s2.trim());
          const packageManagers = ["npm", "bun", "pnpm", "yarn"];
          if (!selectedPackageManager.length) {
            console.error(
              `Unsupported package manager: ${args.packageManager}. Supported managers are npm, bun, pnpm, yarn.`
            );
            process.exit(1);
          }
          for (let i2 = 0; i2 < selectedPackageManager.length; i2++) {
            if (!packageManagers.includes(selectedPackageManager[i2])) {
              console.error(
                `Unsupported package manager: ${selectedPackageManager[i2]}. Supported managers are npm, bun, pnpm, yarn.`
              );
              process.exit(1);
            }
          }
          if (!process.env.TEST && process.env.GITHUB_ACTIONS !== "true") {
            console.error(
              "Continuous Releases are only available in GitHub Actions."
            );
            process.exit(1);
          }
          const {
            GITHUB_REPOSITORY,
            GITHUB_RUN_ID,
            GITHUB_RUN_ATTEMPT,
            GITHUB_ACTOR_ID,
            GITHUB_OUTPUT
          } = process.env;
          const [owner, repo] = GITHUB_REPOSITORY.split("/");
          const metadata = {
            owner,
            repo,
            run: Number(GITHUB_RUN_ID),
            attempt: Number(GITHUB_RUN_ATTEMPT),
            actor: Number(GITHUB_ACTOR_ID)
          };
          const key = hash(metadata);
          let checkResponse;
          try {
            checkResponse = await fetch(new URL("/check", apiUrl), {
              method: "POST",
              body: JSON.stringify({
                owner,
                repo,
                key
              })
            });
          } catch (error) {
            console.error(`Failed to connect to server: ${error}`);
            process.exit(1);
          }
          if (!checkResponse.ok) {
            const errorText = await checkResponse.text();
            console.error(
              `Check failed (${checkResponse.status}): ${errorText}`
            );
            process.exit(1);
          }
          const { sha } = await checkResponse.json();
          const formattedSha = isCompact ? abbreviateCommitHash(sha) : sha;
          const deps = /* @__PURE__ */ new Map();
          const realDeps = isPeerDepsEnabled ? /* @__PURE__ */ new Map() : null;
          const printJson = typeof args.json === "boolean";
          const saveJson = typeof args.json === "string";
          const jsonFilePath = saveJson ? args.json : "";
          const outputMetadata = {
            packages: [],
            templates: []
          };
          for (const p of paths) {
            const pJsonPath = path.resolve(p, "package.json");
            const pJson = await readPackageJson(pJsonPath);
            if (!pJson) {
              continue;
            }
            if (!pJson.name) {
              throw new Error(`"name" field in ${pJsonPath} should be defined`);
            }
            if (pJson.private) {
              continue;
            }
            if (isCompact) {
              await verifyCompactMode(pJson.name);
            }
            const longDepUrl = new URL(
              `/${owner}/${repo}/${pJson.name}@${formattedSha}`,
              apiUrl
            ).href;
            deps.set(pJson.name, longDepUrl);
            realDeps?.set(pJson.name, pJson.version ?? longDepUrl);
            const controller = new AbortController();
            try {
              const resource = await fetch(longDepUrl, {
                signal: controller.signal
              });
              if (resource.ok) {
                console.warn(
                  `${pJson.name}@${formattedSha} was already published on ${longDepUrl}`
                );
              } else if (resource.status >= 500) {
                console.warn(
                  `Server error checking ${longDepUrl} (${resource.status}), proceeding with publish`
                );
              } else {
                console.warn(
                  `Unexpected response checking ${longDepUrl} (${resource.status})`
                );
              }
            } catch (error) {
              console.warn(
                `Failed to check if package exists at ${longDepUrl}: ${error}`
              );
            }
            controller.abort();
            const jsonUrl = isCompact ? new URL(`/${pJson.name}@${formattedSha}`, apiUrl).href : longDepUrl;
            outputMetadata.packages.push({
              name: pJson.name,
              url: jsonUrl,
              shasum: ""
              // will be filled later
            });
          }
          for (const templateDir of templates) {
            const pJsonPath = path.resolve(templateDir, "package.json");
            const pJsonContents = await tryReadFile(pJsonPath);
            const pJson = pJsonContents ? parsePackageJson(pJsonContents) : null;
            if (!pJson || !pJsonContents) {
              console.warn(
                `skipping ${templateDir} because there's no package.json file`
              );
              continue;
            }
            if (!pJson.name) {
              throw new Error(`"name" field in ${pJsonPath} should be defined`);
            }
            console.warn("preparing template:", pJson.name);
            const restore = await writeDeps(
              templateDir,
              pJsonContents,
              pJson,
              deps,
              realDeps
            );
            const gitignorePath = path.join(templateDir, ".gitignore");
            const ig = ignore().add("node_modules").add(".git");
            if (fsSync.existsSync(gitignorePath)) {
              const gitignoreContent = await fs.readFile(gitignorePath, "utf8");
              ig.add(gitignoreContent);
            }
            const files = await glob(["**/*"], {
              cwd: templateDir,
              dot: true,
              onlyFiles: true,
              ignore: ["**/node_modules", ".git"]
              // always ignore node_modules and .git
            });
            const filteredFiles = files.filter((file) => !ig.ignores(file));
            for (const filePath of filteredFiles) {
              const file = await fs.readFile(path.join(templateDir, filePath));
              const isBinary = await isBinaryFile(file);
              const blob = new Blob([file.buffer], {
                type: "application/octet-stream"
              });
              formData.append(
                `template:${pJson.name}:${encodeURIComponent(filePath)}`,
                isBinary ? blob : await blob.text()
              );
            }
            await restore();
            const templateUrl = new URL(
              `/${owner}/${repo}/template/${pJson.name}`,
              apiUrl
            ).href;
            outputMetadata.templates.push({
              name: pJson.name,
              url: templateUrl
            });
          }
          const noDefaultTemplate = args.template === false;
          if (!noDefaultTemplate && templates.length === 0) {
            const project = createDefaultTemplate(
              Object.fromEntries(deps.entries())
            );
            for (const filePath of Object.keys(project)) {
              formData.append(
                `template:default:${encodeURIComponent(filePath)}`,
                project[filePath]
              );
            }
          }
          const restoreMap = /* @__PURE__ */ new Map();
          for (const p of paths) {
            const pJsonPath = path.resolve(p, "package.json");
            const pJsonContents = await tryReadFile(pJsonPath);
            const pJson = pJsonContents ? parsePackageJson(pJsonContents) : null;
            if (!pJson || !pJsonContents) {
              continue;
            }
            if (pJson.private) {
              continue;
            }
            restoreMap.set(
              p,
              await writeDeps(p, pJsonContents, pJson, deps, realDeps)
            );
          }
          const shasums = {};
          for (const p of paths) {
            const pJsonPath = path.resolve(p, "package.json");
            const pJson = await readPackageJson(pJsonPath);
            if (!pJson) {
              console.warn(
                `skipping ${p} because there's no package.json file`
              );
              continue;
            }
            try {
              if (!pJson.name) {
                throw new Error(
                  `"name" field in ${pJsonPath} should be defined`
                );
              }
              if (pJson.private) {
                console.warn(`skipping ${p} because the package is private`);
                continue;
              }
              const { filename, shasum } = await resolveTarball(
                packMethod,
                p,
                pJson
              );
              shasums[pJson.name] = shasum;
              const outputPkg = outputMetadata.packages.find(
                (p2) => p2.name === pJson.name
              );
              outputPkg.shasum = shasum;
              const filePath = path.resolve(p, filename);
              const buffer = await fs.readFile(filePath);
              const blob = new Blob([buffer], {
                type: "application/octet-stream"
              });
              formData.append(`package:${pJson.name}`, blob, filename);
              await fs.rm(filePath);
            } finally {
              await restoreMap.get(p)?.();
            }
          }
          const formDataPackagesSize = [...formData.entries()].reduce(
            (prev, [_3, entry]) => prev + getFormEntrySize(entry),
            0
          );
          if (formDataPackagesSize > 1024 * 1024 * 99) {
            for (const [name, entry] of formData) {
              if (name.startsWith("package:")) {
                const file = entry;
                const chunkSize = 1024 * 1024 * 5;
                if (file.size <= chunkSize) {
                  continue;
                }
                const totalChunks = Math.ceil(file.size / chunkSize);
                const createMultipartRes = await fetch(createMultipart, {
                  method: "POST",
                  headers: {
                    "sb-key": key,
                    "sb-name": name.slice("package:".length)
                  }
                });
                if (!createMultipartRes.ok) {
                  console.error(await createMultipartRes.text());
                  continue;
                }
                const { key: uploadKey, id: uploadId } = await createMultipartRes.json();
                const uploadedParts = [];
                for (let i2 = 0; i2 < totalChunks; i2++) {
                  const start = i2 * chunkSize;
                  const end = Math.min(file.size, start + chunkSize);
                  const chunk = file.slice(start, end);
                  const uploadMultipartRes = await fetch(uploadMultipart, {
                    method: "PUT",
                    headers: {
                      key: uploadKey,
                      id: uploadId,
                      "part-number": `${i2 + 1}`
                    },
                    body: chunk
                  });
                  if (!uploadMultipartRes.ok) {
                    console.error(
                      `Error uploading part ${i2 + 1}: ${await uploadMultipartRes.text()}`
                    );
                    break;
                  }
                  const { part } = await uploadMultipartRes.json();
                  uploadedParts.push(part);
                }
                const completeMultipartRes = await fetch(completeMultipart, {
                  method: "POST",
                  headers: {
                    key: uploadKey,
                    id: uploadId,
                    "uploaded-parts": JSON.stringify(uploadedParts)
                  }
                });
                if (!completeMultipartRes.ok) {
                  console.error(
                    `Error completing ${key}: ${await completeMultipartRes.text()}`
                  );
                  break;
                }
                const { key: completionKey } = await completeMultipartRes.json();
                formData.set(name, `object:${completionKey}`);
              }
            }
          }
          const res = await fetch(publishUrl, {
            method: "POST",
            headers: {
              "sb-comment": comment,
              "sb-compact": `${isCompact}`,
              "sb-key": key,
              "sb-shasums": JSON.stringify(shasums),
              "sb-run-id": GITHUB_RUN_ID,
              "sb-bin": `${isBinaryApplication}`,
              "sb-package-manager": selectedPackageManager.join(","),
              "sb-only-templates": `${isOnlyTemplates}`
            },
            body: formData
          });
          if (!res.ok) {
            const errorText = await res.text();
            console.error(`Publishing failed (${res.status}): ${errorText}`);
            process.exit(1);
          }
          let laterRes;
          try {
            laterRes = await res.json();
          } catch (error) {
            console.error(`Failed to parse server response as JSON: ${error}`);
            console.error(`Raw response: ${await res.text()}`);
            process.exit(1);
          }
          const debug = laterRes.debug;
          core.startGroup("\u{1F50D} Info");
          core.notice(JSON.stringify(debug, null, 2));
          core.endGroup();
          console.warn("\n");
          console.warn("\u26A1\uFE0F Your npm packages are published.\n");
          const packageLogs = [...formData.keys()].filter((k2) => k2.startsWith("package:")).map((name, i2) => {
            const packageName = name.slice("package:".length);
            const url = new URL(laterRes.urls[i2]);
            const publintUrl = new URL(
              `/pkg.khulnasoft.com${url.pathname}`,
              "https://publint.dev"
            );
            return `${packageName}:
- sha: ${shasums[packageName]}
- publint: ${publintUrl}
- ${packMethod}: ${installCommands[packMethod]} ${url}`;
          }).join("\n\n");
          console.warn(packageLogs);
          const output = JSON.stringify(outputMetadata, null, 2);
          if (printJson) {
            console.log(output);
          }
          if (saveJson) {
            await fs.writeFile(jsonFilePath, output);
            console.warn(`metadata written to ${jsonFilePath}`);
          }
          await fs.appendFile(GITHUB_OUTPUT, `sha=${formattedSha}
`, "utf8");
          await fs.appendFile(
            GITHUB_OUTPUT,
            `urls=${outputMetadata.packages.map((pkg) => pkg.url).join(" ")}
`,
            "utf8"
          );
          await fs.appendFile(
            GITHUB_OUTPUT,
            `packages=${outputMetadata.packages.map((pkg) => `${pkg.name}@${pkg.url}`).join(" ")}
`,
            "utf8"
          );
        }
      };
    },
    link: () => {
      return {
        meta: {},
        run: () => {
        }
      };
    }
  }
});
runMain(main).then(() => process.exit(0)).catch(() => process.exit(1));
async function resolveTarball(pm, p, pJson) {
  let cmd = `${pm} pack`;
  let filename = `${pJson.name.replace("/", "-")}-${pJson.version}.tgz`;
  if (pm === "yarn") {
    cmd += ` --filename ${filename}`;
  } else if (pm === "bun") {
    cmd = `bun pm pack --filename ${filename}`;
  }
  const { stdout: stdout2 } = await ezSpawn.async(cmd, {
    stdio: "overlapped",
    cwd: p
  });
  const lines = stdout2.split("\n").filter(Boolean);
  if (pm !== "yarn" && pm !== "bun") {
    filename = lines[lines.length - 1].trim();
  }
  const shasum = createHash("sha1").update(await fs.readFile(path.resolve(p, filename))).digest("hex");
  return { filename, shasum };
}
async function writeDeps(p, pJsonContents, pJson, deps, realDeps) {
  const pJsonPath = path.resolve(p, "package.json");
  hijackDeps(deps, pJson.dependencies);
  hijackDeps(deps, pJson.devDependencies);
  hijackDeps(deps, pJson.optionalDependencies);
  if (realDeps) {
    hijackDeps(realDeps, pJson.peerDependencies);
  }
  await writePackageJSON(pJsonPath, pJson);
  return () => fs.writeFile(pJsonPath, pJsonContents);
}
function hijackDeps(newDeps, oldDeps) {
  if (!oldDeps) {
    return;
  }
  for (const [newDep, url] of newDeps) {
    if (newDep in oldDeps) {
      oldDeps[newDep] = url;
    }
  }
}
function getFormEntrySize(entry) {
  if (typeof entry === "string") {
    return entry.length;
  }
  return entry.size;
}
async function verifyCompactMode(packageName) {
  let manifest;
  try {
    manifest = await getPackageManifest(packageName);
  } catch {
    throw new Error(
      `pkg-khulnasoft cannot resolve ${packageName} from npm. --compact flag depends on the package being available in npm.
Make sure to have your package on npm first.`
    );
  }
  const instruction = `Make sure to configure the 'repository' / 'repository.url' field in its package.json properly.
See https://docs.npmjs.com/cli/v10/configuring-npm/package-json#repository for details.`;
  const repository = extractRepository(manifest);
  if (!repository) {
    throw new Error(
      `pkg-khulnasoft cannot extract the repository link from the ${packageName} manifest. --compact flag requires the link to be present.
${instruction}`
    );
  }
  const match = extractOwnerAndRepo(repository);
  if (!match) {
    throw new Error(
      `pkg-khulnasoft cannot extract the owner and repo names from the ${packageName} repository link: ${repository}. --compact flag requires these names.
${instruction}`
    );
  }
}
async function tryReadFile(p) {
  try {
    return await fs.readFile(p, "utf8");
  } catch {
    return null;
  }
}
async function readPackageJson(p) {
  const contents = await tryReadFile(p);
  if (contents === null) {
    return null;
  }
  try {
    return parsePackageJson(contents);
  } catch {
    return null;
  }
}
function parsePackageJson(contents) {
  try {
    return JSON.parse(contents);
  } catch {
    return null;
  }
}
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvbnNvbGFAMy40LjIvbm9kZV9tb2R1bGVzL2NvbnNvbGEvZGlzdC9jaHVua3MvcHJvbXB0Lm1qcyIsICIuLi9pbmRleC50cyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vb2hhc2hAMS4xLjYvbm9kZV9tb2R1bGVzL29oYXNoL2Rpc3Qvc2hhcmVkL29oYXNoLkJ2U01aemxpLm1qcyIsICIuLi8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vb2hhc2hAMS4xLjYvbm9kZV9tb2R1bGVzL29oYXNoL2Rpc3QvaW5kZXgubWpzIiwgIi4uLy4uLy4uL25vZGVfbW9kdWxlcy8ucG5wbS9jb25zb2xhQDMuNC4yL25vZGVfbW9kdWxlcy9jb25zb2xhL2Rpc3QvY29yZS5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvbnNvbGFAMy40LjIvbm9kZV9tb2R1bGVzL2NvbnNvbGEvZGlzdC9zaGFyZWQvY29uc29sYS5EUndxWmozVC5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvbnNvbGFAMy40LjIvbm9kZV9tb2R1bGVzL2NvbnNvbGEvZGlzdC9pbmRleC5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvbnNvbGFAMy40LjIvbm9kZV9tb2R1bGVzL2NvbnNvbGEvZGlzdC9zaGFyZWQvY29uc29sYS5EWEJZdS1LRC5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NvbnNvbGFAMy40LjIvbm9kZV9tb2R1bGVzL2NvbnNvbGEvZGlzdC91dGlscy5tanMiLCAiLi4vLi4vLi4vbm9kZV9tb2R1bGVzLy5wbnBtL2NpdHR5QDAuMS42L25vZGVfbW9kdWxlcy9jaXR0eS9kaXN0L2luZGV4Lm1qcyIsICIuLi8uLi91dGlscy9pbmRleC50cyIsICIuLi9wYWNrYWdlLmpzb24iLCAiLi4vdGVtcGxhdGUudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImltcG9ydCAnbm9kZTp1dGlsJztcbmltcG9ydCBnLCB7IHN0ZGluLCBzdGRvdXQgfSBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IGYgZnJvbSAnbm9kZTpyZWFkbGluZSc7XG5pbXBvcnQgeyBXcml0ZVN0cmVhbSB9IGZyb20gJ25vZGU6dHR5JztcblxuZnVuY3Rpb24gZ2V0RGVmYXVsdEV4cG9ydEZyb21DanMgKHgpIHtcblx0cmV0dXJuIHggJiYgeC5fX2VzTW9kdWxlICYmIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh4LCAnZGVmYXVsdCcpID8geFsnZGVmYXVsdCddIDogeDtcbn1cblxudmFyIHNyYztcbnZhciBoYXNSZXF1aXJlZFNyYztcblxuZnVuY3Rpb24gcmVxdWlyZVNyYyAoKSB7XG5cdGlmIChoYXNSZXF1aXJlZFNyYykgcmV0dXJuIHNyYztcblx0aGFzUmVxdWlyZWRTcmMgPSAxO1xuXG5cdGNvbnN0IEVTQyA9ICdcXHgxQic7XG5cdGNvbnN0IENTSSA9IGAke0VTQ31bYDtcblx0Y29uc3QgYmVlcCA9ICdcXHUwMDA3JztcblxuXHRjb25zdCBjdXJzb3IgPSB7XG5cdCAgdG8oeCwgeSkge1xuXHQgICAgaWYgKCF5KSByZXR1cm4gYCR7Q1NJfSR7eCArIDF9R2A7XG5cdCAgICByZXR1cm4gYCR7Q1NJfSR7eSArIDF9OyR7eCArIDF9SGA7XG5cdCAgfSxcblx0ICBtb3ZlKHgsIHkpIHtcblx0ICAgIGxldCByZXQgPSAnJztcblxuXHQgICAgaWYgKHggPCAwKSByZXQgKz0gYCR7Q1NJfSR7LXh9RGA7XG5cdCAgICBlbHNlIGlmICh4ID4gMCkgcmV0ICs9IGAke0NTSX0ke3h9Q2A7XG5cblx0ICAgIGlmICh5IDwgMCkgcmV0ICs9IGAke0NTSX0key15fUFgO1xuXHQgICAgZWxzZSBpZiAoeSA+IDApIHJldCArPSBgJHtDU0l9JHt5fUJgO1xuXG5cdCAgICByZXR1cm4gcmV0O1xuXHQgIH0sXG5cdCAgdXA6IChjb3VudCA9IDEpID0+IGAke0NTSX0ke2NvdW50fUFgLFxuXHQgIGRvd246IChjb3VudCA9IDEpID0+IGAke0NTSX0ke2NvdW50fUJgLFxuXHQgIGZvcndhcmQ6IChjb3VudCA9IDEpID0+IGAke0NTSX0ke2NvdW50fUNgLFxuXHQgIGJhY2t3YXJkOiAoY291bnQgPSAxKSA9PiBgJHtDU0l9JHtjb3VudH1EYCxcblx0ICBuZXh0TGluZTogKGNvdW50ID0gMSkgPT4gYCR7Q1NJfUVgLnJlcGVhdChjb3VudCksXG5cdCAgcHJldkxpbmU6IChjb3VudCA9IDEpID0+IGAke0NTSX1GYC5yZXBlYXQoY291bnQpLFxuXHQgIGxlZnQ6IGAke0NTSX1HYCxcblx0ICBoaWRlOiBgJHtDU0l9PzI1bGAsXG5cdCAgc2hvdzogYCR7Q1NJfT8yNWhgLFxuXHQgIHNhdmU6IGAke0VTQ303YCxcblx0ICByZXN0b3JlOiBgJHtFU0N9OGBcblx0fTtcblxuXHRjb25zdCBzY3JvbGwgPSB7XG5cdCAgdXA6IChjb3VudCA9IDEpID0+IGAke0NTSX1TYC5yZXBlYXQoY291bnQpLFxuXHQgIGRvd246IChjb3VudCA9IDEpID0+IGAke0NTSX1UYC5yZXBlYXQoY291bnQpXG5cdH07XG5cblx0Y29uc3QgZXJhc2UgPSB7XG5cdCAgc2NyZWVuOiBgJHtDU0l9MkpgLFxuXHQgIHVwOiAoY291bnQgPSAxKSA9PiBgJHtDU0l9MUpgLnJlcGVhdChjb3VudCksXG5cdCAgZG93bjogKGNvdW50ID0gMSkgPT4gYCR7Q1NJfUpgLnJlcGVhdChjb3VudCksXG5cdCAgbGluZTogYCR7Q1NJfTJLYCxcblx0ICBsaW5lRW5kOiBgJHtDU0l9S2AsXG5cdCAgbGluZVN0YXJ0OiBgJHtDU0l9MUtgLFxuXHQgIGxpbmVzKGNvdW50KSB7XG5cdCAgICBsZXQgY2xlYXIgPSAnJztcblx0ICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY291bnQ7IGkrKylcblx0ICAgICAgY2xlYXIgKz0gdGhpcy5saW5lICsgKGkgPCBjb3VudCAtIDEgPyBjdXJzb3IudXAoKSA6ICcnKTtcblx0ICAgIGlmIChjb3VudClcblx0ICAgICAgY2xlYXIgKz0gY3Vyc29yLmxlZnQ7XG5cdCAgICByZXR1cm4gY2xlYXI7XG5cdCAgfVxuXHR9O1xuXG5cdHNyYyA9IHsgY3Vyc29yLCBzY3JvbGwsIGVyYXNlLCBiZWVwIH07XG5cdHJldHVybiBzcmM7XG59XG5cbnZhciBzcmNFeHBvcnRzID0gcmVxdWlyZVNyYygpO1xuXG52YXIgcGljb2NvbG9ycyA9IHtleHBvcnRzOiB7fX07XG5cbnZhciBoYXNSZXF1aXJlZFBpY29jb2xvcnM7XG5cbmZ1bmN0aW9uIHJlcXVpcmVQaWNvY29sb3JzICgpIHtcblx0aWYgKGhhc1JlcXVpcmVkUGljb2NvbG9ycykgcmV0dXJuIHBpY29jb2xvcnMuZXhwb3J0cztcblx0aGFzUmVxdWlyZWRQaWNvY29sb3JzID0gMTtcblx0bGV0IHAgPSBwcm9jZXNzIHx8IHt9LCBhcmd2ID0gcC5hcmd2IHx8IFtdLCBlbnYgPSBwLmVudiB8fCB7fTtcblx0bGV0IGlzQ29sb3JTdXBwb3J0ZWQgPVxuXHRcdCEoISFlbnYuTk9fQ09MT1IgfHwgYXJndi5pbmNsdWRlcyhcIi0tbm8tY29sb3JcIikpICYmXG5cdFx0KCEhZW52LkZPUkNFX0NPTE9SIHx8IGFyZ3YuaW5jbHVkZXMoXCItLWNvbG9yXCIpIHx8IHAucGxhdGZvcm0gPT09IFwid2luMzJcIiB8fCAoKHAuc3Rkb3V0IHx8IHt9KS5pc1RUWSAmJiBlbnYuVEVSTSAhPT0gXCJkdW1iXCIpIHx8ICEhZW52LkNJKTtcblxuXHRsZXQgZm9ybWF0dGVyID0gKG9wZW4sIGNsb3NlLCByZXBsYWNlID0gb3BlbikgPT5cblx0XHRpbnB1dCA9PiB7XG5cdFx0XHRsZXQgc3RyaW5nID0gXCJcIiArIGlucHV0LCBpbmRleCA9IHN0cmluZy5pbmRleE9mKGNsb3NlLCBvcGVuLmxlbmd0aCk7XG5cdFx0XHRyZXR1cm4gfmluZGV4ID8gb3BlbiArIHJlcGxhY2VDbG9zZShzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgKyBjbG9zZSA6IG9wZW4gKyBzdHJpbmcgKyBjbG9zZVxuXHRcdH07XG5cblx0bGV0IHJlcGxhY2VDbG9zZSA9IChzdHJpbmcsIGNsb3NlLCByZXBsYWNlLCBpbmRleCkgPT4ge1xuXHRcdGxldCByZXN1bHQgPSBcIlwiLCBjdXJzb3IgPSAwO1xuXHRcdGRvIHtcblx0XHRcdHJlc3VsdCArPSBzdHJpbmcuc3Vic3RyaW5nKGN1cnNvciwgaW5kZXgpICsgcmVwbGFjZTtcblx0XHRcdGN1cnNvciA9IGluZGV4ICsgY2xvc2UubGVuZ3RoO1xuXHRcdFx0aW5kZXggPSBzdHJpbmcuaW5kZXhPZihjbG9zZSwgY3Vyc29yKTtcblx0XHR9IHdoaWxlICh+aW5kZXgpXG5cdFx0cmV0dXJuIHJlc3VsdCArIHN0cmluZy5zdWJzdHJpbmcoY3Vyc29yKVxuXHR9O1xuXG5cdGxldCBjcmVhdGVDb2xvcnMgPSAoZW5hYmxlZCA9IGlzQ29sb3JTdXBwb3J0ZWQpID0+IHtcblx0XHRsZXQgZiA9IGVuYWJsZWQgPyBmb3JtYXR0ZXIgOiAoKSA9PiBTdHJpbmc7XG5cdFx0cmV0dXJuIHtcblx0XHRcdGlzQ29sb3JTdXBwb3J0ZWQ6IGVuYWJsZWQsXG5cdFx0XHRyZXNldDogZihcIlxceDFiWzBtXCIsIFwiXFx4MWJbMG1cIiksXG5cdFx0XHRib2xkOiBmKFwiXFx4MWJbMW1cIiwgXCJcXHgxYlsyMm1cIiwgXCJcXHgxYlsyMm1cXHgxYlsxbVwiKSxcblx0XHRcdGRpbTogZihcIlxceDFiWzJtXCIsIFwiXFx4MWJbMjJtXCIsIFwiXFx4MWJbMjJtXFx4MWJbMm1cIiksXG5cdFx0XHRpdGFsaWM6IGYoXCJcXHgxYlszbVwiLCBcIlxceDFiWzIzbVwiKSxcblx0XHRcdHVuZGVybGluZTogZihcIlxceDFiWzRtXCIsIFwiXFx4MWJbMjRtXCIpLFxuXHRcdFx0aW52ZXJzZTogZihcIlxceDFiWzdtXCIsIFwiXFx4MWJbMjdtXCIpLFxuXHRcdFx0aGlkZGVuOiBmKFwiXFx4MWJbOG1cIiwgXCJcXHgxYlsyOG1cIiksXG5cdFx0XHRzdHJpa2V0aHJvdWdoOiBmKFwiXFx4MWJbOW1cIiwgXCJcXHgxYlsyOW1cIiksXG5cblx0XHRcdGJsYWNrOiBmKFwiXFx4MWJbMzBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0cmVkOiBmKFwiXFx4MWJbMzFtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0Z3JlZW46IGYoXCJcXHgxYlszMm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHR5ZWxsb3c6IGYoXCJcXHgxYlszM21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHRibHVlOiBmKFwiXFx4MWJbMzRtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0bWFnZW50YTogZihcIlxceDFiWzM1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRcdGN5YW46IGYoXCJcXHgxYlszNm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHR3aGl0ZTogZihcIlxceDFiWzM3bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRcdGdyYXk6IGYoXCJcXHgxYls5MG1cIiwgXCJcXHgxYlszOW1cIiksXG5cblx0XHRcdGJnQmxhY2s6IGYoXCJcXHgxYls0MG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0XHRiZ1JlZDogZihcIlxceDFiWzQxbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnR3JlZW46IGYoXCJcXHgxYls0Mm1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0XHRiZ1llbGxvdzogZihcIlxceDFiWzQzbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnQmx1ZTogZihcIlxceDFiWzQ0bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnTWFnZW50YTogZihcIlxceDFiWzQ1bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnQ3lhbjogZihcIlxceDFiWzQ2bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnV2hpdGU6IGYoXCJcXHgxYls0N21cIiwgXCJcXHgxYls0OW1cIiksXG5cblx0XHRcdGJsYWNrQnJpZ2h0OiBmKFwiXFx4MWJbOTBtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0cmVkQnJpZ2h0OiBmKFwiXFx4MWJbOTFtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0Z3JlZW5CcmlnaHQ6IGYoXCJcXHgxYls5Mm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHR5ZWxsb3dCcmlnaHQ6IGYoXCJcXHgxYls5M21cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHRibHVlQnJpZ2h0OiBmKFwiXFx4MWJbOTRtXCIsIFwiXFx4MWJbMzltXCIpLFxuXHRcdFx0bWFnZW50YUJyaWdodDogZihcIlxceDFiWzk1bVwiLCBcIlxceDFiWzM5bVwiKSxcblx0XHRcdGN5YW5CcmlnaHQ6IGYoXCJcXHgxYls5Nm1cIiwgXCJcXHgxYlszOW1cIiksXG5cdFx0XHR3aGl0ZUJyaWdodDogZihcIlxceDFiWzk3bVwiLCBcIlxceDFiWzM5bVwiKSxcblxuXHRcdFx0YmdCbGFja0JyaWdodDogZihcIlxceDFiWzEwMG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0XHRiZ1JlZEJyaWdodDogZihcIlxceDFiWzEwMW1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0XHRiZ0dyZWVuQnJpZ2h0OiBmKFwiXFx4MWJbMTAybVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnWWVsbG93QnJpZ2h0OiBmKFwiXFx4MWJbMTAzbVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnQmx1ZUJyaWdodDogZihcIlxceDFiWzEwNG1cIiwgXCJcXHgxYls0OW1cIiksXG5cdFx0XHRiZ01hZ2VudGFCcmlnaHQ6IGYoXCJcXHgxYlsxMDVtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdFx0YmdDeWFuQnJpZ2h0OiBmKFwiXFx4MWJbMTA2bVwiLCBcIlxceDFiWzQ5bVwiKSxcblx0XHRcdGJnV2hpdGVCcmlnaHQ6IGYoXCJcXHgxYlsxMDdtXCIsIFwiXFx4MWJbNDltXCIpLFxuXHRcdH1cblx0fTtcblxuXHRwaWNvY29sb3JzLmV4cG9ydHMgPSBjcmVhdGVDb2xvcnMoKTtcblx0cGljb2NvbG9ycy5leHBvcnRzLmNyZWF0ZUNvbG9ycyA9IGNyZWF0ZUNvbG9ycztcblx0cmV0dXJuIHBpY29jb2xvcnMuZXhwb3J0cztcbn1cblxudmFyIHBpY29jb2xvcnNFeHBvcnRzID0gLypAX19QVVJFX18qLyByZXF1aXJlUGljb2NvbG9ycygpO1xuY29uc3QgZSA9IC8qQF9fUFVSRV9fKi9nZXREZWZhdWx0RXhwb3J0RnJvbUNqcyhwaWNvY29sb3JzRXhwb3J0cyk7XG5cbmZ1bmN0aW9uIEooe29ubHlGaXJzdDp0PWZhbHNlfT17fSl7Y29uc3QgRj1bXCJbXFxcXHUwMDFCXFxcXHUwMDlCXVtbXFxcXF0oKSM7P10qKD86KD86KD86KD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXFxcZF0rKD86O1stYS16QS1aXFxcXGRcXFxcLyMmLjo9PyVAfl9dKikqKT8oPzpcXFxcdTAwMDd8XFxcXHUwMDFCXFxcXHUwMDVDfFxcXFx1MDA5QykpXCIsXCIoPzooPzpcXFxcZHsxLDR9KD86O1xcXFxkezAsNH0pKik/W1xcXFxkQS1QUi1UWmNmLW5xLXV5PT48fl0pKVwiXS5qb2luKFwifFwiKTtyZXR1cm4gbmV3IFJlZ0V4cChGLHQ/dm9pZCAwOlwiZ1wiKX1jb25zdCBRPUooKTtmdW5jdGlvbiBUJDEodCl7aWYodHlwZW9mIHQhPVwic3RyaW5nXCIpdGhyb3cgbmV3IFR5cGVFcnJvcihgRXhwZWN0ZWQgYSBcXGBzdHJpbmdcXGAsIGdvdCBcXGAke3R5cGVvZiB0fVxcYGApO3JldHVybiB0LnJlcGxhY2UoUSxcIlwiKX1mdW5jdGlvbiBPKHQpe3JldHVybiB0JiZ0Ll9fZXNNb2R1bGUmJk9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbCh0LFwiZGVmYXVsdFwiKT90LmRlZmF1bHQ6dH12YXIgUCQxPXtleHBvcnRzOnt9fTsoZnVuY3Rpb24odCl7dmFyIHU9e307dC5leHBvcnRzPXUsdS5lYXN0QXNpYW5XaWR0aD1mdW5jdGlvbihlKXt2YXIgcz1lLmNoYXJDb2RlQXQoMCksaT1lLmxlbmd0aD09Mj9lLmNoYXJDb2RlQXQoMSk6MCxEPXM7cmV0dXJuIDU1Mjk2PD1zJiZzPD01NjMxOSYmNTYzMjA8PWkmJmk8PTU3MzQzJiYocyY9MTAyMyxpJj0xMDIzLEQ9czw8MTB8aSxEKz02NTUzNiksRD09MTIyODh8fDY1MjgxPD1EJiZEPD02NTM3Nnx8NjU1MDQ8PUQmJkQ8PTY1NTEwP1wiRlwiOkQ9PTgzNjF8fDY1Mzc3PD1EJiZEPD02NTQ3MHx8NjU0NzQ8PUQmJkQ8PTY1NDc5fHw2NTQ4Mjw9RCYmRDw9NjU0ODd8fDY1NDkwPD1EJiZEPD02NTQ5NXx8NjU0OTg8PUQmJkQ8PTY1NTAwfHw2NTUxMjw9RCYmRDw9NjU1MTg/XCJIXCI6NDM1Mjw9RCYmRDw9NDQ0N3x8NDUxNTw9RCYmRDw9NDUxOXx8NDYwMjw9RCYmRDw9NDYwN3x8OTAwMTw9RCYmRDw9OTAwMnx8MTE5MDQ8PUQmJkQ8PTExOTI5fHwxMTkzMTw9RCYmRDw9MTIwMTl8fDEyMDMyPD1EJiZEPD0xMjI0NXx8MTIyNzI8PUQmJkQ8PTEyMjgzfHwxMjI4OTw9RCYmRDw9MTIzNTB8fDEyMzUzPD1EJiZEPD0xMjQzOHx8MTI0NDE8PUQmJkQ8PTEyNTQzfHwxMjU0OTw9RCYmRDw9MTI1ODl8fDEyNTkzPD1EJiZEPD0xMjY4Nnx8MTI2ODg8PUQmJkQ8PTEyNzMwfHwxMjczNjw9RCYmRDw9MTI3NzF8fDEyNzg0PD1EJiZEPD0xMjgzMHx8MTI4MzI8PUQmJkQ8PTEyODcxfHwxMjg4MDw9RCYmRDw9MTMwNTR8fDEzMDU2PD1EJiZEPD0xOTkwM3x8MTk5Njg8PUQmJkQ8PTQyMTI0fHw0MjEyODw9RCYmRDw9NDIxODJ8fDQzMzYwPD1EJiZEPD00MzM4OHx8NDQwMzI8PUQmJkQ8PTU1MjAzfHw1NTIxNjw9RCYmRDw9NTUyMzh8fDU1MjQzPD1EJiZEPD01NTI5MXx8NjM3NDQ8PUQmJkQ8PTY0MjU1fHw2NTA0MDw9RCYmRDw9NjUwNDl8fDY1MDcyPD1EJiZEPD02NTEwNnx8NjUxMDg8PUQmJkQ8PTY1MTI2fHw2NTEyODw9RCYmRDw9NjUxMzF8fDExMDU5Mjw9RCYmRDw9MTEwNTkzfHwxMjc0ODg8PUQmJkQ8PTEyNzQ5MHx8MTI3NTA0PD1EJiZEPD0xMjc1NDZ8fDEyNzU1Mjw9RCYmRDw9MTI3NTYwfHwxMjc1Njg8PUQmJkQ8PTEyNzU2OXx8MTMxMDcyPD1EJiZEPD0xOTQzNjd8fDE3Nzk4NDw9RCYmRDw9MTk2NjA1fHwxOTY2MDg8PUQmJkQ8PTI2MjE0MT9cIldcIjozMjw9RCYmRDw9MTI2fHwxNjI8PUQmJkQ8PTE2M3x8MTY1PD1EJiZEPD0xNjZ8fEQ9PTE3Mnx8RD09MTc1fHwxMDIxNDw9RCYmRDw9MTAyMjF8fDEwNjI5PD1EJiZEPD0xMDYzMD9cIk5hXCI6RD09MTYxfHxEPT0xNjR8fDE2Nzw9RCYmRDw9MTY4fHxEPT0xNzB8fDE3Mzw9RCYmRDw9MTc0fHwxNzY8PUQmJkQ8PTE4MHx8MTgyPD1EJiZEPD0xODZ8fDE4ODw9RCYmRDw9MTkxfHxEPT0xOTh8fEQ9PTIwOHx8MjE1PD1EJiZEPD0yMTZ8fDIyMjw9RCYmRDw9MjI1fHxEPT0yMzB8fDIzMjw9RCYmRDw9MjM0fHwyMzY8PUQmJkQ8PTIzN3x8RD09MjQwfHwyNDI8PUQmJkQ8PTI0M3x8MjQ3PD1EJiZEPD0yNTB8fEQ9PTI1Mnx8RD09MjU0fHxEPT0yNTd8fEQ9PTI3M3x8RD09Mjc1fHxEPT0yODN8fDI5NDw9RCYmRDw9Mjk1fHxEPT0yOTl8fDMwNTw9RCYmRDw9MzA3fHxEPT0zMTJ8fDMxOTw9RCYmRDw9MzIyfHxEPT0zMjR8fDMyODw9RCYmRDw9MzMxfHxEPT0zMzN8fDMzODw9RCYmRDw9MzM5fHwzNTg8PUQmJkQ8PTM1OXx8RD09MzYzfHxEPT00NjJ8fEQ9PTQ2NHx8RD09NDY2fHxEPT00Njh8fEQ9PTQ3MHx8RD09NDcyfHxEPT00NzR8fEQ9PTQ3Nnx8RD09NTkzfHxEPT02MDl8fEQ9PTcwOHx8RD09NzExfHw3MTM8PUQmJkQ8PTcxNXx8RD09NzE3fHxEPT03MjB8fDcyODw9RCYmRDw9NzMxfHxEPT03MzN8fEQ9PTczNXx8NzY4PD1EJiZEPD04Nzl8fDkxMzw9RCYmRDw9OTI5fHw5MzE8PUQmJkQ8PTkzN3x8OTQ1PD1EJiZEPD05NjF8fDk2Mzw9RCYmRDw9OTY5fHxEPT0xMDI1fHwxMDQwPD1EJiZEPD0xMTAzfHxEPT0xMTA1fHxEPT04MjA4fHw4MjExPD1EJiZEPD04MjE0fHw4MjE2PD1EJiZEPD04MjE3fHw4MjIwPD1EJiZEPD04MjIxfHw4MjI0PD1EJiZEPD04MjI2fHw4MjI4PD1EJiZEPD04MjMxfHxEPT04MjQwfHw4MjQyPD1EJiZEPD04MjQzfHxEPT04MjQ1fHxEPT04MjUxfHxEPT04MjU0fHxEPT04MzA4fHxEPT04MzE5fHw4MzIxPD1EJiZEPD04MzI0fHxEPT04MzY0fHxEPT04NDUxfHxEPT04NDUzfHxEPT04NDU3fHxEPT04NDY3fHxEPT04NDcwfHw4NDgxPD1EJiZEPD04NDgyfHxEPT04NDg2fHxEPT04NDkxfHw4NTMxPD1EJiZEPD04NTMyfHw4NTM5PD1EJiZEPD04NTQyfHw4NTQ0PD1EJiZEPD04NTU1fHw4NTYwPD1EJiZEPD04NTY5fHxEPT04NTg1fHw4NTkyPD1EJiZEPD04NjAxfHw4NjMyPD1EJiZEPD04NjMzfHxEPT04NjU4fHxEPT04NjYwfHxEPT04Njc5fHxEPT04NzA0fHw4NzA2PD1EJiZEPD04NzA3fHw4NzExPD1EJiZEPD04NzEyfHxEPT04NzE1fHxEPT04NzE5fHxEPT04NzIxfHxEPT04NzI1fHxEPT04NzMwfHw4NzMzPD1EJiZEPD04NzM2fHxEPT04NzM5fHxEPT04NzQxfHw4NzQzPD1EJiZEPD04NzQ4fHxEPT04NzUwfHw4NzU2PD1EJiZEPD04NzU5fHw4NzY0PD1EJiZEPD04NzY1fHxEPT04Nzc2fHxEPT04NzgwfHxEPT04Nzg2fHw4ODAwPD1EJiZEPD04ODAxfHw4ODA0PD1EJiZEPD04ODA3fHw4ODEwPD1EJiZEPD04ODExfHw4ODE0PD1EJiZEPD04ODE1fHw4ODM0PD1EJiZEPD04ODM1fHw4ODM4PD1EJiZEPD04ODM5fHxEPT04ODUzfHxEPT04ODU3fHxEPT04ODY5fHxEPT04ODk1fHxEPT04OTc4fHw5MzEyPD1EJiZEPD05NDQ5fHw5NDUxPD1EJiZEPD05NTQ3fHw5NTUyPD1EJiZEPD05NTg3fHw5NjAwPD1EJiZEPD05NjE1fHw5NjE4PD1EJiZEPD05NjIxfHw5NjMyPD1EJiZEPD05NjMzfHw5NjM1PD1EJiZEPD05NjQxfHw5NjUwPD1EJiZEPD05NjUxfHw5NjU0PD1EJiZEPD05NjU1fHw5NjYwPD1EJiZEPD05NjYxfHw5NjY0PD1EJiZEPD05NjY1fHw5NjcwPD1EJiZEPD05NjcyfHxEPT05Njc1fHw5Njc4PD1EJiZEPD05NjgxfHw5Njk4PD1EJiZEPD05NzAxfHxEPT05NzExfHw5NzMzPD1EJiZEPD05NzM0fHxEPT05NzM3fHw5NzQyPD1EJiZEPD05NzQzfHw5NzQ4PD1EJiZEPD05NzQ5fHxEPT05NzU2fHxEPT05NzU4fHxEPT05NzkyfHxEPT05Nzk0fHw5ODI0PD1EJiZEPD05ODI1fHw5ODI3PD1EJiZEPD05ODI5fHw5ODMxPD1EJiZEPD05ODM0fHw5ODM2PD1EJiZEPD05ODM3fHxEPT05ODM5fHw5ODg2PD1EJiZEPD05ODg3fHw5OTE4PD1EJiZEPD05OTE5fHw5OTI0PD1EJiZEPD05OTMzfHw5OTM1PD1EJiZEPD05OTUzfHxEPT05OTU1fHw5OTYwPD1EJiZEPD05OTgzfHxEPT0xMDA0NXx8RD09MTAwNzF8fDEwMTAyPD1EJiZEPD0xMDExMXx8MTEwOTM8PUQmJkQ8PTExMDk3fHwxMjg3Mjw9RCYmRDw9MTI4Nzl8fDU3MzQ0PD1EJiZEPD02Mzc0M3x8NjUwMjQ8PUQmJkQ8PTY1MDM5fHxEPT02NTUzM3x8MTI3MjMyPD1EJiZEPD0xMjcyNDJ8fDEyNzI0ODw9RCYmRDw9MTI3Mjc3fHwxMjcyODA8PUQmJkQ8PTEyNzMzN3x8MTI3MzQ0PD1EJiZEPD0xMjczODZ8fDkxNzc2MDw9RCYmRDw9OTE3OTk5fHw5ODMwNDA8PUQmJkQ8PTEwNDg1NzN8fDEwNDg1NzY8PUQmJkQ8PTExMTQxMDk/XCJBXCI6XCJOXCJ9LHUuY2hhcmFjdGVyTGVuZ3RoPWZ1bmN0aW9uKGUpe3ZhciBzPXRoaXMuZWFzdEFzaWFuV2lkdGgoZSk7cmV0dXJuIHM9PVwiRlwifHxzPT1cIldcInx8cz09XCJBXCI/MjoxfTtmdW5jdGlvbiBGKGUpe3JldHVybiBlLm1hdGNoKC9bXFx1RDgwMC1cXHVEQkZGXVtcXHVEQzAwLVxcdURGRkZdfFteXFx1RDgwMC1cXHVERkZGXS9nKXx8W119dS5sZW5ndGg9ZnVuY3Rpb24oZSl7Zm9yKHZhciBzPUYoZSksaT0wLEQ9MDtEPHMubGVuZ3RoO0QrKylpPWkrdGhpcy5jaGFyYWN0ZXJMZW5ndGgoc1tEXSk7cmV0dXJuIGl9LHUuc2xpY2U9ZnVuY3Rpb24oZSxzLGkpe3RleHRMZW49dS5sZW5ndGgoZSkscz1zfHwwLGk9aXx8MSxzPDAmJihzPXRleHRMZW4rcyksaTwwJiYoaT10ZXh0TGVuK2kpO2Zvcih2YXIgRD1cIlwiLEM9MCxvPUYoZSksRT0wO0U8by5sZW5ndGg7RSsrKXt2YXIgYT1vW0VdLG49dS5sZW5ndGgoYSk7aWYoQz49cy0obj09Mj8xOjApKWlmKEMrbjw9aSlEKz1hO2Vsc2UgYnJlYWs7Qys9bjt9cmV0dXJuIER9O30pKFAkMSk7dmFyIFg9UCQxLmV4cG9ydHM7Y29uc3QgREQ9TyhYKTt2YXIgdUQ9ZnVuY3Rpb24oKXtyZXR1cm4gL1xcdUQ4M0NcXHVERkY0XFx1REI0MFxcdURDNjdcXHVEQjQwXFx1REM2Mig/OlxcdURCNDBcXHVEQzc3XFx1REI0MFxcdURDNkNcXHVEQjQwXFx1REM3M3xcXHVEQjQwXFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REI0MFxcdURDNjVcXHVEQjQwXFx1REM2RVxcdURCNDBcXHVEQzY3KVxcdURCNDBcXHVEQzdGfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkZcXHUyMDBEXFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZGXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRV0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkVcXHUyMDBEXFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZFXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKXwoPzpcXHVEODNFXFx1REREMVxcdUQ4M0NcXHVERkZEXFx1MjAwRFxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDF8XFx1RDgzRFxcdURDNjlcXHVEODNDXFx1REZGRFxcdTIwMERcXHVEODNFXFx1REQxRFxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSkpKD86XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSl8KD86XFx1RDgzRVxcdURERDFcXHVEODNDXFx1REZGQ1xcdTIwMERcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxfFxcdUQ4M0RcXHVEQzY5XFx1RDgzQ1xcdURGRkNcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKSg/OlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pfCg/OlxcdUQ4M0VcXHVEREQxXFx1RDgzQ1xcdURGRkJcXHUyMDBEXFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMXxcXHVEODNEXFx1REM2OVxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdUQ4M0VcXHVERDFEXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKSkoPzpcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pfFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1xcdURGRkIoPzpcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSl8XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pfFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRnxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pKT98KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKVxcdTIwMERcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSl8XFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKXxcXHUyMDBEKD86XFx1Mjc2NFxcdUZFMEZcXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNEXFx1REM2OHwoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHUyMDBEKD86XFx1RDgzRFxcdURDNjZcXHUyMDBEXFx1RDgzRFxcdURDNjZ8XFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pKXxcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRVxcdTIwMEQoPzpcXHVEODNFXFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OCg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjgoPzpcXHVEODNDW1xcdURGRkJcXHVERkZDXFx1REZGRVxcdURGRkZdKXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4KD86XFx1RDgzQ1tcXHVERkZCXFx1REZGRC1cXHVERkZGXSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXwoPzpcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pXFx1RkUwRnxcXHUyMDBEKD86KD86XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2NlxcdURDNjddKXxcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8XFx1RDgzQ1xcdURGRkZ8XFx1RDgzQ1xcdURGRkV8XFx1RDgzQ1xcdURGRkR8XFx1RDgzQ1xcdURGRkMpP3woPzpcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZCXFx1MjAwRFxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8KD86XFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKVxcdTIwMERcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pKXxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSlcXHUyMDBEXFx1RDgzRVxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDEpKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2N1xcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSkpfFxcdUQ4M0RcXHVEQzY5KD86XFx1MjAwRCg/OlxcdTI3NjRcXHVGRTBGXFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCg/OlxcdUQ4M0RbXFx1REM2OFxcdURDNjldKXxcXHVEODNEW1xcdURDNjhcXHVEQzY5XSl8XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGRlxcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSl8XFx1RDgzQ1xcdURGRkRcXHUyMDBEKD86XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0VbXFx1RERBRi1cXHVEREIzXFx1RERCQ1xcdUREQkRdKXxcXHVEODNDXFx1REZGQ1xcdTIwMEQoPzpcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFW1xcdUREQUYtXFx1RERCM1xcdUREQkNcXHVEREJEXSkpfFxcdUQ4M0VcXHVEREQxKD86XFx1MjAwRCg/OlxcdUQ4M0VcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZGXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZFXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZEXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZDXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pfFxcdUQ4M0NcXHVERkZCXFx1MjAwRCg/OlxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRVtcXHVEREFGLVxcdUREQjNcXHVEREJDXFx1RERCRF0pKXxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2NlxcdTIwMERcXHVEODNEXFx1REM2NnxcXHVEODNEXFx1REM2OVxcdTIwMERcXHVEODNEXFx1REM2OVxcdTIwMEQoPzpcXHVEODNEW1xcdURDNjZcXHVEQzY3XSl8XFx1RDgzRFxcdURDNjlcXHUyMDBEXFx1RDgzRFxcdURDNjdcXHUyMDBEKD86XFx1RDgzRFtcXHVEQzY2XFx1REM2N10pfCg/OlxcdUQ4M0RcXHVEQzQxXFx1RkUwRlxcdTIwMERcXHVEODNEXFx1RERFOHxcXHVEODNFXFx1REREMSg/OlxcdUQ4M0NcXHVERkZGXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZFXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZEXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZDXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdUQ4M0NcXHVERkZCXFx1MjAwRFtcXHUyNjk1XFx1MjY5NlxcdTI3MDhdfFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XSl8XFx1RDgzRFxcdURDNjkoPzpcXHVEODNDXFx1REZGRlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRVxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGRFxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQ1xcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHVEODNDXFx1REZGQlxcdTIwMERbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XXxcXHUyMDBEW1xcdTI2OTVcXHUyNjk2XFx1MjcwOF0pfFxcdUQ4M0RcXHVERTM2XFx1MjAwRFxcdUQ4M0NcXHVERjJCfFxcdUQ4M0NcXHVERkYzXFx1RkUwRlxcdTIwMERcXHUyNkE3fFxcdUQ4M0RcXHVEQzNCXFx1MjAwRFxcdTI3NDR8KD86KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNVxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ0XFx1RERENi1cXHVEREREXSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfFxcdUQ4M0RcXHVEQzZGfFxcdUQ4M0VbXFx1REQzQ1xcdUREREVcXHVERERGXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKVxcdTIwMERbXFx1MjY0MFxcdTI2NDJdfFxcdUQ4M0NcXHVERkY0XFx1MjAwRFxcdTI2MjB8KD86XFx1RDgzQ1tcXHVERkMzXFx1REZDNFxcdURGQ0FdfFxcdUQ4M0RbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjQtXFx1REVCNl18XFx1RDgzRVtcXHVERDI2XFx1REQzNVxcdUREMzctXFx1REQzOVxcdUREM0RcXHVERDNFXFx1RERCOFxcdUREQjlcXHVERENELVxcdUREQ0ZcXHVEREQ0XFx1RERENi1cXHVEREREXSlcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXXxbXFx4QTlcXHhBRVxcdTIwM0NcXHUyMDQ5XFx1MjEyMlxcdTIxMzlcXHUyMTk0LVxcdTIxOTlcXHUyMUE5XFx1MjFBQVxcdTIzMjhcXHUyM0NGXFx1MjNFRC1cXHUyM0VGXFx1MjNGMVxcdTIzRjJcXHUyM0Y4LVxcdTIzRkFcXHUyNEMyXFx1MjVBQVxcdTI1QUJcXHUyNUI2XFx1MjVDMFxcdTI1RkJcXHUyNUZDXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE4XFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjkyXFx1MjY5NC1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTdcXHUyNkIwXFx1MjZCMVxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RDNcXHUyNkU5XFx1MjZGMFxcdTI2RjFcXHUyNkY0XFx1MjZGN1xcdTI2RjhcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc2M1xcdTI3QTFcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTMwMzBcXHUzMDNEXFx1MzI5N1xcdTMyOTldfFxcdUQ4M0NbXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdURFMDJcXHVERTM3XFx1REYyMVxcdURGMjQtXFx1REYyQ1xcdURGMzZcXHVERjdEXFx1REY5NlxcdURGOTdcXHVERjk5LVxcdURGOUJcXHVERjlFXFx1REY5RlxcdURGQ0RcXHVERkNFXFx1REZENC1cXHVERkRGXFx1REZGNVxcdURGRjddfFxcdUQ4M0RbXFx1REMzRlxcdURDRkRcXHVERDQ5XFx1REQ0QVxcdURENkZcXHVERDcwXFx1REQ3M1xcdURENzYtXFx1REQ3OVxcdUREODdcXHVERDhBLVxcdUREOERcXHVEREE1XFx1RERBOFxcdUREQjFcXHVEREIyXFx1RERCQ1xcdUREQzItXFx1RERDNFxcdURERDEtXFx1REREM1xcdUREREMtXFx1RERERVxcdURERTFcXHVEREUzXFx1RERFOFxcdURERUZcXHVEREYzXFx1RERGQVxcdURFQ0JcXHVERUNELVxcdURFQ0ZcXHVERUUwLVxcdURFRTVcXHVERUU5XFx1REVGMFxcdURFRjNdKVxcdUZFMEZ8XFx1RDgzQ1xcdURGRjNcXHVGRTBGXFx1MjAwRFxcdUQ4M0NcXHVERjA4fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY3fFxcdUQ4M0RcXHVEQzY5XFx1MjAwRFxcdUQ4M0RcXHVEQzY2fFxcdUQ4M0RcXHVERTM1XFx1MjAwRFxcdUQ4M0RcXHVEQ0FCfFxcdUQ4M0RcXHVERTJFXFx1MjAwRFxcdUQ4M0RcXHVEQ0E4fFxcdUQ4M0RcXHVEQzE1XFx1MjAwRFxcdUQ4M0VcXHVEREJBfFxcdUQ4M0VcXHVEREQxKD86XFx1RDgzQ1xcdURGRkZ8XFx1RDgzQ1xcdURGRkV8XFx1RDgzQ1xcdURGRkR8XFx1RDgzQ1xcdURGRkN8XFx1RDgzQ1xcdURGRkIpP3xcXHVEODNEXFx1REM2OSg/OlxcdUQ4M0NcXHVERkZGfFxcdUQ4M0NcXHVERkZFfFxcdUQ4M0NcXHVERkZEfFxcdUQ4M0NcXHVERkZDfFxcdUQ4M0NcXHVERkZCKT98XFx1RDgzQ1xcdURERkRcXHVEODNDXFx1RERGMHxcXHVEODNDXFx1RERGNlxcdUQ4M0NcXHVEREU2fFxcdUQ4M0NcXHVEREY0XFx1RDgzQ1xcdURERjJ8XFx1RDgzRFxcdURDMDhcXHUyMDBEXFx1MkIxQnxcXHUyNzY0XFx1RkUwRlxcdTIwMEQoPzpcXHVEODNEXFx1REQyNXxcXHVEODNFXFx1REU3OSl8XFx1RDgzRFxcdURDNDFcXHVGRTBGfFxcdUQ4M0NcXHVERkYzXFx1RkUwRnxcXHVEODNDXFx1RERGRig/OlxcdUQ4M0NbXFx1RERFNlxcdURERjJcXHVEREZDXSl8XFx1RDgzQ1xcdURERkUoPzpcXHVEODNDW1xcdURERUFcXHVEREY5XSl8XFx1RDgzQ1xcdURERkMoPzpcXHVEODNDW1xcdURERUJcXHVEREY4XSl8XFx1RDgzQ1xcdURERkIoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdKXxcXHVEODNDXFx1RERGQSg/OlxcdUQ4M0NbXFx1RERFNlxcdURERUNcXHVEREYyXFx1RERGM1xcdURERjhcXHVEREZFXFx1RERGRl0pfFxcdUQ4M0NcXHVEREY5KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERURcXHVEREVGLVxcdURERjRcXHVEREY3XFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRl0pfFxcdUQ4M0NcXHVEREY4KD86XFx1RDgzQ1tcXHVEREU2LVxcdURERUFcXHVEREVDLVxcdURERjRcXHVEREY3LVxcdURERjlcXHVEREZCXFx1RERGRC1cXHVEREZGXSl8XFx1RDgzQ1xcdURERjcoPzpcXHVEODNDW1xcdURERUFcXHVEREY0XFx1RERGOFxcdURERkFcXHVEREZDXSl8XFx1RDgzQ1xcdURERjUoPzpcXHVEODNDW1xcdURERTZcXHVEREVBLVxcdURERURcXHVEREYwLVxcdURERjNcXHVEREY3LVxcdURERjlcXHVEREZDXFx1RERGRV0pfFxcdUQ4M0NcXHVEREYzKD86XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdKXxcXHVEODNDXFx1RERGMig/OlxcdUQ4M0NbXFx1RERFNlxcdURERTgtXFx1RERFRFxcdURERjAtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREYxKD86XFx1RDgzQ1tcXHVEREU2LVxcdURERThcXHVEREVFXFx1RERGMFxcdURERjctXFx1RERGQlxcdURERkVdKXxcXHVEODNDXFx1RERGMCg/OlxcdUQ4M0NbXFx1RERFQVxcdURERUMtXFx1RERFRVxcdURERjJcXHVEREYzXFx1RERGNVxcdURERjdcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFRig/OlxcdUQ4M0NbXFx1RERFQVxcdURERjJcXHVEREY0XFx1RERGNV0pfFxcdUQ4M0NcXHVEREVFKD86XFx1RDgzQ1tcXHVEREU4LVxcdURERUFcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjldKXxcXHVEODNDXFx1RERFRCg/OlxcdUQ4M0NbXFx1RERGMFxcdURERjJcXHVEREYzXFx1RERGN1xcdURERjlcXHVEREZBXSl8XFx1RDgzQ1xcdURERUMoPzpcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdKXxcXHVEODNDXFx1RERFQig/OlxcdUQ4M0NbXFx1RERFRS1cXHVEREYwXFx1RERGMlxcdURERjRcXHVEREY3XSl8XFx1RDgzQ1xcdURERUEoPzpcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXSl8XFx1RDgzQ1xcdURERTkoPzpcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdKXxcXHVEODNDXFx1RERFOCg/OlxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVFXFx1RERGMC1cXHVEREY1XFx1RERGN1xcdURERkEtXFx1RERGRl0pfFxcdUQ4M0NcXHVEREU3KD86XFx1RDgzQ1tcXHVEREU2XFx1RERFN1xcdURERTktXFx1RERFRlxcdURERjEtXFx1RERGNFxcdURERjYtXFx1RERGOVxcdURERkJcXHVEREZDXFx1RERGRVxcdURERkZdKXxcXHVEODNDXFx1RERFNig/OlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl0pfFsjXFwqMC05XVxcdUZFMEZcXHUyMEUzfFxcdTI3NjRcXHVGRTBGfCg/OlxcdUQ4M0NbXFx1REZDM1xcdURGQzRcXHVERkNBXXxcXHVEODNEW1xcdURDNkVcXHVEQzcwXFx1REM3MVxcdURDNzNcXHVEQzc3XFx1REM4MVxcdURDODJcXHVEQzg2XFx1REM4N1xcdURFNDUtXFx1REU0N1xcdURFNEJcXHVERTREXFx1REU0RVxcdURFQTNcXHVERUI0LVxcdURFQjZdfFxcdUQ4M0VbXFx1REQyNlxcdUREMzVcXHVERDM3LVxcdUREMzlcXHVERDNEXFx1REQzRVxcdUREQjhcXHVEREI5XFx1RERDRC1cXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0pKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXwoPzpcXHUyNkY5fFxcdUQ4M0NbXFx1REZDQlxcdURGQ0NdfFxcdUQ4M0RcXHVERDc1KSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxcXHVEODNDXFx1REZGNHwoPzpbXFx1MjcwQVxcdTI3MEJdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzJcXHVERkM3XXxcXHVEODNEW1xcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDOEZcXHVEQzkxXFx1RENBQVxcdUREN0FcXHVERDk1XFx1REQ5NlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUNcXHVERDFFXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XSkoPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pfCg/OltcXHUyNjFEXFx1MjcwQ1xcdTI3MERdfFxcdUQ4M0RbXFx1REQ3NFxcdUREOTBdKSg/OlxcdUZFMEZ8XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKXxbXFx1MjcwQVxcdTI3MEJdfFxcdUQ4M0NbXFx1REY4NVxcdURGQzJcXHVERkM3XXxcXHVEODNEW1xcdURDMDhcXHVEQzE1XFx1REMzQlxcdURDNDJcXHVEQzQzXFx1REM0Ni1cXHVEQzUwXFx1REM2NlxcdURDNjdcXHVEQzZCLVxcdURDNkRcXHVEQzcyXFx1REM3NC1cXHVEQzc2XFx1REM3OFxcdURDN0NcXHVEQzgzXFx1REM4NVxcdURDOEZcXHVEQzkxXFx1RENBQVxcdUREN0FcXHVERDk1XFx1REQ5NlxcdURFMkVcXHVERTM1XFx1REUzNlxcdURFNENcXHVERTRGXFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUNcXHVERDFFXFx1REQxRlxcdUREMzAtXFx1REQzNFxcdUREMzZcXHVERDc3XFx1RERCNVxcdUREQjZcXHVEREJCXFx1REREMlxcdURERDNcXHVEREQ1XXxcXHVEODNDW1xcdURGQzNcXHVERkM0XFx1REZDQV18XFx1RDgzRFtcXHVEQzZFXFx1REM3MFxcdURDNzFcXHVEQzczXFx1REM3N1xcdURDODFcXHVEQzgyXFx1REM4NlxcdURDODdcXHVERTQ1LVxcdURFNDdcXHVERTRCXFx1REU0RFxcdURFNEVcXHVERUEzXFx1REVCNC1cXHVERUI2XXxcXHVEODNFW1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0QtXFx1RERDRlxcdURERDRcXHVEREQ2LVxcdURERERdfFxcdUQ4M0RcXHVEQzZGfFxcdUQ4M0VbXFx1REQzQ1xcdUREREVcXHVERERGXXxbXFx1MjMxQVxcdTIzMUJcXHUyM0U5LVxcdTIzRUNcXHUyM0YwXFx1MjNGM1xcdTI1RkRcXHUyNUZFXFx1MjYxNFxcdTI2MTVcXHUyNjQ4LVxcdTI2NTNcXHUyNjdGXFx1MjY5M1xcdTI2QTFcXHUyNkFBXFx1MjZBQlxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkYyXFx1MjZGM1xcdTI2RjVcXHUyNkZBXFx1MjZGRFxcdTI3MDVcXHUyNzI4XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc5NS1cXHUyNzk3XFx1MjdCMFxcdTI3QkZcXHUyQjFCXFx1MkIxQ1xcdTJCNTBcXHUyQjU1XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQ0XFx1REU0OC1cXHVERTRBXFx1REU4MC1cXHVERUEyXFx1REVBNC1cXHVERUIzXFx1REVCNy1cXHVERUJGXFx1REVDMS1cXHVERUM1XFx1REVEMC1cXHVERUQyXFx1REVENS1cXHVERUQ3XFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkNcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwRFxcdUREMEVcXHVERDEwLVxcdUREMTdcXHVERDFEXFx1REQyMC1cXHVERDI1XFx1REQyNy1cXHVERDJGXFx1REQzQVxcdUREM0YtXFx1REQ0NVxcdURENDctXFx1REQ3NlxcdURENzhcXHVERDdBLVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQlxcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFNzRcXHVERTc4LVxcdURFN0FcXHVERTgwLVxcdURFODZcXHVERTkwLVxcdURFQThcXHVERUIwLVxcdURFQjZcXHVERUMwLVxcdURFQzJcXHVERUQwLVxcdURFRDZdfCg/OltcXHUyMzFBXFx1MjMxQlxcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI1RkVcXHUyNjE0XFx1MjYxNVxcdTI2NDgtXFx1MjY1M1xcdTI2N0ZcXHUyNjkzXFx1MjZBMVxcdTI2QUFcXHUyNkFCXFx1MjZCRFxcdTI2QkVcXHUyNkM0XFx1MjZDNVxcdTI2Q0VcXHUyNkQ0XFx1MjZFQVxcdTI2RjJcXHUyNkYzXFx1MjZGNVxcdTI2RkFcXHUyNkZEXFx1MjcwNVxcdTI3MEFcXHUyNzBCXFx1MjcyOFxcdTI3NENcXHUyNzRFXFx1Mjc1My1cXHUyNzU1XFx1Mjc1N1xcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkIxQlxcdTJCMUNcXHUyQjUwXFx1MkI1NV18XFx1RDgzQ1tcXHVEQzA0XFx1RENDRlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUxQVxcdURFMkZcXHVERTMyLVxcdURFMzZcXHVERTM4LVxcdURFM0FcXHVERTUwXFx1REU1MVxcdURGMDAtXFx1REYyMFxcdURGMkQtXFx1REYzNVxcdURGMzctXFx1REY3Q1xcdURGN0UtXFx1REY5M1xcdURGQTAtXFx1REZDQVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjRcXHVERkY4LVxcdURGRkZdfFxcdUQ4M0RbXFx1REMwMC1cXHVEQzNFXFx1REM0MFxcdURDNDItXFx1RENGQ1xcdURDRkYtXFx1REQzRFxcdURENEItXFx1REQ0RVxcdURENTAtXFx1REQ2N1xcdUREN0FcXHVERDk1XFx1REQ5NlxcdUREQTRcXHVEREZCLVxcdURFNEZcXHVERTgwLVxcdURFQzVcXHVERUNDXFx1REVEMC1cXHVERUQyXFx1REVENS1cXHVERUQ3XFx1REVFQlxcdURFRUNcXHVERUY0LVxcdURFRkNcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwQy1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDc4XFx1REQ3QS1cXHVERENCXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTc0XFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTg2XFx1REU5MC1cXHVERUE4XFx1REVCMC1cXHVERUI2XFx1REVDMC1cXHVERUMyXFx1REVEMC1cXHVERUQ2XSl8KD86WyNcXCowLTlcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRTktXFx1MjNGM1xcdTIzRjgtXFx1MjNGQVxcdTI0QzJcXHUyNUFBXFx1MjVBQlxcdTI1QjZcXHUyNUMwXFx1MjVGQi1cXHUyNUZFXFx1MjYwMC1cXHUyNjA0XFx1MjYwRVxcdTI2MTFcXHUyNjE0XFx1MjYxNVxcdTI2MThcXHUyNjFEXFx1MjYyMFxcdTI2MjJcXHUyNjIzXFx1MjYyNlxcdTI2MkFcXHUyNjJFXFx1MjYyRlxcdTI2MzgtXFx1MjYzQVxcdTI2NDBcXHUyNjQyXFx1MjY0OC1cXHUyNjUzXFx1MjY1RlxcdTI2NjBcXHUyNjYzXFx1MjY2NVxcdTI2NjZcXHUyNjY4XFx1MjY3QlxcdTI2N0VcXHUyNjdGXFx1MjY5Mi1cXHUyNjk3XFx1MjY5OVxcdTI2OUJcXHUyNjlDXFx1MjZBMFxcdTI2QTFcXHUyNkE3XFx1MjZBQVxcdTI2QUJcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzVcXHUyNkM4XFx1MjZDRVxcdTI2Q0ZcXHUyNkQxXFx1MjZEM1xcdTI2RDRcXHUyNkU5XFx1MjZFQVxcdTI2RjAtXFx1MjZGNVxcdTI2RjctXFx1MjZGQVxcdTI2RkRcXHUyNzAyXFx1MjcwNVxcdTI3MDgtXFx1MjcwRFxcdTI3MEZcXHUyNzEyXFx1MjcxNFxcdTI3MTZcXHUyNzFEXFx1MjcyMVxcdTI3MjhcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc0Q1xcdTI3NEVcXHUyNzUzLVxcdTI3NTVcXHUyNzU3XFx1Mjc2M1xcdTI3NjRcXHUyNzk1LVxcdTI3OTdcXHUyN0ExXFx1MjdCMFxcdTI3QkZcXHUyOTM0XFx1MjkzNVxcdTJCMDUtXFx1MkIwN1xcdTJCMUJcXHUyQjFDXFx1MkI1MFxcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XXxcXHVEODNDW1xcdURDMDRcXHVEQ0NGXFx1REQ3MFxcdURENzFcXHVERDdFXFx1REQ3RlxcdUREOEVcXHVERDkxLVxcdUREOUFcXHVEREU2LVxcdURERkZcXHVERTAxXFx1REUwMlxcdURFMUFcXHVERTJGXFx1REUzMi1cXHVERTNBXFx1REU1MFxcdURFNTFcXHVERjAwLVxcdURGMjFcXHVERjI0LVxcdURGOTNcXHVERjk2XFx1REY5N1xcdURGOTktXFx1REY5QlxcdURGOUUtXFx1REZGMFxcdURGRjMtXFx1REZGNVxcdURGRjctXFx1REZGRl18XFx1RDgzRFtcXHVEQzAwLVxcdURDRkRcXHVEQ0ZGLVxcdUREM0RcXHVERDQ5LVxcdURENEVcXHVERDUwLVxcdURENjdcXHVERDZGXFx1REQ3MFxcdURENzMtXFx1REQ3QVxcdUREODdcXHVERDhBLVxcdUREOERcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVEREE0XFx1RERBNVxcdUREQThcXHVEREIxXFx1RERCMlxcdUREQkNcXHVEREMyLVxcdUREQzRcXHVEREQxLVxcdURERDNcXHVERERDLVxcdUREREVcXHVEREUxXFx1RERFM1xcdURERThcXHVEREVGXFx1RERGM1xcdURERkEtXFx1REU0RlxcdURFODAtXFx1REVDNVxcdURFQ0ItXFx1REVEMlxcdURFRDUtXFx1REVEN1xcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUVCXFx1REVFQ1xcdURFRjBcXHVERUYzLVxcdURFRkNcXHVERkUwLVxcdURGRUJdfFxcdUQ4M0VbXFx1REQwQy1cXHVERDNBXFx1REQzQy1cXHVERDQ1XFx1REQ0Ny1cXHVERDc4XFx1REQ3QS1cXHVERENCXFx1RERDRC1cXHVEREZGXFx1REU3MC1cXHVERTc0XFx1REU3OC1cXHVERTdBXFx1REU4MC1cXHVERTg2XFx1REU5MC1cXHVERUE4XFx1REVCMC1cXHVERUI2XFx1REVDMC1cXHVERUMyXFx1REVEMC1cXHVERUQ2XSlcXHVGRTBGfCg/OltcXHUyNjFEXFx1MjZGOVxcdTI3MEEtXFx1MjcwRF18XFx1RDgzQ1tcXHVERjg1XFx1REZDMi1cXHVERkM0XFx1REZDN1xcdURGQ0EtXFx1REZDQ118XFx1RDgzRFtcXHVEQzQyXFx1REM0M1xcdURDNDYtXFx1REM1MFxcdURDNjYtXFx1REM3OFxcdURDN0NcXHVEQzgxLVxcdURDODNcXHVEQzg1LVxcdURDODdcXHVEQzhGXFx1REM5MVxcdURDQUFcXHVERDc0XFx1REQ3NVxcdUREN0FcXHVERDkwXFx1REQ5NVxcdUREOTZcXHVERTQ1LVxcdURFNDdcXHVERTRCLVxcdURFNEZcXHVERUEzXFx1REVCNC1cXHVERUI2XFx1REVDMFxcdURFQ0NdfFxcdUQ4M0VbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDI2XFx1REQzMC1cXHVERDM5XFx1REQzQy1cXHVERDNFXFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCOFxcdUREQjlcXHVEREJCXFx1RERDRC1cXHVERENGXFx1REREMS1cXHVEREREXSkvZ307Y29uc3QgRkQ9Tyh1RCk7ZnVuY3Rpb24gQSQxKHQsdT17fSl7aWYodHlwZW9mIHQhPVwic3RyaW5nXCJ8fHQubGVuZ3RoPT09MHx8KHU9e2FtYmlndW91c0lzTmFycm93OnRydWUsLi4udX0sdD1UJDEodCksdC5sZW5ndGg9PT0wKSlyZXR1cm4gMDt0PXQucmVwbGFjZShGRCgpLFwiICBcIik7Y29uc3QgRj11LmFtYmlndW91c0lzTmFycm93PzE6MjtsZXQgZT0wO2Zvcihjb25zdCBzIG9mIHQpe2NvbnN0IGk9cy5jb2RlUG9pbnRBdCgwKTtpZihpPD0zMXx8aT49MTI3JiZpPD0xNTl8fGk+PTc2OCYmaTw9ODc5KWNvbnRpbnVlO3N3aXRjaChERC5lYXN0QXNpYW5XaWR0aChzKSl7Y2FzZSBcIkZcIjpjYXNlIFwiV1wiOmUrPTI7YnJlYWs7Y2FzZSBcIkFcIjplKz1GO2JyZWFrO2RlZmF1bHQ6ZSs9MTt9fXJldHVybiBlfWNvbnN0IG09MTAsTCQxPSh0PTApPT51PT5gXFx4MUJbJHt1K3R9bWAsTj0odD0wKT0+dT0+YFxceDFCWyR7MzgrdH07NTske3V9bWAsST0odD0wKT0+KHUsRixlKT0+YFxceDFCWyR7MzgrdH07Mjske3V9OyR7Rn07JHtlfW1gLHI9e21vZGlmaWVyOntyZXNldDpbMCwwXSxib2xkOlsxLDIyXSxkaW06WzIsMjJdLGl0YWxpYzpbMywyM10sdW5kZXJsaW5lOls0LDI0XSxvdmVybGluZTpbNTMsNTVdLGludmVyc2U6WzcsMjddLGhpZGRlbjpbOCwyOF0sc3RyaWtldGhyb3VnaDpbOSwyOV19LGNvbG9yOntibGFjazpbMzAsMzldLHJlZDpbMzEsMzldLGdyZWVuOlszMiwzOV0seWVsbG93OlszMywzOV0sYmx1ZTpbMzQsMzldLG1hZ2VudGE6WzM1LDM5XSxjeWFuOlszNiwzOV0sd2hpdGU6WzM3LDM5XSxibGFja0JyaWdodDpbOTAsMzldLGdyYXk6WzkwLDM5XSxncmV5Ols5MCwzOV0scmVkQnJpZ2h0Ols5MSwzOV0sZ3JlZW5CcmlnaHQ6WzkyLDM5XSx5ZWxsb3dCcmlnaHQ6WzkzLDM5XSxibHVlQnJpZ2h0Ols5NCwzOV0sbWFnZW50YUJyaWdodDpbOTUsMzldLGN5YW5CcmlnaHQ6Wzk2LDM5XSx3aGl0ZUJyaWdodDpbOTcsMzldfSxiZ0NvbG9yOntiZ0JsYWNrOls0MCw0OV0sYmdSZWQ6WzQxLDQ5XSxiZ0dyZWVuOls0Miw0OV0sYmdZZWxsb3c6WzQzLDQ5XSxiZ0JsdWU6WzQ0LDQ5XSxiZ01hZ2VudGE6WzQ1LDQ5XSxiZ0N5YW46WzQ2LDQ5XSxiZ1doaXRlOls0Nyw0OV0sYmdCbGFja0JyaWdodDpbMTAwLDQ5XSxiZ0dyYXk6WzEwMCw0OV0sYmdHcmV5OlsxMDAsNDldLGJnUmVkQnJpZ2h0OlsxMDEsNDldLGJnR3JlZW5CcmlnaHQ6WzEwMiw0OV0sYmdZZWxsb3dCcmlnaHQ6WzEwMyw0OV0sYmdCbHVlQnJpZ2h0OlsxMDQsNDldLGJnTWFnZW50YUJyaWdodDpbMTA1LDQ5XSxiZ0N5YW5CcmlnaHQ6WzEwNiw0OV0sYmdXaGl0ZUJyaWdodDpbMTA3LDQ5XX19O09iamVjdC5rZXlzKHIubW9kaWZpZXIpO2NvbnN0IHREPU9iamVjdC5rZXlzKHIuY29sb3IpLGVEPU9iamVjdC5rZXlzKHIuYmdDb2xvcik7Wy4uLnRELC4uLmVEXTtmdW5jdGlvbiBzRCgpe2NvbnN0IHQ9bmV3IE1hcDtmb3IoY29uc3RbdSxGXW9mIE9iamVjdC5lbnRyaWVzKHIpKXtmb3IoY29uc3RbZSxzXW9mIE9iamVjdC5lbnRyaWVzKEYpKXJbZV09e29wZW46YFxceDFCWyR7c1swXX1tYCxjbG9zZTpgXFx4MUJbJHtzWzFdfW1gfSxGW2VdPXJbZV0sdC5zZXQoc1swXSxzWzFdKTtPYmplY3QuZGVmaW5lUHJvcGVydHkocix1LHt2YWx1ZTpGLGVudW1lcmFibGU6ZmFsc2V9KTt9cmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShyLFwiY29kZXNcIix7dmFsdWU6dCxlbnVtZXJhYmxlOmZhbHNlfSksci5jb2xvci5jbG9zZT1cIlxceDFCWzM5bVwiLHIuYmdDb2xvci5jbG9zZT1cIlxceDFCWzQ5bVwiLHIuY29sb3IuYW5zaT1MJDEoKSxyLmNvbG9yLmFuc2kyNTY9TigpLHIuY29sb3IuYW5zaTE2bT1JKCksci5iZ0NvbG9yLmFuc2k9TCQxKG0pLHIuYmdDb2xvci5hbnNpMjU2PU4obSksci5iZ0NvbG9yLmFuc2kxNm09SShtKSxPYmplY3QuZGVmaW5lUHJvcGVydGllcyhyLHtyZ2JUb0Fuc2kyNTY6e3ZhbHVlOih1LEYsZSk9PnU9PT1GJiZGPT09ZT91PDg/MTY6dT4yNDg/MjMxOk1hdGgucm91bmQoKHUtOCkvMjQ3KjI0KSsyMzI6MTYrMzYqTWF0aC5yb3VuZCh1LzI1NSo1KSs2Kk1hdGgucm91bmQoRi8yNTUqNSkrTWF0aC5yb3VuZChlLzI1NSo1KSxlbnVtZXJhYmxlOmZhbHNlfSxoZXhUb1JnYjp7dmFsdWU6dT0+e2NvbnN0IEY9L1thLWZcXGRdezZ9fFthLWZcXGRdezN9L2kuZXhlYyh1LnRvU3RyaW5nKDE2KSk7aWYoIUYpcmV0dXJuIFswLDAsMF07bGV0W2VdPUY7ZS5sZW5ndGg9PT0zJiYoZT1bLi4uZV0ubWFwKGk9PmkraSkuam9pbihcIlwiKSk7Y29uc3Qgcz1OdW1iZXIucGFyc2VJbnQoZSwxNik7cmV0dXJuIFtzPj4xNiYyNTUscz4+OCYyNTUscyYyNTVdfSxlbnVtZXJhYmxlOmZhbHNlfSxoZXhUb0Fuc2kyNTY6e3ZhbHVlOnU9PnIucmdiVG9BbnNpMjU2KC4uLnIuaGV4VG9SZ2IodSkpLGVudW1lcmFibGU6ZmFsc2V9LGFuc2kyNTZUb0Fuc2k6e3ZhbHVlOnU9PntpZih1PDgpcmV0dXJuIDMwK3U7aWYodTwxNilyZXR1cm4gOTArKHUtOCk7bGV0IEYsZSxzO2lmKHU+PTIzMilGPSgodS0yMzIpKjEwKzgpLzI1NSxlPUYscz1GO2Vsc2Uge3UtPTE2O2NvbnN0IEM9dSUzNjtGPU1hdGguZmxvb3IodS8zNikvNSxlPU1hdGguZmxvb3IoQy82KS81LHM9QyU2LzU7fWNvbnN0IGk9TWF0aC5tYXgoRixlLHMpKjI7aWYoaT09PTApcmV0dXJuIDMwO2xldCBEPTMwKyhNYXRoLnJvdW5kKHMpPDwyfE1hdGgucm91bmQoZSk8PDF8TWF0aC5yb3VuZChGKSk7cmV0dXJuIGk9PT0yJiYoRCs9NjApLER9LGVudW1lcmFibGU6ZmFsc2V9LHJnYlRvQW5zaTp7dmFsdWU6KHUsRixlKT0+ci5hbnNpMjU2VG9BbnNpKHIucmdiVG9BbnNpMjU2KHUsRixlKSksZW51bWVyYWJsZTpmYWxzZX0saGV4VG9BbnNpOnt2YWx1ZTp1PT5yLmFuc2kyNTZUb0Fuc2koci5oZXhUb0Fuc2kyNTYodSkpLGVudW1lcmFibGU6ZmFsc2V9fSkscn1jb25zdCBpRD1zRCgpLHY9bmV3IFNldChbXCJcXHgxQlwiLFwiXFx4OUJcIl0pLENEPTM5LHckMT1cIlxceDA3XCIsVyQxPVwiW1wiLHJEPVwiXVwiLFI9XCJtXCIseT1gJHtyRH04OztgLFYkMT10PT5gJHt2LnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke1ckMX0ke3R9JHtSfWAsej10PT5gJHt2LnZhbHVlcygpLm5leHQoKS52YWx1ZX0ke3l9JHt0fSR7dyQxfWAsRUQ9dD0+dC5zcGxpdChcIiBcIikubWFwKHU9PkEkMSh1KSksXz0odCx1LEYpPT57Y29uc3QgZT1bLi4udV07bGV0IHM9ZmFsc2UsaT1mYWxzZSxEPUEkMShUJDEodFt0Lmxlbmd0aC0xXSkpO2Zvcihjb25zdFtDLG9db2YgZS5lbnRyaWVzKCkpe2NvbnN0IEU9QSQxKG8pO2lmKEQrRTw9Rj90W3QubGVuZ3RoLTFdKz1vOih0LnB1c2gobyksRD0wKSx2LmhhcyhvKSYmKHM9dHJ1ZSxpPWUuc2xpY2UoQysxKS5qb2luKFwiXCIpLnN0YXJ0c1dpdGgoeSkpLHMpe2k/bz09PXckMSYmKHM9ZmFsc2UsaT1mYWxzZSk6bz09PVImJihzPWZhbHNlKTtjb250aW51ZX1EKz1FLEQ9PT1GJiZDPGUubGVuZ3RoLTEmJih0LnB1c2goXCJcIiksRD0wKTt9IUQmJnRbdC5sZW5ndGgtMV0ubGVuZ3RoPjAmJnQubGVuZ3RoPjEmJih0W3QubGVuZ3RoLTJdKz10LnBvcCgpKTt9LG5EPXQ9Pntjb25zdCB1PXQuc3BsaXQoXCIgXCIpO2xldCBGPXUubGVuZ3RoO2Zvcig7Rj4wJiYhKEEkMSh1W0YtMV0pPjApOylGLS07cmV0dXJuIEY9PT11Lmxlbmd0aD90OnUuc2xpY2UoMCxGKS5qb2luKFwiIFwiKSt1LnNsaWNlKEYpLmpvaW4oXCJcIil9LG9EPSh0LHUsRj17fSk9PntpZihGLnRyaW0hPT1mYWxzZSYmdC50cmltKCk9PT1cIlwiKXJldHVybiBcIlwiO2xldCBlPVwiXCIscyxpO2NvbnN0IEQ9RUQodCk7bGV0IEM9W1wiXCJdO2Zvcihjb25zdFtFLGFdb2YgdC5zcGxpdChcIiBcIikuZW50cmllcygpKXtGLnRyaW0hPT1mYWxzZSYmKENbQy5sZW5ndGgtMV09Q1tDLmxlbmd0aC0xXS50cmltU3RhcnQoKSk7bGV0IG49QSQxKENbQy5sZW5ndGgtMV0pO2lmKEUhPT0wJiYobj49dSYmKEYud29yZFdyYXA9PT1mYWxzZXx8Ri50cmltPT09ZmFsc2UpJiYoQy5wdXNoKFwiXCIpLG49MCksKG4+MHx8Ri50cmltPT09ZmFsc2UpJiYoQ1tDLmxlbmd0aC0xXSs9XCIgXCIsbisrKSksRi5oYXJkJiZEW0VdPnUpe2NvbnN0IEI9dS1uLHA9MStNYXRoLmZsb29yKChEW0VdLUItMSkvdSk7TWF0aC5mbG9vcigoRFtFXS0xKS91KTxwJiZDLnB1c2goXCJcIiksXyhDLGEsdSk7Y29udGludWV9aWYobitEW0VdPnUmJm4+MCYmRFtFXT4wKXtpZihGLndvcmRXcmFwPT09ZmFsc2UmJm48dSl7XyhDLGEsdSk7Y29udGludWV9Qy5wdXNoKFwiXCIpO31pZihuK0RbRV0+dSYmRi53b3JkV3JhcD09PWZhbHNlKXtfKEMsYSx1KTtjb250aW51ZX1DW0MubGVuZ3RoLTFdKz1hO31GLnRyaW0hPT1mYWxzZSYmKEM9Qy5tYXAoRT0+bkQoRSkpKTtjb25zdCBvPVsuLi5DLmpvaW4oYFxuYCldO2Zvcihjb25zdFtFLGFdb2Ygby5lbnRyaWVzKCkpe2lmKGUrPWEsdi5oYXMoYSkpe2NvbnN0e2dyb3VwczpCfT1uZXcgUmVnRXhwKGAoPzpcXFxcJHtXJDF9KD88Y29kZT5cXFxcZCspbXxcXFxcJHt5fSg/PHVyaT4uKikke3ckMX0pYCkuZXhlYyhvLnNsaWNlKEUpLmpvaW4oXCJcIikpfHx7Z3JvdXBzOnt9fTtpZihCLmNvZGUhPT12b2lkIDApe2NvbnN0IHA9TnVtYmVyLnBhcnNlRmxvYXQoQi5jb2RlKTtzPXA9PT1DRD92b2lkIDA6cDt9ZWxzZSBCLnVyaSE9PXZvaWQgMCYmKGk9Qi51cmkubGVuZ3RoPT09MD92b2lkIDA6Qi51cmkpO31jb25zdCBuPWlELmNvZGVzLmdldChOdW1iZXIocykpO29bRSsxXT09PWBcbmA/KGkmJihlKz16KFwiXCIpKSxzJiZuJiYoZSs9ViQxKG4pKSk6YT09PWBcbmAmJihzJiZuJiYoZSs9ViQxKHMpKSxpJiYoZSs9eihpKSkpO31yZXR1cm4gZX07ZnVuY3Rpb24gRyh0LHUsRil7cmV0dXJuIFN0cmluZyh0KS5ub3JtYWxpemUoKS5yZXBsYWNlKC9cXHJcXG4vZyxgXG5gKS5zcGxpdChgXG5gKS5tYXAoZT0+b0QoZSx1LEYpKS5qb2luKGBcbmApfWNvbnN0IGFEPVtcInVwXCIsXCJkb3duXCIsXCJsZWZ0XCIsXCJyaWdodFwiLFwic3BhY2VcIixcImVudGVyXCIsXCJjYW5jZWxcIl0sYz17YWN0aW9uczpuZXcgU2V0KGFEKSxhbGlhc2VzOm5ldyBNYXAoW1tcImtcIixcInVwXCJdLFtcImpcIixcImRvd25cIl0sW1wiaFwiLFwibGVmdFwiXSxbXCJsXCIsXCJyaWdodFwiXSxbXCJcdTAwMDNcIixcImNhbmNlbFwiXSxbXCJlc2NhcGVcIixcImNhbmNlbFwiXV0pfTtmdW5jdGlvbiBrJDEodCx1KXtpZih0eXBlb2YgdD09XCJzdHJpbmdcIilyZXR1cm4gYy5hbGlhc2VzLmdldCh0KT09PXU7Zm9yKGNvbnN0IEYgb2YgdClpZihGIT09dm9pZCAwJiZrJDEoRix1KSlyZXR1cm4gIHRydWU7cmV0dXJuICBmYWxzZX1mdW5jdGlvbiBsRCh0LHUpe2lmKHQ9PT11KXJldHVybjtjb25zdCBGPXQuc3BsaXQoYFxuYCksZT11LnNwbGl0KGBcbmApLHM9W107Zm9yKGxldCBpPTA7aTxNYXRoLm1heChGLmxlbmd0aCxlLmxlbmd0aCk7aSsrKUZbaV0hPT1lW2ldJiZzLnB1c2goaSk7cmV0dXJuIHN9Z2xvYmFsVGhpcy5wcm9jZXNzLnBsYXRmb3JtLnN0YXJ0c1dpdGgoXCJ3aW5cIik7Y29uc3QgUz1TeW1ib2woXCJjbGFjazpjYW5jZWxcIik7ZnVuY3Rpb24gZCQxKHQsdSl7Y29uc3QgRj10O0YuaXNUVFkmJkYuc2V0UmF3TW9kZSh1KTt9dmFyIEFEPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSxwRD0odCx1LEYpPT51IGluIHQ/QUQodCx1LHtlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6dHJ1ZSx2YWx1ZTpGfSk6dFt1XT1GLGg9KHQsdSxGKT0+KHBEKHQsdHlwZW9mIHUhPVwic3ltYm9sXCI/dStcIlwiOnUsRiksRik7Y2xhc3MgeHtjb25zdHJ1Y3Rvcih1LEY9dHJ1ZSl7aCh0aGlzLFwiaW5wdXRcIiksaCh0aGlzLFwib3V0cHV0XCIpLGgodGhpcyxcIl9hYm9ydFNpZ25hbFwiKSxoKHRoaXMsXCJybFwiKSxoKHRoaXMsXCJvcHRzXCIpLGgodGhpcyxcIl9yZW5kZXJcIiksaCh0aGlzLFwiX3RyYWNrXCIsZmFsc2UpLGgodGhpcyxcIl9wcmV2RnJhbWVcIixcIlwiKSxoKHRoaXMsXCJfc3Vic2NyaWJlcnNcIixuZXcgTWFwKSxoKHRoaXMsXCJfY3Vyc29yXCIsMCksaCh0aGlzLFwic3RhdGVcIixcImluaXRpYWxcIiksaCh0aGlzLFwiZXJyb3JcIixcIlwiKSxoKHRoaXMsXCJ2YWx1ZVwiKTtjb25zdHtpbnB1dDplPXN0ZGluLG91dHB1dDpzPXN0ZG91dCxyZW5kZXI6aSxzaWduYWw6RCwuLi5DfT11O3RoaXMub3B0cz1DLHRoaXMub25LZXlwcmVzcz10aGlzLm9uS2V5cHJlc3MuYmluZCh0aGlzKSx0aGlzLmNsb3NlPXRoaXMuY2xvc2UuYmluZCh0aGlzKSx0aGlzLnJlbmRlcj10aGlzLnJlbmRlci5iaW5kKHRoaXMpLHRoaXMuX3JlbmRlcj1pLmJpbmQodGhpcyksdGhpcy5fdHJhY2s9Rix0aGlzLl9hYm9ydFNpZ25hbD1ELHRoaXMuaW5wdXQ9ZSx0aGlzLm91dHB1dD1zO311bnN1YnNjcmliZSgpe3RoaXMuX3N1YnNjcmliZXJzLmNsZWFyKCk7fXNldFN1YnNjcmliZXIodSxGKXtjb25zdCBlPXRoaXMuX3N1YnNjcmliZXJzLmdldCh1KT8/W107ZS5wdXNoKEYpLHRoaXMuX3N1YnNjcmliZXJzLnNldCh1LGUpO31vbih1LEYpe3RoaXMuc2V0U3Vic2NyaWJlcih1LHtjYjpGfSk7fW9uY2UodSxGKXt0aGlzLnNldFN1YnNjcmliZXIodSx7Y2I6RixvbmNlOnRydWV9KTt9ZW1pdCh1LC4uLkYpe2NvbnN0IGU9dGhpcy5fc3Vic2NyaWJlcnMuZ2V0KHUpPz9bXSxzPVtdO2Zvcihjb25zdCBpIG9mIGUpaS5jYiguLi5GKSxpLm9uY2UmJnMucHVzaCgoKT0+ZS5zcGxpY2UoZS5pbmRleE9mKGkpLDEpKTtmb3IoY29uc3QgaSBvZiBzKWkoKTt9cHJvbXB0KCl7cmV0dXJuIG5ldyBQcm9taXNlKCh1LEYpPT57aWYodGhpcy5fYWJvcnRTaWduYWwpe2lmKHRoaXMuX2Fib3J0U2lnbmFsLmFib3J0ZWQpcmV0dXJuIHRoaXMuc3RhdGU9XCJjYW5jZWxcIix0aGlzLmNsb3NlKCksdShTKTt0aGlzLl9hYm9ydFNpZ25hbC5hZGRFdmVudExpc3RlbmVyKFwiYWJvcnRcIiwoKT0+e3RoaXMuc3RhdGU9XCJjYW5jZWxcIix0aGlzLmNsb3NlKCk7fSx7b25jZTp0cnVlfSk7fWNvbnN0IGU9bmV3IFdyaXRlU3RyZWFtKDApO2UuX3dyaXRlPShzLGksRCk9Pnt0aGlzLl90cmFjayYmKHRoaXMudmFsdWU9dGhpcy5ybD8ubGluZS5yZXBsYWNlKC9cXHQvZyxcIlwiKSx0aGlzLl9jdXJzb3I9dGhpcy5ybD8uY3Vyc29yPz8wLHRoaXMuZW1pdChcInZhbHVlXCIsdGhpcy52YWx1ZSkpLEQoKTt9LHRoaXMuaW5wdXQucGlwZShlKSx0aGlzLnJsPWYuY3JlYXRlSW50ZXJmYWNlKHtpbnB1dDp0aGlzLmlucHV0LG91dHB1dDplLHRhYlNpemU6Mixwcm9tcHQ6XCJcIixlc2NhcGVDb2RlVGltZW91dDo1MH0pLGYuZW1pdEtleXByZXNzRXZlbnRzKHRoaXMuaW5wdXQsdGhpcy5ybCksdGhpcy5ybC5wcm9tcHQoKSx0aGlzLm9wdHMuaW5pdGlhbFZhbHVlIT09dm9pZCAwJiZ0aGlzLl90cmFjayYmdGhpcy5ybC53cml0ZSh0aGlzLm9wdHMuaW5pdGlhbFZhbHVlKSx0aGlzLmlucHV0Lm9uKFwia2V5cHJlc3NcIix0aGlzLm9uS2V5cHJlc3MpLGQkMSh0aGlzLmlucHV0LHRydWUpLHRoaXMub3V0cHV0Lm9uKFwicmVzaXplXCIsdGhpcy5yZW5kZXIpLHRoaXMucmVuZGVyKCksdGhpcy5vbmNlKFwic3VibWl0XCIsKCk9Pnt0aGlzLm91dHB1dC53cml0ZShzcmNFeHBvcnRzLmN1cnNvci5zaG93KSx0aGlzLm91dHB1dC5vZmYoXCJyZXNpemVcIix0aGlzLnJlbmRlciksZCQxKHRoaXMuaW5wdXQsZmFsc2UpLHUodGhpcy52YWx1ZSk7fSksdGhpcy5vbmNlKFwiY2FuY2VsXCIsKCk9Pnt0aGlzLm91dHB1dC53cml0ZShzcmNFeHBvcnRzLmN1cnNvci5zaG93KSx0aGlzLm91dHB1dC5vZmYoXCJyZXNpemVcIix0aGlzLnJlbmRlciksZCQxKHRoaXMuaW5wdXQsZmFsc2UpLHUoUyk7fSk7fSl9b25LZXlwcmVzcyh1LEYpe2lmKHRoaXMuc3RhdGU9PT1cImVycm9yXCImJih0aGlzLnN0YXRlPVwiYWN0aXZlXCIpLEY/Lm5hbWUmJighdGhpcy5fdHJhY2smJmMuYWxpYXNlcy5oYXMoRi5uYW1lKSYmdGhpcy5lbWl0KFwiY3Vyc29yXCIsYy5hbGlhc2VzLmdldChGLm5hbWUpKSxjLmFjdGlvbnMuaGFzKEYubmFtZSkmJnRoaXMuZW1pdChcImN1cnNvclwiLEYubmFtZSkpLHUmJih1LnRvTG93ZXJDYXNlKCk9PT1cInlcInx8dS50b0xvd2VyQ2FzZSgpPT09XCJuXCIpJiZ0aGlzLmVtaXQoXCJjb25maXJtXCIsdS50b0xvd2VyQ2FzZSgpPT09XCJ5XCIpLHU9PT1cIlx0XCImJnRoaXMub3B0cy5wbGFjZWhvbGRlciYmKHRoaXMudmFsdWV8fCh0aGlzLnJsPy53cml0ZSh0aGlzLm9wdHMucGxhY2Vob2xkZXIpLHRoaXMuZW1pdChcInZhbHVlXCIsdGhpcy5vcHRzLnBsYWNlaG9sZGVyKSkpLHUmJnRoaXMuZW1pdChcImtleVwiLHUudG9Mb3dlckNhc2UoKSksRj8ubmFtZT09PVwicmV0dXJuXCIpe2lmKHRoaXMub3B0cy52YWxpZGF0ZSl7Y29uc3QgZT10aGlzLm9wdHMudmFsaWRhdGUodGhpcy52YWx1ZSk7ZSYmKHRoaXMuZXJyb3I9ZSBpbnN0YW5jZW9mIEVycm9yP2UubWVzc2FnZTplLHRoaXMuc3RhdGU9XCJlcnJvclwiLHRoaXMucmw/LndyaXRlKHRoaXMudmFsdWUpKTt9dGhpcy5zdGF0ZSE9PVwiZXJyb3JcIiYmKHRoaXMuc3RhdGU9XCJzdWJtaXRcIik7fWskMShbdSxGPy5uYW1lLEY/LnNlcXVlbmNlXSxcImNhbmNlbFwiKSYmKHRoaXMuc3RhdGU9XCJjYW5jZWxcIiksKHRoaXMuc3RhdGU9PT1cInN1Ym1pdFwifHx0aGlzLnN0YXRlPT09XCJjYW5jZWxcIikmJnRoaXMuZW1pdChcImZpbmFsaXplXCIpLHRoaXMucmVuZGVyKCksKHRoaXMuc3RhdGU9PT1cInN1Ym1pdFwifHx0aGlzLnN0YXRlPT09XCJjYW5jZWxcIikmJnRoaXMuY2xvc2UoKTt9Y2xvc2UoKXt0aGlzLmlucHV0LnVucGlwZSgpLHRoaXMuaW5wdXQucmVtb3ZlTGlzdGVuZXIoXCJrZXlwcmVzc1wiLHRoaXMub25LZXlwcmVzcyksdGhpcy5vdXRwdXQud3JpdGUoYFxuYCksZCQxKHRoaXMuaW5wdXQsZmFsc2UpLHRoaXMucmw/LmNsb3NlKCksdGhpcy5ybD12b2lkIDAsdGhpcy5lbWl0KGAke3RoaXMuc3RhdGV9YCx0aGlzLnZhbHVlKSx0aGlzLnVuc3Vic2NyaWJlKCk7fXJlc3RvcmVDdXJzb3IoKXtjb25zdCB1PUcodGhpcy5fcHJldkZyYW1lLHByb2Nlc3Muc3Rkb3V0LmNvbHVtbnMse2hhcmQ6dHJ1ZX0pLnNwbGl0KGBcbmApLmxlbmd0aC0xO3RoaXMub3V0cHV0LndyaXRlKHNyY0V4cG9ydHMuY3Vyc29yLm1vdmUoLTk5OSx1Ki0xKSk7fXJlbmRlcigpe2NvbnN0IHU9Ryh0aGlzLl9yZW5kZXIodGhpcyk/P1wiXCIscHJvY2Vzcy5zdGRvdXQuY29sdW1ucyx7aGFyZDp0cnVlfSk7aWYodSE9PXRoaXMuX3ByZXZGcmFtZSl7aWYodGhpcy5zdGF0ZT09PVwiaW5pdGlhbFwiKXRoaXMub3V0cHV0LndyaXRlKHNyY0V4cG9ydHMuY3Vyc29yLmhpZGUpO2Vsc2Uge2NvbnN0IEY9bEQodGhpcy5fcHJldkZyYW1lLHUpO2lmKHRoaXMucmVzdG9yZUN1cnNvcigpLEYmJkY/Lmxlbmd0aD09PTEpe2NvbnN0IGU9RlswXTt0aGlzLm91dHB1dC53cml0ZShzcmNFeHBvcnRzLmN1cnNvci5tb3ZlKDAsZSkpLHRoaXMub3V0cHV0LndyaXRlKHNyY0V4cG9ydHMuZXJhc2UubGluZXMoMSkpO2NvbnN0IHM9dS5zcGxpdChgXG5gKTt0aGlzLm91dHB1dC53cml0ZShzW2VdKSx0aGlzLl9wcmV2RnJhbWU9dSx0aGlzLm91dHB1dC53cml0ZShzcmNFeHBvcnRzLmN1cnNvci5tb3ZlKDAscy5sZW5ndGgtZS0xKSk7cmV0dXJufWlmKEYmJkY/Lmxlbmd0aD4xKXtjb25zdCBlPUZbMF07dGhpcy5vdXRwdXQud3JpdGUoc3JjRXhwb3J0cy5jdXJzb3IubW92ZSgwLGUpKSx0aGlzLm91dHB1dC53cml0ZShzcmNFeHBvcnRzLmVyYXNlLmRvd24oKSk7Y29uc3Qgcz11LnNwbGl0KGBcbmApLnNsaWNlKGUpO3RoaXMub3V0cHV0LndyaXRlKHMuam9pbihgXG5gKSksdGhpcy5fcHJldkZyYW1lPXU7cmV0dXJufXRoaXMub3V0cHV0LndyaXRlKHNyY0V4cG9ydHMuZXJhc2UuZG93bigpKTt9dGhpcy5vdXRwdXQud3JpdGUodSksdGhpcy5zdGF0ZT09PVwiaW5pdGlhbFwiJiYodGhpcy5zdGF0ZT1cImFjdGl2ZVwiKSx0aGlzLl9wcmV2RnJhbWU9dTt9fX1jbGFzcyBmRCBleHRlbmRzIHh7Z2V0IGN1cnNvcigpe3JldHVybiB0aGlzLnZhbHVlPzA6MX1nZXQgX3ZhbHVlKCl7cmV0dXJuIHRoaXMuY3Vyc29yPT09MH1jb25zdHJ1Y3Rvcih1KXtzdXBlcih1LGZhbHNlKSx0aGlzLnZhbHVlPSEhdS5pbml0aWFsVmFsdWUsdGhpcy5vbihcInZhbHVlXCIsKCk9Pnt0aGlzLnZhbHVlPXRoaXMuX3ZhbHVlO30pLHRoaXMub24oXCJjb25maXJtXCIsRj0+e3RoaXMub3V0cHV0LndyaXRlKHNyY0V4cG9ydHMuY3Vyc29yLm1vdmUoMCwtMSkpLHRoaXMudmFsdWU9Rix0aGlzLnN0YXRlPVwic3VibWl0XCIsdGhpcy5jbG9zZSgpO30pLHRoaXMub24oXCJjdXJzb3JcIiwoKT0+e3RoaXMudmFsdWU9IXRoaXMudmFsdWU7fSk7fX12YXIgYkQ9T2JqZWN0LmRlZmluZVByb3BlcnR5LG1EPSh0LHUsRik9PnUgaW4gdD9iRCh0LHUse2VudW1lcmFibGU6dHJ1ZSxjb25maWd1cmFibGU6dHJ1ZSx3cml0YWJsZTp0cnVlLHZhbHVlOkZ9KTp0W3VdPUYsWT0odCx1LEYpPT4obUQodCx0eXBlb2YgdSE9XCJzeW1ib2xcIj91K1wiXCI6dSxGKSxGKTtsZXQgd0Q9Y2xhc3MgZXh0ZW5kcyB4e2NvbnN0cnVjdG9yKHUpe3N1cGVyKHUsZmFsc2UpLFkodGhpcyxcIm9wdGlvbnNcIiksWSh0aGlzLFwiY3Vyc29yXCIsMCksdGhpcy5vcHRpb25zPXUub3B0aW9ucyx0aGlzLnZhbHVlPVsuLi51LmluaXRpYWxWYWx1ZXM/P1tdXSx0aGlzLmN1cnNvcj1NYXRoLm1heCh0aGlzLm9wdGlvbnMuZmluZEluZGV4KCh7dmFsdWU6Rn0pPT5GPT09dS5jdXJzb3JBdCksMCksdGhpcy5vbihcImtleVwiLEY9PntGPT09XCJhXCImJnRoaXMudG9nZ2xlQWxsKCk7fSksdGhpcy5vbihcImN1cnNvclwiLEY9Pntzd2l0Y2goRil7Y2FzZSBcImxlZnRcIjpjYXNlIFwidXBcIjp0aGlzLmN1cnNvcj10aGlzLmN1cnNvcj09PTA/dGhpcy5vcHRpb25zLmxlbmd0aC0xOnRoaXMuY3Vyc29yLTE7YnJlYWs7Y2FzZSBcImRvd25cIjpjYXNlIFwicmlnaHRcIjp0aGlzLmN1cnNvcj10aGlzLmN1cnNvcj09PXRoaXMub3B0aW9ucy5sZW5ndGgtMT8wOnRoaXMuY3Vyc29yKzE7YnJlYWs7Y2FzZSBcInNwYWNlXCI6dGhpcy50b2dnbGVWYWx1ZSgpO2JyZWFrfX0pO31nZXQgX3ZhbHVlKCl7cmV0dXJuIHRoaXMub3B0aW9uc1t0aGlzLmN1cnNvcl0udmFsdWV9dG9nZ2xlQWxsKCl7Y29uc3QgdT10aGlzLnZhbHVlLmxlbmd0aD09PXRoaXMub3B0aW9ucy5sZW5ndGg7dGhpcy52YWx1ZT11P1tdOnRoaXMub3B0aW9ucy5tYXAoRj0+Ri52YWx1ZSk7fXRvZ2dsZVZhbHVlKCl7Y29uc3QgdT10aGlzLnZhbHVlLmluY2x1ZGVzKHRoaXMuX3ZhbHVlKTt0aGlzLnZhbHVlPXU/dGhpcy52YWx1ZS5maWx0ZXIoRj0+RiE9PXRoaXMuX3ZhbHVlKTpbLi4udGhpcy52YWx1ZSx0aGlzLl92YWx1ZV07fX07dmFyIFNEPU9iamVjdC5kZWZpbmVQcm9wZXJ0eSwkRD0odCx1LEYpPT51IGluIHQ/U0QodCx1LHtlbnVtZXJhYmxlOnRydWUsY29uZmlndXJhYmxlOnRydWUsd3JpdGFibGU6dHJ1ZSx2YWx1ZTpGfSk6dFt1XT1GLHE9KHQsdSxGKT0+KCREKHQsdHlwZW9mIHUhPVwic3ltYm9sXCI/dStcIlwiOnUsRiksRik7Y2xhc3MgakQgZXh0ZW5kcyB4e2NvbnN0cnVjdG9yKHUpe3N1cGVyKHUsZmFsc2UpLHEodGhpcyxcIm9wdGlvbnNcIikscSh0aGlzLFwiY3Vyc29yXCIsMCksdGhpcy5vcHRpb25zPXUub3B0aW9ucyx0aGlzLmN1cnNvcj10aGlzLm9wdGlvbnMuZmluZEluZGV4KCh7dmFsdWU6Rn0pPT5GPT09dS5pbml0aWFsVmFsdWUpLHRoaXMuY3Vyc29yPT09LTEmJih0aGlzLmN1cnNvcj0wKSx0aGlzLmNoYW5nZVZhbHVlKCksdGhpcy5vbihcImN1cnNvclwiLEY9Pntzd2l0Y2goRil7Y2FzZSBcImxlZnRcIjpjYXNlIFwidXBcIjp0aGlzLmN1cnNvcj10aGlzLmN1cnNvcj09PTA/dGhpcy5vcHRpb25zLmxlbmd0aC0xOnRoaXMuY3Vyc29yLTE7YnJlYWs7Y2FzZSBcImRvd25cIjpjYXNlIFwicmlnaHRcIjp0aGlzLmN1cnNvcj10aGlzLmN1cnNvcj09PXRoaXMub3B0aW9ucy5sZW5ndGgtMT8wOnRoaXMuY3Vyc29yKzE7YnJlYWt9dGhpcy5jaGFuZ2VWYWx1ZSgpO30pO31nZXQgX3ZhbHVlKCl7cmV0dXJuIHRoaXMub3B0aW9uc1t0aGlzLmN1cnNvcl19Y2hhbmdlVmFsdWUoKXt0aGlzLnZhbHVlPXRoaXMuX3ZhbHVlLnZhbHVlO319Y2xhc3MgUEQgZXh0ZW5kcyB4e2dldCB2YWx1ZVdpdGhDdXJzb3IoKXtpZih0aGlzLnN0YXRlPT09XCJzdWJtaXRcIilyZXR1cm4gdGhpcy52YWx1ZTtpZih0aGlzLmN1cnNvcj49dGhpcy52YWx1ZS5sZW5ndGgpcmV0dXJuIGAke3RoaXMudmFsdWV9XFx1MjU4OGA7Y29uc3QgdT10aGlzLnZhbHVlLnNsaWNlKDAsdGhpcy5jdXJzb3IpLFtGLC4uLmUkMV09dGhpcy52YWx1ZS5zbGljZSh0aGlzLmN1cnNvcik7cmV0dXJuIGAke3V9JHtlLmludmVyc2UoRil9JHtlJDEuam9pbihcIlwiKX1gfWdldCBjdXJzb3IoKXtyZXR1cm4gdGhpcy5fY3Vyc29yfWNvbnN0cnVjdG9yKHUpe3N1cGVyKHUpLHRoaXMub24oXCJmaW5hbGl6ZVwiLCgpPT57dGhpcy52YWx1ZXx8KHRoaXMudmFsdWU9dS5kZWZhdWx0VmFsdWUpO30pO319XG5cbmZ1bmN0aW9uIGNlKCl7cmV0dXJuIGcucGxhdGZvcm0hPT1cIndpbjMyXCI/Zy5lbnYuVEVSTSE9PVwibGludXhcIjohIWcuZW52LkNJfHwhIWcuZW52LldUX1NFU1NJT058fCEhZy5lbnYuVEVSTUlOVVNfU1VCTElNRXx8Zy5lbnYuQ29uRW11VGFzaz09PVwie2NtZDo6Q21kZXJ9XCJ8fGcuZW52LlRFUk1fUFJPR1JBTT09PVwiVGVybWludXMtU3VibGltZVwifHxnLmVudi5URVJNX1BST0dSQU09PT1cInZzY29kZVwifHxnLmVudi5URVJNPT09XCJ4dGVybS0yNTZjb2xvclwifHxnLmVudi5URVJNPT09XCJhbGFjcml0dHlcInx8Zy5lbnYuVEVSTUlOQUxfRU1VTEFUT1I9PT1cIkpldEJyYWlucy1KZWRpVGVybVwifWNvbnN0IFY9Y2UoKSx1PSh0LG4pPT5WP3Q6bixsZT11KFwiXHUyNzZGXCIsIFwiPlwiKSxMPXUoXCJcdTI1QTBcIiwgXCJ4XCIpLFc9dShcIlx1MjVCMlwiLCBcInhcIiksQz11KFwiXHUyNzE0XCIsIFwiXHUyMjFBXCIpLG89dShcIlwiKSxkPXUoXCJcIiksaz11KFwiXFx1MjVDRlwiLFwiPlwiKSxQPXUoXCJcXHUyNUNCXCIsXCIgXCIpLEE9dShcIlxcdTI1RkJcIixcIltcXHUyMDIyXVwiKSxUPXUoXCJcXHUyNUZDXCIsXCJbK11cIiksRj11KFwiXFx1MjVGQlwiLFwiWyBdXCIpLHc9dD0+e3N3aXRjaCh0KXtjYXNlIFwiaW5pdGlhbFwiOmNhc2UgXCJhY3RpdmVcIjpyZXR1cm4gZS5jeWFuKGxlKTtjYXNlIFwiY2FuY2VsXCI6cmV0dXJuIGUucmVkKEwpO2Nhc2UgXCJlcnJvclwiOnJldHVybiBlLnllbGxvdyhXKTtjYXNlIFwic3VibWl0XCI6cmV0dXJuIGUuZ3JlZW4oQyl9fSxCPXQ9Pntjb25zdHtjdXJzb3I6bixvcHRpb25zOnMsc3R5bGU6cn09dCxpPXQubWF4SXRlbXM/P051bWJlci5QT1NJVElWRV9JTkZJTklUWSxhPU1hdGgubWF4KHByb2Nlc3Muc3Rkb3V0LnJvd3MtNCwwKSxjPU1hdGgubWluKGEsTWF0aC5tYXgoaSw1KSk7bGV0IGw9MDtuPj1sK2MtMz9sPU1hdGgubWF4KE1hdGgubWluKG4tYyszLHMubGVuZ3RoLWMpLDApOm48bCsyJiYobD1NYXRoLm1heChuLTIsMCkpO2NvbnN0ICQ9YzxzLmxlbmd0aCYmbD4wLHA9YzxzLmxlbmd0aCYmbCtjPHMubGVuZ3RoO3JldHVybiBzLnNsaWNlKGwsbCtjKS5tYXAoKE0sdix4KT0+e2NvbnN0IGo9dj09PTAmJiQsRT12PT09eC5sZW5ndGgtMSYmcDtyZXR1cm4ganx8RT9lLmRpbShcIi4uLlwiKTpyKE0sditsPT09bil9KX0saGU9dD0+bmV3IFBEKHt2YWxpZGF0ZTp0LnZhbGlkYXRlLHBsYWNlaG9sZGVyOnQucGxhY2Vob2xkZXIsZGVmYXVsdFZhbHVlOnQuZGVmYXVsdFZhbHVlLGluaXRpYWxWYWx1ZTp0LmluaXRpYWxWYWx1ZSxyZW5kZXIoKXtjb25zdCBuPWAke2UuZ3JheShvKX1cbiR7dyh0aGlzLnN0YXRlKX0gJHt0Lm1lc3NhZ2V9XG5gLHM9dC5wbGFjZWhvbGRlcj9lLmludmVyc2UodC5wbGFjZWhvbGRlclswXSkrZS5kaW0odC5wbGFjZWhvbGRlci5zbGljZSgxKSk6ZS5pbnZlcnNlKGUuaGlkZGVuKFwiX1wiKSkscj10aGlzLnZhbHVlP3RoaXMudmFsdWVXaXRoQ3Vyc29yOnM7c3dpdGNoKHRoaXMuc3RhdGUpe2Nhc2UgXCJlcnJvclwiOnJldHVybiBgJHtuLnRyaW0oKX1cbiR7ZS55ZWxsb3cobyl9ICR7cn1cbiR7ZS55ZWxsb3coZCl9ICR7ZS55ZWxsb3codGhpcy5lcnJvcil9XG5gO2Nhc2UgXCJzdWJtaXRcIjpyZXR1cm4gYCR7bn0ke2UuZ3JheShvKX0gJHtlLmRpbSh0aGlzLnZhbHVlfHx0LnBsYWNlaG9sZGVyKX1gO2Nhc2UgXCJjYW5jZWxcIjpyZXR1cm4gYCR7bn0ke2UuZ3JheShvKX0gJHtlLnN0cmlrZXRocm91Z2goZS5kaW0odGhpcy52YWx1ZT8/XCJcIikpfSR7dGhpcy52YWx1ZT8udHJpbSgpP2BcbiR7ZS5ncmF5KG8pfWA6XCJcIn1gO2RlZmF1bHQ6cmV0dXJuIGAke259JHtlLmN5YW4obyl9ICR7cn1cbiR7ZS5jeWFuKGQpfVxuYH19fSkucHJvbXB0KCkseWU9dD0+e2NvbnN0IG49dC5hY3RpdmU/P1wiWWVzXCIscz10LmluYWN0aXZlPz9cIk5vXCI7cmV0dXJuIG5ldyBmRCh7YWN0aXZlOm4saW5hY3RpdmU6cyxpbml0aWFsVmFsdWU6dC5pbml0aWFsVmFsdWU/P3RydWUscmVuZGVyKCl7Y29uc3Qgcj1gJHtlLmdyYXkobyl9XG4ke3codGhpcy5zdGF0ZSl9ICR7dC5tZXNzYWdlfVxuYCxpPXRoaXMudmFsdWU/bjpzO3N3aXRjaCh0aGlzLnN0YXRlKXtjYXNlIFwic3VibWl0XCI6cmV0dXJuIGAke3J9JHtlLmdyYXkobyl9ICR7ZS5kaW0oaSl9YDtjYXNlIFwiY2FuY2VsXCI6cmV0dXJuIGAke3J9JHtlLmdyYXkobyl9ICR7ZS5zdHJpa2V0aHJvdWdoKGUuZGltKGkpKX1cbiR7ZS5ncmF5KG8pfWA7ZGVmYXVsdDpyZXR1cm4gYCR7cn0ke2UuY3lhbihvKX0gJHt0aGlzLnZhbHVlP2Ake2UuZ3JlZW4oayl9ICR7bn1gOmAke2UuZGltKFApfSAke2UuZGltKG4pfWB9ICR7ZS5kaW0oXCIvXCIpfSAke3RoaXMudmFsdWU/YCR7ZS5kaW0oUCl9ICR7ZS5kaW0ocyl9YDpgJHtlLmdyZWVuKGspfSAke3N9YH1cbiR7ZS5jeWFuKGQpfVxuYH19fSkucHJvbXB0KCl9LHZlPXQ9Pntjb25zdCBuPShzLHIpPT57Y29uc3QgaT1zLmxhYmVsPz9TdHJpbmcocy52YWx1ZSk7c3dpdGNoKHIpe2Nhc2UgXCJzZWxlY3RlZFwiOnJldHVybiBgJHtlLmRpbShpKX1gO2Nhc2UgXCJhY3RpdmVcIjpyZXR1cm4gYCR7ZS5ncmVlbihrKX0gJHtpfSAke3MuaGludD9lLmRpbShgKCR7cy5oaW50fSlgKTpcIlwifWA7Y2FzZSBcImNhbmNlbGxlZFwiOnJldHVybiBgJHtlLnN0cmlrZXRocm91Z2goZS5kaW0oaSkpfWA7ZGVmYXVsdDpyZXR1cm4gYCR7ZS5kaW0oUCl9ICR7ZS5kaW0oaSl9YH19O3JldHVybiBuZXcgakQoe29wdGlvbnM6dC5vcHRpb25zLGluaXRpYWxWYWx1ZTp0LmluaXRpYWxWYWx1ZSxyZW5kZXIoKXtjb25zdCBzPWAke2UuZ3JheShvKX1cbiR7dyh0aGlzLnN0YXRlKX0gJHt0Lm1lc3NhZ2V9XG5gO3N3aXRjaCh0aGlzLnN0YXRlKXtjYXNlIFwic3VibWl0XCI6cmV0dXJuIGAke3N9JHtlLmdyYXkobyl9ICR7bih0aGlzLm9wdGlvbnNbdGhpcy5jdXJzb3JdLFwic2VsZWN0ZWRcIil9YDtjYXNlIFwiY2FuY2VsXCI6cmV0dXJuIGAke3N9JHtlLmdyYXkobyl9ICR7bih0aGlzLm9wdGlvbnNbdGhpcy5jdXJzb3JdLFwiY2FuY2VsbGVkXCIpfVxuJHtlLmdyYXkobyl9YDtkZWZhdWx0OnJldHVybiBgJHtzfSR7ZS5jeWFuKG8pfSAke0Ioe2N1cnNvcjp0aGlzLmN1cnNvcixvcHRpb25zOnRoaXMub3B0aW9ucyxtYXhJdGVtczp0Lm1heEl0ZW1zLHN0eWxlOihyLGkpPT5uKHIsaT9cImFjdGl2ZVwiOlwiaW5hY3RpdmVcIil9KS5qb2luKGBcbiR7ZS5jeWFuKG8pfSAgYCl9XG4ke2UuY3lhbihkKX1cbmB9fX0pLnByb21wdCgpfSxmZT10PT57Y29uc3Qgbj0ocyxyKT0+e2NvbnN0IGk9cy5sYWJlbD8/U3RyaW5nKHMudmFsdWUpO3JldHVybiByPT09XCJhY3RpdmVcIj9gJHtlLmN5YW4oQSl9ICR7aX0gJHtzLmhpbnQ/ZS5kaW0oYCgke3MuaGludH0pYCk6XCJcIn1gOnI9PT1cInNlbGVjdGVkXCI/YCR7ZS5ncmVlbihUKX0gJHtlLmRpbShpKX1gOnI9PT1cImNhbmNlbGxlZFwiP2Ake2Uuc3RyaWtldGhyb3VnaChlLmRpbShpKSl9YDpyPT09XCJhY3RpdmUtc2VsZWN0ZWRcIj9gJHtlLmdyZWVuKFQpfSAke2l9ICR7cy5oaW50P2UuZGltKGAoJHtzLmhpbnR9KWApOlwiXCJ9YDpyPT09XCJzdWJtaXR0ZWRcIj9gJHtlLmRpbShpKX1gOmAke2UuZGltKEYpfSAke2UuZGltKGkpfWB9O3JldHVybiBuZXcgd0Qoe29wdGlvbnM6dC5vcHRpb25zLGluaXRpYWxWYWx1ZXM6dC5pbml0aWFsVmFsdWVzLHJlcXVpcmVkOnQucmVxdWlyZWQ/P3RydWUsY3Vyc29yQXQ6dC5jdXJzb3JBdCx2YWxpZGF0ZShzKXtpZih0aGlzLnJlcXVpcmVkJiZzLmxlbmd0aD09PTApcmV0dXJuIGBQbGVhc2Ugc2VsZWN0IGF0IGxlYXN0IG9uZSBvcHRpb24uXG4ke2UucmVzZXQoZS5kaW0oYFByZXNzICR7ZS5ncmF5KGUuYmdXaGl0ZShlLmludmVyc2UoXCIgc3BhY2UgXCIpKSl9IHRvIHNlbGVjdCwgJHtlLmdyYXkoZS5iZ1doaXRlKGUuaW52ZXJzZShcIiBlbnRlciBcIikpKX0gdG8gc3VibWl0YCkpfWB9LHJlbmRlcigpe2NvbnN0IHM9YCR7ZS5ncmF5KG8pfVxuJHt3KHRoaXMuc3RhdGUpfSAke3QubWVzc2FnZX1cbmAscj0oaSxhKT0+e2NvbnN0IGM9dGhpcy52YWx1ZS5pbmNsdWRlcyhpLnZhbHVlKTtyZXR1cm4gYSYmYz9uKGksXCJhY3RpdmUtc2VsZWN0ZWRcIik6Yz9uKGksXCJzZWxlY3RlZFwiKTpuKGksYT9cImFjdGl2ZVwiOlwiaW5hY3RpdmVcIil9O3N3aXRjaCh0aGlzLnN0YXRlKXtjYXNlIFwic3VibWl0XCI6cmV0dXJuIGAke3N9JHtlLmdyYXkobyl9ICR7dGhpcy5vcHRpb25zLmZpbHRlcigoe3ZhbHVlOml9KT0+dGhpcy52YWx1ZS5pbmNsdWRlcyhpKSkubWFwKGk9Pm4oaSxcInN1Ym1pdHRlZFwiKSkuam9pbihlLmRpbShcIiwgXCIpKXx8ZS5kaW0oXCJub25lXCIpfWA7Y2FzZSBcImNhbmNlbFwiOntjb25zdCBpPXRoaXMub3B0aW9ucy5maWx0ZXIoKHt2YWx1ZTphfSk9PnRoaXMudmFsdWUuaW5jbHVkZXMoYSkpLm1hcChhPT5uKGEsXCJjYW5jZWxsZWRcIikpLmpvaW4oZS5kaW0oXCIsIFwiKSk7cmV0dXJuIGAke3N9JHtlLmdyYXkobyl9ICR7aS50cmltKCk/YCR7aX1cbiR7ZS5ncmF5KG8pfWA6XCJcIn1gfWNhc2UgXCJlcnJvclwiOntjb25zdCBpPXRoaXMuZXJyb3Iuc3BsaXQoYFxuYCkubWFwKChhLGMpPT5jPT09MD9gJHtlLnllbGxvdyhkKX0gJHtlLnllbGxvdyhhKX1gOmAgICAke2F9YCkuam9pbihgXG5gKTtyZXR1cm4gYCR7cytlLnllbGxvdyhvKX0gJHtCKHtvcHRpb25zOnRoaXMub3B0aW9ucyxjdXJzb3I6dGhpcy5jdXJzb3IsbWF4SXRlbXM6dC5tYXhJdGVtcyxzdHlsZTpyfSkuam9pbihgXG4ke2UueWVsbG93KG8pfSAgYCl9XG4ke2l9XG5gfWRlZmF1bHQ6cmV0dXJuIGAke3N9JHtlLmN5YW4obyl9ICR7Qih7b3B0aW9uczp0aGlzLm9wdGlvbnMsY3Vyc29yOnRoaXMuY3Vyc29yLG1heEl0ZW1zOnQubWF4SXRlbXMsc3R5bGU6cn0pLmpvaW4oYFxuJHtlLmN5YW4obyl9ICBgKX1cbiR7ZS5jeWFuKGQpfVxuYH19fSkucHJvbXB0KCl9O2Ake2UuZ3JheShvKX0gIGA7XG5cbmNvbnN0IGtDYW5jZWwgPSBTeW1ib2wuZm9yKFwiY2FuY2VsXCIpO1xuYXN5bmMgZnVuY3Rpb24gcHJvbXB0KG1lc3NhZ2UsIG9wdHMgPSB7fSkge1xuICBjb25zdCBoYW5kbGVDYW5jZWwgPSAodmFsdWUpID0+IHtcbiAgICBpZiAodHlwZW9mIHZhbHVlICE9PSBcInN5bWJvbFwiIHx8IHZhbHVlLnRvU3RyaW5nKCkgIT09IFwiU3ltYm9sKGNsYWNrOmNhbmNlbClcIikge1xuICAgICAgcmV0dXJuIHZhbHVlO1xuICAgIH1cbiAgICBzd2l0Y2ggKG9wdHMuY2FuY2VsKSB7XG4gICAgICBjYXNlIFwicmVqZWN0XCI6IHtcbiAgICAgICAgY29uc3QgZXJyb3IgPSBuZXcgRXJyb3IoXCJQcm9tcHQgY2FuY2VsbGVkLlwiKTtcbiAgICAgICAgZXJyb3IubmFtZSA9IFwiQ29uc29sYVByb21wdENhbmNlbGxlZEVycm9yXCI7XG4gICAgICAgIGlmIChFcnJvci5jYXB0dXJlU3RhY2tUcmFjZSkge1xuICAgICAgICAgIEVycm9yLmNhcHR1cmVTdGFja1RyYWNlKGVycm9yLCBwcm9tcHQpO1xuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgICAgfVxuICAgICAgY2FzZSBcInVuZGVmaW5lZFwiOiB7XG4gICAgICAgIHJldHVybiB2b2lkIDA7XG4gICAgICB9XG4gICAgICBjYXNlIFwibnVsbFwiOiB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgICAgfVxuICAgICAgY2FzZSBcInN5bWJvbFwiOiB7XG4gICAgICAgIHJldHVybiBrQ2FuY2VsO1xuICAgICAgfVxuICAgICAgZGVmYXVsdDpcbiAgICAgIGNhc2UgXCJkZWZhdWx0XCI6IHtcbiAgICAgICAgcmV0dXJuIG9wdHMuZGVmYXVsdCA/PyBvcHRzLmluaXRpYWw7XG4gICAgICB9XG4gICAgfVxuICB9O1xuICBpZiAoIW9wdHMudHlwZSB8fCBvcHRzLnR5cGUgPT09IFwidGV4dFwiKSB7XG4gICAgcmV0dXJuIGF3YWl0IGhlKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBkZWZhdWx0VmFsdWU6IG9wdHMuZGVmYXVsdCxcbiAgICAgIHBsYWNlaG9sZGVyOiBvcHRzLnBsYWNlaG9sZGVyLFxuICAgICAgaW5pdGlhbFZhbHVlOiBvcHRzLmluaXRpYWxcbiAgICB9KS50aGVuKGhhbmRsZUNhbmNlbCk7XG4gIH1cbiAgaWYgKG9wdHMudHlwZSA9PT0gXCJjb25maXJtXCIpIHtcbiAgICByZXR1cm4gYXdhaXQgeWUoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIGluaXRpYWxWYWx1ZTogb3B0cy5pbml0aWFsXG4gICAgfSkudGhlbihoYW5kbGVDYW5jZWwpO1xuICB9XG4gIGlmIChvcHRzLnR5cGUgPT09IFwic2VsZWN0XCIpIHtcbiAgICByZXR1cm4gYXdhaXQgdmUoe1xuICAgICAgbWVzc2FnZSxcbiAgICAgIG9wdGlvbnM6IG9wdHMub3B0aW9ucy5tYXAoXG4gICAgICAgIChvKSA9PiB0eXBlb2YgbyA9PT0gXCJzdHJpbmdcIiA/IHsgdmFsdWU6IG8sIGxhYmVsOiBvIH0gOiBvXG4gICAgICApLFxuICAgICAgaW5pdGlhbFZhbHVlOiBvcHRzLmluaXRpYWxcbiAgICB9KS50aGVuKGhhbmRsZUNhbmNlbCk7XG4gIH1cbiAgaWYgKG9wdHMudHlwZSA9PT0gXCJtdWx0aXNlbGVjdFwiKSB7XG4gICAgcmV0dXJuIGF3YWl0IGZlKHtcbiAgICAgIG1lc3NhZ2UsXG4gICAgICBvcHRpb25zOiBvcHRzLm9wdGlvbnMubWFwKFxuICAgICAgICAobykgPT4gdHlwZW9mIG8gPT09IFwic3RyaW5nXCIgPyB7IHZhbHVlOiBvLCBsYWJlbDogbyB9IDogb1xuICAgICAgKSxcbiAgICAgIHJlcXVpcmVkOiBvcHRzLnJlcXVpcmVkLFxuICAgICAgaW5pdGlhbFZhbHVlczogb3B0cy5pbml0aWFsXG4gICAgfSkudGhlbihoYW5kbGVDYW5jZWwpO1xuICB9XG4gIHRocm93IG5ldyBFcnJvcihgVW5rbm93biBwcm9tcHQgdHlwZTogJHtvcHRzLnR5cGV9YCk7XG59XG5cbmV4cG9ydCB7IGtDYW5jZWwsIHByb21wdCB9O1xuIiwgIi8qIGVzbGludC1kaXNhYmxlIHVuaWNvcm4vbm8tcHJvY2Vzcy1leGl0ICovXG5pbXBvcnQgYXNzZXJ0IGZyb20gXCJub2RlOmFzc2VydFwiO1xuaW1wb3J0IHBhdGggZnJvbSBcIm5vZGU6cGF0aFwiO1xuaW1wb3J0IHsgY3JlYXRlSGFzaCB9IGZyb20gXCJub2RlOmNyeXB0b1wiO1xuaW1wb3J0IGZzU3luYyBmcm9tIFwibm9kZTpmc1wiO1xuaW1wb3J0IGZzIGZyb20gXCJub2RlOmZzL3Byb21pc2VzXCI7XG5pbXBvcnQgeyBoYXNoIH0gZnJvbSBcIm9oYXNoXCI7XG5pbXBvcnQgZXpTcGF3biBmcm9tIFwiQGpzZGV2dG9vbHMvZXotc3Bhd25cIjtcbmltcG9ydCB7IGRlZmluZUNvbW1hbmQsIHJ1bk1haW4gfSBmcm9tIFwiY2l0dHlcIjtcbmltcG9ydCB7IGdldFBhY2thZ2VNYW5pZmVzdCwgdHlwZSBQYWNrYWdlTWFuaWZlc3QgfSBmcm9tIFwicXVlcnktcmVnaXN0cnlcIjtcbmltcG9ydCB0eXBlIHsgQ29tbWVudCB9IGZyb20gXCJAcGtnLWtodWxuYXNvZnQvdXRpbHNcIjtcbmltcG9ydCB7XG4gIGFiYnJldmlhdGVDb21taXRIYXNoLFxuICBleHRyYWN0T3duZXJBbmRSZXBvLFxuICBleHRyYWN0UmVwb3NpdG9yeSxcbiAgaW5zdGFsbENvbW1hbmRzLFxufSBmcm9tIFwiQHBrZy1raHVsbmFzb2Z0L3V0aWxzXCI7XG5pbXBvcnQgeyBnbG9iIH0gZnJvbSBcInRpbnlnbG9iYnlcIjtcbmltcG9ydCBpZ25vcmUgZnJvbSBcImlnbm9yZVwiO1xuaW1wb3J0IFwiLi9lbnZpcm9ubWVudHNcIjtcbmltcG9ydCB7IGlzQmluYXJ5RmlsZSB9IGZyb20gXCJpc2JpbmFyeWZpbGVcIjtcbmltcG9ydCB7IHdyaXRlUGFja2FnZUpTT04sIHR5cGUgUGFja2FnZUpzb24gfSBmcm9tIFwicGtnLXR5cGVzXCI7XG5pbXBvcnQgcGtnIGZyb20gXCIuL3BhY2thZ2UuanNvblwiIHdpdGggeyB0eXBlOiBcImpzb25cIiB9O1xuaW1wb3J0IHsgY3JlYXRlRGVmYXVsdFRlbXBsYXRlIH0gZnJvbSBcIi4vdGVtcGxhdGVcIjtcbmltcG9ydCAqIGFzIGNvcmUgZnJvbSBcIkBhY3Rpb25zL2NvcmVcIjtcblxuZGVjbGFyZSBnbG9iYWwge1xuICBjb25zdCBBUElfVVJMOiBzdHJpbmc7XG59XG5cbnR5cGUgT3V0cHV0TWV0YWRhdGEgPSB7XG4gIHBhY2thZ2VzOiB7XG4gICAgbmFtZTogc3RyaW5nO1xuICAgIHVybDogc3RyaW5nO1xuICAgIHNoYXN1bTogc3RyaW5nO1xuICB9W107XG4gIHRlbXBsYXRlczoge1xuICAgIG5hbWU6IHN0cmluZztcbiAgICB1cmw6IHN0cmluZztcbiAgfVtdO1xufTtcblxuY29uc3QgYXBpVXJsID0gcHJvY2Vzcy5lbnYuQVBJX1VSTCA/PyBBUElfVVJMO1xuY29uc3QgcHVibGlzaFVybCA9IG5ldyBVUkwoXCIvcHVibGlzaFwiLCBhcGlVcmwpO1xuY29uc3QgY3JlYXRlTXVsdGlwYXJ0ID0gbmV3IFVSTChcIi9tdWx0aXBhcnQvY3JlYXRlXCIsIGFwaVVybCk7XG5jb25zdCB1cGxvYWRNdWx0aXBhcnQgPSBuZXcgVVJMKFwiL211bHRpcGFydC91cGxvYWRcIiwgYXBpVXJsKTtcbmNvbnN0IGNvbXBsZXRlTXVsdGlwYXJ0ID0gbmV3IFVSTChcIi9tdWx0aXBhcnQvY29tcGxldGVcIiwgYXBpVXJsKTtcblxuY29uc3QgbWFpbiA9IGRlZmluZUNvbW1hbmQoe1xuICBtZXRhOiB7XG4gICAgdmVyc2lvbjogcGtnLnZlcnNpb24sXG4gICAgbmFtZTogXCJraHVsbmFzb2Z0XCIsXG4gICAgZGVzY3JpcHRpb246IFwiQSBDTEkgZm9yIHBrZy5raHVsbmFzb2Z0LmNvbSAoQ29udGludW91cyBSZWxlYXNlcylcIixcbiAgfSxcbiAgc3ViQ29tbWFuZHM6IHtcbiAgICBwdWJsaXNoOiAoKSA9PiB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICBhcmdzOiB7XG4gICAgICAgICAgY29tcGFjdDoge1xuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJjb21wYWN0IHVybHMuIFRoZSBzaG9ydGVzdCBmb3JtIG9mIHVybHMgbGlrZSBwa2cua2h1bG5hc29mdC5jb20vdGlueWJlbmNoQGE4MzJhNTUpXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwZWVyRGVwczoge1xuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJoYW5kbGUgcGVlckRlcGVuZGVuY2llcyBieSBzZXR0aW5nIHRoZSB3b3Jrc3BhY2UgdmVyc2lvbiBpbnN0ZWFkIG9mIHdoYXQgaGFzIGJlZW4gc2V0IGluIHRoZSBwZWVyRGVwcyBpdHNlbGYuIC0tcGVlckRlcHMgbm90IGJlaW5nIHRydWUgd291bGQgbGVhdmUgcGVlckRlcGVuZGVuY2llcyB0byB0aGUgcGFja2FnZSBtYW5hZ2VyIGl0c2VsZiAobnBtLCBwbnBtKVwiLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBwbnBtOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInVzZSBgcG5wbSBwYWNrYCBpbnN0ZWFkIG9mIGBucG0gcGFjayAtLWpzb25gXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICB5YXJuOiB7XG4gICAgICAgICAgICB0eXBlOiBcImJvb2xlYW5cIixcbiAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBcInVzZSBgeWFybiBwYWNrYCBpbnN0ZWFkIG9mIGBucG0gcGFjayAtLWpzb25gXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBidW46IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246IFwidXNlIGBidW4gcG0gcGFja2AgaW5zdGVhZCBvZiBgbnBtIHBhY2sgLS1qc29uYFwiLFxuICAgICAgICAgIH0sXG4gICAgICAgICAgdGVtcGxhdGU6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjpcbiAgICAgICAgICAgICAgXCJnZW5lcmF0ZSBraHVsbmFzb2Z0IHRlbXBsYXRlcyBvdXQgb2YgZGlyZWN0b3JpZXMgaW4gdGhlIGN1cnJlbnQgcmVwbyB3aXRoIHRoZSBuZXcgYnVpbHQgcGFja2FnZXNcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNvbW1lbnQ6IHtcbiAgICAgICAgICAgIHR5cGU6IFwic3RyaW5nXCIsIC8vIFwib2ZmXCIsIFwiY3JlYXRlXCIsIFwidXBkYXRlXCIgKGRlZmF1bHQpXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFwib2ZmXCIgZm9yIG5vIGNvbW1lbnRzIChzaWxlbnQgbW9kZSkuIFwiY3JlYXRlXCIgZm9yIGNvbW1lbnQgb24gZWFjaCBwdWJsaXNoLiBcInVwZGF0ZVwiIGZvciBvbmUgY29tbWVudCBhY3Jvc3MgdGhlIHB1bGwgcmVxdWVzdCB3aXRoIGVkaXRzIG9uIGVhY2ggcHVibGlzaCAoZGVmYXVsdClgLFxuICAgICAgICAgICAgZGVmYXVsdDogXCJ1cGRhdGVcIixcbiAgICAgICAgICB9LFxuICAgICAgICAgIFwib25seS10ZW1wbGF0ZXNcIjoge1xuICAgICAgICAgICAgdHlwZTogXCJib29sZWFuXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYGdlbmVyYXRlIG9ubHkga2h1bG5hc29mdCB0ZW1wbGF0ZXNgLFxuICAgICAgICAgICAgZGVmYXVsdDogZmFsc2UsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBqc29uOiB7XG4gICAgICAgICAgICB0eXBlOiBcIm1peGVkXCIsXG4gICAgICAgICAgICBkZXNjcmlwdGlvbjogYFNhdmUgbWV0YWRhdGEgdG8gYSBKU09OIGZpbGUuIElmIHRydWUsIGxvZyB0aGUgb3V0cHV0IGZvciBwaXBpbmcuIElmIGEgc3RyaW5nLCBzYXZlIHRoZSBvdXRwdXQgdG8gdGhlIHNwZWNpZmllZCBmaWxlIHBhdGguYCxcbiAgICAgICAgICB9LFxuICAgICAgICAgIHBhY2thZ2VNYW5hZ2VyOiB7XG4gICAgICAgICAgICB0eXBlOiBcInN0cmluZ1wiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiU3BlY2lmeSB0aGUgcGFja2FnZSBtYW5hZ2VyIHRvIHVzZSAobnBtLCBidW4sIHBucG0sIHlhcm4pXCIsXG4gICAgICAgICAgICBlbnVtOiBbXCJucG1cIiwgXCJidW5cIiwgXCJwbnBtXCIsIFwieWFyblwiXSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFwibnBtXCIsXG4gICAgICAgICAgfSxcbiAgICAgICAgICBiaW46IHtcbiAgICAgICAgICAgIHR5cGU6IFwiYm9vbGVhblwiLFxuICAgICAgICAgICAgZGVzY3JpcHRpb246XG4gICAgICAgICAgICAgIFwiU2V0IHRvIHRydWUgaWYgeW91ciBwYWNrYWdlIGlzIGEgYmluYXJ5IGFwcGxpY2F0aW9uIGFuZCB5b3Ugd291bGQgbGlrZSB0byBzaG93IGFuIGV4ZWN1dGUgY29tbWFuZCBpbnN0ZWFkIG9mIGFuIGluc3RhbGwgY29tbWFuZC5cIixcbiAgICAgICAgICB9LFxuICAgICAgICB9LFxuICAgICAgICBydW46IGFzeW5jICh7IGFyZ3MgfSkgPT4ge1xuICAgICAgICAgIGNvbnN0IHBhdGhzID1cbiAgICAgICAgICAgIGFyZ3MuXy5sZW5ndGggPiAwXG4gICAgICAgICAgICAgID8gYXdhaXQgZ2xvYihhcmdzLl8sIHtcbiAgICAgICAgICAgICAgICAgIGV4cGFuZERpcmVjdG9yaWVzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgIG9ubHlEaXJlY3RvcmllczogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgIGFic29sdXRlOiB0cnVlLFxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgIDogW3Byb2Nlc3MuY3dkKCldO1xuXG4gICAgICAgICAgY29uc3QgdGVtcGxhdGVzID0gYXdhaXQgZ2xvYihhcmdzLnRlbXBsYXRlIHx8IFtdLCB7XG4gICAgICAgICAgICBleHBhbmREaXJlY3RvcmllczogZmFsc2UsXG4gICAgICAgICAgICBvbmx5RGlyZWN0b3JpZXM6IHRydWUsXG4gICAgICAgICAgICBhYnNvbHV0ZTogdHJ1ZSxcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKCk7XG5cbiAgICAgICAgICBjb25zdCBpc0NvbXBhY3QgPSAhIWFyZ3MuY29tcGFjdDtcbiAgICAgICAgICBsZXQgcGFja01ldGhvZDogUGFja01ldGhvZCA9IFwibnBtXCI7XG5cbiAgICAgICAgICBpZiAoYXJncy5wbnBtKSB7XG4gICAgICAgICAgICBwYWNrTWV0aG9kID0gXCJwbnBtXCI7XG4gICAgICAgICAgfSBlbHNlIGlmIChhcmdzLnlhcm4pIHtcbiAgICAgICAgICAgIHBhY2tNZXRob2QgPSBcInlhcm5cIjtcbiAgICAgICAgICB9IGVsc2UgaWYgKGFyZ3MuYnVuKSB7XG4gICAgICAgICAgICBwYWNrTWV0aG9kID0gXCJidW5cIjtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBpc1BlZXJEZXBzRW5hYmxlZCA9ICEhYXJncy5wZWVyRGVwcztcbiAgICAgICAgICBjb25zdCBpc09ubHlUZW1wbGF0ZXMgPSAhIWFyZ3NbXCJvbmx5LXRlbXBsYXRlc1wiXTtcbiAgICAgICAgICBjb25zdCBpc0JpbmFyeUFwcGxpY2F0aW9uID0gISFhcmdzLmJpbjtcbiAgICAgICAgICBjb25zdCBjb21tZW50OiBDb21tZW50ID0gYXJncy5jb21tZW50IGFzIENvbW1lbnQ7XG4gICAgICAgICAgY29uc3Qgc2VsZWN0ZWRQYWNrYWdlTWFuYWdlciA9IChhcmdzLnBhY2thZ2VNYW5hZ2VyIGFzIHN0cmluZylcbiAgICAgICAgICAgIC5zcGxpdChcIixcIilcbiAgICAgICAgICAgIC5maWx0ZXIoKHMpID0+IHMudHJpbSgpKSBhcyBBcnJheTxcIm5wbVwiIHwgXCJidW5cIiB8IFwicG5wbVwiIHwgXCJ5YXJuXCI+O1xuICAgICAgICAgIGNvbnN0IHBhY2thZ2VNYW5hZ2VycyA9IFtcIm5wbVwiLCBcImJ1blwiLCBcInBucG1cIiwgXCJ5YXJuXCJdO1xuXG4gICAgICAgICAgaWYgKCFzZWxlY3RlZFBhY2thZ2VNYW5hZ2VyLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYFVuc3VwcG9ydGVkIHBhY2thZ2UgbWFuYWdlcjogJHthcmdzLnBhY2thZ2VNYW5hZ2VyfS4gU3VwcG9ydGVkIG1hbmFnZXJzIGFyZSBucG0sIGJ1biwgcG5wbSwgeWFybi5gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBzZWxlY3RlZFBhY2thZ2VNYW5hZ2VyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIXBhY2thZ2VNYW5hZ2Vycy5pbmNsdWRlcyhzZWxlY3RlZFBhY2thZ2VNYW5hZ2VyW2ldKSkge1xuICAgICAgICAgICAgICBjb25zb2xlLmVycm9yKFxuICAgICAgICAgICAgICAgIGBVbnN1cHBvcnRlZCBwYWNrYWdlIG1hbmFnZXI6ICR7c2VsZWN0ZWRQYWNrYWdlTWFuYWdlcltpXX0uIFN1cHBvcnRlZCBtYW5hZ2VycyBhcmUgbnBtLCBidW4sIHBucG0sIHlhcm4uYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmICghcHJvY2Vzcy5lbnYuVEVTVCAmJiBwcm9jZXNzLmVudi5HSVRIVUJfQUNUSU9OUyAhPT0gXCJ0cnVlXCIpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgIFwiQ29udGludW91cyBSZWxlYXNlcyBhcmUgb25seSBhdmFpbGFibGUgaW4gR2l0SHViIEFjdGlvbnMuXCIsXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgIEdJVEhVQl9SRVBPU0lUT1JZLFxuICAgICAgICAgICAgR0lUSFVCX1JVTl9JRCxcbiAgICAgICAgICAgIEdJVEhVQl9SVU5fQVRURU1QVCxcbiAgICAgICAgICAgIEdJVEhVQl9BQ1RPUl9JRCxcbiAgICAgICAgICAgIEdJVEhVQl9PVVRQVVQsXG4gICAgICAgICAgfSA9IHByb2Nlc3MuZW52O1xuXG4gICAgICAgICAgY29uc3QgW293bmVyLCByZXBvXSA9IEdJVEhVQl9SRVBPU0lUT1JZLnNwbGl0KFwiL1wiKTtcblxuICAgICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICByZXBvLFxuICAgICAgICAgICAgcnVuOiBOdW1iZXIoR0lUSFVCX1JVTl9JRCksXG4gICAgICAgICAgICBhdHRlbXB0OiBOdW1iZXIoR0lUSFVCX1JVTl9BVFRFTVBUKSxcbiAgICAgICAgICAgIGFjdG9yOiBOdW1iZXIoR0lUSFVCX0FDVE9SX0lEKSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgY29uc3Qga2V5ID0gaGFzaChtZXRhZGF0YSk7XG5cbiAgICAgICAgICBsZXQgY2hlY2tSZXNwb25zZTtcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgY2hlY2tSZXNwb25zZSA9IGF3YWl0IGZldGNoKG5ldyBVUkwoXCIvY2hlY2tcIiwgYXBpVXJsKSwge1xuICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgICAgb3duZXIsXG4gICAgICAgICAgICAgICAgcmVwbyxcbiAgICAgICAgICAgICAgICBrZXksXG4gICAgICAgICAgICAgIH0pLFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoYEZhaWxlZCB0byBjb25uZWN0IHRvIHNlcnZlcjogJHtlcnJvcn1gKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBpZiAoIWNoZWNrUmVzcG9uc2Uub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IGNoZWNrUmVzcG9uc2UudGV4dCgpO1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihcbiAgICAgICAgICAgICAgYENoZWNrIGZhaWxlZCAoJHtjaGVja1Jlc3BvbnNlLnN0YXR1c30pOiAke2Vycm9yVGV4dH1gLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCB7IHNoYSB9ID0gYXdhaXQgY2hlY2tSZXNwb25zZS5qc29uKCk7XG4gICAgICAgICAgY29uc3QgZm9ybWF0dGVkU2hhID0gaXNDb21wYWN0ID8gYWJicmV2aWF0ZUNvbW1pdEhhc2goc2hhKSA6IHNoYTtcblxuICAgICAgICAgIGNvbnN0IGRlcHM6IE1hcDxzdHJpbmcsIHN0cmluZz4gPSBuZXcgTWFwKCk7IC8vIHBrZy5raHVsbmFzb2Z0LmNvbSB2ZXJzaW9ucyBvZiB0aGUgcGFja2FnZVxuICAgICAgICAgIGNvbnN0IHJlYWxEZXBzOiBNYXA8c3RyaW5nLCBzdHJpbmc+IHwgbnVsbCA9IGlzUGVlckRlcHNFbmFibGVkXG4gICAgICAgICAgICA/IG5ldyBNYXAoKVxuICAgICAgICAgICAgOiBudWxsOyAvLyByZWFsIHZlcnNpb25zIG9mIHRoZSBwYWNrYWdlLCB1c2VmdWwgZm9yIHBlZXJEZXBlbmRlbmNpZXNcblxuICAgICAgICAgIGNvbnN0IHByaW50SnNvbiA9IHR5cGVvZiBhcmdzLmpzb24gPT09IFwiYm9vbGVhblwiO1xuICAgICAgICAgIGNvbnN0IHNhdmVKc29uID0gdHlwZW9mIGFyZ3MuanNvbiA9PT0gXCJzdHJpbmdcIjtcbiAgICAgICAgICBjb25zdCBqc29uRmlsZVBhdGggPSBzYXZlSnNvbiA/IGFyZ3MuanNvbiA6IFwiXCI7XG4gICAgICAgICAgY29uc3Qgb3V0cHV0TWV0YWRhdGE6IE91dHB1dE1ldGFkYXRhID0ge1xuICAgICAgICAgICAgcGFja2FnZXM6IFtdLFxuICAgICAgICAgICAgdGVtcGxhdGVzOiBbXSxcbiAgICAgICAgICB9O1xuXG4gICAgICAgICAgZm9yIChjb25zdCBwIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICBjb25zdCBwSnNvblBhdGggPSBwYXRoLnJlc29sdmUocCwgXCJwYWNrYWdlLmpzb25cIik7XG4gICAgICAgICAgICBjb25zdCBwSnNvbiA9IGF3YWl0IHJlYWRQYWNrYWdlSnNvbihwSnNvblBhdGgpO1xuXG4gICAgICAgICAgICBpZiAoIXBKc29uKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXBKc29uLm5hbWUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIm5hbWVcIiBmaWVsZCBpbiAke3BKc29uUGF0aH0gc2hvdWxkIGJlIGRlZmluZWRgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChwSnNvbi5wcml2YXRlKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoaXNDb21wYWN0KSB7XG4gICAgICAgICAgICAgIGF3YWl0IHZlcmlmeUNvbXBhY3RNb2RlKHBKc29uLm5hbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgbG9uZ0RlcFVybCA9IG5ldyBVUkwoXG4gICAgICAgICAgICAgIGAvJHtvd25lcn0vJHtyZXBvfS8ke3BKc29uLm5hbWV9QCR7Zm9ybWF0dGVkU2hhfWAsXG4gICAgICAgICAgICAgIGFwaVVybCxcbiAgICAgICAgICAgICkuaHJlZjtcbiAgICAgICAgICAgIGRlcHMuc2V0KHBKc29uLm5hbWUsIGxvbmdEZXBVcmwpO1xuICAgICAgICAgICAgcmVhbERlcHM/LnNldChwSnNvbi5uYW1lLCBwSnNvbi52ZXJzaW9uID8/IGxvbmdEZXBVcmwpO1xuXG4gICAgICAgICAgICBjb25zdCBjb250cm9sbGVyID0gbmV3IEFib3J0Q29udHJvbGxlcigpO1xuICAgICAgICAgICAgdHJ5IHtcbiAgICAgICAgICAgICAgY29uc3QgcmVzb3VyY2UgPSBhd2FpdCBmZXRjaChsb25nRGVwVXJsLCB7XG4gICAgICAgICAgICAgICAgc2lnbmFsOiBjb250cm9sbGVyLnNpZ25hbCxcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGlmIChyZXNvdXJjZS5vaykge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUud2FybihcbiAgICAgICAgICAgICAgICAgIGAke3BKc29uLm5hbWV9QCR7Zm9ybWF0dGVkU2hhfSB3YXMgYWxyZWFkeSBwdWJsaXNoZWQgb24gJHtsb25nRGVwVXJsfWAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXNvdXJjZS5zdGF0dXMgPj0gNTAwKSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS53YXJuKFxuICAgICAgICAgICAgICAgICAgYFNlcnZlciBlcnJvciBjaGVja2luZyAke2xvbmdEZXBVcmx9ICgke3Jlc291cmNlLnN0YXR1c30pLCBwcm9jZWVkaW5nIHdpdGggcHVibGlzaGAsXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgICBgVW5leHBlY3RlZCByZXNwb25zZSBjaGVja2luZyAke2xvbmdEZXBVcmx9ICgke3Jlc291cmNlLnN0YXR1c30pYCxcbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYEZhaWxlZCB0byBjaGVjayBpZiBwYWNrYWdlIGV4aXN0cyBhdCAke2xvbmdEZXBVcmx9OiAke2Vycm9yfWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb250cm9sbGVyLmFib3J0KCk7XG5cbiAgICAgICAgICAgIGNvbnN0IGpzb25VcmwgPSBpc0NvbXBhY3RcbiAgICAgICAgICAgICAgPyBuZXcgVVJMKGAvJHtwSnNvbi5uYW1lfUAke2Zvcm1hdHRlZFNoYX1gLCBhcGlVcmwpLmhyZWZcbiAgICAgICAgICAgICAgOiBsb25nRGVwVXJsO1xuXG4gICAgICAgICAgICAvLyBDb2xsZWN0IHBhY2thZ2UgbWV0YWRhdGFcbiAgICAgICAgICAgIG91dHB1dE1ldGFkYXRhLnBhY2thZ2VzLnB1c2goe1xuICAgICAgICAgICAgICBuYW1lOiBwSnNvbi5uYW1lLFxuICAgICAgICAgICAgICB1cmw6IGpzb25VcmwsXG4gICAgICAgICAgICAgIHNoYXN1bTogXCJcIiwgLy8gd2lsbCBiZSBmaWxsZWQgbGF0ZXJcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGZvciAoY29uc3QgdGVtcGxhdGVEaXIgb2YgdGVtcGxhdGVzKSB7XG4gICAgICAgICAgICBjb25zdCBwSnNvblBhdGggPSBwYXRoLnJlc29sdmUodGVtcGxhdGVEaXIsIFwicGFja2FnZS5qc29uXCIpO1xuICAgICAgICAgICAgY29uc3QgcEpzb25Db250ZW50cyA9IGF3YWl0IHRyeVJlYWRGaWxlKHBKc29uUGF0aCk7XG4gICAgICAgICAgICBjb25zdCBwSnNvbiA9IHBKc29uQ29udGVudHNcbiAgICAgICAgICAgICAgPyBwYXJzZVBhY2thZ2VKc29uKHBKc29uQ29udGVudHMpXG4gICAgICAgICAgICAgIDogbnVsbDtcblxuICAgICAgICAgICAgaWYgKCFwSnNvbiB8fCAhcEpzb25Db250ZW50cykge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYHNraXBwaW5nICR7dGVtcGxhdGVEaXJ9IGJlY2F1c2UgdGhlcmUncyBubyBwYWNrYWdlLmpzb24gZmlsZWAsXG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIXBKc29uLm5hbWUpIHtcbiAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGBcIm5hbWVcIiBmaWVsZCBpbiAke3BKc29uUGF0aH0gc2hvdWxkIGJlIGRlZmluZWRgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc29sZS53YXJuKFwicHJlcGFyaW5nIHRlbXBsYXRlOlwiLCBwSnNvbi5uYW1lKTtcblxuICAgICAgICAgICAgY29uc3QgcmVzdG9yZSA9IGF3YWl0IHdyaXRlRGVwcyhcbiAgICAgICAgICAgICAgdGVtcGxhdGVEaXIsXG4gICAgICAgICAgICAgIHBKc29uQ29udGVudHMsXG4gICAgICAgICAgICAgIHBKc29uLFxuICAgICAgICAgICAgICBkZXBzLFxuICAgICAgICAgICAgICByZWFsRGVwcyxcbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGNvbnN0IGdpdGlnbm9yZVBhdGggPSBwYXRoLmpvaW4odGVtcGxhdGVEaXIsIFwiLmdpdGlnbm9yZVwiKTtcbiAgICAgICAgICAgIGNvbnN0IGlnID0gaWdub3JlKCkuYWRkKFwibm9kZV9tb2R1bGVzXCIpLmFkZChcIi5naXRcIik7XG5cbiAgICAgICAgICAgIGlmIChmc1N5bmMuZXhpc3RzU3luYyhnaXRpZ25vcmVQYXRoKSkge1xuICAgICAgICAgICAgICBjb25zdCBnaXRpZ25vcmVDb250ZW50ID0gYXdhaXQgZnMucmVhZEZpbGUoZ2l0aWdub3JlUGF0aCwgXCJ1dGY4XCIpO1xuICAgICAgICAgICAgICBpZy5hZGQoZ2l0aWdub3JlQ29udGVudCk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnN0IGZpbGVzID0gYXdhaXQgZ2xvYihbXCIqKi8qXCJdLCB7XG4gICAgICAgICAgICAgIGN3ZDogdGVtcGxhdGVEaXIsXG4gICAgICAgICAgICAgIGRvdDogdHJ1ZSxcbiAgICAgICAgICAgICAgb25seUZpbGVzOiB0cnVlLFxuICAgICAgICAgICAgICBpZ25vcmU6IFtcIioqL25vZGVfbW9kdWxlc1wiLCBcIi5naXRcIl0sIC8vIGFsd2F5cyBpZ25vcmUgbm9kZV9tb2R1bGVzIGFuZCAuZ2l0XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgY29uc3QgZmlsdGVyZWRGaWxlcyA9IGZpbGVzLmZpbHRlcigoZmlsZSkgPT4gIWlnLmlnbm9yZXMoZmlsZSkpO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIGZpbHRlcmVkRmlsZXMpIHtcbiAgICAgICAgICAgICAgY29uc3QgZmlsZSA9IGF3YWl0IGZzLnJlYWRGaWxlKHBhdGguam9pbih0ZW1wbGF0ZURpciwgZmlsZVBhdGgpKTtcbiAgICAgICAgICAgICAgY29uc3QgaXNCaW5hcnkgPSBhd2FpdCBpc0JpbmFyeUZpbGUoZmlsZSk7XG4gICAgICAgICAgICAgIGNvbnN0IGJsb2IgPSBuZXcgQmxvYihbZmlsZS5idWZmZXJdLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgdGVtcGxhdGU6JHtwSnNvbi5uYW1lfToke2VuY29kZVVSSUNvbXBvbmVudChmaWxlUGF0aCl9YCxcbiAgICAgICAgICAgICAgICBpc0JpbmFyeSA/IGJsb2IgOiBhd2FpdCBibG9iLnRleHQoKSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGF3YWl0IHJlc3RvcmUoKTtcblxuICAgICAgICAgICAgLy8gQ29sbGVjdCB0ZW1wbGF0ZSBtZXRhZGF0YVxuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGVVcmwgPSBuZXcgVVJMKFxuICAgICAgICAgICAgICBgLyR7b3duZXJ9LyR7cmVwb30vdGVtcGxhdGUvJHtwSnNvbi5uYW1lfWAsXG4gICAgICAgICAgICAgIGFwaVVybCxcbiAgICAgICAgICAgICkuaHJlZjtcbiAgICAgICAgICAgIG91dHB1dE1ldGFkYXRhLnRlbXBsYXRlcy5wdXNoKHtcbiAgICAgICAgICAgICAgbmFtZTogcEpzb24ubmFtZSxcbiAgICAgICAgICAgICAgdXJsOiB0ZW1wbGF0ZVVybCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGNvbnN0IG5vRGVmYXVsdFRlbXBsYXRlID0gYXJncy50ZW1wbGF0ZSA9PT0gZmFsc2U7XG5cbiAgICAgICAgICBpZiAoIW5vRGVmYXVsdFRlbXBsYXRlICYmIHRlbXBsYXRlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIGNvbnN0IHByb2plY3QgPSBjcmVhdGVEZWZhdWx0VGVtcGxhdGUoXG4gICAgICAgICAgICAgIE9iamVjdC5mcm9tRW50cmllcyhkZXBzLmVudHJpZXMoKSksXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBmb3IgKGNvbnN0IGZpbGVQYXRoIG9mIE9iamVjdC5rZXlzKHByb2plY3QpKSB7XG4gICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChcbiAgICAgICAgICAgICAgICBgdGVtcGxhdGU6ZGVmYXVsdDoke2VuY29kZVVSSUNvbXBvbmVudChmaWxlUGF0aCl9YCxcbiAgICAgICAgICAgICAgICBwcm9qZWN0W2ZpbGVQYXRoXSxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXN0b3JlTWFwID0gbmV3IE1hcDxcbiAgICAgICAgICAgIHN0cmluZyxcbiAgICAgICAgICAgIEF3YWl0ZWQ8UmV0dXJuVHlwZTx0eXBlb2Ygd3JpdGVEZXBzPj5cbiAgICAgICAgICA+KCk7XG4gICAgICAgICAgZm9yIChjb25zdCBwIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICBjb25zdCBwSnNvblBhdGggPSBwYXRoLnJlc29sdmUocCwgXCJwYWNrYWdlLmpzb25cIik7XG4gICAgICAgICAgICBjb25zdCBwSnNvbkNvbnRlbnRzID0gYXdhaXQgdHJ5UmVhZEZpbGUocEpzb25QYXRoKTtcbiAgICAgICAgICAgIGNvbnN0IHBKc29uID0gcEpzb25Db250ZW50c1xuICAgICAgICAgICAgICA/IHBhcnNlUGFja2FnZUpzb24ocEpzb25Db250ZW50cylcbiAgICAgICAgICAgICAgOiBudWxsO1xuXG4gICAgICAgICAgICBpZiAoIXBKc29uIHx8ICFwSnNvbkNvbnRlbnRzKSB7XG4gICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocEpzb24ucHJpdmF0ZSkge1xuICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVzdG9yZU1hcC5zZXQoXG4gICAgICAgICAgICAgIHAsXG4gICAgICAgICAgICAgIGF3YWl0IHdyaXRlRGVwcyhwLCBwSnNvbkNvbnRlbnRzLCBwSnNvbiwgZGVwcywgcmVhbERlcHMpLFxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBzaGFzdW1zOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+ID0ge307XG4gICAgICAgICAgZm9yIChjb25zdCBwIG9mIHBhdGhzKSB7XG4gICAgICAgICAgICBjb25zdCBwSnNvblBhdGggPSBwYXRoLnJlc29sdmUocCwgXCJwYWNrYWdlLmpzb25cIik7XG4gICAgICAgICAgICBjb25zdCBwSnNvbiA9IGF3YWl0IHJlYWRQYWNrYWdlSnNvbihwSnNvblBhdGgpO1xuICAgICAgICAgICAgaWYgKCFwSnNvbikge1xuICAgICAgICAgICAgICBjb25zb2xlLndhcm4oXG4gICAgICAgICAgICAgICAgYHNraXBwaW5nICR7cH0gYmVjYXVzZSB0aGVyZSdzIG5vIHBhY2thZ2UuanNvbiBmaWxlYCxcbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRyeSB7XG4gICAgICAgICAgICAgIGlmICghcEpzb24ubmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgICAgICAgICAgIGBcIm5hbWVcIiBmaWVsZCBpbiAke3BKc29uUGF0aH0gc2hvdWxkIGJlIGRlZmluZWRgLFxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKHBKc29uLnByaXZhdGUpIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLndhcm4oYHNraXBwaW5nICR7cH0gYmVjYXVzZSB0aGUgcGFja2FnZSBpcyBwcml2YXRlYCk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICBjb25zdCB7IGZpbGVuYW1lLCBzaGFzdW0gfSA9IGF3YWl0IHJlc29sdmVUYXJiYWxsKFxuICAgICAgICAgICAgICAgIHBhY2tNZXRob2QsXG4gICAgICAgICAgICAgICAgcCxcbiAgICAgICAgICAgICAgICBwSnNvbixcbiAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICBzaGFzdW1zW3BKc29uLm5hbWVdID0gc2hhc3VtO1xuXG4gICAgICAgICAgICAgIGNvbnN0IG91dHB1dFBrZyA9IG91dHB1dE1ldGFkYXRhLnBhY2thZ2VzLmZpbmQoXG4gICAgICAgICAgICAgICAgKHApID0+IHAubmFtZSA9PT0gcEpzb24ubmFtZSxcbiAgICAgICAgICAgICAgKSE7XG4gICAgICAgICAgICAgIG91dHB1dFBrZy5zaGFzdW0gPSBzaGFzdW07XG5cbiAgICAgICAgICAgICAgY29uc3QgZmlsZVBhdGggPSBwYXRoLnJlc29sdmUocCwgZmlsZW5hbWUpO1xuICAgICAgICAgICAgICBjb25zdCBidWZmZXIgPSBhd2FpdCBmcy5yZWFkRmlsZShmaWxlUGF0aCk7XG5cbiAgICAgICAgICAgICAgY29uc3QgYmxvYiA9IG5ldyBCbG9iKFtidWZmZXJdLCB7XG4gICAgICAgICAgICAgICAgdHlwZTogXCJhcHBsaWNhdGlvbi9vY3RldC1zdHJlYW1cIixcbiAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgIGZvcm1EYXRhLmFwcGVuZChgcGFja2FnZToke3BKc29uLm5hbWV9YCwgYmxvYiwgZmlsZW5hbWUpO1xuXG4gICAgICAgICAgICAgIGF3YWl0IGZzLnJtKGZpbGVQYXRoKTtcbiAgICAgICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgICAgIGF3YWl0IHJlc3RvcmVNYXAuZ2V0KHApPy4oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBmb3JtRGF0YVBhY2thZ2VzU2l6ZSA9IFsuLi5mb3JtRGF0YS5lbnRyaWVzKCldLnJlZHVjZShcbiAgICAgICAgICAgIChwcmV2LCBbXywgZW50cnldKSA9PiBwcmV2ICsgZ2V0Rm9ybUVudHJ5U2l6ZShlbnRyeSksXG4gICAgICAgICAgICAwLFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICAvLyBtdWx0aXBhcnQgdXBsb2FkaW5nXG4gICAgICAgICAgaWYgKGZvcm1EYXRhUGFja2FnZXNTaXplID4gMTAyNCAqIDEwMjQgKiA5OSkge1xuICAgICAgICAgICAgZm9yIChjb25zdCBbbmFtZSwgZW50cnldIG9mIGZvcm1EYXRhKSB7XG4gICAgICAgICAgICAgIGlmIChuYW1lLnN0YXJ0c1dpdGgoXCJwYWNrYWdlOlwiKSkge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBlbnRyeSBhcyBGaWxlO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rU2l6ZSA9IDEwMjQgKiAxMDI0ICogNTtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZS5zaXplIDw9IGNodW5rU2l6ZSkge1xuICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IHRvdGFsQ2h1bmtzID0gTWF0aC5jZWlsKGZpbGUuc2l6ZSAvIGNodW5rU2l6ZSk7XG4gICAgICAgICAgICAgICAgY29uc3QgY3JlYXRlTXVsdGlwYXJ0UmVzID0gYXdhaXQgZmV0Y2goY3JlYXRlTXVsdGlwYXJ0LCB7XG4gICAgICAgICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICBcInNiLWtleVwiOiBrZXksXG4gICAgICAgICAgICAgICAgICAgIFwic2ItbmFtZVwiOiBuYW1lLnNsaWNlKFwicGFja2FnZTpcIi5sZW5ndGgpLFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpZiAoIWNyZWF0ZU11bHRpcGFydFJlcy5vaykge1xuICAgICAgICAgICAgICAgICAgY29uc29sZS5lcnJvcihhd2FpdCBjcmVhdGVNdWx0aXBhcnRSZXMudGV4dCgpKTtcbiAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCB7IGtleTogdXBsb2FkS2V5LCBpZDogdXBsb2FkSWQgfSA9XG4gICAgICAgICAgICAgICAgICBhd2FpdCBjcmVhdGVNdWx0aXBhcnRSZXMuanNvbigpO1xuXG4gICAgICAgICAgICAgICAgaW50ZXJmYWNlIFIyVXBsb2FkZWRQYXJ0IHtcbiAgICAgICAgICAgICAgICAgIHBhcnROdW1iZXI6IG51bWJlcjtcbiAgICAgICAgICAgICAgICAgIGV0YWc6IHN0cmluZztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkZWRQYXJ0czogUjJVcGxvYWRlZFBhcnRbXSA9IFtdO1xuXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0b3RhbENodW5rczsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICBjb25zdCBzdGFydCA9IGkgKiBjaHVua1NpemU7XG4gICAgICAgICAgICAgICAgICBjb25zdCBlbmQgPSBNYXRoLm1pbihmaWxlLnNpemUsIHN0YXJ0ICsgY2h1bmtTaXplKTtcbiAgICAgICAgICAgICAgICAgIGNvbnN0IGNodW5rID0gZmlsZS5zbGljZShzdGFydCwgZW5kKTtcblxuICAgICAgICAgICAgICAgICAgY29uc3QgdXBsb2FkTXVsdGlwYXJ0UmVzID0gYXdhaXQgZmV0Y2godXBsb2FkTXVsdGlwYXJ0LCB7XG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQVVRcIixcbiAgICAgICAgICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICAgICAgIGtleTogdXBsb2FkS2V5LFxuICAgICAgICAgICAgICAgICAgICAgIGlkOiB1cGxvYWRJZCxcbiAgICAgICAgICAgICAgICAgICAgICBcInBhcnQtbnVtYmVyXCI6IGAke2kgKyAxfWAsXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHk6IGNodW5rLFxuICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgIGlmICghdXBsb2FkTXVsdGlwYXJ0UmVzLm9rKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgICAgYEVycm9yIHVwbG9hZGluZyBwYXJ0ICR7aSArIDF9OiAke2F3YWl0IHVwbG9hZE11bHRpcGFydFJlcy50ZXh0KCl9YCxcbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBjb25zdCB7IHBhcnQgfSA9IGF3YWl0IHVwbG9hZE11bHRpcGFydFJlcy5qc29uKCk7XG4gICAgICAgICAgICAgICAgICB1cGxvYWRlZFBhcnRzLnB1c2gocGFydCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGNvbXBsZXRlTXVsdGlwYXJ0UmVzID0gYXdhaXQgZmV0Y2goY29tcGxldGVNdWx0aXBhcnQsIHtcbiAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgICAgIGtleTogdXBsb2FkS2V5LFxuICAgICAgICAgICAgICAgICAgICBpZDogdXBsb2FkSWQsXG4gICAgICAgICAgICAgICAgICAgIFwidXBsb2FkZWQtcGFydHNcIjogSlNPTi5zdHJpbmdpZnkodXBsb2FkZWRQYXJ0cyksXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGlmICghY29tcGxldGVNdWx0aXBhcnRSZXMub2spIHtcbiAgICAgICAgICAgICAgICAgIGNvbnNvbGUuZXJyb3IoXG4gICAgICAgICAgICAgICAgICAgIGBFcnJvciBjb21wbGV0aW5nICR7a2V5fTogJHthd2FpdCBjb21wbGV0ZU11bHRpcGFydFJlcy50ZXh0KCl9YCxcbiAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgeyBrZXk6IGNvbXBsZXRpb25LZXkgfSA9XG4gICAgICAgICAgICAgICAgICBhd2FpdCBjb21wbGV0ZU11bHRpcGFydFJlcy5qc29uKCk7XG5cbiAgICAgICAgICAgICAgICBmb3JtRGF0YS5zZXQobmFtZSwgYG9iamVjdDoke2NvbXBsZXRpb25LZXl9YCk7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChwdWJsaXNoVXJsLCB7XG4gICAgICAgICAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICBcInNiLWNvbW1lbnRcIjogY29tbWVudCxcbiAgICAgICAgICAgICAgXCJzYi1jb21wYWN0XCI6IGAke2lzQ29tcGFjdH1gLFxuICAgICAgICAgICAgICBcInNiLWtleVwiOiBrZXksXG4gICAgICAgICAgICAgIFwic2Itc2hhc3Vtc1wiOiBKU09OLnN0cmluZ2lmeShzaGFzdW1zKSxcbiAgICAgICAgICAgICAgXCJzYi1ydW4taWRcIjogR0lUSFVCX1JVTl9JRCxcbiAgICAgICAgICAgICAgXCJzYi1iaW5cIjogYCR7aXNCaW5hcnlBcHBsaWNhdGlvbn1gLFxuICAgICAgICAgICAgICBcInNiLXBhY2thZ2UtbWFuYWdlclwiOiBzZWxlY3RlZFBhY2thZ2VNYW5hZ2VyLmpvaW4oXCIsXCIpLFxuICAgICAgICAgICAgICBcInNiLW9ubHktdGVtcGxhdGVzXCI6IGAke2lzT25seVRlbXBsYXRlc31gLFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGJvZHk6IGZvcm1EYXRhLFxuICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgaWYgKCFyZXMub2spIHtcbiAgICAgICAgICAgIGNvbnN0IGVycm9yVGV4dCA9IGF3YWl0IHJlcy50ZXh0KCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBQdWJsaXNoaW5nIGZhaWxlZCAoJHtyZXMuc3RhdHVzfSk6ICR7ZXJyb3JUZXh0fWApO1xuICAgICAgICAgICAgcHJvY2Vzcy5leGl0KDEpO1xuICAgICAgICAgIH1cblxuICAgICAgICAgIGxldCBsYXRlclJlcztcbiAgICAgICAgICB0cnkge1xuICAgICAgICAgICAgbGF0ZXJSZXMgPSBhd2FpdCByZXMuanNvbigpO1xuICAgICAgICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBGYWlsZWQgdG8gcGFyc2Ugc2VydmVyIHJlc3BvbnNlIGFzIEpTT046ICR7ZXJyb3J9YCk7XG4gICAgICAgICAgICBjb25zb2xlLmVycm9yKGBSYXcgcmVzcG9uc2U6ICR7YXdhaXQgcmVzLnRleHQoKX1gKTtcbiAgICAgICAgICAgIHByb2Nlc3MuZXhpdCgxKTtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBjb25zdCBkZWJ1ZyA9IGxhdGVyUmVzLmRlYnVnO1xuXG4gICAgICAgICAgY29yZS5zdGFydEdyb3VwKFwiXHVEODNEXHVERDBEIEluZm9cIik7XG4gICAgICAgICAgY29yZS5ub3RpY2UoSlNPTi5zdHJpbmdpZnkoZGVidWcsIG51bGwsIDIpKTtcbiAgICAgICAgICBjb3JlLmVuZEdyb3VwKCk7XG5cbiAgICAgICAgICBjb25zb2xlLndhcm4oXCJcXG5cIik7XG4gICAgICAgICAgY29uc29sZS53YXJuKFwiXHUyNkExXHVGRTBGIFlvdXIgbnBtIHBhY2thZ2VzIGFyZSBwdWJsaXNoZWQuXFxuXCIpO1xuXG4gICAgICAgICAgY29uc3QgcGFja2FnZUxvZ3MgPSBbLi4uZm9ybURhdGEua2V5cygpXVxuICAgICAgICAgICAgLmZpbHRlcigoaykgPT4gay5zdGFydHNXaXRoKFwicGFja2FnZTpcIikpXG4gICAgICAgICAgICAubWFwKChuYW1lLCBpKSA9PiB7XG4gICAgICAgICAgICAgIGNvbnN0IHBhY2thZ2VOYW1lID0gbmFtZS5zbGljZShcInBhY2thZ2U6XCIubGVuZ3RoKTtcbiAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChsYXRlclJlcy51cmxzW2ldKTtcbiAgICAgICAgICAgICAgY29uc3QgcHVibGludFVybCA9IG5ldyBVUkwoXG4gICAgICAgICAgICAgICAgYC9wa2cua2h1bG5hc29mdC5jb20ke3VybC5wYXRobmFtZX1gLFxuICAgICAgICAgICAgICAgIFwiaHR0cHM6Ly9wdWJsaW50LmRldlwiLFxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICByZXR1cm4gYCR7cGFja2FnZU5hbWV9OlxuLSBzaGE6ICR7c2hhc3Vtc1twYWNrYWdlTmFtZV19XG4tIHB1YmxpbnQ6ICR7cHVibGludFVybH1cbi0gJHtwYWNrTWV0aG9kfTogJHtpbnN0YWxsQ29tbWFuZHNbcGFja01ldGhvZF19ICR7dXJsfWA7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmpvaW4oXCJcXG5cXG5cIik7XG5cbiAgICAgICAgICBjb25zb2xlLndhcm4ocGFja2FnZUxvZ3MpO1xuXG4gICAgICAgICAgY29uc3Qgb3V0cHV0ID0gSlNPTi5zdHJpbmdpZnkob3V0cHV0TWV0YWRhdGEsIG51bGwsIDIpO1xuICAgICAgICAgIGlmIChwcmludEpzb24pIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKG91dHB1dCk7IC8vIExvZyBvdXRwdXQgZm9yIHBpcGluZ1xuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAoc2F2ZUpzb24pIHtcbiAgICAgICAgICAgIGF3YWl0IGZzLndyaXRlRmlsZShqc29uRmlsZVBhdGgsIG91dHB1dCk7XG4gICAgICAgICAgICBjb25zb2xlLndhcm4oYG1ldGFkYXRhIHdyaXR0ZW4gdG8gJHtqc29uRmlsZVBhdGh9YCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgYXdhaXQgZnMuYXBwZW5kRmlsZShHSVRIVUJfT1VUUFVULCBgc2hhPSR7Zm9ybWF0dGVkU2hhfVxcbmAsIFwidXRmOFwiKTtcbiAgICAgICAgICBhd2FpdCBmcy5hcHBlbmRGaWxlKFxuICAgICAgICAgICAgR0lUSFVCX09VVFBVVCxcbiAgICAgICAgICAgIGB1cmxzPSR7b3V0cHV0TWV0YWRhdGEucGFja2FnZXMubWFwKChwa2cpID0+IHBrZy51cmwpLmpvaW4oXCIgXCIpfVxcbmAsXG4gICAgICAgICAgICBcInV0ZjhcIixcbiAgICAgICAgICApO1xuICAgICAgICAgIGF3YWl0IGZzLmFwcGVuZEZpbGUoXG4gICAgICAgICAgICBHSVRIVUJfT1VUUFVULFxuICAgICAgICAgICAgYHBhY2thZ2VzPSR7b3V0cHV0TWV0YWRhdGEucGFja2FnZXMubWFwKChwa2cpID0+IGAke3BrZy5uYW1lfUAke3BrZy51cmx9YCkuam9pbihcIiBcIil9XFxuYCxcbiAgICAgICAgICAgIFwidXRmOFwiLFxuICAgICAgICAgICk7XG4gICAgICAgIH0sXG4gICAgICB9O1xuICAgIH0sXG4gICAgbGluazogKCkgPT4ge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgbWV0YToge30sXG4gICAgICAgIHJ1bjogKCkgPT4ge1xuICAgICAgICAgIC8vIG5vb3BcbiAgICAgICAgfSxcbiAgICAgIH07XG4gICAgfSxcbiAgfSxcbn0pO1xuXG5ydW5NYWluKG1haW4pXG4gIC50aGVuKCgpID0+IHByb2Nlc3MuZXhpdCgwKSlcbiAgLmNhdGNoKCgpID0+IHByb2Nlc3MuZXhpdCgxKSk7XG5cbnR5cGUgUGFja01ldGhvZCA9IFwibnBtXCIgfCBcInBucG1cIiB8IFwieWFyblwiIHwgXCJidW5cIjtcblxuYXN5bmMgZnVuY3Rpb24gcmVzb2x2ZVRhcmJhbGwocG06IFBhY2tNZXRob2QsIHA6IHN0cmluZywgcEpzb246IFBhY2thZ2VKc29uKSB7XG4gIGxldCBjbWQgPSBgJHtwbX0gcGFja2A7XG4gIGxldCBmaWxlbmFtZSA9IGAke3BKc29uLm5hbWUhLnJlcGxhY2UoXCIvXCIsIFwiLVwiKX0tJHtwSnNvbi52ZXJzaW9ufS50Z3pgO1xuICBpZiAocG0gPT09IFwieWFyblwiKSB7XG4gICAgY21kICs9IGAgLS1maWxlbmFtZSAke2ZpbGVuYW1lfWA7XG4gIH0gZWxzZSBpZiAocG0gPT09IFwiYnVuXCIpIHtcbiAgICBjbWQgPSBgYnVuIHBtIHBhY2sgLS1maWxlbmFtZSAke2ZpbGVuYW1lfWA7XG4gIH1cbiAgY29uc3QgeyBzdGRvdXQgfSA9IGF3YWl0IGV6U3Bhd24uYXN5bmMoY21kLCB7XG4gICAgc3RkaW86IFwib3ZlcmxhcHBlZFwiLFxuICAgIGN3ZDogcCxcbiAgfSk7XG4gIGNvbnN0IGxpbmVzID0gc3Rkb3V0LnNwbGl0KFwiXFxuXCIpLmZpbHRlcihCb29sZWFuKTtcblxuICBpZiAocG0gIT09IFwieWFyblwiICYmIHBtICE9PSBcImJ1blwiKSB7XG4gICAgZmlsZW5hbWUgPSBsaW5lc1tsaW5lcy5sZW5ndGggLSAxXS50cmltKCk7XG4gIH1cblxuICBjb25zdCBzaGFzdW0gPSBjcmVhdGVIYXNoKFwic2hhMVwiKVxuICAgIC51cGRhdGUoYXdhaXQgZnMucmVhZEZpbGUocGF0aC5yZXNvbHZlKHAsIGZpbGVuYW1lKSkpXG4gICAgLmRpZ2VzdChcImhleFwiKTtcblxuICByZXR1cm4geyBmaWxlbmFtZSwgc2hhc3VtIH07XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHdyaXRlRGVwcyhcbiAgcDogc3RyaW5nLFxuICBwSnNvbkNvbnRlbnRzOiBzdHJpbmcsXG4gIHBKc29uOiBQYWNrYWdlSnNvbixcbiAgZGVwczogTWFwPHN0cmluZywgc3RyaW5nPixcbiAgcmVhbERlcHM6IE1hcDxzdHJpbmcsIHN0cmluZz4gfCBudWxsLFxuKSB7XG4gIGNvbnN0IHBKc29uUGF0aCA9IHBhdGgucmVzb2x2ZShwLCBcInBhY2thZ2UuanNvblwiKTtcblxuICBoaWphY2tEZXBzKGRlcHMsIHBKc29uLmRlcGVuZGVuY2llcyk7XG4gIGhpamFja0RlcHMoZGVwcywgcEpzb24uZGV2RGVwZW5kZW5jaWVzKTtcbiAgaGlqYWNrRGVwcyhkZXBzLCBwSnNvbi5vcHRpb25hbERlcGVuZGVuY2llcyk7XG5cbiAgaWYgKHJlYWxEZXBzKSB7XG4gICAgaGlqYWNrRGVwcyhyZWFsRGVwcywgcEpzb24ucGVlckRlcGVuZGVuY2llcyk7XG4gIH1cblxuICBhd2FpdCB3cml0ZVBhY2thZ2VKU09OKHBKc29uUGF0aCwgcEpzb24pO1xuXG4gIHJldHVybiAoKSA9PiBmcy53cml0ZUZpbGUocEpzb25QYXRoLCBwSnNvbkNvbnRlbnRzKTtcbn1cblxuZnVuY3Rpb24gaGlqYWNrRGVwcyhcbiAgbmV3RGVwczogTWFwPHN0cmluZywgc3RyaW5nPixcbiAgb2xkRGVwcz86IFJlY29yZDxzdHJpbmcsIHN0cmluZz4sXG4pIHtcbiAgaWYgKCFvbGREZXBzKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGZvciAoY29uc3QgW25ld0RlcCwgdXJsXSBvZiBuZXdEZXBzKSB7XG4gICAgaWYgKG5ld0RlcCBpbiBvbGREZXBzKSB7XG4gICAgICBvbGREZXBzW25ld0RlcF0gPSB1cmw7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIGdldEZvcm1FbnRyeVNpemUoZW50cnk6IEZvcm1EYXRhRW50cnlWYWx1ZSkge1xuICBpZiAodHlwZW9mIGVudHJ5ID09PSBcInN0cmluZ1wiKSB7XG4gICAgcmV0dXJuIGVudHJ5Lmxlbmd0aDtcbiAgfVxuICByZXR1cm4gZW50cnkuc2l6ZTtcbn1cblxuYXN5bmMgZnVuY3Rpb24gdmVyaWZ5Q29tcGFjdE1vZGUocGFja2FnZU5hbWU6IHN0cmluZykge1xuICBsZXQgbWFuaWZlc3Q6IFBhY2thZ2VNYW5pZmVzdDtcblxuICB0cnkge1xuICAgIG1hbmlmZXN0ID0gYXdhaXQgZ2V0UGFja2FnZU1hbmlmZXN0KHBhY2thZ2VOYW1lKTtcbiAgfSBjYXRjaCB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHBrZy1raHVsbmFzb2Z0IGNhbm5vdCByZXNvbHZlICR7cGFja2FnZU5hbWV9IGZyb20gbnBtLiAtLWNvbXBhY3QgZmxhZyBkZXBlbmRzIG9uIHRoZSBwYWNrYWdlIGJlaW5nIGF2YWlsYWJsZSBpbiBucG0uXG5NYWtlIHN1cmUgdG8gaGF2ZSB5b3VyIHBhY2thZ2Ugb24gbnBtIGZpcnN0LmAsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IGluc3RydWN0aW9uID0gYE1ha2Ugc3VyZSB0byBjb25maWd1cmUgdGhlICdyZXBvc2l0b3J5JyAvICdyZXBvc2l0b3J5LnVybCcgZmllbGQgaW4gaXRzIHBhY2thZ2UuanNvbiBwcm9wZXJseS5cblNlZSBodHRwczovL2RvY3MubnBtanMuY29tL2NsaS92MTAvY29uZmlndXJpbmctbnBtL3BhY2thZ2UtanNvbiNyZXBvc2l0b3J5IGZvciBkZXRhaWxzLmA7XG5cbiAgY29uc3QgcmVwb3NpdG9yeSA9IGV4dHJhY3RSZXBvc2l0b3J5KG1hbmlmZXN0KTtcbiAgaWYgKCFyZXBvc2l0b3J5KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFxuICAgICAgYHBrZy1raHVsbmFzb2Z0IGNhbm5vdCBleHRyYWN0IHRoZSByZXBvc2l0b3J5IGxpbmsgZnJvbSB0aGUgJHtwYWNrYWdlTmFtZX0gbWFuaWZlc3QuIC0tY29tcGFjdCBmbGFnIHJlcXVpcmVzIHRoZSBsaW5rIHRvIGJlIHByZXNlbnQuXG4ke2luc3RydWN0aW9ufWAsXG4gICAgKTtcbiAgfVxuXG4gIGNvbnN0IG1hdGNoID0gZXh0cmFjdE93bmVyQW5kUmVwbyhyZXBvc2l0b3J5KTtcbiAgaWYgKCFtYXRjaCkge1xuICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgIGBwa2cta2h1bG5hc29mdCBjYW5ub3QgZXh0cmFjdCB0aGUgb3duZXIgYW5kIHJlcG8gbmFtZXMgZnJvbSB0aGUgJHtwYWNrYWdlTmFtZX0gcmVwb3NpdG9yeSBsaW5rOiAke3JlcG9zaXRvcnl9LiAtLWNvbXBhY3QgZmxhZyByZXF1aXJlcyB0aGVzZSBuYW1lcy5cbiR7aW5zdHJ1Y3Rpb259YCxcbiAgICApO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHRyeVJlYWRGaWxlKHA6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBhd2FpdCBmcy5yZWFkRmlsZShwLCBcInV0ZjhcIik7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJlYWRQYWNrYWdlSnNvbihwOiBzdHJpbmcpIHtcbiAgY29uc3QgY29udGVudHMgPSBhd2FpdCB0cnlSZWFkRmlsZShwKTtcbiAgaWYgKGNvbnRlbnRzID09PSBudWxsKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgdHJ5IHtcbiAgICByZXR1cm4gcGFyc2VQYWNrYWdlSnNvbihjb250ZW50cyk7XG4gIH0gY2F0Y2gge1xuICAgIHJldHVybiBudWxsO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlUGFja2FnZUpzb24oY29udGVudHM6IHN0cmluZykge1xuICB0cnkge1xuICAgIHJldHVybiBKU09OLnBhcnNlKGNvbnRlbnRzKSBhcyBQYWNrYWdlSnNvbjtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbn1cbiIsICJjb25zdCBkZWZhdWx0cyA9IE9iamVjdC5mcmVlemUoe1xuICBpZ25vcmVVbmtub3duOiBmYWxzZSxcbiAgcmVzcGVjdFR5cGU6IGZhbHNlLFxuICByZXNwZWN0RnVuY3Rpb25OYW1lczogZmFsc2UsXG4gIHJlc3BlY3RGdW5jdGlvblByb3BlcnRpZXM6IGZhbHNlLFxuICB1bm9yZGVyZWRPYmplY3RzOiB0cnVlLFxuICB1bm9yZGVyZWRBcnJheXM6IGZhbHNlLFxuICB1bm9yZGVyZWRTZXRzOiBmYWxzZSxcbiAgZXhjbHVkZUtleXM6IHZvaWQgMCxcbiAgZXhjbHVkZVZhbHVlczogdm9pZCAwLFxuICByZXBsYWNlcjogdm9pZCAwXG59KTtcbmZ1bmN0aW9uIG9iamVjdEhhc2gob2JqZWN0LCBvcHRpb25zKSB7XG4gIGlmIChvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHsgLi4uZGVmYXVsdHMsIC4uLm9wdGlvbnMgfTtcbiAgfSBlbHNlIHtcbiAgICBvcHRpb25zID0gZGVmYXVsdHM7XG4gIH1cbiAgY29uc3QgaGFzaGVyID0gY3JlYXRlSGFzaGVyKG9wdGlvbnMpO1xuICBoYXNoZXIuZGlzcGF0Y2gob2JqZWN0KTtcbiAgcmV0dXJuIGhhc2hlci50b1N0cmluZygpO1xufVxuY29uc3QgZGVmYXVsdFByb3RvdHlwZXNLZXlzID0gT2JqZWN0LmZyZWV6ZShbXG4gIFwicHJvdG90eXBlXCIsXG4gIFwiX19wcm90b19fXCIsXG4gIFwiY29uc3RydWN0b3JcIlxuXSk7XG5mdW5jdGlvbiBjcmVhdGVIYXNoZXIob3B0aW9ucykge1xuICBsZXQgYnVmZiA9IFwiXCI7XG4gIGxldCBjb250ZXh0ID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgY29uc3Qgd3JpdGUgPSAoc3RyKSA9PiB7XG4gICAgYnVmZiArPSBzdHI7XG4gIH07XG4gIHJldHVybiB7XG4gICAgdG9TdHJpbmcoKSB7XG4gICAgICByZXR1cm4gYnVmZjtcbiAgICB9LFxuICAgIGdldENvbnRleHQoKSB7XG4gICAgICByZXR1cm4gY29udGV4dDtcbiAgICB9LFxuICAgIGRpc3BhdGNoKHZhbHVlKSB7XG4gICAgICBpZiAob3B0aW9ucy5yZXBsYWNlcikge1xuICAgICAgICB2YWx1ZSA9IG9wdGlvbnMucmVwbGFjZXIodmFsdWUpO1xuICAgICAgfVxuICAgICAgY29uc3QgdHlwZSA9IHZhbHVlID09PSBudWxsID8gXCJudWxsXCIgOiB0eXBlb2YgdmFsdWU7XG4gICAgICByZXR1cm4gdGhpc1t0eXBlXSh2YWx1ZSk7XG4gICAgfSxcbiAgICBvYmplY3Qob2JqZWN0KSB7XG4gICAgICBpZiAob2JqZWN0ICYmIHR5cGVvZiBvYmplY3QudG9KU09OID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMub2JqZWN0KG9iamVjdC50b0pTT04oKSk7XG4gICAgICB9XG4gICAgICBjb25zdCBvYmpTdHJpbmcgPSBPYmplY3QucHJvdG90eXBlLnRvU3RyaW5nLmNhbGwob2JqZWN0KTtcbiAgICAgIGxldCBvYmpUeXBlID0gXCJcIjtcbiAgICAgIGNvbnN0IG9iamVjdExlbmd0aCA9IG9ialN0cmluZy5sZW5ndGg7XG4gICAgICBpZiAob2JqZWN0TGVuZ3RoIDwgMTApIHtcbiAgICAgICAgb2JqVHlwZSA9IFwidW5rbm93bjpbXCIgKyBvYmpTdHJpbmcgKyBcIl1cIjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIG9ialR5cGUgPSBvYmpTdHJpbmcuc2xpY2UoOCwgb2JqZWN0TGVuZ3RoIC0gMSk7XG4gICAgICB9XG4gICAgICBvYmpUeXBlID0gb2JqVHlwZS50b0xvd2VyQ2FzZSgpO1xuICAgICAgbGV0IG9iamVjdE51bWJlciA9IG51bGw7XG4gICAgICBpZiAoKG9iamVjdE51bWJlciA9IGNvbnRleHQuZ2V0KG9iamVjdCkpID09PSB2b2lkIDApIHtcbiAgICAgICAgY29udGV4dC5zZXQob2JqZWN0LCBjb250ZXh0LnNpemUpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goXCJbQ0lSQ1VMQVI6XCIgKyBvYmplY3ROdW1iZXIgKyBcIl1cIik7XG4gICAgICB9XG4gICAgICBpZiAodHlwZW9mIEJ1ZmZlciAhPT0gXCJ1bmRlZmluZWRcIiAmJiBCdWZmZXIuaXNCdWZmZXIgJiYgQnVmZmVyLmlzQnVmZmVyKG9iamVjdCkpIHtcbiAgICAgICAgd3JpdGUoXCJidWZmZXI6XCIpO1xuICAgICAgICByZXR1cm4gd3JpdGUob2JqZWN0LnRvU3RyaW5nKFwidXRmOFwiKSk7XG4gICAgICB9XG4gICAgICBpZiAob2JqVHlwZSAhPT0gXCJvYmplY3RcIiAmJiBvYmpUeXBlICE9PSBcImZ1bmN0aW9uXCIgJiYgb2JqVHlwZSAhPT0gXCJhc3luY2Z1bmN0aW9uXCIpIHtcbiAgICAgICAgaWYgKHRoaXNbb2JqVHlwZV0pIHtcbiAgICAgICAgICB0aGlzW29ialR5cGVdKG9iamVjdCk7XG4gICAgICAgIH0gZWxzZSBpZiAoIW9wdGlvbnMuaWdub3JlVW5rbm93bikge1xuICAgICAgICAgIHRoaXMudW5rb3duKG9iamVjdCwgb2JqVHlwZSk7XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIGxldCBrZXlzID0gT2JqZWN0LmtleXMob2JqZWN0KTtcbiAgICAgICAgaWYgKG9wdGlvbnMudW5vcmRlcmVkT2JqZWN0cykge1xuICAgICAgICAgIGtleXMgPSBrZXlzLnNvcnQoKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgZXh0cmFLZXlzID0gW107XG4gICAgICAgIGlmIChvcHRpb25zLnJlc3BlY3RUeXBlICE9PSBmYWxzZSAmJiAhaXNOYXRpdmVGdW5jdGlvbihvYmplY3QpKSB7XG4gICAgICAgICAgZXh0cmFLZXlzID0gZGVmYXVsdFByb3RvdHlwZXNLZXlzO1xuICAgICAgICB9XG4gICAgICAgIGlmIChvcHRpb25zLmV4Y2x1ZGVLZXlzKSB7XG4gICAgICAgICAga2V5cyA9IGtleXMuZmlsdGVyKChrZXkpID0+IHtcbiAgICAgICAgICAgIHJldHVybiAhb3B0aW9ucy5leGNsdWRlS2V5cyhrZXkpO1xuICAgICAgICAgIH0pO1xuICAgICAgICAgIGV4dHJhS2V5cyA9IGV4dHJhS2V5cy5maWx0ZXIoKGtleSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuICFvcHRpb25zLmV4Y2x1ZGVLZXlzKGtleSk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgd3JpdGUoXCJvYmplY3Q6XCIgKyAoa2V5cy5sZW5ndGggKyBleHRyYUtleXMubGVuZ3RoKSArIFwiOlwiKTtcbiAgICAgICAgY29uc3QgZGlzcGF0Y2hGb3JLZXkgPSAoa2V5KSA9PiB7XG4gICAgICAgICAgdGhpcy5kaXNwYXRjaChrZXkpO1xuICAgICAgICAgIHdyaXRlKFwiOlwiKTtcbiAgICAgICAgICBpZiAoIW9wdGlvbnMuZXhjbHVkZVZhbHVlcykge1xuICAgICAgICAgICAgdGhpcy5kaXNwYXRjaChvYmplY3Rba2V5XSk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHdyaXRlKFwiLFwiKTtcbiAgICAgICAgfTtcbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2Yga2V5cykge1xuICAgICAgICAgIGRpc3BhdGNoRm9yS2V5KGtleSk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChjb25zdCBrZXkgb2YgZXh0cmFLZXlzKSB7XG4gICAgICAgICAgZGlzcGF0Y2hGb3JLZXkoa2V5KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH0sXG4gICAgYXJyYXkoYXJyLCB1bm9yZGVyZWQpIHtcbiAgICAgIHVub3JkZXJlZCA9IHVub3JkZXJlZCA9PT0gdm9pZCAwID8gb3B0aW9ucy51bm9yZGVyZWRBcnJheXMgIT09IGZhbHNlIDogdW5vcmRlcmVkO1xuICAgICAgd3JpdGUoXCJhcnJheTpcIiArIGFyci5sZW5ndGggKyBcIjpcIik7XG4gICAgICBpZiAoIXVub3JkZXJlZCB8fCBhcnIubGVuZ3RoIDw9IDEpIHtcbiAgICAgICAgZm9yIChjb25zdCBlbnRyeSBvZiBhcnIpIHtcbiAgICAgICAgICB0aGlzLmRpc3BhdGNoKGVudHJ5KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICBjb25zdCBjb250ZXh0QWRkaXRpb25zID0gLyogQF9fUFVSRV9fICovIG5ldyBNYXAoKTtcbiAgICAgIGNvbnN0IGVudHJpZXMgPSBhcnIubWFwKChlbnRyeSkgPT4ge1xuICAgICAgICBjb25zdCBoYXNoZXIgPSBjcmVhdGVIYXNoZXIob3B0aW9ucyk7XG4gICAgICAgIGhhc2hlci5kaXNwYXRjaChlbnRyeSk7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIGhhc2hlci5nZXRDb250ZXh0KCkpIHtcbiAgICAgICAgICBjb250ZXh0QWRkaXRpb25zLnNldChrZXksIHZhbHVlKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaGFzaGVyLnRvU3RyaW5nKCk7XG4gICAgICB9KTtcbiAgICAgIGNvbnRleHQgPSBjb250ZXh0QWRkaXRpb25zO1xuICAgICAgZW50cmllcy5zb3J0KCk7XG4gICAgICByZXR1cm4gdGhpcy5hcnJheShlbnRyaWVzLCBmYWxzZSk7XG4gICAgfSxcbiAgICBkYXRlKGRhdGUpIHtcbiAgICAgIHJldHVybiB3cml0ZShcImRhdGU6XCIgKyBkYXRlLnRvSlNPTigpKTtcbiAgICB9LFxuICAgIHN5bWJvbChzeW0pIHtcbiAgICAgIHJldHVybiB3cml0ZShcInN5bWJvbDpcIiArIHN5bS50b1N0cmluZygpKTtcbiAgICB9LFxuICAgIHVua293bih2YWx1ZSwgdHlwZSkge1xuICAgICAgd3JpdGUodHlwZSk7XG4gICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cbiAgICAgIHdyaXRlKFwiOlwiKTtcbiAgICAgIGlmICh2YWx1ZSAmJiB0eXBlb2YgdmFsdWUuZW50cmllcyA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmFycmF5KFxuICAgICAgICAgIEFycmF5LmZyb20odmFsdWUuZW50cmllcygpKSxcbiAgICAgICAgICB0cnVlXG4gICAgICAgICAgLyogb3JkZXJlZCAqL1xuICAgICAgICApO1xuICAgICAgfVxuICAgIH0sXG4gICAgZXJyb3IoZXJyKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJlcnJvcjpcIiArIGVyci50b1N0cmluZygpKTtcbiAgICB9LFxuICAgIGJvb2xlYW4oYm9vbCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiYm9vbDpcIiArIGJvb2wpO1xuICAgIH0sXG4gICAgc3RyaW5nKHN0cmluZykge1xuICAgICAgd3JpdGUoXCJzdHJpbmc6XCIgKyBzdHJpbmcubGVuZ3RoICsgXCI6XCIpO1xuICAgICAgd3JpdGUoc3RyaW5nKTtcbiAgICB9LFxuICAgIGZ1bmN0aW9uKGZuKSB7XG4gICAgICB3cml0ZShcImZuOlwiKTtcbiAgICAgIGlmIChpc05hdGl2ZUZ1bmN0aW9uKGZuKSkge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKFwiW25hdGl2ZV1cIik7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmRpc3BhdGNoKGZuLnRvU3RyaW5nKCkpO1xuICAgICAgfVxuICAgICAgaWYgKG9wdGlvbnMucmVzcGVjdEZ1bmN0aW9uTmFtZXMgIT09IGZhbHNlKSB7XG4gICAgICAgIHRoaXMuZGlzcGF0Y2goXCJmdW5jdGlvbi1uYW1lOlwiICsgU3RyaW5nKGZuLm5hbWUpKTtcbiAgICAgIH1cbiAgICAgIGlmIChvcHRpb25zLnJlc3BlY3RGdW5jdGlvblByb3BlcnRpZXMpIHtcbiAgICAgICAgdGhpcy5vYmplY3QoZm4pO1xuICAgICAgfVxuICAgIH0sXG4gICAgbnVtYmVyKG51bWJlcikge1xuICAgICAgcmV0dXJuIHdyaXRlKFwibnVtYmVyOlwiICsgbnVtYmVyKTtcbiAgICB9LFxuICAgIHhtbCh4bWwpIHtcbiAgICAgIHJldHVybiB3cml0ZShcInhtbDpcIiArIHhtbC50b1N0cmluZygpKTtcbiAgICB9LFxuICAgIG51bGwoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJOdWxsXCIpO1xuICAgIH0sXG4gICAgdW5kZWZpbmVkKCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiVW5kZWZpbmVkXCIpO1xuICAgIH0sXG4gICAgcmVnZXhwKHJlZ2V4KSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJyZWdleDpcIiArIHJlZ2V4LnRvU3RyaW5nKCkpO1xuICAgIH0sXG4gICAgdWludDhhcnJheShhcnIpIHtcbiAgICAgIHdyaXRlKFwidWludDhhcnJheTpcIik7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpKTtcbiAgICB9LFxuICAgIHVpbnQ4Y2xhbXBlZGFycmF5KGFycikge1xuICAgICAgd3JpdGUoXCJ1aW50OGNsYW1wZWRhcnJheTpcIik7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpKTtcbiAgICB9LFxuICAgIGludDhhcnJheShhcnIpIHtcbiAgICAgIHdyaXRlKFwiaW50OGFycmF5OlwiKTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycikpO1xuICAgIH0sXG4gICAgdWludDE2YXJyYXkoYXJyKSB7XG4gICAgICB3cml0ZShcInVpbnQxNmFycmF5OlwiKTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycikpO1xuICAgIH0sXG4gICAgaW50MTZhcnJheShhcnIpIHtcbiAgICAgIHdyaXRlKFwiaW50MTZhcnJheTpcIik7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpKTtcbiAgICB9LFxuICAgIHVpbnQzMmFycmF5KGFycikge1xuICAgICAgd3JpdGUoXCJ1aW50MzJhcnJheTpcIik7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpKTtcbiAgICB9LFxuICAgIGludDMyYXJyYXkoYXJyKSB7XG4gICAgICB3cml0ZShcImludDMyYXJyYXk6XCIpO1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJyKSk7XG4gICAgfSxcbiAgICBmbG9hdDMyYXJyYXkoYXJyKSB7XG4gICAgICB3cml0ZShcImZsb2F0MzJhcnJheTpcIik7XG4gICAgICByZXR1cm4gdGhpcy5kaXNwYXRjaChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcnIpKTtcbiAgICB9LFxuICAgIGZsb2F0NjRhcnJheShhcnIpIHtcbiAgICAgIHdyaXRlKFwiZmxvYXQ2NGFycmF5OlwiKTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFycikpO1xuICAgIH0sXG4gICAgYXJyYXlidWZmZXIoYXJyKSB7XG4gICAgICB3cml0ZShcImFycmF5YnVmZmVyOlwiKTtcbiAgICAgIHJldHVybiB0aGlzLmRpc3BhdGNoKG5ldyBVaW50OEFycmF5KGFycikpO1xuICAgIH0sXG4gICAgdXJsKHVybCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwidXJsOlwiICsgdXJsLnRvU3RyaW5nKCkpO1xuICAgIH0sXG4gICAgbWFwKG1hcCkge1xuICAgICAgd3JpdGUoXCJtYXA6XCIpO1xuICAgICAgY29uc3QgYXJyID0gWy4uLm1hcF07XG4gICAgICByZXR1cm4gdGhpcy5hcnJheShhcnIsIG9wdGlvbnMudW5vcmRlcmVkU2V0cyAhPT0gZmFsc2UpO1xuICAgIH0sXG4gICAgc2V0KHNldCkge1xuICAgICAgd3JpdGUoXCJzZXQ6XCIpO1xuICAgICAgY29uc3QgYXJyID0gWy4uLnNldF07XG4gICAgICByZXR1cm4gdGhpcy5hcnJheShhcnIsIG9wdGlvbnMudW5vcmRlcmVkU2V0cyAhPT0gZmFsc2UpO1xuICAgIH0sXG4gICAgZmlsZShmaWxlKSB7XG4gICAgICB3cml0ZShcImZpbGU6XCIpO1xuICAgICAgcmV0dXJuIHRoaXMuZGlzcGF0Y2goW2ZpbGUubmFtZSwgZmlsZS5zaXplLCBmaWxlLnR5cGUsIGZpbGUubGFzdE1vZGZpZWRdKTtcbiAgICB9LFxuICAgIGJsb2IoKSB7XG4gICAgICBpZiAob3B0aW9ucy5pZ25vcmVVbmtub3duKSB7XG4gICAgICAgIHJldHVybiB3cml0ZShcIltibG9iXVwiKTtcbiAgICAgIH1cbiAgICAgIHRocm93IG5ldyBFcnJvcihcbiAgICAgICAgJ0hhc2hpbmcgQmxvYiBvYmplY3RzIGlzIGN1cnJlbnRseSBub3Qgc3VwcG9ydGVkXFxuVXNlIFwib3B0aW9ucy5yZXBsYWNlclwiIG9yIFwib3B0aW9ucy5pZ25vcmVVbmtub3duXCJcXG4nXG4gICAgICApO1xuICAgIH0sXG4gICAgZG9td2luZG93KCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiZG9td2luZG93XCIpO1xuICAgIH0sXG4gICAgYmlnaW50KG51bWJlcikge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiYmlnaW50OlwiICsgbnVtYmVyLnRvU3RyaW5nKCkpO1xuICAgIH0sXG4gICAgLyogTm9kZS5qcyBzdGFuZGFyZCBuYXRpdmUgb2JqZWN0cyAqL1xuICAgIHByb2Nlc3MoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJwcm9jZXNzXCIpO1xuICAgIH0sXG4gICAgdGltZXIoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJ0aW1lclwiKTtcbiAgICB9LFxuICAgIHBpcGUoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJwaXBlXCIpO1xuICAgIH0sXG4gICAgdGNwKCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwidGNwXCIpO1xuICAgIH0sXG4gICAgdWRwKCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwidWRwXCIpO1xuICAgIH0sXG4gICAgdHR5KCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwidHR5XCIpO1xuICAgIH0sXG4gICAgc3RhdHdhdGNoZXIoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJzdGF0d2F0Y2hlclwiKTtcbiAgICB9LFxuICAgIHNlY3VyZWNvbnRleHQoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJzZWN1cmVjb250ZXh0XCIpO1xuICAgIH0sXG4gICAgY29ubmVjdGlvbigpIHtcbiAgICAgIHJldHVybiB3cml0ZShcImNvbm5lY3Rpb25cIik7XG4gICAgfSxcbiAgICB6bGliKCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiemxpYlwiKTtcbiAgICB9LFxuICAgIGNvbnRleHQoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJjb250ZXh0XCIpO1xuICAgIH0sXG4gICAgbm9kZXNjcmlwdCgpIHtcbiAgICAgIHJldHVybiB3cml0ZShcIm5vZGVzY3JpcHRcIik7XG4gICAgfSxcbiAgICBodHRwcGFyc2VyKCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiaHR0cHBhcnNlclwiKTtcbiAgICB9LFxuICAgIGRhdGF2aWV3KCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiZGF0YXZpZXdcIik7XG4gICAgfSxcbiAgICBzaWduYWwoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJzaWduYWxcIik7XG4gICAgfSxcbiAgICBmc2V2ZW50KCkge1xuICAgICAgcmV0dXJuIHdyaXRlKFwiZnNldmVudFwiKTtcbiAgICB9LFxuICAgIHRsc3dyYXAoKSB7XG4gICAgICByZXR1cm4gd3JpdGUoXCJ0bHN3cmFwXCIpO1xuICAgIH1cbiAgfTtcbn1cbmNvbnN0IG5hdGl2ZUZ1bmMgPSBcIltuYXRpdmUgY29kZV0gfVwiO1xuY29uc3QgbmF0aXZlRnVuY0xlbmd0aCA9IG5hdGl2ZUZ1bmMubGVuZ3RoO1xuZnVuY3Rpb24gaXNOYXRpdmVGdW5jdGlvbihmKSB7XG4gIGlmICh0eXBlb2YgZiAhPT0gXCJmdW5jdGlvblwiKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiBGdW5jdGlvbi5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChmKS5zbGljZSgtbmF0aXZlRnVuY0xlbmd0aCkgPT09IG5hdGl2ZUZ1bmM7XG59XG5cbmZ1bmN0aW9uIGRpZmYob2JqMSwgb2JqMiwgb3B0cyA9IHt9KSB7XG4gIGNvbnN0IGgxID0gX3RvSGFzaGVkT2JqZWN0KG9iajEsIG9wdHMpO1xuICBjb25zdCBoMiA9IF90b0hhc2hlZE9iamVjdChvYmoyLCBvcHRzKTtcbiAgcmV0dXJuIF9kaWZmKGgxLCBoMiwgb3B0cyk7XG59XG5mdW5jdGlvbiBfZGlmZihoMSwgaDIsIG9wdHMgPSB7fSkge1xuICBjb25zdCBkaWZmcyA9IFtdO1xuICBjb25zdCBhbGxQcm9wcyA9IC8qIEBfX1BVUkVfXyAqLyBuZXcgU2V0KFtcbiAgICAuLi5PYmplY3Qua2V5cyhoMS5wcm9wcyB8fCB7fSksXG4gICAgLi4uT2JqZWN0LmtleXMoaDIucHJvcHMgfHwge30pXG4gIF0pO1xuICBpZiAoaDEucHJvcHMgJiYgaDIucHJvcHMpIHtcbiAgICBmb3IgKGNvbnN0IHByb3Agb2YgYWxsUHJvcHMpIHtcbiAgICAgIGNvbnN0IHAxID0gaDEucHJvcHNbcHJvcF07XG4gICAgICBjb25zdCBwMiA9IGgyLnByb3BzW3Byb3BdO1xuICAgICAgaWYgKHAxICYmIHAyKSB7XG4gICAgICAgIGRpZmZzLnB1c2goLi4uX2RpZmYoaDEucHJvcHM/Lltwcm9wXSwgaDIucHJvcHM/Lltwcm9wXSwgb3B0cykpO1xuICAgICAgfSBlbHNlIGlmIChwMSB8fCBwMikge1xuICAgICAgICBkaWZmcy5wdXNoKFxuICAgICAgICAgIG5ldyBEaWZmRW50cnkoKHAyIHx8IHAxKS5rZXksIHAxID8gXCJyZW1vdmVkXCIgOiBcImFkZGVkXCIsIHAyLCBwMSlcbiAgICAgICAgKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGFsbFByb3BzLnNpemUgPT09IDAgJiYgaDEuaGFzaCAhPT0gaDIuaGFzaCkge1xuICAgIGRpZmZzLnB1c2gobmV3IERpZmZFbnRyeSgoaDIgfHwgaDEpLmtleSwgXCJjaGFuZ2VkXCIsIGgyLCBoMSkpO1xuICB9XG4gIHJldHVybiBkaWZmcztcbn1cbmZ1bmN0aW9uIF90b0hhc2hlZE9iamVjdChvYmosIG9wdHMsIGtleSA9IFwiXCIpIHtcbiAgaWYgKG9iaiAmJiB0eXBlb2Ygb2JqICE9PSBcIm9iamVjdFwiKSB7XG4gICAgcmV0dXJuIG5ldyBEaWZmSGFzaGVkT2JqZWN0KGtleSwgb2JqLCBvYmplY3RIYXNoKG9iaiwgb3B0cykpO1xuICB9XG4gIGNvbnN0IHByb3BzID0ge307XG4gIGNvbnN0IGhhc2hlcyA9IFtdO1xuICBmb3IgKGNvbnN0IF9rZXkgaW4gb2JqKSB7XG4gICAgcHJvcHNbX2tleV0gPSBfdG9IYXNoZWRPYmplY3QoXG4gICAgICBvYmpbX2tleV0sXG4gICAgICBvcHRzLFxuICAgICAga2V5ID8gYCR7a2V5fS4ke19rZXl9YCA6IF9rZXlcbiAgICApO1xuICAgIGhhc2hlcy5wdXNoKHByb3BzW19rZXldLmhhc2gpO1xuICB9XG4gIHJldHVybiBuZXcgRGlmZkhhc2hlZE9iamVjdChrZXksIG9iaiwgYHske2hhc2hlcy5qb2luKFwiOlwiKX19YCwgcHJvcHMpO1xufVxuY2xhc3MgRGlmZkVudHJ5IHtcbiAgY29uc3RydWN0b3Ioa2V5LCB0eXBlLCBuZXdWYWx1ZSwgb2xkVmFsdWUpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgIHRoaXMubmV3VmFsdWUgPSBuZXdWYWx1ZTtcbiAgICB0aGlzLm9sZFZhbHVlID0gb2xkVmFsdWU7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMudG9KU09OKCk7XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIHN3aXRjaCAodGhpcy50eXBlKSB7XG4gICAgICBjYXNlIFwiYWRkZWRcIjoge1xuICAgICAgICByZXR1cm4gYEFkZGVkICAgXFxgJHt0aGlzLmtleX1cXGBgO1xuICAgICAgfVxuICAgICAgY2FzZSBcInJlbW92ZWRcIjoge1xuICAgICAgICByZXR1cm4gYFJlbW92ZWQgXFxgJHt0aGlzLmtleX1cXGBgO1xuICAgICAgfVxuICAgICAgY2FzZSBcImNoYW5nZWRcIjoge1xuICAgICAgICByZXR1cm4gYENoYW5nZWQgXFxgJHt0aGlzLmtleX1cXGAgZnJvbSBcXGAke3RoaXMub2xkVmFsdWU/LnRvU3RyaW5nKCkgfHwgXCItXCJ9XFxgIHRvIFxcYCR7dGhpcy5uZXdWYWx1ZS50b1N0cmluZygpfVxcYGA7XG4gICAgICB9XG4gICAgfVxuICB9XG59XG5jbGFzcyBEaWZmSGFzaGVkT2JqZWN0IHtcbiAgY29uc3RydWN0b3Ioa2V5LCB2YWx1ZSwgaGFzaCwgcHJvcHMpIHtcbiAgICB0aGlzLmtleSA9IGtleTtcbiAgICB0aGlzLnZhbHVlID0gdmFsdWU7XG4gICAgdGhpcy5oYXNoID0gaGFzaDtcbiAgICB0aGlzLnByb3BzID0gcHJvcHM7XG4gIH1cbiAgdG9TdHJpbmcoKSB7XG4gICAgaWYgKHRoaXMucHJvcHMpIHtcbiAgICAgIHJldHVybiBgeyR7T2JqZWN0LmtleXModGhpcy5wcm9wcykuam9pbihcIixcIil9fWA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBKU09OLnN0cmluZ2lmeSh0aGlzLnZhbHVlKTtcbiAgICB9XG4gIH1cbiAgdG9KU09OKCkge1xuICAgIGNvbnN0IGsgPSB0aGlzLmtleSB8fCBcIi5cIjtcbiAgICBpZiAodGhpcy5wcm9wcykge1xuICAgICAgcmV0dXJuIGAke2t9KHske09iamVjdC5rZXlzKHRoaXMucHJvcHMpLmpvaW4oXCIsXCIpfX0pYDtcbiAgICB9XG4gICAgcmV0dXJuIGAke2t9KCR7dGhpcy52YWx1ZX0pYDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0VxdWFsKG9iamVjdDEsIG9iamVjdDIsIGhhc2hPcHRpb25zID0ge30pIHtcbiAgaWYgKG9iamVjdDEgPT09IG9iamVjdDIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICBpZiAob2JqZWN0SGFzaChvYmplY3QxLCBoYXNoT3B0aW9ucykgPT09IG9iamVjdEhhc2gob2JqZWN0MiwgaGFzaE9wdGlvbnMpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufVxuXG5leHBvcnQgeyBkaWZmIGFzIGQsIGlzRXF1YWwgYXMgaSwgb2JqZWN0SGFzaCBhcyBvIH07XG4iLCAiaW1wb3J0IHsgbyBhcyBvYmplY3RIYXNoIH0gZnJvbSAnLi9zaGFyZWQvb2hhc2guQnZTTVp6bGkubWpzJztcbmV4cG9ydCB7IGQgYXMgZGlmZiwgaSBhcyBpc0VxdWFsIH0gZnJvbSAnLi9zaGFyZWQvb2hhc2guQnZTTVp6bGkubWpzJztcblxuY2xhc3MgV29yZEFycmF5IHtcbiAgd29yZHM7XG4gIHNpZ0J5dGVzO1xuICBjb25zdHJ1Y3Rvcih3b3Jkcywgc2lnQnl0ZXMpIHtcbiAgICB3b3JkcyA9IHRoaXMud29yZHMgPSB3b3JkcyB8fCBbXTtcbiAgICB0aGlzLnNpZ0J5dGVzID0gc2lnQnl0ZXMgPT09IHZvaWQgMCA/IHdvcmRzLmxlbmd0aCAqIDQgOiBzaWdCeXRlcztcbiAgfVxuICB0b1N0cmluZyhlbmNvZGVyKSB7XG4gICAgcmV0dXJuIChlbmNvZGVyIHx8IEhleCkuc3RyaW5naWZ5KHRoaXMpO1xuICB9XG4gIGNvbmNhdCh3b3JkQXJyYXkpIHtcbiAgICB0aGlzLmNsYW1wKCk7XG4gICAgaWYgKHRoaXMuc2lnQnl0ZXMgJSA0KSB7XG4gICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRBcnJheS5zaWdCeXRlczsgaSsrKSB7XG4gICAgICAgIGNvbnN0IHRoYXRCeXRlID0gd29yZEFycmF5LndvcmRzW2kgPj4+IDJdID4+PiAyNCAtIGkgJSA0ICogOCAmIDI1NTtcbiAgICAgICAgdGhpcy53b3Jkc1t0aGlzLnNpZ0J5dGVzICsgaSA+Pj4gMl0gfD0gdGhhdEJ5dGUgPDwgMjQgLSAodGhpcy5zaWdCeXRlcyArIGkpICUgNCAqIDg7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgd29yZEFycmF5LnNpZ0J5dGVzOyBqICs9IDQpIHtcbiAgICAgICAgdGhpcy53b3Jkc1t0aGlzLnNpZ0J5dGVzICsgaiA+Pj4gMl0gPSB3b3JkQXJyYXkud29yZHNbaiA+Pj4gMl07XG4gICAgICB9XG4gICAgfVxuICAgIHRoaXMuc2lnQnl0ZXMgKz0gd29yZEFycmF5LnNpZ0J5dGVzO1xuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIGNsYW1wKCkge1xuICAgIHRoaXMud29yZHNbdGhpcy5zaWdCeXRlcyA+Pj4gMl0gJj0gNDI5NDk2NzI5NSA8PCAzMiAtIHRoaXMuc2lnQnl0ZXMgJSA0ICogODtcbiAgICB0aGlzLndvcmRzLmxlbmd0aCA9IE1hdGguY2VpbCh0aGlzLnNpZ0J5dGVzIC8gNCk7XG4gIH1cbiAgY2xvbmUoKSB7XG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkoWy4uLnRoaXMud29yZHNdKTtcbiAgfVxufVxuY29uc3QgSGV4ID0ge1xuICBzdHJpbmdpZnkod29yZEFycmF5KSB7XG4gICAgY29uc3QgaGV4Q2hhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRBcnJheS5zaWdCeXRlczsgaSsrKSB7XG4gICAgICBjb25zdCBiaXRlID0gd29yZEFycmF5LndvcmRzW2kgPj4+IDJdID4+PiAyNCAtIGkgJSA0ICogOCAmIDI1NTtcbiAgICAgIGhleENoYXJzLnB1c2goKGJpdGUgPj4+IDQpLnRvU3RyaW5nKDE2KSwgKGJpdGUgJiAxNSkudG9TdHJpbmcoMTYpKTtcbiAgICB9XG4gICAgcmV0dXJuIGhleENoYXJzLmpvaW4oXCJcIik7XG4gIH1cbn07XG5jb25zdCBCYXNlNjQgPSB7XG4gIHN0cmluZ2lmeSh3b3JkQXJyYXkpIHtcbiAgICBjb25zdCBrZXlTdHIgPSBcIkFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXowMTIzNDU2Nzg5XCI7XG4gICAgY29uc3QgYmFzZTY0Q2hhcnMgPSBbXTtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdvcmRBcnJheS5zaWdCeXRlczsgaSArPSAzKSB7XG4gICAgICBjb25zdCBieXRlMSA9IHdvcmRBcnJheS53b3Jkc1tpID4+PiAyXSA+Pj4gMjQgLSBpICUgNCAqIDggJiAyNTU7XG4gICAgICBjb25zdCBieXRlMiA9IHdvcmRBcnJheS53b3Jkc1tpICsgMSA+Pj4gMl0gPj4+IDI0IC0gKGkgKyAxKSAlIDQgKiA4ICYgMjU1O1xuICAgICAgY29uc3QgYnl0ZTMgPSB3b3JkQXJyYXkud29yZHNbaSArIDIgPj4+IDJdID4+PiAyNCAtIChpICsgMikgJSA0ICogOCAmIDI1NTtcbiAgICAgIGNvbnN0IHRyaXBsZXQgPSBieXRlMSA8PCAxNiB8IGJ5dGUyIDw8IDggfCBieXRlMztcbiAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgNCAmJiBpICogOCArIGogKiA2IDwgd29yZEFycmF5LnNpZ0J5dGVzICogODsgaisrKSB7XG4gICAgICAgIGJhc2U2NENoYXJzLnB1c2goa2V5U3RyLmNoYXJBdCh0cmlwbGV0ID4+PiA2ICogKDMgLSBqKSAmIDYzKSk7XG4gICAgICB9XG4gICAgfVxuICAgIHJldHVybiBiYXNlNjRDaGFycy5qb2luKFwiXCIpO1xuICB9XG59O1xuY29uc3QgTGF0aW4xID0ge1xuICBwYXJzZShsYXRpbjFTdHIpIHtcbiAgICBjb25zdCBsYXRpbjFTdHJMZW5ndGggPSBsYXRpbjFTdHIubGVuZ3RoO1xuICAgIGNvbnN0IHdvcmRzID0gW107XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXRpbjFTdHJMZW5ndGg7IGkrKykge1xuICAgICAgd29yZHNbaSA+Pj4gMl0gfD0gKGxhdGluMVN0ci5jaGFyQ29kZUF0KGkpICYgMjU1KSA8PCAyNCAtIGkgJSA0ICogODtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkod29yZHMsIGxhdGluMVN0ckxlbmd0aCk7XG4gIH1cbn07XG5jb25zdCBVdGY4ID0ge1xuICBwYXJzZSh1dGY4U3RyKSB7XG4gICAgcmV0dXJuIExhdGluMS5wYXJzZSh1bmVzY2FwZShlbmNvZGVVUklDb21wb25lbnQodXRmOFN0cikpKTtcbiAgfVxufTtcbmNsYXNzIEJ1ZmZlcmVkQmxvY2tBbGdvcml0aG0ge1xuICBfZGF0YSA9IG5ldyBXb3JkQXJyYXkoKTtcbiAgX25EYXRhQnl0ZXMgPSAwO1xuICBfbWluQnVmZmVyU2l6ZSA9IDA7XG4gIGJsb2NrU2l6ZSA9IDUxMiAvIDMyO1xuICByZXNldCgpIHtcbiAgICB0aGlzLl9kYXRhID0gbmV3IFdvcmRBcnJheSgpO1xuICAgIHRoaXMuX25EYXRhQnl0ZXMgPSAwO1xuICB9XG4gIF9hcHBlbmQoZGF0YSkge1xuICAgIGlmICh0eXBlb2YgZGF0YSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgZGF0YSA9IFV0ZjgucGFyc2UoZGF0YSk7XG4gICAgfVxuICAgIHRoaXMuX2RhdGEuY29uY2F0KGRhdGEpO1xuICAgIHRoaXMuX25EYXRhQnl0ZXMgKz0gZGF0YS5zaWdCeXRlcztcbiAgfVxuICBfZG9Qcm9jZXNzQmxvY2soX2RhdGFXb3JkcywgX29mZnNldCkge1xuICB9XG4gIF9wcm9jZXNzKGRvRmx1c2gpIHtcbiAgICBsZXQgcHJvY2Vzc2VkV29yZHM7XG4gICAgbGV0IG5CbG9ja3NSZWFkeSA9IHRoaXMuX2RhdGEuc2lnQnl0ZXMgLyAodGhpcy5ibG9ja1NpemUgKiA0KTtcbiAgICBpZiAoZG9GbHVzaCkge1xuICAgICAgbkJsb2Nrc1JlYWR5ID0gTWF0aC5jZWlsKG5CbG9ja3NSZWFkeSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG5CbG9ja3NSZWFkeSA9IE1hdGgubWF4KChuQmxvY2tzUmVhZHkgfCAwKSAtIHRoaXMuX21pbkJ1ZmZlclNpemUsIDApO1xuICAgIH1cbiAgICBjb25zdCBuV29yZHNSZWFkeSA9IG5CbG9ja3NSZWFkeSAqIHRoaXMuYmxvY2tTaXplO1xuICAgIGNvbnN0IG5CeXRlc1JlYWR5ID0gTWF0aC5taW4obldvcmRzUmVhZHkgKiA0LCB0aGlzLl9kYXRhLnNpZ0J5dGVzKTtcbiAgICBpZiAobldvcmRzUmVhZHkpIHtcbiAgICAgIGZvciAobGV0IG9mZnNldCA9IDA7IG9mZnNldCA8IG5Xb3Jkc1JlYWR5OyBvZmZzZXQgKz0gdGhpcy5ibG9ja1NpemUpIHtcbiAgICAgICAgdGhpcy5fZG9Qcm9jZXNzQmxvY2sodGhpcy5fZGF0YS53b3Jkcywgb2Zmc2V0KTtcbiAgICAgIH1cbiAgICAgIHByb2Nlc3NlZFdvcmRzID0gdGhpcy5fZGF0YS53b3Jkcy5zcGxpY2UoMCwgbldvcmRzUmVhZHkpO1xuICAgICAgdGhpcy5fZGF0YS5zaWdCeXRlcyAtPSBuQnl0ZXNSZWFkeTtcbiAgICB9XG4gICAgcmV0dXJuIG5ldyBXb3JkQXJyYXkocHJvY2Vzc2VkV29yZHMsIG5CeXRlc1JlYWR5KTtcbiAgfVxufVxuY2xhc3MgSGFzaGVyIGV4dGVuZHMgQnVmZmVyZWRCbG9ja0FsZ29yaXRobSB7XG4gIHVwZGF0ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgdGhpcy5fYXBwZW5kKG1lc3NhZ2VVcGRhdGUpO1xuICAgIHRoaXMuX3Byb2Nlc3MoKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICBmaW5hbGl6ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgaWYgKG1lc3NhZ2VVcGRhdGUpIHtcbiAgICAgIHRoaXMuX2FwcGVuZChtZXNzYWdlVXBkYXRlKTtcbiAgICB9XG4gIH1cbn1cblxuY29uc3QgSCA9IFtcbiAgMTc3OTAzMzcwMyxcbiAgLTExNTA4MzMwMTksXG4gIDEwMTM5MDQyNDIsXG4gIC0xNTIxNDg2NTM0LFxuICAxMzU5ODkzMTE5LFxuICAtMTY5NDE0NDM3MixcbiAgNTI4NzM0NjM1LFxuICAxNTQxNDU5MjI1XG5dO1xuY29uc3QgSyA9IFtcbiAgMTExNjM1MjQwOCxcbiAgMTg5OTQ0NzQ0MSxcbiAgLTEyNDU2NDM4MjUsXG4gIC0zNzM5NTc3MjMsXG4gIDk2MTk4NzE2MyxcbiAgMTUwODk3MDk5MyxcbiAgLTE4NDEzMzE1NDgsXG4gIC0xNDI0MjA0MDc1LFxuICAtNjcwNTg2MjE2LFxuICAzMTA1OTg0MDEsXG4gIDYwNzIyNTI3OCxcbiAgMTQyNjg4MTk4NyxcbiAgMTkyNTA3ODM4OCxcbiAgLTIxMzI4ODkwOTAsXG4gIC0xNjgwMDc5MTkzLFxuICAtMTA0Njc0NDcxNixcbiAgLTQ1OTU3Njg5NSxcbiAgLTI3Mjc0MjUyMixcbiAgMjY0MzQ3MDc4LFxuICA2MDQ4MDc2MjgsXG4gIDc3MDI1NTk4MyxcbiAgMTI0OTE1MDEyMixcbiAgMTU1NTA4MTY5MixcbiAgMTk5NjA2NDk4NixcbiAgLTE3NDA3NDY0MTQsXG4gIC0xNDczMTMyOTQ3LFxuICAtMTM0MTk3MDQ4OCxcbiAgLTEwODQ2NTM2MjUsXG4gIC05NTgzOTU0MDUsXG4gIC03MTA0Mzg1ODUsXG4gIDExMzkyNjk5MyxcbiAgMzM4MjQxODk1LFxuICA2NjYzMDcyMDUsXG4gIDc3MzUyOTkxMixcbiAgMTI5NDc1NzM3MixcbiAgMTM5NjE4MjI5MSxcbiAgMTY5NTE4MzcwMCxcbiAgMTk4NjY2MTA1MSxcbiAgLTIxMTc5NDA5NDYsXG4gIC0xODM4MDExMjU5LFxuICAtMTU2NDQ4MTM3NSxcbiAgLTE0NzQ2NjQ4ODUsXG4gIC0xMDM1MjM2NDk2LFxuICAtOTQ5MjAyNTI1LFxuICAtNzc4OTAxNDc5LFxuICAtNjk0NjE0NDkyLFxuICAtMjAwMzk1Mzg3LFxuICAyNzU0MjMzNDQsXG4gIDQzMDIyNzczNCxcbiAgNTA2OTQ4NjE2LFxuICA2NTkwNjA1NTYsXG4gIDg4Mzk5Nzg3NyxcbiAgOTU4MTM5NTcxLFxuICAxMzIyODIyMjE4LFxuICAxNTM3MDAyMDYzLFxuICAxNzQ3ODczNzc5LFxuICAxOTU1NTYyMjIyLFxuICAyMDI0MTA0ODE1LFxuICAtMjA2NzIzNjg0NCxcbiAgLTE5MzMxMTQ4NzIsXG4gIC0xODY2NTMwODIyLFxuICAtMTUzODIzMzEwOSxcbiAgLTEwOTA5MzU4MTcsXG4gIC05NjU2NDE5OThcbl07XG5jb25zdCBXID0gW107XG5jbGFzcyBTSEEyNTYgZXh0ZW5kcyBIYXNoZXIge1xuICBfaGFzaCA9IG5ldyBXb3JkQXJyYXkoWy4uLkhdKTtcbiAgLyoqXG4gICAqIFJlc2V0cyB0aGUgaW50ZXJuYWwgc3RhdGUgb2YgdGhlIGhhc2ggb2JqZWN0IHRvIGluaXRpYWwgdmFsdWVzLlxuICAgKi9cbiAgcmVzZXQoKSB7XG4gICAgc3VwZXIucmVzZXQoKTtcbiAgICB0aGlzLl9oYXNoID0gbmV3IFdvcmRBcnJheShbLi4uSF0pO1xuICB9XG4gIF9kb1Byb2Nlc3NCbG9jayhNLCBvZmZzZXQpIHtcbiAgICBjb25zdCBIMiA9IHRoaXMuX2hhc2gud29yZHM7XG4gICAgbGV0IGEgPSBIMlswXTtcbiAgICBsZXQgYiA9IEgyWzFdO1xuICAgIGxldCBjID0gSDJbMl07XG4gICAgbGV0IGQgPSBIMlszXTtcbiAgICBsZXQgZSA9IEgyWzRdO1xuICAgIGxldCBmID0gSDJbNV07XG4gICAgbGV0IGcgPSBIMls2XTtcbiAgICBsZXQgaCA9IEgyWzddO1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNjQ7IGkrKykge1xuICAgICAgaWYgKGkgPCAxNikge1xuICAgICAgICBXW2ldID0gTVtvZmZzZXQgKyBpXSB8IDA7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBjb25zdCBnYW1tYTB4ID0gV1tpIC0gMTVdO1xuICAgICAgICBjb25zdCBnYW1tYTAgPSAoZ2FtbWEweCA8PCAyNSB8IGdhbW1hMHggPj4+IDcpIF4gKGdhbW1hMHggPDwgMTQgfCBnYW1tYTB4ID4+PiAxOCkgXiBnYW1tYTB4ID4+PiAzO1xuICAgICAgICBjb25zdCBnYW1tYTF4ID0gV1tpIC0gMl07XG4gICAgICAgIGNvbnN0IGdhbW1hMSA9IChnYW1tYTF4IDw8IDE1IHwgZ2FtbWExeCA+Pj4gMTcpIF4gKGdhbW1hMXggPDwgMTMgfCBnYW1tYTF4ID4+PiAxOSkgXiBnYW1tYTF4ID4+PiAxMDtcbiAgICAgICAgV1tpXSA9IGdhbW1hMCArIFdbaSAtIDddICsgZ2FtbWExICsgV1tpIC0gMTZdO1xuICAgICAgfVxuICAgICAgY29uc3QgY2ggPSBlICYgZiBeIH5lICYgZztcbiAgICAgIGNvbnN0IG1haiA9IGEgJiBiIF4gYSAmIGMgXiBiICYgYztcbiAgICAgIGNvbnN0IHNpZ21hMCA9IChhIDw8IDMwIHwgYSA+Pj4gMikgXiAoYSA8PCAxOSB8IGEgPj4+IDEzKSBeIChhIDw8IDEwIHwgYSA+Pj4gMjIpO1xuICAgICAgY29uc3Qgc2lnbWExID0gKGUgPDwgMjYgfCBlID4+PiA2KSBeIChlIDw8IDIxIHwgZSA+Pj4gMTEpIF4gKGUgPDwgNyB8IGUgPj4+IDI1KTtcbiAgICAgIGNvbnN0IHQxID0gaCArIHNpZ21hMSArIGNoICsgS1tpXSArIFdbaV07XG4gICAgICBjb25zdCB0MiA9IHNpZ21hMCArIG1hajtcbiAgICAgIGggPSBnO1xuICAgICAgZyA9IGY7XG4gICAgICBmID0gZTtcbiAgICAgIGUgPSBkICsgdDEgfCAwO1xuICAgICAgZCA9IGM7XG4gICAgICBjID0gYjtcbiAgICAgIGIgPSBhO1xuICAgICAgYSA9IHQxICsgdDIgfCAwO1xuICAgIH1cbiAgICBIMlswXSA9IEgyWzBdICsgYSB8IDA7XG4gICAgSDJbMV0gPSBIMlsxXSArIGIgfCAwO1xuICAgIEgyWzJdID0gSDJbMl0gKyBjIHwgMDtcbiAgICBIMlszXSA9IEgyWzNdICsgZCB8IDA7XG4gICAgSDJbNF0gPSBIMls0XSArIGUgfCAwO1xuICAgIEgyWzVdID0gSDJbNV0gKyBmIHwgMDtcbiAgICBIMls2XSA9IEgyWzZdICsgZyB8IDA7XG4gICAgSDJbN10gPSBIMls3XSArIGggfCAwO1xuICB9XG4gIC8qKlxuICAgKiBGaW5pc2hlcyB0aGUgaGFzaCBjYWxjdWxhdGlvbiBhbmQgcmV0dXJucyB0aGUgaGFzaCBhcyBhIFdvcmRBcnJheS5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2VVcGRhdGUgLSBBZGRpdGlvbmFsIG1lc3NhZ2UgY29udGVudCB0byBpbmNsdWRlIGluIHRoZSBoYXNoLlxuICAgKiBAcmV0dXJucyB7V29yZEFycmF5fSBUaGUgZmluYWxpc2VkIGhhc2ggYXMgYSBXb3JkQXJyYXkuXG4gICAqL1xuICBmaW5hbGl6ZShtZXNzYWdlVXBkYXRlKSB7XG4gICAgc3VwZXIuZmluYWxpemUobWVzc2FnZVVwZGF0ZSk7XG4gICAgY29uc3QgbkJpdHNUb3RhbCA9IHRoaXMuX25EYXRhQnl0ZXMgKiA4O1xuICAgIGNvbnN0IG5CaXRzTGVmdCA9IHRoaXMuX2RhdGEuc2lnQnl0ZXMgKiA4O1xuICAgIHRoaXMuX2RhdGEud29yZHNbbkJpdHNMZWZ0ID4+PiA1XSB8PSAxMjggPDwgMjQgLSBuQml0c0xlZnQgJSAzMjtcbiAgICB0aGlzLl9kYXRhLndvcmRzWyhuQml0c0xlZnQgKyA2NCA+Pj4gOSA8PCA0KSArIDE0XSA9IE1hdGguZmxvb3IoXG4gICAgICBuQml0c1RvdGFsIC8gNDI5NDk2NzI5NlxuICAgICk7XG4gICAgdGhpcy5fZGF0YS53b3Jkc1sobkJpdHNMZWZ0ICsgNjQgPj4+IDkgPDwgNCkgKyAxNV0gPSBuQml0c1RvdGFsO1xuICAgIHRoaXMuX2RhdGEuc2lnQnl0ZXMgPSB0aGlzLl9kYXRhLndvcmRzLmxlbmd0aCAqIDQ7XG4gICAgdGhpcy5fcHJvY2VzcygpO1xuICAgIHJldHVybiB0aGlzLl9oYXNoO1xuICB9XG59XG5mdW5jdGlvbiBzaGEyNTYobWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFNIQTI1NigpLmZpbmFsaXplKG1lc3NhZ2UpLnRvU3RyaW5nKCk7XG59XG5mdW5jdGlvbiBzaGEyNTZiYXNlNjQobWVzc2FnZSkge1xuICByZXR1cm4gbmV3IFNIQTI1NigpLmZpbmFsaXplKG1lc3NhZ2UpLnRvU3RyaW5nKEJhc2U2NCk7XG59XG5cbmZ1bmN0aW9uIGhhc2gob2JqZWN0LCBvcHRpb25zID0ge30pIHtcbiAgY29uc3QgaGFzaGVkID0gdHlwZW9mIG9iamVjdCA9PT0gXCJzdHJpbmdcIiA/IG9iamVjdCA6IG9iamVjdEhhc2gob2JqZWN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIHNoYTI1NmJhc2U2NChoYXNoZWQpLnNsaWNlKDAsIDEwKTtcbn1cblxuZnVuY3Rpb24gbXVybXVySGFzaChrZXksIHNlZWQgPSAwKSB7XG4gIGlmICh0eXBlb2Yga2V5ID09PSBcInN0cmluZ1wiKSB7XG4gICAga2V5ID0gY3JlYXRlQnVmZmVyKGtleSk7XG4gIH1cbiAgbGV0IGkgPSAwO1xuICBsZXQgaDEgPSBzZWVkO1xuICBsZXQgazE7XG4gIGxldCBoMWI7XG4gIGNvbnN0IHJlbWFpbmRlciA9IGtleS5sZW5ndGggJiAzO1xuICBjb25zdCBieXRlcyA9IGtleS5sZW5ndGggLSByZW1haW5kZXI7XG4gIGNvbnN0IGMxID0gMzQzMjkxODM1MztcbiAgY29uc3QgYzIgPSA0NjE4NDU5MDc7XG4gIHdoaWxlIChpIDwgYnl0ZXMpIHtcbiAgICBrMSA9IGtleVtpXSAmIDI1NSB8IChrZXlbKytpXSAmIDI1NSkgPDwgOCB8IChrZXlbKytpXSAmIDI1NSkgPDwgMTYgfCAoa2V5WysraV0gJiAyNTUpIDw8IDI0O1xuICAgICsraTtcbiAgICBrMSA9IChrMSAmIDY1NTM1KSAqIGMxICsgKCgoazEgPj4+IDE2KSAqIGMxICYgNjU1MzUpIDw8IDE2KSAmIDQyOTQ5NjcyOTU7XG4gICAgazEgPSBrMSA8PCAxNSB8IGsxID4+PiAxNztcbiAgICBrMSA9IChrMSAmIDY1NTM1KSAqIGMyICsgKCgoazEgPj4+IDE2KSAqIGMyICYgNjU1MzUpIDw8IDE2KSAmIDQyOTQ5NjcyOTU7XG4gICAgaDEgXj0gazE7XG4gICAgaDEgPSBoMSA8PCAxMyB8IGgxID4+PiAxOTtcbiAgICBoMWIgPSAoaDEgJiA2NTUzNSkgKiA1ICsgKCgoaDEgPj4+IDE2KSAqIDUgJiA2NTUzNSkgPDwgMTYpICYgNDI5NDk2NzI5NTtcbiAgICBoMSA9IChoMWIgJiA2NTUzNSkgKyAyNzQ5MiArICgoKGgxYiA+Pj4gMTYpICsgNTg5NjQgJiA2NTUzNSkgPDwgMTYpO1xuICB9XG4gIGsxID0gMDtcbiAgc3dpdGNoIChyZW1haW5kZXIpIHtcbiAgICBjYXNlIDM6IHtcbiAgICAgIGsxIF49IChrZXlbaSArIDJdICYgMjU1KSA8PCAxNjtcbiAgICB9XG4gICAgY2FzZSAyOiB7XG4gICAgICBrMSBePSAoa2V5W2kgKyAxXSAmIDI1NSkgPDwgODtcbiAgICB9XG4gICAgY2FzZSAxOiB7XG4gICAgICBrMSBePSBrZXlbaV0gJiAyNTU7XG4gICAgICBrMSA9IChrMSAmIDY1NTM1KSAqIGMxICsgKCgoazEgPj4+IDE2KSAqIGMxICYgNjU1MzUpIDw8IDE2KSAmIDQyOTQ5NjcyOTU7XG4gICAgICBrMSA9IGsxIDw8IDE1IHwgazEgPj4+IDE3O1xuICAgICAgazEgPSAoazEgJiA2NTUzNSkgKiBjMiArICgoKGsxID4+PiAxNikgKiBjMiAmIDY1NTM1KSA8PCAxNikgJiA0Mjk0OTY3Mjk1O1xuICAgICAgaDEgXj0gazE7XG4gICAgfVxuICB9XG4gIGgxIF49IGtleS5sZW5ndGg7XG4gIGgxIF49IGgxID4+PiAxNjtcbiAgaDEgPSAoaDEgJiA2NTUzNSkgKiAyMjQ2ODIyNTA3ICsgKCgoaDEgPj4+IDE2KSAqIDIyNDY4MjI1MDcgJiA2NTUzNSkgPDwgMTYpICYgNDI5NDk2NzI5NTtcbiAgaDEgXj0gaDEgPj4+IDEzO1xuICBoMSA9IChoMSAmIDY1NTM1KSAqIDMyNjY0ODk5MDkgKyAoKChoMSA+Pj4gMTYpICogMzI2NjQ4OTkwOSAmIDY1NTM1KSA8PCAxNikgJiA0Mjk0OTY3Mjk1O1xuICBoMSBePSBoMSA+Pj4gMTY7XG4gIHJldHVybiBoMSA+Pj4gMDtcbn1cbmZ1bmN0aW9uIGNyZWF0ZUJ1ZmZlcih2YWwpIHtcbiAgcmV0dXJuIG5ldyBUZXh0RW5jb2RlcigpLmVuY29kZSh2YWwpO1xufVxuXG5leHBvcnQgeyBzaGEyNTZiYXNlNjQgYXMgZGlnZXN0LCBoYXNoLCBtdXJtdXJIYXNoLCBvYmplY3RIYXNoLCBvYmplY3RIYXNoIGFzIHNlcmlhbGl6ZSwgc2hhMjU2LCBzaGEyNTZiYXNlNjQgfTtcbiIsICJjb25zdCBMb2dMZXZlbHMgPSB7XG4gIHNpbGVudDogTnVtYmVyLk5FR0FUSVZFX0lORklOSVRZLFxuICBmYXRhbDogMCxcbiAgZXJyb3I6IDAsXG4gIHdhcm46IDEsXG4gIGxvZzogMixcbiAgaW5mbzogMyxcbiAgc3VjY2VzczogMyxcbiAgZmFpbDogMyxcbiAgcmVhZHk6IDMsXG4gIHN0YXJ0OiAzLFxuICBib3g6IDMsXG4gIGRlYnVnOiA0LFxuICB0cmFjZTogNSxcbiAgdmVyYm9zZTogTnVtYmVyLlBPU0lUSVZFX0lORklOSVRZXG59O1xuY29uc3QgTG9nVHlwZXMgPSB7XG4gIC8vIFNpbGVudFxuICBzaWxlbnQ6IHtcbiAgICBsZXZlbDogLTFcbiAgfSxcbiAgLy8gTGV2ZWwgMFxuICBmYXRhbDoge1xuICAgIGxldmVsOiBMb2dMZXZlbHMuZmF0YWxcbiAgfSxcbiAgZXJyb3I6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLmVycm9yXG4gIH0sXG4gIC8vIExldmVsIDFcbiAgd2Fybjoge1xuICAgIGxldmVsOiBMb2dMZXZlbHMud2FyblxuICB9LFxuICAvLyBMZXZlbCAyXG4gIGxvZzoge1xuICAgIGxldmVsOiBMb2dMZXZlbHMubG9nXG4gIH0sXG4gIC8vIExldmVsIDNcbiAgaW5mbzoge1xuICAgIGxldmVsOiBMb2dMZXZlbHMuaW5mb1xuICB9LFxuICBzdWNjZXNzOiB7XG4gICAgbGV2ZWw6IExvZ0xldmVscy5zdWNjZXNzXG4gIH0sXG4gIGZhaWw6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLmZhaWxcbiAgfSxcbiAgcmVhZHk6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLmluZm9cbiAgfSxcbiAgc3RhcnQ6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLmluZm9cbiAgfSxcbiAgYm94OiB7XG4gICAgbGV2ZWw6IExvZ0xldmVscy5pbmZvXG4gIH0sXG4gIC8vIExldmVsIDRcbiAgZGVidWc6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLmRlYnVnXG4gIH0sXG4gIC8vIExldmVsIDVcbiAgdHJhY2U6IHtcbiAgICBsZXZlbDogTG9nTGV2ZWxzLnRyYWNlXG4gIH0sXG4gIC8vIFZlcmJvc2VcbiAgdmVyYm9zZToge1xuICAgIGxldmVsOiBMb2dMZXZlbHMudmVyYm9zZVxuICB9XG59O1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0JDEodmFsdWUpIHtcbiAgaWYgKHZhbHVlID09PSBudWxsIHx8IHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBjb25zdCBwcm90b3R5cGUgPSBPYmplY3QuZ2V0UHJvdG90eXBlT2YodmFsdWUpO1xuICBpZiAocHJvdG90eXBlICE9PSBudWxsICYmIHByb3RvdHlwZSAhPT0gT2JqZWN0LnByb3RvdHlwZSAmJiBPYmplY3QuZ2V0UHJvdG90eXBlT2YocHJvdG90eXBlKSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAoU3ltYm9sLml0ZXJhdG9yIGluIHZhbHVlKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIGlmIChTeW1ib2wudG9TdHJpbmdUYWcgaW4gdmFsdWUpIHtcbiAgICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKHZhbHVlKSA9PT0gXCJbb2JqZWN0IE1vZHVsZV1cIjtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxuZnVuY3Rpb24gX2RlZnUoYmFzZU9iamVjdCwgZGVmYXVsdHMsIG5hbWVzcGFjZSA9IFwiLlwiLCBtZXJnZXIpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0JDEoZGVmYXVsdHMpKSB7XG4gICAgcmV0dXJuIF9kZWZ1KGJhc2VPYmplY3QsIHt9LCBuYW1lc3BhY2UsIG1lcmdlcik7XG4gIH1cbiAgY29uc3Qgb2JqZWN0ID0gT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdHMpO1xuICBmb3IgKGNvbnN0IGtleSBpbiBiYXNlT2JqZWN0KSB7XG4gICAgaWYgKGtleSA9PT0gXCJfX3Byb3RvX19cIiB8fCBrZXkgPT09IFwiY29uc3RydWN0b3JcIikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IHZhbHVlID0gYmFzZU9iamVjdFtrZXldO1xuICAgIGlmICh2YWx1ZSA9PT0gbnVsbCB8fCB2YWx1ZSA9PT0gdm9pZCAwKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKG1lcmdlciAmJiBtZXJnZXIob2JqZWN0LCBrZXksIHZhbHVlLCBuYW1lc3BhY2UpKSB7XG4gICAgICBjb250aW51ZTtcbiAgICB9XG4gICAgaWYgKEFycmF5LmlzQXJyYXkodmFsdWUpICYmIEFycmF5LmlzQXJyYXkob2JqZWN0W2tleV0pKSB7XG4gICAgICBvYmplY3Rba2V5XSA9IFsuLi52YWx1ZSwgLi4ub2JqZWN0W2tleV1dO1xuICAgIH0gZWxzZSBpZiAoaXNQbGFpbk9iamVjdCQxKHZhbHVlKSAmJiBpc1BsYWluT2JqZWN0JDEob2JqZWN0W2tleV0pKSB7XG4gICAgICBvYmplY3Rba2V5XSA9IF9kZWZ1KFxuICAgICAgICB2YWx1ZSxcbiAgICAgICAgb2JqZWN0W2tleV0sXG4gICAgICAgIChuYW1lc3BhY2UgPyBgJHtuYW1lc3BhY2V9LmAgOiBcIlwiKSArIGtleS50b1N0cmluZygpLFxuICAgICAgICBtZXJnZXJcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIG9iamVjdFtrZXldID0gdmFsdWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBvYmplY3Q7XG59XG5mdW5jdGlvbiBjcmVhdGVEZWZ1KG1lcmdlcikge1xuICByZXR1cm4gKC4uLmFyZ3VtZW50c18pID0+IChcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgdW5pY29ybi9uby1hcnJheS1yZWR1Y2VcbiAgICBhcmd1bWVudHNfLnJlZHVjZSgocCwgYykgPT4gX2RlZnUocCwgYywgXCJcIiwgbWVyZ2VyKSwge30pXG4gICk7XG59XG5jb25zdCBkZWZ1ID0gY3JlYXRlRGVmdSgpO1xuXG5mdW5jdGlvbiBpc1BsYWluT2JqZWN0KG9iaikge1xuICByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS50b1N0cmluZy5jYWxsKG9iaikgPT09IFwiW29iamVjdCBPYmplY3RdXCI7XG59XG5mdW5jdGlvbiBpc0xvZ09iaihhcmcpIHtcbiAgaWYgKCFpc1BsYWluT2JqZWN0KGFyZykpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKCFhcmcubWVzc2FnZSAmJiAhYXJnLmFyZ3MpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgaWYgKGFyZy5zdGFjaykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gdHJ1ZTtcbn1cblxubGV0IHBhdXNlZCA9IGZhbHNlO1xuY29uc3QgcXVldWUgPSBbXTtcbmNsYXNzIENvbnNvbGEge1xuICBvcHRpb25zO1xuICBfbGFzdExvZztcbiAgX21vY2tGbjtcbiAgLyoqXG4gICAqIENyZWF0ZXMgYW4gaW5zdGFuY2Ugb2YgQ29uc29sYSB3aXRoIHNwZWNpZmllZCBvcHRpb25zIG9yIGRlZmF1bHRzLlxuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q29uc29sYU9wdGlvbnM+fSBbb3B0aW9ucz17fV0gLSBDb25maWd1cmF0aW9uIG9wdGlvbnMgZm9yIHRoZSBDb25zb2xhIGluc3RhbmNlLlxuICAgKi9cbiAgY29uc3RydWN0b3Iob3B0aW9ucyA9IHt9KSB7XG4gICAgY29uc3QgdHlwZXMgPSBvcHRpb25zLnR5cGVzIHx8IExvZ1R5cGVzO1xuICAgIHRoaXMub3B0aW9ucyA9IGRlZnUoXG4gICAgICB7XG4gICAgICAgIC4uLm9wdGlvbnMsXG4gICAgICAgIGRlZmF1bHRzOiB7IC4uLm9wdGlvbnMuZGVmYXVsdHMgfSxcbiAgICAgICAgbGV2ZWw6IF9ub3JtYWxpemVMb2dMZXZlbChvcHRpb25zLmxldmVsLCB0eXBlcyksXG4gICAgICAgIHJlcG9ydGVyczogWy4uLm9wdGlvbnMucmVwb3J0ZXJzIHx8IFtdXVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgdHlwZXM6IExvZ1R5cGVzLFxuICAgICAgICB0aHJvdHRsZTogMWUzLFxuICAgICAgICB0aHJvdHRsZU1pbjogNSxcbiAgICAgICAgZm9ybWF0T3B0aW9uczoge1xuICAgICAgICAgIGRhdGU6IHRydWUsXG4gICAgICAgICAgY29sb3JzOiBmYWxzZSxcbiAgICAgICAgICBjb21wYWN0OiB0cnVlXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICApO1xuICAgIGZvciAoY29uc3QgdHlwZSBpbiB0eXBlcykge1xuICAgICAgY29uc3QgZGVmYXVsdHMgPSB7XG4gICAgICAgIHR5cGUsXG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5kZWZhdWx0cyxcbiAgICAgICAgLi4udHlwZXNbdHlwZV1cbiAgICAgIH07XG4gICAgICB0aGlzW3R5cGVdID0gdGhpcy5fd3JhcExvZ0ZuKGRlZmF1bHRzKTtcbiAgICAgIHRoaXNbdHlwZV0ucmF3ID0gdGhpcy5fd3JhcExvZ0ZuKFxuICAgICAgICBkZWZhdWx0cyxcbiAgICAgICAgdHJ1ZVxuICAgICAgKTtcbiAgICB9XG4gICAgaWYgKHRoaXMub3B0aW9ucy5tb2NrRm4pIHtcbiAgICAgIHRoaXMubW9ja1R5cGVzKCk7XG4gICAgfVxuICAgIHRoaXMuX2xhc3RMb2cgPSB7fTtcbiAgfVxuICAvKipcbiAgICogR2V0cyB0aGUgY3VycmVudCBsb2cgbGV2ZWwgb2YgdGhlIENvbnNvbGEgaW5zdGFuY2UuXG4gICAqXG4gICAqIEByZXR1cm5zIHtudW1iZXJ9IFRoZSBjdXJyZW50IGxvZyBsZXZlbC5cbiAgICovXG4gIGdldCBsZXZlbCgpIHtcbiAgICByZXR1cm4gdGhpcy5vcHRpb25zLmxldmVsO1xuICB9XG4gIC8qKlxuICAgKiBTZXRzIHRoZSBtaW5pbXVtIGxvZyBsZXZlbCB0aGF0IHdpbGwgYmUgb3V0cHV0IGJ5IHRoZSBpbnN0YW5jZS5cbiAgICpcbiAgICogQHBhcmFtIHtudW1iZXJ9IGxldmVsIC0gVGhlIG5ldyBsb2cgbGV2ZWwgdG8gc2V0LlxuICAgKi9cbiAgc2V0IGxldmVsKGxldmVsKSB7XG4gICAgdGhpcy5vcHRpb25zLmxldmVsID0gX25vcm1hbGl6ZUxvZ0xldmVsKFxuICAgICAgbGV2ZWwsXG4gICAgICB0aGlzLm9wdGlvbnMudHlwZXMsXG4gICAgICB0aGlzLm9wdGlvbnMubGV2ZWxcbiAgICApO1xuICB9XG4gIC8qKlxuICAgKiBEaXNwbGF5cyBhIHByb21wdCB0byB0aGUgdXNlciBhbmQgcmV0dXJucyB0aGUgcmVzcG9uc2UuXG4gICAqIFRocm93IGFuIGVycm9yIGlmIGBwcm9tcHRgIGlzIG5vdCBzdXBwb3J0ZWQgYnkgdGhlIGN1cnJlbnQgY29uZmlndXJhdGlvbi5cbiAgICpcbiAgICogQHRlbXBsYXRlIFRcbiAgICogQHBhcmFtIHtzdHJpbmd9IG1lc3NhZ2UgLSBUaGUgbWVzc2FnZSB0byBkaXNwbGF5IGluIHRoZSBwcm9tcHQuXG4gICAqIEBwYXJhbSB7VH0gW29wdHNdIC0gT3B0aW9uYWwgb3B0aW9ucyBmb3IgdGhlIHByb21wdC4gU2VlIHtAbGluayBQcm9tcHRPcHRpb25zfS5cbiAgICogQHJldHVybnMge3Byb21pc2U8VD59IEEgcHJvbWlzZSB0aGF0IGluZmVyIHdpdGggdGhlIHByb21wdCBvcHRpb25zLiBTZWUge0BsaW5rIFByb21wdE9wdGlvbnN9LlxuICAgKi9cbiAgcHJvbXB0KG1lc3NhZ2UsIG9wdHMpIHtcbiAgICBpZiAoIXRoaXMub3B0aW9ucy5wcm9tcHQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcihcInByb21wdCBpcyBub3Qgc3VwcG9ydGVkIVwiKTtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMub3B0aW9ucy5wcm9tcHQobWVzc2FnZSwgb3B0cyk7XG4gIH1cbiAgLyoqXG4gICAqIENyZWF0ZXMgYSBuZXcgaW5zdGFuY2Ugb2YgQ29uc29sYSwgaW5oZXJpdGluZyBvcHRpb25zIGZyb20gdGhlIGN1cnJlbnQgaW5zdGFuY2UsIHdpdGggcG9zc2libGUgb3ZlcnJpZGVzLlxuICAgKlxuICAgKiBAcGFyYW0ge1BhcnRpYWw8Q29uc29sYU9wdGlvbnM+fSBvcHRpb25zIC0gT3B0aW9uYWwgb3ZlcnJpZGVzIGZvciB0aGUgbmV3IGluc3RhbmNlLiBTZWUge0BsaW5rIENvbnNvbGFPcHRpb25zfS5cbiAgICogQHJldHVybnMge0NvbnNvbGFJbnN0YW5jZX0gQSBuZXcgQ29uc29sYSBpbnN0YW5jZS4gU2VlIHtAbGluayBDb25zb2xhSW5zdGFuY2V9LlxuICAgKi9cbiAgY3JlYXRlKG9wdGlvbnMpIHtcbiAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDb25zb2xhKHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIC4uLm9wdGlvbnNcbiAgICB9KTtcbiAgICBpZiAodGhpcy5fbW9ja0ZuKSB7XG4gICAgICBpbnN0YW5jZS5tb2NrVHlwZXModGhpcy5fbW9ja0ZuKTtcbiAgICB9XG4gICAgcmV0dXJuIGluc3RhbmNlO1xuICB9XG4gIC8qKlxuICAgKiBDcmVhdGVzIGEgbmV3IENvbnNvbGEgaW5zdGFuY2Ugd2l0aCB0aGUgc3BlY2lmaWVkIGRlZmF1bHQgbG9nIG9iamVjdCBwcm9wZXJ0aWVzLlxuICAgKlxuICAgKiBAcGFyYW0ge0lucHV0TG9nT2JqZWN0fSBkZWZhdWx0cyAtIERlZmF1bHQgcHJvcGVydGllcyB0byBpbmNsdWRlIGluIGFueSBsb2cgZnJvbSB0aGUgbmV3IGluc3RhbmNlLiBTZWUge0BsaW5rIElucHV0TG9nT2JqZWN0fS5cbiAgICogQHJldHVybnMge0NvbnNvbGFJbnN0YW5jZX0gQSBuZXcgQ29uc29sYSBpbnN0YW5jZS4gU2VlIHtAbGluayBDb25zb2xhSW5zdGFuY2V9LlxuICAgKi9cbiAgd2l0aERlZmF1bHRzKGRlZmF1bHRzKSB7XG4gICAgcmV0dXJuIHRoaXMuY3JlYXRlKHtcbiAgICAgIC4uLnRoaXMub3B0aW9ucyxcbiAgICAgIGRlZmF1bHRzOiB7XG4gICAgICAgIC4uLnRoaXMub3B0aW9ucy5kZWZhdWx0cyxcbiAgICAgICAgLi4uZGVmYXVsdHNcbiAgICAgIH1cbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQ3JlYXRlcyBhIG5ldyBDb25zb2xhIGluc3RhbmNlIHdpdGggYSBzcGVjaWZpZWQgdGFnLCB3aGljaCB3aWxsIGJlIGluY2x1ZGVkIGluIGV2ZXJ5IGxvZy5cbiAgICpcbiAgICogQHBhcmFtIHtzdHJpbmd9IHRhZyAtIFRoZSB0YWcgdG8gaW5jbHVkZSBpbiBlYWNoIGxvZyBvZiB0aGUgbmV3IGluc3RhbmNlLlxuICAgKiBAcmV0dXJucyB7Q29uc29sYUluc3RhbmNlfSBBIG5ldyBDb25zb2xhIGluc3RhbmNlLiBTZWUge0BsaW5rIENvbnNvbGFJbnN0YW5jZX0uXG4gICAqL1xuICB3aXRoVGFnKHRhZykge1xuICAgIHJldHVybiB0aGlzLndpdGhEZWZhdWx0cyh7XG4gICAgICB0YWc6IHRoaXMub3B0aW9ucy5kZWZhdWx0cy50YWcgPyB0aGlzLm9wdGlvbnMuZGVmYXVsdHMudGFnICsgXCI6XCIgKyB0YWcgOiB0YWdcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogQWRkcyBhIGN1c3RvbSByZXBvcnRlciB0byB0aGUgQ29uc29sYSBpbnN0YW5jZS5cbiAgICogUmVwb3J0ZXJzIHdpbGwgYmUgY2FsbGVkIGZvciBlYWNoIGxvZyBtZXNzYWdlLCBkZXBlbmRpbmcgb24gdGhlaXIgaW1wbGVtZW50YXRpb24gYW5kIGxvZyBsZXZlbC5cbiAgICpcbiAgICogQHBhcmFtIHtDb25zb2xhUmVwb3J0ZXJ9IHJlcG9ydGVyIC0gVGhlIHJlcG9ydGVyIHRvIGFkZC4gU2VlIHtAbGluayBDb25zb2xhUmVwb3J0ZXJ9LlxuICAgKiBAcmV0dXJucyB7Q29uc29sYX0gVGhlIGN1cnJlbnQgQ29uc29sYSBpbnN0YW5jZS5cbiAgICovXG4gIGFkZFJlcG9ydGVyKHJlcG9ydGVyKSB7XG4gICAgdGhpcy5vcHRpb25zLnJlcG9ydGVycy5wdXNoKHJlcG9ydGVyKTtcbiAgICByZXR1cm4gdGhpcztcbiAgfVxuICAvKipcbiAgICogUmVtb3ZlcyBhIGN1c3RvbSByZXBvcnRlciBmcm9tIHRoZSBDb25zb2xhIGluc3RhbmNlLlxuICAgKiBJZiBubyByZXBvcnRlciBpcyBzcGVjaWZpZWQsIGFsbCByZXBvcnRlcnMgd2lsbCBiZSByZW1vdmVkLlxuICAgKlxuICAgKiBAcGFyYW0ge0NvbnNvbGFSZXBvcnRlcn0gcmVwb3J0ZXIgLSBUaGUgcmVwb3J0ZXIgdG8gcmVtb3ZlLiBTZWUge0BsaW5rIENvbnNvbGFSZXBvcnRlcn0uXG4gICAqIEByZXR1cm5zIHtDb25zb2xhfSBUaGUgY3VycmVudCBDb25zb2xhIGluc3RhbmNlLlxuICAgKi9cbiAgcmVtb3ZlUmVwb3J0ZXIocmVwb3J0ZXIpIHtcbiAgICBpZiAocmVwb3J0ZXIpIHtcbiAgICAgIGNvbnN0IGkgPSB0aGlzLm9wdGlvbnMucmVwb3J0ZXJzLmluZGV4T2YocmVwb3J0ZXIpO1xuICAgICAgaWYgKGkgIT09IC0xKSB7XG4gICAgICAgIHJldHVybiB0aGlzLm9wdGlvbnMucmVwb3J0ZXJzLnNwbGljZShpLCAxKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5vcHRpb25zLnJlcG9ydGVycy5zcGxpY2UoMCk7XG4gICAgfVxuICAgIHJldHVybiB0aGlzO1xuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyBhbGwgcmVwb3J0ZXJzIG9mIHRoZSBDb25zb2xhIGluc3RhbmNlIHdpdGggdGhlIHNwZWNpZmllZCBhcnJheSBvZiByZXBvcnRlcnMuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29uc29sYVJlcG9ydGVyW119IHJlcG9ydGVycyAtIFRoZSBuZXcgcmVwb3J0ZXJzIHRvIHNldC4gU2VlIHtAbGluayBDb25zb2xhUmVwb3J0ZXJ9LlxuICAgKiBAcmV0dXJucyB7Q29uc29sYX0gVGhlIGN1cnJlbnQgQ29uc29sYSBpbnN0YW5jZS5cbiAgICovXG4gIHNldFJlcG9ydGVycyhyZXBvcnRlcnMpIHtcbiAgICB0aGlzLm9wdGlvbnMucmVwb3J0ZXJzID0gQXJyYXkuaXNBcnJheShyZXBvcnRlcnMpID8gcmVwb3J0ZXJzIDogW3JlcG9ydGVyc107XG4gICAgcmV0dXJuIHRoaXM7XG4gIH1cbiAgd3JhcEFsbCgpIHtcbiAgICB0aGlzLndyYXBDb25zb2xlKCk7XG4gICAgdGhpcy53cmFwU3RkKCk7XG4gIH1cbiAgcmVzdG9yZUFsbCgpIHtcbiAgICB0aGlzLnJlc3RvcmVDb25zb2xlKCk7XG4gICAgdGhpcy5yZXN0b3JlU3RkKCk7XG4gIH1cbiAgLyoqXG4gICAqIE92ZXJyaWRlcyBjb25zb2xlIG1ldGhvZHMgd2l0aCBDb25zb2xhIGxvZ2dpbmcgbWV0aG9kcyBmb3IgY29uc2lzdGVudCBsb2dnaW5nLlxuICAgKi9cbiAgd3JhcENvbnNvbGUoKSB7XG4gICAgZm9yIChjb25zdCB0eXBlIGluIHRoaXMub3B0aW9ucy50eXBlcykge1xuICAgICAgaWYgKCFjb25zb2xlW1wiX19cIiArIHR5cGVdKSB7XG4gICAgICAgIGNvbnNvbGVbXCJfX1wiICsgdHlwZV0gPSBjb25zb2xlW3R5cGVdO1xuICAgICAgfVxuICAgICAgY29uc29sZVt0eXBlXSA9IHRoaXNbdHlwZV0ucmF3O1xuICAgIH1cbiAgfVxuICAvKipcbiAgICogUmVzdG9yZXMgdGhlIG9yaWdpbmFsIGNvbnNvbGUgbWV0aG9kcywgcmVtb3ZpbmcgQ29uc29sYSBvdmVycmlkZXMuXG4gICAqL1xuICByZXN0b3JlQ29uc29sZSgpIHtcbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLnR5cGVzKSB7XG4gICAgICBpZiAoY29uc29sZVtcIl9fXCIgKyB0eXBlXSkge1xuICAgICAgICBjb25zb2xlW3R5cGVdID0gY29uc29sZVtcIl9fXCIgKyB0eXBlXTtcbiAgICAgICAgZGVsZXRlIGNvbnNvbGVbXCJfX1wiICsgdHlwZV07XG4gICAgICB9XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBPdmVycmlkZXMgc3RhbmRhcmQgb3V0cHV0IGFuZCBlcnJvciBzdHJlYW1zIHRvIHJlZGlyZWN0IHRoZW0gdGhyb3VnaCBDb25zb2xhLlxuICAgKi9cbiAgd3JhcFN0ZCgpIHtcbiAgICB0aGlzLl93cmFwU3RyZWFtKHRoaXMub3B0aW9ucy5zdGRvdXQsIFwibG9nXCIpO1xuICAgIHRoaXMuX3dyYXBTdHJlYW0odGhpcy5vcHRpb25zLnN0ZGVyciwgXCJsb2dcIik7XG4gIH1cbiAgX3dyYXBTdHJlYW0oc3RyZWFtLCB0eXBlKSB7XG4gICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKCFzdHJlYW0uX193cml0ZSkge1xuICAgICAgc3RyZWFtLl9fd3JpdGUgPSBzdHJlYW0ud3JpdGU7XG4gICAgfVxuICAgIHN0cmVhbS53cml0ZSA9IChkYXRhKSA9PiB7XG4gICAgICB0aGlzW3R5cGVdLnJhdyhTdHJpbmcoZGF0YSkudHJpbSgpKTtcbiAgICB9O1xuICB9XG4gIC8qKlxuICAgKiBSZXN0b3JlcyB0aGUgb3JpZ2luYWwgc3RhbmRhcmQgb3V0cHV0IGFuZCBlcnJvciBzdHJlYW1zLCByZW1vdmluZyB0aGUgQ29uc29sYSByZWRpcmVjdGlvbi5cbiAgICovXG4gIHJlc3RvcmVTdGQoKSB7XG4gICAgdGhpcy5fcmVzdG9yZVN0cmVhbSh0aGlzLm9wdGlvbnMuc3Rkb3V0KTtcbiAgICB0aGlzLl9yZXN0b3JlU3RyZWFtKHRoaXMub3B0aW9ucy5zdGRlcnIpO1xuICB9XG4gIF9yZXN0b3JlU3RyZWFtKHN0cmVhbSkge1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChzdHJlYW0uX193cml0ZSkge1xuICAgICAgc3RyZWFtLndyaXRlID0gc3RyZWFtLl9fd3JpdGU7XG4gICAgICBkZWxldGUgc3RyZWFtLl9fd3JpdGU7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBQYXVzZXMgbG9nZ2luZywgcXVldWVzIGluY29taW5nIGxvZ3MgdW50aWwgcmVzdW1lZC5cbiAgICovXG4gIHBhdXNlTG9ncygpIHtcbiAgICBwYXVzZWQgPSB0cnVlO1xuICB9XG4gIC8qKlxuICAgKiBSZXN1bWVzIGxvZ2dpbmcsIHByb2Nlc3NpbmcgYW55IHF1ZXVlZCBsb2dzLlxuICAgKi9cbiAgcmVzdW1lTG9ncygpIHtcbiAgICBwYXVzZWQgPSBmYWxzZTtcbiAgICBjb25zdCBfcXVldWUgPSBxdWV1ZS5zcGxpY2UoMCk7XG4gICAgZm9yIChjb25zdCBpdGVtIG9mIF9xdWV1ZSkge1xuICAgICAgaXRlbVswXS5fbG9nRm4oaXRlbVsxXSwgaXRlbVsyXSk7XG4gICAgfVxuICB9XG4gIC8qKlxuICAgKiBSZXBsYWNlcyBsb2dnaW5nIG1ldGhvZHMgd2l0aCBtb2NrcyBpZiBhIG1vY2sgZnVuY3Rpb24gaXMgcHJvdmlkZWQuXG4gICAqXG4gICAqIEBwYXJhbSB7Q29uc29sYU9wdGlvbnNbXCJtb2NrRm5cIl19IG1vY2tGbiAtIFRoZSBmdW5jdGlvbiB0byB1c2UgZm9yIG1vY2tpbmcgbG9nZ2luZyBtZXRob2RzLiBTZWUge0BsaW5rIENvbnNvbGFPcHRpb25zW1wibW9ja0ZuXCJdfS5cbiAgICovXG4gIG1vY2tUeXBlcyhtb2NrRm4pIHtcbiAgICBjb25zdCBfbW9ja0ZuID0gbW9ja0ZuIHx8IHRoaXMub3B0aW9ucy5tb2NrRm47XG4gICAgdGhpcy5fbW9ja0ZuID0gX21vY2tGbjtcbiAgICBpZiAodHlwZW9mIF9tb2NrRm4gIT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmb3IgKGNvbnN0IHR5cGUgaW4gdGhpcy5vcHRpb25zLnR5cGVzKSB7XG4gICAgICB0aGlzW3R5cGVdID0gX21vY2tGbih0eXBlLCB0aGlzLm9wdGlvbnMudHlwZXNbdHlwZV0pIHx8IHRoaXNbdHlwZV07XG4gICAgICB0aGlzW3R5cGVdLnJhdyA9IHRoaXNbdHlwZV07XG4gICAgfVxuICB9XG4gIF93cmFwTG9nRm4oZGVmYXVsdHMsIGlzUmF3KSB7XG4gICAgcmV0dXJuICguLi5hcmdzKSA9PiB7XG4gICAgICBpZiAocGF1c2VkKSB7XG4gICAgICAgIHF1ZXVlLnB1c2goW3RoaXMsIGRlZmF1bHRzLCBhcmdzLCBpc1Jhd10pO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG4gICAgICByZXR1cm4gdGhpcy5fbG9nRm4oZGVmYXVsdHMsIGFyZ3MsIGlzUmF3KTtcbiAgICB9O1xuICB9XG4gIF9sb2dGbihkZWZhdWx0cywgYXJncywgaXNSYXcpIHtcbiAgICBpZiAoKGRlZmF1bHRzLmxldmVsIHx8IDApID4gdGhpcy5sZXZlbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBsb2dPYmogPSB7XG4gICAgICBkYXRlOiAvKiBAX19QVVJFX18gKi8gbmV3IERhdGUoKSxcbiAgICAgIGFyZ3M6IFtdLFxuICAgICAgLi4uZGVmYXVsdHMsXG4gICAgICBsZXZlbDogX25vcm1hbGl6ZUxvZ0xldmVsKGRlZmF1bHRzLmxldmVsLCB0aGlzLm9wdGlvbnMudHlwZXMpXG4gICAgfTtcbiAgICBpZiAoIWlzUmF3ICYmIGFyZ3MubGVuZ3RoID09PSAxICYmIGlzTG9nT2JqKGFyZ3NbMF0pKSB7XG4gICAgICBPYmplY3QuYXNzaWduKGxvZ09iaiwgYXJnc1swXSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGxvZ09iai5hcmdzID0gWy4uLmFyZ3NdO1xuICAgIH1cbiAgICBpZiAobG9nT2JqLm1lc3NhZ2UpIHtcbiAgICAgIGxvZ09iai5hcmdzLnVuc2hpZnQobG9nT2JqLm1lc3NhZ2UpO1xuICAgICAgZGVsZXRlIGxvZ09iai5tZXNzYWdlO1xuICAgIH1cbiAgICBpZiAobG9nT2JqLmFkZGl0aW9uYWwpIHtcbiAgICAgIGlmICghQXJyYXkuaXNBcnJheShsb2dPYmouYWRkaXRpb25hbCkpIHtcbiAgICAgICAgbG9nT2JqLmFkZGl0aW9uYWwgPSBsb2dPYmouYWRkaXRpb25hbC5zcGxpdChcIlxcblwiKTtcbiAgICAgIH1cbiAgICAgIGxvZ09iai5hcmdzLnB1c2goXCJcXG5cIiArIGxvZ09iai5hZGRpdGlvbmFsLmpvaW4oXCJcXG5cIikpO1xuICAgICAgZGVsZXRlIGxvZ09iai5hZGRpdGlvbmFsO1xuICAgIH1cbiAgICBsb2dPYmoudHlwZSA9IHR5cGVvZiBsb2dPYmoudHlwZSA9PT0gXCJzdHJpbmdcIiA/IGxvZ09iai50eXBlLnRvTG93ZXJDYXNlKCkgOiBcImxvZ1wiO1xuICAgIGxvZ09iai50YWcgPSB0eXBlb2YgbG9nT2JqLnRhZyA9PT0gXCJzdHJpbmdcIiA/IGxvZ09iai50YWcgOiBcIlwiO1xuICAgIGNvbnN0IHJlc29sdmVMb2cgPSAobmV3TG9nID0gZmFsc2UpID0+IHtcbiAgICAgIGNvbnN0IHJlcGVhdGVkID0gKHRoaXMuX2xhc3RMb2cuY291bnQgfHwgMCkgLSB0aGlzLm9wdGlvbnMudGhyb3R0bGVNaW47XG4gICAgICBpZiAodGhpcy5fbGFzdExvZy5vYmplY3QgJiYgcmVwZWF0ZWQgPiAwKSB7XG4gICAgICAgIGNvbnN0IGFyZ3MyID0gWy4uLnRoaXMuX2xhc3RMb2cub2JqZWN0LmFyZ3NdO1xuICAgICAgICBpZiAocmVwZWF0ZWQgPiAxKSB7XG4gICAgICAgICAgYXJnczIucHVzaChgKHJlcGVhdGVkICR7cmVwZWF0ZWR9IHRpbWVzKWApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX2xvZyh7IC4uLnRoaXMuX2xhc3RMb2cub2JqZWN0LCBhcmdzOiBhcmdzMiB9KTtcbiAgICAgICAgdGhpcy5fbGFzdExvZy5jb3VudCA9IDE7XG4gICAgICB9XG4gICAgICBpZiAobmV3TG9nKSB7XG4gICAgICAgIHRoaXMuX2xhc3RMb2cub2JqZWN0ID0gbG9nT2JqO1xuICAgICAgICB0aGlzLl9sb2cobG9nT2JqKTtcbiAgICAgIH1cbiAgICB9O1xuICAgIGNsZWFyVGltZW91dCh0aGlzLl9sYXN0TG9nLnRpbWVvdXQpO1xuICAgIGNvbnN0IGRpZmZUaW1lID0gdGhpcy5fbGFzdExvZy50aW1lICYmIGxvZ09iai5kYXRlID8gbG9nT2JqLmRhdGUuZ2V0VGltZSgpIC0gdGhpcy5fbGFzdExvZy50aW1lLmdldFRpbWUoKSA6IDA7XG4gICAgdGhpcy5fbGFzdExvZy50aW1lID0gbG9nT2JqLmRhdGU7XG4gICAgaWYgKGRpZmZUaW1lIDwgdGhpcy5vcHRpb25zLnRocm90dGxlKSB7XG4gICAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXJpYWxpemVkTG9nID0gSlNPTi5zdHJpbmdpZnkoW1xuICAgICAgICAgIGxvZ09iai50eXBlLFxuICAgICAgICAgIGxvZ09iai50YWcsXG4gICAgICAgICAgbG9nT2JqLmFyZ3NcbiAgICAgICAgXSk7XG4gICAgICAgIGNvbnN0IGlzU2FtZUxvZyA9IHRoaXMuX2xhc3RMb2cuc2VyaWFsaXplZCA9PT0gc2VyaWFsaXplZExvZztcbiAgICAgICAgdGhpcy5fbGFzdExvZy5zZXJpYWxpemVkID0gc2VyaWFsaXplZExvZztcbiAgICAgICAgaWYgKGlzU2FtZUxvZykge1xuICAgICAgICAgIHRoaXMuX2xhc3RMb2cuY291bnQgPSAodGhpcy5fbGFzdExvZy5jb3VudCB8fCAwKSArIDE7XG4gICAgICAgICAgaWYgKHRoaXMuX2xhc3RMb2cuY291bnQgPiB0aGlzLm9wdGlvbnMudGhyb3R0bGVNaW4pIHtcbiAgICAgICAgICAgIHRoaXMuX2xhc3RMb2cudGltZW91dCA9IHNldFRpbWVvdXQoXG4gICAgICAgICAgICAgIHJlc29sdmVMb2csXG4gICAgICAgICAgICAgIHRoaXMub3B0aW9ucy50aHJvdHRsZVxuICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gY2F0Y2gge1xuICAgICAgfVxuICAgIH1cbiAgICByZXNvbHZlTG9nKHRydWUpO1xuICB9XG4gIF9sb2cobG9nT2JqKSB7XG4gICAgZm9yIChjb25zdCByZXBvcnRlciBvZiB0aGlzLm9wdGlvbnMucmVwb3J0ZXJzKSB7XG4gICAgICByZXBvcnRlci5sb2cobG9nT2JqLCB7XG4gICAgICAgIG9wdGlvbnM6IHRoaXMub3B0aW9uc1xuICAgICAgfSk7XG4gICAgfVxuICB9XG59XG5mdW5jdGlvbiBfbm9ybWFsaXplTG9nTGV2ZWwoaW5wdXQsIHR5cGVzID0ge30sIGRlZmF1bHRMZXZlbCA9IDMpIHtcbiAgaWYgKGlucHV0ID09PSB2b2lkIDApIHtcbiAgICByZXR1cm4gZGVmYXVsdExldmVsO1xuICB9XG4gIGlmICh0eXBlb2YgaW5wdXQgPT09IFwibnVtYmVyXCIpIHtcbiAgICByZXR1cm4gaW5wdXQ7XG4gIH1cbiAgaWYgKHR5cGVzW2lucHV0XSAmJiB0eXBlc1tpbnB1dF0ubGV2ZWwgIT09IHZvaWQgMCkge1xuICAgIHJldHVybiB0eXBlc1tpbnB1dF0ubGV2ZWw7XG4gIH1cbiAgcmV0dXJuIGRlZmF1bHRMZXZlbDtcbn1cbkNvbnNvbGEucHJvdG90eXBlLmFkZCA9IENvbnNvbGEucHJvdG90eXBlLmFkZFJlcG9ydGVyO1xuQ29uc29sYS5wcm90b3R5cGUucmVtb3ZlID0gQ29uc29sYS5wcm90b3R5cGUucmVtb3ZlUmVwb3J0ZXI7XG5Db25zb2xhLnByb3RvdHlwZS5jbGVhciA9IENvbnNvbGEucHJvdG90eXBlLnJlbW92ZVJlcG9ydGVyO1xuQ29uc29sYS5wcm90b3R5cGUud2l0aFNjb3BlID0gQ29uc29sYS5wcm90b3R5cGUud2l0aFRhZztcbkNvbnNvbGEucHJvdG90eXBlLm1vY2sgPSBDb25zb2xhLnByb3RvdHlwZS5tb2NrVHlwZXM7XG5Db25zb2xhLnByb3RvdHlwZS5wYXVzZSA9IENvbnNvbGEucHJvdG90eXBlLnBhdXNlTG9ncztcbkNvbnNvbGEucHJvdG90eXBlLnJlc3VtZSA9IENvbnNvbGEucHJvdG90eXBlLnJlc3VtZUxvZ3M7XG5mdW5jdGlvbiBjcmVhdGVDb25zb2xhKG9wdGlvbnMgPSB7fSkge1xuICByZXR1cm4gbmV3IENvbnNvbGEob3B0aW9ucyk7XG59XG5cbmV4cG9ydCB7IENvbnNvbGEsIExvZ0xldmVscywgTG9nVHlwZXMsIGNyZWF0ZUNvbnNvbGEgfTtcbiIsICJpbXBvcnQgeyBmb3JtYXRXaXRoT3B0aW9ucyB9IGZyb20gJ25vZGU6dXRpbCc7XG5pbXBvcnQgeyBzZXAgfSBmcm9tICdub2RlOnBhdGgnO1xuXG5mdW5jdGlvbiBwYXJzZVN0YWNrKHN0YWNrLCBtZXNzYWdlKSB7XG4gIGNvbnN0IGN3ZCA9IHByb2Nlc3MuY3dkKCkgKyBzZXA7XG4gIGNvbnN0IGxpbmVzID0gc3RhY2suc3BsaXQoXCJcXG5cIikuc3BsaWNlKG1lc3NhZ2Uuc3BsaXQoXCJcXG5cIikubGVuZ3RoKS5tYXAoKGwpID0+IGwudHJpbSgpLnJlcGxhY2UoXCJmaWxlOi8vXCIsIFwiXCIpLnJlcGxhY2UoY3dkLCBcIlwiKSk7XG4gIHJldHVybiBsaW5lcztcbn1cblxuZnVuY3Rpb24gd3JpdGVTdHJlYW0oZGF0YSwgc3RyZWFtKSB7XG4gIGNvbnN0IHdyaXRlID0gc3RyZWFtLl9fd3JpdGUgfHwgc3RyZWFtLndyaXRlO1xuICByZXR1cm4gd3JpdGUuY2FsbChzdHJlYW0sIGRhdGEpO1xufVxuXG5jb25zdCBicmFja2V0ID0gKHgpID0+IHggPyBgWyR7eH1dYCA6IFwiXCI7XG5jbGFzcyBCYXNpY1JlcG9ydGVyIHtcbiAgZm9ybWF0U3RhY2soc3RhY2ssIG1lc3NhZ2UsIG9wdHMpIHtcbiAgICBjb25zdCBpbmRlbnQgPSBcIiAgXCIucmVwZWF0KChvcHRzPy5lcnJvckxldmVsIHx8IDApICsgMSk7XG4gICAgcmV0dXJuIGluZGVudCArIHBhcnNlU3RhY2soc3RhY2ssIG1lc3NhZ2UpLmpvaW4oYFxuJHtpbmRlbnR9YCk7XG4gIH1cbiAgZm9ybWF0RXJyb3IoZXJyLCBvcHRzKSB7XG4gICAgY29uc3QgbWVzc2FnZSA9IGVyci5tZXNzYWdlID8/IGZvcm1hdFdpdGhPcHRpb25zKG9wdHMsIGVycik7XG4gICAgY29uc3Qgc3RhY2sgPSBlcnIuc3RhY2sgPyB0aGlzLmZvcm1hdFN0YWNrKGVyci5zdGFjaywgbWVzc2FnZSwgb3B0cykgOiBcIlwiO1xuICAgIGNvbnN0IGxldmVsID0gb3B0cz8uZXJyb3JMZXZlbCB8fCAwO1xuICAgIGNvbnN0IGNhdXNlZFByZWZpeCA9IGxldmVsID4gMCA/IGAke1wiICBcIi5yZXBlYXQobGV2ZWwpfVtjYXVzZV06IGAgOiBcIlwiO1xuICAgIGNvbnN0IGNhdXNlZEVycm9yID0gZXJyLmNhdXNlID8gXCJcXG5cXG5cIiArIHRoaXMuZm9ybWF0RXJyb3IoZXJyLmNhdXNlLCB7IC4uLm9wdHMsIGVycm9yTGV2ZWw6IGxldmVsICsgMSB9KSA6IFwiXCI7XG4gICAgcmV0dXJuIGNhdXNlZFByZWZpeCArIG1lc3NhZ2UgKyBcIlxcblwiICsgc3RhY2sgKyBjYXVzZWRFcnJvcjtcbiAgfVxuICBmb3JtYXRBcmdzKGFyZ3MsIG9wdHMpIHtcbiAgICBjb25zdCBfYXJncyA9IGFyZ3MubWFwKChhcmcpID0+IHtcbiAgICAgIGlmIChhcmcgJiYgdHlwZW9mIGFyZy5zdGFjayA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICByZXR1cm4gdGhpcy5mb3JtYXRFcnJvcihhcmcsIG9wdHMpO1xuICAgICAgfVxuICAgICAgcmV0dXJuIGFyZztcbiAgICB9KTtcbiAgICByZXR1cm4gZm9ybWF0V2l0aE9wdGlvbnMob3B0cywgLi4uX2FyZ3MpO1xuICB9XG4gIGZvcm1hdERhdGUoZGF0ZSwgb3B0cykge1xuICAgIHJldHVybiBvcHRzLmRhdGUgPyBkYXRlLnRvTG9jYWxlVGltZVN0cmluZygpIDogXCJcIjtcbiAgfVxuICBmaWx0ZXJBbmRKb2luKGFycikge1xuICAgIHJldHVybiBhcnIuZmlsdGVyKEJvb2xlYW4pLmpvaW4oXCIgXCIpO1xuICB9XG4gIGZvcm1hdExvZ09iaihsb2dPYmosIG9wdHMpIHtcbiAgICBjb25zdCBtZXNzYWdlID0gdGhpcy5mb3JtYXRBcmdzKGxvZ09iai5hcmdzLCBvcHRzKTtcbiAgICBpZiAobG9nT2JqLnR5cGUgPT09IFwiYm94XCIpIHtcbiAgICAgIHJldHVybiBcIlxcblwiICsgW1xuICAgICAgICBicmFja2V0KGxvZ09iai50YWcpLFxuICAgICAgICBsb2dPYmoudGl0bGUgJiYgbG9nT2JqLnRpdGxlLFxuICAgICAgICAuLi5tZXNzYWdlLnNwbGl0KFwiXFxuXCIpXG4gICAgICBdLmZpbHRlcihCb29sZWFuKS5tYXAoKGwpID0+IFwiID4gXCIgKyBsKS5qb2luKFwiXFxuXCIpICsgXCJcXG5cIjtcbiAgICB9XG4gICAgcmV0dXJuIHRoaXMuZmlsdGVyQW5kSm9pbihbXG4gICAgICBicmFja2V0KGxvZ09iai50eXBlKSxcbiAgICAgIGJyYWNrZXQobG9nT2JqLnRhZyksXG4gICAgICBtZXNzYWdlXG4gICAgXSk7XG4gIH1cbiAgbG9nKGxvZ09iaiwgY3R4KSB7XG4gICAgY29uc3QgbGluZSA9IHRoaXMuZm9ybWF0TG9nT2JqKGxvZ09iaiwge1xuICAgICAgY29sdW1uczogY3R4Lm9wdGlvbnMuc3Rkb3V0LmNvbHVtbnMgfHwgMCxcbiAgICAgIC4uLmN0eC5vcHRpb25zLmZvcm1hdE9wdGlvbnNcbiAgICB9KTtcbiAgICByZXR1cm4gd3JpdGVTdHJlYW0oXG4gICAgICBsaW5lICsgXCJcXG5cIixcbiAgICAgIGxvZ09iai5sZXZlbCA8IDIgPyBjdHgub3B0aW9ucy5zdGRlcnIgfHwgcHJvY2Vzcy5zdGRlcnIgOiBjdHgub3B0aW9ucy5zdGRvdXQgfHwgcHJvY2Vzcy5zdGRvdXRcbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEJhc2ljUmVwb3J0ZXIgYXMgQiwgcGFyc2VTdGFjayBhcyBwIH07XG4iLCAiaW1wb3J0IHsgY3JlYXRlQ29uc29sYSBhcyBjcmVhdGVDb25zb2xhJDEsIExvZ0xldmVscyB9IGZyb20gJy4vY29yZS5tanMnO1xuZXhwb3J0IHsgQ29uc29sYSwgTG9nVHlwZXMgfSBmcm9tICcuL2NvcmUubWpzJztcbmltcG9ydCB7IEIgYXMgQmFzaWNSZXBvcnRlciwgcCBhcyBwYXJzZVN0YWNrIH0gZnJvbSAnLi9zaGFyZWQvY29uc29sYS5EUndxWmozVC5tanMnO1xuaW1wb3J0IGckMSBmcm9tICdub2RlOnByb2Nlc3MnO1xuaW1wb3J0IHsgZSBhcyBjb2xvcnMsIGQgYXMgYm94LCBzIGFzIHN0cmlwQW5zaSQxIH0gZnJvbSAnLi9zaGFyZWQvY29uc29sYS5EWEJZdS1LRC5tanMnO1xuaW1wb3J0ICdub2RlOnV0aWwnO1xuaW1wb3J0ICdub2RlOnBhdGgnO1xuaW1wb3J0ICdub2RlOnR0eSc7XG5cbmNvbnN0IHI9T2JqZWN0LmNyZWF0ZShudWxsKSxpPWU9Pmdsb2JhbFRoaXMucHJvY2Vzcz8uZW52fHxpbXBvcnQubWV0YS5lbnZ8fGdsb2JhbFRoaXMuRGVubz8uZW52LnRvT2JqZWN0KCl8fGdsb2JhbFRoaXMuX19lbnZfX3x8KGU/cjpnbG9iYWxUaGlzKSxvPW5ldyBQcm94eShyLHtnZXQoZSxzKXtyZXR1cm4gaSgpW3NdPz9yW3NdfSxoYXMoZSxzKXtjb25zdCBFPWkoKTtyZXR1cm4gcyBpbiBFfHxzIGluIHJ9LHNldChlLHMsRSl7Y29uc3QgQj1pKHRydWUpO3JldHVybiBCW3NdPUUsdHJ1ZX0sZGVsZXRlUHJvcGVydHkoZSxzKXtpZighcylyZXR1cm4gIGZhbHNlO2NvbnN0IEU9aSh0cnVlKTtyZXR1cm4gZGVsZXRlIEVbc10sdHJ1ZX0sb3duS2V5cygpe2NvbnN0IGU9aSh0cnVlKTtyZXR1cm4gT2JqZWN0LmtleXMoZSl9fSksdD10eXBlb2YgcHJvY2VzczxcInVcIiYmcHJvY2Vzcy5lbnYmJnByb2Nlc3MuZW52Lk5PREVfRU5WfHxcIlwiLGY9W1tcIkFQUFZFWU9SXCJdLFtcIkFXU19BTVBMSUZZXCIsXCJBV1NfQVBQX0lEXCIse2NpOnRydWV9XSxbXCJBWlVSRV9QSVBFTElORVNcIixcIlNZU1RFTV9URUFNRk9VTkRBVElPTkNPTExFQ1RJT05VUklcIl0sW1wiQVpVUkVfU1RBVElDXCIsXCJJTlBVVF9BWlVSRV9TVEFUSUNfV0VCX0FQUFNfQVBJX1RPS0VOXCJdLFtcIkFQUENJUkNMRVwiLFwiQUNfQVBQQ0lSQ0xFXCJdLFtcIkJBTUJPT1wiLFwiYmFtYm9vX3BsYW5LZXlcIl0sW1wiQklUQlVDS0VUXCIsXCJCSVRCVUNLRVRfQ09NTUlUXCJdLFtcIkJJVFJJU0VcIixcIkJJVFJJU0VfSU9cIl0sW1wiQlVERFlcIixcIkJVRERZX1dPUktTUEFDRV9JRFwiXSxbXCJCVUlMREtJVEVcIl0sW1wiQ0lSQ0xFXCIsXCJDSVJDTEVDSVwiXSxbXCJDSVJSVVNcIixcIkNJUlJVU19DSVwiXSxbXCJDTE9VREZMQVJFX1BBR0VTXCIsXCJDRl9QQUdFU1wiLHtjaTp0cnVlfV0sW1wiQ09ERUJVSUxEXCIsXCJDT0RFQlVJTERfQlVJTERfQVJOXCJdLFtcIkNPREVGUkVTSFwiLFwiQ0ZfQlVJTERfSURcIl0sW1wiRFJPTkVcIl0sW1wiRFJPTkVcIixcIkRST05FX0JVSUxEX0VWRU5UXCJdLFtcIkRTQVJJXCJdLFtcIkdJVEhVQl9BQ1RJT05TXCJdLFtcIkdJVExBQlwiLFwiR0lUTEFCX0NJXCJdLFtcIkdJVExBQlwiLFwiQ0lfTUVSR0VfUkVRVUVTVF9JRFwiXSxbXCJHT0NEXCIsXCJHT19QSVBFTElORV9MQUJFTFwiXSxbXCJMQVlFUkNJXCJdLFtcIkhVRFNPTlwiLFwiSFVEU09OX1VSTFwiXSxbXCJKRU5LSU5TXCIsXCJKRU5LSU5TX1VSTFwiXSxbXCJNQUdOVU1cIl0sW1wiTkVUTElGWVwiXSxbXCJORVRMSUZZXCIsXCJORVRMSUZZX0xPQ0FMXCIse2NpOmZhbHNlfV0sW1wiTkVWRVJDT0RFXCJdLFtcIlJFTkRFUlwiXSxbXCJTQUlMXCIsXCJTQUlMQ0lcIl0sW1wiU0VNQVBIT1JFXCJdLFtcIlNDUkVXRFJJVkVSXCJdLFtcIlNISVBQQUJMRVwiXSxbXCJTT0xBTk9cIixcIlRERElVTVwiXSxbXCJTVFJJREVSXCJdLFtcIlRFQU1DSVRZXCIsXCJURUFNQ0lUWV9WRVJTSU9OXCJdLFtcIlRSQVZJU1wiXSxbXCJWRVJDRUxcIixcIk5PV19CVUlMREVSXCJdLFtcIlZFUkNFTFwiLFwiVkVSQ0VMXCIse2NpOmZhbHNlfV0sW1wiVkVSQ0VMXCIsXCJWRVJDRUxfRU5WXCIse2NpOmZhbHNlfV0sW1wiQVBQQ0VOVEVSXCIsXCJBUFBDRU5URVJfQlVJTERfSURcIl0sW1wiQ09ERVNBTkRCT1hcIixcIkNPREVTQU5EQk9YX1NTRVwiLHtjaTpmYWxzZX1dLFtcIkNPREVTQU5EQk9YXCIsXCJDT0RFU0FOREJPWF9IT1NUXCIse2NpOmZhbHNlfV0sW1wiU1RBQ0tCTElUWlwiXSxbXCJTVE9STUtJVFwiXSxbXCJDTEVBVlJcIl0sW1wiWkVBQlVSXCJdLFtcIkNPREVTUEhFUkVcIixcIkNPREVTUEhFUkVfQVBQX0lEXCIse2NpOnRydWV9XSxbXCJSQUlMV0FZXCIsXCJSQUlMV0FZX1BST0pFQ1RfSURcIl0sW1wiUkFJTFdBWVwiLFwiUkFJTFdBWV9TRVJWSUNFX0lEXCJdLFtcIkRFTk8tREVQTE9ZXCIsXCJERU5PX0RFUExPWU1FTlRfSURcIl0sW1wiRklSRUJBU0VfQVBQX0hPU1RJTkdcIixcIkZJUkVCQVNFX0FQUF9IT1NUSU5HXCIse2NpOnRydWV9XV07ZnVuY3Rpb24gYigpe2lmKGdsb2JhbFRoaXMucHJvY2Vzcz8uZW52KWZvcihjb25zdCBlIG9mIGYpe2NvbnN0IHM9ZVsxXXx8ZVswXTtpZihnbG9iYWxUaGlzLnByb2Nlc3M/LmVudltzXSlyZXR1cm4ge25hbWU6ZVswXS50b0xvd2VyQ2FzZSgpLC4uLmVbMl19fXJldHVybiBnbG9iYWxUaGlzLnByb2Nlc3M/LmVudj8uU0hFTEw9PT1cIi9iaW4vanNoXCImJmdsb2JhbFRoaXMucHJvY2Vzcz8udmVyc2lvbnM/LndlYmNvbnRhaW5lcj97bmFtZTpcInN0YWNrYmxpdHpcIixjaTpmYWxzZX06e25hbWU6XCJcIixjaTpmYWxzZX19Y29uc3QgbD1iKCk7bC5uYW1lO2Z1bmN0aW9uIG4oZSl7cmV0dXJuIGU/ZSE9PVwiZmFsc2VcIjpmYWxzZX1jb25zdCBJPWdsb2JhbFRoaXMucHJvY2Vzcz8ucGxhdGZvcm18fFwiXCIsVD1uKG8uQ0kpfHxsLmNpIT09ZmFsc2UsYT1uKGdsb2JhbFRoaXMucHJvY2Vzcz8uc3Rkb3V0JiZnbG9iYWxUaGlzLnByb2Nlc3M/LnN0ZG91dC5pc1RUWSksZz1uKG8uREVCVUcpLFI9dD09PVwidGVzdFwifHxuKG8uVEVTVCk7bihvLk1JTklNQUwpfHxUfHxSfHwhYTtjb25zdCBBPS9ed2luL2kudGVzdChJKTshbihvLk5PX0NPTE9SKSYmKG4oby5GT1JDRV9DT0xPUil8fChhfHxBKSYmby5URVJNIT09XCJkdW1iXCJ8fFQpO2NvbnN0IEM9KGdsb2JhbFRoaXMucHJvY2Vzcz8udmVyc2lvbnM/Lm5vZGV8fFwiXCIpLnJlcGxhY2UoL152LyxcIlwiKXx8bnVsbDtOdW1iZXIoQz8uc3BsaXQoXCIuXCIpWzBdKXx8bnVsbDtjb25zdCB5PWdsb2JhbFRoaXMucHJvY2Vzc3x8T2JqZWN0LmNyZWF0ZShudWxsKSxfPXt2ZXJzaW9uczp7fX07bmV3IFByb3h5KHkse2dldChlLHMpe2lmKHM9PT1cImVudlwiKXJldHVybiBvO2lmKHMgaW4gZSlyZXR1cm4gZVtzXTtpZihzIGluIF8pcmV0dXJuIF9bc119fSk7Y29uc3QgYz1nbG9iYWxUaGlzLnByb2Nlc3M/LnJlbGVhc2U/Lm5hbWU9PT1cIm5vZGVcIixPPSEhZ2xvYmFsVGhpcy5CdW58fCEhZ2xvYmFsVGhpcy5wcm9jZXNzPy52ZXJzaW9ucz8uYnVuLEQ9ISFnbG9iYWxUaGlzLkRlbm8sTD0hIWdsb2JhbFRoaXMuZmFzdGx5LFM9ISFnbG9iYWxUaGlzLk5ldGxpZnksdT0hIWdsb2JhbFRoaXMuRWRnZVJ1bnRpbWUsTj1nbG9iYWxUaGlzLm5hdmlnYXRvcj8udXNlckFnZW50PT09XCJDbG91ZGZsYXJlLVdvcmtlcnNcIixGPVtbUyxcIm5ldGxpZnlcIl0sW3UsXCJlZGdlLWxpZ2h0XCJdLFtOLFwid29ya2VyZFwiXSxbTCxcImZhc3RseVwiXSxbRCxcImRlbm9cIl0sW08sXCJidW5cIl0sW2MsXCJub2RlXCJdXTtmdW5jdGlvbiBHKCl7Y29uc3QgZT1GLmZpbmQocz0+c1swXSk7aWYoZSlyZXR1cm4ge25hbWU6ZVsxXX19Y29uc3QgUD1HKCk7UD8ubmFtZXx8XCJcIjtcblxuZnVuY3Rpb24gYW5zaVJlZ2V4KHtvbmx5Rmlyc3QgPSBmYWxzZX0gPSB7fSkge1xuXHQvLyBWYWxpZCBzdHJpbmcgdGVybWluYXRvciBzZXF1ZW5jZXMgYXJlIEJFTCwgRVNDXFwsIGFuZCAweDljXG5cdGNvbnN0IFNUID0gJyg/OlxcXFx1MDAwN3xcXFxcdTAwMUJcXFxcdTAwNUN8XFxcXHUwMDlDKSc7XG5cdGNvbnN0IHBhdHRlcm4gPSBbXG5cdFx0YFtcXFxcdTAwMUJcXFxcdTAwOUJdW1tcXFxcXSgpIzs/XSooPzooPzooPzooPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10rKSp8W2EtekEtWlxcXFxkXSsoPzo7Wy1hLXpBLVpcXFxcZFxcXFwvIyYuOj0/JUB+X10qKSopPyR7U1R9KWAsXG5cdFx0Jyg/Oig/OlxcXFxkezEsNH0oPzo7XFxcXGR7MCw0fSkqKT9bXFxcXGRBLVBSLVRaY2YtbnEtdXk9Pjx+XSkpJyxcblx0XS5qb2luKCd8Jyk7XG5cblx0cmV0dXJuIG5ldyBSZWdFeHAocGF0dGVybiwgb25seUZpcnN0ID8gdW5kZWZpbmVkIDogJ2cnKTtcbn1cblxuY29uc3QgcmVnZXggPSBhbnNpUmVnZXgoKTtcblxuZnVuY3Rpb24gc3RyaXBBbnNpKHN0cmluZykge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycpIHtcblx0XHR0aHJvdyBuZXcgVHlwZUVycm9yKGBFeHBlY3RlZCBhIFxcYHN0cmluZ1xcYCwgZ290IFxcYCR7dHlwZW9mIHN0cmluZ31cXGBgKTtcblx0fVxuXG5cdC8vIEV2ZW4gdGhvdWdoIHRoZSByZWdleCBpcyBnbG9iYWwsIHdlIGRvbid0IG5lZWQgdG8gcmVzZXQgdGhlIGAubGFzdEluZGV4YFxuXHQvLyBiZWNhdXNlIHVubGlrZSBgLmV4ZWMoKWAgYW5kIGAudGVzdCgpYCwgYC5yZXBsYWNlKClgIGRvZXMgaXQgYXV0b21hdGljYWxseVxuXHQvLyBhbmQgZG9pbmcgaXQgbWFudWFsbHkgaGFzIGEgcGVyZm9ybWFuY2UgcGVuYWx0eS5cblx0cmV0dXJuIHN0cmluZy5yZXBsYWNlKHJlZ2V4LCAnJyk7XG59XG5cbi8vIEdlbmVyYXRlZCBjb2RlLlxuXG5mdW5jdGlvbiBpc0FtYmlndW91cyh4KSB7XG5cdHJldHVybiB4ID09PSAweEExXG5cdFx0fHwgeCA9PT0gMHhBNFxuXHRcdHx8IHggPT09IDB4QTdcblx0XHR8fCB4ID09PSAweEE4XG5cdFx0fHwgeCA9PT0gMHhBQVxuXHRcdHx8IHggPT09IDB4QURcblx0XHR8fCB4ID09PSAweEFFXG5cdFx0fHwgeCA+PSAweEIwICYmIHggPD0gMHhCNFxuXHRcdHx8IHggPj0gMHhCNiAmJiB4IDw9IDB4QkFcblx0XHR8fCB4ID49IDB4QkMgJiYgeCA8PSAweEJGXG5cdFx0fHwgeCA9PT0gMHhDNlxuXHRcdHx8IHggPT09IDB4RDBcblx0XHR8fCB4ID09PSAweEQ3XG5cdFx0fHwgeCA9PT0gMHhEOFxuXHRcdHx8IHggPj0gMHhERSAmJiB4IDw9IDB4RTFcblx0XHR8fCB4ID09PSAweEU2XG5cdFx0fHwgeCA+PSAweEU4ICYmIHggPD0gMHhFQVxuXHRcdHx8IHggPT09IDB4RUNcblx0XHR8fCB4ID09PSAweEVEXG5cdFx0fHwgeCA9PT0gMHhGMFxuXHRcdHx8IHggPT09IDB4RjJcblx0XHR8fCB4ID09PSAweEYzXG5cdFx0fHwgeCA+PSAweEY3ICYmIHggPD0gMHhGQVxuXHRcdHx8IHggPT09IDB4RkNcblx0XHR8fCB4ID09PSAweEZFXG5cdFx0fHwgeCA9PT0gMHgxMDFcblx0XHR8fCB4ID09PSAweDExMVxuXHRcdHx8IHggPT09IDB4MTEzXG5cdFx0fHwgeCA9PT0gMHgxMUJcblx0XHR8fCB4ID09PSAweDEyNlxuXHRcdHx8IHggPT09IDB4MTI3XG5cdFx0fHwgeCA9PT0gMHgxMkJcblx0XHR8fCB4ID49IDB4MTMxICYmIHggPD0gMHgxMzNcblx0XHR8fCB4ID09PSAweDEzOFxuXHRcdHx8IHggPj0gMHgxM0YgJiYgeCA8PSAweDE0MlxuXHRcdHx8IHggPT09IDB4MTQ0XG5cdFx0fHwgeCA+PSAweDE0OCAmJiB4IDw9IDB4MTRCXG5cdFx0fHwgeCA9PT0gMHgxNERcblx0XHR8fCB4ID09PSAweDE1MlxuXHRcdHx8IHggPT09IDB4MTUzXG5cdFx0fHwgeCA9PT0gMHgxNjZcblx0XHR8fCB4ID09PSAweDE2N1xuXHRcdHx8IHggPT09IDB4MTZCXG5cdFx0fHwgeCA9PT0gMHgxQ0Vcblx0XHR8fCB4ID09PSAweDFEMFxuXHRcdHx8IHggPT09IDB4MUQyXG5cdFx0fHwgeCA9PT0gMHgxRDRcblx0XHR8fCB4ID09PSAweDFENlxuXHRcdHx8IHggPT09IDB4MUQ4XG5cdFx0fHwgeCA9PT0gMHgxREFcblx0XHR8fCB4ID09PSAweDFEQ1xuXHRcdHx8IHggPT09IDB4MjUxXG5cdFx0fHwgeCA9PT0gMHgyNjFcblx0XHR8fCB4ID09PSAweDJDNFxuXHRcdHx8IHggPT09IDB4MkM3XG5cdFx0fHwgeCA+PSAweDJDOSAmJiB4IDw9IDB4MkNCXG5cdFx0fHwgeCA9PT0gMHgyQ0Rcblx0XHR8fCB4ID09PSAweDJEMFxuXHRcdHx8IHggPj0gMHgyRDggJiYgeCA8PSAweDJEQlxuXHRcdHx8IHggPT09IDB4MkREXG5cdFx0fHwgeCA9PT0gMHgyREZcblx0XHR8fCB4ID49IDB4MzAwICYmIHggPD0gMHgzNkZcblx0XHR8fCB4ID49IDB4MzkxICYmIHggPD0gMHgzQTFcblx0XHR8fCB4ID49IDB4M0EzICYmIHggPD0gMHgzQTlcblx0XHR8fCB4ID49IDB4M0IxICYmIHggPD0gMHgzQzFcblx0XHR8fCB4ID49IDB4M0MzICYmIHggPD0gMHgzQzlcblx0XHR8fCB4ID09PSAweDQwMVxuXHRcdHx8IHggPj0gMHg0MTAgJiYgeCA8PSAweDQ0RlxuXHRcdHx8IHggPT09IDB4NDUxXG5cdFx0fHwgeCA9PT0gMHgyMDEwXG5cdFx0fHwgeCA+PSAweDIwMTMgJiYgeCA8PSAweDIwMTZcblx0XHR8fCB4ID09PSAweDIwMThcblx0XHR8fCB4ID09PSAweDIwMTlcblx0XHR8fCB4ID09PSAweDIwMUNcblx0XHR8fCB4ID09PSAweDIwMURcblx0XHR8fCB4ID49IDB4MjAyMCAmJiB4IDw9IDB4MjAyMlxuXHRcdHx8IHggPj0gMHgyMDI0ICYmIHggPD0gMHgyMDI3XG5cdFx0fHwgeCA9PT0gMHgyMDMwXG5cdFx0fHwgeCA9PT0gMHgyMDMyXG5cdFx0fHwgeCA9PT0gMHgyMDMzXG5cdFx0fHwgeCA9PT0gMHgyMDM1XG5cdFx0fHwgeCA9PT0gMHgyMDNCXG5cdFx0fHwgeCA9PT0gMHgyMDNFXG5cdFx0fHwgeCA9PT0gMHgyMDc0XG5cdFx0fHwgeCA9PT0gMHgyMDdGXG5cdFx0fHwgeCA+PSAweDIwODEgJiYgeCA8PSAweDIwODRcblx0XHR8fCB4ID09PSAweDIwQUNcblx0XHR8fCB4ID09PSAweDIxMDNcblx0XHR8fCB4ID09PSAweDIxMDVcblx0XHR8fCB4ID09PSAweDIxMDlcblx0XHR8fCB4ID09PSAweDIxMTNcblx0XHR8fCB4ID09PSAweDIxMTZcblx0XHR8fCB4ID09PSAweDIxMjFcblx0XHR8fCB4ID09PSAweDIxMjJcblx0XHR8fCB4ID09PSAweDIxMjZcblx0XHR8fCB4ID09PSAweDIxMkJcblx0XHR8fCB4ID09PSAweDIxNTNcblx0XHR8fCB4ID09PSAweDIxNTRcblx0XHR8fCB4ID49IDB4MjE1QiAmJiB4IDw9IDB4MjE1RVxuXHRcdHx8IHggPj0gMHgyMTYwICYmIHggPD0gMHgyMTZCXG5cdFx0fHwgeCA+PSAweDIxNzAgJiYgeCA8PSAweDIxNzlcblx0XHR8fCB4ID09PSAweDIxODlcblx0XHR8fCB4ID49IDB4MjE5MCAmJiB4IDw9IDB4MjE5OVxuXHRcdHx8IHggPT09IDB4MjFCOFxuXHRcdHx8IHggPT09IDB4MjFCOVxuXHRcdHx8IHggPT09IDB4MjFEMlxuXHRcdHx8IHggPT09IDB4MjFENFxuXHRcdHx8IHggPT09IDB4MjFFN1xuXHRcdHx8IHggPT09IDB4MjIwMFxuXHRcdHx8IHggPT09IDB4MjIwMlxuXHRcdHx8IHggPT09IDB4MjIwM1xuXHRcdHx8IHggPT09IDB4MjIwN1xuXHRcdHx8IHggPT09IDB4MjIwOFxuXHRcdHx8IHggPT09IDB4MjIwQlxuXHRcdHx8IHggPT09IDB4MjIwRlxuXHRcdHx8IHggPT09IDB4MjIxMVxuXHRcdHx8IHggPT09IDB4MjIxNVxuXHRcdHx8IHggPT09IDB4MjIxQVxuXHRcdHx8IHggPj0gMHgyMjFEICYmIHggPD0gMHgyMjIwXG5cdFx0fHwgeCA9PT0gMHgyMjIzXG5cdFx0fHwgeCA9PT0gMHgyMjI1XG5cdFx0fHwgeCA+PSAweDIyMjcgJiYgeCA8PSAweDIyMkNcblx0XHR8fCB4ID09PSAweDIyMkVcblx0XHR8fCB4ID49IDB4MjIzNCAmJiB4IDw9IDB4MjIzN1xuXHRcdHx8IHggPT09IDB4MjIzQ1xuXHRcdHx8IHggPT09IDB4MjIzRFxuXHRcdHx8IHggPT09IDB4MjI0OFxuXHRcdHx8IHggPT09IDB4MjI0Q1xuXHRcdHx8IHggPT09IDB4MjI1MlxuXHRcdHx8IHggPT09IDB4MjI2MFxuXHRcdHx8IHggPT09IDB4MjI2MVxuXHRcdHx8IHggPj0gMHgyMjY0ICYmIHggPD0gMHgyMjY3XG5cdFx0fHwgeCA9PT0gMHgyMjZBXG5cdFx0fHwgeCA9PT0gMHgyMjZCXG5cdFx0fHwgeCA9PT0gMHgyMjZFXG5cdFx0fHwgeCA9PT0gMHgyMjZGXG5cdFx0fHwgeCA9PT0gMHgyMjgyXG5cdFx0fHwgeCA9PT0gMHgyMjgzXG5cdFx0fHwgeCA9PT0gMHgyMjg2XG5cdFx0fHwgeCA9PT0gMHgyMjg3XG5cdFx0fHwgeCA9PT0gMHgyMjk1XG5cdFx0fHwgeCA9PT0gMHgyMjk5XG5cdFx0fHwgeCA9PT0gMHgyMkE1XG5cdFx0fHwgeCA9PT0gMHgyMkJGXG5cdFx0fHwgeCA9PT0gMHgyMzEyXG5cdFx0fHwgeCA+PSAweDI0NjAgJiYgeCA8PSAweDI0RTlcblx0XHR8fCB4ID49IDB4MjRFQiAmJiB4IDw9IDB4MjU0QlxuXHRcdHx8IHggPj0gMHgyNTUwICYmIHggPD0gMHgyNTczXG5cdFx0fHwgeCA+PSAweDI1ODAgJiYgeCA8PSAweDI1OEZcblx0XHR8fCB4ID49IDB4MjU5MiAmJiB4IDw9IDB4MjU5NVxuXHRcdHx8IHggPT09IDB4MjVBMFxuXHRcdHx8IHggPT09IDB4MjVBMVxuXHRcdHx8IHggPj0gMHgyNUEzICYmIHggPD0gMHgyNUE5XG5cdFx0fHwgeCA9PT0gMHgyNUIyXG5cdFx0fHwgeCA9PT0gMHgyNUIzXG5cdFx0fHwgeCA9PT0gMHgyNUI2XG5cdFx0fHwgeCA9PT0gMHgyNUI3XG5cdFx0fHwgeCA9PT0gMHgyNUJDXG5cdFx0fHwgeCA9PT0gMHgyNUJEXG5cdFx0fHwgeCA9PT0gMHgyNUMwXG5cdFx0fHwgeCA9PT0gMHgyNUMxXG5cdFx0fHwgeCA+PSAweDI1QzYgJiYgeCA8PSAweDI1Qzhcblx0XHR8fCB4ID09PSAweDI1Q0Jcblx0XHR8fCB4ID49IDB4MjVDRSAmJiB4IDw9IDB4MjVEMVxuXHRcdHx8IHggPj0gMHgyNUUyICYmIHggPD0gMHgyNUU1XG5cdFx0fHwgeCA9PT0gMHgyNUVGXG5cdFx0fHwgeCA9PT0gMHgyNjA1XG5cdFx0fHwgeCA9PT0gMHgyNjA2XG5cdFx0fHwgeCA9PT0gMHgyNjA5XG5cdFx0fHwgeCA9PT0gMHgyNjBFXG5cdFx0fHwgeCA9PT0gMHgyNjBGXG5cdFx0fHwgeCA9PT0gMHgyNjFDXG5cdFx0fHwgeCA9PT0gMHgyNjFFXG5cdFx0fHwgeCA9PT0gMHgyNjQwXG5cdFx0fHwgeCA9PT0gMHgyNjQyXG5cdFx0fHwgeCA9PT0gMHgyNjYwXG5cdFx0fHwgeCA9PT0gMHgyNjYxXG5cdFx0fHwgeCA+PSAweDI2NjMgJiYgeCA8PSAweDI2NjVcblx0XHR8fCB4ID49IDB4MjY2NyAmJiB4IDw9IDB4MjY2QVxuXHRcdHx8IHggPT09IDB4MjY2Q1xuXHRcdHx8IHggPT09IDB4MjY2RFxuXHRcdHx8IHggPT09IDB4MjY2RlxuXHRcdHx8IHggPT09IDB4MjY5RVxuXHRcdHx8IHggPT09IDB4MjY5RlxuXHRcdHx8IHggPT09IDB4MjZCRlxuXHRcdHx8IHggPj0gMHgyNkM2ICYmIHggPD0gMHgyNkNEXG5cdFx0fHwgeCA+PSAweDI2Q0YgJiYgeCA8PSAweDI2RDNcblx0XHR8fCB4ID49IDB4MjZENSAmJiB4IDw9IDB4MjZFMVxuXHRcdHx8IHggPT09IDB4MjZFM1xuXHRcdHx8IHggPT09IDB4MjZFOFxuXHRcdHx8IHggPT09IDB4MjZFOVxuXHRcdHx8IHggPj0gMHgyNkVCICYmIHggPD0gMHgyNkYxXG5cdFx0fHwgeCA9PT0gMHgyNkY0XG5cdFx0fHwgeCA+PSAweDI2RjYgJiYgeCA8PSAweDI2Rjlcblx0XHR8fCB4ID09PSAweDI2RkJcblx0XHR8fCB4ID09PSAweDI2RkNcblx0XHR8fCB4ID09PSAweDI2RkVcblx0XHR8fCB4ID09PSAweDI2RkZcblx0XHR8fCB4ID09PSAweDI3M0Rcblx0XHR8fCB4ID49IDB4Mjc3NiAmJiB4IDw9IDB4Mjc3RlxuXHRcdHx8IHggPj0gMHgyQjU2ICYmIHggPD0gMHgyQjU5XG5cdFx0fHwgeCA+PSAweDMyNDggJiYgeCA8PSAweDMyNEZcblx0XHR8fCB4ID49IDB4RTAwMCAmJiB4IDw9IDB4RjhGRlxuXHRcdHx8IHggPj0gMHhGRTAwICYmIHggPD0gMHhGRTBGXG5cdFx0fHwgeCA9PT0gMHhGRkZEXG5cdFx0fHwgeCA+PSAweDFGMTAwICYmIHggPD0gMHgxRjEwQVxuXHRcdHx8IHggPj0gMHgxRjExMCAmJiB4IDw9IDB4MUYxMkRcblx0XHR8fCB4ID49IDB4MUYxMzAgJiYgeCA8PSAweDFGMTY5XG5cdFx0fHwgeCA+PSAweDFGMTcwICYmIHggPD0gMHgxRjE4RFxuXHRcdHx8IHggPT09IDB4MUYxOEZcblx0XHR8fCB4ID09PSAweDFGMTkwXG5cdFx0fHwgeCA+PSAweDFGMTlCICYmIHggPD0gMHgxRjFBQ1xuXHRcdHx8IHggPj0gMHhFMDEwMCAmJiB4IDw9IDB4RTAxRUZcblx0XHR8fCB4ID49IDB4RjAwMDAgJiYgeCA8PSAweEZGRkZEXG5cdFx0fHwgeCA+PSAweDEwMDAwMCAmJiB4IDw9IDB4MTBGRkZEO1xufVxuXG5mdW5jdGlvbiBpc0Z1bGxXaWR0aCh4KSB7XG5cdHJldHVybiB4ID09PSAweDMwMDBcblx0XHR8fCB4ID49IDB4RkYwMSAmJiB4IDw9IDB4RkY2MFxuXHRcdHx8IHggPj0gMHhGRkUwICYmIHggPD0gMHhGRkU2O1xufVxuXG5mdW5jdGlvbiBpc1dpZGUoeCkge1xuXHRyZXR1cm4geCA+PSAweDExMDAgJiYgeCA8PSAweDExNUZcblx0XHR8fCB4ID09PSAweDIzMUFcblx0XHR8fCB4ID09PSAweDIzMUJcblx0XHR8fCB4ID09PSAweDIzMjlcblx0XHR8fCB4ID09PSAweDIzMkFcblx0XHR8fCB4ID49IDB4MjNFOSAmJiB4IDw9IDB4MjNFQ1xuXHRcdHx8IHggPT09IDB4MjNGMFxuXHRcdHx8IHggPT09IDB4MjNGM1xuXHRcdHx8IHggPT09IDB4MjVGRFxuXHRcdHx8IHggPT09IDB4MjVGRVxuXHRcdHx8IHggPT09IDB4MjYxNFxuXHRcdHx8IHggPT09IDB4MjYxNVxuXHRcdHx8IHggPj0gMHgyNjMwICYmIHggPD0gMHgyNjM3XG5cdFx0fHwgeCA+PSAweDI2NDggJiYgeCA8PSAweDI2NTNcblx0XHR8fCB4ID09PSAweDI2N0Zcblx0XHR8fCB4ID49IDB4MjY4QSAmJiB4IDw9IDB4MjY4RlxuXHRcdHx8IHggPT09IDB4MjY5M1xuXHRcdHx8IHggPT09IDB4MjZBMVxuXHRcdHx8IHggPT09IDB4MjZBQVxuXHRcdHx8IHggPT09IDB4MjZBQlxuXHRcdHx8IHggPT09IDB4MjZCRFxuXHRcdHx8IHggPT09IDB4MjZCRVxuXHRcdHx8IHggPT09IDB4MjZDNFxuXHRcdHx8IHggPT09IDB4MjZDNVxuXHRcdHx8IHggPT09IDB4MjZDRVxuXHRcdHx8IHggPT09IDB4MjZENFxuXHRcdHx8IHggPT09IDB4MjZFQVxuXHRcdHx8IHggPT09IDB4MjZGMlxuXHRcdHx8IHggPT09IDB4MjZGM1xuXHRcdHx8IHggPT09IDB4MjZGNVxuXHRcdHx8IHggPT09IDB4MjZGQVxuXHRcdHx8IHggPT09IDB4MjZGRFxuXHRcdHx8IHggPT09IDB4MjcwNVxuXHRcdHx8IHggPT09IDB4MjcwQVxuXHRcdHx8IHggPT09IDB4MjcwQlxuXHRcdHx8IHggPT09IDB4MjcyOFxuXHRcdHx8IHggPT09IDB4Mjc0Q1xuXHRcdHx8IHggPT09IDB4Mjc0RVxuXHRcdHx8IHggPj0gMHgyNzUzICYmIHggPD0gMHgyNzU1XG5cdFx0fHwgeCA9PT0gMHgyNzU3XG5cdFx0fHwgeCA+PSAweDI3OTUgJiYgeCA8PSAweDI3OTdcblx0XHR8fCB4ID09PSAweDI3QjBcblx0XHR8fCB4ID09PSAweDI3QkZcblx0XHR8fCB4ID09PSAweDJCMUJcblx0XHR8fCB4ID09PSAweDJCMUNcblx0XHR8fCB4ID09PSAweDJCNTBcblx0XHR8fCB4ID09PSAweDJCNTVcblx0XHR8fCB4ID49IDB4MkU4MCAmJiB4IDw9IDB4MkU5OVxuXHRcdHx8IHggPj0gMHgyRTlCICYmIHggPD0gMHgyRUYzXG5cdFx0fHwgeCA+PSAweDJGMDAgJiYgeCA8PSAweDJGRDVcblx0XHR8fCB4ID49IDB4MkZGMCAmJiB4IDw9IDB4MkZGRlxuXHRcdHx8IHggPj0gMHgzMDAxICYmIHggPD0gMHgzMDNFXG5cdFx0fHwgeCA+PSAweDMwNDEgJiYgeCA8PSAweDMwOTZcblx0XHR8fCB4ID49IDB4MzA5OSAmJiB4IDw9IDB4MzBGRlxuXHRcdHx8IHggPj0gMHgzMTA1ICYmIHggPD0gMHgzMTJGXG5cdFx0fHwgeCA+PSAweDMxMzEgJiYgeCA8PSAweDMxOEVcblx0XHR8fCB4ID49IDB4MzE5MCAmJiB4IDw9IDB4MzFFNVxuXHRcdHx8IHggPj0gMHgzMUVGICYmIHggPD0gMHgzMjFFXG5cdFx0fHwgeCA+PSAweDMyMjAgJiYgeCA8PSAweDMyNDdcblx0XHR8fCB4ID49IDB4MzI1MCAmJiB4IDw9IDB4QTQ4Q1xuXHRcdHx8IHggPj0gMHhBNDkwICYmIHggPD0gMHhBNEM2XG5cdFx0fHwgeCA+PSAweEE5NjAgJiYgeCA8PSAweEE5N0Ncblx0XHR8fCB4ID49IDB4QUMwMCAmJiB4IDw9IDB4RDdBM1xuXHRcdHx8IHggPj0gMHhGOTAwICYmIHggPD0gMHhGQUZGXG5cdFx0fHwgeCA+PSAweEZFMTAgJiYgeCA8PSAweEZFMTlcblx0XHR8fCB4ID49IDB4RkUzMCAmJiB4IDw9IDB4RkU1MlxuXHRcdHx8IHggPj0gMHhGRTU0ICYmIHggPD0gMHhGRTY2XG5cdFx0fHwgeCA+PSAweEZFNjggJiYgeCA8PSAweEZFNkJcblx0XHR8fCB4ID49IDB4MTZGRTAgJiYgeCA8PSAweDE2RkU0XG5cdFx0fHwgeCA9PT0gMHgxNkZGMFxuXHRcdHx8IHggPT09IDB4MTZGRjFcblx0XHR8fCB4ID49IDB4MTcwMDAgJiYgeCA8PSAweDE4N0Y3XG5cdFx0fHwgeCA+PSAweDE4ODAwICYmIHggPD0gMHgxOENENVxuXHRcdHx8IHggPj0gMHgxOENGRiAmJiB4IDw9IDB4MThEMDhcblx0XHR8fCB4ID49IDB4MUFGRjAgJiYgeCA8PSAweDFBRkYzXG5cdFx0fHwgeCA+PSAweDFBRkY1ICYmIHggPD0gMHgxQUZGQlxuXHRcdHx8IHggPT09IDB4MUFGRkRcblx0XHR8fCB4ID09PSAweDFBRkZFXG5cdFx0fHwgeCA+PSAweDFCMDAwICYmIHggPD0gMHgxQjEyMlxuXHRcdHx8IHggPT09IDB4MUIxMzJcblx0XHR8fCB4ID49IDB4MUIxNTAgJiYgeCA8PSAweDFCMTUyXG5cdFx0fHwgeCA9PT0gMHgxQjE1NVxuXHRcdHx8IHggPj0gMHgxQjE2NCAmJiB4IDw9IDB4MUIxNjdcblx0XHR8fCB4ID49IDB4MUIxNzAgJiYgeCA8PSAweDFCMkZCXG5cdFx0fHwgeCA+PSAweDFEMzAwICYmIHggPD0gMHgxRDM1NlxuXHRcdHx8IHggPj0gMHgxRDM2MCAmJiB4IDw9IDB4MUQzNzZcblx0XHR8fCB4ID09PSAweDFGMDA0XG5cdFx0fHwgeCA9PT0gMHgxRjBDRlxuXHRcdHx8IHggPT09IDB4MUYxOEVcblx0XHR8fCB4ID49IDB4MUYxOTEgJiYgeCA8PSAweDFGMTlBXG5cdFx0fHwgeCA+PSAweDFGMjAwICYmIHggPD0gMHgxRjIwMlxuXHRcdHx8IHggPj0gMHgxRjIxMCAmJiB4IDw9IDB4MUYyM0Jcblx0XHR8fCB4ID49IDB4MUYyNDAgJiYgeCA8PSAweDFGMjQ4XG5cdFx0fHwgeCA9PT0gMHgxRjI1MFxuXHRcdHx8IHggPT09IDB4MUYyNTFcblx0XHR8fCB4ID49IDB4MUYyNjAgJiYgeCA8PSAweDFGMjY1XG5cdFx0fHwgeCA+PSAweDFGMzAwICYmIHggPD0gMHgxRjMyMFxuXHRcdHx8IHggPj0gMHgxRjMyRCAmJiB4IDw9IDB4MUYzMzVcblx0XHR8fCB4ID49IDB4MUYzMzcgJiYgeCA8PSAweDFGMzdDXG5cdFx0fHwgeCA+PSAweDFGMzdFICYmIHggPD0gMHgxRjM5M1xuXHRcdHx8IHggPj0gMHgxRjNBMCAmJiB4IDw9IDB4MUYzQ0Fcblx0XHR8fCB4ID49IDB4MUYzQ0YgJiYgeCA8PSAweDFGM0QzXG5cdFx0fHwgeCA+PSAweDFGM0UwICYmIHggPD0gMHgxRjNGMFxuXHRcdHx8IHggPT09IDB4MUYzRjRcblx0XHR8fCB4ID49IDB4MUYzRjggJiYgeCA8PSAweDFGNDNFXG5cdFx0fHwgeCA9PT0gMHgxRjQ0MFxuXHRcdHx8IHggPj0gMHgxRjQ0MiAmJiB4IDw9IDB4MUY0RkNcblx0XHR8fCB4ID49IDB4MUY0RkYgJiYgeCA8PSAweDFGNTNEXG5cdFx0fHwgeCA+PSAweDFGNTRCICYmIHggPD0gMHgxRjU0RVxuXHRcdHx8IHggPj0gMHgxRjU1MCAmJiB4IDw9IDB4MUY1Njdcblx0XHR8fCB4ID09PSAweDFGNTdBXG5cdFx0fHwgeCA9PT0gMHgxRjU5NVxuXHRcdHx8IHggPT09IDB4MUY1OTZcblx0XHR8fCB4ID09PSAweDFGNUE0XG5cdFx0fHwgeCA+PSAweDFGNUZCICYmIHggPD0gMHgxRjY0RlxuXHRcdHx8IHggPj0gMHgxRjY4MCAmJiB4IDw9IDB4MUY2QzVcblx0XHR8fCB4ID09PSAweDFGNkNDXG5cdFx0fHwgeCA+PSAweDFGNkQwICYmIHggPD0gMHgxRjZEMlxuXHRcdHx8IHggPj0gMHgxRjZENSAmJiB4IDw9IDB4MUY2RDdcblx0XHR8fCB4ID49IDB4MUY2REMgJiYgeCA8PSAweDFGNkRGXG5cdFx0fHwgeCA9PT0gMHgxRjZFQlxuXHRcdHx8IHggPT09IDB4MUY2RUNcblx0XHR8fCB4ID49IDB4MUY2RjQgJiYgeCA8PSAweDFGNkZDXG5cdFx0fHwgeCA+PSAweDFGN0UwICYmIHggPD0gMHgxRjdFQlxuXHRcdHx8IHggPT09IDB4MUY3RjBcblx0XHR8fCB4ID49IDB4MUY5MEMgJiYgeCA8PSAweDFGOTNBXG5cdFx0fHwgeCA+PSAweDFGOTNDICYmIHggPD0gMHgxRjk0NVxuXHRcdHx8IHggPj0gMHgxRjk0NyAmJiB4IDw9IDB4MUY5RkZcblx0XHR8fCB4ID49IDB4MUZBNzAgJiYgeCA8PSAweDFGQTdDXG5cdFx0fHwgeCA+PSAweDFGQTgwICYmIHggPD0gMHgxRkE4OVxuXHRcdHx8IHggPj0gMHgxRkE4RiAmJiB4IDw9IDB4MUZBQzZcblx0XHR8fCB4ID49IDB4MUZBQ0UgJiYgeCA8PSAweDFGQURDXG5cdFx0fHwgeCA+PSAweDFGQURGICYmIHggPD0gMHgxRkFFOVxuXHRcdHx8IHggPj0gMHgxRkFGMCAmJiB4IDw9IDB4MUZBRjhcblx0XHR8fCB4ID49IDB4MjAwMDAgJiYgeCA8PSAweDJGRkZEXG5cdFx0fHwgeCA+PSAweDMwMDAwICYmIHggPD0gMHgzRkZGRDtcbn1cblxuZnVuY3Rpb24gdmFsaWRhdGUoY29kZVBvaW50KSB7XG5cdGlmICghTnVtYmVyLmlzU2FmZUludGVnZXIoY29kZVBvaW50KSkge1xuXHRcdHRocm93IG5ldyBUeXBlRXJyb3IoYEV4cGVjdGVkIGEgY29kZSBwb2ludCwgZ290IFxcYCR7dHlwZW9mIGNvZGVQb2ludH1cXGAuYCk7XG5cdH1cbn1cblxuZnVuY3Rpb24gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCB7YW1iaWd1b3VzQXNXaWRlID0gZmFsc2V9ID0ge30pIHtcblx0dmFsaWRhdGUoY29kZVBvaW50KTtcblxuXHRpZiAoXG5cdFx0aXNGdWxsV2lkdGgoY29kZVBvaW50KVxuXHRcdHx8IGlzV2lkZShjb2RlUG9pbnQpXG5cdFx0fHwgKGFtYmlndW91c0FzV2lkZSAmJiBpc0FtYmlndW91cyhjb2RlUG9pbnQpKVxuXHQpIHtcblx0XHRyZXR1cm4gMjtcblx0fVxuXG5cdHJldHVybiAxO1xufVxuXG5jb25zdCBlbW9qaVJlZ2V4ID0gKCkgPT4ge1xuXHQvLyBodHRwczovL210aHMuYmUvZW1vamlcblx0cmV0dXJuIC9bIyowLTldXFx1RkUwRj9cXHUyMEUzfFtcXHhBOVxceEFFXFx1MjAzQ1xcdTIwNDlcXHUyMTIyXFx1MjEzOVxcdTIxOTQtXFx1MjE5OVxcdTIxQTlcXHUyMUFBXFx1MjMxQVxcdTIzMUJcXHUyMzI4XFx1MjNDRlxcdTIzRUQtXFx1MjNFRlxcdTIzRjFcXHUyM0YyXFx1MjNGOC1cXHUyM0ZBXFx1MjRDMlxcdTI1QUFcXHUyNUFCXFx1MjVCNlxcdTI1QzBcXHUyNUZCXFx1MjVGQ1xcdTI1RkVcXHUyNjAwLVxcdTI2MDRcXHUyNjBFXFx1MjYxMVxcdTI2MTRcXHUyNjE1XFx1MjYxOFxcdTI2MjBcXHUyNjIyXFx1MjYyM1xcdTI2MjZcXHUyNjJBXFx1MjYyRVxcdTI2MkZcXHUyNjM4LVxcdTI2M0FcXHUyNjQwXFx1MjY0MlxcdTI2NDgtXFx1MjY1M1xcdTI2NUZcXHUyNjYwXFx1MjY2M1xcdTI2NjVcXHUyNjY2XFx1MjY2OFxcdTI2N0JcXHUyNjdFXFx1MjY3RlxcdTI2OTJcXHUyNjk0LVxcdTI2OTdcXHUyNjk5XFx1MjY5QlxcdTI2OUNcXHUyNkEwXFx1MjZBN1xcdTI2QUFcXHUyNkIwXFx1MjZCMVxcdTI2QkRcXHUyNkJFXFx1MjZDNFxcdTI2QzhcXHUyNkNGXFx1MjZEMVxcdTI2RTlcXHUyNkYwLVxcdTI2RjVcXHUyNkY3XFx1MjZGOFxcdTI2RkFcXHUyNzAyXFx1MjcwOFxcdTI3MDlcXHUyNzBGXFx1MjcxMlxcdTI3MTRcXHUyNzE2XFx1MjcxRFxcdTI3MjFcXHUyNzMzXFx1MjczNFxcdTI3NDRcXHUyNzQ3XFx1Mjc1N1xcdTI3NjNcXHUyN0ExXFx1MjkzNFxcdTI5MzVcXHUyQjA1LVxcdTJCMDdcXHUyQjFCXFx1MkIxQ1xcdTJCNTVcXHUzMDMwXFx1MzAzRFxcdTMyOTdcXHUzMjk5XVxcdUZFMEY/fFtcXHUyNjFEXFx1MjcwQ1xcdTI3MERdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpP3xbXFx1MjcwQVxcdTI3MEJdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdTIzRTktXFx1MjNFQ1xcdTIzRjBcXHUyM0YzXFx1MjVGRFxcdTI2OTNcXHUyNkExXFx1MjZBQlxcdTI2QzVcXHUyNkNFXFx1MjZENFxcdTI2RUFcXHUyNkZEXFx1MjcwNVxcdTI3MjhcXHUyNzRDXFx1Mjc0RVxcdTI3NTMtXFx1Mjc1NVxcdTI3OTUtXFx1Mjc5N1xcdTI3QjBcXHUyN0JGXFx1MkI1MF18XFx1MjZEM1xcdUZFMEY/KD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E1KT98XFx1MjZGOSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVGRTBGKT8oPzpcXHUyMDBEW1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KT98XFx1Mjc2NFxcdUZFMEY/KD86XFx1MjAwRCg/OlxcdUQ4M0RcXHVERDI1fFxcdUQ4M0VcXHVERTc5KSk/fFxcdUQ4M0MoPzpbXFx1REMwNFxcdURENzBcXHVERDcxXFx1REQ3RVxcdUREN0ZcXHVERTAyXFx1REUzN1xcdURGMjFcXHVERjI0LVxcdURGMkNcXHVERjM2XFx1REY3RFxcdURGOTZcXHVERjk3XFx1REY5OS1cXHVERjlCXFx1REY5RVxcdURGOUZcXHVERkNEXFx1REZDRVxcdURGRDQtXFx1REZERlxcdURGRjVcXHVERkY3XVxcdUZFMEY/fFtcXHVERjg1XFx1REZDMlxcdURGQzddKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdURGQzRcXHVERkNBXSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERkNCXFx1REZDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVEQ0NGXFx1REQ4RVxcdUREOTEtXFx1REQ5QVxcdURFMDFcXHVERTFBXFx1REUyRlxcdURFMzItXFx1REUzNlxcdURFMzgtXFx1REUzQVxcdURFNTBcXHVERTUxXFx1REYwMC1cXHVERjIwXFx1REYyRC1cXHVERjM1XFx1REYzNy1cXHVERjQzXFx1REY0NS1cXHVERjRBXFx1REY0Qy1cXHVERjdDXFx1REY3RS1cXHVERjg0XFx1REY4Ni1cXHVERjkzXFx1REZBMC1cXHVERkMxXFx1REZDNVxcdURGQzZcXHVERkM4XFx1REZDOVxcdURGQ0YtXFx1REZEM1xcdURGRTAtXFx1REZGMFxcdURGRjgtXFx1REZGRl18XFx1RERFNlxcdUQ4M0NbXFx1RERFOC1cXHVEREVDXFx1RERFRVxcdURERjFcXHVEREYyXFx1RERGNFxcdURERjYtXFx1RERGQVxcdURERkNcXHVEREZEXFx1RERGRl18XFx1RERFN1xcdUQ4M0NbXFx1RERFNlxcdURERTdcXHVEREU5LVxcdURERUZcXHVEREYxLVxcdURERjRcXHVEREY2LVxcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkVcXHVEREZGXXxcXHVEREU4XFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERTlcXHVEREVCLVxcdURERUVcXHVEREYwLVxcdURERjdcXHVEREZBLVxcdURERkZdfFxcdURERTlcXHVEODNDW1xcdURERUFcXHVEREVDXFx1RERFRlxcdURERjBcXHVEREYyXFx1RERGNFxcdURERkZdfFxcdURERUFcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVEXFx1RERGNy1cXHVEREZBXXxcXHVEREVCXFx1RDgzQ1tcXHVEREVFLVxcdURERjBcXHVEREYyXFx1RERGNFxcdURERjddfFxcdURERUNcXHVEODNDW1xcdURERTZcXHVEREU3XFx1RERFOS1cXHVEREVFXFx1RERGMS1cXHVEREYzXFx1RERGNS1cXHVEREZBXFx1RERGQ1xcdURERkVdfFxcdURERURcXHVEODNDW1xcdURERjBcXHVEREYyXFx1RERGM1xcdURERjdcXHVEREY5XFx1RERGQV18XFx1RERFRVxcdUQ4M0NbXFx1RERFOC1cXHVEREVBXFx1RERGMS1cXHVEREY0XFx1RERGNi1cXHVEREY5XXxcXHVEREVGXFx1RDgzQ1tcXHVEREVBXFx1RERGMlxcdURERjRcXHVEREY1XXxcXHVEREYwXFx1RDgzQ1tcXHVEREVBXFx1RERFQy1cXHVEREVFXFx1RERGMlxcdURERjNcXHVEREY1XFx1RERGN1xcdURERkNcXHVEREZFXFx1RERGRl18XFx1RERGMVxcdUQ4M0NbXFx1RERFNi1cXHVEREU4XFx1RERFRVxcdURERjBcXHVEREY3LVxcdURERkJcXHVEREZFXXxcXHVEREYyXFx1RDgzQ1tcXHVEREU2XFx1RERFOC1cXHVEREVEXFx1RERGMC1cXHVEREZGXXxcXHVEREYzXFx1RDgzQ1tcXHVEREU2XFx1RERFOFxcdURERUEtXFx1RERFQ1xcdURERUVcXHVEREYxXFx1RERGNFxcdURERjVcXHVEREY3XFx1RERGQVxcdURERkZdfFxcdURERjRcXHVEODNDXFx1RERGMnxcXHVEREY1XFx1RDgzQ1tcXHVEREU2XFx1RERFQS1cXHVEREVEXFx1RERGMC1cXHVEREYzXFx1RERGNy1cXHVEREY5XFx1RERGQ1xcdURERkVdfFxcdURERjZcXHVEODNDXFx1RERFNnxcXHVEREY3XFx1RDgzQ1tcXHVEREVBXFx1RERGNFxcdURERjhcXHVEREZBXFx1RERGQ118XFx1RERGOFxcdUQ4M0NbXFx1RERFNi1cXHVEREVBXFx1RERFQy1cXHVEREY0XFx1RERGNy1cXHVEREY5XFx1RERGQlxcdURERkQtXFx1RERGRl18XFx1RERGOVxcdUQ4M0NbXFx1RERFNlxcdURERThcXHVEREU5XFx1RERFQi1cXHVEREVEXFx1RERFRi1cXHVEREY0XFx1RERGN1xcdURERjlcXHVEREZCXFx1RERGQ1xcdURERkZdfFxcdURERkFcXHVEODNDW1xcdURERTZcXHVEREVDXFx1RERGMlxcdURERjNcXHVEREY4XFx1RERGRVxcdURERkZdfFxcdURERkJcXHVEODNDW1xcdURERTZcXHVEREU4XFx1RERFQVxcdURERUNcXHVEREVFXFx1RERGM1xcdURERkFdfFxcdURERkNcXHVEODNDW1xcdURERUJcXHVEREY4XXxcXHVEREZEXFx1RDgzQ1xcdURERjB8XFx1RERGRVxcdUQ4M0NbXFx1RERFQVxcdURERjldfFxcdURERkZcXHVEODNDW1xcdURERTZcXHVEREYyXFx1RERGQ118XFx1REY0NCg/OlxcdTIwMERcXHVEODNEXFx1REZFQik/fFxcdURGNEIoPzpcXHUyMDBEXFx1RDgzRFxcdURGRTkpP3xcXHVERkMzKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVERkYzXFx1RkUwRj8oPzpcXHUyMDBEKD86XFx1MjZBN1xcdUZFMEY/fFxcdUQ4M0NcXHVERjA4KSk/fFxcdURGRjQoPzpcXHUyMDBEXFx1MjYyMFxcdUZFMEY/fFxcdURCNDBcXHVEQzY3XFx1REI0MFxcdURDNjJcXHVEQjQwKD86XFx1REM2NVxcdURCNDBcXHVEQzZFXFx1REI0MFxcdURDNjd8XFx1REM3M1xcdURCNDBcXHVEQzYzXFx1REI0MFxcdURDNzR8XFx1REM3N1xcdURCNDBcXHVEQzZDXFx1REI0MFxcdURDNzMpXFx1REI0MFxcdURDN0YpPyl8XFx1RDgzRCg/OltcXHVEQzNGXFx1RENGRFxcdURENDlcXHVERDRBXFx1REQ2RlxcdURENzBcXHVERDczXFx1REQ3Ni1cXHVERDc5XFx1REQ4N1xcdUREOEEtXFx1REQ4RFxcdUREQTVcXHVEREE4XFx1RERCMVxcdUREQjJcXHVEREJDXFx1RERDMi1cXHVEREM0XFx1REREMS1cXHVEREQzXFx1REREQy1cXHVERERFXFx1RERFMVxcdURERTNcXHVEREU4XFx1RERFRlxcdURERjNcXHVEREZBXFx1REVDQlxcdURFQ0QtXFx1REVDRlxcdURFRTAtXFx1REVFNVxcdURFRTlcXHVERUYwXFx1REVGM11cXHVGRTBGP3xbXFx1REM0MlxcdURDNDNcXHVEQzQ2LVxcdURDNTBcXHVEQzY2XFx1REM2N1xcdURDNkItXFx1REM2RFxcdURDNzJcXHVEQzc0LVxcdURDNzZcXHVEQzc4XFx1REM3Q1xcdURDODNcXHVEQzg1XFx1REM4RlxcdURDOTFcXHVEQ0FBXFx1REQ3QVxcdUREOTVcXHVERDk2XFx1REU0Q1xcdURFNEZcXHVERUMwXFx1REVDQ10oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xbXFx1REM2RVxcdURDNzBcXHVEQzcxXFx1REM3M1xcdURDNzdcXHVEQzgxXFx1REM4MlxcdURDODZcXHVEQzg3XFx1REU0NS1cXHVERTQ3XFx1REU0QlxcdURFNERcXHVERTRFXFx1REVBM1xcdURFQjRcXHVERUI1XSg/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDc0XFx1REQ5MF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RkUwRik/fFtcXHVEQzAwLVxcdURDMDdcXHVEQzA5LVxcdURDMTRcXHVEQzE2LVxcdURDMjVcXHVEQzI3LVxcdURDM0FcXHVEQzNDLVxcdURDM0VcXHVEQzQwXFx1REM0NFxcdURDNDVcXHVEQzUxLVxcdURDNjVcXHVEQzZBXFx1REM3OS1cXHVEQzdCXFx1REM3RC1cXHVEQzgwXFx1REM4NFxcdURDODgtXFx1REM4RVxcdURDOTBcXHVEQzkyLVxcdURDQTlcXHVEQ0FCLVxcdURDRkNcXHVEQ0ZGLVxcdUREM0RcXHVERDRCLVxcdURENEVcXHVERDUwLVxcdURENjdcXHVEREE0XFx1RERGQi1cXHVERTJEXFx1REUyRi1cXHVERTM0XFx1REUzNy1cXHVERTQxXFx1REU0M1xcdURFNDRcXHVERTQ4LVxcdURFNEFcXHVERTgwLVxcdURFQTJcXHVERUE0LVxcdURFQjNcXHVERUI3LVxcdURFQkZcXHVERUMxLVxcdURFQzVcXHVERUQwLVxcdURFRDJcXHVERUQ1LVxcdURFRDdcXHVERURDLVxcdURFREZcXHVERUVCXFx1REVFQ1xcdURFRjQtXFx1REVGQ1xcdURGRTAtXFx1REZFQlxcdURGRjBdfFxcdURDMDgoPzpcXHUyMDBEXFx1MkIxQik/fFxcdURDMTUoPzpcXHUyMDBEXFx1RDgzRVxcdUREQkEpP3xcXHVEQzI2KD86XFx1MjAwRCg/OlxcdTJCMUJ8XFx1RDgzRFxcdUREMjUpKT98XFx1REMzQig/OlxcdTIwMERcXHUyNzQ0XFx1RkUwRj8pP3xcXHVEQzQxXFx1RkUwRj8oPzpcXHUyMDBEXFx1RDgzRFxcdURERThcXHVGRTBGPyk/fFxcdURDNjgoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OHxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XVxcdTIwMERcXHVEODNEKD86XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pPyl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkMtXFx1REZGRl0pKSk/fFxcdURGRkMoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdKSkpP3xcXHVERkZEKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzhCXFx1MjAwRFxcdUQ4M0QpP1xcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RcXHVEQzY4XFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86XFx1REM4QlxcdTIwMERcXHVEODNEKT9cXHVEQzY4XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEXFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZEXFx1REZGRl0pKSk/fFxcdURGRkYoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/XFx1REM2OFxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFxcdURDNjhcXHVEODNDW1xcdURGRkItXFx1REZGRV0pKSk/KSk/fFxcdURDNjkoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OlxcdURDOEJcXHUyMDBEXFx1RDgzRCk/W1xcdURDNjhcXHVEQzY5XXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEKD86W1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1REM2Nig/OlxcdTIwMERcXHVEODNEXFx1REM2Nik/fFxcdURDNjcoPzpcXHUyMDBEXFx1RDgzRFtcXHVEQzY2XFx1REM2N10pP3xcXHVEQzY5XFx1MjAwRFxcdUQ4M0QoPzpcXHVEQzY2KD86XFx1MjAwRFxcdUQ4M0RcXHVEQzY2KT98XFx1REM2Nyg/OlxcdTIwMERcXHVEODNEW1xcdURDNjZcXHVEQzY3XSk/KSl8XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdKSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEXFx1RDgzRCg/OltcXHVEQzY4XFx1REM2OV18XFx1REM4QlxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XSlcXHVEODNDW1xcdURGRkItXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMERcXHVEODNEKD86W1xcdURDNjhcXHVEQzY5XXxcXHVEQzhCXFx1MjAwRFxcdUQ4M0RbXFx1REM2OFxcdURDNjldKVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV1cXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRFxcdUQ4M0QoPzpbXFx1REM2OFxcdURDNjldfFxcdURDOEJcXHUyMDBEXFx1RDgzRFtcXHVEQzY4XFx1REM2OV0pXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNEW1xcdURDNjhcXHVEQzY5XVxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSkpKT8pKT98XFx1REM2Rig/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERDc1KD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdfFxcdUZFMEYpPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xcXHVERTJFKD86XFx1MjAwRFxcdUQ4M0RcXHVEQ0E4KT98XFx1REUzNSg/OlxcdTIwMERcXHVEODNEXFx1RENBQik/fFxcdURFMzYoPzpcXHUyMDBEXFx1RDgzQ1xcdURGMkJcXHVGRTBGPyk/fFxcdURFNDIoPzpcXHUyMDBEW1xcdTIxOTRcXHUyMTk1XVxcdUZFMEY/KT98XFx1REVCNig/OlxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSk/KD86XFx1MjAwRCg/OltcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xcXHUyN0ExXFx1RkUwRj8pKT8pfFxcdUQ4M0UoPzpbXFx1REQwQ1xcdUREMEZcXHVERDE4LVxcdUREMUZcXHVERDMwLVxcdUREMzRcXHVERDM2XFx1REQ3N1xcdUREQjVcXHVEREI2XFx1RERCQlxcdURERDJcXHVEREQzXFx1RERENVxcdURFQzMtXFx1REVDNVxcdURFRjBcXHVERUYyLVxcdURFRjhdKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT98W1xcdUREMjZcXHVERDM1XFx1REQzNy1cXHVERDM5XFx1REQzRFxcdUREM0VcXHVEREI4XFx1RERCOVxcdUREQ0RcXHVERENGXFx1RERENFxcdURERDYtXFx1RERERF0oPzpcXHVEODNDW1xcdURGRkItXFx1REZGRl0pPyg/OlxcdTIwMERbXFx1MjY0MFxcdTI2NDJdXFx1RkUwRj8pP3xbXFx1RERERVxcdUREREZdKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGPyk/fFtcXHVERDBEXFx1REQwRVxcdUREMTAtXFx1REQxN1xcdUREMjAtXFx1REQyNVxcdUREMjctXFx1REQyRlxcdUREM0FcXHVERDNGLVxcdURENDVcXHVERDQ3LVxcdURENzZcXHVERDc4LVxcdUREQjRcXHVEREI3XFx1RERCQVxcdUREQkMtXFx1RERDQ1xcdURERDBcXHVEREUwLVxcdURERkZcXHVERTcwLVxcdURFN0NcXHVERTgwLVxcdURFODlcXHVERThGLVxcdURFQzJcXHVERUM2XFx1REVDRS1cXHVERURDXFx1REVERi1cXHVERUU5XXxcXHVERDNDKD86XFx1MjAwRFtcXHUyNjQwXFx1MjY0Ml1cXHVGRTBGP3xcXHVEODNDW1xcdURGRkItXFx1REZGRl0pP3xcXHVERENFKD86XFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKT8oPzpcXHUyMDBEKD86W1xcdTI2NDBcXHUyNjQyXVxcdUZFMEY/KD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFxcdTI3QTFcXHVGRTBGPykpP3xcXHVEREQxKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMXxcXHVEREQxXFx1MjAwRFxcdUQ4M0VcXHVEREQyKD86XFx1MjAwRFxcdUQ4M0VcXHVEREQyKT98XFx1REREMig/OlxcdTIwMERcXHVEODNFXFx1REREMik/KSl8XFx1RDgzQyg/OlxcdURGRkIoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQy1cXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZDKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkJcXHVERkZELVxcdURGRkZdfFxcdUQ4M0NbXFx1REYzRVxcdURGNzNcXHVERjdDXFx1REY4NFxcdURGOTNcXHVERkE0XFx1REZBOFxcdURGRUJcXHVERkVEXXxcXHVEODNEW1xcdURDQkJcXHVEQ0JDXFx1REQyN1xcdUREMkNcXHVERTgwXFx1REU5Ml18XFx1RDgzRSg/OltcXHVEREFGXFx1RERCQ1xcdUREQkRdKD86XFx1MjAwRFxcdTI3QTFcXHVGRTBGPyk/fFtcXHVEREIwLVxcdUREQjNdfFxcdUREMURcXHUyMDBEXFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRl0pKSk/fFxcdURGRkQoPzpcXHUyMDBEKD86W1xcdTI2OTVcXHUyNjk2XFx1MjcwOF1cXHVGRTBGP3xcXHUyNzY0XFx1RkUwRj9cXHUyMDBEKD86XFx1RDgzRFxcdURDOEJcXHUyMDBEKT9cXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQlxcdURGRkNcXHVERkZFXFx1REZGRl18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT98XFx1REZGRSg/OlxcdTIwMEQoPzpbXFx1MjY5NVxcdTI2OTZcXHUyNzA4XVxcdUZFMEY/fFxcdTI3NjRcXHVGRTBGP1xcdTIwMEQoPzpcXHVEODNEXFx1REM4QlxcdTIwMEQpP1xcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkRcXHVERkZGXXxcXHVEODNDW1xcdURGM0VcXHVERjczXFx1REY3Q1xcdURGODRcXHVERjkzXFx1REZBNFxcdURGQThcXHVERkVCXFx1REZFRF18XFx1RDgzRFtcXHVEQ0JCXFx1RENCQ1xcdUREMjdcXHVERDJDXFx1REU4MFxcdURFOTJdfFxcdUQ4M0UoPzpbXFx1RERBRlxcdUREQkNcXHVEREJEXSg/OlxcdTIwMERcXHUyN0ExXFx1RkUwRj8pP3xbXFx1RERCMC1cXHVEREIzXXxcXHVERDFEXFx1MjAwRFxcdUQ4M0VcXHVEREQxXFx1RDgzQ1tcXHVERkZCLVxcdURGRkZdKSkpP3xcXHVERkZGKD86XFx1MjAwRCg/OltcXHUyNjk1XFx1MjY5NlxcdTI3MDhdXFx1RkUwRj98XFx1Mjc2NFxcdUZFMEY/XFx1MjAwRCg/OlxcdUQ4M0RcXHVEQzhCXFx1MjAwRCk/XFx1RDgzRVxcdURERDFcXHVEODNDW1xcdURGRkItXFx1REZGRV18XFx1RDgzQ1tcXHVERjNFXFx1REY3M1xcdURGN0NcXHVERjg0XFx1REY5M1xcdURGQTRcXHVERkE4XFx1REZFQlxcdURGRURdfFxcdUQ4M0RbXFx1RENCQlxcdURDQkNcXHVERDI3XFx1REQyQ1xcdURFODBcXHVERTkyXXxcXHVEODNFKD86W1xcdUREQUZcXHVEREJDXFx1RERCRF0oPzpcXHUyMDBEXFx1MjdBMVxcdUZFMEY/KT98W1xcdUREQjAtXFx1RERCM118XFx1REQxRFxcdTIwMERcXHVEODNFXFx1REREMVxcdUQ4M0NbXFx1REZGQi1cXHVERkZGXSkpKT8pKT98XFx1REVGMSg/OlxcdUQ4M0MoPzpcXHVERkZCKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZDLVxcdURGRkZdKT98XFx1REZGQyg/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQlxcdURGRkQtXFx1REZGRl0pP3xcXHVERkZEKD86XFx1MjAwRFxcdUQ4M0VcXHVERUYyXFx1RDgzQ1tcXHVERkZCXFx1REZGQ1xcdURGRkVcXHVERkZGXSk/fFxcdURGRkUoPzpcXHUyMDBEXFx1RDgzRVxcdURFRjJcXHVEODNDW1xcdURGRkItXFx1REZGRFxcdURGRkZdKT98XFx1REZGRig/OlxcdTIwMERcXHVEODNFXFx1REVGMlxcdUQ4M0NbXFx1REZGQi1cXHVERkZFXSk/KSk/KS9nO1xufTtcblxuY29uc3Qgc2VnbWVudGVyID0gZ2xvYmFsVGhpcy5JbnRsPy5TZWdtZW50ZXIgPyBuZXcgSW50bC5TZWdtZW50ZXIoKSA6IHsgc2VnbWVudDogKHN0cikgPT4gc3RyLnNwbGl0KCcnKSB9O1xuXG5jb25zdCBkZWZhdWx0SWdub3JhYmxlQ29kZVBvaW50UmVnZXggPSAvXlxccHtEZWZhdWx0X0lnbm9yYWJsZV9Db2RlX1BvaW50fSQvdTtcblxuZnVuY3Rpb24gc3RyaW5nV2lkdGgkMShzdHJpbmcsIG9wdGlvbnMgPSB7fSkge1xuXHRpZiAodHlwZW9mIHN0cmluZyAhPT0gJ3N0cmluZycgfHwgc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0Y29uc3Qge1xuXHRcdGFtYmlndW91c0lzTmFycm93ID0gdHJ1ZSxcblx0XHRjb3VudEFuc2lFc2NhcGVDb2RlcyA9IGZhbHNlLFxuXHR9ID0gb3B0aW9ucztcblxuXHRpZiAoIWNvdW50QW5zaUVzY2FwZUNvZGVzKSB7XG5cdFx0c3RyaW5nID0gc3RyaXBBbnNpKHN0cmluZyk7XG5cdH1cblxuXHRpZiAoc3RyaW5nLmxlbmd0aCA9PT0gMCkge1xuXHRcdHJldHVybiAwO1xuXHR9XG5cblx0bGV0IHdpZHRoID0gMDtcblx0Y29uc3QgZWFzdEFzaWFuV2lkdGhPcHRpb25zID0ge2FtYmlndW91c0FzV2lkZTogIWFtYmlndW91c0lzTmFycm93fTtcblxuXHRmb3IgKGNvbnN0IHtzZWdtZW50OiBjaGFyYWN0ZXJ9IG9mIHNlZ21lbnRlci5zZWdtZW50KHN0cmluZykpIHtcblx0XHRjb25zdCBjb2RlUG9pbnQgPSBjaGFyYWN0ZXIuY29kZVBvaW50QXQoMCk7XG5cblx0XHQvLyBJZ25vcmUgY29udHJvbCBjaGFyYWN0ZXJzXG5cdFx0aWYgKGNvZGVQb2ludCA8PSAweDFGIHx8IChjb2RlUG9pbnQgPj0gMHg3RiAmJiBjb2RlUG9pbnQgPD0gMHg5RikpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIElnbm9yZSB6ZXJvLXdpZHRoIGNoYXJhY3RlcnNcblx0XHRpZiAoXG5cdFx0XHQoY29kZVBvaW50ID49IDB4MjBfMEIgJiYgY29kZVBvaW50IDw9IDB4MjBfMEYpIC8vIFplcm8td2lkdGggc3BhY2UsIG5vbi1qb2luZXIsIGpvaW5lciwgbGVmdC10by1yaWdodCBtYXJrLCByaWdodC10by1sZWZ0IG1hcmtcblx0XHRcdHx8IGNvZGVQb2ludCA9PT0gMHhGRV9GRiAvLyBaZXJvLXdpZHRoIG5vLWJyZWFrIHNwYWNlXG5cdFx0KSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBJZ25vcmUgY29tYmluaW5nIGNoYXJhY3RlcnNcblx0XHRpZiAoXG5cdFx0XHQoY29kZVBvaW50ID49IDB4M18wMCAmJiBjb2RlUG9pbnQgPD0gMHgzXzZGKSAvLyBDb21iaW5pbmcgZGlhY3JpdGljYWwgbWFya3Ncblx0XHRcdHx8IChjb2RlUG9pbnQgPj0gMHgxQV9CMCAmJiBjb2RlUG9pbnQgPD0gMHgxQV9GRikgLy8gQ29tYmluaW5nIGRpYWNyaXRpY2FsIG1hcmtzIGV4dGVuZGVkXG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4MURfQzAgJiYgY29kZVBvaW50IDw9IDB4MURfRkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBzdXBwbGVtZW50XG5cdFx0XHR8fCAoY29kZVBvaW50ID49IDB4MjBfRDAgJiYgY29kZVBvaW50IDw9IDB4MjBfRkYpIC8vIENvbWJpbmluZyBkaWFjcml0aWNhbCBtYXJrcyBmb3Igc3ltYm9sc1xuXHRcdFx0fHwgKGNvZGVQb2ludCA+PSAweEZFXzIwICYmIGNvZGVQb2ludCA8PSAweEZFXzJGKSAvLyBDb21iaW5pbmcgaGFsZiBtYXJrc1xuXHRcdCkge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIHN1cnJvZ2F0ZSBwYWlyc1xuXHRcdGlmIChjb2RlUG9pbnQgPj0gMHhEOF8wMCAmJiBjb2RlUG9pbnQgPD0gMHhERl9GRikge1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0Ly8gSWdub3JlIHZhcmlhdGlvbiBzZWxlY3RvcnNcblx0XHRpZiAoY29kZVBvaW50ID49IDB4RkVfMDAgJiYgY29kZVBvaW50IDw9IDB4RkVfMEYpIHtcblx0XHRcdGNvbnRpbnVlO1xuXHRcdH1cblxuXHRcdC8vIFRoaXMgY292ZXJzIHNvbWUgb2YgdGhlIGFib3ZlIGNhc2VzLCBidXQgd2Ugc3RpbGwga2VlcCB0aGVtIGZvciBwZXJmb3JtYW5jZSByZWFzb25zLlxuXHRcdGlmIChkZWZhdWx0SWdub3JhYmxlQ29kZVBvaW50UmVnZXgudGVzdChjaGFyYWN0ZXIpKSB7XG5cdFx0XHRjb250aW51ZTtcblx0XHR9XG5cblx0XHQvLyBUT0RPOiBVc2UgYC9cXHB7UkdJX0Vtb2ppfS92YCB3aGVuIHRhcmdldGluZyBOb2RlLmpzIDIwLlxuXHRcdGlmIChlbW9qaVJlZ2V4KCkudGVzdChjaGFyYWN0ZXIpKSB7XG5cdFx0XHR3aWR0aCArPSAyO1xuXHRcdFx0Y29udGludWU7XG5cdFx0fVxuXG5cdFx0d2lkdGggKz0gZWFzdEFzaWFuV2lkdGgoY29kZVBvaW50LCBlYXN0QXNpYW5XaWR0aE9wdGlvbnMpO1xuXHR9XG5cblx0cmV0dXJuIHdpZHRoO1xufVxuXG5mdW5jdGlvbiBpc1VuaWNvZGVTdXBwb3J0ZWQoKSB7XG5cdGNvbnN0IHtlbnZ9ID0gZyQxO1xuXHRjb25zdCB7VEVSTSwgVEVSTV9QUk9HUkFNfSA9IGVudjtcblxuXHRpZiAoZyQxLnBsYXRmb3JtICE9PSAnd2luMzInKSB7XG5cdFx0cmV0dXJuIFRFUk0gIT09ICdsaW51eCc7IC8vIExpbnV4IGNvbnNvbGUgKGtlcm5lbClcblx0fVxuXG5cdHJldHVybiBCb29sZWFuKGVudi5XVF9TRVNTSU9OKSAvLyBXaW5kb3dzIFRlcm1pbmFsXG5cdFx0fHwgQm9vbGVhbihlbnYuVEVSTUlOVVNfU1VCTElNRSkgLy8gVGVybWludXMgKDwwLjIuMjcpXG5cdFx0fHwgZW52LkNvbkVtdVRhc2sgPT09ICd7Y21kOjpDbWRlcn0nIC8vIENvbkVtdSBhbmQgY21kZXJcblx0XHR8fCBURVJNX1BST0dSQU0gPT09ICdUZXJtaW51cy1TdWJsaW1lJ1xuXHRcdHx8IFRFUk1fUFJPR1JBTSA9PT0gJ3ZzY29kZSdcblx0XHR8fCBURVJNID09PSAneHRlcm0tMjU2Y29sb3InXG5cdFx0fHwgVEVSTSA9PT0gJ2FsYWNyaXR0eSdcblx0XHR8fCBURVJNID09PSAncnh2dC11bmljb2RlJ1xuXHRcdHx8IFRFUk0gPT09ICdyeHZ0LXVuaWNvZGUtMjU2Y29sb3InXG5cdFx0fHwgZW52LlRFUk1JTkFMX0VNVUxBVE9SID09PSAnSmV0QnJhaW5zLUplZGlUZXJtJztcbn1cblxuY29uc3QgVFlQRV9DT0xPUl9NQVAgPSB7XG4gIGluZm86IFwiY3lhblwiLFxuICBmYWlsOiBcInJlZFwiLFxuICBzdWNjZXNzOiBcImdyZWVuXCIsXG4gIHJlYWR5OiBcImdyZWVuXCIsXG4gIHN0YXJ0OiBcIm1hZ2VudGFcIlxufTtcbmNvbnN0IExFVkVMX0NPTE9SX01BUCA9IHtcbiAgMDogXCJyZWRcIixcbiAgMTogXCJ5ZWxsb3dcIlxufTtcbmNvbnN0IHVuaWNvZGUgPSBpc1VuaWNvZGVTdXBwb3J0ZWQoKTtcbmNvbnN0IHMgPSAoYywgZmFsbGJhY2spID0+IHVuaWNvZGUgPyBjIDogZmFsbGJhY2s7XG5jb25zdCBUWVBFX0lDT05TID0ge1xuICBlcnJvcjogcyhcIlxcdTI3MTZcIiwgXCJcXHhEN1wiKSxcbiAgZmF0YWw6IHMoXCJcXHUyNzE2XCIsIFwiXFx4RDdcIiksXG4gIHJlYWR5OiBzKFwiXFx1MjcxNFwiLCBcIlxcdTIyMUFcIiksXG4gIHdhcm46IHMoXCJcXHUyNkEwXCIsIFwiXFx1MjAzQ1wiKSxcbiAgaW5mbzogcyhcIlxcdTIxMzlcIiwgXCJpXCIpLFxuICBzdWNjZXNzOiBzKFwiXFx1MjcxNFwiLCBcIlxcdTIyMUFcIiksXG4gIGRlYnVnOiBzKFwiXFx1MjY5OVwiLCBcIkRcIiksXG4gIHRyYWNlOiBzKFwiXFx1MjE5MlwiLCBcIlxcdTIxOTJcIiksXG4gIGZhaWw6IHMoXCJcXHUyNzE2XCIsIFwiXFx4RDdcIiksXG4gIHN0YXJ0OiBzKFwiXFx1MjVEMFwiLCBcIm9cIiksXG4gIGxvZzogXCJcIlxufTtcbmZ1bmN0aW9uIHN0cmluZ1dpZHRoKHN0cikge1xuICBjb25zdCBoYXNJQ1UgPSB0eXBlb2YgSW50bCA9PT0gXCJvYmplY3RcIjtcbiAgaWYgKCFoYXNJQ1UgfHwgIUludGwuU2VnbWVudGVyKSB7XG4gICAgcmV0dXJuIHN0cmlwQW5zaSQxKHN0cikubGVuZ3RoO1xuICB9XG4gIHJldHVybiBzdHJpbmdXaWR0aCQxKHN0cik7XG59XG5jbGFzcyBGYW5jeVJlcG9ydGVyIGV4dGVuZHMgQmFzaWNSZXBvcnRlciB7XG4gIGZvcm1hdFN0YWNrKHN0YWNrLCBtZXNzYWdlLCBvcHRzKSB7XG4gICAgY29uc3QgaW5kZW50ID0gXCIgIFwiLnJlcGVhdCgob3B0cz8uZXJyb3JMZXZlbCB8fCAwKSArIDEpO1xuICAgIHJldHVybiBgXG4ke2luZGVudH1gICsgcGFyc2VTdGFjayhzdGFjaywgbWVzc2FnZSkubWFwKFxuICAgICAgKGxpbmUpID0+IFwiICBcIiArIGxpbmUucmVwbGFjZSgvXmF0ICsvLCAobSkgPT4gY29sb3JzLmdyYXkobSkpLnJlcGxhY2UoL1xcKCguKylcXCkvLCAoXywgbSkgPT4gYCgke2NvbG9ycy5jeWFuKG0pfSlgKVxuICAgICkuam9pbihgXG4ke2luZGVudH1gKTtcbiAgfVxuICBmb3JtYXRUeXBlKGxvZ09iaiwgaXNCYWRnZSwgb3B0cykge1xuICAgIGNvbnN0IHR5cGVDb2xvciA9IFRZUEVfQ09MT1JfTUFQW2xvZ09iai50eXBlXSB8fCBMRVZFTF9DT0xPUl9NQVBbbG9nT2JqLmxldmVsXSB8fCBcImdyYXlcIjtcbiAgICBpZiAoaXNCYWRnZSkge1xuICAgICAgcmV0dXJuIGdldEJnQ29sb3IodHlwZUNvbG9yKShcbiAgICAgICAgY29sb3JzLmJsYWNrKGAgJHtsb2dPYmoudHlwZS50b1VwcGVyQ2FzZSgpfSBgKVxuICAgICAgKTtcbiAgICB9XG4gICAgY29uc3QgX3R5cGUgPSB0eXBlb2YgVFlQRV9JQ09OU1tsb2dPYmoudHlwZV0gPT09IFwic3RyaW5nXCIgPyBUWVBFX0lDT05TW2xvZ09iai50eXBlXSA6IGxvZ09iai5pY29uIHx8IGxvZ09iai50eXBlO1xuICAgIHJldHVybiBfdHlwZSA/IGdldENvbG9yKHR5cGVDb2xvcikoX3R5cGUpIDogXCJcIjtcbiAgfVxuICBmb3JtYXRMb2dPYmoobG9nT2JqLCBvcHRzKSB7XG4gICAgY29uc3QgW21lc3NhZ2UsIC4uLmFkZGl0aW9uYWxdID0gdGhpcy5mb3JtYXRBcmdzKGxvZ09iai5hcmdzLCBvcHRzKS5zcGxpdChcbiAgICAgIFwiXFxuXCJcbiAgICApO1xuICAgIGlmIChsb2dPYmoudHlwZSA9PT0gXCJib3hcIikge1xuICAgICAgcmV0dXJuIGJveChcbiAgICAgICAgY2hhcmFjdGVyRm9ybWF0KFxuICAgICAgICAgIG1lc3NhZ2UgKyAoYWRkaXRpb25hbC5sZW5ndGggPiAwID8gXCJcXG5cIiArIGFkZGl0aW9uYWwuam9pbihcIlxcblwiKSA6IFwiXCIpXG4gICAgICAgICksXG4gICAgICAgIHtcbiAgICAgICAgICB0aXRsZTogbG9nT2JqLnRpdGxlID8gY2hhcmFjdGVyRm9ybWF0KGxvZ09iai50aXRsZSkgOiB2b2lkIDAsXG4gICAgICAgICAgc3R5bGU6IGxvZ09iai5zdHlsZVxuICAgICAgICB9XG4gICAgICApO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gdGhpcy5mb3JtYXREYXRlKGxvZ09iai5kYXRlLCBvcHRzKTtcbiAgICBjb25zdCBjb2xvcmVkRGF0ZSA9IGRhdGUgJiYgY29sb3JzLmdyYXkoZGF0ZSk7XG4gICAgY29uc3QgaXNCYWRnZSA9IGxvZ09iai5iYWRnZSA/PyBsb2dPYmoubGV2ZWwgPCAyO1xuICAgIGNvbnN0IHR5cGUgPSB0aGlzLmZvcm1hdFR5cGUobG9nT2JqLCBpc0JhZGdlLCBvcHRzKTtcbiAgICBjb25zdCB0YWcgPSBsb2dPYmoudGFnID8gY29sb3JzLmdyYXkobG9nT2JqLnRhZykgOiBcIlwiO1xuICAgIGxldCBsaW5lO1xuICAgIGNvbnN0IGxlZnQgPSB0aGlzLmZpbHRlckFuZEpvaW4oW3R5cGUsIGNoYXJhY3RlckZvcm1hdChtZXNzYWdlKV0pO1xuICAgIGNvbnN0IHJpZ2h0ID0gdGhpcy5maWx0ZXJBbmRKb2luKG9wdHMuY29sdW1ucyA/IFt0YWcsIGNvbG9yZWREYXRlXSA6IFt0YWddKTtcbiAgICBjb25zdCBzcGFjZSA9IChvcHRzLmNvbHVtbnMgfHwgMCkgLSBzdHJpbmdXaWR0aChsZWZ0KSAtIHN0cmluZ1dpZHRoKHJpZ2h0KSAtIDI7XG4gICAgbGluZSA9IHNwYWNlID4gMCAmJiAob3B0cy5jb2x1bW5zIHx8IDApID49IDgwID8gbGVmdCArIFwiIFwiLnJlcGVhdChzcGFjZSkgKyByaWdodCA6IChyaWdodCA/IGAke2NvbG9ycy5ncmF5KGBbJHtyaWdodH1dYCl9IGAgOiBcIlwiKSArIGxlZnQ7XG4gICAgbGluZSArPSBjaGFyYWN0ZXJGb3JtYXQoXG4gICAgICBhZGRpdGlvbmFsLmxlbmd0aCA+IDAgPyBcIlxcblwiICsgYWRkaXRpb25hbC5qb2luKFwiXFxuXCIpIDogXCJcIlxuICAgICk7XG4gICAgaWYgKGxvZ09iai50eXBlID09PSBcInRyYWNlXCIpIHtcbiAgICAgIGNvbnN0IF9lcnIgPSBuZXcgRXJyb3IoXCJUcmFjZTogXCIgKyBsb2dPYmoubWVzc2FnZSk7XG4gICAgICBsaW5lICs9IHRoaXMuZm9ybWF0U3RhY2soX2Vyci5zdGFjayB8fCBcIlwiLCBfZXJyLm1lc3NhZ2UpO1xuICAgIH1cbiAgICByZXR1cm4gaXNCYWRnZSA/IFwiXFxuXCIgKyBsaW5lICsgXCJcXG5cIiA6IGxpbmU7XG4gIH1cbn1cbmZ1bmN0aW9uIGNoYXJhY3RlckZvcm1hdChzdHIpIHtcbiAgcmV0dXJuIHN0ci5yZXBsYWNlKC9gKFteYF0rKWAvZ20sIChfLCBtKSA9PiBjb2xvcnMuY3lhbihtKSkucmVwbGFjZSgvXFxzK18oW15fXSspX1xccysvZ20sIChfLCBtKSA9PiBgICR7Y29sb3JzLnVuZGVybGluZShtKX0gYCk7XG59XG5mdW5jdGlvbiBnZXRDb2xvcihjb2xvciA9IFwid2hpdGVcIikge1xuICByZXR1cm4gY29sb3JzW2NvbG9yXSB8fCBjb2xvcnMud2hpdGU7XG59XG5mdW5jdGlvbiBnZXRCZ0NvbG9yKGNvbG9yID0gXCJiZ1doaXRlXCIpIHtcbiAgcmV0dXJuIGNvbG9yc1tgYmcke2NvbG9yWzBdLnRvVXBwZXJDYXNlKCl9JHtjb2xvci5zbGljZSgxKX1gXSB8fCBjb2xvcnMuYmdXaGl0ZTtcbn1cblxuZnVuY3Rpb24gY3JlYXRlQ29uc29sYShvcHRpb25zID0ge30pIHtcbiAgbGV0IGxldmVsID0gX2dldERlZmF1bHRMb2dMZXZlbCgpO1xuICBpZiAocHJvY2Vzcy5lbnYuQ09OU09MQV9MRVZFTCkge1xuICAgIGxldmVsID0gTnVtYmVyLnBhcnNlSW50KHByb2Nlc3MuZW52LkNPTlNPTEFfTEVWRUwpID8/IGxldmVsO1xuICB9XG4gIGNvbnN0IGNvbnNvbGEyID0gY3JlYXRlQ29uc29sYSQxKHtcbiAgICBsZXZlbCxcbiAgICBkZWZhdWx0czogeyBsZXZlbCB9LFxuICAgIHN0ZG91dDogcHJvY2Vzcy5zdGRvdXQsXG4gICAgc3RkZXJyOiBwcm9jZXNzLnN0ZGVycixcbiAgICBwcm9tcHQ6ICguLi5hcmdzKSA9PiBpbXBvcnQoJy4vY2h1bmtzL3Byb21wdC5tanMnKS50aGVuKChtKSA9PiBtLnByb21wdCguLi5hcmdzKSksXG4gICAgcmVwb3J0ZXJzOiBvcHRpb25zLnJlcG9ydGVycyB8fCBbXG4gICAgICBvcHRpb25zLmZhbmN5ID8/ICEoVCB8fCBSKSA/IG5ldyBGYW5jeVJlcG9ydGVyKCkgOiBuZXcgQmFzaWNSZXBvcnRlcigpXG4gICAgXSxcbiAgICAuLi5vcHRpb25zXG4gIH0pO1xuICByZXR1cm4gY29uc29sYTI7XG59XG5mdW5jdGlvbiBfZ2V0RGVmYXVsdExvZ0xldmVsKCkge1xuICBpZiAoZykge1xuICAgIHJldHVybiBMb2dMZXZlbHMuZGVidWc7XG4gIH1cbiAgaWYgKFIpIHtcbiAgICByZXR1cm4gTG9nTGV2ZWxzLndhcm47XG4gIH1cbiAgcmV0dXJuIExvZ0xldmVscy5pbmZvO1xufVxuY29uc3QgY29uc29sYSA9IGNyZWF0ZUNvbnNvbGEoKTtcblxuZXhwb3J0IHsgTG9nTGV2ZWxzLCBjb25zb2xhLCBjcmVhdGVDb25zb2xhLCBjb25zb2xhIGFzIGRlZmF1bHQgfTtcbiIsICJpbXBvcnQgKiBhcyB0dHkgZnJvbSAnbm9kZTp0dHknO1xuXG5jb25zdCB7XG4gIGVudiA9IHt9LFxuICBhcmd2ID0gW10sXG4gIHBsYXRmb3JtID0gXCJcIlxufSA9IHR5cGVvZiBwcm9jZXNzID09PSBcInVuZGVmaW5lZFwiID8ge30gOiBwcm9jZXNzO1xuY29uc3QgaXNEaXNhYmxlZCA9IFwiTk9fQ09MT1JcIiBpbiBlbnYgfHwgYXJndi5pbmNsdWRlcyhcIi0tbm8tY29sb3JcIik7XG5jb25zdCBpc0ZvcmNlZCA9IFwiRk9SQ0VfQ09MT1JcIiBpbiBlbnYgfHwgYXJndi5pbmNsdWRlcyhcIi0tY29sb3JcIik7XG5jb25zdCBpc1dpbmRvd3MgPSBwbGF0Zm9ybSA9PT0gXCJ3aW4zMlwiO1xuY29uc3QgaXNEdW1iVGVybWluYWwgPSBlbnYuVEVSTSA9PT0gXCJkdW1iXCI7XG5jb25zdCBpc0NvbXBhdGlibGVUZXJtaW5hbCA9IHR0eSAmJiB0dHkuaXNhdHR5ICYmIHR0eS5pc2F0dHkoMSkgJiYgZW52LlRFUk0gJiYgIWlzRHVtYlRlcm1pbmFsO1xuY29uc3QgaXNDSSA9IFwiQ0lcIiBpbiBlbnYgJiYgKFwiR0lUSFVCX0FDVElPTlNcIiBpbiBlbnYgfHwgXCJHSVRMQUJfQ0lcIiBpbiBlbnYgfHwgXCJDSVJDTEVDSVwiIGluIGVudik7XG5jb25zdCBpc0NvbG9yU3VwcG9ydGVkID0gIWlzRGlzYWJsZWQgJiYgKGlzRm9yY2VkIHx8IGlzV2luZG93cyAmJiAhaXNEdW1iVGVybWluYWwgfHwgaXNDb21wYXRpYmxlVGVybWluYWwgfHwgaXNDSSk7XG5mdW5jdGlvbiByZXBsYWNlQ2xvc2UoaW5kZXgsIHN0cmluZywgY2xvc2UsIHJlcGxhY2UsIGhlYWQgPSBzdHJpbmcuc2xpY2UoMCwgTWF0aC5tYXgoMCwgaW5kZXgpKSArIHJlcGxhY2UsIHRhaWwgPSBzdHJpbmcuc2xpY2UoTWF0aC5tYXgoMCwgaW5kZXggKyBjbG9zZS5sZW5ndGgpKSwgbmV4dCA9IHRhaWwuaW5kZXhPZihjbG9zZSkpIHtcbiAgcmV0dXJuIGhlYWQgKyAobmV4dCA8IDAgPyB0YWlsIDogcmVwbGFjZUNsb3NlKG5leHQsIHRhaWwsIGNsb3NlLCByZXBsYWNlKSk7XG59XG5mdW5jdGlvbiBjbGVhckJsZWVkKGluZGV4LCBzdHJpbmcsIG9wZW4sIGNsb3NlLCByZXBsYWNlKSB7XG4gIHJldHVybiBpbmRleCA8IDAgPyBvcGVuICsgc3RyaW5nICsgY2xvc2UgOiBvcGVuICsgcmVwbGFjZUNsb3NlKGluZGV4LCBzdHJpbmcsIGNsb3NlLCByZXBsYWNlKSArIGNsb3NlO1xufVxuZnVuY3Rpb24gZmlsdGVyRW1wdHkob3BlbiwgY2xvc2UsIHJlcGxhY2UgPSBvcGVuLCBhdCA9IG9wZW4ubGVuZ3RoICsgMSkge1xuICByZXR1cm4gKHN0cmluZykgPT4gc3RyaW5nIHx8ICEoc3RyaW5nID09PSBcIlwiIHx8IHN0cmluZyA9PT0gdm9pZCAwKSA/IGNsZWFyQmxlZWQoXG4gICAgKFwiXCIgKyBzdHJpbmcpLmluZGV4T2YoY2xvc2UsIGF0KSxcbiAgICBzdHJpbmcsXG4gICAgb3BlbixcbiAgICBjbG9zZSxcbiAgICByZXBsYWNlXG4gICkgOiBcIlwiO1xufVxuZnVuY3Rpb24gaW5pdChvcGVuLCBjbG9zZSwgcmVwbGFjZSkge1xuICByZXR1cm4gZmlsdGVyRW1wdHkoYFxceDFCWyR7b3Blbn1tYCwgYFxceDFCWyR7Y2xvc2V9bWAsIHJlcGxhY2UpO1xufVxuY29uc3QgY29sb3JEZWZzID0ge1xuICByZXNldDogaW5pdCgwLCAwKSxcbiAgYm9sZDogaW5pdCgxLCAyMiwgXCJcXHgxQlsyMm1cXHgxQlsxbVwiKSxcbiAgZGltOiBpbml0KDIsIDIyLCBcIlxceDFCWzIybVxceDFCWzJtXCIpLFxuICBpdGFsaWM6IGluaXQoMywgMjMpLFxuICB1bmRlcmxpbmU6IGluaXQoNCwgMjQpLFxuICBpbnZlcnNlOiBpbml0KDcsIDI3KSxcbiAgaGlkZGVuOiBpbml0KDgsIDI4KSxcbiAgc3RyaWtldGhyb3VnaDogaW5pdCg5LCAyOSksXG4gIGJsYWNrOiBpbml0KDMwLCAzOSksXG4gIHJlZDogaW5pdCgzMSwgMzkpLFxuICBncmVlbjogaW5pdCgzMiwgMzkpLFxuICB5ZWxsb3c6IGluaXQoMzMsIDM5KSxcbiAgYmx1ZTogaW5pdCgzNCwgMzkpLFxuICBtYWdlbnRhOiBpbml0KDM1LCAzOSksXG4gIGN5YW46IGluaXQoMzYsIDM5KSxcbiAgd2hpdGU6IGluaXQoMzcsIDM5KSxcbiAgZ3JheTogaW5pdCg5MCwgMzkpLFxuICBiZ0JsYWNrOiBpbml0KDQwLCA0OSksXG4gIGJnUmVkOiBpbml0KDQxLCA0OSksXG4gIGJnR3JlZW46IGluaXQoNDIsIDQ5KSxcbiAgYmdZZWxsb3c6IGluaXQoNDMsIDQ5KSxcbiAgYmdCbHVlOiBpbml0KDQ0LCA0OSksXG4gIGJnTWFnZW50YTogaW5pdCg0NSwgNDkpLFxuICBiZ0N5YW46IGluaXQoNDYsIDQ5KSxcbiAgYmdXaGl0ZTogaW5pdCg0NywgNDkpLFxuICBibGFja0JyaWdodDogaW5pdCg5MCwgMzkpLFxuICByZWRCcmlnaHQ6IGluaXQoOTEsIDM5KSxcbiAgZ3JlZW5CcmlnaHQ6IGluaXQoOTIsIDM5KSxcbiAgeWVsbG93QnJpZ2h0OiBpbml0KDkzLCAzOSksXG4gIGJsdWVCcmlnaHQ6IGluaXQoOTQsIDM5KSxcbiAgbWFnZW50YUJyaWdodDogaW5pdCg5NSwgMzkpLFxuICBjeWFuQnJpZ2h0OiBpbml0KDk2LCAzOSksXG4gIHdoaXRlQnJpZ2h0OiBpbml0KDk3LCAzOSksXG4gIGJnQmxhY2tCcmlnaHQ6IGluaXQoMTAwLCA0OSksXG4gIGJnUmVkQnJpZ2h0OiBpbml0KDEwMSwgNDkpLFxuICBiZ0dyZWVuQnJpZ2h0OiBpbml0KDEwMiwgNDkpLFxuICBiZ1llbGxvd0JyaWdodDogaW5pdCgxMDMsIDQ5KSxcbiAgYmdCbHVlQnJpZ2h0OiBpbml0KDEwNCwgNDkpLFxuICBiZ01hZ2VudGFCcmlnaHQ6IGluaXQoMTA1LCA0OSksXG4gIGJnQ3lhbkJyaWdodDogaW5pdCgxMDYsIDQ5KSxcbiAgYmdXaGl0ZUJyaWdodDogaW5pdCgxMDcsIDQ5KVxufTtcbmZ1bmN0aW9uIGNyZWF0ZUNvbG9ycyh1c2VDb2xvciA9IGlzQ29sb3JTdXBwb3J0ZWQpIHtcbiAgcmV0dXJuIHVzZUNvbG9yID8gY29sb3JEZWZzIDogT2JqZWN0LmZyb21FbnRyaWVzKE9iamVjdC5rZXlzKGNvbG9yRGVmcykubWFwKChrZXkpID0+IFtrZXksIFN0cmluZ10pKTtcbn1cbmNvbnN0IGNvbG9ycyA9IGNyZWF0ZUNvbG9ycygpO1xuZnVuY3Rpb24gZ2V0Q29sb3IoY29sb3IsIGZhbGxiYWNrID0gXCJyZXNldFwiKSB7XG4gIHJldHVybiBjb2xvcnNbY29sb3JdIHx8IGNvbG9yc1tmYWxsYmFja107XG59XG5mdW5jdGlvbiBjb2xvcml6ZShjb2xvciwgdGV4dCkge1xuICByZXR1cm4gZ2V0Q29sb3IoY29sb3IpKHRleHQpO1xufVxuXG5jb25zdCBhbnNpUmVnZXggPSBbXG4gIFN0cmluZy5yYXdgW1xcdTAwMUJcXHUwMDlCXVtbXFxdKCkjOz9dKig/Oig/Oig/Oig/OjtbLWEtekEtWlxcZFxcLyMmLjo9PyVAfl9dKykqfFthLXpBLVpcXGRdKyg/OjtbLWEtekEtWlxcZFxcLyMmLjo9PyVAfl9dKikqKT9cXHUwMDA3KWAsXG4gIFN0cmluZy5yYXdgKD86KD86XFxkezEsNH0oPzo7XFxkezAsNH0pKik/W1xcZEEtUFItVFpjZi1ucS11eT0+PH5dKSlgXG5dLmpvaW4oXCJ8XCIpO1xuZnVuY3Rpb24gc3RyaXBBbnNpKHRleHQpIHtcbiAgcmV0dXJuIHRleHQucmVwbGFjZShuZXcgUmVnRXhwKGFuc2lSZWdleCwgXCJnXCIpLCBcIlwiKTtcbn1cbmZ1bmN0aW9uIGNlbnRlckFsaWduKHN0ciwgbGVuLCBzcGFjZSA9IFwiIFwiKSB7XG4gIGNvbnN0IGZyZWUgPSBsZW4gLSBzdHIubGVuZ3RoO1xuICBpZiAoZnJlZSA8PSAwKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBjb25zdCBmcmVlTGVmdCA9IE1hdGguZmxvb3IoZnJlZSAvIDIpO1xuICBsZXQgX3N0ciA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBfc3RyICs9IGkgPCBmcmVlTGVmdCB8fCBpID49IGZyZWVMZWZ0ICsgc3RyLmxlbmd0aCA/IHNwYWNlIDogc3RyW2kgLSBmcmVlTGVmdF07XG4gIH1cbiAgcmV0dXJuIF9zdHI7XG59XG5mdW5jdGlvbiByaWdodEFsaWduKHN0ciwgbGVuLCBzcGFjZSA9IFwiIFwiKSB7XG4gIGNvbnN0IGZyZWUgPSBsZW4gLSBzdHIubGVuZ3RoO1xuICBpZiAoZnJlZSA8PSAwKSB7XG4gICAgcmV0dXJuIHN0cjtcbiAgfVxuICBsZXQgX3N0ciA9IFwiXCI7XG4gIGZvciAobGV0IGkgPSAwOyBpIDwgbGVuOyBpKyspIHtcbiAgICBfc3RyICs9IGkgPCBmcmVlID8gc3BhY2UgOiBzdHJbaSAtIGZyZWVdO1xuICB9XG4gIHJldHVybiBfc3RyO1xufVxuZnVuY3Rpb24gbGVmdEFsaWduKHN0ciwgbGVuLCBzcGFjZSA9IFwiIFwiKSB7XG4gIGxldCBfc3RyID0gXCJcIjtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBsZW47IGkrKykge1xuICAgIF9zdHIgKz0gaSA8IHN0ci5sZW5ndGggPyBzdHJbaV0gOiBzcGFjZTtcbiAgfVxuICByZXR1cm4gX3N0cjtcbn1cbmZ1bmN0aW9uIGFsaWduKGFsaWdubWVudCwgc3RyLCBsZW4sIHNwYWNlID0gXCIgXCIpIHtcbiAgc3dpdGNoIChhbGlnbm1lbnQpIHtcbiAgICBjYXNlIFwibGVmdFwiOiB7XG4gICAgICByZXR1cm4gbGVmdEFsaWduKHN0ciwgbGVuLCBzcGFjZSk7XG4gICAgfVxuICAgIGNhc2UgXCJyaWdodFwiOiB7XG4gICAgICByZXR1cm4gcmlnaHRBbGlnbihzdHIsIGxlbiwgc3BhY2UpO1xuICAgIH1cbiAgICBjYXNlIFwiY2VudGVyXCI6IHtcbiAgICAgIHJldHVybiBjZW50ZXJBbGlnbihzdHIsIGxlbiwgc3BhY2UpO1xuICAgIH1cbiAgICBkZWZhdWx0OiB7XG4gICAgICByZXR1cm4gc3RyO1xuICAgIH1cbiAgfVxufVxuXG5jb25zdCBib3hTdHlsZVByZXNldHMgPSB7XG4gIHNvbGlkOiB7XG4gICAgdGw6IFwiXFx1MjUwQ1wiLFxuICAgIHRyOiBcIlxcdTI1MTBcIixcbiAgICBibDogXCJcXHUyNTE0XCIsXG4gICAgYnI6IFwiXFx1MjUxOFwiLFxuICAgIGg6IFwiXFx1MjUwMFwiLFxuICAgIHY6IFwiXFx1MjUwMlwiXG4gIH0sXG4gIGRvdWJsZToge1xuICAgIHRsOiBcIlxcdTI1NTRcIixcbiAgICB0cjogXCJcXHUyNTU3XCIsXG4gICAgYmw6IFwiXFx1MjU1QVwiLFxuICAgIGJyOiBcIlxcdTI1NURcIixcbiAgICBoOiBcIlxcdTI1NTBcIixcbiAgICB2OiBcIlxcdTI1NTFcIlxuICB9LFxuICBkb3VibGVTaW5nbGU6IHtcbiAgICB0bDogXCJcXHUyNTUzXCIsXG4gICAgdHI6IFwiXFx1MjU1NlwiLFxuICAgIGJsOiBcIlxcdTI1NTlcIixcbiAgICBicjogXCJcXHUyNTVDXCIsXG4gICAgaDogXCJcXHUyNTAwXCIsXG4gICAgdjogXCJcXHUyNTUxXCJcbiAgfSxcbiAgZG91YmxlU2luZ2xlUm91bmRlZDoge1xuICAgIHRsOiBcIlxcdTI1NkRcIixcbiAgICB0cjogXCJcXHUyNTZFXCIsXG4gICAgYmw6IFwiXFx1MjU3MFwiLFxuICAgIGJyOiBcIlxcdTI1NkZcIixcbiAgICBoOiBcIlxcdTI1MDBcIixcbiAgICB2OiBcIlxcdTI1NTFcIlxuICB9LFxuICBzaW5nbGVUaGljazoge1xuICAgIHRsOiBcIlxcdTI1MEZcIixcbiAgICB0cjogXCJcXHUyNTEzXCIsXG4gICAgYmw6IFwiXFx1MjUxN1wiLFxuICAgIGJyOiBcIlxcdTI1MUJcIixcbiAgICBoOiBcIlxcdTI1MDFcIixcbiAgICB2OiBcIlxcdTI1MDNcIlxuICB9LFxuICBzaW5nbGVEb3VibGU6IHtcbiAgICB0bDogXCJcXHUyNTUyXCIsXG4gICAgdHI6IFwiXFx1MjU1NVwiLFxuICAgIGJsOiBcIlxcdTI1NThcIixcbiAgICBicjogXCJcXHUyNTVCXCIsXG4gICAgaDogXCJcXHUyNTUwXCIsXG4gICAgdjogXCJcXHUyNTAyXCJcbiAgfSxcbiAgc2luZ2xlRG91YmxlUm91bmRlZDoge1xuICAgIHRsOiBcIlxcdTI1NkRcIixcbiAgICB0cjogXCJcXHUyNTZFXCIsXG4gICAgYmw6IFwiXFx1MjU3MFwiLFxuICAgIGJyOiBcIlxcdTI1NkZcIixcbiAgICBoOiBcIlxcdTI1NTBcIixcbiAgICB2OiBcIlxcdTI1MDJcIlxuICB9LFxuICByb3VuZGVkOiB7XG4gICAgdGw6IFwiXFx1MjU2RFwiLFxuICAgIHRyOiBcIlxcdTI1NkVcIixcbiAgICBibDogXCJcXHUyNTcwXCIsXG4gICAgYnI6IFwiXFx1MjU2RlwiLFxuICAgIGg6IFwiXFx1MjUwMFwiLFxuICAgIHY6IFwiXFx1MjUwMlwiXG4gIH1cbn07XG5jb25zdCBkZWZhdWx0U3R5bGUgPSB7XG4gIGJvcmRlckNvbG9yOiBcIndoaXRlXCIsXG4gIGJvcmRlclN0eWxlOiBcInJvdW5kZWRcIixcbiAgdmFsaWduOiBcImNlbnRlclwiLFxuICBwYWRkaW5nOiAyLFxuICBtYXJnaW5MZWZ0OiAxLFxuICBtYXJnaW5Ub3A6IDEsXG4gIG1hcmdpbkJvdHRvbTogMVxufTtcbmZ1bmN0aW9uIGJveCh0ZXh0LCBfb3B0cyA9IHt9KSB7XG4gIGNvbnN0IG9wdHMgPSB7XG4gICAgLi4uX29wdHMsXG4gICAgc3R5bGU6IHtcbiAgICAgIC4uLmRlZmF1bHRTdHlsZSxcbiAgICAgIC4uLl9vcHRzLnN0eWxlXG4gICAgfVxuICB9O1xuICBjb25zdCB0ZXh0TGluZXMgPSB0ZXh0LnNwbGl0KFwiXFxuXCIpO1xuICBjb25zdCBib3hMaW5lcyA9IFtdO1xuICBjb25zdCBfY29sb3IgPSBnZXRDb2xvcihvcHRzLnN0eWxlLmJvcmRlckNvbG9yKTtcbiAgY29uc3QgYm9yZGVyU3R5bGUgPSB7XG4gICAgLi4udHlwZW9mIG9wdHMuc3R5bGUuYm9yZGVyU3R5bGUgPT09IFwic3RyaW5nXCIgPyBib3hTdHlsZVByZXNldHNbb3B0cy5zdHlsZS5ib3JkZXJTdHlsZV0gfHwgYm94U3R5bGVQcmVzZXRzLnNvbGlkIDogb3B0cy5zdHlsZS5ib3JkZXJTdHlsZVxuICB9O1xuICBpZiAoX2NvbG9yKSB7XG4gICAgZm9yIChjb25zdCBrZXkgaW4gYm9yZGVyU3R5bGUpIHtcbiAgICAgIGJvcmRlclN0eWxlW2tleV0gPSBfY29sb3IoXG4gICAgICAgIGJvcmRlclN0eWxlW2tleV1cbiAgICAgICk7XG4gICAgfVxuICB9XG4gIGNvbnN0IHBhZGRpbmdPZmZzZXQgPSBvcHRzLnN0eWxlLnBhZGRpbmcgJSAyID09PSAwID8gb3B0cy5zdHlsZS5wYWRkaW5nIDogb3B0cy5zdHlsZS5wYWRkaW5nICsgMTtcbiAgY29uc3QgaGVpZ2h0ID0gdGV4dExpbmVzLmxlbmd0aCArIHBhZGRpbmdPZmZzZXQ7XG4gIGNvbnN0IHdpZHRoID0gTWF0aC5tYXgoXG4gICAgLi4udGV4dExpbmVzLm1hcCgobGluZSkgPT4gc3RyaXBBbnNpKGxpbmUpLmxlbmd0aCksXG4gICAgb3B0cy50aXRsZSA/IHN0cmlwQW5zaShvcHRzLnRpdGxlKS5sZW5ndGggOiAwXG4gICkgKyBwYWRkaW5nT2Zmc2V0O1xuICBjb25zdCB3aWR0aE9mZnNldCA9IHdpZHRoICsgcGFkZGluZ09mZnNldDtcbiAgY29uc3QgbGVmdFNwYWNlID0gb3B0cy5zdHlsZS5tYXJnaW5MZWZ0ID4gMCA/IFwiIFwiLnJlcGVhdChvcHRzLnN0eWxlLm1hcmdpbkxlZnQpIDogXCJcIjtcbiAgaWYgKG9wdHMuc3R5bGUubWFyZ2luVG9wID4gMCkge1xuICAgIGJveExpbmVzLnB1c2goXCJcIi5yZXBlYXQob3B0cy5zdHlsZS5tYXJnaW5Ub3ApKTtcbiAgfVxuICBpZiAob3B0cy50aXRsZSkge1xuICAgIGNvbnN0IHRpdGxlID0gX2NvbG9yID8gX2NvbG9yKG9wdHMudGl0bGUpIDogb3B0cy50aXRsZTtcbiAgICBjb25zdCBsZWZ0ID0gYm9yZGVyU3R5bGUuaC5yZXBlYXQoXG4gICAgICBNYXRoLmZsb29yKCh3aWR0aCAtIHN0cmlwQW5zaShvcHRzLnRpdGxlKS5sZW5ndGgpIC8gMilcbiAgICApO1xuICAgIGNvbnN0IHJpZ2h0ID0gYm9yZGVyU3R5bGUuaC5yZXBlYXQoXG4gICAgICB3aWR0aCAtIHN0cmlwQW5zaShvcHRzLnRpdGxlKS5sZW5ndGggLSBzdHJpcEFuc2kobGVmdCkubGVuZ3RoICsgcGFkZGluZ09mZnNldFxuICAgICk7XG4gICAgYm94TGluZXMucHVzaChcbiAgICAgIGAke2xlZnRTcGFjZX0ke2JvcmRlclN0eWxlLnRsfSR7bGVmdH0ke3RpdGxlfSR7cmlnaHR9JHtib3JkZXJTdHlsZS50cn1gXG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBib3hMaW5lcy5wdXNoKFxuICAgICAgYCR7bGVmdFNwYWNlfSR7Ym9yZGVyU3R5bGUudGx9JHtib3JkZXJTdHlsZS5oLnJlcGVhdCh3aWR0aE9mZnNldCl9JHtib3JkZXJTdHlsZS50cn1gXG4gICAgKTtcbiAgfVxuICBjb25zdCB2YWxpZ25PZmZzZXQgPSBvcHRzLnN0eWxlLnZhbGlnbiA9PT0gXCJjZW50ZXJcIiA/IE1hdGguZmxvb3IoKGhlaWdodCAtIHRleHRMaW5lcy5sZW5ndGgpIC8gMikgOiBvcHRzLnN0eWxlLnZhbGlnbiA9PT0gXCJ0b3BcIiA/IGhlaWdodCAtIHRleHRMaW5lcy5sZW5ndGggLSBwYWRkaW5nT2Zmc2V0IDogaGVpZ2h0IC0gdGV4dExpbmVzLmxlbmd0aDtcbiAgZm9yIChsZXQgaSA9IDA7IGkgPCBoZWlnaHQ7IGkrKykge1xuICAgIGlmIChpIDwgdmFsaWduT2Zmc2V0IHx8IGkgPj0gdmFsaWduT2Zmc2V0ICsgdGV4dExpbmVzLmxlbmd0aCkge1xuICAgICAgYm94TGluZXMucHVzaChcbiAgICAgICAgYCR7bGVmdFNwYWNlfSR7Ym9yZGVyU3R5bGUudn0ke1wiIFwiLnJlcGVhdCh3aWR0aE9mZnNldCl9JHtib3JkZXJTdHlsZS52fWBcbiAgICAgICk7XG4gICAgfSBlbHNlIHtcbiAgICAgIGNvbnN0IGxpbmUgPSB0ZXh0TGluZXNbaSAtIHZhbGlnbk9mZnNldF07XG4gICAgICBjb25zdCBsZWZ0ID0gXCIgXCIucmVwZWF0KHBhZGRpbmdPZmZzZXQpO1xuICAgICAgY29uc3QgcmlnaHQgPSBcIiBcIi5yZXBlYXQod2lkdGggLSBzdHJpcEFuc2kobGluZSkubGVuZ3RoKTtcbiAgICAgIGJveExpbmVzLnB1c2goXG4gICAgICAgIGAke2xlZnRTcGFjZX0ke2JvcmRlclN0eWxlLnZ9JHtsZWZ0fSR7bGluZX0ke3JpZ2h0fSR7Ym9yZGVyU3R5bGUudn1gXG4gICAgICApO1xuICAgIH1cbiAgfVxuICBib3hMaW5lcy5wdXNoKFxuICAgIGAke2xlZnRTcGFjZX0ke2JvcmRlclN0eWxlLmJsfSR7Ym9yZGVyU3R5bGUuaC5yZXBlYXQod2lkdGhPZmZzZXQpfSR7Ym9yZGVyU3R5bGUuYnJ9YFxuICApO1xuICBpZiAob3B0cy5zdHlsZS5tYXJnaW5Cb3R0b20gPiAwKSB7XG4gICAgYm94TGluZXMucHVzaChcIlwiLnJlcGVhdChvcHRzLnN0eWxlLm1hcmdpbkJvdHRvbSkpO1xuICB9XG4gIHJldHVybiBib3hMaW5lcy5qb2luKFwiXFxuXCIpO1xufVxuXG5leHBvcnQgeyBjZW50ZXJBbGlnbiBhcyBhLCBhbGlnbiBhcyBiLCBjb2xvcml6ZSBhcyBjLCBib3ggYXMgZCwgY29sb3JzIGFzIGUsIGdldENvbG9yIGFzIGcsIGxlZnRBbGlnbiBhcyBsLCByaWdodEFsaWduIGFzIHIsIHN0cmlwQW5zaSBhcyBzIH07XG4iLCAiaW1wb3J0IHsgYyBhcyBjb2xvcml6ZSB9IGZyb20gJy4vc2hhcmVkL2NvbnNvbGEuRFhCWXUtS0QubWpzJztcbmV4cG9ydCB7IGIgYXMgYWxpZ24sIGQgYXMgYm94LCBhIGFzIGNlbnRlckFsaWduLCBlIGFzIGNvbG9ycywgZyBhcyBnZXRDb2xvciwgbCBhcyBsZWZ0QWxpZ24sIHIgYXMgcmlnaHRBbGlnbiwgcyBhcyBzdHJpcEFuc2kgfSBmcm9tICcuL3NoYXJlZC9jb25zb2xhLkRYQll1LUtELm1qcyc7XG5pbXBvcnQgJ25vZGU6dHR5JztcblxuZnVuY3Rpb24gZm9ybWF0VHJlZShpdGVtcywgb3B0aW9ucykge1xuICBvcHRpb25zID0ge1xuICAgIHByZWZpeDogXCIgIFwiLFxuICAgIGVsbGlwc2lzOiBcIi4uLlwiLFxuICAgIC4uLm9wdGlvbnNcbiAgfTtcbiAgY29uc3QgdHJlZSA9IF9idWlsZFRyZWUoaXRlbXMsIG9wdGlvbnMpLmpvaW4oXCJcIik7XG4gIGlmIChvcHRpb25zICYmIG9wdGlvbnMuY29sb3IpIHtcbiAgICByZXR1cm4gY29sb3JpemUob3B0aW9ucy5jb2xvciwgdHJlZSk7XG4gIH1cbiAgcmV0dXJuIHRyZWU7XG59XG5mdW5jdGlvbiBfYnVpbGRUcmVlKGl0ZW1zLCBvcHRpb25zKSB7XG4gIGNvbnN0IGNodW5rcyA9IFtdO1xuICBjb25zdCB0b3RhbCA9IGl0ZW1zLmxlbmd0aCAtIDE7XG4gIGZvciAobGV0IGkgPSAwOyBpIDw9IHRvdGFsOyBpKyspIHtcbiAgICBjb25zdCBpdGVtID0gaXRlbXNbaV07XG4gICAgY29uc3QgaXNJdGVtU3RyaW5nID0gdHlwZW9mIGl0ZW0gPT09IFwic3RyaW5nXCI7XG4gICAgY29uc3QgaXNMaW1pdCA9IG9wdGlvbnM/Lm1heERlcHRoICE9IG51bGwgJiYgb3B0aW9ucy5tYXhEZXB0aCA8PSAwO1xuICAgIGlmIChpc0xpbWl0KSB7XG4gICAgICBjb25zdCBlbGxpcHNpcyA9IGAke29wdGlvbnMucHJlZml4fSR7b3B0aW9ucy5lbGxpcHNpc31cbmA7XG4gICAgICByZXR1cm4gW1xuICAgICAgICBpc0l0ZW1TdHJpbmcgPyBlbGxpcHNpcyA6IGl0ZW0uY29sb3IgPyBjb2xvcml6ZShpdGVtLmNvbG9yLCBlbGxpcHNpcykgOiBlbGxpcHNpc1xuICAgICAgICAvLyBwcmV0dGllci1pZ25vcmVcbiAgICAgIF07XG4gICAgfVxuICAgIGNvbnN0IGlzTGFzdCA9IGkgPT09IHRvdGFsO1xuICAgIGNvbnN0IHByZWZpeCA9IGlzTGFzdCA/IGAke29wdGlvbnM/LnByZWZpeH1cXHUyNTE0XFx1MjUwMGAgOiBgJHtvcHRpb25zPy5wcmVmaXh9XFx1MjUxQ1xcdTI1MDBgO1xuICAgIGlmIChpc0l0ZW1TdHJpbmcpIHtcbiAgICAgIGNodW5rcy5wdXNoKGAke3ByZWZpeH0ke2l0ZW19XG5gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgbG9nID0gYCR7cHJlZml4fSR7aXRlbS50ZXh0fVxuYDtcbiAgICAgIGNodW5rcy5wdXNoKGl0ZW0uY29sb3IgPyBjb2xvcml6ZShpdGVtLmNvbG9yLCBsb2cpIDogbG9nKTtcbiAgICAgIGlmIChpdGVtLmNoaWxkcmVuKSB7XG4gICAgICAgIGNvbnN0IF90cmVlID0gX2J1aWxkVHJlZShpdGVtLmNoaWxkcmVuLCB7XG4gICAgICAgICAgLi4ub3B0aW9ucyxcbiAgICAgICAgICBtYXhEZXB0aDogb3B0aW9ucz8ubWF4RGVwdGggPT0gbnVsbCA/IHZvaWQgMCA6IG9wdGlvbnMubWF4RGVwdGggLSAxLFxuICAgICAgICAgIHByZWZpeDogYCR7b3B0aW9ucz8ucHJlZml4fSR7aXNMYXN0ID8gXCIgIFwiIDogXCJcXHUyNTAyICBcIn1gXG4gICAgICAgIH0pO1xuICAgICAgICBjaHVua3MucHVzaCguLi5fdHJlZSk7XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBjaHVua3M7XG59XG5cbmV4cG9ydCB7IGNvbG9yaXplLCBmb3JtYXRUcmVlIH07XG4iLCAiaW1wb3J0IGNvbnNvbGEgZnJvbSAnY29uc29sYSc7XG5pbXBvcnQgeyBjb2xvcnMgfSBmcm9tICdjb25zb2xhL3V0aWxzJztcblxuZnVuY3Rpb24gdG9BcnJheSh2YWwpIHtcbiAgaWYgKEFycmF5LmlzQXJyYXkodmFsKSkge1xuICAgIHJldHVybiB2YWw7XG4gIH1cbiAgcmV0dXJuIHZhbCA9PT0gdm9pZCAwID8gW10gOiBbdmFsXTtcbn1cbmZ1bmN0aW9uIGZvcm1hdExpbmVDb2x1bW5zKGxpbmVzLCBsaW5lUHJlZml4ID0gXCJcIikge1xuICBjb25zdCBtYXhMZW5naCA9IFtdO1xuICBmb3IgKGNvbnN0IGxpbmUgb2YgbGluZXMpIHtcbiAgICBmb3IgKGNvbnN0IFtpLCBlbGVtZW50XSBvZiBsaW5lLmVudHJpZXMoKSkge1xuICAgICAgbWF4TGVuZ2hbaV0gPSBNYXRoLm1heChtYXhMZW5naFtpXSB8fCAwLCBlbGVtZW50Lmxlbmd0aCk7XG4gICAgfVxuICB9XG4gIHJldHVybiBsaW5lcy5tYXAoXG4gICAgKGwpID0+IGwubWFwKFxuICAgICAgKGMsIGkpID0+IGxpbmVQcmVmaXggKyBjW2kgPT09IDAgPyBcInBhZFN0YXJ0XCIgOiBcInBhZEVuZFwiXShtYXhMZW5naFtpXSlcbiAgICApLmpvaW4oXCIgIFwiKVxuICApLmpvaW4oXCJcXG5cIik7XG59XG5mdW5jdGlvbiByZXNvbHZlVmFsdWUoaW5wdXQpIHtcbiAgcmV0dXJuIHR5cGVvZiBpbnB1dCA9PT0gXCJmdW5jdGlvblwiID8gaW5wdXQoKSA6IGlucHV0O1xufVxuY2xhc3MgQ0xJRXJyb3IgZXh0ZW5kcyBFcnJvciB7XG4gIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIGNvZGUpIHtcbiAgICBzdXBlcihtZXNzYWdlKTtcbiAgICB0aGlzLmNvZGUgPSBjb2RlO1xuICAgIHRoaXMubmFtZSA9IFwiQ0xJRXJyb3JcIjtcbiAgfVxufVxuXG5jb25zdCBOVU1CRVJfQ0hBUl9SRSA9IC9cXGQvO1xuY29uc3QgU1RSX1NQTElUVEVSUyA9IFtcIi1cIiwgXCJfXCIsIFwiL1wiLCBcIi5cIl07XG5mdW5jdGlvbiBpc1VwcGVyY2FzZShjaGFyID0gXCJcIikge1xuICBpZiAoTlVNQkVSX0NIQVJfUkUudGVzdChjaGFyKSkge1xuICAgIHJldHVybiB2b2lkIDA7XG4gIH1cbiAgcmV0dXJuIGNoYXIgIT09IGNoYXIudG9Mb3dlckNhc2UoKTtcbn1cbmZ1bmN0aW9uIHNwbGl0QnlDYXNlKHN0ciwgc2VwYXJhdG9ycykge1xuICBjb25zdCBzcGxpdHRlcnMgPSBzZXBhcmF0b3JzID8/IFNUUl9TUExJVFRFUlM7XG4gIGNvbnN0IHBhcnRzID0gW107XG4gIGlmICghc3RyIHx8IHR5cGVvZiBzdHIgIT09IFwic3RyaW5nXCIpIHtcbiAgICByZXR1cm4gcGFydHM7XG4gIH1cbiAgbGV0IGJ1ZmYgPSBcIlwiO1xuICBsZXQgcHJldmlvdXNVcHBlcjtcbiAgbGV0IHByZXZpb3VzU3BsaXR0ZXI7XG4gIGZvciAoY29uc3QgY2hhciBvZiBzdHIpIHtcbiAgICBjb25zdCBpc1NwbGl0dGVyID0gc3BsaXR0ZXJzLmluY2x1ZGVzKGNoYXIpO1xuICAgIGlmIChpc1NwbGl0dGVyID09PSB0cnVlKSB7XG4gICAgICBwYXJ0cy5wdXNoKGJ1ZmYpO1xuICAgICAgYnVmZiA9IFwiXCI7XG4gICAgICBwcmV2aW91c1VwcGVyID0gdm9pZCAwO1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGNvbnN0IGlzVXBwZXIgPSBpc1VwcGVyY2FzZShjaGFyKTtcbiAgICBpZiAocHJldmlvdXNTcGxpdHRlciA9PT0gZmFsc2UpIHtcbiAgICAgIGlmIChwcmV2aW91c1VwcGVyID09PSBmYWxzZSAmJiBpc1VwcGVyID09PSB0cnVlKSB7XG4gICAgICAgIHBhcnRzLnB1c2goYnVmZik7XG4gICAgICAgIGJ1ZmYgPSBjaGFyO1xuICAgICAgICBwcmV2aW91c1VwcGVyID0gaXNVcHBlcjtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG4gICAgICBpZiAocHJldmlvdXNVcHBlciA9PT0gdHJ1ZSAmJiBpc1VwcGVyID09PSBmYWxzZSAmJiBidWZmLmxlbmd0aCA+IDEpIHtcbiAgICAgICAgY29uc3QgbGFzdENoYXIgPSBidWZmLmF0KC0xKTtcbiAgICAgICAgcGFydHMucHVzaChidWZmLnNsaWNlKDAsIE1hdGgubWF4KDAsIGJ1ZmYubGVuZ3RoIC0gMSkpKTtcbiAgICAgICAgYnVmZiA9IGxhc3RDaGFyICsgY2hhcjtcbiAgICAgICAgcHJldmlvdXNVcHBlciA9IGlzVXBwZXI7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBidWZmICs9IGNoYXI7XG4gICAgcHJldmlvdXNVcHBlciA9IGlzVXBwZXI7XG4gICAgcHJldmlvdXNTcGxpdHRlciA9IGlzU3BsaXR0ZXI7XG4gIH1cbiAgcGFydHMucHVzaChidWZmKTtcbiAgcmV0dXJuIHBhcnRzO1xufVxuZnVuY3Rpb24gdXBwZXJGaXJzdChzdHIpIHtcbiAgcmV0dXJuIHN0ciA/IHN0clswXS50b1VwcGVyQ2FzZSgpICsgc3RyLnNsaWNlKDEpIDogXCJcIjtcbn1cbmZ1bmN0aW9uIGxvd2VyRmlyc3Qoc3RyKSB7XG4gIHJldHVybiBzdHIgPyBzdHJbMF0udG9Mb3dlckNhc2UoKSArIHN0ci5zbGljZSgxKSA6IFwiXCI7XG59XG5mdW5jdGlvbiBwYXNjYWxDYXNlKHN0ciwgb3B0cykge1xuICByZXR1cm4gc3RyID8gKEFycmF5LmlzQXJyYXkoc3RyKSA/IHN0ciA6IHNwbGl0QnlDYXNlKHN0cikpLm1hcCgocCkgPT4gdXBwZXJGaXJzdChvcHRzPy5ub3JtYWxpemUgPyBwLnRvTG93ZXJDYXNlKCkgOiBwKSkuam9pbihcIlwiKSA6IFwiXCI7XG59XG5mdW5jdGlvbiBjYW1lbENhc2Uoc3RyLCBvcHRzKSB7XG4gIHJldHVybiBsb3dlckZpcnN0KHBhc2NhbENhc2Uoc3RyIHx8IFwiXCIsIG9wdHMpKTtcbn1cbmZ1bmN0aW9uIGtlYmFiQ2FzZShzdHIsIGpvaW5lcikge1xuICByZXR1cm4gc3RyID8gKEFycmF5LmlzQXJyYXkoc3RyKSA/IHN0ciA6IHNwbGl0QnlDYXNlKHN0cikpLm1hcCgocCkgPT4gcC50b0xvd2VyQ2FzZSgpKS5qb2luKGpvaW5lciA/PyBcIi1cIikgOiBcIlwiO1xufVxuXG5mdW5jdGlvbiB0b0FycihhbnkpIHtcbiAgcmV0dXJuIGFueSA9PSB2b2lkIDAgPyBbXSA6IEFycmF5LmlzQXJyYXkoYW55KSA/IGFueSA6IFthbnldO1xufVxuZnVuY3Rpb24gdG9WYWwob3V0LCBrZXksIHZhbCwgb3B0cykge1xuICBsZXQgeDtcbiAgY29uc3Qgb2xkID0gb3V0W2tleV07XG4gIGNvbnN0IG54dCA9IH5vcHRzLnN0cmluZy5pbmRleE9mKGtleSkgPyB2YWwgPT0gdm9pZCAwIHx8IHZhbCA9PT0gdHJ1ZSA/IFwiXCIgOiBTdHJpbmcodmFsKSA6IHR5cGVvZiB2YWwgPT09IFwiYm9vbGVhblwiID8gdmFsIDogfm9wdHMuYm9vbGVhbi5pbmRleE9mKGtleSkgPyB2YWwgPT09IFwiZmFsc2VcIiA/IGZhbHNlIDogdmFsID09PSBcInRydWVcIiB8fCAob3V0Ll8ucHVzaCgoeCA9ICt2YWwsIHggKiAwID09PSAwKSA/IHggOiB2YWwpLCAhIXZhbCkgOiAoeCA9ICt2YWwsIHggKiAwID09PSAwKSA/IHggOiB2YWw7XG4gIG91dFtrZXldID0gb2xkID09IHZvaWQgMCA/IG54dCA6IEFycmF5LmlzQXJyYXkob2xkKSA/IG9sZC5jb25jYXQobnh0KSA6IFtvbGQsIG54dF07XG59XG5mdW5jdGlvbiBwYXJzZVJhd0FyZ3MoYXJncyA9IFtdLCBvcHRzID0ge30pIHtcbiAgbGV0IGs7XG4gIGxldCBhcnI7XG4gIGxldCBhcmc7XG4gIGxldCBuYW1lO1xuICBsZXQgdmFsO1xuICBjb25zdCBvdXQgPSB7IF86IFtdIH07XG4gIGxldCBpID0gMDtcbiAgbGV0IGogPSAwO1xuICBsZXQgaWR4ID0gMDtcbiAgY29uc3QgbGVuID0gYXJncy5sZW5ndGg7XG4gIGNvbnN0IGFsaWJpID0gb3B0cy5hbGlhcyAhPT0gdm9pZCAwO1xuICBjb25zdCBzdHJpY3QgPSBvcHRzLnVua25vd24gIT09IHZvaWQgMDtcbiAgY29uc3QgZGVmYXVsdHMgPSBvcHRzLmRlZmF1bHQgIT09IHZvaWQgMDtcbiAgb3B0cy5hbGlhcyA9IG9wdHMuYWxpYXMgfHwge307XG4gIG9wdHMuc3RyaW5nID0gdG9BcnIob3B0cy5zdHJpbmcpO1xuICBvcHRzLmJvb2xlYW4gPSB0b0FycihvcHRzLmJvb2xlYW4pO1xuICBpZiAoYWxpYmkpIHtcbiAgICBmb3IgKGsgaW4gb3B0cy5hbGlhcykge1xuICAgICAgYXJyID0gb3B0cy5hbGlhc1trXSA9IHRvQXJyKG9wdHMuYWxpYXNba10pO1xuICAgICAgZm9yIChpID0gMDsgaSA8IGFyci5sZW5ndGg7IGkrKykge1xuICAgICAgICAob3B0cy5hbGlhc1thcnJbaV1dID0gYXJyLmNvbmNhdChrKSkuc3BsaWNlKGksIDEpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBmb3IgKGkgPSBvcHRzLmJvb2xlYW4ubGVuZ3RoOyBpLS0gPiAwOyApIHtcbiAgICBhcnIgPSBvcHRzLmFsaWFzW29wdHMuYm9vbGVhbltpXV0gfHwgW107XG4gICAgZm9yIChqID0gYXJyLmxlbmd0aDsgai0tID4gMDsgKSB7XG4gICAgICBvcHRzLmJvb2xlYW4ucHVzaChhcnJbal0pO1xuICAgIH1cbiAgfVxuICBmb3IgKGkgPSBvcHRzLnN0cmluZy5sZW5ndGg7IGktLSA+IDA7ICkge1xuICAgIGFyciA9IG9wdHMuYWxpYXNbb3B0cy5zdHJpbmdbaV1dIHx8IFtdO1xuICAgIGZvciAoaiA9IGFyci5sZW5ndGg7IGotLSA+IDA7ICkge1xuICAgICAgb3B0cy5zdHJpbmcucHVzaChhcnJbal0pO1xuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMpIHtcbiAgICBmb3IgKGsgaW4gb3B0cy5kZWZhdWx0KSB7XG4gICAgICBuYW1lID0gdHlwZW9mIG9wdHMuZGVmYXVsdFtrXTtcbiAgICAgIGFyciA9IG9wdHMuYWxpYXNba10gPSBvcHRzLmFsaWFzW2tdIHx8IFtdO1xuICAgICAgaWYgKG9wdHNbbmFtZV0gIT09IHZvaWQgMCkge1xuICAgICAgICBvcHRzW25hbWVdLnB1c2goayk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBhcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBvcHRzW25hbWVdLnB1c2goYXJyW2ldKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICBjb25zdCBrZXlzID0gc3RyaWN0ID8gT2JqZWN0LmtleXMob3B0cy5hbGlhcykgOiBbXTtcbiAgZm9yIChpID0gMDsgaSA8IGxlbjsgaSsrKSB7XG4gICAgYXJnID0gYXJnc1tpXTtcbiAgICBpZiAoYXJnID09PSBcIi0tXCIpIHtcbiAgICAgIG91dC5fID0gb3V0Ll8uY29uY2F0KGFyZ3Muc2xpY2UoKytpKSk7XG4gICAgICBicmVhaztcbiAgICB9XG4gICAgZm9yIChqID0gMDsgaiA8IGFyZy5sZW5ndGg7IGorKykge1xuICAgICAgaWYgKGFyZy5jaGFyQ29kZUF0KGopICE9PSA0NSkge1xuICAgICAgICBicmVhaztcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKGogPT09IDApIHtcbiAgICAgIG91dC5fLnB1c2goYXJnKTtcbiAgICB9IGVsc2UgaWYgKGFyZy5zdWJzdHJpbmcoaiwgaiArIDMpID09PSBcIm5vLVwiKSB7XG4gICAgICBuYW1lID0gYXJnLnNsaWNlKE1hdGgubWF4KDAsIGogKyAzKSk7XG4gICAgICBpZiAoc3RyaWN0ICYmICF+a2V5cy5pbmRleE9mKG5hbWUpKSB7XG4gICAgICAgIHJldHVybiBvcHRzLnVua25vd24oYXJnKTtcbiAgICAgIH1cbiAgICAgIG91dFtuYW1lXSA9IGZhbHNlO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3IgKGlkeCA9IGogKyAxOyBpZHggPCBhcmcubGVuZ3RoOyBpZHgrKykge1xuICAgICAgICBpZiAoYXJnLmNoYXJDb2RlQXQoaWR4KSA9PT0gNjEpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgbmFtZSA9IGFyZy5zdWJzdHJpbmcoaiwgaWR4KTtcbiAgICAgIHZhbCA9IGFyZy5zbGljZShNYXRoLm1heCgwLCArK2lkeCkpIHx8IGkgKyAxID09PSBsZW4gfHwgKFwiXCIgKyBhcmdzW2kgKyAxXSkuY2hhckNvZGVBdCgwKSA9PT0gNDUgfHwgYXJnc1srK2ldO1xuICAgICAgYXJyID0gaiA9PT0gMiA/IFtuYW1lXSA6IG5hbWU7XG4gICAgICBmb3IgKGlkeCA9IDA7IGlkeCA8IGFyci5sZW5ndGg7IGlkeCsrKSB7XG4gICAgICAgIG5hbWUgPSBhcnJbaWR4XTtcbiAgICAgICAgaWYgKHN0cmljdCAmJiAhfmtleXMuaW5kZXhPZihuYW1lKSkge1xuICAgICAgICAgIHJldHVybiBvcHRzLnVua25vd24oXCItXCIucmVwZWF0KGopICsgbmFtZSk7XG4gICAgICAgIH1cbiAgICAgICAgdG9WYWwob3V0LCBuYW1lLCBpZHggKyAxIDwgYXJyLmxlbmd0aCB8fCB2YWwsIG9wdHMpO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoZGVmYXVsdHMpIHtcbiAgICBmb3IgKGsgaW4gb3B0cy5kZWZhdWx0KSB7XG4gICAgICBpZiAob3V0W2tdID09PSB2b2lkIDApIHtcbiAgICAgICAgb3V0W2tdID0gb3B0cy5kZWZhdWx0W2tdO1xuICAgICAgfVxuICAgIH1cbiAgfVxuICBpZiAoYWxpYmkpIHtcbiAgICBmb3IgKGsgaW4gb3V0KSB7XG4gICAgICBhcnIgPSBvcHRzLmFsaWFzW2tdIHx8IFtdO1xuICAgICAgd2hpbGUgKGFyci5sZW5ndGggPiAwKSB7XG4gICAgICAgIG91dFthcnIuc2hpZnQoKV0gPSBvdXRba107XG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBvdXQ7XG59XG5cbmZ1bmN0aW9uIHBhcnNlQXJncyhyYXdBcmdzLCBhcmdzRGVmKSB7XG4gIGNvbnN0IHBhcnNlT3B0aW9ucyA9IHtcbiAgICBib29sZWFuOiBbXSxcbiAgICBzdHJpbmc6IFtdLFxuICAgIG1peGVkOiBbXSxcbiAgICBhbGlhczoge30sXG4gICAgZGVmYXVsdDoge31cbiAgfTtcbiAgY29uc3QgYXJncyA9IHJlc29sdmVBcmdzKGFyZ3NEZWYpO1xuICBmb3IgKGNvbnN0IGFyZyBvZiBhcmdzKSB7XG4gICAgaWYgKGFyZy50eXBlID09PSBcInBvc2l0aW9uYWxcIikge1xuICAgICAgY29udGludWU7XG4gICAgfVxuICAgIGlmIChhcmcudHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgcGFyc2VPcHRpb25zLnN0cmluZy5wdXNoKGFyZy5uYW1lKTtcbiAgICB9IGVsc2UgaWYgKGFyZy50eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgcGFyc2VPcHRpb25zLmJvb2xlYW4ucHVzaChhcmcubmFtZSk7XG4gICAgfVxuICAgIGlmIChhcmcuZGVmYXVsdCAhPT0gdm9pZCAwKSB7XG4gICAgICBwYXJzZU9wdGlvbnMuZGVmYXVsdFthcmcubmFtZV0gPSBhcmcuZGVmYXVsdDtcbiAgICB9XG4gICAgaWYgKGFyZy5hbGlhcykge1xuICAgICAgcGFyc2VPcHRpb25zLmFsaWFzW2FyZy5uYW1lXSA9IGFyZy5hbGlhcztcbiAgICB9XG4gIH1cbiAgY29uc3QgcGFyc2VkID0gcGFyc2VSYXdBcmdzKHJhd0FyZ3MsIHBhcnNlT3B0aW9ucyk7XG4gIGNvbnN0IFsuLi5wb3NpdGlvbmFsQXJndW1lbnRzXSA9IHBhcnNlZC5fO1xuICBjb25zdCBwYXJzZWRBcmdzUHJveHkgPSBuZXcgUHJveHkocGFyc2VkLCB7XG4gICAgZ2V0KHRhcmdldCwgcHJvcCkge1xuICAgICAgcmV0dXJuIHRhcmdldFtwcm9wXSA/PyB0YXJnZXRbY2FtZWxDYXNlKHByb3ApXSA/PyB0YXJnZXRba2ViYWJDYXNlKHByb3ApXTtcbiAgICB9XG4gIH0pO1xuICBmb3IgKGNvbnN0IFssIGFyZ10gb2YgYXJncy5lbnRyaWVzKCkpIHtcbiAgICBpZiAoYXJnLnR5cGUgPT09IFwicG9zaXRpb25hbFwiKSB7XG4gICAgICBjb25zdCBuZXh0UG9zaXRpb25hbEFyZ3VtZW50ID0gcG9zaXRpb25hbEFyZ3VtZW50cy5zaGlmdCgpO1xuICAgICAgaWYgKG5leHRQb3NpdGlvbmFsQXJndW1lbnQgIT09IHZvaWQgMCkge1xuICAgICAgICBwYXJzZWRBcmdzUHJveHlbYXJnLm5hbWVdID0gbmV4dFBvc2l0aW9uYWxBcmd1bWVudDtcbiAgICAgIH0gZWxzZSBpZiAoYXJnLmRlZmF1bHQgPT09IHZvaWQgMCAmJiBhcmcucmVxdWlyZWQgIT09IGZhbHNlKSB7XG4gICAgICAgIHRocm93IG5ldyBDTElFcnJvcihcbiAgICAgICAgICBgTWlzc2luZyByZXF1aXJlZCBwb3NpdGlvbmFsIGFyZ3VtZW50OiAke2FyZy5uYW1lLnRvVXBwZXJDYXNlKCl9YCxcbiAgICAgICAgICBcIkVBUkdcIlxuICAgICAgICApO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcGFyc2VkQXJnc1Byb3h5W2FyZy5uYW1lXSA9IGFyZy5kZWZhdWx0O1xuICAgICAgfVxuICAgIH0gZWxzZSBpZiAoYXJnLnJlcXVpcmVkICYmIHBhcnNlZEFyZ3NQcm94eVthcmcubmFtZV0gPT09IHZvaWQgMCkge1xuICAgICAgdGhyb3cgbmV3IENMSUVycm9yKGBNaXNzaW5nIHJlcXVpcmVkIGFyZ3VtZW50OiAtLSR7YXJnLm5hbWV9YCwgXCJFQVJHXCIpO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcGFyc2VkQXJnc1Byb3h5O1xufVxuZnVuY3Rpb24gcmVzb2x2ZUFyZ3MoYXJnc0RlZikge1xuICBjb25zdCBhcmdzID0gW107XG4gIGZvciAoY29uc3QgW25hbWUsIGFyZ0RlZl0gb2YgT2JqZWN0LmVudHJpZXMoYXJnc0RlZiB8fCB7fSkpIHtcbiAgICBhcmdzLnB1c2goe1xuICAgICAgLi4uYXJnRGVmLFxuICAgICAgbmFtZSxcbiAgICAgIGFsaWFzOiB0b0FycmF5KGFyZ0RlZi5hbGlhcylcbiAgICB9KTtcbiAgfVxuICByZXR1cm4gYXJncztcbn1cblxuZnVuY3Rpb24gZGVmaW5lQ29tbWFuZChkZWYpIHtcbiAgcmV0dXJuIGRlZjtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJ1bkNvbW1hbmQoY21kLCBvcHRzKSB7XG4gIGNvbnN0IGNtZEFyZ3MgPSBhd2FpdCByZXNvbHZlVmFsdWUoY21kLmFyZ3MgfHwge30pO1xuICBjb25zdCBwYXJzZWRBcmdzID0gcGFyc2VBcmdzKG9wdHMucmF3QXJncywgY21kQXJncyk7XG4gIGNvbnN0IGNvbnRleHQgPSB7XG4gICAgcmF3QXJnczogb3B0cy5yYXdBcmdzLFxuICAgIGFyZ3M6IHBhcnNlZEFyZ3MsXG4gICAgZGF0YTogb3B0cy5kYXRhLFxuICAgIGNtZFxuICB9O1xuICBpZiAodHlwZW9mIGNtZC5zZXR1cCA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgYXdhaXQgY21kLnNldHVwKGNvbnRleHQpO1xuICB9XG4gIGxldCByZXN1bHQ7XG4gIHRyeSB7XG4gICAgY29uc3Qgc3ViQ29tbWFuZHMgPSBhd2FpdCByZXNvbHZlVmFsdWUoY21kLnN1YkNvbW1hbmRzKTtcbiAgICBpZiAoc3ViQ29tbWFuZHMgJiYgT2JqZWN0LmtleXMoc3ViQ29tbWFuZHMpLmxlbmd0aCA+IDApIHtcbiAgICAgIGNvbnN0IHN1YkNvbW1hbmRBcmdJbmRleCA9IG9wdHMucmF3QXJncy5maW5kSW5kZXgoXG4gICAgICAgIChhcmcpID0+ICFhcmcuc3RhcnRzV2l0aChcIi1cIilcbiAgICAgICk7XG4gICAgICBjb25zdCBzdWJDb21tYW5kTmFtZSA9IG9wdHMucmF3QXJnc1tzdWJDb21tYW5kQXJnSW5kZXhdO1xuICAgICAgaWYgKHN1YkNvbW1hbmROYW1lKSB7XG4gICAgICAgIGlmICghc3ViQ29tbWFuZHNbc3ViQ29tbWFuZE5hbWVdKSB7XG4gICAgICAgICAgdGhyb3cgbmV3IENMSUVycm9yKFxuICAgICAgICAgICAgYFVua25vd24gY29tbWFuZCBcXGAke3N1YkNvbW1hbmROYW1lfVxcYGAsXG4gICAgICAgICAgICBcIkVfVU5LTk9XTl9DT01NQU5EXCJcbiAgICAgICAgICApO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1YkNvbW1hbmQgPSBhd2FpdCByZXNvbHZlVmFsdWUoc3ViQ29tbWFuZHNbc3ViQ29tbWFuZE5hbWVdKTtcbiAgICAgICAgaWYgKHN1YkNvbW1hbmQpIHtcbiAgICAgICAgICBhd2FpdCBydW5Db21tYW5kKHN1YkNvbW1hbmQsIHtcbiAgICAgICAgICAgIHJhd0FyZ3M6IG9wdHMucmF3QXJncy5zbGljZShzdWJDb21tYW5kQXJnSW5kZXggKyAxKVxuICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKCFjbWQucnVuKSB7XG4gICAgICAgIHRocm93IG5ldyBDTElFcnJvcihgTm8gY29tbWFuZCBzcGVjaWZpZWQuYCwgXCJFX05PX0NPTU1BTkRcIik7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICh0eXBlb2YgY21kLnJ1biA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICByZXN1bHQgPSBhd2FpdCBjbWQucnVuKGNvbnRleHQpO1xuICAgIH1cbiAgfSBmaW5hbGx5IHtcbiAgICBpZiAodHlwZW9mIGNtZC5jbGVhbnVwID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgIGF3YWl0IGNtZC5jbGVhbnVwKGNvbnRleHQpO1xuICAgIH1cbiAgfVxuICByZXR1cm4geyByZXN1bHQgfTtcbn1cbmFzeW5jIGZ1bmN0aW9uIHJlc29sdmVTdWJDb21tYW5kKGNtZCwgcmF3QXJncywgcGFyZW50KSB7XG4gIGNvbnN0IHN1YkNvbW1hbmRzID0gYXdhaXQgcmVzb2x2ZVZhbHVlKGNtZC5zdWJDb21tYW5kcyk7XG4gIGlmIChzdWJDb21tYW5kcyAmJiBPYmplY3Qua2V5cyhzdWJDb21tYW5kcykubGVuZ3RoID4gMCkge1xuICAgIGNvbnN0IHN1YkNvbW1hbmRBcmdJbmRleCA9IHJhd0FyZ3MuZmluZEluZGV4KChhcmcpID0+ICFhcmcuc3RhcnRzV2l0aChcIi1cIikpO1xuICAgIGNvbnN0IHN1YkNvbW1hbmROYW1lID0gcmF3QXJnc1tzdWJDb21tYW5kQXJnSW5kZXhdO1xuICAgIGNvbnN0IHN1YkNvbW1hbmQgPSBhd2FpdCByZXNvbHZlVmFsdWUoc3ViQ29tbWFuZHNbc3ViQ29tbWFuZE5hbWVdKTtcbiAgICBpZiAoc3ViQ29tbWFuZCkge1xuICAgICAgcmV0dXJuIHJlc29sdmVTdWJDb21tYW5kKFxuICAgICAgICBzdWJDb21tYW5kLFxuICAgICAgICByYXdBcmdzLnNsaWNlKHN1YkNvbW1hbmRBcmdJbmRleCArIDEpLFxuICAgICAgICBjbWRcbiAgICAgICk7XG4gICAgfVxuICB9XG4gIHJldHVybiBbY21kLCBwYXJlbnRdO1xufVxuXG5hc3luYyBmdW5jdGlvbiBzaG93VXNhZ2UoY21kLCBwYXJlbnQpIHtcbiAgdHJ5IHtcbiAgICBjb25zb2xhLmxvZyhhd2FpdCByZW5kZXJVc2FnZShjbWQsIHBhcmVudCkgKyBcIlxcblwiKTtcbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zb2xhLmVycm9yKGVycm9yKTtcbiAgfVxufVxuYXN5bmMgZnVuY3Rpb24gcmVuZGVyVXNhZ2UoY21kLCBwYXJlbnQpIHtcbiAgY29uc3QgY21kTWV0YSA9IGF3YWl0IHJlc29sdmVWYWx1ZShjbWQubWV0YSB8fCB7fSk7XG4gIGNvbnN0IGNtZEFyZ3MgPSByZXNvbHZlQXJncyhhd2FpdCByZXNvbHZlVmFsdWUoY21kLmFyZ3MgfHwge30pKTtcbiAgY29uc3QgcGFyZW50TWV0YSA9IGF3YWl0IHJlc29sdmVWYWx1ZShwYXJlbnQ/Lm1ldGEgfHwge30pO1xuICBjb25zdCBjb21tYW5kTmFtZSA9IGAke3BhcmVudE1ldGEubmFtZSA/IGAke3BhcmVudE1ldGEubmFtZX0gYCA6IFwiXCJ9YCArIChjbWRNZXRhLm5hbWUgfHwgcHJvY2Vzcy5hcmd2WzFdKTtcbiAgY29uc3QgYXJnTGluZXMgPSBbXTtcbiAgY29uc3QgcG9zTGluZXMgPSBbXTtcbiAgY29uc3QgY29tbWFuZHNMaW5lcyA9IFtdO1xuICBjb25zdCB1c2FnZUxpbmUgPSBbXTtcbiAgZm9yIChjb25zdCBhcmcgb2YgY21kQXJncykge1xuICAgIGlmIChhcmcudHlwZSA9PT0gXCJwb3NpdGlvbmFsXCIpIHtcbiAgICAgIGNvbnN0IG5hbWUgPSBhcmcubmFtZS50b1VwcGVyQ2FzZSgpO1xuICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IGFyZy5yZXF1aXJlZCAhPT0gZmFsc2UgJiYgYXJnLmRlZmF1bHQgPT09IHZvaWQgMDtcbiAgICAgIGNvbnN0IGRlZmF1bHRIaW50ID0gYXJnLmRlZmF1bHQgPyBgPVwiJHthcmcuZGVmYXVsdH1cImAgOiBcIlwiO1xuICAgICAgcG9zTGluZXMucHVzaChbXG4gICAgICAgIFwiYFwiICsgbmFtZSArIGRlZmF1bHRIaW50ICsgXCJgXCIsXG4gICAgICAgIGFyZy5kZXNjcmlwdGlvbiB8fCBcIlwiLFxuICAgICAgICBhcmcudmFsdWVIaW50ID8gYDwke2FyZy52YWx1ZUhpbnR9PmAgOiBcIlwiXG4gICAgICBdKTtcbiAgICAgIHVzYWdlTGluZS5wdXNoKGlzUmVxdWlyZWQgPyBgPCR7bmFtZX0+YCA6IGBbJHtuYW1lfV1gKTtcbiAgICB9IGVsc2Uge1xuICAgICAgY29uc3QgaXNSZXF1aXJlZCA9IGFyZy5yZXF1aXJlZCA9PT0gdHJ1ZSAmJiBhcmcuZGVmYXVsdCA9PT0gdm9pZCAwO1xuICAgICAgY29uc3QgYXJnU3RyID0gKGFyZy50eXBlID09PSBcImJvb2xlYW5cIiAmJiBhcmcuZGVmYXVsdCA9PT0gdHJ1ZSA/IFtcbiAgICAgICAgLi4uKGFyZy5hbGlhcyB8fCBbXSkubWFwKChhKSA9PiBgLS1uby0ke2F9YCksXG4gICAgICAgIGAtLW5vLSR7YXJnLm5hbWV9YFxuICAgICAgXS5qb2luKFwiLCBcIikgOiBbLi4uKGFyZy5hbGlhcyB8fCBbXSkubWFwKChhKSA9PiBgLSR7YX1gKSwgYC0tJHthcmcubmFtZX1gXS5qb2luKFxuICAgICAgICBcIiwgXCJcbiAgICAgICkpICsgKGFyZy50eXBlID09PSBcInN0cmluZ1wiICYmIChhcmcudmFsdWVIaW50IHx8IGFyZy5kZWZhdWx0KSA/IGA9JHthcmcudmFsdWVIaW50ID8gYDwke2FyZy52YWx1ZUhpbnR9PmAgOiBgXCIke2FyZy5kZWZhdWx0IHx8IFwiXCJ9XCJgfWAgOiBcIlwiKTtcbiAgICAgIGFyZ0xpbmVzLnB1c2goW1xuICAgICAgICBcImBcIiArIGFyZ1N0ciArIChpc1JlcXVpcmVkID8gXCIgKHJlcXVpcmVkKVwiIDogXCJcIikgKyBcImBcIixcbiAgICAgICAgYXJnLmRlc2NyaXB0aW9uIHx8IFwiXCJcbiAgICAgIF0pO1xuICAgICAgaWYgKGlzUmVxdWlyZWQpIHtcbiAgICAgICAgdXNhZ2VMaW5lLnB1c2goYXJnU3RyKTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgaWYgKGNtZC5zdWJDb21tYW5kcykge1xuICAgIGNvbnN0IGNvbW1hbmROYW1lcyA9IFtdO1xuICAgIGNvbnN0IHN1YkNvbW1hbmRzID0gYXdhaXQgcmVzb2x2ZVZhbHVlKGNtZC5zdWJDb21tYW5kcyk7XG4gICAgZm9yIChjb25zdCBbbmFtZSwgc3ViXSBvZiBPYmplY3QuZW50cmllcyhzdWJDb21tYW5kcykpIHtcbiAgICAgIGNvbnN0IHN1YkNtZCA9IGF3YWl0IHJlc29sdmVWYWx1ZShzdWIpO1xuICAgICAgY29uc3QgbWV0YSA9IGF3YWl0IHJlc29sdmVWYWx1ZShzdWJDbWQ/Lm1ldGEpO1xuICAgICAgY29tbWFuZHNMaW5lcy5wdXNoKFtgXFxgJHtuYW1lfVxcYGAsIG1ldGE/LmRlc2NyaXB0aW9uIHx8IFwiXCJdKTtcbiAgICAgIGNvbW1hbmROYW1lcy5wdXNoKG5hbWUpO1xuICAgIH1cbiAgICB1c2FnZUxpbmUucHVzaChjb21tYW5kTmFtZXMuam9pbihcInxcIikpO1xuICB9XG4gIGNvbnN0IHVzYWdlTGluZXMgPSBbXTtcbiAgY29uc3QgdmVyc2lvbiA9IGNtZE1ldGEudmVyc2lvbiB8fCBwYXJlbnRNZXRhLnZlcnNpb247XG4gIHVzYWdlTGluZXMucHVzaChcbiAgICBjb2xvcnMuZ3JheShcbiAgICAgIGAke2NtZE1ldGEuZGVzY3JpcHRpb259ICgke2NvbW1hbmROYW1lICsgKHZlcnNpb24gPyBgIHYke3ZlcnNpb259YCA6IFwiXCIpfSlgXG4gICAgKSxcbiAgICBcIlwiXG4gICk7XG4gIGNvbnN0IGhhc09wdGlvbnMgPSBhcmdMaW5lcy5sZW5ndGggPiAwIHx8IHBvc0xpbmVzLmxlbmd0aCA+IDA7XG4gIHVzYWdlTGluZXMucHVzaChcbiAgICBgJHtjb2xvcnMudW5kZXJsaW5lKGNvbG9ycy5ib2xkKFwiVVNBR0VcIikpfSBcXGAke2NvbW1hbmROYW1lfSR7aGFzT3B0aW9ucyA/IFwiIFtPUFRJT05TXVwiIDogXCJcIn0gJHt1c2FnZUxpbmUuam9pbihcIiBcIil9XFxgYCxcbiAgICBcIlwiXG4gICk7XG4gIGlmIChwb3NMaW5lcy5sZW5ndGggPiAwKSB7XG4gICAgdXNhZ2VMaW5lcy5wdXNoKGNvbG9ycy51bmRlcmxpbmUoY29sb3JzLmJvbGQoXCJBUkdVTUVOVFNcIikpLCBcIlwiKTtcbiAgICB1c2FnZUxpbmVzLnB1c2goZm9ybWF0TGluZUNvbHVtbnMocG9zTGluZXMsIFwiICBcIikpO1xuICAgIHVzYWdlTGluZXMucHVzaChcIlwiKTtcbiAgfVxuICBpZiAoYXJnTGluZXMubGVuZ3RoID4gMCkge1xuICAgIHVzYWdlTGluZXMucHVzaChjb2xvcnMudW5kZXJsaW5lKGNvbG9ycy5ib2xkKFwiT1BUSU9OU1wiKSksIFwiXCIpO1xuICAgIHVzYWdlTGluZXMucHVzaChmb3JtYXRMaW5lQ29sdW1ucyhhcmdMaW5lcywgXCIgIFwiKSk7XG4gICAgdXNhZ2VMaW5lcy5wdXNoKFwiXCIpO1xuICB9XG4gIGlmIChjb21tYW5kc0xpbmVzLmxlbmd0aCA+IDApIHtcbiAgICB1c2FnZUxpbmVzLnB1c2goY29sb3JzLnVuZGVybGluZShjb2xvcnMuYm9sZChcIkNPTU1BTkRTXCIpKSwgXCJcIik7XG4gICAgdXNhZ2VMaW5lcy5wdXNoKGZvcm1hdExpbmVDb2x1bW5zKGNvbW1hbmRzTGluZXMsIFwiICBcIikpO1xuICAgIHVzYWdlTGluZXMucHVzaChcbiAgICAgIFwiXCIsXG4gICAgICBgVXNlIFxcYCR7Y29tbWFuZE5hbWV9IDxjb21tYW5kPiAtLWhlbHBcXGAgZm9yIG1vcmUgaW5mb3JtYXRpb24gYWJvdXQgYSBjb21tYW5kLmBcbiAgICApO1xuICB9XG4gIHJldHVybiB1c2FnZUxpbmVzLmZpbHRlcigobCkgPT4gdHlwZW9mIGwgPT09IFwic3RyaW5nXCIpLmpvaW4oXCJcXG5cIik7XG59XG5cbmFzeW5jIGZ1bmN0aW9uIHJ1bk1haW4oY21kLCBvcHRzID0ge30pIHtcbiAgY29uc3QgcmF3QXJncyA9IG9wdHMucmF3QXJncyB8fCBwcm9jZXNzLmFyZ3Yuc2xpY2UoMik7XG4gIGNvbnN0IHNob3dVc2FnZSQxID0gb3B0cy5zaG93VXNhZ2UgfHwgc2hvd1VzYWdlO1xuICB0cnkge1xuICAgIGlmIChyYXdBcmdzLmluY2x1ZGVzKFwiLS1oZWxwXCIpIHx8IHJhd0FyZ3MuaW5jbHVkZXMoXCItaFwiKSkge1xuICAgICAgYXdhaXQgc2hvd1VzYWdlJDEoLi4uYXdhaXQgcmVzb2x2ZVN1YkNvbW1hbmQoY21kLCByYXdBcmdzKSk7XG4gICAgICBwcm9jZXNzLmV4aXQoMCk7XG4gICAgfSBlbHNlIGlmIChyYXdBcmdzLmxlbmd0aCA9PT0gMSAmJiByYXdBcmdzWzBdID09PSBcIi0tdmVyc2lvblwiKSB7XG4gICAgICBjb25zdCBtZXRhID0gdHlwZW9mIGNtZC5tZXRhID09PSBcImZ1bmN0aW9uXCIgPyBhd2FpdCBjbWQubWV0YSgpIDogYXdhaXQgY21kLm1ldGE7XG4gICAgICBpZiAoIW1ldGE/LnZlcnNpb24pIHtcbiAgICAgICAgdGhyb3cgbmV3IENMSUVycm9yKFwiTm8gdmVyc2lvbiBzcGVjaWZpZWRcIiwgXCJFX05PX1ZFUlNJT05cIik7XG4gICAgICB9XG4gICAgICBjb25zb2xhLmxvZyhtZXRhLnZlcnNpb24pO1xuICAgIH0gZWxzZSB7XG4gICAgICBhd2FpdCBydW5Db21tYW5kKGNtZCwgeyByYXdBcmdzIH0pO1xuICAgIH1cbiAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICBjb25zdCBpc0NMSUVycm9yID0gZXJyb3IgaW5zdGFuY2VvZiBDTElFcnJvcjtcbiAgICBpZiAoIWlzQ0xJRXJyb3IpIHtcbiAgICAgIGNvbnNvbGEuZXJyb3IoZXJyb3IsIFwiXFxuXCIpO1xuICAgIH1cbiAgICBpZiAoaXNDTElFcnJvcikge1xuICAgICAgYXdhaXQgc2hvd1VzYWdlJDEoLi4uYXdhaXQgcmVzb2x2ZVN1YkNvbW1hbmQoY21kLCByYXdBcmdzKSk7XG4gICAgfVxuICAgIGNvbnNvbGEuZXJyb3IoZXJyb3IubWVzc2FnZSk7XG4gICAgcHJvY2Vzcy5leGl0KDEpO1xuICB9XG59XG5mdW5jdGlvbiBjcmVhdGVNYWluKGNtZCkge1xuICByZXR1cm4gKG9wdHMgPSB7fSkgPT4gcnVuTWFpbihjbWQsIG9wdHMpO1xufVxuXG5leHBvcnQgeyBjcmVhdGVNYWluLCBkZWZpbmVDb21tYW5kLCBwYXJzZUFyZ3MsIHJlbmRlclVzYWdlLCBydW5Db21tYW5kLCBydW5NYWluLCBzaG93VXNhZ2UgfTtcbiIsICJpbXBvcnQgdHlwZSB7IFBhY2thZ2VNYW5pZmVzdCB9IGZyb20gXCJxdWVyeS1yZWdpc3RyeVwiO1xuXG5jb25zdCBnaXRodWJVcmxSZWdleCA9XG4gIC9eKD86Z2l0XFwrKT9odHRwcz86XFwvXFwvZ2l0aHViXFwuY29tXFwvKFteL10rKVxcLyhbXi9dKylcXC5naXQkLztcblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RPd25lckFuZFJlcG8oXG4gIHJlcG9zaXRvcnlVcmw6IHN0cmluZyxcbik6IFtzdHJpbmcsIHN0cmluZ10gfCBudWxsIHtcbiAgY29uc3QgbWF0Y2ggPSByZXBvc2l0b3J5VXJsLm1hdGNoKGdpdGh1YlVybFJlZ2V4KTtcblxuICBpZiAobWF0Y2gpIHtcbiAgICByZXR1cm4gW21hdGNoWzFdLCBtYXRjaFsyXV07XG4gIH1cblxuICByZXR1cm4gbnVsbDtcbn1cblxuZXhwb3J0IGZ1bmN0aW9uIGV4dHJhY3RSZXBvc2l0b3J5KG1hbmlmZXN0OiBQYWNrYWdlTWFuaWZlc3QpIHtcbiAgcmV0dXJuIHR5cGVvZiBtYW5pZmVzdC5yZXBvc2l0b3J5ID09PSBcInN0cmluZ1wiXG4gICAgPyBtYW5pZmVzdC5yZXBvc2l0b3J5XG4gICAgOiBtYW5pZmVzdC5yZXBvc2l0b3J5Py51cmw7XG59XG5cbmNvbnN0IGNvbW1pdExlbmd0aCA9IDc7XG5cbi8qXG4gKiBcIjA5ZWZkMDU1MzM3NGZmN2QzZTYyYjc5Mzc4ZTMxODRmNWViNTc1NzFcIiA9PiBcIjA5ZWZkMDVcIlxuICovXG5leHBvcnQgZnVuY3Rpb24gYWJicmV2aWF0ZUNvbW1pdEhhc2goZnVsbEhhc2g6IHN0cmluZykge1xuICByZXR1cm4gZnVsbEhhc2guc3Vic3RyaW5nKDAsIGNvbW1pdExlbmd0aCk7XG59XG5cbmV4cG9ydCBmdW5jdGlvbiBpc1B1bGxSZXF1ZXN0KHJlZjogc3RyaW5nKSB7XG4gIHJldHVybiAhTnVtYmVyLmlzTmFOKE51bWJlcihyZWYpKTtcbn1cblxuZXhwb3J0IHR5cGUgQ29tbWVudCA9IFwib2ZmXCIgfCBcImNyZWF0ZVwiIHwgXCJ1cGRhdGVcIjtcbmV4cG9ydCB0eXBlIFBhY2thZ2VNYW5hZ2VyID0gXCJucG1cIiB8IFwicG5wbVwiIHwgXCJ5YXJuXCIgfCBcImJ1blwiO1xuXG5leHBvcnQgY29uc3QgaW5zdGFsbENvbW1hbmRzOiBSZWNvcmQ8UGFja2FnZU1hbmFnZXIsIHN0cmluZz4gPSB7XG4gIG5wbTogXCJucG0gaVwiLFxuICBwbnBtOiBcInBucG0gYWRkXCIsXG4gIHlhcm46IFwieWFybiBhZGRcIixcbiAgYnVuOiBcImJ1biBhZGRcIixcbn07XG5cbmNvbnN0IHdoaXRlbGlzdCA9XG4gIFwiaHR0cHM6Ly9yYXcuZ2l0aHVidXNlcmNvbnRlbnQuY29tL2todWxuYXNvZnQvcGtnLmtodWxuYXNvZnQuY29tL21haW4vLndoaXRlbGlzdFwiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gaXNXaGl0ZWxpc3RlZChvd25lcjogc3RyaW5nLCByZXBvOiBzdHJpbmcpIHtcbiAgY29uc3QgY29tYmluYXRpb24gPSBgJHtvd25lcn0vJHtyZXBvfWA7XG5cbiAgdHJ5IHtcbiAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGZldGNoKHdoaXRlbGlzdCk7XG4gICAgY29uc3QgY29udGVudCA9IGF3YWl0IHJlc3BvbnNlLnRleHQoKTtcblxuICAgIHJldHVybiBjb250ZW50LmluY2x1ZGVzKGNvbWJpbmF0aW9uKTtcbiAgfSBjYXRjaCB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG4iLCAie1xuICBcIm5hbWVcIjogXCJwa2cta2h1bG5hc29mdFwiLFxuICBcInZlcnNpb25cIjogXCIwLjAuNjJcIixcbiAgXCJkZXNjcmlwdGlvblwiOiBcIlwiLFxuICBcIm1haW5cIjogXCJpbmRleC5qc1wiLFxuICBcInR5cGVcIjogXCJtb2R1bGVcIixcbiAgXCJiaW5cIjoge1xuICAgIFwicGtnLWtodWxuYXNvZnRcIjogXCJiaW4vY2xpLmpzXCJcbiAgfSxcbiAgXCJyZXBvc2l0b3J5XCI6IHtcbiAgICBcInR5cGVcIjogXCJnaXRcIixcbiAgICBcInVybFwiOiBcImh0dHBzOi8vZ2l0aHViLmNvbS9raHVsbmFzb2Z0L3BrZy5raHVsbmFzb2Z0LmNvbVwiLFxuICAgIFwiZGlyZWN0b3J5XCI6IFwicGFja2FnZXMvY2xpXCJcbiAgfSxcbiAgXCJzY3JpcHRzXCI6IHtcbiAgICBcImRldlwiOiBcInRzdXAgLS13YXRjaFwiLFxuICAgIFwiYnVpbGRcIjogXCJ0c3VwXCIsXG4gICAgXCJidWlsZDpwdWJsaXNoXCI6IFwiQVBJX1VSTD1odHRwczovL3BrZy5raHVsbmFzb2Z0LmNvbS8gdHN1cFwiXG4gIH0sXG4gIFwia2V5d29yZHNcIjogW10sXG4gIFwiYXV0aG9yXCI6IFwiXCIsXG4gIFwibGljZW5zZVwiOiBcIk1JVFwiLFxuICBcImRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAYWN0aW9ucy9jb3JlXCI6IFwiXjEuMTEuMVwiLFxuICAgIFwiQGpzZGV2dG9vbHMvZXotc3Bhd25cIjogXCJeMy4wLjRcIixcbiAgICBcIkBvY3Rva2l0L2FjdGlvblwiOiBcIl42LjEuMFwiLFxuICAgIFwiaWdub3JlXCI6IFwiXjUuMy4xXCIsXG4gICAgXCJpc2JpbmFyeWZpbGVcIjogXCJeNS4wLjJcIixcbiAgICBcInBrZy10eXBlc1wiOiBcIl4xLjEuMVwiLFxuICAgIFwicXVlcnktcmVnaXN0cnlcIjogXCJeMy4wLjFcIixcbiAgICBcInRpbnlnbG9iYnlcIjogXCJeMC4yLjlcIlxuICB9LFxuICBcImRldkRlcGVuZGVuY2llc1wiOiB7XG4gICAgXCJAcGtnLWtodWxuYXNvZnQvdXRpbHNcIjogXCJ3b3Jrc3BhY2U6XlwiLFxuICAgIFwiY2l0dHlcIjogXCJeMC4xLjZcIixcbiAgICBcInRzdXBcIjogXCJeOC4wLjJcIlxuICB9XG59XG4iLCAiZXhwb3J0IGNvbnN0IGNyZWF0ZURlZmF1bHRUZW1wbGF0ZSA9IChcbiAgZGVwZW5kZW5jaWVzOiBSZWNvcmQ8c3RyaW5nLCBzdHJpbmc+LFxuKSA9PiAoe1xuICBcImluZGV4LmpzXCI6IFwiXCIsXG4gIFwiUkVBRE1FLm1kXCI6IGBcbiMgRGVmYXVsdCBUZW1wbGF0ZVxuXG5UaGlzIGlzIGEgdGVtcGxhdGUgdGhhdCBsZXZlcmFnZXMgdGhlIGV4cGVyaW1lbnRhbCB0ZW1wbGF0ZXMgZmVhdHVyZSBpbiB0aGUgXFxgcGtnLmtodWxuYXNvZnQuY29tXFxgIHRvb2wuXG5cbiMjIE92ZXJ2aWV3XG5cblRlbXBsYXRlcyBhcmUgcGFydGljdWxhcmx5IHVzZWZ1bCBmb3IgY3JlYXRpbmcgbGl2ZSwgaW50ZXJhY3RpdmUgZXhhbXBsZXMgb2YgeW91ciBwYWNrYWdlcywgd2hpY2ggY2FuIGJlIHZlcnkgYmVuZWZpY2lhbCBmb3IgYm90aCBkZXZlbG9wbWVudCBhbmQgZG9jdW1lbnRhdGlvbiBwdXJwb3Nlcy5cblxuQXMgYSB1c2VyLCB5b3UgY2FuIGNoZWNrIHRoZSBwYWNrYWdlLmpzb24gZmlsZSBhbmQgc2VlIHRoZSBuZXcgZ2VuZXJhdGVkIHBhY2thZ2VzISBZb3UgY2FuIGp1c3QgY29weSB0aG9zZSBhbmQgcHV0IHRoZW0gaW4geW91ciBwYWNrYWdlLmpzb24gb3IgaW5zdGFsbCB0aGVtIHdpdGggeW91ciBmYXZvcml0ZSBwYWNrYWdlIG1hbmFnZXIuXG5cbiR7T2JqZWN0LnZhbHVlcyhkZXBlbmRlbmNpZXMpXG4gIC5tYXAoXG4gICAgKHVybCkgPT4gYFxuXFxgXFxgXFxgc2hcbm5wbSBpICR7dXJsfVxuXFxgXFxgXFxgXG5gLFxuICApXG4gIC5qb2luKFwiXCIpfVxuXG4jIyBVc2FnZVxuXG5UbyB1c2UgdGhpcyBmZWF0dXJlIGFzIGEgbWFpbnRhaW5lciwgeW91IGNhbiBydW4gdGhlIGZvbGxvd2luZyBjb21tYW5kOlxuXG5cXGBcXGBcXGBzaFxubnB4IHBrZy1raHVsbmFzb2Z0IHB1Ymxpc2ggJy4vcGFja2FnZXMvQScgLS10ZW1wbGF0ZSAnLi9leGFtcGxlcy8qJ1xuXFxgXFxgXFxgXG5cbiMjIEJlbmVmaXRzXG5cbi0gSW50ZXJhY3RpdmUgRGVtb3M6IEF1dG9tYXRpY2FsbHkgY3JlYXRlIGxpdmUgZGVtb3MgdGhhdCB1c2VycyBjYW4gaW50ZXJhY3Qgd2l0aCBkaXJlY3RseSBpbiB0aGVpciBicm93c2VyLlxuLSBFbmhhbmNlZCBUZXN0aW5nOiBRdWlja2x5IHNwaW4gdXAgZW52aXJvbm1lbnRzIHRvIHRlc3QgeW91ciBwYWNrYWdlIGluIGRpZmZlcmVudCBzY2VuYXJpb3MuXG4tIEltcHJvdmVkIFNoYXJpbmc6IEVhc2lseSBzaGFyZSB3b3JraW5nIGV4YW1wbGVzIG9mIHlvdXIgcGFja2FnZSB3aXRoIGNvbGxhYm9yYXRvcnMgb3IgdXNlcnMgd2l0aG91dCBuZWVkaW5nIHRoZW0gdG8gc2V0IHVwIHRoZWlyIGVudmlyb25tZW50LlxuYCxcbiAgXCJwYWNrYWdlLmpzb25cIjogSlNPTi5zdHJpbmdpZnkoXG4gICAge1xuICAgICAgbmFtZTogXCJkZWZhdWx0XCIsXG4gICAgICB2ZXJzaW9uOiBcIjEuMC4wXCIsXG4gICAgICBkZXNjcmlwdGlvbjogXCJnZW5lcmF0ZWQgYnkgcGtnLmtodWxuYXNvZnQuY29tXCIsXG4gICAgICBtYWluOiBcImluZGV4LmpzXCIsXG4gICAgICBkZXBlbmRlbmNpZXMsXG4gICAgICBrZXl3b3JkczogW10sXG4gICAgICBhdXRob3I6IFwicGtnLmtodWxuYXNvZnQuY29tXCIsXG4gICAgICBsaWNlbnNlOiBcIklTQ1wiLFxuICAgIH0sXG4gICAgbnVsbCxcbiAgICAyLFxuICApLFxufSk7XG4iXSwKICAibWFwcGluZ3MiOiAiOzs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxPQUFPO0FBQ1AsT0FBTyxLQUFLLE9BQU8sY0FBYztBQUNqQyxPQUFPLE9BQU87QUFDZCxTQUFTLG1CQUFtQjtBQUU1QixTQUFTLHdCQUF5QkEsSUFBRztBQUNwQyxTQUFPQSxNQUFLQSxHQUFFLGNBQWMsT0FBTyxVQUFVLGVBQWUsS0FBS0EsSUFBRyxTQUFTLElBQUlBLEdBQUUsU0FBUyxJQUFJQTtBQUNqRztBQUtBLFNBQVMsYUFBYztBQUN0QixNQUFJLGVBQWdCLFFBQU87QUFDM0IsbUJBQWlCO0FBRWpCLFFBQU0sTUFBTTtBQUNaLFFBQU0sTUFBTSxHQUFHLEdBQUc7QUFDbEIsUUFBTSxPQUFPO0FBRWIsUUFBTSxTQUFTO0FBQUEsSUFDYixHQUFHQSxJQUFHQyxJQUFHO0FBQ1AsVUFBSSxDQUFDQSxHQUFHLFFBQU8sR0FBRyxHQUFH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QUFHWCxJQUFFYSxNQUFHLFFBQU9BLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxRQUFNLE1BQUlBLE1BQUcsUUFBTSxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsUUFBTSxNQUFJLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsU0FBTyxTQUFPQSxNQUFHQSxNQUFHLFNBQU8sU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFVBQVFBLE1BQUdBLE1BQUcsVUFBUSxVQUFRQSxNQUFHQSxNQUFHLFVBQVEsVUFBUUEsTUFBR0EsTUFBRyxVQUFRLFVBQVFBLE1BQUdBLE1BQUcsVUFBUSxVQUFRQSxNQUFHQSxNQUFHLFVBQVEsVUFBUUEsTUFBR0EsTUFBRyxVQUFRLFVBQVFBLE1BQUdBLE1BQUcsVUFBUSxVQUFRQSxNQUFHQSxNQUFHLFNBQU8sTUFBSSxNQUFJQSxNQUFHQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUssU0FBT0EsTUFBR0EsTUFBRyxTQUFPLFNBQU9BLE1BQUdBLE1BQUcsUUFBTSxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLQSxNQUFHLE9BQUtBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsT0FBS0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUssT0FBS0EsTUFBR0EsTUFBRyxPQUFLLE9BQUtBLE1BQUdBLE1BQUcsT0FBSyxPQUFLQSxNQUFHQSxNQUFHLE9BQUtBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNQSxNQUFHLFFBQU0sUUFBTUEsTUFBR0EsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTUEsTUFBRyxRQUFNLFFBQU1BLE1BQUdBLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU1BLE1BQUcsUUFBTUEsTUFBRyxRQUFNQSxNQUFHLFFBQU1BLE1BQUcsUUFBTSxRQUFNQSxNQUFHQSxNQUFHLFFBQU0sUUFBTUEs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TyxDQUFDLEdBQUUsRUFBRSxHQUFFLFdBQVUsQ0FBQyxHQUFFLEVBQUUsR0FBRSxVQUFTLENBQUMsSUFBRyxFQUFFLEdBQUUsU0FBUSxDQUFDLEdBQUUsRUFBRSxHQUFFLFFBQU8sQ0FBQyxHQUFFLEVBQUUsR0FBRSxlQUFjLENBQUMsR0FBRSxFQUFFLEVBQUMsR0FBRSxPQUFNLEVBQUMsT0FBTSxDQUFDLElBQUcsRUFBRSxHQUFFLEtBQUksQ0FBQyxJQUFHLEVBQUUsR0FBRSxPQUFNLENBQUMsSUFBRyxFQUFFLEdBQUUsUUFBTyxDQUFDLElBQUcsRUFBRSxHQUFFLE1BQUssQ0FBQyxJQUFHLEVBQUUsR0FBRSxTQUFRLENBQUMsSUFBRyxFQUFFLEdBQUUsTUFBSyxDQUFDLElBQUcsRUFBRSxHQUFFLE9BQU0sQ0FBQyxJQUFHLEVBQUUsR0FBRSxhQUFZLENBQUMsSUFBRyxFQUFFLEdBQUUsTUFBSyxDQUFDLElBQUcsRUFBRSxHQUFFLE1BQUssQ0FBQyxJQUFHLEVBQUUsR0FBRSxXQUFVLENBQUMsSUFBRyxFQUFFLEdBQUUsYUFBWSxDQUFDLElBQUcsRUFBRSxHQUFFLGNBQWEsQ0FBQyxJQUFHLEVBQUUsR0FBRSxZQUFXLENBQUMsSUFBRyxFQUFFLEdBQUUsZUFBYyxDQUFDLElBQUcsRUFBRSxHQUFFLFlBQVcsQ0FBQyxJQUFHLEVBQUUsR0FBRSxhQUFZLENBQUMsSUFBRyxFQUFFLEVBQUMsR0FBRSxTQUFRLEVBQUMsU0FBUSxDQUFDLElBQUcsRUFBRSxHQUFFLE9BQU0sQ0FBQyxJQUFHLEVBQUUsR0FBRSxTQUFRLENBQUMsSUFBRyxFQUFFLEdBQUUsVUFBUyxDQUFDLElBQUcsRUFBRSxHQUFFLFFBQU8sQ0FBQyxJQUFHLEVBQUUsR0FBRSxXQUFVLENBQUMsSUFBRyxFQUFFLEdBQUUsUUFBTyxDQUFDLElBQUcsRUFBRSxHQUFFLFNBQVEsQ0FBQyxJQUFHLEVBQUUsR0FBRSxlQUFjLENBQUMsS0FBSSxFQUFFLEdBQUUsUUFBTyxDQUFDLEtBQUksRUFBRSxHQUFFLFFBQU8sQ0FBQyxLQUFJLEVBQUUsR0FB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LEdBQUUsS0FBSyxLQUFLLFVBQVMsTUFBSTtBQUFDLGlCQUFLLE9BQU8sTUFBTSxXQUFXLE9BQU8sSUFBSSxHQUFFLEtBQUssT0FBTyxJQUFJLFVBQVMsS0FBSyxNQUFNLEdBQUUsSUFBSSxLQUFLLE9BQU0sS0FBSyxHQUFFRCxHQUFFLEtBQUssS0FBSztBQUFBLFVBQUUsQ0FBQyxHQUFFLEtBQUssS0FBSyxVQUFTLE1BQUk7QUFBQyxpQkFBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLElBQUksR0FBRSxLQUFLLE9BQU8sSUFBSSxVQUFTLEtBQUssTUFBTSxHQUFFLElBQUksS0FBSyxPQUFNLEtBQUssR0FBRUEsR0FBRSxDQUFDO0FBQUEsVUFBRSxDQUFDO0FBQUEsUUFBRSxDQUFDO0FBQUEsTUFBQztBQUFBLE1BQUMsV0FBV0EsSUFBRUQsSUFBRTtBQUFDLFlBQUcsS0FBSyxVQUFRLFlBQVUsS0FBSyxRQUFNLFdBQVVBLElBQUcsU0FBTyxDQUFDLEtBQUssVUFBUSxFQUFFLFFBQVEsSUFBSUEsR0FBRSxJQUFJLEtBQUcsS0FBSyxLQUFLLFVBQVMsRUFBRSxRQUFRLElBQUlBLEdBQUUsSUFBSSxDQUFDLEdBQUUsRUFBRSxRQUFRLElBQUlBLEdBQUUsSUFBSSxLQUFHLEtBQUssS0FBSyxVQUFTQSxHQUFFLElBQUksSUFBR0MsT0FBSUEsR0FBRSxZQUFZLE1BQUksT0FBS0EsR0FBRSxZQUFZLE1BQUksUUFBTSxLQUFLLEtBQUssV0FBVUEsR0FBRSxZQUFZLE1BQUksR0FBRyxHQUFFQSxPQUFJLE9BQUssS0FBSyxLQUFLLGdCQUFjLEtBQUssVUFBUSxLQUFLLElBQUksTUFBTSxLQUFLLEtBQUssV0FBVyxHQUFFLEtBQUssS0FBSyxTQUFRLEtBQUssS0FBSyxXQUFXLEtBQUlBLE1BQUcsS0FBSyxLQUFLLE9BQU1BLEdBQUUsWUFBWSxDQUFDLEdBQUVELElBQUcsU0FBTyxVQUFTO0FBQUMsY0FBRyxLQUFLLEtBQUssVUFBUztBQUFDLGtCQUFNRSxLQUFFLEtBQUssS0FBSyxTQUFTLEtBQUssS0FBSztBQUFFLFlBQUFBLE9BQUksS0FBSyxRQUFNQSxjQUFhLFFBQU1BLEdBQUUsVUFBUUEsSUFBRSxLQUFLLFFBQU0sU0FBUSxLQUFLLElBQUksTUFBTSxLQUFLLEtBQUs7QUFBQSxVQUFHO0FBQUMsZUFBSyxVQUFRLFlBQVUsS0FBSyxRQUFNO0FBQUEsUUFBVTtBQUFDLFlBQUksQ0FBQ0QsSUFBRUQsSUFBRyxNQUFLQSxJQUFHLFFBQVEsR0FBRSxRQUFRLE1BQUksS0FBSyxRQUFNLFlBQVcsS0FBSyxVQUFRLFlBQVUsS0FBSyxVQUFRLGFBQVcsS0FBSyxLQUFLLFVBQVUsR0FBRSxLQUFLLE9BQU8sSUFBRyxLQUFLLFVBQVEsWUFBVSxLQUFLLFVBQVEsYUFBVyxLQUFLLE1BQU07QUFBQSxNQUFFO0FBQUEsTUFBQyxRQUFPO0FBQUMsYUFBSyxNQUFNLE9BQU8sR0FBRSxLQUFLLE1BQU0sZUFBZSxZQUFXLEtBQUssVUFBVSxHQUFFLEtBQUssT0FBTyxNQUFNO0FBQUEsQ0FDbnlHLEdBQUUsSUFBSSxLQUFLLE9BQU0sS0FBSyxHQUFFLEtBQUssSUFBSSxNQUFNLEdBQUUsS0FBSyxLQUFHLFFBQU8sS0FBSyxLQUFLLEdBQUcsS0FBSyxLQUFLLElBQUcsS0FBSyxLQUFLLEdBQUUsS0FBSyxZQUFZO0FBQUEsTUFBRTtBQUFBLE1BQUMsZ0JBQWU7QUFBQyxjQUFNQyxLQUFFLEVBQUUsS0FBSyxZQUFXLFFBQVEsT0FBTyxTQUFRLEVBQUMsTUFBSyxLQUFJLENBQUMsRUFBRSxNQUFNO0FBQUEsQ0FDdE0sRUFBRSxTQUFPO0FBQUUsYUFBSyxPQUFPLE1BQU0sV0FBVyxPQUFPLEtBQUssTUFBS0EsS0FBRSxFQUFFLENBQUM7QUFBQSxNQUFFO0FBQUEsTUFBQyxTQUFRO0FBQUMsY0FBTUEsS0FBRSxFQUFFLEtBQUssUUFBUSxJQUFJLEtBQUcsSUFBRyxRQUFRLE9BQU8sU0FBUSxFQUFDLE1BQUssS0FBSSxDQUFDO0FBQUUsWUFBR0EsT0FBSSxLQUFLLFlBQVc7QUFBQyxjQUFHLEtBQUssVUFBUSxVQUFVLE1BQUssT0FBTyxNQUFNLFdB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T0FBTyxNQUFNLElBQUk7QUFBQSxFQUN0RTtBQUtBLFNBQU8sT0FBTyxRQUFRLE9BQU8sRUFBRTtBQUNoQztBQUlBLFNBQVMsWUFBWUMsSUFBRztBQUN2QixTQUFPQSxPQUFNLE9BQ1RBLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE1BQUssT0FBUUEsTUFBSyxPQUNsQkEsTUFBSyxPQUFRQSxNQUFLLE9BQ2xCQSxNQUFLLE9BQVFBLE1BQUssT0FDbEJBLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsTUFBSyxPQUFRQSxNQUFLLE9BQ2xCQSxPQUFNLE9BQ05BLE1BQUssT0FBUUEsTUFBSyxPQUNsQkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE1BQUssT0FBUUEsTUFBSyxPQUNsQkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsTUFBSyxPQUFTQSxNQUFLLE9BQ25CQSxPQUFNLE9BQ05BLE1BQUssT0FBU0EsTUFBSyxPQUNuQkEsT0FBTSxPQUNOQSxNQUFLLE9BQVNBLE1BQUssT0FDbkJBLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE9BQU0sT0FDTkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE1BQUssT0FBU0EsTUFBSyxPQUNuQkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE1BQUssT0FBU0EsTUFBSyxPQUNuQkEsT0FBTSxPQUNOQSxPQUFNLE9BQ05BLE1BQUssT0FBU0EsTUFBSyxPQUNuQkEsTUFBSyxPQUFTQSxNQUFLLE9BQ25CQSxNQUFLLE9BQVNBLE1BQUssT0FDbkJBLE1BQUssT0FBU0EsTUFBSyxPQUNuQkEsTUFBSyxPQUFTQSxNQUFLLE9BQ25CQSxPQUFNLFFBQ05BLE1BQUssUUFBU0EsTUFBSyxRQUNuQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFNBQ05BLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxPQUFNLFNBQ05BLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsT0FBTSxVQUNOQSxPQUFNLFVBQ05BLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssV0FDckJBLE1BQUssV0FBWUEsTUFBSztBQUMzQjtBQUVBLFNBQVMsWUFBWUEsSUFBRztBQUN2QixTQUFPQSxPQUFNLFNBQ1RBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLO0FBQ3pCO0FBRUEsU0FBUyxPQUFPQSxJQUFHO0FBQ2xCLFNBQU9BLE1BQUssUUFBVUEsTUFBSyxRQUN2QkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxNQUFLLFFBQVVBLE1BQUssUUFDcEJBLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsTUFBSyxRQUFVQSxNQUFLLFFBQ3BCQSxPQUFNLFFBQ05BLE1BQUssUUFBVUEsTUFBSyxRQUNwQkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFFBQ05BLE9BQU0sUUFDTkEsT0FBTSxRQUNOQSxPQUFNLFNBQ05BLE9BQU0sU0FDTkEsT0FBTSxTQUNOQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE9BQU0sU0FDTkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxPQUFNLFNBQ05BLE9BQU0sU0FDTkEsT0FBTSxTQUNOQSxPQUFNLFNBQ05BLE9BQU0sU0FDTkEsT0FBTSxTQUNOQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVVBLE1BQUssU0FDcEJBLE1BQUssU0FBVUEsTUFBSyxTQUNwQkEsTUFBSyxTQUFVQSxNQUFLLFNBQ3BCQSxNQUFLLFNBQVdBLE1BQUssU0FDckJBLE9BQU0sU0FDTkEsT0FBTSxTQUNOQSxNQUFLLFNBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsT0FBTSxVQUNOQSxPQUFNLFVBQ05BLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsT0FBTSxVQUNOQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE9BQU0sVUFDTkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxPQUFNLFVBQ05BLE9BQU0sVUFDTkEsT0FBTSxVQUNOQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE9BQU0sVUFDTkEsT0FBTSxVQUNOQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsT0FBTSxVQUNOQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE9BQU0sVUFDTkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxPQUFNLFVBQ05BLE9BQU0sVUFDTkEsT0FBTSxVQUNOQSxPQUFNLFVBQ05BLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxPQUFNLFVBQ05BLE1BQUssVUFBV0EsTUFBSyxVQUNyQkEsTUFBSyxVQUFXQSxNQUFLLFVBQ3JCQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE9BQU0sVUFDTkEsT0FBTSxVQUNOQSxNQUFLLFVBQVdBLE1BQUssVUFDckJBLE1BQUssVUFBV0EsTUFB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OERBQThELFdBQVc7QUFBQSxFQUM3RSxXQUFXO0FBQUEsSUFDVDtBQUFBLEVBQ0Y7QUFFQSxRQUFNLFFBQVEsb0JBQW9CLFVBQVU7QUFDNUMsTUFBSSxDQUFDLE9BQU87QUFDVixVQUFNLElBQUk7QUFBQSxNQUNSLG1FQUFtRSxXQUFXLHFCQUFxQixVQUFVO0FBQUEsRUFDakgsV0FBVztBQUFBLElBQ1Q7QUFBQSxFQUNGO0FBQ0Y7QUFFQSxlQUFlLFlBQVksR0FBVztBQUNwQyxNQUFJO0FBQ0YsV0FBTyxNQUFNLEdBQUcsU0FBUyxHQUFHLE1BQU07QUFBQSxFQUNwQyxRQUFRO0FBQ04sV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLGVBQWUsZ0JBQWdCLEdBQVc7QUFDeEMsUUFBTSxXQUFXLE1BQU0sWUFBWSxDQUFDO0FBQ3BDLE1BQUksYUFBYSxNQUFNO0FBQ3JCLFdBQU87QUFBQSxFQUNUO0FBQ0EsTUFBSTtBQUNGLFdBQU8saUJBQWlCLFFBQVE7QUFBQSxFQUNsQyxRQUFRO0FBQ04sV0FBTztBQUFBLEVBQ1Q7QUFDRjtBQUVBLFNBQVMsaUJBQWlCLFVBQWtCO0FBQzFDLE1BQUk7QUFDRixXQUFPLEtBQUssTUFBTSxRQUFRO0FBQUEsRUFDNUIsUUFBUTtBQUNOLFdBQU87QUFBQSxFQUNUO0FBQ0Y7IiwKICAibmFtZXMiOiBbIngiLCAieSIsICJpIiwgImFyZ3YiLCAiZW52IiwgImlzQ29sb3JTdXBwb3J0ZWQiLCAicmVwbGFjZUNsb3NlIiwgImNyZWF0ZUNvbG9ycyIsICJmIiwgInQiLCAiRiIsICJ1IiwgImUiLCAicyIsICJDIiwgIkQiLCAibyIsICJXIiwgImEiLCAibiIsICJCIiwgInIiLCAiYyIsICJsIiwgInYiLCAicmVnZXgiLCAiZiIsICJpIiwgImEiLCAiYiIsICJjIiwgImQiLCAiZSIsICJmIiwgImciLCAiaCIsICJkZWZhdWx0cyIsICJjIiwgImkiLCAibCIsICJ4IiwgImkiLCAiciIsICJlIiwgIm8iLCAicyIsICJCIiwgImYiLCAiSSIsICJUIiwgImciLCAiUiIsICJBIiwgIkMiLCAieSIsICJfIiwgImMiLCAiTyIsICJMIiwgIlMiLCAidSIsICJOIiwgIkYiLCAiRyIsICJQIiwgImFuc2lSZWdleCIsICJzdHJpcEFuc2kiLCAieCIsICJlbnYiLCAibSIsICJnZXRDb2xvciIsICJjcmVhdGVDb25zb2xhIiwgImkiLCAibCIsICJjIiwgIngiLCAiayIsICJkZWZhdWx0cyIsICJhIiwgInMiLCAiaSIsICJwIiwgIl8iLCAiayIsICJzdGRvdXQiXQp9Cg==