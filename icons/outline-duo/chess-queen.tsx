import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChessQueen({
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
          d="m4.6703,13.25l-1.4434-1.4998c-1.3518-1.4226-1.2932-3.6719.1294-5.0228,1.4226-1.3518,3.6719-1.2932,5.0228.1294.2514.2644.4609.567.6201.8956.9999-2.0594,3.7259-2.7186,5.5926-1.0818.4981.4366.8649,1.025,1.0334,1.6665.338,1.2876-.0317,2.5491-.8528,3.4131l-1.4434,1.4998H4.6703Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m3.5633,14.6221l1.107-1.3721h8.6587l1.1072,1.372c.5278.6541.0623,1.628-.7782,1.628H4.3416c-.8404,0-1.306-.9738-.7783-1.6279Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m4.6703,13.25l-1.4434-1.4998c-1.3518-1.4226-1.2932-3.6719.1294-5.0228,1.4226-1.3518,3.6719-1.2932,5.0228.1294.2514.2644.4609.567.6201.8956.9999-2.0594,3.7259-2.7186,5.5926-1.0818.4981.4366.8649,1.025,1.0334,1.6665.338,1.2876-.0317,2.5491-.8528,3.4131l-1.4434,1.4998"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="9"
          x2="9"
          y1=".75"
          y2="7.7524"
        />
        <line
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
          x1="11"
          x2="7"
          y1="2.75"
          y2="2.75"
        />
      </g>
    </svg>
  );
}

export default ChessQueen;
