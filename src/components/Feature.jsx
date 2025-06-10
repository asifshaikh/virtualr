import { features } from '../constants';
const Feature = () => {
  return (
    <div className='relative mt-20 border-b border-neutral-800 min-h-[800px]'>
      <div className='text-center'>
        <span className='rounded-full bg-neutral-900 text-orange-500 h-6 text-sm font-medium px-2 py-1 uppercase'>
          Features
        </span>
        <h2 className='text-3xl sm:text-4xl lg:text-6xl mt-10 lg:mt-20 tracking-wide'>
          Easily build
          <span className='bg-gradient-to-r from-orange-500 to bg-orange-800 bg-clip-text text-transparent'>
            {' '}
            your code
          </span>
        </h2>
      </div>
      <div className='flex flex-wrap mt-10 lg:mt-20'>
        {features.map((feature, index) => (
          <div key={index} className='w-full sm:1/2 lg:w-1/3 p-4'>
            <div className='flex'>
              <div className='flex mx-6 h-10 w-10 p-2 rounded-full bg-neutral-900 text-orange-700 justify-center items-center'>
                {feature.icon}
              </div>
              <div>
                <h5 className='mt-1 mb-6 text-xl'>{feature.text}</h5>
                <p className='text-neutral-500 text-md p-2 mb-20 '>
                  {feature.description}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Feature;
