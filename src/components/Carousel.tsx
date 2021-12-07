import { useState } from 'react';
import { images } from '../util/carouselData';

export default function Carousel() {
  const [currentImage, setCurrentImage] = useState<number>(0);

  return (
    <div className="w-9/12 h-5/6 bg-black">
      <div
        className="w-full h-full bg-center bg-cover bg-no-repeat flex flex-col justify-center"
        style={{ backgroundImage: `url(${images[currentImage].image})` }}
      >
        <div className="flex justify-between mx-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white rounded-full cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              currentImage !== 0 &&
              images.length > 0 &&
              setCurrentImage(currentImage - 1)
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 15l-3-3m0 0l3-3m-3 3h8M3 12a9 9 0 1118 0 9 9 0 01-18 0z"
            />
          </svg>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7 text-white rounded-full cursor-pointer"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            onClick={() =>
              currentImage < images.length - 1 &&
              setCurrentImage(currentImage + 1)
            }
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M13 9l3 3m0 0l-3 3m3-3H8m13 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
