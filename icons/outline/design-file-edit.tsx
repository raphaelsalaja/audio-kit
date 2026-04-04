import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DesignFileEdit({
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
          d="M10.5 10C11.605 10 12.5 9.105 12.5 8C12.5 6.895 11.605 6 10.5 6C9.395 6 8.5 6.895 8.5 8C8.5 9.105 9.395 10 10.5 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.60001 10H5.89999C5.40299 10 5 10.403 5 10.9V12.6C5 13.097 5.40299 13.5 5.89999 13.5H7.60001C8.09701 13.5 8.5 13.097 8.5 12.6V10.9C8.5 10.403 8.09701 10 7.60001 10Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M7.40199 7.64801C7.52599 7.43101 7.525 7.16199 7.399 6.94699L6.069 4.667C5.818 4.237 5.10999 4.239 4.86099 4.667L3.531 6.94602C3.405 7.16202 3.403 7.43001 3.528 7.64801C3.652 7.86501 3.88499 8 4.13499 8H6.794C7.044 8 7.27799 7.86501 7.40199 7.64801Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M14.25 8.26682V6.664C14.25 6.3989 14.145 6.145 13.957 5.957L10.043 2.04291C9.856 1.85491 9.601 1.74991 9.336 1.74991H3.75C2.645 1.74991 1.75 2.64491 1.75 3.74991V14.2499C1.75 15.3549 2.645 16.2499 3.75 16.2499H8.16521"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.7959 16.4542L16.9571 13.293C17.3476 12.9025 17.3476 12.2693 16.9571 11.8788L16.3713 11.293C15.9808 10.9025 15.3476 10.9025 14.9571 11.293L11.7959 14.4542L11.0001 17.2501L13.7959 16.4542Z"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default DesignFileEdit;
