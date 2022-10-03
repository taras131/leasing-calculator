import {createGlobalStyle} from "styled-components";

export const Global = createGlobalStyle`
  @font-face {
    font-family: 'Nekst';
    src: url('../assets/fonts/nekst/Nekst-Black.eot');
    src: local('Nekst Black'), local('Nekst-Black'),
    url('../assets/fonts/nekst/Nekst-Black.eot?#iefix') format('embedded-opentype'),
    url('../assets/fonts/nekst/Nekst-Black.woff2') format('woff2'),
    url('../assets/fonts/nekst/Nekst-Black.woff') format('woff'),
    url('../assets/fonts/nekst/Nekst-Black.ttf') format('truetype');
    font-weight: 900;
    font-style: normal;
  }

  body {
    font-family: "Nekst", Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`
export const theme = {
    colors: {
        primary: "#FF9514",
        secondary: "#F3F3F4",
        white: "#ffff",
        hover: "#111111",
        active: "#575757",
        disableButtonBackground: "rgba(255, 149, 20, 0.4)",
        text: "#575757",
        disableInputBackground: ""
    },
    size: {
        borderRadius: "16px",
        buttonBorderRadius: "40px"
    },
    media: {
        phone: "(max-width: 550px)",
        tablet: "(max-width: 768px) and (min-width: 551px)",
        laptop: "(max-width: 1024px) and (min-width: 769px)"
    }
}