import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import Paper from '@material-ui/core/Paper'
import Link from 'next/link'
import React from 'react'


type SubheaderProps = {
  links: string[]
}

export function Subheader({links}:SubheaderProps) {

  return (
    <Paper square style={{display:'flex',justifyContent:'center',padding:'10px'}}>
      <ButtonGroup size='small' variant="outlined"  aria-label="small outlined button group">
        {links.map((link,index) => <Button color='secondary' key={index}>
          <Link href='/'>
            {link}
          </Link>
        </Button>)}
      </ButtonGroup>
    </Paper>
  );
}
