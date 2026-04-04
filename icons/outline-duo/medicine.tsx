import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Medicine({
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
          d="M7.3418 3.09807C8.4728 1.96707 10.3075 1.96707 11.4385 3.09807C12.032 3.69164 12.3101 4.47816 12.2793 5.2553V6.00042C12.1867 5.99618 12.0936 6.00042 12 6.00042C10.3433 6.00042 8.84359 6.67162 7.75781 7.75725L5.21973 5.21917L7.3418 3.09807Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M12 15.75C14.071 15.75 15.75 14.0711 15.75 12C15.75 9.9289 14.071 8.25 12 8.25C9.929 8.25 8.25 9.9289 8.25 12C8.25 14.0711 9.929 15.75 12 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M7.22949 7.2295L5.22 5.22"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.652 9.34799L9.34799 14.652"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12 15.75C14.071 15.75 15.75 14.0711 15.75 12C15.75 9.9289 14.071 8.25 12 8.25C9.929 8.25 8.25 9.9289 8.25 12C8.25 14.0711 9.929 15.75 12 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.279 5.25571C12.3099 4.47831 12.0318 3.69171 11.438 3.09801C10.307 1.96701 8.47301 1.96701 7.34201 3.09801L3.09801 7.34101C1.96701 8.47201 1.96701 10.306 3.09801 11.437C3.69191 12.0309 4.47831 12.3092 5.25571 12.278"
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

export default Medicine;
