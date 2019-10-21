import React, { PureComponent } from "react";
import Wrapper from '../Wrapper';
import { RpxBlock } from '../../src';

export default class demo extends PureComponent {
    render() {
        return (
            <Wrapper>
                <RpxBlock
                    side='around'
                    className='index-wrapper__block'
                >
                    RpxBlock
                </RpxBlock>
            </Wrapper>
        );
    }
}