import * as React from 'react';
import { styled } from '@mui/material/styles';
import { Link, LinkProps } from '@mui/material';

export const StyledLink = styled(Link)<LinkProps>(({ theme }) => ({
  color: "#ffffff",
      '&:after': {
          content: '" "',
          backgroundColor:"#906CF4",
          height:"3px",
          width:"0",
          margin: "auto",
          transition: "0.3s",
          display:"block"
        },
      '&:hover:after': {
            width: "100%",
        }
}));

