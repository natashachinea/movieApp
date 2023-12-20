import { IconBrandTwitter, IconBrandYoutube, IconBrandInstagram } from '@tabler/icons-react';
import { FooterStyled, InnerContainer} from "./styles/Footer.styled.js";

// const useStyles = createStyles((theme) => ({
//     footer: {
//         marginTop: rem(50),
//         marginBottom: rem(0),
//         width: '100%',
//         height: rem(100),
//         backgroundColor: 'var(--dark-blue)',
//             borderTop: `${rem(1)} solid ${
//             theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2]
//         }`,
//
//     },
//
//     inner: {
//         display: 'flex',
//         justifyContent: 'stretch',
//         alignItems: 'center',
//         color: 'white',
//         paddingTop: rem(10),
//         paddingBottom: rem(20),
//     },
//     links: {
//         [theme.fn.smallerThan('xs')]: {
//             marginTop: theme.spacing.md,
//         },
//     },
// }));

export function Footer() {


    return (
        <FooterStyled>
            <InnerContainer>
                <IconBrandTwitter />
                <IconBrandYoutube/>
                <IconBrandInstagram />
            </InnerContainer>
        </FooterStyled>
    );
}