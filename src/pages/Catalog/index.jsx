import { ContainerCatalog } from './styles'
import Header from '../../assets/components/Header'
import pack from '../../assets/img/package.png'
import eye from "../../assets/img/eye.png"

const Catalog = () => {
  return (
    <ContainerCatalog>
        <Header/>

        <div className='curious-div'>
            <h1>curious novelties</h1>
            <h3>for the bold & daring</h3>
            <h4>────────</h4>
            <p>Presenting our exquisite 1954 collection of mystical apparatus, occult diversions, and<br/>
            peculiar artifacts guaranteed to astound and mystify.</p>
        </div>

        <section className='special'>
          <aside>
            <img src={pack} alt="" />
          </aside>
        
          <aside className='text-aside'>
            <h4>flagship curio</h4>
            <h1>one wish willow</h1>
        
            <p>Crack the wood. State your desire. A modern miracle of<br/>
            metaphysical engineering. Accept no substitutes.</p>
      
            <p className='prices'><span>$19.54</span> + Postage</p>
        
            <button className='buy-thing'>add to parcel</button>
          </aside>
        </section>

        <p className='star-divisor'>⛧⛧⛧ ⛧⛧⛧ ⛧⛧⛧</p>

        <section className='occult'>
          <h1>more occult curiosities</h1>

          <div className='card'>
            <div className='card-01'>
              <img src={eye} alt="" />
              <h1></h1>
              <p></p>
              <h4>-----------</h4>
              <p><span>$4.99</span> add</p>
            </div>

            <div className='card-02'>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
              <h4>-----------</h4>
              <p><span>$4.99</span> add</p>
            </div>

            <div className='card-03'>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
              <h4>-----------</h4>
              <p><span>$4.99</span> add</p>
            </div>

            <div className='card-04'>
              <img src="" alt="" />
              <h1></h1>
              <p></p>
              <h4>-----------</h4>
              <p><span>$4.99</span> add</p>
            </div>
          </div>
        </section>
    </ContainerCatalog>
  )
}

export default Catalog