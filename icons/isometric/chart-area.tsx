import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartArea({
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
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill="none">
        <path
          d="M21.481 2.75L18.481 4.25V21.75L21.481 20.75V2.75Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M7.98095 11.75L9.48095 8.75L5.70899 10.636L7.98095 11.75Z"
          fill={secondaryfill}
          fillOpacity=".3"
        />
        <path
          d="M2.48096 5.98621L4.26297 6.89419L6.04498 10.8022L7.827 11.7101L10.7358 6.88808"
          stroke={fill}
          strokeLinejoin="round"
        />
        <path
          d="M16.7371 3.25L18.5191 4.15798V22.158"
          stroke={fill}
          strokeLinejoin="round"
        />
        <path
          d="M11.5183 5.59095L14.064 6.88807L15.9029 4.38538"
          stroke={fill}
          strokeLinejoin="round"
        />
        <path
          d="M2.48096 13.067V6.62151C2.48096 6.23377 2.70509 5.88098 3.05609 5.71625L5.03804 4.78606C5.31749 4.65491 5.64185 4.66017 5.9169 4.80032L6.95184 5.32765C7.1533 5.43029 7.31402 5.59818 7.40779 5.80391L9.12161 9.56401L11.3616 5.85075C11.4638 5.68135 11.6139 5.54607 11.793 5.46202L14.0754 4.39082C14.3548 4.25967 14.6792 4.26493 14.9542 4.40508L15.6339 4.75139L16.5864 3.45507C16.6853 3.32052 16.8162 3.21286 16.9674 3.14192L19.2941 2.04991C19.5736 1.91876 19.898 1.92402 20.173 2.06416L20.9731 2.47182C21.3081 2.64253 21.5191 2.98678 21.5191 3.36282V20.1147C21.5191 20.5024 21.2949 20.8552 20.9439 21.02L18.962 21.9501C18.6825 22.0813 18.3582 22.076 18.0831 21.9359L3.29997 14.4035C2.79739 14.1474 2.48096 13.631 2.48096 13.067Z"
          stroke={fill}
          strokeLinecap="square"
        />
        <path d="M18.481 4.25L21.481 2.75" stroke={fill} />
        <path d="M4.34375 7.04572L7.34375 5.54572" stroke={fill} />
      </g>
    </svg>
  );
}

export default ChartArea;
