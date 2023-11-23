import axios from 'axios';
import { useEffect, useState } from 'react';
import {useNavigate, useParams} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import HeaderDashboard from '../PageDashboard/HeaderDashboard';
useNavigate
function UpdateAll() {
  const [texte, setTexte] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  // const [contenuSite, setContenuSite] = useState(['']);
  const navigate = useNavigate();
  const {id} = useParams();

  //  pour afficher le contenu de l'id
  useEffect(() => {
    getContentByid();
  },[]);

  const getContentByid = async() => {
    const response = await axios.get(`http://localhost:3000/contents/${id}`);
    setTexte(response.data.name);
    setFile(response.data.image);
    setPreview(response.data.url);
  };

  // Route pour afficher nos images qui sont dans la base de donnee
  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const updateForm = async(e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("file", file);
    formData.append("texte", texte);
    try{
      await axios.put(`http://localhost:3000/contents/${id}`, formData, {
        headers:{
          "Content-type": "multipart/form-data"
        }
      });
      navigate("/all")
    } catch(error) {
      console.log(error);
    }
  };

  return (
    <div >
      <HeaderDashboard/>
      <div className='flex h-[100vh] my-4'>
        <div className="w-1/3  bg-cafe/50">
          <Sidebar/>
        </div>
        <div className="w-2/3 bg-noir/10">
          <div className='border m-5 rounded-lg bg-noir/40'>
            <h1 className='text-3xl text-center m-7'>{"Modifier des contenus a l'onglet TOUT"}</h1>
            <form  onSubmit={updateForm}  className='px-[4%] flex'>
              <div>
                <div>
                  <label htmlFor="">Ajouter une Image</label><br />
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
                <button type='submit' className='connecter text-blanc px-10 bg-rouge my-2 rounded-xl'>Update</button>
              </div>
            </form>
            {/* Apercu de l'image */}
            {preview ? (
              <img src={preview} alt=" Apercu de l'image" width={100} height={100}  />
              ) : (
                ""
           )}
          </div>
        </div>
      </div >
    </div>
  )
}

export default UpdateAll;
