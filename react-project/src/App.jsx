import {Route,createBrowserRouter,createRoutesFromElements,RouterProvider} from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';

import HomePages from './pages/HomePages';
import MainLayout from './layouts/MainLayout';
import JobsPage from './pages/jobspage';
import JobPage ,{jobLoader} from './pages/JobPage';
import AddjobPage from './pages/AddjobPage';
import EditJobPage from './pages/EditJobPage';


const App = () => {
  //Add New Job
  const addJob =async(newJob)=>{
   const res =await fetch('/api/jobs',{
   method:'POST',
   headers:{
    'Content-Type':'application/json'
   },
   body:JSON.stringify(newJob)
  })
  return;
  };

  //Delete job
  const deleteJob =async(id)=>{
    const res =await fetch(`/api/jobs/${id}`,{
      method:'DELETE'
     })
     return;
  }
  
  //Update Job
  const updateJob =async(job) =>{
    const res =await fetch(`/api/jobs/${job.id}`,{
      method:'PUT',
      headers:{
       'Content-Type':'application/json'
      },
      body:JSON.stringify(job)
     })
     return;
  }

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path ='/' element={<MainLayout/>}>
    <Route index element = {<HomePages />} />
    <Route path ='/jobs' element={<JobsPage/>} />
    <Route path ='/add-job' element={<AddjobPage AddJobSubmit={addJob}/>} />
    <Route path ='/edit-job/:id' element={<EditJobPage updateJobSubmit={updateJob} />} loader={jobLoader}/>
    <Route path ='/jobs/:id' element={<JobPage deleteJob={deleteJob}/>} loader={jobLoader}/>

    <Route path ='*' element={<NotFoundPage/>} />
    </Route>
    )
  )
  return <RouterProvider router={router} />
};

export default App