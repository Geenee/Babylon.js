!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.KTX2DECODER=t():e.KTX2DECODER=t()}("undefined"!=typeof self?self:"undefined"!=typeof global?global:this,(function(){return function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/dist/",n(n.s=1)}([function(e,t,n){"use strict";n.d(t,"b",(function(){return S})),n.d(t,"j",(function(){return i})),n.d(t,"c",(function(){return d})),n.d(t,"o",(function(){return r})),n.d(t,"p",(function(){return o})),n.d(t,"k",(function(){return s})),n.d(t,"l",(function(){return c})),n.d(t,"m",(function(){return u})),n.d(t,"n",(function(){return U})),n.d(t,"a",(function(){return a})),n.d(t,"d",(function(){return y})),n.d(t,"e",(function(){return _})),n.d(t,"f",(function(){return g})),n.d(t,"h",(function(){return T})),n.d(t,"g",(function(){return b})),n.d(t,"i",(function(){return B}));var r,o,a=function(){function e(e,t,n){e.buffer?this._dataView=new DataView(e.buffer,e.byteOffset+(null!=t?t:0),null!=n?n:e.byteLength):this._dataView=new DataView(e,null!=t?t:0,null!=n?n:e.byteLength),this._dataByteOffset=0}return Object.defineProperty(e.prototype,"byteOffset",{get:function(){return this._dataByteOffset},enumerable:!1,configurable:!0}),e.prototype.readUint8=function(){var e=this._dataView.getUint8(this._dataByteOffset);return this._dataByteOffset+=1,e},e.prototype.readInt8=function(){var e=this._dataView.getInt8(this._dataByteOffset);return this._dataByteOffset+=1,e},e.prototype.readUint16=function(){var e=this._dataView.getUint16(this._dataByteOffset,!0);return this._dataByteOffset+=2,e},e.prototype.readInt16=function(){var e=this._dataView.getInt16(this._dataByteOffset,!0);return this._dataByteOffset+=2,e},e.prototype.readUint32=function(){var e=this._dataView.getUint32(this._dataByteOffset,!0);return this._dataByteOffset+=4,e},e.prototype.readInt32=function(){var e=this._dataView.getInt32(this._dataByteOffset,!0);return this._dataByteOffset+=4,e},e.prototype.readUint64=function(){var e=this._dataView.getUint32(this._dataByteOffset,!0),t=this._dataView.getUint32(this._dataByteOffset+4,!0),n=e+Math.pow(2,32)*t;return this._dataByteOffset+=8,n},e.prototype.readUint8Array=function(e){var t=new Uint8Array(this._dataView.buffer,this._dataView.byteOffset+this._dataByteOffset,e);return this._dataByteOffset+=e,t},e.prototype.skipBytes=function(e){return this._dataByteOffset+=e,this},e}();!function(e){e[e.ETC1S=0]="ETC1S",e[e.UASTC4x4=1]="UASTC4x4"}(r||(r={})),function(e){e[e.ASTC_4x4_RGBA=0]="ASTC_4x4_RGBA",e[e.BC7_RGBA=1]="BC7_RGBA",e[e.BC3_RGBA=2]="BC3_RGBA",e[e.BC1_RGB=3]="BC1_RGB",e[e.PVRTC1_4_RGBA=4]="PVRTC1_4_RGBA",e[e.PVRTC1_4_RGB=5]="PVRTC1_4_RGB",e[e.ETC2_RGBA=6]="ETC2_RGBA",e[e.ETC1_RGB=7]="ETC1_RGB",e[e.RGBA32=8]="RGBA32"}(o||(o={}));var i,s=function(){function e(){}return e.CanTranscode=function(e,t,n){return!1},e.prototype.getName=function(){return e.Name},e.prototype.initialize=function(){},e.prototype.needMemoryManager=function(){return!1},e.prototype.setMemoryManager=function(e){},e.prototype.transcode=function(e,t,n,r,o,a,i,s,d){return Promise.resolve(null)},e.Name="Transcoder",e}();!function(e){e[e.None=0]="None",e[e.BasisLZ=1]="BasisLZ",e[e.ZStandard=2]="ZStandard",e[e.ZLib=3]="ZLib"}(i||(i={}));var d=function(){function e(e){this._data=e}return Object.defineProperty(e.prototype,"data",{get:function(){return this._data},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"header",{get:function(){return this._header},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"levels",{get:function(){return this._levels},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"dfdBlock",{get:function(){return this._dfdBlock},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"supercompressionGlobalData",{get:function(){return this._supercompressionGlobalData},enumerable:!1,configurable:!0}),e.prototype.isValid=function(){return e.IsValid(this._data)},e.prototype.parse=function(){var e=12,t=new a(this._data,e,68),n=this._header={vkFormat:t.readUint32(),typeSize:t.readUint32(),pixelWidth:t.readUint32(),pixelHeight:t.readUint32(),pixelDepth:t.readUint32(),layerCount:t.readUint32(),faceCount:t.readUint32(),levelCount:t.readUint32(),supercompressionScheme:t.readUint32(),dfdByteOffset:t.readUint32(),dfdByteLength:t.readUint32(),kvdByteOffset:t.readUint32(),kvdByteLength:t.readUint32(),sgdByteOffset:t.readUint64(),sgdByteLength:t.readUint64()};if(n.pixelDepth>0)throw new Error("Failed to parse KTX2 file - Only 2D textures are currently supported.");if(n.layerCount>1)throw new Error("Failed to parse KTX2 file - Array textures are not currently supported.");if(n.faceCount>1)throw new Error("Failed to parse KTX2 file - Cube textures are not currently supported.");e+=t.byteOffset;for(var r=Math.max(1,n.levelCount),o=new a(this._data,e,3*r*8),i=this._levels=[];r--;)i.push({byteOffset:o.readUint64(),byteLength:o.readUint64(),uncompressedByteLength:o.readUint64()});e+=o.byteOffset;var s=new a(this._data,n.dfdByteOffset,n.dfdByteLength),d=this._dfdBlock={vendorId:s.skipBytes(4).readUint16(),descriptorType:s.readUint16(),versionNumber:s.readUint16(),descriptorBlockSize:s.readUint16(),colorModel:s.readUint8(),colorPrimaries:s.readUint8(),transferFunction:s.readUint8(),flags:s.readUint8(),texelBlockDimension:{x:s.readUint8()+1,y:s.readUint8()+1,z:s.readUint8()+1,w:s.readUint8()+1},bytesPlane:[s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8()],numSamples:0,samples:new Array};d.numSamples=(d.descriptorBlockSize-24)/16;for(var u=0;u<d.numSamples;u++){var c={bitOffset:s.readUint16(),bitLength:s.readUint8()+1,channelType:s.readUint8(),channelFlags:0,samplePosition:[s.readUint8(),s.readUint8(),s.readUint8(),s.readUint8()],sampleLower:s.readUint32(),sampleUpper:s.readUint32()};c.channelFlags=(240&c.channelType)>>4,c.channelType=15&c.channelType,d.samples.push(c)}var f=this._supercompressionGlobalData={};if(n.sgdByteLength>0){var l=new a(this._data,n.sgdByteOffset,n.sgdByteLength);f.endpointCount=l.readUint16(),f.selectorCount=l.readUint16(),f.endpointsByteLength=l.readUint32(),f.selectorsByteLength=l.readUint32(),f.tablesByteLength=l.readUint32(),f.extendedByteLength=l.readUint32(),f.imageDescs=[];var p=this._getImageCount();for(u=0;u<p;u++)f.imageDescs.push({imageFlags:l.readUint32(),rgbSliceByteOffset:l.readUint32(),rgbSliceByteLength:l.readUint32(),alphaSliceByteOffset:l.readUint32(),alphaSliceByteLength:l.readUint32()});var h=n.sgdByteOffset+l.byteOffset,m=h+f.endpointsByteLength,y=m+f.selectorsByteLength,_=y+f.tablesByteLength;f.endpointsData=new Uint8Array(this._data.buffer,this._data.byteOffset+h,f.endpointsByteLength),f.selectorsData=new Uint8Array(this._data.buffer,this._data.byteOffset+m,f.selectorsByteLength),f.tablesData=new Uint8Array(this._data.buffer,this._data.byteOffset+y,f.tablesByteLength),f.extendedData=new Uint8Array(this._data.buffer,this._data.byteOffset+_,f.extendedByteLength)}},e.prototype._getImageCount=function(){for(var e=Math.max(this._header.pixelDepth,1),t=1;t<this._header.levelCount;t++)e+=Math.max(this._header.pixelDepth>>t,1);return Math.max(this._header.layerCount,1)*this._header.faceCount*e},Object.defineProperty(e.prototype,"textureFormat",{get:function(){return 166===this._dfdBlock.colorModel?r.UASTC4x4:r.ETC1S},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"hasAlpha",{get:function(){switch(this.textureFormat){case r.ETC1S:return 2===this._dfdBlock.numSamples&&(15===this._dfdBlock.samples[0].channelType||15===this._dfdBlock.samples[1].channelType);case r.UASTC4x4:return 3===this._dfdBlock.samples[0].channelType}return!1},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"needZSTDDecoder",{get:function(){return this._header.supercompressionScheme===i.ZStandard},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"isInGammaSpace",{get:function(){return 2===this._dfdBlock.transferFunction},enumerable:!1,configurable:!0}),e.IsValid=function(e){if(e.byteLength>=12){var t=new Uint8Array(e.buffer,e.byteOffset,12);if(171===t[0]&&75===t[1]&&84===t[2]&&88===t[3]&&32===t[4]&&50===t[5]&&48===t[6]&&187===t[7]&&13===t[8]&&10===t[9]&&26===t[10]&&10===t[11])return!0}return!1},e}(),u=function(){function e(t){void 0===t&&(t=e.InitialMemoryPages),this._numPages=t,this._memory=new WebAssembly.Memory({initial:this._numPages}),this._memoryViewByteLength=this._numPages<<16,this._memoryViewOffset=0,this._memoryView=new Uint8Array(this._memory.buffer,this._memoryViewOffset,this._memoryViewByteLength)}return e.LoadWASM=function(e){if(this.LoadBinariesFromCurrentThread)return new Promise((function(t,n){fetch(e).then((function(t){if(t.ok)return t.arrayBuffer();throw new Error('Could not fetch the wasm component from "'+e+'": '+t.status+" - "+t.statusText)})).then((function(e){return t(e)})).catch((function(e){n(e)}))}));var t=this._RequestId++;return new Promise((function(n){var r=function(e){"wasmLoaded"===e.data.action&&e.data.id===t&&(self.removeEventListener("message",r),n(e.data.wasmBinary))};self.addEventListener("message",r),postMessage({action:"loadWASM",path:e,id:t})}))},Object.defineProperty(e.prototype,"wasmMemory",{get:function(){return this._memory},enumerable:!1,configurable:!0}),e.prototype.getMemoryView=function(e,t,n){return void 0===t&&(t=0),n=null!=n?n:e<<16,this._numPages<e?(this._memory.grow(e-this._numPages),this._numPages=e,this._memoryView=new Uint8Array(this._memory.buffer,t,n),this._memoryViewByteLength=n,this._memoryViewOffset=t):(this._memoryView=new Uint8Array(this._memory.buffer,t,n),this._memoryViewByteLength=n,this._memoryViewOffset=t),this._memoryView},e.LoadBinariesFromCurrentThread=!0,e.InitialMemoryPages=16,e._RequestId=0,e}(),c=function(){function e(){}return e.RegisterTranscoder=function(t){e._Transcoders.push(t)},e.prototype.findTranscoder=function(t,n,a,i){for(var s=null,d=r[t]+"_"+o[n],c=0;c<e._Transcoders.length;++c)if(e._Transcoders[c].CanTranscode(t,n,a)&&(!i||i.indexOf(e._Transcoders[c].Name)<0)){(s=this._getExistingTranscoder(d,e._Transcoders[c].Name))||((s=new e._Transcoders[c]).initialize(),s.needMemoryManager()&&(this._wasmMemoryManager||(this._wasmMemoryManager=new u),s.setMemoryManager(this._wasmMemoryManager)),e._transcoderInstances[d]||(e._transcoderInstances[d]=[]),e._transcoderInstances[d].push(s));break}return s},e.prototype._getExistingTranscoder=function(t,n){var r=e._transcoderInstances[t];if(r)for(var o=0;o<r.length;++o){var a=r[o];if(n===a.getName())return a}return null},e._Transcoders=[],e._transcoderInstances={},e}(),f=function(e,t){return(f=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])})(e,t)};function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Class extends value "+String(t)+" is not a constructor or null");function n(){this.constructor=e}f(e,t),e.prototype=null===t?Object.create(t):(n.prototype=t.prototype,new n)}Object.create;Object.create;var p,h,m,y=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype._loadModule=function(){var e=this;return this._modulePromise||(this._modulePromise=u.LoadWASM(this._modulePath).then((function(t){return new Promise((function(n){WebAssembly.instantiate(t,{env:{memory:e._memoryManager.wasmMemory}}).then((function(e){n({module:e.instance.exports})}))}))}))),this._modulePromise},Object.defineProperty(t.prototype,"memoryManager",{get:function(){return this._memoryManager},enumerable:!1,configurable:!0}),t.prototype.setModulePath=function(e){this._modulePath=e},t.prototype.initialize=function(){this._transcodeInPlace=!0},t.prototype.needMemoryManager=function(){return!0},t.prototype.setMemoryManager=function(e){this._memoryManager=e},t.prototype.transcode=function(e,t,n,r,o,a,i,s,d){var u=this;return this._loadModule().then((function(e){var t=e.module,n=u._prepareTranscoding(r,o,a,d),i=n[0],s=n[1],c=n[2];return 0===t.transcode(c)?u._transcodeInPlace?i.slice():s.slice():null}))},t.prototype._prepareTranscoding=function(e,t,n,r,o){void 0===o&&(o=!1);var a=(e+3>>2)*(t+3>>2);o&&(n=e*(t+3>>2)*4*4);var i=1+(16*a+65535+(this._transcodeInPlace?0:n)>>16),s=this.memoryManager.getMemoryView(i,65536,16*a),d=this._transcodeInPlace?null:new Uint8Array(this._memoryManager.wasmMemory.buffer,65536+16*a,o?e*t*4:n);return s.set(r),[s,d,a]},t}(s),_=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,n){return e===r.UASTC4x4&&t===o.ASTC_4x4_RGBA},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this.setModulePath(t.WasmModuleURL)},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_astc.wasm",t.Name="UniversalTranscoder_UASTC_ASTC",t}(y),g=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,n){return e===r.UASTC4x4&&t===o.BC7_RGBA},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this.setModulePath(t.WasmModuleURL)},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_bc7.wasm",t.Name="UniversalTranscoder_UASTC_BC7",t}(y),T=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,n){return e===r.UASTC4x4&&t===o.RGBA32&&!n},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this._transcodeInPlace=!1,this.setModulePath(t.WasmModuleURL)},t.prototype.transcode=function(e,t,n,r,o,a,i,s,d){var u=this;return this._loadModule().then((function(e){var t=e.module,n=u._prepareTranscoding(r,o,a,d,!0)[1];return 0===t.decodeRGBA32(r,o)?n.slice():null}))},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_rgba32_unorm.wasm",t.Name="UniversalTranscoder_UASTC_RGBA_UNORM",t}(y),b=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.CanTranscode=function(e,t,n){return e===r.UASTC4x4&&t===o.RGBA32&&n},t.prototype.getName=function(){return t.Name},t.prototype.initialize=function(){e.prototype.initialize.call(this),this._transcodeInPlace=!1,this.setModulePath(t.WasmModuleURL)},t.prototype.transcode=function(e,t,n,r,o,a,i,s,d){var u=this;return this._loadModule().then((function(e){var t=e.module,n=u._prepareTranscoding(r,o,a,d,!0)[1];return 0===t.decodeRGBA32(r,o)?n.slice():null}))},t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/uastc_rgba32_srgb.wasm",t.Name="UniversalTranscoder_UASTC_RGBA_SRGB",t}(y),B=function(e){function t(){return null!==e&&e.apply(this,arguments)||this}return l(t,e),t.prototype.getName=function(){return t.Name},t.prototype._getMSCBasisTranscoder=function(){var e=this;return this._mscBasisTranscoderPromise||(this._mscBasisTranscoderPromise=u.LoadWASM(t.WasmModuleURL).then((function(n){if(t.UseFromWorkerThread)importScripts(t.JSModuleURL);else if("undefined"==typeof MSC_TRANSCODER)return new Promise((function(r,o){var a=document.getElementsByTagName("head")[0],i=document.createElement("script");i.setAttribute("type","text/javascript"),i.setAttribute("src",t.JSModuleURL),i.onload=function(){MSC_TRANSCODER({wasmBinary:n}).then((function(t){t.initTranscoders(),e._mscBasisModule=t,r()}))},i.onerror=function(){o("Can not load MSC_TRANSCODER script.")},a.appendChild(i)}));return new Promise((function(t){MSC_TRANSCODER({wasmBinary:n}).then((function(n){n.initTranscoders(),e._mscBasisModule=n,t()}))}))}))),this._mscBasisTranscoderPromise},t.CanTranscode=function(e,t,n){return!0},t.prototype.transcode=function(e,t,n,a,i,s,d,u,c){var f=this;return this._getMSCBasisTranscoder().then((function(){var l,p=f._mscBasisModule,h=e===r.UASTC4x4?new p.UastcImageTranscoder:new p.BasisLzEtc1sImageTranscoder,m=e===r.UASTC4x4?p.TextureFormat.UASTC4x4:p.TextureFormat.ETC1S,y=new p.ImageInfo(m,a,i,n),_=p.TranscodeTarget[o[t]];if(!p.isFormatSupported(_,m))throw new Error('MSCTranscoder: Transcoding from "'+r[e]+'" to "'+o[t]+'" not supported by current transcoder build.');if(e===r.ETC1S){var g=d.supercompressionGlobalData;h.decodePalettes(g.endpointCount,g.endpointsData,g.selectorCount,g.selectorsData),h.decodeTables(g.tablesData),y.flags=u.imageFlags,y.rgbByteOffset=0,y.rgbByteLength=u.rgbSliceByteLength,y.alphaByteOffset=u.alphaSliceByteOffset>0?u.rgbSliceByteLength:0,y.alphaByteLength=u.alphaSliceByteLength,l=h.transcodeImage(_,c,y,0,!1)}else y.flags=0,y.rgbByteOffset=0,y.rgbByteLength=s,y.alphaByteOffset=0,y.alphaByteLength=0,l=h.transcodeImage(_,c,y,0,d.hasAlpha,!1);if(l&&void 0!==l.transcodedImage){var T=l.transcodedImage.get_typed_memory_view().slice();return l.transcodedImage.delete(),T}return null}))},t.JSModuleURL="https://preview.babylonjs.com/ktx2Transcoders/msc_basis_transcoder.js",t.WasmModuleURL="https://preview.babylonjs.com/ktx2Transcoders/msc_basis_transcoder.wasm",t.UseFromWorkerThread=!0,t.Name="MSCTranscoder",t}(s),w={env:{emscripten_notify_memory_growth:function(e){m=new Uint8Array(h.exports.memory.buffer)}}},U=function(){function e(){}return e.prototype.init=function(){return p||(p="undefined"!=typeof fetch?fetch(e.WasmModuleURL).then((function(e){if(e.ok)return e.arrayBuffer();throw new Error("Could not fetch the wasm component for the Zstandard decompression lib: "+e.status+" - "+e.statusText)})).then((function(e){return WebAssembly.instantiate(e,w)})).then(this._init):WebAssembly.instantiateStreaming(fetch(e.WasmModuleURL),w).then(this._init))},e.prototype._init=function(e){h=e.instance,w.env.emscripten_notify_memory_growth(0)},e.prototype.decode=function(e,t){if(void 0===t&&(t=0),!h)throw new Error("ZSTDDecoder: Await .init() before decoding.");var n=e.byteLength,r=h.exports.malloc(n);m.set(e,r),t=t||Number(h.exports.ZSTD_findDecompressedSize(r,n));var o=h.exports.malloc(t),a=h.exports.ZSTD_decompress(o,t,r,n),i=m.slice(o,o+a);return h.exports.free(r),h.exports.free(o),i},e.WasmModuleURL="https://preview.babylonjs.com/zstddec.wasm",e}(),v={ETC1S:{option:"forceRGBA",yes:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1},no:{cap:"etc2",yes:{alpha:!0,yes:{transcodeFormat:o.ETC2_RGBA,engineFormat:37496},no:{transcodeFormat:o.ETC1_RGB,engineFormat:37492}},no:{cap:"etc1",alpha:!1,yes:{transcodeFormat:o.ETC1_RGB,engineFormat:36196},no:{cap:"bptc",yes:{transcodeFormat:o.BC7_RGBA,engineFormat:36492},no:{cap:"s3tc",yes:{alpha:!0,yes:{transcodeFormat:o.BC3_RGBA,engineFormat:33779},no:{transcodeFormat:o.BC1_RGB,engineFormat:33776}},no:{cap:"pvrtc",needsPowerOfTwo:!0,yes:{alpha:!0,yes:{transcodeFormat:o.PVRTC1_4_RGBA,engineFormat:35842},no:{transcodeFormat:o.PVRTC1_4_RGB,engineFormat:35840}},no:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1}}}}}}},UASTC:{option:"forceRGBA",yes:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1},no:{cap:"astc",yes:{transcodeFormat:o.ASTC_4x4_RGBA,engineFormat:37808},no:{cap:"bptc",yes:{transcodeFormat:o.BC7_RGBA,engineFormat:36492},no:{option:"useRGBAIfASTCBC7NotAvailableWhenUASTC",yes:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1},no:{cap:"etc2",yes:{alpha:!0,yes:{transcodeFormat:o.ETC2_RGBA,engineFormat:37496},no:{transcodeFormat:o.ETC1_RGB,engineFormat:37492}},no:{cap:"etc1",yes:{transcodeFormat:o.ETC1_RGB,engineFormat:36196},no:{cap:"s3tc",yes:{alpha:!0,yes:{transcodeFormat:o.BC3_RGBA,engineFormat:33779},no:{transcodeFormat:o.BC1_RGB,engineFormat:33776}},no:{cap:"pvrtc",needsPowerOfTwo:!0,yes:{alpha:!0,yes:{transcodeFormat:o.PVRTC1_4_RGBA,engineFormat:35842},no:{transcodeFormat:o.PVRTC1_4_RGB,engineFormat:35840}},no:{transcodeFormat:o.RGBA32,engineFormat:32856,roundToMultiple4:!1}}}}}}}}}},C=function(){function e(e,t,n,o,a){this._hasAlpha=t,this._isPowerOfTwo=n,this._caps=o,this._options=null!=a?a:{},this._parseNode(e===r.UASTC4x4?v.UASTC:v.ETC1S)}return e._IsLeafNode=function(e){return void 0!==e.transcodeFormat},Object.defineProperty(e.prototype,"transcodeFormat",{get:function(){return this._transcodeFormat},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"engineFormat",{get:function(){return this._engineFormat},enumerable:!1,configurable:!0}),Object.defineProperty(e.prototype,"roundToMultiple4",{get:function(){return this._roundToMultiple4},enumerable:!1,configurable:!0}),e.prototype._parseNode=function(t){var n;if(e._IsLeafNode(t))this._transcodeFormat=t.transcodeFormat,this._engineFormat=t.engineFormat,this._roundToMultiple4=null===(n=t.roundToMultiple4)||void 0===n||n;else{var r=!0;void 0!==t.cap&&(r=r&&this._caps[t.cap]),void 0!==t.option&&(r=r&&this._options[t.option]),void 0!==t.alpha&&(r=r&&this._hasAlpha===t.alpha),void 0!==t.needsPowerOfTwo&&(r=r&&this._isPowerOfTwo===t.needsPowerOfTwo),this._parseNode(r?t.yes:t.no)}},e}(),A=function(e){return 0==(e&e-1)&&0!==e},S=function(){function e(){this._transcoderMgr=new c}return e.prototype.decode=function(e,t,n){var r=this;return Promise.resolve().then((function(){var o=new d(e);if(!o.isValid())throw new Error("Invalid KT2 file: wrong signature");return o.parse(),o.needZSTDDecoder?(r._zstdDecoder||(r._zstdDecoder=new U),r._zstdDecoder.init().then((function(){return r._decodeData(o,t,n)}))):r._decodeData(o,t,n)}))},e.prototype._decodeData=function(e,t,n){var a=e.header.pixelWidth,s=e.header.pixelHeight,d=e.textureFormat,u=new C(d,e.hasAlpha,A(a)&&A(s),t,n),c=u.transcodeFormat,f=u.engineFormat,l=u.roundToMultiple4,p=this._transcoderMgr.findTranscoder(d,c,e.isInGammaSpace,null==n?void 0:n.bypassTranscoders);if(null===p)throw new Error('no transcoder found to transcode source texture format "'+r[d]+'" to format "'+o[c]+'"');for(var h=[],m=[],y={width:0,height:0,transcodedFormat:f,mipmaps:h,isInGammaSpace:e.isInGammaSpace,hasAlpha:e.hasAlpha,transcoderName:p.getName()},_=0,g=0;g<e.header.levelCount;g++){g>0&&(_+=Math.max(e.header.layerCount,1)*e.header.faceCount*Math.max(e.header.pixelDepth>>g-1,1));var T=Math.floor(a/(1<<g))||1,b=Math.floor(s/(1<<g))||1,B=e.header.faceCount,w=(T+3>>2)*(b+3>>2)*e.dfdBlock.bytesPlane[0],U=e.levels[g].uncompressedByteLength,v=e.data.buffer,S=e.levels[g].byteOffset+e.data.byteOffset,M=0;e.header.supercompressionScheme===i.ZStandard&&(v=this._zstdDecoder.decode(new Uint8Array(v,S,e.levels[g].byteLength),U),S=0),0===g&&(y.width=l?T+3&-4:T,y.height=l?b+3&-4:b);for(var R=function(t){var n=void 0,r=null;e.header.supercompressionScheme===i.BasisLZ?(r=e.supercompressionGlobalData.imageDescs[_+t],n=new Uint8Array(v,S+r.rgbSliceByteOffset,r.rgbSliceByteLength+r.alphaSliceByteLength)):(n=new Uint8Array(v,S+M,w),M+=w);var o={data:null,width:T,height:b},a=p.transcode(d,c,g,T,b,U,e,r,n).then((function(e){return o.data=e,e})).catch((function(e){var t;return y.errors=null!==(t=y.errors)&&void 0!==t?t:"",y.errors+=e+"\n"+e.stack+"\n",null}));m.push(a),h.push(o)},O=0;O<B;O++)R(O)}return Promise.all(m).then((function(){return y}))},e}();c.RegisterTranscoder(_),c.RegisterTranscoder(g),c.RegisterTranscoder(T),c.RegisterTranscoder(b),c.RegisterTranscoder(B)},function(e,t,n){"use strict";n.r(t),function(e){var r=n(0);n.d(t,"KTX2Decoder",(function(){return r.b})),n.d(t,"SupercompressionScheme",(function(){return r.j})),n.d(t,"KTX2FileReader",(function(){return r.c})),n.d(t,"sourceTextureFormat",(function(){return r.o})),n.d(t,"transcodeTarget",(function(){return r.p})),n.d(t,"Transcoder",(function(){return r.k})),n.d(t,"TranscoderManager",(function(){return r.l})),n.d(t,"WASMMemoryManager",(function(){return r.m})),n.d(t,"ZSTDDecoder",(function(){return r.n})),n.d(t,"DataReader",(function(){return r.a})),n.d(t,"LiteTranscoder",(function(){return r.d})),n.d(t,"LiteTranscoder_UASTC_ASTC",(function(){return r.e})),n.d(t,"LiteTranscoder_UASTC_BC7",(function(){return r.f})),n.d(t,"LiteTranscoder_UASTC_RGBA_UNORM",(function(){return r.h})),n.d(t,"LiteTranscoder_UASTC_RGBA_SRGB",(function(){return r.g})),n.d(t,"MSCTranscoder",(function(){return r.i}));var o=void 0!==e?e:"undefined"!=typeof window?window:void 0;void 0!==o&&(o.KTX2DECODER=r.b)}.call(this,n(2))},function(e,t){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(e){"object"==typeof window&&(n=window)}e.exports=n}])}));