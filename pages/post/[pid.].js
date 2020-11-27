import { useRouter } from 'next/router'
import MyFriendsTravels from '../MyFriendsTravels'

const Post = () => {
  const router = useRouter()
  const { pid } = router.query

  return (
      <>
      <MyFriendsTravels />
  <p>Post: {pid}</p>
  </>)
}

export default Post
