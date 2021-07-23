import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [FirstNameError, setFirstNameError] = useState("");
    const [LastName, setLastName] = useState("");
    const [LastNameError, setLastNameError] = useState("");
    const [email, setEmail] = useState("");
    const [EmailError, setEmailError] = useState("");
    const [password, setPassword] = useState(""); 
    const [PasswordError, setPasswordError] = useState("");
    const [confirmpassword, setConfirmPassword] = useState("");
    const [confirmpasswordError, setConfirmPasswordError] = useState("");
    

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName,LastName, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };

        const HandelFirstName = (e) => {
            setFirstName(e.target.value);
            if(e.target.value.length < 2) {
                setFirstNameError("First Name Must be at Least 2 Characters!");
            } else{
                setFirstNameError ("");
            }
            
        }
        const HandelLastName = (e) => {
            setLastName(e.target.value);
            if(e.target.value.length < 2) {
                setLastNameError("Last Name Must be at Least 2 Characters!");
            } else{
                setLastNameError ("");
            } 
            
        }
        const HandelEmail = (e) => {
            setEmail(e.target.value);
            if(e.target.value.length < 5) {
                setEmailError("Email Must be at Least 5 Characters!");
            } else{
                setEmailError("");
            }
            
        }
        const HandelPassword = (e) => {
            setPassword(e.target.value);
            if(e.target.value.length < 8) {
                setPasswordError("Password Must be at Least 8 Characters!");
            } else{
                setPasswordError("");
            }
            if(password!=confirmpassword){
                setConfirmPasswordError ("Password Must Match");
            }else{
                setConfirmPasswordError("");
            }
        }

    
    return(
        <form onSubmit={ createUser }>
            <table>
                <tr>
                    <td><label>First Name:</label></td>
                    <td><input type="text" onChange={HandelFirstName} /></td>
                    <td>{FirstNameError}</td>
                </tr>
                <tr>
                    <td><label>Last Name: </label></td>
                    <td><input type="text" onChange={ HandelLastName}/></td>
                    <td>{LastNameError}</td>
                </tr>
                <tr>
                    <td><label>Email : </label></td>
                    <td><input type="text" onChange={HandelEmail} /></td>
                    <td>{EmailError}</td>
                </tr>
                <tr>
                    <td><label>Password: </label></td>
                    <td><input type="text" onChange={ HandelPassword } /></td>
                    <td>{PasswordError}</td>
                </tr>
                <tr>
                    <td><label> Confirm Password: </label></td>
                    <td><input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } /></td>
                    <td>{confirmpasswordError}</td>
                </tr>

                </table>
            <h1> Your Form Data:</h1>
                    <p>{FirstName}</p>
                    <p>{LastName}</p>
                    <p>{email}</p>
                    <p>{password}</p>
                    <p>{confirmpassword}</p>

        </form>
            
    );
    
};
export default UserForm