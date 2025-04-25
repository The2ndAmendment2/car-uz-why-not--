/**
 */
input.onButtonPressed(Button.A, function () {
    if (true) {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 100)
    } else {
        motobit.setMotorSpeed(Motor.Right, MotorDirection.Forward, 0)
    }
})
input.onGesture(Gesture.LogoUp, function () {
    motobit.enable(MotorPower.On)
})
input.onButtonPressed(Button.AB, function () {
    motobit.enable(MotorPower.Off)
})
input.onButtonPressed(Button.B, function () {
    if (input.buttonIsPressed(Button.B)) {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 100)
    } else {
        motobit.setMotorSpeed(Motor.Left, MotorDirection.Forward, 0)
    }
})
input.onLogoEvent(TouchButtonEvent.Touched, function () {
    motobit.setMotorSpeed(Motor.Right, MotorDirection.Reverse, 50)
    motobit.setMotorSpeed(Motor.Left, MotorDirection.Reverse, 50)
})
basic.showLeds(`
    . # . . .
    . # . # #
    . . . . .
    # # . # .
    . . . # .
    `)
/**
 */
basic.forever(function () {
	
})
