// 1像素边框组件
import React, { PureComponent } from 'react'
import './style.less';

interface IProps {
  tagName?: string; // 自定义包裹内容的tagName
  side?: string; // 边框位置 left、right、top、bottom、around
  [propName: string]: any;
}

export default class RpxBlock extends PureComponent<IProps> {
  public static defaultProps = {
    side: 'bottom'
  }
  public render() {
    const { tagName, className, side, ...otherProps } = this.props;
    return React.createElement(this.props.tagName || 'div', {
      className: `thanos-rpx is-${this.props.side}${className ? ' ' + className : ''}`,
      ...otherProps
    }, this.props.children)
  }
}
