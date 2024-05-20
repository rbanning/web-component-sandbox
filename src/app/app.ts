import '../styles/app.css';
import typescriptLogo from '../assets/typescript.svg';
import sandboxLogo from '/sandbox-purple.svg';
import { setupCounter } from './counter.ts';

import { FooterComponent } from './components/footer.ts';

import { ButtonComponent } from './components/interactive';

//initialize all components (decorators are not working!)
[ButtonComponent, FooterComponent]
  .forEach(item => item.init());


document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
  <div class="max-w-sm mx-auto my-4">
    <a class="clear" href="https://client.hallpassandfriends.com" target="_blank">
      <img src="${sandboxLogo}" class="logo" alt="Sandbox Logo" />
    </a>
    <a class="clear" href="https://www.typescriptlang.org/" target="_blank">
      <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
    </a>
    <h1>Vite + TypeScript</h1>
    <div class="card">
      <button id="counter" type="button"></button>
    </div>   
    <div class="card">
      <hallpass-button><span>Can you see me?</span></hallpass-button>
    </div>   
    <p class="text-primary bg-primary--minimal">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-primary bg-primary--quarter">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-primary bg-primary--half">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-primary bg-primary--mostly">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-secondary bg-secondary--minimal">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-secondary bg-secondary--quarter">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-secondary bg-secondary--half">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-secondary bg-secondary--mostly">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-error bg-error--minimal">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-error bg-error--quarter">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-error bg-error--half">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <p class="text-error bg-error--mostly">
      Click on the <a href="#">fancy logos</a> to learn more
    </p>
    <hallpass-footer></hallpass-footer>
  </div>
`

setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
