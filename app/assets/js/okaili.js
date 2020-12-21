const fs = require('fs')
const path = require('path')

let DEV_MODE

const logger = require('./loggerutil')('%c[Okaili]', 'color: #a02d2a; font-weight: bold')

exports.setDevMode = function(value){
    if(value){
        logger.log('Mode Developpeur Active')
        logger.log('Si vous ne savez pas ce que vous faites desactivez le immediatement !!')
    } else {
        logger.log('Developer mode disabled.')
    }
    DEV_MODE = value
}
