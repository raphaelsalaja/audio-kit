import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Circuits({
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
          d="M6.25 5.25C7.07843 5.25 7.75 4.57843 7.75 3.75C7.75 2.92157 7.07843 2.25 6.25 2.25C5.42157 2.25 4.75 2.92157 4.75 3.75C4.75 4.57843 5.42157 5.25 6.25 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M2.75 11.75C3.57843 11.75 4.25 11.0784 4.25 10.25C4.25 9.42157 3.57843 8.75 2.75 8.75C1.92157 8.75 1.25 9.42157 1.25 10.25C1.25 11.0784 1.92157 11.75 2.75 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M15.25 11.75C16.0784 11.75 16.75 11.0784 16.75 10.25C16.75 9.42157 16.0784 8.75 15.25 8.75C14.4216 8.75 13.75 9.42157 13.75 10.25C13.75 11.0784 14.4216 11.75 15.25 11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.75 5.25C12.5784 5.25 13.25 4.57843 13.25 3.75C13.25 2.92157 12.5784 2.25 11.75 2.25C10.9216 2.25 10.25 2.92157 10.25 3.75C10.25 4.57843 10.9216 5.25 11.75 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 5.25V7.836C6.25 8.101 6.355 8.356 6.543 8.543L7.457 9.457C7.645 9.645 7.75 9.899 7.75 10.164V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.81097 11.311L4.95697 12.457C5.14497 12.645 5.24997 12.899 5.24997 13.164V15.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.25 5.25C7.07843 5.25 7.75 4.57843 7.75 3.75C7.75 2.92157 7.07843 2.25 6.25 2.25C5.42157 2.25 4.75 2.92157 4.75 3.75C4.75 4.57843 5.42157 5.25 6.25 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 11.75C3.57843 11.75 4.25 11.0784 4.25 10.25C4.25 9.42157 3.57843 8.75 2.75 8.75C1.92157 8.75 1.25 9.42157 1.25 10.25C1.25 11.0784 1.92157 11.75 2.75 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M12.75 15.75V13.164C12.75 12.899 12.855 12.644 13.043 12.457L14.189 11.311"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M15.25 11.75C16.0784 11.75 16.75 11.0784 16.75 10.25C16.75 9.42157 16.0784 8.75 15.25 8.75C14.4216 8.75 13.75 9.42157 13.75 10.25C13.75 11.0784 14.4216 11.75 15.25 11.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.25 15.75V10.164C10.25 9.899 10.355 9.644 10.543 9.457L11.457 8.543C11.645 8.355 11.75 8.101 11.75 7.836V5.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.75 5.25C12.5784 5.25 13.25 4.57843 13.25 3.75C13.25 2.92157 12.5784 2.25 11.75 2.25C10.9216 2.25 10.25 2.92157 10.25 3.75C10.25 4.57843 10.9216 5.25 11.75 5.25Z"
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

export default Circuits;
