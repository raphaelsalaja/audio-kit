import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hand3({
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
          d="m10.25,7.75V2.5c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m7.75,3.75c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v4"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.75,9.25V3.75c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m5.249,5.25c0-.69-.564-1.25-1.25-1.25s-1.25.56-1.25,1.25v5.4844c0,3.3202,2.6964,6.0092,6.0166,6l1.001-.0028c3.3072-.0092,5.9834-2.6928,5.9834-6v-3.9816s-1,0-1,0c-1.1046,0-2,.8954-2,2v1.5c-1.5727,0-2.8627,1.2101-2.9897,2.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Hand3;
