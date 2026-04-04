import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sunglasses({
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
          d="M8.21514 9.70431C5.735 8.86687 2.85138 9.35537 1.71959 9.70431C1.71512 10.0711 1.73032 11.0571 1.82695 12.0663C2.00142 14.0794 3.50453 14.227 4.00109 14.2405C4.49765 14.2539 5.10158 14.3344 5.92023 14.2002C7.43676 13.8915 7.87964 12.791 8.04068 11.6369C8.16952 10.7135 8.21067 9.96377 8.21514 9.70431Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9.75477 9.70431C12.2349 8.86687 15.1185 9.35537 16.2503 9.70431C16.2548 10.0711 16.2396 11.0571 16.143 12.0663C15.9685 14.0794 14.4654 14.227 13.9688 14.2405C13.4723 14.2539 12.8683 14.3344 12.0497 14.2002C10.5332 13.8915 10.0903 12.791 9.92923 11.6369C9.80039 10.7135 9.75924 9.96377 9.75477 9.70431Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M1.5 9.723L3.114 5.076C3.56 3.833 5.067 3.355 6.148 4.115"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 9.723L14.886 5.076C14.44 3.833 12.933 3.355 11.852 4.115"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.5 9.72299C15.731 9.52099 14.794 9.342 13.719 9.277C12.269 9.188 11.234 9.333 10.307 9.529C10.022 9.589 9.732 9.62399 9.44 9.62399H8.56C8.268 9.62399 7.978 9.589 7.693 9.529C6.766 9.333 5.731 9.189 4.281 9.277C3.207 9.343 2.269 9.52099 1.5 9.72299"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.24999 9.72299L8.04499 11.58C7.87699 13.1 7.21899 14.251 5.06299 14.251H4.09699C2.64499 14.251 1.91599 13.376 1.84799 12.077L1.74899 9.72399"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.75 9.72299L9.955 11.58C10.123 13.1 10.781 14.251 12.937 14.251H13.903C15.355 14.251 16.084 13.376 16.152 12.077L16.251 9.72399"
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

export default Sunglasses;
