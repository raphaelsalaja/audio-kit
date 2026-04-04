import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderShield({
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
          d="M13.75 6.75C14.855 6.75 15.75 7.645 15.75 8.75V9.07227L15.2227 9.10547L15.0584 8.94428C14.8451 8.73284 14.5887 8.55651 14.2905 8.52106C13.8776 8.472 13.4667 8.54597 13.0684 8.70117L10.3184 9.95117C9.5158 10.3163 9.00007 11.1178 9 12L9.01074 15.2031L4.25 15.25C3.145 15.25 2.25 14.355 2.25 13.25V8.75C2.25 7.645 3.145 6.75 4.25 6.75H13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14 10.75L11.25 12V14.94C11.25 16.48 14 17.25 14 17.25V10.75Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M2.25 8.75V4.75C2.25 3.645 3.145 2.75 4.25 2.75H6.20099C6.80799 2.75 7.38099 3.02499 7.76099 3.49799L8.36401 4.25H13.75C14.855 4.25 15.75 5.145 15.75 6.25V8.56299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.731 8.56299C15.636 7.54699 14.791 6.75 13.75 6.75H4.25C3.145 6.75 2.25 7.646 2.25 8.75V13.25C2.25 14.354 3.145 15.25 4.25 15.25H8.26221"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14 10.75L16.75 12V14.94C16.75 16.48 14 17.25 14 17.25C14 17.25 11.25 16.48 11.25 14.94V12L14 10.75Z"
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

export default FolderShield;
