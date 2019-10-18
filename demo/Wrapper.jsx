import React, { PureComponent } from "react";
import { Link } from "react-router-dom";

export default class Wrapper extends PureComponent {
    render() {
        return (
            <div className='index-wrapper'>
                <Link to='/' className='index-wrapper__title'>
                    回到首页
                </Link>
                <div className='index-wrapper__body'>
                    <div className='index-wrapper__content'>
                        {this.props.children}
                    </div>
                </div>
            </div>
        );
    }
}
