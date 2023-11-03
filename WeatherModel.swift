//
//  File.swift
//  Weather
//
//  Created by LianJun on 2023/10/30.
//

import UIKit

var weatherData: WeatherModel?
var projectText = "项目获取失败"
var projectInfo = "   数据获取失败"
var contentColor = UIColor.systemCyan

struct WeatherModel: Codable {
    var reason: String?
    var result: Result?
    var error_code: Int?
}

struct Result: Codable {
    var city: String?
    var future: [Future]?
    var realtime: Realtime?
}

struct Realtime: Codable {
    var temperature: String?
    var humidity: String?
    var info: String?
    var wid: String?
    var direct: String?
    var power: String?
    var aqi: String?
}

struct Future: Codable {
    var date: String?
    var temperature: String?
    var weather: String?
    var wid: Wid?
    var direct: String?
}

struct Wid: Codable {
    var day: String?
    var night: String?
}

