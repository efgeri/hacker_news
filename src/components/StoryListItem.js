import react from 'react';

const StoryListItem = ({story}) => {
  return (
    <>
      <li> <a href={story.url} target='_blank' > {story.title} </a> <strong> Author:</strong> {story.by} </li>
    </>
    

      
  )
}

export default StoryListItem