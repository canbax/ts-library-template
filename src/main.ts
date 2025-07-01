import "./style.css";
import { yourLibFunction } from "./index.ts";

const nodes = ["a", "b", "c"];
const edges = { a: "b", b: "c", c: "a" };
const layoutResult = yourLibFunction(nodes, edges);

document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
  <div>
    <h1>Discrete Layout</h1>
    <pre>${JSON.stringify(layoutResult, null, 2)}</pre>
  </div>
`;
