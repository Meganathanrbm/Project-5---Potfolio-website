import React from 'react';
import './Footer.scss';
import {BsInstagram , BsLinkedin, BsTwitter} from 'react-icons/bs';
import {FaFacebookF } from 'react-icons/fa';


function Footer() {
  return (
    <footer class="App__Footer">
				<div class="App__Footer-container">
							<div class="App__Footer-container-row">
									<div class="row-column">
												<h2>Company</h2>
												<ul>
													<li><a href="#">About_us</a></li>
											  	<li><a href="#">Our_services</a></li>
													<li><a href="#">Privacy_policy</a></li>
													<li><a href="#">Affiliate_program</a></li>
												</ul>
									</div>
									<div class="row-column">
												<h2>Get_help</h2>
												<ul>
													<li><a href="#">FAQ</a></li>
													<li><a href="#">Our_projects</a></li>
													<li><a href="#">Best_products</a></li>
													<li><a href="#">Any_questions</a></li>
													<li><a href="#">Profile</a></li>
												</ul>
									</div>
                  <div class="row-column">
											<h2>Our_Projects</h2>
											<ul>
                        <li><a href="#">Github</a></li>
                        <li><a href="#">Linkedin</a></li>	
                        <li><a href="#">Codechief</a></li>	
                        <li><a href="#">Problems</a></li>												
											</ul>
									</div>
                  <div class="row-column">
										<h2>Follow_us</h2>
										<div class="fmedia">
											<a href="#"><FaFacebookF/></a>
											<a href="#"> <BsInstagram/></a>
											<a href="#">  <BsTwitter/></a>
											<a href="#"> <BsLinkedin/></a>
									  </div>																				
								  </div>																												
						</div>
						<p>Copy right &copy; 2022 | EMYGA | By Meganathan.</p>			
				</div>
		</footer>
  )
}

export default Footer