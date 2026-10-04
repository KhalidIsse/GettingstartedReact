import UserCard from './UserCard'
import Blog from './Blog'

// function App(){
const App = () => {
  return (
    <>
      < UserCard
        name="Abdirashid Isse"
        email="rashkaisse200@gmail.com" />
      < UserCard
        name="Abdinasir Isse"
        email="nasirisse200@gmail.com" />
      < UserCard
        name="hassan Isse"
        email="hassanisse200@gmail.com" />
      <Blog />
    </>
  )

}


export default App