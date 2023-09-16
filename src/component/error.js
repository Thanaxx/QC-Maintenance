import React from 'react';
import '../../src/style/error.css';

function error() {
  return (
    <>
        <div className="main-wrap">
            <div className="main-content">
                <h3>ADVISORY</h3>
                <h1>ONGOING WEBSITE MAINTENANCE ACTIVITY</h1>
                <p>Dear valued guest, <br />
                    To enhance your experience while navigating our website, you may direct all
                    inquiries and comments to our official Facebook page: New San Jose Builders, Inc.
                    For any other concerns, contact us at +63917-800-2260 or +63933-822-4522. <br/>

                    Thank you and we hope to see you soon!
                </p>
            </div>

            <div className="robot-gif">
                <img src="/img/DKke.gif" alt="" />
            </div>
        </div>
    </>
  )
}

export default error