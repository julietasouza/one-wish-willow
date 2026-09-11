import React from 'react'
import { ContainerRitual } from './styles'
import Header from '../../assets/components/Header'
import ritualogo from "../../assets/img/ritualogo.png"
import grip from "../../assets/img/grip.png"
import snap from "../../assets/img/snap.png"
import flask from "../../assets/img/flask.png"
import water from "../../assets/img/water.png"
import ear from "../../assets/img/ear.png"
import warning from "../../assets/img/warning.png"
import { Link } from 'react-router-dom'
import Footer from "../../assets/components/Footer"

const Ritual = () => {
  return (
    <ContainerRitual>
        <Header/>
        <div className='title-text'>
            <p className='star'>⍟ <span>⍟</span> ⍟</p>
            <h1>the sacred ritual</h1>
            <h3>"Instructions for the Worthy"</h3>
            <p>Proper execution is paramount. A wish spoken in haste is a wish wasted to the ether. Follow<br/>
            these meticulously recorded steps to ensure your heart's desire is received by the ancient woods.</p>
        </div>

        <div className='card-container'>
          <div className='card-01'>
            <aside>
              <h5>Phase 01</h5>
              <h2>Preparation</h2>
              <p>Cleanse the mind. The ambient noise of the modern era muddles the signal. Retreat to a quiet space, preferably<br/>
              illuminated by natural or candlelight. Focus entirely on the deepest desire. The One Wish Willow responds not to<br/>
              whim, but to profound, singular intent.</p>
            </aside>

            <aside className='img-rotations'>
              <img src={ritualogo} alt="" />
            </aside>
          </div>
        </div>

        <div className='card-container-02'>
          <div className='card-02'>
            <h2>phase 02 / the grip</h2>
            <img src={grip} alt="" />
            <h5>Fig. 1 - The Arcane Hold</h5>
            <p>Hold the willow branch at both ends, avoiding the<br/>
            central node. Your thumbs should apply gentle pressure<br/>
            precisely 1.5 inches from the center line. (Reference vintage<br/>
            packaging plate 03)</p>
          </div>

          <div className='card-03'>
            <h2>phase 03 / the snap</h2>
            <img src={snap} alt="" />
            <h5>Fig. 2 - The Catalyst</h5>
            <p>State your wish clearly. In one swift, deliberate motion, bend<br/>
            the ends downward. The moment of release-the auditory<br/>
            'crack'-is where the magic is transmitted from the physical to<br/>
            the etheral plane.</p>
          </div>
        </div>

        <p className='div-parts'>✮✮✮✮✮✮✮✮✮</p>

        <div className='tech'>
          <aside>
            <h1>technical specifications</h1>
            <div className='wish-div'>
              <img src={flask} alt="" />
              <p><span>Wish-Potency Index:</span> Rated for Class-A desires. Not suitable for trivialities or mundane requests.</p>
            </div>

            <div className='atmospheric-div'>
              <img src={water} alt="" />
              <p><span>Atmospheric Resonance:</span> Optimal performance achieved during twilight hours (6:00 PM - 8:00 PM) or during significant lunar phases.</p>
            </div>

            <div className='auditory-div'>
              <img src={ear} alt="" />
              <p><span>The Audible Proof of Magic:</span> A crisp, resonant 'snap' indicates successful structural failure and wish transmission<br/>
              A dull breaks signifies improper grip or lack of intent.</p>
            </div>
          </aside>

          <aside className='right-side'>
            <h1>Caution</h1>
            <img src={warning} alt="" />
            <h2>one-time use only</h2>
            <p>Attempting to repair or re-snap a spent willow branch may result in unpredictable chronological shifts, misplaced items,<br/>
            or mild existencial dread. The Original Vinatge Toy Company is not liable for unintended consequences of poorly articulated wishes.</p>
          </aside>
        </div>

        <p className='div-part'>✮✮✮✮✮✮✮✮✮</p>

        <div className='shop-future'>
          <h1>Are you ready to attempt the ritual?</h1>
          <Link><button>SECURE YOUR FUTURE<br/>
          <span>shop the collection</span></button></Link>
        </div>

        <Footer/>
    </ContainerRitual>
  )
}

export default Ritual