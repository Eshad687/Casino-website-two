import { Card, CardContent, CardHeader, Chip, Grid, Paper, Rating } from '@mui/material';
import { useRouter } from 'next/router'
import { Button } from 'react-bootstrap';
import Curriencies from '../../components/Curriencies';
import Features from '../../components/Features';
import Footer from '../../components/Footer';
import Navbarr from '../../components/Navbarr';
import { bets } from '../../data/data';
export const getStaticProps = async ({ params }) => {
    const betss = bets.filter(b => b.casinoName.toString() == params.casinoId)
    return {
        props: {
            casino: betss[0],
        }
    }
}

export const getStaticPaths = async () => {
    // const bets = (await import("../assets/data/data.json")).default
    const paths = bets.map(bet => ({
        params: { casinoId: bet.casinoName.toString() }
    }))
    return { paths, fallback: false }
}
function CasinoDetail({ casino }) {
    console.log(casino)
    const router = useRouter()
    const casinoID = router.query.casinoId

    return <div  >

        <div className="pt-5">

        </div>
        <div className="my-5 container" >

            <Grid container spacing={2}>
                <Grid item xs={12} md={8}>
                    <Paper className="p-3 mb-3">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className='d-flex'>
                                <img style={{ borderRadius: "10px" }} width="100px" height="100px" src="https://cryptobetting.org/wp-content/uploads/2021/06/stake-logo-1_crypto-sports-betting-site.png" alt="" />
                                <div className='ms-3'>
                                    <div className="fs-2 fw-bold">Stake</div>

                                    <Chip sx={{ backgroundColor: "#35c193" }} className="fw-bold fs-6 my-2 text-white" label="# 1" />
                                </div>

                            </div>
                            {/* <div className='row'>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Features</h5>
                                <div>
                                    {products && products.map((e) => (
                                        <Features key={id} productsArray={e} />
                                    ))}
                                </div>
                            </div>
                            <div className={`${styles.header1} col-md-6`} >
                                <h5 className={styles.bonus}>Currencies</h5>
                                <div style={{ display: 'flex', flexWrap: 'wrap' }}>
                                    {
                                        currencies && currencies.map((e) => (
                                            <Curriencies key={id} taka={e} />
                                        ))
                                    }
                                </div>
                            </div>
                        </div> */}
                            <div>
                                <Rating sx={{ color: "#35c193" }} size='xl' name="read-only" value={4} readOnly />
                                <h1 className="fw-bold">4.2</h1>
                            </div>
                        </div>
                    </Paper>
                    <div className="d-flex justify-content-between gap-2 mb-3"><Button className="wager-btn2 border-0 w-100 ">Get Started</Button><Button className="wager-btn border-0 w-100">Play Now</Button></div>
                    <div className='rev'>
                        <p>JustBit is a brand-new casino in the gambling world that was launched only a year ago, but it has already managed to engage a great number of punters from all parts of the world. The developers have worked hard to create high-quality services in every section and that’s why we are seeing such an enormous engagement of players. JustBit bitcoin casino is an entirely legitimate place since it is owned by a company called Casbit Group N.V. which operates under the laws of Curacao. This means that you can safely provide funds here without worrying about losing them!</p>
                        <p>
                            Despite being a relatively new platform, JustBit creators are working hard on a daily basis in order to improve every segment of their website. While there is still a lot of work to do, you will still get enormous enjoyment playing high-class and engaging games there. When surfing the site, you will come across fascinating animations and diverse colors that will further enhance the overall impression. The creators at JustBit have taken into mind that there is a vast number of newbies in the gambling field, so they have established a user-friendly website design in order to make life easier for them. All the essential buttons and information are presented on the screen, so you will be able to navigate there pretty effortlessly.
                        </p>
                        <img className="my-2" style={{ borderRadius: "10px" }} width="100%" src="https://cryptobetting.org/wp-content/uploads/2021/06/stake-review.png" alt="" />

                        <p>Apart from being a completely safe place, the JustBit casino includes some appealing features in other aspects as well. It comes as no surprise that the game section is the number one priority for every online gambling platform and they spend all their energy developing this department. Therefore, JustBit has managed to launch thousands of games despite being a relatively new casino in the market. The majority of these games are placed in the slots section, but you will also come across a big portion of table games, live casino games, and so forth. So, you have a perfect chance to try your luck in other game segments in case you are tired of playing slots all the time!</p>

                        <p>
                            What’s more, every game that you encounter on this platform is provided by the industry’s leading software development companies. JustBit has decided to partner with them in order to make customers experience high-class and fascinating products, and we have to say, that they have definitely served their purpose perfectly! Hence, you have the opportunity to experience amazing graphics and visuals as well as simplified playing mechanics in every game. Also, there is a chance that you encounter beloved themes in slots that will make you engaged there for a long time!
                        </p>

                        <p>
                            We have to note that JustBit attracts punters not only by a massive library of high-quality games but by offering them lavish proposals in terms of bonuses and promotions. This is one more crucial aspect of every gambling platform these days since by doing so, they make every user feel inspired to stay on the website and continue gambling. Here, you will encounter several types of offerings that will help you to get on the right path from the very beginning and more opportunities will come up as you become a devoted member of the JustBit website.
                        </p>
                        <p>As you can tell, the JustBit crypto casino is a dream destination for many gamblers even though it has appeared in the gambling world only a year ago. Keep in mind that we are dealing with a completely trustworthy platform where there are immense possibilities when it comes to the game department and promotional offers. Also, a dedicated customer support service team is ready to assist you with every problem, so feel free to ask whatever you want!</p>
                        <p>
                            In this JustBit casino review, we will take a look at some of the most important features. Down below, you will find out what game sections are available here, how many types of bonuses you will get, and what the registration process looks like. In the end, you will be able to decide whether this platform is suitable for you or not!
                        </p>

                        <h4 className='que'>Is JustBit Safe?</h4>
                        <p>
                            Yes, JustBit crypto casino is one of the safest options that you can find in the gambling world. It carries a license from a Casbit Group N.V. company that works under the laws of Curacao. This is a huge factor when it comes to safety and reliability since any regulator residing in Curacao has a highly reputable name and if any gambling platform is regulated by them, it means that you are protected from any kind of fraud and manipulation.
                        </p>

                        <p>
                            Moreover, due to the fact that JustBit crypto casino is partnered with the industry’s leading software development companies, you are guaranteed that every game is 100% safe and fair here. This is because all of them include provably fair technology that allows you to check the fairness of every round by yourself. This means that it is pretty much impossible for casino operators to cheat on you and manipulate the game results, so feel free to play any game comfortably on this website.
                        </p>
                        <p>
                            One more attribute that defines the absolute safety of the JustBit casino is that it supports cryptocurrencies as a form of payment. It is a well-known fact that cryptos utilize blockchain technology in order to protect every transaction maximally, so you will be able to deposit and withdraw funds here without worrying about anything. What’s more, every payment takes place within a few minutes when it comes to cryptocurrencies, so you no longer need to wait for a while for this process. Hence, we can firmly state that the JustBit crypto casino is absolutely safe destination for everyone!
                        </p>

                        <h4 className='que'>JustBit Bitcoin Deposits/Withdrawals – What Are The Options?</h4>
                        <p>
                            JustBit crypto casino gives you the opportunity to deposit and withdraw funds using the following cryptocurrencies – Bitcoin, Ethereum, Litecoin, Neo, Ripple, Cardano, Doge, Tether, Tron, Binance Coin, and Bitcoin SV. These are some of the most popular cryptos in the world, so it comes as no surprise that JustBit has decided to implement them in their games. The process of crypto gambling is very simple as it requires only a few steps which we will cover below, and keep in mind that you will experience the highest security and instant transactions when it comes to cryptocurrencies.
                        </p>
                        <p>
                            As for the fiat currencies, you have the possibility to use EUR, USD, PLN, SGD, CZK, KRW, JPY, and NZD in this casino. However, being a newly established website, the developers are still working to fully enable this process for customers, so right now you might experience a few problems when depositing and withdrawing money with fiat currencies. But, they will fix everything in the near future and this process will be as simple as with cryptos! As you can tell, JustBit casino includes diverse opportunities when it comes to deposits and withdrawals in order to satisfy every user. So, feel free to choose whichever option is right for you and start gambling as soon as possible!
                        </p>
                        <h4 className='que'>JustBit Bitcoin Deposits/Withdrawals – What Are The Options?</h4>
                        <p>
                            In this section, we are going to talk about the minimum and maximum limits of deposits and withdrawals in the JustBit crypto casino. Obviously, the exact numbers depend on the payment method you choose, so you have to read about the limits before option for certain options. When it comes to the payments made by Visa and Mastercard the limit per transaction is 5,000 EUR, per day is 10,000 EUR, and per month is 15,000 EUR. So, this is a perfect opportunity for punters who love to gamble with huge stakes!
                        </p>
                        <p>
                            There is a limit when you deposit funds with cryptocurrencies since you need to provide at least 0.0005 BTC in order to start gambling here. The same amount applies to other cryptos as well, so the picture looks like this – 0.0005 BTC, 0.1 LTC, 0.006 ETH, 1 NEO, 10 ADA, 0.04 BCH, 100 DOGE, 0.05 BNB, 300 TRX, 0.2 BSV, and 20 XRP. Given the fact that nowadays the value of every crypto has fallen significantly, this is an excellent opportunity for every punter!
                        </p>
                        <img className="my-2" style={{ borderRadius: "10px" }} width="100%" src="https://justbit.io/?stag=11305_6349077b3e07630490794580" alt="" />

                        <p>
                            As for the maximum deposit, there is no limit in this case. You have the possibility to deposit as much as you wish! This is one more great piece of news for several punters who enjoy gambling with high stakes but keep in mind that it is connected with considerable risks as well.
                        </p>
                        <p>
                            When it comes to minimum withdrawals in the JustBit casino with cryptos, we want to highlight that they include exactly the same amounts as deposits. This means that you are able to withdraw as much money as you can deposit here! In case you utilize fiat currencies, the minimum withdrawal is going to be 20 EUR or its equivalent in the other currencies. As for the maximum crypto withdrawals, you can go up to 50k EUR daily and 500k EUR monthly on this platform!
                        </p>
                        <p>
                            One of the most impressive qualities of crypto payments is that you will experience instant deposits that take place within seconds. When it comes to withdrawals, they might take a few minutes since the network gets overloaded sometimes, so you need to wait for a bit for them to be visible! As you can see, the casino features pretty fair numbers regarding the deposit and withdrawal limits. So, every type of punter will be satisfied here – those who wish to gamble with small amounts and those who love to play with enormous stakes!
                        </p>
                        <h4 className='que'>What Games Can You Play At JustBit?</h4>
                        <p>Now it’s time to talk about the most important aspect of the JustBit bitcoin casino which is their game department! As we have mentioned above, despite being a brand-new gambling platform, it has already managed to launch more than a thousand games on the website which is a pretty impressive number! Most products lie in the slots category which is no surprise since they are the most frequently played casino games in the whole gambling industry. Also, you will come across many titles in the table and live casino sections as well which are also frequently visited!</p>
                        <p>
                            So, JustBit allows users to take a rest from playing slots and switch to some other games from time to time in order to feel diversity in gameplay. Most importantly, all their products are developed by the industry’s leading software development providers meaning that you will run into fascinating visuals and simplified playing mechanics here. You can choose different sections of games with the help of the navigation bar located on the left side. Down below, we will describe the most popular game segments on this website and note frequently played titles!


                        </p>
                        <img className="my-2" style={{ borderRadius: "10px" }} width="100%" src="https://bitcoincasinosreviews.com/wp-content/uploads/2022/07/JustBit-Games.png" alt="" />
                        <p>It is also important to note that every game that you run into in JustBit casino is developed by top software development companies such as BGaming, Betsoft, Booming Games, Belatra, Amatic, Evoplay, Netent, Evolution Gaming, Igrosoft, Nolimit City, and many others. These providers have worked hard to establish high-class and enchanting graphics in every product and as a result, you have a chance to get a memorable gambling experience here.</p>
                        <p>
                            Also, the website includes a search bar in case you want to find the desired games quickly. You can sort them by their first letters as well as by providers, so you will have no difficulty finding your favorite slots on this website. Continue reading to find out what you should expect in the game department of the JustBit crypto casino!
                        </p>
                        <h5 className="que">Slots</h5>
                        <img className="my-2" style={{ borderRadius: "10px" }} width="100%" src="https://bitcoincasinosreviews.com/wp-content/uploads/2022/07/JustBit-slots.png" alt="" />
                        <p>Slots are by far the most frequently played games in the majority of casinos these days. So, it comes as no surprise that JustBit developers spend most of their time and energy launching high-quality products in this segment that will engage every visitor. You can access every slot here just by clicking on the “Slots” button from the top menu and as we have said, there is a search bar where you have to enter the name of the desired game. In this department, you will come across various themes and some innovative elements in terms of gameplay. Do you love old classic-styled slots that include modern looks and improved abilities? Then JustBit casino is offering tremendous possibilities for you since there is a vast number of delightful games here. All the symbols and pictures are beautifully depicted which creates an eye-catching atmosphere as you spin the reels.</p>
                        <p>
                            Some of the most frequently played slots here include Gates of Olympus, Buffalo Hunter, Aztec Magic Bonanza, Micro Pirates, Mental, Big Bass Splash, Big Bass Bonanza, Folsom Prison, and many others. All of them promise to give you enormous excitement every time!
                        </p>
                        <h5 className="que">Table Games</h5>
                        <img className="my-2" style={{ borderRadius: "10px" }} width="100%" src="https://bitcoincasinosreviews.com/wp-content/uploads/2022/07/JustBit-slots.png" alt="" />
                        <p>
                            The table games section is also a popular destination for the majority of gamblers these days. When they get tired of playing slots constantly, they want to experience some other products as well, so table games are a perfect choice in this case. Here you will encounter all kinds of Baccarat, Roulette, Poker, and Blackjack games as well as some other products such as Sic Bo, Craps, Dragon Tiger, Hi-Lo, and so forth. It is worth noting that table games of JustBit casino are also provided by the industry’s leading software development organizations and some important mention includes Belatra, Evolution Gaming, Habanero, and BGaming. So, you have a perfect chance to take a rest from the slots and visit the table games department in order to relax a bit and experience something new.
                        </p>
                    </div>
                </Grid>
                <Grid item md={4}>
                    <div style={{ position: "sticky", top: "80px" }}>
                        <Card >
                            <CardContent>

                                <h3 className='text-center' style={{ color: "#35c193" }}> Why should you play at JustBit?</h3>

                                <p className='text-center'>
                                    JustBit casino offers a variety of top-class services. First of all, you will come across a game lobby consisting of more than 1000 titles. There are several promotional offers and the VIP club is waiting for you if you become a loyal member of this crypto gambling website. Deposit with Bitcoin and other popular cryptos and make the best out of your gambling experience.
                                </p>

                                <div className="d-flex justify-content-center"><Button className="wager-btn border-0">Wager On Stake ➜</Button></div>
                            </CardContent>
                        </Card>
                    </div>

                </Grid>
            </Grid>

        </div>
    </div>
}

export default CasinoDetail;