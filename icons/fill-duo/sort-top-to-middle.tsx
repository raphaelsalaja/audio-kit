import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortTopToMiddle({
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
          d="M15.7501 13.5H2.25012C1.83602 13.5 1.50012 13.8359 1.50012 14.25C1.50012 14.6641 1.83602 15 2.25012 15H15.7501C16.1642 15 16.5001 14.6641 16.5001 14.25C16.5001 13.8359 16.1642 13.5 15.7501 13.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.25012 9.75H6.25011C6.66421 9.75 7.00011 9.4141 7.00011 9C7.00011 8.5859 6.66421 8.25 6.25011 8.25H2.25012C1.83602 8.25 1.50012 8.5859 1.50012 9C1.50012 9.4141 1.83602 9.75 2.25012 9.75Z"
          fill={fill}
        />
        <path
          d="M13.1251 3H2.25012C1.83602 3 1.50012 3.3359 1.50012 3.75C1.50012 4.1641 1.83602 4.5 2.25012 4.5H13.1251C14.1593 4.5 15.0001 5.3413 15.0001 6.375C15.0001 7.4087 14.1593 8.25 13.1251 8.25H11.0606L12.0303 7.28027C12.3233 6.98727 12.3233 6.51275 12.0303 6.21985C11.7373 5.92695 11.2627 5.92685 10.9698 6.21985L8.7198 8.46985C8.4268 8.76285 8.4268 9.23737 8.7198 9.53027L10.9698 11.7803C11.1163 11.9268 11.3077 12 11.5001 12C11.6925 12 11.8839 11.9268 12.0304 11.7803C12.3234 11.4873 12.3234 11.0127 12.0304 10.7198L11.0607 9.75012H13.1252C14.9865 9.75012 16.5002 8.23592 16.5002 6.37512C16.5002 4.51432 14.9864 3 13.1251 3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortTopToMiddle;
