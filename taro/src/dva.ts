import { create } from 'dva-core';

let app;
let store;
let dispatch;
let registered;

function createApp(opt) {
  app = create(opt);

  // 注入model
  if (!registered) {
    opt.models.forEach((model) => app.model(model));
  }
  registered = true;
  app.start();

  // 设置store
  store = app._store;
  app.getStore = () => store;
  app.use({
    onError(err) {
      console.error(err);
    },
  });

  // 设置dispatch
  dispatch = store.dispatch;
  app.dispatch = dispatch;

  return app;
}

export default {
  createApp,
  getDispatch() {
    return app.dispatch;
  },
};
