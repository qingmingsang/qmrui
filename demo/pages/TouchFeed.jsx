import React, { PureComponent } from "react";
import { TouchFeed } from '../../src';

export default class A extends PureComponent {
    render() {
        return (
            <div className="is-touch touch-block">
                <TouchFeed />
            </div>
        );
    }
}