import React from 'react';
import { Header, Logo, LogoA } from './style';
import logo from '../../logo.png';

const Component = () => {
    return (
        <Header>
            <LogoA>
                <Logo src={logo}/>
            </LogoA>
        </Header>)
}

export default Component;
    