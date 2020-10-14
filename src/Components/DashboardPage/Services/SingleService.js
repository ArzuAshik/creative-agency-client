import React, { useState } from "react";

const SingleService = () => {
  const pending = { color: "#FF4545" };
  const done = { color: "#009444" };
  const going = { color: "#FFBD3E" };

  const [selectedOption, setSelectedOption] = useState({});
  function statusChange(e) {
    e.target.value === "pending" && setSelectedOption({ color: "#FF4545" });
    e.target.value === "done" && setSelectedOption({ color: "#009444" });
    e.target.value === "going" && setSelectedOption({ color: "#FFBD3E" });
  }
  return (
    <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
      <td>
        <select
          onChange={statusChange}
          style={selectedOption}
          className="border-0"
        >
          <option value="pending" style={pending}>
            Pending
          </option>
          <option value="done" style={done}>
            Done
          </option>
          <option value="going" style={going}>
            On going
          </option>
        </select>
      </td>
    </tr>
  );
};

export default SingleService;
