import { get } from '@kelpjs/next/router';
import Controller from '@kelpjs/next/controller';

interface IController {
  
}

class TS extends Controller implements IController {
  @get('/ts')
  async index() {
    return "hello typescript!";
  }
}

export default TS;