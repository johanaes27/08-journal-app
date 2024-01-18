import { CircularProgress, Grid, ThemeProvider } from "@mui/material"
import { purpleTheme } from "../../theme/purpleTheme"

export const CheckingAuth = () => {
  return (
    <ThemeProvider theme={purpleTheme}>
    <Grid
      container
      spacing={ 0 }
      direction="column"
      alignItems="center"
      justifyContent="center"    
      sx={{ minHeight: '100vh',  backgroundColor: purpleTheme.palette.primary.main, padding: 4 }}
      // sx={{ minHeight: '100vh',  backgroundColor: 'primary.main', padding: 4 }}
      >

      <Grid container
          direction='row'
          justifyContent='center'
          >
          <CircularProgress color='warning' />
          </Grid>
     </Grid>
</ThemeProvider>
  )
}
