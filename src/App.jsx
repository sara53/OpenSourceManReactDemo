
import MyNav from "./components/MyNav";
import { Slider } from "./components/Slider";
import { About } from "./components/about";
import Products from "./components/products/Products";


export function App() {
	let aboutData = {
		title: 'about us',
		desc: "Welcome From ITI",
		bgColor: 'bgDark'
	}
	return (
		<>


			<MyNav />
			<Slider />
			<Products />
			<About aboutData={aboutData} />
			{/* <About title="Features" desc="Open Source Track" />
			<About /> */}


		</>
	);
}



