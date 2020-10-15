var exec = require('child_process').exec,
	path = require('path'),
	fs = require('fs'),
	request = require('request'),
	http = require('http'),
	https = require('https'),
	isMac = /^darwin/.test(process.platform),
	Q = require('q'),
	csdkDirectory;

if (!isMac) {
	console.log('iOS development is only supported on Mac OS X system, cowardly refusing to install the plugin');
} else {
	var commands = {
		rm: "rm",
		rmRF: "rm -rf",
		cp: "cp",
		mv: "mv",
		touch: "touch"
	};

	var paths = {
		"ConnectSDK_Framework": "http://github.com/ConnectSDK/Connect-SDK-iOS/releases/download/1.6.0/ConnectSDK.framework.zip",
		"ConnectSDK_Version": "1.6.0",
		"FlingSDK_URL": "https://s3-us-west-1.amazonaws.com/amazon-fling/AmazonFling-SDK.zip",
		"AmazonFling_Framework": "./csdk_tmp/ios-sdk/frameworks/AmazonFling.framework",
		"Bolts_Framework": "./csdk_tmp/ios-sdk/frameworks/third_party_framework/Bolts.framework",
		"GoogleCastSDK_URL": "https://developers.google.com/cast/downloads/GoogleCastSDK-2.7.1-Release-ios-default.zip",
		"GoogleCast_Framework": "./csdk_tmp/GoogleCastSDK-2.7.1-Release/GoogleCast.framework"
	};

	function safePath(unsafePath) {
		return path.join(process.cwd(), "./platforms/ios/", unsafePath);
	}

	function iOSInstall() {}

	iOSInstall.prototype.steps = [
		"createTemporaryDirectory",
		"downloadConnectSDK",
		"downloadFlingSDK",
		"downloadGoogleCastSDK",
		"cleanup"
	];

	iOSInstall.prototype.start = function () {
		console.log("Starting ConnectSDK iOS install");
		var self = this;
		self.executeStep(0);
	};

	iOSInstall.prototype.executeStep = function (step) {
		var self = this;
		if (step < this.steps.length) {
			var promise = this[this.steps[step]]();
			promise.then(function () {
				self.executeStep(step + 1);
			}, function (err) {
				console.log("Encountered an error, reverting install steps");
				console.error(err);
				self.revertStep(step);
			});
		} else {
			console.log("ConnectSDK iOS install finished");
		}
	};

	iOSInstall.prototype.revertStep = function (step) {
		var self = this;
		if (this.currentStep < this.steps.length) {
			var promise = this["revert_" + this.steps[step]]();
			promise.then(function () {
				self.revertStep(step - 1);
			}, function () {
				console.error("An error occured while reverting the install.");
			});
		} else {
			console.log("ConnectSDK iOS install reverted");
		}
	};

	iOSInstall.prototype.createTemporaryDirectory = function () {
		return Q.nfcall(fs.readdir, safePath("./"))
			.then(function (files) {
			for (var i = 0; i < files.length; i++) {
				if (files[i].indexOf('.xcodeproj') !== -1) {
					csdkDirectory = "./" + files[i].substring(0, files[i].indexOf('.xcodeproj')) + "/Plugins/cordova-plugin-connectsdk";
					return Q.nfcall(fs.mkdir, safePath('./csdk_tmp'));
				}
			}
			return Q.reject("Could not find ConnectSDK plugin directory");
		});
	};

	iOSInstall.prototype.revert_createTemporaryDirectory = function () {
		return Q.nfcall(exec, commands.rmRF + " " + safePath("./csdk_tmp"));
	};

	iOSInstall.prototype.downloadConnectSDK = function () {
		var deferred = Q.defer();
		console.log("Downloading ConnectSDK");
		var file = fs.createWriteStream(safePath("./csdk_tmp/ConnectSDK.framework.zip"));
		request.get(paths.ConnectSDK_Framework)
			.on('error', function (err) {
				deferred.reject(err);
			}).pipe(file).on('close', function () {
				console.log('Extracting ConnectSDK');
				Q.nfcall(exec, "unzip -q " + safePath('./csdk_tmp/ConnectSDK.framework.zip') + " -d " + safePath('./csdk_tmp'))
					.then(function () {
					return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/ConnectSDK.framework"));
				})
					.then(function () {
					return Q.nfcall(exec, commands.mv + " " + safePath("./csdk_tmp/ConnectSDK.framework") + " " + safePath(csdkDirectory + "/ConnectSDK.framework"));
				})
					.then(function () {
					deferred.resolve();
				})
					.catch(function (err) {
					deferred.reject(err);
				});
			});

		return deferred.promise;
	};

	iOSInstall.prototype.revert_downloadConnectSDK = function () {
		return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/ConnectSDK.framework"))
			.then(function () {
			return Q.nfcall(exec, commands.touch + " " + safePath(csdkDirectory + "/ConnectSDK.framework"));
		});
	};

	iOSInstall.prototype.downloadFlingSDK = function () {
		var deferred = Q.defer();
		console.log("Downloading FlingSDK");
		var file = fs.createWriteStream(safePath("./csdk_tmp/AmazonFling-SDK.zip"));
		https.get(paths.FlingSDK_URL, function(response) {
			response.pipe(file).on('close', function () {
				console.log('Extracting FlingSDK');
				Q.nfcall(exec, "unzip -q " + safePath('./csdk_tmp/AmazonFling-SDK.zip') + " -d " + safePath('./csdk_tmp'))
					.then(function () {
					return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/AmazonFling.framework"));
				})
					.then(function () {
					return Q.nfcall(exec, commands.mv + " " + safePath(paths.AmazonFling_Framework) + " " + safePath(csdkDirectory + "/AmazonFling.framework"));
				})
					.then(function () {
					return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/Bolts.framework"));
				})
					.then(function () {
					return Q.nfcall(exec, commands.mv + " " + safePath(paths.Bolts_Framework) + " " + safePath(csdkDirectory + "/Bolts.framework"));
				})
					.then(function () {
					deferred.resolve();
				})
					.catch(function (err) {
					deferred.reject(err);
				});
			});
		}).on('error', function (err) {
			deferred.reject(err);
		});

		return deferred.promise;
	};

	iOSInstall.prototype.revert_downloadFlingSDK = function () {
		return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/AmazonFling.framework"))
			.then(function () {
			return Q.nfcall(exec, commands.touch + " " + safePath(csdkDirectory + "/AmazonFling.framework"));
		})
			.then(function () {
			return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/Bolts.framework"));
		})
			.then(function () {
			return Q.nfcall(exec, commands.touch + " " + safePath(csdkDirectory + "/Bolts.framework"));
		});
	};

	iOSInstall.prototype.downloadGoogleCastSDK = function () {
		var deferred = Q.defer();
		console.log("Downloading GoogleCast SDK");
		var file = fs.createWriteStream(safePath("./csdk_tmp/GoogleCastSDK.zip"));
		https.get(paths.GoogleCastSDK_URL, function(response) {
			response.pipe(file).on('close', function () {
				console.log('Extracting ConnectSDK');
				Q.nfcall(exec, "unzip -q " + safePath("./csdk_tmp/GoogleCastSDK.zip") + " -d " + safePath('./csdk_tmp'))
					.then(function () {
					return Q.nfcall(exec, commands.rm + " " + safePath(csdkDirectory + "/GoogleCast.framework"));
				})
					.then(function () {
					return Q.nfcall(exec, commands.mv + " " + safePath(paths.GoogleCast_Framework) + " " + safePath(csdkDirectory + "/GoogleCast.framework"));
				})
					.then(function () {
					deferred.resolve();
				})
					.catch(function (err) {
					deferred.reject(err);
				});
			});
		}).on('error', function (err) {
			deferred.reject(err);
		});

		return deferred.promise;
	};

	iOSInstall.prototype.revert_downloadGoogleCastSDK = function () {
		return Q.nfcall(exec, commands.rm + safePath(csdkDirectory + "/GoogleCast.framework"))
			.then(function () {
			return Q.nfcall(exec, commands.touch + safePath(csdkDirectory + "/GoogleCast.framework"));
		});
	};

	iOSInstall.prototype.cleanup = function () {
		console.log("Cleaning up");
		return this.revert_createTemporaryDirectory();
	};

	iOSInstall.prototype.revert_cleanup = function () {
		return Q.resolve();
	};

	new iOSInstall().start();
}
