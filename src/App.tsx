import { Header } from "components/Header/Header";
import { Exhibitors } from "components/Exhibitors/Exhibitors";
import { Contact } from "components/Contact/Contact";
import { Footer } from "components/Footer/Footer";
import { GoodQuality } from "components/GoodQuality/GoodQuality";
import { NewHero } from "components/Hero/NewHero";
import { WhyUs } from "components/WhyUs/WhyUs";

function App() {
	return (
		<>
			<Header/>
			<NewHero/>
			<Exhibitors/>
			<GoodQuality/>
			<WhyUs/>
			<Contact/>
			<Footer/>
		</>
	);
}

export default App;