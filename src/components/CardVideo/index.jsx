import {BotonLink, Imagen} from "../UI/Estilos";
import styled from "styled-components";
import {useLocation} from "react-router-dom";

const CardVideoLink = styled.a`

`;

const CarrucelImagen = styled(Imagen)`
    border: 1px solid ${({color}) => color };
    box-sizing: border-box;
    
`;

export function CardVideo({link, src, color, id}) {
    const url = useLocation()

    return (
        <CardVideoLink href={link} target="__blank" >
            <CarrucelImagen src={src} color={color} ></CarrucelImagen>
            {url.pathname === '/' && <BotonLink tipo='' color="#fff" to={`/video/${id}`} >Editar</BotonLink>}
        </CardVideoLink>

    );    
}