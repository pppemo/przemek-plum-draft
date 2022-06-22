import { BookingOption } from "./../BookingOption/BookingOption";
import { Separable } from "../Separable/Separable";
import styles from "./BookingContainer.module.scss";

export const BookingContainer = () => (
  <div className={styles.root}>
    <Separable>
      <BookingOption
        label="From / To"
        value="3 Jan 2020 - 28 Feb 2020"
        expandable
      />
      <BookingOption label="For" value="2 Guests" expandable />
      <BookingOption label="£ Per night" value="345" />
      <BookingOption label="£ Total for 54 nights" value="18,630" />
    </Separable>
  </div>
);
