import landingStyle from './Landing.module.scss';

const Landing = () => {
  return (
    <div className={ landingStyle.landing }>
        <div className={ landingStyle.landing__title }>Welcome</div>
        <div className={ landingStyle.landing__sub }>I am a <strong>Web Developer</strong></div>
    </div>
  )
}

export default Landing