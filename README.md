# Connect SDK Cordova/PhoneGap Plugin

Connect SDK is an open source framework that unifies device discovery and connectivity by providing one set of methods that work across multiple television platforms and protocols.

For more information, visit our [website](http://www.connectsdk.com/).

* [General information about Connect SDK](http://www.connectsdk.com/discover/)
* [Platform documentation & FAQs](http://www.connectsdk.com/docs/cordova/)
* [API documentation](http://www.connectsdk.com/apis/cordova/)

## Dependencies

These steps assume you have a basic working knowledge of development for Android, iOS and Cordova/PhoneGap. For these steps to work, you will need the following:

- Cordova/PhoneGap (5.0+)
- Xcode & Command Line Tools
- Android SDK

If you are only developing for one platform, feel free to ignore the steps & requirements for the irrelevant platform.

## Installation for Cordova/PhoneGap 5.x

#### 1. Create a new Cordova app (optional)

    cordova create sample_app com.example.sample_app SampleApp
    cd sample_app
    cordova platform add ios
    cordova platform add android

#### 2. Add plugin to app

    cordova plugin add cordova-plugin-connectsdk

Or for a specific version, such as 1.6.0

    cordova plugin add cordova-plugin-connectsdk@1.6.0

Or, you can install a specific branch from Github, such as sdk_1.3

    cordova plugin add https://github.com/ConnectSDK/Connect-SDK-Cordova-Plugin.git#sdk_1.3

Thats it! Dependencies will be downloaded and set up automatically. If you're installing an older version than 1.6.0 be sure to check the README from that branch and follow any manual set up steps.

## Contact
* Twitter [@ConnectSDK](https://www.twitter.com/ConnectSDK)
* Ask a question with the "tv" tag on [Stack Overflow](http://stackoverflow.com/tags/tv)
* General Inquiries info@connectsdk.com
* Developer Support support@connectsdk.com
* Partnerships partners@connectsdk.com

## Troubleshooting

* If the plugin doesn't load on iOS, check if the *.m files are in the project's
  "Compile Sources" list in "Build Phases".

* To update the plugin, you'll need to remove and re-add the plugin

```
    cordova plugin remove com.connectsdk.cordovaplugin
    cordova plugin add csdk-plugin-test
```

## License

Copyright (c) 2013-2015 LG Electronics.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

> http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
