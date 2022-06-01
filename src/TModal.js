import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Grid from '@mui/material/Grid';
import FormControl from '@mui/material/FormControl';
import { InputLabel, Input, Form } from '@mui/material';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import {db} from './misc/firestore'

const currencies = [
  {
    value: 'USD',
    label: '$',
  },
  {
    value: 'INR',
    label: '₹'
  },
  {
    value: 'EUR',
    label: '€',
  },
  {
    value: 'BTC',
    label: '฿',
  },
  {
    value: 'JPY',
    label: '¥',
  }  
]


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 350,
  height: 600,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  padding: 5,
};

function TModal(props) {

  const [open, setOpen] = React.useState(true);
  
  const donate = document.getElementById(".donation-form")
  const handleOpen = () => {
    setOpen(true);
    localStorage.setItem("tap",true);
    localStorage.setItem("id",props.data.id);
  };
  const handleClose = () => {
    setOpen(false);
    localStorage.setItem("tap",false);
    localStorage.setItem("id",-1);
  };

  const [currency, setCurrency] = React.useState();

  const handleChange = name => e =>{
    setFormData({...formdata, [name] : e.target.value})
   };

  const [formdata , setFormData] = React.useState({
    money : 0 ,
    name : '',
    curr : '₹',
  });

  const Donation = document.querySelector(".donation")

  const handlesubmit = (e) => {
  e.preventDefault();
  db.collection('Donation').doc().set({
    Creator : props.data.name,
    Name : formdata.name,
    Amount : formdata.money,
    Currency : formdata.curr
  }).then(  (res) => {
      Donation.reset();
  });
}; 
    
  React.useEffect(() => {
    // console.log(props.toggle , props.id , props.data.id)

    if ((props.toggle === true )&& (props.id === props.data.id)){
      setOpen(true);
    }
    else{
      setOpen(false);
    }
  },[]);
  
  return ( 
    <>
      <Grid item xs={6} md={3} sm={6} onClick={handleOpen}>
       <Card sx={{ maxWidth: 200  }}>
      <CardMedia
        component="img"
        height="150"
        width = "80"
        image={props.data.photo}
        alt="Paella dish"
      />
      <CardContent>
        <h5> {props.data.name} </h5>
        <h6> {props.data.profession} </h6>
      </CardContent>
      </Card>
      </Grid>

      {/* Form */}
      <Modal
        id = "donation-form"
        class = "donation-form"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >

        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        <div style={{'display':'flex','align-items':'center','justify-content':'left'}}>
        <img src={props.data.photo} style={{'border-radius':'50%', 'width' : '3rem', 'margin-right' : '10px'}}/>
        <h3>{props.data.name}</h3>
        </div>
        <br/>
       
        <h5>Send your love to {props.data.name}</h5>
        <h5> Become a real Fan </h5>
        <br/>
        <form class = "donation" onSubmit = {handlesubmit}>
        
          
          <TextField
          id="filled-select-currency"s
          select
          value={currency}
          onChange={handleChange('curr')}
          variant="filled"
        >
          {currencies.map((option) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
           </TextField>
            <t/>   <t/>
          <FormControl>
            <InputLabel htmlFor="my-input" >Amount</InputLabel>
            <Input id="amount" type= "number" onChange={handleChange('money')} class= "amount" required />
          </FormControl>
            <br/>
            <br/>
          <FormControl>
            <InputLabel htmlFor="my-input">Name</InputLabel>
            <Input id="name" aria-describedby="my-helper-text" class="name" onChange={handleChange('name')}/>
          </FormControl>
            <br/>
            <br/>
            <FormControl>
            <InputLabel htmlFor="my-input">Say Something Nice</InputLabel>
            <Input id="message" aria-describedby="my-helper-text" class="message"/>
          </FormControl>
            <br/>
            <br/>
          <Button  class = "submit" type= "submit" variant="contained" color="primary" styles={{'justify-content': 'center' , 'color' : 'blue'}}>
          Donate {formdata.curr}{formdata.money}
        </Button>
          </form>
          </Typography>
        </Box>
      </Modal>

      </>
  );

}

export default TModal