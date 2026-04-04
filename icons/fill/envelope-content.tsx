import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function EnvelopeContent({
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
          d="M16.648 7.1174C16.429 6.9804 16.157 6.9654 15.923 7.0774L9.10699 10.3674C9.03899 10.4004 8.95999 10.4004 8.89099 10.3674L2.07599 7.0774C1.84399 6.9644 1.56999 6.9824 1.35099 7.1194C1.13199 7.2564 0.998993 7.4984 0.998993 7.7564L0.998993 13.25C0.998993 14.767 2.23199 16 3.74899 16H14.25C15.767 16 17 14.767 17 13.25V7.7524C17 7.4944 16.867 7.2544 16.648 7.1174Z"
          fill={fill}
        />
        <path
          d="M11.75 4.5H6.25C5.836 4.5 5.5 4.164 5.5 3.75C5.5 3.336 5.836 3 6.25 3H11.75C12.164 3 12.5 3.336 12.5 3.75C12.5 4.164 12.164 4.5 11.75 4.5Z"
          fill={secondaryfill}
        />
        <path
          d="M11.75 7.5H6.25C5.836 7.5 5.5 7.164 5.5 6.75C5.5 6.336 5.836 6 6.25 6H11.75C12.164 6 12.5 6.336 12.5 6.75C12.5 7.164 12.164 7.5 11.75 7.5Z"
          fill={secondaryfill}
        />
        <path
          d="M4.75 1.5C4.61221 1.5 4.5 1.61221 4.5 1.75V5.3842C4.5 5.79841 4.16421 6.1342 3.75 6.1342C3.33579 6.1342 3 5.79841 3 5.3842V1.75C3 0.783786 3.78379 0 4.75 0H13.25C14.2162 0 15 0.783786 15 1.75V5.3838C15 5.79801 14.6642 6.1338 14.25 6.1338C13.8358 6.1338 13.5 5.79801 13.5 5.3838V1.75C13.5 1.61221 13.3878 1.5 13.25 1.5H4.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default EnvelopeContent;
