import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import News from './News.jsx'
import Aboutus from './AboutUs.jsx'
import { createBrowserRouter,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/article.jsx'
import App from './App.jsx'
import Lebnenele from '/src/Pages/Lebnene_Ele/Lebnene_Ele.jsx'

const router = createBrowserRouter([
  {
    path:'/',
    element:<App/>,
    children:[
      {
        path:'Home',
        index:true,
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
            path:'article/:postId',
            element:<Article/>,
            loader: async({params})=>{
              const article =await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.postId}`);
              // const recentArticles= await axios.get("http://localhost:8000/api/article/recent-articles");
              const response={article:article.data};
              return response;
            }
          },
        ]
      },
      
      {
        path:'aboutus',
        element: <Aboutus/>,
        loader: async()=>{
          // console.log('fetching about us')
          const aboutus=await axios.get('https://tpll-31oj.onrender.com/api/about-us/')
          const teams= await axios.get('https://tpll-31oj.onrender.com/api/team/')
          return {aboutusData: aboutus.data, teamsData: teams.data}
        }
      },
      {
        path:'lebnenele',
        element: <Lebnenele/>
      }
    ]
    },
    
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);


