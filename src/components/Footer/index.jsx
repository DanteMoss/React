import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

const FooterContainer = () => {
    return (
        <>
            <hr className='border-width' />
            <footer class="bg-gray-600 text-black py-5">
                <div class="container">
                    <div class="d-flex align-items-center">
                        <a href="/" class="text-black font-weight-bold text-lg font-size">FreshNFT</a>
                        <p class="ml-auto">All rights reserved © 2018 - 2023 Dante Moss, Inc</p>
                    </div>
                    <div class="row mt-5">
                        <div class="col-md-3">
                            <h5 class="font-weight-bold text-uppercase mb-3">Collections</h5>
                            <ul class="list-unstyled">
                                <li><Link to={'/category/Kanpai Pandas'} class="text-black">Kanpai Pandas Collection</Link></li>
                                <li><Link to={'/category/CryptoPunk'} class="text-black">CryptoPunk Collection</Link></li>
                                <li><Link to={'/category/Lil Pudgy'} class="text-black">Lil Pudgy Collection</Link></li>
                                <li><Link to={'/category/3Landers'} class="text-black">3Landers Collection</Link></li>
                                <div className='redes'>
                                    <a href="https://discord.com/invite/opensea">
                                        <img src="../../assets/discord.png" width={'50rem'} alt="redes" />
                                    </a>
                                    <a href="https://www.facebook.com/profile.php?id=100076647174032">
                                        <img src="../../assets/facebook.png" width={'50rem'} alt="redes" />
                                    </a>
                                    <a href="https://twitter.com/tomatitos02">
                                        <img src="../../assets/gorjeo.png" width={'50rem'} alt="redes" />
                                    </a>
                                </div>
                            </ul>
                        </div>
                    </div>
                </div>
            </footer>
        </>

    )
}

export default FooterContainer