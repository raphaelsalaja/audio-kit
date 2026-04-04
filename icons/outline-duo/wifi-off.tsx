import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function WifiOff({
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
          d="M7.36739 13.8146C7.53656 14.4576 8.30384 14.75 9.00001 14.75C9.82843 14.75 10.5 14.0784 10.5 13.25C10.5 12.5538 10.191 11.8031 9.54797 11.634L7.36739 13.8146Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M5.11096 9.36099C6.47466 7.99729 8.37617 7.49929 10.1326 7.86729"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.28198 6.53199C5.24948 3.56449 9.69177 2.97059 13.2496 4.75039"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.93787 14.3043C8.20797 14.5792 8.58327 14.75 8.99997 14.75C9.82797 14.75 10.5 14.078 10.5 13.25C10.5 12.8331 10.3296 12.4578 10.0546 12.1877"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2 16L16 2"
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

export default WifiOff;
