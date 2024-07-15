import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { FaLeaf } from "react-icons/fa";
import { GiPlantSeed } from "react-icons/gi";
import { IoAccessibilityOutline } from "react-icons/io5";
import '../App.css'

function Banner() {
  return (
    <div>
      <div>
      <h1 className='text-white' style={{textAlign:"center"}}>EXPRESS LOVE FOR YOUR <br/>PLANTS IN A UNIQUE WAY</h1>
      <br/>
      <div  className='d-flex text-center justify-content-center ' style={{ marginRight: '20px',padding:"20px"}}>
      <Card style={{ width: '15rem', height:'8rem',backgroundColor: '#4CE111' }}>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Seeds</Card.Title>
        <FaLeaf  style={{width:'3rem',height:'3rem',color:'white'}}/>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', height:'8rem',backgroundColor:'#D47C01'  }}>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Planters</Card.Title>
        <GiPlantSeed style={{width:'3rem',height:'3rem',color:'white'}}/>
      </Card.Body>
    </Card>
    <Card style={{ width: '15rem', height:'8rem',backgroundColor:'#AC1F20'  }}>
      <Card.Body>
        <Card.Title style={{color:'white'}}>Accessories</Card.Title>
        <IoAccessibilityOutline style={{width:'3rem',height:'3rem',color:'white'}}/>
      </Card.Body>
    </Card>
      </div>
      
      </div>
      <br/>
      <div>
      <Button style={{alignItems:'center'}}>Explore Now</Button>
      </div>
    </div>
  )
}

export default Banner
