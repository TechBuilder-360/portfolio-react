import React from 'react';
import { Accordion, Card } from 'react-bootstrap';
import Layout from '../../container/Layout/Layout';
import { useAccordionToggle } from 'react-bootstrap/AccordionToggle';

function CustomToggle({ children, eventKey }) {
    const decoratedOnClick = useAccordionToggle(eventKey, () =>
      console.log('totally custom!'),
    );
  
    return (
      <button
        type="button"
        style={{ backgroundColor: 'pink' }}
        onClick={decoratedOnClick}
      >
        {children}
      </button>
    );
  }
    
const FAQs = () => {
    return (
        <Layout>
            <Accordion>
                <Card>
                    <Card.Header>
                    <CustomToggle eventKey="0">Click me!</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="0">
                    <Card.Body>Hello! I'm the body</Card.Body>
                    </Accordion.Collapse>
                </Card>
                <Card>
                    <Card.Header>
                    <CustomToggle eventKey="1">Click me!</CustomToggle>
                    </Card.Header>
                    <Accordion.Collapse eventKey="1">
                    <Card.Body>Hello! I'm another body</Card.Body>
                    </Accordion.Collapse>
                </Card>
            </Accordion>
        </Layout>
    );
};

export default FAQs;