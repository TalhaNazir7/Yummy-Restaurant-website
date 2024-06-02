
import React,{useRef} from 'react';
import Footer from '../Components/Footer';
import axios from 'axios'
const Registration = () => {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const repeatpassRef = useRef();
  const checkRef = useRef();

const handleSubmit = async (e) => {
  e.preventDefault();
  if(nameRef.current.value.trim() === '' 
  || emailRef.current.value.trim() === '' 
   || passwordRef.current.value.trim() === ''  ) return alert("Input Fields are Empty")
    
    const formValue = {
    name: nameRef.current.value,
    email: emailRef.current.value,
    password: passwordRef.current.value,
    repeatPass: repeatpassRef.current.value,
    termscheck: checkRef.current.checked,
  };
  if(passwordRef.current.value.trim() !== repeatpassRef.current.value.trim()) return alert("Password fields are not same")
  try{
   const response = await axios.post('http://localhost:5000/',formValue);
   console.log(response);
   return response.status === 200 ? alert("Data Saved") : alert("An Error Occured")
  }
  catch(e){
   console.log(e.message);
  }
   e.target.reset();

 };


    return (
      <section class="vh-100 bg-image"
      >
      <div class="mask d-flex align-items-center h-100 gradient-custom-3">
        <div class="container h-100">
          <div class="row d-flex justify-content-center align-items-center h-100">
            <div class="col-12 col-md-9 col-lg-7 col-xl-6">
              <div class="card" >
                <div class="card-body p-5">
                  <h2 class="text-uppercase text-center mb-5">Create an account</h2>
    
                  <form onSubmit={handleSubmit}>
    
                    <div class="form-outline mb-4">
                      <input type="text" id="form3Example1cg" ref={nameRef} class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example1cg" >Your Name</label>
                    </div>
    
                    <div class="form-outline mb-4">
                      <input type="email" id="form3Example3cg" ref={emailRef} class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example3cg" >Your Email</label>
                    </div>
    
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cg" ref={passwordRef} class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example4cg">Password</label>
                    </div>
    
                    <div class="form-outline mb-4">
                      <input type="password" id="form3Example4cdg" ref={repeatpassRef} class="form-control form-control-lg" />
                      <label class="form-label" for="form3Example4cdg">Confirm password</label>
                    </div>
    
                    <div class="form-check d-flex justify-content-center mb-5">
                      <input class="form-check-input me-2" ref={checkRef} type="checkbox" value="" id="form2Example3cg" />
                      <label class="form-check-label" for="form2Example3g">
                        I agree all statements in <a href="#!" class="text-body"><u>Terms of service</u></a>
                      </label>
                    </div>
    
                    <div class="d-flex justify-content-center">
                      <button type="submit"
                        class="btn btn-success btn-block btn-lg gradient-custom-4 text-body">Register</button>
                    </div>
    
                    <p class="text-center text-muted mt-5 mb-0">Have already an account? <a href="#!"
                        class="fw-bold text-body"><u>Login here</u></a></p>
    
                  </form>
    
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <br/>
      <Footer/>
    </section>
    
    );
  };

  export default Registration;
  