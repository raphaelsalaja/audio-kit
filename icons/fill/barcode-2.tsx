import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Barcode2({
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
      viewBox="0 0 12 12"
      xmlns="http://www.w3.org/2000/svg"
    >
      <title>{title}</title>
      <g fill={fill}>
        <path
          d="m1.25,11c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m3.75,7c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6.25,11c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.75,7c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v4.5c0,.414-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m11.25,11c-.414,0-.75-.336-.75-.75V1.75c0-.414.336-.75.75-.75s.75.336.75.75v8.5c0,.414-.336.75-.75.75Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Barcode2;
