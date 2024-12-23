//
//  ViewController2.swift
//  Memory
//
//  Created by Mikołajczyk Grzegorz on 24/09/2019.
//  Copyright © 2019 Mikołajczyk Grzegorz. All rights reserved.
//

import UIKit

class ViewController2: UIViewController {

    var hard:Bool!
    var selected1:UIButton!
    var selected2:UIButton!
    var imgSources:Array<UIImage> = []
    var uiButtons:Array<UIButton> = []
    var imgNames:Array<String> = []
    var matches:Int!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        let width:Int
        let heigth:Int
        if(hard){
            width = 7
            heigth = 4
        }
        else {
            width = 4
            heigth = 3
        }
        
        matches = width * heigth / 2
        
        let screenSize: CGRect = UIScreen.main.bounds
        
        var obrazkiAll:Array<String> = []
            obrazkiAll.append("cabbage")
            obrazkiAll.append("carrot")
            obrazkiAll.append("cauli")
            obrazkiAll.append("ch-cabbage")
            obrazkiAll.append("corn")
            obrazkiAll.append("cucumber")
            obrazkiAll.append("eggplant")
            obrazkiAll.append("garlic")
            obrazkiAll.append("g-onion")
            obrazkiAll.append("g-pepper")
            obrazkiAll.append("ginger")
            obrazkiAll.append("j-radish")
            obrazkiAll.append("l-lettuce")
            obrazkiAll.append("lettuce")
            obrazkiAll.append("potato")
            obrazkiAll.append("red-onion")
            obrazkiAll.append("snowpea")
        
        var obrazki = obrazkiAll.prefix(width * heigth / 2)
        obrazki = obrazki + obrazki
        
        var index:Int = 0
        let scrh:Int = Int(screenSize.height) + 64
        let scrw:Int = Int(screenSize.width)
        let blockw:Int = scrw - ((width + 1) * 2)
        for h in 0...heigth-1 {
            for w in 0...width-1 {
                let button : UIButton = UIButton()
                let img :UIImage = UIImage(named : "img/none.jpg")!
                let rand = Int.random(in: 0 ... obrazki.count - 1 )
                let img2 :UIImage = UIImage(named : "img/" + obrazki[rand] + ".png")!
                imgNames.append(obrazki[rand])
                imgSources.append(img2)
                obrazki.remove(at: rand)
                let wpos = blockw / width
                let blockh:Int = heigth * (wpos + 2)
                let hpos:Int = (scrh  - blockh) / 2
                button.frame = CGRect(x:4 + w * (wpos + 2), y:hpos + (wpos + 2) * h, width: wpos, height: wpos) // rozmiar i punkt wstwienia
                button.tag = index //mozna dodac liczbowy tag
                button.setBackgroundImage(img, for: UIControl.State.normal) // dodanie tła
                self.view.addSubview(button) //dodanie buttona do widoku
                button.addTarget(self, action: #selector(handler), for: UIControl.Event.touchUpInside)
                uiButtons.append(button)
                index = index + 1
            }
        }
    }
    @objc func handler(sender: UIButton){
        print("clicked: ",sender.tag)
        sender.setBackgroundImage(imgSources[sender.tag], for: UIControl.State.normal)
        sender.isEnabled = false
        if(selected1 == nil){
            selected1 = sender
        }
        else {
            selected2 = sender
            if(imgNames[selected1.tag] == imgNames[selected2.tag]){
                matches = matches - 1
                selected1 = nil
                selected2 = nil
                print("matched!")
                print("matches: ", matches!)
                if(matches == 0){
                    print("victory!")
                    DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                        self.navigationController?.popToRootViewController(animated: true)
                    }
                }
            }
            else {
                print("nope!")
                let s1 = selected1.tag
                let s2 = selected2.tag
                selected1 = nil
                selected2 = nil
                DispatchQueue.main.asyncAfter(deadline: .now() + 0.5) {
                    let img :UIImage = UIImage(named : "img/none.jpg")!
                    self.uiButtons[s1].setBackgroundImage(img, for: UIControl.State.normal)
                    self.uiButtons[s2].setBackgroundImage(img, for: UIControl.State.normal)
                    self.uiButtons[s1].isEnabled = true
                    self.uiButtons[s2].isEnabled = true
                }
            }
        }
    }

}
