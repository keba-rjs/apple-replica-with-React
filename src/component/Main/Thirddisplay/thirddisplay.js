import React, {Component} from 'react';
import './thirddisplay.css';

class Thirddisplay extends Component {
	render() {
		return (
			<section className="third-highlight-wrapper">
		<div className="container"> 
			<div className="row h-100 align-items-center justify-content-center text-center">
				<div className="col-12">
					<div className="title-wraper">
						iPhone 11 
					</div> 
					<div className="description-wrapper">
						Just the right amount of everything.
					</div>
					<div className="price-wrapper">
						From $16.62/mo. or $399 with trade‑in.
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
export default Thirddisplay;