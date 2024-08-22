import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.headingMd}>
        <p>Hello, I’m John Carlo Dizon, 21 years old from San Nicolas Mexico Pampanga. 
         My hobbies are playing basketball, playing piano, and sometimes I’ll do weight training f
         or my healthy lifestyle. I don’t have favorite foods but sometimes I love eating sweets.</p>

        <p>When I’m in my first year of college, the IT program was only my second choice. because the program 
           I want to take that time is about businessing, because I have a plan to build a business in the near future.  
             But I realize IT nowadays is in demand because technology is always upgrading and businesses nowadays always need 
             a system to manage their company properly. So I decided to study both programs, like while I’m studying IT program in school, 
               when I have free time  I’m  helping with our family business to improve my understanding about running a company.</p>

        <p>I think I’m going to  focus on managing the system of our business like managing our POS. Because our plan for our company 
               is to expand it further in the future, as of now we have 6 branches here in pampanga.</p>

        <p>I am expecting to learn more about web developing, as of now I don’t have a background in the frameworks in webdev.  
                 The tools or programming languages I already study in webdev are HTML, CSS and basic Javascript.</p>

        <p>As of now I don't have any background about the next js.</p>
           
        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">our Next.js tutorial</a>.)
        </p>
      </section>
    </Layout>
  );
}
