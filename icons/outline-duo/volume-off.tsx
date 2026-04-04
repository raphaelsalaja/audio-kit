import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function VolumeOff({
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
          d="M13.75 5.14289V2.664C13.75 2.269 13.313 2.03 12.98 2.243L7.5 5.75H3.75C2.922 5.75 2.25 6.422 2.25 7.25V10.75C2.25 11.578 2.922 12.25 3.75 12.25H6.37966L13.75 5.14289Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.98 15.758L8.89116 12.9498L13.2268 8.7726L13.75 9.08476V15.337C13.75 15.732 13.313 15.971 12.98 15.758Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M13.75 5.143V2.664C13.75 2.269 13.313 2.03 12.98 2.243L7.5 5.751H3.75C2.922 5.751 2.25 6.423 2.25 7.251V10.751C2.25 11.579 2.922 12.251 3.75 12.251H6.38"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M2.75 15.75L16.75 2.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M9.42419 13.4815L12.981 15.758C13.314 15.971 13.751 15.732 13.751 15.337V9.3092"
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

export default VolumeOff;
