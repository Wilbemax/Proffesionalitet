import { useContext, useEffect, useState } from "react"
import { ContestUI, SearchUi } from "../../shared/components"
import { Context } from "../../main"

export const ContestBlock = () => {
    const { store } = useContext(Context)
    const [loading, setLoading] = useState<boolean>(false)
    const [error, setError] = useState<boolean>(false)
    const [search, setSearch] = useState<string>("")


    const contests = store.contests;
    useEffect(() => {
        const fetchContests = async () => {
            try {
                setLoading(true)
                await store.getContests()
                setLoading(false)
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (_) {
                setError(true)
                setLoading(false)
            }

        }
        fetchContests()
    }, [])

    
    const mapContest = contests.filter(c => c.name.toLowerCase().includes(search.toLowerCase()))


    return (<>
        <SearchUi onSearch={setSearch} value={search} />
        <ContestUI contests={mapContest} loading={loading} error={error} />
    </>

    )
}