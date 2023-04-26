radio.onReceivedNumber(function (receivedNumber) {
    action = receivedNumber
})
function forkDown () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 0)
}
function reverse () {
    wuKong.setAllMotor(-20, -20)
}
function forward () {
    wuKong.setAllMotor(20, 20)
}
function forkUp () {
    wuKong.setServoAngle(wuKong.ServoTypeList._360, wuKong.ServoList.S0, 60)
}
let action = 0
joystickbit.initJoystickBit()
radio.setGroup(13)
basic.showIcon(IconNames.Silly)
basic.forever(function () {
    if (action == 0) {
        forward()
    }
    if (action == 2) {
        reverse()
    }
    if (action == 6) {
        forkUp()
    }
    if (action == 7) {
        forkDown()
    } else if (action == 7) {
        wuKong.stopAllMotor()
    }
})
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 800) {
        radio.sendNumber(1)
    } else if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 200) {
        radio.sendNumber(2)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P13)) {
        radio.sendNumber(6)
    } else if (joystickbit.getButton(joystickbit.JoystickBitPin.P14)) {
        radio.setGroup(7)
    } else {
        radio.setGroup(0)
    }
})
