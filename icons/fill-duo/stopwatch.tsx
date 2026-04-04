import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Stopwatch({
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
          d="M2 10C2 6.134 5.13377 3 9 3C12.8662 3 16 6.134 16 10C16 13.866 12.8662 17 9 17C5.13377 17 2 13.866 2 10Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M6.1717 7.17167C6.46459 6.87877 6.93946 6.87877 7.23236 7.17166L9.53036 9.46966C9.82325 9.76255 9.82325 10.2374 9.53036 10.5303C9.23746 10.8232 8.76259 10.8232 8.4697 10.5303L6.1717 8.23233C5.8788 7.93943 5.8788 7.46456 6.1717 7.17167Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M13.7197 2.21967C14.0126 1.92678 14.4874 1.92678 14.7803 2.21967L16.7803 4.21967C17.0732 4.51256 17.0732 4.98744 16.7803 5.28033C16.4874 5.57322 16.0126 5.57322 15.7197 5.28033L13.7197 3.28033C13.4268 2.98744 13.4268 2.51256 13.7197 2.21967Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.75 0.5C6.33579 0.5 6 0.835786 6 1.25C6 1.66421 6.33579 2 6.75 2H8.25V3.0397C8.4964 3.01346 8.74663 3 9 3C9.25337 3 9.5036 3.01346 9.75 3.0397V2H11.25C11.6642 2 12 1.66421 12 1.25C12 0.835786 11.6642 0.5 11.25 0.5H6.75Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Stopwatch;
