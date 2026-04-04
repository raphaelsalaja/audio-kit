import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePen({
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
          d="M9.63181 13.3379C9.73821 12.9668 9.93651 12.6299 10.208 12.3604L13.3662 9.20221C13.9785 8.58891 14.7949 8.25098 15.6641 8.25098C15.8631 8.25098 16.0583 8.23988 16.25 8.27448V6.5C16.25 5.395 15.355 4.5 14.25 4.5H3.75C2.645 4.5 1.75 5.395 1.75 6.5V13C1.75 14.105 2.645 15 3.75 15L9.04709 15.25L9.63181 13.3379Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 4.75V2.25C6.25 1.698 6.698 1.25 7.25 1.25H10.75C11.302 1.25 11.75 1.698 11.75 2.25V4.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.25 7.54303V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H8.3075"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 15.9543L16.9571 12.7931C17.3476 12.4026 17.3476 11.7693 16.9571 11.3788L16.3713 10.7931C15.9808 10.4026 15.3476 10.4026 14.9571 10.7931L11.7959 13.9543L11.0001 16.7502L13.7959 15.9543Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.7959 15.9543L16.9571 12.7931C17.3476 12.4026 17.3476 11.7693 16.9571 11.3788L16.3713 10.7931C15.9808 10.4026 15.3476 10.4026 14.9571 10.7931L11.7959 13.9543L11.0001 16.7502L13.7959 15.9543Z"
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

export default SuitcasePen;
