import {Constants} from "../constants";
import {addScript} from "../util/addScript";

declare const flowchart: {
    parse(text: string): { drawSVG: (type: HTMLElement) => void };
};

export const flowchartRender = (element: HTMLElement, cdn = Constants.CDN) => {
    const flowchartElements = element.querySelectorAll(".language-flowchart");
    if (flowchartElements.length === 0) {
        return;
    }
    addScript(`${cdn}/dist/js/flowchart.js/flowchart.min.js`, "vditorFlowchartScript").then(() => {
        flowchartElements.forEach((item: HTMLElement) => {
            const flowchartObj = flowchart.parse(item.innerText);
            item.innerHTML = "";
            flowchartObj.drawSVG(item);
        });
    });
};
