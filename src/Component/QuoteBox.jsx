import phrases from "./Phrase.json";

const QuoteBox = ({ phrase }) => {
  return (
    <div>
          <p>{phrases[phrase].quote}</p>
          <p className="text-align-right">{phrases[phrase].author}</p>
    </div>
  );
};

export default QuoteBox;