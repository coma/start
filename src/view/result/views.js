import { STATUS_LOADING, STATUS_LOADED } from 'src/store/status';
import Wait from './wait';
import List from './list';

export default {
    [STATUS_LOADING]: Wait,
    [STATUS_LOADED] : List
};
