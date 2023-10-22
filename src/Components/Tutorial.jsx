import React from "react";

function ThumbnailVideo() {
  return (
    <div>
      <div className="video-responsive mt-14 justify-center items-center flex ">
        <iframe
          width="800"
          height="400"
          src="https://www.youtube.com/embed/lmgNmgqMPaM"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}

export default ThumbnailVideo;
