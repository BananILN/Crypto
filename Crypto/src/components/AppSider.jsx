import { Layout, Card, Statistic,List , Typography,Spin } from 'antd';
import { ArrowDownOutlined, ArrowUpOutlined } from '@ant-design/icons';
import { useEffect, useState } from 'react';
import { fakeFecthAssets, fakeFecthCrypto } from '../api';
import { percentDifference } from '../utils'


const siderStyle = {
   padding: '1rem',
  };

  const data = [
    'Racing car sprays burning fuel into crowd.',
    'Japanese princess to wed commoner.',
    'Australian walks 100km after outback crash.',
    'Man charged over missing wedding girl.',
    'Los Angeles battles huge wildfires.',
  ];


 

export default function AppSider(){
  const [loading,setLoading] = useState(false)
  const [crypto, setCrypto] = useState([])
  const [assets, setAssets] = useState([])

  useEffect(()=>{
    async function preload(){
      setLoading(true)
      const { result } = await fakeFecthCrypto()
      const assets = await fakeFecthAssets()

      setAssets(
        assets.map((asset) => {
        const coin = result.find((c) => c.id === asset.id)
        return {
          grow: asset.price < coin.price,
          growPercent: percentDifference(asset.price, coin.price),
          totalAmount: asset.amount * coin.price,
          totalProfit: asset.amount * coin.price - asset.amount * asset.price,
          ...asset,
        }
      }));
      setCrypto(result);
      setLoading(false);
    }
    preload()
  },[])

    if(loading){
      return <Spin fullscreen />
    }

    return (
        <Layout.Sider width="25%" style={siderStyle}>
            <Card style={{ marginBottom: '1rem' }}>
                <Statistic
                  title="Active"
                  value={11.28}
                  precision={2}
                  valueStyle={{
                    color: '#3f8600',
                  }}
                  prefix={<ArrowUpOutlined />}
                  suffix="%"
                 />
                <List
                size='small'
                bordered
                dataSource={data}
                renderItem={(item) => (
                  <List.Item>
                    <Typography.Text mark>[ITEM]</Typography.Text> {item}
                  </List.Item>
                )}
              />
            </Card>
            <Card style={{ marginBottom: '1rem' }}>
                <Statistic
                    title="Idle"
                    value={9.3}
                    precision={2}
                    valueStyle={{
                    color: '#cf1322',
                    }}
                    prefix={<ArrowDownOutlined />}
                    suffix="%"
                    />
            </Card>
      </Layout.Sider>
    )
   
}