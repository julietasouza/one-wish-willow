import React from 'react'
import { ContainerStory } from './styles'
import Header from '../../assets/components/Header'
import pack from "../../assets/img/package.png"

const Story = () => {
  return (
    <ContainerStory>
        <Header/>
        <div className='card-border'>
          <div className='card'>
            <p>top secret 1954</p>
          </div>
        </div>

        <div className='titulos'>
          <h1>the willow & co. legacy</h1>
          <h5>"Amaze Your Friends! Secure Your Future! All it takes is a Crack and a Wish."</h5>
        </div>

         <section className='special'>
            <aside className='text-aside'>
              <h1>The Mystical Harvest</h1>
         
              <p className='first-paragraph'>It began in the forgotten groves of the Upper Willow Valley, where the trees do not<br/>
              grow by water, but by the echoes of forgotten promises. Our founder, Arthur B.<br/>
              Willow, discovered the first 'Whispering Branch' in the autumn of 1948.</p>

              <p className='second-paragraph'>Unlike ordinary wood, theses branches possessed a peculiar resonance - a snap that<br/>
              didn't just break the air, but seemed to mend the fabric of reality itself. Willow &<br/>
              Co. Novelties was founded with one singular mission: to bring this portable magic<br/>
              to the common household.</p>
         
              <div className='message'>
                <p>"We don't sell sticks. We sell the possibility that tomorrow might be better than<br/>
                today. Just hold it tight, feel the spark, and speak clearly."</p>
                <h3>- Arthur B. Willow</h3>
              </div>
            </aside>

            <aside>
              <img src={pack} alt="" />
              <p className='description'>plate 01: original 1954 counter display</p>
            </aside>
            </section>
    </ContainerStory>
  )
}

export default Story