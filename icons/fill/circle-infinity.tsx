import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleInfinity({
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
          d="m6.4502,8c-.5239,0-.9502.4487-.9502,1s.4263,1,.9502,1c.5098,0,1.0156-.4409,1.5386-1-.5229-.5591-1.0288-1-1.5386-1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m11.5498,8c-.5098,0-1.0156.4409-1.5386,1,.5229.5591,1.0288,1,1.5386,1,.5239,0,.9502-.4487.9502-1s-.4263-1-.9502-1Z"
          fill={fill}
          strokeWidth="0"
        />
        <path
          d="m9,1C4.5889,1,1,4.5889,1,9s3.5889,8,8,8,8-3.5889,8-8S13.4111,1,9,1Zm2.5498,10.5c-1.0417,0-1.8472-.6553-2.5498-1.3899-.7026.7346-1.5081,1.3899-2.5498,1.3899-1.3511,0-2.4502-1.1216-2.4502-2.5s1.0991-2.5,2.4502-2.5c1.0417,0,1.8472.6553,2.5498,1.3899.7026-.7346,1.5081-1.3899,2.5498-1.3899,1.3511,0,2.4502,1.1216,2.4502,2.5s-1.0991,2.5-2.4502,2.5Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default CircleInfinity;
