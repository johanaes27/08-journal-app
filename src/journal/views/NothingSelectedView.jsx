import { StarOutline } from "@mui/icons-material"
import { Grid, ThemeProvider, Typography } from "@mui/material"
import { purpleTheme } from "../../theme/purpleTheme"


export const NothingSelectedView = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
      <Grid
      className="animate__animated animate__fadeIn animate__faster"
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"    
      sx={{ minHeight: 'calc(100vh - 110px)',  backgroundColor: purpleTheme.palette.primary.main, borderRadius: 3 }}
      // sx={{ minHeight: 'calc(100vh - 110px)',  backgroundColor: 'primary.main', borderRadius: 3 }}

      >
        <Grid item xs={ 12 }>
            <StarOutline sx={{ fontSize: 100, color: 'white'  }} />
        </Grid>
        <Grid item xs={ 12 }>
            <Typography color="white" variant="h5">Selecciona o crea una entrada</Typography>
        </Grid>

      </Grid>
       </ThemeProvider>
  )
}
