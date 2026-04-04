import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function LayerUp({
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
          d="M2.665 9.71101L8.55199 6.641C8.84199 6.49 9.18798 6.49004 9.47798 6.64204L15.337 9.71101C15.871 9.99201 15.871 10.757 15.337 11.038L9.467 14.129C9.175 14.283 8.82699 14.283 8.53499 14.129L2.665 11.038C2.131 10.757 2.131 9.99201 2.665 9.71101Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.99999 7.9552L2.665 9.711C2.131 9.992 2.131 10.757 2.665 11.038L8.53499 14.129C8.82699 14.283 9.175 14.283 9.467 14.129L15.337 11.038C15.871 10.757 15.871 9.992 15.337 9.711L12 7.95343"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 10V2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.5 4.25L9 1.75L11.5 4.25"
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

export default LayerUp;
