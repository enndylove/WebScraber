import React, { useState } from 'react';
import axios from 'axios';

const ScrapeForm = ({ onResults }) => {
    const [urls, setUrls] = useState('');
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            const { data } = await axios.post('http://localhost:3000/scraper', {
                urls: urls.split('\n').map((url) => url.trim()),
            });
            onResults(data);
        } catch (error) {
            console.error('Error scraping:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <textarea
              rows="5"
              placeholder="Enter URLs (one per line)"
              value={urls}
              onChange={(e) => setUrls(e.target.value)}
            />
            <button type="submit" disabled={loading}>
                {loading ? 'Scraping...' : 'Start Scraping'}
            </button>
        </form>
    );
};

export default ScrapeForm;
