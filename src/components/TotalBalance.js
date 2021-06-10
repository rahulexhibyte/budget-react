import React from "react";

const TotalBalance = (props) => {
  const { value } = props;
  return (
    <>
      <div className="flex flex-col font-bold m-5">
        <span className="text-lg">Total Balance :</span>
        <span className="text-2xl ml-5 text-green-500">$ {value}</span>
      </div>
    </>
  );
};

export default TotalBalance;
