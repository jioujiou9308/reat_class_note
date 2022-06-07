import React from 'react';
import { Component } from 'react';

class CCLifeCycle extends Component {
  //第一階段呼叫建構式 11111111111111111111111111111111111111111
  constructor() {
    //呼叫繼承得來的父母
    super();
    //類別行元件狀態一定是物件
    this.state = { total: 0 };

    console.log('constructor');
  }
  // 3333333333333333333333333333333333333333333333333333333333333333
  componentDidMount() {
    console.log('componentDidMount');
  }

  //前一個屬性，前一個狀態   在render之後呼叫
  //如果使用地圖的平移，要有現在這個點與前一個點
  //可以呼叫setState  但使用上要非常小心 ，可能會造成無窮迴圈
  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate');
    console.log(this.state.total, prevState.total);

    //這樣寫就會造成無窮迴圈
    // this.setState({total: this.state.total + 1})
    //所以要寫成下面這樣
    if (this.state.total === 12) {
      this.setState({ total: 11 });
    }
  }

  //只有在類別行元件被移除的時候才有效果
  //但沒辦法自己移除，只能在app中作用， 請一道app.js鐘看
  componentWillUnmount() {
    console.log('componentWillUnmount');
  }

  //呼叫 222222222222222222222222222222222222222222222
  render() {
    console.log('render');

    return (
      <>
        <h1>類別行元件</h1>
        <h2
          onClick={() => {
            //only this way can use
            this.setState({ total: this.state.total + 1 });
          }}
        >
          {this.state.total}
        </h2>
      </>
    );
  }
}

export default CCLifeCycle;
