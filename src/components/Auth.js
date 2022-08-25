import { Box, Typography, TextField } from "@mui/material"
import React from "react"

const Auth = () => {
  return (
    <div>
      <form>
        <Box display="flex" flexDirection={"column"}>
          <Typography>Login</Typography>
          <TextField />
          <TextField />
          <TextField />
        </Box>
      </form>
    </div>
  )
}

export default Auth
