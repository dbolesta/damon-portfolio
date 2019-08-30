import React from 'react';
import styled from 'styled-components';

const WorkStripeContainer = styled.div`
  background-color: white;
  text-align: left;
  padding: 2rem;
  /* box-shadow: var(--work-stripe-box-shadow); */
  /* good new green */
  /* background-color: #3db958; */
  /* background-color: hsl(130, 70%, 75%); */
  /* background-color: ${props =>
    props.green ? 'hsl(130, 70%, 75%)' : 'hsl(8, 70%, 75%)'}; */


background-color: ${props => props.bgColor || 'white'};
  /* background: rgb(61, 185, 88); */
  /* background: linear-gradient(
    0deg,
    rgba(61, 185, 88, 1) 35%,
    rgba(71, 228, 105, 1) 100%
  ); */

  h3 {
    background-color: maroon;
    display: inline-block;
    margin: 0;
    text-align: left;
  }
`;

const WorkStripe = props => {
  return (
    <WorkStripeContainer
      className="rotate-theme"
      bgColor={props.bgColor}
    >
      <h3>Name Of Category, from props</h3>
      <div>
        <div style={{ border: '1px solid black' }}>test content</div>
      </div>
    </WorkStripeContainer>
  );
};

export default WorkStripe;
