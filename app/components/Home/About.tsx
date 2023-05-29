import aboutStyle from './About.module.scss';
import SectionTitle from '../SectionTitle';

const About = () => (
  <div className={ `${ aboutStyle.container } container mx-auto` }>
      <SectionTitle main="Know Me More" sub="About Me" />
      <div className={ aboutStyle.intro }>
        <div className={ aboutStyle.text }>
          <div className={ aboutStyle.text__title }>Hi, I'm <strong>Edward Guevarra</strong></div>
          <div className={ aboutStyle.text__description }>{`I'm a web developer with experience since 2015, specializing in PHP, JavaScript, NodeJS, HTML, CSS, and modern frameworks like React, Vue, and Angular. I have a strong background in backend development, managing server infrastructure, and creating efficient APIs using Node.js. My expertise extends to databases, including MySQL, MongoDB, and Firestore. I'm constantly eager to learn and improve my skills to deliver exceptional solutions. Let's work together to bring your ideas to life!`}</div>
        </div>
        <div className={ aboutStyle.years }>
          <div className={ aboutStyle.years__number }>{ new Date().getFullYear() - 2015 }</div>
          <div className={ aboutStyle.years__text }>Years of <strong>Experience</strong></div>
        </div>
      </div>
      <div className={ aboutStyle.info }>
        <div className={ aboutStyle.info__item }>
          <div className={ aboutStyle.label }>Name:</div>
          <div className={ aboutStyle.value }>Edward Guevarra</div>
        </div>
        <div className={ aboutStyle.info__item }>
          <div className={ aboutStyle.label }>Email:</div>
          <div className={ aboutStyle.value }>edwardguevarra2003@gmail.com</div>
        </div>
        <div className={ aboutStyle.info__item }>
          <div className={ aboutStyle.label }>Date of Birth:</div>
          <div className={ aboutStyle.value }>25 August, 1999</div>
        </div>
        <div className={ aboutStyle.info__item }>
          <div className={ aboutStyle.label }>From:</div>
          <div className={ aboutStyle.value }>Philippines</div>
        </div>
      </div>
  </div>
);

export default About;
