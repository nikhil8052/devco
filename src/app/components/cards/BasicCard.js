import React from "react";
import Image from "next/image";
import homeCustomStyle from "../../styles/home.module.css";

export default function BasicCard({ cardData }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg border-lightBlue border-2 p-8">
            <div className="mb-2 inline-block rounded-md p-2 border-lightBlue border-2">
                <Image src={cardData.iconSrc} width={20} height={22} alt="Card Icon" />
            </div>

            <div className="mb-5">
                <h2 className="font-bold text-xl mb-2 text-[25px]">{cardData.title}</h2>
                <p className="text-[16px]">{cardData.description}</p>
            </div>
            <div>
                <div className="flex flex-col space-y-4 mb-2">
                    {cardData.services.map((service, index) => (
                        <div key={index} className="flex space-x-2 ">
                            <Image src={service.imageSrc} width={33} height={33} alt={`${service.name} Icon`} />
                            <p className="w-full border-b border-lightBlue">{service.name}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

