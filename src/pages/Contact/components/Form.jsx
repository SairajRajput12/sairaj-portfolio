import { useState } from "react";
import postData from "../../../services/postFormData"; 

export default function Form(){
    const [name,setName] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [message,setMessage] = useState(''); 

    const fillForm = async (e) => {
        e.preventDefault(); 

        const Data = {
            name: name, 
            email: email,
            message: message
        };


        const response = await postData(Data);
        
        if (response.code === 200) {
            alert("Form submitted successfully!");
        } else {
            alert("Error submitting form: " + response.message);
        }
    };


    return(
         <form className='form-css'>
                <label>Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder="Enter your name" />
                
                <label>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Enter your email" />
                
                <label>Message: </label>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder="Your message here..." />
                
                <button  type="submit" className="submit-btn">Submit</button>
            </form>
    )
}