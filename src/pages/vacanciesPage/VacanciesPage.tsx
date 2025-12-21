
import { Search } from '../../components/search/Search'
import { FiltersSidebar } from '../../components/filterSidebar/filterSidebar';
import { JobCard } from '../../components/jobCard/jobCard';

import { Container, Group } from "@mantine/core";
import styles from "./VacanciesPage.module.css";

import type { JobType } from '../../services/types';

const dummyVacancy: JobType = {
  id: "0",
  name: "Заглушка вакансии",
  salary: { from: 0, to: 0, currency: "RUR" }, 
  experience: { name: "Не указано" },
  employer: { name: "Компания" },
  workFormat: [
    { id: "remote", name: "Удалённая работа" } 
  ],
  area: { name: "Город" },
  alternativeUrl: "#",
};

export const VacanciesPage = () => {

  return (
    <>
        <Container className={styles.container} mt="md">
            <Search onSearch={(value) => console.log(value)} />
              <Group className={styles.main}>
                <FiltersSidebar />
              </Group>
              <JobCard vacancy={dummyVacancy}/>
        </Container>
    </>
  )
}
