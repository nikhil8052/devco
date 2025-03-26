"use client";
import React from "react";
import Image from "next/image";

const Checkimgcard = ({ data, imageWidth, imageHeight }) => {
  return (
    <div className="checkimgcard-sec py-10 md:py-20">
      <div className="container max-auto">
        <div className="checkimgcard-container grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-10">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-full checkimgcard rounded overflow-hidden shadow-lg border-lightBlue border p-5 data_card bg-white/4 backdrop-blur-lg"
            >
              {/* List Content */}
              <div className="my-4 xl:my-4 md:my-8">
                <ul className="checklist">
                  {item.checklist.map((listItem, listIndex) => (
                    <li key={listIndex} style={{
                      backgroundImage: "url('/images/check-blue.svg')",
                      backgroundRepeat: "no-repeat",
                      backgroundPosition: "left center",
                      backgroundSize: "20px 20px",
                    }}>{listItem}</li>
                  ))}
                </ul>
              </div>
              {/* Image */}
              <div>
                <Image
                  src={item.imageSrc}
                  width={imageWidth}
                  height={imageHeight}
                  alt={item.imageAlt || "Image not found"}
                  className="w-full"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Checkimgcard;
