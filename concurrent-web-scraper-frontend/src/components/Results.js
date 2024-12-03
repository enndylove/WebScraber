const Results = ({ data }) => (
    <table>
        <thead>
        <tr>
            <th>URL</th>
            <th>Title</th>
        </tr>
        </thead>
        <tbody>
        {data.map((item, index) => (
            <tr key={index}>
                <td>{item.url}</td>
                <td>{item.title || item.error}</td>
            </tr>
        ))}
        </tbody>
    </table>
);

export default Results;
