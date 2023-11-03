//
//  FutureViewControl.swift
//  Weather
//
//  Created by LianJun on 2023/10/30.
//

import UIKit

class FutureViewController: UIViewController {
    @IBOutlet weak var scrollView: UIScrollView!
    
    @IBOutlet weak var projectTitle: UILabel!
    
    @IBOutlet weak var realtimeLabel: UILabel!
    @IBOutlet weak var realtimeData: UILabel!
    
    @IBOutlet weak var futureTitle: UILabel!
    @IBOutlet weak var futureTime1: UILabel!
    @IBOutlet weak var futureData1: UILabel!
    @IBOutlet weak var futureTime2: UILabel!
    @IBOutlet weak var futureData2: UILabel!
    @IBOutlet weak var futureTime3: UILabel!
    @IBOutlet weak var futureData3: UILabel!
    @IBOutlet weak var futureTime4: UILabel!
    @IBOutlet weak var futureData4: UILabel!
    @IBOutlet weak var futureTime5: UILabel!
    @IBOutlet weak var futureData5: UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        
        self.controlUpdate()
        self.DataUpdate()
    }
    
    func controlUpdate() {
        scrollView.contentSize.height = 900
        scrollView.showsVerticalScrollIndicator = false
        
        self.realtimeData.layer.cornerRadius = 15
        self.realtimeData.layer.masksToBounds = true
        self.realtimeData.backgroundColor = contentColor
        
        let futurnDataArray = [futureData1, futureData2, futureData3, futureData4, futureData5]
        for element in futurnDataArray {
            element?.layer.cornerRadius = 15
            element?.layer.masksToBounds = true
            element?.backgroundColor = contentColor
        }
    }
    
    func DataUpdate() {
        self.projectTitle.text = projectText
        self.realtimeLabel.text = "今日的\(projectText)"
        self.realtimeData.text = "   \(projectInfo)"
        
        let futurnTimeArray = [futureTime1, futureTime2, futureTime3, futureTime4, futureTime5]
        for (index, element) in futurnTimeArray.enumerated() {
            element?.text = "   \(weatherData?.result?.future?[index].date ?? "未知")"
        }
        
        let futurnDataArray = [futureData1, futureData2, futureData3, futureData4, futureData5]
        for (index, element) in futurnDataArray.enumerated() {
            switch projectText {
            case "温度":
                self.futureTitle.text = "未来五日的温度范围"
                element?.text = "   \(weatherData?.result?.future?[index].temperature ?? "未知")"
            case "天气情况":
                self.futureTitle.text = "未来五日的天气情况"
                element?.text = "   \(weatherData?.result?.future?[index].weather ?? "未知")"
            case "Wid":
                self.futureTitle.text = "未来五日的昼夜Wid"
                element?.text = "   白天：\( weatherData?.result?.future?[index].wid?.day ?? "未知")，夜间：\(weatherData?.result?.future?[index].wid?.night ?? "未知")"
            case "风向":
                self.futureTitle.text = "未来五日的风向"
                element?.text = "   \(weatherData?.result?.future?[index].direct ?? "未知")"
            default:
                self.futureTitle.text = "未来五日的\(projectText)"
                element?.text = "   该项目暂不支持未来五日数据"
            }
        }
    }
}
