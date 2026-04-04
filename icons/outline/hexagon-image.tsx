import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function HexagonImage({
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
          d="M4.687,14.064l5.149-5.15c.781-.781,2.047-.781,2.828,0l2.301,2.301"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.527,15.25h4.946c.713,0,1.372-.38,1.73-.997l2.465-4.25c.36-.621,.36-1.386,0-2.007l-2.465-4.25c-.358-.617-1.017-.997-1.73-.997H6.527c-.713,0-1.372,.38-1.73,.997L2.332,7.997c-.36,.621-.36,1.386,0,2.007l2.465,4.25c.358,.617,1.017,.997,1.73,.997Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <circle
          cx="6.75"
          cy="7.25"
          fill={secondaryfill}
          r="1.25"
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default HexagonImage;
