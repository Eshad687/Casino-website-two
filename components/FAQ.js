import React from 'react';
import Accordion from './Acccordion';

const FAQ = () => {
    return (
        <div className='bg-white text-center py-5'>
            <h3 className="pt-3">Crypto Betting Sites  <span className='underline--magical'>FAQ</span> </h3>

            <div className="py-3">
                <Accordion title="Are Bitcoin Betting Sites legal?"
                    content="<p>BTC sports betting sites are legal most of the time; however, the exact answer depends on your country of residence.</p>
         
                <p>It isn’t clear-cut because it depends on Bitcoins and sports betting site law in each jurisdiction.</p>
                
                <p>Although crypto is legal or tolerated in most countries, regulators are generally more severe with sports betting sites.</p>
                
                <p>Yet, there are good Bitcoin betting sites that let you register even if it isn’t legal in your country.</p>

                <p>If you have a VPN, your transactions are out of the glare of a centralized authority, which means regulators have their work cut out.</p>
                "
                />
                <Accordion
                    title="Can I Bet completely anonymously with Bitcoins?"
                    content="<p>Yes, you can because of how crypto addresses work. These are created privately by your wallet, and there is no other information that outlines where your cryptos are stored or any location you send them to.</p>
         
                    <p>As a result, you can maintain secrecy by using a new address every time you receive payment. Another tactic is to use several wallets, each one for a different reason.</p>
                    
                    "
                />
                <Accordion
                    title="How long do Crypto deposits take?"
                    content="<p>It varies from a couple of minutes to an hour, depending on several factors, including the crypto network.</p>
         
          <p>There are numerous Blockchains involved in the transaction confirmation process, and they occasionally become overwhelmed.</p>
          
          <p>You must pay an extra fee if you want to avoid having your transaction delayed by the Blockchain queue.</p>"
                />
                <Accordion
                    title="How long do Crypto withdrawals take?"
                    content="<p>The withdrawal process goes through the same procedure as when you deposit. However, the majority of crypto sports betting sites also have to authenticate the action manually.</p>
         
          <p>The time it takes varies depending on the Bitcoin betting site. Some sites go through a long validation process which takes days. Others don’t complete this step and ensure your withdrawal happens as quickly as a deposit.</p>
          
        "
                />
                {/* <Accordion
                    title="What coins can I use for betting and gambling online?"
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                /> */}
                {/* <Accordion
                    title="What are the most popular sports markets offered by gambling sites?"
                    content="<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
         
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>"
                /> */}
            </div>
        </div>
    );
};

export default FAQ;