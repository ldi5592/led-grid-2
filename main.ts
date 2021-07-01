basic.forever(function () {
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.setBrightness(50)
        led.plot(xindex, 0)
        basic.pause(100)
        led.unplot(xindex, 0)
        basic.pause(100)
    }
    basic.pause(100)
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.setBrightness(100)
        led.plot(xindex, 1)
        basic.pause(100)
        led.unplot(xindex, 1)
        basic.pause(100)
    }
    basic.pause(100)
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.setBrightness(150)
        led.plot(xindex, 2)
        basic.pause(100)
        led.unplot(xindex, 2)
        basic.pause(100)
    }
    basic.pause(100)
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.setBrightness(200)
        led.plot(xindex, 3)
        basic.pause(100)
        led.unplot(xindex, 3)
        basic.pause(100)
    }
    basic.pause(100)
    for (let xindex = 0; xindex <= 4; xindex++) {
        led.setBrightness(255)
        led.plot(xindex, 4)
        basic.pause(100)
        led.unplot(xindex, 4)
        basic.pause(100)
    }
    basic.pause(100)
})
