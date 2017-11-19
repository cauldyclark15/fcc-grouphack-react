import React from "react";

const ContentTable = ({ items }) => (
  <div className="responsive">
    <table className="table table-striped">
      <thead>
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>Phone</th>
        </tr>
      </thead>
      <tbody>
        {items.map(item => {
          return (
            <tr key={item.id}>
              <th>{item.name}</th>
              <th>{item.email}</th>
              <th>{item.phone}</th>
            </tr>
          );
        })}
      </tbody>
    </table>
  </div>
);

export default ContentTable;
