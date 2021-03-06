import { createGlobalStyle } from 'styled-components';

export const sizes = {
  desktop: '1100px',
  tablet: '700px',
};

export const GlobalStyle = createGlobalStyle`




 * {
   margin: 0;
   padding: 0;
   box-sizing: border-box;
 }

:root {
  --color-background: #F0F0F7;
  --color-primary-lighter: #9871F5;
  --color-primary-light: #916BEA;
  --color-primary: #8257E5;
  --color-primary-dark: #774DD6;
  --color-primary-darker: #6842C2;
  --color-secundary: #04D361;
  --color-secundary-dark: #04BF58;
  --color-title-in-primary: #FFFFFF;
  --color-text-in-primary: #D4C2FF;
  --color-text-title: #32264D;
  --color-text-complement: #9C98A6;
  --color-text-base: #6A6180;
  --color-line-in-white: #E6E6F0;
  --color-input-background: #F8F8FC;
  --color-button-text: #FFFFFF;
  --color-box-base: #FFFFFF;
  --color-box-footer: #FAFAFC;
  --color-text-span: #C1BCCC;
  --color-text-span-error: #e34439;
  --font-primary: 'Archivo';
  --font-secondary: 'Poppins';

  --desktop: '1100px';

  font-size: 60%;
}


html, body, #__next{
  height: 100vh;
}


body  {
  background: var(--color-background);

}

#__next {
  display: flex;
  align-items: center;
  justify-content:center;
}

body,input,button,textarea,#__next {
  font: 500 1.6rem var(--font-secondary);
  color: var(--color-text-base);
}


@media(max-width: 700px) {
  :root {
    font-size: 62.5%;
  }
}



`;
