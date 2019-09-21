import React from 'react';
import styled from 'styled-components';

import imgPlaceholder from '../../Images/website_preview_placeholder_tall.png';

const WorkCardContainer = styled.div`
  /* padding: 0.5rem; */
  /* border-radius: 5px; */
  background-color: #fafafa;
  /* background-color: #f1fffe; */
  margin: 1rem;
  /* min-width: 34rem; */
  flex: 0 0 45%;
  overflow: hidden;
  opacity: 0; /* just for testing */

  /* box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4); */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;
`;

const WorkCardWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  height: 100%;
`;

const Top = styled.div`
  display: flex;

  .img-container {
    box-shadow: 4px 13px 30px 1px rgba(56, 56, 56, 0.2);
    border-radius: 25px;
    overflow: hidden;
    flex-basis: 30%;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 0; /* weird spacing under image fix */
    height: 100%; /* same but for game (rect) images lol */
    /* transform: translate(-30%, -30%); */

    img {
      width: 100%;
    }

    &:hover {
      transform: scale(1.1);
    }
  }

  .title-tech {
    flex-grow: 1;
    padding-left: 2rem;

    h4 {
      padding: 0;
      text-align: left;
      margin: 0;
      margin-bottom: 1rem;
      font-family: 'Montserrat';
      font-size: 1.5rem;
    }

    ul {
      list-style-type: none;
      display: flex;
      padding-left: 0;
      align-items: center;
      /* justify-content: space-around; */
      width: 100%;
      margin: 0;

      li {
        display: flex;
        flex-direction: column;
        justify-content: initial;
        align-items: center;
        margin-right: 2rem;

        img {
          width: 1.4rem;
        }

        span {
          font-family: 'Varela Round';
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: 4px;
        }
      } /* end li */
    } /* end ul */
  } /* end title-tech */
`;

const Bottom = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: space-between;

  .description-container {
    p {
    }
  }

  .links-container {
    display: flex;
    align-items: center;
    justify-content: space-around;

    a {
      text-decoration: none;
      font-family: 'Varela Round';
      color: #f6dd3b;
      background-color: #94c4ea;
    }
  }
`;

const WorkCard = props => {
  const { category, description, image, tech, title } = props.data;

  console.log(props.data);

  return (
    <WorkCardContainer>
      <WorkCardWrapper>
        <Top>
          <div className="img-container">
            <img src={image.url} alt={image.alt} />
          </div>

          <div className="title-tech">
            <h4>{title[0].text}</h4>
            <ul>
              {tech.map(t => {
                const { name, icon } = t;
                return (
                  <li>
                    <img src={icon.url} alt={name[0].text} />
                    <span>{name[0].text}</span>
                  </li>
                );
              })}
            </ul>
          </div>
        </Top>
        <Bottom>
          <div className="description-container">
            <p>{description[0].text}</p>
          </div>
          <div className="links-container">
            <a href="">Visit Site</a>
            <a href="">View on GitHub</a>
          </div>
        </Bottom>
      </WorkCardWrapper>
    </WorkCardContainer>
  );
};

export default WorkCard;
