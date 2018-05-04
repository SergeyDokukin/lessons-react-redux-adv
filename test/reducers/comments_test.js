import {expect } from '../test_helper';
import commentReducer from '../../src/reducers/comments';
import {SAVE_COMMENT} from '../../src/actions/types';


    describe('comments Reducer', () => {
        
        it('handles action with unknown type', () => {
               expect(commentReducer( undefined, {} )).to.eql([]);
        });

        it('SAVE_COMMENT', () => {
            const action = {type: 'save_comment', payload: 'new comment'};
            expect(commentReducer([],action)).to.eql([action.payload])
        })
    })


