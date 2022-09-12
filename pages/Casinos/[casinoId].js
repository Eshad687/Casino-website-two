import { Card, Chip, Paper, Rating } from '@mui/material';
import { useRouter } from 'next/router'
import Footer from '../../components/Footer';
import Navbarr from '../../components/Navbarr';

function CasinoDetail() {
    const router = useRouter()
    const casinoID = router.query.casinoId

    return <div style={{ backgroundColor: '#f5f5f5' }}>
        <Navbarr />
        <div className="pt-5">

        </div>
        <div className="my-5 container" >
            <Paper className="p-3">
                <div className="d-flex justify-content-between align-items-center">
                    <div className='d-flex'>
                        <img style={{ borderRadius: "10px" }} width="100px" height="100px" src="https://cryptobetting.org/wp-content/uploads/2021/06/stake-logo-1_crypto-sports-betting-site.png" alt="" />
                        <div className='ms-3'>
                            <div className="fs-2 fw-bold">Stake</div>

                            <Chip sx={{ backgroundColor: "#35c193" }} className="fw-bold fs-6 my-2 text-white" label="# 1" />
                        </div>

                    </div>
                    <div>
                        <Rating sx={{ color: "#35c193" }} size='xl' name="read-only" value={4} readOnly />
                        <h1 className="fw-bold">4.2</h1>
                    </div>
                </div>
            </Paper>
            <div className="my-5">
                <img style={{ borderRadius: "10px" }} width="100%" src="https://cryptobetting.org/wp-content/uploads/2021/06/stake-review.png" alt="" />
            </div>
            <div>
                <div className="K2-pros-cons">
                    <div className="pros-container">
                        <h2 className="heading">Pros</h2>

                        <ul className="pros">
                            <li>  Very Good Reputation. We could not find more than a few legit complaints about Stake online.</li>
                            <li>Curacao License. Like most sites of its kind, Stake has a license in Curacao. </li>
                            <li>Good Customer Service. Even though Stake doesn’t meet the gold standard in customer service, it is still above average.
                            </li>
                            <li>Awesome Promotions. Stake makes your experience as fun as it can be by launching new promotions</li>
                            <li>Even though VIP programs are standard on these sites nowadays, Stake takes its own program to the next level.</li>
                        </ul>
                    </div>

                    <div className="cons-container">
                        <h2 className="heading">Cons</h2>

                        <ul className="cons">
                            <li>Not Anonymous. You can not play anonymously on Stake</li>
                            <li>xcellent Gaming Experience. Stake‘s website offers a modern design and is easy to use.</li>
                            <li>Lightspeed Registration. Stake‘s registration process is modern and should take less than a minute. </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>

        <Footer />
    </div>
}

export default CasinoDetail;