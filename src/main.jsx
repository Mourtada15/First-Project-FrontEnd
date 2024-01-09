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
import AdminForm from './components/admin-form.jsx'


const router = createBrowserRouter([
  {
    path:'*',
    element:<App/>,
    children:[
      {
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
          const response =await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.postId}`);
          return response.data;
        }
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
        element: <Lebnenele />,
        loader: async () => {
          const lebneneEle = await axios.get('https://tpll-31oj.onrender.com/api/lebneneEle/')
          const milestones = await axios.get('https://tpll-31oj.onrender.com/api/milestone/')
          return {lebneneleData: lebneneEle.data, milestonesData: milestones.data};
        }
      },
      {
        path:'subscribe',
        action:async ({request}) =>{
          const formData= await request.formData();
          const {email}= Object.fromEntries(formData);
          const response= await axios.post('https://tpll-31oj.onrender.com/api/news/subscribe',{
            email:email,
          })
          if(!response){
            throw response;
          }
          return {ok:true}
        }
      }
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
            const response =await axios.get("https://tpll-31oj.onrender.com/api/article/");
            return response.data;
          } ,
          
        },
        {
          path:'News/:id/delete',
          action:async ({params})=>{
            await axios.delete(`https://tpll-31oj.onrender.com/api/article/${params.id}`);
             return redirect("/admin/dashboard/News");
          }
        },
        {
          path:'News/:id/edit',
          element:<AdminForm/>,
          loader:async ({params}) =>{
            const response = await axios.get(`https://tpll-31oj.onrender.com/api/article/${params.id}`);
            return response.data;
          },
          action:async ({request,params}) =>{
            const formData= await request.formData();
            const data = Object.fromEntries(formData);
            console.log(data);
            const response= await axios.patch(`https://tpll-31oj.onrender.com/api/article/${params.id}`,{...data},{ headers: {
              'Content-Type': 'multipart/form-data',
            },});

            if(!response){
              throw response;
            }
            return redirect("admin/dashboard/News");
          }
        }  
      ]

    },
   
    
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
);


