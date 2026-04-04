import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Link2Slash({
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
          d="M7.73709 10V6.75C7.73709 5.64543 6.84166 4.75 5.73709 4.75H3.25C2.14543 4.75 1.25 5.64543 1.25 6.75V11.25C1.25 12.3546 2.14543 13.25 3.25 13.25H4.48709L7.73709 10Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M9.82236 11.3606C9.87467 12.4253 10.9233 13.25 12 13.25H14.75C15.8546 13.25 16.75 12.3546 16.75 11.25V6.75001C16.75 6.11732 16.4799 5.52809 16.0214 5.16156L9.82236 11.3606Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M4.75101 13.25H3.25101C2.14601 13.25 1.25101 12.355 1.25101 11.25V6.75C1.25101 5.645 2.14601 4.75 3.25101 4.75H5.75101C6.85601 4.75 7.75101 5.645 7.75101 6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.4828 5.7496C16.6533 6.044 16.751 6.3856 16.751 6.75V11.25C16.751 12.355 15.856 13.25 14.751 13.25H12.251C11.3689 13.25 10.6206 12.6796 10.3546 11.8874"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.251 6.75C10.251 5.645 11.146 4.75 12.251 4.75H13.251"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.00101 9H9.00101"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.00101 16L16.001 2"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Link2Slash;
