import React, { useState, useEffect } from "react";
import { Breadcrumb } from 'app/components'
import useAuth from 'app/hooks/useAuth'
import { Span } from 'app/components/Typography'


import { styled } from '@mui/system'

const Container = styled('div')(({ theme }) => ({
    margin: '30px',
    [theme.breakpoints.down('sm')]: {
        margin: '16px',
    },
    "& .breadcrumb": {
        marginBottom: '30px',
        [theme.breakpoints.down('sm')]: {
            marginBottom: '16px',
        },
    }
}))
const StyledSpan = styled(Span)(({ bgColor }) => ({
    color: '#fff',
    padding: '2px 8px',
    borderRadius: '4px',
    background: bgColor,
}))
const Chat = () => {
  const  {user}  = useAuth();
    const [loading, setLoading] = useState(true);
    

    return (
        <Container>
           

        </Container>
    )
}

export default Chat
