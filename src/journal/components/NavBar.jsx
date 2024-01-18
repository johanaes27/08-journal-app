import { LogoutOutlined, MenuOutlined } from "@mui/icons-material"
import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import { purpleTheme } from "../../theme/purpleTheme"
import { useDispatch } from "react-redux"
import { startLogout } from "../../store/auth"


export const NavBar = ({ drawerWidth = 240 }) => {

    const dispatch = useDispatch();

    const onLogout = () => {
        dispatch ( startLogout() );
    }


  return (
    <AppBar 
        position="fixed"
        sx={{ 
            width: { sm: `calc(100% - ${ drawerWidth }px)`},
            ml: { sm: `${ drawerWidth }px` },
            backgroundColor: purpleTheme.palette.primary.main
            // backgroundColor:'primary.main'

        }}
    >
        <Toolbar>
            <IconButton
                color="inherit"
                edge='start'
                sx={{ mr: 2, display: { sm: 'none' } }}
            >
                <MenuOutlined/>
            </IconButton>
            {/* <IconButton
                color="inherit"
                edge="start"
                sx={{ mr: 2, display: { sm: 'block', md: 'none' } }} // Mostrar solo en pantallas pequeñas
                onClick={toggleDrawer}
                >
                <MenuOutlined />
            </IconButton> */}

            <Grid container direction='row' justifyContent='space-between' alignItems={'center'}>
                <Typography variant='h6' noWrap component='div'> JournalApp </Typography>

                <IconButton 
                color ='error'
                onClick={ onLogout }
                >
                    <LogoutOutlined />
                </IconButton>

            </Grid>

        </Toolbar>
    </AppBar>
  )
}
