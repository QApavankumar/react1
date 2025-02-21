import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import AddUserForm from './AddUserForm';
import UserCard from './UserCard';


function App() {
  const[showModal,setShowModal] = useState(false);
  const[userList ,setUserList]= useState([])
  const closeModal =()=>{
    setShowModal(false)
  }
  const saveHandler =(user) =>{
    console.log(user);
    setShowModal(false);
     setUserList((prev)=>([...prev,user]))
  };
  
  return (
  <>
  <h1 className='text-center text-success mt-4'>User List</h1>
  <div className='text-center my-5'>
<button className='btn btn-primary' onClick={()=> setShowModal(true)}>Add User</button>

  </div>
  {/*user list start*/}
  <div className="d-flex flex-wrap gap-3 justify-content-center">
 { userList.map((user,index)=>{

return  <UserCard key={index} user={user}/>;
 })}
 </div>

  {/*user list end*/}
{/*user modal start*/}
{showModal &&(
  <div className="custom-modal" >
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Add User</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
      </div>
      <div className="modal-body">
        <AddUserForm saveHandler={saveHandler} closeModal={closeModal}/>
      </div>
  
    </div>
  </div>
</div>
)}


{/*user modal end*/}
  </>
  );
}

export default App;
