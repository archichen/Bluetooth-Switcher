import React from 'react';
import Login from '../components/Login';
import BluetoothIcon from '../../resources/icons/bluetooth.svg';
import {Col, Row} from 'antd'
import styles from './LoginPage.css';

export default function LoginPage(props) {
  return (
    <div style={{marginTop: 15}}>
      <Row>
        <Col span={6}></Col>
        <Col
          span={12}
          className={styles.centerContainer}
        >
          <img className={styles.icon} src={BluetoothIcon}/>
        </Col>
        <Col span={6}></Col>
      </Row>
      <Row>
        <Col span={6}></Col>
        <Col span={12}>
          <Login {...props} />
        </Col>
        <Col span={6}></Col>
      </Row>

    </div>
  );
}
