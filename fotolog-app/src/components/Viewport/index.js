import React from 'react';
import { Viewport as ViewportComponent } from './style';
import Picture from '../Picture';
export class Viewport extends React.Component {
    list = [
        {src: 'http://placekitten.com/400/400', createdBy: 'FUlano', comments: [{ name: 'Anonimo', comment: 'Foda' }] },
        {src: 'http://placekitten.com/600/600',  createdBy: 'FUlano', comments: [{ name: 'Anonimo', comment: 'Foda' }] },
        {src: 'http://placekitten.com/800/800',  createdBy: 'FUlano', comments: [{ name: 'Anonimo', comment: 'Foda' }] },
        {src: 'http://placekitten.com/500/500',  createdBy: 'FUlano', comments: [{ name: 'Anonimo', comment: 'Foda' }] },
    ]
    render() {
        return (
            <ViewportComponent>
                {this.list.map((v, k) => <Picture user={v.createdBy} src={v.src} comments={v.comments} />)}
            </ViewportComponent>
        )
    }
}