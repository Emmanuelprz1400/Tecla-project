

const validateFileUploaded = (req, res) => {
    if(!req.files || Object.keys(req.files).length === 0 || !req.files.file) {
        return res.status(400).json(
            { msg: 'No hay archivos en la petición' }
        );
    }
    next();
}

module.exports = validateFileUploaded;