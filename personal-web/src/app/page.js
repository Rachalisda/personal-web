import React from 'react';
import Button from './styles/button';
import Card from './styles/card';

export default function Page() {
  return (
    <div className="page-style">
         <div className="bg-[var(--background)]">
        {/* Container: sets up stacking for hero and content */}
        <div className="container relative overflow-hidden md:overflow-visible mx-auto flex flex-col md:flex-row items-start min-h-[400px] md:min-h-auto">

          {/* Main Content: above hero */}
          <div className="relative z-10 p-8 w-full md:w-[5000px]">
            <h1>Love Data and Reports?</h1>
            <p className="text-lg text-[var(--text-color)] mb-6 relative">
              We have what you need. More content is coming soon.
              <span className="absolute left-0 bottom-[-10px] w-[50%] h-[2px] bg-[var(--text-color)] opacity-50"></span>
            </p>
            <Button variant="primary">OK!</Button>
          </div>

       {/* Hero Section: behind content on small screens, floats right on md+ */}
          <div className="absolute inset-0 z-0 h-[400px] w-full
                          md:static md:inset-auto md:h-[400px] md:w-auto md:ml-20 md:mr-60">
            <div className="bg-[var(--foreground)] h-full w-full p-10 rounded-lg shadow-lg">
              {/* Hero content */}
            </div>
          </div>

        </div>
      </div>

<section className="bg-[var(--background)] py-12 p-16">
       <h1>
        Main 3 Projects
       </h1>
        <div className="container mx-auto px-4">
          <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-8">
            {/* Analysis card */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Card
                title="Project"
                topBarLight={3}
                topBarDark={3}
                variant="light" 
                secondDots={false}
                footer={
                  <>
                    <div className="bg-[var(--text-color)] flex-1 h-24 rounded" />
                  </>
                }
              >
                Then I’m gonna analyze something else.
              </Card>
            </div>

             {/* Analysis card */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Card
                title="Analysis"
                topBarLight={3}
                topBarDark={3}
                footer={
                  <>
                    <div className="bg-[var(--foreground)] flex-1 h-24 rounded" />
                  </>
                }
              >
                Then I’m gonna analyze something else.
              </Card>
            </div>



             {/* Analysis card */}
            <div className="w-full md:w-1/3 flex justify-center">
              <Card
                title="Project"
                topBarLight={3}
                topBarDark={3}
                variant='dark'
                secondDots={false}
                footer={
                  <>
                    <div className="bg-[var(--foreground)] flex-1 h-24 rounded" />
                  </>
                }
              >
                Then I’m gonna analyze something else.
              </Card>
            </div>
          </div>
          
        </div>
        <p className="p-10 text-[var(--text-color)]">These are the top ones, but theres more</p>
      <Button variant="secondary">Take me to More</Button>

      </section>

     {/* Call to Action */}
     <section className="text-center py-10 bg-[var(--foreground)]">
        <h2 className="text-2xl font-bold mb-4">Let’s Work Together</h2>
        <p className="text-md mb-6">Got a project or idea? I’d love to hear it and bring it to life with data and design.</p>
        
        <Button variant="primary">Contact Me</Button>

      </section>

    </div>
  
  );
}
