import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ChartActivity22({
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
          d="m7.5,11c-.318,0-.602-.2-.707-.5l-2.272-6.438-.809,2.426c-.102.306-.389.513-.711.513H.75c-.414,0-.75-.336-.75-.75s.336-.75.75-.75h1.709l1.329-3.987c.101-.304.384-.51.705-.513h.006c.318,0,.602.2.707.5l2.272,6.438.809-2.426c.102-.306.389-.513.711-.513h2.25c.414,0,.75.336.75.75s-.336.75-.75.75h-1.709l-1.329,3.987c-.101.304-.384.51-.705.513h-.006Z"
          fill={fill}
          strokeWidth="0"
        />
      </g>
    </svg>
  );
}

export default ChartActivity22;
