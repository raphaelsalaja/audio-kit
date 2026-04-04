import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Copyright({
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
          d="M9,1C4.589,1,1,4.589,1,9s3.589,8,8,8,8-3.589,8-8S13.411,1,9,1Zm0,11c1.111,0,2.127-.61,2.65-1.592,.195-.366,.649-.503,1.015-.31,.366,.195,.504,.649,.31,1.015-.784,1.473-2.307,2.387-3.974,2.387-2.481,0-4.5-2.019-4.5-4.5s2.019-4.5,4.5-4.5c1.667,0,3.19,.915,3.974,2.387,.194,.366,.056,.82-.31,1.015-.366,.193-.82,.056-1.015-.31-.523-.982-1.539-1.592-2.65-1.592-1.654,0-3,1.346-3,3s1.346,3,3,3Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Copyright;
