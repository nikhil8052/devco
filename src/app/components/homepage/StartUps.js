import React from 'react'
import Image from 'next/image'

export default function StartUps() {
  return (
    
    <>
    
    <div className="container mx-auto p-4"> 
  <div className="text-center mb-6">
    <h2 className="text-2xl font-bold">Web Development & Software Engineering</h2>
    <p>From next-gen startups to established enterprises.</p>
  </div>
  
  <div className="grid grid-cols-3 gap-4">
    <div className="flex justify-center">
      <Image src='/images/php.svg' width={100} height={100} alt="PHP Not found" />
    </div>
    <div className="flex justify-center">
      <Image src='/images/unity.svg' width={100} height={100} alt="PHP Not found" />
    </div>
    <div className="flex justify-center">
      <Image src='/images/python.svg' width={100} height={100} alt="PHP Not found" />
    </div>
    <div className="flex justify-center">
      <Image src='/images/reactjs1.svg' width={100} height={100} alt="PHP Not found" />
    </div>
    <div className="flex justify-center">
      <Image src='/images/java1.svg' width={100} height={100} alt="PHP Not found" />
    </div>
    <div className="flex justify-center">
      <Image src='/images/nodejs1.svg' width={100} height={100} alt="PHP Not found" />
    </div>
  </div>
</div>

    </>
  )
}
