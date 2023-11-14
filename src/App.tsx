import { Header } from "components/Header";
import { Hero } from "components/Hero";
import { Content } from "components/Content";
import { Exhibitors } from "components/Exhibitors";
import { Contact } from "components/Contact";

function App() {

	return (
		<div>
			<Header/>
			<Hero/>
			<Content>
				<Exhibitors/>
				<Contact/>
			</Content>
		</div>
	);
}

export default App;