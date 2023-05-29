import sectionTitleStyle from './SectionTitle.module.scss';

const SectionTitle = ({ main, sub } : { main: string, sub: string }) => {
  return (
    <>
        <div className={ sectionTitleStyle.mini }>{ sub }</div>
        <h2 className={ sectionTitleStyle.title }>{ main }</h2>
    </>
  )
}

export default SectionTitle