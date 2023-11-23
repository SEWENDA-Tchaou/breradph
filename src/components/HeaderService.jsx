import Navbar from "./Navbar";

function HeaderService() {
  return (
    <header className="relative">
        <div
            className="absolute z-20 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[80vh] bg-[url('/assets/img/fond_noir.png')]"
            // style={{ backgroundImage: 'url(../src/assets/img/fond_noir.png)' }}
        >
            <Navbar />
            <div className="w-full h-full flex justify-center items-center">
                <h1 className="text-5xl lg:text-3xl lg:w-1/2 text-center sm:text-left text-blanc uppercase font-bold mx-20">
                    EBATH BTP renove et décore vos murs
                </h1>
            </div>
        </div>
        <div
            className="block z-10 top-0 left-0 w-full bg-cover bg-center bg-no-repeat h-[80vh] bg-[url('/assets/img/banner3.png')]"
            // style={{ backgroundImage: `url(../src/assets/img/${imageName})` }}
        ></div>
    </header>
  )
}

export default HeaderService;
