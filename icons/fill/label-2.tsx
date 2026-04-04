import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Label2({
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
          d="m14.096,4.9995h-.001l-3.92-3.5471c-.67-.605-1.679-.605-2.348,0l-3.921,3.5471c-.575.521-.905,1.2639-.905,2.0398v7.2107c0,1.5171,1.233,2.75,2.75,2.75h6.5c1.517,0,2.75-1.2329,2.75-2.75v-7.2107c0-.7749-.33-1.5188-.905-2.0398Zm-5.096.5005c.689,0,1.25.561,1.25,1.25s-.561,1.25-1.25,1.25-1.25-.561-1.25-1.25.561-1.25,1.25-1.25Zm2.25,8.5h-4.5c-.414,0-.75-.3359-.75-.75s.336-.75.75-.75h4.5c.414,0,.75.3359.75.75s-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Label2;
