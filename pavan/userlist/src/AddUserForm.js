import React from "react"
import { useState } from "react";

function AddUserForm({saveHandler,closeModal}) {
    const[userData ,setUserData] = useState({
name:"",
email:"",
bio:"",
profilepic:""
    })
    const userChangeHandler = (e) => {
        const { name, value } = e.target;

        if (name === "profilepic") {
            const file = e.target.files[0];
            if (file) {
                const imageUrl = URL.createObjectURL(file); // Convert file to a URL
                setUserData((prev) => ({ ...prev, profilepic: imageUrl }));
            }
        } else {
            setUserData((prev) => ({ ...prev, [name]: value }));
        }
    };
    const handlerSaveUser =(e)=>{
        e.preventDefault(); 
        saveHandler(userData)
    }
    const hideModal=()=>{
closeModal()
    }
    return (
        <div>
            <form>
                <div className="form-group">
                    <label className="form-label">Name </label>
                       <input name="name" value={userData.name} onChange={userChangeHandler}  type="text" className="form-control" placeholder="User"/>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Gmail </label>
                       <input name="email" value={userData.email} onChange={userChangeHandler} type="mail" className="form-control" placeholder="email"/>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Bio </label>
                       <input name="bio" value={userData.bio} onChange={userChangeHandler} type="text" className="form-control" placeholder="Biography"/>
                </div>
                <div className="form-group mt-3">
                    <label className="form-label">Upload Profile Picture </label>
                       <input name="profilepic" onChange={userChangeHandler} type="file" className="form-control" />
                </div>
            </form>
            <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={hideModal}>Close</button>
        <button type="button" onClick={handlerSaveUser} className="btn btn-primary">Save changes</button>
      </div>
        </div>
    )
}

export default AddUserForm

