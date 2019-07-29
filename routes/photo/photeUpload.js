const express = require('express');
const router = express.Router();
const { multerUploads, dataUri } = require('../../config/multer');
const { cloudinaryConfig, uploader } = require('../../config/cloudConfig');
cloudinaryConfig(router);

router.post('/upload', multerUploads, (req, res) => {
	if (req.file) {
		const file = dataUri(req).content;
		return uploader.upload(file).then(result => {
			const photo = result.secure_url;
			return res
				.status(200)
				.json({
					message:
						'Your photo was uploaded successfully to Cloudinary!',
					photo: photo
				})
				.catch(err =>
					res.status(500).json({
						message: 'Uexpected error.',
						err: err
					})
				);
		});
	} else {
		res
			.status(400)
			.json({ message: 'There was an issue uploading your photo.' });
	}
});

module.exports = router;
