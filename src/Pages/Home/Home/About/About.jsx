/* eslint-disable react/no-unescaped-entities */
import person from '../../../../assets/assets/images/about_us/person.jpg'
import parts from '../../../../assets/assets/images/about_us/parts.jpg'

const About = () => {
    return (
        <div className="hero min-h-screen">
  <div className="hero-content flex-col lg:flex-row">
    <div className='w-1/2 relative'>
    <img  src={person} className="max-w-md  rounded-lg shadow-2xl w-3/4" />
    <img src={parts} className="max-w-sm  shadow-2xl w-1/2 absolute right-8 border-8 border-white top-1/2 rounded-lg" />
    </div>
    <div className='w-1/2'>
        <h3 className='text-orange-500 font-semibold text-2xl my-4'>About us</h3>
      <h1 className="text-5xl font-bold">We are qualified & of experience in this field</h1>
      <p className="my-6 text-[#737373]">There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
      <p className=" text-[#737373]">the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.  </p>
      <button className="py-3 my-4 bg-orange-600 text-white font-bold px-4 rounded-lg">Get More Info</button>
    </div>
  </div>
</div>
    );
};

export default About;