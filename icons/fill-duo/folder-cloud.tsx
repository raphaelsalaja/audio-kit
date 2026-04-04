import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function FolderCloud({
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
          d="M4.25 2C2.73079 2 1.5 3.23079 1.5 4.75V6.5H16.5V6.25C16.5 4.73079 15.2692 3.5 13.75 3.5H8.72395L8.34569 3.02827C7.82347 2.37825 7.03552 2 6.201 2H4.25Z"
          fill={fill}
        />
        <path
          d="M11.3471 13.0046C11.9051 11.8246 13.099 11 14.5 11C16.433 11 18 12.5671 18 14.5C18 16.4329 16.433 18 14.5 18H11.5C10.1193 18 9 16.8807 9 15.5C9 14.1706 10.0376 13.0836 11.3471 13.0046Z"
          fill={fill}
          fillRule="evenodd"
        />
        <path
          d="M16.5 6.5H1.5V13.25C1.5 14.7692 2.73079 16 4.25 16H7.53095C7.51052 15.8362 7.5 15.6693 7.5 15.5C7.5 13.6717 8.72597 12.1306 10.4013 11.653C11.2959 10.3609 12.7873 9.5 14.5 9.5C15.2111 9.5 15.8875 9.64845 16.5 9.91605V6.5Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default FolderCloud;
