import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import News from './News.jsx'
import Aboutus from './AboutUs.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/article.jsx'
import App from './App.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'Home',
        element:<Home/>,
        loader: async ()=>{
          const response = await axios.get("https://tpll-31oj.onrender.com/api/article/");
          return response.data;
        }
      },
      {
        path:'news',
        element:<News/>,
        loader: async ()=>{
          const response = await axios.get("https://tpll-31oj.onrender.com/api/article/");
          return response.data;
        },
        children:[
          {
            path:'posts/:postId',
            element:<Article/>,
            loader: async({params})=>{
              const article =await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.postId}`);
              const recentArticles= await axios.get("http://localhost:8000/api/article/recent-articles");
              const response={article:article.data,recentArticles:recentArticles.data};
              return response;
            }
          },
        ]
      },
      
      {
        path:'aboutus',
        element: <Aboutus/>
      }
    ]
    },
    
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
  document.getElementById('root')
);

