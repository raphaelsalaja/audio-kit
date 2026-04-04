import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Megaphone({
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
          d="M12.9283 15.1147L2.61 11.002C2.354 10.903 2.153 10.706 2.046 10.453C1.898 10.103 1.75 9.606 1.75 9C1.75 8.729 1.78 8.183 2.039 7.564C2.147 7.307 2.352 7.098 2.612 6.998C4.431 6.2935 6.107 5.61475 7.783 4.936C9.45567 4.2586 11.1283 3.5812 12.9432 2.8782C11.6913 3.46328 10.75 5.9818 10.75 9C10.75 12.0062 11.6839 14.5167 12.9283 15.1147Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M3.75 11.457V14.161C3.75 14.571 4 14.939 4.381 15.09L6.326 15.863C6.726 16.022 7.182 15.907 7.46 15.579L9.126 13.6"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.5 15.25C15.0188 15.25 16.25 12.4518 16.25 9C16.25 5.54822 15.0188 2.75 13.5 2.75C11.9812 2.75 10.75 5.54822 10.75 9C10.75 12.4518 11.9812 15.25 13.5 15.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.954 15.125L2.61 11.002C2.354 10.903 2.153 10.706 2.046 10.453C1.898 10.103 1.75 9.606 1.75 9C1.75 8.729 1.78 8.183 2.039 7.564C2.147 7.307 2.352 7.098 2.612 6.998C6.25 5.589 9.316 4.283 12.954 2.874"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 9C14.5 8.172 13.828 7.5 13 7.5C12.947 7.5 12.897 7.51 12.845 7.516C12.787 7.968 12.75 8.461 12.75 9C12.75 9.539 12.787 10.032 12.845 10.484C12.897 10.489 12.947 10.5 13 10.5C13.828 10.5 14.5 9.828 14.5 9Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default Megaphone;
