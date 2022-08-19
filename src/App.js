import React from "react";
import { DisplayLanguage } from "./DisplayLanguage";
import { languageContext } from "./LanguageContext";

class App extends React.Component {
  state = {
		language: "en",
	};

	handleLenguageChange = (event) => {
		this.setState({
			language: event.target.value,
		});
		console.log(this.state);
	};

	onLogin = (state) => console.log(state);

	render() {
		return (
			<>
				<languageContext.Provider value={this.state.language}>
					<DisplayLanguage onChange={this.handleLenguageChange}/>
				</languageContext.Provider>
			</>
		);
	}
}


export default App;
