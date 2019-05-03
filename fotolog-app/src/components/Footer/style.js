import styled from 'styled-components';
import { Link } from 'react-router-dom';


export const Footer = styled.footer`
    display: flex;
    flex-direction: row;
    padding: 10px;
    background: #222;
    border-top: 1px solid #ccc;
    justify-content: center;
    
`;

export const NewPicture = styled(Link)`
    box-shadow: 0 0 10px rgba(0,0,0,0.1);
    background: white;
    color: #222;
    border: none;
    border-radius: 100%; 
    padding: 10px;
    text-transform: uppercase;
    font-size: 10px;
    display: flex;
    flex-direction: row;
    justify-content:center;
    align-items: center;
`;