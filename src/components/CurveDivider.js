import React, { lazy } from 'react';
import { Flex } from '@chakra-ui/core';
const SvgCurveIn = lazy(() => import('../components/SvgComponents/CurveIn'));
const SvgCurveMid = lazy(() => import('../components/SvgComponents/CurveMid'));
const SvgCurveOut = lazy(() => import('../components/SvgComponents/CurveOut'));

const CurveDivider = (props) => (
  <Flex>
    <Flex isInline h='calc(161px * 2 - 39px)' w='full' {...props}>
      <SvgCurveOut style={{ alignSelf: 'flex-end', flex: 'none' }} />
      <SvgCurveMid
        width='100%'
        preserveAspectRatio='none'
        style={{ alignSelf: 'center', flex: 'auto' }}
      />
      <SvgCurveIn style={{ alignSelf: 'flex-start', flex: 'none' }} />
    </Flex>
  </Flex>
);

export default CurveDivider;
