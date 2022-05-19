import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const PostCard = ({post}) => {
  //console.log(post);
  return (
    <div className='bg-white shadow-lg rounded-lg p-0 lg:p-8 pb-12 mb-8'>
      <div className='relative overflow-hidden shadow-md pb-80 mb-6'>
        <img src='http://cdn2.hubspot.net/hubfs/145335/blogging-for-business-heres-everything-you-need-to-know.jpg'
        alt={post.title} 
  className='object-top absolute h-80 w-full object-cover shadow-lg rounded-t-lg lg:rounded-lg' />
  </div>
 <h1 className="transition duration-100 text-center mb-8 cursor-pointer hover:text-pink-600 text-3xl font-semibold">
      <Link href={`/post/${post.slug}`}>{post.title}</Link>
    </h1>
    <div className='bloc lg:flex text-center items-center justify-center mb-8 w-full'>
      <div className='flex items-center justify-center mb-4 lg:mb-0 w-full lg:w-auto mr-8'>
        <img src='https://www.myenglishteacher.eu/blog/wp-content/uploads/2021/05/other-word-for-writer-or-author.jpeg' alt={post.author.name} height="80px" width="80px" className='align-middle rounded-full' />
      <p className='inline align-middle text-gray-700 ml-2 text-lg'>{post.author.name}</p>
      </div>
      <div className='font-medium text-gray-700'>
        <span>{moment(post.createdAt).format('MMM DD YYYY')}</span>
      </div>

    </div>
    <p className='text-center text-lg text-gray-700 font-normal px-4 lg:px-20 mb-8'>{post.excerpt}</p>
    <div className='text-center'><Link href={`/post/${post.slug}`}>
      <span className='transition duration-500 transform hover:-translate-y-1 inline-block bg-pink-600 text-lg font-medium rounded-full text-white px-8 py-3 cursor-pointer'>
        Continue Reading
      </span>
      </Link></div>
      </div>
  )
}

export default PostCard