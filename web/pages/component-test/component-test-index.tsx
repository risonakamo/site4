import {createRoot} from "react-dom/client";

import classes from "./component-test-index.module.less";

function ComponentTestIndex():JSX.Element
{
  return <>
    <div className={classes["something"]}>
      hello

      <div className={classes["something2"]}>
        thing
      </div>
    </div>

    <div className={classes["something2-bruh"]}>
      hello2
    </div>
  </>;
}

function main()
{
  createRoot(document.querySelector(".main")!).render(<ComponentTestIndex/>);
}

window.onload=main;