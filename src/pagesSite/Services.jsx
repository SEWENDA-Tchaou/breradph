import HeaderService from '../components/HeaderService';
import Footer from '../components/Footer';
import '../App.css';

function Services() {
  return (
    <div className='bg-noir/5'>
        <HeaderService />
        <div className="px-[8%] pb-[6%] ">
            <h1 className='text-blanc px-16 py-2 bg-cafe border-none mt-10 text-center text-3xl w-1/3'>Services</h1>
            <hr className='  h-0.5 border-none bg-cafe mb-5'/>
            <div className="max-md:hidden  flex my-10 space-x-10">
                <div className='services w-1/3 rounded bg-blanc'>
                    <h1 className=' p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Bâtiments</h1>
                    <p className='text-center p-5'>implantation, élévation, finition, peinture, menuiserie, staffe, carrelage, plomberie</p>
                </div>
                <div className='services w-1/3 rounded bg-blanc'>
                    <h1 className='max-lg:p-2 p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Réalisation des forages</h1>
                    <p className='text-center p-5'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                </div>
                <div className='services w-1/3 rounded bg-blanc'>
                    <h1 className=' p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Ponts et chaussées</h1>
                    <p className='text-center p-5'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                </div>
            </div>
            <div className="max-md:hidden  flex my-5 space-x-10">
                <div className='services w-1/3 rounded bg-blanc'>
                    <h1 className=' p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Pavés et caniveaux</h1>
                    <p className='text-center  p-5'>implantation, élévation, finition, peinture, menuiserie, staffe, carrelage, plomberie</p>
                </div>
                <div className='services w-1/3 rounded bg-blanc'>
                    <h1 className=' p-2 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Décoration maisons/bureaux</h1>
                    <p className='text-center p-5'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                </div>
                <div className=' services w-1/3 rounded bg-blanc'>
                    <h1 className=' py-3 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Hotelerie/ Bar/ Restauration</h1>
                    <p className='text-center p-5'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                </div>
            </div>
            {/* small screen */}
            <div className="md:hidden flex relative mb-72">
                <div className="service_slide1 py-2 absolute md:hidden  flex my-10 space-x-5">
                    <div className='services w-full rounded '>
                        <h1 className=' p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Bâtiments</h1>
                        <p className='text-center p-1'>implantation, élévation, finition, peinture, menuiserie, staffe, carrelage, plomberie</p>
                    </div>
                    <div className='services w-full rounded'>
                        <h1 className='max-lg:p-2 p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Réalisation des forages</h1>
                        <p className='text-center p-1'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                    </div>
                </div>
                <div className="service_slide2 py-2 absolute md:hidden  flex my-10 space-x-5">
                    <div className='services w-full rounded '>
                        <h1 className=' p-2 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Ponts et chaussées</h1>
                        <p className='text-center p-1'>implantation, élévation, finition, peinture, menuiserie, staffe, carrelage, plomberie</p>
                    </div>
                    <div className='services w-full rounded'>
                        <h1 className='max-lg:p-2 p-5 bg-orange rounded-tl rounded-tr text-xl text-blanc text-center'>Pavés et caniveaux</h1>
                        <p className='text-center p-1'> Placerat tellus sit sit quis libero scelerisque suspendisse mattis </p>
                    </div>
                </div>
           </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Services;
