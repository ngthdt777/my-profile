import cplusplus from 'misc/cplusplus.png'
import css from 'misc/css.png'
import docker from 'misc/docker-icon-512x438-ga1hb37h.png'
import html from 'misc/html.png'
import java from 'misc/java.png'
import javascript from 'misc/javascript.png'
import jenkin from 'misc/jenkins8460.jpg'
import k8s from 'misc/Kubernetes-icon-color.svg.png'
import nextjs from 'misc/nextjs.png'
import nodejs from 'misc/nodejs.jpg'
import python from 'misc/python.png'
import vuejs from 'misc/vuejs.png'

import Image from 'next/image'

export default function About() {
    return (
        <main>
            <div>
                <h2>ABOUT ME</h2>
                <div className="py-5">
                    <h2>Software Developer</h2>
                    <div className="grid grid-cols-2 gap-4 py-5">
                        <h1>Email: nguyenthanhdatvn777@gmail.com</h1>
                        <h1>Degree: Engineer</h1>
                        <h1>Phone: (+84) 945135184</h1>
                        <h1>City: Ho Chi Minh City</h1>
                    </div>
                    <p>
                    I find myself hard-working, principle and open-minded
about learning new technologies. Possessing good team
spirit, deadline oriented and having the ability to organize
and present complex solutions clearly and accurately.
Looking for suitable position with clear promotion path
and having opportunities to learn and experience.
                    </p>
                </div>
                <h2>SKILLS</h2>
                <div className="grid grid-cols-5 py-5">
                    <Image src={css}
                        alt='css logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={cplusplus}
                        alt='c++ logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={docker}
                        alt='docker logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={html}
                        alt='html logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={java}
                        alt='java logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />

                    <Image src={jenkin}
                        alt='jenkin logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={k8s}
                        alt='k8s logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={javascript}
                        alt='javascript logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={nextjs}
                        alt='nextjs logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={nodejs}
                        alt='nodejs logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={python}
                        alt='python logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                    <Image src={vuejs}
                        alt='vuejs logo'
                        width={70}
                        placeholder='blur'
                        quality={100}
                    />
                </div>
            </div>
        </main>
    )
}