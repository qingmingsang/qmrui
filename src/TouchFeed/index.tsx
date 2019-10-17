// 触摸反馈高阶组件
import React, { PureComponent } from 'react';
import './style.less';
export interface ITouchProps {
  tagName?: string; // 自定义包裹内容的tagName
  disabled?: boolean;
  touchClass?: string;
  touchType?: string; // 触摸反馈类型，高亮和变暗(light、dark)
  [propNm: string]: any;
}

class TouchFeed extends PureComponent<ITouchProps> {
  public static defaultProps = {
    tagName: 'div',
    disabled: false,
    touchClass: 'is-touch',
    touchType: 'light'
  }
  public touchTimer: any
  public state = {
    touchClass: ''
  }
  constructor(props: ITouchProps) {
    super(props);
    this.evtTouchStart = this.evtTouchStart.bind(this);
    this.evtTouchEnd = this.evtTouchEnd.bind(this);
    this.evtClick = this.evtClick.bind(this);
    this.touchTimer = null
  }
  public render() {
    const { tagName, touchClass, disabled, className, touchType, ...otherProps } = this.props;
    const touchCls = this.state.touchClass ? ` ${this.state.touchClass}` : '';

    // 调用createElement方法, 支持自定义tagName
    return React.createElement(
      this.props.tagName as string,
      {
        className: `touch-${touchType}${className ? ' ' + className : ''}${touchCls}`,
        onTouchStart: this.evtTouchStart,
        // onTouchMove: this.evtTouchEnd,
        onTouchEnd: this.evtTouchEnd,
        onTouchCancel: this.evtTouchEnd,
        ...otherProps,
        onClick: this.evtClick
      },
      this.props.children
    )
  }
  public componentWillUnmount() {
    clearTimeout(this.touchTimer)
  }
  public evtTouchStart() {
    clearTimeout(this.touchTimer);
    this.touchTimer = setTimeout(() => {
      this.setState({
        touchClass: this.props.disabled ? '' : this.props.touchClass
      })
    }, 100);
  }
  public evtTouchEnd() {
    clearTimeout(this.touchTimer);
    this.setState({
      touchClass: ''
    })
  }
  public evtClick(ev: any) {
    const { onClick } = this.props;
    onClick && onClick(ev);
  }
}

export default TouchFeed;