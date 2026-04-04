import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SuitcasePin({
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
          d="M9.5 13C9.5 10.2432 11.7432 8 14.5 8C15.1179 8 15.7032 8.04713 16.25 8.25293V6.5C16.25 5.395 15.355 4.5 14.25 4.5H3.75C2.645 4.5 1.75 5.395 1.75 6.5V13C1.75 14.105 2.645 15 3.75 15L9.8902 15.0667C9.6399 14.4656 9.5 13.7342 9.5 13Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M14.5 16.75C14.5 16.75 11.75 15.241 11.75 13C11.75 11.481 12.981 10.25 14.5 10.25C16.019 10.25 17.25 11.481 17.25 13C17.25 15.241 14.5 16.75 14.5 16.75Z"
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
          d="M14.5 13.75C14.914 13.75 15.25 13.414 15.25 13C15.25 12.586 14.914 12.25 14.5 12.25C14.086 12.25 13.75 12.586 13.75 13C13.75 13.414 14.086 13.75 14.5 13.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.25 7.5224V6.75C16.25 5.646 15.355 4.75 14.25 4.75H3.75C2.645 4.75 1.75 5.646 1.75 6.75V13.25C1.75 14.354 2.645 15.25 3.75 15.25H9.20001"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 16.75C14.5 16.75 11.75 15.241 11.75 13C11.75 11.481 12.981 10.25 14.5 10.25C16.019 10.25 17.25 11.481 17.25 13C17.25 15.241 14.5 16.75 14.5 16.75Z"
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

export default SuitcasePin;
