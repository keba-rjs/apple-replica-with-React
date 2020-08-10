import React from 'react';
import $ from'jquery';
import './toggle.js';
import six from '../../images/icons/16.png';


class Footer extends React .Component{
 componentDidMount(){
    if ($(window).width() <= 768){	
		$('.footer-links-wrapper').addClass("someClass");
	}else{
		$('.footer-links-wrapper').removeClass("someClass");
	}
	$(window).on('resize', function(event){
		if ($(window).width() <= 768){	
			$('.footer-links-wrapper').addClass("someClass");
		}else{
			$('.footer-links-wrapper').removeClass("someClass");
			$('.footer-links-wrapper ul').show();
		}	
	});
	// Footer collapse functionality 
	$(document).on("click", ".someClass h3", function(){
		$(this).next('ul').slideToggle();
		$(this).toggleClass("expanded");
	});
	// Search bar 
	$('.search-link').click(function(event){
		event.preventDefault();
		$(".navbar-collapse.collapse").removeClass("show");
		$(".searchbox").slideToggle();
	});

   }
  render (){
    return (
<footer className="footer-wrapper">
		<div className="container"> 
			<div className="row">
				<div className="upper-text-container">
					1. Trade In: Trade‑in values vary. iPhone 11 and iPhone 11 Pro promotional pricing is after trade‑in of iPhone 8 Plus and iPhone X in good condition. Additional trade‑in values require purchase of a new iPhone, subject to availability and limits. Must be at least 18. Apple or its trade-in partners reserve the right to refuse or limit any Trade In transaction for any reason. In‑store trade‑in requires presentation of a valid, government-issued photo ID (local law may require saving this information). Sales tax may be assessed on full value of new iPhone. Additional terms from Apple or Apple’s trade-in partners may apply. Monthly pricing: Available to qualified customers and requires 0% APR, 24‑month installment loan with Citizens One, and iPhone activation with AT&T, Sprint, T‑Mobile, or Verizon. <a href="#"> Full terms apply</a>.
				</div>			
			</div>

	    <div className="row footer-links-wrapper">
	    	<div className=" col-sm-12 col-md">
					<h3>Shop and Learn</h3>
					<ul>
						<li><a href="#">Mac</a></li>
						<li><a href="#">iPad</a></li>
						<li><a href="#">iPhone</a></li>
						<li><a href="#">Watch</a></li>
						<li><a href="#">TV</a></li>
						<li><a href="#">Music</a></li>
						<li><a href="#">AirPods</a></li>
						<li><a href="#">HomePod</a></li>
						<li><a href="#">iPod touch</a></li>
						<li><a href="#">Accessories</a></li>
						<li><a href="#">Gift Cards</a></li>
					</ul>    		
	    	</div>

	    	<div className="col-sm-12 col-md">
					<h3>Services</h3>
					<ul>
						<li><a href="#">Apple Music</a></li>
						<li><a href="#">Apple News+</a></li>
						<li><a href="#">Apple TV+</a></li>
						<li><a href="#">Apple Arcade</a></li>
						<li><a href="#">Apple Card</a></li>
						<li><a href="#">iCloud</a></li>
					</ul>
					<h3>Account</h3>
					<ul>
						<li><a href="#">Manage Your Apple ID</a></li>
						<li><a href="#">Apple Store Account</a></li>
						<li><a href="#">iCloud.com</a></li>
					</ul>	    		
	    	</div>
	    	<div className="col-sm-12 col-md">
					<h3>Apple Store</h3>
					<ul>
						<li><a href="#">Find a Store</a></li>
						<li><a href="#">Genius Bar</a></li>
						<li><a href="#">Today at Apple</a></li>
						<li><a href="#">Apple Camp</a></li>
						<li><a href="#">Field Trip</a></li>
						<li><a href="#">Apple Store App</a></li>
						<li><a href="#">Refurbished and Clearance</a></li>
						<li><a href="#">Financing</a></li>
						<li><a href="#">Apple Trade In</a></li>
						<li><a href="#">Order Status</a></li>
						<li><a href="#">Shopping Help</a></li>
					</ul>    		
	    	</div>
	    	<div className="col-sm-12 col-md">
					<h3>For Business</h3>
					<ul>
						<li><a href="#">Apple and Business</a></li>
						<li><a href="#">Shop for Business</a></li>
					</ul>		
					<h3>For Education</h3>
					<ul>
						<li><a href="#">Apple and Education</a></li>
						<li><a href="#">Shop for College</a></li>
					</ul>
					<h3>For Healthcare</h3>
					<ul>
						<li><a href="#">Manage Your Apple ID</a></li>
						<li><a href="#">Apple Store Account</a></li>
						<li><a href="#">iCloud.com</a></li>
					</ul>	    		
	    	</div>

	    	<div className="col-sm-12 col-md">
					<h3>Apple Values</h3>
					<ul>
						<li><a href="#">Find a Store</a></li>
						<li><a href="#">Genius Bar</a></li>
						<li><a href="#">Today at Apple</a></li>
						<li><a href="#">Apple Camp</a></li>
						<li><a href="#">Field Trip</a></li>
						<li><a href="#">Apple Store App</a></li>
					</ul>
					<h3>About Apple</h3>
					<ul>
						<li><a href="#">Find a Store</a></li>
						<li><a href="#">Genius Bar</a></li>
						<li><a href="#">Today at Apple</a></li>
						<li><a href="#">Apple Camp</a></li>
						<li><a href="#">Field Trip</a></li>
						<li><a href="#">Apple Store App</a></li>
					</ul>	    		
	    	</div>
	    </div>
 
	  </div> 
	    <div className="copyright-wrapper row">
				<div className="copyright col-sm-12 order-2 col-md-8 order-md-1 col-lg-4 order-lg-1">
					Copyright &copy; 2020 Apple Inc. All rights reserved.
				</div>
				<div class="footer-links-terms  col-sm-12 order-3 col-lg-6 order-lg-2">
					<ul>
						<li><a href="#">Privacy Policy</a></li>
						<li><a href="#">Terms of Use</a></li>
						<li><a href="#">Sales and Refunds</a></li>
						<li><a href="#">Legal</a></li>
						<li><a href="#">Site Map</a></li>
					</ul>
				</div>
				<div className="footer-country  col-sm-12 order-1 col-md-4 order-md-2 text-md-right col-lg-2 order-lg-3">
                                 
					<div class="flag-wrapper"><img src={six}/></div> <div class="footer-country-name">United States</div> 
				</div>
			</div>
	</footer> 
	);
}
}

export default Footer;

