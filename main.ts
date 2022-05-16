function Sonar () {
    pins.digitalWritePin(DigitalPin.P1, 0)
    control.waitMicros(2)
    pins.digitalWritePin(DigitalPin.P1, 10)
    control.waitMicros(10)
    pins.digitalWritePin(DigitalPin.P1, 0)
    disrtance = pins.pulseIn(DigitalPin.P13, PulseValue.High) / 58
}
input.onButtonPressed(Button.A, function () {
    for (let index = 0; index < 100; index++) {
        Sonar()
        if (disrtance <= 5) {
            count += 1
            basic.showIcon(IconNames.No)
            basic.pause(1000)
        } else {
            basic.showIcon(IconNames.Yes)
        }
    }
    basic.showIcon(IconNames.Heart)
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(count)
})
let disrtance = 0
let count = 0
basic.showIcon(IconNames.Heart)
count = 0
basic.forever(function () {
	
})
