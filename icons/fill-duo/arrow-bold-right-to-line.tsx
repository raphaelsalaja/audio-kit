import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowBoldRightToLine({
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
          d="M16.25 3C15.836 3 15.5 3.336 15.5 3.75V14.25C15.5 14.664 15.836 15 16.25 15C16.664 15 17 14.664 17 14.25V3.75C17 3.336 16.664 3 16.25 3Z"
          fill={fill}
        />
        <path
          d="M13.539 7.988L7.983 3.967C7.602 3.691 7.102 3.652 6.681 3.866C6.261 4.08 5.99899 4.507 5.99899 4.979V6.5H2.75C1.785 6.5 1 7.285 1 8.25V9.75C1 10.715 1.785 11.5 2.75 11.5H6V13.021C6 13.493 6.261 13.919 6.681 14.134C6.862 14.226 7.056 14.271 7.25 14.271C7.508 14.271 7.76399 14.191 7.98199 14.033L13.538 10.012C13.862 9.778 14.055 9.399 14.055 8.999C14.055 8.599 13.861 8.221 13.538 7.987L13.539 7.988Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default ArrowBoldRightToLine;
