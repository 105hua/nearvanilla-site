import styles from "./page.module.css";

import OldDistrictImage from "./assets/old_district.webp";
import Image from "next/image";
import React from "react";

export default function Home() {
  return (
    <main>
      <nav className={styles.navbar}>
        <div className={styles.navbar_container}>
          <div id="left-container" className={styles.left_container}>
            <h2 className={styles.navbar_brand}>NearVanilla</h2>

            <ul className={styles.navbar_links}>
              <li className={styles.navbar_link}>
                <a href="#">About</a>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">Info</a>
              </li>
              <li className={styles.navbar_link}>
                <a href="#">Player Stats</a>
              </li>
            </ul>
          </div>

          <div id="right-container">
            <a href="#" className={styles.apply_link}>
              Apply Now
            </a>
          </div>
        </div>
      </nav>

      <Image className={styles.old_district_image} src={OldDistrictImage} alt="Old District" />

      <div className={styles.intro_sect}>

        <div className={styles.large_card}>
          <h3 className={styles.large_card_title}>What is NearVanilla?</h3>
          <p className={styles.large_card_desc}>
            NearVanilla is a close-knit Community Server where we&apos;ve created an environment where players come together to build, collect, explore and have fun.
            We focus on cooperative builds, player competitions, vibrant shopping districts and other events. All play styles are welcome.
          </p>
        </div>

        <div className={styles.grid_positioning}>
          <div className={styles.small_card_grid}>
            <div className={styles.small_card}>
              <h3 className={styles.small_card_title}>Placeholder</h3>
              <p className={styles.small_card_desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc nec libero tincidunt.
              </p>
            </div>
            <div className={styles.small_card}>
              <h3 className={styles.small_card_title}>Placeholder</h3>
              <p className={styles.small_card_desc}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec et nunc nec libero tincidunt.
              </p>
            </div>
          </div>
        </div>

        <div className={styles.image_gallery_container}>
          <div className={styles.image_gallery}>
          </div>
        </div>

      </div>
    </main>
  );
}