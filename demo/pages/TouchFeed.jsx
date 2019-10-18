import React, { PureComponent } from "react";
import Wrapper from '../Wrapper';
import { TouchFeed } from '../../src';

export default class demo extends PureComponent {
    render() {
        return (
            <Wrapper>
                <TouchFeed
                    touchType='block'
                >
                    block
                </TouchFeed>
            </Wrapper>
        );
    }
}