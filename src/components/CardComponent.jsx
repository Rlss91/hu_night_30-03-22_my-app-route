const CardComponent = (props) => {
  const handleBtnClick = () => {
    console.log("clicked", props.id);
    props.onDeleteCard(props.id);
  };
  return (
    <div className="card">
      <div className="card-body">
        <h5 className="card-title">{props.name}</h5>
        <h6 className="card-subtitle mb-2 text-muted">Card subtitle</h6>
        <p className="card-text">{props.desc}</p>
        <button
          type="button"
          className="btn btn-danger"
          onClick={handleBtnClick}
        >
          X
        </button>
      </div>
    </div>
  );
};

export default CardComponent;
