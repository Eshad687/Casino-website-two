import { Box, Card, CardContent, CardHeader, Chip, Grid, Paper, Rating } from '@mui/material';
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { bets } from '../../data/data';
import parse from 'html-react-parser';
import Image from 'next/image';
import styles from '../../styles/review.module.css';
import Head from 'next/head';


function CasinoDetail() {
    const router = useRouter()
    const casinoID = router.query.casinoId;

    const [bet, setBet] = useState(bets.find(b => b.name.toString() == casinoID));

    useEffect(() => {
        if (!casinoID) {
            router.push("/404")
        }
        window.scrollTo({
            top: 0,
            behavior: 'instant'
        });

    }, []);

    useEffect(() => {
        const temp = bets.find(b => b.name.toString() == casinoID);
        setBet(temp);
    }, [casinoID]);

    return (
        <>
            <Head>
                <title>{bet.casinoName} Review</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            {casinoID && <main >
                <Box className="my-5 pt-5 container" >
                    <Grid container spacing={2}>

                        {/* Right Side Content */}
                        <Grid item xs={12} md={8}>

                            {/* Card Content */}
                            <Box>
                                <Paper className="p-3 mb-3">
                                    <div className="d-flex justify-content-between align-items-center">
                                        <div className='d-flex'>
                                            <img style={{ borderRadius: "10px" }} width="100px" height="100px" src={bet && bet.imageURL} alt="" />
                                            <div className='ms-3'>
                                                <div className="fs-2 fw-bold">{bet && bet.casinoName}</div>
                                                <Chip sx={{ backgroundColor: "#35c193" }} className="fw-bold fs-6 my-2 text-white" label={`# ${bet && bet._id}`} />
                                            </div>

                                        </div>
                                        <div>
                                            <Rating sx={{ color: "#35c193" }} size='xl' name="read-only" value={bet ? ((bet.rating / 10) * 5) : 0} readOnly />
                                            <h1 className="fw-bold">{bet && ((bet.rating / 10) * 5)}</h1>
                                        </div>
                                    </div>
                                    <div className={`row pt-4 ${styles.featuresSection}`}>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/deposit.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>Deposit Bonus</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[0]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/spin.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>Free Spins</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[1]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/games.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>Games</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[2]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/vip.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>VIP Club</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[3]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/sports.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>Sports Betting</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[4]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-md-6 d-flex ps-5 py-3">
                                            <div className={`d-flex`}>
                                                <div className="pe-3">
                                                    <Image src="/images/svg/reviewCardIcons/unique.svg" height={30} width={30} alt="Deposit Bonus" />
                                                </div>
                                                <div>
                                                    <h6 style={{ fontWeight: '800' }}>Unique Feature</h6>
                                                    <h6 className={styles.features}>{bet && bet.cardFeatures[5]}</h6>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </Paper>
                                <Box className="d-flex justify-content-between gap-2 mb-3">
                                    <Button href={bet && bet.siteLink} className="wager-btn2 border-0 w-100 ">Get Started</Button><Button href={bet && bet.siteLink} className="wager-btn border-0 w-100">Play Now</Button>
                                </Box>
                            </Box>

                            {/* HTML Parser Content */}
                            <Box>
                                {bet ?
                                    parse(bet.reviewContent)
                                    :
                                    ""
                                }
                            </Box>
                        </Grid>

                        {/* Left Side Content */}
                        <Grid item md={4}>
                            <div style={{ position: "sticky", top: "80px" }}>
                                <Card >
                                    <CardContent>

                                        <h3 className='text-center' style={{ color: "#35c193" }}> Why should you play at {bet && bet.casinoName}?</h3>

                                        <p className='text-center'>
                                            {bet && bet.basicOverview}
                                        </p>

                                        <div className="d-flex justify-content-center"><Button className="wager-btn border-0" href={bet && bet.siteLink}>Wager On {bet && bet.casinoName} ➜</Button></div>
                                    </CardContent>
                                </Card>
                            </div>

                        </Grid>
                    </Grid>
                </Box>
            </main>}
        </>
    );
}

export default CasinoDetail;