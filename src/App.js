import { Routes, Route } from 'react-router-dom'
import { Login } from './components/Login';
import { Signup } from './components/Signup'
import { Toaster } from './toaster/Toaster';
import { useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import { CreateLead } from './components/admin/CreateLead';

function App() {
  const [settoast, setsettoast] = useState(null)
  const [msg, setmsg] = useState(null)
  const viewToast = (data, msg) => {
    setsettoast(data)
    setmsg(msg)
  }
  return (
    <>
      <Toaster mode={settoast} msg={msg}></Toaster>
      <Routes>
        <Route path='/login' element={<Login viewToast={viewToast}/>} ></Route>
        <Route path='/signup' element={<Signup viewToast={viewToast} />}></Route>
        <Route path='/create' element={<CreateLead />}></Route>
      </Routes>
    </>
  );
}

export default App;
