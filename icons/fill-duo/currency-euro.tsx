import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CurrencyEuro({
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
          d="M3 7.25C3 6.83579 3.33579 6.5 3.75 6.5H11.75C12.1642 6.5 12.5 6.83579 12.5 7.25C12.5 7.66421 12.1642 8 11.75 8H3.75C3.33579 8 3 7.66421 3 7.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3 10.75C3 10.3358 3.33579 10 3.75 10H10.5C10.9142 10 11.25 10.3358 11.25 10.75C11.25 11.1642 10.9142 11.5 10.5 11.5H3.75C3.33579 11.5 3 11.1642 3 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M7.73848 5.03433C6.98674 6.02339 6.5 7.42295 6.5 9C6.5 10.5771 6.98674 11.9766 7.73848 12.9657C8.48981 13.9542 9.47323 14.5 10.5 14.5C11.2224 14.5 11.9157 14.2323 12.5256 13.7341C12.8464 13.4721 13.3188 13.5198 13.5809 13.8406C13.8429 14.1614 13.7952 14.6338 13.4744 14.8959C12.6323 15.5837 11.6116 16 10.5 16C8.90377 16 7.51219 15.1468 6.54427 13.8733C5.57676 12.6004 5 10.8749 5 9C5 7.12505 5.57676 5.39961 6.54427 4.12667C7.51219 2.85318 8.90377 2 10.5 2C11.6116 2 12.6323 2.4163 13.4744 3.10414C13.7952 3.36617 13.8429 3.83865 13.5809 4.15945C13.3188 4.48025 12.8464 4.52789 12.5256 4.26586C11.9157 3.7677 11.2224 3.5 10.5 3.5C9.47323 3.5 8.48981 4.04582 7.73848 5.03433Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CurrencyEuro;
