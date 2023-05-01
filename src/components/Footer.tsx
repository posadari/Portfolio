import React from "react";
import { Box, Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { GitHub as GitHubIcon, LinkedIn as LinkedInIcon, Code as CodeIcon } from "@mui/icons-material";

const Footer = () => {
    return (
        <Box
            sx={{
                width: "100%",
                height: "64px", // same height as header (?)
                backgroundColor: "#0E0D1C",
                py: "20px",
            }}
        >
            <Container maxWidth="lg">
                <Grid container direction="column" alignItems="center" spacing={2}>
                    <Grid item>
                        <Grid container spacing={4}>
                            {[
                                { label: "Home", href: "/" },
                                { label: "About", href: "/about" },
                                { label: "Experience", href: "/experience" },
                                { label: "Projects", href: "/projects" },
                            ].map(({ label, href }) => (
                                <Grid item key={label}>
                                    <Typography color="white" variant="subtitle1">
                                        <Link
                                            href={href}
                                            sx={{
                                                color: "#FFF",
                                                "&:hover": {
                                                    color: "#f2f2f2",
                                                },
                                            }}
                                        >
                                            {label}
                                        </Link>
                                    </Typography>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                    <Grid item>
                        <Grid container spacing={2}>
                            {[
                                {
                                    href: "https://github.com/posadari",
                                    icon: <GitHubIcon sx={{ color: "white" }} />,
                                },
                                {
                                    href: "https://www.linkedin.com/in/posadari/",
                                    icon: <LinkedInIcon sx={{ color: "white" }} />,
                                },
                                {
                                    href: "https://devpost.com/arielle1901",
                                    icon: <CodeIcon sx={{ color: "white" }} />,
                                },
                            ].map(({ href, icon }) => (
                                <Grid item key={href}>
                                    <IconButton
                                        href={href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        {icon}
                                    </IconButton>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                </Grid>
            </Container>
        </Box>
    );
};

export default Footer;