import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Flask2({
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
          d="m10.837,9.279l-2.837-4.257V1h-4v4.023l-2.837,4.257c-.359.538-.392,1.226-.087,1.796.305.57.896.924,1.543.924h6.763c.647,0,1.238-.354,1.543-.924.305-.57.271-1.259-.087-1.796Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m8.75,1.5H3.25c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h5.5c.414,0,.75.336.75.75s-.336.75-.75.75Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Flask2;
