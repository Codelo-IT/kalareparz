import { Header } from "components/Header";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";
import { AboutUs } from "components/AboutUs";
import { GoodQuality } from "components/GoodQuality";
import { NewHero } from "components/NewHero";

function App() {

	return (
		<div>
			<Header/>
			<NewHero/>
			<AboutUs/>
			<Exhibitors/>
			<GoodQuality/>
			<Contact/>
			<Footer/>
		</div>
	);
}

export default App;