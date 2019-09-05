import React from 'react';
import styled from 'styled-components';

import imgPlaceholder from '../../Images/website_preview_placeholder_tall.png';

const WorkCardContainer = styled.div`
  /* padding: 0.5rem; */
  border-radius: 5px;
  background-color: #fafafa;
  margin: 1rem;
  min-width: 28rem;
  overflow: hidden;

  /* -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px; */

  box-shadow: 0 15px 35px rgba(45, 50, 126, 0.1),
    0 5px 15px 0 rgba(45, 50, 126, 0.07);
`;

const WorkCardWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;

  h4 {
    flex-basis: 100%;
    background-color: green;
    text-align: center;
    margin: 0;
  }

  .left {
    flex-basis: 50%;
    img {
      width: 100%;
    }
  }

  .right {
    flex-basis: 25%;
    flex-grow: 1;
    padding: 0.25rem;
  }
`;

const TechIcons = styled.ul`
  list-style-type: none;
  display: flex;
  padding-left: 0;
  align-items: center;
  justify-content: space-around;
`;

const WorkCard = props => {
  const { category, description, image, tech, title } = props.data;

  console.log(props.data);

  return (
    <WorkCardContainer>
      <WorkCardWrapper>
        <h4>{title[0].text}</h4>
        <div className="left">
          <img src={image.url} alt={image.alt} />
        </div>
        <div className="right">
          <p>{description[0].text}</p>
          <TechIcons>
            {tech.map(t => {
              const { name, icon } = t;
              return (
                <li>
                  <img src={icon.url} alt={name[0].text} />
                  <span>{name[0].text}</span>
                </li>
              );
            })}
          </TechIcons>
        </div>
      </WorkCardWrapper>
    </WorkCardContainer>
  );
};

export default WorkCard;
