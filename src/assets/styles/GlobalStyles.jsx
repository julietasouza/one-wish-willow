import { createGlobalStyle } from "styled-components"
import news from "../fonts/Newsreader[opsz,wght].ttf"
import bricolage from "../fonts/BricolageGrotesque-VariableFont_opsz,wdth,wght.ttf"
import times from "../fonts/times-new-roman/times.ttf"
import space from "../fonts/SpaceMono-Regular.ttf"
import italic from "../fonts/times-new-roman-italic.ttf"
import cursive from "../fonts/cursive_2/Cursive standard.ttf"

export const GlobalStyles = createGlobalStyle`
 * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
 }

 body {
    background-color: #fff;
 }

    @font-face {
    font-family: 'news';
    src: url(${news}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'bricolage';
    src: url(${bricolage}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'times';
    src: url(${times}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'space';
    src: url(${space}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
   font-family: 'italic';
   src: url(${italic}) format('truetype');
   font-weight: normal;
   font-style: normal;
  }

  @font-face {
   font-family: 'cursive';
   src: url(${cursive}) format('truetype');
   font-weight: normal;
   font-style: normal;
  }
`