basic.forever(function () {
    basic.showNumber(input.temperature() + 2)
    if (input.temperature() < 10) {
        basic.showIcon(IconNames.Chessboard)
    }
    if (input.temperature() > 10) {
        basic.showIcon(IconNames.Square)
    }
})
