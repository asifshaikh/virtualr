import { CheckCircle2 } from 'lucide-react';
import { pricingOptions } from '../constants';
const Pricing = () => {
  return (
    <div className='mt-20'>
      <h2 className='text-center text-3xl sm:text-5xl lg:text-6xl tracking-wide my-8'>
        Pricing
      </h2>
      <div className='flex flex-wrap '>
        {pricingOptions.map((option, index) => (
          <div key={index} className='w-full sm:w-1/2 lg:w-1/3 p-2'>
            <div className='p-10 border border-neutral-700 rounded-xl'>
              <p className='text-4xl mb-8'>
                {option.title}
                {option.title === 'Pro' && (
                  <span className='bg-gradient-to-r from-orange-500 to bg-red-400 bg-clip-text text-transparent text-xl mb-4 ml-2'>
                    (Most Popular)
                  </span>
                )}
              </p>
              <p className='mb-8'>
                <span className='text-5xl mt-6 mr-2'>{option.price}</span>{' '}
                <span className='text-neutral-500'>/Month</span>
              </p>
              <ul>
                {option.features.map((feature, index) => (
                  <li key={index} className='flex items-center mb-4'>
                    <CheckCircle2 className='text-green-500 mr-2' />
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href='#'
                className='inline-flex justify-center items-center w-full h-12  border border-orange-700 p-5 rounded-xl mt-10 tracking-tight text-xl hover:bg-orange-900 transition duration-200'
              >
                Subscribe
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Pricing;
