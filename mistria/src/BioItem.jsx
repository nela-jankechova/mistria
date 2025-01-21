import './styles/BioItem.css'

const BioItem = function (defaultValue, name, alt, image) {
  
  return (
    <div className="bio">
      <img
        src={image}
        alt={alt}
        height="35px"
        width="35px"
      />
      <input name={name} defaultValue={defaultValue} />
    </div>
  );
}

export default BioItem;