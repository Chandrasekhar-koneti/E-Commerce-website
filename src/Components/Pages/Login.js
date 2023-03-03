
import { useState, useRef, useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import AuthContext from '../Store/Auth-context';
import Footer from '../Footer';
import classes from './Login.module.css';


const Login=()=>{
  const History=useHistory()
  const emailinputref=useRef()
  const passwordref=useRef()

  const Authctx=useContext(AuthContext)

  const [isLogin, setIsLogin] = useState(true);
  const[isLoading,setisLoading]=useState(false)

  const switchAuthModeHandler = () => {
    setIsLogin((prevState) => !prevState);
  };

  const submithandler=(event)=>{
    event.preventDefault()
    const enteredemail=emailinputref.current.value
    const enteredpassword=passwordref.current.value

    setisLoading(true)
    let url;
    if(isLogin){
      url='https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyDiBk2Q6cqWGZHkglcB8GdEGmkbcls5Urg'
    }
    else{
      url='https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyDiBk2Q6cqWGZHkglcB8GdEGmkbcls5Urg'
    }
    fetch(url,{
        method:'POST',
        body:JSON.stringify({
          email:enteredemail,
          password:enteredpassword,
          returnSecureToken:true
        }),
        headers:{
          'Content-Type':'application/json'
        }
      }).then((res)=>{
        setisLoading(false)
        if(res.ok){
          return res.json()
        }
        else{
          return res.json().then((data)=>{
            let errormessage='Authentication Failed';
            if(data && data.error && data.error.message){
              errormessage=data.error.message
            }
            // alert(errormessage)
            throw new Error(errormessage)
          })
        }
      }).then((data)=>{
        Authctx.login(data.idToken,data.email)
    
        if(isLogin){
        History.replace('/store')
        }
        else{
          alert('Authentication Successful !!! Login Now')
        }
      }).catch((error)=>{
        alert(error.message)
      })
  }
  return (
    <>
     <nav>
             <div className="nav-bar">
                 <NavLink  to='/' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}
                  className="nav-home">HOME</NavLink>
                 <NavLink to='/store' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                 className="nav-store">STORE</NavLink>
                 <NavLink to='/about' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}} 
                 className="nav-about">ABOUT</NavLink>
                 <NavLink to='/contact' style={{padding: '10px', margin: '10px',textDecoration: 'none',color: 'white'}}
                 className="nav-login">CONTACT</NavLink>

            </div>
       </nav>
       <div className={classes.pageheader} style={{color: 'white', backgroundColor: 'gray',paddingTop: '63px'}}>
         Welcome To Generics <br/>
         </div>
    
    <section className={classes.auth}>
      <h1>{isLogin ? 'Login' : 'Sign Up'}</h1>
      <form onSubmit={submithandler}>
        <div className={classes.control}>
          <label htmlFor='email'>Your Email</label>
          <input type='email' id='email' required  ref={emailinputref}/>
        </div>
        <div className={classes.control}>
          <label htmlFor='password'>Your Password</label>
          <input
            type='password'
            id='password'
            required
            ref={passwordref}
          />
        </div>
        <div className={classes.actions}>
          {!isLoading && <button>{isLogin ? 'Login':'Create Account'}</button>}
          {isLoading && <p>sending request...</p>} 
          <button
            type='button'
            className={classes.toggle}
            onClick={switchAuthModeHandler}
          >
            {isLogin ? 'Create new account' : 'Login with existing account'}
          </button>
        </div>
      </form>
    </section>
    <Footer />
    </>
  );
};

export default Login