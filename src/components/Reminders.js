import { useState } from 'react';

import { Box, Button, Dialog, FormControl, IconButton, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import Sticky from "./Sticky"
import { BLUE, GREEN, PINK, PURPLE, WHITE, YELLOW } from "../constants/constants"

import "./reminder.css";

const Reminders = () => {
    const [stickyArray, setStickyArray] = useState([{ title: "TITLE", content: "CONTENT", index: 0, color: BLUE }]);
    const [open, setOpen] = useState(false);
    const [color, setColor] = useState(BLUE);

    const addSticky = () => {
        setStickyArray([...stickyArray, { title: "TITLE" + stickyArray.length, content: "CONTENT", index: stickyArray.length, color: color }])
        handleClose();
    };

    const subSticky = (e, toRemove) => {
        e.preventDefault();
        let index = 0;
        let count = 0;
        let stickyCopy = [];

        for (let j = 0; j < stickyArray.length; j++) {
            if (stickyArray[j].index !== toRemove) {
                stickyCopy[index] = stickyArray[j];
                stickyCopy[index].index = count;
                index += 1;
                count += 1;
            }
        }
        setStickyArray(stickyCopy);
    };

    const handleClose = () => { setOpen(false) }

    const StickyMenu = () => {

        const handleSelect = (e) => {
            e.preventDefault();
            setColor(e.target.value);
        };

        return (
            <Dialog open={open} onClose={handleClose}>
                <IconButton edge="start" onClick={handleClose} aria-label="close">
                    <CloseIcon />
                </IconButton>
                <FormControl>
                    <InputLabel shrink>Select Color</InputLabel>
                    <Select notched value={color} label="Select Color" onChange={(e) => handleSelect(e)} sx={{ bgcolor: color }}>
                        <MenuItem sx={{ backgroundColor: BLUE }} value={BLUE}>Blue</MenuItem>
                        <MenuItem sx={{ backgroundColor: GREEN }} value={GREEN}>Green</MenuItem>
                        <MenuItem sx={{ backgroundColor: PINK }} value={PINK}>Pink</MenuItem>
                        <MenuItem sx={{ backgroundColor: PURPLE }} value={PURPLE}>Purple</MenuItem>
                        <MenuItem sx={{ backgroundColor: WHITE }} value={WHITE}>White</MenuItem>
                        <MenuItem sx={{ backgroundColor: YELLOW }} value={YELLOW}>Yellow</MenuItem>
                    </Select>
                    <TextField label="Title" InputLabelProps={{ shrink: true }}> </TextField>
                    <TextField label="What's on your Mind?" InputLabelProps={{ shrink: true }}></TextField>
                    <Button onClick={addSticky}>Create</Button>
                </FormControl>
            </Dialog>
        )
    }

    return(
        <Box component="span" sx={{ display: 'inline-flex', width: 1200 }}>
            {stickyArray.map((stickyItem, i) => (
                //console.log(stickyItem)
                <Sticky data={stickyItem} subFunc={subSticky} key={i} />
            ))}
            <IconButton onClick={() => setOpen(true)}>
                <AddCircleOutlineIcon />
            </IconButton>
            <StickyMenu />
        </Box> 
    )
}

export default Reminders;