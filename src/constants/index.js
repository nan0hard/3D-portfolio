const navLinks = [
	{
		name: "Work",
		link: "#work",
	},
	{
		name: "Experience",
		link: "#experience",
	},
	{
		name: "Skills",
		link: "#skills",
	},
	{
		name: "Contact",
		link: "#contact",
	},
];

const words = [
	{ text: "Ideas", imgPath: "/images/ideas.svg" },
	{ text: "Concepts", imgPath: "/images/concepts.svg" },
	{ text: "Designs", imgPath: "/images/designs.svg" },
	{ text: "Code", imgPath: "/images/code.svg" },
];

const counterItems = [
	{
		value: 3,
		suffix: "+",
		label: "Years of Experience in Frontend Development",
	},
	{
		value: 2,
		suffix: "+",
		label: "Years of Experience in Backend Development",
	},
	{ value: 10, suffix: "+", label: "Delivered Projects" },
];

const abilities = [
	{
		imgPath: "/images/seo.png",
		title: "Quality Focus",
		desc: "Delivering high-quality results while maintaining attention to every detail.",
	},
	{
		imgPath: "/images/chat.png",
		title: "Collaboration & Communication",
		desc: "Skilled communicator with a proven ability to keep both technical and non-technical stakeholders informed and engaged",
	},
	{
		imgPath: "/images/time.png",
		title: "On-Time Delivery",
		desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
	},
];

const techStackImgs = [
	{
		name: "React Developer",
		imgPath: "/images/logos/react.png",
	},
	{
		name: "Python Developer",
		imgPath: "/images/logos/python.svg",
	},
	{
		name: "Backend Developer",
		imgPath: "/images/logos/node.png",
	},
	{
		name: "Interactive Developer",
		imgPath: "/images/logos/three.png",
	},
	{
		name: "Project Manager",
		imgPath: "/images/logos/git.svg",
	},
];

const techStackIcons = [
	{
		name: "React Developer",
		modelPath: "/models/react_logo-transformed.glb",
		scale: 1,
		rotation: [0, 0, 0],
	},
	{
		name: "Python Developer",
		modelPath: "/models/python-transformed.glb",
		scale: 0.8,
		rotation: [0, 0, 0],
	},
	{
		name: "Backend Developer",
		modelPath: "/models/node-transformed.glb",
		scale: 5,
		rotation: [0, -Math.PI / 2, 0],
	},
	{
		name: "Interactive Developer",
		modelPath: "/models/three.js-transformed.glb",
		scale: 0.05,
		rotation: [0, 0, 0],
	},
	{
		name: "Project Manager",
		modelPath: "/models/git-svg-transformed.glb",
		scale: 0.05,
		rotation: [0, -Math.PI / 4, 0],
	},
];

const expCards = [
	{
		review:
			"Nitish brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
		imgPath: "/images/exp1.svg",
		logoPath: "/images/logo1.png",
		title: "Full-Stack Developer",
		date: "January 2022 - Present",
		role: "Work",
		responsibilities: [
			"Developed and maintained user-facing features for the Accenture clients.",
			`Spearheaded the development and integration of the Policy Encoding use case into the ATLAS platform, leveraging React.js, Redux, and Jest for robust testing, achieving a 30% reduction in policy processing time and a 25% increase in data accuracy.`,
			`Architected a scalable, React.js-powered microfrontend framework with ATLAS as the central entry point, enhancing the user experience across 10+ key use cases and boosting development efficiency by 40%.`,
		],
	},
	{
		review: "",
		imgPath: "",
		logoPath: "/images/iitp.png",
		title: "M.Tech in Computer Science Engineering",
		date: "Indian Institute of Technology Patna (Jan 2024 - December 2025(Expected))",
		role: "Education",
		responsibilities: [
			"Led the development of Docker's web applications, focusing on scalability.",
			"Worked with backend engineers to integrate APIs seamlessly with the frontend.",
			"Contributed to open-source projects that were used with the Docker ecosystem.",
		],
	},
	// {
	// 	review:
	// 		"Nitish’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
	// 	imgPath: "/images/exp3.png",
	// 	logoPath: "/images/logo3.png",
	// 	title: "React Native Developer",
	// 	date: "March 2019 - May 2020",
	// 	responsibilities: [
	// 		"Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
	// 		"Improved app performance and user experience through code optimization and testing.",
	// 		"Coordinated with the product team to implement features based on feedback.",
	// 	],
	// },
];

const socialImgs = [
	{
		name: "GitHub",
		imgPath: "/images/github.png",
		url: "https://github.com/nan0hard",
	},
	{
		name: "linkedin",
		imgPath: "/images/linkedin.png",
		url: "https://linkedin.com/in/nanohard",
	},
	{
		name: "x",
		imgPath: "/images/x.png",
		url: "https://x.com/nan0hard",
	},
];

export {
	words,
	abilities,
	counterItems,
	expCards,
	socialImgs,
	techStackIcons,
	techStackImgs,
	navLinks,
};
