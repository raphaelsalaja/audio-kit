import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function NumberInput({
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
          d="M11.9009 6.29971C11.443 6.90822 11.3729 7.72185 11.7129 8.39798C11.8298 8.63031 11.9885 8.83349 12.1774 9C11.9885 9.1665 11.8298 9.36968 11.7129 9.602L11.7098 9.60836C11.375 10.2818 11.4449 11.0909 11.899 11.6977L13.0632 13.25H3.75C2.64543 13.25 1.75 12.3546 1.75 11.25V6.75C1.75 5.64543 2.64543 4.75 3.75 4.75H13.0632L11.9009 6.29971ZM13.1 7.20099C12.986 7.35199 12.968 7.55499 13.053 7.72399C13.0769 7.77153 13.1078 7.81416 13.144 7.85088C13.1078 7.81416 13.0769 7.77152 13.053 7.72399C12.968 7.55499 12.986 7.35199 13.1 7.20099ZM13.0719 10.2418C13.0652 10.2529 13.0589 10.2643 13.053 10.276C12.969 10.445 12.987 10.648 13.1 10.799C12.987 10.648 12.969 10.445 13.053 10.276C13.0589 10.2643 13.0652 10.2529 13.0719 10.2418Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M6.74997 11V7C6.74997 7 6.29197 7.806 5.31897 7.992"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.25H3.75C2.645 13.25 1.75 12.355 1.75 11.25V6.75C1.75 5.645 2.645 4.75 3.75 4.75H11.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 7.99999H16.5C16.689 7.99999 16.862 7.89299 16.947 7.72399C17.031 7.55499 17.013 7.35199 16.9 7.20099L15.4 5.20099C15.212 4.94899 14.789 4.94899 14.6 5.20099L13.1 7.20099C12.986 7.35199 12.968 7.55499 13.053 7.72399C13.138 7.89299 13.311 7.99999 13.5 7.99999Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M16.5 10H13.5C13.311 10 13.138 10.107 13.053 10.276C12.969 10.445 12.987 10.648 13.1 10.799L14.6 12.799C14.694 12.925 14.843 12.999 15 12.999C15.157 12.999 15.306 12.925 15.4 12.799L16.9 10.799C17.014 10.648 17.032 10.445 16.947 10.276C16.862 10.107 16.689 10 16.5 10Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default NumberInput;
