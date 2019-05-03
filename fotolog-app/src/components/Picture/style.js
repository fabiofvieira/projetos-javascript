import styled from 'styled-components';


export const PictureContainer = styled.div`
    padding: 0.5rem;
    border-radius: 4px;
    border: 1px solid #ccc;
    background: white;
    margin-bottom: 5px;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
    display: flex;
    flex-direction: column;
    position:relative;`;

export const PictureUser = styled.div`
    display: flex;
    padding: 0.5rem;
    font-size: 1rem;
    flex-direction: row;
    text-transform: lowercase;
`
export const Picture = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 4px;
    `

export const PictureButtons = styled.div`
    padding: 5px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    font-size: 1.5rem;
    * {
        transition: 300ms;
    }
    span {
        font-size: 1rem;
        padding-left: 1rem;
    }
`

export const PictureButton = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 0 0.5rem;
`;

export const PictureComments = styled.div`
    padding-top: 10px;
    color: #222;
    display: flex;
    flex-direction: column;
    padding-bottom: 10px;
`
export const PictureComment = styled.div`
    padding: 5px 0;
    font-size: 0.8rem;
`
export const PictureCommentsSeeMore = styled.a`
    color: #777;
    font-weight: bold;
    border-top: 1px solid #ccc;
    display: block;
    padding: 5px;
    text-align: center;
    font-size: 0.8rem;
    text-transform: uppercase;`