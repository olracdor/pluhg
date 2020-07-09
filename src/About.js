import React from 'react';
import './Contents.css';
import { Accordion } from 'react-bootstrap';
import { Card } from 'react-bootstrap';
import { Button } from 'react-bootstrap';

export default class Contents extends React.Component {
  render(){
    return(
      <div>
      <div class="controls text-center">
    <div class="container">
      <h1 class="default-color display-4">Pluhg</h1>
      <p class="lead">Something short and leading about the collection below—its contents, the creator, etc. Make it short and sweet, but not too short so folks don’t simply skip over it entirely.</p>
    
    </div>
  </div>
  
  <main  role="main" class="container"> 
        <Accordion defaultActiveKey="0">
          <Card>
            <Card.Header>
            <h1 class="default-color display-10">JS</h1>
              <Accordion.Toggle as={Button} variant="link" eventKey="0">
              <div class="media">
      
    
      <p class="lead">/v1/test</p>
    
    </div>
              </Accordion.Toggle>
            </Card.Header>
            <Accordion.Collapse eventKey="0">
              <Card.Body>Hello! I'm the body</Card.Body>
            </Accordion.Collapse>
          </Card>
          
        </Accordion>
       
      </main>
      </div>
    );
  }
}
