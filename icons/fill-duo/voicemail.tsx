import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Voicemail({
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
          d="M3 12.25C3 11.8358 3.33579 11.5 3.75 11.5H14.25C14.6642 11.5 15 11.8358 15 12.25C15 12.6642 14.6642 13 14.25 13H3.75C3.33579 13 3 12.6642 3 12.25Z"
          fill={secondaryfill}
          fillOpacity="0.4"
          fillRule="evenodd"
        />
        <path
          d="M0 9C0 6.79079 1.79079 5 4 5C6.20921 5 8 6.79079 8 9C8 11.2092 6.20921 13 4 13C1.79079 13 0 11.2092 0 9ZM4 6.5C2.61921 6.5 1.5 7.61921 1.5 9C1.5 10.3808 2.61921 11.5 4 11.5C5.38079 11.5 6.5 10.3808 6.5 9C6.5 7.61921 5.38079 6.5 4 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M10 9C10 6.79079 11.7908 5 14 5C16.2092 5 18 6.79079 18 9C18 11.2092 16.2092 13 14 13C11.7908 13 10 11.2092 10 9ZM14 6.5C12.6192 6.5 11.5 7.61921 11.5 9C11.5 10.3808 12.6192 11.5 14 11.5C15.3808 11.5 16.5 10.3808 16.5 9C16.5 7.61921 15.3808 6.5 14 6.5Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default Voicemail;
