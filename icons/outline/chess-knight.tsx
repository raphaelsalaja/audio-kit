import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChessKnight({
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
          d="m12.25,13.25C15.9375,7.5,13.5312,1.3125,7.25,1v2l-3.8962,2.2519c-.4521.2613-.6271.8266-.4016,1.2976l.3501.7313c.2279.4761.7798.6738,1.2762.4942,2.7757-1.0042,2.8382.975,5.4702-.4686"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.9062,10.25c-.7188.6406-1.2969,1.625-1.1562,3"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.5633,14.6221l.8068-1c.1898-.2353.476-.3721.7783-.3721h7.7026c.3023,0,.5884.1367.7782.372l.807,1c.5278.6541.0623,1.628-.7782,1.628H4.3416c-.8404,0-1.306-.9738-.7783-1.6279Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="8.75"
          cy="4.75"
          fill={secondaryfill}
          r=".75"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChessKnight;
