import { CommentType } from '@/common/types/post'
import CommentCard from '@/components/elements/CommentCard'
import React from 'react'

function CommentList({dataComment, loadingComment} : {dataComment : CommentType[], loadingComment : boolean}) {
  const color = ['red', 'blue', 'yellow', 'orange', 'green'];
  const getRandomColor = () => {
    return color[Math.floor(Math.random() * color.length)];
  };
  return (
    <div className='mt-10'>
      {loadingComment ? <div>Loading...</div> : (
        dataComment.length === 0 ? <div>No Comment Available</div> :
        dataComment.map(comment => (
          <div key={comment.id}>
            <CommentCard color={getRandomColor()} {...comment}/>
          </div>
        ))
      )}
    </div>
  )
}

export default CommentList
