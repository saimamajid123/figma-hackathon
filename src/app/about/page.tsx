import Image from 'next/image';

export default function About() {
  return (
    <div className="flex justify-center items-center bg-white py-16">
      <div className="grid grid-cols-2 gap-8 w-4/5">
        {/* Left Side - Images */}
        <div className="grid grid-cols-2 gap-4">
          {/* First Image - Top Left */}
          <div className="relative w-full h-[300px] bg-gray-200">
            {/* Replace with the first image */}
            <Image src="/Rectangle 8.png" alt="Image 1" layout="fill" objectFit="cover" />
          </div>

          {/* Second Image - Top Right */}
          <div className="relative w-full h-[300px] bg-gray-200">
            {/* Replace with the second image */}
            <Image src="/Rectangle 9.png" alt="Image 2" layout="fill" objectFit="cover" />
          </div>

          {/* Third Image - Bottom (Spanning Full Width) */}
          <div className="relative col-span-2 w-full h-[150px] bg-gray-200">
            {/* Replace with the third image */}
            <Image src="/Rectangle 10.png" alt="Image 3" layout="fill" objectFit="cover" />
          </div>
        </div>

        {/* Right Side - About Text */}
        <div className="flex flex-col justify-center">
          <h2 className="text-5xl font-light text-gray-600">About</h2>
          <p className="mt-6 text-gray-700">
            Lorem Ipsum is simply dummy text of the printing and typesetting industry.
            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            It has survived not only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged.
          </p>
          <button className="mt-8 px-6 py-2 text-lg font-semibold text-gray-700 border border-gray-300 rounded hover:bg-gray-100">
            Read More →
          </button>
        </div>
      </div>
    </div>
  );
}
