import { Avatar, Box, Icon, Link, Stack, Typography } from '@mui/material'
import { Container } from '@mui/system'
import Image from 'next/image'
import NextLink from 'next/link'
import React from 'react'
import { StyledLink } from '../Link'

//Comentario
const Navbar = () => {
  return (
    <Box display="flex"  width="100vw"alignItems="center" bgcolor="#000" p="1rem 3rem">
      <Box  display="flex" >
          <Avatar sx={{ 
            bgcolor: "#906CF4", 
            width: "7rem",
            height: "7rem" 
          }} >
              {""}
          </Avatar>
          <Box p="1rem" display="flex" flexDirection="column">
              <Typography variant="h4" m="0" gutterBottom sx={{color: "#fff"}} >
                  Alejo Rojas
              </Typography>
              <Stack  direction="row" spacing={2}>
                <NextLink href="">
                  <StyledLink  href="" underline="none"  color="#fff" >Mi perfil</StyledLink>
                </NextLink>
                <NextLink href="">
                  <StyledLink  href="" underline="none"  color="#fff" >Destacados</StyledLink>
                </NextLink>
                <NextLink href="">
                  <StyledLink  href="" underline="none"  color="#fff" >Cerrar Sesion</StyledLink>
                </NextLink>
            </Stack>
          </Box>
        </Box>
        <Box paddingLeft={90}>
          <Image src="/DH-Logo.png" alt='logo-dh' width={80} height={60} />
        </Box>
    </Box>
  )
}

export default Navbar