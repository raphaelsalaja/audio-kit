import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DividerYDotted2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <circle
          cx="10.25"
          cy="6"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="7.417"
          cy="6"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle
          cx="4.583"
          cy="6"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
        <circle cx="1.75" cy="6" fill={secondaryfill} r=".75" strokeWidth="0" />
        <path
          d="m11.405,1.938c.058-.225.009-.464-.133-.647-.142-.184-.361-.291-.593-.291H1.321c-.232,0-.451.107-.593.291-.103.133-.157.295-.157.459,0,.062.008.126.024.188.314,1.214,1.406,2.062,2.655,2.062h5.5c1.249,0,2.341-.848,2.655-2.062Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.272,10.709c.142-.184.192-.421.133-.647-.314-1.214-1.406-2.062-2.655-2.062H3.25c-1.249,0-2.341.848-2.655,2.062-.016.062-.024.126-.024.188,0,.164.054.326.157.459.142.184.361.291.593.291h9.358c.232,0,.451-.107.593-.291Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default DividerYDotted2;
