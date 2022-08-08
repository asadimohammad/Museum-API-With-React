import { useState } from 'react';
import axios from 'axios';
import './App.css';
// Components 
import Footer from './Components/Footer';
import Header from './Components/Header.js';
import MainContent from './Components/MainContent';

function App() {
  // create useStates
  const [userInput, setUserInput] = useState(""); 
  const [searchTerm, setSearchTerm] = useState("");
  const [art, setArt] = useState({}); 


  function randomIndex(array) {
      return Math.floor(Math.random() * array.length);      
  }

  function getData() {
    axios({
      url: "https://collectionapi.metmuseum.org/public/collection/v1/search",
      method: "GET",
      dataResponse: "json",
      params: {
        q: userInput
      },
    })
    .then((response) => {
      const randomID = randomIndex(response.data.objectIDs);
      console.log(response)
      return axios({
        url: `https://collectionapi.metmuseum.org/public/collection/v1/objects/${response.data.objectIDs[randomID]}`,
      })
    })
    .then((response) => {
      setArt(response.data);
    })
    .catch(() => {
      alert("Sorry we don't have that in our database!")
    });
   }

  // Input onChange - captures string
  const handleInput = (event) => {
    setUserInput(event.target.value); 
  };

  // When search is submitted - call the api
  const handleSubmit = (event) => {
    event.preventDefault();
    setSearchTerm(userInput); 
    getData();
    setUserInput("");
  };
  
  return (
    <div className="App">
      <Header input={handleInput} submit={handleSubmit} value={userInput} />
      <MainContent art={art} search={searchTerm} />
      <Footer />
    </div>
  );
}

export default App;