import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'

class Navbar extends React.Component{
   constructor(props) {
      super(props);
      this.state = {
       change:false
      };
   }
   componentDidMount(){
      fetch('/api/users/me').then(user=>{
         if(user.status===200){
            this.setState({change:true});
         }
      })
   }
   onLogout = () => {
      fetch('/api/sessions/me', {
        method: 'DELETE'
      }).then(res => {
        if (res.status === 204) {
         this.setState({change:false});
        }
      });
    }
   
   render(){
      return (
      <>
         <div className="navbar">
         <Link to="/" className="Home"><i class="fa fa-film"></i> WatchBox</Link>
         {/* <a href="#"><i class="fa fa-fw fa-search"></i> Search</a> 
         <a href="#"><i class="fa fa-fw fa-envelope"></i> Contact</a> 
         <a href="#"><i class="fa fa-fw fa-user"></i> Login</a> */}
         {this.state.change==false?<Link to="/" className="Login"><i class="fa fa-fw fa-user"></i> SignIn</Link>:null}
         {this.state.change==true?<Link to="/home" className="Login" onClick={this.onLogout}><i class="fa fa-fw fa-user"></i> SignOut</Link>:null}
         </div>
      </>
      )
   }
}

export default Navbar;

