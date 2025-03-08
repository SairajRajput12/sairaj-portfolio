export default function Form(){
    return(
         <form className='form-css'>
                <label>Name: </label>
                <input type='text' placeholder="Enter your name" />
                
                <label>Email: </label>
                <input type='email' placeholder="Enter your email" />
                
                <label>Message: </label>
                <input type='text' placeholder="Your message here..." />
                
                <button type="submit" className="submit-btn">Submit</button>
            </form>
    )
}