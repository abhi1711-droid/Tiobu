import React,{useEffect,useState} from 'react'
import {db} from "./misc/firestore"

function Donations() {

  const [donations,setDonations] = useState([])

  const fetchDonations = async()=>{
    const response = db.collection('Donations');
    const data = await response.get();
    data.docs.forEach(item=>{
      setDonations(events => [...donations, item.data()]);
     })
  }

  const [load,setLoad] = useState(false);

  useEffect(async()=>{
    setDonations([])
     setLoad(false);
     fetchDonations();
     console.log(donations)
     setLoad(true);
   },[5])

   if(load && donations.length > 0 && donations){
  return (
    <div>
      <h3>Events</h3>
      <br/>
      <br/>
      <div className='notice'>
      {donations.map((donation,key) => (
        <div key={key}>
          <br/>
          {donation.Amount}
        </div>
      ))
      }
      </div>
    </div>
  )
   }
}

export default Donations