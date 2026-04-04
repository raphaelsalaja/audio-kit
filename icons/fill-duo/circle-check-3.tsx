import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleCheck3({
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
          d="M9.00012 17C13.4184 17 17.0001 13.4183 17.0001 9C17.0001 4.58172 13.4184 1 9.00012 1C4.58184 1 1.00012 4.58172 1.00012 9C1.00012 13.4183 4.58184 17 9.00012 17Z"
          fill={secondaryfill}
          opacity="0.4"
        />
        <path
          d="M7.59971 12.7119H7.59681C7.31651 12.7109 7.06072 12.5537 6.93272 12.3047C6.35852 11.1875 5.71592 10.2793 4.96882 9.5293C4.67582 9.2354 4.67781 8.76071 4.97081 8.46831C5.26471 8.17681 5.73942 8.17731 6.03132 8.47071C6.60552 9.04741 7.12211 9.69871 7.59581 10.4434C8.83511 8.39801 10.3302 6.71731 12.0528 5.43711C12.3848 5.19001 12.8565 5.25941 13.1016 5.59191C13.3487 5.92391 13.2803 6.39411 12.9473 6.64121C11.0899 8.02251 9.51371 9.9298 8.26371 12.3106C8.13381 12.5577 7.87811 12.7119 7.59971 12.7119Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CircleCheck3;
