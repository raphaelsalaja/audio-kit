import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FaceSinging({
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
          d="M10 5.25101C10 4.20331 10.4296 3.25621 11.1221 2.57561C11.2042 2.49491 10.9335 2.16511 10.7028 2.09161C10.0081 1.87041 9.268 1.75101 8.5 1.75101C4.4959 1.75101 1.25 4.99701 1.25 9.00101C1.25 13.005 4.4959 16.251 8.5 16.251C12.5041 16.251 15.75 13.005 15.75 9.00101C15.75 8.81101 15.5191 8.56021 15.4098 8.61431C14.9094 8.86161 14.346 9.00101 13.75 9.00101C11.6789 9.00101 10 7.32201 10 5.25101ZM10.75 12.251C10.75 13.079 10.0784 13.751 9.25 13.751C8.4216 13.751 7.75 13.079 7.75 12.251C7.75 11.422 8.4216 10.751 9.25 10.751C10.0784 10.751 10.75 11.422 10.75 12.251Z"
          fill={secondaryfill}
          fillRule="evenodd"
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M5.5 10.0006C6.052 10.0006 6.5 9.55291 6.5 9.00061C6.5 8.44831 6.052 8.00061 5.5 8.00061C4.948 8.00061 4.5 8.44831 4.5 9.00061C4.5 9.55291 4.948 10.0006 5.5 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.5 10.0006C12.052 10.0006 12.5 9.55291 12.5 9.00061C12.5 8.44831 12.052 8.00061 11.5 8.00061C10.948 8.00061 10.5 8.44831 10.5 9.00061C10.5 9.55291 10.948 10.0006 11.5 10.0006Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M9.25 13.7506C10.078 13.7506 10.75 13.079 10.75 12.2506C10.75 11.4222 10.078 10.7506 9.25 10.7506C8.422 10.7506 7.75 11.4222 7.75 12.2506C7.75 13.079 8.422 13.7506 9.25 13.7506Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13.75 6.75061C14.578 6.75061 15.25 6.07901 15.25 5.25061C15.25 4.42221 14.578 3.75061 13.75 3.75061C12.922 3.75061 12.25 4.42221 12.25 5.25061C12.25 6.07901 12.922 6.75061 13.75 6.75061Z"
          fill={secondaryfill}
          opacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 6.75061C14.578 6.75061 15.25 6.07901 15.25 5.25061C15.25 4.42221 14.578 3.75061 13.75 3.75061C12.922 3.75061 12.25 4.42221 12.25 5.25061C12.25 6.07901 12.922 6.75061 13.75 6.75061Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.5993 2.06531C9.9342 1.86411 9.2309 1.75061 8.5 1.75061C4.496 1.75061 1.25 4.99671 1.25 9.00061C1.25 13.0045 4.496 16.2506 8.5 16.2506C12.415 16.2506 15.5968 13.1451 15.7367 9.26431"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 5.25061V0.75061C15.25 0.75061 15.896 1.64661 17.25 2.25061"
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

export default FaceSinging;
