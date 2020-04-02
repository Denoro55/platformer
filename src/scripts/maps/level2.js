(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("level2",
{ "compressionlevel":-1,
 "height":17,
 "infinite":false,
 "layers":[
        {
         "data":[0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
         "height":17,
         "id":1,
         "name":"tiles",
         "opacity":1,
         "type":"tilelayer",
         "visible":true,
         "width":36,
         "x":0,
         "y":0
        }, 
        {
         "draworder":"topdown",
         "id":2,
         "name":"actors",
         "objects":[
                {
                 "gid":3,
                 "height":32,
                 "id":1,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":96,
                 "y":480
                }, 
                {
                 "gid":2,
                 "height":32,
                 "id":2,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":461,
                 "y":480
                }, 
                {
                 "gid":4,
                 "height":32,
                 "id":3,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":207.333333333333,
                 "y":368
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":10,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":352,
                 "y":160
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":11,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":544,
                 "y":256
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":12,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":608,
                 "y":256
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":13,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":64,
                 "y":224
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":14,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":768,
                 "y":352
                }, 
                {
                 "gid":2,
                 "height":32,
                 "id":15,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":736,
                 "y":448
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":17,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":320,
                 "y":480
                }, 
                {
                 "gid":5,
                 "height":32,
                 "id":18,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":640,
                 "y":480
                }, 
                {
                 "gid":6,
                 "height":32,
                 "id":19,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":240,
                 "y":464
                }, 
                {
                 "gid":6,
                 "height":32,
                 "id":20,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":352,
                 "y":240
                }, 
                {
                 "gid":6,
                 "height":32,
                 "id":21,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":107.333333333333,
                 "y":339
                }, 
                {
                 "gid":6,
                 "height":32,
                 "id":22,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":607.666666666667,
                 "y":400
                }, 
                {
                 "gid":6,
                 "height":32,
                 "id":23,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":145,
                 "y":455
                }, 
                {
                 "gid":2,
                 "height":32,
                 "id":24,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":832,
                 "y":448
                }, 
                {
                 "gid":2,
                 "height":32,
                 "id":25,
                 "name":"",
                 "rotation":0,
                 "type":"",
                 "visible":true,
                 "width":32,
                 "x":576,
                 "y":320
                }],
         "opacity":1,
         "type":"objectgroup",
         "visible":true,
         "x":0,
         "y":0
        }],
 "nextlayerid":3,
 "nextobjectid":129,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.3.3",
 "tileheight":32,
 "tilesets":[
        {
         "firstgid":1,
         "source":"..\/..\/..\/..\/..\/maps\/tileset.tsx"
        }],
 "tilewidth":32,
 "type":"map",
 "version":1.2,
 "width":36
});