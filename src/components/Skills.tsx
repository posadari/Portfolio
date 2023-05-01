import { Chip, Box, Stack, Typography } from '@mui/material';

const BasicChips = () => {
    const skillsList: string[] = [
        'React', 'Java', 'Python', 'Node.js',
        'Express.js', 'TypeScript', 'MongoDB', 'Spring Boot',
    ];

    const chips: JSX.Element[] = skillsList.map((skill) => (
        <Chip sx={{
            backgroundColor: '#D9D9D9',
            fontWeight: 'bold',
            fontSize: '18px',
            height: '32px', 
          }} key={skill} label={skill} />
    ));

    /* This function transforms an array of chips into a 2D array of chips, 
     where each row contains at most 4 chips. */
    const rows: JSX.Element[][] = chips.reduce((acc, chip, index) => {
        const rowIndex = Math.floor(index / 4);
        acc[rowIndex] = acc[rowIndex] || [];
        acc[rowIndex].push(chip);
        return acc;
    }, [] as JSX.Element[][]);

    return (
        <div>
            <Box
                display="flex"
                flexDirection="column"
                alignItems="center"
                p={{ xs: 1, sm: 2 }}
            >
                <Typography variant="h6" gutterBottom color="white">
                    Skills:
                </Typography>
                {rows.map((row, index) => (
                    <Stack key={index} direction="row" spacing={1} sx={{ mb: 1 }}>
                        {row}
                    </Stack>
                ))}
            </Box>
        </div>
    );
};

export default BasicChips;
