import { ConfigProvider } from 'antd';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Pages/home';

ConfigProvider.config({
  theme: {
    primaryColor: '#13a69a',
  },
});
function App() {
  return (
    <ConfigProvider direction="rtl">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
