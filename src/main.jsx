import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './Home.jsx'
import News from './News.jsx'
import Aboutus from './AboutUs.jsx'
import { createBrowserRouter,redirect,RouterProvider} from 'react-router-dom'
import axios from 'axios'
import Article from './components/article.jsx'
import App from './App.jsx'
import Lebnenele from '/src/Pages/Lebnene_Ele/Lebnene_Ele.jsx'
import AdminDashboard from './admin-dashboard.jsx'
import AdminArticles from './components/admin-article.jsx'
import Team from './components/Team.jsx'
import Slider from './components/Slider.jsx'

const router = createBrowserRouter([
  {
    path:'*',
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
      },
      {
        path:'news/:postId',
        element:<Article/>,
        loader: async({params})=>{
          const response =await axios.get(`http://localhost:8000/api/article/${params.postId}`);
          return response.data;
        }
      },
      
      {
        path:'aboutus',
        element: <Aboutus/>,
        loader: async()=>{
          // console.log('fetching about us')
          const aboutus=await axios.get('http://localhost:4000/api/about-us')
          const teams= await axios.get('http://localhost:4000/api/team')
          return {aboutusData: aboutus.data, teamsData: teams.data}
        }
      },
      {
        path:'lebnenele',
        element: <Lebnenele />,
        loader: async () => {
          const lebneneEle = await axios.get('http://localhost:5000/api/lebneneEle/')
          const milestones= await axios.get('http://localhost:5000/api/milestone/')
          return {lebneneleData: lebneneEle.data, milestonesData: milestones.data};
        }
      },
    ]
    },
    {
      path:'/admin/dashboard/',
      element:<AdminDashboard/>,
      children:[
        {
          path:'News',
          element:<AdminArticles/>,
          loader: async ()=>{
            const response =await axios.get("http://localhost:4000/api/article/");
            return response.data;
          } ,
          
        },
        {
          path:'News/delete/:id',
          action:async ({params})=>{
            await axios.delete(`http://localhost:4000/api/article/${params.id}`);
             return redirect("/admin/dashboard/News");
          }
        }  
      ]

    },
   
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);binary


