import React from 'react';

import {
    PictureContainer,
    Picture as PicComponent,
    PictureButtons,
    PictureButton,
    PictureComment,
    PictureComments,
    PictureCommentsSeeMore,
    PictureUser
} from './style';

import { 
    FaHeart,
    FaComment
} from 'react-icons/fa';


export default class Picture extends React.Component {
    constructor (props) {
        super(props);
        this.state = { liked: false };
    }
    likeUnline = () => {
        this.setState({liked: !this.state.liked });
    }
    render() {
        return (
            <PictureContainer>
                <PictureUser>
                    <span>{this.props.user}</span>
                </PictureUser>
                <PicComponent src={this.props.src} onClick={ () => this.likeUnline() }/>
                <PictureButtons>
                    <PictureButton>
                        <FaHeart color={ this.state.liked ? 'red' : 'grey' } onClick={ () => this.likeUnline() }/>
                        <span>(55)</span>
                    </PictureButton>
                    <PictureButton>
                        <FaComment color='grey' onClick={ () => this.likeUnline() }/>
                        <span>(55)</span>
                    </PictureButton>
                </PictureButtons>
                <PictureComments>
                    {this.props.comments.filter((v, k) => k < 5).map((v, k) => {
                        return (
                            <PictureComment key={k}>
                                <strong style={{ paddingRight: '0.2rem' }}>{v.name}:</strong>
                                <span>{v.comment}</span>
                            </PictureComment>
                        )
                    })}
                </PictureComments>
                <PictureCommentsSeeMore>Mais comentários</PictureCommentsSeeMore>
            </PictureContainer>
        )
    }
}