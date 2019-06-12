const express = require('express');
const db = require('./userHelper');
const restricted = require('../../auth/restrictedMiddleware');

const router = express();

router.get('/', restricted, (req, res) => {
	db
		.find()
		.then(users => {
			res.status(200).json(users);
		})
		.catch(err => {
			res.status(500).json(err);
		});
});

router.get('/:id', async (req, res) => {
	try {
		const user = await db.findById(req.params.id);
		res.status(200).json(user);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete('/:id', (req, res) => {
	const id = req.params.id;
	db
		.remove(id)
		.then(user => {
			if (!user) {
				res.status(404).json({
					message: 'The user with the specified ID does not exist.'
				});
			} else {
				res.status(200).json({ message: 'User deleted' }).end();
			}
		})
		.catch(err => {
			res.status(500).json({ error: 'The user could not be removed' });
		});
});

router.put('/:id', (req, res) => {
	const id = req.params.id;
	user = req.body;
	if (!user) {
		res
			.status(404)
			.json({ message: 'please provided updated information' });
	} else {
		db
			.update(id, user)
			.then(users => {
				res.status(200).json(users);
			})
			.catch(err => {
				res
					.status(500)
					.json({
						error: 'The user information could not be modified.'
					});
			});
	}
});

module.exports = router;
