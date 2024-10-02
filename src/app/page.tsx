import styles from "./index.module.css";
import { AdobeFonts } from '@/components/AdobeFonts';

export default function FontPage() {
  return (
    <div>
      <AdobeFonts />
      <p className={ styles["toppan-bunkyu-midashi-go-std"] }>あのイーハトーヴォのすきとおった風、夏でも底に冷たさをもつ青いそら、うつくしい森で飾られたモリーオ市、郊外のぎらぎらひかる草の波。</p>
    </div>
  );
}