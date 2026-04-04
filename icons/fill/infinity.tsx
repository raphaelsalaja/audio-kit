import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function _InfinityIcon({
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
          d="M0.5 9C0.5 6.82459 2.19058 5 4.35 5C5.53619 5 6.53615 5.55662 7.38491 6.25838C7.70414 6.52233 7.74896 6.99508 7.48502 7.31431C7.22108 7.63354 6.74832 7.67836 6.42909 7.41442C5.70965 6.81958 5.04121 6.5 4.35 6.5C3.08502 6.5 2 7.58541 2 9C2 10.4146 3.08502 11.5 4.35 11.5C5.01577 11.5 5.66045 11.2039 6.35072 10.6496C7.13832 10.0171 7.79769 9.23568 8.46 8.47818C9.15276 7.68583 9.89947 6.83178 10.7101 6.18084C11.5375 5.51639 12.5074 5 13.65 5C15.8094 5 17.5 6.82459 17.5 9C17.5 11.1754 15.8094 13 13.65 13C12.4638 13 11.4638 12.4434 10.6151 11.7416C10.2958 11.4776 10.2511 11.0049 10.515 10.6857C10.779 10.3664 11.2517 10.3217 11.5709 10.5856C12.2902 11.1804 12.9588 11.5 13.65 11.5C14.915 11.5 16 10.4146 16 9C16 7.58541 14.915 6.5 13.65 6.5C12.9842 6.5 12.3395 6.79611 11.6493 7.35041C10.8617 7.98287 10.2023 8.76432 9.54 9.52182C8.84724 10.3142 8.10053 11.1682 7.28992 11.8192C6.46249 12.4836 5.49258 13 4.35 13C2.19058 13 0.5 11.1754 0.5 9Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Infinity;
