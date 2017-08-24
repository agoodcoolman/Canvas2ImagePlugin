//
//  Canvas2ImagePlugin.js
//  Canvas2ImagePlugin PhoneGap/Cordova plugin
//
//  Created by Tommy-Carlos Williams on 29/03/12.
//  Copyright (c) 2012 Tommy-Carlos Williams. All rights reserved.
//  MIT Licensed
//

var exec = require('cordova/exec'),
    cordova = require('cordova');
  module.exports = {
    
    saveImageDataToLibrary:function(successCallback, failureCallback, canvas) {
        // successCallback required
        if (typeof successCallback != "function") {
            console.log("Canvas2ImagePlugin Error: successCallback is not a function");
        }
        else if (typeof failureCallback != "function") {
            console.log("Canvas2ImagePlugin Error: failureCallback is not a function");
        }
        else {
            
            var imageData = canvas.toDataURL('image/jpeg'， 0.5).replace(/data:image\/jpeg;base64,/,'');
            return cordova.exec(successCallback, failureCallback, "Canvas2ImagePlugin","saveImageDataToLibrary",[imageData]);
        }
    }
  };
  
