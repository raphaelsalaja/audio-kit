import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function TextA({
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
          d="M8.6 2C8.29045 2 8.01271 2.19017 7.90076 2.47875L3.05176 14.9788C2.90196 15.3649 3.09357 15.7994 3.47975 15.9492C3.86592 16.099 4.30042 15.9074 4.45023 15.5212L5.62223 12.5H12.3798L13.5518 15.5212C13.7016 15.9074 14.1361 16.099 14.5223 15.9492C14.9084 15.7994 15.1001 15.3649 14.9502 14.9788L10.1012 2.47875C9.98928 2.19017 9.71154 2 9.402 2H8.6ZM11.7979 11L9.001 3.79004L6.20411 11H11.7979Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default TextA;
