radio.setGroup(147)
basic.showIcon(IconNames.Target)
let running = 0
let speed = 500
basic.forever(function () {
    if (running == 0) {
        basic.showIcon(IconNames.No)
        led.stopAnimation()
        if (input.buttonIsPressed(Button.A)) {
            running = 1
            radio.sendValue("engine", 1)
        }
    }
})
basic.forever(function () {
    if (running == 1) {
        basic.showIcon(IconNames.Yes)
        led.stopAnimation()
        if (input.buttonIsPressed(Button.A)) {
            running = 0
            radio.sendValue("engine", 0)
        }
    }
})
basic.forever(function () {
    if (running == 1) {
        if (input.buttonIsPressed(Button.B)) {
            if (1000 < speed) {
                speed = 500
                radio.sendValue("speed", speed)
                if (speed == 500) {
                    basic.showNumber(1)
                    basic.pause(1000)
                }
            } else {
                speed = speed + 250
                radio.sendValue("speed", speed)
                if (speed == 500) {
                    basic.showNumber(1)
                    basic.pause(1000)
                }
                if (speed == 750) {
                    basic.showNumber(2)
                    basic.pause(1000)
                }
                if (speed == 1000) {
                    basic.showNumber(3)
                    basic.pause(1000)
                }
            }
        }
    }
})
