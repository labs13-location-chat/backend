exports.seed = function(knex, Promise) {
	// Deletes ALL existing entries
	return knex('users').del().then(function() {
		// Inserts seed entries
		return knex('users').insert([
			{
				email: 'tenzing@google.com',
				password: 'password',
				first_name: 'Tenzing',
				last_name: 'Yeshi',
				user_type: 'user',
				anonymous: true,
				phone_num: 4748933217,
				facebook_id: '',
				google_id: '',
				token: '123'
			},
			{
				email: 'darrena@google.com',
				password: 'password',
				first_name: 'Darrena',
				last_name: 'Gray',
				user_type: 'user',
				anonymous: true,
				phone_num: 4745642672,
				facebook_id: '',
				google_id: '',
				token: '124'
			},
			{
				email: 'dayton@gmail.com',
				password: 'password',
				first_name: 'Dayton',
				last_name: 'Steinmeyer',
				user_type: 'user',
				anonymous: true,
				phone_num: 4748532431,
				facebook_id: '',
				google_id: '',
				token: '125'
			}
		]);
	});
};
