import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import GradientLayout from './components/gradientLayout'

export default function Home() {
  return (<GradientLayout color='red' roundImage='true' 
  subtitle='profile' 
  title='Rayhan Mendis' 
  description='10 public playlists'
  image="https://dl.dropboxusercontent.com/s/bgiv0ssz3xpotz9/peep.png?dl=0"
  >

  </GradientLayout>)
}
