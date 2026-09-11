import styled from "styled-components";

export const ContainerHome = styled.div`
.banner {
    position: relative;
    margin-top: 20px;
}

.banner img {
    width: 100%;
    height: 600px;
    object-fit: cover;
    filter: brightness(70%);
    display: block;
}

.content {
    position: absolute;
    top: 50%;
    left: 8%;
    transform: translateY(-50%);
    color: white;
    max-width: 550px;
    z-index: 2;
}

.content h4 {
    color: #FED65C;
    font-family: 'bricolage', sans-serif;
}

.content h1 {
    font-family: 'times', sans-serif;
    margin-top: 20px;
    margin-bottom: 20px;
    font-weight: bold;
    font-size: 50px;
}

.content p {
    font-family: 'times', sans-serif;
    max-width: 400px;
    font-size: 18;
}

.botoes {
    display: flex;
    gap: 20px;
    margin-top: 30px;
}

.botoes a {
    text-decoration: none;
}

.order {
    padding: 12px 24px;
    border: none;
    cursor: pointer;
    background-color: #8D1E15;
    color: #E37F71;
    font-family: 'bricolage', sans-serif;
    text-transform: uppercase;
    transition: transform 0.2s ease;
}

.order:hover {
    transform: scale(0.97);
}

.history {
    background-color: transparent;
    padding: 10px 24px;
    border: #fff solid 2px;
    font-family: 'bricolage', sans-serif;
    color: #fff;
    text-transform: uppercase;
    cursor: pointer;
    transition: transform 0.2s ease;
}

.history:hover {
    transform: scale(0.97);
    background-color: #fff;
    color: #8D1E15;
}

.ritual {
    background-color: #FCF3D8;
}

.headline {
    display: flex;
    justify-content: center;
}

.titulo h3 {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
    color: #6B0203;
    font-size: 10px;
    margin-top: 20px;
}

.titulo h1 {
    color: #6C0203;
    font-family: 'times', sans-serif;
    text-transform: uppercase;
    margin-top: 10px;
    margin-bottom: 10px;
}

.titulo p {
    color: #59423F;
    font-family: 'italic', sans-serif;
    margin-bottom: 30px;
}

.cards {
    display: flex;
    gap: 30px;
    justify-content: center;
    margin-left: 20px;
    margin-right: 20px;
}

.card {
    padding: 12px 30px;
    background-color: #FFF9ED;
    border: #6C0203 solid 2px;
    transition: transform 0.2s ease;
}

.card:hover {
    transform: scale(0.97);
    filter: brightness(90%);
}

.card-border {
    padding: 5px 5px;
    background-color: #FFF9ED;
    border: #6C0203 solid 2px;
}

.card-border:hover {
    filter: brightness(96%);
}

.card-img {
    display: flex;
    justify-content: center;
    margin-top: 20px;
}

.card-img img {
    border-radius: 10px;
    width: 70px;
}

.card-content {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.card-content h1 {
    color: #6B0001;
    font-family: 'times', sans-serif;
    font-weight: bold;
    margin-top: 20px;
    margin-bottom: 20px;
}

.card-content p {
    color: #59423F;
    font-family: 'times', sans-serif;
    font-size: 20px;
    text-align: center;
}

.card-content h4 {
    color: #C4969E;
    margin-top: 20px;
    text-transform: uppercase;
    font-family: 'times', sans-serif;
}

.warning-card {
    margin-bottom: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 10px;

    width: fit-content;
    margin: 70px auto;

    padding: 15px 25px;

    background: #F0DDC5;
    border: 2px solid #6C0102;

    clip-path: polygon(
        20px 0,
        calc(100% - 20px) 0,
        100% 20px,
        100% calc(100% - 20px),
        calc(100% - 20px) 100%,
        20px 100%,
        0 calc(100% - 20px),
        0 20px
    );
}

.warning-card img {
    width: 40px;
}

.warning-card span {
    color: #6C0102;
    font-weight: bold;
    font-size: 20px;
    font-family: 'italic', sans-serif;
    margin-left: 6px;
}

.warning-card p {
    color: #6C0102;
    font-family: 'italic', sans-serif;
}

.special {
    display: flex;
}

aside img {
    width: 600px;
    margin-left: 100px;
    border-radius: 10px;
    margin-top: 40px;
    border: #6B0203 solid 5px;
    float: left;
}

.text-aside {
    margin-right: 500px;
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    margin-top: 30px;
}

.text-aside h4 {
    color: #fff;
    border: #6C0102 solid 3px;
    background-color: #6C0102;
    text-transform: uppercase;
    margin-bottom: 40px;
}

.text-aside h1 {
    color: #6C0203;
    text-transform: uppercase;
    font-family: 'times', sans-serif;
}

.text-aside p {
    color: #59423F;
    font-family: 'times', sans-serif;
    font-size: 28px;
    margin-top: 40px;
}

.symbol {
    color: #6C0203;
}

.list {
    color: #201D0C;
    font-size: 20px;
    font-family: 'times', sans-serif;
    margin-top: 30px;
    margin-bottom: 5px;
}

.wand-price {
    padding: 12px 12px;
    border: none;
    cursor: pointer;
    background-color: #8D1E15;
    color: #fff;
    font-family: 'times', sans-serif;
    text-transform: uppercase;
    margin-top: 20px;
    font-weight: bold;
}

.secret-society {
    background-color: #8D1E15;
    margin-top: 20px;
}

.secret-society h1 {
    font-family: 'times', sans-serif;
    text-transform: uppercase;
    display: flex;
    justify-content: center;
    color: #fff;
}

.detalhe {
    color: #E88577;
    display: flex;
    justify-content: center;
    font-family: 'bricolage', sans-serif;
    margin-top: 5px;
}

.container-mail {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 30px;
}

.container-mail input {
    border: #fff solid 2px;
    margin-right: 10px;
    background-color: transparent;
    font-family: 'times', sans-serif;
    padding: 8px 12px;
}

.container-mail button {
    color: #6C0203;
    font-family: 'times', sans-serif;
    text-transform: uppercase;
    background-color: #fff;
    border: none;
    padding: 9px 24px;
    font-weight: bold;
}

.secret-society h5 {
    display: flex;
    justify-content: center;
    margin-top: 30px;
    text-transform: uppercase;
    color: #C65E52;
    margin-bottom: 10px;
}
`