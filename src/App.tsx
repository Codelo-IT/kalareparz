import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Content } from "components/Content";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";

function App() {

	return (
		<div>
			<Header/>
			<Hero/>
			<Content>
				<Exhibitors/>
				<Contact/>
			</Content>
			<Footer/>
		</div>
	);
}

export default App;