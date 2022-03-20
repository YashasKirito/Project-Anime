import YouTube from "react-youtube";
import "./styles.scss";

interface IVideoProps {
  videoId: string;
}

const Video: React.FC<IVideoProps> = ({ videoId }) => {
  return (
    <div className="video-player">
      {/* {videoId ? (
        <iframe
          id="video-iframe"
          src={`https://www.youtube.com/embed/${videoId}?cc_load_policy=1&rel=0&autoplay=1`}
          width="100%"
          frameBorder="0"
        ></iframe>
      ) : (
        <span>loading..</span>
      )} */}
      {videoId ? (
        <YouTube
          videoId={videoId} // defaults -> null
          id={videoId} // defaults -> null
          // className={string} // defaults -> null
          // containerClassName={string} // defaults -> ''
          // title={string} // defaults -> null
          opts={{
            width: "100%",
            playerVars: {
              autoplay: 1,
              cc_load_policy: 1,
              rel: 0,
              mute: 1,
            },
          }} // defaults -> {}
          onReady={(e) => {
            console.log("Ready to play ", e);
            // e.target.playVideo();
          }} // defaults -> noop
          onPlay={(e) => {
            console.log("playing ", e);
          }} // defaults -> noop
          onPause={(e) => {
            console.log("Paused ", e);
            // e.target.playVideo();
          }} // defaults -> noop
          onEnd={(e) => console.log("Ended ", e)} // defaults -> noop
          onError={(e) => console.log("Video Error", e)} // defaults -> noop
          // onStateChange={(e) => console.log("Ready to play", e)} // defaults -> noop
          // onPlaybackRateChange={(e) => console.log("Ready to play", e)} // defaults -> noop
          // onPlaybackQualityChange={(e) => console.log("Ready to play", e)} // defaults -> noop
        />
      ) : (
        <span>loading..</span>
      )}
      {/* <div className="playerblocker"></div> */}
    </div>
  );
};

export default Video;
