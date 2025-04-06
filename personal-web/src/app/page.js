import React from 'react';
import Button from './styles/button';



export default function Page() {
  return (
    <div className="page-style">
      <div className="bg-[var(--background)]">
      <div className=" container">
        <div className="text-left p-8 w-[500px] ">
          <h1 className="fade-in active text-6xl font-bold text-[var(--text-color)] mb-7">
           Love Data and Reports?
          </h1>
          <p className="text-lg text-[var(--text-color)] mb-25 relative">
            We have what you need. More content is coming soon.
            {/* Underline element */}
            <span className="absolute left-0 bottom-[-45px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50"></span>
            </p>
          <Button variant="primary">OK!</Button>
        </div>
        
        {/* Hero Section */}
        <div className="bg-[var(--foreground)]  h-[400px] mr-60 ml-20 p-10 rounded-lg shadow-lg flex-1 min-h-[300px]">
          {/* Additional content goes here */}
        </div>
      </div>
      </div>


      {/* Next content */}
      <div className='bg-[var(--background)]'>
         <div className='bg-[var(--background)] container m-20'>

          {/* project do-dads*/}
          <div className='bg-[var(--background)] w-[55%] h-[100%] flex flex flex-col justify-center items-left'>
              <div className='bg-[var(--text-color)] w-[60%] h-[45%] rounded-2xl m-20 shadow-2xl hover:shadow-2xl hover:scale-105 transition-all'>
              <div className='bg-gray-300 h-8 rounded-t-2xl mb-4'>
                <div className='flex space-x-2 ml-1.5'>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)] m-2'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)] mr-2 mt-2'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)] mt-2'></div>
                </div>
                <div className='m-10 flex flex-row'>
                  <div className='flex flex-col w-[800px] h-[100%]'>
                  <h1 className='font-bold text-2xl'>Housing Analysis</h1>
                    <div >I'm gonna analyze a bunch of houses and put my findings here</div>
                  </div>
                <div className='bg-[var(--background)] w-[800px] h-[210px]'></div>
                <div className='m-3 w-[40px] text-xs'>
                  Data Wrangling<br></br><br></br>Api<br></br><br></br>Modeling
                </div>
                </div>

              </div>
              </div>


              <div className='bg-[var(--background)] w-[70%] h-[30%] rounded-2xl ml-20 mb-20 shadow-2xl hover:shadow-2xl hover:scale-105 transition-all'>
              <div className='bg-gray-300 h-8 rounded-t-2xl'>
              <div className='flex justify-between items-center h-full px-3'>
                <div className='flex space-x-2'>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)]'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)]'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--background)]'></div>
                </div>

                <div className='flex space-x-2'>
                  <div className='w-2 h-2 rounded-full bg-[var(--text-color)]'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--text-color)]'></div>
                  <div className='w-2 h-2 rounded-full bg-[var(--text-color)]'></div>
                </div>
              </div>
              <div className='m-10 flex flex-row text-[var(--text-color)] h-[120px]'>
                <div className='flex flex-col w-[500px] h-full justify-between'>
                  <h1 className='font-bold text-2xl'>Analysis</h1>
                  <div>Then I'm gonna analyze something else</div>
                </div>

                <div className='bg-[var(--foreground)] w-[800px] h-full mr-5'></div>

                <div className=' w-[400px] border border-gray-300 h-full'></div>
              </div>
            </div>
                <div className='bg-[var(--foreground)] h-5 mb-4'></div>
              </div>

            </div>

            {/* The right-most do-dad*/}
            <div className='bg-[var(--foreground)] w-[100%] h-[65%] mt-30 rounded-2xl shadow-2xl hover:shadow-2xl hover:scale-105 transition-all'>   
              <div className='bg-[var(--background)] w-[78%] h-[85%] m-10 flex justify-center items-center flex-col'>
                <h1 className='text-[var(--text-color)] text-2xl mb-3'>Project</h1>
                <div className='border border-gray-300 h-[20%] w-[40%]'></div>
                
                <div className='bg-[var(--foreground)] rounded-t-xl h-[5%] w-[70%] mt-3 flex justify-center items-left flex-col'>
                  <p className='m-4 text-sm text-[var(--text-color)]'>Description</p>
                </div>

                <div className='bg-[var(--foreground)] rounded-b-xl h-[10%] w-[70%] mt-1 flex justify-center items-left flex-col'>
                  <p className='m-4 text-sm text-[var(--text-color)]'>Does some interesting stuff here</p>
                </div>

                <div className='mt-4 flex flex-row h-[35%] w-[80%]'>
                  <div className='border border-gray-300 h-[full] w-[30%] rounded-sm'></div>
                  <div className='h-[full] w-[30%] ml-4'>
                     <div className=' bg-[var(--foreground)] h-[60%] w-full flex flex-col rounded-sm'></div>
                     <div className=' mt-2 bg-[var(--foreground)] h-[35%] w-full flex flex-col rounded-sm'></div>
                  </div>
                
                  <div className='ml-4 bg-[var(--foreground)] rounded- h-[60%] w-[30%]'></div>
                </div>

              </div>
            </div>
          
          

            <div className='bg-[var(--background)] w-[75%] ml-10 mt-30 text-[var(--text-color)] text-base'>
              <h1 className=' text-3xl'>Data Wrangling</h1>
              <p className='mt-5 mb-5'>Projects related to data wrangling</p>
            <Button variant="secondary">See More</Button>
              
            <h1 className=' text-3xl mt-20'>Analysis Reports</h1>
              <p className='mt-5 mb-5'>Projects related to dashboard visualization and report creation</p>
            <Button variant="secondary">See More</Button>
            </div>


       
         </div>

      </div>





      
    </div>
  
  );
}
