import type { JobType } from "../../services/types";
import { Group, Button, Text, Badge } from "@mantine/core";
import clsx from "clsx";

import styles from "./jobCard.module.css";

type Props = {
  vacancy: JobType;
};

export const JobCard = ({ vacancy }: Props) => {

  return (

    <div className={styles.card}>

      <Text className={styles.title}>{vacancy.name}</Text>
        <Group className={styles.wrapper}>
          {/* <Text className={styles.salary}>{salary}</Text> */}
          <Text className={styles.experience}>
            {/* {formatExperience(vacancy.experience?.name)} */}
          </Text>
        </Group>

      <Text className={styles.company}>{vacancy.employer.name}</Text>
        <Badge
          className={styles.badge}
          // style={{ backgroundColor: bg, color: color }}
        >
          {/* {label} */}
        </Badge>
      <Text className={styles.area}>{vacancy.area.name}</Text>

      <Group className={styles.buttons}>
        <Button
          className={clsx(styles.button, styles["button-view"])}
          color="black.9"
        >
          Смотреть вакансию
        </Button>

        <Button
          className={clsx(styles.button, styles["button-apply"])}
          component="a"
          href={vacancy.alternativeUrl}
          target="_blank"
          rel="noreferrer"
          color="ultraLight.9"
        >
          Откликнуться
        </Button>
      </Group>

    </div>

      )

}

