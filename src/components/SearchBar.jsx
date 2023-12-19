import { useNavigate, useLocation, useSearchParams } from "react-router-dom";
import {useState} from "react";
import {TextInput, ActionIcon, useMantineTheme, Center} from '@mantine/core';
import { IconSearch, IconArrowRight, IconArrowLeft } from '@tabler/icons-react';

function SearchBar () {
    const [query, setQuery] = useState("");
    // const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate();
    // const location = useLocation();
    const theme = useMantineTheme();



    const handleSubmit = (event) => {
        event.preventDefault()
        navigate(`/search?query=${query}`);
    }

    const handleChange = (event) => {
        setQuery(event.target.value)
    }

    return (

            <div>
                <form  onSubmit={handleSubmit}>
                <TextInput
                    icon={<IconSearch size="1.1rem" stroke={1.5} />}
                    radius="xl"
                    size="lg"
                    rightSection={
                        <ActionIcon size={39} radius="xl" color='teal.3' variant="filled">
                            {theme.dir === 'ltr' ? (
                                <IconArrowRight size="1.1rem" stroke={1.5} />
                            ) : (
                                <IconArrowLeft size="1.1rem" stroke={1.5} />
                            )}
                        </ActionIcon>
                    }
                    placeholder="Type your search here"
                    rightSectionWidth={42}
                    value={query}
                    onChange={handleChange}
                    style={{width: '100%'}}
                />
                </form>
            </div>

    )
}

export default SearchBar;