import React from "react";
import Dashboard from "./Dashboard";
import Logout from "./Logout";
import { Route, BrowserRouter as Router } from "react-router-dom";
import Notes from "./Notes";
import TakeANode from "./TakeANote";
import GoogleLogin from "../GoogleLogin/GoogleLogin";
import GooglePassword from "../GoogleLogin/GooglePassword";
import CreateAccount from "../GoogleLogin/CreateAccount";
import DisplayAllNotes from "./DisplayAllNotes";
import DisplayTrashNotes from "./DisplayTrashNotes";
import TrashNote from "./TrashNote";
import Drawer2 from "./Drawer2";
import DisplayAllArchiveNotes from "./DisplayAllArchiveNotes";
import DisplayLabels from "./DisplayLabels";
import DisplayLabelsInDrawer from "./DisplayLabelsInDrawer";
import AddLabelNote from "./AddLabelNote";
import More from "./More";
import QuestionAnswer from "./QuestionAnswer";

function RoutingElements() {
  return (
    <div>
      <Router>
        <Route path="/" exact={true} component={GooglePassword} />

        <Route path="/dashboard" component={Dashboard} />
        <Route path="/dashboard/Notes" component={TakeANode} />
        <Route path="/CreateAccount" component={CreateAccount} />
        <Route path="/dashboard/DisplayAllNotes" component={DisplayAllNotes} />
        <Route path="/dashboard/TrashNotes" component={DisplayTrashNotes} />
        <Route
          path="/dashboard/ArchiveNotes"
          component={DisplayAllArchiveNotes}
        />
        <Route path="/TrashNote" component={TrashNote} />
        <Route path="/Drawer2" component={Drawer2} />
        <Route path="/DisplayLabels" component={DisplayLabels} />
        <Route
          path="/DisplayLabelsInDrawer"
          component={DisplayLabelsInDrawer}
        />
        <Route path="/dashboard/AddLabelNote" component={AddLabelNote} />
        <Route path="/More" component={More} />
        <Route path="/dashboard/QuestionAnswer" component={QuestionAnswer} />
        <Route path="/Logout" component={Logout} />
      </Router>
    </div>
  );
}

export default RoutingElements;
