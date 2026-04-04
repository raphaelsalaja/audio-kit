import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PaperPlane4Link({
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
          d="m11.5,12.5c-.5523,0-1,.4477-1,1v1c0,.5523.4477,1,1,1h.5c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-.5c-1.3807,0-2.5-1.1193-2.5-2.5v-1c0-1.3807,1.1193-2.5,2.5-2.5h.5c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-.5Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m14.25,11.75c0-.4142.3358-.75.75-.75h.5c1.3807,0,2.5,1.1193,2.5,2.5v1c0,1.3807-1.1193,2.5-2.5,2.5h-.5c-.4142,0-.75-.3358-.75-.75s.3358-.75.75-.75h.5c.5523,0,1-.4477,1-1v-1c0-.5523-.4477-1-1-1h-.5c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m11.5,14c0-.4142.3358-.75.75-.75h2.5c.4142,0,.75.3358.75.75s-.3358.75-.75.75h-2.5c-.4142,0-.75-.3358-.75-.75Z"
          fill={fill}
          fillRule="evenodd"
          strokeWidth="0"
        />
        <path
          d="m14.8171,7.8765c.4546.2365.6821.68.6824,1.1236.0001.1706-.0334.3412-.1005.5h-.6485c-.4625,0-.8925.1396-1.25.3789-.3575-.2393-.7875-.3789-1.25-.3789h-.75c-2.2091,0-4,1.7909-4,4v.4231l-4.1491,2.1544c-.9896.5141-2.1165-.4107-1.798-1.4836l1.6578-5.5939L1.5534,3.4062c-.3157-1.0694.8053-1.9993,1.7978-1.4837l11.4659,5.9539Z"
          fill={secondaryfill}
          opacity=".4"
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default PaperPlane4Link;
