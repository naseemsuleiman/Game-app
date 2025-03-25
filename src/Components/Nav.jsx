import React from 'react'
import { Link } from 'react-router-dom'

function Nav() {
  return (
    <div> 
    <nav style={{ 
      background: '#003366', 
      color: '#fff', 
      padding: '10px 20px', 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center', 
      flexWrap: 'wrap' 
    }}> 
      <h1 style={{ margin: 5, fontSize:'1.5rem'}}>Play Pulse</h1> 
      <ul style={{ listStyle: 'none', display: 'flex', gap: '50%', margin: 0, padding: 0,marginRight:'50%', fontWeight:'10%' }}> 
        <li><Link to="/" style={{ color: 'white', textDecoration: 'none' 
}}>Home</Link></li> 
        <li><Link to="/explore" style={{ color: 'white', textDecoration: 'none' 
}}>Explore</Link></li> 
        
      </ul> 
    </nav> 
  </div>
  )
}

export default Nav