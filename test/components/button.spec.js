/* eslint-disable no-unused-expressions */
import { expect } from 'chai';
import { spy } from 'sinon';
import React from 'react';
import { shallow } from 'enzyme';
import Button from '../../src/renderer/components/button';
import styles from '../../src/renderer/styles/button';

describe('Button Component', () => {
  it('should render normal content', () => {
    const component = shallow(<Button>Test</Button>);
    expect(component.find('button').text()).to.equal('Test');
  });

  it('should handle click event', () => {
    const onButtonClick = spy();
    const wrapper = shallow(<Button onClick={onButtonClick}>Test</Button>);
    wrapper.find('button').simulate('click');
    expect(onButtonClick).to.have.property('callCount', 1);
  });

  it('should render proper class names', () => {
    const primary = shallow(<Button primary>Test</Button>);
    const danger = shallow(<Button danger>Test</Button>);
    const dark = shallow(<Button dark>Test</Button>);
    const custom = shallow(<Button className={{buttercup: true}}>Test</Button>);
    const disabled = shallow(<Button disabled>Test</Button>);
    
    expect(primary.hasClass(styles.primary)).to.be.true;
    expect(danger.hasClass(styles.danger)).to.be.true;
    expect(dark.hasClass(styles.dark)).to.be.true;
    expect(custom.hasClass('buttercup')).to.be.true;
    expect(disabled.prop('disabled')).not.to.be.false;
  });
});
