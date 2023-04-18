import React, { useState, useEffect } from "react";
import StoryList from "../components/StoryList";


const MainContainer = () => {
  const [storyInfo, setStoryInfo] = useState([]);
  const [filterText, setFilterText] = useState('');
  

  useEffect(() => {
    fetch("https://hacker-news.firebaseio.com/v0/topstories.json")
    .then((res) => res.json())
    .then((data) => {
      loadStories(data)
    });    
  }, []);

  const loadStories = (ids) => {
  const storyPromises = ids.map((storyID) => {
    return fetch(`https://hacker-news.firebaseio.com/v0/item/${storyID}.json`).then((res) => res.json())
  })
  Promise.all(storyPromises).then((storyData) => {
      setStoryInfo(storyData);
    })
  }

  const handleInputChange = (event) =>{
    console.log(event.target.value)
    setFilterText(event.target.value)
  }

  let tempArray = storyInfo.filter(word  => word.title.toLowerCase().includes(filterText.toLowerCase()))

  return (
    <div>
      <h1>Top Stories</h1>
      <input type="text" placeholder="Type to filter" onChange={handleInputChange} value={filterText}></input>
      {/* <CharacterSelect
        characters={characters}
        handleSelectChange={handleSelectChange}
      /> */}
      {/* {selectedCharacter ? (
        <CharacterDetail character={selectedCharacter} episodes={episodes} />
      ) : null} */}
      {storyInfo.length ? <StoryList topStories={tempArray}/> : <p> loading </p>}
    </div>
  );
};

export default MainContainer;
