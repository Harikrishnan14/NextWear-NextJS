import React from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";

const ImageUploader = () => {
    return (
        <ThemeProvider theme={theme}>
            <style jsx global>{`
                footer {
                    display: none;
                }
            `} </style>
            <FullLayout>
                Image Uploader
            </FullLayout>
        </ThemeProvider>
    )
}

export default ImageUploader