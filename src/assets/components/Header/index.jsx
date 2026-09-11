import React from 'react'
import { ContainerHeader } from './styles'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <ContainerHeader>
        <Link to='/' className='logo'>One Wish Willow</Link>

        <Link to='/Story'>Our Story</Link>
        <Link to='/Ritual'>The Ritual</Link>
        <Link to='/Catalog'>Catalog</Link>
        <Link>Journal</Link>
        <Link><button>Order Now</button></Link>
    </ContainerHeader>
  )
}

export default Header