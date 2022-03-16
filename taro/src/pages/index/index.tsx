import { Button, View } from '@tarojs/components';
// import { getAccountInfoSync, login, request, getUserInfo } from '@tarojs/taro'
import { useEffect, useState } from 'react';
import { RootStateOrAny, useSelector, useDispatch } from 'react-redux';

import * as SERVICES from '@/services';
import './index.scss';

const IndexPage = () => {
  const service = useSelector((state: RootStateOrAny) => state.service);
  const [userInfo, setUserInfo] = useState({});
  const dispatch = useDispatch();

  useEffect(() => {
    // login({
    //   success: function (res) {
    //     if (res.code) {
    //       //发起网络请求
    //       request({
    //         url: 'http://localhost:8801/wx/user/wx130c7b210016fdfd/login',
    //         data: {
    //           code: res.code;
    //         }
    //       }).then(data => {
    //         console.log(data)
    //         setSessionKey(data.sessionKey)
    //       })
    //     } else {
    //       console.log('登录失败！' + res.errMsg)
    //     }
    //   }
    // })
  }, []);

  const getInfo = () => {
    // const accountInfo = getAccountInfoSync()
    // console.log('accountInfo', accountInfo)
    // getUserInfo({
    //   success: res => {
    //     console.log('getUserInfo', res)
    //     request({
    //       url: 'http://localhost:8801/wx/user/wx130c7b210016fdfd/info',
    //       data: {
    //         appid: accountInfo?.miniProgram.appId,
    //         sessionKey: sessionKey,
    //         signature: res.signature,
    //         rawData: res.rawData,
    //         encryptedData: res.encryptedData,
    //         iv: res.iv
    //       }
    //     }).then(data => {
    //       console.log(data)
    //       console.log('获取用户信息', data)
    //       setUserinfo(data)
    //     })
    //   }
    // })
    SERVICES.getAsyncData().then(res => {
      console.log('getAsyncData res', res);
      setUserInfo(res);
    });
  };

  const getInfoByDispatch = () => {
    dispatch({
      type: 'service/fetch',
      payload: {
        id: 1
      }
    });
  };

  return (
    <View className='home'>

      <Button onClick={getInfoByDispatch}>dispatch方法获取用户信息</Button>
      {JSON.stringify(service?.asyncData)}

      <Button onClick={getInfo}>直接方法获取用户列表</Button>
      {JSON.stringify(userInfo)}
    </View>
  );
};

export default IndexPage;
