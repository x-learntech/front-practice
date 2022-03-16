// https://nervjs.github.io/taro/docs/react-overall
import { Component } from 'react';
import { Provider } from "react-redux";

import dva from "./dva";
import models from "./models";

import './app.scss';

const dvaApp = dva.createApp({
  initialState: {},
  models: models,
  onError(e, dispatch) {
    console.log("发生错误 ===> ", e, dispatch);
  },
});
const store = dvaApp.getStore();

console.log('store', store);
class App extends Component {

  componentDidMount () {}

  componentDidShow () {}

  componentDidHide () {}

  componentDidCatchError () {}

  // 页面404处理
  onPageNotFound(object: unknown): void {
    console.log('on page not found', object);
  }

  // this.props.children 是将要会渲染的页面
  render () {
    return (
      <Provider store={store}>
        {this.props.children}
      </Provider>
    );
  }
}

export default App;
