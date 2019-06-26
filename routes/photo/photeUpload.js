const express = require('express');
const router = express.Router();
const { multerUploads, dataUri } = require('../../config/multer');
const { cloudinaryConfig, uploader } = require('../../config/cloudConfig');
cloudinaryConfig(router);

router.post('/upload', multerUploads, (req, res) => {
	if (req.file) {
		const file = dataUri(req).content;
		return uploader.upload(file).then(result => {
			const photo = result.url;
			return res
				.status(200)
				.json({
					message:
						'Your image has been uploaded successfully to Cloudinary',
					photo: photo
				})
				.catch(err =>
					res.status(400).json({
						message:
							'Something went wrong while processing your request',
						err: err
					})
				);
		});
	}
});

module.exports = router;
