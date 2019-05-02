import styled from 'styled-components';

export const Header = styled.header`
                padding: 10px;
                background: white;
                color: white;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                display: flex;
                border-bottom: 1px solid #ccc;
                position: relative;
                &::after {
                    position: absolute;
                    left: 0;
                    bottom: -40px;        
                    height: 40px;
                    right: 0;
                    background: linear-gradient(rgba(0,0,0,0.2), transparent);
                    content: "";
                    z-index: 2;
                }`

export const LogoA = styled.a`
                max-width:50%;
                max-height: 100px;
                position:relative;`;

export const Logo = styled.img`
                max-width: 100%;
                max-height: inherit;`