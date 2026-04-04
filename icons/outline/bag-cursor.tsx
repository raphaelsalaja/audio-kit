import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BagCursor({
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
          d="m6.75,4.75v-1.75c0-1.243,1.007-2.25,2.25-2.25h0c1.243,0,2.25,1.007,2.25,2.25v1.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m14.8359,8.6118l-.1769-2.0349c-.089-1.0339-.955-1.8269-1.992-1.8269h-7.334c-1.037,0-1.902.793-1.992,1.8269l-.652,7.5c-.1021,1.1682.819,2.1731,1.992,2.1731h4.4468"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m10.6263,10.2676l5.94,2.1704c.2503.0914.243.4479-.0107.5291l-2.7185.8699-.8699,2.7185c-.0812.2538-.4377.261-.5291.0107l-2.1704-5.94c-.0816-.2235.1352-.4404.3587-.3587Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default BagCursor;
