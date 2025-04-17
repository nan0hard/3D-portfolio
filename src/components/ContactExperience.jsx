import { Canvas } from "@react-three/fiber";
import { Computer } from "./Models/Computer-optimized";
import { OrbitControls } from "@react-three/drei";

const ContactExperience = () => {
	return (
		<Canvas camera={{ position: [0, 3, 7], fov: 45 }} shadows>
			<ambientLight intensity={0.5} color="#FFF4E6" />
			<directionalLight position={[5, 5, 3]} intensity={2.5} color="#FFD9B3" />
			<directionalLight
				position={[5, 9, 1]}
				castShadow
				intensity={2.5}
				color="#FFD93"
			/>

			<OrbitControls
				enableZoom={false}
				minPolarAngle={Math.PI / 4}
				maxPolarAngle={Math.PI / 2}
			/>

			<group scale={0.03} position={[0, -1.5, -2]} castShadow>
				<Computer />
			</group>

			<group scale={[1, 1, 1]}>
				<mesh
					receiveShadow
					position={[0, -1.5, 0]}
					rotation={[-Math.PI / 2, 0, 0]}
				>
					<planeGeometry args={[30, 30]} />
					<meshStandardMaterial color="#A46B2D" />
				</mesh>
			</group>
		</Canvas>
	);
};

export default ContactExperience;
