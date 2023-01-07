var fs = require("fs");


const buffer = new ArrayBuffer(1024);
const view = new DataView(buffer);
//uint8_t xy x*16+y
// x&&y <0,15>
//11110000=15*16
//00001111=15