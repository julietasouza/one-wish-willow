import React from 'react'
import { ContainerHome } from './styles'
import Header from '../../assets/components/Header'
import bannerPhoto from "../../assets/img/banner-photo.png"
import { Link } from 'react-router-dom'
import willow from "../../assets/img/willow.PNG"
import wish from "../../assets/img/wish.PNG"
import crack from "../../assets/img/crack.PNG"
import danger from "../../assets/img/danger.PNG"
import pack from "../../assets/img/package.png"
import { FaCheckCircle } from "react-icons/fa"    
import Footer from '../../assets/components/Footer'

const Home = () => {
  return (
    <ContainerHome>
        <Header/>
        <section className='banner'>
          <img src={bannerPhoto} alt="" />

          <div className='content'>
            <h4>Amaze your friends!</h4>
            <h1>One Wish Is All You Get</h1>
            <p>The Original Willow Wand. For those who dare to dream. Meticulously aged since 1954 for maximum potency.</p>

          <div className='botoes'>
            <Link><button className='order'>Order Your Wish</button></Link>
            <Link><button className='history'>The secret history</button></Link>
          </div>
          </div>
        </section>

        <section className='ritual'>
          <div className='headline'>
          <div className='titulo'>
            <h3>★ ★ ★ ★ ★ ★</h3>
            <h1>The Sacred Ritual</h1>
            <p>Follow these instructions with utmost precision.</p>
          </div>

          </div>

          <div className='cards'>
            <div className='card-border'>
              <div className='card'>
                <div className='card-img'>
              <img src={willow} alt="" />
            </div>

            <div className='card-content'>
              <h1>1. Choose Your Willow</h1>
              <p>Select a wand that resonates with your innermost frequency.<br/>
              No two branches are alike in spirit.</p>
              <h4>est. 1954 ● genuine article</h4>
            </div>
              </div>
            </div>

            <div className='card-border'>
              <div className='card'>
                <div className='card-img'>
              <img src={wish} alt="" />
            </div>

            <div className='card-content'>
              <h1>2. Make Your Wish</h1>
              <p>Close your eyes. Hold the willow firmly at both ends.<br/>
              Visualize your desire until it feels solid in your palms.</p>
              <h4>concentrate ● do not blink</h4>
            </div>
              </div>
            </div>

            <div className='card-border'>
              <div className='card'>
                <div className='card-img'>
              <img src={crack} alt="" />
            </div>

            <div className='card-content'>
              <h1>3. Crack the Center</h1>
              <p>Apply pressure until the wood snaps cleanly. The release of<br/>
              energy is instantaneous. Your wish is now in motion.</p>
              <h4>caution: magic is volatile</h4>
            </div>
              </div>
            </div>
          </div>

          <div className='warning-card'>
            <img src={danger} alt="" />

            <p><span>Warning:</span> One Wish Willow is a one-time use novelty. Multiple attempts to wish upon a single broken<br/>
            branch will result in unpredictable chronological shifts. Willow & Co. is not responsible for lost<br/>
            decades or sudden appearances of spectral entities.</p>
          </div>
        </section>

        <section className='special'>
          <aside>
              <img src={pack} alt="" />
          </aside>

          <aside className='text-aside'>
            <h4>special edition</h4>
            <h1>hand-crafted from<br/>
            weeping willow</h1>

            <p>Each wand is harvested during the autumnal equinox<br/>
            and cured in a dark room for three years. Guaranteed<br/>
            magic since 1954, or your memories back.</p>

              <h5 className='list'><FaCheckCircle className='symbol' /> Ethically harvested from silent groves</h5>
              <h5 className='list'><FaCheckCircle className='symbol' /> Instructions printed in invisible-ish ink</h5>
              <h5 className='list'><FaCheckCircle className='symbol' /> Standard shipping to any reality</h5>

              <button className='wand-price'>claim your wand - $19.54</button>
          </aside>
        </section>

        <section className='secret-society'>
          <h1>join the secret society</h1>
          <p className='detalhe'>Receive clandestine updates, vintage curiosities, and early access to our seasonal willow harvests.</p>
          <div className='container-mail'>
            <input type="email" placeholder='YOUR EMAIL ADDRESS' />
            <button>SIGN IN INK</button>
          </div>
          <h5>by signing, you agree to the mystical non-disclosure agreement.</h5>
        </section>
        <Footer/>
    </ContainerHome>
  )
}

export default Home