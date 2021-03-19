import React from "react";
import PropTypes from "prop-types";
import { A as Link } from "hookrouter";

import * as help from "utils/helpers";
import Image from "atoms/Image";

import styles from "./styles.module.scss";
import shippingThumbnail from "images/Icon_Shipping.png";
import shippingPicture from "images/Icon_Shipping_x2.png";

const Card = ({
  item: { free_shipping, id, price, title, picture, thumbnail, address },
}) => {
  return (
    <Link href={`/items/${id}`}>
      <article className={styles.card}>
        <Image
          lazy={{
            picture: picture,
            thumbnail: thumbnail,
          }}
        />
        <div>
          <div>
            <h2>
              <span>{help.currencySymbol(price.currency)}</span>
              {
                //No uso Intl.NumberFormat porque quiero darle diferente estilo a cada parte.
                parseInt(price.amount).toLocaleString("de-DE")
              }
              {price.decimals > 0 && <sup>{price.decimals}</sup>}
            </h2>
            {free_shipping && (
              <Image
                lazy={{
                  picture: shippingPicture,
                  thumbnail: shippingThumbnail,
                }}
              />
            )}
          </div>

          <h3>{title}</h3>
        </div>
        <small>{address.state_name}</small>
      </article>
    </Link>
  );
};

export default Card;

Card.propTypes = {
  item: PropTypes.object.isRequired,
};
