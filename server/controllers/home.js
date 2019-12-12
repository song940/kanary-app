import { get } from '@kelpjs/next/router';
import react from '../../react';
import render from '@kelpjs/next/render';
import Controller from '@kelpjs/next/controller';

class Home extends Controller {
  @get('/')
  async index(query) {
    const { name = 'world' } = query;
    return render('index', { name });
  }
  @get('/ssr/:name?')
  async react(query, params, res) {
    res.type('text/html');
    return react('index', params, query);
  }
  @get('/sse')
  async sse() {
    return render('sse');
  }
  @get('/events')
  async events(sse) {
    setInterval(() => {
      sse.send(new Date);
    }, 1000);
  }
}

export default Home;