import App from './App.svelte'

const app = new App({
  target: document.body,
  props: {
    name: 'Julián',
    lastName: 'Cipagauta'
  }
})

export default app
