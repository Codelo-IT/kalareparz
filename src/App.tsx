import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { AboutUs } from "components/AboutUs";
import { GoodQuality } from "components/GoodQuality";

function App() {
	return (
		<>
			<Header/>
			<Hero/>
			<AboutUs/>
			<Exhibitors/>
			<GoodQuality/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;