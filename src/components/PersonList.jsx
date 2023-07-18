import Image from "./Image.jsx";
import {createStyles, rem} from "@mantine/core";

const useStyles = createStyles((theme) => ({
    card: {
        borderRadius: rem(10),
        border: 'lightgray solid 1px',
        maxHeight: rem(100),
        boxShadow: '0 0 10px rgba(0, 0, 0, 0.2)',
    },
    image: {
        margin: rem(0),
        padding: rem(0),
        height: "auto",
    },
    description: {
        padding: rem(10),
        margin:'0%',
        overflow: 'hidden',

    }
}));




function PersonList ({results}) {
    const {classes} = useStyles();
    console.log(results);


    return (
        <div>
            <div> {
                results.map((person, index) => {
                    return (<div key={index}>
                        <Image  src={person.profile_path} alt={person.title}/>
                            <h2>{person.name}</h2>
                            <p>{person.known_for_department}</p>
                            <p>{person.known_for.map((movie, index) => {
                                return (<div key={index}>
                                    <p>{movie.title}</p>
                                </div>)
                            })}
                            </p>
                    </div>)
                })}
            </div>
        </div>
    );
}

export default PersonList;