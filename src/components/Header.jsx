
const Header= () => {
  return (
    <div className='bg-[#212731] w-full py-5 flex justify-end px-5 md-px-0'>
      <div className="content w-[900px] flex flex-col md:flex-row md:items-center">
        <div className="input bg-white flex  py-2 px-5 rounded-lg">
          <img src="./assets/search.png"  alt="" />
          <input type="text" className='w-full border-none mx-1 pe-3 ps-1 focus:border-none focus:outline-none' />
        </div>
        <div className="w-full h-full text-white mt-3">
          <ul className='flex w-full justify-around items-center mt-1 text-sm md:text-[1rem]'>
            <li><a href="">Categories</a></li>
            <li><a href="">Website builders</a></li>
            <li><a href="">Todays's deals</a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Header;
