

import ClientCount from './components/homepage/ClientCount';
import Image from 'next/image';


export default function Home() {
  return (
    <>

      <section>

        <div className="container mx-auto">
          <h1 className="text-2xl">This is a container</h1>
          <p>This container is centered and has responsive padding.</p>
        </div>
        <Image
          src="/images/delete.svg" // Path to your image in the public folder
          alt="My Image"
          width={500} // Width in pixels
          height={300} // Height in pixels
        />

        <ClientCount/>


      </section>


    </>


  );
}
