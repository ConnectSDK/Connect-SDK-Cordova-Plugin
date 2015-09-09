var exec = require('child_process').exec,
	path = require('path'),
	isWin = /^win/.test(process.platform);

var commands = {
	rmRF: isWin ? "rmdir /s" : "rm -rf"
};

function safePath(unsafePath) {
	return path.join(process.cwd(), "./platforms/ios/", unsafePath);
}

exec(commands.rmRF + " " + safePath("./csdk_tmp"), {}, function (err) {
	if (err) {
		console.error("There was an error removing the platforms/ios/csdk_tmp directory. Please remove this folder.");
	}
	console.log("ConnectSDK iOS uninstall finished");
});
