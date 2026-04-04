import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FacePlus({
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
          d="M11.251 11.758C10.779 12.504 9.94698 13 9.00098 13C8.05498 13 7.22298 12.504 6.75098 11.758"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.00098 10C6.55298 10 7.00098 9.5523 7.00098 9C7.00098 8.4477 6.55298 8 6.00098 8C5.44898 8 5.00098 8.4477 5.00098 9C5.00098 9.5523 5.44898 10 6.00098 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M12.001 10C12.553 10 13.001 9.5523 13.001 9C13.001 8.4477 12.553 8 12.001 8C11.449 8 11.001 8.4477 11.001 9C11.001 9.5523 11.449 10 12.001 10Z"
          fill={secondaryfill}
          stroke="none"
        />
        <path
          d="M14.751 1.25V6.25"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M17.251 3.75H12.251"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.95866 1.8155C9.64536 1.7729 9.32598 1.75 9.00098 1.75C4.99698 1.75 1.75098 4.996 1.75098 9C1.75098 13.004 4.99698 16.25 9.00098 16.25C13.005 16.25 16.251 13.004 16.251 9C16.251 8.9496 16.2505 8.8992 16.2494 8.849"
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

export default FacePlus;
