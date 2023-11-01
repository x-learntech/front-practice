/**
 * title: 进度圈动态展示
 * desc: 会动的进度条才是好进度条。
 */
/* eslint-disable */
import React, { useState } from 'react';
import { Progress, Button } from '@vv-desktop-web-core/atoms';

const ButtonGroup = Button.Group;

// class App extends React.Component {
//     state = {
//         percent: 0
//     };

//     increase = () => {
//         let percent = this.state.percent + 10;
//         if (percent > 100) {
//             percent = 100;
//         }
//         this.setState({ percent });
//     };

//     decline = () => {
//         let percent = this.state.percent - 10;
//         if (percent < 0) {
//             percent = 0;
//         }
//         this.setState({ percent });
//     };

//     render() {
//         return (
//             <div>
//                 <Progress type="circle" percent={this.state.percent} />
//                 <ButtonGroup>
//                     <Button onClick={this.decline} icon="minus" />
//                     <Button onClick={this.increase} icon="plus" />
//                 </ButtonGroup>
//             </div>
//         );
//     }
// }

export default function Demo() {
  const [percent, setPercent] = useState(0);

  // const increase = () => {
  //     let percent1 = percent + 10;
  //     if (percent > 100) {
  //         percent1 = 100;
  //     }
  //     // setPercent({ percent: percent1 });
  // };
  // const decline = () => {
  //     let percent = percent - 10;
  //     if (percent < 0) {
  //         percent = 0;
  //     }
  //     setPercent({ percent });
  // };
  return (
    <div>
      <Progress type="circle" percent={percent} />
      {/* <ButtonGroup>
                <Button onClick={decline} icon="minus" />
                <Button onClick={increase} icon="plus" />
            </ButtonGroup> */}
    </div>
  );
}
