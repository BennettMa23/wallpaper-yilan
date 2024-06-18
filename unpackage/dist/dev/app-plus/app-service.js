var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
if (typeof Promise !== "undefined" && !Promise.prototype.finally) {
  Promise.prototype.finally = function(callback) {
    const promise = this.constructor;
    return this.then((value) => promise.resolve(callback()).then(() => value), (reason) => promise.resolve(callback()).then(() => {
      throw reason;
    }));
  };
}
;
if (typeof uni !== "undefined" && uni && uni.requireGlobal) {
  const global2 = uni.requireGlobal();
  ArrayBuffer = global2.ArrayBuffer;
  Int8Array = global2.Int8Array;
  Uint8Array = global2.Uint8Array;
  Uint8ClampedArray = global2.Uint8ClampedArray;
  Int16Array = global2.Int16Array;
  Uint16Array = global2.Uint16Array;
  Int32Array = global2.Int32Array;
  Uint32Array = global2.Uint32Array;
  Float32Array = global2.Float32Array;
  Float64Array = global2.Float64Array;
  BigInt64Array = global2.BigInt64Array;
  BigUint64Array = global2.BigUint64Array;
}
;
if (uni.restoreGlobal) {
  uni.restoreGlobal(Vue, weex, plus, setTimeout, clearTimeout, setInterval, clearInterval);
}
(function(shared, vue) {
  var _e, _f, _g, _h;
  "use strict";
  const ON_LOAD = "onLoad";
  const ON_UNLOAD = "onUnload";
  const ON_REACH_BOTTOM = "onReachBottom";
  const ON_SHARE_TIMELINE = "onShareTimeline";
  const ON_SHARE_APP_MESSAGE = "onShareAppMessage";
  function isDebugMode() {
    return typeof __channelId__ === "string" && __channelId__;
  }
  function jsonStringifyReplacer(k, p) {
    switch (shared.toRawType(p)) {
      case "Function":
        return "function() { [native code] }";
      default:
        return p;
    }
  }
  function normalizeLog(type, filename, args) {
    if (isDebugMode()) {
      args.push(filename.replace("at ", "uni-app:///"));
      return console[type].apply(console, args);
    }
    const msgs = args.map(function(v) {
      const type2 = shared.toTypeString(v).toLowerCase();
      if (["[object object]", "[object array]", "[object module]"].indexOf(type2) !== -1) {
        try {
          v = "---BEGIN:JSON---" + JSON.stringify(v, jsonStringifyReplacer) + "---END:JSON---";
        } catch (e) {
          v = type2;
        }
      } else {
        if (v === null) {
          v = "---NULL---";
        } else if (v === void 0) {
          v = "---UNDEFINED---";
        } else {
          const vType = shared.toRawType(v).toUpperCase();
          if (vType === "NUMBER" || vType === "BOOLEAN") {
            v = "---BEGIN:" + vType + "---" + v + "---END:" + vType + "---";
          } else {
            v = String(v);
          }
        }
      }
      return v;
    });
    return msgs.join("---COMMA---") + " " + filename;
  }
  function formatAppLog(type, filename, ...args) {
    const res = normalizeLog(type, filename, args);
    res && console[type](res);
  }
  const fontData = [
    {
      "font_class": "arrow-down",
      "unicode": "\uE6BE"
    },
    {
      "font_class": "arrow-left",
      "unicode": "\uE6BC"
    },
    {
      "font_class": "arrow-right",
      "unicode": "\uE6BB"
    },
    {
      "font_class": "arrow-up",
      "unicode": "\uE6BD"
    },
    {
      "font_class": "auth",
      "unicode": "\uE6AB"
    },
    {
      "font_class": "auth-filled",
      "unicode": "\uE6CC"
    },
    {
      "font_class": "back",
      "unicode": "\uE6B9"
    },
    {
      "font_class": "bars",
      "unicode": "\uE627"
    },
    {
      "font_class": "calendar",
      "unicode": "\uE6A0"
    },
    {
      "font_class": "calendar-filled",
      "unicode": "\uE6C0"
    },
    {
      "font_class": "camera",
      "unicode": "\uE65A"
    },
    {
      "font_class": "camera-filled",
      "unicode": "\uE658"
    },
    {
      "font_class": "cart",
      "unicode": "\uE631"
    },
    {
      "font_class": "cart-filled",
      "unicode": "\uE6D0"
    },
    {
      "font_class": "chat",
      "unicode": "\uE65D"
    },
    {
      "font_class": "chat-filled",
      "unicode": "\uE659"
    },
    {
      "font_class": "chatboxes",
      "unicode": "\uE696"
    },
    {
      "font_class": "chatboxes-filled",
      "unicode": "\uE692"
    },
    {
      "font_class": "chatbubble",
      "unicode": "\uE697"
    },
    {
      "font_class": "chatbubble-filled",
      "unicode": "\uE694"
    },
    {
      "font_class": "checkbox",
      "unicode": "\uE62B"
    },
    {
      "font_class": "checkbox-filled",
      "unicode": "\uE62C"
    },
    {
      "font_class": "checkmarkempty",
      "unicode": "\uE65C"
    },
    {
      "font_class": "circle",
      "unicode": "\uE65B"
    },
    {
      "font_class": "circle-filled",
      "unicode": "\uE65E"
    },
    {
      "font_class": "clear",
      "unicode": "\uE66D"
    },
    {
      "font_class": "close",
      "unicode": "\uE673"
    },
    {
      "font_class": "closeempty",
      "unicode": "\uE66C"
    },
    {
      "font_class": "cloud-download",
      "unicode": "\uE647"
    },
    {
      "font_class": "cloud-download-filled",
      "unicode": "\uE646"
    },
    {
      "font_class": "cloud-upload",
      "unicode": "\uE645"
    },
    {
      "font_class": "cloud-upload-filled",
      "unicode": "\uE648"
    },
    {
      "font_class": "color",
      "unicode": "\uE6CF"
    },
    {
      "font_class": "color-filled",
      "unicode": "\uE6C9"
    },
    {
      "font_class": "compose",
      "unicode": "\uE67F"
    },
    {
      "font_class": "contact",
      "unicode": "\uE693"
    },
    {
      "font_class": "contact-filled",
      "unicode": "\uE695"
    },
    {
      "font_class": "down",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "bottom",
      "unicode": "\uE6B8"
    },
    {
      "font_class": "download",
      "unicode": "\uE68D"
    },
    {
      "font_class": "download-filled",
      "unicode": "\uE681"
    },
    {
      "font_class": "email",
      "unicode": "\uE69E"
    },
    {
      "font_class": "email-filled",
      "unicode": "\uE69A"
    },
    {
      "font_class": "eye",
      "unicode": "\uE651"
    },
    {
      "font_class": "eye-filled",
      "unicode": "\uE66A"
    },
    {
      "font_class": "eye-slash",
      "unicode": "\uE6B3"
    },
    {
      "font_class": "eye-slash-filled",
      "unicode": "\uE6B4"
    },
    {
      "font_class": "fire",
      "unicode": "\uE6A1"
    },
    {
      "font_class": "fire-filled",
      "unicode": "\uE6C5"
    },
    {
      "font_class": "flag",
      "unicode": "\uE65F"
    },
    {
      "font_class": "flag-filled",
      "unicode": "\uE660"
    },
    {
      "font_class": "folder-add",
      "unicode": "\uE6A9"
    },
    {
      "font_class": "folder-add-filled",
      "unicode": "\uE6C8"
    },
    {
      "font_class": "font",
      "unicode": "\uE6A3"
    },
    {
      "font_class": "forward",
      "unicode": "\uE6BA"
    },
    {
      "font_class": "gear",
      "unicode": "\uE664"
    },
    {
      "font_class": "gear-filled",
      "unicode": "\uE661"
    },
    {
      "font_class": "gift",
      "unicode": "\uE6A4"
    },
    {
      "font_class": "gift-filled",
      "unicode": "\uE6C4"
    },
    {
      "font_class": "hand-down",
      "unicode": "\uE63D"
    },
    {
      "font_class": "hand-down-filled",
      "unicode": "\uE63C"
    },
    {
      "font_class": "hand-up",
      "unicode": "\uE63F"
    },
    {
      "font_class": "hand-up-filled",
      "unicode": "\uE63E"
    },
    {
      "font_class": "headphones",
      "unicode": "\uE630"
    },
    {
      "font_class": "heart",
      "unicode": "\uE639"
    },
    {
      "font_class": "heart-filled",
      "unicode": "\uE641"
    },
    {
      "font_class": "help",
      "unicode": "\uE679"
    },
    {
      "font_class": "help-filled",
      "unicode": "\uE674"
    },
    {
      "font_class": "home",
      "unicode": "\uE662"
    },
    {
      "font_class": "home-filled",
      "unicode": "\uE663"
    },
    {
      "font_class": "image",
      "unicode": "\uE670"
    },
    {
      "font_class": "image-filled",
      "unicode": "\uE678"
    },
    {
      "font_class": "images",
      "unicode": "\uE650"
    },
    {
      "font_class": "images-filled",
      "unicode": "\uE64B"
    },
    {
      "font_class": "info",
      "unicode": "\uE669"
    },
    {
      "font_class": "info-filled",
      "unicode": "\uE649"
    },
    {
      "font_class": "left",
      "unicode": "\uE6B7"
    },
    {
      "font_class": "link",
      "unicode": "\uE6A5"
    },
    {
      "font_class": "list",
      "unicode": "\uE644"
    },
    {
      "font_class": "location",
      "unicode": "\uE6AE"
    },
    {
      "font_class": "location-filled",
      "unicode": "\uE6AF"
    },
    {
      "font_class": "locked",
      "unicode": "\uE66B"
    },
    {
      "font_class": "locked-filled",
      "unicode": "\uE668"
    },
    {
      "font_class": "loop",
      "unicode": "\uE633"
    },
    {
      "font_class": "mail-open",
      "unicode": "\uE643"
    },
    {
      "font_class": "mail-open-filled",
      "unicode": "\uE63A"
    },
    {
      "font_class": "map",
      "unicode": "\uE667"
    },
    {
      "font_class": "map-filled",
      "unicode": "\uE666"
    },
    {
      "font_class": "map-pin",
      "unicode": "\uE6AD"
    },
    {
      "font_class": "map-pin-ellipse",
      "unicode": "\uE6AC"
    },
    {
      "font_class": "medal",
      "unicode": "\uE6A2"
    },
    {
      "font_class": "medal-filled",
      "unicode": "\uE6C3"
    },
    {
      "font_class": "mic",
      "unicode": "\uE671"
    },
    {
      "font_class": "mic-filled",
      "unicode": "\uE677"
    },
    {
      "font_class": "micoff",
      "unicode": "\uE67E"
    },
    {
      "font_class": "micoff-filled",
      "unicode": "\uE6B0"
    },
    {
      "font_class": "minus",
      "unicode": "\uE66F"
    },
    {
      "font_class": "minus-filled",
      "unicode": "\uE67D"
    },
    {
      "font_class": "more",
      "unicode": "\uE64D"
    },
    {
      "font_class": "more-filled",
      "unicode": "\uE64E"
    },
    {
      "font_class": "navigate",
      "unicode": "\uE66E"
    },
    {
      "font_class": "navigate-filled",
      "unicode": "\uE67A"
    },
    {
      "font_class": "notification",
      "unicode": "\uE6A6"
    },
    {
      "font_class": "notification-filled",
      "unicode": "\uE6C1"
    },
    {
      "font_class": "paperclip",
      "unicode": "\uE652"
    },
    {
      "font_class": "paperplane",
      "unicode": "\uE672"
    },
    {
      "font_class": "paperplane-filled",
      "unicode": "\uE675"
    },
    {
      "font_class": "person",
      "unicode": "\uE699"
    },
    {
      "font_class": "person-filled",
      "unicode": "\uE69D"
    },
    {
      "font_class": "personadd",
      "unicode": "\uE69F"
    },
    {
      "font_class": "personadd-filled",
      "unicode": "\uE698"
    },
    {
      "font_class": "personadd-filled-copy",
      "unicode": "\uE6D1"
    },
    {
      "font_class": "phone",
      "unicode": "\uE69C"
    },
    {
      "font_class": "phone-filled",
      "unicode": "\uE69B"
    },
    {
      "font_class": "plus",
      "unicode": "\uE676"
    },
    {
      "font_class": "plus-filled",
      "unicode": "\uE6C7"
    },
    {
      "font_class": "plusempty",
      "unicode": "\uE67B"
    },
    {
      "font_class": "pulldown",
      "unicode": "\uE632"
    },
    {
      "font_class": "pyq",
      "unicode": "\uE682"
    },
    {
      "font_class": "qq",
      "unicode": "\uE680"
    },
    {
      "font_class": "redo",
      "unicode": "\uE64A"
    },
    {
      "font_class": "redo-filled",
      "unicode": "\uE655"
    },
    {
      "font_class": "refresh",
      "unicode": "\uE657"
    },
    {
      "font_class": "refresh-filled",
      "unicode": "\uE656"
    },
    {
      "font_class": "refreshempty",
      "unicode": "\uE6BF"
    },
    {
      "font_class": "reload",
      "unicode": "\uE6B2"
    },
    {
      "font_class": "right",
      "unicode": "\uE6B5"
    },
    {
      "font_class": "scan",
      "unicode": "\uE62A"
    },
    {
      "font_class": "search",
      "unicode": "\uE654"
    },
    {
      "font_class": "settings",
      "unicode": "\uE653"
    },
    {
      "font_class": "settings-filled",
      "unicode": "\uE6CE"
    },
    {
      "font_class": "shop",
      "unicode": "\uE62F"
    },
    {
      "font_class": "shop-filled",
      "unicode": "\uE6CD"
    },
    {
      "font_class": "smallcircle",
      "unicode": "\uE67C"
    },
    {
      "font_class": "smallcircle-filled",
      "unicode": "\uE665"
    },
    {
      "font_class": "sound",
      "unicode": "\uE684"
    },
    {
      "font_class": "sound-filled",
      "unicode": "\uE686"
    },
    {
      "font_class": "spinner-cycle",
      "unicode": "\uE68A"
    },
    {
      "font_class": "staff",
      "unicode": "\uE6A7"
    },
    {
      "font_class": "staff-filled",
      "unicode": "\uE6CB"
    },
    {
      "font_class": "star",
      "unicode": "\uE688"
    },
    {
      "font_class": "star-filled",
      "unicode": "\uE68F"
    },
    {
      "font_class": "starhalf",
      "unicode": "\uE683"
    },
    {
      "font_class": "trash",
      "unicode": "\uE687"
    },
    {
      "font_class": "trash-filled",
      "unicode": "\uE685"
    },
    {
      "font_class": "tune",
      "unicode": "\uE6AA"
    },
    {
      "font_class": "tune-filled",
      "unicode": "\uE6CA"
    },
    {
      "font_class": "undo",
      "unicode": "\uE64F"
    },
    {
      "font_class": "undo-filled",
      "unicode": "\uE64C"
    },
    {
      "font_class": "up",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "top",
      "unicode": "\uE6B6"
    },
    {
      "font_class": "upload",
      "unicode": "\uE690"
    },
    {
      "font_class": "upload-filled",
      "unicode": "\uE68E"
    },
    {
      "font_class": "videocam",
      "unicode": "\uE68C"
    },
    {
      "font_class": "videocam-filled",
      "unicode": "\uE689"
    },
    {
      "font_class": "vip",
      "unicode": "\uE6A8"
    },
    {
      "font_class": "vip-filled",
      "unicode": "\uE6C6"
    },
    {
      "font_class": "wallet",
      "unicode": "\uE6B1"
    },
    {
      "font_class": "wallet-filled",
      "unicode": "\uE6C2"
    },
    {
      "font_class": "weibo",
      "unicode": "\uE68B"
    },
    {
      "font_class": "weixin",
      "unicode": "\uE691"
    }
  ];
  var _export_sfc = (sfc, props2) => {
    const target = sfc.__vccOpts || sfc;
    for (const [key, val] of props2) {
      target[key] = val;
    }
    return target;
  };
  const getVal = (val) => {
    const reg = /^[0-9]*$/g;
    return typeof val === "number" || reg.test(val) ? val + "px" : val;
  };
  const _sfc_main$n = {
    name: "UniIcons",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#333333"
      },
      size: {
        type: [Number, String],
        default: 16
      },
      customPrefix: {
        type: String,
        default: ""
      },
      fontFamily: {
        type: String,
        default: ""
      }
    },
    data() {
      return {
        icons: fontData
      };
    },
    computed: {
      unicode() {
        let code2 = this.icons.find((v) => v.font_class === this.type);
        if (code2) {
          return code2.unicode;
        }
        return "";
      },
      iconSize() {
        return getVal(this.size);
      },
      styleObj() {
        if (this.fontFamily !== "") {
          return `color: ${this.color}; font-size: ${this.iconSize}; font-family: ${this.fontFamily};`;
        }
        return `color: ${this.color}; font-size: ${this.iconSize};`;
      }
    },
    methods: {
      _onClick() {
        this.$emit("click");
      }
    }
  };
  function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", {
      style: vue.normalizeStyle($options.styleObj),
      class: vue.normalizeClass(["uni-icons", ["uniui-" + $props.type, $props.customPrefix, $props.customPrefix ? $props.type : ""]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options._onClick && $options._onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
    ], 6);
  }
  var __easycom_1$2 = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$d], ["__scopeId", "data-v-a2e81f6e"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-icons/components/uni-icons/uni-icons.vue"]]);
  function resolveEasycom(component, easycom) {
    return shared.isString(component) ? easycom : component;
  }
  const createHook = (lifecycle) => (hook, target = vue.getCurrentInstance()) => {
    !vue.isInSSRComponentSetup && vue.injectHook(lifecycle, hook, target);
  };
  const onLoad = /* @__PURE__ */ createHook(ON_LOAD);
  const onUnload = /* @__PURE__ */ createHook(ON_UNLOAD);
  const onReachBottom = /* @__PURE__ */ createHook(ON_REACH_BOTTOM);
  const onShareTimeline = /* @__PURE__ */ createHook(ON_SHARE_TIMELINE);
  const onShareAppMessage = /* @__PURE__ */ createHook(ON_SHARE_APP_MESSAGE);
  const SYSTEM_INFO = uni.getSystemInfoSync();
  const getStatusBarHeight = () => SYSTEM_INFO.statusBarHeight || 15;
  const getTitleBarHeight = () => {
    if (uni.getMenuButtonBoundingClientRect) {
      let { top, height } = uni.getMenuButtonBoundingClientRect();
      return height + (top - getStatusBarHeight()) * 2;
    } else {
      return 40;
    }
  };
  const getNavBarHeight = () => getStatusBarHeight() + getTitleBarHeight();
  const getLeftIconLeft = () => {
    return 0;
  };
  const _sfc_main$m = {
    props: {
      title: {
        type: String,
        default: "\u58C1\u7EB8"
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "layout" }, [
          vue.createElementVNode("view", { class: "navbar" }, [
            vue.createElementVNode("view", {
              class: "statusBar",
              style: vue.normalizeStyle({ height: vue.unref(getStatusBarHeight)() + "px" })
            }, null, 4),
            vue.createElementVNode("view", {
              class: "titleBar",
              style: vue.normalizeStyle({ height: vue.unref(getTitleBarHeight)() + "px", marginLeft: vue.unref(getLeftIconLeft)() + "px" })
            }, [
              vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(__props.title), 1),
              vue.createElementVNode("navigator", {
                url: "/pages/search/search",
                class: "search"
              }, [
                vue.createVNode(_component_uni_icons, {
                  class: "icon",
                  type: "search",
                  color: "#888",
                  size: "18"
                }),
                vue.createElementVNode("text", { class: "text" }, "\u641C\u7D22")
              ])
            ], 4)
          ]),
          vue.createElementVNode("view", {
            class: "fill",
            style: vue.normalizeStyle({ height: vue.unref(getNavBarHeight)() + "px" })
          }, null, 4)
        ]);
      };
    }
  };
  var __easycom_0$4 = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["__scopeId", "data-v-043fa8b8"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/components/custom-nav-bar/custom-nav-bar.vue"]]);
  function pad(str, length = 2) {
    str += "";
    while (str.length < length) {
      str = "0" + str;
    }
    return str.slice(-length);
  }
  const parser = {
    yyyy: (dateObj) => {
      return pad(dateObj.year, 4);
    },
    yy: (dateObj) => {
      return pad(dateObj.year);
    },
    MM: (dateObj) => {
      return pad(dateObj.month);
    },
    M: (dateObj) => {
      return dateObj.month;
    },
    dd: (dateObj) => {
      return pad(dateObj.day);
    },
    d: (dateObj) => {
      return dateObj.day;
    },
    hh: (dateObj) => {
      return pad(dateObj.hour);
    },
    h: (dateObj) => {
      return dateObj.hour;
    },
    mm: (dateObj) => {
      return pad(dateObj.minute);
    },
    m: (dateObj) => {
      return dateObj.minute;
    },
    ss: (dateObj) => {
      return pad(dateObj.second);
    },
    s: (dateObj) => {
      return dateObj.second;
    },
    SSS: (dateObj) => {
      return pad(dateObj.millisecond, 3);
    },
    S: (dateObj) => {
      return dateObj.millisecond;
    }
  };
  function getDate(time) {
    if (time instanceof Date) {
      return time;
    }
    switch (typeof time) {
      case "string": {
        if (time.indexOf("T") > -1) {
          return new Date(time);
        }
        return new Date(time.replace(/-/g, "/"));
      }
      default:
        return new Date(time);
    }
  }
  function formatDate(date2, format = "yyyy/MM/dd hh:mm:ss") {
    if (!date2 && date2 !== 0) {
      return "";
    }
    date2 = getDate(date2);
    const dateObj = {
      year: date2.getFullYear(),
      month: date2.getMonth() + 1,
      day: date2.getDate(),
      hour: date2.getHours(),
      minute: date2.getMinutes(),
      second: date2.getSeconds(),
      millisecond: date2.getMilliseconds()
    };
    const tokenRegExp = /yyyy|yy|MM|M|dd|d|hh|h|mm|m|ss|s|SSS|SS|S/;
    let flag2 = true;
    let result = format;
    while (flag2) {
      flag2 = false;
      result = result.replace(tokenRegExp, function(matched) {
        flag2 = true;
        return parser[matched](dateObj);
      });
    }
    return result;
  }
  function friendlyDate(time, {
    locale = "zh",
    threshold = [6e4, 36e5],
    format = "yyyy/MM/dd hh:mm:ss"
  }) {
    if (time === "-") {
      return time;
    }
    if (!time && time !== 0) {
      return "";
    }
    const localeText = {
      zh: {
        year: "\u5E74",
        month: "\u6708",
        day: "\u5929",
        hour: "\u5C0F\u65F6",
        minute: "\u5206\u949F",
        second: "\u79D2",
        ago: "\u524D",
        later: "\u540E",
        justNow: "\u521A\u521A",
        soon: "\u9A6C\u4E0A",
        template: "{num}{unit}{suffix}"
      },
      en: {
        year: "year",
        month: "month",
        day: "day",
        hour: "hour",
        minute: "minute",
        second: "second",
        ago: "ago",
        later: "later",
        justNow: "just now",
        soon: "soon",
        template: "{num} {unit} {suffix}"
      }
    };
    const text = localeText[locale] || localeText.zh;
    let date2 = getDate(time);
    let ms = date2.getTime() - Date.now();
    let absMs = Math.abs(ms);
    if (absMs < threshold[0]) {
      return ms < 0 ? text.justNow : text.soon;
    }
    if (absMs >= threshold[1]) {
      return formatDate(date2, format);
    }
    let num;
    let unit;
    let suffix = text.later;
    if (ms < 0) {
      suffix = text.ago;
      ms = -ms;
    }
    const seconds = Math.floor(ms / 1e3);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);
    const months = Math.floor(days / 30);
    const years = Math.floor(months / 12);
    switch (true) {
      case years > 0:
        num = years;
        unit = text.year;
        break;
      case months > 0:
        num = months;
        unit = text.month;
        break;
      case days > 0:
        num = days;
        unit = text.day;
        break;
      case hours > 0:
        num = hours;
        unit = text.hour;
        break;
      case minutes > 0:
        num = minutes;
        unit = text.minute;
        break;
      default:
        num = seconds;
        unit = text.second;
        break;
    }
    if (locale === "en") {
      if (num === 1) {
        num = "a";
      } else {
        unit += "s";
      }
    }
    return text.template.replace(/{\s*num\s*}/g, num + "").replace(/{\s*unit\s*}/g, unit).replace(/{\s*suffix\s*}/g, suffix);
  }
  const _sfc_main$l = {
    name: "uniDateformat",
    props: {
      date: {
        type: [Object, String, Number],
        default() {
          return "-";
        }
      },
      locale: {
        type: String,
        default: "zh"
      },
      threshold: {
        type: Array,
        default() {
          return [0, 0];
        }
      },
      format: {
        type: String,
        default: "yyyy/MM/dd hh:mm:ss"
      },
      refreshRate: {
        type: [Number, String],
        default: 0
      }
    },
    data() {
      return {
        refreshMark: 0
      };
    },
    computed: {
      dateShow() {
        this.refreshMark;
        return friendlyDate(this.date, {
          locale: this.locale,
          threshold: this.threshold,
          format: this.format
        });
      }
    },
    watch: {
      refreshRate: {
        handler() {
          this.setAutoRefresh();
        },
        immediate: true
      }
    },
    methods: {
      refresh() {
        this.refreshMark++;
      },
      setAutoRefresh() {
        clearInterval(this.refreshInterval);
        if (this.refreshRate) {
          this.refreshInterval = setInterval(() => {
            this.refresh();
          }, parseInt(this.refreshRate));
        }
      }
    }
  };
  function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("text", null, vue.toDisplayString($options.dateShow), 1);
  }
  var __easycom_1$1 = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$c], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.vue"]]);
  const _sfc_main$k = {};
  function _sfc_render$b(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "common-title" }, [
      vue.createElementVNode("view", { class: "name" }, [
        vue.renderSlot(_ctx.$slots, "name", {}, void 0, true)
      ]),
      vue.createElementVNode("view", { class: "custom" }, [
        vue.renderSlot(_ctx.$slots, "custom", {}, void 0, true)
      ])
    ]);
  }
  var __easycom_3$2 = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$b], ["__scopeId", "data-v-918fe578"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/components/common-title/common-title.vue"]]);
  var _imports_0 = "/common/images/more.jpg";
  function compareTimestamp(timestamp) {
    const currentTime = new Date().getTime();
    const timeDiff = currentTime - timestamp;
    if (timeDiff < 6e4) {
      return "1\u5206\u949F\u5185";
    } else if (timeDiff < 36e5) {
      return Math.floor(timeDiff / 6e4) + "\u5206\u949F";
    } else if (timeDiff < 864e5) {
      return Math.floor(timeDiff / 36e5) + "\u5C0F\u65F6";
    } else if (timeDiff < 2592e6) {
      return Math.floor(timeDiff / 864e5) + "\u5929";
    } else if (timeDiff < 7776e6) {
      return Math.floor(timeDiff / 2592e6) + "\u6708";
    } else {
      return null;
    }
  }
  const _sfc_main$j = {
    props: {
      isMore: {
        type: Boolean,
        default: false
      },
      item: {
        type: Object,
        default() {
          return {
            name: "\u9ED8\u8BA4\u540D\u79F0",
            picurl: "../../common/images/classify1.jpg",
            updateTime: Date.now() - 1e3 * 60 * 60 * 5
          };
        }
      }
    },
    setup(__props) {
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        return vue.openBlock(), vue.createElementBlock("view", { class: "themeItem" }, [
          !__props.isMore ? (vue.openBlock(), vue.createElementBlock("navigator", {
            key: 0,
            url: "/pages/classlist/classlist?id=" + __props.item._id + "&name=" + __props.item.name,
            class: "box"
          }, [
            vue.createElementVNode("image", {
              class: "pic",
              src: __props.item.picurl,
              mode: "aspectFill"
            }, null, 8, ["src"]),
            vue.createElementVNode("view", { class: "mask" }, vue.toDisplayString(__props.item.name), 1),
            vue.unref(compareTimestamp)(__props.item.updateTime) ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "tab"
            }, vue.toDisplayString(vue.unref(compareTimestamp)(__props.item.updateTime)) + "\u524D\u66F4\u65B0", 1)) : vue.createCommentVNode("v-if", true)
          ], 8, ["url"])) : vue.createCommentVNode("v-if", true),
          __props.isMore ? (vue.openBlock(), vue.createElementBlock("navigator", {
            key: 1,
            url: "/pages/classify/classify",
            "open-type": "reLaunch",
            class: "box more"
          }, [
            vue.createElementVNode("image", {
              class: "pic",
              src: _imports_0,
              mode: "aspectFill"
            }),
            vue.createElementVNode("view", { class: "mask" }, [
              vue.createVNode(_component_uni_icons, {
                type: "more-filled",
                size: "34",
                color: "#fff"
              }),
              vue.createElementVNode("view", { class: "text" }, "\u66F4\u591A")
            ])
          ])) : vue.createCommentVNode("v-if", true)
        ]);
      };
    }
  };
  var __easycom_1 = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["__scopeId", "data-v-0fe3a138"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/components/theme-item/theme-item.vue"]]);
  const BASE_URL = "https://tea.qingnian8.com/api/bizhi";
  function request(config2 = {}) {
    let {
      url: url2,
      data = {},
      method = "GET",
      header = {}
    } = config2;
    url2 = BASE_URL + url2;
    header["access-key"] = "@#Mo123";
    return new Promise((resolve, reject) => {
      uni.request({
        url: url2,
        data,
        method,
        header,
        success: (res) => {
          if (res.data.errCode === 0) {
            resolve(res.data);
          } else if (res.data.errCode === 400) {
            uni.showModal({
              title: "\u9519\u8BEF\u63D0\u793A",
              content: res.data.errMsg,
              showCancel: false
            });
            reject(res.data);
          } else {
            uni.showToast({
              title: res.data.errMsg,
              icon: "none"
            });
            reject(res.data);
          }
        },
        fail: (err) => {
          reject(err);
        }
      });
    });
  }
  function apiGetBanner() {
    return request({
      url: "/homeBanner"
    });
  }
  function apiGetDayRandom() {
    return request({ url: "/randomWall" });
  }
  function apiGetNotice(data = {}) {
    return request({
      url: "/wallNewsList",
      data
    });
  }
  function apiGetClassify(data = {}) {
    return request({
      url: "/classify",
      data
    });
  }
  function apiGetClassList(data = {}) {
    return request({
      url: "/wallList",
      data
    });
  }
  function apiGetSetupScore(data = {}) {
    return request({
      url: "/setupScore",
      data
    });
  }
  function apiWriteDownload(data = {}) {
    return request({
      url: "/downloadWall",
      data
    });
  }
  function apiDetailWall(data = {}) {
    return request({
      url: "/detailWall",
      data
    });
  }
  function apiUserInfo(data = {}) {
    return request({
      url: "/userInfo",
      data
    });
  }
  function apiGetHistoryList(data = {}) {
    return request({
      url: "/userWallList",
      data
    });
  }
  function apiNoticeDetail(data = {}) {
    return request({
      url: "/wallNewsDetail",
      data
    });
  }
  function apiSearchData(data = {}) {
    return request({
      url: "/searchWall",
      data
    });
  }
  const _sfc_main$i = {
    setup(__props) {
      const bannerList = vue.ref([]);
      const randomList = vue.ref([]);
      const noticeList = vue.ref([]);
      const classifyList = vue.ref([]);
      const getBanner = async () => {
        let res = await apiGetBanner();
        bannerList.value = res.data;
      };
      const getDayRandom = async () => {
        let res = await apiGetDayRandom();
        randomList.value = res.data;
      };
      const getNotice = async () => {
        let res = await apiGetNotice({ select: true });
        noticeList.value = res.data;
      };
      const getClassify = async () => {
        let res = await apiGetClassify({
          select: true
        });
        classifyList.value = res.data;
        formatAppLog("log", "at pages/index/index.vue:124", res);
      };
      const goPreview = (id) => {
        uni.setStorageSync("storgClassList", randomList.value);
        uni.navigateTo({
          url: "/pages/preview/preview?id=" + id
        });
      };
      onShareAppMessage((e) => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u597D\u770B\u7684\u624B\u673A\u58C1\u7EB8",
          path: "/pages/classify/classify"
        };
      });
      onShareTimeline(() => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u597D\u770B\u7684\u624B\u673A\u58C1\u7EB8"
        };
      });
      getBanner();
      getDayRandom();
      getNotice();
      getClassify();
      return (_ctx, _cache) => {
        const _component_custom_nav_bar = resolveEasycom(vue.resolveDynamicComponent("custom-nav-bar"), __easycom_0$4);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        const _component_uni_dateformat = resolveEasycom(vue.resolveDynamicComponent("uni-dateformat"), __easycom_1$1);
        const _component_common_title = resolveEasycom(vue.resolveDynamicComponent("common-title"), __easycom_3$2);
        const _component_theme_item = resolveEasycom(vue.resolveDynamicComponent("theme-item"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "homeLayout pageBg" }, [
          vue.createVNode(_component_custom_nav_bar, { title: "\u63A8\u8350" }),
          vue.createElementVNode("view", { class: "banner" }, [
            vue.createElementVNode("swiper", {
              circular: "",
              "indicator-dots": "",
              "indicator-color": "rgba(255,255,255,0.5)",
              "indicator-active-color": "#fff",
              autoplay: ""
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(bannerList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("swiper-item", {
                  key: item._id
                }, [
                  item.target == "miniProgram" ? (vue.openBlock(), vue.createElementBlock("navigator", {
                    key: 0,
                    url: item.url,
                    class: "like",
                    target: "miniProgram",
                    "app-id": item.appid
                  }, [
                    vue.createElementVNode("image", {
                      src: item.picurl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ], 8, ["url", "app-id"])) : (vue.openBlock(), vue.createElementBlock("navigator", {
                    key: 1,
                    url: `/pages/classlist/classlist?${item.url}`,
                    class: "like"
                  }, [
                    vue.createElementVNode("image", {
                      src: item.picurl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ], 8, ["url"]))
                ]);
              }), 128))
            ])
          ]),
          vue.createElementVNode("view", { class: "notice" }, [
            vue.createElementVNode("view", { class: "left" }, [
              vue.createVNode(_component_uni_icons, {
                type: "sound-filled",
                size: "20"
              }),
              vue.createElementVNode("text", { class: "text" }, "\u516C\u544A")
            ]),
            vue.createElementVNode("view", { class: "center" }, [
              vue.createElementVNode("swiper", {
                vertical: "",
                autoplay: "",
                interval: "1500",
                duration: "300",
                circular: ""
              }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(noticeList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("swiper-item", {
                    key: item._id
                  }, [
                    vue.createElementVNode("navigator", {
                      url: "/pages/notice/detail?id=" + item._id
                    }, vue.toDisplayString(item.title), 9, ["url"])
                  ]);
                }), 128))
              ])
            ]),
            vue.createElementVNode("view", { class: "right" }, [
              vue.createVNode(_component_uni_icons, {
                type: "right",
                size: "16",
                color: "#333"
              })
            ])
          ]),
          vue.createElementVNode("view", { class: "select" }, [
            vue.createVNode(_component_common_title, null, {
              name: vue.withCtx(() => [
                vue.createTextVNode("\u6BCF\u65E5\u63A8\u8350")
              ]),
              custom: vue.withCtx(() => [
                vue.createElementVNode("view", { class: "date" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "calendar",
                    size: "18"
                  }),
                  vue.createElementVNode("view", { class: "text" }, [
                    vue.createVNode(_component_uni_dateformat, {
                      date: Date.now(),
                      format: "dd\u65E5"
                    }, null, 8, ["date"])
                  ])
                ])
              ]),
              _: 1
            }),
            vue.createElementVNode("view", { class: "content" }, [
              vue.createElementVNode("scroll-view", { "scroll-x": "" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(randomList.value, (item) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "box",
                    key: item._id,
                    onClick: ($event) => goPreview(item._id)
                  }, [
                    vue.createElementVNode("image", {
                      src: item.smallPicurl,
                      mode: "aspectFill"
                    }, null, 8, ["src"])
                  ], 8, ["onClick"]);
                }), 128))
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "theme" }, [
            vue.createVNode(_component_common_title, null, {
              name: vue.withCtx(() => [
                vue.createTextVNode("\u4E13\u9898\u7CBE\u9009")
              ]),
              custom: vue.withCtx(() => [
                vue.createElementVNode("navigator", {
                  url: "/pages/classify/classify",
                  "open-type": "reLaunch",
                  class: "more"
                }, "More+")
              ]),
              _: 1
            }),
            vue.createElementVNode("view", { class: "content" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(classifyList.value, (item) => {
                return vue.openBlock(), vue.createBlock(_component_theme_item, {
                  key: item._id,
                  item
                }, null, 8, ["item"]);
              }), 128)),
              vue.createVNode(_component_theme_item, { isMore: true })
            ])
          ])
        ]);
      };
    }
  };
  var PagesIndexIndex = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["__scopeId", "data-v-57280228"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/index/index.vue"]]);
  const _sfc_main$h = {
    setup(__props) {
      const classifyList = vue.ref([]);
      const getClassify = async () => {
        let res = await apiGetClassify({
          pageSize: 15
        });
        classifyList.value = res.data;
        formatAppLog("log", "at pages/classify/classify.vue:29", res);
      };
      onShareAppMessage((e) => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u7CBE\u9009\u5206\u7C7B",
          path: "/pages/classify/classify"
        };
      });
      onShareTimeline(() => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u7CBE\u9009\u5206\u7C7B"
        };
      });
      getClassify();
      return (_ctx, _cache) => {
        const _component_custom_nav_bar = resolveEasycom(vue.resolveDynamicComponent("custom-nav-bar"), __easycom_0$4);
        const _component_theme_item = resolveEasycom(vue.resolveDynamicComponent("theme-item"), __easycom_1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "classLayout pageBg" }, [
          vue.createVNode(_component_custom_nav_bar, { title: "\u5206\u7C7B" }),
          vue.createElementVNode("view", { class: "classify" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(classifyList.value, (item) => {
              return vue.openBlock(), vue.createBlock(_component_theme_item, {
                key: item._id,
                item
              }, null, 8, ["item"]);
            }), 128))
          ])
        ]);
      };
    }
  };
  var PagesClassifyClassify = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["__scopeId", "data-v-71432b06"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/classify/classify.vue"]]);
  const isArray = Array.isArray;
  const isObject = (val) => val !== null && typeof val === "object";
  const defaultDelimiters = ["{", "}"];
  class BaseFormatter {
    constructor() {
      this._caches = /* @__PURE__ */ Object.create(null);
    }
    interpolate(message, values, delimiters = defaultDelimiters) {
      if (!values) {
        return [message];
      }
      let tokens = this._caches[message];
      if (!tokens) {
        tokens = parse(message, delimiters);
        this._caches[message] = tokens;
      }
      return compile(tokens, values);
    }
  }
  const RE_TOKEN_LIST_VALUE = /^(?:\d)+/;
  const RE_TOKEN_NAMED_VALUE = /^(?:\w)+/;
  function parse(format, [startDelimiter, endDelimiter]) {
    const tokens = [];
    let position = 0;
    let text = "";
    while (position < format.length) {
      let char = format[position++];
      if (char === startDelimiter) {
        if (text) {
          tokens.push({ type: "text", value: text });
        }
        text = "";
        let sub = "";
        char = format[position++];
        while (char !== void 0 && char !== endDelimiter) {
          sub += char;
          char = format[position++];
        }
        const isClosed = char === endDelimiter;
        const type = RE_TOKEN_LIST_VALUE.test(sub) ? "list" : isClosed && RE_TOKEN_NAMED_VALUE.test(sub) ? "named" : "unknown";
        tokens.push({ value: sub, type });
      } else {
        text += char;
      }
    }
    text && tokens.push({ type: "text", value: text });
    return tokens;
  }
  function compile(tokens, values) {
    const compiled = [];
    let index2 = 0;
    const mode = isArray(values) ? "list" : isObject(values) ? "named" : "unknown";
    if (mode === "unknown") {
      return compiled;
    }
    while (index2 < tokens.length) {
      const token = tokens[index2];
      switch (token.type) {
        case "text":
          compiled.push(token.value);
          break;
        case "list":
          compiled.push(values[parseInt(token.value, 10)]);
          break;
        case "named":
          if (mode === "named") {
            compiled.push(values[token.value]);
          } else {
            {
              console.warn(`Type of token '${token.type}' and format of value '${mode}' don't match!`);
            }
          }
          break;
        case "unknown":
          {
            console.warn(`Detect 'unknown' type of token!`);
          }
          break;
      }
      index2++;
    }
    return compiled;
  }
  const LOCALE_ZH_HANS = "zh-Hans";
  const LOCALE_ZH_HANT = "zh-Hant";
  const LOCALE_EN = "en";
  const LOCALE_FR = "fr";
  const LOCALE_ES = "es";
  const hasOwnProperty = Object.prototype.hasOwnProperty;
  const hasOwn = (val, key) => hasOwnProperty.call(val, key);
  const defaultFormatter = new BaseFormatter();
  function include(str, parts) {
    return !!parts.find((part) => str.indexOf(part) !== -1);
  }
  function startsWith(str, parts) {
    return parts.find((part) => str.indexOf(part) === 0);
  }
  function normalizeLocale(locale, messages2) {
    if (!locale) {
      return;
    }
    locale = locale.trim().replace(/_/g, "-");
    if (messages2 && messages2[locale]) {
      return locale;
    }
    locale = locale.toLowerCase();
    if (locale === "chinese") {
      return LOCALE_ZH_HANS;
    }
    if (locale.indexOf("zh") === 0) {
      if (locale.indexOf("-hans") > -1) {
        return LOCALE_ZH_HANS;
      }
      if (locale.indexOf("-hant") > -1) {
        return LOCALE_ZH_HANT;
      }
      if (include(locale, ["-tw", "-hk", "-mo", "-cht"])) {
        return LOCALE_ZH_HANT;
      }
      return LOCALE_ZH_HANS;
    }
    const lang = startsWith(locale, [LOCALE_EN, LOCALE_FR, LOCALE_ES]);
    if (lang) {
      return lang;
    }
  }
  class I18n {
    constructor({ locale, fallbackLocale, messages: messages2, watcher, formater }) {
      this.locale = LOCALE_EN;
      this.fallbackLocale = LOCALE_EN;
      this.message = {};
      this.messages = {};
      this.watchers = [];
      if (fallbackLocale) {
        this.fallbackLocale = fallbackLocale;
      }
      this.formater = formater || defaultFormatter;
      this.messages = messages2 || {};
      this.setLocale(locale || LOCALE_EN);
      if (watcher) {
        this.watchLocale(watcher);
      }
    }
    setLocale(locale) {
      const oldLocale = this.locale;
      this.locale = normalizeLocale(locale, this.messages) || this.fallbackLocale;
      if (!this.messages[this.locale]) {
        this.messages[this.locale] = {};
      }
      this.message = this.messages[this.locale];
      if (oldLocale !== this.locale) {
        this.watchers.forEach((watcher) => {
          watcher(this.locale, oldLocale);
        });
      }
    }
    getLocale() {
      return this.locale;
    }
    watchLocale(fn) {
      const index2 = this.watchers.push(fn) - 1;
      return () => {
        this.watchers.splice(index2, 1);
      };
    }
    add(locale, message, override = true) {
      const curMessages = this.messages[locale];
      if (curMessages) {
        if (override) {
          Object.assign(curMessages, message);
        } else {
          Object.keys(message).forEach((key) => {
            if (!hasOwn(curMessages, key)) {
              curMessages[key] = message[key];
            }
          });
        }
      } else {
        this.messages[locale] = message;
      }
    }
    f(message, values, delimiters) {
      return this.formater.interpolate(message, values, delimiters).join("");
    }
    t(key, locale, values) {
      let message = this.message;
      if (typeof locale === "string") {
        locale = normalizeLocale(locale, this.messages);
        locale && (message = this.messages[locale]);
      } else {
        values = locale;
      }
      if (!hasOwn(message, key)) {
        console.warn(`Cannot translate the value of keypath ${key}. Use the value of keypath as default.`);
        return key;
      }
      return this.formater.interpolate(message[key], values).join("");
    }
  }
  function watchAppLocale(appVm, i18n) {
    if (appVm.$watchLocale) {
      appVm.$watchLocale((newLocale) => {
        i18n.setLocale(newLocale);
      });
    } else {
      appVm.$watch(() => appVm.$locale, (newLocale) => {
        i18n.setLocale(newLocale);
      });
    }
  }
  function getDefaultLocale() {
    if (typeof uni !== "undefined" && uni.getLocale) {
      return uni.getLocale();
    }
    if (typeof global !== "undefined" && global.getLocale) {
      return global.getLocale();
    }
    return LOCALE_EN;
  }
  function initVueI18n(locale, messages2 = {}, fallbackLocale, watcher) {
    if (typeof locale !== "string") {
      [locale, messages2] = [
        messages2,
        locale
      ];
    }
    if (typeof locale !== "string") {
      locale = getDefaultLocale();
    }
    if (typeof fallbackLocale !== "string") {
      fallbackLocale = typeof __uniConfig !== "undefined" && __uniConfig.fallbackLocale || LOCALE_EN;
    }
    const i18n = new I18n({
      locale,
      fallbackLocale,
      messages: messages2,
      watcher
    });
    let t2 = (key, values) => {
      if (typeof getApp !== "function") {
        t2 = function(key2, values2) {
          return i18n.t(key2, values2);
        };
      } else {
        let isWatchedAppLocale = false;
        t2 = function(key2, values2) {
          const appVm = getApp().$vm;
          if (appVm) {
            appVm.$locale;
            if (!isWatchedAppLocale) {
              isWatchedAppLocale = true;
              watchAppLocale(appVm, i18n);
            }
          }
          return i18n.t(key2, values2);
        };
      }
      return t2(key, values);
    };
    return {
      i18n,
      f(message, values, delimiters) {
        return i18n.f(message, values, delimiters);
      },
      t(key, values) {
        return t2(key, values);
      },
      add(locale2, message, override = true) {
        return i18n.add(locale2, message, override);
      },
      watch(fn) {
        return i18n.watchLocale(fn);
      },
      getLocale() {
        return i18n.getLocale();
      },
      setLocale(newLocale) {
        return i18n.setLocale(newLocale);
      }
    };
  }
  var en$1 = {
    "uni-load-more.contentdown": "Pull up to show more",
    "uni-load-more.contentrefresh": "loading...",
    "uni-load-more.contentnomore": "No more data"
  };
  var zhHans$1 = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u663E\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F7D...",
    "uni-load-more.contentnomore": "\u6CA1\u6709\u66F4\u591A\u6570\u636E\u4E86"
  };
  var zhHant$1 = {
    "uni-load-more.contentdown": "\u4E0A\u62C9\u986F\u793A\u66F4\u591A",
    "uni-load-more.contentrefresh": "\u6B63\u5728\u52A0\u8F09...",
    "uni-load-more.contentnomore": "\u6C92\u6709\u66F4\u591A\u6578\u64DA\u4E86"
  };
  var messages$1 = {
    en: en$1,
    "zh-Hans": zhHans$1,
    "zh-Hant": zhHant$1
  };
  let platform;
  setTimeout(() => {
    platform = uni.getSystemInfoSync().platform;
  }, 16);
  const {
    t: t$1
  } = initVueI18n(messages$1);
  const _sfc_main$g = {
    name: "UniLoadMore",
    emits: ["clickLoadMore"],
    props: {
      status: {
        type: String,
        default: "more"
      },
      showIcon: {
        type: Boolean,
        default: true
      },
      iconType: {
        type: String,
        default: "auto"
      },
      iconSize: {
        type: Number,
        default: 24
      },
      color: {
        type: String,
        default: "#777777"
      },
      contentText: {
        type: Object,
        default() {
          return {
            contentdown: "",
            contentrefresh: "",
            contentnomore: ""
          };
        }
      },
      showText: {
        type: Boolean,
        default: true
      }
    },
    data() {
      return {
        webviewHide: false,
        platform,
        imgBase64: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyJpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvIiB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIgeG1sbnM6c3RSZWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZVJlZiMiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoV2luZG93cykiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6QzlBMzU3OTlEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6QzlBMzU3OUFEOUM0MTFFOUI0NTZDNERBQURBQzI4RkUiPiA8eG1wTU06RGVyaXZlZEZyb20gc3RSZWY6aW5zdGFuY2VJRD0ieG1wLmlpZDpDOUEzNTc5N0Q5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIgc3RSZWY6ZG9jdW1lbnRJRD0ieG1wLmRpZDpDOUEzNTc5OEQ5QzQxMUU5QjQ1NkM0REFBREFDMjhGRSIvPiA8L3JkZjpEZXNjcmlwdGlvbj4gPC9yZGY6UkRGPiA8L3g6eG1wbWV0YT4gPD94cGFja2V0IGVuZD0iciI/Pt+ALSwAAA6CSURBVHja1FsLkFZVHb98LM+F5bHL8khA1iSeiyQBCRM+YGqKUnnJTDLGI0BGZlKDIU2MMglUiDApEZvSsZnQtBRJtKwQNKQMFYeRDR10WOLd8ljYXdh+v8v5fR3Od+797t1dnOnO/Ofce77z+J//+b/P+ZqtXbs2sJ9MJhNUV1cHJ06cCJo3bx7EPc2aNcvpy7pWrVoF+/fvDyoqKoI2bdoE9fX1F7TjN8a+EXBn/fkfvw942Tf+wYMHg9mzZwfjxo0LDhw4EPa1x2MbFw/fOGfPng1qa2tzcCkILsLDydq2bRsunpOTMM7TD/W/tZDZhPdeKD+yGxHhdu3aBV27dg3OnDlzMVANMheLAO3btw8KCwuDmpoaX5OxbgUIMEq7K8IcPnw4KCsrC/r37x8cP378/4cAXAB3vqSkJMuiDhTkw+XcuXNhOWbMmKBly5YhUT8xArhyFvP0BfwRsAuwxJZJsm/nzp2DTp06he/OU+cZ64K6o0ePBkOHDg2GDx8e6gEbJ5Q/NHNuAJQ1hgBeHUDlR7nVTkY8rQAvAi4z34vR/mPs1FoRsaCgIJThI0eOBC1atEiFGGV+5MiRoS45efJkqFjJFXV1dQuA012m2WcwTw98fy6CqBdsaiIO4CScrGPHjvk4odhavPquRtFWXEC25VgkREKOCh/qDSq+vn37htzD/mZTOmOc5U7zKzBPEedygWshcDyWvs30igAbU+6oyMgJBCFhwQE0fccxN60Ay9iebbjoDh06hMowjQxT4fXq1SskArmHZpkArvixp/kWzHdMeArExSJEaiXIjjRjRJ4DaAGWpibLzXN3Fm1vA5teBgh3j1Rv3bp1YgKwPdmf2p9zcyNYYgPKMfY0T5f5nNYdw158nJ8QawW4CLKwiOBSEgO/hok2eBydR+3dYH+PLxA5J8Vv0KBBwenTp0P2JWAx6+yFEBfs8lMY+y0SWMBNI9E4ThKi58VKTg3FQZS1RQF1cz27eC0QHMu+3E0SkUowjhVt5VdaWhp07949ZHv2Qd1EjDXM2cla1M0nl3GxAs3J9yREzyTdFVKVFOaE9qRA8GM0WebRuo9JGZKA7Mv2SeS/Z8+eoQ9BArMfFrLGo6jvxbhHbJZnKX2Rzz1O7QhJJ9Cs2ZMaWIyq/zhdeqPNfIoHd58clIQD+JSXl4dKlyIAuBdVXZwFVWKspSSoxE++h8x4k3uCnEhE4I5KwRiFWGOU0QWKiCYLbdoRMRKAu2kQ9vkfLU6dOhX06NEjlH+yMRZSinnuyWnYosVcji8CEA/6Cg2JF+IIUBqnGKUTCNwtwBN4f89RiK1R96DEgO2o0NDmtEdvVFdVVYV+P3UAPUEs6GFwV3PHmXkD4vh74iDFJysVI/MlaQhwKeBNTLYX5VuA8T4/gZxA4MRGFxDB6R7OmYPfyykGRJbyie+XnGYnQIC/coH9+vULiYrxrkL9ZA9+0ykaHIfEpM7ge8TiJ2CsHYwyMfafAF1yCGBHYIbCVDjDjKt7BeB51D+LgQa6OkG7IDYEEtvQ7lnXLKLtLdLuJBpE4gPUXcW2+PkZwOex+4cGDhwYDBkyRL7/HFcEwUGPo/8uWRUpYnfxGHco8HkewLHLyYmAawAPuIFZxhOpDfJQ8gbUv41yORAptMWBNr6oqMhWird5+u+iHmBb2nhjDV7HWBNQTgK8y11l5NetWzc5ULscAtSj7nbNI0skhWeUZCc0W4nyH/jO4Vz0u1IeYhbk4AiwM6tjxIWByHsoZ9qcIBPJd/y+DwPfBESOmCa/QF3WiZHucLlEDpNxcNhmheEOPgdQNx6/VZFQzFZ5TN08AHXQt2Ii3EdyFuUsPtTcGPhW5iMiCNELvz+Gdn9huG4HUJaW/w3g0wxV0XaG7arG2WeKiUWYM4Y7GO5ezshTARbbWGw/DvXkpp/ivVvE0JVoMxN4rpGzJMhE5Pl+xlATsDIqikP9F9D2z3h9nOksEUFhK+qO4rcPkoalMQ/HqJLIyb3F3JdjrCcw1yZ8joyJLR5gCo54etlag7qIoeNh1N1BRYj3DTFJ0elotxPlVzkGuYAmL0VSJVGAJA41c4Z6A3BzTLfn0HYwYKEI6CUAMzZEWvLsIcQOo1AmmyyM72nHJCfYsogflGV6jEk9vyQZXSuq6w4c16NsGcGZbwOPr+H1RkOk2LEzjNepxQkihHSCQ4ynAYNRx2zMKV92CQMWqj8J0BRE8EShxRFN6YrfCRhC0x3r/Zm4IbQCcmJoV0kMamllccR6FjHqUC5F2R/wS2dcymOlfAKOS4KmzQb5cpNC2MC7JhVn5wjXoJ44rYhLh8n0eXOCorJxa7POjbSlCGVczr34/RsAmrcvo9s+wGp3tzVhntxiXiJ4nvEYb4FJkf0O8HocAePmLvCxnL0AORraVekJk6TYjDabRVXfRE2lCN1h6ZQRN1+InUbsCpKwoBZHh0dODN9JBCUffItXxEavTQkUtnfTVAplCWL3JISz29h4NjotnuSsQKJCk8dF+kJR6RARjrqFVmfPnj3ZbK8cIJ0msd6jgHPGtfVTQ8VLmlvh4mct9sobRmPic0DyDQQnx/NlfYUgyz59+oScsH379pAwXABD32nTpoUHIToESeI5mnbE/UqDdyLcafEBf2MCqgC7NwxIbMREJQ0g4D4sfJwnD+AmRrII05cfMWJE+L1169bQr+fip06dGp4oJ83lmYd5wj/EmMa4TaHivo4EeCguYZBnkB5g2aWA69OIEnUHOaGysjIYMGBAMGnSpODYsWPZwCpFmm4lNq+4gSLQA7jcX8DwtjEyRC8wjabnXEx9kfWnTJkSJkAo90xpJVV+FmcVNeYAF5zWngS4C4O91MBxmAv8blLEpbjI5sz9MTdAhcgkCT1RO8mZkAjfiYpTEvStAS53Uw1vAiUGgZ3GpuQEYvoiBqlIan7kSDHnTwJQFNiPu0+5VxCVYhcZIjNrdXUDdp+Eq5AZ3Gkg8QAyVZRZIk4Tl4QAbF9cXJxNYZMAtAokgs4BrNxEpCtteXg7DDTMDKYNSuQdKsnJBek7HxewvxaosWxLYXtw+cJp18217wql4aKCfBNoEu0O5VU+PhctJ0YeXD4C6JQpyrlpSLTojpGGGN5YwNziChdIZLk4lvLcFJ9jMX3QdiImY9bmGQU+TRUL5CHITTRlgF8D9ouD1MfmLoEPl5xokIumZ2cfgMpHt47IW9N64Hsh7wQYYjyIugWuF5fCqYncXRd5vPMWyizzvhi/32+nvG0dZc9vR6fZOu0md5e+uC408FvKSIOZwXlGvxPv95izA2Vtvg1xKFWARI+vMX66HUhpQQb643uW1bSjuTWyw2SBvDrBvjFic1eGGlz5esq3ko9uSIlBRqPuFcCv8F4WIcN12nVaBd0SaYwI6PDDImR11JkqgHcPmQssjxIn6bUshygDFJUTxPMpHk+jfjPgupgdnYV2R/g7xSjtpah8RJBewhwf0gGK6XI92u4wXFEU40afJ4DN4h5LcAd+40HI3JgJecuT0c062W0i2hQJUTcxan3/CMW1PF2K6bbA+Daz4xRs1D3Br1Cm0OihKCqizW78/nXAF/G5TXrEcVzaNMH6CyMswqsAHqDyDLEyou8lwOXnKF8DjI6KjV3KzMBiXkDH8ij/H214J5A596ekrZ3F0zXlWeL7+P5eUrNo3/QwC15uxthuzidy7DzKRwEDaAViiDgKbTbz7CJnzo0bN7pIfIiid8SuPwn25o3QCmpnyjlZkyxPP8EomCJzrGb7GJMx7tNsq4MT2xMUYaiErZOluTzKsnz3gwCeCZyVRZJfYplNEokEjwrPtxlxjeYAk+F1F74VAzPxQRNYYdtpOUvWs8J1sGhBJMNsb7igN8plJs1eSmLIhLKE4rvaCX27gOhLpLOsIzJ7qn/i+wZzcvSOZ23/du8TZjwV8zHIXoP4R3ifBxiFz1dcVpa3aPntPE+c6TmIWE9EtcMmAcPdWAhYhAXxcLOQi9L1WhD1Sc8p1d2oL7XGiRKp8F4A2i8K/nfI+y/gsTDJ/YC/8+AD5Uh04KHiGl+cIFPnBDDrPMjwRGkLXyxO4VGbfQWnDH2v0bVWE3C9QOXlepbgjEfIJQI6XDG3z5ahD9cw2pS78ipB85wyScNTvsVzlzzhL8/jRrnmVjfFJK/m3m4nj9vbgQTguT8XZTjsm672R5uJKEaQmBI/c58gyus8ZDagLpEVSJBIyHp4jn++xqPV71OgQgJYEWOtZ/haxRtKmWOBu8xdBLftWltsY84zE6WIEy/eIOWL+BaayMx+KHtL7EAkqdNDLiEXmEMUHniedtJqg9HmZtfvt26vNi0BdG3Ft3g8ZOf7PAu59TxtzivLNIekyi+wD1i8CuUiD9FXAa8C+/xS3JPmZnomyc7H+fb4/Se0bk41Fel621r4cgVxbq91V4jVqwB7HTe2M7jgB+QWHavZkDRPmZcASoZEmBx6i75bGjPcMdL4/VKGFAGWZkGzPG0XAbdL9A81G5LOmUnC9hHKJeO7dcUMjblSl12867ElFTtaGl20xvvLGPdVz/8TVuU7y0x1PG7vtNg24oz9Uo/Z412++VFWI7Fcog9tu9Lm6gvRmIPv9x1xmQAu6RDkXtbOtlGEmpgD5Nvnyc0dcv0EE6cfdi1HmhMf9wDF3k3gtRvEedhxjpgfqPb9PU9iEJHnyOUA7bQUXh6kq/D7l2iTjWv7XOD530BDr8jIrus+srXjt4MzumJMHuTsBa63YKE1+RR5lBjEikCCnWKWiHdzOgKO+nRIBAF88za/IFmJ3eMZov4CYxGBabcpGL8EYx+SeMXJeRwHNsV/h+vdxeuhEpN3ZyNY78Gm2fknJxVGhyjixPiQvVkNzT1elD9Py/aTAL64Hb9vcYmC9zfdXdT/C1LeGbg4rnBaAihDFJH12W5ulfNCNe/xTsP3bp8ikzJs5BF+5PNfAQYAPaseTdsEcaYAAAAASUVORK5CYII="
      };
    },
    computed: {
      iconSnowWidth() {
        return (Math.floor(this.iconSize / 24) || 1) * 2;
      },
      contentdownText() {
        return this.contentText.contentdown || t$1("uni-load-more.contentdown");
      },
      contentrefreshText() {
        return this.contentText.contentrefresh || t$1("uni-load-more.contentrefresh");
      },
      contentnomoreText() {
        return this.contentText.contentnomore || t$1("uni-load-more.contentnomore");
      }
    },
    mounted() {
      var pages2 = getCurrentPages();
      var page2 = pages2[pages2.length - 1];
      var currentWebview = page2.$getAppWebview();
      currentWebview.addEventListener("hide", () => {
        this.webviewHide = true;
      });
      currentWebview.addEventListener("show", () => {
        this.webviewHide = false;
      });
    },
    methods: {
      onClick() {
        this.$emit("clickLoadMore", {
          detail: {
            status: this.status
          }
        });
      }
    }
  };
  function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: "uni-load-more",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      !$data.webviewHide && ($props.iconType === "circle" || $props.iconType === "auto" && $data.platform === "android") && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 0,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--android-MP"
      }, [
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4),
        vue.createElementVNode("view", {
          class: "uni-load-more__img-icon",
          style: vue.normalizeStyle({ borderTopColor: $props.color, borderTopWidth: $props.iconSize / 12 })
        }, null, 4)
      ], 4)) : !$data.webviewHide && $props.status === "loading" && $props.showIcon ? (vue.openBlock(), vue.createElementBlock("view", {
        key: 1,
        style: vue.normalizeStyle({ width: $props.iconSize + "px", height: $props.iconSize + "px" }),
        class: "uni-load-more__img uni-load-more__img--ios-H5"
      }, [
        vue.createElementVNode("image", {
          src: $data.imgBase64,
          mode: "widthFix"
        }, null, 8, ["src"])
      ], 4)) : vue.createCommentVNode("v-if", true),
      $props.showText ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "uni-load-more__text",
        style: vue.normalizeStyle({ color: $props.color })
      }, vue.toDisplayString($props.status === "more" ? $options.contentdownText : $props.status === "loading" ? $options.contentrefreshText : $options.contentnomoreText), 5)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_3$1 = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$a], ["__scopeId", "data-v-90d4256a"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-load-more/components/uni-load-more/uni-load-more.vue"]]);
  const _sfc_main$f = {
    setup(__props) {
      const userinfo = vue.ref(null);
      const clickContact = () => {
        uni.makePhoneCall({
          phoneNumber: "114"
        });
      };
      const getUserInfo = () => {
        apiUserInfo().then((res) => {
          formatAppLog("log", "at pages/user/user.vue:114", res);
          userinfo.value = res.data;
        });
      };
      getUserInfo();
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return userinfo.value ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "userLayout pageBg"
        }, [
          vue.createElementVNode("view", {
            style: vue.normalizeStyle({ height: vue.unref(getNavBarHeight)() + "px" })
          }, null, 4),
          vue.createElementVNode("view", { class: "userInfo" }, [
            vue.createElementVNode("view", { class: "avatar" }, [
              vue.createElementVNode("image", {
                src: "/static/images/xxmLogo.png",
                mode: "aspectFill"
              })
            ]),
            vue.createElementVNode("view", { class: "ip" }, vue.toDisplayString(userinfo.value.IP), 1),
            vue.createElementVNode("view", { class: "address" }, "\u6765\u81EA\u4E8E\uFF1A " + vue.toDisplayString(userinfo.value.address.city || userinfo.value.address.province || userinfo.value.address.country), 1)
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("navigator", {
                url: "/pages/classlist/classlist?name=\u6211\u7684\u4E0B\u8F7D&type=download",
                class: "row"
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "download-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "\u6211\u7684\u4E0B\u8F7D")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }, vue.toDisplayString(userinfo.value.downloadSize), 1),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ]),
              vue.createElementVNode("navigator", {
                url: "/pages/classlist/classlist?name=\u6211\u7684\u8BC4\u5206&type=score",
                class: "row"
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "star-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "\u6211\u7684\u8BC4\u5206")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }, vue.toDisplayString(userinfo.value.scoreSize), 1),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "row" }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "chatboxes-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "\u8054\u7CFB\u5BA2\u670D")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ]),
                vue.createElementVNode("button", { onClick: clickContact }, "\u62E8\u6253\u7535\u8BDD")
              ])
            ])
          ]),
          vue.createElementVNode("view", { class: "section" }, [
            vue.createElementVNode("view", { class: "list" }, [
              vue.createElementVNode("navigator", {
                url: "/pages/notice/detail?id=653507c6466d417a3718e94b",
                class: "row"
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "notification-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "\u8BA2\u9605\u66F4\u65B0")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ]),
              vue.createElementVNode("navigator", {
                url: "/pages/notice/detail?id=6536358ce0ec19c8d67fbe82",
                class: "row"
              }, [
                vue.createElementVNode("view", { class: "left" }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "flag-filled",
                    size: "20"
                  }),
                  vue.createElementVNode("view", { class: "text" }, "\u5E38\u89C1\u95EE\u9898")
                ]),
                vue.createElementVNode("view", { class: "right" }, [
                  vue.createElementVNode("view", { class: "text" }),
                  vue.createVNode(_component_uni_icons, {
                    type: "right",
                    size: "15",
                    color: "#aaa"
                  })
                ])
              ])
            ])
          ])
        ])) : (vue.openBlock(), vue.createElementBlock("view", {
          key: 1,
          class: "loadingLayout"
        }, [
          vue.createElementVNode("view", {
            style: vue.normalizeStyle({ height: vue.unref(getNavBarHeight)() + "px" })
          }, null, 4),
          vue.createVNode(_component_uni_load_more, { status: "loading" })
        ]));
      };
    }
  };
  var PagesUserUser = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["__scopeId", "data-v-80842834"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/user/user.vue"]]);
  const _sfc_main$e = {
    setup(__props) {
      const classList = vue.ref([]);
      const noData = vue.ref(false);
      const queryParams2 = {
        pageNum: 1,
        pageSize: 12
      };
      let pageName;
      onLoad((e) => {
        let { id = null, name = null, type = null } = e;
        if (type)
          queryParams2.type = type;
        if (id)
          queryParams2.classid = id;
        pageName = name;
        uni.setNavigationBarTitle({
          title: name
        });
        getClassList();
      });
      onReachBottom(() => {
        if (noData.value)
          return;
        queryParams2.pageNum++;
        getClassList();
      });
      const getClassList = async () => {
        let res;
        if (queryParams2.classid)
          res = await apiGetClassList(queryParams2);
        if (queryParams2.type)
          res = await apiGetHistoryList(queryParams2);
        classList.value = [...classList.value, ...res.data];
        if (queryParams2.pageSize > res.data.length)
          noData.value = true;
        uni.setStorageSync("storgClassList", classList.value);
        formatAppLog("log", "at pages/classlist/classlist.vue:71", classList.value);
      };
      onShareAppMessage((e) => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8-" + pageName,
          path: "/pages/classlist/classlist?id=" + queryParams2.classid + "&name=" + pageName
        };
      });
      onShareTimeline(() => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8-" + pageName,
          query: "id=" + queryParams2.classid + "&name=" + pageName
        };
      });
      onUnload(() => {
        uni.removeStorageSync("storgClassList");
      });
      return (_ctx, _cache) => {
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "classlist" }, [
          !classList.value.length && !noData.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "loadingLayout"
          }, [
            vue.createVNode(_component_uni_load_more, { status: "loading" })
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "content" }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(classList.value, (item) => {
              return vue.openBlock(), vue.createElementBlock("navigator", {
                url: "/pages/preview/preview?id=" + item._id,
                class: "item",
                key: item._id
              }, [
                vue.createElementVNode("image", {
                  src: item.smallPicurl,
                  mode: "aspectFill"
                }, null, 8, ["src"])
              ], 8, ["url"]);
            }), 128))
          ]),
          classList.value.length || noData.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "loadingLayout"
          }, [
            vue.createVNode(_component_uni_load_more, {
              status: noData.value ? "noMore" : "loading"
            }, null, 8, ["status"])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createElementVNode("view", { class: "safe-area-inset-bottom" })
        ]);
      };
    }
  };
  var PagesClasslistClasslist = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["__scopeId", "data-v-558777f4"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/classlist/classlist.vue"]]);
  const _sfc_main$d = {
    name: "UniRate",
    props: {
      isFill: {
        type: [Boolean, String],
        default: true
      },
      color: {
        type: String,
        default: "#ececec"
      },
      activeColor: {
        type: String,
        default: "#ffca3e"
      },
      disabledColor: {
        type: String,
        default: "#c0c0c0"
      },
      size: {
        type: [Number, String],
        default: 24
      },
      value: {
        type: [Number, String],
        default: 0
      },
      modelValue: {
        type: [Number, String],
        default: 0
      },
      max: {
        type: [Number, String],
        default: 5
      },
      margin: {
        type: [Number, String],
        default: 0
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      readonly: {
        type: [Boolean, String],
        default: false
      },
      allowHalf: {
        type: [Boolean, String],
        default: false
      },
      touchable: {
        type: [Boolean, String],
        default: true
      }
    },
    data() {
      return {
        valueSync: "",
        userMouseFristMove: true,
        userRated: false,
        userLastRate: 1
      };
    },
    watch: {
      value(newVal) {
        this.valueSync = Number(newVal);
      },
      modelValue(newVal) {
        this.valueSync = Number(newVal);
      }
    },
    computed: {
      stars() {
        const value = this.valueSync ? this.valueSync : 0;
        const starList = [];
        const floorValue = Math.floor(value);
        const ceilValue = Math.ceil(value);
        for (let i = 0; i < this.max; i++) {
          if (floorValue > i) {
            starList.push({
              activeWitch: "100%"
            });
          } else if (ceilValue - 1 === i) {
            starList.push({
              activeWitch: (value - floorValue) * 100 + "%"
            });
          } else {
            starList.push({
              activeWitch: "0"
            });
          }
        }
        return starList;
      },
      marginNumber() {
        return Number(this.margin);
      }
    },
    created() {
      this.valueSync = Number(this.value || this.modelValue);
      this._rateBoxLeft = 0;
      this._oldValue = null;
    },
    mounted() {
      setTimeout(() => {
        this._getSize();
      }, 100);
    },
    methods: {
      touchstart(e) {
        if (this.readonly || this.disabled)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      touchmove(e) {
        if (this.readonly || this.disabled || !this.touchable)
          return;
        const {
          clientX,
          screenX
        } = e.changedTouches[0];
        this._getRateCount(clientX || screenX);
      },
      mousedown(e) {
      },
      mousemove(e) {
      },
      mouseleave(e) {
      },
      _getRateCount(clientX) {
        this._getSize();
        const size = Number(this.size);
        if (isNaN(size)) {
          return new Error("size \u5C5E\u6027\u53EA\u80FD\u8BBE\u7F6E\u4E3A\u6570\u5B57");
        }
        const rateMoveRange = clientX - this._rateBoxLeft;
        let index2 = parseInt(rateMoveRange / (size + this.marginNumber));
        index2 = index2 < 0 ? 0 : index2;
        index2 = index2 > this.max ? this.max : index2;
        const range2 = parseInt(rateMoveRange - (size + this.marginNumber) * index2);
        let value = 0;
        if (this._oldValue === index2 && !this.PC)
          return;
        this._oldValue = index2;
        if (this.allowHalf) {
          if (range2 > size / 2) {
            value = index2 + 1;
          } else {
            value = index2 + 0.5;
          }
        } else {
          value = index2 + 1;
        }
        value = Math.max(0.5, Math.min(value, this.max));
        this.valueSync = value;
        this._onChange();
      },
      _onChange() {
        this.$emit("input", this.valueSync);
        this.$emit("update:modelValue", this.valueSync);
        this.$emit("change", {
          value: this.valueSync
        });
      },
      _getSize() {
        uni.createSelectorQuery().in(this).select(".uni-rate").boundingClientRect().exec((ret) => {
          if (ret) {
            this._rateBoxLeft = ret[0].left;
          }
        });
      }
    }
  };
  function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", null, [
      vue.createElementVNode("view", {
        ref: "uni-rate",
        class: "uni-rate"
      }, [
        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($options.stars, (star, index2) => {
          return vue.openBlock(), vue.createElementBlock("view", {
            class: vue.normalizeClass(["uni-rate__icon", { "uni-cursor-not-allowed": $props.disabled }]),
            style: vue.normalizeStyle({ "margin-right": $options.marginNumber + "px" }),
            key: index2,
            onTouchstart: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.touchstart && $options.touchstart(...args), ["stop"])),
            onTouchmove: _cache[1] || (_cache[1] = vue.withModifiers((...args) => $options.touchmove && $options.touchmove(...args), ["stop"])),
            onMousedown: _cache[2] || (_cache[2] = vue.withModifiers((...args) => $options.mousedown && $options.mousedown(...args), ["stop"])),
            onMousemove: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.mousemove && $options.mousemove(...args), ["stop"])),
            onMouseleave: _cache[4] || (_cache[4] = (...args) => $options.mouseleave && $options.mouseleave(...args))
          }, [
            vue.createVNode(_component_uni_icons, {
              color: $props.color,
              size: $props.size,
              type: $props.isFill ? "star-filled" : "star"
            }, null, 8, ["color", "size", "type"]),
            vue.createElementVNode("view", {
              style: vue.normalizeStyle({ width: star.activeWitch }),
              class: "uni-rate__icon-on"
            }, [
              vue.createVNode(_component_uni_icons, {
                color: $props.disabled ? $props.disabledColor : $props.activeColor,
                size: $props.size,
                type: "star-filled"
              }, null, 8, ["color", "size"])
            ], 4)
          ], 38);
        }), 128))
      ], 512)
    ]);
  }
  var __easycom_2$2 = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$9], ["__scopeId", "data-v-978a5ada"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-rate/components/uni-rate/uni-rate.vue"]]);
  class MPAnimation {
    constructor(options, _this) {
      this.options = options;
      this.animation = uni.createAnimation(__spreadValues({}, options));
      this.currentStepAnimates = {};
      this.next = 0;
      this.$ = _this;
    }
    _nvuePushAnimates(type, args) {
      let aniObj = this.currentStepAnimates[this.next];
      let styles = {};
      if (!aniObj) {
        styles = {
          styles: {},
          config: {}
        };
      } else {
        styles = aniObj;
      }
      if (animateTypes1.includes(type)) {
        if (!styles.styles.transform) {
          styles.styles.transform = "";
        }
        let unit = "";
        if (type === "rotate") {
          unit = "deg";
        }
        styles.styles.transform += `${type}(${args + unit}) `;
      } else {
        styles.styles[type] = `${args}`;
      }
      this.currentStepAnimates[this.next] = styles;
    }
    _animateRun(styles = {}, config2 = {}) {
      let ref = this.$.$refs["ani"].ref;
      if (!ref)
        return;
      return new Promise((resolve, reject) => {
        nvueAnimation.transition(ref, __spreadValues({
          styles
        }, config2), (res) => {
          resolve();
        });
      });
    }
    _nvueNextAnimate(animates, step = 0, fn) {
      let obj = animates[step];
      if (obj) {
        let {
          styles,
          config: config2
        } = obj;
        this._animateRun(styles, config2).then(() => {
          step += 1;
          this._nvueNextAnimate(animates, step, fn);
        });
      } else {
        this.currentStepAnimates = {};
        typeof fn === "function" && fn();
        this.isEnd = true;
      }
    }
    step(config2 = {}) {
      this.animation.step(config2);
      return this;
    }
    run(fn) {
      this.$.animationData = this.animation.export();
      this.$.timer = setTimeout(() => {
        typeof fn === "function" && fn();
      }, this.$.durationTime);
    }
  }
  const animateTypes1 = [
    "matrix",
    "matrix3d",
    "rotate",
    "rotate3d",
    "rotateX",
    "rotateY",
    "rotateZ",
    "scale",
    "scale3d",
    "scaleX",
    "scaleY",
    "scaleZ",
    "skew",
    "skewX",
    "skewY",
    "translate",
    "translate3d",
    "translateX",
    "translateY",
    "translateZ"
  ];
  const animateTypes2 = ["opacity", "backgroundColor"];
  const animateTypes3 = ["width", "height", "left", "right", "top", "bottom"];
  animateTypes1.concat(animateTypes2, animateTypes3).forEach((type) => {
    MPAnimation.prototype[type] = function(...args) {
      this.animation[type](...args);
      return this;
    };
  });
  function createAnimation(option, _this) {
    if (!_this)
      return;
    clearTimeout(_this.timer);
    return new MPAnimation(option, _this);
  }
  const _sfc_main$c = {
    name: "uniTransition",
    emits: ["click", "change"],
    props: {
      show: {
        type: Boolean,
        default: false
      },
      modeClass: {
        type: [Array, String],
        default() {
          return "fade";
        }
      },
      duration: {
        type: Number,
        default: 300
      },
      styles: {
        type: Object,
        default() {
          return {};
        }
      },
      customClass: {
        type: String,
        default: ""
      },
      onceRender: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        isShow: false,
        transform: "",
        opacity: 1,
        animationData: {},
        durationTime: 300,
        config: {}
      };
    },
    watch: {
      show: {
        handler(newVal) {
          if (newVal) {
            this.open();
          } else {
            if (this.isShow) {
              this.close();
            }
          }
        },
        immediate: true
      }
    },
    computed: {
      stylesObject() {
        let styles = __spreadProps(__spreadValues({}, this.styles), {
          "transition-duration": this.duration / 1e3 + "s"
        });
        let transform = "";
        for (let i in styles) {
          let line = this.toLine(i);
          transform += line + ":" + styles[i] + ";";
        }
        return transform;
      },
      transformStyles() {
        return "transform:" + this.transform + ";opacity:" + this.opacity + ";" + this.stylesObject;
      }
    },
    created() {
      this.config = {
        duration: this.duration,
        timingFunction: "ease",
        transformOrigin: "50% 50%",
        delay: 0
      };
      this.durationTime = this.duration;
    },
    methods: {
      init(obj = {}) {
        if (obj.duration) {
          this.durationTime = obj.duration;
        }
        this.animation = createAnimation(Object.assign(this.config, obj), this);
      },
      onClick() {
        this.$emit("click", {
          detail: this.isShow
        });
      },
      step(obj, config2 = {}) {
        if (!this.animation)
          return;
        for (let i in obj) {
          try {
            if (typeof obj[i] === "object") {
              this.animation[i](...obj[i]);
            } else {
              this.animation[i](obj[i]);
            }
          } catch (e) {
            formatAppLog("error", "at uni_modules/uni-transition/components/uni-transition/uni-transition.vue:148", `\u65B9\u6CD5 ${i} \u4E0D\u5B58\u5728`);
          }
        }
        this.animation.step(config2);
        return this;
      },
      run(fn) {
        if (!this.animation)
          return;
        this.animation.run(fn);
      },
      open() {
        clearTimeout(this.timer);
        this.transform = "";
        this.isShow = true;
        let { opacity, transform } = this.styleInit(false);
        if (typeof opacity !== "undefined") {
          this.opacity = opacity;
        }
        this.transform = transform;
        this.$nextTick(() => {
          this.timer = setTimeout(() => {
            this.animation = createAnimation(this.config, this);
            this.tranfromInit(false).step();
            this.animation.run();
            this.$emit("change", {
              detail: this.isShow
            });
          }, 20);
        });
      },
      close(type) {
        if (!this.animation)
          return;
        this.tranfromInit(true).step().run(() => {
          this.isShow = false;
          this.animationData = null;
          this.animation = null;
          let { opacity, transform } = this.styleInit(false);
          this.opacity = opacity || 1;
          this.transform = transform;
          this.$emit("change", {
            detail: this.isShow
          });
        });
      },
      styleInit(type) {
        let styles = {
          transform: ""
        };
        let buildStyle = (type2, mode) => {
          if (mode === "fade") {
            styles.opacity = this.animationType(type2)[mode];
          } else {
            styles.transform += this.animationType(type2)[mode] + " ";
          }
        };
        if (typeof this.modeClass === "string") {
          buildStyle(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildStyle(type, mode);
          });
        }
        return styles;
      },
      tranfromInit(type) {
        let buildTranfrom = (type2, mode) => {
          let aniNum = null;
          if (mode === "fade") {
            aniNum = type2 ? 0 : 1;
          } else {
            aniNum = type2 ? "-100%" : "0";
            if (mode === "zoom-in") {
              aniNum = type2 ? 0.8 : 1;
            }
            if (mode === "zoom-out") {
              aniNum = type2 ? 1.2 : 1;
            }
            if (mode === "slide-right") {
              aniNum = type2 ? "100%" : "0";
            }
            if (mode === "slide-bottom") {
              aniNum = type2 ? "100%" : "0";
            }
          }
          this.animation[this.animationMode()[mode]](aniNum);
        };
        if (typeof this.modeClass === "string") {
          buildTranfrom(type, this.modeClass);
        } else {
          this.modeClass.forEach((mode) => {
            buildTranfrom(type, mode);
          });
        }
        return this.animation;
      },
      animationType(type) {
        return {
          fade: type ? 1 : 0,
          "slide-top": `translateY(${type ? "0" : "-100%"})`,
          "slide-right": `translateX(${type ? "0" : "100%"})`,
          "slide-bottom": `translateY(${type ? "0" : "100%"})`,
          "slide-left": `translateX(${type ? "0" : "-100%"})`,
          "zoom-in": `scaleX(${type ? 1 : 0.8}) scaleY(${type ? 1 : 0.8})`,
          "zoom-out": `scaleX(${type ? 1 : 1.2}) scaleY(${type ? 1 : 1.2})`
        };
      },
      animationMode() {
        return {
          fade: "opacity",
          "slide-top": "translateY",
          "slide-right": "translateX",
          "slide-bottom": "translateY",
          "slide-left": "translateX",
          "zoom-in": "scale",
          "zoom-out": "scale"
        };
      },
      toLine(name) {
        return name.replace(/([A-Z])/g, "-$1").toLowerCase();
      }
    }
  };
  function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.withDirectives((vue.openBlock(), vue.createElementBlock("view", {
      ref: "ani",
      animation: $data.animationData,
      class: vue.normalizeClass($props.customClass),
      style: vue.normalizeStyle($options.transformStyles),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, [
      vue.renderSlot(_ctx.$slots, "default")
    ], 14, ["animation"])), [
      [vue.vShow, $data.isShow]
    ]);
  }
  var __easycom_0$3 = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$8], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-transition/components/uni-transition/uni-transition.vue"]]);
  const _sfc_main$b = {
    name: "uniPopup",
    components: {},
    emits: ["change", "maskClick"],
    props: {
      animation: {
        type: Boolean,
        default: true
      },
      type: {
        type: String,
        default: "center"
      },
      isMaskClick: {
        type: Boolean,
        default: null
      },
      maskClick: {
        type: Boolean,
        default: null
      },
      backgroundColor: {
        type: String,
        default: "none"
      },
      safeArea: {
        type: Boolean,
        default: true
      },
      maskBackgroundColor: {
        type: String,
        default: "rgba(0, 0, 0, 0.4)"
      }
    },
    watch: {
      type: {
        handler: function(type) {
          if (!this.config[type])
            return;
          this[this.config[type]](true);
        },
        immediate: true
      },
      isDesktop: {
        handler: function(newVal) {
          if (!this.config[newVal])
            return;
          this[this.config[this.type]](true);
        },
        immediate: true
      },
      maskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      isMaskClick: {
        handler: function(val) {
          this.mkclick = val;
        },
        immediate: true
      },
      showPopup(show) {
      }
    },
    data() {
      return {
        duration: 300,
        ani: [],
        showPopup: false,
        showTrans: false,
        popupWidth: 0,
        popupHeight: 0,
        config: {
          top: "top",
          bottom: "bottom",
          center: "center",
          left: "left",
          right: "right",
          message: "top",
          dialog: "center",
          share: "bottom"
        },
        maskClass: {
          position: "fixed",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        },
        transClass: {
          position: "fixed",
          left: 0,
          right: 0
        },
        maskShow: true,
        mkclick: true,
        popupstyle: "top"
      };
    },
    computed: {
      isDesktop() {
        return this.popupWidth >= 500 && this.popupHeight >= 500;
      },
      bg() {
        if (this.backgroundColor === "" || this.backgroundColor === "none") {
          return "transparent";
        }
        return this.backgroundColor;
      }
    },
    mounted() {
      const fixSize = () => {
        const {
          windowWidth: windowWidth2,
          windowHeight,
          windowTop,
          safeArea,
          screenHeight,
          safeAreaInsets
        } = uni.getSystemInfoSync();
        this.popupWidth = windowWidth2;
        this.popupHeight = windowHeight + (windowTop || 0);
        if (safeArea && this.safeArea) {
          this.safeAreaInsets = safeAreaInsets.bottom;
        } else {
          this.safeAreaInsets = 0;
        }
      };
      fixSize();
    },
    unmounted() {
      this.setH5Visible();
    },
    created() {
      if (this.isMaskClick === null && this.maskClick === null) {
        this.mkclick = true;
      } else {
        this.mkclick = this.isMaskClick !== null ? this.isMaskClick : this.maskClick;
      }
      if (this.animation) {
        this.duration = 300;
      } else {
        this.duration = 0;
      }
      this.messageChild = null;
      this.clearPropagation = false;
      this.maskClass.backgroundColor = this.maskBackgroundColor;
    },
    methods: {
      setH5Visible() {
      },
      closeMask() {
        this.maskShow = false;
      },
      disableMask() {
        this.mkclick = false;
      },
      clear(e) {
        e.stopPropagation();
        this.clearPropagation = true;
      },
      open(direction) {
        if (this.showPopup) {
          return;
        }
        let innerType = ["top", "center", "bottom", "left", "right", "message", "dialog", "share"];
        if (!(direction && innerType.indexOf(direction) !== -1)) {
          direction = this.type;
        }
        if (!this.config[direction]) {
          formatAppLog("error", "at uni_modules/uni-popup/components/uni-popup/uni-popup.vue:279", "\u7F3A\u5C11\u7C7B\u578B\uFF1A", direction);
          return;
        }
        this[this.config[direction]]();
        this.$emit("change", {
          show: true,
          type: direction
        });
      },
      close(type) {
        this.showTrans = false;
        this.$emit("change", {
          show: false,
          type: this.type
        });
        clearTimeout(this.timer);
        this.timer = setTimeout(() => {
          this.showPopup = false;
        }, 300);
      },
      touchstart() {
        this.clearPropagation = false;
      },
      onTap() {
        if (this.clearPropagation) {
          this.clearPropagation = false;
          return;
        }
        this.$emit("maskClick");
        if (!this.mkclick)
          return;
        this.close();
      },
      top(type) {
        this.popupstyle = this.isDesktop ? "fixforpc-top" : "top";
        this.ani = ["slide-top"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
        this.$nextTick(() => {
          if (this.messageChild && this.type === "message") {
            this.messageChild.timerClose();
          }
        });
      },
      bottom(type) {
        this.popupstyle = "bottom";
        this.ani = ["slide-bottom"];
        this.transClass = {
          position: "fixed",
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: this.bg
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      center(type) {
        this.popupstyle = "center";
        this.ani = ["zoom-out", "fade"];
        this.transClass = {
          position: "fixed",
          display: "flex",
          flexDirection: "column",
          bottom: 0,
          left: 0,
          right: 0,
          top: 0,
          justifyContent: "center",
          alignItems: "center"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      left(type) {
        this.popupstyle = "left";
        this.ani = ["slide-left"];
        this.transClass = {
          position: "fixed",
          left: 0,
          bottom: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      },
      right(type) {
        this.popupstyle = "right";
        this.ani = ["slide-right"];
        this.transClass = {
          position: "fixed",
          bottom: 0,
          right: 0,
          top: 0,
          backgroundColor: this.bg,
          display: "flex",
          flexDirection: "column"
        };
        if (type)
          return;
        this.showPopup = true;
        this.showTrans = true;
      }
    }
  };
  function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_transition = resolveEasycom(vue.resolveDynamicComponent("uni-transition"), __easycom_0$3);
    return $data.showPopup ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: vue.normalizeClass(["uni-popup", [$data.popupstyle, $options.isDesktop ? "fixforpc-z-index" : ""]])
    }, [
      vue.createElementVNode("view", {
        onTouchstart: _cache[1] || (_cache[1] = (...args) => $options.touchstart && $options.touchstart(...args))
      }, [
        $data.maskShow ? (vue.openBlock(), vue.createBlock(_component_uni_transition, {
          key: "1",
          name: "mask",
          "mode-class": "fade",
          styles: $data.maskClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, null, 8, ["styles", "duration", "show", "onClick"])) : vue.createCommentVNode("v-if", true),
        vue.createVNode(_component_uni_transition, {
          key: "2",
          "mode-class": $data.ani,
          name: "content",
          styles: $data.transClass,
          duration: $data.duration,
          show: $data.showTrans,
          onClick: $options.onTap
        }, {
          default: vue.withCtx(() => [
            vue.createElementVNode("view", {
              class: vue.normalizeClass(["uni-popup__wrapper", [$data.popupstyle]]),
              style: vue.normalizeStyle({ backgroundColor: $options.bg }),
              onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
            }, [
              vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
            ], 6)
          ]),
          _: 3
        }, 8, ["mode-class", "styles", "duration", "show", "onClick"])
      ], 32)
    ], 2)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_3 = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$7], ["__scopeId", "data-v-7c43d41b"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-popup/components/uni-popup/uni-popup.vue"]]);
  const _sfc_main$a = {
    setup(__props) {
      const maskState = vue.ref(true);
      const infoPopup = vue.ref(null);
      const scorePopup = vue.ref(null);
      const userScore = vue.ref(0);
      const classList = vue.ref([]);
      const currentId = vue.ref(null);
      const currentIndex = vue.ref(0);
      const currentInfo = vue.ref(null);
      const isScore = vue.ref(false);
      const readImgs = vue.ref([]);
      const storgClassList = uni.getStorageSync("storgClassList") || [];
      classList.value = storgClassList.map((item) => {
        return __spreadProps(__spreadValues({}, item), {
          picurl: item.smallPicurl.replace("_small.webp", ".jpg")
        });
      });
      onLoad(async (e) => {
        currentId.value = e.id;
        if (e.type == "share") {
          let res = await apiDetailWall({ id: currentId.value });
          classList.value = res.data.map((item) => {
            return __spreadProps(__spreadValues({}, item), {
              picurl: item.smallPicurl.replace("_small.webp", ".jpg")
            });
          });
        }
        currentIndex.value = classList.value.findIndex((item) => item._id == currentId.value);
        currentInfo.value = classList.value[currentIndex.value];
        readImgsFun();
      });
      const swiperChange = (e) => {
        currentIndex.value = e.detail.current;
        currentInfo.value = classList.value[currentIndex.value];
        readImgsFun();
        formatAppLog("log", "at pages/preview/preview.vue:188", e);
      };
      formatAppLog("log", "at pages/preview/preview.vue:193", classList.value);
      const clickInfo = () => {
        infoPopup.value.open();
      };
      const clickInfoClose = () => {
        infoPopup.value.close();
      };
      const clickScore = () => {
        if (currentInfo.value.userScore) {
          isScore.value = true;
          userScore.value = currentInfo.value.userScore;
        }
        scorePopup.value.open();
      };
      const clickScoreClose = () => {
        scorePopup.value.close();
        userScore.value = 0;
        isScore.value = false;
      };
      const submitScore = async () => {
        uni.showLoading({
          title: "\u52A0\u8F7D\u4E2D..."
        });
        let {
          classid,
          _id: wallId
        } = currentInfo.value;
        let res = await apiGetSetupScore({
          classid,
          wallId,
          userScore: userScore.value
        });
        uni.hideLoading();
        if (res.errCode === 0) {
          uni.showToast({
            title: "\u8BC4\u5206\u6210\u529F",
            icon: "none"
          });
          classList.value[currentIndex.value].userScore = userScore.value;
          uni.setStorageSync("storgClassList", classList.value);
          clickScoreClose();
        }
      };
      const maskChange = () => {
        maskState.value = !maskState.value;
      };
      const goBack = () => {
        uni.navigateBack({
          success: () => {
          },
          fail: (err) => {
            uni.reLaunch({
              url: "/pages/index/index"
            });
          }
        });
      };
      const clickDownload = async () => {
        try {
          uni.showLoading({
            title: "\u4E0B\u8F7D\u4E2D...",
            mask: true
          });
          let {
            classid,
            _id: wallId
          } = currentInfo.value;
          let res = await apiWriteDownload({
            classid,
            wallId
          });
          if (res.errCode != 0)
            throw res;
          uni.getImageInfo({
            src: currentInfo.value.picurl,
            success: (res2) => {
              uni.saveImageToPhotosAlbum({
                filePath: res2.path,
                success: (res3) => {
                  uni.showToast({
                    title: "\u4FDD\u5B58\u6210\u529F\uFF0C\u8BF7\u5230\u76F8\u518C\u67E5\u770B",
                    icon: "none"
                  });
                },
                fail: (err) => {
                  if (err.errMsg == "saveImageToPhotosAlbum:fail cancel") {
                    uni.showToast({
                      title: "\u4FDD\u5B58\u5931\u8D25\uFF0C\u8BF7\u91CD\u65B0\u70B9\u51FB\u4E0B\u8F7D",
                      icon: "none"
                    });
                    return;
                  }
                  uni.showModal({
                    title: "\u6388\u6743\u63D0\u793A",
                    content: "\u9700\u8981\u6388\u6743\u4FDD\u5B58\u76F8\u518C",
                    success: (res3) => {
                      if (res3.confirm) {
                        uni.openSetting({
                          success: (setting) => {
                            formatAppLog("log", "at pages/preview/preview.vue:320", setting);
                            if (setting.authSetting["scope.writePhotosAlbum"]) {
                              uni.showToast({
                                title: "\u83B7\u53D6\u6388\u6743\u6210\u529F",
                                icon: "none"
                              });
                            } else {
                              uni.showToast({
                                title: "\u83B7\u53D6\u6743\u9650\u5931\u8D25",
                                icon: "none"
                              });
                            }
                          }
                        });
                      }
                    }
                  });
                },
                complete: () => {
                  uni.hideLoading();
                }
              });
            }
          });
        } catch (err) {
          formatAppLog("log", "at pages/preview/preview.vue:351", err);
          uni.hideLoading();
        }
      };
      onShareAppMessage((e) => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8",
          path: "/pages/preview/preview?id=" + currentId.value + "&type=share"
        };
      });
      onShareTimeline(() => {
        return {
          title: "\u6613\u89C8\u58C1\u7EB8",
          query: "id=" + currentId.value + "&type=share"
        };
      });
      function readImgsFun() {
        readImgs.value.push(currentIndex.value <= 0 ? classList.value.length - 1 : currentIndex.value - 1, currentIndex.value, currentIndex.value >= classList.value.length - 1 ? 0 : currentIndex.value + 1);
        readImgs.value = [...new Set(readImgs.value)];
      }
      return (_ctx, _cache) => {
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        const _component_uni_dateformat = resolveEasycom(vue.resolveDynamicComponent("uni-dateformat"), __easycom_1$1);
        const _component_uni_rate = resolveEasycom(vue.resolveDynamicComponent("uni-rate"), __easycom_2$2);
        const _component_uni_popup = resolveEasycom(vue.resolveDynamicComponent("uni-popup"), __easycom_3);
        return currentInfo.value ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 0,
          class: "preview"
        }, [
          vue.createElementVNode("swiper", {
            circular: "",
            current: currentIndex.value,
            onChange: swiperChange
          }, [
            (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(classList.value, (item, index2) => {
              return vue.openBlock(), vue.createElementBlock("swiper-item", {
                key: item._id
              }, [
                readImgs.value.includes(index2) ? (vue.openBlock(), vue.createElementBlock("image", {
                  key: 0,
                  onClick: maskChange,
                  src: item.picurl,
                  mode: "aspectFill"
                }, null, 8, ["src"])) : vue.createCommentVNode("v-if", true)
              ]);
            }), 128))
          ], 40, ["current"]),
          maskState.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 0,
            class: "mask"
          }, [
            vue.createElementVNode("view", {
              class: "goBack",
              onClick: goBack,
              style: vue.normalizeStyle({ top: vue.unref(getStatusBarHeight)() + "px" })
            }, [
              vue.createVNode(_component_uni_icons, {
                type: "back",
                color: "#fff",
                size: "20"
              })
            ], 4),
            vue.createElementVNode("view", { class: "count" }, vue.toDisplayString(currentIndex.value + 1) + " / " + vue.toDisplayString(classList.value.length), 1),
            vue.createElementVNode("view", { class: "time" }, [
              vue.createVNode(_component_uni_dateformat, {
                date: new Date(),
                format: "hh:mm"
              }, null, 8, ["date"])
            ]),
            vue.createElementVNode("view", { class: "date" }, [
              vue.createVNode(_component_uni_dateformat, {
                date: new Date(),
                format: "MM\u6708dd\u65E5"
              }, null, 8, ["date"])
            ]),
            vue.createElementVNode("view", { class: "footer" }, [
              vue.createElementVNode("view", {
                class: "box",
                onClick: clickInfo
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "info",
                  size: "28"
                }),
                vue.createElementVNode("view", { class: "text" }, "\u4FE1\u606F")
              ]),
              vue.createElementVNode("view", {
                class: "box",
                onClick: clickScore
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "star",
                  size: "28"
                }),
                vue.createElementVNode("view", { class: "text" }, vue.toDisplayString(currentInfo.value.score) + "\u5206", 1)
              ]),
              vue.createElementVNode("view", {
                class: "box",
                onClick: clickDownload
              }, [
                vue.createVNode(_component_uni_icons, {
                  type: "download",
                  size: "23"
                }),
                vue.createElementVNode("view", { class: "text" }, "\u4E0B\u8F7D")
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          vue.createVNode(_component_uni_popup, {
            ref_key: "infoPopup",
            ref: infoPopup,
            type: "bottom"
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "infoPopup" }, [
                vue.createElementVNode("view", { class: "popHeader" }, [
                  vue.createElementVNode("view"),
                  vue.createElementVNode("view", { class: "title" }, "\u58C1\u7EB8\u4FE1\u606F"),
                  vue.createElementVNode("view", {
                    class: "close",
                    onClick: clickInfoClose
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "closeempty",
                      size: "18",
                      color: "#999"
                    })
                  ])
                ]),
                vue.createElementVNode("scroll-view", { "scroll-y": "" }, [
                  vue.createElementVNode("view", { class: "content" }, [
                    vue.createElementVNode("view", { class: "row" }, [
                      vue.createElementVNode("view", { class: "label" }, "\u58C1\u7EB8ID\uFF1A"),
                      vue.createElementVNode("text", {
                        selectable: "",
                        class: "value"
                      }, vue.toDisplayString(currentInfo.value._id), 1)
                    ]),
                    vue.createCommentVNode(' \n						<view class="row">\n							<view class="label">\u5206\u7C7B\uFF1A</view>\n							<text class="value class">\u660E\u661F\u7F8E\u5973</text>\n						</view>\n						 '),
                    vue.createElementVNode("view", { class: "row" }, [
                      vue.createElementVNode("view", { class: "label" }, "\u53D1\u5E03\u8005\uFF1A"),
                      vue.createElementVNode("text", { class: "value" }, vue.toDisplayString(currentInfo.value.nickname), 1)
                    ]),
                    vue.createElementVNode("view", { class: "row" }, [
                      vue.createElementVNode("text", { class: "label" }, "\u8BC4\u5206\uFF1A"),
                      vue.createElementVNode("view", { class: "value roteBox" }, [
                        vue.createVNode(_component_uni_rate, {
                          readonly: "",
                          touchable: "",
                          value: currentInfo.value.score,
                          size: "16"
                        }, null, 8, ["value"]),
                        vue.createElementVNode("text", { class: "score" }, vue.toDisplayString(currentInfo.value.score) + "\u5206", 1)
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "row" }, [
                      vue.createElementVNode("text", { class: "label" }, "\u6458\u8981\uFF1A"),
                      vue.createElementVNode("view", { class: "value" }, vue.toDisplayString(currentInfo.value.description), 1)
                    ]),
                    vue.createElementVNode("view", { class: "row" }, [
                      vue.createElementVNode("text", { class: "label" }, "\u6807\u7B7E\uFF1A"),
                      vue.createElementVNode("view", { class: "value tabs" }, [
                        (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(currentInfo.value.tabs, (tab) => {
                          return vue.openBlock(), vue.createElementBlock("view", {
                            class: "tab",
                            key: tab
                          }, vue.toDisplayString(tab), 1);
                        }), 128))
                      ])
                    ]),
                    vue.createElementVNode("view", { class: "copyright" }, " \u58F0\u660E\uFF1A\u672C\u56FE\u7247\u6765\u7528\u6237\u6295\u7A3F\uFF0C\u975E\u5546\u4E1A\u4F7F\u7528\uFF0C\u7528\u4E8E\u514D\u8D39\u5B66\u4E60\u4EA4\u6D41\uFF0C\u5982\u4FB5\u72AF\u4E86\u60A8\u7684\u6743\u76CA\uFF0C\u60A8\u53EF\u4EE5\u62F7\u8D1D\u58C1\u7EB8ID\u4E3E\u62A5\u81F3\u5E73\u53F0\uFF0C\u90AE\u7BB1513894357@qq.com\uFF0C\u7BA1\u7406\u5C06\u5220\u9664\u4FB5\u6743\u58C1\u7EB8\uFF0C\u7EF4\u62A4\u60A8\u7684\u6743\u76CA\u3002 "),
                    vue.createElementVNode("view", { class: "safe-area-inset-bottom" })
                  ])
                ])
              ])
            ]),
            _: 1
          }, 512),
          vue.createVNode(_component_uni_popup, {
            ref_key: "scorePopup",
            ref: scorePopup,
            "is-mask-click": false
          }, {
            default: vue.withCtx(() => [
              vue.createElementVNode("view", { class: "scorePopup" }, [
                vue.createElementVNode("view", { class: "popHeader" }, [
                  vue.createElementVNode("view"),
                  vue.createElementVNode("view", { class: "title" }, vue.toDisplayString(isScore.value ? "\u8BC4\u5206\u8FC7\u4E86~" : "\u58C1\u7EB8\u8BC4\u5206"), 1),
                  vue.createElementVNode("view", {
                    class: "close",
                    onClick: clickScoreClose
                  }, [
                    vue.createVNode(_component_uni_icons, {
                      type: "closeempty",
                      size: "18",
                      color: "#999"
                    })
                  ])
                ]),
                vue.createElementVNode("view", { class: "content" }, [
                  vue.createVNode(_component_uni_rate, {
                    modelValue: userScore.value,
                    "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => userScore.value = $event),
                    allowHalf: "",
                    disabled: isScore.value,
                    "disabled-color": "#FFCA3E"
                  }, null, 8, ["modelValue", "disabled"]),
                  vue.createElementVNode("text", { class: "text" }, vue.toDisplayString(userScore.value) + "\u5206", 1)
                ]),
                vue.createElementVNode("view", { class: "footer" }, [
                  vue.createElementVNode("button", {
                    onClick: submitScore,
                    disabled: !userScore.value || isScore.value,
                    type: "default",
                    size: "mini",
                    plain: ""
                  }, "\u786E\u8BA4\u8BC4\u5206", 8, ["disabled"])
                ])
              ])
            ]),
            _: 1
          }, 512)
        ])) : vue.createCommentVNode("v-if", true);
      };
    }
  };
  var PagesPreviewPreview = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["__scopeId", "data-v-02adbc98"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/preview/preview.vue"]]);
  const _sfc_main$9 = {};
  function _sfc_render$6(_ctx, _cache) {
    return vue.openBlock(), vue.createElementBlock("view", { class: "" });
  }
  var PagesNoticeNotice = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$6], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/notice/notice.vue"]]);
  const _sfc_main$8 = {
    name: "UniTag",
    emits: ["click"],
    props: {
      type: {
        type: String,
        default: "default"
      },
      size: {
        type: String,
        default: "normal"
      },
      text: {
        type: String,
        default: ""
      },
      disabled: {
        type: [Boolean, String],
        default: false
      },
      inverted: {
        type: [Boolean, String],
        default: false
      },
      circle: {
        type: [Boolean, String],
        default: false
      },
      mark: {
        type: [Boolean, String],
        default: false
      },
      customStyle: {
        type: String,
        default: ""
      }
    },
    computed: {
      classes() {
        const {
          type,
          disabled,
          inverted,
          circle,
          mark,
          size,
          isTrue
        } = this;
        const classArr = [
          "uni-tag--" + type,
          "uni-tag--" + size,
          isTrue(disabled) ? "uni-tag--disabled" : "",
          isTrue(inverted) ? "uni-tag--" + type + "--inverted" : "",
          isTrue(circle) ? "uni-tag--circle" : "",
          isTrue(mark) ? "uni-tag--mark" : "",
          isTrue(inverted) ? "uni-tag--inverted uni-tag-text--" + type : "",
          size === "small" ? "uni-tag-text--small" : ""
        ];
        return classArr.join(" ");
      }
    },
    methods: {
      isTrue(value) {
        return value === true || value === "true";
      },
      onClick() {
        if (this.isTrue(this.disabled))
          return;
        this.$emit("click");
      }
    }
  };
  function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
    return $props.text ? (vue.openBlock(), vue.createElementBlock("text", {
      key: 0,
      class: vue.normalizeClass(["uni-tag", $options.classes]),
      style: vue.normalizeStyle($props.customStyle),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.onClick && $options.onClick(...args))
    }, vue.toDisplayString($props.text), 7)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_0$2 = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$5], ["__scopeId", "data-v-1516016e"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-tag/components/uni-tag/uni-tag.vue"]]);
  var block0 = (Comp) => {
    (Comp.$wxs || (Comp.$wxs = [])).push("handler");
    (Comp.$wxsModules || (Comp.$wxsModules = {}))["handler"] = "2f992f8c";
  };
  const _sfc_main$7 = {
    name: "node",
    options: {},
    data() {
      return {
        ctrl: {}
      };
    },
    props: {
      name: String,
      attrs: {
        type: Object,
        default() {
          return {};
        }
      },
      childs: Array,
      opts: Array
    },
    components: {},
    mounted() {
      this.$nextTick(() => {
        for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
          ;
      });
      if (this.opts[0]) {
        let i;
        for (i = this.childs.length; i--; ) {
          if (this.childs[i].name === "img")
            break;
        }
        if (i !== -1) {
          this.observer = uni.createIntersectionObserver(this).relativeToViewport({
            top: 500,
            bottom: 500
          });
          this.observer.observe("._img", (res) => {
            if (res.intersectionRatio) {
              this.$set(this.ctrl, "load", 1);
              this.observer.disconnect();
            }
          });
        }
      }
    },
    beforeDestroy() {
      if (this.observer) {
        this.observer.disconnect();
      }
    },
    methods: {
      play(e) {
        this.root.$emit("play");
      },
      imgTap(e) {
        const node2 = this.childs[e.currentTarget.dataset.i];
        if (node2.a) {
          this.linkTap(node2.a);
          return;
        }
        if (node2.attrs.ignore)
          return;
        node2.attrs.src = node2.attrs.src || node2.attrs["data-src"];
        this.root.$emit("imgtap", node2.attrs);
        if (this.root.previewImg) {
          uni.previewImage({
            current: parseInt(node2.attrs.i),
            urls: this.root.imgList
          });
        }
      },
      imgLongTap(e) {
        const attrs = this.childs[e.currentTarget.dataset.i].attrs;
        if (this.opts[3] && !attrs.ignore) {
          uni.showActionSheet({
            itemList: ["\u4FDD\u5B58\u56FE\u7247"],
            success: () => {
              const save = (path) => {
                uni.saveImageToPhotosAlbum({
                  filePath: path,
                  success() {
                    uni.showToast({
                      title: "\u4FDD\u5B58\u6210\u529F"
                    });
                  }
                });
              };
              if (this.root.imgList[attrs.i].startsWith("http")) {
                uni.downloadFile({
                  url: this.root.imgList[attrs.i],
                  success: (res) => save(res.tempFilePath)
                });
              } else {
                save(this.root.imgList[attrs.i]);
              }
            }
          });
        }
      },
      imgLoad(e) {
        const i = e.currentTarget.dataset.i;
        if (!this.childs[i].w) {
          this.$set(this.ctrl, i, e.detail.width);
        } else if (this.opts[1] && !this.ctrl[i] || this.ctrl[i] === -1) {
          this.$set(this.ctrl, i, 1);
        }
        this.checkReady();
      },
      checkReady() {
        if (this.root && !this.root.lazyLoad) {
          this.root._unloadimgs -= 1;
          if (!this.root._unloadimgs) {
            setTimeout(() => {
              this.root.getRect().then((rect) => {
                this.root.$emit("ready", rect);
              }).catch(() => {
                this.root.$emit("ready", {});
              });
            }, 350);
          }
        }
      },
      linkTap(e) {
        const node2 = e.currentTarget ? this.childs[e.currentTarget.dataset.i] : {};
        const attrs = node2.attrs || e;
        const href = attrs.href;
        this.root.$emit("linktap", Object.assign({
          innerText: this.root.getText(node2.children || [])
        }, attrs));
        if (href) {
          if (href[0] === "#") {
            this.root.navigateTo(href.substring(1)).catch(() => {
            });
          } else if (href.split("?")[0].includes("://")) {
            if (this.root.copyLink) {
              plus.runtime.openWeb(href);
            }
          } else {
            uni.navigateTo({
              url: href,
              fail() {
                uni.switchTab({
                  url: href,
                  fail() {
                  }
                });
              }
            });
          }
        }
      },
      mediaError(e) {
        const i = e.currentTarget.dataset.i;
        const node2 = this.childs[i];
        if (node2.name === "video" || node2.name === "audio") {
          let index2 = (this.ctrl[i] || 0) + 1;
          if (index2 > node2.src.length) {
            index2 = 0;
          }
          if (index2 < node2.src.length) {
            this.$set(this.ctrl, i, index2);
            return;
          }
        } else if (node2.name === "img") {
          if (this.opts[2]) {
            this.$set(this.ctrl, i, -1);
          }
          this.checkReady();
        }
        if (this.root) {
          this.root.$emit("error", {
            source: node2.name,
            attrs: node2.attrs,
            errMsg: e.detail.errMsg
          });
        }
      }
    }
  };
  function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node", true);
    return vue.openBlock(), vue.createElementBlock("view", {
      id: $props.attrs.id,
      class: vue.normalizeClass("_block _" + $props.name + " " + $props.attrs.class),
      style: vue.normalizeStyle($props.attrs.style)
    }, [
      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList($props.childs, (n, i) => {
        return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: i }, [
          vue.createCommentVNode(" \u56FE\u7247 "),
          vue.createCommentVNode(" \u5360\u4F4D\u56FE "),
          n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 0,
            class: "_img",
            style: vue.normalizeStyle(n.attrs.style),
            src: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1],
            mode: "widthFix"
          }, null, 12, ["src"])) : vue.createCommentVNode("v-if", true),
          vue.createCommentVNode(" \u663E\u793A\u56FE\u7247 "),
          vue.createCommentVNode(" \u8868\u683C\u4E2D\u7684\u56FE\u7247\uFF0C\u4F7F\u7528 rich-text \u9632\u6B62\u5927\u5C0F\u4E0D\u6B63\u786E "),
          n.name === "img" && n.t ? (vue.openBlock(), vue.createElementBlock("rich-text", {
            key: 1,
            style: vue.normalizeStyle("display:" + n.t),
            nodes: [{ attrs: { style: n.attrs.style || "", src: n.attrs.src }, name: "img" }],
            "data-i": i,
            onClick: _cache[0] || (_cache[0] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"]))
          }, null, 12, ["nodes", "data-i"])) : n.name === "img" ? (vue.openBlock(), vue.createElementBlock("image", {
            key: 2,
            id: n.attrs.id,
            class: vue.normalizeClass("_img " + n.attrs.class),
            style: vue.normalizeStyle(($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;" + n.attrs.style),
            src: n.attrs.src || ($data.ctrl.load ? n.attrs["data-src"] : ""),
            mode: !n.h ? "widthFix" : !n.w ? "heightFix" : n.m || "",
            "data-i": i,
            onLoad: _cache[1] || (_cache[1] = (...args) => $options.imgLoad && $options.imgLoad(...args)),
            onError: _cache[2] || (_cache[2] = (...args) => $options.mediaError && $options.mediaError(...args)),
            onClick: _cache[3] || (_cache[3] = vue.withModifiers((...args) => $options.imgTap && $options.imgTap(...args), ["stop"])),
            onLongpress: _cache[4] || (_cache[4] = (...args) => $options.imgLongTap && $options.imgLongTap(...args))
          }, null, 46, ["id", "src", "mode", "data-i"])) : n.text ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 3 }, [
            vue.createCommentVNode(" \u6587\u672C "),
            vue.createElementVNode("text", { decode: "" }, vue.toDisplayString(n.text), 1)
          ], 2112)) : n.name === "br" ? (vue.openBlock(), vue.createElementBlock("text", { key: 4 }, "\\n")) : n.name === "a" ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 5 }, [
            vue.createCommentVNode(" \u94FE\u63A5 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass((n.attrs.href ? "_a " : "") + n.attrs.class),
              "hover-class": "_hover",
              style: vue.normalizeStyle("display:inline;" + n.attrs.style),
              "data-i": i,
              onClick: _cache[5] || (_cache[5] = vue.withModifiers((...args) => $options.linkTap && $options.linkTap(...args), ["stop"]))
            }, [
              vue.createVNode(_component_node, {
                name: "span",
                childs: n.children,
                opts: $props.opts,
                style: { "display": "inherit" }
              }, null, 8, ["childs", "opts"])
            ], 14, ["id", "data-i"])
          ], 2112)) : n.html ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 6 }, [
            vue.createCommentVNode(" \u89C6\u9891 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass("_video " + n.attrs.class),
              style: vue.normalizeStyle(n.attrs.style),
              innerHTML: n.html,
              onVplay: _cache[6] || (_cache[6] = vue.withModifiers((...args) => $options.play && $options.play(...args), ["stop"]))
            }, null, 46, ["id", "innerHTML"])
          ], 2112)) : n.name === "iframe" ? (vue.openBlock(), vue.createElementBlock("iframe", {
            key: 7,
            style: vue.normalizeStyle(n.attrs.style),
            allowfullscreen: n.attrs.allowfullscreen,
            frameborder: n.attrs.frameborder,
            src: n.attrs.src
          }, null, 12, ["allowfullscreen", "frameborder", "src"])) : n.name === "embed" ? (vue.openBlock(), vue.createElementBlock("embed", {
            key: 8,
            style: vue.normalizeStyle(n.attrs.style),
            src: n.attrs.src
          }, null, 12, ["src"])) : n.name === "table" && n.c || n.name === "li" ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 9,
            id: n.attrs.id,
            class: vue.normalizeClass("_" + n.name + " " + n.attrs.class),
            style: vue.normalizeStyle(n.attrs.style)
          }, [
            n.name === "li" ? (vue.openBlock(), vue.createBlock(_component_node, {
              key: 0,
              childs: n.children,
              opts: $props.opts
            }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(n.children, (tbody, x) => {
              return vue.openBlock(), vue.createElementBlock("view", {
                key: x,
                class: vue.normalizeClass("_" + tbody.name + " " + tbody.attrs.class),
                style: vue.normalizeStyle(tbody.attrs.style)
              }, [
                tbody.name === "td" || tbody.name === "th" ? (vue.openBlock(), vue.createBlock(_component_node, {
                  key: 0,
                  childs: tbody.children,
                  opts: $props.opts
                }, null, 8, ["childs", "opts"])) : (vue.openBlock(true), vue.createElementBlock(vue.Fragment, { key: 1 }, vue.renderList(tbody.children, (tr, y) => {
                  return vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: y }, [
                    tr.name === "td" || tr.name === "th" ? (vue.openBlock(), vue.createElementBlock("view", {
                      key: 0,
                      class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                      style: vue.normalizeStyle(tr.attrs.style)
                    }, [
                      vue.createVNode(_component_node, {
                        childs: tr.children,
                        opts: $props.opts
                      }, null, 8, ["childs", "opts"])
                    ], 6)) : (vue.openBlock(), vue.createElementBlock("view", {
                      key: 1,
                      class: vue.normalizeClass("_" + tr.name + " " + tr.attrs.class),
                      style: vue.normalizeStyle(tr.attrs.style)
                    }, [
                      (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(tr.children, (td, z) => {
                        return vue.openBlock(), vue.createElementBlock("view", {
                          key: z,
                          class: vue.normalizeClass("_" + td.name + " " + td.attrs.class),
                          style: vue.normalizeStyle(td.attrs.style)
                        }, [
                          vue.createVNode(_component_node, {
                            childs: td.children,
                            opts: $props.opts
                          }, null, 8, ["childs", "opts"])
                        ], 6);
                      }), 128))
                    ], 6))
                  ], 64);
                }), 128))
              ], 6);
            }), 128))
          ], 14, ["id"])) : !n.c ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 10 }, [
            vue.createCommentVNode(" \u5BCC\u6587\u672C "),
            vue.createElementVNode("rich-text", {
              id: n.attrs.id,
              style: vue.normalizeStyle("display:inline;" + n.f),
              preview: false,
              selectable: $props.opts[4],
              "user-select": $props.opts[4],
              nodes: [n]
            }, null, 12, ["id", "selectable", "user-select", "nodes"])
          ], 2112)) : n.c === 2 ? (vue.openBlock(), vue.createElementBlock(vue.Fragment, { key: 11 }, [
            vue.createCommentVNode(" \u7EE7\u7EED\u9012\u5F52 "),
            vue.createElementVNode("view", {
              id: n.attrs.id,
              class: vue.normalizeClass("_block _" + n.name + " " + n.attrs.class),
              style: vue.normalizeStyle(n.f + ";" + n.attrs.style)
            }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(n.children, (n2, j) => {
                return vue.openBlock(), vue.createBlock(_component_node, {
                  key: j,
                  style: vue.normalizeStyle(n2.f),
                  name: n2.name,
                  attrs: n2.attrs,
                  childs: n2.children,
                  opts: $props.opts
                }, null, 8, ["style", "name", "attrs", "childs", "opts"]);
              }), 128))
            ], 14, ["id"])
          ], 2112)) : (vue.openBlock(), vue.createBlock(_component_node, {
            key: 12,
            style: vue.normalizeStyle(n.f),
            name: n.name,
            attrs: n.attrs,
            childs: n.children,
            opts: $props.opts
          }, null, 8, ["style", "name", "attrs", "childs", "opts"]))
        ], 64);
      }), 128))
    ], 14, ["id"]);
  }
  if (typeof block0 === "function")
    block0(_sfc_main$7);
  var node = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$4], ["__scopeId", "data-v-35a45afb"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
  const config = {
    trustTags: makeMap("a,abbr,ad,audio,b,blockquote,br,code,col,colgroup,dd,del,dl,dt,div,em,fieldset,h1,h2,h3,h4,h5,h6,hr,i,img,ins,label,legend,li,ol,p,q,ruby,rt,source,span,strong,sub,sup,table,tbody,td,tfoot,th,thead,tr,title,ul,video"),
    blockTags: makeMap("address,article,aside,body,caption,center,cite,footer,header,html,nav,pre,section"),
    inlineTags: makeMap("abbr,b,big,code,del,em,i,ins,label,q,small,span,strong,sub,sup"),
    ignoreTags: makeMap("area,base,canvas,embed,frame,head,iframe,input,link,map,meta,param,rp,script,source,style,textarea,title,track,wbr"),
    voidTags: makeMap("area,base,br,col,circle,ellipse,embed,frame,hr,img,input,line,link,meta,param,path,polygon,rect,source,track,use,wbr"),
    entities: {
      lt: "<",
      gt: ">",
      quot: '"',
      apos: "'",
      ensp: "\u2002",
      emsp: "\u2003",
      nbsp: "\xA0",
      semi: ";",
      ndash: "\u2013",
      mdash: "\u2014",
      middot: "\xB7",
      lsquo: "\u2018",
      rsquo: "\u2019",
      ldquo: "\u201C",
      rdquo: "\u201D",
      bull: "\u2022",
      hellip: "\u2026",
      larr: "\u2190",
      uarr: "\u2191",
      rarr: "\u2192",
      darr: "\u2193"
    },
    tagStyle: {
      address: "font-style:italic",
      big: "display:inline;font-size:1.2em",
      caption: "display:table-caption;text-align:center",
      center: "text-align:center",
      cite: "font-style:italic",
      dd: "margin-left:40px",
      mark: "background-color:yellow",
      pre: "font-family:monospace;white-space:pre",
      s: "text-decoration:line-through",
      small: "display:inline;font-size:0.8em",
      strike: "text-decoration:line-through",
      u: "text-decoration:underline"
    },
    svgDict: {
      animatetransform: "animateTransform",
      lineargradient: "linearGradient",
      viewbox: "viewBox",
      attributename: "attributeName",
      repeatcount: "repeatCount",
      repeatdur: "repeatDur",
      foreignobject: "foreignObject"
    }
  };
  const tagSelector = {};
  const {
    windowWidth
  } = uni.getSystemInfoSync();
  const blankChar = makeMap(" ,\r,\n,	,\f");
  let idIndex = 0;
  config.ignoreTags.iframe = void 0;
  config.trustTags.iframe = true;
  config.ignoreTags.embed = void 0;
  config.trustTags.embed = true;
  function makeMap(str) {
    const map = /* @__PURE__ */ Object.create(null);
    const list = str.split(",");
    for (let i = list.length; i--; ) {
      map[list[i]] = true;
    }
    return map;
  }
  function decodeEntity(str, amp) {
    let i = str.indexOf("&");
    while (i !== -1) {
      const j = str.indexOf(";", i + 3);
      let code2;
      if (j === -1)
        break;
      if (str[i + 1] === "#") {
        code2 = parseInt((str[i + 2] === "x" ? "0" : "") + str.substring(i + 2, j));
        if (!isNaN(code2)) {
          str = str.substr(0, i) + String.fromCharCode(code2) + str.substr(j + 1);
        }
      } else {
        code2 = str.substring(i + 1, j);
        if (config.entities[code2] || code2 === "amp" && amp) {
          str = str.substr(0, i) + (config.entities[code2] || "&") + str.substr(j + 1);
        }
      }
      i = str.indexOf("&", i + 1);
    }
    return str;
  }
  function mergeNodes(nodes) {
    let i = nodes.length - 1;
    for (let j = i; j >= -1; j--) {
      if (j === -1 || nodes[j].c || !nodes[j].name || nodes[j].name !== "div" && nodes[j].name !== "p" && nodes[j].name[0] !== "h" || (nodes[j].attrs.style || "").includes("inline")) {
        if (i - j >= 5) {
          nodes.splice(j + 1, i - j, {
            name: "div",
            attrs: {},
            children: nodes.slice(j + 1, i + 1)
          });
        }
        i = j - 1;
      }
    }
  }
  function Parser(vm) {
    this.options = vm || {};
    this.tagStyle = Object.assign({}, config.tagStyle, this.options.tagStyle);
    this.imgList = vm.imgList || [];
    this.imgList._unloadimgs = 0;
    this.plugins = vm.plugins || [];
    this.attrs = /* @__PURE__ */ Object.create(null);
    this.stack = [];
    this.nodes = [];
    this.pre = (this.options.containerStyle || "").includes("white-space") && this.options.containerStyle.includes("pre") ? 2 : 0;
  }
  Parser.prototype.parse = function(content) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onUpdate) {
        content = this.plugins[i].onUpdate(content, config) || content;
      }
    }
    new Lexer(this).parse(content);
    while (this.stack.length) {
      this.popNode();
    }
    if (this.nodes.length > 50) {
      mergeNodes(this.nodes);
    }
    return this.nodes;
  };
  Parser.prototype.expose = function() {
    for (let i = this.stack.length; i--; ) {
      const item = this.stack[i];
      if (item.c || item.name === "a" || item.name === "video" || item.name === "audio")
        return;
      item.c = 1;
    }
  };
  Parser.prototype.hook = function(node2) {
    for (let i = this.plugins.length; i--; ) {
      if (this.plugins[i].onParse && this.plugins[i].onParse(node2, this) === false) {
        return false;
      }
    }
    return true;
  };
  Parser.prototype.getUrl = function(url2) {
    const domain = this.options.domain;
    if (url2[0] === "/") {
      if (url2[1] === "/") {
        url2 = (domain ? domain.split("://")[0] : "http") + ":" + url2;
      } else if (domain) {
        url2 = domain + url2;
      } else {
        url2 = plus.io.convertLocalFileSystemURL(url2);
      }
    } else if (!url2.includes("data:") && !url2.includes("://")) {
      if (domain) {
        url2 = domain + "/" + url2;
      } else {
        url2 = plus.io.convertLocalFileSystemURL(url2);
      }
    }
    return url2;
  };
  Parser.prototype.parseStyle = function(node2) {
    const attrs = node2.attrs;
    const list = (this.tagStyle[node2.name] || "").split(";").concat((attrs.style || "").split(";"));
    const styleObj = {};
    let tmp = "";
    if (attrs.id && !this.xml) {
      if (this.options.useAnchor) {
        this.expose();
      } else if (node2.name !== "img" && node2.name !== "a" && node2.name !== "video" && node2.name !== "audio") {
        attrs.id = void 0;
      }
    }
    if (attrs.width) {
      styleObj.width = parseFloat(attrs.width) + (attrs.width.includes("%") ? "%" : "px");
      attrs.width = void 0;
    }
    if (attrs.height) {
      styleObj.height = parseFloat(attrs.height) + (attrs.height.includes("%") ? "%" : "px");
      attrs.height = void 0;
    }
    for (let i = 0, len = list.length; i < len; i++) {
      const info = list[i].split(":");
      if (info.length < 2)
        continue;
      const key = info.shift().trim().toLowerCase();
      let value = info.join(":").trim();
      if (value[0] === "-" && value.lastIndexOf("-") > 0 || value.includes("safe")) {
        tmp += `;${key}:${value}`;
      } else if (!styleObj[key] || value.includes("import") || !styleObj[key].includes("import")) {
        if (value.includes("url")) {
          let j = value.indexOf("(") + 1;
          if (j) {
            while (value[j] === '"' || value[j] === "'" || blankChar[value[j]]) {
              j++;
            }
            value = value.substr(0, j) + this.getUrl(value.substr(j));
          }
        } else if (value.includes("rpx")) {
          value = value.replace(/[0-9.]+\s*rpx/g, ($) => parseFloat($) * windowWidth / 750 + "px");
        }
        styleObj[key] = value;
      }
    }
    node2.attrs.style = tmp;
    return styleObj;
  };
  Parser.prototype.onTagName = function(name) {
    this.tagName = this.xml ? name : name.toLowerCase();
    if (this.tagName === "svg") {
      this.xml = (this.xml || 0) + 1;
      config.ignoreTags.style = void 0;
    }
  };
  Parser.prototype.onAttrName = function(name) {
    name = this.xml ? name : name.toLowerCase();
    if (name.substr(0, 5) === "data-") {
      if (name === "data-src" && !this.attrs.src) {
        this.attrName = "src";
      } else if (this.tagName === "img" || this.tagName === "a") {
        this.attrName = name;
      } else {
        this.attrName = void 0;
      }
    } else {
      this.attrName = name;
      this.attrs[name] = "T";
    }
  };
  Parser.prototype.onAttrVal = function(val) {
    const name = this.attrName || "";
    if (name === "style" || name === "href") {
      this.attrs[name] = decodeEntity(val, true);
    } else if (name.includes("src")) {
      this.attrs[name] = this.getUrl(decodeEntity(val, true));
    } else if (name) {
      this.attrs[name] = val;
    }
  };
  Parser.prototype.onOpenTag = function(selfClose) {
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.name = this.tagName;
    node2.attrs = this.attrs;
    if (this.options.nodes.length) {
      node2.type = "node";
    }
    this.attrs = /* @__PURE__ */ Object.create(null);
    const attrs = node2.attrs;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    const close = this.xml ? selfClose : config.voidTags[node2.name];
    if (tagSelector[node2.name]) {
      attrs.class = tagSelector[node2.name] + (attrs.class ? " " + attrs.class : "");
    }
    if (node2.name === "embed") {
      this.expose();
    }
    if (node2.name === "video" || node2.name === "audio") {
      if (node2.name === "video" && !attrs.id) {
        attrs.id = "v" + idIndex++;
      }
      if (!attrs.controls && !attrs.autoplay) {
        attrs.controls = "T";
      }
      node2.src = [];
      if (attrs.src) {
        node2.src.push(attrs.src);
        attrs.src = void 0;
      }
      this.expose();
    }
    if (close) {
      if (!this.hook(node2) || config.ignoreTags[node2.name]) {
        if (node2.name === "base" && !this.options.domain) {
          this.options.domain = attrs.href;
        } else if (node2.name === "source" && parent && (parent.name === "video" || parent.name === "audio") && attrs.src) {
          parent.src.push(attrs.src);
        }
        return;
      }
      const styleObj = this.parseStyle(node2);
      if (node2.name === "img") {
        if (attrs.src) {
          if (attrs.src.includes("webp")) {
            node2.webp = "T";
          }
          if (attrs.src.includes("data:") && !attrs["original-src"]) {
            attrs.ignore = "T";
          }
          if (!attrs.ignore || node2.webp || attrs.src.includes("cloud://")) {
            for (let i = this.stack.length; i--; ) {
              const item = this.stack[i];
              if (item.name === "a") {
                node2.a = item.attrs;
              }
              if (item.name === "table" && !node2.webp && !attrs.src.includes("cloud://")) {
                if (!styleObj.display || styleObj.display.includes("inline")) {
                  node2.t = "inline-block";
                } else {
                  node2.t = styleObj.display;
                }
                styleObj.display = void 0;
              }
              item.c = 1;
            }
            attrs.i = this.imgList.length.toString();
            let src = attrs["original-src"] || attrs.src;
            this.imgList.push(src);
            if (!node2.t) {
              this.imgList._unloadimgs += 1;
            }
            if (this.options.lazyLoad) {
              attrs["data-src"] = attrs.src;
              attrs.src = void 0;
            }
          }
        }
        if (styleObj.display === "inline") {
          styleObj.display = "";
        }
        if (attrs.ignore) {
          styleObj["max-width"] = styleObj["max-width"] || "100%";
          attrs.style += ";-webkit-touch-callout:none";
        }
        if (parseInt(styleObj.width) > windowWidth) {
          styleObj.height = void 0;
        }
        if (!isNaN(parseInt(styleObj.width))) {
          node2.w = "T";
        }
        if (!isNaN(parseInt(styleObj.height)) && (!styleObj.height.includes("%") || parent && (parent.attrs.style || "").includes("height"))) {
          node2.h = "T";
        }
        if (node2.w && node2.h && styleObj["object-fit"]) {
          if (styleObj["object-fit"] === "contain") {
            node2.m = "aspectFit";
          } else if (styleObj["object-fit"] === "cover") {
            node2.m = "aspectFill";
          }
        }
      } else if (node2.name === "svg") {
        siblings.push(node2);
        this.stack.push(node2);
        this.popNode();
        return;
      }
      for (const key in styleObj) {
        if (styleObj[key]) {
          attrs.style += `;${key}:${styleObj[key].replace(" !important", "")}`;
        }
      }
      attrs.style = attrs.style.substr(1) || void 0;
    } else {
      if ((node2.name === "pre" || (attrs.style || "").includes("white-space") && attrs.style.includes("pre")) && this.pre !== 2) {
        this.pre = node2.pre = 1;
      }
      node2.children = [];
      this.stack.push(node2);
    }
    siblings.push(node2);
  };
  Parser.prototype.onCloseTag = function(name) {
    name = this.xml ? name : name.toLowerCase();
    let i;
    for (i = this.stack.length; i--; ) {
      if (this.stack[i].name === name)
        break;
    }
    if (i !== -1) {
      while (this.stack.length > i) {
        this.popNode();
      }
    } else if (name === "p" || name === "br") {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push({
        name,
        attrs: {
          class: tagSelector[name] || "",
          style: this.tagStyle[name] || ""
        }
      });
    }
  };
  Parser.prototype.popNode = function() {
    const node2 = this.stack.pop();
    let attrs = node2.attrs;
    const children = node2.children;
    const parent = this.stack[this.stack.length - 1];
    const siblings = parent ? parent.children : this.nodes;
    if (!this.hook(node2) || config.ignoreTags[node2.name]) {
      if (node2.name === "title" && children.length && children[0].type === "text" && this.options.setTitle) {
        uni.setNavigationBarTitle({
          title: children[0].text
        });
      }
      siblings.pop();
      return;
    }
    if (node2.pre && this.pre !== 2) {
      this.pre = node2.pre = void 0;
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].pre) {
          this.pre = 1;
        }
      }
    }
    const styleObj = {};
    if (node2.name === "svg") {
      if (this.xml > 1) {
        this.xml--;
        return;
      }
      let src = "";
      const style = attrs.style;
      attrs.style = "";
      attrs.xmlns = "http://www.w3.org/2000/svg";
      (function traversal(node3) {
        if (node3.type === "text") {
          src += node3.text;
          return;
        }
        const name = config.svgDict[node3.name] || node3.name;
        if (name === "foreignObject") {
          for (const child of node3.children || []) {
            if (child.attrs && !child.attrs.xmlns) {
              child.attrs.xmlns = "http://www.w3.org/1999/xhtml";
              break;
            }
          }
        }
        src += "<" + name;
        for (const item in node3.attrs) {
          const val = node3.attrs[item];
          if (val) {
            src += ` ${config.svgDict[item] || item}="${val}"`;
          }
        }
        if (!node3.children) {
          src += "/>";
        } else {
          src += ">";
          for (let i = 0; i < node3.children.length; i++) {
            traversal(node3.children[i]);
          }
          src += "</" + name + ">";
        }
      })(node2);
      node2.name = "img";
      node2.attrs = {
        src: "data:image/svg+xml;utf8," + src.replace(/#/g, "%23"),
        style,
        ignore: "T"
      };
      node2.children = void 0;
      this.xml = false;
      config.ignoreTags.style = true;
      return;
    }
    if (attrs.align) {
      if (node2.name === "table") {
        if (attrs.align === "center") {
          styleObj["margin-inline-start"] = styleObj["margin-inline-end"] = "auto";
        } else {
          styleObj.float = attrs.align;
        }
      } else {
        styleObj["text-align"] = attrs.align;
      }
      attrs.align = void 0;
    }
    if (attrs.dir) {
      styleObj.direction = attrs.dir;
      attrs.dir = void 0;
    }
    if (node2.name === "font") {
      if (attrs.color) {
        styleObj.color = attrs.color;
        attrs.color = void 0;
      }
      if (attrs.face) {
        styleObj["font-family"] = attrs.face;
        attrs.face = void 0;
      }
      if (attrs.size) {
        let size = parseInt(attrs.size);
        if (!isNaN(size)) {
          if (size < 1) {
            size = 1;
          } else if (size > 7) {
            size = 7;
          }
          styleObj["font-size"] = ["x-small", "small", "medium", "large", "x-large", "xx-large", "xxx-large"][size - 1];
        }
        attrs.size = void 0;
      }
    }
    if ((attrs.class || "").includes("align-center")) {
      styleObj["text-align"] = "center";
    }
    Object.assign(styleObj, this.parseStyle(node2));
    if (node2.name !== "table" && parseInt(styleObj.width) > windowWidth) {
      styleObj["max-width"] = "100%";
      styleObj["box-sizing"] = "border-box";
    }
    if (config.blockTags[node2.name]) {
      node2.name = "div";
    } else if (!config.trustTags[node2.name] && !this.xml) {
      node2.name = "span";
    }
    if (node2.name === "a" || node2.name === "ad" || node2.name === "iframe") {
      this.expose();
    } else if (node2.name === "video") {
      if ((styleObj.height || "").includes("auto")) {
        styleObj.height = void 0;
      }
      let str = '<video style="width:100%;height:100%"';
      for (const item in attrs) {
        if (attrs[item]) {
          str += " " + item + '="' + attrs[item] + '"';
        }
      }
      if (this.options.pauseVideo) {
        str += ` onplay="this.dispatchEvent(new CustomEvent('vplay',{bubbles:!0}));for(var e=document.getElementsByTagName('video'),t=0;t<e.length;t++)e[t]!=this&&e[t].pause()"`;
      }
      str += ">";
      for (let i = 0; i < node2.src.length; i++) {
        str += '<source src="' + node2.src[i] + '">';
      }
      str += "</video>";
      node2.html = str;
    } else if ((node2.name === "ul" || node2.name === "ol") && node2.c) {
      const types = {
        a: "lower-alpha",
        A: "upper-alpha",
        i: "lower-roman",
        I: "upper-roman"
      };
      if (types[attrs.type]) {
        attrs.style += ";list-style-type:" + types[attrs.type];
        attrs.type = void 0;
      }
      for (let i = children.length; i--; ) {
        if (children[i].name === "li") {
          children[i].c = 1;
        }
      }
    } else if (node2.name === "table") {
      let padding = parseFloat(attrs.cellpadding);
      let spacing = parseFloat(attrs.cellspacing);
      const border = parseFloat(attrs.border);
      const bordercolor = styleObj["border-color"];
      const borderstyle = styleObj["border-style"];
      if (node2.c) {
        if (isNaN(padding)) {
          padding = 2;
        }
        if (isNaN(spacing)) {
          spacing = 2;
        }
      }
      if (border) {
        attrs.style += `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}`;
      }
      if (node2.flag && node2.c) {
        styleObj.display = "grid";
        if (styleObj["border-collapse"] === "collapse") {
          styleObj["border-collapse"] = void 0;
          spacing = 0;
        }
        if (spacing) {
          styleObj["grid-gap"] = spacing + "px";
          styleObj.padding = spacing + "px";
        } else if (border) {
          attrs.style += ";border-left:0;border-top:0";
        }
        const width = [];
        const trList = [];
        const cells = [];
        const map = {};
        (function traversal(nodes) {
          for (let i = 0; i < nodes.length; i++) {
            if (nodes[i].name === "tr") {
              trList.push(nodes[i]);
            } else if (nodes[i].name === "colgroup") {
              let colI = 1;
              for (const col of nodes[i].children || []) {
                if (col.name === "col") {
                  const style = col.attrs.style || "";
                  const start = style.indexOf("width") ? style.indexOf(";width") : 0;
                  if (start !== -1) {
                    let end = style.indexOf(";", start + 6);
                    if (end === -1) {
                      end = style.length;
                    }
                    width[colI] = style.substring(start ? start + 7 : 6, end);
                  }
                  colI += 1;
                }
              }
            } else {
              traversal(nodes[i].children || []);
            }
          }
        })(children);
        for (let row = 1; row <= trList.length; row++) {
          let col = 1;
          for (let j = 0; j < trList[row - 1].children.length; j++) {
            const td = trList[row - 1].children[j];
            if (td.name === "td" || td.name === "th") {
              while (map[row + "." + col]) {
                col++;
              }
              let style = td.attrs.style || "";
              let start = style.indexOf("width") ? style.indexOf(";width") : 0;
              if (start !== -1) {
                let end = style.indexOf(";", start + 6);
                if (end === -1) {
                  end = style.length;
                }
                if (!td.attrs.colspan) {
                  width[col] = style.substring(start ? start + 7 : 6, end);
                }
                style = style.substr(0, start) + style.substr(end);
              }
              style += ";display:flex";
              start = style.indexOf("vertical-align");
              if (start !== -1) {
                const val = style.substr(start + 15, 10);
                if (val.includes("middle")) {
                  style += ";align-items:center";
                } else if (val.includes("bottom")) {
                  style += ";align-items:flex-end";
                }
              } else {
                style += ";align-items:center";
              }
              start = style.indexOf("text-align");
              if (start !== -1) {
                const val = style.substr(start + 11, 10);
                if (val.includes("center")) {
                  style += ";justify-content: center";
                } else if (val.includes("right")) {
                  style += ";justify-content: right";
                }
              }
              style = (border ? `;border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"}` + (spacing ? "" : ";border-right:0;border-bottom:0") : "") + (padding ? `;padding:${padding}px` : "") + ";" + style;
              if (td.attrs.colspan) {
                style += `;grid-column-start:${col};grid-column-end:${col + parseInt(td.attrs.colspan)}`;
                if (!td.attrs.rowspan) {
                  style += `;grid-row-start:${row};grid-row-end:${row + 1}`;
                }
                col += parseInt(td.attrs.colspan) - 1;
              }
              if (td.attrs.rowspan) {
                style += `;grid-row-start:${row};grid-row-end:${row + parseInt(td.attrs.rowspan)}`;
                if (!td.attrs.colspan) {
                  style += `;grid-column-start:${col};grid-column-end:${col + 1}`;
                }
                for (let rowspan = 1; rowspan < td.attrs.rowspan; rowspan++) {
                  for (let colspan = 0; colspan < (td.attrs.colspan || 1); colspan++) {
                    map[row + rowspan + "." + (col - colspan)] = 1;
                  }
                }
              }
              if (style) {
                td.attrs.style = style;
              }
              cells.push(td);
              col++;
            }
          }
          if (row === 1) {
            let temp = "";
            for (let i = 1; i < col; i++) {
              temp += (width[i] ? width[i] : "auto") + " ";
            }
            styleObj["grid-template-columns"] = temp;
          }
        }
        node2.children = cells;
      } else {
        if (node2.c) {
          styleObj.display = "table";
        }
        if (!isNaN(spacing)) {
          styleObj["border-spacing"] = spacing + "px";
        }
        if (border || padding) {
          (function traversal(nodes) {
            for (let i = 0; i < nodes.length; i++) {
              const td = nodes[i];
              if (td.name === "th" || td.name === "td") {
                if (border) {
                  td.attrs.style = `border:${border}px ${borderstyle || "solid"} ${bordercolor || "gray"};${td.attrs.style || ""}`;
                }
                if (padding) {
                  td.attrs.style = `padding:${padding}px;${td.attrs.style || ""}`;
                }
              } else if (td.children) {
                traversal(td.children);
              }
            }
          })(children);
        }
      }
      if (this.options.scrollTable && !(attrs.style || "").includes("inline")) {
        const table = Object.assign({}, node2);
        node2.name = "div";
        node2.attrs = {
          style: "overflow:auto"
        };
        node2.children = [table];
        attrs = table.attrs;
      }
    } else if ((node2.name === "td" || node2.name === "th") && (attrs.colspan || attrs.rowspan)) {
      for (let i = this.stack.length; i--; ) {
        if (this.stack[i].name === "table") {
          this.stack[i].flag = 1;
          break;
        }
      }
    } else if (node2.name === "ruby") {
      node2.name = "span";
      for (let i = 0; i < children.length - 1; i++) {
        if (children[i].type === "text" && children[i + 1].name === "rt") {
          children[i] = {
            name: "div",
            attrs: {
              style: "display:inline-block;text-align:center"
            },
            children: [{
              name: "div",
              attrs: {
                style: "font-size:50%;" + (children[i + 1].attrs.style || "")
              },
              children: children[i + 1].children
            }, children[i]]
          };
          children.splice(i + 1, 1);
        }
      }
    } else if (node2.c) {
      (function traversal(node3) {
        node3.c = 2;
        for (let i = node3.children.length; i--; ) {
          const child = node3.children[i];
          if (child.name && (config.inlineTags[child.name] || (child.attrs.style || "").includes("inline") && child.children) && !child.c) {
            traversal(child);
          }
          if (!child.c || child.name === "table") {
            node3.c = 1;
          }
        }
      })(node2);
    }
    if ((styleObj.display || "").includes("flex") && !node2.c) {
      for (let i = children.length; i--; ) {
        const item = children[i];
        if (item.f) {
          item.attrs.style = (item.attrs.style || "") + item.f;
          item.f = void 0;
        }
      }
    }
    const flex = parent && ((parent.attrs.style || "").includes("flex") || (parent.attrs.style || "").includes("grid")) && !node2.c;
    if (flex) {
      node2.f = ";max-width:100%";
    }
    if (children.length >= 50 && node2.c && !(styleObj.display || "").includes("flex")) {
      mergeNodes(children);
    }
    for (const key in styleObj) {
      if (styleObj[key]) {
        const val = `;${key}:${styleObj[key].replace(" !important", "")}`;
        if (flex && (key.includes("flex") && key !== "flex-direction" || key === "align-self" || key.includes("grid") || styleObj[key][0] === "-" || key.includes("width") && val.includes("%"))) {
          node2.f += val;
          if (key === "width") {
            attrs.style += ";width:100%";
          }
        } else {
          attrs.style += val;
        }
      }
    }
    attrs.style = attrs.style.substr(1) || void 0;
  };
  Parser.prototype.onText = function(text) {
    if (!this.pre) {
      let trim2 = "";
      let flag2;
      for (let i = 0, len = text.length; i < len; i++) {
        if (!blankChar[text[i]]) {
          trim2 += text[i];
        } else {
          if (trim2[trim2.length - 1] !== " ") {
            trim2 += " ";
          }
          if (text[i] === "\n" && !flag2) {
            flag2 = true;
          }
        }
      }
      if (trim2 === " ") {
        if (flag2)
          return;
        else {
          const parent = this.stack[this.stack.length - 1];
          if (parent && parent.name[0] === "t")
            return;
        }
      }
      text = trim2;
    }
    const node2 = /* @__PURE__ */ Object.create(null);
    node2.type = "text";
    node2.text = decodeEntity(text);
    if (this.hook(node2)) {
      const siblings = this.stack.length ? this.stack[this.stack.length - 1].children : this.nodes;
      siblings.push(node2);
    }
  };
  function Lexer(handler) {
    this.handler = handler;
  }
  Lexer.prototype.parse = function(content) {
    this.content = content || "";
    this.i = 0;
    this.start = 0;
    this.state = this.text;
    for (let len = this.content.length; this.i !== -1 && this.i < len; ) {
      this.state();
    }
  };
  Lexer.prototype.checkClose = function(method) {
    const selfClose = this.content[this.i] === "/";
    if (this.content[this.i] === ">" || selfClose && this.content[this.i + 1] === ">") {
      if (method) {
        this.handler[method](this.content.substring(this.start, this.i));
      }
      this.i += selfClose ? 2 : 1;
      this.start = this.i;
      this.handler.onOpenTag(selfClose);
      if (this.handler.tagName === "script") {
        this.i = this.content.indexOf("</", this.i);
        if (this.i !== -1) {
          this.i += 2;
          this.start = this.i;
        }
        this.state = this.endTag;
      } else {
        this.state = this.text;
      }
      return true;
    }
    return false;
  };
  Lexer.prototype.text = function() {
    this.i = this.content.indexOf("<", this.i);
    if (this.i === -1) {
      if (this.start < this.content.length) {
        this.handler.onText(this.content.substring(this.start, this.content.length));
      }
      return;
    }
    const c = this.content[this.i + 1];
    if (c >= "a" && c <= "z" || c >= "A" && c <= "Z") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      this.start = ++this.i;
      this.state = this.tagName;
    } else if (c === "/" || c === "!" || c === "?") {
      if (this.start !== this.i) {
        this.handler.onText(this.content.substring(this.start, this.i));
      }
      const next = this.content[this.i + 2];
      if (c === "/" && (next >= "a" && next <= "z" || next >= "A" && next <= "Z")) {
        this.i += 2;
        this.start = this.i;
        this.state = this.endTag;
        return;
      }
      let end = "-->";
      if (c !== "!" || this.content[this.i + 2] !== "-" || this.content[this.i + 3] !== "-") {
        end = ">";
      }
      this.i = this.content.indexOf(end, this.i);
      if (this.i !== -1) {
        this.i += end.length;
        this.start = this.i;
      }
    } else {
      this.i++;
    }
  };
  Lexer.prototype.tagName = function() {
    if (blankChar[this.content[this.i]]) {
      this.handler.onTagName(this.content.substring(this.start, this.i));
      while (blankChar[this.content[++this.i]])
        ;
      if (this.i < this.content.length && !this.checkClose()) {
        this.start = this.i;
        this.state = this.attrName;
      }
    } else if (!this.checkClose("onTagName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrName = function() {
    let c = this.content[this.i];
    if (blankChar[c] || c === "=") {
      this.handler.onAttrName(this.content.substring(this.start, this.i));
      let needVal = c === "=";
      const len = this.content.length;
      while (++this.i < len) {
        c = this.content[this.i];
        if (!blankChar[c]) {
          if (this.checkClose())
            return;
          if (needVal) {
            this.start = this.i;
            this.state = this.attrVal;
            return;
          }
          if (this.content[this.i] === "=") {
            needVal = true;
          } else {
            this.start = this.i;
            this.state = this.attrName;
            return;
          }
        }
      }
    } else if (!this.checkClose("onAttrName")) {
      this.i++;
    }
  };
  Lexer.prototype.attrVal = function() {
    const c = this.content[this.i];
    const len = this.content.length;
    if (c === '"' || c === "'") {
      this.start = ++this.i;
      this.i = this.content.indexOf(c, this.i);
      if (this.i === -1)
        return;
      this.handler.onAttrVal(this.content.substring(this.start, this.i));
    } else {
      for (; this.i < len; this.i++) {
        if (blankChar[this.content[this.i]]) {
          this.handler.onAttrVal(this.content.substring(this.start, this.i));
          break;
        } else if (this.checkClose("onAttrVal"))
          return;
      }
    }
    while (blankChar[this.content[++this.i]])
      ;
    if (this.i < len && !this.checkClose()) {
      this.start = this.i;
      this.state = this.attrName;
    }
  };
  Lexer.prototype.endTag = function() {
    const c = this.content[this.i];
    if (blankChar[c] || c === ">" || c === "/") {
      this.handler.onCloseTag(this.content.substring(this.start, this.i));
      if (c !== ">") {
        this.i = this.content.indexOf(">", this.i);
        if (this.i === -1)
          return;
      }
      this.start = ++this.i;
      this.state = this.text;
    } else {
      this.i++;
    }
  };
  const plugins = [];
  const _sfc_main$6 = {
    name: "mp-html",
    data() {
      return {
        nodes: []
      };
    },
    props: {
      containerStyle: {
        type: String,
        default: ""
      },
      content: {
        type: String,
        default: ""
      },
      copyLink: {
        type: [Boolean, String],
        default: true
      },
      domain: String,
      errorImg: {
        type: String,
        default: ""
      },
      lazyLoad: {
        type: [Boolean, String],
        default: false
      },
      loadingImg: {
        type: String,
        default: ""
      },
      pauseVideo: {
        type: [Boolean, String],
        default: true
      },
      previewImg: {
        type: [Boolean, String],
        default: true
      },
      scrollTable: [Boolean, String],
      selectable: [Boolean, String],
      setTitle: {
        type: [Boolean, String],
        default: true
      },
      showImgMenu: {
        type: [Boolean, String],
        default: true
      },
      tagStyle: Object,
      useAnchor: [Boolean, Number]
    },
    emits: ["load", "ready", "imgtap", "linktap", "play", "error"],
    components: {
      node
    },
    watch: {
      content(content) {
        this.setContent(content);
      }
    },
    created() {
      this.plugins = [];
      for (let i = plugins.length; i--; ) {
        this.plugins.push(new plugins[i](this));
      }
    },
    mounted() {
      if (this.content && !this.nodes.length) {
        this.setContent(this.content);
      }
    },
    beforeDestroy() {
      this._hook("onDetached");
    },
    methods: {
      in(page2, selector, scrollTop) {
        if (page2 && selector && scrollTop) {
          this._in = {
            page: page2,
            selector,
            scrollTop
          };
        }
      },
      navigateTo(id, offset) {
        return new Promise((resolve, reject) => {
          if (!this.useAnchor) {
            reject(Error("Anchor is disabled"));
            return;
          }
          offset = offset || parseInt(this.useAnchor) || 0;
          let deep = " ";
          const selector = uni.createSelectorQuery().in(this._in ? this._in.page : this).select((this._in ? this._in.selector : "._root") + (id ? `${deep}#${id}` : "")).boundingClientRect();
          if (this._in) {
            selector.select(this._in.selector).scrollOffset().select(this._in.selector).boundingClientRect();
          } else {
            selector.selectViewport().scrollOffset();
          }
          selector.exec((res) => {
            if (!res[0]) {
              reject(Error("Label not found"));
              return;
            }
            const scrollTop = res[1].scrollTop + res[0].top - (res[2] ? res[2].top : 0) + offset;
            if (this._in) {
              this._in.page[this._in.scrollTop] = scrollTop;
            } else {
              uni.pageScrollTo({
                scrollTop,
                duration: 300
              });
            }
            resolve();
          });
        });
      },
      getText(nodes) {
        let text = "";
        (function traversal(nodes2) {
          for (let i = 0; i < nodes2.length; i++) {
            const node2 = nodes2[i];
            if (node2.type === "text") {
              text += node2.text.replace(/&amp;/g, "&");
            } else if (node2.name === "br") {
              text += "\n";
            } else {
              const isBlock = node2.name === "p" || node2.name === "div" || node2.name === "tr" || node2.name === "li" || node2.name[0] === "h" && node2.name[1] > "0" && node2.name[1] < "7";
              if (isBlock && text && text[text.length - 1] !== "\n") {
                text += "\n";
              }
              if (node2.children) {
                traversal(node2.children);
              }
              if (isBlock && text[text.length - 1] !== "\n") {
                text += "\n";
              } else if (node2.name === "td" || node2.name === "th") {
                text += "	";
              }
            }
          }
        })(nodes || this.nodes);
        return text;
      },
      getRect() {
        return new Promise((resolve, reject) => {
          uni.createSelectorQuery().in(this).select("#_root").boundingClientRect().exec((res) => res[0] ? resolve(res[0]) : reject(Error("Root label not found")));
        });
      },
      pauseMedia() {
        for (let i = (this._videos || []).length; i--; ) {
          this._videos[i].pause();
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].pause()';
        let page2 = this.$parent;
        while (!page2.$scope)
          page2 = page2.$parent;
        page2.$scope.$getAppWebview().evalJS(command);
      },
      setPlaybackRate(rate) {
        this.playbackRate = rate;
        for (let i = (this._videos || []).length; i--; ) {
          this._videos[i].playbackRate(rate);
        }
        const command = 'for(var e=document.getElementsByTagName("video"),i=e.length;i--;)e[i].playbackRate=' + rate;
        let page2 = this.$parent;
        while (!page2.$scope)
          page2 = page2.$parent;
        page2.$scope.$getAppWebview().evalJS(command);
      },
      setContent(content, append) {
        if (!append || !this.imgList) {
          this.imgList = [];
        }
        const nodes = new Parser(this).parse(content);
        this.$set(this, "nodes", append ? (this.nodes || []).concat(nodes) : nodes);
        this._videos = [];
        this.$nextTick(() => {
          this._hook("onLoad");
          this.$emit("load");
        });
        if (this.lazyLoad || this.imgList._unloadimgs < this.imgList.length / 2) {
          let height = 0;
          const callback = (rect) => {
            if (!rect || !rect.height)
              rect = {};
            if (rect.height === height) {
              this.$emit("ready", rect);
            } else {
              height = rect.height;
              setTimeout(() => {
                this.getRect().then(callback).catch(callback);
              }, 350);
            }
          };
          this.getRect().then(callback).catch(callback);
        } else {
          if (!this.imgList._unloadimgs) {
            this.getRect().then((rect) => {
              this.$emit("ready", rect);
            }).catch(() => {
              this.$emit("ready", {});
            });
          }
        }
      },
      _hook(name) {
        for (let i = plugins.length; i--; ) {
          if (this.plugins[i][name]) {
            this.plugins[i][name]();
          }
        }
      }
    }
  };
  function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_node = vue.resolveComponent("node");
    return vue.openBlock(), vue.createElementBlock("view", {
      id: "_root",
      class: vue.normalizeClass(($props.selectable ? "_select " : "") + "_root"),
      style: vue.normalizeStyle($props.containerStyle)
    }, [
      !$data.nodes[0] ? vue.renderSlot(_ctx.$slots, "default", { key: 0 }, void 0, true) : (vue.openBlock(), vue.createBlock(_component_node, {
        key: 1,
        childs: $data.nodes,
        opts: [$props.lazyLoad, $props.loadingImg, $props.errorImg, $props.showImgMenu, $props.selectable],
        name: "span"
      }, null, 8, ["childs", "opts"]))
    ], 6);
  }
  var __easycom_2$1 = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$3], ["__scopeId", "data-v-0cfd6ca1"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/mp-html/components/mp-html/mp-html.vue"]]);
  const _sfc_main$5 = {
    setup(__props) {
      const detail = vue.ref({});
      let noticeId;
      onLoad((e) => {
        noticeId = e.id;
        getNoticeDetail();
      });
      const getNoticeDetail = () => {
        apiNoticeDetail({ id: noticeId }).then((res) => {
          detail.value = res.data;
          formatAppLog("log", "at pages/notice/detail.vue:45", res);
        });
      };
      return (_ctx, _cache) => {
        const _component_uni_tag = resolveEasycom(vue.resolveDynamicComponent("uni-tag"), __easycom_0$2);
        const _component_uni_dateformat = resolveEasycom(vue.resolveDynamicComponent("uni-dateformat"), __easycom_1$1);
        const _component_mp_html = resolveEasycom(vue.resolveDynamicComponent("mp-html"), __easycom_2$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "noticeLayout" }, [
          vue.createElementVNode("view", { class: "title" }, [
            detail.value.select ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "tag"
            }, [
              vue.createVNode(_component_uni_tag, {
                inverted: "",
                text: "\u7F6E\u9876",
                type: "error"
              })
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "font" }, vue.toDisplayString(detail.value.title), 1)
          ]),
          vue.createElementVNode("view", { class: "info" }, [
            vue.createElementVNode("view", { class: "item" }, vue.toDisplayString(detail.value.author), 1),
            vue.createElementVNode("view", { class: "item" }, [
              vue.createVNode(_component_uni_dateformat, {
                date: detail.value.publish_date,
                format: "yyyy-MM-dd hh:mm:ss"
              }, null, 8, ["date"])
            ])
          ]),
          vue.createElementVNode("view", { class: "content" }, [
            vue.createVNode(_component_mp_html, {
              content: detail.value.content
            }, null, 8, ["content"]),
            vue.createCommentVNode(' <rich-text :nodes="detail.content"></rich-text> ')
          ]),
          vue.createElementVNode("view", { class: "count" }, " \u9605\u8BFB " + vue.toDisplayString(detail.value.view_count), 1)
        ]);
      };
    }
  };
  var PagesNoticeDetail = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["__scopeId", "data-v-194b27bf"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/notice/detail.vue"]]);
  var en = {
    "uni-search-bar.cancel": "cancel",
    "uni-search-bar.placeholder": "Search enter content"
  };
  var zhHans = {
    "uni-search-bar.cancel": "\u53D6\u6D88",
    "uni-search-bar.placeholder": "\u8BF7\u8F93\u5165\u641C\u7D22\u5185\u5BB9"
  };
  var zhHant = {
    "uni-search-bar.cancel": "\u53D6\u6D88",
    "uni-search-bar.placeholder": "\u8ACB\u8F38\u5165\u641C\u7D22\u5167\u5BB9"
  };
  var messages = {
    en,
    "zh-Hans": zhHans,
    "zh-Hant": zhHant
  };
  const {
    t
  } = initVueI18n(messages);
  const _sfc_main$4 = {
    name: "UniSearchBar",
    emits: ["input", "update:modelValue", "clear", "cancel", "confirm", "blur", "focus"],
    props: {
      placeholder: {
        type: String,
        default: ""
      },
      radius: {
        type: [Number, String],
        default: 5
      },
      clearButton: {
        type: String,
        default: "auto"
      },
      cancelButton: {
        type: String,
        default: "auto"
      },
      cancelText: {
        type: String,
        default: ""
      },
      bgColor: {
        type: String,
        default: "#F8F8F8"
      },
      maxlength: {
        type: [Number, String],
        default: 100
      },
      value: {
        type: [Number, String],
        default: ""
      },
      modelValue: {
        type: [Number, String],
        default: ""
      },
      focus: {
        type: Boolean,
        default: false
      },
      readonly: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        show: false,
        showSync: false,
        searchVal: ""
      };
    },
    computed: {
      cancelTextI18n() {
        return this.cancelText || t("uni-search-bar.cancel");
      },
      placeholderText() {
        return this.placeholder || t("uni-search-bar.placeholder");
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler(newVal) {
          this.searchVal = newVal;
          if (newVal) {
            this.show = true;
          }
        }
      },
      focus: {
        immediate: true,
        handler(newVal) {
          if (newVal) {
            if (this.readonly)
              return;
            this.show = true;
            this.$nextTick(() => {
              this.showSync = true;
            });
          }
        }
      },
      searchVal(newVal, oldVal) {
        this.$emit("input", newVal);
        this.$emit("update:modelValue", newVal);
      }
    },
    methods: {
      searchClick() {
        if (this.readonly)
          return;
        if (this.show) {
          return;
        }
        this.show = true;
        this.$nextTick(() => {
          this.showSync = true;
        });
      },
      clear() {
        this.$emit("clear", {
          value: this.searchVal
        });
        this.searchVal = "";
      },
      cancel() {
        if (this.readonly)
          return;
        this.$emit("cancel", {
          value: this.searchVal
        });
        this.searchVal = "";
        this.show = false;
        this.showSync = false;
        plus.key.hideSoftKeybord();
      },
      confirm() {
        plus.key.hideSoftKeybord();
        this.$emit("confirm", {
          value: this.searchVal
        });
      },
      blur() {
        plus.key.hideSoftKeybord();
        this.$emit("blur", {
          value: this.searchVal
        });
      },
      emitFocus(e) {
        this.$emit("focus", e.detail);
      }
    }
  };
  function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
    return vue.openBlock(), vue.createElementBlock("view", { class: "uni-searchbar" }, [
      vue.createElementVNode("view", {
        style: vue.normalizeStyle({ borderRadius: $props.radius + "px", backgroundColor: $props.bgColor }),
        class: "uni-searchbar__box",
        onClick: _cache[5] || (_cache[5] = (...args) => $options.searchClick && $options.searchClick(...args))
      }, [
        vue.createElementVNode("view", { class: "uni-searchbar__box-icon-search" }, [
          vue.renderSlot(_ctx.$slots, "searchIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "18",
              type: "search"
            })
          ], true)
        ]),
        $data.show || $data.searchVal ? vue.withDirectives((vue.openBlock(), vue.createElementBlock("input", {
          key: 0,
          focus: $data.showSync,
          disabled: $props.readonly,
          placeholder: $options.placeholderText,
          maxlength: $props.maxlength,
          class: "uni-searchbar__box-search-input",
          "confirm-type": "search",
          type: "text",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchVal = $event),
          onConfirm: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args)),
          onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
          onFocus: _cache[3] || (_cache[3] = (...args) => $options.emitFocus && $options.emitFocus(...args))
        }, null, 40, ["focus", "disabled", "placeholder", "maxlength"])), [
          [vue.vModelText, $data.searchVal]
        ]) : (vue.openBlock(), vue.createElementBlock("text", {
          key: 1,
          class: "uni-searchbar__text-placeholder"
        }, vue.toDisplayString($props.placeholder), 1)),
        $data.show && ($props.clearButton === "always" || $props.clearButton === "auto" && $data.searchVal !== "") && !$props.readonly ? (vue.openBlock(), vue.createElementBlock("view", {
          key: 2,
          class: "uni-searchbar__box-icon-clear",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, [
          vue.renderSlot(_ctx.$slots, "clearIcon", {}, () => [
            vue.createVNode(_component_uni_icons, {
              color: "#c0c4cc",
              size: "20",
              type: "clear"
            })
          ], true)
        ])) : vue.createCommentVNode("v-if", true)
      ], 4),
      $props.cancelButton === "always" || $data.show && $props.cancelButton === "auto" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 0,
        onClick: _cache[6] || (_cache[6] = (...args) => $options.cancel && $options.cancel(...args)),
        class: "uni-searchbar__cancel"
      }, vue.toDisplayString($options.cancelTextI18n), 1)) : vue.createCommentVNode("v-if", true)
    ]);
  }
  var __easycom_0$1 = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$2], ["__scopeId", "data-v-180dbe05"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uni-search-bar/components/uni-search-bar/uni-search-bar.vue"]]);
  var mpMixin = {};
  function email(value) {
    return /^\w+((-\w+)|(\.\w+))*\@[A-Za-z0-9]+((\.|-)[A-Za-z0-9]+)*\.[A-Za-z0-9]+$/.test(value);
  }
  function mobile(value) {
    return /^1([3589]\d|4[5-9]|6[1-2,4-7]|7[0-8])\d{8}$/.test(value);
  }
  function url(value) {
    return /^((https|http|ftp|rtsp|mms):\/\/)(([0-9a-zA-Z_!~*'().&=+$%-]+: )?[0-9a-zA-Z_!~*'().&=+$%-]+@)?(([0-9]{1,3}.){3}[0-9]{1,3}|([0-9a-zA-Z_!~*'()-]+.)*([0-9a-zA-Z][0-9a-zA-Z-]{0,61})?[0-9a-zA-Z].[a-zA-Z]{2,6})(:[0-9]{1,4})?((\/?)|(\/[0-9a-zA-Z_!~*'().;?:@&=+$,%#-]+)+\/?)$/.test(value);
  }
  function date(value) {
    if (!value)
      return false;
    if (number(value))
      value = +value;
    return !/Invalid|NaN/.test(new Date(value).toString());
  }
  function dateISO(value) {
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(value);
  }
  function number(value) {
    return /^[\+-]?(\d+\.?\d*|\.\d+|\d\.\d+e\+\d+)$/.test(value);
  }
  function string(value) {
    return typeof value === "string";
  }
  function digits(value) {
    return /^\d+$/.test(value);
  }
  function idCard(value) {
    return /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/.test(value);
  }
  function carNo(value) {
    const xreg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}(([0-9]{5}[DF]$)|([DF][A-HJ-NP-Z0-9][0-9]{4}$))/;
    const creg = /^[京津沪渝冀豫云辽黑湘皖鲁新苏浙赣鄂桂甘晋蒙陕吉闽贵粤青藏川宁琼使领A-Z]{1}[A-Z]{1}[A-HJ-NP-Z0-9]{4}[A-HJ-NP-Z0-9挂学警港澳]{1}$/;
    if (value.length === 7) {
      return creg.test(value);
    }
    if (value.length === 8) {
      return xreg.test(value);
    }
    return false;
  }
  function amount(value) {
    return /^[1-9]\d*(,\d{3})*(\.\d{1,2})?$|^0\.\d{1,2}$/.test(value);
  }
  function chinese(value) {
    const reg = /^[\u4e00-\u9fa5]+$/gi;
    return reg.test(value);
  }
  function letter(value) {
    return /^[a-zA-Z]*$/.test(value);
  }
  function enOrNum(value) {
    const reg = /^[0-9a-zA-Z]*$/g;
    return reg.test(value);
  }
  function contains(value, param) {
    return value.indexOf(param) >= 0;
  }
  function range$1(value, param) {
    return value >= param[0] && value <= param[1];
  }
  function rangeLength(value, param) {
    return value.length >= param[0] && value.length <= param[1];
  }
  function landline(value) {
    const reg = /^\d{3,4}-\d{7,8}(-\d{3,4})?$/;
    return reg.test(value);
  }
  function empty(value) {
    switch (typeof value) {
      case "undefined":
        return true;
      case "string":
        if (value.replace(/(^[ \t\n\r]*)|([ \t\n\r]*$)/g, "").length == 0)
          return true;
        break;
      case "boolean":
        if (!value)
          return true;
        break;
      case "number":
        if (value === 0 || isNaN(value))
          return true;
        break;
      case "object":
        if (value === null || value.length === 0)
          return true;
        for (const i in value) {
          return false;
        }
        return true;
    }
    return false;
  }
  function jsonString(value) {
    if (typeof value === "string") {
      try {
        const obj = JSON.parse(value);
        if (typeof obj === "object" && obj) {
          return true;
        }
        return false;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
  function array(value) {
    if (typeof Array.isArray === "function") {
      return Array.isArray(value);
    }
    return Object.prototype.toString.call(value) === "[object Array]";
  }
  function object(value) {
    return Object.prototype.toString.call(value) === "[object Object]";
  }
  function code(value, len = 6) {
    return new RegExp(`^\\d{${len}}$`).test(value);
  }
  function func(value) {
    return typeof value === "function";
  }
  function promise(value) {
    return object(value) && func(value.then) && func(value.catch);
  }
  function image(value) {
    const newValue = value.split("?")[0];
    const IMAGE_REGEXP = /\.(jpeg|jpg|gif|png|svg|webp|jfif|bmp|dpg)/i;
    return IMAGE_REGEXP.test(newValue);
  }
  function video(value) {
    const VIDEO_REGEXP = /\.(mp4|mpg|mpeg|dat|asf|avi|rm|rmvb|mov|wmv|flv|mkv|m3u8)/i;
    return VIDEO_REGEXP.test(value);
  }
  function regExp(o) {
    return o && Object.prototype.toString.call(o) === "[object RegExp]";
  }
  var test = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    email,
    mobile,
    url,
    date,
    dateISO,
    number,
    digits,
    idCard,
    carNo,
    amount,
    chinese,
    letter,
    enOrNum,
    contains,
    range: range$1,
    rangeLength,
    empty,
    jsonString,
    landline,
    object,
    array,
    code,
    func,
    promise,
    video,
    image,
    regExp,
    string
  });
  function strip(num, precision = 15) {
    return +parseFloat(Number(num).toPrecision(precision));
  }
  function digitLength(num) {
    const eSplit = num.toString().split(/[eE]/);
    const len = (eSplit[0].split(".")[1] || "").length - +(eSplit[1] || 0);
    return len > 0 ? len : 0;
  }
  function float2Fixed(num) {
    if (num.toString().indexOf("e") === -1) {
      return Number(num.toString().replace(".", ""));
    }
    const dLen = digitLength(num);
    return dLen > 0 ? strip(Number(num) * Math.pow(10, dLen)) : Number(num);
  }
  function checkBoundary(num) {
    {
      if (num > Number.MAX_SAFE_INTEGER || num < Number.MIN_SAFE_INTEGER) {
        formatAppLog("warn", "at uni_modules/uv-ui-tools/libs/function/digit.js:45", `${num} \u8D85\u51FA\u4E86\u7CBE\u5EA6\u9650\u5236\uFF0C\u7ED3\u679C\u53EF\u80FD\u4E0D\u6B63\u786E`);
      }
    }
  }
  function iteratorOperation(arr, operation) {
    const [num1, num2, ...others] = arr;
    let res = operation(num1, num2);
    others.forEach((num) => {
      res = operation(res, num);
    });
    return res;
  }
  function times(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, times);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    const baseNum = digitLength(num1) + digitLength(num2);
    const leftValue = num1Changed * num2Changed;
    checkBoundary(leftValue);
    return leftValue / Math.pow(10, baseNum);
  }
  function divide(...nums) {
    if (nums.length > 2) {
      return iteratorOperation(nums, divide);
    }
    const [num1, num2] = nums;
    const num1Changed = float2Fixed(num1);
    const num2Changed = float2Fixed(num2);
    checkBoundary(num1Changed);
    checkBoundary(num2Changed);
    return times(num1Changed / num2Changed, strip(Math.pow(10, digitLength(num2) - digitLength(num1))));
  }
  function round(num, ratio) {
    const base = Math.pow(10, ratio);
    let result = divide(Math.round(Math.abs(times(num, base))), base);
    if (num < 0 && result !== 0) {
      result = times(result, -1);
    }
    return result;
  }
  function range(min = 0, max = 0, value = 0) {
    return Math.max(min, Math.min(max, Number(value)));
  }
  function getPx(value, unit = false) {
    if (number(value)) {
      return unit ? `${value}px` : Number(value);
    }
    if (/(rpx|upx)$/.test(value)) {
      return unit ? `${uni.upx2px(parseInt(value))}px` : Number(uni.upx2px(parseInt(value)));
    }
    return unit ? `${parseInt(value)}px` : parseInt(value);
  }
  function sleep(value = 30) {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, value);
    });
  }
  function os() {
    return uni.getSystemInfoSync().platform.toLowerCase();
  }
  function sys() {
    return uni.getSystemInfoSync();
  }
  function random(min, max) {
    if (min >= 0 && max > 0 && max >= min) {
      const gab = max - min + 1;
      return Math.floor(Math.random() * gab + min);
    }
    return 0;
  }
  function guid(len = 32, firstU = true, radix = null) {
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz".split("");
    const uuid = [];
    radix = radix || chars.length;
    if (len) {
      for (let i = 0; i < len; i++)
        uuid[i] = chars[0 | Math.random() * radix];
    } else {
      let r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = "-";
      uuid[14] = "4";
      for (let i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 3 | 8 : r];
        }
      }
    }
    if (firstU) {
      uuid.shift();
      return `u${uuid.join("")}`;
    }
    return uuid.join("");
  }
  function $parent(name = void 0) {
    let parent = this.$parent;
    while (parent) {
      if (parent.$options && parent.$options.name !== name) {
        parent = parent.$parent;
      } else {
        return parent;
      }
    }
    return false;
  }
  function addStyle(customStyle, target = "object") {
    if (empty(customStyle) || typeof customStyle === "object" && target === "object" || target === "string" && typeof customStyle === "string") {
      return customStyle;
    }
    if (target === "object") {
      customStyle = trim(customStyle);
      const styleArray = customStyle.split(";");
      const style = {};
      for (let i = 0; i < styleArray.length; i++) {
        if (styleArray[i]) {
          const item = styleArray[i].split(":");
          style[trim(item[0])] = trim(item[1]);
        }
      }
      return style;
    }
    let string2 = "";
    for (const i in customStyle) {
      const key = i.replace(/([A-Z])/g, "-$1").toLowerCase();
      string2 += `${key}:${customStyle[i]};`;
    }
    return trim(string2);
  }
  function addUnit(value = "auto", unit = ((_b) => (_b = ((_a) => (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config)()) == null ? void 0 : _b.unit)() ? ((_d) => (_d = ((_c) => (_c = uni == null ? void 0 : uni.$uv) == null ? void 0 : _c.config)()) == null ? void 0 : _d.unit)() : "px") {
    value = String(value);
    return number(value) ? `${value}${unit}` : value;
  }
  function deepClone(obj, cache = /* @__PURE__ */ new WeakMap()) {
    if (obj === null || typeof obj !== "object")
      return obj;
    if (cache.has(obj))
      return cache.get(obj);
    let clone;
    if (obj instanceof Date) {
      clone = new Date(obj.getTime());
    } else if (obj instanceof RegExp) {
      clone = new RegExp(obj);
    } else if (obj instanceof Map) {
      clone = new Map(Array.from(obj, ([key, value]) => [key, deepClone(value, cache)]));
    } else if (obj instanceof Set) {
      clone = new Set(Array.from(obj, (value) => deepClone(value, cache)));
    } else if (Array.isArray(obj)) {
      clone = obj.map((value) => deepClone(value, cache));
    } else if (Object.prototype.toString.call(obj) === "[object Object]") {
      clone = Object.create(Object.getPrototypeOf(obj));
      cache.set(obj, clone);
      for (const [key, value] of Object.entries(obj)) {
        clone[key] = deepClone(value, cache);
      }
    } else {
      clone = Object.assign({}, obj);
    }
    cache.set(obj, clone);
    return clone;
  }
  function deepMerge(target = {}, source = {}) {
    target = deepClone(target);
    if (typeof target !== "object" || target === null || typeof source !== "object" || source === null)
      return target;
    const merged = Array.isArray(target) ? target.slice() : Object.assign({}, target);
    for (const prop in source) {
      if (!source.hasOwnProperty(prop))
        continue;
      const sourceValue = source[prop];
      const targetValue = merged[prop];
      if (sourceValue instanceof Date) {
        merged[prop] = new Date(sourceValue);
      } else if (sourceValue instanceof RegExp) {
        merged[prop] = new RegExp(sourceValue);
      } else if (sourceValue instanceof Map) {
        merged[prop] = new Map(sourceValue);
      } else if (sourceValue instanceof Set) {
        merged[prop] = new Set(sourceValue);
      } else if (typeof sourceValue === "object" && sourceValue !== null) {
        merged[prop] = deepMerge(targetValue, sourceValue);
      } else {
        merged[prop] = sourceValue;
      }
    }
    return merged;
  }
  function error(err) {
    {
      formatAppLog("error", "at uni_modules/uv-ui-tools/libs/function/index.js:250", `uvui\u63D0\u793A\uFF1A${err}`);
    }
  }
  function randomArray(array2 = []) {
    return array2.sort(() => Math.random() - 0.5);
  }
  if (!String.prototype.padStart) {
    String.prototype.padStart = function(maxLength, fillString = " ") {
      if (Object.prototype.toString.call(fillString) !== "[object String]") {
        throw new TypeError("fillString must be String");
      }
      const str = this;
      if (str.length >= maxLength)
        return String(str);
      const fillLength = maxLength - str.length;
      let times2 = Math.ceil(fillLength / fillString.length);
      while (times2 >>= 1) {
        fillString += fillString;
        if (times2 === 1) {
          fillString += fillString;
        }
      }
      return fillString.slice(0, fillLength) + str;
    };
  }
  function timeFormat(dateTime = null, formatStr = "yyyy-mm-dd") {
    let date2;
    if (!dateTime) {
      date2 = new Date();
    } else if (/^\d{10}$/.test(dateTime == null ? void 0 : dateTime.toString().trim())) {
      date2 = new Date(dateTime * 1e3);
    } else if (typeof dateTime === "string" && /^\d+$/.test(dateTime.trim())) {
      date2 = new Date(Number(dateTime));
    } else if (typeof dateTime === "string" && dateTime.includes("-") && !dateTime.includes("T")) {
      date2 = new Date(dateTime.replace(/-/g, "/"));
    } else {
      date2 = new Date(dateTime);
    }
    const timeSource = {
      "y": date2.getFullYear().toString(),
      "m": (date2.getMonth() + 1).toString().padStart(2, "0"),
      "d": date2.getDate().toString().padStart(2, "0"),
      "h": date2.getHours().toString().padStart(2, "0"),
      "M": date2.getMinutes().toString().padStart(2, "0"),
      "s": date2.getSeconds().toString().padStart(2, "0")
    };
    for (const key in timeSource) {
      const [ret] = new RegExp(`${key}+`).exec(formatStr) || [];
      if (ret) {
        const beginIndex = key === "y" && ret.length === 2 ? 2 : 0;
        formatStr = formatStr.replace(ret, timeSource[key].slice(beginIndex));
      }
    }
    return formatStr;
  }
  function timeFrom(timestamp = null, format = "yyyy-mm-dd") {
    if (timestamp == null)
      timestamp = Number(new Date());
    timestamp = parseInt(timestamp);
    if (timestamp.toString().length == 10)
      timestamp *= 1e3;
    let timer = new Date().getTime() - timestamp;
    timer = parseInt(timer / 1e3);
    let tips = "";
    switch (true) {
      case timer < 300:
        tips = "\u521A\u521A";
        break;
      case (timer >= 300 && timer < 3600):
        tips = `${parseInt(timer / 60)}\u5206\u949F\u524D`;
        break;
      case (timer >= 3600 && timer < 86400):
        tips = `${parseInt(timer / 3600)}\u5C0F\u65F6\u524D`;
        break;
      case (timer >= 86400 && timer < 2592e3):
        tips = `${parseInt(timer / 86400)}\u5929\u524D`;
        break;
      default:
        if (format === false) {
          if (timer >= 2592e3 && timer < 365 * 86400) {
            tips = `${parseInt(timer / (86400 * 30))}\u4E2A\u6708\u524D`;
          } else {
            tips = `${parseInt(timer / (86400 * 365))}\u5E74\u524D`;
          }
        } else {
          tips = timeFormat(timestamp, format);
        }
    }
    return tips;
  }
  function trim(str, pos = "both") {
    str = String(str);
    if (pos == "both") {
      return str.replace(/^\s+|\s+$/g, "");
    }
    if (pos == "left") {
      return str.replace(/^\s*/, "");
    }
    if (pos == "right") {
      return str.replace(/(\s*$)/g, "");
    }
    if (pos == "all") {
      return str.replace(/\s+/g, "");
    }
    return str;
  }
  function queryParams(data = {}, isPrefix = true, arrayFormat = "brackets") {
    const prefix = isPrefix ? "?" : "";
    const _result = [];
    if (["indices", "brackets", "repeat", "comma"].indexOf(arrayFormat) == -1)
      arrayFormat = "brackets";
    for (const key in data) {
      const value = data[key];
      if (["", void 0, null].indexOf(value) >= 0) {
        continue;
      }
      if (value.constructor === Array) {
        switch (arrayFormat) {
          case "indices":
            for (let i = 0; i < value.length; i++) {
              _result.push(`${key}[${i}]=${value[i]}`);
            }
            break;
          case "brackets":
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
            break;
          case "repeat":
            value.forEach((_value) => {
              _result.push(`${key}=${_value}`);
            });
            break;
          case "comma":
            let commaStr = "";
            value.forEach((_value) => {
              commaStr += (commaStr ? "," : "") + _value;
            });
            _result.push(`${key}=${commaStr}`);
            break;
          default:
            value.forEach((_value) => {
              _result.push(`${key}[]=${_value}`);
            });
        }
      } else {
        _result.push(`${key}=${value}`);
      }
    }
    return _result.length ? prefix + _result.join("&") : "";
  }
  function toast(title, duration = 2e3) {
    uni.showToast({
      title: String(title),
      icon: "none",
      duration
    });
  }
  function type2icon(type = "success", fill = false) {
    if (["primary", "info", "error", "warning", "success"].indexOf(type) == -1)
      type = "success";
    let iconName = "";
    switch (type) {
      case "primary":
        iconName = "info-circle";
        break;
      case "info":
        iconName = "info-circle";
        break;
      case "error":
        iconName = "close-circle";
        break;
      case "warning":
        iconName = "error-circle";
        break;
      case "success":
        iconName = "checkmark-circle";
        break;
      default:
        iconName = "checkmark-circle";
    }
    if (fill)
      iconName += "-fill";
    return iconName;
  }
  function priceFormat(number2, decimals = 0, decimalPoint = ".", thousandsSeparator = ",") {
    number2 = `${number2}`.replace(/[^0-9+-Ee.]/g, "");
    const n = !isFinite(+number2) ? 0 : +number2;
    const prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
    const sep = typeof thousandsSeparator === "undefined" ? "," : thousandsSeparator;
    const dec = typeof decimalPoint === "undefined" ? "." : decimalPoint;
    let s = "";
    s = (prec ? round(n, prec) + "" : `${Math.round(n)}`).split(".");
    const re = /(-?\d+)(\d{3})/;
    while (re.test(s[0])) {
      s[0] = s[0].replace(re, `$1${sep}$2`);
    }
    if ((s[1] || "").length < prec) {
      s[1] = s[1] || "";
      s[1] += new Array(prec - s[1].length + 1).join("0");
    }
    return s.join(dec);
  }
  function getDuration(value, unit = true) {
    const valueNum = parseInt(value);
    if (unit) {
      if (/s$/.test(value))
        return value;
      return value > 30 ? `${value}ms` : `${value}s`;
    }
    if (/ms$/.test(value))
      return valueNum;
    if (/s$/.test(value))
      return valueNum > 30 ? valueNum : valueNum * 1e3;
    return valueNum;
  }
  function padZero(value) {
    return `00${value}`.slice(-2);
  }
  function formValidate(instance, event) {
    const formItem = $parent.call(instance, "uv-form-item");
    const form = $parent.call(instance, "uv-form");
    if (formItem && form) {
      form.validateField(formItem.prop, () => {
      }, event);
    }
  }
  function getProperty(obj, key) {
    if (!obj) {
      return;
    }
    if (typeof key !== "string" || key === "") {
      return "";
    }
    if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      let firstObj = obj[keys[0]] || {};
      for (let i = 1; i < keys.length; i++) {
        if (firstObj) {
          firstObj = firstObj[keys[i]];
        }
      }
      return firstObj;
    }
    return obj[key];
  }
  function setProperty(obj, key, value) {
    if (!obj) {
      return;
    }
    const inFn = function(_obj, keys, v) {
      if (keys.length === 1) {
        _obj[keys[0]] = v;
        return;
      }
      while (keys.length > 1) {
        const k = keys[0];
        if (!_obj[k] || typeof _obj[k] !== "object") {
          _obj[k] = {};
        }
        keys.shift();
        inFn(_obj[k], keys, v);
      }
    };
    if (typeof key !== "string" || key === "")
      ;
    else if (key.indexOf(".") !== -1) {
      const keys = key.split(".");
      inFn(obj, keys, value);
    } else {
      obj[key] = value;
    }
  }
  function page() {
    var _a;
    const pages2 = getCurrentPages();
    const route2 = (_a = pages2[pages2.length - 1]) == null ? void 0 : _a.route;
    return `/${route2 ? route2 : ""}`;
  }
  function pages() {
    const pages2 = getCurrentPages();
    return pages2;
  }
  function getHistoryPage(back = 0) {
    const pages2 = getCurrentPages();
    const len = pages2.length;
    return pages2[len - 1 + back];
  }
  function setConfig({
    props: props2 = {},
    config: config2 = {},
    color = {},
    zIndex = {}
  }) {
    const {
      deepMerge: deepMerge2
    } = uni.$uv;
    uni.$uv.config = deepMerge2(uni.$uv.config, config2);
    uni.$uv.props = deepMerge2(uni.$uv.props, props2);
    uni.$uv.color = deepMerge2(uni.$uv.color, color);
    uni.$uv.zIndex = deepMerge2(uni.$uv.zIndex, zIndex);
  }
  var index = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    [Symbol.toStringTag]: "Module",
    range,
    getPx,
    sleep,
    os,
    sys,
    random,
    guid,
    $parent,
    addStyle,
    addUnit,
    deepClone,
    deepMerge,
    error,
    randomArray,
    timeFormat,
    timeFrom,
    trim,
    queryParams,
    toast,
    type2icon,
    priceFormat,
    getDuration,
    padZero,
    formValidate,
    getProperty,
    setProperty,
    page,
    pages,
    getHistoryPage,
    setConfig
  });
  class Router {
    constructor() {
      this.config = {
        type: "navigateTo",
        url: "",
        delta: 1,
        params: {},
        animationType: "pop-in",
        animationDuration: 300,
        intercept: false,
        events: {}
      };
      this.route = this.route.bind(this);
    }
    addRootPath(url2) {
      return url2[0] === "/" ? url2 : `/${url2}`;
    }
    mixinParam(url2, params) {
      url2 = url2 && this.addRootPath(url2);
      let query = "";
      if (/.*\/.*\?.*=.*/.test(url2)) {
        query = queryParams(params, false);
        return url2 += `&${query}`;
      }
      query = queryParams(params);
      return url2 += query;
    }
    async route(options = {}, params = {}) {
      let mergeConfig = {};
      if (typeof options === "string") {
        mergeConfig.url = this.mixinParam(options, params);
        mergeConfig.type = "navigateTo";
      } else {
        mergeConfig = deepMerge(this.config, options);
        mergeConfig.url = this.mixinParam(options.url, options.params);
      }
      if (mergeConfig.url === page())
        return;
      if (params.intercept) {
        mergeConfig.intercept = params.intercept;
      }
      mergeConfig.params = params;
      mergeConfig = deepMerge(this.config, mergeConfig);
      if (typeof mergeConfig.intercept === "function") {
        const isNext = await new Promise((resolve, reject) => {
          mergeConfig.intercept(mergeConfig, resolve);
        });
        isNext && this.openPage(mergeConfig);
      } else {
        this.openPage(mergeConfig);
      }
    }
    openPage(config2) {
      const {
        url: url2,
        type,
        delta,
        animationType,
        animationDuration,
        events
      } = config2;
      if (config2.type == "navigateTo" || config2.type == "to") {
        uni.navigateTo({
          url: url2,
          animationType,
          animationDuration,
          events
        });
      }
      if (config2.type == "redirectTo" || config2.type == "redirect") {
        uni.redirectTo({
          url: url2
        });
      }
      if (config2.type == "switchTab" || config2.type == "tab") {
        uni.switchTab({
          url: url2
        });
      }
      if (config2.type == "reLaunch" || config2.type == "launch") {
        uni.reLaunch({
          url: url2
        });
      }
      if (config2.type == "navigateBack" || config2.type == "back") {
        uni.navigateBack({
          delta
        });
      }
    }
  }
  var route = new Router().route;
  let timeout = null;
  function debounce(func2, wait = 500, immediate = false) {
    if (timeout !== null)
      clearTimeout(timeout);
    if (immediate) {
      const callNow = !timeout;
      timeout = setTimeout(() => {
        timeout = null;
      }, wait);
      if (callNow)
        typeof func2 === "function" && func2();
    } else {
      timeout = setTimeout(() => {
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  let flag;
  function throttle(func2, wait = 500, immediate = true) {
    if (immediate) {
      if (!flag) {
        flag = true;
        typeof func2 === "function" && func2();
        setTimeout(() => {
          flag = false;
        }, wait);
      }
    } else if (!flag) {
      flag = true;
      setTimeout(() => {
        flag = false;
        typeof func2 === "function" && func2();
      }, wait);
    }
  }
  var mixin = {
    props: {
      customStyle: {
        type: [Object, String],
        default: () => ({})
      },
      customClass: {
        type: String,
        default: ""
      },
      url: {
        type: String,
        default: ""
      },
      linkType: {
        type: String,
        default: "navigateTo"
      }
    },
    data() {
      return {};
    },
    onLoad() {
      this.$uv.getRect = this.$uvGetRect;
    },
    created() {
      this.$uv.getRect = this.$uvGetRect;
    },
    computed: {
      $uv() {
        var _a, _b;
        return __spreadProps(__spreadValues({}, index), {
          test,
          route,
          debounce,
          throttle,
          unit: (_b = (_a = uni == null ? void 0 : uni.$uv) == null ? void 0 : _a.config) == null ? void 0 : _b.unit
        });
      },
      bem() {
        return function(name, fixed, change) {
          const prefix = `uv-${name}--`;
          const classes = {};
          if (fixed) {
            fixed.map((item) => {
              classes[prefix + this[item]] = true;
            });
          }
          if (change) {
            change.map((item) => {
              this[item] ? classes[prefix + item] = this[item] : delete classes[prefix + item];
            });
          }
          return Object.keys(classes);
        };
      }
    },
    methods: {
      openPage(urlKey = "url") {
        const url2 = this[urlKey];
        if (url2) {
          uni[this.linkType]({
            url: url2
          });
        }
      },
      $uvGetRect(selector, all) {
        return new Promise((resolve) => {
          uni.createSelectorQuery().in(this)[all ? "selectAll" : "select"](selector).boundingClientRect((rect) => {
            if (all && Array.isArray(rect) && rect.length) {
              resolve(rect);
            }
            if (!all && rect) {
              resolve(rect);
            }
          }).exec();
        });
      },
      getParentData(parentName = "") {
        if (!this.parent)
          this.parent = {};
        this.parent = this.$uv.$parent.call(this, parentName);
        if (this.parent.children) {
          this.parent.children.indexOf(this) === -1 && this.parent.children.push(this);
        }
        if (this.parent && this.parentData) {
          Object.keys(this.parentData).map((key) => {
            this.parentData[key] = this.parent[key];
          });
        }
      },
      preventEvent(e) {
        e && typeof e.stopPropagation === "function" && e.stopPropagation();
      },
      noop(e) {
        this.preventEvent(e);
      }
    },
    onReachBottom() {
      uni.$emit("uvOnReachBottom");
    },
    beforeDestroy() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    },
    unmounted() {
      if (this.parent && array(this.parent.children)) {
        const childrenList = this.parent.children;
        childrenList.map((child, index2) => {
          if (child === this) {
            childrenList.splice(index2, 1);
          }
        });
      }
    }
  };
  var icons = {
    "uvicon-level": "e68f",
    "uvicon-checkbox-mark": "e659",
    "uvicon-folder": "e694",
    "uvicon-movie": "e67c",
    "uvicon-star-fill": "e61e",
    "uvicon-star": "e618",
    "uvicon-phone-fill": "e6ac",
    "uvicon-phone": "e6ba",
    "uvicon-apple-fill": "e635",
    "uvicon-backspace": "e64d",
    "uvicon-attach": "e640",
    "uvicon-empty-data": "e671",
    "uvicon-empty-address": "e68a",
    "uvicon-empty-favor": "e662",
    "uvicon-empty-car": "e657",
    "uvicon-empty-order": "e66b",
    "uvicon-empty-list": "e672",
    "uvicon-empty-search": "e677",
    "uvicon-empty-permission": "e67d",
    "uvicon-empty-news": "e67e",
    "uvicon-empty-history": "e685",
    "uvicon-empty-coupon": "e69b",
    "uvicon-empty-page": "e60e",
    "uvicon-empty-wifi-off": "e6cc",
    "uvicon-reload": "e627",
    "uvicon-order": "e695",
    "uvicon-server-man": "e601",
    "uvicon-search": "e632",
    "uvicon-more-dot-fill": "e66f",
    "uvicon-scan": "e631",
    "uvicon-map": "e665",
    "uvicon-map-fill": "e6a8",
    "uvicon-tags": "e621",
    "uvicon-tags-fill": "e613",
    "uvicon-eye": "e664",
    "uvicon-eye-fill": "e697",
    "uvicon-eye-off": "e69c",
    "uvicon-eye-off-outline": "e688",
    "uvicon-mic": "e66d",
    "uvicon-mic-off": "e691",
    "uvicon-calendar": "e65c",
    "uvicon-trash": "e623",
    "uvicon-trash-fill": "e6ce",
    "uvicon-play-left": "e6bf",
    "uvicon-play-right": "e6b3",
    "uvicon-minus": "e614",
    "uvicon-plus": "e625",
    "uvicon-info-circle": "e69f",
    "uvicon-info-circle-fill": "e6a7",
    "uvicon-question-circle": "e622",
    "uvicon-question-circle-fill": "e6bc",
    "uvicon-close": "e65a",
    "uvicon-checkmark": "e64a",
    "uvicon-checkmark-circle": "e643",
    "uvicon-checkmark-circle-fill": "e668",
    "uvicon-setting": "e602",
    "uvicon-setting-fill": "e6d0",
    "uvicon-heart": "e6a2",
    "uvicon-heart-fill": "e68b",
    "uvicon-camera": "e642",
    "uvicon-camera-fill": "e650",
    "uvicon-more-circle": "e69e",
    "uvicon-more-circle-fill": "e684",
    "uvicon-chat": "e656",
    "uvicon-chat-fill": "e63f",
    "uvicon-bag": "e647",
    "uvicon-error-circle": "e66e",
    "uvicon-error-circle-fill": "e655",
    "uvicon-close-circle": "e64e",
    "uvicon-close-circle-fill": "e666",
    "uvicon-share": "e629",
    "uvicon-share-fill": "e6bb",
    "uvicon-share-square": "e6c4",
    "uvicon-shopping-cart": "e6cb",
    "uvicon-shopping-cart-fill": "e630",
    "uvicon-bell": "e651",
    "uvicon-bell-fill": "e604",
    "uvicon-list": "e690",
    "uvicon-list-dot": "e6a9",
    "uvicon-zhifubao-circle-fill": "e617",
    "uvicon-weixin-circle-fill": "e6cd",
    "uvicon-weixin-fill": "e620",
    "uvicon-qq-fill": "e608",
    "uvicon-qq-circle-fill": "e6b9",
    "uvicon-moments-circel-fill": "e6c2",
    "uvicon-moments": "e6a0",
    "uvicon-car": "e64f",
    "uvicon-car-fill": "e648",
    "uvicon-warning-fill": "e6c7",
    "uvicon-warning": "e6c1",
    "uvicon-clock-fill": "e64b",
    "uvicon-clock": "e66c",
    "uvicon-edit-pen": "e65d",
    "uvicon-edit-pen-fill": "e679",
    "uvicon-email": "e673",
    "uvicon-email-fill": "e683",
    "uvicon-minus-circle": "e6a5",
    "uvicon-plus-circle": "e603",
    "uvicon-plus-circle-fill": "e611",
    "uvicon-file-text": "e687",
    "uvicon-file-text-fill": "e67f",
    "uvicon-pushpin": "e6d1",
    "uvicon-pushpin-fill": "e6b6",
    "uvicon-grid": "e68c",
    "uvicon-grid-fill": "e698",
    "uvicon-play-circle": "e6af",
    "uvicon-play-circle-fill": "e62a",
    "uvicon-pause-circle-fill": "e60c",
    "uvicon-pause": "e61c",
    "uvicon-pause-circle": "e696",
    "uvicon-gift-fill": "e6b0",
    "uvicon-gift": "e680",
    "uvicon-kefu-ermai": "e660",
    "uvicon-server-fill": "e610",
    "uvicon-coupon-fill": "e64c",
    "uvicon-coupon": "e65f",
    "uvicon-integral": "e693",
    "uvicon-integral-fill": "e6b1",
    "uvicon-home-fill": "e68e",
    "uvicon-home": "e67b",
    "uvicon-account": "e63a",
    "uvicon-account-fill": "e653",
    "uvicon-thumb-down-fill": "e628",
    "uvicon-thumb-down": "e60a",
    "uvicon-thumb-up": "e612",
    "uvicon-thumb-up-fill": "e62c",
    "uvicon-lock-fill": "e6a6",
    "uvicon-lock-open": "e68d",
    "uvicon-lock-opened-fill": "e6a1",
    "uvicon-lock": "e69d",
    "uvicon-red-packet": "e6c3",
    "uvicon-photo-fill": "e6b4",
    "uvicon-photo": "e60d",
    "uvicon-volume-off-fill": "e6c8",
    "uvicon-volume-off": "e6bd",
    "uvicon-volume-fill": "e624",
    "uvicon-volume": "e605",
    "uvicon-download": "e670",
    "uvicon-arrow-up-fill": "e636",
    "uvicon-arrow-down-fill": "e638",
    "uvicon-play-left-fill": "e6ae",
    "uvicon-play-right-fill": "e6ad",
    "uvicon-arrow-downward": "e634",
    "uvicon-arrow-leftward": "e63b",
    "uvicon-arrow-rightward": "e644",
    "uvicon-arrow-upward": "e641",
    "uvicon-arrow-down": "e63e",
    "uvicon-arrow-right": "e63c",
    "uvicon-arrow-left": "e646",
    "uvicon-arrow-up": "e633",
    "uvicon-skip-back-left": "e6c5",
    "uvicon-skip-forward-right": "e61f",
    "uvicon-arrow-left-double": "e637",
    "uvicon-man": "e675",
    "uvicon-woman": "e626",
    "uvicon-en": "e6b8",
    "uvicon-twitte": "e607",
    "uvicon-twitter-circle-fill": "e6cf"
  };
  var props$1 = {
    props: __spreadValues({
      name: {
        type: String,
        default: ""
      },
      color: {
        type: String,
        default: "#606266"
      },
      size: {
        type: [String, Number],
        default: "16px"
      },
      bold: {
        type: Boolean,
        default: false
      },
      index: {
        type: [String, Number],
        default: null
      },
      hoverClass: {
        type: String,
        default: ""
      },
      customPrefix: {
        type: String,
        default: "uvicon"
      },
      label: {
        type: [String, Number],
        default: ""
      },
      labelPos: {
        type: String,
        default: "right"
      },
      labelSize: {
        type: [String, Number],
        default: "15px"
      },
      labelColor: {
        type: String,
        default: "#606266"
      },
      space: {
        type: [String, Number],
        default: "3px"
      },
      imgMode: {
        type: String,
        default: "aspectFit"
      },
      width: {
        type: [String, Number],
        default: ""
      },
      height: {
        type: [String, Number],
        default: ""
      },
      top: {
        type: [String, Number],
        default: 0
      },
      stop: {
        type: Boolean,
        default: false
      }
    }, (_f = (_e = uni.$uv) == null ? void 0 : _e.props) == null ? void 0 : _f.icon)
  };
  const _sfc_main$3 = {
    name: "uv-icon",
    emits: ["click"],
    mixins: [mpMixin, mixin, props$1],
    data() {
      return {
        colorType: [
          "primary",
          "success",
          "info",
          "error",
          "warning"
        ]
      };
    },
    computed: {
      uClasses() {
        let classes = [];
        classes.push(this.customPrefix);
        classes.push(this.customPrefix + "-" + this.name);
        if (this.color && this.colorType.includes(this.color))
          classes.push("uv-icon__icon--" + this.color);
        return classes;
      },
      iconStyle() {
        let style = {};
        style = {
          fontSize: this.$uv.addUnit(this.size),
          lineHeight: this.$uv.addUnit(this.size),
          fontWeight: this.bold ? "bold" : "normal",
          top: this.$uv.addUnit(this.top)
        };
        if (this.color && !this.colorType.includes(this.color))
          style.color = this.color;
        return style;
      },
      isImg() {
        const isBase64 = this.name.indexOf("data:") > -1 && this.name.indexOf("base64") > -1;
        return this.name.indexOf("/") !== -1 || isBase64;
      },
      imgStyle() {
        let style = {};
        style.width = this.width ? this.$uv.addUnit(this.width) : this.$uv.addUnit(this.size);
        style.height = this.height ? this.$uv.addUnit(this.height) : this.$uv.addUnit(this.size);
        return style;
      },
      icon() {
        const code2 = icons["uvicon-" + this.name];
        return code2 ? unescape(`%u${code2}`) : ["uvicon"].indexOf(this.customPrefix) > -1 ? this.name : "";
      }
    },
    methods: {
      clickHandler(e) {
        this.$emit("click", this.index);
        this.stop && this.preventEvent(e);
      }
    }
  };
  function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
    return vue.openBlock(), vue.createElementBlock("view", {
      class: vue.normalizeClass(["uv-icon", ["uv-icon--" + _ctx.labelPos]]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.clickHandler && $options.clickHandler(...args))
    }, [
      $options.isImg ? (vue.openBlock(), vue.createElementBlock("image", {
        key: 0,
        class: "uv-icon__img",
        src: _ctx.name,
        mode: _ctx.imgMode,
        style: vue.normalizeStyle([$options.imgStyle, _ctx.$uv.addStyle(_ctx.customStyle)])
      }, null, 12, ["src", "mode"])) : (vue.openBlock(), vue.createElementBlock("text", {
        key: 1,
        class: vue.normalizeClass(["uv-icon__icon", $options.uClasses]),
        style: vue.normalizeStyle([$options.iconStyle, _ctx.$uv.addStyle(_ctx.customStyle)]),
        "hover-class": _ctx.hoverClass
      }, vue.toDisplayString($options.icon), 15, ["hover-class"])),
      vue.createCommentVNode(' \u8FD9\u91CC\u8FDB\u884C\u7A7A\u5B57\u7B26\u4E32\u5224\u65AD\uFF0C\u5982\u679C\u4EC5\u4EC5\u662Fv-if="label"\uFF0C\u53EF\u80FD\u4F1A\u51FA\u73B0\u4F20\u90120\u7684\u65F6\u5019\uFF0C\u7ED3\u679C\u4E5F\u65E0\u6CD5\u663E\u793A '),
      _ctx.label !== "" ? (vue.openBlock(), vue.createElementBlock("text", {
        key: 2,
        class: "uv-icon__label",
        style: vue.normalizeStyle({
          color: _ctx.labelColor,
          fontSize: _ctx.$uv.addUnit(_ctx.labelSize),
          marginLeft: _ctx.labelPos == "right" ? _ctx.$uv.addUnit(_ctx.space) : 0,
          marginTop: _ctx.labelPos == "bottom" ? _ctx.$uv.addUnit(_ctx.space) : 0,
          marginRight: _ctx.labelPos == "left" ? _ctx.$uv.addUnit(_ctx.space) : 0,
          marginBottom: _ctx.labelPos == "top" ? _ctx.$uv.addUnit(_ctx.space) : 0
        })
      }, vue.toDisplayString(_ctx.label), 5)) : vue.createCommentVNode("v-if", true)
    ], 2);
  }
  var __easycom_0 = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$1], ["__scopeId", "data-v-646dc59e"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uv-icon/components/uv-icon/uv-icon.vue"]]);
  var props = {
    props: __spreadValues({
      icon: {
        type: String,
        default: ""
      },
      text: {
        type: String,
        default: ""
      },
      textColor: {
        type: String,
        default: "#c0c4cc"
      },
      textSize: {
        type: [String, Number],
        default: 14
      },
      iconColor: {
        type: String,
        default: "#c0c4cc"
      },
      iconSize: {
        type: [String, Number],
        default: 90
      },
      mode: {
        type: String,
        default: "data"
      },
      width: {
        type: [String, Number],
        default: 160
      },
      height: {
        type: [String, Number],
        default: 160
      },
      show: {
        type: Boolean,
        default: true
      },
      marginTop: {
        type: [String, Number],
        default: 0
      }
    }, (_h = (_g = uni.$uv) == null ? void 0 : _g.props) == null ? void 0 : _h.empty)
  };
  const _sfc_main$2 = {
    name: "uv-empty",
    mixins: [mpMixin, mixin, props],
    data() {
      return {
        icons: {
          car: "\u8D2D\u7269\u8F66\u4E3A\u7A7A",
          page: "\u9875\u9762\u4E0D\u5B58\u5728",
          search: "\u6CA1\u6709\u641C\u7D22\u7ED3\u679C",
          address: "\u6CA1\u6709\u6536\u8D27\u5730\u5740",
          "wifi-off": "\u6CA1\u6709WiFi",
          order: "\u8BA2\u5355\u4E3A\u7A7A",
          coupon: "\u6CA1\u6709\u4F18\u60E0\u5238",
          favor: "\u6682\u65E0\u6536\u85CF",
          permission: "\u65E0\u6743\u9650",
          history: "\u65E0\u5386\u53F2\u8BB0\u5F55",
          news: "\u65E0\u65B0\u95FB\u5217\u8868",
          message: "\u6D88\u606F\u5217\u8868\u4E3A\u7A7A",
          list: "\u5217\u8868\u4E3A\u7A7A",
          data: "\u6570\u636E\u4E3A\u7A7A",
          comment: "\u6682\u65E0\u8BC4\u8BBA"
        }
      };
    },
    computed: {
      emptyStyle() {
        const style = {};
        style.marginTop = this.$uv.addUnit(this.marginTop);
        return this.$uv.deepMerge(style, this.$uv.addStyle(this.customStyle));
      },
      textStyle() {
        const style = {};
        style.color = this.textColor;
        style.fontSize = this.$uv.addUnit(this.textSize);
        return style;
      },
      isImg() {
        const isBase64 = this.icon.indexOf("data:") > -1 && this.icon.indexOf("base64") > -1;
        return this.icon.indexOf("/") !== -1 || isBase64;
      }
    }
  };
  function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_uv_icon = resolveEasycom(vue.resolveDynamicComponent("uv-icon"), __easycom_0);
    return _ctx.show ? (vue.openBlock(), vue.createElementBlock("view", {
      key: 0,
      class: "uv-empty",
      style: vue.normalizeStyle([$options.emptyStyle])
    }, [
      !$options.isImg ? (vue.openBlock(), vue.createBlock(_component_uv_icon, {
        key: 0,
        name: _ctx.mode === "message" ? "chat" : `empty-${_ctx.mode}`,
        size: _ctx.iconSize,
        color: _ctx.iconColor,
        "margin-top": "14"
      }, null, 8, ["name", "size", "color"])) : (vue.openBlock(), vue.createElementBlock("image", {
        key: 1,
        style: vue.normalizeStyle({
          width: _ctx.$uv.addUnit(_ctx.width),
          height: _ctx.$uv.addUnit(_ctx.height)
        }),
        src: _ctx.icon,
        mode: "widthFix"
      }, null, 12, ["src"])),
      vue.createElementVNode("text", {
        class: "uv-empty__text",
        style: vue.normalizeStyle([$options.textStyle])
      }, vue.toDisplayString(_ctx.text ? _ctx.text : $data.icons[_ctx.mode]), 5),
      vue.createElementVNode("view", { class: "uv-empty__wrap" }, [
        vue.renderSlot(_ctx.$slots, "default", {}, void 0, true)
      ])
    ], 4)) : vue.createCommentVNode("v-if", true);
  }
  var __easycom_2 = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render], ["__scopeId", "data-v-099b9c0f"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/uv-empty/components/uv-empty/uv-empty.vue"]]);
  const _sfc_main$1 = {
    setup(__props) {
      const queryParams2 = vue.ref({
        pageNum: 1,
        pageSize: 12,
        keyword: ""
      });
      const historySearch = vue.ref(uni.getStorageSync("historySearch") || []);
      const recommendList = vue.ref(["\u7F8E\u5973", "\u5E05\u54E5", "\u5BA0\u7269", "\u5361\u901A"]);
      const noData = vue.ref(false);
      const noSearch = vue.ref(false);
      const classList = vue.ref([]);
      const onSearch = () => {
        uni.showLoading();
        historySearch.value = [.../* @__PURE__ */ new Set([queryParams2.value.keyword, ...historySearch.value])].slice(0, 10);
        uni.setStorageSync("historySearch", historySearch.value);
        initParams(queryParams2.value.keyword);
        searchData();
        formatAppLog("log", "at pages/search/search.vue:97", queryParams2.value.keyword);
      };
      const onClear = () => {
        initParams();
      };
      const clickTab = (value) => {
        initParams(value);
        onSearch();
      };
      const removeHistory = () => {
        uni.showModal({
          title: "\u662F\u5426\u6E05\u7A7A\u5386\u53F2\u641C\u7D22\uFF1F",
          success: (res) => {
            if (res.confirm) {
              uni.removeStorageSync("historySearch");
              historySearch.value = [];
            }
          }
        });
      };
      const searchData = async () => {
        try {
          let res = await apiSearchData(queryParams2.value);
          classList.value = [...classList.value, ...res.data];
          uni.setStorageSync("storgClassList", classList.value);
          if (queryParams2.value.pageSize > res.data.length)
            noData.value = true;
          if (res.data.length == 0 && classList.value.length == 0)
            noSearch.value = true;
          formatAppLog("log", "at pages/search/search.vue:135", res);
        } finally {
          uni.hideLoading();
        }
      };
      const initParams = (value = "") => {
        classList.value = [];
        noData.value = false;
        noSearch.value = false;
        queryParams2.value = {
          pageNum: 1,
          pageSize: 12,
          keyword: value || ""
        };
      };
      onReachBottom(() => {
        if (noData.value)
          return;
        queryParams2.value.pageNum++;
        searchData();
      });
      onUnload(() => {
        uni.removeStorageSync("storgClassList", classList.value);
      });
      return (_ctx, _cache) => {
        const _component_uni_search_bar = resolveEasycom(vue.resolveDynamicComponent("uni-search-bar"), __easycom_0$1);
        const _component_uni_icons = resolveEasycom(vue.resolveDynamicComponent("uni-icons"), __easycom_1$2);
        const _component_uv_empty = resolveEasycom(vue.resolveDynamicComponent("uv-empty"), __easycom_2);
        const _component_uni_load_more = resolveEasycom(vue.resolveDynamicComponent("uni-load-more"), __easycom_3$1);
        return vue.openBlock(), vue.createElementBlock("view", { class: "searchLayout" }, [
          vue.createElementVNode("view", { class: "search" }, [
            vue.createVNode(_component_uni_search_bar, {
              onConfirm: onSearch,
              onCancel: onClear,
              onClear,
              focus: "",
              placeholder: "\u641C\u7D22",
              modelValue: queryParams2.value.keyword,
              "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => queryParams2.value.keyword = $event)
            }, null, 8, ["modelValue"])
          ]),
          !classList.value.length || noSearch.value ? (vue.openBlock(), vue.createElementBlock("view", { key: 0 }, [
            historySearch.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "history"
            }, [
              vue.createElementVNode("view", { class: "topTitle" }, [
                vue.createElementVNode("view", { class: "text" }, "\u6700\u8FD1\u641C\u7D22"),
                vue.createElementVNode("view", {
                  class: "icon",
                  onClick: removeHistory
                }, [
                  vue.createVNode(_component_uni_icons, {
                    type: "trash",
                    size: "25"
                  })
                ])
              ]),
              vue.createElementVNode("view", { class: "tabs" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(historySearch.value, (tab) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "tab",
                    key: tab,
                    onClick: ($event) => clickTab(tab)
                  }, vue.toDisplayString(tab), 9, ["onClick"]);
                }), 128))
              ])
            ])) : vue.createCommentVNode("v-if", true),
            vue.createElementVNode("view", { class: "recommend" }, [
              vue.createElementVNode("view", { class: "topTitle" }, [
                vue.createElementVNode("view", { class: "text" }, "\u70ED\u95E8\u641C\u7D22")
              ]),
              vue.createElementVNode("view", { class: "tabs" }, [
                (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(recommendList.value, (tab) => {
                  return vue.openBlock(), vue.createElementBlock("view", {
                    class: "tab",
                    key: tab,
                    onClick: ($event) => clickTab(tab)
                  }, vue.toDisplayString(tab), 9, ["onClick"]);
                }), 128))
              ])
            ])
          ])) : vue.createCommentVNode("v-if", true),
          noSearch.value ? (vue.openBlock(), vue.createElementBlock("view", {
            key: 1,
            class: "noSearch"
          }, [
            vue.createVNode(_component_uv_empty, {
              mode: "search",
              icon: "http://cdn.uviewui.com/uview/empty/search.png"
            })
          ])) : (vue.openBlock(), vue.createElementBlock("view", { key: 2 }, [
            vue.createElementVNode("view", { class: "list" }, [
              (vue.openBlock(true), vue.createElementBlock(vue.Fragment, null, vue.renderList(classList.value, (item) => {
                return vue.openBlock(), vue.createElementBlock("navigator", {
                  url: `/pages/preview/preview?id=${item._id}`,
                  class: "item",
                  key: item._id
                }, [
                  vue.createElementVNode("image", {
                    src: item.smallPicurl,
                    mode: "aspectFill"
                  }, null, 8, ["src"])
                ], 8, ["url"]);
              }), 128))
            ]),
            noData.value || classList.value.length ? (vue.openBlock(), vue.createElementBlock("view", {
              key: 0,
              class: "loadingLayout"
            }, [
              vue.createVNode(_component_uni_load_more, {
                status: noData.value ? "noMore" : "loading"
              }, null, 8, ["status"])
            ])) : vue.createCommentVNode("v-if", true)
          ]))
        ]);
      };
    }
  };
  var PagesSearchSearch = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["__scopeId", "data-v-4cedc0c6"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/search/search.vue"]]);
  __definePage("pages/index/index", PagesIndexIndex);
  __definePage("pages/classify/classify", PagesClassifyClassify);
  __definePage("pages/user/user", PagesUserUser);
  __definePage("pages/classlist/classlist", PagesClasslistClasslist);
  __definePage("pages/preview/preview", PagesPreviewPreview);
  __definePage("pages/notice/notice", PagesNoticeNotice);
  __definePage("pages/notice/detail", PagesNoticeDetail);
  __definePage("pages/search/search", PagesSearchSearch);
  const _sfc_main = {
    onLaunch: function() {
      formatAppLog("log", "at App.vue:4", "App Launch");
    },
    onShow: function() {
      formatAppLog("log", "at App.vue:7", "App Show");
    },
    onHide: function() {
      formatAppLog("log", "at App.vue:10", "App Hide");
    }
  };
  var App = /* @__PURE__ */ _export_sfc(_sfc_main, [["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/App.vue"]]);
  function createApp() {
    const app = vue.createVueApp(App);
    return {
      app
    };
  }
  const { app: __app__, Vuex: __Vuex__, Pinia: __Pinia__ } = createApp();
  uni.Vuex = __Vuex__;
  uni.Pinia = __Pinia__;
  __app__.provide("__globalStyles", __uniConfig.styles);
  __app__._component.mpType = "app";
  __app__._component.render = () => {
  };
  __app__.mount("#app");
})(uni.VueShared, Vue);
