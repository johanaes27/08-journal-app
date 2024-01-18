import { Box, Button, Divider, Drawer, Grid, IconButton, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./SideBarItem";
import { useState } from "react";
import { ArrowBack, ArrowForward } from "@mui/icons-material";


export const SideBar = ({ drawerWidth = 240, toggleDrawer, isSideBarOpen }) => {

  const { displayName } = useSelector( state => state.auth ); 
  const { notes } = useSelector( state => state.journal ); 
  

  return (
    <Box
        component='nav'
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
    >
    
      <Drawer
          variant="permanent" // temporary
          open
          sx={{
            display: { sx: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth }
          }}
      >
       { isSideBarOpen === false ?
        <IconButton  onClick={toggleDrawer} color="primary" aria-label="arrow forward">
            <ArrowForward />
        </IconButton>
        :
        <>
        <Toolbar style={{justifyContent: 'space-between'}}>
            <Typography variant='h6' noWrap component='div'>
           {displayName}
            </Typography>
            {/* <Button
              onClick={toggleDrawer}
            >
              Controlador
            </Button> */}
            <IconButton  onClick={toggleDrawer} color="primary" aria-label="arrow back">
                <ArrowBack  />
            </IconButton>
        </Toolbar>
        <Divider/>

          <List>
            {
              notes.map( note => (
                <SideBarItem key={note.id} { ...note } />
              ))
            }

          </List>
      </>
}
      </Drawer>
    </Box>
  )
}
