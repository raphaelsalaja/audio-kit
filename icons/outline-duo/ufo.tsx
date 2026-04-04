import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Ufo({
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
          d="M2.021 7.824C2.164 8.662 4.164 9.058 6.865 8.894L6.87794 8.89192L7.0242 7.63822L10.9643 6.95766L11.6324 8.1269L11.638 8.126C14.492 7.378 16.465 6.269 16.314 5.383C16.127 4.289 12.776 3.949 8.829 4.623C4.882 5.297 1.834 6.73 2.021 7.824Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M14.75 2.5C15.1642 2.5 15.5 2.16421 15.5 1.75C15.5 1.33579 15.1642 1 14.75 1C14.3358 1 14 1.33579 14 1.75C14 2.16421 14.3358 2.5 14.75 2.5Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M3.869 1.894L2.922 1.579L2.607 0.632C2.504 0.326 1.998 0.326 1.895 0.632L1.58 1.579L0.632999 1.894C0.479999 1.945 0.376999 2.088 0.376999 2.25C0.376999 2.412 0.480999 2.555 0.632999 2.606L1.58 2.921L1.895 3.868C1.946 4.021 2.089 4.124 2.251 4.124C2.413 4.124 2.556 4.02 2.607 3.868L2.922 2.921L3.869 2.606C4.022 2.555 4.125 2.412 4.125 2.25C4.125 2.088 4.021 1.945 3.869 1.894Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M5.22301 5.526C5.21101 5.411 5.20801 5.31 5.20801 5.192C5.20801 3.305 6.73801 1.775 8.62501 1.775C10.2 1.775 11.526 2.841 11.922 4.291"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.865 8.894C4.164 9.058 2.164 8.662 2.021 7.824C1.834 6.73 4.882 5.297 8.829 4.623C12.776 3.949 16.127 4.289 16.314 5.383C16.465 6.269 14.492 7.378 11.638 8.126"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7.006 7.689L6 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11 7L16.25 16.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.05613 7.65109C10.1583 7.45837 11.0275 7.16277 10.9974 6.99086C10.9674 6.81894 10.0495 6.83581 8.94728 7.02854C7.84507 7.22126 6.97592 7.51686 7.00598 7.68877C7.03604 7.86068 7.95392 7.84381 9.05613 7.65109Z"
          fill={fill}
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Ufo;
