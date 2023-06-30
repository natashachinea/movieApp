import {List, Divider, createStyles, rem} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    list:{
        margin: rem(20),
        width: rem(1000),
    },
    listItem: {
        margin: rem(0),
        padding: rem(0),
        height: "auto",
        maxWidth: rem(1500),

        display: 'flex',
        alignItems: 'center',
        listStyleType: 'none',
        lineHeight: rem(15),
    },

}));
function ItemList({results}) {
    const {classes} = useStyles();

    return (
        <div className={classes.list}>
            {results.map((result, index) => (
                <div key={index} >
                <List >
                            <List.Item className={classes.listItem}>{result.name}</List.Item>
                            <Divider my="xs" />
                </List>
                </div>

            ))}

        </div>
    )
}

export default ItemList;