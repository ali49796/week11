import AccessTimeFilledIcon from '@mui/icons-material/AccessTimeFilled';
import CardItem from '../components/cardItem';

import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className={styles.home}>
      <CardItem title="card item1" />
      <CardItem title="card item2" />
      <CardItem title="card item3" />
      
    </div>
  )
}
