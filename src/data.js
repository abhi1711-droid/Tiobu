import {db} from './misc/firestore'

const Donation = document.querySelector(".donation");
const Amount = document.querySelector(".amount");
const Name = document.querySelector(".name");
const Message = document.querySelector(".message");
const Submit = document.querySelector(".submit");

Submit.addEventListener("click" , (e) => {
  e.preventDefault();
  db.collection('Donation').doc().set({
    Name : "Abhishek",
    Amount : 45,
    Message : "hi"
  }).then(  (res) => {
    console.log(res);
    Donation.reset();
  });
}); 