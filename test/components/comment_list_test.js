import { renderComponent , expect } from '../test_helper';
import CommentList from '../../src/components/comment_list';

describe('CommentList', () => {

    let component;
    const props = {comments: ['one','two','three']};
    beforeEach( () => {
        
        component = renderComponent(CommentList, null, props);
        
    });

    it('shows an LI for each comment', () => {
        expect(component.find('li').length).to.equal(props.comments.length)
    });

    it('shows each comment that is provided', () => {
        for (let i = 0; i < props.comments.length; i++) {
            
            expect(component).to.contain(props.comments[i])
        }
       
    });
})