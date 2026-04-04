import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenWriting6({
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
          d="M6.3823 15.2C6.4263 15.2327 6.47902 15.2503 6.53272 15.2503C6.60312 15.2503 9.2182 14.6805 10.4321 13.0721L14.9032 7.14177L11.7049 4.90222L7.3179 10.7205C6.103 12.3289 6.27589 14.9095 6.28369 15.0184C6.28849 15.0901 6.3247 15.1565 6.3823 15.2Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12.0467 4.93201L14.7627 6.98199"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.53272 15.2503C6.47902 15.2503 6.4263 15.2327 6.3823 15.2C6.3247 15.1565 6.28849 15.0901 6.28369 15.0184C6.27589 14.9095 6.103 12.3289 7.3179 10.7205L12.7426 3.52591C13.1137 3.03271 13.6821 2.75 14.3012 2.75C14.728 2.75 15.1342 2.88619 15.475 3.14359C16.3334 3.79199 16.5053 5.01811 15.8568 5.87701L10.4321 13.0721C9.2182 14.6805 6.60312 15.2503 6.53272 15.2503Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.38388 14.6147C2.15528 13.5762 1.82266 12.6569 1.76096 11.9801C1.56696 9.84007 3.95698 8.69907 3.94098 6.31107C3.93098 4.77907 2.93497 3.54106 2.12397 2.75006"
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

export default PenWriting6;
