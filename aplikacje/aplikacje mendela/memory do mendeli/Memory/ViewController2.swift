//
//  ViewController2.swift
//  Memory
//
//  Created by Tomczyk Wojciech on 24/09/2019.
//  Copyright © 2019 Tomczyk Wojciech. All rights reserved.
//

import UIKit

class ViewController2: UIViewController {
    var nazwyobrazkow:Array<String> = []
    var przyciski:Array<UIButton> = []
    var folderzobrazami:Array<UIImage> = []
    var trudnosc:Int!
    var pierwszy:UIButton!
    var drugi:UIButton!
    var kafelki:Int!
    override func viewDidLoad() {
        var aaa:Array<String> = []
        aaa.append("cabbage");aaa.append("carrot");aaa.append("cauli");aaa.append("ch-cabbage");aaa.append("corn")
        aaa.append("cucumber");aaa.append("eggplant");aaa.append("garlic");aaa.append("g-onion");aaa.append("g-pepper")
        aaa.append("ginger");aaa.append("j-radish");aaa.append("l-lettuce");aaa.append("lettuce");aaa.append("potato")
        aaa.append("red-onion");aaa.append("snowpea")
        super.viewDidLoad()
        let szerokosc:Int
        let wysokosc:Int
        let okno: CGRect = UIScreen.main.bounds
        let wysokosc2:Int = Int(okno.height) + 64
        let szerokosc2:Int = Int(okno.width)
        if(trudnosc == 1){
            wysokosc = 4
            szerokosc = 7
        }
        else {
            wysokosc = 3
            szerokosc = 4
        }
        kafelki = szerokosc * wysokosc / 2
        var bbb = aaa.prefix(szerokosc * wysokosc / 2)
        bbb = bbb + bbb
        var index:Int = 0
        let szerokosckafla:Int = szerokosc2 - ((szerokosc + 1) * 2)
        for a in 0...wysokosc-1 {
            for b in 0...szerokosc-1 {
                let przycisk : UIButton = UIButton()
                let obraz :UIImage = UIImage(named : "img/none.jpg")!
                let losowynumer = Int.random(in: 0 ... bbb.count - 1 )
                let srcobrazka :UIImage = UIImage(named : "img/" + bbb[losowynumer] + ".png")!
                let pozycja_szerokosc = szerokosckafla / wysokosc
                let wysokosckafla:Int = wysokosc * (pozycja_szerokosc + 2)
                let pozycja_wysokosc:Int = (wysokosc2  - wysokosckafla) / 2
                nazwyobrazkow.append(bbb[losowynumer])
                folderzobrazami.append(srcobrazka)
                bbb.remove(at: losowynumer)
                przycisk.frame = CGRect(x:4 + b * (pozycja_szerokosc + 2), y:pozycja_wysokosc + (pozycja_szerokosc + 2) * a, width: pozycja_szerokosc, height: pozycja_szerokosc)
                przycisk.tag = index
                przycisk.setBackgroundImage(obraz, for: UIControl.State.normal)
                self.view.addSubview(przycisk)
                przycisk.addTarget(self, action: #selector(handler), for: UIControl.Event.touchUpInside)
                przyciski.append(przycisk)
                index = index + 1
            }
        }
    }
    @objc func handler(sender: UIButton){
        print("clicked: ",sender.tag)
        sender.setBackgroundImage(folderzobrazami[sender.tag], for: UIControl.State.normal)
        sender.isEnabled = false
        if(pierwszy == nil){
            pierwszy = sender
        }
        else {
            drugi = sender
            if(nazwyobrazkow[pierwszy.tag] == nazwyobrazkow[drugi.tag]){
                kafelki -= 1
                pierwszy = nil
                drugi = nil
                print("matches: ", kafelki!)
                if(kafelki == 0){
                    print("gg")
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                        self.navigationController?.popToRootViewController(animated: true)
                    }
                }
            }
            else {
                let aa = pierwszy.tag
                let bb = drugi.tag
                pierwszy = nil
                drugi = nil
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    let img :UIImage = UIImage(named : "img/none.jpg")!
                    self.przyciski[aa].setBackgroundImage(img, for: UIControl.State.normal)
                    self.przyciski[bb].setBackgroundImage(img, for: UIControl.State.normal)
                    self.przyciski[aa].isEnabled = true
                    self.przyciski[bb].isEnabled = true
                }
            }
        }
    }

}
