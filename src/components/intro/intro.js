import ReactPlayer from "react-player";
import { IoVolumeMute, IoVolumeHigh } from "react-icons/io5"; // Sử dụng IoVolumeHigh cho bật tiếng
import styled from "styled-components";
import { useState } from "react";

function Intro() {
  const [isMuted, setIsMuted] = useState(false); // Mặc định tắt tiếng

  // Hàm toggle âm thanh
  const toggleMute = () => {
    setIsMuted((prevMuted) => {
      console.log("Trạng thái mới của muted:", !prevMuted); // Debug trạng thái
      return !prevMuted;
    });
  };

  return (
    <IntroContainer>
      {/* Video */}
      <ReactPlayer
        playing={false}
        loop={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMuted} // Trạng thái tắt tiếng
        url="https://player.vimeo.com/video/314849244"
        className="videoIntro"
        onError={(e) => console.error("Video error:", e)}
      />

      {/* Thông tin Intro */}
      <div className="infoIntro">
        <h1 className="headingIntro">Netflix The Rain</h1>
        <p className="overviewIntro">Netflix Elite Launch</p>
      </div>

      {/* Nút bật/tắt tiếng */}
      <div className="btnVolume" onClick={toggleMute}>
        {isMuted ? <IoVolumeMute size={30} /> : <IoVolumeHigh size={30} />}
      </div>

      {/* Hiệu ứng fade */}
      <div className="fadeBottom"></div>
    </IntroContainer>
  );
}

export default Intro;

const IntroContainer = styled.div`
  background-color: var(--color-background);
  position: relative;
  color: var(--color-white);
  padding-top: 50%;

  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }

  .infoIntro {
    position: absolute;
    top: 120px;
    left: 200px;

    @media screen and (max-width: 800px) {
      top: 100px;
      left: 30px;
    }

    .headingIntro {
      font-size: 60px;
      transition: all 1s ease;

      @media screen and (max-width: 800px) {
        font-size: 40px;
      }

      @media screen and (max-width: 600px) {
        font-size: 20px;
      }
    }

    .overviewIntro {
      max-width: 500px;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;

      @media screen and (max-width: 800px) {
        font-size: 16px;
      }

      @media screen and (max-width: 600px) {
        font-size: 14px;
      }
    }
  }

  .btnVolume {
    position: absolute;
    height: 50px;
    width: 50px;
    right: 10%;
    top: 10%;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: rgba(0, 0, 0, 0.5);
    border-radius: 50%;
    color: #fff;
    transition: transform 0.3s ease-in-out;

    &:hover {
      transform: scale(1.1);
      background-color: rgba(255, 255, 255, 0.3);
    }

    @media screen and (max-width: 800px) {
      height: 40px;
      width: 40px;
    }

    @media screen and (max-width: 600px) {
      height: 30px;
      width: 30px;
    }
  }

  .fadeBottom {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgba(17, 17, 17)
    );
  }
`;
