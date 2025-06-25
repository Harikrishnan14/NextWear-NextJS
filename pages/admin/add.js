import React, { useState } from 'react'
import FullLayout from "../../src/layouts/FullLayout";
import { ThemeProvider } from "@mui/material/styles";
import theme from "../../src/theme/theme";
import {
    Grid,
    Stack,
    TextField,
    Button,
} from "@mui/material";
import BaseCard from "../../src/components/baseCard/BaseCard";
import { Bounce, toast, ToastContainer } from 'react-toastify';

const Add = () => {

    const [form, setForm] = useState({})
    const onChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = async (e) => {
        e.preventDefault()
        let data = { form }
        let a = await fetch(`${process.env.NEXT_PUBLIC_HOST}/api/addproducts`, {
            method: "POST",
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        })
        let res = await a.json()
        if (res.success) {
            toast.success("Product added successfully!", {
                position: "bottom-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
            setForm({})
        } else {
            toast.error("Oops, something went wrong!", {
                position: "bottom-center",
                autoClose: 3500,
                hideProgressBar: false,
                closeOnClick: false,
                pauseOnHover: false,
                draggable: true,
                progress: undefined,
                theme: "light",
                transition: Bounce,
            });
        }
    }

    return (
        <ThemeProvider theme={theme}>
            <style jsx global>{`
                footer {
                    display: none;
                }
            `} </style>
            <FullLayout>
                <ToastContainer
                    position="bottom-center"
                    autoClose={3500}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick={false}
                    rtl={false}
                    pauseOnFocusLoss
                    draggable
                    pauseOnHover={false}
                    theme="dark"
                    transition={Bounce}
                />
                <Grid container spacing={0}>
                    <Grid item xs={12} lg={12}>
                        <BaseCard title="Add a Product">
                            <Stack spacing={3}>
                                <TextField name="title" value={form.title ? form.title : ""} onChange={onChange} label="Title" variant="outlined" />
                                <TextField name="size" value={form.size ? form.size : ""} onChange={onChange} label="Size" variant="outlined" />
                                <TextField name="price" value={form.price ? form.price : ""} onChange={onChange} label="Price" variant="outlined" />
                                <TextField name="category" value={form.category ? form.category : ""} onChange={onChange} label="Category" variant="outlined" />
                                <TextField name="color" value={form.color ? form.color : ""} onChange={onChange} label="Color" variant="outlined" />
                                <TextField name="slug" value={form.slug ? form.slug : ""} onChange={onChange} label="Slug" variant="outlined" />
                                <TextField name="availableQty" value={form.availableQty ? form.availableQty : ""} onChange={onChange} label="Available Qty" variant="outlined" />
                                <TextField
                                    name="desc"
                                    label="Description"
                                    multiline
                                    rows={4}
                                    value={form.desc ? form.desc : ""}
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