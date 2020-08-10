import React, {Component} from 'react';
import './seconddisplay.css';

class Seconddisplay extends Component {
	render() {
		return (
		<section className="second-hightlight-wrapper">
			<div className="container"> 
				<div className="row h-100 align-items-center justify-content-center text-center">
					<div className="col-12">
						<div className="title-wraper">
							iPhone 11 Pro 
						</div> 

						<div className="description-wrapper">
							Pro cameras. Pro display. Pro performance.
						</div>

						<div className="price-wrapper">
							From $24.95/mo. or $599 with trade‑in.
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
export default Seconddisplay;