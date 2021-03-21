import React  from 'react'
import Change1 from './change.js'
import Change from './change2.js'
import Fruits from './fruits.js'
import Animal from './animal.js'
import Grid from '@material-ui/core/Grid'

const Component = () =>{
  



return(
<div   style={{
        backgroundColor: 'black', 
        height : '100%',
        color : 'white',
  

        
      }}>
<Grid container justify = "center" justifyContent="space-between">
 

<div><Change1/></div>
<div><Change/></div>
</Grid>
<Grid container >
<Fruits/>
</Grid>
<Grid container >
<Animal/>
</Grid>
</div>



	)

}
export default Component;