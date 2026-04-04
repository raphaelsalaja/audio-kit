import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Upload3({
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
          d="M13.75 6.5H4.25C2.733 6.5 1.5 7.733 1.5 9.25V13.75C1.5 15.267 2.733 16.5 4.25 16.5H13.75C15.267 16.5 16.5 15.267 16.5 13.75V9.25C16.5 7.733 15.267 6.5 13.75 6.5Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.5303 3.71975L9.5303 0.71975C9.2373 0.42675 8.7627 0.42675 8.4698 0.71975L5.4698 3.71975C5.1768 4.01275 5.1768 4.48727 5.4698 4.78017C5.7628 5.07307 6.2374 5.07317 6.5303 4.78017L8.24999 3.06057V12.75C8.24999 13.1641 8.58589 13.5 8.99999 13.5C9.41409 13.5 9.74999 13.1641 9.74999 12.75V3.06057L11.4697 4.78017C11.6162 4.92667 11.8076 4.9999 12 4.9999C12.1924 4.9999 12.3838 4.92667 12.5303 4.78017C12.8233 4.48717 12.8233 4.01265 12.5303 3.71975Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Upload3;
