import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HouseDots({
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
          d="M13 16C13.5523 16 14 15.5523 14 15C14 14.4477 13.5523 14 13 14C12.4477 14 12 14.4477 12 15C12 15.5523 12.4477 16 13 16Z"
          fill={secondaryfill}
        />
        <path
          d="M10 16C10.5523 16 11 15.5523 11 15C11 14.4477 10.5523 14 10 14C9.44772 14 9 14.4477 9 15C9 15.5523 9.44772 16 10 16Z"
          fill={secondaryfill}
        />
        <path
          d="M16 16C16.5523 16 17 15.5523 17 15C17 14.4477 16.5523 14 16 14C15.4477 14 15 14.4477 15 15C15 15.5523 15.4477 16 16 16Z"
          fill={secondaryfill}
        />
        <path
          d="M7.94127 1.3628C8.56694 0.88743 9.4333 0.886554 10.0591 1.36311L15.3088 5.35286C15.7448 5.68397 16 6.20006 16 6.74598V12.5C15.4372 12.5 14.9178 12.686 14.5 12.9998C14.0822 12.686 13.5628 12.5 13 12.5C12.4372 12.5 11.9178 12.686 11.5 12.9998C11.0822 12.686 10.5628 12.5 10 12.5C8.61929 12.5 7.5 13.6193 7.5 15C7.5 15.8178 7.89266 16.5439 8.49973 17H4.75C3.23079 17 2 15.7692 2 14.25V6.74598C2 6.19865 2.2559 5.68344 2.69155 5.35258L7.94127 1.3628Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default HouseDots;
