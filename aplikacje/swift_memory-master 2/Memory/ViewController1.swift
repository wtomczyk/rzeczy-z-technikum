//
//  ViewController1.swift
//  Memory
//
//  Created by Mikołajczyk Grzegorz on 24/09/2019.
//  Copyright © 2019 Mikołajczyk Grzegorz. All rights reserved.
//

import UIKit

class ViewController1: UIViewController {
    
    var hard:Bool! = false

    override func viewDidLoad() {
        super.viewDidLoad()

        // Do any additional setup after loading the view.
    }
    
    @IBOutlet weak var select: UISegmentedControl!
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let dest = segue.destination as! ViewController2
        if select.selectedSegmentIndex == 0{
            dest.hard = false
        }
        else {
            dest.hard = true
        }
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
