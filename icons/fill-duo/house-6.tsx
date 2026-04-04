import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function House6({
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
          d="M15.999 7.75C15.843 7.75 15.685 7.701 15.55 7.6L9.00001 2.688L2.45001 7.6C2.11901 7.85 1.64701 7.781 1.40001 7.45C1.15101 7.118 1.21801 6.648 1.54901 6.4L8.55001 1.15C8.81801 0.95 9.18301 0.95 9.45001 1.15L16.45 6.4C16.781 6.649 16.848 7.119 16.599 7.45C16.453 7.646 16.228 7.75 15.999 7.75Z"
          fill={fill}
        />
        <path
          d="M14.649 8.80001L9 4.56201L3.351 8.80001C3.24 8.88301 3.122 8.95201 3 9.01301V14.25C3 15.767 4.233 17 5.75 17H8.25V13.25C8.25 12.836 8.586 12.5 9 12.5C9.414 12.5 9.75 12.836 9.75 13.25V17H12.25C13.767 17 15 15.767 15 14.25V9.01301C14.878 8.95201 14.76 8.88301 14.649 8.80001Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default House6;
