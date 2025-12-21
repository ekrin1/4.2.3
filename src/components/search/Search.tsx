import { useState } from "react";
import { Group, Title, TextInput, Button } from "@mantine/core";
import styles from './Search.module.css';
;
import SearchIcon from '../../assets/search.svg?react';


type SearchProps = {
  onSearch: (value: string) => void;
};

export const Search = ({ onSearch }: SearchProps) => { 

    const [value, setValue] = useState('');

    return (

        <div className={styles.search_container}>
            <Group className={styles.search_group}>

                <div className={styles.search_titles}>
                    <Title className={styles.search_title}>
                        Список вакансий
                    </Title>
                    <p className={styles.search_subtitle}>
                        по профессии Frontend-разработчик
                    </p>
                </div>

                <Group className={styles.search_controls}>

                    <TextInput
                        className={styles.search_input}
                        placeholder="Должность или название компании"
                        value={value}
                        onChange={(e) => setValue(e.target.value)}
                        leftSection={<SearchIcon/>}
                        size="md"
                    />
                    <Button
                        className={styles.search_button}
                        onClick={() => onSearch(value)}
                        color="primary.4"
                        size="md"
                    >
                        Найти
                    </Button>

                </Group>

            </Group>
        </div>

    )


}