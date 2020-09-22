import React from 'react';
import AddNew from '../components/NewDevice/AddNew';
import * as noble from 'noble';

export default class NewDevicePage extends React.Component {
  state = {
    isAddNew: true
  };

  constructor(props) {
    super(props);
    noble.startScanning();

    noble.on('discover', (data) => {
      console.log(data)
    })
  }
  addDeviceCallBack = () => {
    this.setState({
      isAddNew: true
    });
  }

  cancelAddCallBack = () => {
    console.log("cancel")
  }

  render() {
    console.log(this.state);
    const { isAddNew } = this.state;
    return (
      <div>
        {
          !isAddNew &&
          <AddNew addDeviceCallBack={this.addDeviceCallBack} cancelAddCallBack={this.cancelAddCallBack} />
        }
        {
          isAddNew &&
          <div>Hello world</div>
        }
      </div>
    );
  }
}
