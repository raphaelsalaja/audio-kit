import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ShieldGlobe({
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
          d="M14.555 3.528L9.305 1.848C9.106 1.785 8.893 1.785 8.695 1.848L3.445 3.528C3.031 3.66 2.75 4.045 2.75 4.48V11C2.75 13.1754 5.65479 15.3448 6.23506 14.5223C6.08179 13.9575 6 13.3633 6 12.75C6 9.02208 9.02208 6 12.75 6C13.5418 6 14.3018 6.13634 15.0078 6.38684C15.393 6.52352 15.25 4.6885 15.25 4.48C15.25 4.046 14.969 3.661 14.555 3.528Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.75 17.25C13.778 17.25 14.612 15.2353 14.612 12.75C14.612 10.2647 13.778 8.25 12.75 8.25C11.722 8.25 10.888 10.2647 10.888 12.75C10.888 15.2353 11.722 17.25 12.75 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.25 12.75H17.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 17.25C15.235 17.25 17.25 15.2353 17.25 12.75C17.25 10.2647 15.235 8.25 12.75 8.25C10.265 8.25 8.25 10.2647 8.25 12.75C8.25 15.2353 10.265 17.25 12.75 17.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.6875V4.48C15.25 4.0449 14.969 3.6599 14.555 3.5281L9.30499 1.8479C9.10699 1.7849 8.894 1.7849 8.696 1.8479L3.44501 3.5281C3.03101 3.6612 2.75 4.0449 2.75 4.48V11C2.75 12.6187 4.0868 13.8606 5.524 14.7305"
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

export default ShieldGlobe;
