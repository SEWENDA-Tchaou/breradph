function Conseil() {
  return (
    <div className='text-center m-5 text-black'>
      <h3 className='uppercase font-bold text-xl my-5 text-white'>Conseils</h3>
      <div className="bg-yellow-100 rounded-xl shadow-xl py-5">
        <form action="">
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold mx-5'>titre :</label>
            <input
              type="text"
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
            />
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 1 :</label>
            <input
              type="text"
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
              />
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 2 :</label>
            <input
              type="text" 
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
            />
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3 :</label>
            <input
              type="text"
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
            />
          </div>
          <div className='flex justify-around'>
            <label htmlFor="" className='font-bold'>Conseil 3 :</label>
            <input
              type="date"
              className='w-[500px] h-10 px-3 my-1 mx-2 rounded-lg bg-white/30 border border-black'
            />
          </div>
          <button
            onClick={() => {}}
            className='border m-4 justify-end items-end  bg-blue-600 rounded px-10 py-3 text-white'
          >
            Envoyer
          </button>
        </form>
      </div>
    </div>
  )
}

export default Conseil;
