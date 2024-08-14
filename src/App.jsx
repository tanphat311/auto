import React, { useEffect, useState } from 'react'
import AppBar from './Appbar/Appbar'
import './main.scss'
import { useTranslation } from 'react-i18next';
// import pic1 from './img/Picture1.png'
// import pic2 from './img/Picture2.png'
// import pic3 from './img/Picture3.png'
// import pic4 from './img/Picture4.png'
// import pic5 from './img/Picture5.png'
// import pic6 from './img/Picture6.png'
// import pic7 from './img/Picture7.png'
// import pic8 from './img/Picture8.png'
// import pic9 from './img/Picture9.png'
// import pic10 from './img/Picture10.png'
// import pic11 from './img/Picture11.png'
// import pic12 from './img/Picture12.png'
// import pic13 from './img/Picture13.png'
// import pic14 from './img/Picture14.png'
// import pic15 from './img/Picture15.png'
// import pic16 from './img/Picture16.png'
// import pic17 from './img/Picture17.png'
// import pic18 from './img/Picture18.png'
// import DisplayData from './Detail/Detail.jsx'
import { Routes, Route } from 'react-router-dom'
import LazyLoad from './lazy_loadings/lazyLoading.js'
import axios from 'axios';
import Detail from './Detail/Detail.jsx';


export default function App() {
  // const [storedData, setStoredData] = useState([]);
  // const [title, setTitle] = useState('');
  // const [content, setContent] = useState('');

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const data = localStorage.getItem('formData');

  //     if (data) {
  //       const parsedData = JSON.parse(data);
  //       if (parsedData) {
  //         try {
  //           console.log("parsedData", parsedData);
  //           await axios.post('http://localhost:8000/posts', parsedData);
  //           // alert('Bài viết đã được đăng thành công!');
  //         } catch (error) {
  //           console.error('Có lỗi xảy ra khi đăng bài viết:', error);
  //         }
  //       } else {
  //         setStoredData([]);
  //       }
  //     }
  //   };

  //   fetchData();
  // }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const existingFormData = localStorage.getItem('formData');
        if (existingFormData) {
          return;
        }
        const response = await axios.get('https://tdta2002.github.io/sever.json/db.json');
        localStorage.setItem('formData', JSON.stringify(response.data));
      } catch (error) {
        console.error('Lỗi khi lấy dữ liệu từ server:', error);
      }
    };

    fetchData();
  }, []);

  const { t } = useTranslation();
  // const items = [
  //   { text: t('ignitionSystem'), imgSrc: pic1, IgnitionSystem: t('IgnitionSystem') },
  //   { text: t('brakeSystem'), imgSrc: pic2 },
  //   { text: t('headlightSystem'), imgSrc: pic3 },
  //   { text: t('brakeSystemCar'), imgSrc: pic4 },
  //   { text: t('catalyticConverter'), imgSrc: pic5 },
  //   { text: t('airbag'), imgSrc: pic6 },
  //   { text: t('suspension'), imgSrc: pic7 },
  //   { text: t('drivetrain'), imgSrc: pic8 },
  //   { text: t('steeringWheel'), imgSrc: pic9 },
  //   { text: t('wheelSystem'), imgSrc: pic10 },
  //   { text: t('electricalSystem'), imgSrc: pic11 },
  //   { text: t('airConditioningSystem'), imgSrc: pic12 },
  //   { text: t('exterior'), imgSrc: pic13 },
  //   { text: t('engine'), imgSrc: pic14 },
  //   { text: t('transmission'), imgSrc: pic15 },
  //   { text: t('automotiveCoolingSystem'), imgSrc: pic16 },
  //   { text: t('automotiveLubricationSystem'), imgSrc: pic17 },
  //   { text: t('automotiveChassisSystem'), imgSrc: pic18 },
  // ];

  return (
    // <div>
    //   <AppBar items={items}></AppBar>
    //   <DisplayData />
    // </div>
    <Routes>
      <Route path="/" element={LazyLoad(() => import("./Appbar/Appbar"))()} />
      <Route path="/details/:id" element={<Detail />} />
      <Route path="/edit" element={LazyLoad(() => import("./Edit/Edit.jsx"))()} />
    </Routes>
  )
}
