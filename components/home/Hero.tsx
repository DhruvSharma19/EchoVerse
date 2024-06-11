'use client'
import Image from 'next/image'
import React from 'react'
import HeroAnimation from './HeroAnimation'
import { motion } from "framer-motion"
import {
    ClerkLoaded,
    ClerkLoading,
    SignedIn,
    SignedOut
} from "@clerk/nextjs";
import { Loader } from 'lucide-react'

type Props = {}

function Hero({ }: Props) {
    const wrapper = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.25,
            }
        }
    }

    const list = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5, ease: [0.455, 0.03, 0.515, 0.955], delay: 1 }
        }
    }
    const container = {
        visible: {
            transition: {
                staggerChildren: 0.025
            }
        }
    }
    return (
        <div className='w-full px-4 sm:px-8 lg:px-16 pt-20'>
            <div className='flex flex-col md:flex-row md:gap-x-6 lg:gap-x-0 xl:grid xl:grid-cols-2 mt-4'>
                <div className='shrink-0 md:w-1/2 lg:w-7/12 xl:w-auto'>
                    <motion.h1 initial='hidden' animate='visible' variants={container} className='text-4xl lg:text-5xl mb-8 font-semibold'>
                        <HeroAnimation text='Welcome to' className='text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block' />
                        <HeroAnimation text='Echoverse' className='text-transparent bg-clip-text bg-gradient-to-br from-violet-400 to-violet-600 inline-block' />
                        <HeroAnimation text='Your Ultimate Communication Hub' className='text-transparent bg-clip-text bg-gradient-to-br from-white to-zinc-300 inline-block' />
                    </motion.h1>
                    <motion.ul initial='hidden' animate='visible' variants={wrapper} className='text-white space-y-2'>
                        <motion.li variants={list} className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 shrink-0 mt-0.5"><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path></svg>
                            <span>Real-Time Interaction</span>
                        </motion.li>
                        <motion.li variants={list} className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 shrink-0 mt-0.5"><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path></svg>
                            <span>Secure User Authentication</span>
                        </motion.li>
                        <motion.li variants={list} className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 shrink-0 mt-0.5"><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path></svg>
                            <span>Customizable Servers and Channels</span>
                        </motion.li>
                        <motion.li variants={list} className='flex gap-3'>
                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" className="fill-current h-5 shrink-0 mt-0.5"><path d="M256 32a224 224 0 1 1 0 448 224 224 0 1 1 0-448zm0 480A256 256 0 1 0 256 0a256 256 0 1 0 0 512zM363.3 203.3c6.2-6.2 6.2-16.4 0-22.6s-16.4-6.2-22.6 0L224 297.4l-52.7-52.7c-6.2-6.2-16.4-6.2-22.6 0s-6.2 16.4 0 22.6l64 64c6.2 6.2 16.4 6.2 22.6 0l128-128z"></path></svg>
                            <span>Engaging Multimedia Experience</span>
                        </motion.li>
                    </motion.ul>
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3, delay: 1.5 }} className='mt-10 flex flex-col items-center sm:flex-row gap-3'>
                        <a href="/setup" className='inline-flex relative z-10 h-10 rounded-xl p-px shadow-lg bg-gradient-to-b from-white to-zinc-300'>
                            <ClerkLoading>
                                <Loader className="h-5 w-5 text-muted-foreground animate-spin" />
                            </ClerkLoading>
                            <ClerkLoaded>

                                <div className='flex items-center gap-1 px-6 font-medium rounded-xl whitespace-nowrap bg-white text-black'>
                                    <SignedIn>
                                        <span>
                                            Enter EchoVerse
                                        </span>
                                    </SignedIn>
                                    <SignedOut>
                                        <span>
                                            Get Started
                                        </span>
                                    </SignedOut>

                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" className="fill-current h-3.5 "><path d="M429.8 273l17-17-17-17L276.2 85.4l-17-17-33.9 33.9 17 17L354.9 232 24 232 0 232l0 48 24 0 330.8 0L242.2 392.6l-17 17 33.9 33.9 17-17L429.8 273z"></path></svg>
                                </div>
                            </ClerkLoaded>
                        </a>
                    </motion.div>
                </div>
                <div className='hidden md:block pt-3 shrink grow overflow-hidden z-50'>
                    <motion.div initial={{ opacity: 0, x: -300 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.5, delay: 1.5 }} className='relative'>
                        <div className='relative p-px overflow-hidden rounded-3xl sm:rounded-[2rem] bg-gradient-to-br from-white to-zinc-600'>
                            <div className='rounded-3xl sm:rounded-[31px] overflow-hidden p-1.5 bg-gradient-to-br from-zinc-400 to-zinc-700'>
                                <div className='rounded-[17px] sm:rounded-[25px] overflow-hidden bg-gradient-to-br from-zinc-800 to-zinc-950'>
                                    <Image src='/image.jpg' className='object-fit object-center' width={1000} height={1000} alt='Hero-Image' />
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </div>
    )
}

export default Hero