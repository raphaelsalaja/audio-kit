import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function Orange({
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
          d="M9 4C5.40979 4 2.5 6.90979 2.5 10.5C2.5 14.0902 5.40979 17 9 17C12.5902 17 15.5 14.0902 15.5 10.5C15.5 6.90979 12.5902 4 9 4Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
        <path
          d="M11.5 0C11.776 0 12 0.224 12 0.5C12 1.88 10.88 3 9.5 3C9.224 3 9 2.776 9 2.5C9 1.12 10.12 0 11.5 0Z"
          fill={fill}
        />
        <path
          d="M9 14C9.414 14 9.75 13.664 9.75 13.25C9.75 12.836 9.414 12.5 9 12.5C8.586 12.5 8.25 12.836 8.25 13.25C8.25 13.664 8.586 14 9 14Z"
          fill={fill}
        />
        <path
          d="M11.25 12.5C11.664 12.5 12 12.164 12 11.75C12 11.336 11.664 11 11.25 11C10.836 11 10.5 11.336 10.5 11.75C10.5 12.164 10.836 12.5 11.25 12.5Z"
          fill={fill}
        />
        <path
          d="M6.75 12.5C7.164 12.5 7.5 12.164 7.5 11.75C7.5 11.336 7.164 11 6.75 11C6.336 11 6 11.336 6 11.75C6 12.164 6.336 12.5 6.75 12.5Z"
          fill={fill}
        />
      </g>
    </svg>
  );
}

export default Orange;
