import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VrHeadset2({
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
          d="M9 5.481C10.837 5.481 12.541 5.584 14.091 5.745C15.038 5.843 15.75 6.647 15.75 7.599V9.903V12.207C15.75 13.159 15.038 13.962 14.091 14.061C13.079 14.166 12.253 14.236 11.115 14.279C10.511 14.302 10.041 12.462 9 12.462C7.959 12.462 7.489 14.302 6.885 14.279C5.747 14.236 4.921 14.166 3.909 14.061C2.962 13.963 2.25 13.159 2.25 12.207V7.598C2.25 6.646 2.962 5.843 3.909 5.744C5.459 5.583 7.163 5.481 9 5.481Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.457 6.594L13.704 3.824C13.379 3.311 12.839 2.964 12.235 2.906C11.245 2.81 10.163 2.75 8.99999 2.75C8.01999 2.75 6.93799 2.793 5.77299 2.905C5.16599 2.964 4.61999 3.312 4.29399 3.828L2.62399 6.472"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 5.481C10.837 5.481 12.541 5.584 14.091 5.745C15.038 5.843 15.75 6.647 15.75 7.599V9.903V12.207C15.75 13.159 15.038 13.962 14.091 14.061C13.079 14.166 12.253 14.236 11.115 14.279C10.511 14.302 10.041 12.462 9 12.462C7.959 12.462 7.489 14.302 6.885 14.279C5.747 14.236 4.921 14.166 3.909 14.061C2.962 13.963 2.25 13.159 2.25 12.207V7.598C2.25 6.646 2.962 5.843 3.909 5.744C5.459 5.583 7.163 5.481 9 5.481Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6 8.077C6.999 8.013 8.003 7.981 9 7.981C9.997 7.981 11.001 8.013 12 8.077"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.25 8.75H1.25V11.25H2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.75 8.75H16.75V11.25H15.75"
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

export default VrHeadset2;
