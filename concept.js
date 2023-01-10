class bitTerWriter{
    data = [0];
    reg = [true];
    p = 0;
    sout = "";
    constructor(){
        this.clear()
    }
    regTobit8(){
        var out = 0;
        this.reg.forEach(b=>{
            out<<=1;
            out|=!!b;
        })
        return out;
    }
    fillUp(){
        while(this.p!=0){
            this.put(false);
        }
    }
    put(bool){
        if(bool)this.sout+="1";
        else this.sout+="0";
        this.reg[this.p] = !!bool;
        if(this.p==8){
            this.p = 0;
            this.data.push(this.regTo8bit());
        }
    }
    clearReg(){
        for(var i = 0;i<8;i++){
            this.reg[i] = false;
        }
    }
    clear(){
        this.data = [];
        this.p = 0;
        this.sout = "";
        this.clearReg();
    }
    writeDvalue(val){
        if(val<=0)throw "um no no no";
        this.put(false);
        for(var i = 1;i<val;i++){
            this.put(true);
        }
    }
    writeSvalue(val,size){
        for(var i = 0;i<size;i++){
            this.put(!!((val>>size-(i+1))&1))
        }
    }
    export(){
        console.log(this.sout);
        this.fillUp();
        return this.data;
    }
}
class bitTerReader{
    data = [0]
    reg = [false];
    p = 0;//place
    r = 0;//register
    constructor(data){
        this.set(data);
    }
    set(data){
        this.data = data;
        this.r = 0;
        this.p = 0;
        this.bit8ToReg();
    }
    getNext(){
        var out = reg[p];
        p++;
        if(p==8){
            p=0;
            this.r++;
            //to finish
        }
    }
    readDvalue(){

    }
    readSvalue(size){

    }
    bit8ToReg(){
        var data = this.data[this.r]
        for(var i = 0;i<8;i++){
            reg[i] = ((data>>(7-i))&1);
        }
    }
    reset(){

    }
}
function getSmallestBitCount(val){
    val++;
    var max = 2;
    var ts = 1;
    while(max<val){
        max*=2;
        ts++;
    }
    return ts;
}

var tst = new bitTerWriter();

tst.writeDvalue(4)
tst.export();