import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BankingMobile({
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
          d="M12.25 1.75H5.75C4.6454 1.75 3.75 2.6454 3.75 3.75V14.25C3.75 15.3546 4.6454 16.25 5.75 16.25H12.25C13.3546 16.25 14.25 15.3546 14.25 14.25V3.75C14.25 2.6454 13.3546 1.75 12.25 1.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5 2H7.5V2.75H10.5V2Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 6.75011H8.3748C7.6155 6.75011 7 7.36561 7 8.12491C7 8.88421 7.6155 9.50011 8.3748 9.50011H9.6251C10.3844 9.50011 10.9999 10.1156 10.9999 10.8749C10.9999 11.6342 10.3844 12.2498 9.6251 12.2498H7.2499M8.9999 5.74991V6.75011M8.9999 13.2499V12.2499"
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

export default BankingMobile;
