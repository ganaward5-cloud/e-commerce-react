import '../styles/Account.css'
import { useState } from 'react';

export default function Account() {

  const [account,setAccount] =useState({Fname:"" ,Lname:"",email:"" ,address:"" , CurPass:"" ,NewPass :"", ConfirmPass:""})
  return (
    <div className="account-page">

      <div className="account-sidebar">

        <div className="sidebar-section">
          <h3>Manage My Account</h3>

          <div className="sidebar-links">
            <div className="active">My Profile</div>
            <div>Address Book</div>
            <div>My Payment Options</div>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>My Orders</h3>

          <div className="sidebar-links">
            <div>My Returns</div>
            <div>My Cancellations</div>
          </div>
        </div>

        <div className="sidebar-section">
          <h3>My WishList</h3>
        </div>

      </div>

      <div className="profile-card">

        <h2>Edit Your Profile</h2>

        <form className="profile-form"   onSubmit={(ev) => ev.preventDefault()}>
          <div className="form-row">

            <div className="form-group">
              <label>First Name</label>
              <input type="text" placeholder="Md" value={account.Fname} onChange={(ev) => setAccount({...account,Fname:ev.target.value})}/>
            </div>

            <div className="form-group">
              <label>Last Name</label>
              <input type="text" placeholder="Rimel"  value={account.Lname} onChange={(ev) => setAccount({...account,Lname:ev.target.value})}/>
            </div>

          </div>


          <div className="form-row">

            <div className="form-group">
              <label>Email</label>
              <input
                type="email"
                placeholder="rimelllll@gmail.com"
                value={account.email} 
                onChange={(ev) => setAccount({...account,email:ev.target.value})}
              />
            </div>

            <div className="form-group">
              <label>Address</label>
              <input
                type="text"
                placeholder="Kingston, 5236, United State"
                value={account.address} 
                onChange={(ev) => setAccount({...account,address:ev.target.value})}
              />
            </div>

          </div>


          <div className="password-section">

            <label>Password Changes</label>

            <input
              type="password"
              placeholder="Current Password"
              value={account.CurPass} 
              onChange={(ev) => setAccount({...account,CurPass:ev.target.value})}
            />

            <input
              type="password"
              placeholder="New Password"
              value={account.NewPass} 
              onChange={(ev) => setAccount({...account,NewPass:ev.target.value})}
            />

            <input
              type="password"
              placeholder="Confirm New Password"
              value={account.ConfirmPass} 
              onChange={(ev) => setAccount({...account,ConfirmPass:ev.target.value})}
            />

          </div>

          <div className="form-actions">

            <button className="cancel-btn" type='button'>
              Cancel
            </button>

            <button className="save-btn"
              
              onClick={() => {if(account.NewPass!==account.ConfirmPass){return;}
              setAccount({
              Fname: "",
              Lname: "",
              email: "",
              address: "",
              CurPass: "",
              NewPass: "",
              ConfirmPass: ""})}
              }>
              
              Save Changes
            </button>

            {
            account.NewPass !==account.ConfirmPass && account.ConfirmPass!==""
            && (<p className='error-message'>Password did not match</p>)
            }

          </div>

        </form>

      </div>

    </div>
  );
}