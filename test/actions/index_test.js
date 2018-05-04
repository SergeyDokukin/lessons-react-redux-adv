import { expect } from '../test_helper';
import { SAVE_COMMENT } from '../../src/actions/types';
import { saveComment } from '../../src/actions';

describe('actions', () => {
    
    describe('saveComment', () => {
        const dummPayload = 'payload'
        it('has a correct type', () => {
            const action = saveComment();
            expect(action.type).be.equal(SAVE_COMMENT)
        });
        it('has a correct payload', () => {
            const action = saveComment(dummPayload);
            expect(action.payload).be.equal(dummPayload)
        })
    })
})