const user={
	name: 'alaa',
	cities: ['sale','rabat','kenitra'],
	describe (){
		 this.cities.map(citie => {
			citie+'vv';
		});
		console.log(this.  cities);
	}
};
user.describe();