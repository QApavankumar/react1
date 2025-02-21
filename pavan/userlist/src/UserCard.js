import React from "react";
 
function UserCard({user}){

    return(
       
           <div className="card" style={{width:"18rem"}}>
  <img src={user.profilepic} className="card-img-top" alt="..."   style={{ width: "100%", height: "200px", objectFit: "cover" }} />
  <div className="card-body text-center" style={{backgroundImage: "url(" + "https://images.unsplash.com/photo-1528458876861-544fd1761a91?q=80&w=1388&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" + ")"}}>
    <h5 className="card-title">{user.name}</h5>
    <p className="card-text">{user.bio}</p>
    <p className="card-text">{user.email}</p>
    <a href="#" className="btn btn-primary">View More</a>
  </div>
</div>
        
    );
}
export default UserCard