import React from 'react'
import {FiFacebook} from 'react-icons/fi';
import {IoLogoTwitter} from 'react-icons/io';
import {AiOutlineInstagram} from 'react-icons/ai';
import { Input,Stack } from '@chakra-ui/react'
import './footercss.css'
import { Link } from 'react-router-dom';
const Footer = () => {
    return (
        <div className="footerCmp">
            <footer>
                <div className="footerCategorie">
                    <h1>Categories</h1>
                    <ul>
                        <li><Link to = '/shop/?cg=Women'>Women</Link></li>
                        <li><Link to = '/shop/?cg=Men'>Men</Link></li>
                        <li><Link to = '/shop/?cg=Shoes'>Shoes</Link></li>
                        <li><Link to = '/shop/?cg=Watches'>Watches</Link></li>
                    </ul>
                </div>

                <div className="fooHelp">
                    <h1>Help</h1>
                    <ul>
                        <li>Tracke Order</li>
                        <li>Returns</li>
                        <li>Shipping</li>
                        <li>FAQs</li>
                    </ul>
                </div>

                <div className="footerGetInTouch">
                    <h1>Get in touch</h1>
                    <ul>
                        <p>Any questions? Let us know in store at Borda, Bhilwara , Rajasthan or call us on (+91) 8529674695</p>
                        <li className="footerIcons">
                        <a href="https://www.facebook.com/mukesh.mukeshprajapat.1848"><FiFacebook size="25" /></a>
                        </li>
                        <li className="footerIcons">  
                        <a href="https://www.instagram.com/mukeshprajapat09/"><AiOutlineInstagram size="25" /></a>
                        </li>
                        <li className="footerIcons">
                            <a href="https://twitter.com/mukeshp30954015"><IoLogoTwitter size="25"/></a>
                        </li>
                    </ul>
                </div>

                <div className="footerNews">
                    <h1>Newsletter</h1>
                    <ul>
                        <li>
                            <Stack spacing={3}>
                            <Input variant="flushed" placeholder="email@example.com" size="10" width="200px"/>
                            </Stack>
                        </li>
                        <li>
                            <button className="footerBtn">Subscribe</button>
                        </li>
                    </ul>
                </div>

                <div className="creditsIcons">
                    <ul>
                        <li><img src="https://i.imgur.com/AHCoUZO.png" className="img1" alt="not found" /></li>
                        <li><img src="https://i.imgur.com/JZRipBg.png" className="img2" alt="not found"/></li>
                        <li><img src="https://i.imgur.com/l8OAGyo.png" className="img3" alt="not found"/></li>
                        <li><img src="https://i.imgur.com/IDHC2iv.png" className="img4" alt="not found"/></li>
                    </ul>
                    
                </div>
                
                <div className="paragraphFooter"><p>Copyright ©2022 All rights reserved &copy; MukeshPrajapat</p>
                <Link to = '' >Mukesh Prajapat</Link>
                <Link to = ''  >Mahaveer Prajapat</Link>
                <Link to = ''  >Dinesh Prajapat</Link>
                </div>



            </footer>

        </div>
    )
}

export default Footer;
