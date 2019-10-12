import React from 'react';
import styled from 'styled-components';

import imgPlaceholder from '../../Images/website_preview_placeholder_tall.png';

const WorkCardContainer = styled.div`
  /* padding: 0.5rem; */
  /* border-radius: 5px; */
  /* background-color: #fafafa; */

  background-color: ${({ category }) =>
    category === 'Game' ? 'rgba(250, 250, 250, 0.97)' : '#fafafa'};

  /* background-color: #f1fffe; */
  margin: 1rem;
  /* min-width: 34rem; */
  flex: 1 0 45%;
  overflow: hidden;

  /* box-shadow: 0 8px 16px -8px rgba(0, 0, 0, 0.4); */
  box-shadow: 0px 14px 80px rgba(34, 35, 58, 0.2);
  padding: 25px;
  border-radius: 25px;

  &:hover .img-container {
    transform: scale(1.1);
  }
`;

const WorkCardWrapper = styled.div`
  display: flex;
  /* flex-wrap: wrap; */
  flex-direction: column;
  height: 100%;
`;

const Top = styled.div`
  display: flex;

  /* fixes weird overlap for mobile */
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    margin-bottom: 3rem;
  }

  .img-container {
    box-shadow: 4px 13px 30px 1px rgba(56, 56, 56, 0.2);
    border-radius: 25px;
    overflow: hidden;
    flex-basis: 30%;
    transition: transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    font-size: 0; /* weird spacing under image fix */
    height: auto; /* same but for game (rect) images lol */
    /* transform: translate(-30%, -30%); */
    align-self: flex-start;
    flex-shrink: 0;

    img {
      width: 100%;
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

        @media (max-width: ${props =>
            props.theme.breakpoints.preMobile}) {
          margin-right: 1rem;
        }

        @media (max-width: ${props =>
            props.theme.breakpoints.mobile}) {
          justify-content: flex-start;
        }

        img {
          width: 1.4rem;
        }

        span {
          font-family: 'Varela Round';
          font-weight: 500;
          font-size: 0.9rem;
          margin-top: 4px;

          @media (max-width: ${props =>
              props.theme.breakpoints.preMobile}) {
            font-size: 0.7rem;
          }
          @media (max-width: ${props =>
              props.theme.breakpoints.mobile}) {
            display: none;
          }
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
  const {
    category,
    description,
    image,
    tech,
    title,
    site_link,
    github_link
  } = props.data;

  console.log(props.data);

  return (
    <WorkCardContainer category={category}>
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
            <a href={site_link.url}>
              {category === 'Site' ? 'Visit Site' : 'Play In Browser'}
            </a>
            {github_link.url ? (
              <a href={github_link.url}>View on GitHub</a>
            ) : null}
          </div>
        </Bottom>
      </WorkCardWrapper>
    </WorkCardContainer>
  );
};

export default WorkCard;
