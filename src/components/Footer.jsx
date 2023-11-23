import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import localisation from '/assets/img/localisation.png';
import tel from '/assets/img/tel.png';
import email1 from '/assets/img/email1.png';
import facebook from '/assets/img/facebook.png';
import copyright from '/assets/img/copyright.png';


function Footer() {
    const [email, setEmail] = useState("");

    const Navigate = useNavigate();

    const handleSubmit = ()=>{
        // event.preventDefault();
        axios.post("http://localhost:3000/sendYourMail", {email})
        .then(res => {console.log(res);
          Navigate("/");
        })
        .catch(err => console.log(err)); 
      }

  return (
    <>
    <div className="bg-cafe py-4 max-md:hidden text-blanc">
        <div className="flex p-[5%]  ">
            <div className="w-1/3 space-y-5">
                <h1 className="text-bold text-3xl">EBATH BTP</h1>
                <p>
                    EBATH est créé en 2018 par B’DEMAN Kossi K., Economiste et ingénieur en Génie-Civil.
                    Le bureau de l’entreprise EBATH  Sise à Kara au  Quartier Lama...
                </p>
            </div>
            <div className="w-1/3 mx-16 space-y-4">
                <div className="flex space-x-5">
                    <a href=""><img src={localisation} className="w-10" alt="" /></a >
                    <p>
                    Sise à Kara au quartier Lama, non loin du nouveau marché à 50 m...
                    </p>
                </div>
                <div className="flex space-x-5">
                    <img src={tel} className="w-7" alt="" />
                    <p>
                        + 228 91 35 18 34  <br />
                        + 228 98 04 22 49 
                    </p>
                </div>
                <div className="flex space-x-5">
                    <img src={email1} className="w-7"  alt="" />
                    <p>
                        Ebathtogo@gmail.com
                    </p>
                </div>
                <div className="flex space-x-5">
                    <a href=""><img src={facebook} className="w-7 " alt="" /></a>
                </div>
            </div>
            <div className="w-1/3 space-y-5">
                <h1 className="text-bold text-3xl">NEWSLETTER</h1>
                <form 
                    className="space-y-5"
                    onSubmit={handleSubmit}
                >
                        <label>Abonnez-vous :</label> <br />
                        <input 
                            type="email" 
                            placeholder="Votre Email" 
                            className="border px-4 h-12 w-[190px] text-noir"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        /> <br />
                        <button className='text-blanc border border-blanc rounded-md px-4 py-2 hover:text-cafe hover:bg-blanc'>ENVOYER</button>
                    </form>
            </div>
        </div>
        <hr className="my-4"/>
        <div className="flex items-center justify-center">
            <img src={copyright} alt="copyright" className="mx-5" />
            <p>Copyright 2023. Réaliser par <a href="" className="font-bold">Knowledge Technology</a></p>
        </div>
    </div>
    {/*small screen*/}
    <div className="bg-cafe md:hidden text-blanc">
        <div className=" p-5  ">
            <div className=" space-y-2">
                <h1 className="text-bold text-md ">EBATH BTP</h1>
                <p className="my-2">
                    EBATH est créé en 2018 par B’DEMAN Kossi K., Economiste et ingénieur en Génie-Civil.
                    Le bureau de l’entreprise EBATH  Sise à Kara au  Quartier Lama...
                </p>
            </div>
            <div className=" space-y-2 my-1">
                <div className="flex space-x-1">
                    <a href=""><img src={localisation} className="w-14" alt="localisation" /></a >
                    <p>
                    Sise à Kara au quartier Lama, non loin du nouveau marché à 50 m...
                    </p>
                </div>
                <div className="flex space-x-1">
                    <img src={tel} className="w-7 " alt="tel" />
                    <p>
                        + 228 91 35 18 34  <br />
                        + 228 98 04 22 49 
                    </p>
                </div>
                <div className="flex space-x-1">
                    <img src={email1} className="w-3"  alt="email" />
                    <p>
                        Ebathtogo@gmail.com
                    </p>
                </div>
                <div className="flex space-x-5">
                    <a href=""><img src={facebook} className="w-7 " alt="facebook" /></a>
                </div> <br />
                <div className="">
                    <h1 className="text-bold text-md">NEWSLETTER</h1>
                    <form 
                        onSubmit={handleSubmit}
                    >
                        <label>Abonnez-vous :</label> <br />
                        <input 
                            type="email" 
                            placeholder="Votre Email" 
                            className="border w-full my-2 px-4 h-12  text-noir"
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        /> <br />
                        <button className='text-blanc border border-blanc rounded-md mx-1 px-4 py-2 hover:text-cafe hover:bg-blanc'>ENVOYER</button>
                    </form>
                </div>
            </div>
           
        </div>
        <hr className="my-2"/>
        <div className="flex py-4 justify-center items-center">
            <img src={copyright} alt="copyright" className="mx-5 w-4 h-8" />
            <p>Copyright 2023. Réaliser par knowledge technology</p>
        </div>
    </div>
    </>
  )
}

export default Footer;
