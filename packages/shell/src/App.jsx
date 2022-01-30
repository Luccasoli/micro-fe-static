/* eslint-disable global-require */
import { Helmet } from 'react-helmet-async';
import './page.css';
// eslint-disable-next-line import/no-unresolved
import { RelatedProducts } from 'inspire/RelatedProducts';

export function App() {
  return (
    <>
      <Helmet>
        <title>
          0 Product Page - Plain JavaScript, One Team, Client Render
        </title>
      </Helmet>
      <main id="app">
        <h1 id="store">The Model Store</h1>
        <div id="basket" className="empty">
          basket: 0 item(s)
        </div>
        <div id="image">
          <div>
            <img
              src={require('./images/tractor-red.jpg')}
              alt="Porsche-Diesel Master 419"
            />
          </div>
        </div>
        <h2 id="name">
          Tractor <small>Porsche-Diesel Master 419</small>
        </h2>
        <div id="options">
          <button className="active" type="button" data-sku="t_porsche">
            <img
              src={require('./images/tractor-red-thumb.jpg')}
              alt="Porsche-Diesel Master 419"
            />
          </button>

          <button className="" type="button" data-sku="t_fendt">
            <img
              src={require('./images/tractor-green-thumb.jpg')}
              alt="Fendt F20 Dieselroß"
            />
          </button>

          <button className="" type="button" data-sku="t_eicher">
            <img
              src={require('./images/tractor-blue-thumb.jpg')}
              alt="Eicher Diesel 215/16"
            />
          </button>
        </div>
        <button id="buy" type="button">
          buy for 66,00 €
        </button>
        <RelatedProducts />
      </main>
    </>
  );
}

export default App;