import { makeStyles } from '@material-ui/core/styles';
import { Grid, Typography, Container, Paper } from '@material-ui/core';

const Slug = ({ school }) => {
  const slug = useStyles();
  return (
    <div className={slug.root}>
      <div className={slug.overlay}>
        <Container className={slug.container} maxWidth='sm'>
          <Typography color='textPrimary' variant='h1'>
            {school.id}
          </Typography>
          <Typography gutterBottom color='textSecondary' variant='h3'>
            {school.name}
          </Typography>
          <Typography gutterBottom color='textSecondary' variant='h2'>
            {school.info}
          </Typography>
          <Typography gutterBottom color='textSecondary' variant='h2'>
            GET ACCESS TO
          </Typography>

          <Grid container spacing={3} justify='center'>
            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h3'>
                  DEPARTMENTS' NOTES
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h3'>
                  REAL-TIME QUESTIONS
                </Typography>
              </Paper>
            </Grid>

            <Grid item>
              <Paper elevation={5} className={slug.paper}>
                <Typography color='primary' variant='h3'>
                  MEET NEW STUDENTS
                </Typography>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </div>
    </div>
  );
};

export default Slug;

//http://json-db-passa.herokuapp.com/schools

export const getStaticProps = async ({ params }) => {
  const slug = params.slug;
  //Fetch the platform
  const school_res = await fetch(`http://json-db-passa.herokuapp.com/schools/?slug=${slug}`);
  const found = await school_res.json();

  //Return the platform as props
  return {
    props: {
      school: found[0],
    },
  };
};

export const getStaticPaths = async () => {
  const platform_res = await fetch('http://localhost:4000/schools/');
  const schools = await platform_res.json();

  //Return the platform as props
  return {
    paths: schools.map((school) => ({
      params: { slug: school.slug.toString() },
    })),
    fallback: false,
  };
};

const useStyles = makeStyles(() => ({
  root: {
    marginBottom: 32,
    backgroundImage: `url('/images/slugbg.jpg')`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
  },

  overlay: {
    padding: '48px 0 10px',
    backgroundColor: `rgba(95,9,55, 0.8)`,
  },

  container: {
    padding: 20,
    margin: '40px auto',
    textAlign: 'center',
  },

  paper: {
    padding: 10,
    textAlign: 'center',
  },
}));
