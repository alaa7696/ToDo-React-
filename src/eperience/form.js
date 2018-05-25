console.log("running");
const title='To do app';

const app={
	title: 'To do App',
	subtitle: 'let the computer organize your life',
	options: []
};   
const onFormSubmit=(e)=>{
	e.preventDefault();
	const option=e.target.elements.option.value;
	if(option){
		app.options.push(option);
		e.target.elements.option.value='';
		render();
	}
	
};
const removeAll=()=>{
	console.log('fff');
	app.options=[];
	render();
};

const onMakeDecision=()=>{
	const size=app.options.length;
	let random=Math.floor(Math.random()*size);
	const option=app.options[random];
	alert(option);
};
const appRoot=document.getElementById('app');

   
const render=()=>{
	const template=(
	<div>
		<h1>{app.title}</h1>
		{app.subtitle && <p>{app.subtitle}</p>}
		<button disabled={app.options.length === 0} onClick={onMakeDecision}>What should i do?</button>
		<button onClick={removeAll}>Remove all</button>
		{
			app.options.map((option)=>{
				return <p>{option}</p>
			})
		}

		<form onSubmit={onFormSubmit}>
			<input type="text" name="option"/>
			<button>Add option</button>
		</form>                  

	</div>
	);
ReactDOM.render(template,appRoot);
}
render();