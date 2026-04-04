import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function CircleMusicNote({
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
          d="M1 9C1 4.58169 4.58169 1 9 1C13.4183 1 17 4.58169 17 9C17 13.4183 13.4183 17 9 17C4.58169 17 1 13.4183 1 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M8.96624 4.30575C9.24822 4.19049 9.5719 4.25724 9.78528 4.47466C10.0741 4.76898 10.4499 5.10468 10.9227 5.42744C11.3322 5.70681 11.7226 5.91428 12.0594 6.06678C12.4367 6.23764 12.6041 6.68204 12.4332 7.05937C12.2623 7.4367 11.8179 7.60407 11.4406 7.43321C11.0354 7.24973 10.5675 7.00097 10.0771 6.66641C10.0512 6.64869 10.0255 6.63094 10 6.61317V10.75C10 11.1642 9.66421 11.5 9.25 11.5C8.83579 11.5 8.5 11.1642 8.5 10.75V4.99999C8.5 4.69537 8.68426 4.421 8.96624 4.30575Z"
          fill={fill}
        />
        <path
          d="M5.5 10.75C5.5 9.50739 6.50739 8.5 7.75 8.5C8.99261 8.5 10 9.50739 10 10.75C10 11.9926 8.99261 13 7.75 13C6.50739 13 5.5 11.9926 5.5 10.75Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default CircleMusicNote;
