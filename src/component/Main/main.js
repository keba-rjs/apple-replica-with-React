import React,{Component} from 'react';

import Firstdisplay from './Firstdisplay/firstdisplay.js';
import Seconddisplay from './Seconddisplay/seconddisplay.js';
import Thirddisplay from './Thirddisplay/thirddisplay.js';
import Fourthdisplay from './Fourthdisplay/fourthdisplay.js';
import Fifthdisplay from './Fifthdisplay/fifthdisplay.js';
import Sixthdisplay from './Sixthdisplay/sixthdisplay.js';
import Youtube from './Youtube/youtube.js';



class Main extends Component {
  render (){
    return(
     <div>
     <Firstdisplay/>
     <Seconddisplay/>
     <Thirddisplay/>
     <Fourthdisplay/>
     <Fifthdisplay/>
     <Sixthdisplay/>
     <Youtube />
     </div>
   );
  }
}

export default Main;
