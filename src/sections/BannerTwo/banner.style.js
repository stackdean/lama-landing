import styled from "styled-components";
import shapeV from "assets/images/banners/banner-one/shape-v.png"
import maskC from "assets/images/banners/banner-one/mask-c-dark.svg"

const BannerWrapper = styled.div`
  position: relative;
  overflow: hidden;
  padding: 200px 0 270px 0;
  margin-bottom:-0.2rem;

  .nk-ovm:before {
    z-index: 1;
}

.nk-ovm:before, .nk-ovm:after {
    bottom: -1px;
    left: -1px;
}
.mask-contain-bottom:before {
    background-size: contain;
    background-position: 50% 100%;
}
.nk-df-mask-c-dark, .mask-c-dark:before, .mask-c-dark-bg {
    background-image: url(${maskC});
}
.nk-df-bg, .nk-ovm, .nk-ovm:before, .nk-ovm:after, .has-bg, [class*='bg-'], .bg-image, .bg-video, .bg-video-cover {
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50% 50%;
}
.nk-df-around, .nk-ovm, .nk-ovm:before, .bg-image, .bg-video, .bg-video-cover, .overlay:after, .nk-ovm .nk-svgs, .accordion-icon:before, .accordion-icon:after {
    position: absolute;
    bottom: 0;
    height: 50%;
    left: 0;
    right: 0;
}
.nk-ovm:after {
  position: absolute;
    height: 50%;
    top: 0;
    left: 0;
    right: 0;
}
.nk-df-content, .nk-ovm:before, .nk-ovm:after {
    content: "";
}



.nk-df-shape-v, .shape-v:after, .shape-v-bg {
  background-image: url(${shapeV});
}



  .banner__thumb{
    position: absolute;
    right: -8%;
    top: -12%;
    width: 60%;
  }

  .section__particle {
    position: absolute;
    &.top-left {
      left: -98px;
      top: -60px;
      height: 150px;
    }
    &.top-right {
      top: 65px;
      right: 28px;
      height: 74px;
    }
    &.bottom-left {
      bottom: 0px;
      left: 15px;
      height: 150px;
    }
    &.two {
      top: 6px;
      left: 140px;
      height: 87px;
    }
    &.bottom-right {
      right: -40px;
      bottom: 0px;
      height: 200px;
    }
  }

  .banner-content {
    .heading {
      margin: 0 0 38px 0;
      font-size: 2.2rem;
      line-height: 60px;
      font-weight: 700;
    }

    .text {
      margin-bottom: 55px;
    }

    .banner-btn {
      margin-top: 45px;
      a {
        width: 235px;
        font-size: 16px;
        color: #ffffff;
        padding: 18px 25px;
        display: flex;
        align-items: center;
        justify-content: center;
        border: none;

        svg{
          margin-right: 10px;
        }
      }

      .btn-fill {
        transition: all 0.3s ease-in;
        background: rgb(37, 42, 213);
        background: 
          linear-gradient(
            93deg,
            rgb(38 247 178) 0%,
            rgb(79 184 149) 52%,
            rgb(23 138 217) 100% 
        );
        &:hover{
          background: linear-gradient(
          93deg,
          rgba(196, 56, 231, 1) 0%,
          rgba(122, 49, 222, 1) 52%,
          rgba(37, 42, 213, 1) 100%
        );
        }
      }
    }

    .coin-info {
      display: flex;
      align-items: center;
      div {
        display: flex;
        align-items: center;
        margin: 12px 25px 5px 25px;

        .text {
          margin: 0;
        }

        img {
          width: 25px;
          margin-right: 15px;
        }
      }
    }

    .description {
      position: relative;
      display: block;
      line-height: 28px;
      font-size: 18px;
      padding-left: 30px;
      padding-right: 30%;
      margin: 0 0 17px 0;

      &:before {
        position: absolute;
        left: 0;
        top: 0;
        height: 100%;
        width: 3px;
        content: "";
        background: #b096df;
      }
    }
  }

  @keyframes bounce-up-down {
    from {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 200px 200px;
    }
    33% {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 180px 220px;
      transform-origin: 1000px 220px;
    }
    66% {
      -webkit-transform: rotate(1deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 1500px 200px;
    }
    to {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 200px 200px;
    }
  }

  @-webkit-keyframes bounce-up-down {
    from {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 200px 200px;
    }
    33% {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 180px 220px;
      transform-origin: 1000px 220px;
    }
    66% {
      -webkit-transform: rotate(1deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 1500px 200px;
    }
    to {
      -webkit-transform: rotate(0deg);
      -webkit-transform-origin: 200px 200px;
      transform-origin: 200px 200px;
    }
  }

  @keyframes opacity-controll {
    0%   { opacity: 1; }
    25%  { opacity: 0.8; }
    50%  { opacity: 0.6; }
    75%  { opacity: 0.2; }
    100% { opacity: 0; }
  }
  @-webkit-keyframes opacity-controll {
    0%   { opacity: 1; }
    25%  { opacity: 0.8; }
    50%  { opacity: 0.6; }
    75%  { opacity: 0.2; }
    100% { opacity: 0; }
  }

  #Path_46973{
    animation: opacity-controll 1.5s infinite; /* IE 10+, Fx 29+ */
  }
  #Path_46974{
    animation: opacity-controll 1.7s infinite; /* IE 10+, Fx 29+ */
  }
  #Path_46975{
    animation: opacity-controll 1.9s infinite; /* IE 10+, Fx 29+ */
  }
  #Path_46976{
    animation: opacity-controll 2s infinite; /* IE 10+, Fx 29+ */
  }

  @media only screen and (max-width: 1024px) { 
    .banner__thumb{
      right: 0;
    }
    .banner-content {
      .heading{
        font-size: 45px;
        line-height: 65px;
        font-weight: 600;
      }
    }
  }
  @media only screen and (max-width: 912px) { 
    padding: 215px 0 150px 0;
    .banner__thumb{
      display: none;
    }
    .banner-content {
      .heading{
        font-size: 40px;
        line-height: 60px;
      }
    }
  }
  @media only screen and (max-width: 768px) { 
    padding: 180px 0 120px 0;
    .banner-content {
      .heading{
        font-size: 35px;
        line-height: 50px;
      }
    }
  }
  @media only screen and (max-width: 480px) { 
    .banner-content {
      .heading{
        font-size: 30px;
        line-height: 50px;
        br{
          display: none;
        }
      }
      .text{
        br{
          display: none;
        }
      }
    }
    .section__particle{
      &.bottom-right{
        display: none;
      }
    }
  }
  @media only screen and (max-width: 375px) { 
    .banner-content {
      .heading{
        font-size: 28px;
        line-height: 40px;
      }
      .description{
        font-size: 16px;
        line-height: 26px;
        padding-left: 20px;
      }
      .coin-info{
        div{
          margin: 12px 8px 5px 8px;
          img{
            margin-right: 10px;
          }
        }
      }
    }
  }
`;
export default BannerWrapper;
