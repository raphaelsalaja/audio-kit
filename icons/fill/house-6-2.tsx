import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House62({
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
          d="m11.25,4.548c-.128,0-.257-.033-.376-.102L6,1.617,1.126,4.446c-.356.208-.817.086-1.025-.272-.208-.358-.086-.817.272-1.025L5.624.102c.232-.136.521-.136.753,0l5.25,3.048c.358.208.48.667.272,1.025-.139.24-.391.374-.649.374Z"
          fill={secondaryfill}
          strokeWidth="0"
        />
        <path
          d="m6,3.352L1,6.254v3.496c0,.965.785,1.75,1.75,1.75h2.5v-2.25c0-.414.336-.75.75-.75s.75.336.75.75v2.25h2.5c.965,0,1.75-.785,1.75-1.75v-3.496l-5-2.903Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default House62;
