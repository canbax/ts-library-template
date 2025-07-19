import { yourLibFunction } from "./index.ts";

const result = yourLibFunction(1, 2);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <pre>${JSON.stringify(result, null, 2)}</pre>
  </div>
`;
