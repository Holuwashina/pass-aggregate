import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Paper } from '@material-ui/core';
import {
  SiZWave,
  SiActigraph,
  SiFirebase,
  SiTimescale,
  SiGooglelens,
  SiSourceengine,
  SiUntangle,
  SiTripadvisor,
  SiHotelsDotCom,
} from 'react-icons/si';

const Services = () => {
  const services = useStyles();

  return (
    <div className={services.root}>
      <Container maxWidth='md'>
        <Grid container spacing={4} justify='center'>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiFirebase />
              <Typography color='inherit' variant='h3'>
                Course Note
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiTimescale />
              <Typography color='inherit' variant='h3'>
                Practice cbt
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiHotelsDotCom />
              <Typography color='inherit' variant='h3'>
                Rent Apartment
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiGooglelens />
              <Typography color='inherit' variant='h3'>
                Buy and Sell
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiActigraph />
              <Typography color='inherit' variant='h3'>
                Hire Services
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiSourceengine />
              <Typography color='inherit' variant='h3'>
                Swap Gadgets
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiTripadvisor />
              <Typography color='inherit' variant='h3'>
                Tasued Gossip
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={4} className={services.grid}>
            <Paper elevation={5} className={services.paper}>
              <SiUntangle />
              <Typography color='inherit' variant='h3'>
                Tasued Meet
              </Typography>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Services;

const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -30,
  },

  grid: {
    cursor: 'pointer',
    [theme.breakpoints.only('xs')]: {
      padding: '6px 2px !important',
    },
  },

  paper: {
    padding: 10,
    textAlign: 'center',
    [theme.breakpoints.only('xs')]: {
      padding: '6px 3px',
      height: 60,
    },
    '&:hover': {
      backgroundColor: '#5f0937',
      color: 'white',
    },
  },
}));
