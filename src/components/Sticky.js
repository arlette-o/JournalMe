import { Card, CardContent, CardHeader, Typography, IconButton } from "@mui/material";
import RemoveIcon from '@mui/icons-material/Remove';


/* StickyObject = {
    Color, Title, Content, Index
} */

const Sticky = ({ data, subFunc }) => {
    return (

        <Card sx={{ width: 275, height: 275, bgcolor: data.color }}>
            <CardHeader
                title={data.title}
                action={
                    <IconButton onClick={(e) => { subFunc(e, data.index) }}>
                        <RemoveIcon />
                    </IconButton>
                } />
            <CardContent>
                <Typography>
                    {data.content}
                </Typography>
            </CardContent>
        </Card>

    )
}

export default Sticky;