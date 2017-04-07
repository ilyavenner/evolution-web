//import React, {Component} from 'react';
import React from 'react';
import cn from 'classnames';
import {AnimalTraitArrowMarker} from './AnimalTraitArrowMarker.jsx';

import {ANIMAL_TRAIT_SIZE} from './AnimalTrait.jsx'

export class AnimalTraitArrow extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {offset, initialOffset, velocity, afterStart, trait, animationCounter} = this.props;
    if (!offset) return null;
    const { x, y } = offset;

    const x1 = initialOffset.x + ANIMAL_TRAIT_SIZE.width / 2;
    const y1 = initialOffset.y + ANIMAL_TRAIT_SIZE.height / 2;
    const length = Math.sqrt((x - x1) * (x - x1) + (y - y1) * (y - y1));
    const lineWidth = length / 20;
    const angle = Math.atan2(y - y1, x - x1);
    const x2 = x1 + Math.cos(angle) * (length - lineWidth);
    const y2 = y1 + Math.sin(angle) * (length - lineWidth);

    return <svg width="100%" height="100%" style={{position: 'absolute', left: '0', top: '0'}}>
      <defs>
        <AnimalTraitArrowMarker id='arrow' markerSize={2} style={{
          fill: 'red'
        }}/>
      </defs>
      <path d={`M${x1},${y1} L${x2},${y2}`}
            style={{
              stroke: 'red'
              , strokeWidth: lineWidth + 'px'
              , fill: 'none'
              , markerEnd: 'url(#arrow)'
            }}
      />

    </svg>
  }
}