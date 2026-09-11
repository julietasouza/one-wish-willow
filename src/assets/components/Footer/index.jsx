import React from 'react'
import { ContainerFooter } from './styles'
import share from "../../img/share.png"
import mail from "../../img/mail.png"
import pin from "../../img/pin.png"
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <ContainerFooter>
        <section className='info'>
        <aside className='social'>
            <h1>one wish willow</h1>
            <h3>"The Original Vintage Toy Company."</h3>
            <div className='icons'>
                <img src={share} alt="" />
                <img src={mail} alt="" />
                <img src={pin} alt="" />
            </div>
        </aside>

        <div className='navi-inqui-container'>
            <div className='navigation'>
            <h3>Navigation</h3>
            <Link to='/Story'><p>our story</p></Link>
            <p>catalog</p>
            <p>the ritual</p>
            <p>journal</p>
        </div>

        <div className='inquires'>
            <h3>inquires</h3>
            <p>wholesale</p>
            <p>shipping</p>
            <p>returns</p>
            <p>privacy</p>
        </div>
        </div>

        <aside className='the-cards'>
            <div className='the-card'>
                <h1>legal disclaimer</h1>
                <p>&copy; 1954 willow & co. novelties. amaze your<br/>
                friends! safety guaranteed (mostly). one<br/>
                wish willow™ is not a toy, weapon, or medical<br/>
                device. any use of wands near open portals,<br/>
                magnetic poles, or unresolved traumas is<br/>
                strictly at the operator's risk. wishes are<br/>
                non-refundable and may manifest in<br/>
                symbolic or ironic forms.</p>
            </div>
        </aside>
        </section>

        <section className='end-text'>
            <h4>★ ★ ★ ★ ★ ★</h4>
            <p>printed on recycled parchment in the shadow realm</p>
        </section>
    </ContainerFooter>
  )
}

export default Footer