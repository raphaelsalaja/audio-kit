import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Hearts({
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
          d="m14.6972,8.7668c.8641-.9841,1.5528-2.239,1.5528-3.7559.006-1.5139-1.217-2.7471-2.733-2.7561-.912.0122-1.76.4712-2.267,1.229-.507-.7578-1.355-1.2168-2.267-1.229-1.1996.0078-2.2067.783-2.5742,1.8562"
          fill="none"
          stroke={secondaryfill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="m6.414,15.663c.212.111.46.111.672,0,1.121-.585,4.664-2.705,4.664-6.152.006-1.514-1.217-2.747-2.733-2.756-.912.012-1.76.471-2.267,1.229-.507-.757-1.355-1.217-2.267-1.229-1.516.009-2.739,1.242-2.733,2.756,0,3.447,3.542,5.567,4.664,6.152Z"
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

export default Hearts;
