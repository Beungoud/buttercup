/* eslint-disable no-unused-expressions */
import React from 'react';
import { expect } from 'chai';
import { shallow } from 'enzyme';
import Meter from '../../src/renderer/components/meter';

describe('Meter Component', () => {
  it('should handle no input', () => {
    const meter = shallow(<Meter input=""/>);
    expect(meter.find('p')).to.have.length(1);
    expect(meter.find('p').text()).to.match(/use a few words/i);
  });

  it('should handle weak password', () => {
    const meter = shallow(<Meter input="aaa"/>);
    expect(meter.find('p')).to.have.length(2);
    expect(meter.find('p').first().text()).to.match(/repeats like "aaa" are easy to guess/i);
  });

  it('should handle strong password', () => {
    const meter = shallow(<Meter input="zaCoabCj3oyqrhqpemzpTWeg"/>);
    expect(meter.find('p')).to.have.length(0);
  });
});
