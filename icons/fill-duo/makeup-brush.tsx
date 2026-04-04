import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MakeupBrush({
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
          d="M7.61579 7.44911L10.5509 10.3842L8.3265 16.2653C8.21618 16.557 7.93686 16.75 7.625 16.75C4.10379 16.75 1.25 13.8962 1.25 10.375C1.25 10.0631 1.44298 9.78382 1.73467 9.6735L7.61579 7.44911Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M4.55857 15.9656C4.11396 15.7213 3.70167 15.4254 3.32971 15.0861L3.791 14.5035C3.81769 14.4697 3.84669 14.4389 3.87759 14.4111L6.16269 11.5336C6.42028 11.2092 6.89206 11.1551 7.21643 11.4127C7.54081 11.6703 7.59495 12.142 7.33735 12.4664L4.55857 15.9656Z"
          fill={fill}
        />
        <path
          d="M16.069 1.92103C15.279 1.13303 13.903 1.13203 13.112 1.92103L7.61578 7.44911L10.5509 10.3842L16.07 4.87803C16.885 4.06303 16.884 2.73703 16.069 1.92103Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default MakeupBrush;
