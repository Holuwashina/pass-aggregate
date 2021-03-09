import { makeStyles } from '@material-ui/core/styles';
import { Grid, Paper, Typography } from '@material-ui/core';
import { SiZWave, SiWheniwork, SiTalend } from 'react-icons/si';



const HeroBottom = () => {
  const heronote = useStyles();
  const noteCard = [
    {
      icon: <SiZWave />,
      text: 'Interractive Class',
    },
    {
      icon: <SiWheniwork />,
      text: 'Curriculum Based',
    },
    {
      icon: <SiTalend />,
      text: 'Best Instructors',
    },
  ];

  return (
    <div className={heronote.root}>
      <Grid
        container
        spacing={3}
        justify='center'
      >
        {noteCard.map((card) => (
          <Grid key={card.text} item>
            <Paper elevation={5} className={heronote.paper}>
              {card.icon}
              <Typography
                color='primary'
                variant='h3'
              >
                {card.text}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </div>
  );
}


const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: -60,
  },
  paper: {
    padding: 13,
    textAlign: 'center'
  }
}));

export default HeroBottom;
