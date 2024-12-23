//
//  ViewController2.swift
//  nazwa_aplikacji
//
//  Created by Tomczyk Wojciech on 17/09/2019.
//  Copyright © 2019 Tomczyk Wojciech. All rights reserved.
//

import UIKit

class ViewController2: UIViewController {

    @IBOutlet weak var button: UIButton!
    @IBOutlet weak var txt: UITextField!
    override func viewDidLoad() {
        super.viewDidLoad()
        txt.text="a"
        
        // Do any additional setup after loading the view.
    }
    

    @IBAction func button2(_ sender: Any) {
        txt.text="aaaaaaaa"
    }
    /*
    // MARK: - Navigation

    // In a storyboard-based application, you will often want to do a little preparation before navigation
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        // Get the new view controller using segue.destination.
        // Pass the selected object to the new view controller.
    }
    */

}
