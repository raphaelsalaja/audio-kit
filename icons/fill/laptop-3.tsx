import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Laptop3({
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
          d="m16.7627,12.5127l-1.7627-4.4072V3.25c0-1.2407-1.0098-2.25-2.25-2.25h-7.5c-1.2402,0-2.25,1.0093-2.25,2.25v4.8555l-1.7627,4.4072c-.3584.8975-.249,1.9106.292,2.7104.542.7993,1.4424,1.2769,2.4082,1.2769h10.125c.9658,0,1.8662-.4775,2.4082-1.2769.541-.7998.6504-1.813.292-2.7104ZM4.5,3.25c0-.4136.3369-.75.75-.75h7.5c.4131,0,.75.3364.75.75v4.75H4.5V3.25Zm-.5,11.25c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Zm.6667-4c0-.5522.4477-1,1-1s1,.4478,1,1-.4478,1-1,1-1-.4478-1-1Zm2.6666,4c-.5522,0-1-.4478-1-1s.4478-1,1-1,1,.4478,1,1-.4477,1-1,1Zm.6667-4c0-.5522.4477-1,1-1s1,.4478,1,1-.4477,1-1,1-1-.4478-1-1Zm2.6667,4c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4478,1-1,1Zm.6666-4c0-.5522.4478-1,1-1s1,.4478,1,1-.4477,1-1,1-1-.4478-1-1Zm2.6667,4c-.5523,0-1-.4478-1-1s.4477-1,1-1,1,.4478,1,1-.4477,1-1,1Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default Laptop3;
