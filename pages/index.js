import Head from 'next/head'
import styles from '../styles/Home.module.css'

import products from '../products.json';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Senpai Áruháza</title>
        <link rel="icon" href="/favicon.ico" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://app.snipcart.com" />
        <link rel="preconnect" href="https://cdn.snipcart.com" />
        <link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.0.21/default/snipcart.css" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Senpai Áruháza
        </h1>

        <p className={styles.description}>
          <a className="snipcart-checkout snipcart-summary" href="#" style={{textDecoration: "none"}}>
            <strong>Kosár:</strong> <span className="snipcart-total-price">  $0.00</span>
          </a>
        </p>

        <div className={styles.grid}>
          {products.map(product => {
            return (
              <div key={product.id} className={styles.card}>
                <img src={product.image} alt={`Preview of ${product.title}`} />
                <h3>{ product.title }</h3>
                <p className={styles.cardDescription}>{ product.description }</p>
                <p>{ product.price } $</p>
                <p>
                  <button className="snipcart-add-item"
                    data-item-id={product.id}
                    data-item-image={product.image}
                    data-item-name={product.title}
                    data-item-url="/"
                    data-item-price={product.price}
                  >
                    Kosárba vele!
                  </button>
                </p>
              </div>
            );
          })}
        </div>
      </main>

      <footer className={styles.footer}>
      &copy; Az oldal Senpai által van fenntartva.
      </footer>


<link rel="stylesheet" href="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.css" />
<script async src="https://cdn.snipcart.com/themes/v3.2.0/default/snipcart.js"></script>
<div id="snipcart" data-config-modal-style="side" data-api-key="ZmQ5MDBhYzktYTU5Ny00ZWIyLTk1ZTItYTJkZWYzYWVmOWM0NjM3NTgwNTI1ODc5MzY2MDkw" hidden></div>
    </div>
  )
}