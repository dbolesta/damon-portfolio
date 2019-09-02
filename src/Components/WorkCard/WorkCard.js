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

  -webkit-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  -moz-box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
  box-shadow: rgba(0, 0, 0, 0.3) 0 1px 3px;
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
  return (
    <WorkCardContainer>
      <WorkCardWrapper>
        <h4>Title Number {props.title}</h4>
        <div className="left">
          <img src={imgPlaceholder} alt="Placeholder imgs :)" />
        </div>
        <div className="right">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Minima, non. Voluptatibus sunt ad nisi necessitatibus
            dolorum veniam, quam minima nam?
          </p>
          <TechIcons>
            <li>
              <span role="img" aria-label="test emoji 1">
                🤣
              </span>
            </li>
            <li>
              <span role="img" aria-label="test emoji 2">
                😜
              </span>
            </li>
            <li>
              <span role="img" aria-label="test emoji 3">
                🤡
              </span>
            </li>
            <li>
              <span role="img" aria-label="test emoji 4">
                🧐
              </span>
            </li>
          </TechIcons>
        </div>
      </WorkCardWrapper>
    </WorkCardContainer>
  );
};

export default WorkCard;
