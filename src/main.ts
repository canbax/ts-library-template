import { yourLibFunction } from "./index.ts";

const layoutResult = yourLibFunction(1, 2);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Discrete Layout</h1>
    <pre>${JSON.stringify(layoutResult, null, 2)}</pre>
  </div>
`;
