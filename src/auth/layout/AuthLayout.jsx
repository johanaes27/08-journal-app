import { Grid, Typography, Paper } from "@mui/material"
import CalendarImage from "../images/CalendarImage.jpg"




export const AuthLayout = ({ children, title='' }) => {
  return (
    
    <div className="container">
      <Grid      
      container
      spacing={ 0 }
      // direction="column"
      // alignItems="center"
      // justifyContent="center"    
      sx={{ minHeight: '100vh' }}
      // sx={{ minHeight: '100vh', padding: 4 }}
      // sx={{ minHeight: '100vh',  backgroundColor: 'primary.main', padding: 4 }}
      >

        <Grid item xs={7}>
        <Paper
            sx={{
              height: '100%',
              backgroundColor: '#9c5252', // Vinotinto claro#9c5252
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
              borderRadius: 2
            }}
          >
              <img
                src={CalendarImage}
                alt="home pic"
                style={{ maxHeight: "400px", marginLeft: "0px" }}
              />
          </Paper>
        </Grid>   

        <Grid item xs={5}>
          <Paper
            sx={{
              height: '100%',
              backgroundColor: '#fff3eb', // Rosado pálido
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 3,
              borderRadius: 2,             
              
            }}
          >

              <Typography  variant="h3" style={{ fontFamily: '"Poetsen One", sans-serif'  }}>
                JournalApp
              </Typography>

    
            <Grid item
            className='box-shadow'
            xs={ 3 }
            style={{maxWidth: '80%'}}
            sx={{                   
                  width: { md: 450 }, 
                  backgroundColor: 'white', 
                  padding: 3, 
                  borderRadius: 2,
                
              }}>
        
        {/* <Typography variant='h5' sx= {{ mb:1 }}>{ title }</Typography>

{ children }  */}

      <Typography variant="h5" align="center" gutterBottom>
                  {title}
                </Typography>
                {children}
            </Grid>
              </Paper>
            </Grid>
        </Grid>
        </div>
  );
};
// 