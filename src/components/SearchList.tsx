import { useState } from "react";
import { useActions } from "../hooks/useActions";
import { useSelector } from "react-redux";

const SearchList: React.FC = () => {
  const [term, setTerm] = useState("");
  const { searchRepositories } = useActions();

  const selectedState = (state: any) => state;

  const results = useSelector(selectedState);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepositories(term);
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input value={term} onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      <ul>
        {results.repositories.data.map((item: string) => {
          return <li key={item}>{item}</li>;
        })}
      </ul>
    </div>
  );
};

export default SearchList;
