import React from "react";
import { socialImgs } from "../constants";

const Footer = () => {
	return (
		<footer className="footer">
			<div className="footer-container">
				<div className="flex flex-col justify-center">
					<a href="/">Nitish Singh</a>
				</div>
				<div className="socials">
					{socialImgs.map((social) => (
						<a
							className="icon"
							target="_blank"
							href={social.url}
							key={social.url}
						>
							<img src={social.imgPath} />
						</a>
					))}
				</div>

				<div className="flex flex-col justify-center">
					<p className="text-center md:text-end">
						© {new Date().getFullYear()} - All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
