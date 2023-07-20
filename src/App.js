import './App.css';
import Comment from "./components/Comment/Comment"

const userCommet = {
  id: 1,
  userName: "Hello Kitty!",
  commentText: "Learn React is awesome!",
  commentDate: new Date(),
  avatarUrl: 'https://placekitten.com/g/64/64'
}

function App() {
  return (
    <div className='App'>
      <Comment data={userCommet} />
    </div>
  );
}

export default App;