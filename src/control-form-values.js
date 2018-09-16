import React from 'react';

export default class MyFancyForm extends React.Component {

	state = {
		commaSeparated: '',
		multiline: '',
		options: []
	}

	handleCommaSeparatedChange = (e) => {
		const { value } = e.target;
		this.setState({
			commaSeparated: value,
			multiline: value.split(',').join('\n'),
			options: value.split(',')
		});
	}

	handleMultilineChange = (e) => {
		const { value } = e.target;
		this.setState({
			multiline: value,
			commaSeparated: value.split('\n').join(','),
			options: value.split('\n')
		});
	}

	handleMultiSelectChange = (e) => {

	}

	render() {

		const { commaSeparated, multiline, options } = this.state;

		return (
			<form>
				<div>
					<label>
						comma separated values:
							<br />
						<input
							type='text'
							value={commaSeparated}
							onChange={this.handleCommaSeparatedChange}
						/>
					</label>
				</div>
				<div>
					<label>
						multiline values:
						<br />
						<textarea
							rows={commaSeparated.split(',').length}
							value={multiline}
							onChange={this.handleMultilineChange}
						/>
					</label>
				</div>
				<div>
					<label>
						multiSelect values
						<br />
						<select onChange={this.handleMultiSelectChange}>
							{
								options.map(o => (
									<option key={o} value={o}>{o}</option>
								))
							}
						</select>
					</label>
				</div>
			</form>
		)
	}
}