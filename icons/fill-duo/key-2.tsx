import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Key2({
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
          d="M2 12C2 9.7909 3.79077 8 6 8C8.20923 8 10 9.7909 10 12C10 14.2091 8.20923 16 6 16C3.79077 16 2 14.2091 2 12Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M15.7803 3.28033C16.0732 2.98744 16.0732 2.51256 15.7803 2.21967C15.4875 1.92678 15.0126 1.92678 14.7197 2.21967L8.24823 8.69111C8.66491 8.97478 9.02523 9.33509 9.30889 9.75178L12 7.06066L13.4697 8.53033C13.7626 8.82322 14.2374 8.82322 14.5303 8.53033C14.8232 8.23743 14.8232 7.76256 14.5303 7.46967L13.0607 6L14 5.06065L15.4697 6.53033C15.7626 6.82322 16.2375 6.82322 16.5304 6.53033C16.8232 6.23744 16.8232 5.76256 16.5304 5.46967L15.0607 3.99999L15.7803 3.28033Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Key2;
