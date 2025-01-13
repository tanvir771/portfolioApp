import { useEffect } from 'react';
import './App.css';
import Gallery from '../components/Gallery';
import Photos from './Photos';

function App() {
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
          <p className='text-xs sm:text-sm md:text-base'>I'm a Computer Science student at Simon Fraser University, pursuing a minor in Mathematics.</p> 
          <div class="scroll-down mt-8"> <p>Scroll down</p> <div class="arrow"></div> </div>
        </section>
      </main>

      <section className="myHidden">
        <p className="text-xs sm:text-sm md:text-base">You can take a look at some of my projects here</p> 
        <p className="text-xs sm:text-sm md:text-base mb-4">I mainly like working with: </p>
        <div className="logos">
          <div className="logo myHidden">
            <i className="devicon-cplusplus-plain"></i>
          </div>
          <div className="logo myHidden">
            <i className="devicon-react-original"></i>
          </div>
          <div className="logo myHidden">
            <i className="devicon-nodejs-plain-wordmark"></i>
          </div>
          <div className="logo myHidden">
            <i className="devicon-csharp-plain"></i>
          </div>
        </div>
        <div class="scroll-down mt-8"> <p>Scroll down</p> <div class="arrow"></div> </div>
      </section>

      <section className="myHidden">
        <p className='text-center text-xs sm:text-sm md:text-base'>Beyond coding, I love capturing cityscapes through photography</p>
        <p className='text-center text-xs sm:text-sm md:text-base'>check them out!</p>
        <div class="scroll-down mt-8"> <p>Scroll down</p> <div class="arrow"></div> </div>
      </section>

      <section className="myHidden"><Photos/></section>
    </>
  );
}

export default App;