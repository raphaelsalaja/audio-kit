import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function AlignDistributeHorizontal({
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
          d="M2.75 1C3.16421 1 3.5 1.33579 3.5 1.75V16.25C3.5 16.6642 3.16421 17 2.75 17C2.33579 17 2 16.6642 2 16.25V1.75C2 1.33579 2.33579 1 2.75 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M15.25 1C15.6642 1 16 1.33579 16 1.75V16.25C16 16.6642 15.6642 17 15.25 17C14.8358 17 14.5 16.6642 14.5 16.25V1.75C14.5 1.33579 14.8358 1 15.25 1Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M6.5 4.75C6.5 3.78349 7.28349 3 8.25 3H9.75C10.7165 3 11.5 3.78349 11.5 4.75V13.25C11.5 14.2165 10.7165 15 9.75 15H8.25C7.28349 15 6.5 14.2165 6.5 13.25V4.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default AlignDistributeHorizontal;
