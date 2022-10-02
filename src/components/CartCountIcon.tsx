import { selectCartItemsLength } from "@/app/features/user/userSlice";
import { useAppSelector } from "@/app/hooks";
import { useSpring, animated } from "@react-spring/web";
import React, { useEffect, useState } from "react";

type Props = {};

const CartCountIcon = (props: Props) => {
  const [init, setInit] = useState(true);

  const cartItemsLength = useAppSelector(selectCartItemsLength);
  const [springs, api] = useSpring(() => ({
    from: { scale: 1 },
    config: {
      mass: 3,
      tension: 300,
      friction: 17,
      precision: 0.001,
      velocity: 0.011,
      bounce: 1,
    },
  }));
  useEffect(() => {
    if (!init) {
      console.log("render");
      api.start({
        from: {
          scale: 1.25,
        },
        to: {
          scale: 1,
        },
      });
    }
    setInit(false);
  }, [cartItemsLength]);
  return (
    <animated.span
      style={springs}
      className="flex items-center justify-center p-4 w-5 h-5 text-calmWhite bg-lightViolet rounded-full font-semibold"
    >
      {cartItemsLength}
    </animated.span>
  );
};

export default CartCountIcon;
