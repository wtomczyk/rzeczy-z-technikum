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
    var liczenieruchow:Int! = 0
    var zwyciestwo:String! = ""
    var przegrana:String! = ""
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
        let szerokosckafla:Int = szerokosc2 / szerokosc
        print(szerokosc2)
        print(szerokosckafla)
        for a in 0...wysokosc-1 {
            for b in 0...szerokosc-1 {
                let przycisk : UIButton = UIButton()
                let obraz :UIImage = UIImage(named : "img/none.jpg")!
                let losowynumer = Int.random(in: 0 ... bbb.count - 1 )
                let srcobrazka :UIImage = UIImage(named : "img/" + bbb[losowynumer] + ".png")!
                let pozycja_szerokosc = szerokosckafla
                let wysokosckafla:Int = wysokosc * (pozycja_szerokosc + 2)
                let pozycja_wysokosc:Int = (wysokosc2  - wysokosckafla) / 2
                nazwyobrazkow.append(bbb[losowynumer])
                folderzobrazami.append(srcobrazka)
                bbb.remove(at: losowynumer)
                przycisk.frame = CGRect(x:4 + b * (pozycja_szerokosc), y:pozycja_wysokosc + (pozycja_szerokosc) * a, width: pozycja_szerokosc, height: pozycja_szerokosc)
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
        print(sender.tag)
        sender.setBackgroundImage(folderzobrazami[sender.tag], for: UIControl.State.normal)
        sender.isEnabled = false
        if(pierwszy == nil){
            pierwszy = sender
        }
        else {
            drugi = sender
            if(nazwyobrazkow[pierwszy.tag] == nazwyobrazkow[drugi.tag]){
                kafelki -= 1
                pierwszy.removeFromSuperview()
                drugi.removeFromSuperview()
                pierwszy = nil
                drugi = nil
                print(kafelki!)
                if(kafelki == 0){
                    zwyciestwo = "wygrana"
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
                    if(self.przegrana != "tak"){
                        let img :UIImage = UIImage(named : "img/none.jpg")!
                        self.przyciski[aa].setBackgroundImage(img, for: UIControl.State.normal)
                        self.przyciski[bb].setBackgroundImage(img, for: UIControl.State.normal)
                        self.przyciski[aa].isEnabled = true
                        self.przyciski[bb].isEnabled = true
                    }
                }
            }
        }
        liczenieruchow += 1
        if (liczenieruchow == Int(10 * kafelki)){
            if(zwyciestwo != "wygrana"){
                liczenieruchow = 0
                print("rip")
                przegrana = "tak"
                for a in 0...przyciski.count-1 {
                    print("a")
                    let img :UIImage = UIImage(named : "img/none.jpg")!
                    przyciski[a].isEnabled = false
                    przyciski[a].setBackgroundImage(img, for: UIControl.State.normal)
                }
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    //self.navigationController?.popToRootViewController(animated: true)
                let alert = UIAlertController(title: "Przegrałeś", message: "Za dużo ruchów wykonałeś.", preferredStyle: .alert)
                
                    alert.addAction(UIAlertAction(title: "Powrót", style: .default, handler: { action in
                        self.navigationController?.popToRootViewController(animated: true)
                    }))
                    alert.addAction(UIAlertAction(title: "Zostań", style: .cancel, handler: { action in
                        print("aa")
                    }))
                
                self.present(alert, animated: true)
                }
                /*
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    self.navigationController?.popToRootViewController(animated: true)
                }*/
            }
        }
    }

}
