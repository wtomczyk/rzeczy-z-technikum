//
//  ViewController.swift
//  aaaaaaaa
//
//  Created by Tomczyk Wojciech on 17/09/2019.
//  Copyright © 2019 Tomczyk Wojciech. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    @IBOutlet weak var aaaaa: UILabel!
    @IBOutlet weak var kg: UITextField!
    @IBOutlet weak var m: UITextField!
    @IBOutlet weak var wynik: UITextField!
    @IBOutlet weak var obraz: UIImageView!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view.
    }

    @IBAction func button(_ sender: Any) {
        if(kg.text != "" && m.text != ""){
            let aa = Double(kg.text!)
            let bb = Double(m.text!)
            aaaaa.text = String(aa! / (bb! * bb!))
            print(bb)
            let a = Int((aa! / (bb! * bb!)))
       
            if(a <= Int(18.5)){
                obraz.image = #imageLiteral(resourceName: "obrazki")
            }
            else if(a > Int(25)){
                obraz.image = #imageLiteral(resourceName: "obrazki2")
            }
            else{
                 obraz.image = #imageLiteral(resourceName: "obrazki3")
            }
        }
    }
    
}

