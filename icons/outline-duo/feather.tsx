import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Feather({
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
          d="m15.183,2.7433c-7.0051.4749-10.4978,6.0355-11.3685,8.7564.6849.5117,2.7655,1.4067,5.6085.8927,2.8429-.514,3.5521-2.6443,3.5513-3.6452,2.1538-1.3244,1.1104-3.3711,2.2087-6.0039Z"
          fill={secondaryfill}
          opacity=".3"
          strokeWidth="0"
        />
        <path
          d="m2.75,15.25S4.062,3.729,15.25,2.75c-.56.976-.573,2.605-.946,4.239-.524,2.011-2.335,2.261-4.554,2.261"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m12.974,8.731c-.4527,3.525-3.4373,4.0684-6.5358,3.5928"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
      </g>
    </svg>
  );
}

export default Feather;
