import React from "react";
import "./App.css";
import "froala-editor/js/froala_editor.pkgd.min.js";
import "froala-editor/css/froala_style.min.css";
import "froala-editor/css/froala_editor.pkgd.min.css";
//  import LifeCycle from './Component/LifeCycle';
import RoutingElements from "./Component/RoutingElements";
function App() {
  return (
    <div>
      <RoutingElements />
      {/* <LifeCycle /> */}
    </div>
  );
}

export default App;
