import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import '../css/WhyRecruit.css';

const WhyRecruit = () => {
  const [reasonData, setReasonData] = useState([]);

  const { ref, inView } = useInView({
    triggerOnce: true,
    rootMargin: '0px 0px -30% 0px'
  });
 

  const handleDownload = () => {
    const downloadLink = document.createElement('a');
    downloadLink.href = '/documents/Placement Brochure 2023.pdf';
    downloadLink.download = 'Placement Brochure 2023.pdf';
    downloadLink.click();
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/home/why-recruit');
        const data = await response.json();
        setReasonData(data);
      } catch (error) {
        console.error('Error fetching reasonData:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className='whyRecruitContainer' ref={ref}>
      <div className='whyRecruitHolder'>
        {/* Title and button */}
        <div className='whyRecruitTitleContainer'>
          <h1 className='pageHeadingWhyRecruit'>Why Recruit from NIT Calicut?</h1>
          <div className='whiteButton'onClick={handleDownload}>
            <h1 className='buttonText'>Courses Offered</h1>
            <svg
              className='arrow'
              width='10'
              height='10'
              viewBox='0 0 10 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0.272008 0.75735L8.75729 9.24263M8.75729 9.24263V0.75735M8.75729 9.24263H0.272008'
                stroke='black'
                strokeOpacity='1'
                strokeWidth='1'
              />
            </svg>
          </div>
        </div>
        <div className='reasonListContainer'>
          <div className="reasons">
            {reasonData.map((output, index) => (
              <div
                className={`reasonContainer ${inView ? 'animated' : ''}`}
                key={index}
              >
                <div className="reasonNumber">
                  {output.number}
                </div>
                <div className="reasonText">
                  {output.reason}
                </div>
                <span className="arrowIconInactive">
                  <svg
                    width="12.5"
                    height="12.5"
                    viewBox="0 0 10 10"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M0.272008 0.75735L8.75729 9.24263M8.75729 9.24263V0.75735M8.75729 9.24263H0.272008"
                      stroke="white"
                      strokeOpacity="0.5"
                      strokeWidth="0.72"
                    />
                  </svg>
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyRecruit;