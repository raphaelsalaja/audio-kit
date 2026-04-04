import type { SVGProps } from "react";

type IconProps = SVGProps<SVGSVGElement> & {
  secondaryfill?: string;
  strokewidth?: number;
  title?: string;
};

function DiagramVenn({
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
          d="M5.5 9C5.5 6.5842 6.9378 4.5029 9 3.5527C8.2378 3.2014 7.3929 3 6.5 3C3.1914 3 0.5 5.6914 0.5 9C0.5 12.3086 3.1914 15 6.5 15C7.3929 15 8.2378 14.7986 9 14.4473C6.9378 13.4971 5.5 11.4158 5.5 9Z"
          fill={fill}
        />
        <path
          d="M11.5 3C10.6071 3 9.7622 3.2014 9 3.5527C11.0622 4.5029 12.5 6.5842 12.5 9C12.5 11.4158 11.0622 13.4971 9 14.4473C9.7622 14.7986 10.6071 15 11.5 15C14.8086 15 17.5 12.3086 17.5 9C17.5 5.6914 14.8086 3 11.5 3Z"
          fill={fill}
        />
        <path
          d="M12.5 9C12.5 6.5842 11.0622 4.5029 9 3.5527C6.9378 4.5029 5.5 6.5842 5.5 9C5.5 11.4158 6.9378 13.4971 9 14.4473C11.0622 13.4971 12.5 11.4158 12.5 9Z"
          fill={secondaryfill}
          fillOpacity="0.4"
        />
      </g>
    </svg>
  );
}

export default DiagramVenn;
