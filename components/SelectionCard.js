import Link from 'next/link';
import { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import GraphicEqIcon from '@material-ui/icons/GraphicEq';
import {
  InputLabel,
  MenuItem,
  FormControl,
  Select,
  TextField,
  Card,
  CardContent,
  Button,
} from '@material-ui/core';

const SelectionCard = ({ platform }) => {
  const { platformList } = platform;
  const selectionCard = useStyles();
  const [select, setSelect] = useState(platformList[0].name);

  const handleSelect = (e) => {
    setSelect(e.target.value);
  };

  return (
    <>
      <Card className={selectionCard.card}>
        <CardContent>
          <Alert severity='info'>{platform.info}</Alert>
          <FormControl
            className={selectionCard.form}
            fullWidth
            size='small'
            variant='outlined'
          >
            <InputLabel>{platform.name}</InputLabel>
            <Select
              value={select}
              onChange={handleSelect}
              label={platform.name}
            >
              {platformList.map((list) => (
                <MenuItem key={list.id} value={list.name}>
                  {list.id}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            size='small'
            variant='outlined'
            disabled
            label='Selected'
            value={select}
          />
          <Link href={`/platform/${select}`} passHref>
            <Button style={{ marginTop: 10 }} endIcon={<GraphicEqIcon />}>
              Explore
            </Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

const useStyles = makeStyles((theme) => ({
  form: {
    margin: '15px 0',
    minWidth: '250px',
  },

  card: {
    maxWidth: '400px',
    [theme.breakpoints.only('xs')]: {
      minWidth: '280px',
    },
  },
}));

export default SelectionCard;
