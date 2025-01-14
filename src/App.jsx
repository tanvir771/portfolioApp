import { useEffect } from 'react';
import './App.css';
import Gallery from '../components/Gallery';
import Photos from './Photos';
import ProjectCollection from '../components/ProjectCollection'

function App() {
  const projects = [
    {
      title: 'Project One',
      description: 'A description of project one.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Two',
      description: 'A description of project two.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Three',
      description: 'A description of project three.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Three',
      description: 'A description of project three.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Three',
      description: 'A description of project three.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Three',
      description: 'A description of project three.',
      imageUrl: 'https://via.placeholder.com/250',
    },
    {
      title: 'Project Three',
      description: 'A description of project three.',
      imageUrl: 'https://via.placeholder.com/250',
    },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show');
        }
      });
    });

    const hiddenElements = document.querySelectorAll('.myHidden');
    hiddenElements.forEach((el) => observer.observe(el));

    return () => {
      // Cleanup observer when component unmounts
      observer.disconnect();
    };
  }, []);

  return (
    <>
      <main className="sfu_img">
        <section className="myHidden first">
          <h1 className='sm:text-2xl text-xl mb-4'>Hi, I'm Tanvir Leon!</h1>
          <p className='text-xs sm:text-sm md:text-base'>I'm a Computer Science major @SFU, with a minor in Mathematics.</p>
          <div className="info">
            <div className="myHidden">
              <a href="https://github.com/tanvir771"><i class="smlogo devicon-github-original"></i></a>
            </div>
            <div className="myHidden">
              <a href="https://www.linkedin.com/in/tanvir-leon"><i class="smlogo devicon-linkedin-plain"></i></a>
            </div>
          </div>
          <div class="scroll-down"> <p>Scroll down</p> <div class="arrow"></div> </div>
        </section>
      </main>

      <section className="myHidden">
        <p className="text-xs sm:text-sm md:text-base">You can take a look at some of my projects here</p>
        <p className="text-xs sm:text-sm md:text-base mb-4">I mainly like working with: </p>
        <div className="logos">
          <div className="logo myHidden">
            <i className="lglogo devicon-cplusplus-plain"></i>
          </div>
          <div className="logo myHidden">
            <i className="lglogo devicon-react-original"></i>
          </div>
          <div className="logo myHidden">
            <i className="lglogo devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="logo myHidden">
            <i className="lglogo devicon-csharp-plain"></i>
          </div>
        </div>
        <div class="scroll-down mt-8"> <p>Scroll down</p> <div class="arrow"></div> </div>
      </section>

      <section className="myHidden">
        <h1 className='sm:text-2xl text-xl mb-4'>Showcase of my projects</h1>
        <div className='infogit'>
          <p className='text-xs sm:text-sm md:text-base'>Find more information on my Github</p>
          <a href="https://github.com/tanvir771"><i class="smlogo devicon-github-original"></i></a>
        </div>
        <ProjectCollection projects={projects} />
      </section>

      <section className="myHidden">
        <p className='text-center text-xs sm:text-sm md:text-base'>Beyond coding, I love capturing cityscapes through photography</p>
        <p className='text-center text-xs sm:text-sm md:text-base'>check them out!</p>
        <div class="scroll-down mt-8"> <p>Scroll down</p> <div class="arrow"></div> </div>
      </section>

      <section className="myHidden"><Photos /></section>
    </>
  );
}

export default App;