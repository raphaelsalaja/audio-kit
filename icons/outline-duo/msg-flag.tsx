import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MsgFlag({
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
          d="M16.75 10.75H13.25C12.9739 10.75 12.75 10.974 12.75 11.25V13.25C12.75 13.526 12.9739 13.75 13.25 13.75H16.75C17.0261 13.75 17.25 13.526 17.25 13.25V11.25C17.25 10.974 17.0261 10.75 16.75 10.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          stroke="none"
        />
        <path
          d="M9 1.75C4.996 1.75 1.75 4.996 1.75 9C1.75 10.319 2.108 11.552 2.723 12.617C3.153 13.423 2.67 15.329 1.75 16.25C3 16.318 4.647 15.753 5.383 15.277C5.872 15.559 6.647 15.933 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.51426 16.25 9.99647 16.1957 10.4805 16.0938L10.5 13.25V11.25C10.5 9.73122 11.7312 8.5 13.25 8.5H16.148C16.2021 8.45681 16.2318 8.38942 16.226 8.32044C15.9159 4.60351 12.7983 1.75 9 1.75Z"
          fill={secondaryfill}
          fillOpacity="0.3"
          fillRule="evenodd"
          stroke="none"
        />
        <path
          d="M12.75 17.25V13.25"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.75 10.75H13.25C12.9739 10.75 12.75 10.974 12.75 11.25V13.25C12.75 13.526 12.9739 13.75 13.25 13.75H16.75C17.0261 13.75 17.25 13.526 17.25 13.25V11.25C17.25 10.974 17.0261 10.75 16.75 10.75Z"
          fill="none"
          stroke={fill}
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={strokewidth}
        />
        <path
          d="M16.1357 7.75C15.543 4.3423 12.5773 1.75 9 1.75C4.996 1.75 1.75 4.9961 1.75 9C1.75 10.3188 2.108 11.552 2.723 12.6169C3.153 13.4228 2.67 15.3291 1.75 16.25C3 16.3179 4.647 15.7529 5.383 15.2769C5.872 15.5591 6.647 15.9331 7.662 16.125C8.095 16.207 8.543 16.25 9 16.25C9.2542 16.25 9.5032 16.2307 9.75 16.2031"
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

export default MsgFlag;
