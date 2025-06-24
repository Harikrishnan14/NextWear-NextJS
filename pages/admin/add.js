import React, { useState } from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
    Grid,
    Stack,
    TextField,
    Checkbox,
    FormGroup,
    FormControlLabel,
    RadioGroup,
    Radio,
    FormLabel,
    FormControl,
    Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";

const Add = () => {

    const [form, setForm] = useState({})
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = (e) => {
        e.preventDefault()
    }

    return (
        <ThemeProvider theme={theme}>
            <style jsx global>{`
                footer {
                    display: none;
                }
            `} </style>
            <FullLayout>
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={12}>
                        <BaseCard title="Add a Product">
                            <Stack spacing={3}>
                                <TextField name="title" value={form.title ? form.title : ""} onChange={onChange} label="Title" variant="outlined" />
                                <TextField name="type" value={form.type ? form.type : ""} onChange={onChange} label="Type" variant="outlined" />
                                <TextField name="size" value={form.size ? form.size : ""} onChange={onChange} label="Size" variant="outlined" />
                                <TextField name="color" value={form.color ? form.color : ""} onChange={onChange} label="Color" variant="outlined" />
                                <TextField name="slug" value={form.slug ? form.slug : ""} onChange={onChange} label="Slug" variant="outlined" />
                                <TextField
                                    name="description"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    value={form.description ? form.description : ""}
                                    onChange={onChange}
                                />
                            </Stack>
                            <br />
                            <Button variant="contained" mt={2} onClick={handleSubmit}>
                                Submit
                            </Button>
                        </BaseCard>
                    </Grid>
                </Grid>
            </FullLayout>
        </ThemeProvider>
    )
}

export default Add