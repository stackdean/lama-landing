import React from 'react';
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import TimelineSectionWrapper from './timeline.style';

const Timeline = () => {
    return (
        <div>
<TimelineSectionWrapper>
    <VerticalTimeline>
        <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
            contentArrowStyle={{ borderRight: '7px solid  #fff' }}
            date="Q2 | 2022"
            iconStyle={{ background: '#decbff', color: '#fff' }}
            icon={null}
        >
            
            <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}}>Business conceptualization</h4>
            <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}}>Team set up and structuring</h4>
           
        </VerticalTimelineElement>
  
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Q3 | 2022"
    iconStyle={{ background: '#d3ecff', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    icon={null}
  >
    
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#3d7098', fontWeight:'300'}}>Business Registration and Licensing</h4>
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#3d7098', fontWeight:'300'}} >Private Sale</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >Public Sale and Launch</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >Staking</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >Listings</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >Shareholders NFT - Initial release</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >APP Launch</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Q4 | 2022"
    iconStyle={{ background: '#caffed', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
  >
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}}>Shareholders NFT - Second release</h4>
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}} >The Lama Lounge soft opening</h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#290e59', fontWeight:'300'}} >First business venture</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--work"
    date="Q1 | 2023"
    iconStyle={{ background: '#d3ecff', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    icon={null}
  >
    
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#3d7098', fontWeight:'300'}}>The Lama Lounge grand opening </h4>
    <h4 className="vertical-timeline-element-subtitle"style={{color:'#3d7098', fontWeight:'300'}} >Shareholders NFT - Third release</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Q2 | 2023"
    iconStyle={{ background: '#caffed', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
  >
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}}>Shareholders NFT - Final release </h4>
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}} >Succeeding business venture</h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Q3 | 2023"
    iconStyle={{ background: '#d3ecff', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    icon={null}
  >
    
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#3d7098', fontWeight:'300'}}>Second APP Launch </h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    className="vertical-timeline-element--education"
    date="Q4 | 2023"
    iconStyle={{ background: '#caffed', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
  >
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#290e59', fontWeight:'300'}}>The Lama Lounge second branch opening </h4>
    
  </VerticalTimelineElement>
  <VerticalTimelineElement
    date="Q4 | 2024"
    iconStyle={{ background: '#d3ecff', color: '#fff' }}
    contentStyle={{ background: '#fff', boxShadow: '0 10px 40px rgb(93 70 232 / 15%)', color: '#000' }}
    contentArrowStyle={{ borderRight: '7px solid  #fff' }}
    icon={null}
  >
    
    <h4 className="vertical-timeline-element-subtitle" style={{color:'#3d7098', fontWeight:'300'}}>Stock Market listing </h4>
    </VerticalTimelineElement>
    </VerticalTimeline>
</TimelineSectionWrapper>
        </div>
    );
};

export default Timeline;