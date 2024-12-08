import {Flex, Typography} from "antd"

export default function CoinInfo({coin, withSybmol}){
    return (
        <Flex align='center'>
            <img src={coin.icon} alt={coin.name} style={{width:40, marginRight:10}} />
            <Typography.Title level={2} style={{margin: 0}}>
               {withSybmol && <span>({coin.symbol})</span> } {coin.name}
            </Typography.Title>
        </Flex>
    )
}