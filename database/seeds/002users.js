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
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjAyODYzNTEsImV4cCI6MTU5MTgyMjM1MSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.sWUXuxOljtg4OhPnw0DvymAnpPVx162__AqWL3NSoAY'
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
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjAyODYzOTcsImV4cCI6MTU5MTgyMjM5NywiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.u0S-2oiYQWnbMeAvgMz2f4r7VR90GE6DUqep-OvRbfQ'
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
				token:
					'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJPbmxpbmUgSldUIEJ1aWxkZXIiLCJpYXQiOjE1NjAyODY0MTUsImV4cCI6MTU5MTgyMjQxNSwiYXVkIjoid3d3LmV4YW1wbGUuY29tIiwic3ViIjoianJvY2tldEBleGFtcGxlLmNvbSIsIkdpdmVuTmFtZSI6IkpvaG5ueSIsIlN1cm5hbWUiOiJSb2NrZXQiLCJFbWFpbCI6Impyb2NrZXRAZXhhbXBsZS5jb20iLCJSb2xlIjpbIk1hbmFnZXIiLCJQcm9qZWN0IEFkbWluaXN0cmF0b3IiXX0.ywE_JuZFA8iqpEluMa3y7O2pwnGqiJ_VbXH7CmiEOMw'
			}
		]);
	});
};
