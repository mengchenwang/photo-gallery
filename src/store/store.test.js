import store from './store'
import { fromJS } from 'immutable'

describe('store initialisation', () => {
    it('should create an empty store', () => {
        expect(store).not.toBeNull()
        expect(store.getState().photos).toEqual(fromJS([]))
    })
})