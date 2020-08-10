import React, {Component} from 'react';
import './fifthdisplay.css';

import tv from '../../../images/icons/apple-tv-logo.png';
import servant from '../../../images/icons/servant-logo.png';



class Fifthdisplay extends Component {
	render() {
		return (
			<section className="fifth-heghlight-wrapper">
		<div className="row">
			<div className="col-sm-12 col-m-6 col-lg-6 left-side-wrapper">
				<div className="left-side-inner-wrapper">
					<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							<img src={tv}/>
						</div>
					</div>

					<div className="tvshow-logo-wraper">
						<img src={servant}/>
					</div>

					<div className="watch-more-wrapper">
						<a href="#">Watch the trailer</a>
					</div>				
				</div>				
			</div>

			<div className="col-sm-12 col-m-6 col-lg-6 right-side-wrapper">
				<div className="right-side-inner-wrapper">
					<div className="top-logo-wrapper">
						<div className="logo-wrapper">
							AirPods Pro
						</div>
					</div>

					<div className="description-wraper">
						Magic like you’ve never heard.
					</div>

					<div className="links-wrapper">
						<ul>
							<li><a href="">Learn more</a></li>
							<li><a href="">Buy</a></li>
						</ul> 
					</div>	
				</div>			
			</div>

		</div>
	</section> 

		);		
	}

}
export default Fifthdisplay;