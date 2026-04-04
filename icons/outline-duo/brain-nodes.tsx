import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function BrainNodes({
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
          d="M6.5 2.25C7.743 2.25 8.75 3.257 8.75 4.5V6.98053C7.50736 6.98053 6.60437 7.75736 6.60437 9C6.60437 10.2426 7.50736 11.0182 8.75 11.0182V13.5C8.75 14.743 7.743 15.75 6.5 15.75C5.257 15.75 4.25 14.743 4.25 13.5C4.25 13.407 4.26634 13.3175 4.27734 13.2275C3.27934 13.1145 2.5 12.278 2.5 11.25C2.5 10.516 2.90026 9.8812 3.48926 9.5332C2.61326 9.1452 2 8.27 2 7.25C2 5.945 3.00234 4.88646 4.27734 4.77246C4.26634 4.68246 4.25 4.593 4.25 4.5C4.25 3.257 5.257 2.25 6.5 2.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 10.5C15.578 10.5 16.25 9.8284 16.25 9C16.25 8.1716 15.578 7.5 14.75 7.5C13.922 7.5 13.25 8.1716 13.25 9C13.25 9.8284 13.922 10.5 14.75 10.5Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 15.75C13.828 15.75 14.5 15.0784 14.5 14.25C14.5 13.4216 13.828 12.75 13 12.75C12.172 12.75 11.5 13.4216 11.5 14.25C11.5 15.0784 12.172 15.75 13 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13 5.25C13.828 5.25 14.5 4.5784 14.5 3.75C14.5 2.9216 13.828 2.25 13 2.25C12.172 2.25 11.5 2.9216 11.5 3.75C11.5 4.5784 12.172 5.25 13 5.25Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M14.75 10.5C15.578 10.5 16.25 9.8284 16.25 9C16.25 8.1716 15.578 7.5 14.75 7.5C13.922 7.5 13.25 8.1716 13.25 9C13.25 9.8284 13.922 10.5 14.75 10.5Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 15.75C13.828 15.75 14.5 15.0784 14.5 14.25C14.5 13.4216 13.828 12.75 13 12.75C12.172 12.75 11.5 13.4216 11.5 14.25C11.5 15.0784 12.172 15.75 13 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 9H13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.94 13.19L10.793 12.043C10.605 11.855 10.351 11.75 10.086 11.75H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M13 5.25C13.828 5.25 14.5 4.5784 14.5 3.75C14.5 2.9216 13.828 2.25 13 2.25C12.172 2.25 11.5 2.9216 11.5 3.75C11.5 4.5784 12.172 5.25 13 5.25Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M11.94 4.81L10.793 5.957C10.605 6.145 10.351 6.25 10.086 6.25H8.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M5.25 9.75H4.5C4.139 9.75 3.79499 9.673 3.48499 9.536"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M8.75 6.25V4.5C8.75 3.257 7.743 2.25 6.5 2.25C5.257 2.25 4.25 3.257 4.25 4.5C4.25 4.593 4.26601 4.682 4.27701 4.772C3.00201 4.886 2 5.945 2 7.25C2 8.27 2.61301 9.145 3.48901 9.533C2.90001 9.881 2.5 10.516 2.5 11.25C2.5 12.278 3.27901 13.115 4.27701 13.228C4.26601 13.318 4.25 13.407 4.25 13.5C4.25 14.743 5.257 15.75 6.5 15.75C7.743 15.75 8.75 14.743 8.75 13.5V11.75"
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

export default BrainNodes;
