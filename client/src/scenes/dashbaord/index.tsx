/*
Few NICE things :
you dont have to import stuff, they will be automatically imported when you select from dropdown.

Few WIERD STUFF :
when I tried to import useTheme AUTOMATICALLY, it was import {useTheme} from '@emotion/react';
in drop down there might be more than one of the thing we want , SELECT CAREFULLY.
*/

import { Box, useMediaQuery } from "@mui/material";
// import Row1 from "./Row1";
// import Row2 from "./Row2";
// import Row3 from "./Row3";

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
  return (
    <Box
    width = '100%'
    height= '100%'
    display= 'grid'
    gap = '1.5rem'
    sx = {{
        gridTemplateColumns :"repeat(3, minmax(370px, 1fr))" ,
        gridTemplateRows :"repeat(10, minmax(60px, 1fr))",
        gridTemplateAreas : gridTemplateLargeScreens
    }}
    >
        {/* Now we'll declare all the grid elements inside */}
        <Box bgcolor="#ffffff" gridArea="a"></Box>
        <Box bgcolor="#ffffff" gridArea="b"></Box>
        <Box bgcolor="#ffffff" gridArea="c"></Box>
        <Box bgcolor="#ffffff" gridArea="d"></Box>
        <Box bgcolor="#ffffff" gridArea="e"></Box>
        <Box bgcolor="#ffffff" gridArea="f"></Box>
        <Box bgcolor="#ffffff" gridArea="g"></Box>
        <Box bgcolor="#ffffff" gridArea="h"></Box>
        <Box bgcolor="#ffffff" gridArea="i"></Box>
        <Box bgcolor="#ffffff" gridArea="j"></Box>
    </Box>

  )
}

export default Dashboard