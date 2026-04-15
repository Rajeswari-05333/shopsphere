import { useState } from "react";
import translationData from "../data/translation.json";

function Translator() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredWords = Array.isArray(translationData)
    ? translationData.filter((item) =>
        item.english.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : [];

  return (
    <div style={{ padding: "20px" }}>
      <h1>Translator</h1>

      <input
        type="text"
        placeholder="Enter word..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        style={{ padding: "10px", width: "300px" }}
      />

      <div style={{ marginTop: "20px" }}>
        {filteredWords.map((item, index) => (
          <p key={index}>
            {item.english} → {item.odia}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Translator;