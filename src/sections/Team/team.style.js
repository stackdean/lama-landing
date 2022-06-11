import styled from "styled-components";

const TeamSectionWrapper = styled.div`
  padding: 85px 0;
  background:#f9faff;
  
  .alice-carousel__stage-item {
    padding: 1rem !important;
    margin:20px;
    width:265px;
  }

  .team-item {
    background: #fff;
    border-radius: 5px;
    padding: 1rem;
    box-shadow: rgb(93 70 232 / 15%) 0px 10px 40px;
  }
  .title-team{
    color:#0c1737;
  }

  .desc-team{
    color:#586da9;
  }
  @media only screen and (max-width: 320px) {
    .wallet-left-content {
      .heading {
        font-size: 25px;
        line-height: 35px;
      }
    }
  }
`;

export default TeamSectionWrapper;
