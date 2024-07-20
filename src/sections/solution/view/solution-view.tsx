'use client';

import SolutionSlider from '../solution-slider';
import SolutionClass from '../solution-class';
import SolutionCommunity from '../solution-community';
import SolutionAdvertise from '../solution-advertise';
// ----------------------------------------------------------------------

export default function SolutionView() {
  return (
    <>
      <SolutionSlider />
      <SolutionClass />
      <SolutionCommunity />
      <SolutionAdvertise />
    </>
  );
}
