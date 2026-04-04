import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Sword({
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
          d="M16.5303 1.46967C16.7077 1.647 16.7846 1.90123 16.7354 2.14715L15.8137 6.75396C15.7259 7.19596 15.4714 7.58489 15.1051 7.84305L8.68164 12.3633C8.38344 12.5732 7.97752 12.5382 7.71968 12.2803L5.71968 10.2803C5.46184 10.0225 5.42681 9.61657 5.63666 9.31837L10.1567 2.89537C10.4147 2.52917 10.8035 2.27432 11.2454 2.18647L15.8529 1.26457C16.0988 1.21537 16.353 1.29233 16.5303 1.46967Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M5.28033 7.71967C4.98744 7.42678 4.51256 7.42678 4.21967 7.71967C3.92678 8.01256 3.92678 8.48744 4.21967 8.78033L5.18934 9.75L2.75 12.1893L2.53033 11.9697C2.23744 11.6768 1.76256 11.6768 1.46967 11.9697C1.17678 12.2626 1.17678 12.7374 1.46967 13.0303L4.2194 15.7801L4.96967 16.5303C5.26256 16.8232 5.73744 16.8232 6.03033 16.5303C6.32322 16.2374 6.32322 15.7626 6.03033 15.4697L5.81066 15.25L8.25 12.8107L9.21967 13.7803C9.51256 14.0732 9.98744 14.0732 10.2803 13.7803C10.5732 13.4874 10.5732 13.0126 10.2803 12.7197L5.28033 7.71967Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Sword;
