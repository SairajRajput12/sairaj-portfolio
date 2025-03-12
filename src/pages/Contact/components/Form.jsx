import { useState } from "react";
import postData from "../../../services/postFormData"; 

export default function Form(){
    const [name,setName] = useState(''); 
    const [email,setEmail] = useState(''); 
    const [message,setMessage] = useState(''); 
    const [result,setResult] = useState(""); 
    const [isSuccess, setIsSuccess] = useState(null); 

    const fillForm = async (e) => {
        e.preventDefault(); 
        console.log(e.target);

        
        
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        console.log(formData);

        const response = await postData(formData);
        
        if (response.code === 200) {
            alert("Form submitted successfully!");
            setResult("Form Submmited Succesfully !!"); 
            setName(""); 
            setIsSuccess(true);
            setEmail(""); 
            setMessage(""); 
        } else {
            setIsSuccess(false);
            setMessage("Form Submission unsuccesfull !!"); 
            alert("Error submitting form: " + response.message);
        }
    };


    return(
         <form onSubmit={fillForm} className='form-css'>
                <label>Name: </label>
                <input value={name} onChange={(e) => setName(e.target.value)} type='text' placeholder="Enter your name" />
                
                <label>Email: </label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} type='email' placeholder="Enter your email" />
                
                <label>Message: </label>
                <input value={message} onChange={(e) => setMessage(e.target.value)} type='text' placeholder="Your message here..." />
                
                <button  type="submit" className="submit-btn">Submit</button>
                {
                    result && (
                    <div className={`result-message ${isSuccess ? "success" : "error"}`}>
                        {result}
                    </div>
                )}
            </form>
    )
}