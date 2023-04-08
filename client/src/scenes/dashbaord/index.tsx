/*
Few NICE things :
you dont have to import stuff, they will be automatically imported when you select from dropdown.

Few WIERD STUFF :
when I tried to import useTheme AUTOMATICALLY, it was import {useTheme} from '@emotion/react';
in drop down there might be more than one of the thing we want , SELECT CAREFULLY.
*/

import { Box, useMediaQuery } from "@mui/material";
import Row1 from "./Row1";
import Row3 from "./Row3";
import Row2 from "./Row2";


const gridTemplateLargeScreens = `
  "a b c"
  "a b c"
  "a b c"
  "a b f"
  "d e f"
  "d e f"
  "d h i"
  "g h i"
  "g h j"
  "g h j"
`;

const gridTemplateSmallScreens = `
  "a"
  "a"
  "a"
  "a"
  "b"
  "b"
  "b"
  "b"
  "c"
  "c"
  "c"
  "d"
  "d"
  "d"
  "e"
  "e"
  "f"
  "f"
  "f"
  "g"
  "g"
  "g"
  "h"
  "h"
  "h"
  "h"
  "i"
  "i"
  "j"
  "j"
`;



const Dashboard = () => {

  const isAboveMediumScreens = useMediaQuery("(min-width: 1200px)");

  return (
    <Box
    width = '100%'
    height= '100%'
    display= 'grid'
    gap = '1.5rem'
    sx={
      isAboveMediumScreens
        ? {
            gridTemplateColumns: "repeat(3, minmax(370px, 1fr))",
            gridTemplateRows: "repeat(10, minmax(60px, 1fr))",
            gridTemplateAreas: gridTemplateLargeScreens,
          }
        : {
            gridAutoColumns: "1fr",
            gridAutoRows: "80px",
            gridTemplateAreas: gridTemplateSmallScreens,
          }
    }
    >
        {/* Now we'll declare all the grid elements inside */}
        <Row1 />
        <Row2 />
        <Row3 />
    </Box>

  )
}

export default Dashboard