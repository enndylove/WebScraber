import React, { useState } from 'react';
import ScrapeForm from './components/ScrapeForm';
import Results from './components/Results';

const App = () => {
    const [results, setResults] = useState([]);

    return (
        <div>
            <h1>Concurrent Web Scraper</h1>
            <ScrapeForm onResults={setResults} />
            {results.length > 0 && <Results data={results} />}
        </div>
    );
};

export default App;
