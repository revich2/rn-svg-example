/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {View, Dimensions} from 'react-native';

import {
  Svg,
  Circle,
  Rect,
  Mask,
  Defs,
  Filter,
  FEGaussianBlur,
} from './react-native-svg';

const App = () => {
  const windowWidth = Dimensions.get('window').width;
  const windowHeight = Dimensions.get('window').height;
  return (
    <View
      pointerEvents="auto"
      style={{
        width: '100%',
        left: 0,
        top: 0,
        height: '100%',
        position: 'absolute',
        zIndex: 99999,
      }}>
      <Svg
        width={windowWidth}
        height={windowHeight}
        viewBox={`0 0 ${windowWidth} ${windowHeight}`}
        // eslint-disable-next-line react-native/no-color-literals
        style={{
          opacity: 0.7,
          width: '100%',
          left: 0,
          top: 0,
          height: '100%',
          position: 'absolute',
          zIndex: 99998,
          color: '#000',
        }}
        pointerEvents="none">
        <Defs>
          <Filter id="filter-blur" x="0" y="0">
            <FEGaussianBlur in="SourceGraphic" stdDeviation="15" />
          </Filter>
          <Mask
            id="mask-main"
            x={0}
            y={0}
            width={windowWidth}
            height={windowHeight}
            maskUnits="userSpaceOnUse"
            maskContentUnits="userSpaceOnUse">
            <Rect
              x={0}
              y={0}
              width={windowWidth}
              height={windowHeight}
              fill="white"
            />
            <Circle
              cx={200}
              cy={500}
              r={100}
              filter="url(#filter-blur)"
              fill="black"
            />
            <Circle cx={200} cy={200} r={100} fill="black" />
          </Mask>
        </Defs>
        <Circle cx={250} cy={500} r={100} fill="green" />
        <Rect
          x={0}
          y={0}
          width={windowWidth}
          height={windowHeight}
          fill="currentColor"
          mask="url(#mask-main)"
        />
      </Svg>
    </View>
  );
};

export default App;
