import styled from "styled-components";

export const ContainerHeader = styled.div`
background-color: #fff;
display: flex;
justify-content: center;
gap: 80px;
margin-top: 20px;

.logo {
    color: #6C0203;
    font-family: 'news', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
    font-size: 20px;
}

a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-decoration: none;
    font-family: 'bricolage', sans-serif;
    color: #000;
    transition: transform 0.2s ease;
}

a:hover {
    text-decoration: underline #6C0203;
    transform: scale(0.97);
}

a button {
    color: #fff;
    font-family: 'bricolage', sans-serif;
    text-transform: uppercase;
    background-color: #6C0203;
    border: none;
    width: 100px;
    height: 30px;
    cursor: pointer;
}
`