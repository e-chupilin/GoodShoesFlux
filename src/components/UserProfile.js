import { Link } from 'react-router';
import React, { Component, PropTypes } from 'react';
import style from '../res/css/style-user-profile.css';


class UserProfile extends Component {
  render() {
  const { user } = this.props;

  return (
      <div className='wrapper-userprof'>
             <div className='head'>
               <div className='foto'>
                 <img src={ user.foto } alt />
               </div>
               <div className='head-text'>
                 <h1>Welcome: &nbsp; { user.login }</h1>
                 <p>Login: &nbsp; { user.login }</p>
                 <p>Name: &nbsp; { user.name }</p>
                 <p>Login us: &nbsp; { user.role }</p>
                 <p>Phone: &nbsp; { user.phone } </p>
                 <p>Email: &nbsp; { user.email }</p>
               </div>
             </div>
             <div className='main-horizontal-line' />
             <div className='arrow-left'>
               <p>Foto</p>
             </div>
             <div className='arrow-left'>
               <p>Personal data</p>
             </div>
             <div className='arrow-left'>
               <p>Password</p>
             </div>
             <div className='wrapper-btn'>

                 <Link to={'/'}>
                   <div className='save-btn'>
                     <a className='text-login'>Ok</a>
                   </div>
                 </Link>

                 <Link to={'/'}>
                   <div className='cancel-btn'>
                     <a className='text-login' >Cancel</a>
                   </div>
                 </Link>

             </div>
           </div>

    )}
}

  UserProfile.propTypes = {
    user: PropTypes.shape({
    login: PropTypes.string.isRequired,
    role: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    foto: PropTypes.string.isRequired
  }).isRequired
  }

export default UserProfile
