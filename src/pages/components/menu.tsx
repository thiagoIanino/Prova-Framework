import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { AiOutlineMenu } from "react-icons/ai";
import { Link ,useHistory} from 'react-router-dom'

import './menu.css'

interface MenuProps{
    op1:string,
    op2:string
}

 const SimpleMenu: React.FC<MenuProps> = (props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
 


  const handleClick = (event: React.MouseEvent<HTMLButtonElement>   ) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);

  };
  
const history = useHistory()




  

  
  return (
    <div id="divmenu">
      <Button aria-controls="simple-menu" aria-haspopup="true" onClick={handleClick}>
        <AiOutlineMenu/>
      </Button>
      <Menu
      
        id="simple-menu"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
          

        <MenuItem  onClick={()=>(history.push(`/`))}>Home</MenuItem>
       
        <MenuItem onClick={()=>(history.push(`/${props.op1}`))}>{props.op1}</MenuItem>
        <MenuItem onClick={()=>(history.push(`/${props.op2}`))}>{props.op2}</MenuItem>
      </Menu>
    </div>
  );
}

export default SimpleMenu