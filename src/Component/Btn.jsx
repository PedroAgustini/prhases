const Btn = ({ color, changePhrase }) => {
    return (
      <div className="text-align-right">
        <button style={{ backgroundColor: color }} onClick={changePhrase}> </button>
      </div>
    );
  };
export default Btn;