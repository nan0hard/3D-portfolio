import FeatureCards from "./sections/FeatureCards";
import Navbar from "./components/Navbar";
import Hero from "./sections/Hero";
import Showcase from "./sections/Showcase";
import Experience from "./sections/Experience";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<Showcase />
			<FeatureCards />
			<Experience />
		</div>
	);
};

export default App;
