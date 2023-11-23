import axios from 'axios';
import { useEffect, useState } from 'react';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from './HeaderDashboard';

function Btp() {
  const [texte, setTexte] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const [contenuSite, setContenuSite] = useState(['']);

  // route pour afficher nos images qui sont dans la base de donnee
  useEffect(() => {
    getContents();
  }, []);

  const getContents = async() => {
    const response = await axios.get("http://localhost:3000/btp");
    console.log(response.data)
    setContenuSite(response.data);
  };

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const saveForm = async() => {
    // e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("texte", texte);
    try {
      await axios.post("http://localhost:3000/btp", formData, {
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
      await axios.delete(`http://localhost:3000/btp/${contentId}`);
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
        <div className="w-[2  0%]  bg-cafe/50" >
          <Sidebar/>
        </div>
        <div className="w-[80%] h-full bg-noir/10">
          <div className='border m-5 rounded-lg bg-noir/40'>
            <h1 className='text-3xl text-center m-7'>{"Ajouter des contenus a l'onglet BTP"}</h1>
            <form
              onSubmit={saveForm}
              className='px-[4%] flex'
            >
              <div>
                <div>
                  <label htmlFor="" >Ajouter une Image</label><br />
                  <input
                    type="file"
                    className='bg-noir/5'
                    onChange={loadImage}
                  />
                </div><br />
                <div>
                  <label htmlFor="">Ajouter le texte</label><br />
                  <input
                    type="text"
                    className='w-full px-5 py-1 bg-orange/30 rounded-md border'
                    value={texte}
                    onChange={e=>setTexte(e.target.value)}
                  />
                </div>
                <button
                  type='submit'
                  className='connecter text-blanc px-10 bg-rouge my-2 rounded-xl'
                >
                  Envoyer
                </button>
              </div>
            </form>
            {/* Apercu de l'image */}
            {preview ? (
              <img
                src={preview}
                alt=" Apercu de l'image"
                width={100}
                height={100}
              />
              ) : (
                ""
            )}
          </div>
          {/* Affichage de l'image */}
          <div className='flex  px-4'>
           {contenuSite.map((data) => (
              <div key={data.id} className='m-1'>
                  <div className='w-full  bg-noir/10 justify-around items-center  '>
                      <figure className="image ">
                      <img src={data.url} className='h-[100px] w-full' alt="Image" />
                      </figure>
                      <p className=' my-1 text-center'>{data.name}</p>
                      <div className='flex justify-around items-center space-x-1 py-1'>
                        <a
                          href={`updateBtp/${data.id}`}
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
