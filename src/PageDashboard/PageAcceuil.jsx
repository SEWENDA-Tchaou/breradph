import { useState } from 'react';
import HeaderDashboard from '../PageDashboard/HeaderDashboard';
import Sidebar from '../components/Sidebar';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function PageAcceuil() {
  const [news, setNews] = useState();

  const Navigate = useNavigate();

  const handleSubmit = ()=>{
    // event.preventDefault();
    axios.post("http://localhost:3000/sendNews", {news})
    .then(res => {console.log(res);
      Navigate("/");
    })
    .catch(err => console.log(err)); 
  }
  return (
    <div className="">
      <HeaderDashboard/>
      <div className='flex  my-4'>
        <div className="w-[20%]   bg-cafe/50">
          <Sidebar/>
        </div>
        <div className="w-[80%] h-full bg-noir/10">
          <div className='border m-5 rounded-lg bg-noir/40'>
            <h1 className='text-3xl text-center m-7'>{"Ajouter des contenus a l'onglet BTP"}</h1>
            <form
              onSubmit={handleSubmit}
              className='px-[4%]  '
            >
              <div>
                <div>
                  <label htmlFor="" >Ajouter une Image</label><br />
                  <input
                    type="text"
                    className='w-[100%] my-2 px-5 py-1 bg-orange/30 rounded-md border'
                    value={news}
                    onChange={e=>setNews(e.target.value)}
                  />
                </div>
                
                <button
                  className='connecter text-blanc px-10 bg-rouge my-3 rounded-xl'
                >
                  Envoyer
                </button>
              </div>
            </form>
            {/* Apercu de l'image */}
            {/* {preview ? (
              <img
                src={preview}
                alt=" Apercu de l'image"
                width={100}
                height={100}
              />
              ) : (
                ""
            )} */}
          </div>
          {/* Affichage de l'image */}
          <div className='flex  px-4'>
           {/* {contenuSite.map((data) => (
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
                          // onClick={() => deleteContent(data.id)}
                          className='hover:bg-rouge hover:text-blanc px-2 rounded-md text-rouge'
                        >
                          Delete
                        </button>
                      </div>
                  </div>
              </div>
            ))} */}
          </div>
        </div>
      </div >
    </div>  )
}

export default PageAcceuil;
