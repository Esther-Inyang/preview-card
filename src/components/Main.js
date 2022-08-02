import React from 'react'
import { AiOutlineShoppingCart } from 'react-icons/ai'

function Main() {
  const cartMsg = () =>{
    alert ('Sorry! No action here yet.')
  }
  return (
    <main>
        <div className='section-center'> 
            <div className='preview-card'>
                <section className='hero'>
                    {/* hero image here  */}
                </section>
                <section className='card-content'>
                    <h3>perfume</h3>
                    <h1>Gabrielle Essence Eau De Parfum</h1>
                    <article>A floral, solar and voluptuous interpretation composed by Olivier Polge, Perumer-Creator for the House of CHANEL.</article>
                    <p className='price'>
                        <span className='new-price'>$149.99</span>
                        <span className='previous-price'>$169.99</span>
                    </p>
                    <button className='cart-btn'>
                        <span className='cart-icon'><AiOutlineShoppingCart color='white' font-size='1.2rem'/></span>
                        <span className='cart-btn-text' onClick={cartMsg}>Add to Cart</span>
                    </button>
                </section>
            </div>
        </div>
    </main>
  )
}

export default Main