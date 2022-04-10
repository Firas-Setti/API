import React from 'react'
import {  Card } from 'react-bootstrap'

function UserCard({user}) {
    return <div className="user-card" >   
  <Card style={{ width: '18rem' }}>
    <Card.Img   variant="top" src="https://i.pinimg.com/736x/13/0f/96/130f9601ce0b948996e13bc2b1d88a66.jpg" />
    <Card.Body>
      <Card.Title>{user.name}</Card.Title>
      <Card.Text>
       {user.email}
      
      </Card.Text>
    </Card.Body>
  </Card>
    </div>;
  }
  
  export default UserCard;
  