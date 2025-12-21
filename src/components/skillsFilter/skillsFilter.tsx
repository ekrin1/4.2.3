import { useState } from "react";
import { Group, Card, Text, Pill, PillGroup, TextInput, ActionIcon } from "@mantine/core";
import { IconPlus } from "@tabler/icons-react";

import styles from "./skillsFilter.module.css";

export const SkillsFilter = () => { 
     
    const [input, setInput] = useState("");

    // const addSkill = () => {}

    // const removeSkill = (skill: string) => {}

    // const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    //     if (e.key === 'Enter') {
    //         e.preventDefault();
    //         addSkill();
    //     }
    // }

    return ( 

        <Card className={styles.card}>
            <Text fw={600} mb='sm' className={styles.title}>
                Ключевые навыки
            </Text>

            <Group className={styles.form}>
                <TextInput 
                    placeholder="Навык"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    // onKeyDown={handleKeyDown}
                    className={styles.form_input}   
                />
                <ActionIcon
                    // onClick={//addSkill}
                    className={styles.form_button}
                    color="#228BE6"
                >
                    <IconPlus />
                </ActionIcon>
            </Group>

            <Group className={styles.pills}>
                <PillGroup>
                    {/* {skills.map((skill) => ( */}
                        <Pill 
                        // key={skill} 
                        // onRemove={() => removeSkill(skill)}
                        className={styles.pills_skill}
                        >
                            {/* {skill} */}
                        </Pill>
                    {/* ))} */}
                </PillGroup>
            </Group>

        </Card>

    );
}