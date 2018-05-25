class TaskApp extends React.Component{
	render(){
		const title="To Do App";
		const subtitle="Let the computer handle your taks"; 
		const options=['one','two','four'];
		return (
			<div>
				<Header title={title} subtitle={subtitle}/>
				<Action />
				<Options options={options}/>
				<AddOption />
			</div>
		);
	}
}


class Header extends React.Component {
	render(){
		return (
			<div>
				<h1>{this.props.title}</h1>
				<h2>{this.props.subtitle}</h2>
			</div>
		);
	}
}
class Action extends React.Component {
	render(){
		return (<button>What should i do?</button>); 
	}
}
class Options extends React.Component {
	render(){
		return (
			<div>
				<p>Options</p>
				<p>{this.props.options.length}</p>
				{
					this.props.options.map((option)=><Option key={option} optionText={option} />

				)
				}
			</div>
		);
	}
}
class AddOption extends React.Component {
	render() {
		return (
			<div>
				<form>
					<input type="text" name="option"/>
					<button>Add option</button>
				</form>
			</div>
		);
	}
}
class Option extends React.Component {
	render(){
		return (
			<p>{this.props.optionText}</p>
		);
	}
}
const jsx = (
	<div>
		<h1>Title</h1>
	</div>
)
ReactDOM.render(<TaskApp />,document.getElementById('app'));