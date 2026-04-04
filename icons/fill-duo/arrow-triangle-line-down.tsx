import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ArrowTriangleLineDown({
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
          d="M9 11C8.586 11 8.25 10.664 8.25 10.25V2.25C8.25 1.836 8.586 1.5 9 1.5C9.414 1.5 9.75 1.836 9.75 2.25V10.25C9.75 10.664 9.414 11 9 11Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M12.058 9.5H5.942C5.479 9.5 5.055 9.754 4.838 10.164C4.621 10.573 4.647 11.066 4.907 11.451L7.965 15.968C8.198 16.312 8.585 16.517 9 16.517C9.415 16.517 9.802 16.311 10.035 15.968L13.093 11.451C13.353 11.067 13.379 10.574 13.162 10.164C12.945 9.754 12.521 9.5 12.058 9.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default ArrowTriangleLineDown;
