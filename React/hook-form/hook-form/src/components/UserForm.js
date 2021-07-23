import React, { useState } from  'react';
    
    
const UserForm = (props) => {
    const [FirstName, setFirstName] = useState("");
    const [LastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState(""); 
    const [confirmpassword, setConfirmPassword] = useState("");  

    
    const createUser = (e) => {
        e.preventDefault();
        const newUser = { FirstName,LastName, email, password,confirmpassword };
        console.log("Welcome", newUser);
    };
    
    return(
        <form onSubmit={ createUser }>
            <table>
                <tr>
                    <td><label>First Name:</label></td>
                    <td><input type="text" onChange={ (e) => setFirstName(e.target.value) } /></td>
                </tr>
                <tr>
                    <td><label>Last Name: </label></td>
                    <td><input type="text" onChange={(e) => setLastName(e.target.value) }/></td>
                </tr>
                <tr>
                    <td><label>Email : </label></td>
                    <td><input type="text" onChange={ (e) => setEmail(e.target.value) } /></td>
                </tr>
                <tr>
                    <td><label>Password: </label></td>
                    <td><input type="text" onChange={ (e) => setPassword(e.target.value) } /></td>
                </tr>
                <tr>
                    <td><label> Confirm Password: </label></td>
                    <td><input type="text" onChange={ (e) => setConfirmPassword(e.target.value) } /></td>
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