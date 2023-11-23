import axios from 'axios';
import { Tab } from '@headlessui/react';
import { useEffect, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import ReadMoreMessageRecu from '../PageDashboard/ReadMoreMessageRecu';

function Projects() {
    const [activeButton, setActiveButton] = useState('tout');
    const [contenuSiteA, setContenuSite] = useState([]);
    const [contenuSiteBtp, setContenuSiteBtp] = useState([]);
    const [contenuSiteHotel, setContenuSiteHotel] = useState([]);
    const [contenuSiteBackground, setContenuSiteBackground] = useState([]);
    const [slidesPerView, setSlidesPerView] = useState(3);
    const isMobile = useMediaQuery({ maxWidth: 767 });
    const isMedium = useMediaQuery({ minWidth: 768, maxWidth: 1023 });

    useEffect(() => {
        if (isMobile) {
          setSlidesPerView(1)
        } else if (isMedium) {
          setSlidesPerView(2)
        } else {
          setSlidesPerView(3)
          return
        }
    }, [isMobile, isMedium]);

    useEffect(() => {
        getContents();
        getBtpContents();
        getHotelContents();
        getBackgroundContents();
    }, [contenuSiteA, contenuSiteBtp, contenuSiteHotel,contenuSiteBackground]);

    const getContents = async() => {
        const response = await axios.get("http://localhost:3000/contents");
        console.log(response.data)
        setContenuSite(response.data);
    };

    const getBtpContents = async() => {
        const response = await axios.get("http://localhost:3000/btp");
        console.log(response.data)
        setContenuSiteBtp(response.data);
    };

    const getHotelContents = async() => {
        const response = await axios.get("http://localhost:3000/hotel");
        console.log(response.data)
        setContenuSiteHotel(response.data);
    };

    const getBackgroundContents = async() => {
        const response = await axios.get("http://localhost:3000/background");
        console.log(response.data)
        setContenuSiteBackground(response.data);
    };

    return (
        <div className="mx-4 sm:mx-12">
            <div className="w-full border-b-2 border-b-cafe">
                <h2 className="w-5/6 px-4 py-2 text-md md:text-lg text-blanc font-semibold uppercase bg-cafe">
                    Certains de nos projets dans la région de la KARA
                </h2>
            </div>
            <div className="my-6">
                <Tab.Group>
                    <Tab.List className="flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                        <Tab
                            onClick={() => setActiveButton('tout')}
                            className={`${activeButton === 'tout' ? "text-blanc bg-cafe" : "text-cafe hover:text-blanc hover:bg-cafe"} uppercase border border-cafe px-6 py-2 font-semibold text-lg sm:text-xl md:mx-4 rounded-md`}
                        >
                            Tout
                        </Tab>
                        <Tab
                            onClick={() => setActiveButton('btp')}
                            className={`${activeButton === 'btp' ? "text-blanc bg-cafe" : "text-cafe hover:text-blanc hover:bg-cafe"} uppercase border border-cafe px-6 py-2 font-semibold text-lg sm:text-xl md:mx-4 rounded-md`}
                        >
                            BTP
                        </Tab>
                        <Tab
                            onClick={() => setActiveButton('bar')}
                            className={`${activeButton === 'bar' ? "text-blanc bg-cafe" : "text-cafe hover:text-blanc hover:bg-cafe"} uppercase border border-cafe px-6 py-2 font-semibold text-lg sm:text-xl md:mx-4 rounded-md`}
                        >
                            Hôtels et bar
                        </Tab>
                    </Tab.List>
                    <Tab.Panels className="my-4">
                        <Tab.Panel className="flex flex-col sm:flex-row space-y-4 sm:space-y-0">
                            {/* Tout */}
                            <div className="relative space-y-4 w-full sm:w-2/3 mx-2">
                                <div className="flex justify-start items-center space-x-8">
                                    {/* ========= */}
                                    <div className='grid grid-cols-2 gap-2'>
                                        {contenuSiteBtp.slice(-2).map((data) => (
                                            <div key={data.id} className='m-1'>
                                                <div className='w-full h-full bg-orange text-center p-2'>
                                                <figure className="image ">
                                                    <img
                                                        src={data.url}
                                                        alt={data.id}
                                                        className='h-[30vh] w-full '
                                                    />
                                                </figure>
                                                <p className='my-1 text-center text-blanc text-sm'>{data.name}</p>
                                                </div>
                                            </div>
                                        ))}
                                    </div>
                                    {/* ======== */}
                                </div>
                                {
                                    contenuSiteBackground.slice(-1).map((data) => (
                                        <div
                                            key={data.id}
                                            style={{ backgroundImage: `url(${data.url})` }}
                                            className="flex w-full ml-0  items-center justify-center mx-8 h-[100vh] bg-cover bg-center bg-no-repeat"
                                        >
                                            <span className="text-5xl lg:text-xl text-center sm:text-left text-blanc font-bold">
                                                {data.name}
                                            </span>
                                        </div>
                                    ))
                                }
                            </div>
                            <div className="space-y-4  sm:w-1/3 mx-2">
                                {contenuSiteHotel.slice(-2).map((data) => (
                                    <div key={data.id} className="bg-noir/10 text-center m-1 p-2">
                                        <p className='bg-rouge text-blanc px-5 w-16'>Pub</p>
                                        <img
                                            src={data.url}
                                            alt={data.id}
                                            className="w-full h-[60vh]"
                                        />
                                        <p className="text-noir text-xl mt-2 ">
                                            {data.name}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className="my-4">
                            <div className='p-5 border border-noir/10 rounded-md'>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {contenuSiteBtp.map((data) => (
                                        <SwiperSlide key={data.id} className=''>
                                            <div className=' rounded-md bg-noir/10 shadow-2xl h-full text-center p-2'>
                                                <figure className="image ">
                                                    <img
                                                        src={data.url}
                                                        className='h-[60vh]'
                                                        alt={data.id}
                                                    />
                                                </figure>
                                                <p className='w-full mt-1 text-center text-noir text-sm'>
                                                    <ReadMoreMessageRecu limit={100}>
                                                        {data.name}
                                                    </ReadMoreMessageRecu>
                                                </p>
                                                
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Tab.Panel>
                        <Tab.Panel className="my-4">
                            <div className=' p-5 border border-noir/10 rounded-md'>
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={50}
                                    slidesPerView={slidesPerView}
                                    navigation
                                    pagination={{ clickable: true }}
                                >
                                    {contenuSiteHotel.map((data) => (
                                        <SwiperSlide key={data.id} className="bg-noir/10 text-center p-2">
                                            <img
                                                src={data.url}
                                                alt={data.id}
                                                className="w-full h-[50vh]"
                                            />
                                            <p className="text-noir text-xl mt-2 ">
                                                <ReadMoreMessageRecu limit={100}>
                                                    {data.name}
                                                </ReadMoreMessageRecu>
                                            </p>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>
                            </div>
                        </Tab.Panel>
                    </Tab.Panels>
                </Tab.Group>
            </div>
        </div>
    )
}

export default Projects;
