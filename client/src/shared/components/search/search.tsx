import { Search } from 'lucide-react'
import { Container, Input } from '../../ui'
import classes from './classes.module.css'

type SearchProps = {
    onSearch: (value: string) => void
    value: string
}

export const SearchUi = ({ value, onSearch }: SearchProps) => {
    
    return (
        <Container>
            <p className={classes.title}>Поиск</p>
            <Input icon={<Search />} onChange={(e) => onSearch(e.target.value)} value={value} type='text' theme='dark' placeholder={'Найти конкурс'} fz={18}/>
        </Container>
    )
}