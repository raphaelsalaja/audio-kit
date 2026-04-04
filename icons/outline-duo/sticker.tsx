import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sticker({
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
          d="M9.27397 16.2342C8.66318 15.2238 7.98693 12.635 10.1669 10.3611C12.2443 8.19419 14.97 8.67065 16.2388 9.24205C16.2423 9.19007 16.25 9.06927 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C9.09 16.25 9.267 16.237 9.267 16.237C9.26932 16.2361 9.27165 16.2351 9.27397 16.2342Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M16.237 9.267C15.556 8.944 14.804 8.75 14 8.75C11.101 8.75 8.75 11.101 8.75 14C8.75 14.803 8.945 15.556 9.267 16.237"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.237 9.267C16.237 9.267 16.25 9.09 16.25 9C16.25 4.996 13.004 1.75 9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 13.004 4.996 16.25 9 16.25C9.09 16.25 9.267 16.237 9.267 16.237C10.249 15.845 11.893 15.045 13.468 13.469C15.043 11.894 15.844 10.25 16.236 9.268L16.237 9.267Z"
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

export default Sticker;
