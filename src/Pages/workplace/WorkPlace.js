import React from 'react'
import {Route, Link} from 'react-router-dom'
import Money from './Money'
import GetUp from './GetUp'
function WorkPlace(){
    return (
      <div>
        <div className="topNav">
          <ul>
            <li>
              <Link to="/workplace/money">Money Page</Link>
            </li>
            <li>
              <Link to="/workplace/getup">getup Page</Link>
            </li>
          </ul>
        </div>
        <div className="videoContent">
          <div>
            <h3>视频教程</h3>
          </div>
          <Route path="/workplace/money" component={Money} />
          <Route path="/workplace/getup" component={GetUp} />
        </div>
      </div>
    );
}

export default WorkPlace;