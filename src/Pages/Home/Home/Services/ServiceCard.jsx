/* eslint-disable react/prop-types */


const ServiceCard = ({service}) => {
    const { title, img, price} = service;
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure className="px-6 pt-6">
    <img src={img} alt="Shoes" className="rounded-xl" />
  </figure>
  <div className="card-body flex-row justify-between">
    <div>
    <h2 className="card-title">{title}</h2>
    <p className="text-xl font-semibold text-orange-500"> Price: ${price}</p>
    </div>
    <div className="flex my-auto">
    <button className="">
    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
  <path d="M4.5 12H19.5M19.5 12L12.75 5.25M19.5 12L12.75 18.75" stroke="#FF3811" />
  </svg>
    </button>
    </div>
  </div>
</div>
    );
};

export default ServiceCard;