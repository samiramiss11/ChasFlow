import React from 'react'

interface BannerProps {
  children: React.ReactNode
  heroContent: {
    hero: String
    subheader: String
    paragraph: String
  }
  cutBottom:boolean
}
import { useLocation } from 'react-router'
import { JOURNY_LINSK_CONSTANTS } from '../../utils/links'
const CenteralizedBanner: React.FC<BannerProps> = ({
  children,
  heroContent,
  cutBottom
}) => {
  const location = useLocation()

  const isLoginPage =
    location.pathname ==
    `/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP1}/${JOURNY_LINSK_CONSTANTS.ONBOARDING_STEP2}`

  return (
    <div className={`relative z-[30]   bg-bannerShade ${ cutBottom? 'h-[calc(100vh-129px)]':'h-screen'} w-full `}>
      {/* Banner Content - Centered at 5/7 of the screen height */}
      <div className='pl-12 absolute top-[45%] transform -translate-y-1/2  h-[71vh] flex flex-col md:flex-row items-center bg-banner shadow-lg rounded-lg px-10  z-10 w-full '>
        {/* Left Side - Children */}
        <div className='md:w-1/2 flex justify-center items-center '>
          {children}
        </div>

        {/* Right Side - Hero Content */}
        <div className=' md:w-1/2 z-30 text-white  md:pl-10'>
          <div className='w-full md:w-[80%] ml-auto  flex flex-col justify-center'>
            <h1 className={`-ml-4 text-4xl font-bold ${isLoginPage ? '' : 'opacity-50 '}font-caveat text-9xl leading-[1.2] text-center`}>{heroContent.hero}</h1>
            {isLoginPage && (
              <>
                <h3 className='text-xl italic text-black flex justify-center'>
                  {heroContent.subheader}
                </h3>
                <p className='mt-3 text-black'>{heroContent.paragraph}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default CenteralizedBanner

// return (
//   <div className='relative w-full flex justify-center items-center bg-blue-700 py-16'>
//     {/* Floating Ball */}
//     <div className='absolute left-10 top-[-30px] w-24 h-24 bg-yellow-400 rounded-full shadow-lg'></div>

//     {/* Banner Content */}
//     <div className='flex flex-col md:flex-row items-center justify-between bg-blue-400 shadow-lg rounded-lg px-10 py-8 w-[80%]'>
//       {/* Text on the Right */}
//       <div className='md:w-1/2 text-white text-left'>
//         <h1 className='text-4xl font-bold'>{heroContent.hero}</h1>
//         <h3 className='text-xl italic'>{heroContent.subheader}</h3>
//         <p className='mt-3'>{heroContent.paragraph}</p>
//       </div>

//       {/* Children Content on the Left */}
//       <div className='md:w-1/2 flex justify-center'>{children}</div>
//     </div>
//   </div>
// )

//  return (
//    <div className=' bg-blue-700'>
//      {/* Banner Content */}
//      <div className='flex flex-col md:flex-row items-center  bg-blue-400 shadow-lg rounded-lg px-10 py-8 '>
//        {/* Children Content on the Left */}
//        <div className='md:w-1/2 '>{children}</div>

//        {/* Right Side - Hero Content */}
//        <div className='w-full md:w-1/2 text-white text-left md:pl-10 flex flex-col justify-center'>
//          <div className='w-full md:w-[80%] ml-auto'>
//            {' '}
//            {/* Ensures right alignment */}
//            <h1 className='text-4xl font-bold'>{heroContent.hero}</h1>
//            <h3 className='text-xl italic'>{heroContent.subheader}</h3>
//            <p className='mt-3'>{heroContent.paragraph}</p>
//          </div>
//        </div>
//      </div>
//    </div>
//  )
