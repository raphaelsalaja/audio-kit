import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ListRadio({
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
          d="M10.2501 6H16.2501C16.6642 6 17.0001 5.6641 17.0001 5.25C17.0001 4.8359 16.6642 4.5 16.2501 4.5H10.2501C9.83599 4.5 9.50009 4.8359 9.50009 5.25C9.50009 5.6641 9.83599 6 10.2501 6Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M16.2501 12H10.2501C9.83599 12 9.50009 12.3359 9.50009 12.75C9.50009 13.1641 9.83599 13.5 10.2501 13.5H16.2501C16.6642 13.5 17.0001 13.1641 17.0001 12.75C17.0001 12.3359 16.6642 12 16.2501 12Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M4.25009 16C6.04502 16 7.50009 14.5449 7.50009 12.75C7.50009 10.9551 6.04502 9.5 4.25009 9.5C2.45517 9.5 1.00009 10.9551 1.00009 12.75C1.00009 14.5449 2.45517 16 4.25009 16Z"
          fill={fill}
        />
        <path
          d="M4.25009 2C2.45809 2 1.00009 3.458 1.00009 5.25C1.00009 7.042 2.45809 8.5 4.25009 8.5C6.04209 8.5 7.50009 7.042 7.50009 5.25C7.50009 3.458 6.04209 2 4.25009 2ZM4.25009 7C3.28359 7 2.50009 6.2166 2.50009 5.25C2.50009 4.2834 3.28359 3.5 4.25009 3.5C5.21659 3.5 6.00009 4.2834 6.00009 5.25C6.00009 6.2166 5.21659 7 4.25009 7Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ListRadio;
