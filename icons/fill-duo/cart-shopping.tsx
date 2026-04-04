import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CartShopping({
  fill = "currentColor",
  secondaryfill,
  strokewidth = 1,
  width = "1em",
  height = "1em",
  title = "badge 13",
  ...props
}: IconProps) {
  secondaryfill = secondaryfill || fill;

  return (
    <svg
      height={height}
      width={width}
      {...props}
      viewBox="0 0 18 18"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="M3.55823 4.25086C3.70053 4.09127 3.90419 4 4.11801 4H14.322C15.5364 4 16.3816 5.20666 15.9667 6.34796L14.6943 9.84796C14.4428 10.5395 13.7855 11 13.0496 11H4.93629C4.5552 11 4.2347 10.7142 4.1912 10.3356L3.37291 4.83562C3.3485 4.62319 3.41592 4.41045 3.55823 4.25086Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M1.02243 1.56797C1.12296 1.16614 1.5302 0.921888 1.93203 1.02242L3.28248 1.36028C3.97074 1.53215 4.48688 2.10291 4.59 2.80381L5.66933 10.1408C5.72961 10.5506 5.44627 10.9317 5.03647 10.992C4.62666 11.0523 4.24558 10.769 4.1853 10.3591L3.10598 3.02216C3.10598 3.02215 3.10598 3.02216 3.10598 3.02216C3.09113 2.92126 3.017 2.84001 2.91955 2.81571L1.56797 2.47757C1.16615 2.37704 0.921896 1.9698 1.02243 1.56797Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4.75 11C4.33581 11 4 11.3358 4 11.75C4 12.1642 4.33581 12.5 4.75 12.5H15.25C15.6642 12.5 16 12.8358 16 13.25C16 13.6642 15.6642 14 15.25 14H4.75C3.50739 14 2.5 12.9926 2.5 11.75C2.5 10.5074 3.50739 9.5 4.75 9.5C5.16421 9.5 5.5 9.83579 5.5 10.25C5.5 10.6642 5.16421 11 4.75 11Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M4 17C4.552 17 5 16.552 5 16C5 15.448 4.552 15 4 15C3.448 15 3 15.448 3 16C3 16.552 3.448 17 4 17Z"
          fill={fill}
        />
        <path
          d="M14 17C14.552 17 15 16.552 15 16C15 15.448 14.552 15 14 15C13.448 15 13 15.448 13 16C13 16.552 13.448 17 14 17Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CartShopping;
