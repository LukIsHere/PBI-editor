//type,size,pallet,data
#include "llcd.hpp"
#include <iostream>
#include <string>
#include "scenes.hpp"
#include "window.hpp"
#include "data.hpp"

struct pixelColor
{
    int col:4;//0-16
};

color pallet[15] = {0};

pixelColor** pixels;

int seleted = 0;

int main(){
    int h=14,w=14;
    // std::cout << "wysokość" << std::endl;
    // std::cin >> h;
    // std::cout << "szerokość" << std::endl;
    // std::cin >> w;
    //alocating pixels
    pixels = new pixelColor*[h];
    for(int i = 0; i < h; i++){
        pixels[i] = new pixelColor[w];
        for(int j = 0; j < w; j++){
            pixels[i][j].col = 0;
        }
    }
    int Ww = w*8;
    if(Ww<100){
        Ww = 100;
    }
    int Wh = h*8+100;
    llcd::llcd pbi(Wh,Ww,"pbi editor");
    llcd::windows::windowMenager wm(llcd::RGB565(0,0,255));
    auto wi = llcd::getSimpleWindow(0,0,w*8,h*8,[&](llcd::windows::window& window,llcd::ctx& kontekst){
        for(int ix = 0;ix<w;ix++){
            for(int iy = 0;iy<h;iy++){
                int col = pixels[iy][ix].col;
                if(col==0)kontekst.fillRect(ix*8,iy*8,8,8,llcd::RGB565(255,255,255));
                else kontekst.fillRect(ix*8,iy*8,8,8,pallet[col-1]);
            }
        }
    });
    wi.eventHandler.addMouseDownListener([&](llcd::vector2D pos,bool l,llcd::ctx& kontekst){
        pos.x = (pos.x-(pos.x%8))/8;
        pos.y = (pos.y-(pos.y%8))/8;
        pixels[pos.y][pos.x].col = 1;
    });
    pbi.addExitListener([&](){
        llcd::data::PbWriter out;
        //metadata
        out.writeStatic(0,16);//we will need that later
        //size
        out.writeStatic(h,16);
        out.writeStatic(w,16);
        //pallet
        for(int i = 0;i<15;i++){
            out.writeStatic(pallet[i],16);
        }
        //pixels
        for(int i = 0;i<h;i++){
            for(int j = 0;j<w;j++){
                out.writeStatic(pixels[i][j].col,4);
            }
        }
        out.exportData().save("test.pbi");
        return true;
    });
    llcd::data::PbWriter danel;
    for(int i = 0;i<10;i++){
        danel.writeStatic(i,8);
    }
    danel.exportData().save("text.bin");
    llcd::data::dataArray teest("text.bin");
    uint8_t b = teest[1];
    std::cout << "to :" << b*1 << std::endl;
    wm.addWindow(wi);
    pbi.addScene(wm.getScene());
    pbi.start();
}