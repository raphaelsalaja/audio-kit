import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HeartHandshake({
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
          d="M9,4.47c-.71-1.06-1.897-1.704-3.173-1.72-2.123,.013-3.834,1.739-3.826,3.859,0,4.826,4.959,7.794,6.529,8.613h0c.297,.155,.644,.155,.941,0,.921-.481,3.01-1.701,4.578-3.603"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9,4.47l-2.833,3.822,.446,.399c.833,.746,2.116,.663,2.847-.183l1.269-1.468,3.321,4.58c1.104-1.339,1.951-3.016,1.951-5.01,.008-2.12-1.704-3.846-3.826-3.859-1.277,.016-2.464,.66-3.173,1.72Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default HeartHandshake;
