import Image from 'next/image';
import styles from './News.module.css';

export default function News() {
  const images = [
    "/1.png",
    "/2.png",
    "/3.png",
    "/4.png",
    "/5.jpg",
    "/6.jpg",
    "/7.jpg",
    "/8.jpg",
  ];

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>OUR BLOGS</h3>
      <h2 className={styles.title}>Latest News</h2>
      <div className={styles.grid}>
        {images.map((src, index) => (
          <div key={index} className={styles.card}>
            <div className={styles.date}>20 APR</div>
            <div className={styles.imageWrapper}>
              <Image
                src={src}
                alt={'Image ${index + 1}'}
                width={300} // Card width
                height={200} // Card height
                objectFit="cover"
                className={styles.image}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}