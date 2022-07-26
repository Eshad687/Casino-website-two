import {useRouter} from 'next/router'

function CasinoDetail() {
    const router = useRouter()
    const casinoID = router.query.casinoId

    return <h1>Casino Detail Page. {casinoID}</h1>
}

export default CasinoDetail;