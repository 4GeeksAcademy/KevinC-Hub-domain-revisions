import "bootstrap";
import "./style.css";


import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

// let functions and characters
window.onload = function() {
  let pronouns = ['the', 'our', 'his', 'her'];
  let adjs = ['great', 'big', 'little', 'giant'];
  let nouns = ['jogger', 'racoon', 'dog', 'cat'];
  let domains = ['.com', '.net', '.org', '.gov'];

  // Java program to demonstate the working of for loop
  for(let pronoun of pronouns) {
    for(let adj of adjs ) {
      for(let noun of nouns ) {
        for(let domain of domains) {
        console.log(pronoun+adj+noun+domain); }
      }
    }
  }
  
  console.log("Hello Rigo from the console!");
};
