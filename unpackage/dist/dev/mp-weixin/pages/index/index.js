"use strict";
var common_vendor = require("../../common/vendor.js");
var api_apis = require("../../api/apis.js");
require("../../utils/request.js");
if (!Array) {
  const _easycom_custom_nav_bar2 = common_vendor.resolveComponent("custom-nav-bar");
  const _easycom_uni_icons2 = common_vendor.resolveComponent("uni-icons");
  const _easycom_uni_dateformat2 = common_vendor.resolveComponent("uni-dateformat");
  const _easycom_common_title2 = common_vendor.resolveComponent("common-title");
  const _easycom_theme_item2 = common_vendor.resolveComponent("theme-item");
  (_easycom_custom_nav_bar2 + _easycom_uni_icons2 + _easycom_uni_dateformat2 + _easycom_common_title2 + _easycom_theme_item2)();
}
const _easycom_custom_nav_bar = () => "../../components/custom-nav-bar/custom-nav-bar.js";
const _easycom_uni_icons = () => "../../uni_modules/uni-icons/components/uni-icons/uni-icons.js";
const _easycom_uni_dateformat = () => "../../uni_modules/uni-dateformat/components/uni-dateformat/uni-dateformat.js";
const _easycom_common_title = () => "../../components/common-title/common-title.js";
const _easycom_theme_item = () => "../../components/theme-item/theme-item.js";
if (!Math) {
  (_easycom_custom_nav_bar + _easycom_uni_icons + _easycom_uni_dateformat + _easycom_common_title + _easycom_theme_item)();
}
const _sfc_main = {
  setup(__props) {
    const bannerList = common_vendor.ref([]);
    const randomList = common_vendor.ref([]);
    const noticeList = common_vendor.ref([]);
    const classifyList = common_vendor.ref([]);
    const getBanner = async () => {
      let res = await api_apis.apiGetBanner();
      bannerList.value = res.data;
    };
    const getDayRandom = async () => {
      let res = await api_apis.apiGetDayRandom();
      randomList.value = res.data;
    };
    const getNotice = async () => {
      let res = await api_apis.apiGetNotice({ select: true });
      noticeList.value = res.data;
    };
    const getClassify = async () => {
      let res = await api_apis.apiGetClassify({
        select: true
      });
      classifyList.value = res.data;
      console.log(res);
    };
    const goPreview = (id) => {
      common_vendor.index.setStorageSync("storgClassList", randomList.value);
      common_vendor.index.navigateTo({
        url: "/pages/preview/preview?id=" + id
      });
    };
    common_vendor.onShareAppMessage((e) => {
      return {
        title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u597D\u770B\u7684\u624B\u673A\u58C1\u7EB8",
        path: "/pages/classify/classify"
      };
    });
    common_vendor.onShareTimeline(() => {
      return {
        title: "\u6613\u89C8\u58C1\u7EB8\uFF0C\u597D\u770B\u7684\u624B\u673A\u58C1\u7EB8"
      };
    });
    getBanner();
    getDayRandom();
    getNotice();
    getClassify();
    return (_ctx, _cache) => {
      return {
        a: common_vendor.p({
          title: "\u63A8\u8350"
        }),
        b: common_vendor.f(bannerList.value, (item, k0, i0) => {
          return common_vendor.e({
            a: item.target == "miniProgram"
          }, item.target == "miniProgram" ? {
            b: item.picurl,
            c: item.url,
            d: item.appid
          } : {
            e: item.picurl,
            f: `/pages/classlist/classlist?${item.url}`
          }, {
            g: item._id
          });
        }),
        c: common_vendor.p({
          type: "sound-filled",
          size: "20"
        }),
        d: common_vendor.f(noticeList.value, (item, k0, i0) => {
          return {
            a: common_vendor.t(item.title),
            b: "/pages/notice/detail?id=" + item._id,
            c: item._id
          };
        }),
        e: common_vendor.p({
          type: "right",
          size: "16",
          color: "#333"
        }),
        f: common_vendor.p({
          type: "calendar",
          size: "18"
        }),
        g: common_vendor.p({
          date: Date.now(),
          format: "dd\u65E5"
        }),
        h: common_vendor.f(randomList.value, (item, k0, i0) => {
          return {
            a: item.smallPicurl,
            b: item._id,
            c: common_vendor.o(($event) => goPreview(item._id), item._id)
          };
        }),
        i: common_vendor.f(classifyList.value, (item, k0, i0) => {
          return {
            a: item._id,
            b: "57280228-7-" + i0,
            c: common_vendor.p({
              item
            })
          };
        }),
        j: common_vendor.p({
          isMore: true
        })
      };
    };
  }
};
var MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-57280228"], ["__file", "C:/Users/Shun/Desktop/vue/uniapp/wallpaper-yilan/pages/index/index.vue"]]);
_sfc_main.__runtimeHooks = 6;
wx.createPage(MiniProgramPage);
