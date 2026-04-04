import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function InvoiceDollar({
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
          d="M14.75 3.75V16.25L11.75 14.5L9 16.25L6.25 14.5L3.25 16.25V3.75C3.25 2.645 4.145 1.75 5.25 1.75H12.75C13.855 1.75 14.75 2.645 14.75 3.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 5.75009H8.37479C7.61549 5.75009 7 6.36561 7 7.12491C7 7.88421 7.61549 8.50009 8.37479 8.50009H9.62509C10.3844 8.50009 10.9999 9.11561 10.9999 9.87491C10.9999 10.6342 10.3844 11.2498 9.62509 11.2498H7.24991"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99991 4.74991V5.75009"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.99991 12.2499V11.2499"
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

export default InvoiceDollar;
