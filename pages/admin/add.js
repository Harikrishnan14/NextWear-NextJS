import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const Add = () => {
    return (
        <ThemeProvider theme={theme}>
            <FullLayout>
                Add
            </FullLayout>
        </ThemeProvider>
    )
}

export default Add