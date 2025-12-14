import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 40px 20px;
  font-family: sans-serif;
  line-height: 1.6;
  color: #333;
`;

const Title = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 20px;
  color: #222;
`;

const Section = styled.section`
  margin-bottom: 30px;
`;

const Heading = styled.h2`
  font-size: 1.5rem;
  margin-bottom: 15px;
  color: #444;
`;

const Paragraph = styled.p`
  margin-bottom: 15px;
`;

const PrivacyPolicy = () => {
  return (
    <Container>
      <Title>Shop Roulette Privacy Policy</Title>
      <Paragraph>Last updated: 12/14/2025</Paragraph>

      <Section>
        <Heading>Introduction</Heading>
        <Paragraph>
          This Privacy Policy describes how Shop Roulette (the “App”) handles information
          when installed and used on a Shopify store.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Information the App Does Not Collect</Heading>
        <Paragraph>
          Shop Roulette does not collect, store, process, or transmit any personal data,
          merchant data, or customer data.
        </Paragraph>
        <Paragraph>
          Specifically:
        </Paragraph>
        <Paragraph>
          • No customer information is collected<br />
          • No merchant information is collected<br />
          • No analytics, tracking, or cookies are used<br />
          • No data is sent to external servers
        </Paragraph>
      </Section>

      <Section>
        <Heading>How the App Works</Heading>
        <Paragraph>
          The App functions entirely within the Shopify theme as a Theme App Extension.
          It displays a random product from a merchant-selected collection using Shopify’s
          native Liquid objects and client-side JavaScript.
        </Paragraph>
        <Paragraph>
          All product data used by the App is already publicly available on the storefront
          and is processed locally in the browser.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Third Parties</Heading>
        <Paragraph>
          The App does not integrate with third-party services, analytics tools,
          or advertising networks.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Data Storage</Heading>
        <Paragraph>
          The App does not store any data on external servers or databases.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Changes to This Policy</Heading>
        <Paragraph>
          If the App’s functionality changes in a way that affects data handling,
          this privacy policy will be updated accordingly.
        </Paragraph>
      </Section>

      <Section>
        <Heading>Contact</Heading>
        <Paragraph>
          If you have any questions about this Privacy Policy, please contact:
          <br />
          <strong>dbolesta@gmail.com</strong>
        </Paragraph>
      </Section>
    </Container>

  );
};

export default PrivacyPolicy;
