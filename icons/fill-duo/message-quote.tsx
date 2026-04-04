import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function MessageQuote({
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
          d="M3.75 1.5C2.23054 1.5 1 2.73203 1 4.25V11.25C1 12.768 2.23054 14 3.75 14H5V16.25C5 16.5383 5.16526 16.8011 5.42511 16.926C5.68496 17.0509 5.99339 17.0158 6.21852 16.8357L9.76309 14H14.25C15.7695 14 17 12.768 17 11.25V4.25C17 2.73203 15.7695 1.5 14.25 1.5H3.75Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M8.1231 4.97843C8.27309 5.36454 8.08169 5.79913 7.69558 5.94912C7.26988 6.1145 7.00407 6.32434 6.82672 6.62009C6.70462 6.82372 6.60328 7.10348 6.54726 7.50002H7.75C8.16421 7.50002 8.5 7.8358 8.5 8.25002V9.75002C8.5 10.1642 8.16421 10.5 7.75 10.5H5.75C5.33579 10.5 5 10.1642 5 9.75002V8.25002C5 7.27962 5.16024 6.48247 5.54028 5.8487C5.93093 5.1972 6.50212 4.80354 7.15242 4.55092C7.53852 4.40093 7.97311 4.59233 8.1231 4.97843Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M12.6231 4.97843C12.7731 5.36454 12.5817 5.79913 12.1956 5.94912C11.7699 6.1145 11.5041 6.32434 11.3267 6.62009C11.2046 6.82372 11.1033 7.10348 11.0473 7.50002H12.25C12.6642 7.50002 13 7.8358 13 8.25002V9.75002C13 10.1642 12.6642 10.5 12.25 10.5H10.25C9.83579 10.5 9.5 10.1642 9.5 9.75002V8.25002C9.5 7.27962 9.66024 6.48247 10.0403 5.8487C10.4309 5.1972 11.0021 4.80354 11.6524 4.55092C12.0385 4.40093 12.4731 4.59233 12.6231 4.97843Z"
          fill={fill}
          fillRule="evenodd"
        />
      </g>
    </svg>
  );
}

export default MessageQuote;
