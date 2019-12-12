import ssr from 'kelp-ssr';
import render from '@kelpjs/next/render';
import $import from '@kelpjs/next/import';

const react = (page, state, options) => {
  const Page = $import(`@client/pages/${page}`);
  const html = ssr(Page, state, options);
  return render('react', { page, html });
};

module.exports = react;