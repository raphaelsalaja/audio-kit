import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortMiddleToBottom({
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
          d="M15.7501 3H2.25009C1.83599 3 1.50009 3.3359 1.50009 3.75C1.50009 4.1641 1.83599 4.5 2.25009 4.5H15.7501C16.1642 4.5 16.5001 4.1641 16.5001 3.75C16.5001 3.3359 16.1642 3 15.7501 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M6.25009 13.5H2.25009C1.83599 13.5 1.50009 13.8359 1.50009 14.25C1.50009 14.6641 1.83599 15 2.25009 15H6.25009C6.66419 15 7.00009 14.6641 7.00009 14.25C7.00009 13.8359 6.66419 13.5 6.25009 13.5Z"
          fill={fill}
        />
        <path
          d="M13.1251 8.25H2.25009C1.83599 8.25 1.50009 8.5859 1.50009 9C1.50009 9.4141 1.83599 9.75 2.25009 9.75H13.1251C14.1588 9.75 15.0001 10.5913 15.0001 11.625C15.0001 12.6587 14.1588 13.5 13.1251 13.5H11.0606L12.0303 12.5303C12.3233 12.2373 12.3233 11.7627 12.0303 11.4698C11.7373 11.1769 11.2627 11.1768 10.9698 11.4698L8.71979 13.7198C8.42679 14.0128 8.42679 14.4874 8.71979 14.7803L10.9698 17.0303C11.1163 17.1768 11.3082 17.25 11.5001 17.25C11.692 17.25 11.8839 17.1768 12.0304 17.0303C12.3234 16.7373 12.3234 16.2627 12.0304 15.9698L11.0607 15.0001H13.1252C14.986 15.0001 16.5002 13.4859 16.5002 11.6251C16.5002 9.76432 14.9859 8.25 13.1251 8.25Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortMiddleToBottom;
