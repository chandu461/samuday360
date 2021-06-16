# Root Detection Plugin for Apache Cordova

Use this plugin to check if the android device running the app is rooted.


## Install

### Locally

```
cordova plugin add cordova-plugin-root-detection
```

or

```
cordova plugin add https://github.com/trykovyura/cordova-plugin-root-detection.git
```

## Usage

### isDeviceRooted

```js
rootdetection.isDeviceRooted(successCallback, errorCallback);
```

- => `successCallback` is called with true if the device is rooted, otherwise false
- => `errorCallback` is called if there was an error determining if the device is rooted
- returns '1' if device is rooted else '0'

### Example
```js
var successCallback = function (result) {
    var isDevicesRooted = result == 1;
};
var errorCallback = function (error) {
    console.error(error);
};
rootdetection.isDeviceRooted(successCallback, errorCallback);
```

## Platform Support

Android only.

## License

MIT License
