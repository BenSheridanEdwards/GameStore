import React, { useCallback, useState } from "react";
import Button from "components/Button/Button";
import { ReactComponent as AddIcon } from "assets/icons/add.svg";
import { ReactComponent as SubtractIcon } from "assets/icons/subtract.svg";
import "./styles.css";

interface QuantityProps {
  value: number;
  onChange: (newValue: number) => void;
}

const Quantity = ({ value, onChange }: QuantityProps) => {
  const [quantity, setQuantity] = useState(value);

  const handleDecreaseClick = useCallback(() => {
    quantity > 1 && setQuantity(quantity - 1);
  }, [quantity]);

  const handleIncreaseClick = useCallback(() => {
    setQuantity(quantity + 1);
  }, [quantity]);

  return (
    <div className="Quantity">
      <label>Quantity</label>
      <div className="Quantity__Controls">
        <Button
          icon={<SubtractIcon />}
          onClick={handleDecreaseClick}
          variant="icon"
        />
        <div className="Quantity__Value">{quantity}</div>
        <Button
          icon={<AddIcon />}
          onClick={handleIncreaseClick}
          variant="icon"
        />
      </div>
    </div>
  );
};

export default Quantity;
