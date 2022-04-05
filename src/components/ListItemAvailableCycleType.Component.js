import "./style.css";

export const ListAvailableCycleType= ({ data, value, onChange }) => {
  // populate your list item componet with select
  return (
    <select value={value} onChange={onChange}>
      {/* {!!state && <pre>{JSON.stringify(state, null, 2)}</pre>} */}
      {!!data &&
        data.map((availableCycleType) => (
          <option key={availableCycleType.id} value={availableCycleType.Description}>
            {availableCycleType.Status}
          </option>
        ))}
    </select>
  );
};
