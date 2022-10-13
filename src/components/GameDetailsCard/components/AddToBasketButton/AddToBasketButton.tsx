import React from "react";
import { ReactComponent as PlusIcon } from "assets/icons/plus.svg";
import { ReactComponent as CheckIcon } from "assets/icons/check.svg";
import Button from "components/Button/Button";

type AddToBasketButtonProps = {
  isAdded: boolean;
  onClick: () => void;
};

const AddToBasketButton = ({ isAdded, onClick }: AddToBasketButtonProps) => {
  const icon = isAdded ? <PlusIcon /> : <CheckIcon />;
  const label = isAdded ? "Add to basket" : "Added";
  const variant = isAdded ? undefined : "primary";

  return (
    <Button icon={icon} variant={variant} onClick={onClick}>
      {label}
    </Button>
  );
};

export default AddToBasketButton;
