import React from 'react';
import { shallow } from 'enzyme';

import DataAnalysis from '../../components/data-analysis/dataAnalysis';

describe('<DataAnalysis />', () => {
  it('should render <DataAnalysis />', () => {
    shallow(<DataAnalysis />);
  });
});