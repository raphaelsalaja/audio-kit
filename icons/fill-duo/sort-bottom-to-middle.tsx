import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function SortBottomToMiddle({
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
          d="M15.7501 3H2.25012C1.83602 3 1.50012 3.3359 1.50012 3.75C1.50012 4.1641 1.83602 4.5 2.25012 4.5H15.7501C16.1642 4.5 16.5001 4.1641 16.5001 3.75C16.5001 3.3359 16.1642 3 15.7501 3Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M2.25012 9.75H6.25012C6.66422 9.75 7.00012 9.4141 7.00012 9C7.00012 8.5859 6.66422 8.25 6.25012 8.25H2.25012C1.83602 8.25 1.50012 8.5859 1.50012 9C1.50012 9.4141 1.83602 9.75 2.25012 9.75Z"
          fill={fill}
        />
        <path
          d="M13.1251 8.24999H11.0606L12.0303 7.28026C12.3233 6.98726 12.3233 6.51273 12.0303 6.21983C11.7373 5.92693 11.2627 5.92683 10.9698 6.21983L8.71982 8.46983C8.42682 8.76283 8.42682 9.23736 8.71982 9.53026L10.9698 11.7803C11.1163 11.9268 11.3077 12 11.5001 12C11.6925 12 11.8839 11.9268 12.0304 11.7803C12.3234 11.4873 12.3234 11.0127 12.0304 10.7198L11.0607 9.75011H13.1252C14.1594 9.75011 15.0002 10.5914 15.0002 11.6251C15.0002 12.6588 14.1594 13.5001 13.1252 13.5001H2.25024C1.83614 13.5001 1.50024 13.836 1.50024 14.2501C1.50024 14.6642 1.83614 15.0001 2.25024 15.0001H13.1252C14.9865 15.0001 16.5002 13.4859 16.5002 11.6251C16.5002 9.76431 14.9864 8.24999 13.1251 8.24999Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default SortBottomToMiddle;
