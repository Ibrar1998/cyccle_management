import "./style.css";

export const ListProductCycle= ({ data, value, onChange }) => {
  // populate your list item componet with select
  return (
    <select value={value} onChange={onChange}>
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {!!data &&
        data.map((product) => (
          <option key={product._id} value={product._id}>
            {product.Product + "   -   " + product.Company}
          </option>
        ))}
    </select>
  );
};
