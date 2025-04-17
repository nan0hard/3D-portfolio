import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Experience from "./sections/Experience";
import TechStack from "./sections/TechStack";
import Contact from "./sections/Contact";
import Footer from "./sections/Footer";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Showcase />
			<FeatureCards />
			<Experience />
			<TechStack />
			<Contact />
			<Footer />
		</div>
	);
};

export default App;
