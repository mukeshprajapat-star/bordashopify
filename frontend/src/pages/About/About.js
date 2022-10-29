import React, { useRef, useEffect } from 'react'
import { Helmet } from 'react-helmet';
import { Image } from '@chakra-ui/react'
import './aboutcss.css'
const About = () => {
    const Line = useRef(null);
    const text = useRef(null);
    useEffect(() => {
        setTimeout(() => {
            Line.current.classList.add('lineon')
            text.current.classList.add('titleon');
        }, 5)


        return () => {

        }
    }, [])
    return (



        <>
            <Helmet>
                <title>About</title>
            </Helmet>


            <div className='headingA'>
                <div className='line' ref={Line}>
                </div>
                <h1 className='title' ref={text}>About Us</h1>
            </div>
            <div className='Content1'>
                <div className='text'>
                    <h1>
                        Why?
                    </h1>
                    <p>It is convenient that the hair of the work comes out of the exercise,
                        except that it softens some of the irritation. If he achieves the advantage of the soul with some effort,
                        unless he criticizes some pain in football, there is nothing. They should be adipisisic elit that in any one without
                        desire but with hard work. This is our labor, or it is also pleasure. They leave only from and develop services from it. A great deal of it will be softened if the mind is to be exercised in this way from pain. The pain will come out, I will forgive him who will save the time for our labor. But in the same way that the desires of those who work hard come out of pain, they are softened by great work. Let the least pain and desire flee from those who are at it. It is an exercise in the work of the customer, whether it is a desire or an exception. And for the smallest of hairs, they will be pursued. The pleasure of the time and the desire of any result, for the very desire of work are the exception. Nostrud softens without any effort to rush at such a time. There is no time to let anyone come out of our land with the least pleasure. It is convenient that the hair of the work comes out of the exercise, except that it softens some of the irritation. If he achieves the advantage of the soul with some effort, unless he criticizes some pain in football, there is nothing. They should be adipisisic elit that in any one without desire but with hard work. This is our labor, or it is also pleasure. They leave only from and develop services from it. A great deal of it will be softened if the mind is to be exercised in this way from pain. The pain will come out, I will forgive him who will save the time for our labor. But in the same way that the desires of those who work hard come out of pain, they are softened by great work. Let the least pain and desire flee from those who are at it. It is an exercise in the work of the customer, whether it is a desire or an exception. And for the smallest of hairs, they will be pursued. The pleasure of the time and the desire of any result, for the very desire of work are the exception.
                        Nostrud softens without any effort to rush at such a time.
                        There is no time to let anyone come out of our land with the least pleasure.</p>
                </div>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614771637369-ed94441a651a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
            </div>
            <div className='Content2'>

                <div className='imagecontainer'>
                    <div className='Imageabt'>
                        <Image className='mImage' boxSize='400px' objectFit="cover" src='https://images.unsplash.com/photo-1614038276039-667c23bc32fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=389&q=80' alt="Segun Adebayo" />
                    </div>
                </div>
                <div className='text'>
                    <h1>
                        How?
                    </h1>
                    <p>It is convenient that the hair of the work comes out of the exercise,
                        except that it softens some of the irritation. If he achieves the advantage of the soul with some effort,
                        unless he criticizes some pain in football, there is nothing. They should be adipisisic elit that in any one without
                        desire but with hard work. This is our labor, or it is also pleasure. They leave only from and develop services from it. A great deal of it will be softened if the mind is to be exercised in this way from pain. The pain will come out, I will forgive him who will save the time for our labor. But in the same way that the desires of those who work hard come out of pain, they are softened by great work. Let the least pain and desire flee from those who are at it. It is an exercise in the work of the customer, whether it is a desire or an exception. And for the smallest of hairs, they will be pursued. The pleasure of the time and the desire of any result, for the very desire of work are the exception. Nostrud softens without any effort to rush at such a time. There is no time to let anyone come out of our land with the least pleasure. It is convenient that the hair of the work comes out of the exercise, except that it softens some of the irritation. If he achieves the advantage of the soul with some effort, unless he criticizes some pain in football, there is nothing. They should be adipisisic elit that in any one without desire but with hard work. This is our labor, or it is also pleasure. They leave only from and develop services from it. A great deal of it will be softened if the mind is to be exercised in this way from pain. The pain will come out, I will forgive him who will save the time for our labor. But in the same way that the desires of those who work hard come out of pain, they are softened by great work. Let the least pain and desire flee from those who are at it. It is an exercise in the work of the customer, whether it is a desire or an exception. And for the smallest of hairs, they will be pursued. The pleasure of the time and the desire of any result, for the very desire of work are the exception.
                        Nostrud softens without any effort to rush at such a time.
                        There is no time to let anyone come out of our land with the least pleasure.


                    </p>
                </div>
            </div>
        </>

    )
}

export default About
