import React, {useState} from 'react';
import { useHistory } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

import Grid from '@mui/material/Grid';
import TModal from './TModal';
function AllCreators() {
  const [creator,setCreator] = useState ([
    {
      name: "Bhuvan Bam",
      photo: require('./images/bb.jpg'),
      profession : "Creator"
    },
    {
      name : "CarryMinati",
      photo: require('./images/carry.jpg'),
      profession : "Roaster"
    },
    {
      name: "PewDiePie",
      photo: require('./images/pewdie.jpg'),
      profession: "Musician"
    },
    {
      name: "Flights", 
      photo: require('./images/flights.jpg'),
      profession: "Gamer"
    },
    {
      name: "Varun Singla",
      photo: require('./images/varun.jpg'),
      profession : "Teacher"
    },
    {
      name: "Harry",
      photo : require('./images/harry.jpg'),
      profession : "Teacher"
    }, 
    {
      name: "Harsh", 
      photo : require('./images/harsh.jpg'),
      profession : "Creator"
    },
    {
      name : "SkRossi",
      photo : require('./images/skrossi.jpg'),
      profession : "Gamer"
    }
  ])

  let history = useHistory()

  return (
 <>
    <Box sx={{ flexGrow: 1, 'margin-bottom' : '15px' }}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            TIOBU
          </Typography>
          <Button color="inherit" href = "https://console.firebase.google.com/u/0/project/tiobu-533a1/firestore/data/~2Fdonation-amount~2FkFc4rE2DbK1DknP3pdYx">Check Donation</Button>
        </Toolbar>
      </AppBar>
    </Box>

    <Box sx={{ flexGrow: 1 , 'margin-left': '15px' , 'margin-right' : '15px' , 'min-height' : '100px' }}>
      <Grid container spacing={2}>
    {creator && creator.map(data => (
      <TModal data = {data} />
    ))}
    </Grid>
    </Box>

    </>

  );
}

export default AllCreators