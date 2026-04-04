import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextTool2({
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
          d="M1.75 11.25C2.16421 11.25 2.5 11.5858 2.5 12V12.75C2.5 13.4446 3.05799 14 3.75 14H14.25C14.942 14 15.5 13.4446 15.5 12.75V12C15.5 11.5858 15.8358 11.25 16.25 11.25C16.6642 11.25 17 11.5858 17 12V12.75C17 14.2754 15.768 15.5 14.25 15.5H3.75C2.23201 15.5 1 14.2754 1 12.75V12C1 11.5858 1.33579 11.25 1.75 11.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M3.75 4C3.05799 4 2.5 4.55544 2.5 5.25V6C2.5 6.41421 2.16421 6.75 1.75 6.75C1.33579 6.75 1 6.41421 1 6V5.25C1 3.72456 2.23201 2.5 3.75 2.5H14.25C15.768 2.5 17 3.72456 17 5.25V6C17 6.41421 16.6642 6.75 16.25 6.75C15.8358 6.75 15.5 6.41421 15.5 6V5.25C15.5 4.55544 14.942 4 14.25 4H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.93203 5C8.63003 5 8.35749 5.18114 8.24054 5.45958L5.51055 11.9596C5.35015 12.3415 5.52972 12.7811 5.91161 12.9415C6.29351 13.1019 6.73313 12.9223 6.89353 12.5404L7.3305 11.5H10.6695L11.1065 12.5404C11.2669 12.9223 11.7065 13.1019 12.0884 12.9415C12.4703 12.7811 12.6499 12.3415 12.4895 11.9596L9.75951 5.45958C9.64257 5.18114 9.37003 5 9.06803 5H8.93203ZM10.0396 10L9.00003 7.52492L7.9605 10H10.0396Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1.75 9.75C2.1642 9.75 2.5 9.41 2.5 9C2.5 8.59 2.1642 8.25 1.75 8.25C1.3358 8.25 1 8.59 1 9C1 9.41 1.3358 9.75 1.75 9.75Z"
          fill={fill}
        />
        <path
          d="M16.25 9.75C16.6642 9.75 17 9.41 17 9C17 8.59 16.6642 8.25 16.25 8.25C15.8358 8.25 15.5 8.59 15.5 9C15.5 9.41 15.8358 9.75 16.25 9.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default TextTool2;
