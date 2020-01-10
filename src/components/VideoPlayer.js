import React from "react"
import "./VideoPlayer.css"
const VideoPlayer = () => {
    return (
      <>
        {/* Cloudinary Video Player embed code */}
        <iframe src="https://res.cloudinary.com/jam-unilever/video/upload/v1578593090/gatsby-cloudinary/rambo.mp4" title="video" allow="autoplay; fullscreen; encrypted-media; picture-in-picture" allowfullscreen frameborder="0">
        </iframe>
      </>
    )
  }
  export default VideoPlayer;