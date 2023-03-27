// eslint-disable-next-line
import { Palette, PaletteColor } from "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette" {
  interface PaletteColor {
    [key: number]: string;
  }

  interface Palette {
    tertiary: PaletteColor;
  }
}

// we can see the setting that mui has created for Pallate , just ctrl + click  on the palette
// and click on the createPalette.d.ts we'll see this 
/*
    export interface PaletteAugmentColorOptions {
    color: PaletteColorOptions;
    mainShade?: number | string;
    lightShade?: number | string;
    darkShade?: number | string;
    name?: number | string;
}
*/