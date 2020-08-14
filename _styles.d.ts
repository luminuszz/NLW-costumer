import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      colorBackground: string;
      colorPrimarylighter: string;
      colorPrimarylight: string;
      colorPrimary: string;
      colorPrimarydark: string;
      colorPrimarydarker: string;
      colorSecundary: string;
      colorSecundarydark: string;
      colorTitleinprimary: string;
      colorTextinprimary: string;
      colorTexttitle: string;
      colorTextcomplement: string;
      colorTextbase: string;
      colorLineinwhite: string;
      colorInputbackground: string;
      colorButtontext: string;
      colorBoxbase: string;
      colorBoxfooter: string;
      colorTextspan: string;
      colorTextspanerror: string;
    };
    fonts: {
      fontprimary: string;
      fontsecondary: string;
    };
  }
}
