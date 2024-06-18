import React from 'react'
import PostCard from '../../../components/elements/PostCard'
import { PostType } from '@/common/types/post'


function Content({dataPost, isLoading} : {dataPost: PostType[], isLoading: boolean}) {
  return (
    <div>
      {isLoading ? (
        <div>Loading...</div>
      ) : (
        <div className='grid gap-4'>
          {dataPost.map((post) => (
            <div key={post.id} >
              <PostCard className='hover:!scale-[1.02]' {...post}/>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Content
