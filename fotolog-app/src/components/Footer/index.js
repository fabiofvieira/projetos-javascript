import React from 'react';
import { Footer, NewPicture } from './style';
import { FaCameraRetro } from 'react-icons/fa';

const Componente = () => {
    return (
        <Footer>
            <NewPicture to="/profile">
                <FaCameraRetro size={20}/>
            </NewPicture>
        </Footer>
        )
    }

export default Componente