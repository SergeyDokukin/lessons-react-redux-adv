import { renderComponent , expect } from '../test_helper';
import App from '../../src/components/app';

describe('App' , () => {
  let component;

    beforeEach( () => {
        component = renderComponent(App);
        
    });

  it('shows a commentBox', () => {
    expect(component.find('.comment-box')).to.exist;
  });

  it('shows a commentList', () => {
    expect(component.find('.comment-list')).to.exist;
  });
  

});
