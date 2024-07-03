import React from "react"
import { Outlet } from "react-router-dom"

import Menu from "../components/navbar/index"
import { Stack } from "@mui/material"

const Core = () => {
  return (
    <Stack direction={"column"}>
      <Menu />
      <Outlet />
    </Stack>
  )
}

export default Core