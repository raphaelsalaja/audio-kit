import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Users3({
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
          d="M6.5 7.00049C7.7426 7.00049 8.75 5.99349 8.75 4.75049C8.75 3.50749 7.7426 2.50049 6.5 2.50049C5.2574 2.50049 4.25 3.50749 4.25 4.75049C4.25 5.99349 5.2574 7.00049 6.5 7.00049Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.54 14.5675C11.377 14.2765 11.806 13.3105 11.406 12.5195C10.5 10.7285 8.645 9.49951 6.5 9.49951C4.355 9.49951 2.5 10.7275 1.594 12.5195C1.194 13.3105 1.622 14.2765 2.46 14.5675C3.491 14.9255 4.868 15.2505 6.5 15.2505C8.132 15.2505 9.509 14.9255 10.54 14.5675Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.1665 14.9453C14.6676 14.833 15.1388 14.7065 15.54 14.5674C16.377 14.2764 16.806 13.3106 16.406 12.5195C15.7471 11.2168 14.5834 10.2182 13.1736 9.76709"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.2371 6.97559C11.324 6.98659 11.4101 7.00049 11.5 7.00049C12.743 7.00049 13.75 5.99339 13.75 4.75049C13.75 3.50759 12.743 2.50049 11.5 2.50049C11.41 2.50049 11.3239 2.51421 11.2369 2.52521"
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

export default Users3;
