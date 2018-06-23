bin2str(txt) {
	return txt.replace(/\s*[01]{8}\s*/g, function(bin) {
        return String.fromCharCode(parseInt(bin, 2))
    })
}
