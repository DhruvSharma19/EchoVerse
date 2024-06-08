import React from 'react'

type Props = {}

function Footer({}: Props) {
  return (
    <div className='dark'>
        <footer className='bg-zinc-50 dark:bg-black text-zinc-700 dark:text-zinc-400 text-sm z-20'>
            <hr className="w-full border-none h-px bg-gradient-to-r from-black/0 via-black/20 to-black/0 dark:from-white/0 dark:via-white/25 dark:to-white/0 "/>
            <div className='w-full max-w-screen-xl mx-auto px-4 sm:px-8 lg:px-16 py-24 flex flex-col sm:flex-row gap-10 justify-between'>
                <div>
                <a href="/" className='z-50 flex items-center space-x-1'>
                <svg viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden dark:block h-7 sm:h-8"><path fillRule="evenodd" clipRule="evenodd" d="M29.8022 24.317C30.2747 24.05 30.4361 23.4582 30.1636 22.9953C29.891 22.5329 29.2873 22.3741 28.8148 22.6411L15.9211 29.9362L3.07463 22.6683C2.60281 22.4012 1.999 22.5594 1.72597 23.0225C1.45347 23.4854 1.61541 24.077 2.08741 24.3441L15.3897 31.8698C15.5053 31.9353 15.6327 31.9771 15.7645 31.9929C15.8963 32.0087 16.0299 31.9981 16.1576 31.9617C16.278 31.9433 16.3941 31.9031 16.5002 31.8431L29.8022 24.317Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.1298 16.6012C31.1974 16.1929 31.0061 15.7675 30.6177 15.5488L16.555 7.63105C16.4443 7.56873 16.3234 7.52682 16.198 7.50732C16.0631 7.46888 15.922 7.45758 15.7827 7.47405C15.6434 7.49053 15.5088 7.53446 15.3865 7.60332L1.32289 15.5214C0.913972 15.7518 0.723686 16.2117 0.824499 16.6391C0.780205 16.9913 0.91787 17.3598 1.32768 17.5916L15.3904 25.5478C15.5127 25.6169 15.6475 25.661 15.7869 25.6776C15.9263 25.6942 16.0675 25.6829 16.2026 25.6445C16.3297 25.6253 16.4522 25.583 16.5642 25.5197L30.6275 17.563C31.0408 17.329 31.1776 16.9562 31.1298 16.6012ZM28.2266 16.5591L15.9459 9.64453L3.67206 16.5554L15.9528 23.5034L28.2266 16.5591Z" fill="white"></path>
                <path fillRule="evenodd" clipRule="evenodd" d="M31.3429 10.6097C31.8677 10.3131 32.0476 9.65608 31.7442 9.14178C31.4416 8.62819 30.7712 8.45201 30.2464 8.74854L15.9269 16.8501L1.66063 8.77876C1.13584 8.48152 0.465408 8.65787 0.162793 9.172C-0.14053 9.68541 0.0391253 10.3432 0.564095 10.6397L15.337 18.9976C15.4654 19.0702 15.607 19.1165 15.7534 19.1339C15.8998 19.1514 16.0482 19.1395 16.19 19.0991C16.3236 19.0791 16.4524 19.0347 16.5701 18.9681L31.3429 10.6097Z" fill="white"></path><path d="M2.7403 9.6795L15.8991 1.62024L29.0577 9.67879L15.8989 17.2013L2.7403 9.6795Z" fill="white"></path><path fillRule="evenodd" clipRule="evenodd" d="M31.3255 8.49027C31.8513 8.78627 32.0333 9.44279 31.7325 9.95692C31.4307 10.4707 30.7603 10.6474 30.2344 10.3514L15.9128 2.28787L1.64317 10.3224C1.11731 10.6184 0.44688 10.4415 0.145328 9.92794C-0.15587 9.41381 0.0262664 8.75729 0.55159 8.46129L15.325 0.143725C15.4534 0.0713274 15.5949 0.0251207 15.7412 0.00776107C15.8875 -0.00959854 16.0358 0.00223134 16.1775 0.0425706C16.3093 0.0631109 16.4364 0.107185 16.5526 0.172702L31.3255 8.49027Z" fill="white"></path>
                </svg>
                <span className='font-bold text-2xl text-white'>Echoverse</span>
            </a>
                    <p className="leading-relaxed my-6">Copyright © 2024 Echoverse</p>
                    <div className="flex items-center gap-4">
                        <a className="generic-hover" href="">
                        <span className="sr-only">GitHub</span>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" className="fill-current h-5 text-zinc-700 dark:text-zinc-400"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path>
                        </svg>
                        </a>
                        
                    </div>
                </div>
                <div className='flex flex-wrap sm:gap-x-12 gap-y-6 sm:mt-0'>
                    <div className='w-1/2 sm:w-auto'>
                        <h3 className="text-white mb-4">Docs</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a className="flex items-start button-hover" target="_self" href="/"><span>Getting Started</span></a>
                            </li>
                            <li>
                                <a className="flex items-start button-hover" target="_self" href="/"><span>Guides</span></a>
                            </li>
                            <li>
                                <a className="flex items-start button-hover" target="_self" href="/"><span>API</span></a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-auto'>
                        <h3 className="text-white mb-4">Company</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a className="flex items-start button-hover" target="_blank" href="">
                                    <span>Effectful</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path>
                                    </svg>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className='w-1/2 sm:w-auto'>
                        <h3 className="text-white mb-4">Legal</h3>
                        <ul className='space-y-2'>
                            <li>
                                <a className="flex items-start button-hover" target="_blank" href="">
                                    <span>Terms & Conditions</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path>
                                    </svg>
                                </a>
                            </li><li>
                                <a className="flex items-start button-hover" target="_blank" href="">
                                    <span>Privacy & Policy</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 11 14" className="fill-current h-3 mt-0.5 ml-0.5"><path d="M9.31328 2.625H9.75078V3.0625V9.1875V9.625H8.87578V9.1875V4.11797L1.96602 11.0277L1.65703 11.3367L1.03906 10.7187L1.34805 10.4098L8.25781 3.5H3.18828H2.75078V2.625H3.18828H9.31328Z"></path>
                                    </svg>
                                </a>
                            </li>
                            <li>
                                <a className="flex items-start button-hover" target="_self" href="/"><span>Contact Us</span></a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Footer