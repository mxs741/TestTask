'use client';

import type { NftCard as NftCardType } from '@/store/nft';
import { useCountdown } from '../../useCountdown';
import classes from './NftCard.module.scss';

export const NftCard = ({ card }: { card: NftCardType }) => {
  const countdown = useCountdown(card.countdownMs);

  return (
    <article className={classes.card}>
      <div className={classes.image}>
        {card.image ? (
          <img src={card.image} alt={card.name} draggable={false} />
        ) : (
          <div className={classes.placeholder} />
        )}
        <span className={classes.timer}>{countdown}</span>
      </div>
      <div className={classes.body}>
        <h3 className={classes.name}>{card.name}</h3>
        <div className={classes.footer}>
          <div className={classes.price}>
            <span className={classes.price_label}>Current bid</span>
            <span className={classes.price_value}>
              <img
                src="/icons/bid-icon.svg"
                alt=""
                width={10}
                height={16}
                draggable={false}
              />
              {card.currentBid}
            </span>
          </div>
          <button className={classes.bid_btn}>PLACE BID</button>
        </div>
      </div>
    </article>
  );
};
