import styles from "./Profile.module.css";

const ProfilePage = () => {
  return (
    <main className={styles.profileContainer}>
      {/* Profile Header */}
      <header className={styles.header}>
        <h1>Profile</h1>
      </header>

      {/* Profile Info Section */}
      <section className={styles.profileInfo}>
        <figure className={styles.profilePicture}></figure>
        <div className={styles.profileDetails}>
          <h2 className={styles.profileName}>Name Surname</h2>
          <p className={styles.profileMeta}>Member since </p>
          <p className={styles.profileMeta}>Last logged in</p>
        </div>
      </section>

      {/* Edit Profile Button */}
      <section>
        <button className={styles.editProfileButton}>Edit Profile</button>
      </section>

      {/* Profile Description Section */}
      <section>
        <h3>Profiltekst</h3>
        <p className={styles.profileText}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Magnam, exercitationem rem nobis debitis alias molestias quisquam impedit adipisci laboriosam non libero minus numquam architecto rerum id quis labore reprehenderit pariatur.
        </p>
      </section>

      {/* Instruments Section */}
      <section className={styles.instrumentList}>
        <header className={styles.sectionHeader}>
          <h3>My Instruments</h3>
          <button className={styles.addButton}>Add Instrument</button>
        </header>
      </section>

      {/* Ensembles Section */}
      <section className={styles.cardList}>
        <header className={styles.sectionHeader}>
          <h3>Mine ensembles</h3>
          <button className={styles.addButton}>Opret</button>
        </header>
        <ul>
          <li className={styles.card}>
            <figure className={styles.cardImage}></figure>
            <div className={styles.cardDetails}>
              <h4 className={styles.cardTitle}>Ensemble name</h4>
            </div>
          </li>
        </ul>
      </section>

      {/* Posts Section */}
      <section className={styles.cardList}>
        <header className={styles.sectionHeader}>
          <h3>Mine opslag</h3>
          <button className={styles.addButton}>Opret</button>
        </header>
        <ul>
          <li className={styles.card}>
            <figure className={styles.cardImage}></figure>
            <div className={styles.cardDetails}>
              <h4 className={styles.cardTitle}>Post title</h4>
              <p className={styles.cardDescription}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem maiores, corporis iure laborum culpa explicabo tempore eius commodi tempora cumque! Quia illo enim cumque totam tempore impedit necessitatibus, fuga deleniti?
              </p>
            </div>
          </li>
        </ul>
      </section>
    </main>
  );
};

export default ProfilePage;
