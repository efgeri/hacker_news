import React from 'react';
import StoryListItem from './StoryListItem';

const StoryList = ({topStories}) => {
  
  
  const storyListElements = topStories.map((story, index) => {
    return <StoryListItem key={index} story={story} />
  })

  return (
    <div>
      <h3>Story List</h3>
      <ul>
        {storyListElements}
      </ul>
    </div>
  )
}

export default StoryList;