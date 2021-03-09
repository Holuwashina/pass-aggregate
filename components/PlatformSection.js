import Image from 'next/image';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import { Tabs, Tab, Box, Grid, Paper } from '@material-ui/core';
import SelectionCard from './SelectionCard';

const PlatformSection = ({ platforms }) => {
  const platForm = useStyles();
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={platForm.root}>
      <Paper square elevation={3} className={platForm.tabBar}>
        <Tabs value={value} centered onChange={handleChange}>
          {platforms.map((platform) => (
            <Tab
              key={platform.id}
              label={platform.name}
              {...a11yProps(platform.id)}
            />
          ))}
        </Tabs>
      </Paper>

      {platforms.map((platform) => (
        <TabPanel key={platform.id} value={value} index={platform.id}>
          <Grid container justify='center' alignItems='center'>
            <Grid className={platForm.grid} item sm={12} md={5}>
              <Image
                src={platform.imageUrl}
                width={800}
                height={500}
                alt={platform.platformName}
              />
            </Grid>

            <Grid className={platForm.grid} item sm={12} md={7}>
              {platform.id === 0 && <SelectionCard platform={platforms[0]} />}

              {platform.id === 1 && <SelectionCard platform={platforms[1]} />}

              {platform.id === 2 && <SelectionCard platform={platforms[2]} />}
            </Grid>
          </Grid>
        </TabPanel>
      ))}
    </div>
  );
};

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;
  return (
    <div
      role='tabpanel'
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box p={3}>{children}</Box>}
    </div>
  );
};

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

const a11yProps = (index) => {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
};

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#fafafa',
    margin: '0 10px',
    padding: '20px 0',
  },
  tabBar: {
    maxWidth: 500,
    margin: 'auto',
  },
  grid: {
    display: 'flex',
    justifyContent: 'center',
  },
}));

export default PlatformSection;
