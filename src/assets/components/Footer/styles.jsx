import styled from "styled-components";

export const ContainerFooter = styled.div`
background-color: #8C1D14;

.info {
    display: flex;
}

.social {
    margin-left: 100px;
}
.social h1 {
    text-transform: uppercase;
    color: #fff;
}

.social h3 {
    font-family: 'italic', sans-serif;
    font-size: 15px;
    color: #E88577;
}

.icons {
    display: flex;
}

.icons img {
    width: 30px;
}

.navi-inqui-container {
    display: flex;
    justify-content: center;
    gap: 100px;
    margin-top: 30px;
}

.navigation {
    display: flex;
    flex-direction: column;
    gap: 10px;
    margin-left: 270px;
}

.navigation h3 {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'times', sans-serif;
}

.navigation p {
    text-transform: uppercase;
    color: #E88477;
    text-decoration: none;
}

.inquires {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.inquires h3 {
    color: #fff;
    font-weight: bold;
    text-transform: uppercase;
    font-family: 'times', sans-serif;
}

.inquires p {
    text-transform: uppercase;
    color: #E88477;
}

.the-cards {
    background-color: #8A281E;
    border: #A95348 solid 2px;
    padding: 12px 12px;
    margin-top: 30px;
    margin-left: 200px;
}

.the-card h1 {
    color: #fff;
    font-weight: bold;
    font-family: 'times', sans-serif;
    text-transform: uppercase;
    font-size: 20px;
    margin-top: 10px;
    margin-bottom: 20px;
}

.the-card p {
    color: #CF6D60;
    font-family: 'times', sans-serif;
    text-transform: uppercase;
}

.end-text {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 50px;
}
.end-text h4 {
    color: #82150F;
}

.end-text p {
    text-transform: uppercase;
    font-family: 'times', sans-serif;
    margin-top: 10px;
    color: #BB5140;
    margin-bottom: 100px;
}
`