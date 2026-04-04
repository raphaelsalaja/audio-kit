import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortTopToBottom2({
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
          d="M2.25012 9.75H12.2501C12.6642 9.75 13.0001 9.4141 13.0001 9C13.0001 8.5859 12.6642 8.25 12.2501 8.25H2.25012C1.83602 8.25 1.50012 8.5859 1.50012 9C1.50012 9.4141 1.83602 9.75 2.25012 9.75Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25012 13.5H2.25012C1.83602 13.5 1.50012 13.8359 1.50012 14.25C1.50012 14.6641 1.83602 15 2.25012 15H6.25012C6.66422 15 7.00012 14.6641 7.00012 14.25C7.00012 13.8359 6.66422 13.5 6.25012 13.5Z"
          fill={fill}
        />
        <path
          d="M13.7501 3H2.25012C1.83602 3 1.50012 3.3359 1.50012 3.75C1.50012 4.1641 1.83602 4.5 2.25012 4.5H13.7501C14.4396 4.5 15.0001 5.0605 15.0001 5.75V12.25C15.0001 12.9395 14.4396 13.5 13.7501 13.5H11.0606L12.0303 12.5303C12.3233 12.2373 12.3233 11.7627 12.0303 11.4698C11.7373 11.1769 11.2627 11.1768 10.9698 11.4698L8.71982 13.7198C8.42682 14.0128 8.42682 14.4874 8.71982 14.7803L10.9698 17.0303C11.1163 17.1768 11.3077 17.25 11.5001 17.25C11.6925 17.25 11.8839 17.1768 12.0304 17.0303C12.3234 16.7373 12.3234 16.2627 12.0304 15.9698L11.0607 15.0001H13.7502C15.2668 15.0001 16.5002 13.7667 16.5002 12.2501V5.75012C16.5002 4.23352 15.2667 3 13.7501 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortTopToBottom2;
