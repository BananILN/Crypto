import {cryptoData,cryptoAssets } from '/data.js'

export function fakeFecthCrypto(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoData)
        },2000)
    })
}

export function fakeFecthAssets(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoAssets)
        },2000)
    })
}