import React, {Component} from "react";
import {Switch, Route, NavLink} from "react-router-dom";

import InboxPage from "./mail/inbox";
import StarredPage from "./mail/starred";
import DraftPage from "./mail/draft";
import TrashPage from "./mail/trash";

class MailPage extends Component{
  render(){
    return(
      <div>
        <div className="header"></div>
        <div className="body-area">
          <div className="sidebar">
            <div className="btn-margin">
              <NavLink to="/mail/inbox" className="custom-button">Inbox</NavLink>
            </div>
            <div className="btn-margin">
              <NavLink to="/mail/starred" className="custom-button">Starred</NavLink>
            </div>
            <div className="btn-margin">
              <NavLink to="/mail/draft" className="custom-button">Draft</NavLink>
            </div>
            <div className="btn-margin">
              <NavLink to="/mail/trash" className="custom-button">Trash</NavLink>
            </div>
          </div>
          <div className="content">
            <Switch>
              <Route path="/mail/inbox" component={InboxPage}></Route>
              <Route path="/mail/starred" component={StarredPage}></Route>
              <Route path="/mail/draft" component={DraftPage}></Route>
              <Route path="/mail/trash" component={TrashPage}></Route>
            </Switch>
          </div>
        </div>
      </div>
    )
  }
}

export default MailPage;