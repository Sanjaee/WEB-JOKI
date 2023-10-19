import React, { useState } from "react";

function ThumbnailVideo({ onClick }) {
  return (
    <div>
      <img
        src="thumnel.png"
        alt="Video Thumbnail"
        className=" w-[600px] h-[400px] rounded-xl mt-20"
        onClick={onClick}
        style={{ cursor: "pointer" }}
      />
    </div>
  );
}

function FullVideo({ onBack }) {
  return (
    <div>
      <video controls className="w-[600px] h-[400px] rounded-xl">
        <source src="AtengJoki.mp4" type="video/mp4" className="rounded-xl" />
      </video>
      <button
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md mx-auto block mt-4"
        onClick={onBack}
      >
        Berhenti Menonton
      </button>
    </div>
  );
}

export default function Tutorial() {
  const [showFullVideo, setShowFullVideo] = useState(false);

  const handleVideoClick = () => {
    setShowFullVideo(true);
  };

  const handleBackToThumbnail = () => {
    setShowFullVideo(false);
  };

  return (
    <div>
      <h1 className="text-center font-bold text-4xl mt-20">Cara Pemesanan</h1>
      <div className="justify-center items-center flex mb-10">
        {showFullVideo ? (
          <FullVideo onBack={handleBackToThumbnail} />
        ) : (
          <ThumbnailVideo onClick={handleVideoClick} />
        )}
      </div>
    </div>
  );
}
