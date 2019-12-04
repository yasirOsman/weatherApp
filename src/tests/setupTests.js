import {configure} from 'enzyme';
import raf from './tempPolyfills'
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() })