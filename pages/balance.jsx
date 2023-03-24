import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
// import { useEffect } from 'react';
// import Moralis from "moralis";

function BalancePage({
    nativeBalance
}) {
    const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';    
    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance}</h3>
        </div>
    );
}

export async function getServerSideProps(context) {
    if (!Moralis.Core.isStarted) {
        await Moralis.start({
            apiKey: process.env.MORALIS_API_KEY
        });
    }

    const address = "0xd8da6bf26964af9d7eed9e03e53415d37aa96045";
    const chain = EvmChain.ETHEREUM;

    const response = await Moralis.EvmApi.balance.getNativeBalance({
        chain,
        address,
    });

    return {
        props: {
            nativeBalance: response.raw
        }
    }
}

export default BalancePage