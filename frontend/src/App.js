import Login from './comps/Login';
import Signup from './comps/Signup';
import Home from './comps/Home';
import { Routes, Route } from 'react-router-dom';
import Contact from './comps/Contact/Contact';
import Navigation from './comps/Navigation';
import Footer from './comps/Footer/Footer';
import UserPage from './comps/UserPage';
import CreateBlog from './comps/Blogs/CreateBlog';
import EditBlog from './comps/Blogs/EditBlog';
import ShowBlog from './comps/Blogs/ShowBlog';
import DeleteBlog from './comps/Blogs/DeleteBlog';

function App() {
  return (
   <div className='App'>
    <Navigation/>
   <Routes>
  <Route path='/' element={<Home/>}/>
  <Route path='/login' element={<Login/>}/>
  <Route path='/signup' element={<Signup/>}/>
  <Route path='/home' element={<Home/>}/>
  <Route path='/contact'element={<Contact/>}/>
  <Route path='/userpage' element={<UserPage/>}/>
  <Route path='/blogs/create' element={<CreateBlog/>} />
  <Route path='/blogs/details/:id' element={<ShowBlog/>} />
  <Route path='/blogs/edit/:id' element={<EditBlog/>} />
  <Route path='/blogs/delete/:id' element={<DeleteBlog/>} />
 
   </Routes>
   <Footer/>
   </div>
  );
}

export default App;

