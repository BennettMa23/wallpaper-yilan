"use strict";
var common_vendor = require("../../common/vendor.js");
var api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_theme_item)();
}
const _sfc_main = {
  setup(__props) {
    const classifyList = common_vendor.ref([]);
    const getClassify = async () => {
      let res = await api_apis.apiGetClassify({
        pageSize: 15
      });
      classifyList.value = res.data;
      console.log(res);
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u7CBE\u9009\u5206\u7C7B",
        path: "/pages/classify/classify"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u7CBE\u9009\u5206\u7C7B"
      };
    });
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u5206\u7C7B"
        }),
        b: common_vendor.f(classifyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "71432b06-1-" + i0,
            c: common_vendor.p({
              item
            })
          };
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-71432b06"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/classify/classify.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
