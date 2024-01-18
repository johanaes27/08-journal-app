// import { Box, Toolbar } from "@mui/material"
// import { NavBar, SideBar } from "../components";

// const drawerWidth = 280;

// export const JournalLayout = ({ children }) => {
//   return (
//     <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

//         <NavBar 
//         drawerWidth={ drawerWidth }
//         />

//         <SideBar drawerWidth={ drawerWidth }/>
       
//         <Box component='main'
//              sx={{ flexGrow: 1, p: 3 }}
             
//         >
//             <Toolbar />

//             { children }

//         </Box>

//     </Box>
//   )
// }


import { Box, Toolbar, useTheme, useMediaQuery } from "@mui/material";
import { NavBar, SideBar } from "../components";
import { useState } from "react";

const drawerWidth = 280;
const drawerMinWidth = 70;

export const JournalLayout = ({ children }) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));
  const [isSideBarOpen, setIsSideBarOpen] = useState(!isSmallScreen);
  const finalDrawerWidht = isSideBarOpen === true ? drawerWidth : drawerMinWidth

  const toggleDrawer = () => {
    setIsSideBarOpen(!isSideBarOpen);
  };

  return (
    <Box sx={{ display: 'flex' }} className="animate__animated animate__fadeIn animate__faster">

      <NavBar drawerWidth={finalDrawerWidht} isSmallScreen={isSmallScreen} />

      {!isSmallScreen && (
        <SideBar drawerWidth={finalDrawerWidht} toggleDrawer={toggleDrawer} isSideBarOpen={isSideBarOpen} />
      )}

      <Box component='main' sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        {children}
      </Box>

    </Box>
  );
};