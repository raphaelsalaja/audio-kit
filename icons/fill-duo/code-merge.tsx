import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CodeMerge({
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
          d="M5.5 5.25C5.5 4.83579 5.16421 4.5 4.75 4.5C4.33579 4.5 4 4.83579 4 5.25V6.25V16.25C4 16.6642 4.33579 17 4.75 17C5.16421 17 5.5 16.6642 5.5 16.25V10.5808C6.7818 12.2064 8.76895 13.25 11 13.25H12.6131C13.0273 13.25 13.3631 12.9142 13.3631 12.5C13.3631 12.0858 13.0273 11.75 12.6131 11.75H11C7.96221 11.75 5.5 9.28779 5.5 6.25V5.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.75 6C6.13071 6 7.25 4.88071 7.25 3.5C7.25 2.11929 6.13071 1 4.75 1C3.36929 1 2.25 2.11929 2.25 3.5C2.25 4.88071 3.36929 6 4.75 6Z"
          fill={fill}
        />
        <path
          d="M13.75 15C15.1307 15 16.25 13.8807 16.25 12.5C16.25 11.1193 15.1307 10 13.75 10C12.3693 10 11.25 11.1193 11.25 12.5C11.25 13.8807 12.3693 15 13.75 15Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default CodeMerge;
