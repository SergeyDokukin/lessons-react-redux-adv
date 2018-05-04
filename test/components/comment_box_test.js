import { renderComponent , expect } from '../test_helper';
import CommentBox from '../../src/components/comment_box';

describe('CommentBox', () =>  {
   let component;

    beforeEach( () => {
        component = renderComponent(CommentBox);
        
    });

    it('has a correct class', () => {        
        expect(component).to.have.class('comment-box');
    });
    it('has a text area', () => {
        
        expect(component.find('textarea')).to.exist;
    });
    it('has a button', () => {
        
        expect(component.find('button')).to.exist;
    });

    describe('entering some text', () => {
        beforeEach( () => {           
            component.find('textarea').simulate('change','dummyText');            
        });

        it('shows entered text', () => {
            expect(component.find('textarea')).to.have.value('dummyText');
        });
    
        it('when submitted,  clears the input', () => {
            component.find('button').click();
            expect(component.find('textarea')).to.have.value('');
        })
    })

   

})