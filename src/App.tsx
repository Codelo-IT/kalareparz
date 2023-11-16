import { Header } from "components/Header/Header";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { AboutUs } from "components/AboutUs";
import { GoodQuality } from "components/GoodQuality";
import { NewHero } from "components/NewHero";
import { WhyUs } from "components/WhyUs/WhyUs";

function App() {
	return (
		<>
			<Header/>
			<NewHero/>
			<AboutUs/>
			<Exhibitors/>
			<GoodQuality/>
			<WhyUs/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;