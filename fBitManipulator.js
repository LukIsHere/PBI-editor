//written by me luk form github
//my glaceon(rubber duck substitute)
//zoz helped too in this project
//no touchy touchy this credits
////////////////////////////////

//bit manipulation classes
class bitTerWriter{
    reg = [true];
    point = 0;
    colomn = 0;
    array = [0];
    constructor(){
        this.clear();
    }
    clear(){
        //to-do
    }
    addDbit(value){//111111110
        //to-do
    }
    addSbit(size,value){//01101001
        //to-do
    }
    fillUp(){
        //to-do
    }
    getArray(array){
        //to-do
    }
}

class bitTerReader{
    reg = [true];
    point = 0;
    colomn = 0;
    array = [0];
    constructor(){
        this.goBeganing()
    }
    goBeganing(){
        //to-do
    }
    setArray(){
        //to-do
    };
    readDbit(){//111111110
        //to-do
    }
    readSbit(size){//01101001
        //to-do
    }
}
var uint4Functions ={
    //compression functions uint4 array to uint8 array
    uint4ArrayToRleBit:function(array=[0]){
        //to-do
    },
    uint4ArrayToRle4:function(array=[0]){
        //to-do
    },
    uint4ArrayToHtree:function(array=[0]){
        //to-do
    },
    uint4ArrayToRleHtree:function(array=[0]){
        //to-do
    },
    //decompression functions uint8 array to uint4 array
    rleBiToUint4ArrayT:function(array=[0]){
        //to-do
    },
    rle4Touint4Array:function(array=[0]){
        //to-do
    },
    htreeToUint4Array:function(array=[0]){
        //to-do
    },
    rleHtreeToUint4Array:function(array=[0]){
        //to-do
    },
    //debgging functions
    printBinary:function(array=[0]){
        //to-do
    }
}


export {bitTerReader,bitTerWriter,uint4Functions}