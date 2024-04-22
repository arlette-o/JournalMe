import { Box, Paper } from "@mui/material";


//https://www.youtube.com/watch?v=wyVFo2X5IM8&ab_channel=AmruthPillai
const Calendar = () => {
    return (<Box
        sx={{
            display: 'flex',
            flexWrap: 'wrap',
            '& > :not(style)': {
                m: 1,
                width: 128,
                height: 128,
            },
        }}
    >
        <Paper />
    </Box>)
}

export default Calendar;