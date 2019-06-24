import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import regeneratorRuntime from 'regenerator-runtime'; // This is to test async call

configure({ adapter: new Adapter() });
