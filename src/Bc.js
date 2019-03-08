import React, { Component } from 'react';
import "tabler-react/dist/Tabler.css";  
import { Card, Button,StatsCard  } from "tabler-react";

// fetch("https://blockchain.info/fr/ticker").then( function (response){
//       return response.json();
//     }).then(res => {
//       console.log(JSON.parse(JSON.stringify(res.EUR)))
//     })
var data ;

class Bc extends Component {
  
  callback(){

    fetch("https://blockchain.info/fr/ticker").then( function (response){
      return response.json();
    }).then(res => {
      data = res.EUR
      console.log(document.getElementsByClassName('h3 mt-0 mb-4 mb-1')[0].textContent= data.last)
      document.getElementsByClassName('h3 mt-0 mb-4 mb-1')[0].textContent= data.last
    })
  }

  

  render() {

   
    return (


      <div className="Bc">
  <Card>
        <Card.Header>
          <Card.Title>Card Title</Card.Title>
        </Card.Header>
        <Card.Body>
        <StatsCard layout={2} movement={5} id="i" total={0} label="Users online" />
        </Card.Body>
      </Card>
      <Button onClick={this.callback} > Refresh </Button>
      </div>
    );
  
  }
}

export default Bc;
