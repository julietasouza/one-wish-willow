import styled from "styled-components";

export const ContainerStory = styled.div`

.card-border {
    display: flex;
    justify-content: center;
    margin-top: 70px;
}

.card {
    padding: 12px 24px;
    border: #6B0001 2px solid;
}

.card p {
    color: #6B0001;
    font-family: 'bricolage', sans-serif;
    text-transform: uppercase;
    font-weight: bold;
}

.titulos {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 70px;
}

.titulos h1 {
    font-family: 'times', sans-serif;
    font-weight: bold;
    text-transform: uppercase;
    color: #6B0001;
}

.titulos h5 {
    font-family: 'italic', sans-serif;
    color: #58413E;
}

.special {
    display: flex;
    margin-top: 30px;
}

aside img {
    width: 600px;
    margin-left: 100px;
    border-radius: 10px;
    margin-top: 40px;
    border: #6B0203 solid 5px;
    float: left;
}

.description {
    color: #58413E;
    font-family: 'space', sans-serif;
    text-transform: uppercase;
    margin-left: 109px;
}

.text-aside {
    margin-right: 420px;
    display: flex;
    flex-direction: column;
    margin-left: 70px;
    margin-top: 30px;
}

.text-aside h1 {
    color: #6C0203;
    text-transform: uppercase;
    font-family: 'times', sans-serif;
}

.text-aside p {
    color: #59423F;
    font-family: 'times', sans-serif;
    font-size: 19px;
    margin-top: 20px;
}

.message {
    background-color: #F7EED2;
    margin-top: 40px;
    border-radius: 10px;
}

.message p {
    margin-left: 20px;
    margin-bottom: 20px;
    font-family: 'italic', sans-serif;
    color: #58413E;
}

.message h3 {
    color: #6B0001;
    font-family: 'cursive', sans-serif;
    margin-left: 20px;
}
`