import styled from 'styled-components'

export const CardWrapper = styled.div`
    display:flex;
    flex-direction: column;
    padding: 2em 2em;
    background: #fff;
    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.16);
    max-width: 400px;

    button {
        margin: 0 auto;
    }

`

export const ImageWrapper = styled.div`
    background: url(${props => props.image}) no-repeat center;
    -webkit-filter: grayscale(100%);
    -moz-filter:    grayscale(100%);
    -ms-filter:     grayscale(100%);
    -o-filter:      grayscale(100%);
    background-size: cover;
    /* background: red; */
    width: 190px;
    height: 190px;
    margin: 1rem auto;
    border-radius: 4px;
`

export const TextWrapper = styled.div`
    margin: 0 auto;
    display: flex;
    flex-direction:column;

    h1 {
        color: #292929;
        font-size: 1.5rem;
        line-height: 150%;
    }

    span {
        text-align: right;
        color: #868686;
        font-size: 1rem;
        font-weight: 300;
        margin-bottom: .5rem;

        &::before {
            content: '- ';
        }
    }

    button {
        border:none;
        cursor: pointer;
        padding: .5rem .8rem;
        text-align: right;
        outline: none;
    }
`