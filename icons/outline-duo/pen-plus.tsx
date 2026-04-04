import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function PenPlus({
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
          d="M3.25 15.75C3.25 15.75 6.849 15.182 7.796 14.235C8.743 13.288 15.123 6.908 15.123 6.908C15.96 6.071 15.96 4.714 15.123 3.878C14.286 3.041 12.929 3.041 12.093 3.878C12.093 3.878 5.713 10.258 4.766 11.205C3.819 12.152 3.251 15.751 3.251 15.751L3.25 15.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M3.25 15.75C3.25 15.75 6.849 15.182 7.796 14.235C8.743 13.288 15.123 6.908 15.123 6.908C15.96 6.071 15.96 4.714 15.123 3.878C14.286 3.041 12.929 3.041 12.093 3.878C12.093 3.878 5.713 10.258 4.766 11.205C3.819 12.152 3.251 15.751 3.251 15.751L3.25 15.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M4.25 1.75V6.75"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M6.75 4.25H1.75"
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

export default PenPlus;
