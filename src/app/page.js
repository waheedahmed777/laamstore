import Header from './Components/Header';
import Product from './products/page';
import Slider from './logoslide/page';
import './page.module.css';
import './globals.css';
export default function Home() {
  return (
    <>
      <div className='hero'>
        <h1>
          Shop With LAAN Shoping Store <br />
          With 10% Disscount
        </h1>
        <p>
          Lets Get Started Buy With Laan Shoping Store Get All Items With Discountable <br />
          Pice And Just now Click on Show Now And Get The Enjoy Moments From
          <br /> All Over Shoping Stores{' '}
        </p>

        <button> Shop Now</button>
      </div>
      <h1 style={{ textAlign: 'center' }} className='compny'>
        {' '}
        Our Related Company
      </h1>
      <Slider />

      {/* </> */}

      <h1 className='product'>Our Products</h1>
      <Product />
    </>
  );
}
