import React from 'react';
import { PictureContainer, Picture as PicComponent, PictureComments, PictureCommentsSeeMore, PictureUser } from './style';
export default class Picture extends React.Component {
    constructor (props) {
        super(props);
        this.state = { liked: false };
    }
    likeUnline = () => {
        alert(!this.state.liked ? 'Like' : 'Unlike');
        this.setState({liked: !this.state.liked });
    }
    render() {
        const StyleLiked = this.state.liked ? { backgroundColor: 'red' } : {}; 
        return (
            <PictureContainer style={StyleLiked}>
                <PictureUser>
                    <span>{this.props.user}</span>
                </PictureUser>
                <PicComponent src={this.props.src} onDoubleClick={ () => this.likeUnline() }/>
                <PictureComments>
                    {this.props.comments.filter((v, k) => k < 5).map((v, k) => {
                        return (
                            <div>
                                <strong>{v.name}</strong>
                                <span>{v.comment}</span>
                            </div>
                        )
                    })}
                </PictureComments>
                <PictureCommentsSeeMore>Mais comentários</PictureCommentsSeeMore>
            </PictureContainer>
        )
    }
}