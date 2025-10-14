import React from 'react';
export default function Home() {
  return(
    <div className="bg-gray-200 min-h-screen overflow-x-hidden dark:bg-black">
 <div className="h-[600px] min-h-[500px] md:h-[600px] md:mx-[150px] relative flex flex-col px-4 items-center bg-black dark:bg-indigo-700 rounded-[80px] ">

     <div className='bg-blue-950 h-[80px] w-full  mt-[5px]  flex md:flex-column md:flex-row  flex justify-center items-center dark:bg-indigo '>
     <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/logo-1.png" className='h-[50px] w-[180px] mx-[10px] rounded-full'/>
      <div className=' hidden md:block text-red font-bold ml-[40px] text-lg mx-2'>Home</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-2'>All</div>
      <div className='hidden md:block text-white font-bold ml-[40px] text-lg mx-2'>About</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-2'>Shop</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-2'>Blog</div>
      <div className='hidden md:block  text-white font-bold ml-[40px] text-lg mx-2'>contact</div>
      <div className='hidden md:block rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8'>
        F
      </div>
      <div className="hidden md:block rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8">
        W
      </div>
      <div className='hidden md:block rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8'>
        L
      </div>
      <div className='hidden md:block rounded-full bg-gray-500 w-[50px] h-[50px] flex justify-center items-center font-bold text-white  text-sm gap-7 ml-10 mt-8'>
        I
      </div>
     </div>
     <div className="flex flex-row md-[10] h-[60%] w-full justify-around items-start mr-[30px] mt-[70px]">
      <div className="flex flex-col w-[1/2}">
      <div className='text-white font-bold text-2xl md:text-4xl tetx-center md:text-left'>Where Quality Is A  <br></br>service Meets The
      <br></br><span className="text-red-500" >Open Road</span></div>
      <div className='text-white text-2px text-lg mt-[20px]'>Car Service is essential for maintaining the performance and<br></br>longtivity of your vehicles. From all changes car service.</div><br></br>
 <div className="flex flex-row mt-4">

            <div className="text-white w-[150px] h-[40px] border-2 border-red-500 rounded-md mr-[20px] mt-4 flex items-center justify-center cursor-pointer hover:bg-red-500 hover:text-white transition-all">
              Get Started
            </div>

            <div className="flex flex-row mt-4 flex-col">

              <div className="bg-white w-[80px] flex flex-col flex-row h-[80px] rounded-full"></div>

      </div>
      </div>
      </div>

      <div className='flex hidden md:block flex-row flex-column'>
         <img src="https://themehealer.com/php-template/crank-php/assets/images/resources/main-slider-img-2.jpg" className='h-[300px] md:w-[300px] rounded-lg'/>
      </div>
          </div>
          <div className="flex flex flex-row h-[60%] w-full justify-around items-center ">
     <div className="bg-white w-[100px] md:w-[1000px] md:h-[60px] h[80px] space-y-2.5 absolute dark:bg-black dark:text-white md:bottom-[-40px] bottom-[-150px] rounded-md shadow-white shadow-md border border-2 border-black  flex md:flex-row flex-col items-center justify-evenly mt-[60px] space-x-2.5">
      <div className='font-extrabold md:text-4xl text-black dark:text-white'>600+</div>
      <div className='font-extrabold md:text-4xl text-black dark:text-white'>2K+</div>
      <div className='font-extrabold md:text-4xl text-black dark:text-white'>53+</div>
      <div className='font-extrabold md:text-4xl text-black dark:text-white'>3K+</div>
      </div>
     
     </div>
     </div>
    <div className='text-black font-bold text-4xl md-mt-[50px] mt-[150px]  flex flex-row md:flex-column justify-center dark:text-white items-center'>
  Services
</div>

<div className="flex flex-col md:flex-row justify-center space-x-10 space-y-6 dark:bg-black items-center mt-[100px] mx-[150px]">

  {/* Card 1 */}
  <div className='flex flex-col items-center justify-center w-[1000px] h-[400px] rounded-md border-2  border-black dark:border-white hover:bg-gradient-to-b hover:from-red-500 hover:to-blue-900 hover:text-white transition-all duration-500'>
    <div className='bg-indigo-400 w-[80px] h-[80px] rounded-full mx-2'></div>
    <div className='font-bold text-lg mt-2'>
      Transformation Advising
    </div>
    <div className='text-center md:px-4'>
      Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service
    </div>
  </div>

  {/* Card 2 */}
  <div className='flex flex-col items-center justify-center w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white hover:bg-gradient-to-b hover:from-red-500 hover:to-blue-900 hover:text-white transition-all duration-500'>
    <div className='bg-indigo-400 w-[80px] h-[80px] rounded-full mx-2'></div>
    <div className='font-bold text-lg mt-2'>  
      Easy Drive Maintenance
    </div>
    <div className='text-center md:px-4'>
      Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service
    </div>
  </div>

  {/* Card 3 */}
  <div className='flex flex-col items-center justify-center w-[1000px] h-[400px] rounded-md border-2 border-black dark:border-white hover:bg-gradient-to-b hover:from-red-500 hover:to-blue-900 hover:text-white transition-all duration-500'>
    <div className='bg-indigo-400 w-[80px] h-[80px] rounded-full mx-2'></div>
    <div className='font-bold text-lg mt-2'>
      Elite Auto Service
    </div>
    <div className='text-center md:px-4'>
      Car service is essential for maintaining the performance and longevity of your vehicle. From oil changes Car service
    </div>
    </div>
</div>

  
        <div className="bg-gray-50 min-h-screen dark:bg-black md:p-10">
    
      <div className="flex md:flex-col flex-row items-center dark:bg-black justify-between md:ml-20">
     
        <div>
          <p className="text-red-600 font-semibold ">ABOUT US</p>
          <div className="text-4xl text-black dark:text-white font-bold mt-2">
            Fast and Reliable Car Care <br /> Your Car Our Priority
          </div>
          <div className="text-gray-700 dark:text-white mt-4">
            Car service is essential for maintaining the performance and<br/>
            longevity of your vehicle. From oil changes 
          </div>


     
   
      
<div className='flex  md:flex-row  flex-col'>     
    <div className="md:mt-5 font-semibold text-gray-800 dark:text-white p-1 space-y-3 md:text-mlg">
            <div> *  Fast and Reliable Car Care Your Car Our Priority</div>
            <div> *  Free with Our Services Care for Your Car</div>
           <div>  *  Top-notch Care for Your Vehicle</div>
           <div>  *  Expert Service for Your Vehicle</div>
           <div>  *  Your Trusted Car Service Provider</div>
          </div>
        

       
        <div className="relative mt-10 ">
          <img
            src="https://themehealer.com/php-template/crank-php/assets/images/resources/about-one-img-1.jpg"
            alt="Car service"
            className="rounded-3xl w-[500px] h-[380px] mr-50"
          />

          <div className="absolute bottom-3 right-55 flex md:flex-col bg-red-600 text-white rounded-xl p-3 w-[180px]">
            <div className="text-md font-bold">Auto Mechanic Shop</div>
            <p className="text-sm mt-1">
              Car service is essential for maintaining the performance and longevity of your vehicle.
            </p>
     </div>
    
          </div>
     </div>
      <div className="bg-black mt-16 p-5 md:w-350 h-25 rounded-2xl flex flex-wrap dark:bg-gray-200 justify-center items-center space-x-1 md:gap-10">
        <p className="text-white dark:text-black font-semibold md:text-1xl">Spotify</p>
        <p className="text-white dark:text-black font-semibold md:text-1xl">Gizmodo</p>
        <p className="text-white dark:text-black font-semibold md:text-1xl">Coinbase</p>
        <p className="text-white dark:text-black font-semibold md:text-1xl">Slack</p>
        <p className="text-white dark:text-black font-semibold md:text-1xl">DropBox</p>
     </div>
      </div>
     </div>
     </div>
     </div>
    

  )
  }