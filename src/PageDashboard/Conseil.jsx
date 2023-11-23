import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from './HeaderDashboard';

function Btp() {
  const [titre, setTitre] = useState("");
  const [conseil1, setConseil1] = useState("");
  const [conseil2, setConseil2] = useState("");
  const [conseil3, setConseil3] = useState("");
  const [contenuSite, setContenuSite] = useState(['']);

  // route pour afficher nos images qui sont dans la base de donnee
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async() => {
    const response = await axios.get("http://localhost:3000/conseil");
    console.log(response.data)
    setContenuSite(response.data);
  };

  const saveForm = async() => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("titre", titre);
    formData.append("conseil1", conseil1);
    formData.append("conseil2", conseil2);
    formData.append("conseil3", conseil3);
    try {
      await axios.post("http://localhost:3000/conseil", formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      // navigate("/")
    } catch(error) {
      console.log(error);
    }
  };

  // suppression du contenu
  const deleteContent = async(contentId) => {
    try {
      await axios.delete(`http://localhost:3000/conseil/${contentId}`);
      getContents();
    }catch(error){
      console.log(error);
    }
    console.log('sup....')
  };

  console.log(contenuSite);

  return (
    <div >
      <HeaderDashboard/>
      <div className='flex  my-4'>
        <div className="bg-bleuClair" >
          <Sidebar/>
        </div>
        <div className="w-[80%] bg-[#85f085] ">
        <h1 className='text-center text-3xl my-2 text-blanc font-bold'>Conseils</h1>
        <div className=" mb-2 bg-yellow2 mx-12 rounded-xl shadow-xl py-5">
            <div className="">
              <h3 className=' mb-3 text-xl font-bold text-center'>Ajouter des conseils a la Session Conseils</h3>
              <form  
              onSubmit={saveForm} 
              >
              <div className="m-3 flex justify-around">
                <label className="w-1/3">Titre :</label>
                <input 
                type="text" 
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={titre}
                onChange={e=>setTitre(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 1 :</label>
                <input 
                type="text"  
                className=' h-10  w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil1}
                onChange={e=>setConseil1(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 2 :</label>
                <input 
                type="text"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil2}
                onChange={e=>setConseil2(e.target.value)}
                />
              </div>
              <div className="m-3 flex justify-around">
                <label  className='w-1/3'>Conseil 3 :</label>
                <input 
                type="text"  
                className=' h-10 w-full m-1 rounded-lg bg-blanc/60 border px-3 border-black'
                value={conseil3}
                onChange={e=>setConseil3(e.target.value)}
                />
              </div>
              {/* <button
                type='submit'
                className='button border mx-5 justify-end items-end rounded px-10 py-3 text-blanc'
              >
                Envoyer
              </button> */}
            </form>
          </div>
        </div>

          {/* Affichage de l'image */}
          <div className='flex  px-4'>
           {contenuSite.map((data) => (
              <div key={data.id} className='m-1'>
                  <div className='w-full  bg-noir/10 justify-around items-center  '>
                      <p className=' my-1 text-center'>{data.name}</p>
                      <div className='flex justify-around items-center space-x-1 py-1'>
                        <a
                          href={`updateConseil/${data.id}`}
                          className='text-bleue hover:text-blanc hover:bg-bleue px-2 rounded-md'
                        >
                          Edit
                        </a>
                        <button
                          onClick={() => deleteContent(data.id)}
                          className='hover:bg-rouge hover:text-blanc px-2 rounded-md text-rouge'
                        >
                          Delete
                        </button>
                      </div>
                  </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Btp;
