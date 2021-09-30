import { html } from 'lit';
import '../src/lit-test-github-pages.js';

export default {
  title: 'LitTestGithubPages',
  component: 'lit-test-github-pages',
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

function Template({ title, backgroundColor }) {
  return html`
    <lit-test-github-pages
      style="--lit-test-github-pages-background-color: ${backgroundColor || 'white'}"
      .title=${title}
    >
    </lit-test-github-pages>
  `;
}

export const App = Template.bind({});
App.args = {
  title: 'My app',
};
