import styled from "styled-components";
import banner from '../../assets/img/banner.png'
import { Boton, ContenidoParcial } from "../UI/Estilos";

const Anuncio = styled.div`
    background-image: linear-gradient(0deg, ${({theme}) => theme.oscuro} 0%, rgba(0,0,0,0) 100%),
    url(${banner});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
`;

const AnuncioContenido = styled(ContenidoParcial)`
    height: 300px;
    @media screen and (min-width: 1024px) {
        height: 400px;
        display: flex;
        justify-content: space-between;
        padding: 5rem 0;
    }
`;

const AnuncioDescripcion = styled.div`
    height: 100%;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    color: ${({theme}) => theme.texto};
    padding: 1rem 0;
    box-sizing: border-box;
    text-align: center;
    @media screen and (min-width: 1024px) {
        width: 40%;
        text-align: left;
        align-items: flex-start;
    }
`;

const AnuncioTitulo = styled.h1`
    font-size: ${({theme}) => theme.h1};
    font-weight: 700;
    margin-bottom: 1rem;
`;

const AnuncioDetalle = styled.p`
    display: none;
    @media screen and (min-width: 768px) {
        display: initial;
        margin-bottom: 1rem;
    }
    @media screen and (min-width: 1024px) {
    }
`;


export function Banner() {

    return (
        <Anuncio>
            <AnuncioContenido>
                <AnuncioDescripcion>
                    <AnuncioTitulo>Challenge React</AnuncioTitulo>
                    <AnuncioDetalle>Este challenge es una forma de aprendizaje. Es un mecanismo donde podrás comprometerte en la resolución de un problema para poder aplicar todos los conocimientos adquiridos en la formación React.</AnuncioDetalle>
                </AnuncioDescripcion>
            </AnuncioContenido>
        </Anuncio>
    );
}