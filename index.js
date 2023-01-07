var screen = /** @type {HTMLCanvasElement} */ document.getElementById("screen");
var ctx = /** @type {CanvasRenderingContext2D} */ screen.getContext("2d");
var selected = 0;
var s_colors = true;
var s_pallet = false;
var s_pixels = true
//dark os functions
function style(s){
    switch (s){
        case "b":
            ctx.fillStyle = "black"
        break;
        case "w":
            ctx.fillStyle = "white"
        break;
        case "g":
            ctx.fillStyle = "green"
        break;
        default:
            ctx.fillStyle = s;
    }
}
function draw(obj,xs,ys,dx,dy,size){
    var sx = dx/size;
    var sy = dy/size;
    for(var ix = 0;ix<size;ix++){
        for(var iy = 0;iy<size;iy++){
            style(obj[ix][iy]);
            if(obj[ix][iy]!=t)ctx.fillRect(ys+(sy*iy),xs+(sx*ix),sx,sy);
        }
    }
}
function printLine(text,xs,ys,fsize = 50){
    var sindex = 0;
    for(var i = 0;i<text.length;i++){
        if(text.charAt(i)==" ")sindex +=fsize/2
        letter(text.charAt(i),ys,xs+((fsize+fsize/10)*i-sindex),fsize,fsize)
    }
}
function letter(l,xs,ys,dx=100,dy=100){
    switch (l.toLowerCase()){
        case "a":
            draw([[t,t,c,t,t],[t,c,t,c,t],[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "b":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "c":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "d":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t],[c,t,t,c,t],[c,c,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "e":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "f":
            draw([[c,c,c,c,t],[c,t,t,t,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "g":
            draw([[t,c,c,c,t],[c,t,t,t,t],[c,t,t,c,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "h":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,c,c,c,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "i":
            draw([[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "j":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,t,c,t],[t,c,t,c,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "k":
            draw([[t,c,t,t,c],[t,c,t,c,t],[t,c,c,t,t],[t,c,t,c,t],[t,c,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "l":
            draw([[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,t,t,t],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "m":
            draw([[c,t,t,t,c],[c,c,t,c,c],[c,t,c,t,c],[c,t,t,t,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "n":
            draw([[c,t,t,t,c],[c,c,t,t,c],[c,t,c,t,c],[c,t,t,c,c],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case "o":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "p":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,t,t],[c,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "r":
            draw([[c,c,c,t,t],[c,t,t,c,t],[c,c,c,t,t],[c,t,t,c,t],[c,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "s":
            draw([[t,c,c,c,t],[c,t,t,t,t],[t,c,c,c,t],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "t":
            draw([[c,c,c,c,c],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "u":
            draw([[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "w":
            draw([[c,t,t,t,c],[c,t,t,t,c],[t,c,t,c,t],[t,c,c,c,t],[t,c,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "y":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "z":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "x":
            draw([[c,t,t,t,c],[t,c,t,c,t],[t,t,c,t,t],[t,c,t,c,t],[c,t,t,t,c]], xs, ys, dx, dy ,5)
        break;
        case ".":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ",":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case ":":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,c,t,t],[t,t,t,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "-":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,c,c,c,t],[t,t,t,t,t],[t,t,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "_":
            draw([[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[t,t,t,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "/":
            draw([[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,c,t,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "(":
            draw([[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case ")":
            draw([[t,c,t,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t],[t,c,t,t,t]], xs, ys, dx, dy ,5)
        break;
        case "1":
            draw([[t,t,c,t,t],[t,c,c,t,t],[c,t,c,t,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "2":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[t,t,c,t,t],[c,c,c,c,c]], xs, ys, dx, dy ,5)
        break;
        case "3":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,t,t,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "4":
            draw([[t,t,t,c,t],[t,t,c,c,t],[t,c,t,c,t],[c,c,c,c,c],[t,t,t,c,t]], xs, ys, dx, dy ,5)
        break;
        case "5":
            draw([[c,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[t,t,t,t,c],[c,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "6":
            draw([[t,c,c,c,c],[c,t,t,t,t],[c,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "7":
            draw([[c,c,c,c,c],[t,t,t,c,t],[t,t,t,c,t],[t,t,c,t,t],[t,t,c,t,t]], xs, ys, dx, dy ,5)
        break;
        case "8":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "9":
            draw([[t,c,c,c,t],[c,t,t,t,c],[t,c,c,c,c],[t,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
        case "0":
            draw([[t,c,c,c,t],[c,t,t,t,c],[c,t,t,t,c],[c,t,t,t,c],[t,c,c,c,t]], xs, ys, dx, dy ,5)
        break;
    }
}
//dark os variables
const c = "black";
const t = "white";
const susMinus = [[t,t,t,t,t],[t,t,t,t,t],[t,c,c,c,t],[t,t,t,t,t],[t,t,t,t,t]]
const susPlus = [[t,t,t,t,t],[t,t,c,t,t],[t,c,c,c,t],[t,t,c,t,t],[t,t,t,t,t]]
//core class
class color{
    r;
    g;
    b;
    constructor(rgb=0){
        let r = (rgb >> 11) & 0x1f;
        let g = (rgb >> 5) & 0x3f;
        let b = rgb & 0x1f;

        this.r = (r << 3) | (r >> 2);
        this.g = (g << 2) | (g >> 4);
        this.b = (b << 3) | (b >> 2);
    };
    static fromRGB(r,g,b){
        let out = new color;
        out.r = r;
        out.g = g;
        out.b = b;
        return out;
    }
    int16toColor(rgb){
        let r = (rgb >> 11) & 0x1f;
        let g = (rgb >> 5) & 0x3f;
        let b = rgb & 0x1f;

        this.r = (r << 3) | (r >> 2);
        this.g = (g << 2) | (g >> 4);
        this.b = (b << 3) | (b >> 2);
    }
    static fromHex(hex){
            let int = parseInt(hex.substring(1), 16);
            let r = (int >> 16) & 255;
            let g = (int >> 8) & 255;
            let b = int & 255;
            let out = new color
            out.r = r;
            out.g = g;
            out.b = b;
            return out;
    }
    GetRGB565() {
        return (((this.b & 0b11111000)<<8) + ((this.r & 0b11111100)<<3) + (this.g>>3));
    }
    GetHex() {
        return "#" + ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1);
    }
}

class PBI {
    height = 0;
    width = 0;
    pallet = [new color()]
    pixels = [0]
    constructor(height, width, pallet=undefined, pixels=undefined) {
        this.height = height;
        this.width = width;
        if(pallet==undefined){
            for(var i = 0;i<height*width;i++){
                this.pixels[i] = 0;
            }
            for(var i = 0;i<15;i++){
                this.pallet[i] = new color(0)
            }
        }else{
            this.pallet = pallet;
            this.pixels = pixels;
        }
        
    }
    static fromBuffer(buffer) {
        const view = new DataView(buffer);
        const height = view.getUint16(0);
        const width = view.getUint16(2);
        const pallet = [];
        for (let i = 0; i < 15; i++) {
          pallet.push(view.getUint16(4 + i * 2));
        }
        const pixels = [];
        for (let i = 0; i < height * width; i++) {
          pixels.push(view.getInt8(30 + Math.floor(i / 2)) >> (4 * (i % 2)) & 0x0F);
        }
        return new PBI(height, width, pallet, pixels);
    }
    toBuffer(){
        const buffer = new ArrayBuffer(30 + Math.ceil(this.height * this.width / 2));
        const view = new DataView(buffer);
        view.setUint16(0, this.height);
        view.setUint16(2, this.width);
        for (let i = 0; i < 15; i++) {
        view.setUint16(4 + i * 2, this.pallet[i]);
        }
        for (let i = 0; i < this.height * this.width; i++) {
        const value = this.pixels[i];
        if (i % 2 === 0) {
            view.setInt8(30 + Math.floor(i / 2), value << 4);
        } else {
            view.setInt8(30 + Math.floor(i / 2), view.getInt8(30 + Math.floor(i / 2)) | value);
        }
        }
        console.log(buffer)
        return buffer;
    }
    dumpMeThis(){
        var out = "{";
        //F -> 1111
        //uint4 15 0000
        //uint8 255 00001111
        //uint16 
        //size
        out += ((this.height)&0x00FF) + ',' + ((this.height)>>8);
        out += ',' + ((this.width)&0x00FF) + ',' + ((this.width)>>8);
        for(var i = 0;i<15;i++){
            out += ',' + ((this.pallet[i].GetRGB565())&0x00FF) + ',' + ((this.pallet[i].GetRGB565())>>8);
        }
        var p1;
        var p2;
        for(var i = 0;i<Math.floor((this.height*this.width)/2);i++){
            p1 = this.pixels[(i*2)];
            p2 = this.pixels[(i*2)+1]; 
            out += ',' + ((p1<<4)|p2);
        }
        out += '}';
        return out;
    }
    setWidth(w){
        var newPix = [];
        for(var ix = 0;ix<w;ix++){
            for(var iy = 0;iy<this.height;iy++){
                //y*this.width+x
                if(ix>this.width) newPix[iy*this.width+ix] = 0;
                else newPix[iy*w+ix] = this.pixels[iy*this.width+ix]
            }
        }
        this.width = w;
        this.pixels = newPix;
    }
    setHeight(h){
        var newPix = [];
        for(var ix = 0;ix<this.width;ix++){
            for(var iy = 0;iy<h;iy++){
                //y*this.width+x
                if(iy>this.height) newPix[iy*this.width+ix] = 0;
                else newPix[iy*this.width+ix] = this.pixels[iy*this.width+ix]
            }
        }
        this.height = h;
        this.pixels = newPix;
    }
    setPixel(x,y,id){
        if(id>16||id<0||x<0||y<0||x>=this.width||y>=this.height)return;
        //console.log("ustawiono")
        this.pixels[y*this.width+x] = id;
    }
    getColor(x,y){
        let id = this.pixels[y*this.width+x];
        if(id==0)return undefined;
        if(id>16||id<1)return undefined;
        return this.pallet[id-1];
    }
    setPallet(id = 0,c = new color()){
        if(id>15||id<0)return;
        this.pallet[id] = c;
        return c;
    }
}
  
var img = new PBI(16,16)

const screens = {
    grid : "gr",
    colorpallet : "cp",
    settings : "st"
}
var mdown = false;
screen.addEventListener("mousedown",(ev)=>{
    let data = getClickPosition(screen,ev);
    mdown = true;
    ctick = 0;
    clicked(data.x,data.y)
})
document.addEventListener("mousemove",ev=>{
    if(mdown){
        let data = getClickPosition(screen,ev);
        clicked(data.x,data.y)
    }
})
document.addEventListener("mouseup",()=>{
    mdown = false;
})

function getClickPosition(canvas, event) {
    const rect = canvas.getBoundingClientRect();
    //console.log(canvas);
    const x = Math.round(((event.clientX - rect.left)/(rect.right-rect.left))*screen.width);
    const y = Math.round(((event.clientY - rect.top)/(rect.bottom-rect.top))*screen.height);
    return { x,y };
}

function isInside(x,y,Bx,By,ow,oh){
    var Bx2 = Bx+ow;
    var By2 = By+oh;
    //console.log([x>Bx,x<Bx,y>By,y<By2,Bx,By,Bx2,By2,ow,oh])
    if(x>Bx&&x<Bx2&&y>By&&y<By2)return true;
    else return false;

}
function clicked(x,y){
    //color selector
    if(s_colors){
        //img.width*10/8
        //img.height*10
        for(var i = 0;i<8;i++){
            if(isInside(x,y,(img.width*10/8)*i,img.height*10,(img.width*10)/8,50)){
                selected = i;
            }
            if(isInside(x,y,(img.width*10/8)*i,img.height*10+50,img.width*10/8,50)){
                selected = 8+i;
            }
        }
    }
    //pixel editor
    if(s_pixels){
        if(isInside(x,y,0,0,img.width*10,img.height*10)){
            for(var ix = 0;ix<img.width;ix++){
                for(var iy = 0;iy<img.height;iy++){
                    if(isInside(x,y,ix*10,iy*10,10,10)){
                        img.setPixel(ix,iy,selected);
                    }
                }
            }
        }
    }
    //pallet
    if(s_pallet){
        const totS = img.width*10
        const jump = totS/8;
        //colors
        const colors = ['r','g','b']
        const modif = [1,10,0,-10,-1];
        for(var col = 0;col<3;col++){
            for(var mod = 0;mod<5;mod++){
                if(isInside(x,y,jump*mod,jump*col,jump,jump)){
                    img.pallet[selected-1][colors[col]]+=modif[mod]
                    if(img.pallet[selected-1][colors[col]]>255) img.pallet[selected-1][colors[col]]=255;
                    if(img.pallet[selected-1][colors[col]]<0) img.pallet[selected-1][colors[col]]=0;
                }
            }
        }
        //size
        if(isInside(x,y,jump*0,jump*3,jump,jump)){
            setHeight(img.height+1);
        }
        if(isInside(x,y,jump*1,jump*3,jump,jump)){
            setHeight(img.height-1);
        }
        if(isInside(x,y,jump*0,jump*4,jump,jump)){
            setWidth(img.width+1);
        }
        if(isInside(x,y,jump*1,jump*4,jump,jump)){
            setWidth(img.width-1);
        }
        if(isInside(x,y,jump*0,jump*5,jump,jump)){
            navigator.clipboard.readText().then(t=>{
                img.pallet[selected-1] = color.fromHex(t)
            }).catch(e=>{
                //alert("nie mam dostępu do twojego schowka")
            })
            
        }
        
        
    }
    if(isInside(x,y,0,img.height*10+100,img.width*10,10)){
        toggleMode()
    }
    
}

function toggleMode(){
    s_pixels = !s_pixels
    s_pallet = !s_pallet
}
function setHeight(h){
    img.setHeight(h)
    resizeCnv()
}
function setWidth(w){
    img.setWidth(w)
    resizeCnv()
}
function resizeCnv(){
    screen.width = img.width*10;
    screen.height = img.height*10+110;
}

function frame(){
    ctx.fillStyle = "white";
    ctx.fillRect(0,0,1000,1000);
    //color picker

    //image
    if(s_pixels){
        var c;
        for(var ih = 0;ih<img.height;ih++){
            for(var iw = 0;iw<img.width;iw++){
                c = img.getColor(iw,ih);
                if(c==undefined)continue;
                ctx.fillStyle = c.GetHex();
                ctx.fillRect(iw*10,ih*10,10,10);
                //console.log("drukuje "+c.GetHex())
            }
        } 
    }
    //colors
    if(s_colors){
        ctx.fillStyle = "gray";
        ctx.fillRect(0,img.height*10,img.width*10/8,50);
        for(var i = 1;i<8;i++){
            ctx.fillStyle = img.pallet[i-1].GetHex()
            ctx.fillRect((img.width*10/8)*i,img.height*10,img.width*10/8,50);
        }
        for(var i = 7;i<15;i++){
            ctx.fillStyle = img.pallet[i].GetHex()
            ctx.fillRect((img.width*10/8)*(i-7),(img.height*10)+50,img.width*10/8,50);
        }
        if(selected==0){
            c = new color()
            c.r=150;
            c.g=150;
            c.b=150;
        }else{
            c = new color();
            c.r = 255-img.pallet[selected-1].r;
            c.g = 255-img.pallet[selected-1].g;
            c.b = 255-img.pallet[selected-1].b;
        }
        if(selected<=7){
            var b_x = (img.width*10/8)*selected
            var b_y = img.height*10
        }else{
            var b_x = (img.width*10/8)*(selected-8)
            var b_y = img.height*10+50
        }
        ctx.fillStyle = c.GetHex();
        ctx.fillRect(b_x,b_y+40,(img.width*10/8),10)
    }
    //pallet
    if(s_pallet){
        const totS = img.width*10
        const jump = totS/8;
        //susplus i susminus
        draw(susPlus,0,0,jump,jump,5)
        draw(susPlus,0,jump,jump,jump,5)
        draw(susPlus,jump,0,jump,jump,5)
        draw(susPlus,jump,jump,jump,jump,5)
        draw(susPlus,jump*2,0,jump,jump,5)
        draw(susPlus,jump*2,jump,jump,jump,5)
        draw(susMinus,0,jump*3,jump,jump,5)
        draw(susMinus,0,jump*4,jump,jump,5)
        draw(susMinus,jump,jump*3,jump,jump,5)
        draw(susMinus,jump,jump*4,jump,jump,5)
        draw(susMinus,jump*2,jump*3,jump,jump,5)
        draw(susMinus,jump*2,jump*4,jump,jump,5)
        //size
        draw(susPlus,jump*3,0,jump,jump,5)
        draw(susMinus,jump*3,jump,jump,jump,5)
        letter('h',jump*3,jump*2,jump,jump)
        printLine(img.height.toString(),jump*3,jump*3,jump)
        draw(susPlus,jump*4,0,jump,jump,5)
        draw(susMinus,jump*4,jump,jump,jump,5)
        letter('w',jump*4,jump*2,jump,jump)
        printLine(img.width.toString(),jump*3,jump*4,jump)
        letter('s',jump*5,jump*0,jump,jump)
        //liczby
        //debugger
        if(selected==0)selected = 1;
        printLine(img.pallet[selected-1].r.toString(),jump*5,0,jump)
        printLine(img.pallet[selected-1].g.toString(),jump*5,jump,jump)
        printLine(img.pallet[selected-1].b.toString(),jump*5,jump*2,jump)
        //colors
        ctx.fillStyle = "red";
        ctx.fillRect(jump*2,0,jump,jump)
        ctx.fillStyle = "green";
        ctx.fillRect(jump*2,jump,jump,jump)
        ctx.fillStyle = "blue";
        ctx.fillRect(jump*2,jump*2,jump,jump)
        //console.log("hi")
    }
    
}



function rgb565ToHex(rgb) {
    let r = (rgb >> 11) & 0x1f;
    let g = (rgb >> 5) & 0x3f;
    let b = rgb & 0x1f;

    r = (r << 3) | (r >> 2);
    g = (g << 2) | (g >> 4);
    b = (b << 3) | (b >> 2);

    return "#" + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
}

function doSchowka(text){
    navigator.clipboard.writeText(text).then(function() {
        alert('skopiowano');
    }, function(err) {
        alert('nie skopiowano', err);
    });
}

setInterval(frame, 16);
resizeCnv()