import React from 'react'

import { Box, Card } from './styles'

export function Content() {

    const elements = [...(Array(50).keys())]

    return (
        <Box>
            {elements.map((el, index) => <Card key={index} elevation={3}>{el}</Card>)}
        </Box>
    )
}



