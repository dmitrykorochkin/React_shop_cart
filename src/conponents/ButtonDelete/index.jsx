const ButtonDelete = ({productDelete, id}) => {
  return (
    <button type="button" onClick={() => {productDelete(id)}}>
      <img src="./img/icons/close.svg" alt="" />
    </button>
  );
};

export default ButtonDelete;
