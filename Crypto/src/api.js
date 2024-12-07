import { cryptoData, cryptoAssets } from './data'

export function fakeFecthCrypto(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoData)
        },200)
    })
}

export function fakeFecthAssets(){
    return new Promise(resolve =>{
        setTimeout(()=>{
            resolve(cryptoAssets)
        },200)
    })
}