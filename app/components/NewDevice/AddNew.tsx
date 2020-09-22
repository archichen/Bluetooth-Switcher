import { format } from 'path';
import React from 'react';
import HeadPhone from '../../../resources/icons/headphone.svg';
import styles from './AddNew.css';
import { Button } from 'antd';

export default function AddNew(props): JSX.Element {
  const { addDeviceCallBack, cancelAddCallBack } = props;

  return (
    <div className={styles.container}>
      <img className={styles.addNewIcon} src={HeadPhone} />
      <br />
      <Button onClick={addDeviceCallBack} type='primary'>添加设备</Button>
      <br/>
      <Button onClick={cancelAddCallBack}>取消添加</Button>
    </div>
  );
}
