import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Potion({
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
          d="M10.75 1C11.1642 1 11.5 1.33579 11.5 1.75V5.56732C13.5566 6.51316 15 8.57575 15 11C15 14.3132 12.3132 17 9 17C5.68679 17 3 14.3132 3 11C3 8.57689 4.44323 6.51337 6.5 5.56813V1.75C6.5 1.33579 6.83579 1 7.25 1H10.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M7.25 9.5C7.664 9.5 8 9.1642 8 8.75C8 8.3358 7.664 8 7.25 8C6.836 8 6.5 8.3358 6.5 8.75C6.5 9.1642 6.836 9.5 7.25 9.5Z"
          fill={fill}
        />
        <path
          d="M14.8134 12.4903C14.1505 15.0828 11.7988 17 9 17C5.68679 17 3 14.3132 3 11C3 10.4961 3.06241 10.0078 3.17976 9.54184L3.80402 10.241C5.12902 11.68 7.28802 12.004 8.98102 11C10.688 9.988 12.868 10.325 14.19 11.794L14.8134 12.4903Z"
          fill={fill}
        />
        <path
          d="M5 1.75C5 1.33579 5.33579 1 5.75 1H12.25C12.6642 1 13 1.33579 13 1.75C13 2.16421 12.6642 2.5 12.25 2.5H5.75C5.33579 2.5 5 2.16421 5 1.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Potion;
