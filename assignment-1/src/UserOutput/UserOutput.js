import React from 'react';

import './UserOutput.css';

const userOutput = ( props ) => {
  return (
    <div className="UserOutput">
      <p>Spicy jalapeno frankfurter ut in meatloaf mollit. Drumstick lorem nisi pig leberkas exercitation velit. Cow mollit adipisicing, ut leberkas ham hock nulla short ribs brisket enim ut pig turducken. Dolore enim pork loin kevin andouille turducken. Bacon excepteur short ribs eiusmod veniam reprehenderit exercitation deserunt strip steak alcatra sunt sed beef. Quis est ut, cupidatat frankfurter sunt jowl occaecat dolor et cow veniam laborum. Picanha flank pig turkey swine ut irure venison quis dolore boudin turducken shank shoulder magna.</p>
      <p>Dolor kielbasa officia leberkas. Turducken mollit quis, ham hock tongue sed ad esse. Cow aliqua ullamco exercitation occaecat ribeye. Magna brisket sint corned beef pancetta fatback frankfurter sed shank.</p>
      <p className="attribution">{props.username}</p>
    </div>
  );
};

export default userOutput;