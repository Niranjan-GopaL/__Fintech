import { useState } from "react";
import { Link } from "react-router-dom";
import ApiIcon from '@mui/icons-material/Api';
import { Box, Typography, useTheme } from "@mui/material";
import FlexBetween from "@/components/FlexBetween";

type Props = {};

const Navbar = (props: Props) => {
    const { palette } = useTheme();

    // to know which state we are on, for highlighting the text based on it   
    const [selected, setSelected] = useState("dashboard");
    return (
    <FlexBetween mb="0.25rem" p="0.5rem 0rem" color={palette.grey[300]}>
        {/* LEFT SIDE IN THE NAVBAR : ICON OF APP*/}
        <FlexBetween gap="0.75rem">
        <ApiIcon sx={{ fontSize: "28px" }} />
        <Typography variant="h4" fontSize="16px">
            Finanseer
        </Typography>
        </FlexBetween>

        {/* RIGHT SIDE has 2 boxes inside a Flexbox : one for Predcitions , another for dashboard */}
        <FlexBetween gap="2rem">

        {/* PSEUDO SELECTORS IN MUI COMPONENTS i.e in order to style it on hover the syntax!!!*/}
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            {/* These 3 are the PROPS REQ FOR ANY link comp */}
            {/* Link is a react-router-dom comp, to: specifes where the link will take us, 
                onCLick specifies the changes in style on click */}
            {/* textDecoration: "inherit" means it inherits that property from PARENT ELEMENTS */}
            <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            style={{
                color: selected === "dashboard" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
            }}
            >
            dashboard
            </Link>
        </Box>
        <Box sx={{ "&:hover": { color: palette.primary[100] } }}>
            <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            style={{
                color: selected === "predictions" ? "inherit" : palette.grey[700],
                textDecoration: "inherit",
            }}
            >
            predictions
            </Link>
        </Box>
        </FlexBetween>
    </FlexBetween>
  );
};

export default Navbar;