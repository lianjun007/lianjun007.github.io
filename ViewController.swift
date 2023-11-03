//
//  ViewController.swift
//  Weather
//
//  Created by LianJun on 2023/10/30.
//

import UIKit

class ViewController: UIViewController {
    @IBOutlet weak var scrollView: UIScrollView!
    
    @IBOutlet weak var cityTitle: UILabel!
    
    @IBOutlet weak var temperatureButton: UIButton!
    @IBOutlet weak var humidityButton: UIButton!
    @IBOutlet weak var infoButton: UIButton!
    @IBOutlet weak var widButton: UIButton!
    @IBOutlet weak var directButton: UIButton!
    @IBOutlet weak var powerButton: UIButton!
    @IBOutlet weak var aqiButton: UIButton!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        self.controlUpdate()
        self.getData()
    }
    
    func controlUpdate() {
        self.scrollView.contentSize.height = 900
        self.scrollView.showsVerticalScrollIndicator = false
        
        self.temperatureButton.layer.cornerRadius = 15
        self.humidityButton.layer.cornerRadius = 15
        self.infoButton.layer.cornerRadius = 15
        self.widButton.layer.cornerRadius = 15
        self.directButton.layer.cornerRadius = 15
        self.powerButton.layer.cornerRadius = 15
        self.aqiButton.layer.cornerRadius = 15
    }
    
    func getData() {
        URLSession.shared.dataTask(with: URL(string: "https://lc-fqbds8cx.cn-e1.lcfile.com/DjVlQBYPMCqzWwLJbxJFmbSHhBbUaAMs/1.txt")!) { (data, response, error) in
            if let data = data {
                do {
                    let model = try JSONDecoder().decode(WeatherModel.self, from: data)
                    weatherData = model
                    
                    DispatchQueue.main.async {
                        self.cityTitle.text = weatherData?.result?.city ?? "未知"
                        self.temperatureButton.setTitle("温度：\(weatherData?.result?.realtime?.temperature ?? "未知")", for: .normal)
                        self.humidityButton.setTitle("湿度：\(weatherData?.result?.realtime?.humidity ?? "未知")", for: .normal)
                        self.infoButton.setTitle("天气情况：\(weatherData?.result?.realtime?.info ?? "未知")", for: .normal)
                        self.widButton.setTitle("Wid：\(weatherData?.result?.realtime?.wid ?? "未知")", for: .normal)
                        self.directButton.setTitle("风向：\(weatherData?.result?.realtime?.direct ?? "未知")", for: .normal)
                        self.powerButton.setTitle("风力：\(weatherData?.result?.realtime?.power ?? "未知")", for: .normal)
                        self.aqiButton.setTitle("AQI：\(weatherData?.result?.realtime?.aqi ?? "未知")", for: .normal)
                    }
                } catch {
                    print(error)
                    let alert = UIAlertController(title: "网络请求失败", message: "请检查你的网络连接或者重试", preferredStyle: .alert)
                    alert.addAction(UIAlertAction(title: "确定", style: .default, handler: nil))
                    self.present(alert, animated: true, completion: nil)
                }
            }
        }.resume()
    }
    
    @IBAction func click(_ sender: UIButton) {
        let VC = storyboard?.instantiateViewController(identifier: "FutureViewController") ?? FutureViewController()
        switch sender.tag {
        case 1:
            projectText = "天气情况"
            projectInfo = weatherData?.result?.realtime?.info ?? "数据获取失败"
            contentColor = UIColor.systemGreen
        case 2:
            projectText = "湿度"
            projectInfo = weatherData?.result?.realtime?.humidity ?? "数据获取失败"
            contentColor = UIColor.systemIndigo
        case 3:
            projectText = "Wid"
            projectInfo = weatherData?.result?.realtime?.wid ?? "数据获取失败"
            contentColor = UIColor.systemMint
        case 4:
            projectText = "AQI"
            projectInfo = weatherData?.result?.realtime?.aqi ?? "数据获取失败"
            contentColor = UIColor.systemPink
        case 5:
            projectText = "风向"
            projectInfo = weatherData?.result?.realtime?.direct ?? "数据获取失败"
            contentColor = UIColor.systemRed
        case 6:
            projectText = "风力"
            projectInfo = weatherData?.result?.realtime?.power ?? "数据获取失败"
            contentColor = UIColor.systemBrown
        default:
            projectText = "温度"
            projectInfo = weatherData?.result?.realtime?.temperature ?? "数据获取失败"
            contentColor = UIColor.systemOrange
        }
        
        self.present(VC, animated: true)
    }
}
