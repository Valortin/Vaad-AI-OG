// deploy.js
const { ethers } = require("ethers");
require('dotenv').config();

async function main() {
    const provider = new ethers.JsonRpcProvider(process.env.RPC_URL || "https://0g-testnet-rpc.com"); // Replace with 0G testnet RPC
    const wallet = new ethers.Wallet(process.env.PRIVATE_KEY || "", provider); // Add in .env

    const contractFactory = await ethers.getContractFactory("TradeSignal", wallet);
    console.log("Deploying contract...");
    const contract = await contractFactory.deploy();
    await contract.waitForDeployment();

    console.log(`Contract deployed to: ${contract.target}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});