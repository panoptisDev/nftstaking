import type { NextPage } from "next";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

const Home: NextPage = () => {
  const router = useRouter();

  return (
    <div className={styles.container}>
      {/* Top Section */}
      <h1 className={styles.h1}>Whale Harvest NFT - Custom Staking Platform</h1>

      <div
        className={styles.nftBoxGrid}
        role="button"
        onClick={() => router.push(`/mint`)}
      >
        {/* Mint a new NFT */}
        <div className={styles.optionSelectBox}>
          <img src={`/icons/drop.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Mint a new NFT for 10 MATIC</h2>
          <p className={styles.selectBoxDescription}>
            Claim an NFT from the collection.<br /> Press printer and Mint your fresh NFT.
          </p>
        </div>

        <div
          className={styles.optionSelectBox}
          role="button"
          onClick={() => router.push(`/stake`)}
        >
          <img src={`/icons/token.webp`} alt="drop" />
          <h2 className={styles.selectBoxTitle}>Stake Your NFTs</h2>
          <p className={styles.selectBoxDescription}>
            Press the Jelly coin symbol and move to <b>staking page</b>{" "}
            and start earning Rewards from the <b>JellyToken</b> contract.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
