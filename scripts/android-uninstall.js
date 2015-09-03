var exec = require('child_process').exec,
	path = require('path'),
	isWin = /^win/.test(process.platform);

var commands = {
	rmRF: isWin ? "rmdir /s" : "rm -rf",
	cp: isWin ? "copy" : "cp",
	mv: isWin ? "move" : "mv"
};

function safePath(unsafePath) {
	return path.join(process.cwd(), "./platforms/android/", unsafePath);
}

exec(commands.rmRF + " " + safePath("./csdk_tmp"), {}, function (err) {
	if (err) {
		console.error("There was an error removing the platforms/android/csdk_tmp directory. Please remove this folder.");
	}
	console.log("ConnectSDK Android uninstall finished");
});
