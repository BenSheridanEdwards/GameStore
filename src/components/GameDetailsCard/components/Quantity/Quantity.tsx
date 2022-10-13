import React, { useCallback } from "react";
import Button from "components/Button/Button";
import { ReactComponent as AddIcon } from "assets/icons/add.svg";
import { ReactComponent as SubtractIcon } from "assets/icons/subtract.svg";

type QuantityProps = {
  value: number;
  onChange: (newValue: number) => void;
};

const Quantity = ({ value, onChange }: QuantityProps) => {
  const handleDecreaseClick = useCallback(() => {
    onChange(value - 1);
  }, [onChange, value]);

  const handleIncreaseClick = useCallback(() => {
    onChange(value + 1);
  }, [onChange, value]);

  return (
    <div className="Quantity">
      <div className="Quantity__label">Quantity</div>
      <div>
        <Button onClick={handleDecreaseClick} variant="secondary">
          <SubtractIcon />
        </Button>
        <div>{value}</div>
        <Button onClick={handleIncreaseClick} variant="secondary">
          <AddIcon />
        </Button>
      </div>
    </div>
  );
};

export default Quantity;
