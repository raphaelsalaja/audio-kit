import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Investment2({
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
          d="M8.99999 10.75V5.25C8.99999 3.041 7.20899 1.25 4.99999 1.25H3.74999C3.72499 2.762 4.47699 4.162 5.72899 4.9C7.21499 5.776 8.74299 5.33 8.99999 5.25"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 7.27C9 5.061 10.791 3.27 13 3.27H14.25C14.275 4.782 13.523 6.182 12.271 6.92C10.785 7.796 9 7.27 9 7.27Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 10.75H6.75C6.19772 10.75 5.75 11.1977 5.75 11.75V12.75C5.75 13.3023 6.19772 13.75 6.75 13.75H11.25C11.8023 13.75 12.25 13.3023 12.25 12.75V11.75C12.25 11.1977 11.8023 10.75 11.25 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M11.25 13.75H6.75C6.19772 13.75 5.75 14.1977 5.75 14.75V15.75C5.75 16.3023 6.19772 16.75 6.75 16.75H11.25C11.8023 16.75 12.25 16.3023 12.25 15.75V14.75C12.25 14.1977 11.8023 13.75 11.25 13.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M8.99999 10.75V5.25M8.99999 5.25C8.99999 3.041 7.20899 1.25 4.99999 1.25H3.74999C3.72499 2.762 4.47699 4.162 5.72899 4.9C7.21499 5.776 8.74299 5.33 8.99999 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9 7.27C9 5.061 10.791 3.27 13 3.27H14.25C14.275 4.782 13.523 6.182 12.271 6.92C10.785 7.796 9 7.27 9 7.27Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 10.75H6.75C6.19772 10.75 5.75 11.1977 5.75 11.75V12.75C5.75 13.3023 6.19772 13.75 6.75 13.75H11.25C11.8023 13.75 12.25 13.3023 12.25 12.75V11.75C12.25 11.1977 11.8023 10.75 11.25 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.25 13.75H6.75C6.19772 13.75 5.75 14.1977 5.75 14.75V15.75C5.75 16.3023 6.19772 16.75 6.75 16.75H11.25C11.8023 16.75 12.25 16.3023 12.25 15.75V14.75C12.25 14.1977 11.8023 13.75 11.25 13.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M3.5 15.75H2.75C2.198 15.75 1.75 15.302 1.75 14.75V13.75C1.75 13.198 2.198 12.75 2.75 12.75H3.5"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M14.5 15.75H15.25C15.802 15.75 16.25 15.302 16.25 14.75V13.75C16.25 13.198 15.802 12.75 15.25 12.75H14.5"
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

export default Investment2;
