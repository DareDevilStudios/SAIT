import React from "react";
import Image from "next/image";
const PlacementCard = ({ title, description, img, speakers, key }) => {
  const displayedText =
    description?.length > 50 ? `${description.slice(0, 70)}...` : description;
  return (
    <div>
      <div className="card lg:w-60 w-52 bg-base-100 shadow-xl">
        <figure>
          <img src={img} alt="Shoes" className="h-[15rem] w-full " />
        </figure>
        <div className="card-body">
          <h2 className="card-title text-white">{title}</h2>
          {/* <p>If a dog chews shoes whose shoes does he choose?</p> */}
          {/* <div className="card-actions justify-end">
            <button className="btn btn-primary">Buy Now</button>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default PlacementCard;
