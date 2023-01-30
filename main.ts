function initAQM1602 () {
    basic.pause(100)
    writeCommand(56)
    writeCommand(57)
    writeCommand(20)
    writeCommand(115)
    writeCommand(86)
    writeCommand(108)
    writeCommand(56)
    writeCommand(1)
    writeCommand(12)
}
// 62=0x3E
// 
// 16384=0x4000
function writeData (dat: string) {
    pins.i2cWriteNumber(
    62,
    16384 + dat.charCodeAt(0),
    NumberFormat.UInt16BE,
    false
    )
    basic.pause(1)
}
function writeCommand (command: number) {
    pins.i2cWriteNumber(
    62,
    0 + command,
    NumberFormat.UInt16BE,
    false
    )
    basic.pause(20)
}
initAQM1602()
let msg = "Hello World."
basic.forever(function () {
    led.toggle(0, 0)
    writeCommand(1)
    writeCommand(0)
    for (let index = 0; index <= msg.length; index++) {
        writeData(msg.charAt(index))
    }
    basic.pause(1000)
})
