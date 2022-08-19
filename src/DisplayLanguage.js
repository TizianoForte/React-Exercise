import React from "react";
import { languageContext } from "./LanguageContext";

const string = {
	en: {
		STRING_TO_DISPLAY: "il linguaggio scelto è inglese",
	},

	it: {
		STRING_TO_DISPLAY: "il linguaggio scelto è italiano",
	},
};

export class DisplayLanguage extends React.Component {
	render() {
		return (
			<languageContext.Consumer>
				{(language) => {
					return (
						<div>

							<select onChange={this.props.onChange}>
								<option value="en">ENGLISH</option>
								<option value="it">ITALIANO</option>
							</select>
							<h1>{string[language].STRING_TO_DISPLAY}</h1>
						</div>
					);
				}}
			</languageContext.Consumer>
		);
	}
}