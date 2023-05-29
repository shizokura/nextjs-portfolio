import aboutStyle from './About.module.scss';

const About = () => (
  <div className={ `${ aboutStyle.container } container mx-auto` }>
    <div className={ aboutStyle.mini }>About Me</div>
      <h2 className={ aboutStyle.title }>Know Me More</h2>
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
  </div>
);

export default About;
