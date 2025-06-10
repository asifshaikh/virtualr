import video1 from '../assets/video1.mp4';
import video2 from '../assets/video2.mp4';
const Hero = () => {
  return (
    <div className='flex flex-col items-center mt-6 lg:mt-20'>
      <h1 className='text-4xl sm:text-6xl lg:text-7xl tracking-wide text-center'>
        VirtualR build tools
        <span className='bg-gradient-to-r from-orange-500 to bg-red-800 bg-clip-text text-transparent'>
          {' '}
          for developers
        </span>
      </h1>
      <p className='mt-10 text-lg text-center max-w-4xl text-neutral-500'>
        Empower your creativity and bring your VR app ideas to life with out
        intuitive development tools. Get started today and turn your imagination
        into immersive reality!
      </p>
      <div className='flex justify-center my-10'>
        <a
          href='#'
          className='bg-gradient-to-r from-orange-500 to bg-orange-800 py-3 px-4 mx-3 rounded-md'
        >
          Start for free
        </a>
        <a href='#' className='py-3 px-4 rounded-md mx-3 border'>
          Documentation
        </a>
      </div>
      <div className=' flex flex-col items-center md:flex-row justify-center mt-10'>
        <video
          autoPlay
          loop
          muted
          className='rounded-lg sm:w-1  md:w-1/2  border border-orange-500 shadow-lg mx-2 my-4'
          src={video1}
        />
        <video
          autoPlay
          loop
          muted
          className='rounded-lg sm:1 md:w-1/2 border border-orange-500 shadow-lg mx-2 my-4'
          src={video2}
        />
      </div>
    </div>
  );
};

export default Hero;
