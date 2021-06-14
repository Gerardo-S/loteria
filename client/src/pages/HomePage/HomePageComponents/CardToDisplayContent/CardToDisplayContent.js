import "../CardToDisplayContent/CardToDisplayContent.css";


function CardToDisplayContent(props) {

  const { contentSection, cardWidth, cardHeight } = props;

  return (
    <section className="CardContent" style={{ width: cardWidth, height: cardHeight }}>
      {contentSection}
    </section>
  );
}
export default CardToDisplayContent;