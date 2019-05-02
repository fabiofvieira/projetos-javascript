import styled from 'styled-components';


export const PictureContainer = styled.div`
    padding: 5px;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: white;
    margin-bottom: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;`;

export const PictureUser = styled.div`
    display: flex;
    padding: 5px;
    font-size: 10px;
    flex-direction: row;
`
export const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    `

export const PictureComments = styled.div`
    padding-top: 10px;
    color: #222;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`

export const PictureCommentsSeeMore = styled.a`
    color: #777;
    font-weight: bold;
    border-top: 1px solid #ccc;
    display: block;
    padding: 5px;
    text-align: center;
    font-size: 10px;
    text-transform: uppercase;`