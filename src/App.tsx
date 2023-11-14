import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { ContentWrapper } from "components/ContentWrapper";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";
import { Footer } from "components/Footer";

function App() {

	return (
		<div>
			<Header/>
			<Hero/>
			<ContentWrapper>
				<Exhibitors/>
				<Contact/>
			</ContentWrapper>
			<Footer/>
		</div>
	);
}

export default App;