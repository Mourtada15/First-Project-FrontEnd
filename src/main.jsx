import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import News from './News.jsx'
import Aboutus from './AboutUs.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/article.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    loader: async ()=>{
      const response = await axios.get("https://tpll-31oj.onrender.com/api/article/");
      console.log(response);
      return response.data;
    }
    },
    {
      path:'/news',
      element:<News/>,
      
    },
    {
      path:'/posts/:postId',
      element:<Article/>
    },
    {
      path:'/aboutus',
      element: <Aboutus/>
    }
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
    {/* <Article/> */}
  </React.StrictMode>,
)
