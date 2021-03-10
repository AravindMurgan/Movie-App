import React from 'react';
import Facebook from '../../images/facebook.png';
import Instagram from '../../images/instagram.png';
import Apple from '../../images/store/app-store.svg';
import Android from '../../images/store/play-store.svg';
import Microsoft from '../../images/store/windows-store.svg';
import Twitter from '../../images/twitter.png';
const Footer = () => {
	return (
		<div className='navbar-2'>
			
				<ul className='social'>
					<li>
						<a href='https://www.facebook.com/'>
							<img src={Facebook} alt='facebook' />
						</a>
					</li>
					<li>
						<a href='https://www.twitter.com/'>
							<img src={Twitter} alt='twitter' />
						</a>
					</li>
					<li>
						<a href='https://www.instagram.com/'>
							<img src={Instagram} alt='instagram' />
						</a>
					</li>
				</ul>
				
				<ul className='stores'>
					<li>
						<a href='https://www.apple.com/in/shop'>
							<img src={Apple} alt='apple' />
						</a>
					</li>
					<li>
						<a href='https://play.google.com/store'>
							<img src={Android} alt='android' />
						</a>
					</li>
					<li>
						<a href='https://www.microsoft.com/en-in/store/apps/windows'>
							<img src={Microsoft} alt='microsoft' />
						</a>
					</li>
				</ul>
			
		</div>
	);
};

export default Footer;
