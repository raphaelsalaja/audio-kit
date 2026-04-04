import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function ClipboardUser({
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
          d="M11.75 2.75V4.15258H6.33568V2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M6.25 2.75H5.25C4.145 2.75 3.25 3.645 3.25 4.75V14.25C3.25 15.355 4.145 16.25 5.25 16.25H12.75C13.855 16.25 14.75 15.355 14.75 14.25V4.75C14.75 3.645 13.855 2.75 12.75 2.75H11.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M10.75 1.25H7.25C6.698 1.25 6.25 1.6977 6.25 2.25V3.25C6.25 3.8023 6.698 4.25 7.25 4.25H10.75C11.302 4.25 11.75 3.8023 11.75 3.25V2.25C11.75 1.6977 11.302 1.25 10.75 1.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 9C9.82843 9 10.5 8.32843 10.5 7.5C10.5 6.67157 9.82843 6 9 6C8.17157 6 7.5 6.67157 7.5 7.5C7.5 8.32843 8.17157 9 9 9Z"
          fill={fill}
          stroke="none"
        />
        <path
          d="M11.1011 14H6.899C6.4923 14 6.10852 13.8013 5.87172 13.4683C5.63932 13.1407 5.57871 12.7207 5.70961 12.3453C6.19791 10.943 7.5201 10.0001 9.0001 10.0001C10.4801 10.0001 11.8023 10.943 12.2911 12.3458C12.4215 12.7208 12.3609 13.1407 12.1285 13.4684C11.8917 13.8014 11.5078 14 11.1011 14Z"
          fill={fill}
          stroke="none"
        />
      </g>
    </svg>
  );
}

export default ClipboardUser;
