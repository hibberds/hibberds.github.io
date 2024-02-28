import styles from "../styles/About.module.css";

export default function About() {
  return (
    <div className={styles.about}>
      <h2 className={styles.header}>
        Hibberd’s is a family run business, specialising in bespoke catering,
        small batch delicacies and curated collections of food
      </h2>
      <div className={styles.experience}>
        Drawing from 20 years experience in the industry and a heritage spanning
        four generations, we aim to deliver the best in services and products.
      </div>
      <div className={styles.ideals}>
        We offer peace of mind that every effort is taken, at every step of our
        process, to uphold the ideals and principals on which we are founded:
      </div>
      <div className={styles.principles}>
        <li>Quality is never compromised</li>
        <li>
          All products and materials are ethically and responsibly sourced
        </li>
        <li>
          Wherever and whenever possible, local producers and suppliers are used
        </li>
      </div>
      <div className={styles.established}>
        <div>Hadleigh picture?</div>
        <div>
          Established in the bustling town of Hadleigh, in the heart of the
          Suffolk countryside, we are blessed with a wealth of incredible farms,
          butchers, breweries, fishmongers and bakeries. Drawing from these
          superb resources gives us all we need to create and collect the very
          best that the county has to offer.
        </div>
      </div>
    </div>
  );
}
