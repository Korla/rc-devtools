const services = [
  'Scheduling.Write',
  'Scheduling.Read',
  'Workflow.Write',
  'Workflow.Read',
];

let selected = null;

const App = {
  view: () => [
    m('div', [
      m('label', 'Select service '),
      m('select', { onchange: item => selected = item.target.value }, services.map(name => m('option', name)))
    ]),
    m('div', `${selected}`)
  ]
}

m.mount(document.body, App);

chrome.devtools.network.onRequestFinished.addListener(
  request => {
    if (request.request.url.startsWith('ws'))
      console.log('salmon', request.request.url, request);
  }
);
