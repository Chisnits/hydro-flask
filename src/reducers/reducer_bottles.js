import { FETCH_BOTTLES } from '../actions';
import _ from 'lodash';

//action creator
export default function(state = {}, action) {
    // console.log('we made it')
    switch (action.type) {
        case FETCH_BOTTLES:
        // console.log(action.payload.data); // [bottle1, bottle2]
        // { 1: bottle }
        console.log("LOOK AT ME", action.payload.data);
            return _.mapKeys(action.payload.data, 'id'); //grab the data by the id
        default:
        return state;
    }
}