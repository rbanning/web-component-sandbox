import { Template } from "./config";

export const template = (id: string): Template => ({
  id,
  content: `
    <style>
      footer {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 0.5rem;
        font-size: 0.85rem;
        margin: 4rem 0 0 0;
        padding: 1rem 0;
        background-color: var(--surface-color-dark, #ccc);
        border-radius: 0.25rem;
        border-top: solid 1px var(--border-color-dark, #ccc);
        border-bottom: solid 1px var(--border-color-dark, #ccc);
        
        opacity: .8;
        transition: opacity 300ms linear;
        &:hover {
          opacity: 1;
        }
        & > *:not(:last-child) {          
          &::after {
            content: '-';
            padding-left: 0.5rem;
          }
        }
      }
      @media (prefers-color-scheme: light) {
        border-color: var(--surface-color-light, #ccc);
      }
    </style>
    <footer>
      <span>&copy; ${new Date().getFullYear()}</span>
      <span>Hallpass and Friends</span>
      <a href="#">privacy</a>
    </footer> 
`
})