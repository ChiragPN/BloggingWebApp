import NavBar from './components/NavBar';
import './App.css';
import BlogPostList from './pages/BlogPostList';
import PostDetailsPage from './pages/PostDetailsPage';

function App() {
  return (
    <div>
      <NavBar/>
      <PostDetailsPage/>
    </div>
  );
}

export default App;
