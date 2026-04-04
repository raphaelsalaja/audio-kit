import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flame2({
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
          d="m9,1.75l-3.3597,4.5977-1.5915-.8843s-.7073,4.0959-.7073,5.0251c0,3.6731,2.9003,5.7615,5.6585,5.7615-1.1046,0-2-.9326-2-2.0835,0-2.0508,2-4.1665,2-4.1665,0,0,2,2.1157,2,4.1665,0,1.1509-.8954,2.0835-2,2.0835,2.7583,0,5.6586-2.0884,5.6586-5.7615,0-4.1409-5.6586-8.7385-5.6586-8.7385Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m11,14.1667c0-2.0508-2-4.1667-2-4.1667,0,0-2,2.1159-2,4.1667,0,1.1506.8954,2.0833,2,2.0833s2-.9327,2-2.0833Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m3.3415,10.4885c0-.9292.7073-5.0251.7073-5.0251l1.5915.8841,3.3598-4.5976s5.6585,4.5976,5.6585,8.7385c0,3.6732-2.9002,5.7615-5.6585,5.7615s-5.6585-2.0883-5.6585-5.7615Z"
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

export default Flame2;
