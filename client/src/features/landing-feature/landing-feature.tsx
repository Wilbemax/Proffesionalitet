import { useContext, useEffect, useState } from "react"
import { Context } from "../../main"
import { Landing } from "../../shared/components"
import { ContestI } from "../../shared/http/type"

export const LandingFeature = () => {
    const { store } = useContext(Context)
    const [contests, setContests] = useState<ContestI[]>([])
    
    useEffect(() => {
        const fetchContests = async () => {
            await store.getContests()
            setContests(store.contests)
        }
        fetchContests()
    }, [store])

    return <Landing contests={contests} />
}
