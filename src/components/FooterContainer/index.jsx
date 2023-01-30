import React from 'react'
import './style.css'

const FooterContainer = () => {
return (
    <>
    <hr className='footerContainer' />
    <footer>
        <div class="footerContainer">
            
            <footer>
                <div class="footer_info">
                    <p>FreshNFT Copyright</p>
                    <p>Entr</p>
                </div>
                <div class="metodos_pagos">
                    <img height="26rem" src="assets/img/visa.png" alt="pagos" />
                    <img height="26rem" src="assets/img/mastercard@2x.png" alt="pagos" />
                    <img height="26rem" src="assets/img/mercadopago@2x.png" alt="pagos" />
                    <img height="26rem" src="assets/img/cabal@2x.png" alt="pagos" />
                    <img height="26rem" src="assets/img/tarjeta-naranja@2x.png" alt="pagos" />
                </div>
                <div class="redes_pie">
                    <a href="https://www.instagram.com/dante.moss/">
                        <img src="assets/img/instagram.png" alt="redes" />
                    </a>
                    <a href="https://www.instagram.com/dante.moss/">
                        <img src="assets/img/facebook.png" alt="redes" />
                    </a>
                </div>
                <div class="info_footer">
                    <p>-Copyright 2022</p>
                    <p>Powered by Dante Moss-</p>
                </div>
            </footer>
        </div>   
    </footer>
    </>

)
}

export default FooterContainer