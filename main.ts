/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Sophia
 * Created on: mar 2026
 * This program ...
*/

// variable
let cookie: number = 0

// cleanup
basic.clearScreen()
basic.showIcon(IconNames.Happy)

// add 1 to cookies
input.onButtonPressed(Button.A, function() {
   cookie = cookie+1
   basic.showNumber(cookie)
})

// restart
input.onButtonPressed(Button.B, function() {
  cookie = 0
  basic.showNumber(cookie)
})
