//
//  ViewController1.swift
//  Memory
//
//  Created by Tomczyk Wojciech on 24/09/2019.
//  Copyright © 2019 Tomczyk Wojciech. All rights reserved.
//

import UIKit

class ViewController1: UIViewController {
    
    var trudnosc:Int! = 0
    override func viewDidLoad() {
        super.viewDidLoad()
    }
    @IBOutlet weak var select: UISegmentedControl!
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        let cel = segue.destination as! ViewController2
        if select.selectedSegmentIndex == 0{
            cel.trudnosc = 0
        }
        else {
            cel.trudnosc = 1
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
