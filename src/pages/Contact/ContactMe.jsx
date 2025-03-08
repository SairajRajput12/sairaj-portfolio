import Footer from './components/Footer';
import Form from './components/Form';
import './ContactMe.css'; 


export default function Contact() {
    return (
       <div className='c'>
            <section className='contact'>
                <h1>Get in Touch</h1>
                <Form />
            </section>
            <Footer />
       </div>
    );
}
