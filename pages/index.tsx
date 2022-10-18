import Head from "next/head";
import Image from "next/image";
import GradientLayout from "../components/gradientLayout";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <GradientLayout
      color="green"
      subtitle="profile"
      title="José Alves"
      description="10 public playlists"
      image="https://i.pinimg.com/originals/62/1a/fc/621afc7f8901bb3aa2625bd8a744d16c.jpg"
      roundImage
    >
      <div>Home page</div>
    </GradientLayout>
  );
}
