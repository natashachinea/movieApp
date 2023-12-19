import {
    createStyles,
    Menu,
    Header,
    Container,
    Group,
    rem, Text,
} from '@mantine/core';

import {Link} from "react-router-dom";


const useStyles = createStyles((theme) => ({
    header: {
        marginBottom: rem(0),
        marginRight: rem(0),
        height: rem(50),
        position: 'sticky',

    },

    inner: {
        height: rem(60),
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'center',
        backgroundColor: 'var(--dark-blue)',
        color: 'white',
    },
    link: {
        display: 'block',
        lineHeight: 1,
        padding: `${rem(4)} ${rem(4)}`,
        borderRadius: theme.radius.sm,
        textDecoration: 'none',
        color: theme.colorScheme === 'dark' ? theme.colors.gray[0] : theme.colors.gray[0],
        fontSize: theme.fontSizes.sm,
        fontWeight: 600,

        '&:hover': {
            backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[5],
        },
    },

    linkLabel: {
        marginRight: rem(0),
    },
}));



export function HeaderAction( ) {
    const { classes } = useStyles();

    return (
        <Header className={classes.header} >
            <Container className={classes.inner} fluid>
                <Group style={{marginBottom: 0}}>
                </Group>
                <Group spacing={10} >
                    <Menu trigger="hover" transitionProps={{ exitDuration: 0 }} withinPortal>
                        <Text component={Link} variant='link' to='/' className={classes.link} >Home</Text>
                        <Text component={Link} variant='link' to='/' className={classes.link} >Placeholder</Text>
                        <Text component={Link} variant='link' to='/' className={classes.link} >Placeholder</Text>
                    </Menu>
                </Group>
            </Container>
        </Header>
    );
}