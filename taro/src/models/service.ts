import { showLoading, showToast, hideLoading } from "@tarojs/taro";
import * as SERVICES from "@/services/index";

const initState = {
  asyncData: {},
};

const serviceStore = {
  namespace: "service",

  state: initState,

  effects: {
    *fetch({ payload }, { call, put }) {
      console.log("payload", payload);
      showLoading({ title: "loading..." });
      let data;
      try {
        const res = yield call(SERVICES.getAsyncData, payload);
        data = [...res];
        showToast({
          title: "请求成功",
          icon: "success",
          duration: 1500,
        });
      } catch (e) {
        showToast({
          title: "请求失败",
          icon: "loading",
          duration: 1500,
        });
      } finally {
        yield put({
          type: "UPDATE",
          payload: {
            asyncData: data,
          },
        });
      }
      hideLoading();
    },
  },

  reducers: {
    UPDATE(state, { payload }) {
      return { ...state, ...payload };
    },
  },
};

export default serviceStore;
