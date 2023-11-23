import { useState } from 'react';
import axios from 'axios';
import HeaderService from '../components/HeaderService';
import Footer from '../components/Footer'

function Contact() {
  const [objet, setObjet] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = ()=>{
    // event.preventDefault();
    axios.post("http://localhost:3000/contact", {objet, email, phone, message})
    .then(res => {console.log(res);
      // Navigate("/Actualite");
    })
    .catch(err => console.log(err)); 
  }

  return (
    <div  className='bg-noir/5'>
      <HeaderService />
      <div className='px-[8%] max-lg:px-[2%] pb-[6%]'>
            <h1 className='text-blanc px-2 md:px-10 py-2 bg-cafe mt-10 text-sm md:text-lg md:w-5/6 uppercase'>Contactez nous</h1>
            <hr className='  h-0.5 border-none bg-cafe mb-5'/>
            <div className="md:flex py-6">
              <div className='md:w-1/3 mr-10'>
                <h1 className='text-orange text-xl'>Adresse</h1>
                <div>
                  <h1>EBATH BTP</h1>
                  <p>
                    EBATH est créé en 2018 par B’DEMAN Kossi K., Economiste et ingénieur en Génie-Civil.
                    Le bureau de l’entreprise EBATH  Sise à Kara au  Quartier Lama...
                </p>
                </div>
              </div>
              <div className='md:w-2/3'>
                <h1 className='text-orange text-xl'>Formulaire de contact</h1>
                <div className="md:flex md:space-x-10">
                 <form 
                  onSubmit={handleSubmit}
                  >
                    <div className="md:flex md:space-x-2">
                      <div>
                          <label htmlFor="">Objet</label>
                          <input 
                            type="text"  
                            className='border w-full border-noir/25 px-5 py-1'
                            value={objet}
                            onChange={e=>setObjet(e.target.value)}
                          />
                      </div>
                      <div>
                        <label htmlFor="">Email</label>
                        <input 
                          type="text"  
                          className='border w-full border-noir/25 px-5 py-1'
                          value={email}
                          onChange={e=>setEmail(e.target.value)}
                          />
                      </div>
                      <div>
                        <label htmlFor="">Telephone</label>
                        <input 
                          type="number"  
                          className='border w-full border-noir/25 px-5 py-1'
                          value={phone}
                          onChange={e=>setPhone(e.target.value)}
                          />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="">Votre message</label><br />
                      <textarea 
                        name="" 
                        id=""  
                        rows="5" 
                        className='w-full border border-noir/25 px-5 py-1'
                        value={message}
                        onChange={e=>setMessage(e.target.value)}
                        ></textarea>
                    </div>
                    <button  className='text-blanc border rounded-md px-4 py-2 bg-cafe hover:text-cafe hover:bg-blanc'>ENVOYER</button>
                 </form>
                </div>
              </div>
            </div>
        </div>
      <Footer />
    </div>
  )
}

export default Contact;
