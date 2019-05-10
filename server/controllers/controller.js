let id = 0;

let concerts = [
	{
		id: id++,
		name: 'Santana',
		place: 'USANA Amphitheatre, West Valley City, Utah',
		when: 'Tuesday 2 July 2019 7:00pm',
	},

	{
		id: id++,
		name: 'Norah Jones',
		place: 'Sandy City Amphitheater, Sandy City, Utah',
		when: 'Friday 19 July 2019 8:00pm',
	},

	{
		id: id++,
		name: 'Blink-182',
		place: 'USANA Amphitheatre, West Valley City, Utah',
		when: 'Monday 2 September 2019 TBA',
	},
];

module.exports = {
	create: (req, res) => {
		const { name, place, when } = req.body;

		let concert = {
			id: id++,
			name,
			place,
			when,
		};

		concerts.push(concert);
		res.send(concerts);
	},

	read: (req, res) => {
		res.status(200).send(concerts);
	},

	update: (req, res) => {
		const { name, place, when } = req.body;

		let updatedConcert = {
			id: +req.params.id,
			name,
			place,
			when,
		};

		let i = concerts.findIndex(concert => concert.id === req.params.id);

		concerts.splice(i, 1, updatedConcert);
		res.send(concerts);
	},

	delete: (req, res) => {
		const { id } = req.params;

		let i = concerts.findIndex(concert => concert.id === +id);

		concerts.splice(i, 1);
		res.send(concerts);
	},
};
