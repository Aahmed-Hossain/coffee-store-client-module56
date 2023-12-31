import img1 from '../../../../assets/assets/images/banner/1.jpg'
import img2 from '../../../../assets/assets/images/banner/2.jpg'
import img3 from '../../../../assets/assets/images/banner/3.jpg'
import img4 from '../../../../assets/assets/images/banner/4.jpg'
import img5 from '../../../../assets/assets/images/banner/5.jpg'
import img6 from '../../../../assets/assets/images/banner/6.jpg'

const Banner = () => {
    return (
        <div className="carousel h-[28rem]  rounded-xl w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src={img1} className="w-full  " />
    <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
        <div className=' pl-12 w-1/2'>
      <h1 className='my-6 text-6xl font-bold space-y-16'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      
      <div className='my-4 flex gap-4'>
      <button className="btn btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide4" className="btn btn-circle hover:bg-red-500">❮</a> 
      <a href="#slide2" className="btn btn-circle hover:bg-red-500">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
  <img src={img2} className="w-full  " />
    <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
        <div className=' pl-12 w-1/2'>
      <h1 className='my-6 text-6xl font-bold space-y-16'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      
      <div className='my-4 flex gap-4'>
      <button className="btn btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
  <img src={img3} className="w-full  " />
    <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
        <div className=' pl-12 w-1/2'>
      <h1 className='my-6 text-6xl font-bold space-y-16'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      
      <div className='my-4 flex gap-4'>
      <button className="btn btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
  <img src={img4} className="w-full  " />
    <div className="absolute left-0 top-0 flex items-center h-full gap-4 bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] text-white ">
        <div className=' pl-12 w-1/2'>
      <h1 className='my-6 text-6xl font-bold space-y-16'>Affordable Price For Car Servicing</h1>
      <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
      
      <div className='my-4 flex gap-4'>
      <button className="btn btn-secondary">Discover More</button>
      <button className="btn btn-outline btn-secondary">Latest Project</button>
      </div>
      </div>
    </div>
    <div className="absolute flex justify-end gap-4 transform -translate-y-1/2 left-5 right-5 bottom-0">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
    );
};

export default Banner;