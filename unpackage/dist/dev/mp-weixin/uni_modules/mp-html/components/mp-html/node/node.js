"use strict";
var common_vendor = require("../../../../../common/vendor.js");
var block0 = {};
const node = () => Promise.resolve().then(function() {
  return QzovVXNlcnMvU2h1bi9EZXNrdG9wL3Z1ZS91bmlhcHAvd2FsbHBhcGVyLXlpbGFuL3VuaV9tb2R1bGVzL21wLWh0bWwvY29tcG9uZW50cy9tcC1odG1sL25vZGUvbm9kZS52dWU;
});
const _sfc_main = {
  name: "node",
  options: {
    virtualHost: true
  },
  data() {
    return {
      ctrl: {},
      isiOS: common_vendor.index.getSystemInfoSync().system.includes("iOS")
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
  components: {
    node
  },
  mounted() {
    this.$nextTick(() => {
      for (this.root = this.$parent; this.root.$options.name !== "mp-html"; this.root = this.root.$parent)
        ;
    });
  },
  beforeDestroy() {
  },
  methods: {
    toJSON() {
      return this;
    },
    play(e) {
      this.root.$emit("play");
      if (this.root.pauseVideo) {
        let flag = false;
        const id = e.target.id;
        for (let i = this.root._videos.length; i--; ) {
          if (this.root._videos[i].id === id) {
            flag = true;
          } else {
            this.root._videos[i].pause();
          }
        }
        if (!flag) {
          const ctx = common_vendor.index.createVideoContext(id, this);
          ctx.id = id;
          if (this.root.playbackRate) {
            ctx.playbackRate(this.root.playbackRate);
          }
          this.root._videos.push(ctx);
        }
      }
    },
    imgTap(e) {
      const node2 = this.childs[e.currentTarget.dataset.i];
      if (node2.a) {
        this.linkTap(node2.a);
        return;
      }
      if (node2.attrs.ignore)
        return;
      this.root.$emit("imgtap", node2.attrs);
      if (this.root.previewImg) {
        common_vendor.index.previewImage({
          showmenu: this.root.showImgMenu,
          current: parseInt(node2.attrs.i),
          urls: this.root.imgList
        });
      }
    },
    imgLongTap(e) {
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
            common_vendor.index.setClipboardData({
              data: href,
              success: () => common_vendor.index.showToast({
                title: "\u94FE\u63A5\u5DF2\u590D\u5236"
              })
            });
          }
        } else {
          common_vendor.index.navigateTo({
            url: href,
            fail() {
              common_vendor.index.switchTab({
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
        let index = (this.ctrl[i] || 0) + 1;
        if (index > node2.src.length) {
          index = 0;
        }
        if (index < node2.src.length) {
          this.$set(this.ctrl, i, index);
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
if (!Array) {
  const _component_node = common_vendor.resolveComponent("node");
  _component_node();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.f($props.childs, (n, i, i0) => {
      return common_vendor.e({
        a: n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0)
      }, n.name === "img" && !n.t && ($props.opts[1] && !$data.ctrl[i] || $data.ctrl[i] < 0) ? {
        b: common_vendor.s(n.attrs.style),
        c: $data.ctrl[i] < 0 ? $props.opts[2] : $props.opts[1]
      } : {}, {
        d: n.name === "img" && n.t
      }, n.name === "img" && n.t ? {
        e: common_vendor.s("display:" + n.t),
        f: [{
          attrs: {
            style: n.attrs.style || "",
            src: n.attrs.src
          },
          name: "img"
        }],
        g: i,
        h: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args))
      } : n.name === "img" ? {
        j: n.attrs.id,
        k: common_vendor.n("_img " + n.attrs.class),
        l: common_vendor.s(($data.ctrl[i] === -1 ? "display:none;" : "") + "width:" + ($data.ctrl[i] || 1) + "px;height:1px;" + n.attrs.style),
        m: n.attrs.src,
        n: !n.h ? "widthFix" : !n.w ? "heightFix" : n.m || "scaleToFill",
        o: $props.opts[0],
        p: n.webp,
        q: $props.opts[3] && !n.attrs.ignore,
        r: !$props.opts[3] || n.attrs.ignore,
        s: i,
        t: common_vendor.o((...args) => $options.imgLoad && $options.imgLoad(...args)),
        v: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args)),
        w: common_vendor.o((...args) => $options.imgTap && $options.imgTap(...args)),
        x: common_vendor.o((...args) => $options.imgLongTap && $options.imgLongTap(...args))
      } : n.text ? {
        z: common_vendor.t(n.text),
        A: $props.opts[4] == "force" && $data.isiOS
      } : n.name === "br" ? {} : n.name === "a" ? {
        D: "13a21180-0-" + i0,
        E: common_vendor.p({
          name: "span",
          childs: n.children,
          opts: $props.opts
        }),
        F: n.attrs.id,
        G: common_vendor.n((n.attrs.href ? "_a " : "") + n.attrs.class),
        H: common_vendor.s("display:inline;" + n.attrs.style),
        I: i,
        J: common_vendor.o((...args) => $options.linkTap && $options.linkTap(...args))
      } : n.name === "video" ? {
        L: n.attrs.id,
        M: common_vendor.n(n.attrs.class),
        N: common_vendor.s(n.attrs.style),
        O: n.attrs.autoplay,
        P: n.attrs.controls,
        Q: n.attrs.loop,
        R: n.attrs.muted,
        S: n.attrs["object-fit"],
        T: n.attrs.poster,
        U: n.src[$data.ctrl[i] || 0],
        V: i,
        W: common_vendor.o((...args) => $options.play && $options.play(...args)),
        X: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "audio" ? {
        Z: n.attrs.id,
        aa: common_vendor.n(n.attrs.class),
        ab: common_vendor.s(n.attrs.style),
        ac: n.attrs.author,
        ad: n.attrs.controls,
        ae: n.attrs.loop,
        af: n.attrs.name,
        ag: n.attrs.poster,
        ah: n.src[$data.ctrl[i] || 0],
        ai: i,
        aj: common_vendor.o((...args) => $options.play && $options.play(...args)),
        ak: common_vendor.o((...args) => $options.mediaError && $options.mediaError(...args))
      } : n.name === "table" && n.c || n.name === "li" ? common_vendor.e({
        am: n.name === "li"
      }, n.name === "li" ? {
        an: "13a21180-1-" + i0,
        ao: common_vendor.p({
          childs: n.children,
          opts: $props.opts
        })
      } : {
        ap: common_vendor.f(n.children, (tbody, x, i1) => {
          return common_vendor.e({
            a: tbody.name === "td" || tbody.name === "th"
          }, tbody.name === "td" || tbody.name === "th" ? {
            b: "13a21180-2-" + i0 + "-" + i1,
            c: common_vendor.p({
              childs: tbody.children,
              opts: $props.opts
            })
          } : {
            d: common_vendor.f(tbody.children, (tr, y, i2) => {
              return common_vendor.e({
                a: tr.name === "td" || tr.name === "th"
              }, tr.name === "td" || tr.name === "th" ? {
                b: "13a21180-3-" + i0 + "-" + i1 + "-" + i2,
                c: common_vendor.p({
                  childs: tr.children,
                  opts: $props.opts
                }),
                d: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                e: common_vendor.s(tr.attrs.style)
              } : {
                f: common_vendor.f(tr.children, (td, z, i3) => {
                  return {
                    a: "13a21180-4-" + i0 + "-" + i1 + "-" + i2 + "-" + i3,
                    b: common_vendor.p({
                      childs: td.children,
                      opts: $props.opts
                    }),
                    c: z,
                    d: common_vendor.n("_" + td.name + " " + td.attrs.class),
                    e: common_vendor.s(td.attrs.style)
                  };
                }),
                g: common_vendor.n("_" + tr.name + " " + tr.attrs.class),
                h: common_vendor.s(tr.attrs.style)
              }, {
                i: y
              });
            })
          }, {
            e: x,
            f: common_vendor.n("_" + tbody.name + " " + tbody.attrs.class),
            g: common_vendor.s(tbody.attrs.style)
          });
        })
      }, {
        aq: n.attrs.id,
        ar: common_vendor.n("_" + n.name + " " + n.attrs.class),
        as: common_vendor.s(n.attrs.style)
      }) : !n.c ? {
        av: n.attrs.id,
        aw: common_vendor.s("display:inline;" + n.f),
        ax: $props.opts[4],
        ay: $props.opts[4],
        az: [n]
      } : n.c === 2 ? {
        aB: common_vendor.f(n.children, (n2, j, i1) => {
          return {
            a: j,
            b: common_vendor.s(n2.f),
            c: "13a21180-5-" + i0 + "-" + i1,
            d: common_vendor.p({
              name: n2.name,
              attrs: n2.attrs,
              childs: n2.children,
              opts: $props.opts
            })
          };
        }),
        aC: n.attrs.id,
        aD: common_vendor.n("_block _" + n.name + " " + n.attrs.class),
        aE: common_vendor.s(n.f + ";" + n.attrs.style)
      } : {
        aF: common_vendor.s(n.f),
        aG: "13a21180-6-" + i0,
        aH: common_vendor.p({
          name: n.name,
          attrs: n.attrs,
          childs: n.children,
          opts: $props.opts
        })
      }, {
        i: n.name === "img",
        y: n.text,
        B: n.name === "br",
        C: n.name === "a",
        K: n.name === "video",
        Y: n.name === "audio",
        al: n.name === "table" && n.c || n.name === "li",
        at: !n.c,
        aA: n.c === 2,
        aI: i
      });
    }),
    b: $props.attrs.id,
    c: common_vendor.n("_block _" + $props.name + " " + $props.attrs.class),
    d: common_vendor.s($props.attrs.style)
  };
}
if (typeof block0 === "function")
  block0(_sfc_main);
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/uni_modules/mp-html/components/mp-html/node/node.vue"]]);
wx.createComponent(Component);
var QzovVXNlcnMvU2h1bi9EZXNrdG9wL3Z1ZS91bmlhcHAvd2FsbHBhcGVyLXlpbGFuL3VuaV9tb2R1bGVzL21wLWh0bWwvY29tcG9uZW50cy9tcC1odG1sL25vZGUvbm9kZS52dWU = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  [Symbol.toStringTag]: "Module"
});
