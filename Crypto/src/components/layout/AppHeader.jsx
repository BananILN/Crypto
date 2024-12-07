import { Layout, Select, Space,Button } from 'antd';
import { useCrypto } from '../../context/crypto-context';
const headerStyle = {
    width: "100%",
    textAligh:'center',
    height: 60,
    padding: '1rem',
    display:'flex',
    background:"white",
    justifyContent:'space-between',
    alignItems:'center',
  };


export default function AppHeader(){
    // const [select,setSelect] = useState(false)

    const { crypto } = useCrypto()

    function handleSelect(value){
        console.log(value);
        
    }

    return(
        <Layout.Header style={headerStyle}>
            <Select
                style={{
                width: 250,
                }}
                onSelect={handleSelect}
                value="press / to open"
                optionLabelProp='label'
                options={crypto.map(coin =>({
                    label: coin.name,
                    value: coin.id,
                    icon: coin.icon,
                }))}
                optionRender={(option) => (
                <Space>
                    <img style={{width:20}} src={option.data.icon} alt={option.data.label} /> {option.data.label}
                </Space>
                    )}
            />
            <Button type="primary">Add asset</Button>
        </Layout.Header>

    )
}