import React, {Component} from 'react'
import { render } from '@testing-library/react'
import styles from './FormLogin.module.css'
// import FormErrors from './FormErrors'
var classNames = require('classnames')


class FormLogin extends Component{
    constructor(props){
    super(props);
    this.state = { 
        userEmail: '',
        userPassword: '',
        isValidEmail: null,
        isValidPass: null,

        
    };
}

// handlerUserInput (e){
//     const email = e.target.email;
//     const password = e.target.password;
//     this.setState({[email]: password},
//         () =>{
//             this.validateField(email , password) //что-то непонятное. Ниже обьявим функцию validateField
//         })
// }

// validateField(fieldName, value){
//     let fieldValidationErrors = this.state.formErrors;
//     let emailValid = this.state.emailValid;
//     let passwordValid = this.state.passwordValid;

//     switch(fieldName){
//         case 'email':
//             emailValid = value.match(/.+@.+\..+/i);

//     fieldValidationErrors.email = emailValid ? '' : 'isinvalid';
//     break;
//     case 'password':
//         passwordValid = value.length >= 6;

//         fieldValidationErrors.password = passwordValid ? '': ' is too short';
//         break;
//         default:
//         break;
//     }
//     this.setState({
//         formErrors: fieldValidationErrors, 
//         emailValid: emailValid,
//         passwordValid: passwordValid
//     }, this.validateForm);
// }

// validateForm(){
//     this.setState({formValid: this.state.emailValid &&this.state.passwordValid});
// }

// handlePasswordChange = (event) => {     

    

//     this.setState({ userPassword: event.target.value });    
//      console.log(PASSWORD_REGEXP.test(this.state.userPassword))     
//      if (PASSWORD_REGEXP.test(this.state.userPassword)) {      
//           this.setState({ isPasswordValid: true });    
//          } else {       
//              this.setState({ isPasswordValid: false });
        
//             }
//         }




// handleValidEmail = (userEmail, value) =>{
// const emailValid = this.state.isValidEmail;

// emailValid = userEmail.match(/.+@.+\..+/i);
// emailValid = emailValid ? '' : 'isinvalid';


//     this.setState({
//         isValidEmail: emailValid
//     })
// }

// handlePasswordValid = (e)=>{
//     this.setState({
//         isValidPass: this.userPassword.length >= 6  ? true : false
//     })
// }



// handleEmailChange  = (e) =>{
//     this.setState({
//         userEmail: e.target.value
//     })
// } 

// handlePasswordChange = (e) =>{
//     this.setState({
//         userPassword: e.target.value
//     })
// }

handleEmailChange = (event) => {     

let EMAIL_REGEXP = (/.+@.+\..+/i)

    this.setState({ 
        userEmail: event.target.value 
    });    
    console.log(EMAIL_REGEXP.test(this.state.userEmail))     
    if (EMAIL_REGEXP.test(this.state.userEmail)) {      
        this.setState({ isValidEmail: true });    
        } else {       
        this.setState({ isValidEmail: false });
        
            }
}

handlePasswordChange = (event) => {     

    let PASSWORD_REGEXP = (/.+[A-Za-z].+[0-1]/i)

    this.setState({ userPassword: event.target.value });     
    console.log(PASSWORD_REGEXP.test(this.state.userPassword))     
    if (PASSWORD_REGEXP.test(this.state.userPassword)) {       
        this.setState({ isValidPass: true });     
    } else {       
        this.setState({ isValidPass: false });
    }
}


        




buttonClick=(e)=>{
        alert(this.state.userEmail)
        e.preventDefault();
}

handleSubmit = (e) => {
    e.preventDefault();
}

// handleCommonChange = ({target: {name, value}}) =>{
//     this.setState({[name]: value});
// }

handleChange = ({ target: { name, value } }) => { 
    this.setState({ isValidPass: !value.includes(' '), }); 
    this.setState({ [name]: value, }); }; 
    
   
render(){
    

    //const passClasses = classNames(styles.input, { [styles.inputValid]: isPassValid, });
    const {userEmail, userPassword, isValidPass, isValidEmail} = this.state;
    const passStyleClass = classNames(styles.input, { 
        [styles.inputValid]: isValidPass, });
    // const passStyleClass = `${styles.input} ${isValidPass && styles.inputValid}`;
     const emailStyleClass = `${styles.input} ${isValidEmail ? styles.inputValid : styles.input.Invalid}`;
    
    return(
        <form  onSubmit={this.handleSubmit} className={styles.container}>
             
            <input placeholder='email' 
            className={emailStyleClass }
            type='email' 
            name='userEmail' 
            value={userEmail} 
            onChange={this.handleEmailChange}/>

            <input 
            placeholder='password' 
            className={passStyleClass } 
            type='password' 
            name='userPassword' 
            value={userPassword} 
            onChange={this.handlePasswordChange}/>
            <button type='submit' onClick={this.buttonClick} >LOGIN</button>
        </form>
    )
}
}

export default FormLogin