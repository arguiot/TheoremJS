str2bin(txt, spaceSeparatedOctets) {
	function zeroPad(num) {
		return "00000000".slice(String(num).length) + num
	}
	return txt.replace(/[\s\S]/g, function(str) {
		str = zeroPad(str.charCodeAt().toString(2));
		return !1 == spaceSeparatedOctets ? str : str + " "
	})
}
