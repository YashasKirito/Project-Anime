import "./styles.scss";

interface IVideoProps {
  videoId: string;
}

const Video: React.FC<IVideoProps> = ({ videoId }) => {
  return (
    <div className="video-player">
      <iframe
        id="video-iframe"
        src={`https://www.youtube.com/embed/${videoId}?autoplay=1&modestbranding=1&showinfo=0&rel=0&cc_load_policy=1&theme=light&fs=0&color=white`}
        width="100%"
        frameBorder="0"
      ></iframe>
      <div className="playerblocker"></div>
    </div>
  );
};

export default Video;
