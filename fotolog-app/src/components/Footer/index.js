import React from 'react';
import { Footer, NewPicture } from './style';
import { FaCameraRetro } from 'react-icons/fa';
import { Redirect } from 'react-router-dom';

const Componente = () => {
    const clickEvent = () => {
        return <Redirect to="/profile" />
    }
    return (
        <Footer>
            <NewPicture onClick={() => clickEvent()}>
                <FaCameraRetro size={20}/>
            </NewPicture>
        </Footer>
        )
    }

export default Componente