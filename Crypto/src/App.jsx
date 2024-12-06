import { Layout } from 'antd';
import AppHeader from './components/layout/AppHeader';
import AppSider from './components/AppSider';
import AppConent from './components/layout/AppContent';

export default function App() {
  return(
  <Layout>
    <AppHeader />
    <Layout>
        <AppSider />
        <AppConent />
    </Layout>
  </Layout>
  )
}
