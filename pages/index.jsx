import { useEvmNativeBalance } from "@moralisweb3/next";

function HomePage() {
    const address = '0xd8dA6BF26964aF9D7eEd9e03E53415D37aA96045';
    const { data: nativeBalance } = useEvmNativeBalance({ address });

    return (
        <div>
            <h3>Wallet: {address}</h3>
            <h3>Native Balance: {nativeBalance?.balance.ether}</h3>
        </div>
    );
}

export default HomePage