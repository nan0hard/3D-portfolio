import { useEffect, useState } from "react";
import { navLinks } from "../constants";

const Navbar = () => {
	const [scrolled, setScrolled] = useState(false);

	useEffect(() => {
		const handleScroll = () => {
			const isScrolled = window.scrollY > 10;
			if (isScrolled) {
				setScrolled(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	return (
		<header className={`navbar ${scrolled ? "scrolled" : "not-scrolled"}`}>
			<div className="inner">
				<a href="#hero" className="logo">
					Nitish Singh
				</a>

				<nav className="desktop">
					<ul>
						{navLinks.map(({ link, name }) => (
							<li className="group" key={name}>
								<a href={link}>
									<span>{name}</span>
									<span className="underline" />
								</a>
							</li>
						))}
					</ul>
				</nav>

				<a href="#contact" className="contact-btn group">
					<div className="inner">
						<span>Get in Touch</span>
					</div>
				</a>
			</div>
		</header>
	);
};

export default Navbar;
