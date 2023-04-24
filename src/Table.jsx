const Table = ({ data }) => {
    return (
      <table>
        <tbody>
          <tr>
            <th>Name</th>
            <th>Primary Text</th>
            <th>Headline</th>
            <th>Description</th>
          </tr>
          {data.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.primary_text}</td>
              <td>{item.headline}</td>
              <td>{item.description}</td>
            </tr>
          ))}
        </tbody>
      </table>
    );
  };
  
  export default Table;