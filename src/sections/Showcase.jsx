import gsap from "gsap";
import React, { useRef } from "react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const Showcase = () => {
	const sectionRef = useRef(null);
	const project1Ref = useRef(null);
	const project2Ref = useRef(null);
	const project3Ref = useRef(null);

	useGSAP(() => {
		const projects = [
			project1Ref.current,
			project2Ref.current,
			project3Ref.current,
		];

		projects.forEach((project, index) => {
			gsap.fromTo(
				project,
				{ y: 50, opacity: 0 },
				{
					y: 0,
					opacity: 1,
					duration: 1,
					delay: 0.3 * (index + 1),
					scrollTrigger: {
						trigger: project,
						start: "top bottom -= 100",
					},
				}
			);
		});

		gsap.fromTo(
			sectionRef.current,
			{ opacity: 0 },
			{ opacity: 1, duration: 1.5 }
		);
	}, []);

	return (
		<section id="work" className="app-showcase" ref={sectionRef}>
			<div className="w-full">
				<div className="showcaselayout">
					<div className="first-project-wrapper" ref={project1Ref}>
						<div className="image-wrapper">
							<img src="/images/project1.png" alt="Ecommerce Application" />
						</div>
						<div className="text-content">
							<h2>
								Full-Stack eCommerce Application with end-to-end implementation
								from UI to payment processing using RazorPay.
							</h2>
							<p className="text-white-50 md:text-xl">
								A Web App built with MERN stack along with RazorPay integration
							</p>
						</div>
					</div>

					<div className="project-list-wrapper overflow-hidden">
						<div className="project" ref={project2Ref}>
							<div className="image-wrapper bg-[#FFEFDB]">
								<img src="/images/laptop.png" alt="Dhaaga" />
							</div>
							<h2>Dhaaga</h2>
						</div>

						<div className="project" ref={project3Ref}>
							<div className="image-wrapper bg-[#FFE7EB]">
								<img src="/images/project3.png" alt="YC Directory" />
							</div>
							<h2>YC Directory</h2>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Showcase;
