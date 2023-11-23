import aboutus from '/assets/img/aboutus.png'
function AboutUs() {
  return (
    <div className="z-30 space-y-10 py-8 text-center">
        <h2 className="text-2xl md:text-4xl text-cafe font-semibold uppercase">
            Qui sommes nous ?
        </h2>
        <div className="flex flex-col sm:flex-row items-center justify-center mx-4 md:space-x-8 space-y-8 sm:space-y-0">
            <img src={aboutus} alt="About us image" className="border-2 border-orange w-[300px] h-[250px] " />
            <p className="text-noir md:text-md sm:text-md font-bold text-justify md:w-1/2  sm:mx-0">
              L’Entreprise de Bâtiment et des Travaux Hydrauliques (EBATH) est créé en 2018 par B’DEMAN Kossi K., Economiste et ingénieur en Génie-Civil.
              Le bureau de l’entreprise EBATH  Sise à Kara au quartier Lama, non loin du nouveau marché à 50 m de la mosquée d’EL Adj Moumouni et à Sokodé  dans le quartier Koloundè.
              Nous sommes une entreprise spécialisée dans les travaux Publics comme : les routes, les caniveaux, les pose des paves, les dalots ; fausses ; les bâtiments et les travaux privés.
              Nous sommes egalement une entreprise spécialisée dans  la restauration, l’hébergement et service traiteur. Le siège étant basé à Kara, nous disposons de trois hôtel: Hôtel Marciale Kara Bohou, Hôtel LA FAYETTE ET l’Hôtel MA VISION B2K à Awandjelou.
            </p>
        </div>
    </div>
  )
}

export default AboutUs;
