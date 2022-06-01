import React, {useState, useEffect} from 'react';
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
import { shouldForwardProp } from '@mui/system';
import { ShowChart } from '@mui/icons-material';
function AllCreators() {
  let tap;
  let Id;

  if(localStorage.getItem("tap")){
    tap = localStorage.getItem("tap");
    Id = localStorage.getItem("id");
    }
    else{
    tap=false;
    Id = -1;
    }

    const entries = performance.getEntriesByType("navigation");
    const Dona = document.getElementById(".don");
    
    const [open, setOpen] = React.useState(true);
    const handleOpen = () => {
      setOpen(true).show(Dona);
      localStorage.setItem("tap",true);
      localStorage.setItem("id",Id);
    };

    useEffect(() => {
      if (entries.map( nav => nav.type ) == "reload") {
        console.log("This page is reloaded");
      } else {
        console.log("This page is not reloaded");
      }
    });

  const [creator,setCreator] = useState ([
    { id: 0,
      name: "Bhuvan Bam",
      photo: require('./images/bb.jpg'),
      profession : "Creator"
    },
    { id:1,
      name : "CarryMinati",
      photo: require('./images/carry.jpg'),
      profession : "Roaster"
    },
    {id : 2,
      name: "PewDiePie",
      photo: require('./images/pewdie.jpg'),
      profession: "Musician"
    },
    { id:3,
      name: "Flights", 
      photo: require('./images/flights.jpg'),
      profession: "Gamer"
    },
    { id: 4,
      name: "Varun Singla",
      photo: require('./images/varun.jpg'),
      profession : "Teacher"
    },
    { id: 5,
      name: "Harry",
      photo : require('./images/harry.jpg'),
      profession : "Teacher"
    }, 
    {id : 6,
      name: "Harsh", 
      photo : require('./images/harsh.jpg'),
      profession : "Creator"
    },
    { id : 7,
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
    <div id = "don">
    <Box sx={{ flexGrow: 1 , 'margin-left': '15px' , 'margin-right' : '15px' , 'min-height' : '100px' }}>
      <Grid container spacing={2}>
    {
      
    creator && creator.map(data => (
      <TModal data = {data} toggle = {tap}  id = {Id}/>
    ))}
    </Grid>
    </Box>
    </div>

    </>

  );
}

export default AllCreators