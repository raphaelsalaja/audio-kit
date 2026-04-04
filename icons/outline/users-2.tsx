import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users2({
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
          d="M11.0401 14.8175C11.8771 14.5265 12.3061 13.5605 11.9061 12.7695C11.0001 10.9785 9.14507 9.74951 7.00007 9.74951C4.85507 9.74951 3.00006 10.9775 2.09406 12.7695C1.69406 13.5605 2.12206 14.5265 2.96006 14.8175C3.99106 15.1755 5.36807 15.5005 7.00007 15.5005C8.63207 15.5005 10.0091 15.1755 11.0401 14.8175Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.4765 6.2485C12.4846 6.2485 12.492 6.25049 12.5001 6.25049C13.7431 6.25049 14.7501 5.24339 14.7501 4.00049C14.7501 2.75759 13.7431 1.75049 12.5001 1.75049C12.3532 1.75049 12.2122 1.77199 12.074 1.80099"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M7 7.25049C8.519 7.25049 9.75 6.01949 9.75 4.50049C9.75 2.98149 8.519 1.75049 7 1.75049C5.481 1.75049 4.25 2.98149 4.25 4.50049C4.25 6.01949 5.481 7.25049 7 7.25049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.0389 13.4355C15.4228 13.3413 15.7847 13.2382 16.096 13.1274C16.798 12.8774 17.106 12.0505 16.771 11.3845C15.985 9.82149 14.369 8.74951 12.5 8.74951"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Users2;
