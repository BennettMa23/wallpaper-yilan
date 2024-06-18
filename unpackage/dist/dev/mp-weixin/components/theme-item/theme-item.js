"use strict";
var common_vendor = require("../../common/vendor.js");
var utils_common = require("../../utils/common.js");
var _imports_0 = "/common/images/more.jpg";
if (!Array) {
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  _easycom_uni_icons2();
}
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
if (!Math) {
  _easycom_uni_icons();
}
const _sfc_main = {
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
      return common_vendor.e({
        a: !__props.isMore
      }, !__props.isMore ? common_vendor.e({
        b: __props.item.picurl,
        c: common_vendor.t(__props.item.name),
        d: common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime)
      }, common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime) ? {
        e: common_vendor.t(common_vendor.unref(utils_common.compareTimestamp)(__props.item.updateTime))
      } : {}, {
        f: "/pages/classlist/classlist?id=" + __props.item._id + "&name=" + __props.item.name
      }) : {}, {
        g: __props.isMore
      }, __props.isMore ? {
        h: _imports_0,
        i: common_vendor.p({
          type: "more-filled",
          size: "34",
          color: "#fff"
        })
      } : {});
    };
  }
};
var Component = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-0fe3a138"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/components/theme-item/theme-item.vue"]]);
wx.createComponent(Component);
