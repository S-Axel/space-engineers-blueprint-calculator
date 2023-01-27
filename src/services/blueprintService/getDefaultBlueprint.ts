import { Blueprint } from './types';
import grid7420 from '../../mocks/blueprints/grid7420';

const getDefaultBlueprint = (): Blueprint => grid7420.get();

export default getDefaultBlueprint;
