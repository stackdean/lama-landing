import styled from "styled-components";

const TimelineSectionWrapper = styled.div`
  padding: 85px 0;
  background:#fff;

  .vertical-timeline
  .vertical-timeline--two-columns:before {
    background: #eaeeff;
  }

  .vertical-timeline::before {
    background: #eaeeff;
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

export default TimelineSectionWrapper;
