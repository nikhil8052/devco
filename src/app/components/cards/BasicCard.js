import React from "react";
import Image from "next/image";

export default function BasicCard({ cardData }) {
    return (
        <div className="w-full h-full rounded overflow-hidden shadow-lg border-lightBlue border p-8 data_card bg-white/5 backdrop-blur-lg"> 
            <div className="mb-4 flex items-center justify-center rounded-md p-2 border-lightBlue border icon_box w-[50px] h-[50px] bg-[rgba(67,83,255,0.04)] border-[rgba(67,83,255,0.12)]">
                <Image src={cardData.iconSrc} width={20} height={22} alt="Card Icon" />
            </div>

            <div className="mb-5">
                <h2 className="font-semibold mb-3 text-[25px] text-customwhite">{cardData.title}</h2>
                <p className="text-[20px] text-customwhite leading-normal">{cardData.description}</p>
            </div>
            <div>
                <div className="flex flex-col space-y-4 mb-2">
                    {cardData.services.map((service, index) => (
                        <div key={index} className="flex items-center skill_line space-x-4">
                            <div className="image_icon"><Image src={service.imageSrc} width={50} height={40} alt={`${service.name} Icon`} className=" w-full min-w[30px] h-[50px] max-w-[30px]" /></div>
                            <p className="w-full border-b border-lightBlue text-customwhite leading-normal pb-4 text-[18px]">{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
