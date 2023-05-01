import { Grid, Box, Typography } from '@mui/material';
import img from '../images/working.jpg';

function About() {

    return (
        <div style={{ marginTop: '6%' }}>
            <Grid container justifyContent="center" spacing={4}>
                <Grid item xs={12} md={4}>
                    <Box sx={{ mx: { xs: 'auto', sm: 4 }, my: 2, p: 2 }}>
                        <img src={img} alt="avatar" style={{ maxWidth: '100%', height: 'auto' }} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Box sx={{ mx: { xs: 2, sm: 4 }, my: 2, p: 2, }}>
                        <Typography variant="h2" gutterBottom color="white">
                            About Me
                        </Typography>
                        <Typography variant="h6" gutterBottom color="white">
                            Welcome to my portfolio! I'm Arielle, a recent graduate of UT Dallas with a Bachelor's Degree in Computer Science (May 2023)
                            and a software engineer with a passion for full-stack development.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="white">
                            I have honed my skills in the industry through two internships at JP Morgan Chase during the summers of 2021 and 2022, and
                            currently working at Capital One. My coding journey began during the summer before my senior year of high school, and I have
                            been hooked ever since. Over the years, I have continued expanding my knowledge and expertise by learning Java, Python, and JavsScript.
                            I have also participated in 8 hackathons and won at least one category in 5 of them! Moreover, I worked on various machine learning projects while continuing to learn Python.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="white">
                            What I find most fascinating about computer science is the opportunity to exercise creative problem-solving skills. The
                            constantly evolving technologies in this innovative field enhance the way we develop software, making it incredibly rewarding
                            to be a part of. My interest in full-stack development was sparked during my internships at JP Morgan Chase, where I had the
                            chance to work on full-stack applications. This experience enabled me to improve my skills and gain a better understanding
                            of how applications work as a whole, from the user interface to server-side development.
                        </Typography>
                        <Typography variant="h6" gutterBottom color="white">
                            Apart from my work in computer science, I am also an avid runner and have been training for 5Ks and other races. In the future,
                            I aspire to travel around the world and immerse myself in new cultures.
                        </Typography>
                    </Box>

                </Grid>
            </Grid>
        </div>
    );
}

export default About;