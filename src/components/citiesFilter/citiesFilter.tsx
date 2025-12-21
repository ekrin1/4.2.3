import { Select } from '@mantine/core'
import location  from '../../assets/map-pin.svg'
import styles from './citiesFilter.module.css'

export const CitiesFilter = () => {

    // const handleCityChange = (value: string | null) => {
    // }

    return (
            <Select
                placeholder='Все города'
                data={['Все города', 'Москва', 'Санкт-Петербург']}
                // onChange={handleCityChange}
                className={styles.select}
                comboboxProps={{ shadow: 'md' }}
                leftSection={ <img src={location} alt="location" /> }
            />
        )

}