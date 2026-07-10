input.onGesture(Gesture.TiltRight, function () {
    文字列の配列.push("右")
})
input.onButtonPressed(Button.A, function () {
    for (let 値 of 文字列の配列) {
        if (値 == "左") {
            basic.showArrow(ArrowNames.West)
        } else if (値 == "右") {
            basic.showArrow(ArrowNames.East)
        } else if (値 == "下") {
            basic.showArrow(ArrowNames.South)
        } else if (値 == "上") {
            basic.showArrow(ArrowNames.North)
        }
        basic.pause(500)
        basic.clearScreen()
        basic.pause(500)
    }
    文字列の配列 = []
})
input.onGesture(Gesture.TiltLeft, function () {
    文字列の配列.push("左")
})
input.onGesture(Gesture.LogoUp, function () {
    文字列の配列.push("下")
})
input.onGesture(Gesture.LogoDown, function () {
    文字列の配列.push("上")
})
let 文字列の配列: string[] = []
文字列の配列 = [
"上",
"左",
"下",
"右"
]
