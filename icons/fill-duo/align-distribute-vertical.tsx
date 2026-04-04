import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignDistributeVertical({
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
          d="M1 15.25C1 14.8358 1.33579 14.5 1.75 14.5H16.25C16.6642 14.5 17 14.8358 17 15.25C17 15.6642 16.6642 16 16.25 16H1.75C1.33579 16 1 15.6642 1 15.25Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M1 2.75C1 2.33579 1.33579 2 1.75 2H16.25C16.6642 2 17 2.33579 17 2.75C17 3.16421 16.6642 3.5 16.25 3.5H1.75C1.33579 3.5 1 3.16421 1 2.75Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M3 8.25C3 7.28349 3.78349 6.5 4.75 6.5H13.25C14.2165 6.5 15 7.28349 15 8.25V9.75C15 10.7165 14.2165 11.5 13.25 11.5H4.75C3.78349 11.5 3 10.7165 3 9.75V8.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignDistributeVertical;
