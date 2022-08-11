import React from 'react'
// import { BrowserRouter,Routes, Route } from 'react-router-dom'
// import Home from './Pages/Home'
import SideBar from './SideBar/SideBar'
import { BrowserRouter , Routes  , Route } from 'react-router-dom';
// import Overview from './pages/Overview';
import { Members, AddMembers, EditMembers, ViewMembers , ListMembers } from './Pages/Member';
import  Form  from './Form';
// import Team from './pages/Team';

const App = () => {
  return (
    <BrowserRouter>
    <SideBar/>
     <Routes>
        {/* <Home/> */} 
        <Route key={Members} path='/Member' exact element={<Members/>} />
        <Route key={AddMembers} path='/Member/AddMember' exact element={<AddMembers/>} />
        <Route key={EditMembers} path='/Member/EditMember' exact element={<EditMembers/>}/>
        <Route key={ViewMembers} path='/Member/ViewMember' exact element={<ViewMembers/>}/>
        <Route key={ListMembers} path='/Member/ListMember' exact element={<ListMembers/>}/>
     </Routes>
    </BrowserRouter> 
    // <Form/>
  )
}

export default App