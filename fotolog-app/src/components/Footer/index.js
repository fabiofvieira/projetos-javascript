import React from 'react';
import { Footer, NewPicture } from './style';
import { FaCameraRetro } from 'react-icons/fa';
const Componente = () => {
    const clickEvent = () => {
        alert('clicou');
    }
    return (
        <Footer>
            <NewPicture onClick={ () => clickEvent() }>
                <FaCameraRetro style={{ paddingRight: 5 }}/>
                <span>Carregar Foto</span>
            </NewPicture>
        </Footer>
        )
    }

export default Componente